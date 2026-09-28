// Fotos propias del clon (sitio/assets/wp-content/uploads/): su clínica en Mexicali (recepción, sala de tomografía,
// consultorio, consultorio infantil), el equipo frente a la fachada, el auto del traslado y 6 retratos de sus dentistas
// (varias con EXIF de cámara Sony). Su sitio dice "No stock photos... All photography supplied by Let's Smile Dentistry".
// No se usan: shutterstock_105635699 (banco), el render del implante, el hombre con dolor de muelas (banco) ni
// Dental-Office-2 (render). No se descargó nada nuevo. Este script crea copias .webp en ../assets/web/, el logo, el
// favicon, la imagen para compartir y src/data/fotos.json con las medidas.
// Uso: node fotos-web.mjs   (desde proyectos/651-letssmile/rediseno)
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

const fotos = [
  ['2026/05/Lets-Smile-Dentistry-Team-Mexicali-1-scaled.jpg', 'f-fachada', 1600],
  ['2026/05/Lets-Smile-Dentistry-Dental-Clinic-Mexicali-scaled.webp', 'f-recepcion', 1400],
  ['2026/05/Advanced-Dental-Technology-Room-Lets-Smile-Dentistry-Mexicali.webp', 'f-tomografia', 1000],
  ['2026/05/dental-equipment-lets-smile-dentistry-mexicali.webp', 'f-consultorio', 1000],
  ['2026/01/Mexicali-Kids-Dental-Services-Lets-Smile.webp', 'f-infantil', 1000],
  ['2026/01/Dental-Tourism-Services-Mexicali-Baja-California-01.webp', 'f-traslado', 644],
  ['2026/01/Lets-Smile-Dentistry-Mexicali-Doctors-Office-1.webp', 'f-doctores', 1200],
  ['2026/01/Tomas-Garcia-Implant-Specialist-Mexicali-1.webp', 'd-garcia', 480],
  ['2026/01/Angel-Alvarado-Root-Canal-Specialist-Mexicali-1.webp', 'd-alvarado', 480],
  ['2026/01/Daniel-Aguilar-Periodontics-Specialist-Mexicali-1.webp', 'd-aguilar', 480],
  ['2026/01/Martin-Salinas-Restorative-Dentistry-Mexicali-1.webp', 'd-salinas', 480],
  ['2026/01/Rodrigo-Gonzalez-Oral-Rehabilitation-Specialist-Mexicali-1.webp', 'd-gonzalez', 480],
  ['2026/05/Dra-Maria-Jose-Ochoa-Ruiz-General-Dentist-Mexicali.webp', 'd-ochoa', 480],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, ancho] of fotos) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: ancho, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Logo verde con "DENTISTRY" en blanco: va sobre fondo oscuro.
const logo = path.join(origen, '2024/03/Lets-Smile-Dentistry-Logo-Verde-Blanco.png');
const infoLogo = await sharp(logo).trim().resize({ height: 110 }).webp({ quality: 92 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [infoLogo.width, infoLogo.height];
await sharp(path.join(origen, '2026/03/cropped-Lets-Smile-Dentistry-Favicon-192x192.png')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));

await sharp(path.join(origen, fotos[0][0])).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${Object.keys(medidas).length} archivos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
