// El clon guarda en sitio/assets/images/ las fotos de sus rutas (banners de cada tour, con sus viajeros) y el logo.
// Este script crea copias .webp en assets/web/ (publicDir de Vite) solo de las que usa el rediseño, más el ícono.
// No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/554-huastecaviva/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/images');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const lista = [
  ['banertamul.jpg', 'r-tamul'],
  ['baner-xilitla-1.jpg', 'r-xilitla'],
  ['baner-tamasopo.jpg', 'r-puente'],
  ['banermicos.jpg', 'r-micos'],
  ['banner-meco.jpg', 'r-meco'],
  ['baner-tamtoc-1.jpg', 'r-tamtoc'],
  ['baner-taninul.jpg', 'o-taninul'],
  ['baner-golo.jpg', 'o-golondrinas'],
  ['baner-beto.jpg', 'o-castillo'],
  ['baner-huichi.jpg', 'o-huichi'],
  ['rafting1.jpg', 'a-rafting'],
  ['avent-tirolesa.jpg', 'a-tirolesa'],
  ['aventura-rappel.jpg', 'a-rappel'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: 1200, height: 1000, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 74, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
// Logo (fondo transparente) e ícono: el ave verde del logo.
const logo = await sharp(path.join(origen, 'logohv2.png')).resize({ width: 360 }).webp({ quality: 90, alphaQuality: 100 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [logo.width, logo.height];
// Ícono: el círculo verde con el ave blanca de su logo, sin las letras que se le enciman abajo a la izquierda.
{
  const s = 620, cx = 1430, cy = 305, R = 292;
  const { data, info } = await sharp(path.join(origen, 'logohv2.png')).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = Buffer.alloc(s * s * 4);
  for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
    const X = cx - s / 2 + x, Y = cy - s / 2 + y, o = (y * s + x) * 4;
    if (Math.hypot(X - cx, Y - cy) > R || X < 0 || Y < 0 || X >= info.width || Y >= info.height) continue;
    const i = (Y * info.width + X) * 4;
    const blanco = data[i + 3] > 200 && data[i] > 225 && data[i + 1] > 225 && data[i + 2] > 225 && !(X < cx - 40 && Y > cy + 118);
    px.set(blanco ? [255, 255, 255, 255] : [0x00, 0x99, 0x33, 255], o);
  }
  await sharp(px, { raw: { width: s, height: s, channels: 4 } }).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));
}
// Imagen para compartir (Open Graph): la panga llegando a la cascada de Tamul.
await sharp(path.join(origen, 'banertamul.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 78 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas));
console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
