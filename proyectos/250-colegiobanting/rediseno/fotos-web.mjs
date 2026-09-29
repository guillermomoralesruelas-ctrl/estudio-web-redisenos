// El clon guarda en sitio/assets/ las fotos del Colegio Banting: alumnos con Chromebook, el comedor de preescolar, la
// exhibición de taekwondo de los talleres y fotos de familias en eventos (testimonios). No se usan los carteles de
// seguridad, la tarjeta Kigo, el cuadro de horario extendido (400 px, con franjas negras) ni los retratos marcados
// "-ai" en el nombre del archivo. Este script crea copias .webp en assets/web/ (publicDir de Vite). No se descargó nada nuevo.
// Uso: node fotos-web.mjs   (desde proyectos/250-colegiobanting/rediseno)
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
  ['_astro/chromebook-program.C4xNYV6P_ZcV87X.webp', 'chromebook', 1400], ['_astro/comedor.BbF_OKlI_Z1rj9Ac.webp', 'comedor', 1280],
  ['_astro/talleres-extracurriculares.J4G2kMYp_Z1uMKFs.webp', 'taekwondo', 1280],
  ['images/testimonials/padre-seguridad.jpg', 'familia-1', 400], ['images/testimonials/familia-valor.jpg', 'familia-2', 400],
];
for (const [archivo, nombre, ancho] of lista) {
  await sharp(path.join(origen, archivo)).resize({ width: ancho, withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, `${nombre}.webp`));
}
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#4b2a8a"/><path d="M20 14h14a10 10 0 0 1 3 19.5A10.5 10.5 0 0 1 34 50H20Z" fill="#f6c945"/></svg>');
console.log('ok');
