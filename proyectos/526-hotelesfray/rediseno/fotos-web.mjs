// Las fotos del clon (sitio/assets/wp-content/uploads) miden hasta 2,560 px y la carpeta trae temas y plugins de WordPress.
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en assets/web/
// (no toca el clon). Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/526-hotelesfray/rediseno)
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
  ['../../favicon-96x96.png', 'icono', 96],
  ['2026/01/HotelesFrayW-png.webp', 'logo-fray-blanco', 600],
  ['2025/10/FrayCentroEH-png.webp', 'logo-junipero', 600],
  ['2025/10/FraySelectEH-png.webp', 'logo-select', 600],
  ['2025/09/2025-09-04_20-45-09-scaled.webp', 'junipero-catedral-noche', 1600],
  ['2025/08/hotel-fray-junipero-1500.webp', 'junipero-fachada', 1500],
  ['2025/09/2025-09-06_19-42-38-scaled.webp', 'junipero-aerea', 1600],
  ['2025/08/hotel-fray-select-1500.webp', 'select-fachada', 1500],
  ['2023/11/frayselect-cb2-jpg.webp', 'select-lobby', 1400],
  ['2026/03/superior-nva5-scaled.webp', 'hab-superior', 1400],
  ['2023/08/HabCentroMaster2-jpg.webp', 'hab-master-suite', 1280],
  ['2023/08/habitacion-dos-camas-web1-jpg.webp', 'hab-junipero-dos-camas', 1200],
  ['2019/09/estandarkingsize1.jpg', 'hab-junipero-king', 1400],
  ['2023/08/FS-Hab-10-jpg.webp', 'hab-select-king', 1400],
  ['2023/08/FS-Hab-14-scaled.webp', 'hab-select-doble', 1400],
  ['2023/08/FS-Hab-11-scaled.webp', 'hab-select-bano', 1400],
  ['2023/07/FS-Hab-20-scaled.webp', 'hab-select-escritorio', 1400],
  ['2023/08/restaurante-capistrano-1600-jpg.webp', 'rest-capistrano', 1400],
  ['2026/04/restaurante-piso-uno-noche.webp', 'rest-piso-uno', 1400],
  ['2026/04/desayunador-fray-select-1.webp', 'desayunador-select', 1400],
  ['2023/08/FS-restaurante5-1600-jpg.webp', 'rest-select', 1400],
  ['2023/08/Salon-La-Mision-1600-jpg.webp', 'salon-la-mision', 1400],
  ['2023/08/Salon-Principal-6-jpg.webp', 'salon-principal', 1280],
  ['2023/08/FS-salones5-scaled.webp', 'salon-select-banquete', 1400],
  ['2023/08/FS-salones1-scaled.webp', 'salon-select-montaje', 1400],
  ['2026/02/booking-com-2026-traveller-review-awards-png.webp', 'premio-booking-2026', 400],
  ['2024/08/TC-LOGO_2024.png', 'premio-tripadvisor-2024', 400],
  ['2026/02/CADENA-con-mejor-NPS-EN-LATAM-png.webp', 'premio-myhotel-2025', 400],
  ['2024/10/WHITE_LARGE_TRAVEL_AWARDS-2023-png.webp', 'premio-kayak-2023', 400],
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
