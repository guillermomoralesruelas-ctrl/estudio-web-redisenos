// Método 1.2 en la nube: el clon de Google Sites no trae las fotos. El 2026-10-10 se bajaron a ../assets/originales/ las
// 11 fotos de su sitio (inicio, sesiones y paquetes; lh7-us.googleusercontent.com, tamaño w2000) y su logotipo.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite), el ícono y la imagen para compartir.
// Uso: node fotos-web.mjs   (desde proyectos/269-crisantemofotografia/rediseno)
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
for (const f of fs.readdirSync(origen).filter((f) => /\.jpe?g$/i.test(f))) {
  const n = f.replace(/\.[^.]+$/, '');
  const info = await sharp(path.join(origen, f)).rotate()
    .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// El logotipo es un crisantemo de línea negra sobre transparente; se pinta en rosa (#E7A9B4) para los fondos oscuros.
const mascara = await sharp(path.join(origen, 'logo-crisantemo.png')).resize(400, 400).ensureAlpha().extractChannel(3).toBuffer();
const rosa = sharp({ create: { width: 400, height: 400, channels: 3, background: '#E7A9B4' } });
await rosa.joinChannel(mascara, { raw: undefined }).png().toFile(path.join(destino, 'logo.png'));
await sharp(path.join(destino, 'logo.png')).resize(64, 64).flatten({ background: '#2A1F22' }).png().toFile(path.join(destino, 'icono.png'));
await sharp(path.join(origen, 'lancha-estanque.jpg')).resize(1200, 630, { fit: 'cover', position: 'attention' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
