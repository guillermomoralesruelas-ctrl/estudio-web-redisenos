#!/usr/bin/env node
// Compone entregables/vista-previa.png con las capturas de QA (escritorio + móvil).
// Uso: node herramientas/vista-previa.mjs <carpeta>
import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const carpeta = process.argv[2];
const qa = path.join(RAIZ, 'proyectos', carpeta, 'qa');
const esc = path.join(qa, 'escritorio-inicio.png'), mov = path.join(qa, 'movil-inicio.png');
if (!fs.existsSync(esc) || !fs.existsSync(mov)) { console.error('Faltan capturas de QA. Ejecuta primero: node herramientas/qa.mjs ' + carpeta); process.exit(1); }
const a = await sharp(esc).resize({ width: 1280 }).toBuffer();
const b = await sharp(mov).resize({ height: 800 }).toBuffer();
const mb = await sharp(b).metadata();
const salida = path.join(RAIZ, 'proyectos', carpeta, 'entregables', 'vista-previa.png');
fs.mkdirSync(path.dirname(salida), { recursive: true });
await sharp({ create: { width: 1280 + 40 + mb.width + 80, height: 880, channels: 3, background: '#1b1b1b' } })
  .composite([{ input: a, left: 40, top: 40 }, { input: b, left: 1280 + 80, top: 40 }])
  .png().toFile(salida);
console.log('Vista previa: ' + path.relative(RAIZ, salida));
