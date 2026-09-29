// El clon guarda en sitio/assets/uploads/ las fotos de la portada, de las ocasiones y de los tours de Cancun Catamarans:
// el catamarán frente a Isla Mujeres, grupos en el tapete flotante y en la red, decoraciones con globos, una pedida de mano,
// una despedida de soltera y el brindis al atardecer. Las fotos de cada barco de la flota no se bajaron (están en /flota).
// Este script crea copias .webp en assets/web/ (publicDir de Vite). No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/143-cancuncatamaranes/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/uploads');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const lista = [
  ['hero/20260401_5798f3d8cbc7cfd0.jpg', 'catamaran'], ['hero/20260401_b921775651b5e150.jpg', 'flotante'],
  ['hero/20260401_dff772058012595e.jpg', 'globos-proa'], ['occasions/20260617_5212a75a123da93e.jpg', 'despedida'],
  ['occasions/20260617_f4c3f1ed18a02796.jpg', 'propuesta'], ['occasions/20260617_f5eeada7029d0ea5.jpg', 'grupo'],
  ['settings/20260617_225945_img-20260410-wa0092.jpg', 'decoracion'], ['tours/20260401_10139c2cde9b30af.jpg', 'red'],
  ['tours/20260507_952fc06994ef35ef.jpg', 'atardecer'], ['tours/20260617_5d730b1e218d1092.jpg', 'cumple'],
  ['tours/20260617_ec9ab759dd823e61.jpg', 'fiesta'],
];
for (const [archivo, nombre] of lista) {
  await sharp(path.join(origen, archivo)).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, `${nombre}.webp`));
}
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#0b3b4a"/><path d="M31 10 L31 42 L14 42 Z" fill="#7fe0d6"/><path d="M34 16 L34 42 L48 42 Z" fill="#f3faf9"/><path d="M10 46 H54 L48 52 H16 Z" fill="#ffd9a0"/></svg>');
console.log('ok');
