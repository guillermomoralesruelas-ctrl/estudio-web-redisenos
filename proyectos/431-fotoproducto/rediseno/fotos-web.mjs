// El clon guarda sus imágenes en sitio/assets/wp-content/uploads/2023/08/: más de 100 fotos de producto propias del
// estudio (1080x1350, tomadas con Canon EOS 5D y editadas en Photoshop según sus metadatos; ninguna trae EXIF de
// Google Maps/Picasa ni marcas de IA), su logo y la portada del video institucional. No se usa la ilustración
// b9bbf287-….webp (512 px, estudio dibujado, sin metadatos: posible IA). No se descargó nada nuevo.
// Este script crea copias .webp ligeras en assets/web/ (no toca el clon) y el favicon. Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/431-fotoproducto/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/wp-content/uploads/2023/08');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
export const lista = [
  ['IMG_94254.jpg', 'moda-fondo-naranja', 1500],
  ['IMG_94105.jpg', 'moda-grupo', 1000],
  ['IMG_93510.jpg', 'moda-chaleco', 1000],
  ['01-2.jpg', 'moda-bolsa', 1000],
  ['10-3.jpg', 'moda-zapatos', 1000],
  ['07.jpg', 'muebles-recamara', 1000],
  ['10-4.jpg', 'muebles-silla', 1000],
  ['08.jpg', 'muebles-camastro', 1000],
  ['01-3.jpg', 'muebles-comedor', 1000],
  ['197A9023.jpg', 'alimentos-pan', 1000],
  ['2-1.jpg', 'alimentos-salsas', 1000],
  ['7-3.jpg', 'alimentos-pizza', 1000],
  ['6-2.jpg', 'alimentos-galleta', 1000],
  ['8-2.jpg', 'vinos-rosado', 1000],
  ['02.jpg', 'vinos-tequila', 1000],
  ['TEQUILA-QUOS-ANEJO.jpg', 'vinos-quos', 1000],
  ['05b.jpg', 'vinos-whisky', 1000],
  ['00b-portada-Redes-Sociales.jpg', 'redes-lata', 1000],
  ['12-1.jpg', 'redes-galletas', 1000],
  ['10-1.jpg', 'redes-panes', 1000],
  ['13.jpg', 'redes-aceites', 1000],
  ['00-Portada-Video-institucional.jpg', 'video-institucional', 1000],
  ['00-portada-e-commerce.jpg', 'ecommerce-flores', 1000],
  ['00-Logo_Foto_del_Producto_.png', 'logo', 600],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: el ícono de cámara de su logo (parte superior) a 64 px.
const logo = path.join(origen, '00-Logo_Foto_del_Producto_.png');
const m = await sharp(logo).metadata();
await sharp(logo).trim().resize(64, 64, { fit: 'contain', background: '#ffffff' }).flatten({ background: '#ffffff' }).png().toFile(path.join(destino, 'icono.png'));
console.log(`logo ${m.width}x${m.height}`);
console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
