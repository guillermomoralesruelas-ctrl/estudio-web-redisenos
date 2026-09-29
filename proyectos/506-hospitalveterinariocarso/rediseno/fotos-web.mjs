// El clon guarda en sitio/assets/static/images/ cinco fotos propias de su galería (el pasillo de consultorios con su
// logo, una cirugía, una radiografía, un gato hospitalizado y un bulldog en consulta) y su logo. La foto de portada
// (cirujanos con lupas) no se usa: no se pudo confirmar que sea propia. Este script crea copias .webp en assets/web/
// (publicDir de Vite). No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/506-hospitalveterinariocarso/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/static/images');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const lista = [['galeria-1.webp', 'pasillo'], ['galeria-2.webp', 'cirugia'], ['galeria-3.webp', 'radiografia'], ['galeria-4.webp', 'gato-hospital'], ['galeria-5.webp', 'bulldog']];
for (const [archivo, nombre] of lista) {
  await sharp(path.join(origen, archivo)).resize({ width: 1000, withoutEnlargement: true }).webp({ quality: 82 }).toFile(path.join(destino, `${nombre}.webp`));
}
await sharp(path.join(origen, 'logo.png')).resize({ width: 400 }).png().toFile(path.join(destino, 'logo.png'));
await sharp(path.join(origen, 'logo-nuevo-final.png')).extract({ left: 0, top: 0, width: 300, height: 300 }).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));
console.log('ok');
