// Armonía Spa — fotos propias del clon a .webp para el rediseño.
// Las fotos viven en sitio/assets/img/.
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en
// ../assets/web/ (publicDir de vite.config.ts). No toca el clon.
// Uso: node fotos-web.mjs  (desde proyectos/55-armoniaspa/rediseno)

import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const base = path.join(aqui, '../sitio/assets/img');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [nombre-en-base, nombre-de-salida-sin-extensión, ancho-máximo]
// Solo se usan fotos propias (sin EXIF de Freepik, Shutterstock, Google ni IA).
const lista = [
  // Hero: foto de spa_hero.png (imagen de la portada del sitio)
  ['spa_hero.png',                    'hero',                    1280],
  // Nosotros: foto de la sección "sobre nosotros"
  ['nosotros.png',                    'nosotros',                 900],
  // Faciales
  ['facial.jpg',                      'facial',                  1200],
  ['facial2.jpg',                     'facial2',                  900],
  ['dermapen.jpg',                    'dermapen',                1200],
  ['Hollywood_peeling.jpg',           'hollywood-peeling',       1200],
  ['limpieza_corp.jpg',               'limpieza-corporal',       1200],
  // Masajes
  ['masaje.jpg',                      'masaje',                  1200],
  ['Masaje_descontracturante.jpg',    'masaje-descontracturante', 1200],
  // Depilación (fotos propias — NO Freepik)
  ['dep_axila.jpg',                   'dep-axila',               1200],
  ['dep_bikini.jpg',                  'dep-bikini',              1200],
  ['dep_ipl.jpg',                     'dep-ipl',                 1200],
  ['dep_ipl_piernas.jpg',             'dep-ipl-piernas',         1200],
  ['dep_ipl_axilas.jpg',              'dep-ipl-axilas',           900],
  ['dep_piernas.jpg',                 'dep-piernas',             1200],
  ['dpl_bikini.jpg',                  'dep-laser-bikini',        1200],
  ['tridiodo.jpg',                    'tridiodo',                1200],
  ['tridiodo_axilas.jpg',             'tridiodo-axilas',         1200],
  ['tridiodo_bikini.jpg',             'tridiodo-bikini',         1200],
  ['tridiodo_piernas.jpg',            'tridiodo-piernas',        1200],
  // Uñas (manicure/pedicure — pedicura y pedicure_spa son propias, manicure son Freepik)
  ['pedicura.jpg',                    'pedicura',                1200],
  ['pedicure_spa.jpg',                'pedicure-spa',            1200],
  // Promociones (diseños propios del spa)
  ['Promo1.jpeg',                     'promo1',                   900],
  ['Promo2.jpeg',                     'promo2',                   900],
  ['Promo3.jpeg',                     'promo3',                   900],
  ['Promo4.jpeg',                     'promo4',                   900],
  ['Promo5.jpeg',                     'promo5',                   900],
  ['Promo6.jpeg',                     'promo6',                   900],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [nombre, salida, lado] of lista) {
  const entrada = path.join(base, nombre);
  if (!fs.existsSync(entrada)) { console.warn(`FALTANTE: ${nombre}`); continue; }
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .rotate()
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(path.join(destino, `${salida}.webp`));
  despues += info.size;
  medidas[salida] = [info.width, info.height];
}

// Logo completo (PNG)
const logoSrc = path.join(base, 'LogoCompleto.png');
if (fs.existsSync(logoSrc)) {
  antes += fs.statSync(logoSrc).size;
  const infoLogo = await sharp(logoSrc).webp({ quality: 90 }).toFile(path.join(destino, 'logo.webp'));
  despues += infoLogo.size;
  medidas.logo = [infoLogo.width, infoLogo.height];
}

// Favicon (logo pequeño)
const favSrc = path.join(base, 'logo.png');
if (fs.existsSync(favSrc)) {
  await sharp(favSrc).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));
}

console.log(`${lista.length + 2} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas, null, 2));
