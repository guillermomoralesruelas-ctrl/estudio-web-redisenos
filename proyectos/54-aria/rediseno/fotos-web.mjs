// El clon guarda en sitio/assets/_astro/ sus fotos (ya en .webp): nueve fotos propias de clases en su estudio, los
// banners de la promoción de septiembre, avatares de 32 px de las reseñas y el ícono. No se usa
// "su_primer_baile_como_pareja_de_novios" (1456 × 816, la medida de salida típica de un generador de imágenes, y no se
// parece a su estudio) ni los banners. Este script crea copias .webp en assets/web/ (publicDir de Vite) y el ícono.
// No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/54-aria/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/_astro');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const lista = [
  ['instructora_bailando_alumno_e7ac8c8d2d_2cmUCI.webp', 'instructora-alumno'],
  ['estudiantes_practicando_con_instructores_0585ee2cd5_Z1OC9JJ.webp', 'practicando'],
  ['salsa_cubana_3x_fc34727c67_Z21ajYC.webp', 'salsa-cubana'],
  ['alumnos_en_clase_de_baile_344722e1ef_2wVCAN.webp', 'alumnos-en-clase'],
  ['estudiantes_bailando_academia_aria_a4778aab9b_Z2uYr1y.webp', 'estudiantes-bailando'],
  ['instructores_de_baile_con_alumnos_4b7aff9366_1w69oC.webp', 'instructores-alumnos'],
  ['instructores_y_personas_aprendiendo_a_bailar_cdb0ab4770_2v3Ex.webp', 'aprendiendo'],
  ['bachata_image_a69ab59cf0_cR8at.webp', 'bachata'],
  ['cumbia_53055c7808_Z2gj4in.webp', 'cumbia'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 78, effort: 5 })
    .toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
await sharp(path.join(aqui, '../sitio/assets/apple-icon-180x180.png')).resize(64).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
