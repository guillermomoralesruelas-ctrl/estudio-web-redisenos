// Método 1.1 en la nube: las fotos salen del clon (../sitio/assets/img), que no se toca.
// Son las cuatro fotos propias del estudio (iPhone 17, sin credenciales de IA) y el logotipo.
// Este script crea copias .webp en ../assets/web (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/487-harmoniapilatesreformer/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/img');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const fotos = [
  ['home/mi_estudio_01.jpg', 'estudio-reformers.webp', 1400],
  ['home/mi_estudio_02.jpg', 'josue-reformer.webp', 1000],
  ['home/mi_estudio_03.jpg', 'estudio-noche.webp', 1000],
  ['home/_4gxwas.jpg', 'josue-miranda.webp', 800],
];
for (const [src, dst, w] of fotos) {
  await sharp(path.join(origen, src)).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, dst));
}
await sharp(path.join(origen, 'logo.png')).resize({ width: 520 }).webp({ quality: 90 }).toFile(path.join(destino, 'logo.webp'));
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#0e2f4f"/><text x="32" y="45" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-weight="700" font-size="38" fill="#f4b33d">H</text></svg>');
console.log('ok');
