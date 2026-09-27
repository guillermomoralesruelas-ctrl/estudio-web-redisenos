// El clon guarda las imágenes en sitio/assets/assets/img/ (9 fotos y el logo en negro y en blanco). Son publicaciones de
// sus redes: casi todas llevan su logo y "Vasco de Quiroga #209, Industrial Aviación" como marca de agua.
// NO se usan (ver CAMBIOS.md y OPORTUNIDADES.md):
//   - WhatsApp Image 2025-12-13 at 16.24.05_6f16f09-1.jpg (la portada del sitio, "Ambiente del Restaurante"): una familia
//     de modelos (papá, mamá e hija) desayunando en un salón que no se parece al de sus demás fotos; parece de banco, con
//     su logo encima. Pendiente de confirmar con el restaurante.
//   - WhatsApp Image 2025-12-13 at 16.22.57_3b30f1c9.jpg ("Nuestra esencia"): un anuncio con letras ("El desayuno
//     perfecto ¡SÍ EXISTE!") y un plato sobre un fondo de madera que parece montaje; no muestra el restaurante.
// Ninguna foto trae metadatos (ni EXIF ni XMP), así que no hay marca de edición con IA que revisar.
// Dos fotos llevan letras de anuncio arriba (la cecina: "¡VEN Y DISFRUTA!"; el omelette: "delicioso & completo"): se
// recortan para dejar solo el plato.
// Este script crea copias .webp ligeras SOLO de lo que usa el rediseño en ../assets/web/ (no toca el clon).
// Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/463-granfamilia/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/assets/img');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, ancho máximo, recorte opcional {left, top, width, height}]
const lista = [
  ['IMG-20251213-WA0090.jpg', 'mesa', 1000],
  ['PLATILLOS_Y_OTROS/chilaquiles_con_huevo_granfamilia_opt.jpg', 'chilaquiles', 900],
  ['PLATILLOS_Y_OTROS/cecina_gran_familia_opt.jpg', 'cecina', 900, { left: 0, top: 420, width: 1500, height: 1000 }],
  ['PLATILLOS_Y_OTROS/omelette_gran_familia_opt.jpg', 'omelette', 1100, { left: 0, top: 790, width: 1500, height: 540 }],
  ['PLATILLOS_Y_OTROS/hotcakes_con_nutella_gran_familia_opt.jpg', 'hotcakes', 900],
  ['PLATILLOS_Y_OTROS/ensaladas_granfamilia_opt.jpg', 'ensaladas', 900],
  ['PLATILLOS_Y_OTROS/servir_plato_granfamilia_opt.jpg', 'comida-corrida', 900],
  ['LOGO/LOGOTIPO%20NEGRO%20SIN%20FONDO.png', 'logo', 520],
  ['LOGO/LOGOTIPO%20BLANCO%20SIN%20FONDO.png', 'logo-blanco', 520],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, ancho, recorte] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  let img = sharp(entrada);
  if (recorte) img = img.extract(recorte);
  const info = await img
    .resize({ width: ancho, withoutEnlargement: true })
    .webp({ quality: nombre.startsWith('logo') ? 90 : 78, effort: 5 })
    .toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: el suyo (LOGO/favicon.ico), copiado tal cual.
fs.copyFileSync(path.join(origen, 'LOGO/favicon.ico'), path.join(destino, 'favicon.ico'));

console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
