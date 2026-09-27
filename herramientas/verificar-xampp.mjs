// Abre cada rediseño compilado tal como lo ve el usuario (por XAMPP), baja por toda la página
// y cuenta imágenes rotas, recursos con error y H1. Guarda el resultado en datos/verificacion-xampp.json,
// que usa la pestaña Galería del panel para la categoría "Aprobados por Claude".
// Uso: node herramientas/verificar-xampp.mjs [carpeta ...]   (sin carpetas: todos)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { lanzarNavegador } from './navegador.mjs';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const m = RAIZ.replace(/\\/g, '/').match(/\/htdocs\/(.+)$/i);
if (!m) { console.error('La carpeta del estudio no está dentro de htdocs de XAMPP.'); process.exit(1); }
const BASE = `http://localhost/${m[1]}`;
const SALIDA = path.join(RAIZ, 'datos', 'verificacion-xampp.json');

const todas = fs.readdirSync(path.join(RAIZ, 'proyectos')).filter((c) => fs.existsSync(path.join(RAIZ, 'proyectos', c, 'rediseno', 'dist', 'index.html')));
const pedidas = process.argv.slice(2);
const carpetas = pedidas.length ? todas.filter((c) => pedidas.includes(c)) : todas;

const previo = fs.existsSync(SALIDA) ? JSON.parse(fs.readFileSync(SALIDA, 'utf8')) : {};
const b = await lanzarNavegador();
for (const c of carpetas) {
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  const fallos = [];
  p.on('response', (r) => { if (r.status() >= 400) fallos.push(`${r.status()} ${r.url()}`); });
  p.on('requestfailed', (r) => { if (!/fonts\.(googleapis|gstatic)/.test(r.url())) fallos.push(`falló ${r.url()}`); });
  let r;
  try {
    await p.goto(`${BASE}/proyectos/${c}/rediseno/dist/index.html`, { waitUntil: 'load', timeout: 25000 });
    await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 800) { window.scrollTo(0, y); await new Promise((ok) => setTimeout(ok, 60)); } });
    await p.waitForTimeout(800);
    const d = await p.evaluate(() => ({ rotas: [...document.images].filter((i) => i.complete && i.naturalWidth === 0).length, h1: document.querySelectorAll('h1').length, imagenes: document.images.length }));
    r = { ...d, fallos: fallos.slice(0, 10), ok: d.rotas === 0 && d.h1 === 1 && fallos.length === 0 };
  } catch (e) { r = { ok: false, error: e.message.split('\n')[0] }; }
  r.fecha = new Date().toISOString();
  previo[c] = r;
  console.log(`${r.ok ? 'ok ' : 'MAL'} ${c}${r.ok ? '' : ' ' + JSON.stringify(r)}`);
  await p.close();
}
await b.close();
fs.writeFileSync(SALIDA, JSON.stringify(previo, null, 1));
console.log(`\n${Object.values(previo).filter((x) => x.ok).length} de ${Object.keys(previo).length} rediseños abren bien en XAMPP. Guardado en datos/verificacion-xampp.json`);
