// Dr. Daniel Robles — fotos del clon a .webp optimizadas para el rediseño.
// Las fotos viven en sitio/assets/img/.
// Crea copias .webp en ../assets/web/ (publicDir de vite.config.ts).
// No toca el clon.
// Uso: node fotos-web.mjs  (desde proyectos/330-drdanielrobles/rediseno)

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
const lista = [
  // Hero principal (foto mujer con fondo estudio)
  ['mujer-hero.webp',                                'hero',                        1440],
  // Dr. Robles (retrato)
  ['dr-robles-acerca-de.webp',                       'doctor',                       800],
  // Filosofía / nosotros
  ['nuestra-filosofia-dr-robles.webp',               'filosofia',                   1200],
  // Instalaciones
  ['instalaciones.webp',                             'instalaciones',               1200],
  // Turismo médico
  ['turismo-dr-robles-nosotros.webp',                'turismo',                      800],
  // Categorías de procedimientos (desktop)
  ['cirugias-mamarias-menu-ex.webp',                 'cat-mamarias',                 700],
  ['cirugias-corporales-menu-ex.webp',               'cat-corporales',               700],
  ['procedimientos-no-quirurgicos-menu-ex.webp',     'cat-no-quirurgicos',           700],
  ['cirugias-faciales-menu-ex.webp',                 'cat-faciales',                 700],
  // CTA mujer (lateral en botón de cita)
  ['cta-woman.webp',                                 'cta-mujer',                    500],
  // Fondo CTA
  ['cta-background.webp',                            'cta-fondo',                   1440],
  // Minerva (imagen decorativa)
  ['minerva.webp',                                   'minerva',                      700],
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
    .webp({ quality: 78, effort: 5 })
    .toFile(path.join(destino, `${salida}.webp`));
  despues += info.size;
  medidas[salida] = [info.width, info.height];
}

// Logos de hospitales y credenciales (ya son pequeños, solo re-comprimir)
const logos = [
  ['hospital-angeles-del-carmen.webp',              'hosp-angeles'],
  ['hospital-real-san-jose-valle-real.webp',        'hosp-real-san-jose'],
  ['hospital-san-javier.webp',                      'hosp-san-javier'],
  ['hospitales-puerta-de-hierro.webp',              'hosp-puerta-hierro'],
  ['hospital-country-2000.webp',                    'hosp-country'],
  ['hospital-pablo-neruda.webp',                    'hosp-pablo-neruda'],
  ['hospital-altamira.webp',                        'hosp-altamira'],
  ['american-society-of-plastic-surgeons.webp',     'cred-asps'],
  ['colegio-y-sociedad-de-cirujanos-plasticos.webp','cred-cmcper'],
  ['amcper.webp',                                   'cred-amcper'],
  ['isaps.webp',                                    'cred-isaps'],
  ['logotipo.webp',                                 'logo'],
  ['logo-dark.webp',                                'logo-dark'],
];

for (const [nombre, salida] of logos) {
  const entrada = path.join(base, nombre);
  if (!fs.existsSync(entrada)) { console.warn(`FALTANTE: ${nombre}`); continue; }
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .webp({ quality: 85 })
    .toFile(path.join(destino, `${salida}.webp`));
  despues += info.size;
  medidas[salida] = [info.width, info.height];
}

console.log(`${lista.length + logos.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas, null, 2));
