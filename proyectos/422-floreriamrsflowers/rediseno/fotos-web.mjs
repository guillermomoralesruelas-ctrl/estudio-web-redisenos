// Imágenes del clon en sitio/assets/wp-content/uploads/ (publicDir de Vite).
// Solo se usan fotos de arreglos reales — sin ChatGPT-Image, sin plugins, sin themes de WordPress.
// Fotos seleccionadas (reales, tomadas del negocio):
//   2017/12/Ramo-de-50-Rosas-2.png              (540x540)  — hero y galería
//   2020/05/Envia-flores-de-amor-en-CDMX-…jpg   (590x701)  — ramo de rosas, galería
//   2022/10/Ramo-de-Rosas-Inglesas.webp          (540x540)  — ramos inglesas, galería
//   2023/01/Coronas-para-Muertos.jpg             (1080x1440)— coronas, galería
//   2026/01/Ramo-de-50-rosas-negras.png          (540x540)  — rosas negras, galería
//   2026/02/Ramo-con-80-Rosas-Mixtas.jpg         (540x540)  — ramo mixto, galería
//   2022/08/Cono-de-Girasol-con-Rosas-1-450x450.png (450x450)— girasol, galería
//   2026/09/WhatsApp-Image-2026-08-26-at-4.20.45-PM-450x450.jpeg (450x450) — girasoles y mini rosas
//   2018/03/WhatsApp-Image-2026-07-23-at-5.04.07-PM-1-450x450.jpeg (450x450) — 24 rosas rojas
//   2018/03/WhatsApp-Image-2026-07-23-at-5.04.07-PM-450x450.jpeg  (450x450) — caja 25 rosas rojas
//   2018/03/WhatsApp-Image-2026-07-23-at-5.04.07-PM-2-450x450.jpeg (450x450)— 12 gerberas
//   2026/06/Fondo-de-flores-Mrs-Floweres-1536x864.jpg — fondo hero
//   2026/06/logo-mrf-2026.jpg — logo
// NO se usan imágenes de wp-content/plugins/ ni ChatGPT-Image.
// Este script crea copias .webp ligeras en ../assets/web/
// Uso: node fotos-web.mjs   (desde proyectos/422-floreriamrsflowers/rediseno)
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

// [ruta relativa al origen, nombre de salida, lado largo máximo]
const lista = [
  ['2017/12/Ramo-de-50-Rosas-2.png',                                          'hero-rosas',            800],
  ['2020/05/Envia-flores-de-amor-en-CDMX-Ramo-de-rosas-disponible-Mrs.-Flowers.jpg', 'ramo-amor',      800],
  ['2022/10/Ramo-de-Rosas-Inglesas.webp',                                     'rosas-inglesas',        800],
  ['2023/01/Coronas-para-Muertos.jpg',                                         'coronas-muertos',       800],
  ['2026/01/Ramo-de-50-rosas-negras.png',                                      'rosas-negras',          800],
  ['2026/02/Ramo-con-80-Rosas-Mixtas.jpg',                                     'rosas-mixtas',          800],
  ['2022/08/Cono-de-Girasol-con-Rosas-1-450x450.png',                          'cono-girasol',          800],
  ['2026/09/WhatsApp-Image-2026-08-26-at-4.20.45-PM-450x450.jpeg',             'girasoles-rosas',       800],
  ['2018/03/WhatsApp-Image-2026-07-23-at-5.04.07-PM-1-450x450.jpeg',           'ramo-24-rosas',         800],
  ['2018/03/WhatsApp-Image-2026-07-23-at-5.04.07-PM-450x450.jpeg',             'caja-25-rosas',         800],
  ['2018/03/WhatsApp-Image-2026-07-23-at-5.04.07-PM-2-450x450.jpeg',           'ramo-gerberas',         800],
  ['2026/06/Fondo-de-flores-Mrs-Floweres-1536x864.jpg',                        'fondo-hero',           1600],
  ['2026/06/logo-mrf-2026.jpg',                                                 'logo',                  500],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  if (!fs.existsSync(entrada)) {
    console.warn(`FALTA: ${archivo}`);
    continue;
  }
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: nombre === 'logo' ? 90 : 78, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
  console.log(`${nombre}.webp -> ${info.width}x${info.height}`);
}

// Favicon: rosa sobre fondo verde oscuro
await sharp({ create: { width: 64, height: 64, channels: 4, background: '#1a2e24' } })
  .composite([{
    input: Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
        <path fill="#e06b8a" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <circle cx="12" cy="12" r="4" fill="#e06b8a"/>
      </svg>`
    ),
    left: 10,
    top: 10,
  }])
  .png()
  .toFile(path.join(destino, 'icono.png'));

console.log(`\n${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB → ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas, null, 2));
