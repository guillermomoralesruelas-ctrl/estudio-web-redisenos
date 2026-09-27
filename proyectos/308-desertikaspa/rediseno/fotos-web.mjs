// El clon (sitio/assets/web/image/) solo trae dos fotos propias usables: _BWE0297.jpg (aceite sobre la espalda,
// 1280 × 1920) y el collage de sucursales (recepción con su logo y el pasillo con velas, 1100 × 350). Las demás
// son de banco: las miniaturas de 330 px de cada servicio (el mismo modelo en masajes, faciales y paquetes) y
// Desertika_Header_1 / Desertika_TestimonioFondo, cuyo XMP cita AdobeStock, Getty y Shutterstock.
// Las fotos de su sesión (FT_JUL/FT_OCT/FT_DIC_DESERTIKA_*, FOTOS DESERTIKA 22 y _BWE04xx/05xx, con sus toallas
// bordadas "Desērtika SPA — BOUTIQUE"), la del bar de oxígeno y su logotipo en blanco se bajaron con curl el
// 2026-09-27 de /masajes, /faciales y la portada a assets/originales/ (el clon no las tenía). Ninguna trae EXIF de
// Google/Picasa ni credenciales C2PA o marcas de IA.
// No se usan: reflexologie-plantaire-cellulite.jpg, que-es-el-shiatsu.webp, la foto del masaje prenatal, la
// captura de pantalla de "Alivio muscular" ni Desertika_Home_PersonalizaTuServicio.jpg (de banco o dudosas).
// Este script crea copias .webp en assets/web/ (no toca el clon) y el favicon. Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/308-desertikaspa/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const clon = path.join(aqui, '../sitio/assets/web/image');
const orig = path.join(aqui, '../assets/originales');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
export const lista = [
  [path.join(clon, '312991-f6169b05/_BWE0297.jpg'), 'aceite-espalda', 1100],
  [path.join(orig, 'FT_JUL_DESERTIKA_-114_1.jpg'), 'toalla-logo', 900],
  [path.join(orig, 'FT_JUL_DESERTIKA_-107.jpg'), 'relajacion', 640],
  [path.join(orig, 'FT_JUL_DESERTIKA_-159.jpg'), 'piedras', 640],
  [path.join(orig, 'FOTOS_DESERTIKA_22.jpg'), 'lomi-lomi', 640],
  [path.join(orig, 'FT_JUL_DESERTIKA_-208.jpg'), 'rebozo', 640],
  [path.join(orig, 'FT_OCT_DESERTIKA_256.jpg'), 'silla', 640],
  [path.join(orig, 'FT_DIC_DESERTIKA_108.jpg'), 'piernas', 640],
  [path.join(orig, 'FT_JUL_DESERTIKA_-141.jpg'), 'espalda', 640],
  [path.join(orig, '_BWE0436.jpg'), 'facial-limpieza', 640],
  [path.join(orig, '_BWE0540_1.jpg'), 'facial-caballero', 640],
  [path.join(orig, '_BWE0475.jpg'), 'facial-hidratacion', 640],
  [path.join(orig, '_BWE0462.jpg'), 'facial-oxigenante', 640],
  [path.join(orig, 'FT_DIC_DESERTIKA_233_1.jpg'), 'facial-reafirmante', 640],
  [path.join(orig, 'DESERTIKA_2021_1545.webp'), 'oxigeno', 640],
];

let antes = 0, despues = 0;
const medidas = {};
async function guardar(nombre, tubo, entrada) {
  if (entrada) antes += fs.statSync(entrada).size;
  const info = await tubo.webp({ quality: 78, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

for (const [entrada, nombre, lado] of lista) {
  await guardar(nombre, sharp(entrada).resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true }), entrada);
}

// El collage de sucursales tiene dos fotos: la recepción (izquierda) y el pasillo con velas (derecha).
const collage = path.join(clon, '59216-87ac41e0/290524_Collage-sucursales_Desertika_me_V05_1100x350.jpg');
antes += fs.statSync(collage).size;
await guardar('recepcion', sharp(collage).extract({ left: 0, top: 0, width: 596, height: 350 }));
await guardar('pasillo-velas', sharp(collage).extract({ left: 612, top: 0, width: 488, height: 350 }));

// Logotipo: blanco sobre transparente. Se deja en blanco (para fondos oscuros) y se hace una versión en tinta.
const logo = path.join(orig, 'Logotipo_Desertika_2.png');
await guardar('logo-blanco', sharp(logo), logo);
const alfa = await sharp(logo).extractChannel('alpha').toBuffer();
const { width: lw, height: lh } = await sharp(logo).metadata();
await guardar('logo-tinta', sharp({ create: { width: lw, height: lh, channels: 3, background: '#3b3526' } }).joinChannel(alfa));

// Favicon: el emblema circular del logo (sol y duna), en tinta sobre crema.
const emblema = await sharp({ create: { width: lw, height: lh, channels: 3, background: '#3b3526' } })
  .joinChannel(alfa).png().toBuffer();
await sharp(emblema).extract({ left: 0, top: 0, width: 87, height: 87 })
  .resize(64, 64).flatten({ background: '#f6f1e8' }).png()
  .toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length + 4} imágenes: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
console.log(JSON.stringify(medidas));
