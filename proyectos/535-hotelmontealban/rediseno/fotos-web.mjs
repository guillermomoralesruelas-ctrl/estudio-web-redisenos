// Método 1.2 en la nube: el clon (app de React sin contenido en el HTML) no traía fotos. Se bajaron del sitio en vivo
// (hotelmontealban.com/src/assets/images/) las fotos reales que responden y se guardaron en assets/originales/: fachada,
// la Guelaguetza en el patio y las tres habitaciones. No se usaron las dos que su sitio llama "regenerated_image"
// (patio y restaurante), porque el nombre sugiere que fueron retocadas con IA. Este script crea copias .webp en
// assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/535-hotelmontealban/rediseno)
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

for (const f of fs.readdirSync(origen).filter((n) => n.endsWith('.jpg') && n !== 'logo.jpg')) {
  await sharp(path.join(origen, f)).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, f.replace('.jpg', '.webp')));
}
await sharp(path.join(origen, 'logo.jpg')).resize({ width: 240 }).webp({ quality: 88 }).toFile(path.join(destino, 'logo.webp'));
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#9a3f28"/><path d="M14 50V26a18 18 0 0 1 36 0v24M24 50V30a8 8 0 0 1 16 0v20" stroke="#faf5ea" stroke-width="4" fill="none"/></svg>');
console.log('ok');
