// El clon guarda en sitio/assets/ fotos propias de El Patrón Juárez con su logo: el local, un corte, un ritual de barba,
// un facial, la toalla caliente de la Experiencia Patrón, un niño y los retratos de Marcelo y Melisa. No se usa el retrato
// de Yosef: trae credenciales C2PA con SynthID (hecho o retocado con IA de Google). Este script crea copias .webp en
// assets/web/ (publicDir de Vite). No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/363-elpatronbarberia/rediseno)
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

const lista = [
  ['patron_hero_bg_real.jpg', 'local'], ['patron_service_cut_real.jpg', 'corte'], ['patron_service_beard_real.jpg', 'barba'],
  ['facial_black_real.jpg', 'facial'], ['patron_experience_real.jpg', 'experiencia'], ['patroncitos_real.jpg', 'patroncito'],
  ['marcelo_cool.png', 'marcelo'], ['melisa.png', 'melisa'],
];
for (const [archivo, nombre] of lista) {
  await sharp(path.join(origen, archivo)).resize({ width: 900, withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(destino, `${nombre}.webp`));
}
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#0b0b0c"/><text x="32" y="46" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="40" fill="#ffd400">P</text></svg>');
console.log('ok');
