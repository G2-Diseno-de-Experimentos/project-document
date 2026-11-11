// Export only result summaries. Raw Karate logs may contain local JWTs.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const target = path.join(path.resolve(process.argv[2] || ''), 'target');
const backendCommit = process.argv[3];
assert(/^[0-9a-f]{40}$/.test(backendCommit || ''), 'Indica el commit exacto del backend');
const found = {};
for (const name of fs.readdirSync(target).filter(n => /^karate-/.test(n))) {
  const file = path.join(target, name, 'karate-summary.html');
  if (!fs.existsSync(file)) continue;
  const raw = fs.readFileSync(file,'utf8');
  const data = JSON.parse(raw.match(/<script[^>]+id="karate-data"[^>]*>([\s\S]*?)<\/script>/)[1]);
  const s = data.summary;
  if (!s.scenario_count || s.scenario_skipped === s.scenario_count) continue;
  const features = data.features.map(feature => feature.name);
  const suite = name === 'karate-assets-real' ? 'Assets: Properties y Component Types'
    : name === 'karate-sdp-real' ? 'SDP: Requests, Schedules y Services'
    : features.includes('Components API') && features.includes('Technician inventory API')
      ? 'Assets: Components y Technician Inventory'
    : features.includes('Report photos API') && features.includes('Ratings API') && s.scenario_count === 4
      ? 'Monitoring: solo sin JWT' : null;
  if (!suite) continue;
  const reportTimeUtc = fs.statSync(file).mtime.toISOString();
  if (found[suite]?.reportTimeUtc >= reportTimeUtc) continue;
  found[suite] = { suite, reportTimeUtc, karateVersion:data.karateVersion,
    features:s.feature_count, scenarios:s.scenario_count, passed:s.scenario_passed,
    failed:s.scenario_failed, skipped:s.scenario_skipped };
}
assert.equal(Object.keys(found).length,4,'Faltan reportes HTTP de la corrida local');
const output = path.resolve(__dirname,'../assets/evidence/cap6/av2/karate-http.json');
fs.mkdirSync(path.dirname(output),{recursive:true});
fs.writeFileSync(output,JSON.stringify({backendCommit,environment:'Spring Boot + PostgreSQL 17.11 aislados. HTTP real.',
  suites:Object.values(found)},null,2)+'\n');
