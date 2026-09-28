// El clon de autenticabarberia.com trae sus fotos en sitio/assets/wp-content/uploads/ (1600 px, sin EXIF de
// Google Maps/Picasa ni marcas de IA; la de las toallas en la cama de masaje lleva de autora a Alitzel Durango).
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en ../assets/web/ (el publicDir),
// y dos copias del logo SVG (clara y oscura). No toca el clon.
// No se usa LA-dorado.jpg (textura dorada genérica, posible banco).
// Uso: node fotos-web.mjs   (desde proyectos/617-laautentica/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/wp-content/uploads');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original en uploads/, nombre de salida en assets/web/, lado largo máximo]
const lista = [
  ['2024/02/LA-Bar-cumple-3.jpg', 'club-mapa', 1600],          // salón con el mapa de México y el billar
  ['2024/02/LA-Bar-cumple-2.jpg', 'billar-logo', 1400],        // mesa de billar con el logo
  ['2024/01/LA-bar-menudebebidas-3.jpg', 'cocteles', 1400],     // barra con coctelería
  ['2024/01/la-bar-programacion.jpg', 'barra-futbol', 1400],   // barra con partido en pantalla
  ['2024/02/LA-spa-3.jpg', 'spa-toallas', 1400],               // cabina de masaje con toallas bordadas
  ['2024/02/LA-spa-1.jpg', 'lampara', 1000],                   // lámpara del spa
  ['2024/01/LA-gg-drypomade-1-300x300.jpg', 'gg-dry-pomade', 300],
  ['2024/01/LA-reuzel-holdmatte-1-300x300.jpg', 'reuzel-concrete', 300],
  ['2024/01/LA-kingbrown-original-1-300x300.jpg', 'kingbrown-pomade', 300],
  ['2024/01/LA-kingbrown-beardgroomimgoil-1-300x300.jpg', 'kingbrown-oil', 300],
  ['2026/05/20BB7FFE-54C3-4863-A596-866DB8D141A2-150x150.png', 'miguel-leon', 150],
  ['2025/05/P1034133-150x150.jpg', 'santiago-pajaro', 150],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  if (!fs.existsSync(entrada)) { console.warn('No encontrado:', archivo); continue; }
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Logo: el SVG oficial (negro #1d1d1b) y una copia en crema para fondos oscuros.
const svg = fs.readFileSync(path.join(origen, '2024/06/LaAutentica-logo-negro-SVG.svg'), 'utf8');
fs.writeFileSync(path.join(destino, 'logo-oscuro.svg'), svg);
fs.writeFileSync(path.join(destino, 'logo-claro.svg'), svg.replace('#1d1d1b', '#f1eadc'));
fs.copyFileSync(path.join(origen, '2024/09/cropped-laautentica-thumb-192x192.png'), path.join(destino, 'icono.png'));

console.log(`${Object.keys(medidas).length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
