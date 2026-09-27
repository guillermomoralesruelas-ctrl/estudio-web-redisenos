// El clon guarda sus imágenes en sitio/assets/images/: tres fotos de su sesión de spa (masaje de espalda, una pareja
// con batas bordadas con su logo en una cabina y un masaje con piedras calientes), sus pantuflas y bata bordadas
// (00_Quienes_Somos), el aviso de servicio a domicilio, su logo y miniaturas de 174 px. Las fotos de cada servicio
// (images/corporales, faciales…) no están en el clon y no se descargaron. Ninguna trae metadatos de Google Maps/Picasa
// ni de IA (su EXIF solo tiene la orientación).
// Este script crea copias .webp en assets/web/ (no toca el clon) y el favicon. Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/114-bizenizaspa/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/images');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
export const lista = [
  ['00_Galeria_02.jpg', 'pareja-cabina', 800],
  ['00_Galeria_01.jpg', 'masaje-espalda', 800],
  ['00_Galeria_03.jpg', 'piedras-calientes', 800],
  ['00_Quienes_Somos.jpg', 'pantuflas-bata', 336],
  ['00_Logo_BizeNiza.jpg', 'logo', 204],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: la flor de su logo (recorte de la parte superior izquierda) a 64 px.
await sharp(path.join(origen, '00_Logo_BizeNiza.jpg'))
  .extract({ left: 58, top: 2, width: 62, height: 48 })
  .resize(64, 64, { fit: 'contain', background: '#ffffff' })
  .png()
  .toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} imágenes: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
console.log(JSON.stringify(medidas));
