#!/usr/bin/env node
// Fase 2 — Descarga las imágenes de proyectos/<carpeta>/assets.json
// Uso: node herramientas/descargar-assets.mjs <carpeta> [--forzar] [--manifiesto assets-1.2.json]
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [, , carpeta] = process.argv;
const argv = process.argv.slice(3);
const iMan = argv.indexOf('--manifiesto');
const manifiesto = iMan > -1 ? argv[iMan + 1] : 'assets.json';
if (!carpeta) { console.error('Uso: node herramientas/descargar-assets.mjs <carpeta> [--forzar] [--manifiesto assets-1.2.json]'); process.exit(1); }
const dirProy = path.join(RAIZ, 'proyectos', carpeta);
const m = JSON.parse(fs.readFileSync(path.join(dirProy, manifiesto), 'utf8'));
const destino = path.join(dirProy, m.destino || 'assets');
const forzar = argv.includes('--forzar');

const tareas = m.assets.map((a) => {
  const url = a.url || (m.base || '') + a.ruta;
  const archivo = a.archivo || decodeURIComponent(path.basename(new URL(url).pathname));
  return { url, ruta: path.join(destino, a.carpeta || '', archivo) };
});
let ok = 0, saltadas = 0; const fallas = [];

async function bajar(t) {
  if (!forzar && fs.existsSync(t.ruta)) { saltadas++; return; }
  try {
    const r = await fetch(t.url, { headers: { 'User-Agent': 'Mozilla/5.0 EstudioWeb' }, signal: AbortSignal.timeout(60000) });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    fs.mkdirSync(path.dirname(t.ruta), { recursive: true });
    fs.writeFileSync(t.ruta, Buffer.from(await r.arrayBuffer()));
    ok++;
    console.log('  OK ', path.relative(destino, t.ruta));
  } catch (e) { fallas.push(`${t.url}  (${e.message})`); console.log('  X  ', t.url, e.message); }
}
const cola = [...tareas];
await Promise.all(Array.from({ length: 6 }, async () => { while (cola.length) await bajar(cola.shift()); }));

console.log(`\nDescargadas: ${ok} | Ya existían: ${saltadas} | Fallaron: ${fallas.length} | Total: ${tareas.length}`);
if (fallas.length) fs.writeFileSync(path.join(dirProy, 'assets-fallas.txt'), fallas.join('\n'));
spawnSync(process.execPath, ['--no-warnings', path.join(RAIZ, 'herramientas', 'db.mjs'), 'sync-assets', carpeta], { stdio: 'inherit' });
