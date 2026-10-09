// El clon guarda las fotos en sitio/assets/wp-content/uploads/2023/ (sesión profesional en su consultorio).
// Se usan solo las 5 fotos propias del Lic. César Sobrado en su consultorio (paredes color aqua):
//   Nutriologo-en-cancun-1 (en su escritorio), Foto-1-2 (tomando la presión a un paciente),
//   Foto-2 (en la computadora), Foto-3 (de pie con carpeta) y Nutriologos-en-cancun (con platos de alimentos).
// No se usan las tres fotos de "casos" (Nutricionista-en-cancun, Nutricionistas-en-cancun-1, Nutriologo-cancun):
// son modelos de banco recortadas sobre un patrón, no pacientes ni el consultorio.
// Este script crea copias .webp ligeras en ../assets/web/ (publicDir) y copia el logotipo.
// Uso: node fotos-web.mjs   (desde proyectos/653-liccesarsobrado/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const up = path.join(aqui, '../sitio/assets/wp-content/uploads/2023');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo dentro de uploads/2023, nombre de salida, lado largo máximo]
const fotos = [
  ['04/Nutriologo-en-cancun-1-1024x683.jpg', 'escritorio', 1024],
  ['05/Foto-1-2-1024x683.jpg',               'presion',    1024],
  ['05/Foto-2-1024x683.jpg',                 'computadora',1024],
  ['05/Foto-3-1024x683.jpg',                 'de-pie',     1024],
  ['05/Nutriologos-en-cancun.jpg',           'platos',     1100],
];

let antes = 0, despues = 0;
const medidas = {};
let medidasLogo = [0, 0];
for (const [archivo, nombre, lado] of fotos) {
  const entrada = path.join(up, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .rotate()
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
  console.log(`  ${nombre}.webp  ${info.width}×${info.height}`);
}

// Logotipos: el SVG a color (aqua y ámbar) y el PNG en blanco para fondos oscuros.
fs.copyFileSync(path.join(up, '09/LOGO-CESAR.svg'), path.join(destino, 'logo.svg'));
const logo = await sharp(path.join(up, '05/cropped-Logo-1-Negativo.png'))
  .trim()
  .resize({ width: 640 })
  .png()
  .toFile(path.join(destino, 'logo-blanco.png'));
medidasLogo = [logo.width, logo.height];
// Ícono: su favicon (Recurso-3) de 192 px.
fs.copyFileSync(path.join(up, '04/cropped-Recurso-3_1-192x192.png'), path.join(destino, 'icono.png'));

// Imagen para compartir (1200×630) desde la foto en su escritorio.
await sharp(path.join(up, '04/Nutriologo-en-cancun-1-1024x683.jpg'))
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82 })
  .toFile(path.join(destino, 'compartir.jpg'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log('  logo-blanco.png', medidasLogo.join('×'));
console.log(`\n${fotos.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
