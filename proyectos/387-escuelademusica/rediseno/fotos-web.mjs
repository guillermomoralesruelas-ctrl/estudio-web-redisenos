// Método 1.2: fotos reales de assets/originales/ → assets/web/ (.webp optimizadas).
// Uso: node fotos-web.mjs   (desde proyectos/387-escuelademusica/rediseno)
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
  ['hero.png',              'hero',              1800],
  ['fachada.jpg',           'fachada',           1200],
  ['clase.jpg',             'clase',             1200],
  ['dsc-00990.jpg',         'alumnos-1',         1200],
  ['dsc-00967.jpg',         'alumnos-2',         1200],
  ['dsc-00981.jpg',         'alumnos-3',         1200],
  ['dsc-06368.jpg',         'alumnos-4',         1200],
  ['yara.jpg',              'alumna-yara',        900],
  ['plan-instrumento.jpg',  'plan-instrumento',   800],
  ['plan-induccion.jpg',    'plan-induccion',     800],
  ['plan-iniciacion.jpg',   'plan-iniciacion',    800],
  ['fernando.jpg',          'maestro-fernando',   600],
  ['gustavo.jpg',           'maestro-gustavo',    600],
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
