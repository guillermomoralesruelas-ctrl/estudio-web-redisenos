// El clon guarda en sitio/assets/assets/images/ tres fotos propias de COEC (la sala de espera con sillones azules, otra toma
// de la sala y el Dr. Mario Cruz Pérez junto a su tomógrafo) y el logo. Las demás (portadas y servicios) son de banco y no
// se usan. Este script crea copias .webp en assets/web/ (publicDir de Vite) y el ícono. No se descargó nada nuevo y el
// clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/199-centroodontologicoespeci/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/assets/images');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const lista = [
  ['about/about-1.png', 'sala-espera'],
  ['appointment/appointment-1.jpg', 'sala-sillon'],
  ['overview.png', 'doctor-tomografo'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().flatten({ background: '#ffffff' })
    .resize({ width: 1000, height: 1000, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
// Logo en gris (599 x 198) y el corazón del logo como ícono.
await sharp(path.join(origen, 'logo1.png')).png().toFile(path.join(destino, 'logo.png'));
await sharp(path.join(origen, 'favicon.png')).resize(48, 48).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
