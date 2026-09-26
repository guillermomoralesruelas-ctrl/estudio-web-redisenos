// El clon guarda las fotos en sitio/assets/cdn/shop/ (28 imágenes de invino.com.mx: el winebar con el bartender y con el
// distintivo de Star Wine List, copas, portadas del blog con comida, cajas de regalo, la botella personalizada, el cartel
// de la Cata a ciegas, 14 botellas con fondo transparente y los logos).
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en ../assets/web/ (no toca el clon).
// Vite usa esa carpeta como publicDir.
// No se usan: files/Personalizaci_n_de_vino.png (banner con el texto "PERSONALIZA TU BOTELLA" pegado en la foto; se usa
// la foto de la botella personalizada sin texto), files/Invino_mix.png (recorte panorámico de la misma escena que
// Invino_Productos_2.png), files/513569108_…_n.jpg (Tierra Maria 4C: es un cartel con texto, no una foto de botella, y su
// ficha no trae maridaje), articles/1_… y articles/3_… (portadas del blog; se usa solo la de la tabla con vino) y
// files/Invino_Logo_color_fondo_blanco.png (el sitio nuevo va sobre fondo oscuro: se usa el logo blanco).
// Uso: node fotos-web.mjs   (desde proyectos/583-invinocavacopeo/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/cdn/shop');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
const lista = [
  ['files/Invino_Logo_blanco.png', 'logo-blanco', 520],
  // Portada, winebar y catas
  ['files/WineBar_Bartender.jpg', 'winebar-barra', 1800],
  ['files/Star_Wine_List_Invino_Winebar.jpg', 'winebar-star-wine-list', 1300],
  ['articles/2_8755d9e6-103b-455c-aebe-7abe500b4984.png', 'tabla-y-copa', 1300],
  ['files/Copas_de_vino.png', 'copas', 1032],
  ['files/WhatsAppImage2026-09-19at23.54.26.jpg', 'cata-a-ciegas', 900],
  // Regalos
  ['files/Etiqueta_de_Botella_de_Vino_Personalizada.png', 'botella-personalizada', 1000],
  ['files/Invino_Productos_2.png', 'caja-de-regalo', 1000],
  // Botellas (fondo transparente) para "¿Qué vas a servir?"
  ['products/Rompe_Hielo_Syrah-Tempranillo.png', 'b-rompehielo-syrah-tempranillo', 520],
  ['files/804_WEB_2.png', 'b-804-casa-momentos', 520],
  ['products/laberintogewurztraminer.png', 'b-laberinto-gewurztraminer', 520],
  ['products/nebbiolo.png', 'b-rompehielo-nebbiolo', 520],
  ['products/nipozzanoriservachiantirufina.png', 'b-nipozzano', 520],
  ['products/laya.png', 'b-laya', 520],
  ['files/Screenshot2023-07-05at11.38.12.png', 'b-flor-de-morca', 520],
  ['products/UNACEPA-VALDUERO.png', 'b-valduero-una-cepa', 520],
  ['products/drappiercartdor.png', 'b-drappier-carte-dor', 520],
  ['files/Screenshot2023-07-03at13.12.03.png', 'b-paul-et-fils', 520],
  ['products/LOSTAL.png', 'b-lostal-cazes', 520],
  ['files/Screenshot2023-07-03at13.13.56.png', 'b-edmond-thery', 520],
  ['files/tierramaria.png', 'b-tierra-maria-tempranillo', 520],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  let img = sharp(entrada);
  // Las botellas vienen en lienzos con mucho aire transparente: se recortan al contenido.
  if (nombre.startsWith('b-')) img = sharp(await img.trim().toBuffer());
  const info = await img
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: el isotipo amarillo de la marca (el sacacorchos) sobre negro, cuadrado.
const iso = await sharp(path.join(origen, 'files/Invino_Isotipo_amarillo_fondo_blanco.png')).trim().resize({ height: 200, fit: 'inside' }).toBuffer();
await sharp({ create: { width: 256, height: 256, channels: 4, background: '#1c1c1c' } })
  .composite([{ input: iso, gravity: 'center' }])
  .png()
  .toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
