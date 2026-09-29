// El clon guarda en sitio/assets/img/ las fotos propias de Fuente de Piedra (su galería "Nuestro lugar", "Instalaciones"
// y "Eventos", con sus pies de foto), el banner y el logo. Este script crea copias .webp en assets/web/ (publicDir de
// Vite) de las que usa el rediseño, el ícono y la imagen para compartir. No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/434-fuentedepiedra/rediseno)
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
  ['fallback-banner.jpg', 'atardecer'],
  ['galeria/gran_recepcion.jpg', 'boda-recepcion'],
  ['galeria/espacio_comodidades.png', 'fachada-lavanda'],
  ['galeria/1762912326_WhatsApp%20Image%202025-04-30%20at%2010.54.04%20AM%20(8).jpeg', 'ceremonia-jardin'],
  ['galeria/1762912260_WhatsApp%20Image%202025-04-30%20at%2010.54.06%20AM%20(4).jpeg', 'aniversario-mesa'],
  ['galeria/1762912294_WhatsApp%20Image%202025-04-30%20at%2010.54.05%20AM%20(5).jpeg', 'aniversario-redonda'],
  ['galeria/1762912474_WhatsApp%20Image%202025-04-30%20at%2010.54.06%20AM%20(3).jpeg', 'aniversario-explanada'],
  ['galeria/1762909888_FDP-35.jpg', 'fogata'],
  ['galeria/1762909866_FdP-59.jpg', 'ingreso-noche'],
  ['galeria/1762908288_LDFDP-74.jpg', 'distribuidor'],
  ['galeria/1762908374_FdP-46.jpg', 'fuente-pandurata'],
  ['galeria/1762908507_FdP-60.jpg', 'suite-sala'],
  ['galeria/1762908409_FdP-61.jpg', 'suite-estancia'],
  ['galeria/1762908459_FdP-65.jpg', 'suite-tocador'],
  ['galeria/1762908436_FdP-62.jpg', 'suite-bano'],
  ['galeria/1762908099_FdP-94.jpg', 'banos-damas'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: 1400, height: 1100, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 74, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
const logo = await sharp(path.join(origen, 'logo.png')).trim().resize({ width: 420, withoutEnlargement: true }).webp({ quality: 90, alphaQuality: 100 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [logo.width, logo.height];
// Ícono: su favicon es blanco sobre transparente (no se ve en pestañas claras); se usa el emblema de su logo sobre verde olivo.
{
  const logoRecortado = await sharp(path.join(origen, 'logo.png')).trim().toBuffer();
  const m = await sharp(logoRecortado).metadata();
  const franja = await sharp(logoRecortado).extract({ left: 0, top: 0, width: m.width, height: Math.round(m.height * 0.36) }).png().toBuffer();
  const franjaRecortada = await sharp(franja).trim().toBuffer();
  const f = await sharp(franjaRecortada).metadata();
  const centro = await sharp(franjaRecortada).extract({ left: Math.round(f.width / 2 - 170), top: 0, width: 340, height: f.height }).png().toBuffer();
  const emblema = await sharp(centro).trim().resize(40, 40, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const fondo = Buffer.from('<svg width="64" height="64"><rect width="64" height="64" rx="14" fill="#4f553c"/></svg>');
  await sharp(fondo).composite([{ input: emblema, left: 12, top: 12 }]).png().toFile(path.join(destino, 'icono.png'));
}
await sharp(path.join(origen, 'fallback-banner.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 78 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas));
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
