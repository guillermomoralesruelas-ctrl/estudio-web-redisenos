// Método 1.2 en la nube: el clon no traía fotos. Se bajaron del sitio en vivo (hotel-regis.com/media/, archivos .jfif
// que son JPEG) a ../assets/originales/: fachadas (de día, esquina, atardecer, entrada con el letrero de Villa Don Nacho),
// habitaciones sencilla, doble y triple, otra habitación con escritorio, escritorio, baño, lavabo, el restaurante
// Villa Don Nacho (barra y salón) y su logotipo. Su sitio repite varias en la galería; aquí van una vez.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/545-hotelregis/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../assets/originales');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const medidas = {};
for (const f of fs.readdirSync(origen).filter((n) => n.endsWith('.jpg') && n !== 'logo-villa.jpg')) {
  const nombre = f.replace('.jpg', '');
  const info = await sharp(path.join(origen, f)).rotate()
    .resize({ width: 1300, height: 1300, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 }).toFile(path.join(destino, `${nombre}.webp`));
  medidas[nombre] = [info.width, info.height];
}
// Logotipo: el fondo blanco se vuelve transparente para ponerlo sobre color.
const { data, info } = await sharp(path.join(origen, 'logo-villa.jpg')).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  const m = Math.min(data[i], data[i + 1], data[i + 2]);
  if (m > 235) data[i + 3] = 0; else if (m > 200) data[i + 3] = Math.round(((235 - m) / 35) * 255);
}
await sharp(data, { raw: info }).png().toFile(path.join(destino, 'logo-villa.png'));
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#B3152B"/><text x="32" y="45" text-anchor="middle" font-family="Georgia,serif" font-size="38" fill="#FFF6E8">R</text></svg>');
await sharp(path.join(origen, 'fachada-esquina.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
