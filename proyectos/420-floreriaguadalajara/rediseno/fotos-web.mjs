// Imágenes del clon en sitio/assets/wp-content/uploads/ (publicDir de Vite).
// Solo se usan fotos de arreglos reales — sin plugins ni themes de WordPress.
// Fotos seleccionadas (todas ≥ 700 px, propias del negocio):
//   2021/05/Ramo100-rosas-rojas.jpg          (1920x1920) — hero y selector San Valentín
//   2021/05/150-Rosas-en-Caja.1.jpg          (1920x1920) — selector Día de las Madres
//   2017/05/Florero-Capri-1-scaled.jpg        (2560x2560) — selector Cumpleaños
//   2017/05/25-Rosas-Rojas-con-Orquidea.jpg   (1080x1080) — selector Boda
//   2021/05/Club-de-Flores.2.jpg              (1920x1920) — selector Sin Ocasión
//   2021/05/Ramo-150-Rosas-scaled.jpg         (2311x2560) — selector Extra Especial
//   2021/05/20-Tulipanes.1-1.jpg              (1920x1728) — galería tulipanes
//   2022/02/100-Rosas-Blancas-1-scaled.jpg    (2560x2560) — galería rosas blancas
//   2021/10/Caja-Mink-corazones.1.jpg         (968x993)   — galería caja mink
//   2022/03/Orquideas-360.2.jpg               (701x701)   — galería orquídeas
//   2023/01/Girasoles.1.jpg                   (1080x1080) — galería girasoles
//   2021/06/Ramo-Amalfi.1.jpg                 (1445x1445) — galería ramo Amalfi
//   2021/06/floreriagdl-03.png                (263x121)   — logo horizontal
//   2021/07/Tulipanes-amarillos.1-3.jpg        (1458x1386) — galería tulipanes amarillos
// NO se usan imágenes de wp-content/plugins/ ni wp-content/themes/.
// Este script crea copias .webp ligeras en ../assets/web/
// Uso: node fotos-web.mjs   (desde proyectos/420-floreriaguadalajara/rediseno)
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
  ['2021/05/Ramo100-rosas-rojas.jpg',        'hero-rosas-rojas',      1600],
  ['2021/05/150-Rosas-en-Caja.1.jpg',         'caja-rosas-premium',    1200],
  ['2017/05/Florero-Capri-1-scaled.jpg',       'florero-capri',         1200],
  ['2017/05/25-Rosas-Rojas-con-Orquidea.jpg', 'rosas-orquidea-boda',   1200],
  ['2021/05/Club-de-Flores.2.jpg',             'club-de-flores',        1200],
  ['2021/05/Ramo-150-Rosas-scaled.jpg',        'ramo-150-rosas',        1200],
  ['2021/05/20-Tulipanes.1-1.jpg',             'tulipanes',             1200],
  ['2022/02/100-Rosas-Blancas-1-scaled.jpg',   'rosas-blancas',         1200],
  ['2021/10/Caja-Mink-corazones.1.jpg',        'caja-mink',             1000],
  ['2022/03/Orquideas-360.2.jpg',              'orquideas',             1000],
  ['2023/01/Girasoles.1.jpg',                  'girasoles',             1000],
  ['2021/06/Ramo-Amalfi.1.jpg',               'ramo-amalfi',           1000],
  ['2021/07/Tulipanes-amarillos.1-3.jpg',      'tulipanes-amarillos',   1000],
  ['2021/06/floreriagdl-03.png',               'logo',                   500],
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

// Favicon: logo sobre fondo verde oscuro de la marca
const logoBuffer = await sharp(path.join(origen, '2021/06/floreriagdl-03.png'))
  .resize(56, 26, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();
await sharp({ create: { width: 64, height: 64, channels: 4, background: '#1a2e1a' } })
  .composite([{ input: logoBuffer, left: 4, top: 19 }])
  .png()
  .toFile(path.join(destino, 'icono.png'));

console.log(`\n${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB → ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas, null, 2));
