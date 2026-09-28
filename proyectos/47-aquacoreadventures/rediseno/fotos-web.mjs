// El clon solo trae íconos de actividades y fotos de destino de banco (Wikimedia): sus CSS y JS no se descargaron.
// Las fotos propias (flota de Progreso, escuela de kite en Isla Blanca, paddleboard en Progreso y dos yates de Cancún)
// se bajaron del sitio en vivo con curl (método 1.2) a assets/originales/. Este script crea copias .webp ligeras
// SOLO de las que usa el rediseño en assets/web/ (publicDir de Vite). No toca el clon.
// Uso: node fotos-web.mjs   (desde proyectos/47-aquacoreadventures/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../assets/originales');
const clon = path.join(aqui, '../sitio/assets/assets/img');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo, nombre de salida, lado largo máximo, carpeta]
const lista = [
  ['hero_cancun-mega-yacht.jpg', 'hero-yate-cancun', 2000],
  ['hero_cancun-yacht-aerial.jpeg', 'yate-cancun-aereo', 1280],
  ['hero_hero-kitefoil-cancun.jpg', 'kite-foil', 1600],
  ['kitesurf_kiteboarding-isla-blanca-cancun.jpg', 'kite-isla-blanca', 1000],
  ['kitesurf_isla-blanca-school.jpg', 'kite-escuela', 900],
  ['kitesurf_kiteboarding-isla-blanca-1.jpg', 'kite-alumna', 900],
  ['activities_kitesurf_gallery-3.jpg', 'kite-salto', 1400],
  ['activities_paddleboard_paddleboard-progreso-amigos.jpg', 'sup-amigos', 1000],
  ['activities_paddleboard_paddleboard-progreso-chica-mar.jpg', 'sup-muelle', 1000],
  ['activities_paddleboard_paddleboard-progreso-man-manglar.jpg', 'sup-manglar', 1000],
  ['activities_paddleboard_paddleboard-progreso-chicas.jpg', 'sup-chicas', 1000],
  ['activities_paddleboard_paddleboard-progreso-amanecer.jpg', 'sup-amanecer', 1000],
  ['progreso-yachts_bayliner-25ft_photo-1.jpg', 'flota-bayliner-25', 900],
  ['progreso-yachts_boston-whaler-30ft_photo-1.jpg', 'flota-boston-whaler-30', 900],
  ['progreso-yachts_catalina-42ft_photo-1.jpg', 'flota-catalina-42', 900],
  ['progreso-yachts_meridian-42ft_photo-1.jpg', 'flota-meridian-42', 900],
  ['progreso-yachts_tiara-44ft_photo-1.jpg', 'flota-tiara-44', 900],
  ['progreso-yachts_silver-45ft_photo-1.jpg', 'flota-silver-45', 900],
  ['progreso-yachts_gulf-star-45ft_photo-1.jpg', 'flota-gulf-star-45', 900],
  ['progreso-yachts_sea-ray-46ft_photo-1.jpg', 'flota-sea-ray-46', 900],
  ['progreso-yachts_sea-ray-46ft-ii_photo-1.jpg', 'flota-sea-ray-46-ii', 900],
  ['progreso-yachts_sea-ray-48ft_photo-1.jpg', 'flota-sea-ray-48', 900],
  ['progreso-yachts_catamaran-50ft_photo-1.jpg', 'flota-catamaran-50', 900],
  ['progreso-yachts_sea-ray-sundancer-60ft_photo-1.jpg', 'flota-sundancer-60', 900],
  ['progreso-yachts_cupecoy-77ft_photo-1.jpg', 'flota-cupecoy-77', 900],
  ['logo.png', 'logo', 240, clon],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado, carpeta = origen] of lista) {
  const entrada = path.join(carpeta, archivo);
  if (!fs.existsSync(entrada)) { console.warn('No encontrado:', archivo); continue; }
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 74, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
console.log(`${Object.keys(medidas).length} fotos: ${(antes / 1048576).toFixed(1)} MB -> ${(despues / 1048576).toFixed(1)} MB`);
console.log(JSON.stringify(medidas));
