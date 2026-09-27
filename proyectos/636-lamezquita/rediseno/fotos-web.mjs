// El clon guarda las imágenes en sitio/assets/wp-content/uploads/2026/ (9 fotos, el logo en dos versiones, el ícono del
// logo en tres tamaños y un adorno SVG). Solo 4 fotos son claramente del hotel: las de la sesión con cámara (archivos
// 153A####: la suite, la cabina de masaje, el bar y los arcos del salón de eventos).
// NO se usan (ver CAMBIOS.md y OPORTUNIDADES.md):
//   - 04/hotel-y-spa-la-mezquita.webp (la fachada de noche): lleva en la esquina la estrellita de Gemini (Google AI),
//     señal de que fue generada o editada con IA; no trae metadatos. Pendiente de confirmar con el hotel.
//   - 04/hotelyspalamezquita121_1-1.webp (pareja brindando con una rosa), 07/1629.jpg (toallas y sales sobre fondo
//     rosa), 07/537136.jpg (pareja con una tableta en un sillón) y 08/hotel-para-parejas-en-aguascalientes.webp (mujer
//     en una alberca frente a un palacio): parecen de banco o generadas; no muestran el hotel.
//   - 04/Logo-la-mezquita-1024x215.png (versión con letras negras y "Concept Hotel & SPA") y 04/figura_verde.svg.
// Ninguna de las fotos usadas trae metadatos de edición con IA.
// Este script crea copias .webp ligeras SOLO de lo que usa el rediseño en ../assets/web/ (no toca el clon).
// Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/636-lamezquita/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/wp-content/uploads/2026');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
const lista = [
  ['07/153A4804-compressed.webp', 'suite', 885],
  ['07/153A4845-compressed.webp', 'spa-cabina', 720],
  ['07/153A4411-compressed.webp', 'bar', 780],
  ['07/153A4573-compressed.webp', 'salon-arcos', 520],
  ['04/logo-lamezquita-color.png', 'logo', 560],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: el ícono de su logo (la estrella de cinco puntas en blanco sobre cobre), 64x64 y 180x180.
const icono = path.join(origen, '04/cropped-cropped-logo-mezquita-icon-192x192.png');
await sharp(icono).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));
await sharp(icono).resize(180, 180).png().toFile(path.join(destino, 'icono-180.png'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
