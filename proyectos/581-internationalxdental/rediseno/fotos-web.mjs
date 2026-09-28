// Las fotos del clon (sitio/assets/wp-content/uploads) se convierten a .webp en assets/web/
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño.
// Vite usa esa carpeta como publicDir en vite.config.ts.
// Uso: node fotos-web.mjs   (desde proyectos/581-internationalxdental/rediseno)
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

// [archivo original en uploads/, nombre de salida sin ext, lado largo máximo en px]
const lista = [
  // Fachada exterior de la clínica
  ['2023/05/internationalx_dental_proque_fachada-InternationalX-Dental-768x512.jpg', 'fachada', 900],
  // Interior / sala de tratamientos
  ['2023/03/intxdental_about_treatments.jpg', 'tratamientos', 900],
  // Interior amplio header
  ['2023/03/intxdental_header_about.png', 'interior', 1350],
  // Blanqueamiento
  ['2023/03/internationalx_dental_cosmetica_blanqueamiento.jpg', 'blanqueamiento', 900],
  // Categorías de tratamientos
  ['2023/03/intenationalx_dental_cosmetic_-300x169.jpg', 'cosmetica', 500],
  ['2023/03/intenationalx_dental_restaurative_-300x169.jpg', 'restaurativa', 500],
  ['2023/03/intenationalx_dental_preventive_-300x169.jpg', 'preventiva', 500],
  // Logos
  ['2023/03/International_X_white.png', 'logo-blanco', 400],
  ['2023/03/International_X_blue-300x106.png', 'logo-azul', 400],
  // Especialistas (fotos de 300x200)
  ['2023/03/international-x-dental_web_photo_dr-oswaldo_2023-300x200.jpg', 'dr-oswaldo', 400],
  ['2023/03/international-x-dental_web_photo_dr-roger_2023-2-300x200.jpg', 'dr-roger', 400],
  ['2023/06/international-x-dental_web_photo_dra-jacqueline_2023-1-300x200.jpg', 'dra-jacqueline', 400],
  ['2023/06/international-x-dental_web_photo_dr-david_2023-2-300x200.jpg', 'dr-david', 400],
  ['2023/09/international-x-dental_web_photo_lic-maribel_2023-300x200.jpg', 'lic-maribel', 400],
  ['2023/09/international-x-dental_web_photo_lic-miguel_2023_-300x200.jpg', 'lic-miguel', 400],
  // Especialistas 2025
  ['2025/08/4b5d6bb7-23a1-4e52-ad8e-fc849d330347-2-edited-e1754957617827-300x208.jpg', 'dra-itzel', 400],
  ['2025/08/e9054f7f-b914-48fd-b950-e0d62188bda6-e1754957518731-300x213.jpg', 'dr-eduardo', 400],
  ['2025/09/whatsapp-image-2025-09-04-at-12.28.29-pm-1-e1757037621827-300x179.jpeg', 'dr-erick', 400],
  ['2025/09/whatsapp-image-2025-09-04-at-9.06.22-pm-e1757038192304-300x210.jpeg', 'dr-samir', 400],
  ['2025/09/whatsapp-image-2025-09-04-at-9.28.21-pm-300x200.jpeg', 'dra-yolanda', 400],
  // Oswaldo retrato grande
  ['2023/06/oswaldo_1-768x1024.jpg', 'dr-oswaldo-grande', 600],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  if (!fs.existsSync(entrada)) { console.error(`NO EXISTE: ${archivo}`); continue; }
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(1)} MB -> ${(despues / 1048576).toFixed(1)} MB`);
console.log(JSON.stringify(medidas));
