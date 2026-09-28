// Fotos propias del clon (sitio/assets/images/): sesión profesional en sus hospitales (fachada de Doggie's Sur con el
// letrero 24/7, quirófano, cirugías, ultrasonido, rayos X, laboratorio, hospitalización, estética, medicina felina y
// dermatología) y una imagen de tomografía. No se usan los perros recortados de la portada (foto-portada y
// perrito-portada), el logo de COMVEPE ni los íconos. No se descargó nada nuevo. Este script crea copias .webp en
// ../assets/web/, el logo, el favicon, la imagen para compartir y src/data/fotos.json con las medidas.
// Uso: node fotos-web.mjs   (desde proyectos/322-doggieshospital/rediseno)
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
  ['FACHADA-SUR.webp', 'f-fachada'],
  ['doggies_instalaciones.webp', 'f-quirofano'],
  ['cirugia_doggies_dic23_2.webp', 'f-cirugia'],
  ['laparoscopia_doggies.webp', 'f-laparoscopia'],
  ['cardiologia_doggies_02.webp', 'f-cardiologia'],
  ['dermatologia_doggies.webp', 'f-dermatologia'],
  ['hospital_24_7_doggies.webp', 'f-hospital'],
  ['laboratorio-y-patologia_doggies.webp', 'f-laboratorio'],
  ['medicina-felina_doggies.webp', 'f-felina'],
  ['estetica_doggies_1.webp', 'f-estetica'],
  ['radiologia-y-ultrasonido_doggies.webp', 'f-radiologia'],
  ['quienes-somos_doggies_n1.webp', 'f-ultrasonido'],
  ['estetica_doggies.webp', 'f-golden'],
  ['quienes-somos_doggies_n3.webp', 'f-vendaje'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of fotos) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: 1000, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

const infoLogo = await sharp(path.join(origen, 'logo-doggies-horizontal.png')).trim().resize({ height: 120 }).webp({ quality: 92 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [infoLogo.width, infoLogo.height];
await sharp(path.join(origen, 'webclip.png')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));
await sharp(path.join(origen, fotos[0][0])).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${Object.keys(medidas).length} archivos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
