// Fotos propias del clon (sitio/assets/wp-content/uploads/): las portadas (525 x 328) de 7 propiedades de su inventario
// y los retratos de sus 4 agentes. No se usa LAS-TORRES-17215-M2 (es una vista satelital con el terreno marcado)
// ni Mesa-de-trabajo-40 (promoción de un desarrollo de terceros). Ninguna trae EXIF de Google/Picasa ni C2PA.
// No se descargó nada nuevo. Este script crea copias .webp en ../assets/web/ (no toca el clon), el logo, el favicon,
// la imagen para compartir y src/data/fotos.json con las medidas.
// Uso: node fotos-web.mjs   (desde proyectos/574-inmobiliariatitan/rediseno)
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
  ['2025/09/be9f5d2c-3caa-4564-9736-8f6cdc40be36-525x328.jpg', 'p-cumbres'],
  ['2024/11/27-525x328.jpg', 'p-oficina'],
  ['2024/11/WhatsApp-Image-2024-11-28-at-11.23.17-AM-525x328.jpeg', 'p-bodega'],
  ['2024/11/WhatsApp-Image-2024-11-19-at-10.17.56-AM-1-525x328.jpeg', 'p-canada'],
  ['2024/09/46-525x328.jpg', 'p-panorama'],
  ['2024/08/WhatsApp-Image-2024-06-09-at-7.16.02-AM-3-525x328.jpeg', 'p-pedregal'],
  ['2024/08/Gloria-HS-transp_1-100-525x328.jpg', 'a-gloria'],
  ['2024/08/Jonathan-HS-transp_1-100-525x328.jpg', 'a-jonathan'],
  ['2024/08/Gustavo-HS-transp_1-100-525x328.jpg', 'a-gustavo'],
  ['2024/08/Pepe-HS-transp_1-100-525x328.jpg', 'a-jose'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of fotos) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  // Los retratos vienen en 525 x 328 con mucho blanco a los lados: se recortan a cuadrado centrado.
  const img = nombre.startsWith('a-') ? sharp(entrada).extract({ left: 98, top: 0, width: 328, height: 328 }) : sharp(entrada);
  const info = await img.webp({ quality: 80, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Logo a color (Mesa-de-trabajo-14-8.png, 684 x 198) y favicon con su techo azul.
const logo = path.join(origen, '2024/08/Mesa-de-trabajo-14-8.png');
const infoLogo = await sharp(logo).trim().resize({ height: 88 }).webp({ quality: 92 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [infoLogo.width, infoLogo.height];
const recortado = await sharp(logo).trim().toBuffer({ resolveWithObject: true });
const techo = await sharp(recortado.data).extract({ left: 0, top: 0, width: Math.round(recortado.info.height * 1.45), height: recortado.info.height }).trim().toBuffer();
await sharp(techo).resize(56, 56, { fit: 'contain', background: '#ffffff' }).extend({ top: 4, bottom: 4, left: 4, right: 4, background: '#ffffff' }).flatten({ background: '#ffffff' }).png().toFile(path.join(destino, 'icono.png'));

await sharp(path.join(origen, fotos[0][0])).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${fotos.length} fotos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
