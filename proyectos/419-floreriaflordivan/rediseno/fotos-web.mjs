// Fotos propias del clon (sitio/assets/wp-content/uploads/): 16 arreglos de su tienda (540 x 540, con sus cajas y floreros
// "FLORDIVAN") y 5 fotos de bodas y eventos que decoraron. Dos de 2025/01 traen credenciales C2PA de Adobe Photoshop 26
// (edición), sin marcas de IA generativa. Las fotos de las cajas redondas por color no están en el clon: la caja del
// elemento se dibuja. No se descargó nada nuevo. Este script crea copias .webp en ../assets/web/, el logo, el favicon,
// la imagen para compartir y src/data/fotos.json con las medidas.
// Uso: node fotos-web.mjs   (desde proyectos/419-floreriaflordivan/rediseno)
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

// Arreglos (el nombre es "a-" + su SKU, como en src/data/catalogo.json).
const arreglos = [["2024/10/FDPUR01-arreglo-de-flores-moradas-lila-zapopan-540x540.jpg", "a-fdpur01"], ["2024/10/FDVR03-rosas-intensas-en-arreglo-floral-540x540.jpg", "a-fdvr03"], ["2024/10/FDVR02-arreglos-florales-rojo-profundo-540x540.jpg", "a-fdvr02"], ["2024/10/FDVR01-arreglos-florales-rojos-fuego-540x540.jpg", "a-fdvr01"], ["2024/10/FDPK11-arreglos-romanticos-de-flores-zapopan-540x540.jpg", "a-fdpk11"], ["2024/10/FDPK10-sorpresa-rosa-florero-especial-540x540.jpg", "a-fdpk10"], ["2024/10/FDPK09-arreglos-romanticos-de-flores-gdl-540x540.jpg", "a-fdpk09"], ["2024/10/FDPK08-caja-de-flores-colorida-romantica-gdl-540x540.jpg", "a-fdpk08"], ["2024/10/FDPK07-arreglos-lindos-de-flores-jalisco-540x540.jpg", "a-fdpk07"], ["2024/10/FDPK06-arreglos-florales-lila-morados-540x540.jpg", "a-fdpk06"], ["2024/10/FDPK05-arreglo-de-flores-romantico-zmg-540x540.jpg", "a-fdpk05"], ["2024/10/FDPK04-arreglos-romanticos-flores-zapopan-540x540.jpg", "a-fdpk04"], ["2024/10/FDPK02-arreglos-romanticos-guadalajara-540x540.jpg", "a-fdpk02"], ["2024/10/FDPK01-arreglos-florales-tonos-lila-540x540.jpg", "a-fdpk01"], ["2024/10/FDBCO01-arreglos-elegantes-flores-blancas-540x540.jpg", "a-fdbco02"], ["2024/10/FDBCO02-arreglos-flor-divan-blanco-540x540.jpg", "a-fdbco01"]];
const eventos = [
  ['2025/01/florista-de-bodas-en-guadalajara.jpg', 'e-novios', 1184],
  ['2025/01/decoracion-de-bodas-scaled.jpeg', 'e-salon', 1200],
  ['2025/01/decoracion-para-mesa-de-novios-scaled.jpg', 'e-mesa', 1600],
  ['2025/01/decoracion-de-boda-en-italia.jpg', 'e-auto', 1446],
  ['2018/03/boda-en-rojo-y-follaje-580x773.jpg', 'e-rojo', 580],
];

let antes = 0, despues = 0;
const medidas = {};
async function webp(archivo, nombre, ancho) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: ancho, withoutEnlargement: true }).webp({ quality: 80, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
for (const [a, n] of arreglos) await webp(a, n, 540);
for (const [a, n, w] of eventos) await webp(a, n, w);

const logo = path.join(origen, '2024/06/logo-floreria-flordivan-boutique-de-flores.png');
const infoLogo = await sharp(logo).trim().resize({ height: 120 }).webp({ quality: 92 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [infoLogo.width, infoLogo.height];
// Favicon: el rostro con rosas del logo (la parte de arriba), sobre rosa palo.
const rec = await sharp(logo).trim().toBuffer({ resolveWithObject: true });
const rostro = await sharp(rec.data).extract({ left: Math.round(rec.info.width * 0.3), top: 0, width: Math.round(rec.info.width * 0.4), height: Math.round(rec.info.height * 0.6) }).trim().toBuffer();
await sharp(rostro).resize(56, 56, { fit: 'contain', background: '#f7ecea' }).extend({ top: 4, bottom: 4, left: 4, right: 4, background: '#f7ecea' }).flatten({ background: '#f7ecea' }).png().toFile(path.join(destino, 'icono.png'));

await sharp(path.join(origen, eventos[0][0])).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${Object.keys(medidas).length} archivos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
