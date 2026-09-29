// Método 1.2: fotos reales descargadas del sitio live en assets/originales/ (sin C2PA).
// Este script crea copias .webp ligeras en assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/646-lasjarasaguas/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../assets/originales');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
const lista = [
  ['piletas.webp',       'piletas',       1800],
  ['masajes.webp',       'masajes',        900],
  ['tratamientos.webp',  'tratamientos',   900],
  ['rituales.webp',      'rituales',       900],
  ['historias.jpg',      'historias',      900],
];

let totalAntes = 0, totalDespues = 0;

for (const [orig, nombre, lado] of lista) {
  const src = path.join(origen, orig);
  const dst = path.join(destino, `${nombre}.webp`);
  const stat = fs.statSync(src);
  totalAntes += stat.size;
  await sharp(src).resize(lado, lado, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 82 }).toFile(dst);
  const s2 = fs.statSync(dst);
  totalDespues += s2.size;
}

const mb = n => (n / 1048576).toFixed(2);
console.log(`${lista.length} fotos: ${mb(totalAntes)} MB -> ${mb(totalDespues)} MB`);

// Dimensiones para content.ts
const dims = {};
for (const [, nombre] of lista) {
  const dst = path.join(destino, `${nombre}.webp`);
  const meta = await sharp(dst).metadata();
  dims[nombre] = [meta.width, meta.height];
}
console.log(JSON.stringify(dims));
