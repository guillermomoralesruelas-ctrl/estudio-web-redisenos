// El clon guarda en sitio/assets/img/ las fotos de sus tours (ballenas, Islas Marietas, delfines, tortugas, kayak, Los
// Arcos y Río Nogalito), su logo y los de las redes de conservación. No se usan las dos de buceo (parecen de banco), la de
// canopy ni la de San Sebastián. Este script crea copias .webp en assets/web/ (publicDir de Vite), el logo y el ícono. No
// se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/404-exploravallarta/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/img');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const lista = [
  ['avistamiento-ballenas-puerto-vallarta.webp', 'ballena-cola', 1600],
  ['avistamiento-ballenas-vallarta.webp', 'ballena-salto', 800],
  ['islas-marietas-hidden-beach.webp', 'playa-del-amor', 1600],
  ['delfines-libertad-vallarta.webp', 'delfines', 800],
  ['liberacion-tortugas-marinas.webp', 'tortugas', 1200],
  ['kayak-vallarta-ocean.webp', 'kayak', 800],
  ['snorkel-los-arcos-vallarta.webp', 'los-arcos', 1200],
  ['hiking-rio-nogalito.webp', 'rio-nogalito', 800],
];
const logos = [
  ['raben-logo-ballenas.webp', 'logo-raben'],
  ['logo-nado-por-las-ballenas.webp', 'logo-nado'],
  ['logo-red-varamientos-bahia-de-banderas.webp', 'logo-varamientos'],
  ['logo-biologos-marinos-org.webp', 'logo-biologos'],
];

let antes = 0, despues = 0;
for (const [archivo, nombre, ancho] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).resize({ width: ancho, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
}
for (const [archivo, nombre] of logos) {
  await sharp(path.join(origen, archivo)).resize({ width: 240, height: 160, fit: 'inside' }).webp({ quality: 85 }).toFile(path.join(destino, `${nombre}.webp`));
}
await sharp(path.join(origen, 'Logo%20Explora%20Vallarta.webp')).webp({ quality: 90 }).toFile(path.join(destino, 'logo.webp'));
await sharp(path.join(origen, 'favicon/apple-touch-icon.png')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
