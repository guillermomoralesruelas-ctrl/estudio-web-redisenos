// El clon guarda sus imágenes en sitio/assets/: cuatro fotos de habitación de 1600 px (uploads/rooms/, con crédito
// "Roksana Rita Photography" en sus metadatos), seis miniaturas de 210 px de la casa (images/estancia/), el logotipo
// en café (images/logo/izkina-cafe.png) y en arena (uploads/settings/), el logo sobre arena (images/about-us-1.jpg)
// y dos gráficos del tema. Las fotos del carrusel de portada, la galería y la historia no están en el clon.
// Este script crea copias .webp ligeras SOLO de las que usa el rediseño en assets/web/ (no toca el clon), más el
// favicon, hecho con el logotipo en arena. Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/530-hotelizkina/rediseno)
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
  ['uploads/rooms/1751058069_e11f34ef263036ce4a2c.jpg', 'pajaro-azul', 1400],
  ['uploads/rooms/1751058587_d803ce025057a01e13ba.jpg', 'paloma', 1400],
  ['uploads/rooms/1751060663_f6fd16194c7df36484ee.jpg', 'tukan', 1400],
  ['uploads/rooms/1751061146_b9d8733e2493e40472af.jpg', 'jilguero', 1400],
  ['images/estancia/estancia-5.jpg', 'casa-alberca', 210],
  ['images/estancia/estancia-4.jpg', 'casa-banca-mosaicos', 210],
  ['images/estancia/estancia-6.jpg', 'casa-patio', 210],
  ['images/estancia/estancia-2.jpg', 'casa-fruta', 210],
  ['images/logo/izkina-cafe.png', 'logo-izkina', 426],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: el logotipo en arena (uploads/settings/1752010006_….png), en 64 px.
await sharp(path.join(origen, 'uploads/settings/1752010006_5d2bd3e7ab5387051d49.png'))
  .resize(64, 64, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
