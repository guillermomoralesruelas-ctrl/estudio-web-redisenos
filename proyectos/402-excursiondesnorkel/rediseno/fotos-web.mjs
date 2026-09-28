// Las fotos del clon (sitio/assets/wp-content/uploads) pesan hasta 6 MB y miden hasta 2560 px.
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en assets/web/
// (no toca el clon). Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/402-excursiondesnorkel/rediseno)
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

// [archivo original en uploads/, nombre de salida en assets/web/, lado largo máximo]
const lista = [
  // Hero — paisaje Pacífico amplio (foto aérea de la costa)
  ['2024/09/DJI_0586-scaled.jpg',       'hero-pacifico',        2000],
  // Bioluminiscencia
  ['2025/03/Bioluminescence-Night-Tour.jpg', 'bio-laguna',       1400],
  // Tortugas
  ['2024/02/MG_1572-2-scaled.jpg',       'tortugas-playa',      1600],
  // Delfines
  ['2025/02/delfin-3.jpg',               'delfines',             1200],
  // Chacahua
  ['2024/08/MG_9851-1-scaled.jpg',       'chacahua-manglar',    1600],
  // Cascadas
  ['2024/10/IMG_1410-scaled.jpg',        'cascadas-copalitilla', 1600],
  // Kayak manglar
  ['2024/02/DSC7447-scaled.jpg',         'kayak-manglar',        1600],
  // Snorkel Pacífico
  ['2024/05/pexels-daniel-torobekov-5015532.jpg', 'snorkel-pacifico', 1600],
  // Caballos atardecer
  ['2024/03/DSC8043-scaled.jpg',         'caballos-atardecer',   1600],
  // Mezcal ancestral
  ['2025/05/mezcal.jpg',                 'mezcal-ancestral',     1400],
  // Costa oaxaqueña
  ['2023/04/oaxacan-coast-adventure-14.webp', 'costa-oaxaca',   1600],
  // Termales / horseback
  ['2025/02/termales.jpg',               'termales',             1400],
  // Avistamiento de aves
  ['2024/04/TSS4496.jpg',                'aves-laguna',          1400],
  // Aves 2026
  ['2026/02/Aves-1.jpg',                 'aves-2026',            1400],
  // Petición de matrimonio
  ['2025/11/Brett-Ari-She-said-Yes-29-scaled.jpeg', 'propuesta-matrimonio', 1400],
  // Hot springs horseback
  ['2024/02/hot-springs-horseback-riding-puerto-escondido.webp', 'termales-caballos', 1400],
  // Sostenibilidad
  ['2024/03/eco-adventures-sustainability-1.webp', 'sostenibilidad', 900],
  // Grupo de tours con imagen panorámica
  ['2024/03/MG_9562-scaled-1-1.webp',   'grupo-tour',           900],
  // Logo transparente (para footer)
  ['2023/05/ecoadventurestransparente.png', 'logo-eco',          300],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  if (!fs.existsSync(entrada)) { console.warn('No encontrado:', archivo); continue; }
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 75, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
console.log(`${Object.keys(medidas).length} fotos: ${(antes / 1048576).toFixed(1)} MB -> ${(despues / 1048576).toFixed(1)} MB`);
console.log(JSON.stringify(medidas, null, 2));
