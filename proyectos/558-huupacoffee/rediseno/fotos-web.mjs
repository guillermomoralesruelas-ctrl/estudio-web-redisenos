// El clon guarda las fotos en sitio/assets/cdn/shop/files/ (69 imágenes de la tienda Shopify de Huupa: bolsas de café,
// cafeteras, tazas, kits, tarjetas de regalo, íconos y banners). Algunos banners de paisaje (desierto-de-sonora.jpg,
// montanas-sur-mexico.jpg, granos-cafe-montana-sur-mexico.jpg, lena-mezquite-sonora.jpg) parecen de banco y NO se usan.
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en assets/web/
// (no toca el clon). Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/558-huupacoffee/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/cdn/shop/files');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// El ícono (la "H" de Huupa) es SVG: se copia tal cual.
fs.copyFileSync(path.join(origen, 'huupa-h_fav.svg'), path.join(destino, 'icono.svg'));

// [archivo original, nombre de salida, lado largo máximo]
const lista = [
  ['Huupa-logo-header-B.png', 'logo', 406],
  ['Huupa-logo-header-W.png', 'logo-claro', 406],
  // Portada y "la diferencia"
  ['03.png', 'taza-fogata-fuego', 960],
  ['Mobile.jpg', 'bolsa-clasico-fuego', 720],
  ['fuego-de-mezquite.jpg', 'fuego-de-mezquite', 960],
  ['image_4_2.png', 'lena-de-mezquite', 256],
  ['Specialty_ManosdeMujer_09.jpg', 'manos-de-mujer-cafetal', 900],
  // Cafés (bolsas)
  ['huupa_clasico_250-222848.jpg', 'cafe-clasico', 800],
  ['huupa_premium_250-490564.jpg', 'cafe-premium', 800],
  ['huupa_descafeinado_natural_250-850619.jpg', 'cafe-descafeinado', 800],
  ['huupa_intenso_250-666159.jpg', 'cafe-intenso', 800],
  ['huupa_extremo_250-438444.jpg', 'cafe-extremo', 800],
  ['Specialty_YellowBorboun_01.jpg', 'specialty-bourbon-amarillo', 800],
  ['Specialty_Garnica_Caturra_01.jpg', 'specialty-garnica-caturra', 800],
  ['Specialty_ManosdeMujer_01.png', 'specialty-manos-de-mujer', 800],
  ['Specialty_TypicaBorboun_01.jpg', 'specialty-typica-bourbon-rojo', 800],
  ['Specilaty_BourbonTypica_01.jpg', 'specialty-bourbon-typica', 800],
  ['4-1.jpg', 'specialty-solok', 800],
  ['sampler-5-cafes-coleccion-huupa_de6ce8de-a6b8-4f86-a44f-a765b0109b8c-566034.jpg', 'sampler', 800],
  // Accesorios
  ['italiana-huupa-3_d4614986-f1a0-4ca5-ae1c-85a114dddd4c-819737.jpg', 'cafetera-italiana', 700],
  ['cafetera-talega-2-753513.jpg', 'cafetera-talega', 700],
  ['sunkit.jpg', 'prensa-francesa', 700],
  ['MolinoNuevo_oct_04.jpg', 'molino-manual', 700],
  ['01_a34d9286-da52-4d06-baff-6325b0420424.png', 'termo', 700],
  ['Taza_Peltre_12_5e1d35bd-29b6-4be9-b94b-e866e71722c0.jpg', 'tazas-peltre', 700],
  ['TazaFogata_01.jpg', 'taza-fogata', 700],
  // Regalos
  ['KIT_CAFESERO_138b7fda-c265-4b6f-b38c-48da1d452613.jpg', 'kit-cafesero', 700],
  ['KIT_FOGATA.jpg', 'kit-fogata', 700],
  ['KIT_BARISTA_2613e7cb-57ac-43a5-bb7d-d476ae043a60.jpg', 'kit-barista', 700],
  ['KIT_TERMO.jpg', 'kit-termo', 700],
  ['Giftcard1.jpg', 'gift-card', 700],
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
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
