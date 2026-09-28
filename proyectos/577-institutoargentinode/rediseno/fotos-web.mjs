// El clon guarda en sitio/assets/wp-content/uploads/ sus fotos: las cocinas de cinco sedes (miniaturas de 370 × 370),
// banners con texto encima e íconos. Se usan las cinco cocinas y, del banner "Inicio de clases" (BANNER-3.png), solo la
// franja de arriba con el chef y los alumnos (se recorta antes de la banda de texto). No se usan los íconos ni los
// slides con texto. Este script crea copias .webp en assets/web/ (publicDir de Vite). No se descargó nada nuevo.
// Uso: node fotos-web.mjs   (desde proyectos/577-institutoargentinode/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/wp-content/uploads');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

let antes = 0, despues = 0;
const medidas = {};
async function hacer(archivo, nombre, fn) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await fn(sharp(entrada)).webp({ quality: 80, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Portada: banner de 1778 × 787; la banda "INICIO DE CLASES" empieza cerca de y = 550.
await hacer('2026/07/BANNER-3.png', 'clase-chef', (s) => s.extract({ left: 0, top: 0, width: 1778, height: 540 }).resize({ width: 1600 }));

const cocinas = [
  ['2024/06/COCINA-1-GDL-370x370.jpg', 'cocina-guadalajara'],
  ['2024/06/COCINA-1-LEON-370x370.jpeg', 'cocina-leon'],
  ['2024/06/COCINA-1-QRO-370x370.jpg', 'cocina-queretaro'],
  ['2025/05/WhatsApp-Image-2025-05-28-at-10.21.26_13918651-370x370.jpg', 'cocina-merida'],
  ['2026/03/cocina-toluca-370x370.png', 'cocina-toluca'],
];
for (const [archivo, nombre] of cocinas) await hacer(archivo, nombre, (s) => s);

console.log(`${Object.keys(medidas).length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
