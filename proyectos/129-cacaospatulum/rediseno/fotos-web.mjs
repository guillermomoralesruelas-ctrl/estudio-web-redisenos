// Método 1.2: fotos reales de assets/originales/ → assets/web/ (.webp optimizadas).
// Uso: node fotos-web.mjs   (desde proyectos/129-cacaospatulum/rediseno)
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

const lista = [
  ['hero.jpg',          'hero',          1800],
  ['masaje.jpg',        'masaje',        1200],
  ['sala-1.jpg',        'sala-1',        1200],
  ['sala-2.jpg',        'sala-2',        1200],
  ['tratamiento-1.jpg', 'tratamiento-1',  900],
  ['tratamiento-2.jpg', 'tratamiento-2',  900],
  ['tratamiento-3.jpg', 'tratamiento-3',  900],
  ['exterior.jpg',      'exterior',       900],
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

const dims = {};
for (const [, nombre] of lista) {
  const dst = path.join(destino, `${nombre}.webp`);
  const meta = await sharp(dst).metadata();
  dims[nombre] = [meta.width, meta.height];
}
console.log(JSON.stringify(dims));
