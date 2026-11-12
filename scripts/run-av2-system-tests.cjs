// System tests for a disposable local Angular + Spring Boot + PostgreSQL stack.
// Install playwright separately; set NODE_PATH if it is outside this repository.
const assert = require('node:assert/strict');
const { createHash, randomBytes } = require('node:crypto');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { chromium } = require('playwright');

const dist = path.resolve(process.argv[2] || '');
const api = 'http://localhost:8091';
const web = 'http://127.0.0.1:4200';
const backendCommit = process.env.AV2_BACKEND_SHA;
const webCommit = process.env.AV2_WEB_SHA;
if (!process.argv[2] || !fs.existsSync(path.join(dist, 'index.html')) ||
    !/^[a-f0-9]{40}$/.test(backendCommit || '') || !/^[a-f0-9]{40}$/.test(webCommit || '') ||
    process.env.AV2_ISOLATED_DB !== '1') {
  throw new Error('Indica dist/browser, ambos commits y AV2_ISOLATED_DB=1 solo con una BD local desechable.');
}
const output = path.resolve(__dirname, '../assets/evidence/cap6/av2');
const screenshots = path.resolve(__dirname, '../assets/img/cap6/av2');
fs.mkdirSync(output, { recursive: true });
fs.mkdirSync(screenshots, { recursive: true });

const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css',
  '.json':'application/json', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg',
  '.webp':'image/webp', '.woff2':'font/woff2', '.ico':'image/x-icon' };
const server = http.createServer((req, res) => {
  const name = path.resolve(dist, '.' + decodeURIComponent(new URL(req.url, web).pathname));
  if (name !== dist && !name.startsWith(dist + path.sep)) { res.writeHead(403).end(); return; }
  const file = fs.existsSync(name) && fs.statSync(name).isFile() ? name : path.join(dist, 'index.html');
  res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});
const results = [];
const cleanup = [];
const expected = (response, code, label) => assert.equal(response.status, code, label);
async function call(method, route, body, token) {
  assert(route.startsWith('/api/v1/'), 'Ruta fuera de la API local');
  const headers = body ? { 'Content-Type': 'application/json' } : {};
  if (token) headers.Authorization = 'Bearer ' + token;
  const res = await fetch(api + route, {
    method, headers, body: body ? JSON.stringify(body) : undefined,
    redirect: 'error', signal: AbortSignal.timeout(15000)
  });
  return { status: res.status, data: (await res.text()).trim() };
}
async function register(username = 'av2-' + randomBytes(6).toString('hex') + '@example.test') {
  const password = randomBytes(20).toString('hex');
  expected(await call('POST', '/api/v1/authentication/sign-up',
    { username, password, roles:['ROLE_HOMEOWNER'] }), 201, 'Alta de cuenta sintética');
  return { username, password };
}
async function session(account) {
  const res = await call('POST','/api/v1/authentication/sign-in',account);
  expected(res, 200, 'Inicio de sesión para datos de preparación');
  const { id, token } = JSON.parse(res.data);
  assert(id && token, 'No se obtuvo la sesión de prueba');
  return { id, token };
}
function payload(ownerId, street) {
  return { ownerId:String(ownerId), region:'Callao', district:'Callao',
    address:{ street, number:'397', city:'Callao', postalCode:'00000', country:'Peru', latitude:0, longitude:0 } };
}
async function createProperty(owner, street) {
  const res = await call('POST', '/api/v1/properties', payload(owner.id,street), owner.token);
  expected(res,201,'Creación de propiedad sintética');
  const { id } = JSON.parse(res.data);
  assert(id, 'La propiedad creada no devolvió identificador');
  cleanup.push({ id, token:owner.token });
  return id;
}
async function run(id, name, action) {
  const start = Date.now();
  try { results.push({ id, name, status:'APROBADO', observed:await action(), milliseconds:Date.now()-start }); }
  catch (e) {
    // Do not serialize bodies, Playwright traces, credentials or request headers.
    const observed = e instanceof assert.AssertionError
      ? String(e.message).split('\n')[0].slice(0,180)
      : (e.name === 'TimeoutError' ? 'No se observó la condición esperada dentro del tiempo límite.' : 'Error de ejecución: ' + e.name);
    results.push({ id, name, status:'FALLÓ', observed, milliseconds:Date.now()-start });
  }
  const r = results.at(-1);
  console.log(r.id + ' ' + r.status + ' — ' + r.observed);
}
async function newPage(browser) {
  const context = await browser.newContext({ viewport:{ width:1440, height:900 }, deviceScaleFactor:1 });
  await context.route('**/*', route => {
    const { origin } = new URL(route.request().url());
    // External map tiles and fonts are outside the test scope. No API responses are mocked.
    return [web, api].includes(origin) ? route.continue() : route.abort();
  });
  const page = await context.newPage();
  page.setDefaultTimeout(10000);
  return { context, page };
}
async function login(page, account) {
  await page.goto(web + '/sign-in', { waitUntil:'domcontentloaded' });
  await page.locator('input[formcontrolname=username]').fill(account.username);
  await page.locator('input[formcontrolname=password]').fill(account.password);
  const response = page.waitForResponse(r => r.url() === api+'/api/v1/authentication/sign-in' && r.request().method() === 'POST');
  await page.getByRole('button',{name:'Login',exact:true}).click();
  return (await response).status();
}

async function main() {
  const ready = await fetch(api+'/v3/api-docs', { redirect:'error', signal:AbortSignal.timeout(10000) });
  assert(ready.ok && (await ready.json()).paths?.['/api/v1/properties'], 'No se detectó ElectroLink en el entorno de prueba');
  await new Promise((resolve,reject) => server.once('error',reject).listen(4200,'127.0.0.1',resolve));
  let browser;
  try {
    browser = await chromium.launch({ headless:true, channel:'msedge' });
    const a = await register('leonardo123@gmail.com');
    const aSession = await session(a);
    const b = await register();
    await run('ST-API-01','Ciclo de vida de propiedad (IAM + Assets + PostgreSQL)',async () => {
      expected(await call('GET','/api/v1/properties'),401,'La consulta sin sesión debe ser rechazada');
      const id = await createProperty(aSession,'Calle QA Ciclo AV2');
      const route = '/api/v1/properties/'+id;
      const get = await call('GET',route,undefined,aSession.token);
      expected(get,200,'Consulta tras el alta');
      assert.equal(JSON.parse(get.data).address.street,'Calle QA Ciclo AV2','La dirección persistida no coincide');
      expected(await call('PUT',route,payload(aSession.id,'Calle QA Actualizada AV2'),aSession.token),200,'Actualización de propiedad');
      const updated = await call('GET',route,undefined,aSession.token);
      expected(updated,200,'Consulta tras la actualización');
      assert.equal(JSON.parse(updated.data).address.street,'Calle QA Actualizada AV2','La edición no persistió');
      expected(await call('DELETE',route,undefined,aSession.token),204,'Eliminación de propiedad');
      expected(await call('GET',route,undefined,aSession.token),404,'Consulta después de eliminar');
      return '401 sin sesión; alta 201; consultas y edición 200 con datos persistidos; baja 204 y consulta posterior 404.';
    });

    const { context, page } = await newPage(browser);
    await run('ST-WEB-01','Inicio de sesión y llegada al panel',async () => {
      assert.equal(await login(page,a),200,'El formulario no completó la autenticación HTTP');
      await page.waitForURL('**/dashboard/homeowner');
      await page.getByText('Bienvenido,', {exact:false}).waitFor();
      await page.getByText(a.username, {exact:false}).waitFor();
      await page.screenshot({path:path.join(screenshots,'st-web-01-dashboard.png'),animations:'disabled'});
      return 'La API devolvió 200 y Angular abrió el panel de propietario.';
    });
    const street = 'psje el sol 397 callao';
    await createProperty(aSession,street);
    await run('ST-WEB-02','Consulta y persistencia de una propiedad en web',async () => {
      await page.goto(web+'/property',{waitUntil:'domcontentloaded'});
      const item = page.getByRole('listitem').filter({hasText:street});
      await item.click();
      await page.locator('app-property-detail').getByText(street,{exact:true}).waitFor();
      await page.locator('.list-details-panel').screenshot({path:path.join(screenshots,'st-web-02-propiedad.png'),animations:'disabled'});
      await page.reload({waitUntil:'domcontentloaded'});
      await item.waitFor();
      return 'Angular mostró el registro de prueba en la lista y en el detalle; el registro siguió visible tras recargar.';
    });
    await context.close();

    const visitor = await newPage(browser);
    await run('ST-WEB-03','Navegación desde Login hacia el registro',async () => {
      await visitor.page.goto(web+'/sign-in',{waitUntil:'domcontentloaded'});
      await visitor.page.getByRole('link',{name:'Regístrate',exact:true}).click();
      const route = new URL(visitor.page.url()).pathname;
      assert.equal(route,'/sign-up', 'El enlace abrió '+route+' en lugar del formulario /sign-up.');
      return 'El enlace de registro abrió el formulario /sign-up.';
    });
    await visitor.context.close();

    const other = await newPage(browser);
    await run('ST-WEB-04','Visibilidad de propiedades entre dos cuentas de prueba',async () => {
      assert.equal(await login(other.page,b),200,'No se autenticó la segunda cuenta sintética');
      await other.page.waitForURL('**/dashboard/homeowner');
      const listed = other.page.waitForResponse(r => r.url()===api+'/api/v1/properties' && r.request().method()==='GET');
      await other.page.goto(web+'/property',{waitUntil:'domcontentloaded'});
      const response = await listed;
      assert.equal(response.status(),200,'No se pudo evaluar la vista de propiedades');
      const data = await response.json();
      const returned = data.some(row => row.address?.street === street);
      if (returned) {
        await other.page.getByRole('listitem').filter({hasText:street}).waitFor();
        await other.page.locator('.list-section').screenshot({path:path.join(screenshots,'st-web-04-visibilidad.png'),animations:'disabled'});
      }
      assert(!returned,'La segunda cuenta recibió y visualizó la propiedad creada por la primera cuenta de prueba.');
      return 'La segunda cuenta no recibió la propiedad de la primera.';
    });
    await other.context.close();
    const file = fs.readFileSync(path.join(dist,'main.js'));
    const evidence = { executedAt:new Date().toISOString(), backendCommit, webCommit,
      webBundleSha256:createHash('sha256').update(file).digest('hex'), browser:browser.version(),
      api, web, webBuildOverride:'Solo serverBasePath en la copia local apunta a la API de pruebas.',
      externalResources:'Bloqueados: no se probaron mapas, fuentes externas ni geocodificación.',
      fixtureScope:'Cuentas y propiedades sintéticas; base de datos local desechable.', results };
    evidence.displayFixtures = { username:a.username, street, district:'Callao', region:'Callao',
      coordinates:'0,0: dato de prueba, no es una geolocalización de la dirección.' };
    fs.writeFileSync(path.join(output,'system-tests.json'),JSON.stringify(evidence,null,2)+'\n');
    process.exitCode = results.some(r=>r.status==='FALLÓ') ? 1 : 0;
  } finally {
    try {
      for (const { id, token } of cleanup) {
        try { await call('DELETE','/api/v1/properties/'+id,undefined,token); }
        catch { console.warn('Quedaron datos sintéticos en la base desechable.'); }
      }
    } finally { if (browser) await browser.close(); server.close(); }
  }
}
main().catch(e=>{ console.error('No se pudo completar la suite:',e.name); server.close(); process.exitCode=2; });
