// Método 1.2 en la nube: el clon (Hostinger Horizons, se arma con JavaScript) no traía fotos. Se bajaron de
// horizons-cdn.hostinger.com las 13 fotos reales del sitio (interior, tres cortes, tres barberos y seis de galería) y el
// logotipo, reducidas a 1600 px, en assets/originales/. La foto "Interior" de Unsplash no se usó.
// Este script crea copias .webp en assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/102-baronbarbershop/rediseno)
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

for (const f of fs.readdirSync(origen).filter((n) => n.endsWith('.jpg'))) {
  await sharp(path.join(origen, f)).resize({ width: 1100, height: 1100, fit: 'inside', withoutEnlargement: true }).webp({ quality: 74 }).toFile(path.join(destino, f.replace('.jpg', '.webp')));
}
await sharp(path.join(origen, 'logo.png')).resize({ width: 220 }).webp({ quality: 90 }).toFile(path.join(destino, 'logo.webp'));
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#141414"/><path d="M20 12h24v14c0 12-12 22-12 26 0-4-12-14-12-26z" fill="none" stroke="#f3f0e8" stroke-width="3"/><path d="M24 18l16 16M24 26l12 12M28 18l12 12" stroke="#e8b48a" stroke-width="3"/></svg>');
console.log('ok');
