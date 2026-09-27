// El clon guarda en sitio/assets/wp-content/uploads/ las 206 fotos del "Portafolios de nuestros alumnos"
// (2016/01/Cursos-de-Fotografía-Profesional-N.jpg), el logo, el retrato de Luis Susunaga y anuncios de cursos
// (estos últimos con fotos de banco: no se usan). 174 fotos del portafolio guardan en su EXIF la cámara y los ajustes;
// las 5 con "Picasa" como autor no se usan. src/data/portafolio.json tiene la cámara, lente y ajustes de las 58 usadas,
// leídos del EXIF de estos mismos archivos. No se descargó nada nuevo.
// Este script crea copias .webp ligeras en assets/web/ (no toca el clon) y el favicon. Vite usa assets/web/ como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/384-escueladefotografia/rediseno)
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

const portafolio = JSON.parse(fs.readFileSync(path.join(aqui, 'src/data/portafolio.json'), 'utf8'));
// [archivo original, nombre de salida, lado largo máximo]
export const lista = [
  ...portafolio.flatMap((c) => c.fotos.map((f) => [`2016/01/Cursos-de-Fotograf%C3%ADa-Profesional-${f.n}.jpg`, `alumno-${f.n}`, 1000])),
  ['2023/08/Perfil-Completo-Circulo-Sin.png', 'luis-susunaga', 300],
  ['2023/05/Logo-SNG-Escuela-2023-WEB-scaled.jpg', 'logo', 640],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 74, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: la "coma" de su logo (lado izquierdo), a 64 px.
await sharp(path.join(origen, '2023/05/Logo-SNG-Escuela-2023-WEB-scaled.jpg'))
  .extract({ left: 250, top: 100, width: 600, height: 600 }).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));

fs.writeFileSync(path.join(aqui, 'src/data/medidas.json'), JSON.stringify(medidas));
console.log(`${lista.length} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
