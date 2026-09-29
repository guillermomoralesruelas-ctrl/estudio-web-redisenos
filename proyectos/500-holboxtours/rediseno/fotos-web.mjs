// El clon guarda en sitio/assets/img/ las fotos de Holbox Tours: la playa con su marca de agua, el letrero de Holbox, el
// muelle, el faro de Cabo Catoche y dos fotos de nado con el tiburón ballena tomadas con cámara de acción; también
// tarjetas de tours con etiquetas ("SALE", "PRIVATE") pegadas en la imagen. Este script crea copias .webp en
// assets/web/ (publicDir de Vite) solo de las que usa el rediseño; a las tarjetas les recorta la franja de la etiqueta.
// No se usan las de bioluminiscencia, Chichén Itzá, Ek Balam, Tulum ni las dos de tiburón de estudio: parecen de banco.
// No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/500-holboxtours/rediseno)
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

const medidas = {};
let antes = 0, despues = 0;
async function guarda(entrada, nombre, recorte) {
  antes += fs.statSync(entrada).size;
  let img = sharp(entrada);
  if (recorte) img = img.extract(recorte);
  const info = await img.resize({ width: 1400, height: 1000, fit: 'inside', withoutEnlargement: true }).webp({ quality: 76, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
await guarda(path.join(origen, 'bg.jpg'), 'playa');
await guarda(path.join(origen, 'nado-tiburon.jpg'), 'nado');
await guarda(path.join(origen, 'tiburonballenaholbox.jpg'), 'tiburon');
await guarda(path.join(origen, 'isla-holbox.png'), 'letrero');
// Tarjetas de 406 × 481 con la etiqueta en la esquina de arriba: se quitan los primeros 60 px.
await guarda(path.join(origen, 'tour-clasico.jpg'), 'muelle', { left: 0, top: 60, width: 406, height: 421 });
await guarda(path.join(origen, 'tour-snorkel-en-cabo-catoche.jpg'), 'faro', { left: 0, top: 60, width: 406, height: 421 });
const logo = await sharp(path.join(origen, 'logo-nav.png')).webp({ quality: 95, alphaQuality: 100 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [logo.width, logo.height];
const logoB = await sharp(path.join(origen, 'logo-head.png')).webp({ quality: 95, alphaQuality: 100 }).toFile(path.join(destino, 'logo-blanco.webp'));
medidas['logo-blanco'] = [logoB.width, logoB.height];
// Ícono: el visor de snorkel del logo (parte central), sobre blanco.
{
  const centro = await sharp(path.join(origen, 'logo-nav.png')).extract({ left: 74, top: 0, width: 40, height: 46 }).png().toBuffer();
  const g = await sharp(centro).trim().resize(52, 52, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const fondo = Buffer.from('<svg width="64" height="64"><rect width="64" height="64" rx="16" fill="#ffffff"/></svg>');
  await sharp(fondo).composite([{ input: g, left: 6, top: 6 }]).png().toFile(path.join(destino, 'icono.png'));
}
await sharp(path.join(origen, 'nado-tiburon.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 80 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas));
console.log(`fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`, JSON.stringify(medidas));
