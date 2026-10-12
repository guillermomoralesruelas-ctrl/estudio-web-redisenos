// Método 1.2 en la nube: el clon (sitio/) es de Duda y no sirve de base. El 2026-10-12 se bajaron de hotelentrevalle.com
// (irp.cdn-website.com, a 1920 px, la versión más grande que publica) 45 fotos propias del hotel a ../assets/originales/:
// habitaciones, terraza, spa, jardín, alberca, boda y EVA Restaurante; además su logotipo y los dos sellos de Booking.com.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite), el logotipo sin fondo (verde y blanco) y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/375-entrevallehotelboutique/rediseno)
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
for (const f of fs.readdirSync(origen).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))) {
  const n = f.replace(/\.[^.]+$/, '').toLowerCase();
  if (n.startsWith('logo')) continue;
  const lado = n.startsWith('premio') ? 400 : 1600;
  const info = await sharp(path.join(origen, f)).rotate().flatten({ background: '#ffffff' })
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}

// Logotipo: viene en verde sobre blanco (JPEG). Se usa la luminosidad como transparencia y se pinta en un solo color.
const { data, info } = await sharp(path.join(origen, 'logo.jpg')).trim({ threshold: 12 }).greyscale().raw().toBuffer({ resolveWithObject: true });
for (const [nombre, [r, g, b]] of [['logo-verde', [62, 99, 79]], ['logo-blanco', [255, 255, 255]]]) {
  const rgba = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < info.width * info.height; i++) {
    const a = Math.max(0, Math.min(255, Math.round((255 - data[i]) * 2.2)));
    rgba[i * 4] = r; rgba[i * 4 + 1] = g; rgba[i * 4 + 2] = b; rgba[i * 4 + 3] = a;
  }
  await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } }).resize({ height: 220 }).png().toFile(path.join(destino, `${nombre}.png`));
}

await sharp(path.join(origen, 'vista-cabanas.jpg')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
