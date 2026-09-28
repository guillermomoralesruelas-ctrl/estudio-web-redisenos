// El clon guarda en sitio/assets/uploads/.../img/ 56 fotos propias de bodas y XV años (JPG de 0.4 a 2 MB, casi todas
// con datos de cámara Canon y edición en Lightroom/Photoshop). No hay logo en el clon (su PNG no se descargó), así que
// el nombre va con letra. Este script crea copias .webp más ligeras en assets/web/ (publicDir de Vite).
// No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/276-cuadroxcuadro/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/uploads/s/7/z/a/7zakljd088o1/img');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, ancho máximo]
const lista = [
  ['full_eUl1Zzwx.jpg', 'velo-montana', 1600],
  ['full_5CHhrSXg.jpg', 'zapato-novia', 900],
  ['full_hJaMAbSJ.jpg', 'peinado', 900],
  ['full_kJZueFpy.jpg', 'espejo', 900],
  ['full_9gPuzT9F.jpg', 'puerta-iglesia', 900],
  ['full_TFEjuiGa.jpg', 'beso-velo', 900],
  ['full_6JPTNpcV.jpg', 'petalos', 900],
  ['full_DJUbEDCR.jpg', 'vals-luces', 900],
  ['full_iOCKQUyP.jpg', 'confeti', 900],
  ['full_rmqissSy.jpg', 'pastel', 900],
  ['full_Q4sW2ind.jpg', 'flores-amarillas', 900],
  ['full_VROqooBs.jpg', 'papel-picado', 900],
  ['full_lJiTeInM.jpg', 'piramide', 900],
  ['full_nHi3Ksn2.jpg', 'espalda-con-espalda', 900],
  ['full_vVpoHDcF.jpg', 'volcan', 900],
  ['full_s24ZnK5c.jpg', 'letras-love', 900],
  ['full_n2oagnkJ.jpg', 'velo-bosque', 900],
  ['full_KC6md5pb.jpg', 'xv-bosque', 900],
  ['gwkj0rjE.jpg', 'xv-cascada', 900],
  ['full_NDu0Mgb4.jpg', 'xv-violin', 900],
  ['full_hc3YTa9e.jpg', 'xv-risco', 900],
  ['PMlT1pV7.jpg', 'auto-clasico', 900],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, ancho] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .rotate()
    .resize({ width: ancho, withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
