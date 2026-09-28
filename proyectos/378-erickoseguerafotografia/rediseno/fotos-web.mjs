// El clon guarda en sitio/assets/wp-content/uploads/ sus fotos de bodas y sesiones (todas suyas: mismo estilo y nombres
// de archivo de cámara "Wedding-", "Lovesession-", "WED", "DSC"), el logo, el símbolo de la hoja y el sello de Junebug
// Weddings. Este script crea copias .webp en assets/web/ (publicDir de Vite), la hoja en blanco y el ícono.
// No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/378-erickoseguerafotografia/rediseno)
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

const lista = [
  ['2023/02/fotografo-de-bodas-1-37-1.jpg', 'pareja-pastizal'],
  ['2022/12/Wedding-191.jpg', 'ceremonia-bosque'],
  ['2023/02/B38A8067-2.jpg', 'retrato-sombrero'],
  ['2023/02/DSC00042-1.jpg', 'campo-atardecer'],
  ['2023/02/Lovesession-352-1.jpg', 'ramo'],
  ['2023/02/WED0447-1.jpg', 'novia-corona'],
  ['2023/02/Wedding-175.jpg', 'carrito'],
  ['2023/02/Wedding-442.jpg', 'mesa-velas'],
  ['2023/02/cover-scaled-1.jpg', 'silueta-mar'],
  ['2024/05/Lovesession-148_websize.jpg', 'cielo-rosa'],
  ['2024/07/Wedding-196.jpg', 'beso-jardin'],
  ['2024/10/Wedding-476.jpg', 'baile-salon'],
  ['2024/10/Wedding-561-1.jpg', 'fiesta'],
  ['2024/10/Wedding-629.jpg', 'callejon'],
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
// La hoja del símbolo (blanca sobre negro en el original) como PNG con transparencia para el matasellos.
await sharp(path.join(origen, '2023/02/SIMBOLO_3_C2.png')).trim().resize({ height: 160 }).png().toFile(path.join(destino, 'hoja.png'));
await sharp(path.join(origen, '2022/12/LOGO_V1_NB-e1673053737482.png')).resize(64, 64, { fit: 'cover' }).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
