// Método 1.2 en la nube: el clon (plataforma Rotamundos) no traía fotos. Se bajaron de rotamundos-assets.b-cdn.net las
// 11 fotos reales distintas del hotel (fachada, recepción, lobby, restaurante, desayuno y habitaciones) y el logotipo a
// assets/originales/. Este script crea copias .webp en assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/483-hafersonsinnhotel/rediseno)
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
  await sharp(path.join(origen, f)).webp({ quality: 78 }).toFile(path.join(destino, f.replace('.jpg', '.webp')));
}
await sharp(path.join(origen, 'logo.png')).webp({ quality: 92 }).toFile(path.join(destino, 'logo.webp'));
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#3f6b2a"/><g fill="#f8f6ef"><ellipse cx="32" cy="20" rx="8" ry="11"/><ellipse cx="21" cy="40" rx="11" ry="8" transform="rotate(-30 21 40)"/><ellipse cx="43" cy="40" rx="11" ry="8" transform="rotate(30 43 40)"/></g></svg>');
console.log('ok');
