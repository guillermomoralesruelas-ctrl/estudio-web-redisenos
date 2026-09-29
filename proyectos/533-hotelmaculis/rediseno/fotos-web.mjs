// Método 1.2 en la nube: el clon (GoDaddy Website Builder) no traía fotos. Se bajaron de img1.wsimg.com las fotos reales
// del hotel (patio, fachada, jardín de noche, alberca, andador y cinco habitaciones, casi todas tomadas con iPhone) y el
// logotipo, reducidas a 1600 px, en assets/originales/. No se usaron los carteles "Curiosidades de Campeche" ni las
// fotos de viajes y mascotas ajenas al hotel. Este script crea copias .webp en assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/533-hotelmaculis/rediseno)
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
  await sharp(path.join(origen, f)).resize({ width: 1300, height: 1300, fit: 'inside', withoutEnlargement: true }).webp({ quality: 74 }).toFile(path.join(destino, f.replace('.jpg', '.webp')));
}
await sharp(path.join(origen, 'logo.png')).resize({ height: 160 }).webp({ quality: 90 }).toFile(path.join(destino, 'logo.webp'));
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#5b2a6e"/><path d="M32 50V30M32 30c-6-2-10-7-10-13M32 30c6-2 10-7 10-13M32 24c-3-3-4-8-2-12M32 24c3-3 4-8 2-12" stroke="#faf6ef" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M20 50h24" stroke="#e7c27a" stroke-width="3" stroke-linecap="round"/></svg>');
console.log('ok');
