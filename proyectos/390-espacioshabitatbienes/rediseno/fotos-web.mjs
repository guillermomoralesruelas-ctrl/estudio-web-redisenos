// El clon guarda sus imágenes en sitio/assets/wp-content/uploads/: las portadas (584 x 438) de sus inmuebles destacados,
// el logo, cuatro retratos de asesores, logos de clientes y algunas imágenes de categoría (renders de desarrollos).
// Se usan solo las portadas que son fotos del propio inmueble: Los Santos, Montecarlo, Villa Bonita, Lomas Altas (dron),
// el edificio de Casa Grande (con su marca de agua) y las dos fotos aéreas marcadas de los terrenos de Luz Valencia y Obregón.
// No se usan: la portada del terreno de Camino del Seri (su nombre de archivo es "ChatGPT-Image-..."), la de la casa en
// Obregón (una casa terminada, aunque la ficha dice "en construcción"), 049.jpg (2016, parece de banco) ni los renders.
// Ninguna foto usada trae metadatos de Google Maps/Picasa. No se descargó nada nuevo.
// Este script crea copias .webp en assets/web/ (no toca el clon) y el favicon. Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/390-espacioshabitatbienes/rediseno)
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
export const lista = [
  ['2026/05/20260512_114054-584x438.jpg', 'casa-los-santos', 584],
  ['2026/05/IMG-20260509-WA0027-584x438.jpg', 'casa-montecarlo', 584],
  ['2026/01/IMG-20260204-WA0060-584x438.jpg', 'casa-villa-bonita', 584],
  ['2026/05/DJI_0463-584x438.jpg', 'depto-lomas-altas', 584],
  ['2026/01/Edificio-Comercial-en-Venta-en-Casa-Grande-10-584x438.png', 'edificio-casa-grande', 584],
  ['2026/02/IMG-20260204-WA0073-584x438.jpg', 'terreno-luz-valencia', 584],
  ['2026/02/Terreno-en-Venta-en-Obregon-3-584x438.png', 'terreno-obregon', 584],
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

// Logo (124 x 48 en el clon): se copia tal cual como PNG. Favicon: su ícono de 114 px a 64 px.
fs.copyFileSync(path.join(origen, '2026/01/Logo-REMAX-Houzez.png'), path.join(destino, 'logo.png'));
fs.copyFileSync(path.join(origen, '2026/01/Logo-REMAX-Houzez-Blanco.png'), path.join(destino, 'logo-blanco.png'));
await sharp(path.join(origen, '2026/01/icono-114-x-114.png')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
