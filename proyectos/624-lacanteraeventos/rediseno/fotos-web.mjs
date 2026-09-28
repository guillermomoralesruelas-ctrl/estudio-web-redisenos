// Las fotos del clon (sitio/assets/wp-content/uploads) miden hasta 2560 px y pesan hasta 1.1 MB.
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en ../assets/web/
// (no toca el clon). Vite usa esa carpeta como publicDir.
// No se usan los dos carteles con modelo (Open House XV Años y Wedding Event): parecen de banco.
// Uso: node fotos-web.mjs   (desde proyectos/624-lacanteraeventos/rediseno)
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
  ['2026/04/La-Cantera-Eventos-Nosotros-1-scaled.webp', 'hero-salon-flores', 2000],
  ['2026/04/La-Cantera-Eventos-Nosotros-2-scaled.webp', 'decoracion', 1400],
  ['2026/04/La-Cantera-Eventos-Nosotros-3-scaled.webp', 'gastronomia', 1400],
  ['2026/04/La-Cantera-Eventos-Salon-3-scaled.webp', 'mobiliario-copas', 1400],
  ['2026/06/La-Cantera-Eventos-Eventos-Boda-1-1.webp', 'evento-boda', 1200],
  ['2026/06/La-Cantera-Eventos-XV-Anos-4-1-scaled.webp', 'evento-xv', 1200],
  ['2026/06/La-Cantera-Eventos-Eventos-Graduaciones-1-1-scaled.webp', 'evento-graduacion', 1200],
  ['2026/06/La-Cantera-Eventos-Eventos-Posadas-1-1-scaled.webp', 'evento-posada', 1200],
  ['2026/04/La-Cantera-Eventos-Eventos-Empresariales.webp', 'evento-empresarial', 1200],
  ['2026/06/La-Cantera-Eventos-Eventos-Eventos-Sociales-1-1-scaled.webp', 'evento-social', 1200],
  ['2026/04/La-Cantera-Eventos-Boda-2-scaled.webp', 'galeria-boda-pista', 1400],
  ['2026/04/La-Cantera-Eventos-Salon-4-scaled.webp', 'galeria-salon-montaje', 1600],
  ['2026/04/La-Cantera-Eventos-Salon-6-scaled.webp', 'galeria-salon-alto', 1600],
  ['2026/06/La-Cantera-Eventos-Boda-1-scaled.webp', 'galeria-boda-baile', 1400],
  ['2026/04/La-Cantera-Eventos-Salon-1-scaled.webp', 'galeria-salon-rosa', 1400],
  ['2026/04/La-Cantera-Eventos-Salon-11-scaled.webp', 'galeria-salon-pantalla', 1400],
  ['2026/04/La-Cantera-Eventos-Salon-12-scaled.webp', 'galeria-salon-jardin', 1400],
  ['2026/04/La-Cantera-Eventos-Salon-2-scaled.webp', 'galeria-chef', 1400],
  ['2026/04/La-Cantera-Eventos-XV-Anos-1-scaled.webp', 'galeria-xv-dj', 1400],
  ['2026/04/La-Cantera-Eventos-XV-Anos-3-scaled.webp', 'galeria-xv-vals', 1400],
  ['2026/04/La-Cantera-Eventos-XV-Anos-5-scaled.webp', 'galeria-xv-espejos', 1400],
  ['2026/04/LaCanteraEventos_Blanco-scaled.webp', 'logo-blanco', 600],
  ['2026/04/LaCanteraEventos_Negro-scaled.webp', 'logo-negro', 600],
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
    .webp({ quality: 74, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
console.log(`${Object.keys(medidas).length} fotos: ${(antes / 1048576).toFixed(1)} MB -> ${(despues / 1048576).toFixed(1)} MB`);
console.log(JSON.stringify(medidas));

// Icono de la pestaña (lo usa index.html como ./favicon.svg); assets/web/ no va a git, por eso se escribe aquí.
fs.writeFileSync(path.join(destino, 'favicon.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#121212"/><text x="32" y="46" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="40" fill="#f5f1ea">C</text></svg>\n');
