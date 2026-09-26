#!/usr/bin/env node
// Fase 2 — Crea versiones .webp ligeras junto a las imágenes pesadas (no toca los originales).
// Uso: node herramientas/optimizar-imagenes.mjs <carpeta> [--min-kb 250] [--ancho 2000]
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const carpeta = args[0];
if (!carpeta) { console.error('Uso: node herramientas/optimizar-imagenes.mjs <carpeta>'); process.exit(1); }
const opt = (k, d) => (args.includes(k) ? Number(args[args.indexOf(k) + 1]) : d);
const MIN = opt('--min-kb', 250) * 1024;
const ANCHO = opt('--ancho', 2000);
const dir = path.join(RAIZ, 'proyectos', carpeta, 'assets');

const archivos = [];
(function recorrer(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) recorrer(p);
    else if (/\.(png|jpe?g)$/i.test(f.name) && fs.statSync(p).size >= MIN) archivos.push(p);
  }
})(dir);

let antes = 0, despues = 0;
for (const f of archivos) {
  const salida = f.replace(/\.(png|jpe?g)$/i, '.webp');
  if (fs.existsSync(salida)) continue;
  await sharp(f).resize({ width: ANCHO, withoutEnlargement: true }).webp({ quality: 80 }).toFile(salida);
  const a = fs.statSync(f).size, b = fs.statSync(salida).size;
  antes += a; despues += b;
  console.log(`  ${path.relative(dir, f)}  ${Math.round(a / 1024)} KB -> ${Math.round(b / 1024)} KB`);
}
console.log(`\nOptimizadas: ${archivos.length} | ${Math.round(antes / 1024)} KB -> ${Math.round(despues / 1024)} KB`);
