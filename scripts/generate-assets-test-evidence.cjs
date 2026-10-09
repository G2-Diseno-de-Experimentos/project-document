// Render evidence from existing, completed Maven and Karate reports (does not run tests).
// Usage: NODE_PATH=<directory containing playwright> node scripts/generate-assets-test-evidence.cjs <backend-directory>
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { execFileSync } = require('node:child_process');
const { createHash } = require('node:crypto');
const { chromium } = require('playwright');

const backend = path.resolve(process.argv[2] || '../ElectroLink-Backend');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'assets/evidence/cap6/assets-parte1');
const images = path.join(root, 'assets/img/cap6');
const classes = [
  ['commandservices', 'PropertyCommandServiceImplTest'],
  ['queryservices', 'PropertyQueryServiceImplTest'],
  ['commandservices', 'ComponentTypeCommandServiceImplTest'],
  ['queryservices', 'ComponentTypeQueryServiceImplTest'],
];
const decode = value => value.replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const attrs = text => Object.fromEntries([...text.matchAll(/([\w.-]+)="([^"]*)"/g)].map(m => [m[1], decode(m[2])]));
const escape = text => String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const readJson = html => JSON.parse(html.match(/<script[^>]*id="karate-data"[^>]*>([\s\S]*?)<\/script>/)[1]);
const command = '.\\mvnw.cmd "-Dtest=PropertyCommandServiceImplTest,PropertyQueryServiceImplTest,ComponentTypeCommandServiceImplTest,ComponentTypeQueryServiceImplTest,AssetsKarateIT,AssetsCucumberIT" test';
const suites = classes.map(([folder, name]) => {
  const fqcn = `com.hampcoders.electrolink.assets.application.internal.${folder}.${name}`;
  const file = path.join(backend, 'target/surefire-reports', `TEST-${fqcn}.xml`);
  const xml = fs.readFileSync(file, 'utf8');
  const meta = attrs(xml.match(/<testsuite\s+([^>]+)>/)[1]);
  const source = fs.readFileSync(path.join(backend, 'src/test/java', ...fqcn.split('.')) + '.java', 'utf8');
  const names = Object.fromEntries([...source.matchAll(/@DisplayName\("([^"]*)"\)\s+void\s+(\w+)\(/g)].map(m => [m[2], m[1]]));
  const tests = [...xml.matchAll(/<testcase\s+([^>]+)(?:\/>|>([\s\S]*?)<\/testcase>)/g)].map(m => {
    const a = attrs(m[1]);
    const body = m[2] || '';
    return { method: a.name, label: names[a.name] || a.name, seconds: Number(a.time), status: /<(failure|error|skipped)\b/.test(body) ? 'not-passed' : 'passed' };
  });
  const result = { name, tests: Number(meta.tests), failures: Number(meta.failures), errors: Number(meta.errors), skipped: Number(meta.skipped), seconds: Number(meta.time), report_modified: fs.statSync(file).mtime.toISOString(), cases: tests };
  if (result.tests !== tests.length || result.failures || result.errors || result.skipped || tests.some(t => t.status !== 'passed')) throw new Error(`Unexpected or unsuccessful result: ${name}`);
  return result;
});
const karatePath = path.join(backend, 'target/karate-assets-real');
const karate = readJson(fs.readFileSync(path.join(karatePath, 'karate-summary.html'), 'utf8'));
if (karate.summary.scenario_count !== 13 || karate.summary.scenario_passed !== 13 || karate.summary.scenario_skipped !== 0) throw new Error('Karate must contain 13 executed, passing scenarios, not a dry run.');
const cucumberPath = path.join(backend, 'target/cucumber-assets');
const cucumber = JSON.parse(fs.readFileSync(path.join(cucumberPath, 'cucumber.json'), 'utf8'));
const bddCases = cucumber.flatMap(f => f.elements.filter(e => e.type === 'scenario').map(e => ({ feature: f.name, name: e.name, line: e.line, status: e.steps.every(s => s.result?.status === 'passed') && [...(e.before || []), ...(e.after || [])].every(s => s.result?.status === 'passed') ? 'passed' : 'not-passed' })));
if (bddCases.length !== 12 || bddCases.some(s => s.status !== 'passed')) throw new Error('Cucumber must contain 12 executed, passing cases.');
fs.mkdirSync(output, { recursive: true });
fs.mkdirSync(images, { recursive: true });
const git = args => execFileSync('git', args, { cwd: backend, encoding: 'utf8' }).trim();
const sourceFiles = ['pom.xml',
  'src/main/java/com/hampcoders/electrolink/assets/application/internal/commandservices/PropertyCommandServiceImpl.java',
  'src/main/java/com/hampcoders/electrolink/assets/interfaces/rest/PropertyCatalogRestExceptionHandler.java',
  'src/test/java/com/hampcoders/electrolink/assets/integration/AssetsKarateIT.java',
  'src/test/java/com/hampcoders/electrolink/assets/bdd/AssetsCucumberIT.java',
  'src/test/java/com/hampcoders/electrolink/assets/bdd/AssetsSteps.java',
  'src/test/java/com/hampcoders/electrolink/assets/testing/AssetsApiSupport.java',
  ...classes.map(([folder,name]) => `src/test/java/com/hampcoders/electrolink/assets/application/internal/${folder}/${name}.java`),
  ...['integration/properties.feature','integration/component-types.feature','bdd/properties-bdd.feature','bdd/component-types-bdd.feature'].map(f => 'src/test/resources/com/hampcoders/electrolink/assets/' + f)];
const provenance = { repository: 'ElectroLink-Backend', branch: git(['branch', '--show-current']), base_commit: git(['rev-parse', 'HEAD']), working_tree_modified: Boolean(git(['status', '--porcelain'])), source_sha256: Object.fromEntries(sourceFiles.map(f => [f, createHash('sha256').update(fs.readFileSync(path.join(backend,f))).digest('hex')])), backend_jar_sha256: createHash('sha256').update(fs.readFileSync(path.join(backend,'target/service-platform-parent-0.0.1-SNAPSHOT.jar'))).digest('hex'), command, scope: '19 isolated unit tests; 13 Karate scenarios and 12 Cucumber acceptance cases against real Spring Boot and PostgreSQL 17.11. Local isolated database, no HTTP mock.', backend_url: 'http://localhost:8091', database: 'electrolink_assets_tests (127.0.0.1:55432)', suites, karate_summary: karate.summary, cucumber_summary: { cases: bddCases.length, passed: bddCases.filter(c => c.status === 'passed').length, failed: 0, skipped: 0, scenarios: bddCases } };
fs.writeFileSync(path.join(output, 'results.json'), JSON.stringify(provenance, null, 2) + '\n');
for (const [folder, name] of classes) {
  const fqcn = `com.hampcoders.electrolink.assets.application.internal.${folder}.${name}`;
  fs.copyFileSync(path.join(backend, 'target/surefire-reports', `${fqcn}.txt`), path.join(output, `${name}.txt`));
}
for (const fqcn of ['com.hampcoders.electrolink.assets.integration.AssetsKarateIT','com.hampcoders.electrolink.assets.bdd.AssetsCucumberIT']) {
  fs.copyFileSync(path.join(backend,'target/surefire-reports',`${fqcn}.txt`),path.join(output,`${fqcn.split('.').at(-1)}.txt`));
}
fs.cpSync(karatePath, path.join(output, 'karate-reports'), { recursive: true });
fs.cpSync(cucumberPath, path.join(output, 'cucumber-reports'), { recursive: true });
// Remove live bearer credentials from exported evidence while preserving the original test results.
function sanitizeTree(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) sanitizeTree(file);
    else if (/\.(html|json|xml|txt|js|css)$/.test(entry.name)) {
      const content = fs.readFileSync(file, 'utf8');
      fs.writeFileSync(file, content.replace(/\beyJ[A-Za-z0-9_-]*\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b/g, '[JWT-REDACTED]').replace(/[\t ]+$/gm, ''));
    }
  }
}
sanitizeTree(path.join(output, 'karate-reports'));
sanitizeTree(path.join(output, 'cucumber-reports'));
fs.mkdirSync(path.join(output, 'features'), { recursive: true });
for (const file of sourceFiles.filter(f => f.endsWith('.feature'))) fs.copyFileSync(path.join(backend,file), path.join(output,'features',path.basename(file)));
const date = new Intl.DateTimeFormat('es-PE', { dateStyle: 'long', timeStyle: 'medium', timeZone: 'America/Lima' }).format(new Date(suites[0].report_modified));
const html = selected => `<!doctype html><html lang="es"><meta charset="utf-8"><title>ElectroLink — Evidencia unitaria Assets</title><style>
body{margin:0;background:#f3f6fa;color:#182a40;font:17px Arial,sans-serif}main{max-width:1190px;margin:30px auto;padding:30px;background:white;border:1px solid #d9e2eb;border-radius:12px}h1{font-size:28px;margin:8px 0}h2{font-size:20px;margin-top:26px}.tag{color:#186649;font-weight:bold}.muted{color:#55677c;font-size:15px;line-height:1.6}.stats{display:flex;gap:14px;margin:24px 0}.stat{flex:1;border:1px solid #d7e3db;border-radius:8px;padding:16px;background:#f4fbf7}.stat b{display:block;font-size:30px;color:#186649;margin-bottom:6px}table{border-collapse:collapse;width:100%;font-size:15px}th,td{padding:13px 10px;border-bottom:1px solid #dde5ee;text-align:left}th{background:#f0f4f9}td:first-child{max-width:850px;overflow-wrap:anywhere}small{display:block;color:#63758b;font:12px Consolas,monospace;margin-top:7px}code{font-family:Consolas,monospace}.note{margin-top:24px;background:#f0f4f9;padding:16px;border-left:4px solid #43719b;font-size:15px;line-height:1.6}.cmd{overflow-wrap:anywhere;font:12px Consolas,monospace;line-height:1.6;margin-top:18px}</style><main>
<div class="tag">ELECTROLINK · ASSETS · PARTE 1</div><h1>${selected.length === 1 ? escape(selected[0].name) : 'Resultados de pruebas unitarias'}</h1>
<div class="muted">Captura de un resumen generado a partir de los XML reales de Maven Surefire.<br>Ejecución: ${escape(date)} (America/Lima) · JUnit Jupiter + Mockito · Patrón AAA<br>Backend: ${escape(provenance.branch)} · commit <code>${escape(provenance.base_commit.slice(0, 12))}</code>${provenance.working_tree_modified ? ' + cambios locales' : ' (árbol de trabajo limpio)'} · SHA-256 registrados</div>
<div class="stats">${[['Ejecutadas', selected.reduce((n,s)=>n+s.tests,0)], ['Fallos',0], ['Errores',0], ['Omitidas',0]].map(([label,n])=>`<div class="stat"><b>${n}</b>${label}</div>`).join('')}</div>
${selected.length === 1 ? `<table><tr><th>Caso verificado</th><th>Resultado</th><th>Tiempo</th></tr>${selected[0].cases.map(t=>`<tr><td>${escape(t.label)}<small>${escape(t.method)}</small></td><td class="tag">PASÓ</td><td>${t.seconds.toFixed(3)} s</td></tr>`).join('')}</table>` : `<table><tr><th>Clase de prueba</th><th>Casos</th><th>Fallos</th><th>Errores</th></tr>${selected.map(s=>`<tr><td><code>${escape(s.name)}</code></td><td>${s.tests}</td><td>${s.failures}</td><td>${s.errors}</td></tr>`).join('')}</table>`}
<div class="note">Alcance unitario: servicios Command y Query de Properties y Component Types, con repositorios simulados. Delete de Property ahora verifica la llamada a delete, el retorno y que no se invoque save. Las suites Karate y Cucumber, separadas, comprueban HTTP y PostgreSQL reales.</div><div class="cmd">Comando de la ejecución registrada:<br>${escape(command)}</div></main></html>`;
fs.writeFileSync(path.join(output, 'unit-tests.html'), html(suites));
for (const suite of suites) fs.writeFileSync(path.join(output, `${suite.name}.html`), html([suite]));

(async () => {
  const browser = await chromium.launch({ headless: true, channel: process.env.EVIDENCE_BROWSER_CHANNEL || 'msedge' });
  try {
    const page = await browser.newPage({ viewport: { width: 1360, height: 920 }, deviceScaleFactor: 1 });
    for (const [name, filename] of [['AssetsUnitTestsSummary', 'unit-tests'], ...suites.map(s=>[s.name,s.name])]) {
      await page.goto(pathToFileURL(path.join(output, `${filename}.html`)).href);
      await page.screenshot({ path: path.join(images, `${name}.png`), fullPage: true });
    }
    for (const [name, relative] of [
      ['AssetsKarateSummary', 'karate-summary.html'],
      ['AssetsKarateProperties', 'feature-html/com.hampcoders.electrolink.assets.integration.properties.html'],
      ['AssetsKarateComponentTypes', 'feature-html/com.hampcoders.electrolink.assets.integration.component-types.html'],
    ]) {
      const errors = [];
      page.on('pageerror', e=>errors.push(e.message));
      await page.goto(pathToFileURL(path.join(output, 'karate-reports', relative)).href);
      await page.waitForFunction(() => document.querySelector('body')._x_dataStack && document.querySelector('body')._x_dataStack.length > 0);
      await page.evaluate(() => document.fonts.ready);
      if (errors.length) throw new Error(errors.join('\n'));
      await page.screenshot({ path: path.join(images, `${name}.png`), fullPage: true });
    }
    await page.goto(pathToFileURL(path.join(output,'cucumber-reports/cucumber.html')).href);
    await page.waitForSelector('body', { state: 'visible' });
    await page.waitForFunction(() => document.body.innerText.includes('12'));
    await page.screenshot({ path: path.join(images, 'AssetsCucumberSummary.png'), fullPage: true });
    for (const [name,file] of [['Properties','properties-bdd'],['ComponentTypes','component-types-bdd']]) {
      const heading = page.getByText(`classpath:com/hampcoders/electrolink/assets/bdd/${file}.feature`, { exact: true });
      await heading.click();
      await page.screenshot({ path: path.join(images, `AssetsCucumber${name}.png`), fullPage: true });
      await heading.click();
    }
  } finally { await browser.close(); }
  console.log('Evidence generated: 19 unit tests, 13 real Karate scenarios and 12 real Cucumber cases. JWTs redacted.');
})().catch(e=>{ console.error(e); process.exitCode=1; });
