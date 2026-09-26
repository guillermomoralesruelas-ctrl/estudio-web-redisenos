#!/usr/bin/env node
// Guarda como referencia las capturas de página completa que genera qa-rediseno.mjs (qa/*.png, que no van a git)
// en referencias/capturas-AAAA-MM-DD/ como .jpg, para poder comparar el antes y el después más adelante.
// Uso: node herramientas/guardar-capturas.mjs <carpeta>
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const carpeta = process.argv[2];
if (!carpeta) { console.error('Uso: node herramientas/guardar-capturas.mjs <carpeta>'); process.exit(1); }
const dirQa = path.join(RAIZ, 'proyectos', carpeta, 'qa');
if (!fs.existsSync(dirQa)) { console.error(`No existe ${dirQa}. Corre antes: node herramientas/qa-rediseno.mjs ${carpeta}`); process.exit(1); }

const pngs = fs.readdirSync(dirQa).filter((f) => /^(antes|despues)-(escritorio|movil)\.png$/.test(f));
if (!pngs.length) { console.error('No hay capturas en qa/. Corre antes qa-rediseno.mjs'); process.exit(1); }

// La fecha es la de las capturas (no la de hoy), para que el nombre diga cuándo se tomaron.
const fecha = new Date(Math.max(...pngs.map((f) => fs.statSync(path.join(dirQa, f)).mtimeMs)));
const dia = `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, '0')}-${String(fecha.getDate()).padStart(2, '0')}`;
const destino = path.join(RAIZ, 'proyectos', carpeta, 'referencias', `capturas-${dia}`);
fs.mkdirSync(destino, { recursive: true });

let total = 0;
for (const f of pngs) {
  const salida = path.join(destino, f.replace(/\.png$/, '.jpg'));
  const info = await sharp(path.join(dirQa, f), { limitInputPixels: false }).jpeg({ quality: 78, mozjpeg: true }).toFile(salida);
  total += info.size;
  console.log(`  ${path.relative(RAIZ, salida)}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
}
console.log(`${pngs.length} capturas guardadas (${(total / 1048576).toFixed(1)} MB) en ${path.relative(RAIZ, destino)}`);
