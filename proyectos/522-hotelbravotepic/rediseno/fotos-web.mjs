// El clon guarda las fotos en sitio/assets/images/ (lobby, cuatro fotos de habitación, logotipo y dos fotos de Tepic)
// y los íconos en sitio/assets/favicon/. habitacion-familiar.jpg es el mismo archivo que habitacion-doble.jpg
// (igual en el sitio real), así que la Familiar no lleva foto propia.
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en assets/web/
// (no toca el clon). Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/522-hotelbravotepic/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
const lista = [
  ['favicon/favicon-96x96.png', 'icono', 96],
  ['images/logo.png', 'logo-hotel-bravo', 300],
  ['images/hotel-bravo.jpg', 'lobby', 1600],
  ['images/habitacion-doble.jpg', 'habitacion-doble', 1200],
  ['images/habitacion-king-size.jpg', 'habitacion-king-size', 1200],
  ['images/habitacion-doble-matrimonial.jpg', 'habitacion-doble-matrimonial', 1200],
  ['images/tepic-2.jpg', 'tepic-atardecer', 1600],
  ['images/bellavista.jpg', 'bellavista', 1181],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
