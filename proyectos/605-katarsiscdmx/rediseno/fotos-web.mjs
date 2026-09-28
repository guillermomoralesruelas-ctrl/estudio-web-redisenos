// El clon trae en sitio/assets/users/ los retratos de sus 10 psicoterapeutas (fotos propias, sin EXIF de Google/Picasa
// ni credenciales C2PA). Todo lo demás son fotos de banco o fondos del tema (banner1.jpeg, banner2.jpg, images/doctors.jpg,
// images/about-bg.jpg, images/slider2-bg.jpg, images/app-available-img.jpg…): médicos con estetoscopio, laboratorio,
// tabletas con electrocardiogramas; no se usan. No se descargó nada nuevo.
// Este script crea en ../assets/web/ (no toca el clon): los retratos cuadrados centrados en el rostro, el logotipo,
// el favicon (los cuatro cuadros del logo), la imagen para compartir (los diez rostros) y src/data/fotos.json.
// Uso: node fotos-web.mjs   (desde proyectos/605-katarsiscdmx/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const retratos = [
  ['users/8-FOTO%20CECI%202.jpg', 'cecilia-gomez'],
  ['users/17-Carla%20-Molina-img.jpeg', 'carla-molina'],
  ['users/20-93b5866c-c9e7-4ba1-a82f-722882a5d4af.JPG', 'perla-perez'],
  ['users/21-Foto%20Irma%20Correa.jpeg', 'irma-correa', 'north'],
  ['users/45-Isabella%20Bueno%20foto%20perfil.jpg', 'isabella-bueno'],
  ['users/137-ricardo.jpeg', 'ricardo-guemes'],
  ['users/183-miriam_psi.jpg', 'myriam-mata'],
  ['users/243-erik.jpg', 'erik-pahua'],
  ['users/209-mario.png', 'mario-cuadros'],
  ['users/231-yolitzma.png', 'yolitzma-sanchez'],
];

let antes = 0, despues = 0;
const medidas = {};
// El recorte automático busca la zona más llamativa; en el retrato de Irma Correa elige la blusa estampada, así que ahí va arriba.
for (const [archivo, nombre, pos] of retratos) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize(480, 480, { fit: 'cover', position: pos ?? sharp.strategy.attention }).webp({ quality: 80, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Logotipo (600 x 169) y favicon con sus cuatro cuadros de color (la parte izquierda del logo).
const logo = path.join(origen, 'logo1.png');
const infoLogo = await sharp(logo).resize({ width: 420 }).webp({ quality: 90 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [infoLogo.width, infoLogo.height];
const simbolo = await sharp(logo).extract({ left: 0, top: 0, width: 152, height: 169 }).toBuffer();
await sharp(simbolo).trim().resize(64, 64, { fit: 'contain', background: '#ffffff00' }).png().toFile(path.join(destino, 'icono.png'));

// Imagen para compartir: los diez rostros del equipo en 5 x 2 (1200 x 630).
const celdas = await Promise.all(retratos.map(([archivo, , pos]) => sharp(path.join(origen, archivo)).rotate().resize(240, 315, { fit: 'cover', position: pos ?? sharp.strategy.attention }).toBuffer()));
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#fbf7f2' } })
  .composite(celdas.map((input, i) => ({ input, left: (i % 5) * 240, top: Math.floor(i / 5) * 315 })))
  .jpeg({ quality: 80 }).toFile(path.join(destino, 'compartir.jpg'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${retratos.length} retratos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
