// Copias .webp ligeras SOLO de las fotos propias que usa el rediseño, en ../assets/web/
// (no toca el clon). Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/307-dermatologiaesteticaen/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo en sitio/assets, nombre de salida, lado largo máximo]
// Solo fotos propias: retrato de la doctora y las dos fotos de archivo de la clínica.
// Las fotos de equipos (Alma, Lumenis, Fotona, EndyMed, HydraFacial, VISIA) son del fabricante: no se usan.
const lista = [
  ['_astro/dra-dafne-authority-mid.DE4NYyBY_1XOko5.webp', 'dra-dafne', 630],
  ['dr-francisco/clinic-1991-facade.jpeg', 'fachada-1991', 1400],
  ['dr-francisco/francisco-18-world-congress-dermatology-1992-full.webp', 'dr-francisco-1992', 1100],
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
    .webp({ quality: 78, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
// Íconos del sitio (favicon con su monograma DA)
for (const f of ['favicon.svg', 'favicon-32x32.png', 'apple-touch-icon.png']) fs.copyFileSync(path.join(origen, f), path.join(destino, f));
console.log(`${Object.keys(medidas).length} fotos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
console.log(JSON.stringify(medidas, null, 2));
