// El clon guarda sus imágenes en sitio/assets/wp-content/uploads/: 18 fotos propias de sus sesiones (de 682 a 1877 px
// de ancho), casi todas bajo el agua en cenotes, más su logo "Black Box" (139x60, blanco) y su favicon. Ninguna trae
// metadatos de Google Maps/Picasa ni de IA; sus nombres ("…Emilia-BlackBox…") y su estilo son de la fotógrafa.
// UNDERWATER-PORTRAITS-IN.CENOTE-4DRADO es un recorte de UNDERWATER-Cenote-Photoshoot-Riviera-Maya (no se usa).
// No se descargó nada nuevo. Este script crea copias .webp ligeras SOLO de las que usa el rediseño en assets/web/
// (no toca el clon), más el favicon. Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/369-emiliauwphoto/rediseno)
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
  ['2026/08/Underwater-Photoshoot-romantic-Tulum.jpg', 'pareja-rayos', 1600],
  ['2026/08/cenote-photoshoot-tulum.jpg', 'selva-retrato', 1200],
  ['2026/08/Couple-Photoshoot-in-cenote-Emilia-black-Box-1.jpg', 'selva-pareja', 1200],
  ['2024/03/beach-photoshoot-playa-del-carmen-682x1024.jpg', 'orilla', 1024],
  ['2026/08/Cenote-photo-experience-Riviera-Maya.jpg', 'superficie-mirada', 1200],
  ['2026/03/best-photographer-in-playa-del-carmen-683x1024.jpg', 'superficie-dorado', 1024],
  ['2026/08/UNDERWATER-Cenote-Photoshoot-Riviera-Maya-Emilia-Black-Box-703x1024.jpg', 'reflejo', 1024],
  ['2026/08/underwater-cenote-photoshoot-Emilia-BlackBox.jpg', 'vestido-azul', 1400],
  ['2026/08/Underwater-Photoshoot-Tulum-Emilia-BlackBox.jpg', 'vestido-rojo-peces', 1400],
  ['2026/08/flying-dress-underwater-photoshoot.jpg', 'vestido-rojo', 1200],
  ['2026/03/Cenote-photoshoot-riviera-maya.jpg', 'nenufares', 1200],
  ['2026/08/Underwater-cenote-couple-photoshoot.jpg', 'pareja-beso', 1200],
  ['2025/08/underwater-cenote-portrait.jpg', 'tul-blanco', 1200],
  ['2024/05/Underwater-Cenote-Birthday-Photoshoot.jpg', 'azul-roca', 1200],
  ['2024/05/Underwater-Photoshoot-Tulum.jpg', 'retrato-roca', 1200],
  ['2026/03/cenote-photoshoot-732x1024.jpg', 'tul-caverna', 1024],
  ['2026/03/scuba-diving-photography-playa-del-carmen-683x1024.jpg', 'buceo', 1024],
  ['2023/12/cropped-black-box-logovect-1-139x60.png', 'logo-black-box', 139],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: nombre.startsWith('logo') ? 92 : 76, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: su propio favicon (cropped-black-box-logovect-192x192.jpg, el caracol sobre negro) en 64 px.
await sharp(path.join(origen, '2021/11/cropped-black-box-logovect-192x192.jpg')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
