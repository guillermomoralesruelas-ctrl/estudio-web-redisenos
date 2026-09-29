// El clon guarda en sitio/assets/images/team/ los retratos propios de cuatro dentistas de Justsmiles con su uniforme
// (Dr. Martín Guillén, Dra. Fernanda Lara, Dr. Manuel Martínez y Dra. Guillermina Estrada). Las fotos del slider, de
// servicios y los íconos son de banco y no se usan; el logo no se descargó en el clon. Este script crea copias .webp en
// assets/web/ (publicDir de Vite). No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/232-clinicadentaljustsmiles/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/images/team');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const lista = [['1.webp', 'dr-martin-guillen'], ['2.webp', 'dra-fernanda-lara'], ['4.webp', 'dr-manuel-martinez'], ['8.webp', 'dra-guillermina-estrada']];
let antes = 0, despues = 0;
for (const [archivo, nombre] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).webp({ quality: 82, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
}
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);

// Ícono: un diente simple con el azul y el verde de su uniforme (el logo no está en el clon).
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#10244b"/>' +
  '<path d="M20 18c-6 0-8 6-7 12 1 5 3 8 4 14 1 5 5 5 6 0l2-8c1-3 5-3 6 0l2 8c1 5 5 5 6 0 1-6 3-9 4-14 1-6-1-12-7-12-4 0-6 2-8 2s-4-2-8-2Z" fill="#7ac142"/></svg>');
