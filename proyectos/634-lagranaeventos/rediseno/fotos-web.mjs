// El clon guarda sus imágenes en sitio/assets/wp-content/uploads/: 8 fotos propias del jardín (cinco de 1280x960
// mandadas por WhatsApp en 2018: el lago con su puente, la pista de madera con cristal, los toldos en el pasto y una
// boda de noche con letras LOVE; y tres de 2015: el arco "Bienvenidos", la glorieta de ingreso y una pareja de novios),
// más su logo "La Grana Eventos" (800 px, guinda sobre transparente) y su versión blanca. Ninguna trae metadatos de
// Google Maps/Picasa ni de IA. Las ~50 fotos de su galería no están en el clon. No se descargó nada nuevo.
// Este script crea copias .webp ligeras SOLO de las que usa el rediseño en assets/web/ (no toca el clon), más el
// favicon. Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/634-lagranaeventos/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/wp-content/uploads');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
const lista = [
  ['2018/09/IMG-20180802-WA0009.jpg', 'lago-puente', 1280],
  ['2018/09/IMG-20180802-WA0007.jpg', 'puente-atardecer', 1280],
  ['2018/09/IMG-20180802-WA0015.jpg', 'pista-madera-cristal', 1280],
  ['2018/09/IMG-20180802-WA0008.jpg', 'jardin-pergolas', 1280],
  ['2018/09/IMG-20180802-WA0011.jpg', 'boda-noche', 1280],
  ['2015/01/La-Grana-Boda.jpg', 'arco-bienvenidos', 960],
  ['2015/01/La_Grana_Ingreso_01.jpg', 'glorieta-ingreso', 960],
  ['2015/01/Banner_Inicio_01.jpg', 'novios', 1600],
  ['2018/09/La_Grana_Eventos_800px.png', 'logo-la-grana', 400],
  ['2015/10/La-Grana-Logo-White-2.png', 'logo-la-grana-blanco', 400],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: nombre.startsWith('logo') ? 90 : 76, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: su favicon (La_Grana_Eventos_512px-200x200.jpg, el logo guinda sobre blanco) en 64 px.
await sharp(path.join(origen, '2018/09/La_Grana_Eventos_512px-200x200.jpg')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
