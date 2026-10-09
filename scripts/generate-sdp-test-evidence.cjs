// Export completed Surefire and real local Karate results; never calls the API.
// Usage: NODE_PATH=<Playwright modules> node scripts/generate-sdp-test-evidence.cjs <backend-directory>
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { createHash } = require('node:crypto');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');
const backend = path.resolve(process.argv[2] || '../ElectroLink-Backend');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'assets/evidence/cap6/sdp-calin');
const images = path.join(root, 'assets/img/cap6');
const git = args => execFileSync('git', args, { cwd: backend, encoding: 'utf8' }).trim();
const hash = data => createHash('sha256').update(data).digest('hex');
const escape = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const decode = value => value.replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const attrs = text => Object.fromEntries([...text.matchAll(/([\w.-]+)="([^"]*)"/g)].map(m => [m[1], decode(m[2])]));
const classes = [
  ['commandservices', 'RequestCommandServiceImplTest'], ['queryservices', 'RequestQueryServiceImplTest'],
  ['commandservices', 'ScheduleCommandServiceImplTest'], ['queryservices', 'ScheduleQueryServiceImplTest'],
  ['commandservices', 'ServiceCommandServiceImplTest'], ['queryservices', 'ServiceQueryServiceImplTest'],
];
const command = '.\\mvnw.cmd "-Dtest=RequestCommandServiceImplTest,RequestQueryServiceImplTest,ScheduleCommandServiceImplTest,ScheduleQueryServiceImplTest,ServiceCommandServiceImplTest,ServiceQueryServiceImplTest,SdpKarateIT,SdpKarateTest,AssetsKarateTest" test';
const sourcePaths = [];
const suites = classes.map(([folder, name]) => {
  const fqcn = `com.hampcoders.electrolink.sdp.application.internal.${folder}.${name}`;
  const report = path.join(backend, 'target/surefire-reports', `TEST-${fqcn}.xml`);
  const xml = fs.readFileSync(report, 'utf8');
  const meta = attrs(xml.match(/<testsuite\s+([^>]+)>/)[1]);
  const sourcePath = `src/test/java/${fqcn.replaceAll('.', '/')}.java`;
  sourcePaths.push(sourcePath, sourcePath.replace(/^src\/test\//, 'src/main/').replace(/Test.java$/, '.java'));
  const source = fs.readFileSync(path.join(backend, sourcePath), 'utf8');
  const labels = Object.fromEntries([...source.matchAll(/@DisplayName\("([^"]*)"\)\s+void\s+(\w+)\(/g)].map(m => [m[2], m[1]]));
  const cases = [...xml.matchAll(/<testcase\s+([^>]+)(?:\/>|>([\s\S]*?)<\/testcase>)/g)].map(m => {
    const testcase = attrs(m[1]);
    return { name: testcase.name, label: labels[testcase.name] || testcase.name, seconds: Number(testcase.time), status: /<(failure|error|skipped)\b/.test(m[2] || '') ? 'not-passed' : 'passed' };
  });
  const suite = { name, tests: Number(meta.tests), failures: Number(meta.failures), errors: Number(meta.errors), skipped: Number(meta.skipped), report_modified: fs.statSync(report).mtime.toISOString(), surefire_xml_sha256: hash(xml), cases };
  if (suite.tests !== cases.length || suite.failures || suite.errors || suite.skipped || cases.some(c => c.status !== 'passed')) throw new Error(`Unsuccessful unit suite: ${name}`);
  return suite;
});
if (suites.reduce((n, s) => n + s.tests, 0) !== 20) throw new Error('Expected the 20 existing SDP unit tests.');
fs.mkdirSync(path.join(output, 'features'), { recursive: true });
fs.mkdirSync(images, { recursive: true });
const features = ['request', 'schedules', 'services'].map(name => {
  const relative = `src/test/java/com/hampcoders/electrolink/sdp/application/internal/${name}.feature`;
  const content = fs.readFileSync(path.join(backend, relative), 'utf8');
  const scenarios = [...content.matchAll(/^\s*Scenario:\s*(.+)$/gm)].map(m => m[1].trim());
  sourcePaths.push(relative);
  fs.copyFileSync(path.join(backend, relative), path.join(output, 'features', `${name}.feature`));
  return { file: relative, author_commit: git(['log', '-1', '--format=%H | %an | %s', '--', relative]), scenarios, review_status: 'executed_passed', adapted_in_working_tree: Boolean(git(['status', '--porcelain', '--', relative])), configured_backend: 'http://localhost:8091' };
});
sourcePaths.push('pom.xml', 'src/test/java/com/hampcoders/electrolink/sdp/integration/SdpApiSupport.java',
  'src/test/java/com/hampcoders/electrolink/sdp/integration/SdpKarateIT.java',
  'src/test/java/com/hampcoders/electrolink/assets/testing/AssetsApiSupport.java');
const karatePath = path.join(backend, 'target/karate-sdp-real');
const karateHtml = fs.readFileSync(path.join(karatePath, 'karate-summary.html'), 'utf8');
const karate = JSON.parse(karateHtml.match(/<script[^>]*id="karate-data"[^>]*>([\s\S]*?)<\/script>/)[1]);
if (karate.summary.scenario_count !== 9 || karate.summary.scenario_passed !== 9 || karate.summary.scenario_skipped !== 0) throw new Error('Expected 9 executed passing SDP scenarios, not dry run.');
const metadata = {
  repository: 'ElectroLink-Backend', branch: git(['branch', '--show-current']), commit: git(['rev-parse', 'HEAD']),
  working_tree_modified: Boolean(git(['status', '--porcelain'])), author_reviewed: 'Calin',
  backend_jar_sha256: hash(fs.readFileSync(path.join(backend, 'target/service-platform-parent-0.0.1-SNAPSHOT.jar'))),
  command, unit_tests: 20, failures: 0, errors: 0, skipped: 0, suites,
  source_sha256: Object.fromEntries(sourcePaths.map(file => [file, hash(fs.readFileSync(path.join(backend, file)))])),
  karate: { implemented_features: 3, implemented_scenarios: 9, execution_status: 'passed', backend_url: 'http://localhost:8091', database: 'electrolink_assets_tests (127.0.0.1:55432)', summary: karate.summary, features },
};
fs.writeFileSync(path.join(output, 'results.json'), JSON.stringify(metadata, null, 2) + '\n');
fs.copyFileSync(path.join(backend, 'target/surefire-reports/com.hampcoders.electrolink.sdp.integration.SdpKarateIT.txt'), path.join(output, 'SdpKarateIT.txt'));
fs.cpSync(karatePath, path.join(output, 'karate-reports'), { recursive: true });
function sanitizeTree(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) sanitizeTree(file);
    else if (/\.(html|json|xml|txt|js|css)$/.test(entry.name)) {
      const text = fs.readFileSync(file, 'utf8');
      fs.writeFileSync(file, text.replace(/\beyJ[A-Za-z0-9_-]*\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b/g, '[JWT-REDACTED]').replace(/[\t ]+$/gm, ''));
    }
  }
}
sanitizeTree(path.join(output, 'karate-reports'));
for (const [folder, name] of classes) fs.copyFileSync(path.join(backend, 'target/surefire-reports', `com.hampcoders.electrolink.sdp.application.internal.${folder}.${name}.txt`), path.join(output, `${name}.txt`));
const date = new Intl.DateTimeFormat('es-PE', { dateStyle: 'long', timeStyle: 'medium', timeZone: 'America/Lima' }).format(new Date(suites[0].report_modified));
const html = selected => `<!doctype html><html lang="es"><meta charset="utf-8"><title>ElectroLink — SDP Calin — evidencia unitaria</title><style>
body{margin:0;background:#f3f6fa;color:#182a40;font:16px Arial,sans-serif}main{max-width:1190px;margin:30px auto;padding:30px;background:white;border:1px solid #d9e2eb;border-radius:12px}h1{font-size:28px}.tag{color:#186649;font-weight:bold}.muted{color:#55677c;font-size:14px;line-height:1.6}.stats{display:flex;gap:14px;margin:24px 0}.stat{flex:1;border:1px solid #d7e3db;border-radius:8px;padding:16px;background:#f4fbf7}.stat b{display:block;font-size:30px;color:#186649;margin-bottom:6px}table{border-collapse:collapse;width:100%;font-size:14px}th,td{padding:13px 10px;border-bottom:1px solid #dde5ee;text-align:left}th{background:#f0f4f9}td{overflow-wrap:anywhere}small{display:block;color:#63758b;font:12px Consolas,monospace;margin-top:7px}.note{margin-top:24px;background:#f0f4f9;padding:16px;border-left:4px solid #43719b;font-size:14px;line-height:1.6}.cmd{overflow-wrap:anywhere;font:12px Consolas,monospace;line-height:1.6;margin-top:18px}</style><main>
<div class="tag">ELECTROLINK · SDP · PRUEBAS IMPLEMENTADAS POR CALIN</div><h1>${selected.length === 1 ? escape(selected[0].name) : 'Resultados de pruebas unitarias SDP'}</h1>
<div class="muted">Resumen elaborado a partir de los XML reales de Maven Surefire. No es una captura de IntelliJ.<br>Ejecución: ${escape(date)} (America/Lima) · JUnit Jupiter + Mockito · AAA<br>Backend: ${escape(metadata.branch)} · base ${escape(metadata.commit.slice(0, 12))}${metadata.working_tree_modified ? ' + cambios locales (SHA-256 registrados)' : ' (árbol limpio)'}</div>
<div class="stats">${[['Ejecutadas', selected.reduce((n,s)=>n+s.tests,0)],['Fallos',0],['Errores',0],['Omitidas',0]].map(([label,n])=>`<div class="stat"><b>${n}</b>${label}</div>`).join('')}</div>
<table>${selected.length === 1 ? `<tr><th>Caso verificado</th><th>Resultado</th><th>Tiempo</th></tr>${selected[0].cases.map(c=>`<tr><td>${escape(c.label)}<small>${escape(c.name)}</small></td><td class="tag">PASÓ</td><td>${c.seconds.toFixed(3)} s</td></tr>`).join('')}` : `<tr><th>Clase</th><th>Casos</th><th>Fallos</th><th>Errores</th></tr>${selected.map(s=>`<tr><td>${escape(s.name)}</td><td>${s.tests}</td><td>${s.failures}</td><td>${s.errors}</td></tr>`).join('')}`}</table>
<div class="note">Alcance: Command y Query de Requests, Schedules y Services; repositorios simulados con Mockito, sin base de datos. La suite independiente de Karate ejecutó 9 escenarios contra Spring Boot y PostgreSQL locales reales; sus features Gherkin se presentan también en 6.1.3.</div><div class="cmd">Comando registrado:<br>${escape(command)}</div></main></html>`;
fs.writeFileSync(path.join(output, 'unit-tests.html'), html(suites));
for (const suite of suites) fs.writeFileSync(path.join(output, `${suite.name}.html`), html([suite]));
(async () => {
  const browser = await chromium.launch({ headless: true, channel: process.env.EVIDENCE_BROWSER_CHANNEL || 'msedge' });
  try {
    const page = await browser.newPage({ viewport: { width: 1360, height: 920 }, deviceScaleFactor: 1 });
    for (const name of ['unit-tests', ...suites.map(s => s.name)]) {
      await page.goto(pathToFileURL(path.join(output, `${name}.html`)).href);
      await page.screenshot({ path: path.join(images, name === 'unit-tests' ? 'SdpCalinUnitTestsSummary.png' : `${name}.png`), fullPage: true });
    }
    for (const [name, relative] of [
      ['SdpKarateSummary', 'karate-summary.html'],
      ['SdpKarateRequests', 'feature-html/com.hampcoders.electrolink.sdp.application.internal.request.html'],
      ['SdpKarateSchedules', 'feature-html/com.hampcoders.electrolink.sdp.application.internal.schedules.html'],
      ['SdpKarateServices', 'feature-html/com.hampcoders.electrolink.sdp.application.internal.services.html'],
    ]) {
      await page.goto(pathToFileURL(path.join(output, 'karate-reports', relative)).href);
      await page.waitForFunction(() => document.querySelector('body')._x_dataStack?.length > 0);
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: path.join(images, name + '.png'), fullPage: true });
    }
  } finally { await browser.close(); }
  console.log('Evidence exported: 20 passing unit tests; 9 executed real local Karate scenarios. JWTs redacted.');
})().catch(error => { console.error(error); process.exitCode = 1; });
