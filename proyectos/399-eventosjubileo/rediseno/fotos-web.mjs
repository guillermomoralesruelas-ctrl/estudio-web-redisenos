// Método 1.2 en la nube: el clon (GoDaddy Website Builder) no traía fotos. Se bajaron de img1.wsimg.com (a 1600 px)
// 14 de sus fotos reales del salón y de sus eventos (salón vacío y montado, lobby, balcón, terraza lounge, fachada,
// XV años, boda, show de robot LED y un evento de empresa) a assets/originales/. No se usaron las de banco (Vecteezy)
// ni los íconos. Este script crea copias .webp en assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/399-eventosjubileo/rediseno)
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
  await sharp(path.join(origen, f)).resize({ width: 1300, withoutEnlargement: true }).webp({ quality: 74 }).toFile(path.join(destino, f.replace('.jpg', '.webp')));
}
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#7a2e5c"/><text x="32" y="45" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="36" fill="#faf7f2">J</text></svg>');
console.log('ok');
