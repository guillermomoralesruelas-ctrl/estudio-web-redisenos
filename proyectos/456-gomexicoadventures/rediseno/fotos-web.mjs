// Fotos propias del clon (sitio/assets/wp-content/uploads/): las seis "WhatsApp-Image-2026-…" (trajineras, kayaks,
// canales y el jardín de la chinampa con su carpa roja) y las cuatro de clientes en kayak de sus testimonios (2024…jpg).
// NO se usan: las imágenes PNG con nombre UUID ni las "ChatGPT-Image-…": los originales grandes (51af9210… y 687aee60…,
// 1448 x 1086) traen credenciales C2PA de "OpenAI Media Service" y sus copias recortadas por WordPress perdieron la marca;
// todas las de ese tipo se tratan como generadas con IA. No se descargó nada nuevo.
// Este script crea copias .webp en ../assets/web/ (no toca el clon), el logo, el favicon, la imagen para compartir
// y src/data/fotos.json con las medidas.
// Uso: node fotos-web.mjs   (desde proyectos/456-gomexicoadventures/rediseno)
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

const fotos = [
  ['2026/05/WhatsApp-Image-2026-05-21-at-12.16.18-AM.jpeg', 'trajinera-grupo', 900],
  ['2026/05/WhatsApp-Image-2026-05-21-at-12.16.09-AM.jpeg', 'trajinera-canal', 1280],
  ['2022/03/WhatsApp-Image-2026-05-19-at-1.37.26-AM.jpeg', 'kayaks-atardecer', 1280],
  ['2026/05/WhatsApp-Image-2026-05-25-at-8.45.13-PM-1.jpeg', 'laguna-kayaks', 1280],
  ['2026/05/WhatsApp-Image-2026-05-23-at-2.59.52-PM.jpeg', 'chinampa-carpa', 900],
  ['2026/06/WhatsApp-Image-2026-06-25-at-1.10.37-PM.jpeg', 'chinampa-jardin', 1280],
  ['2026/05/20240924_183910-272x316.jpg', 'cliente-1', 272],
  ['2026/05/20240812_141122-272x316.jpg', 'cliente-2', 272],
  ['2026/05/20240817_214232-272x316.jpg', 'cliente-3', 272],
  ['2026/05/20240725_065929-272x316.jpg', 'cliente-4', 272],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, ancho] of fotos) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: ancho, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Logo (nopal y "GO MÉXICO ADVENTURES" sobre blanco).
const infoLogo = await sharp(path.join(origen, '2026/04/Logo-2.png')).trim().resize({ height: 96 }).webp({ quality: 90 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [infoLogo.width, infoLogo.height];

// Favicon: el nopal del logo (la parte izquierda), sobre blanco.
const logoMeta = await sharp(path.join(origen, '2026/04/Logo-2.png')).trim().toBuffer({ resolveWithObject: true });
const nopal = await sharp(logoMeta.data).extract({ left: 0, top: 0, width: Math.round(logoMeta.info.height * 0.95), height: logoMeta.info.height }).toBuffer();
await sharp(nopal).resize(64, 64, { fit: 'contain', background: '#ffffff' }).flatten({ background: '#ffffff' }).png().toFile(path.join(destino, 'icono.png'));

// Imagen para compartir: la trajinera en el canal, 1200 x 630.
await sharp(path.join(origen, fotos[1][0])).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 80 }).toFile(path.join(destino, 'compartir.jpg'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${fotos.length} fotos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
