// Método 1.2 en la nube: el clon (Framer) no traía fotos. Se bajaron de framerusercontent.com las fotos reales:
// los retratos de Jesse y Diego, la foto de clientes en la silla y la mascota de la marca, a assets/originales/.
// No se usaron las 12 imágenes de "Tendencias" (hechas con IA, el mismo modelo en todas) ni el feed de Instagram
// (Elfsight, bloqueado para la nube). El video de portada solo anima la mascota.
// Este script crea copias .webp en assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/204-cervusbarberia/rediseno)
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
  await sharp(path.join(origen, f)).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, f.replace('.jpg', '.webp')));
}
await sharp(path.join(origen, 'mascota.png')).resize({ width: 600 }).webp({ quality: 88 }).toFile(path.join(destino, 'mascota.webp'));
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#1f2fa3"/><text x="32" y="44" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="34" fill="#f6f4ef">C</text></svg>');
console.log('ok');
