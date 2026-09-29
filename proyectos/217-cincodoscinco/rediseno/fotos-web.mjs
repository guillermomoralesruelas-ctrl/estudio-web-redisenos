// Método 1.2 en la nube: el clon (LeadConnector / GoHighLevel) no traía fotos. Se bajaron del servicio de imágenes de
// LeadConnector (images.leadconnectorhq.com, originales en assets.cdn.filesafe.space) las nueve fotos reales del box:
// comunidad, saludo, equipo, clase, argollas, coach con grupo, letrero 52, muro "Relax Have Fun Workout" y fachada,
// reducidas a 1600 px, en assets/originales/. Este script crea copias .webp en assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/217-cincodoscinco/rediseno)
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
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#121212"/><path d="M32 6 55 19v26L32 58 9 45V19z" fill="none" stroke="#ff6a1a" stroke-width="3"/><text x="32" y="42" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="22" fill="#ff6a1a">52</text></svg>');
console.log('ok');
