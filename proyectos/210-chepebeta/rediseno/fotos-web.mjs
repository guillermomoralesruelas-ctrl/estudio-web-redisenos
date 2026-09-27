// El clon guarda las fotos en sitio/assets/assets/ (20 imágenes de chepebeta.mx: el logo con las dos medallas CANIRAC,
// la foto "polaroid" de la familia amasando pasta, la portada con la empanada, el show de tango, la foto de "Cata
// Maridaje", la empanada de "Entradas" y 14 fotos de su galería "Nuestra Esencia", de 1350 × 1080 y unos 3 MB cada una).
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en ../assets/web/ (no toca el clon).
// Vite usa esa carpeta como publicDir.
// No se usan: wine-pairing-B2hgLQB3.jpg (la foto de "Cata Maridaje": un tomahawk con velas y manteles que no se parecen
// a su salón; parece de banco o generada, ver CAMBIOS.md; la cata usa su foto de dos copas de tinto).
// Uso: node fotos-web.mjs   (desde proyectos/210-chepebeta/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/assets');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
const lista = [
  // Portada, Nuestra Alma y Noches
  ['11-Ccyv___2.png', 'postre-flameado', 1400],
  ['alma-polaroid-stamps-BIn5hQYH.png', 'alma-polaroid', 1300],
  ['hero-bg-C7vJ14OE.jpg', 'empanada-mesa', 900],
  ['tango-event-DQBoQuSh.jpg', 'tango', 1000],
  ['3-CkO5q_ds.png', 'copas-tinto', 1000],
  // Carta (una foto por pestaña)
  ['menu-entradas-BAK5drUC.jpg', 'empanada-espinaca', 900],
  ['14-D5k7Q9js.png', 'entradita', 900],
  ['10-eOH67FdP.png', 'pasta', 900],
  ['6-fi199rbT.png', 'hamburguesas', 900],
  ['9-zmNQtZu1.png', 'postres-cafe', 900],
  ['4-B-MMAYMo.png', 'cava', 900],
  // Nuestra esencia (galería) y Visítanos
  ['1-Cfup0fq_.png', 'pan-chimichurri', 900],
  ['12-XpX9aXcu.png', 'comensal-rosado', 900],
  ['13-CM2LMX1b.png', 'comensal-cerveza', 900],
  ['2-2V871clG.png', 'rebanada-merengue', 900],
  ['7-CgghJZ4f.png', 'torta', 900],
  ['5-CeESOmBZ.png', 'picadita', 900],
  ['8-t5g4sTjn.png', 'salon', 1400],
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

// Logo: se recorta el margen transparente (conserva las dos medallas CANIRAC) y se guarda en .webp con transparencia.
const logoOrig = path.join(origen, 'logo-chepebeta-tb_CjZGR.png');
const logoRecortado = await sharp(logoOrig).trim().toBuffer();
const logo = await sharp(logoRecortado).resize({ width: 600 }).webp({ quality: 88, alphaQuality: 90 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [logo.width, logo.height];

// Favicon: solo el óvalo negro con "Che Pebeta" (sin las medallas), centrado sobre el negro de la marca.
const ovalo = await sharp(logoRecortado).extract({ left: 0, top: 95, width: 1165, height: 420 }).resize({ width: 240 }).toBuffer();
await sharp({ create: { width: 256, height: 256, channels: 4, background: '#120905' } })
  .composite([{ input: ovalo, gravity: 'center' }])
  .png()
  .toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
