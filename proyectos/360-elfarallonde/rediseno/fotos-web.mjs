// El clon guarda las fotos en sitio/assets/wp-content/uploads/ (45 imágenes: platillos, el logotipo del 50 aniversario
// en varios tamaños, tres fotos de clientes de "Opiniones" y una foto de banco, shrimp-400572_1920.jpg, que no se usa).
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en assets/web/
// (no toca el clon). Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/360-elfarallonde/rediseno)
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

// [archivo original, nombre de salida, lado largo máximo]
const lista = [
  ['2025/02/cropped-50-Aniversario-192x192.png', 'icono', 96],
  ['2025/02/cropped-50-Aniversario.png', 'logo-50-aniversario', 320],
  ['2024/09/pescado-zarandeado2_15_11zon-scaled.jpg', 'pescado-zarandeado', 1500],
  ['2025/03/Frame-1792.png', 'zarandeado-pescado', 900],
  ['2025/03/Frame-1791.png', 'zarandeado-pulpo', 900],
  ['2025/03/Frame-1790.png', 'zarandeado-camarones', 900],
  ['2024/09/empanada-de-camaron1_9-scaled.jpg', 'empanadas-de-camaron', 1200],
  ['2025/03/pina-Cantamar-scaled.jpg', 'pina-cantamar', 1200],
  ['2019/07/zaran-1.jpg', 'pescado-y-pulpo-zarandeados', 960],
  ['2019/10/header.png', 'mesa-farallon', 1339],
  // "De la casa" (inicio del sitio)
  ['2019/08/Screen-Shot-2019-08-09-at-4.09.29-AM-300x290.png', 'tacos-carnitas-atun', 300],
  ['2022/03/doradito-de-pulpo_square.png', 'doradito-de-pulpo', 360],
  ['2025/03/taco-Ticla-1024x768.jpg', 'doradito-la-ticla', 360],
  ['2022/03/88CF6BCA-5816-446C-8829-97F2B06DA84A-1-819x1024.jpg', 'tacos-de-picana', 360],
  ['2022/03/IMG_2338-1-819x1024.jpg', 'tacos-de-salmon', 360],
  ['2022/03/3ca508fa-e539-40b9-9099-370af4efd685.jpg', 'coctelito-de-carreta', 360],
  ['2019/08/Screen-Shot-2019-08-09-at-4.34.48-AM.png', 'ostionazo', 360],
  ['2019/08/pancho.jpg', 'panchobalas', 360],
  ['2022/03/ee49bcaf-a08b-49bb-82ba-8c61e03ee97b-1-819x1024.jpg', 'tostada-atun-cueritos', 360],
  // Galería
  ['2025/03/aguachile-de-camaron-scaled.jpg', 'galeria-aguachile', 1100],
  ['2025/03/ostiones-scaled.jpg', 'galeria-ostiones', 1100],
  ['2025/03/callo-de-hacha-scaled.jpg', 'galeria-callo-de-hacha', 1100],
  ['2025/03/camarones-a-la-diabla-scaled.jpg', 'galeria-camarones-diabla', 1100],
  ['2025/03/tostada-de-ceviche-de-pescado-scaled.jpg', 'galeria-tostada-ceviche', 1100],
  ['2025/03/tostada-Santa-Maria-del-Oro-scaled.jpg', 'galeria-tostada-santa-maria', 1100],
  ['2025/03/pulpo-zarandeado-scaled.jpg', 'galeria-pulpo-zarandeado', 1100],
  ['2019/07/tiradito-de-pulpo-Brooklyn.jpg', 'galeria-tiradito-pulpo', 960],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
