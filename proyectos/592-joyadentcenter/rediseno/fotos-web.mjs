// El clon guarda en sitio/assets/wp-content/uploads/ las fotos propias de JoyaDent Center (sesión profesional de la
// clínica de 2023, retrato de la Dra. Karla Joya, fotos del equipo de 2024 y la fachada) y su logo. Este script crea
// copias .webp en assets/web/ (publicDir de Vite) de las que usa el rediseño, el ícono y la imagen para compartir.
// No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/592-joyadentcenter/rediseno)
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

const lista = [
  ['2023/07/Joyadent2023-40-Grande.jpeg', 'recepcion'],
  ['2023/07/Joyadent2023-42.jpg', 'consultorio'],
  ['2023/07/Joyadent2023-60-scaled.jpg', 'consultorio-2'],
  ['2023/07/Joyadent2023-8-Grande.jpeg', 'consulta'],
  ['2024/10/JOYA-scaled.jpg', 'dra-karla-joya'],
  ['2024/11/IMG_5319E821357B-1.jpeg', 'procedimiento'],
  ['2024/11/IMG_4966-1-scaled.jpeg', 'equipo-quirurgico'],
  ['2024/11/Diseno-sin-titulo-18.png', 'equipo-guantes'],
  ['2022/12/ofi2.png', 'fachada'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: 1300, height: 1300, fit: 'inside', withoutEnlargement: true })
    .flatten({ background: '#ffffff' }).webp({ quality: 76, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
// Logos: el azul (A) para fondos claros y el blanco (B) para el pie.
for (const [archivo, nombre] of [['2022/10/Logo-Joyadent-Center_A-PNG-1-1.png', 'logo'], ['2022/10/Logo-Joyadent-Center_B-PNG-1.png', 'logo-blanco']]) {
  const info = await sharp(path.join(origen, archivo)).trim().resize({ width: 380, withoutEnlargement: true }).webp({ quality: 90, alphaQuality: 100 }).toFile(path.join(destino, `${nombre}.webp`));
  medidas[nombre] = [info.width, info.height];
}
// Ícono: el diente con manos del logo, recortado de la parte de arriba del logo azul, sobre blanco.
{
  const logo = await sharp(path.join(origen, '2022/10/Logo-Joyadent-Center_A-PNG-1-1.png')).trim().toBuffer();
  const m = await sharp(logo).metadata();
  const arriba = await sharp(logo).extract({ left: 0, top: 0, width: m.width, height: Math.round(m.height * 0.62) }).png().toBuffer();
  const diente = await sharp(arriba).trim().resize(50, 50, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toBuffer();
  const fondo = Buffer.from('<svg width="64" height="64"><rect width="64" height="64" rx="16" fill="#ffffff"/></svg>');
  await sharp(fondo).composite([{ input: diente, left: 7, top: 7 }]).png().toFile(path.join(destino, 'icono.png'));
}
await sharp(path.join(origen, '2023/07/Joyadent2023-40-Grande.jpeg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 80 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas));
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
