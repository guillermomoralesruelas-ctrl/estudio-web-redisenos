// El clon guarda en sitio/assets/wp-content/uploads/ fotos propias del estudio: la fachada de Colima 184 con su letrero
// (HomeSlider04-2.jpg), un tatuador trabajando (parallaxhome_03.jpg), el encabezado con labios perforados, un collage de
// trabajos, la vitrina de joyería y una foto de trabajo por cada artista de su portafolio (exportadas de su Facebook o del
// celular). Ninguna trae EXIF de Google/Picasa, marcas de bancos ni credenciales C2PA. No se descargó nada nuevo.
// Este script crea copias .webp en ../assets/web/ (no toca el clon), el favicon, la imagen para compartir
// y src/data/fotos.json con las medidas.
// Uso: node fotos-web.mjs   (desde proyectos/394-estudio184piercing/rediseno)
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

const fotos = [
  ['2015/01/HomeSlider04-2.jpg', 'fachada', 1400],
  ['2014/12/parallaxhome_03.jpg', 'tatuando', 1600],
  ['2016/03/estudio184-encabezado.jpg', 'encabezado', 1600],
  ['2020/07/20200724_171827-e1595800585395.jpg', 'joyeria', 800],
  ['2021/05/E82356DE-3236-4C39-878B-D0D91A68A2C5.jpg', 'marley', 800],
  ['2021/01/IMG_20201223_163931.jpg', 'dulce', 800],
  ['2020/07/108649858_3435016529864635_305629425350691897_o_3435016526531302.jpg', 'renato', 800],
  ['2020/07/92844900_3192914127408211_246554839599808512_o_3192914124074878.jpg', 'wilmar', 800],
  ['2020/07/105486704_3371632859536336_3536893289715004788_o_3371632856203003.jpg', 'kid', 800],
  ['2020/07/103684874_3329812737051682_1566207078352073817_o_3329812733718349.jpg', 'stich', 800],
  ['2020/07/20200724_153716.jpg', 'axayacatl', 800],
  ['2020/07/91438049_3142763942423230_5069937717282865152_o_3142763939089897.jpg', 'jonathan', 800],
  ['2020/07/89654647_3110920888940869_1645950120593719296_o_3110920885607536.jpg', 'mario', 800],
  ['2020/07/100652325_3303027573063532_566902817982251008_o_3303027569730199.jpg', 'hector', 800],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, ancho] of fotos) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: ancho, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// El logo (JPG gris y morado sobre blanco) no se usa como imagen: el rediseño lo dibuja en SVG para el fondo oscuro.

// Favicon: el círculo morado con "184", como el de su logo. Dibujado por nosotros.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><circle cx="32" cy="32" r="31" fill="#45143e"/><text x="32" y="41" text-anchor="middle" font-family="Arial, sans-serif" font-size="25" font-weight="700" fill="#f4efe9">184</text></svg>`;
await sharp(Buffer.from(svg)).png().toFile(path.join(destino, 'icono.png'));

// Imagen para compartir: la fachada en 1200 x 630.
await sharp(path.join(origen, fotos[0][0])).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 80 }).toFile(path.join(destino, 'compartir.jpg'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${fotos.length} fotos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
