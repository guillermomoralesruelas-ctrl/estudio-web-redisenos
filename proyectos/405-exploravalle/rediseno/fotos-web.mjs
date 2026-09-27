// El clon guarda sus imágenes en sitio/assets/wp-content/uploads/: cinco fotos de 360 × 240 px de sus experiencias
// (kayak, lancha con esquí, bicicleta, cabalgata y cuatrimotos), todas con la marca de agua "Explora Valle" y editadas
// con paint.net; la panorámica del lago (PANORAMICA-STATS-00.jpg, 1280 × 400, ya oscurecida, editada con Photoshop);
// su logotipo blanco y su símbolo naranja; logos de terceros (Visit México, Bimbo, Danone…) y las fotos de perfil de
// las reseñas de Google (ChIJ…jpg, no se usan). Ninguna trae EXIF de Google Maps/Picasa ni credenciales C2PA o marcas
// de IA. No se descargó nada nuevo: solo se usan las que ya estaban en el clon.
// Este script crea copias .webp SOLO de las que usa el rediseño en assets/web/ (no toca el clon), más el favicon.
// Vite usa assets/web/ como publicDir. Las medidas quedan en src/data/fotos.json.
// Uso: node fotos-web.mjs   (desde proyectos/405-exploravalle/rediseno)
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
  ['2021/04/bicicleta-01-360x240.jpg', 'bicicleta', 360],
  ['2021/04/cuatrimotos-03-360x240.jpg', 'cuatrimoto', 360],
  ['2021/04/cabalgata-01-360x240.jpg', 'cabalgata', 360],
  ['2021/03/tour-kayak-04-360x240.jpg', 'kayak', 360],
  ['2021/03/tour-lanchas-01-360x240.jpg', 'lancha', 360],
  ['2021/04/PANORAMICA-STATS-00.jpg', 'panoramica', 1280],
  ['2021/04/explora-valle-white-logo-retina.png', 'logo-blanco', 360],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: nombre.startsWith('logo') ? 90 : 82, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: su símbolo naranja (cropped-logo-only-192x192.png) en 64 px.
await sharp(path.join(origen, '2021/03/cropped-logo-only-192x192.png'))
  .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(path.join(destino, 'icono.png'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 2) + '\n');
console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
