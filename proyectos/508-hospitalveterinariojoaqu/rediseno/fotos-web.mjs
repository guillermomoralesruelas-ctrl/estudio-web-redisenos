// Fotos propias del clon (sitio/assets/images/): las 6 del carrusel (fachada de la unidad Recta a Cholula con el equipo,
// recepción, hospitalización, quirófano, laboratorio y rehabilitación), 3 de "Servicios" (consulta, estética y tienda,
// tomadas con cámara Canon) y 13 retratos del equipo (Canon o iPhone). No se usan las fotos de los testimonios, el perro
// y gato recortados (services/dog.png) ni las texturas de fondo. No se descargó nada nuevo. Este script crea copias .webp
// en ../assets/web/, el logo, el favicon, la imagen para compartir y src/data/fotos.json con las medidas.
// Uso: node fotos-web.mjs   (desde proyectos/508-hospitalveterinariojoaqu/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/images');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const fotos = [
  ['slider-image/unidad-recta-a-cholula-hospital-veterinario.jpg', 'f-unidad', 1600],
  ['slider-image/consulta-mascotas-hospital-veterinario.jpg', 'f-recepcion', 1200],
  ['slider-image/hospitzalacion-mascotas-puebla-b.jpg', 'f-hospitalizacion', 1200],
  ['slider-image/cirugia-mascotas-hospital-veterinario.jpg', 'f-quirofano', 1200],
  ['slider-image/diagnostico-laboratorio-hospital-veterinario.jpg', 'f-laboratorio', 1200],
  ['slider-image/rehabilitacion-fisioterapia-de-perros-mascotas.jpg', 'f-rehabilitacion', 1200],
  ['intro/consulta2g.jpg', 'f-consulta', 370],
  ['intro/estetica.jpg', 'f-estetica', 370],
  ['intro/tienda.jpg', 'f-tienda', 370],
];
// Retratos: el nombre del archivo en el clon y el de la copia (como en src/data/content.ts).
const equipo = [
  ['01Buxade', 'e-buxade'], ['alan', 'e-alan'], ['06', 'e-claudia'], ['dani', 'e-daniela'], ['erick', 'e-erik'],
  ['02Natziely', 'e-natziely'], ['ellian', 'e-ellian'], ['montse', 'e-montserrat'], ['marcoflores', 'e-marco'],
  ['03', 'e-miriam'], ['05', 'e-olivia'], ['08', 'e-mayra'], ['cristina', 'e-cristina'],
];

let antes = 0, despues = 0;
const medidas = {};
async function webp(archivo, nombre, ancho, calidad = 78) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: ancho, withoutEnlargement: true }).webp({ quality: calidad, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
for (const [a, n, w] of fotos) await webp(a, n, w);
for (const [a, n] of equipo) await webp(`team/${a}.jpg`, n, 270, 80);

const logo = path.join(origen, 'logo-web5.png');
const infoLogo = await sharp(logo).trim().resize({ height: 120 }).webp({ quality: 92 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [infoLogo.width, infoLogo.height];
// Favicon: las siluetas de perros y gatos del logo (su lado derecho).
const rec = await sharp(logo).trim().toBuffer({ resolveWithObject: true });
const siluetas = await sharp(rec.data).extract({ left: Math.round(rec.info.width * 0.56), top: 0, width: rec.info.width - Math.round(rec.info.width * 0.56), height: rec.info.height }).trim().toBuffer();
await sharp(siluetas).resize(56, 56, { fit: 'contain', background: '#ffffff' }).extend({ top: 4, bottom: 4, left: 4, right: 4, background: '#ffffff' }).flatten({ background: '#ffffff' }).png().toFile(path.join(destino, 'icono.png'));

await sharp(path.join(origen, fotos[0][0])).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${Object.keys(medidas).length} archivos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
