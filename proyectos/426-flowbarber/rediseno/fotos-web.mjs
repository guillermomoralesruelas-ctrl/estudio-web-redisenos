// Método 1.2 en la nube: el clon no traía ninguna foto. El 2026-10-09 se bajaron a ../assets/originales/ las 10 fotos
// y el logotipo de su sitio (flowbarberpdc.com/assets/): fachada, interior, barberos trabajando, detalles, la mascota y
// los retratos de Topo y Samir Garduño. Este script crea copias .webp en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/426-flowbarber/rediseno)
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
for (const f of fs.readdirSync(origen)) {
  if (f === 'logo.png') continue;
  const n = f.replace(/\.jpe?g$/i, '');
  const info = await sharp(path.join(origen, f)).rotate()
    .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true }).webp({ quality: 76 })
    .toFile(path.join(destino, `${n}.webp`));
  medidas[n] = [info.width, info.height];
}
// Logotipo negro sobre transparente: recortado, y una versión blanca para fondos oscuros.
await sharp(path.join(origen, 'logo.png')).ensureAlpha().trim().resize({ width: 700 }).png().toFile(path.join(destino, 'logo.png'));
const { data, info } = await sharp(path.join(destino, 'logo.png')).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) { data[i] = data[i + 1] = data[i + 2] = 255; }
await sharp(data, { raw: info }).png().toFile(path.join(destino, 'logo-blanco.png'));
medidas.logo = [info.width, info.height];
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#111"/><polygon points="32,10 51,21 51,43 32,54 13,43 13,21" fill="none" stroke="#F2F0EA" stroke-width="4"/><text x="32" y="41" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="22" fill="#C9A26A">F</text></svg>');
await sharp(path.join(origen, 'barbershop-2.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
