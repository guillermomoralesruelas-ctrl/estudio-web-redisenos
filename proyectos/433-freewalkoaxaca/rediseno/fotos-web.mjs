// El clon guarda las fotos en sitio/assets/wp-content/uploads/2026/09/ (8 fotos reales + logo SVG).
// Fotos propias del tour: su banner de grupo (1441×706), tours (4 tarjetas 456×347), foto cuadrada de grupo
// (722×722), banner ancho del equipo (1441×367) y otra foto (1441×706).
// No se usa ChatGPT-Image-9-sept-2026-07_35_35-p.m.webp (imagen generada con IA; nombre indica ChatGPT).
// El logo existe en SVG (Logo-principal.svg, 3000×3000) y en PNG negro (2020/06/).
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en ../assets/web/.
// Uso: node fotos-web.mjs   (desde proyectos/433-freewalkoaxaca/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen09 = path.join(aqui, '../sitio/assets/wp-content/uploads/2026/09');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [carpeta, archivo original, nombre de salida, lado largo máximo]
// Banner-hover-2-1.webp: grupo de turistas con guía (hero del sitio original)
// Ptron-5.webp: otra foto del tour (1441×734)
// Rectangle-33.png: foto del tour privado de ciudad (456×347)
// Rectangle-35.webp: foto del food tour (456×347)
// Rectangle-37.webp: foto del tour de mezcal y alebrijes (456×347)
// Rectangle-39-1.webp: foto del tour de mercado (456×347)
// image-5.webp: grupo cuadrado de turistas en la caminata (722×722)
// Group-1000004845.webp: banner ancho (equipo o ciudad) (1441×367)
const fotos = [
  ['Banner-hover-2-1.webp', 'hero',      1440],  // grupo con guía — foto del hero
  ['Ptron-5.webp',          'tour',      1440],  // otra foto del tour
  ['image-5.webp',          'grupo',      720],  // cuadrado: grupo en la caminata
  ['Group-1000004845.webp', 'banner',   1440],   // banner ancho del tour
  ['Rectangle-33.png',      't-privado', 600],   // tarjeta tour privado
  ['Rectangle-35.webp',     't-food',    600],   // tarjeta food tour
  ['Rectangle-37.webp',     't-mezcal',  600],   // tarjeta mezcal & alebrijes
  ['Rectangle-39-1.webp',   't-market',  600],   // tarjeta market tour
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of fotos) {
  const entrada = path.join(origen09, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .rotate()
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
  console.log(`  ${nombre}.webp  ${info.width}×${info.height}`);
}

// Logo SVG ya es vectorial, lo copiamos tal cual.
fs.copyFileSync(path.join(origen09, 'Logo-principal.svg'), path.join(destino, 'logo.svg'));
console.log('  logo.svg  (SVG vectorial)');

// Favicon: usamos el PNG negro del logo, recortado a 64×64 para icono.
const origen20 = path.join(aqui, '../sitio/assets/wp-content/uploads/2020/06');
await sharp(path.join(origen20, 'free-walking-tour-oaxaca-logo-negro.png'))
  .resize(64, 64, { fit: 'contain', background: { r: 255, g: 181, b: 0, alpha: 1 } })
  .png()
  .toFile(path.join(destino, 'icono.png'));
console.log('  icono.png  64×64');

// OG image (1200×630) desde el hero.
await sharp(path.join(origen09, 'Banner-hover-2-1.webp'))
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82 })
  .toFile(path.join(destino, 'compartir.jpg'));
console.log('  compartir.jpg  1200×630');

// Guardar medidas para el código.
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`\n${fotos.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
