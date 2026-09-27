// El clon guarda en sitio/assets/media/<n>/conversions/ la foto de portada (600 px de ancho) de cada una de las 114
// propiedades de su "Búsqueda por mapa", y en sitio/assets/assets/img/ el logo, los logos de afiliados y renders de
// preventas. Ninguna foto trae metadatos de Google Maps/Picasa ni de IA. No se descargó nada nuevo.
// Este script crea copias .webp ligeras en assets/web/ (no toca el clon): p/<id>.webp por propiedad (el id es el de
// src/data/propiedades.json), copia el logo y los afiliados, y hace el favicon. Vite usa assets/web/ como publicDir.
// También escribe src/data/fotos.json con las medidas de cada foto para poner width y height.
// Uso: node fotos-web.mjs   (desde proyectos/326-domusvallartafine/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(path.join(destino, 'p'), { recursive: true });

const propiedades = JSON.parse(fs.readFileSync(path.join(aqui, 'src/data/propiedades.json'), 'utf8'));
let antes = 0, despues = 0;
const medidas = {};
for (const p of propiedades) {
  const entrada = path.join(origen, p.foto);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: 640, height: 640, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 74, effort: 5 })
    .toFile(path.join(destino, 'p', `${p.id}.webp`));
  despues += info.size;
  medidas[p.id] = [info.width, info.height];
}
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas));

// Logo (SVG blanco) y afiliados, tal cual.
for (const [a, b] of [
  ['assets/img/domus-logo-white.svg', 'logo.svg'],
  ['assets/img/logo_ampi_blanco.png', 'ampi.png'],
  ['assets/img/realtor.svg', 'realtor.svg'],
  ['assets/img/mls.svg', 'mls.svg'],
  ['assets/img/flexmls.png', 'flexmls.png'],
]) fs.copyFileSync(path.join(origen, a), path.join(destino, b));

// Render de la fachada de MCS Fluvial (su preventa principal), a 900 px.
const mcs = await sharp(path.join(origen, 'assets/img/fachada-mcs.jpg')).resize({ width: 900, withoutEnlargement: true }).webp({ quality: 74, effort: 5 }).toFile(path.join(destino, 'mcs-fluvial.webp'));
console.log('mcs-fluvial', mcs.width, mcs.height);

// Favicon: el suyo de 96 px a 64 px.
await sharp(path.join(origen, 'favicon/favicon-96x96.png')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));

console.log(`${propiedades.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
