// El clon guarda sus imágenes en sitio/assets/img/ (tours) y sitio/assets/uploads/ (portada, galería y blog).
// Parecen suyas: la playa vista con dron, la caleta con su lancha, la lancha Keiko en la playa (Canon), las pangas con
// turistas, el dorado recién pescado y la charola de mariscos (Sony). Las de fauna (lobo marino, buzo con lobo marino)
// y el paisaje con cardones parecen de banco de imágenes: se usan solo como ilustración de fauna y paisaje y
// se anotan en CAMBIOS.md para confirmar. No se usan la bandera, la tira "linea", las dos turistas en la playa, la tortuga,
// los peces, las mantas ni la cola de ballena (esta última lleva la marca de agua de otro fotógrafo).
// Este script crea copias .webp en assets/web/ (publicDir de Vite) y el ícono. No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/103-bcsecotours/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const lista = [
  ['img/tourimg_6a7d4146c32e6.jpg', 'playa-dron'],
  ['img/tourimg_6a7d44347803c.jpg', 'caleta-lancha'],
  ['uploads/galeria_6a94d97fb4466.jpg', 'keiko-playa'],
  ['uploads/galeria_6a94d86ad58aa.JPG', 'pangas-turistas'],
  ['uploads/blog_6a94e3d92c509.png', 'dorado'],
  ['uploads/galeria_6a94db02d56a1.JPG', 'mariscos'],
  ['uploads/galeria_6a94c958c37ec.png', 'lobo-marino'],
  ['uploads/galeria_6a951bf44541b.PNG', 'cardones-atardecer'],
  ['uploads/galeria_6a94d911346b6.jpg', 'buzo-lobo'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 74, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
await sharp(path.join(origen, 'img/logo.png')).resize({ height: 96 }).png().toFile(path.join(destino, 'logo.png'));
await sharp(path.join(origen, 'img/favicon.png')).resize(64, 64, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
