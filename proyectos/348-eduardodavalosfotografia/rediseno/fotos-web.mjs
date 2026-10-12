// Método 1.2 en la nube: el clon de Adobe Portfolio trae imágenes recortadas. El 2026-10-12 se bajaron a ../assets/originales/
// 18 fotos de su página "Nuestro Trabajo" (cdn.myportfolio.com, la versión más grande publicada) y su firma ("Eduardo Davalos · We make memories").
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite), la firma en blanco y negro con transparencia y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/348-eduardodavalosfotografia/rediseno)
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
for (const f of fs.readdirSync(origen).filter((f) => /^boda-.*\.(jpe?g|png)$/i.test(f))) {
  const n = f.replace(/\.[^.]+$/, '').toLowerCase();
  const lado = n === 'boda-01' ? 2400 : 1600;
  const info = await sharp(path.join(origen, f)).rotate().resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Firma: el trazo oscuro sobre blanco se vuelve canal alfa, en blanco (para fondos oscuros) y en tinta.
const gris = await sharp(path.join(origen, 'logo-firma.jpg')).greyscale().trim({ threshold: 20 }).resize({ height: 220 }).raw().toBuffer({ resolveWithObject: true });
const alfa = Buffer.from(gris.data.map((v) => 255 - v));
for (const [n, c] of [['firma-blanca', 255], ['firma-tinta', 20]]) {
  const rgb = Buffer.alloc(gris.info.width * gris.info.height * 3, c);
  await sharp(rgb, { raw: { width: gris.info.width, height: gris.info.height, channels: 3 } }).joinChannel(alfa, { raw: { width: gris.info.width, height: gris.info.height, channels: 1 } }).png().toFile(path.join(destino, `${n}.png`));
}
medidas.firma = [gris.info.width, gris.info.height];
await sharp(path.join(origen, 'boda-01.jpg')).resize(1200, 630, { fit: 'cover', position: 'attention' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'imágenes');
