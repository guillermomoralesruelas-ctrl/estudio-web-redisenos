// El clon guarda sus imágenes en sitio/assets/: fotos propias de la academia (el local en Plaza La Perla, el tatami
// con clase, peleas de Muay Thai en ring y un retrato de Kru Carlos con cinturón), su logo, la imagen de horarios de
// abril de 2026 y la de precios. También trae 18 capturas de la plantilla "Rayo" (img/demo/screens), que no se usan.
// Ninguna foto trae metadatos de Google Maps/Picasa ni de IA. No se descargó nada nuevo.
// Este script crea copias .webp ligeras en assets/web/ (no toca el clon) y el favicon. Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/78-baansingtocentral/rediseno)
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
export const lista = [
  ['fondos/baan-singto-local-zona-baja.webp', 'local-la-perla', 1400],
  ['intro/baan-singto-lat-1.webp', 'academia-letrero', 1200],
  ['intro/baan-singto-lat-4.webp', 'clase-tatami', 1200],
  ['intro/baan-singto-lat-6.webp', 'clase-grupo', 1200],
  ['intro/kru-carlos-lat-2.webp', 'pelea-patada', 1200],
  ['intro/kru-carlos-lat-3.webp', 'pelea-guardia', 1200],
  ['intro/kru-carlos-lat-7.webp', 'pelea-ring', 1200],
  ['intro/kru-carlos-lat-8.webp', 'kru-carlos', 1200],
  ['logo-superior-baan-singto-central-kru-carlos.webp', 'logo', 400],
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

// Favicon: su logo a 64 px.
await sharp(path.join(origen, 'logo-superior-baan-singto-central-kru-carlos.webp')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
