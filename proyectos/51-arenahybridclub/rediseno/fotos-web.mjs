// Método 1.2 en la nube: el clon (sitio hecho en Lovable) no traía fotos. Se bajaron del sitio en vivo (/assets/) y se
// guardaron reducidas a 1600 px en assets/originales/ solo las que se usan: fotos de la comunidad de corredores (reales,
// en blanco y negro) e imágenes del espacio (fachada, open box, recovery, vestidores), que parecen renders del proyecto.
// Este script crea copias .webp en assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/51-arenahybridclub/rediseno)
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
  await sharp(path.join(origen, f)).resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true }).webp({ quality: 74 }).toFile(path.join(destino, f.replace('.jpg', '.webp')));
}
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#111111"/><path d="M14 50 L32 12 L50 50 M22 36 H42" stroke="#f3c623" stroke-width="6" fill="none"/></svg>');
console.log('ok');
