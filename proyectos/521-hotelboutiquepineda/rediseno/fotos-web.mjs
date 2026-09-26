// Las fotos del clon (sitio/assets/wp-content/uploads) pesan hasta 3 MB y miden hasta 6,960 px.
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en assets/web/
// (no toca el clon). Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/521-hotelboutiquepineda/rediseno)
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
  ['2023/03/logos_horizontales-03-255x116.png', 'logo-pineda', 255],
  ['2026/03/iconos-01-2-255x255.png', 'icono-p', 255],
  ['2023/03/HOTEL_PINEDA_48.jpg', 'portada-bahia', 2000],
  ['2026/02/Hotel-boutique-pineda-rincon-de-guayabitos-1-4-1.jpeg', 'portada-bahia-vertical', 1280],
  ['2023/05/HOTEL-BOUTIQUE-PINEDA_13.jpg', 'suite-king', 1600],
  ['2023/05/HOTEL-BOUTIQUE-PINEDA_16.jpg', 'suite-dos-camas', 1600],
  ['2023/05/HOTEL-BOUTIQUE-PINEDA_25.jpg', 'suite-ventanal', 1600],
  ['2023/05/IMG_3846.jpg', 'recepcion', 1600],
  ['2026/01/img-74-3.png', 'alberca', 1800],
  ['2026/02/Hotel-boutique-pineda-rincon-de-guayabitos-1-4.jpeg', 'alberca-camastros', 1100],
  ['2026/02/Hotel-boutique-pineda-rincon-de-guayabitos-1-15.jpeg', 'alberca-huesped', 1100],
  ['2026/02/Hotel-boutique-pineda-rincon-de-guayabitos-1-16.jpeg', 'alberca-vino', 1100],
  ['2026/02/Hotel-boutique-pineda-rincon-de-guayabitos-1-22-2.jpeg', 'restaurante-plato', 1100],
  ['2026/02/Hotel-boutique-pineda-rincon-de-guayabitos-1-10.jpeg', 'estancia-suite', 1100],
  ['2026/02/Hotel-boutique-pineda-rincon-de-guayabitos-1-3-2.jpeg', 'estancia-balcon', 1100],
  ['2026/02/Hotel-boutique-pineda-rincon-de-guayabitos-1-17.jpeg', 'estancia-agua', 1100],
  ['2026/02/rincon_guayabitos_overlay_20.jpg', 'playa-guayabitos', 1800],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 74, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(1)} MB -> ${(despues / 1048576).toFixed(1)} MB`);
console.log(JSON.stringify(medidas));
