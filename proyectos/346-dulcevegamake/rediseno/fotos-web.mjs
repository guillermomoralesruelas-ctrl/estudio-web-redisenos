// Fotos propias del clon (sitio/assets/wp-content/uploads/): maquillajes y peinados de su estudio (novia, dos novias,
// maquillaje de noche, maquillaje de color), su equipo en un evento y productos de su marca. No se usan los recortes de
// revista ni las imágenes con texto encima. No se descargó nada nuevo. El clon no trae logo: el nombre va en texto y el
// favicon son sus iniciales. Este script crea copias .webp en ../assets/web/, el favicon, la imagen para compartir y
// src/data/fotos.json con las medidas.
// Uso: node fotos-web.mjs   (desde proyectos/346-dulcevegamake/rediseno)
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
  ['2022/10/portada-novia-e1665461867195.jpg', 'f-novia', 1036],
  ['2022/10/las-mejores-novias-en-Dulce-Vega.jpeg', 'f-novias', 1600],
  ['2023/01/servicios-dulce-vega.png', 'f-noche', 800],
  ['2022/10/DSC_9024A.jpeg', 'f-color', 1400],
  ['2016/03/Dulce-Vega-en-el-evento-mexico-en-el-alma-890x640.jpeg', 'f-evento', 890],
  ['2022/10/labiales-indelebles-dulce-vega.png', 'p-labiales', 800],
  ['2023/02/Maquillaje-en-crema-01-630x630.jpg', 'p-crema', 630],
  ['2023/02/Fijador-Dulce-Vega-630x630.jpg', 'p-fijador', 630],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, ancho] of fotos) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: ancho, withoutEnlargement: true }).flatten({ background: '#ffffff' }).webp({ quality: 80, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" rx="12" fill="#2b1a22"/><text x="32" y="42" font-family="serif" font-style="italic" font-size="28" fill="#f2c6cf" text-anchor="middle">DV</text></svg>`;
await sharp(Buffer.from(svg)).png().toFile(path.join(destino, 'icono.png'));
await sharp(path.join(origen, fotos[1][0])).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${Object.keys(medidas).length} archivos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
