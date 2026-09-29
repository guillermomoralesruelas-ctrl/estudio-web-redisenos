// El clon guarda en sitio/assets/wp-content/uploads/2023/04/ fotos propias de Float Sano: la fachada en Hernández Macías
// 12, sus dos cabinas de flotación con luz azul y amarilla, una persona flotando vista desde arriba, la sala con una
// maceta y visitantes junto a una cabina. Las de masaje, sauna, pareja y brindis son de banco y no se usan. Este script
// crea copias .webp en assets/web/ (publicDir de Vite). No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/417-floatsano/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/wp-content/uploads/2023/04');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const lista = [
  ['d1f977_c5c34275b65241d680170cc98c3c0cc1mv2.webp', 'fachada'],
  ['d1f977_06754173030447eab8e5564c09777a6b_mv2.webp', 'cabinas'],
  ['d1f977_403b13f0b73745949df2a93a75e081f4mv2.webp', 'flotando'],
  ['d1f977_927e4b6a96a34efdaa25648919baa95emv2.webp', 'sala'],
  ['d1f977_bf0b39dd35b349a093ff40f2695df415mv2_d_4240_2832_s_4_2.webp', 'visitantes'],
];
for (const [archivo, nombre] of lista) {
  await sharp(path.join(origen, archivo)).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 82 }).toFile(path.join(destino, `${nombre}.webp`));
}
// Ícono: una cápsula de flotación.
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#1d2b5a"/>' +
  '<ellipse cx="32" cy="38" rx="24" ry="12" fill="#2f5fd0"/><path d="M8 36 C14 18 50 18 56 36" fill="none" stroke="#f2c46a" stroke-width="4"/></svg>');
console.log('ok');
