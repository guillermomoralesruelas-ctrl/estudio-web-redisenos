// Fotos propias del clon (sitio/assets/wp-content/uploads/): 9 pares de antes y después de sus pacientes (450 x 450,
// fondo negro, editadas en Photoshop), la fachada del Edificio San Ángel, una imagen de su recepción (del podcast) y
// los retratos del Dr. Luis Alejandro Saucedo y la Dra. Yolitzma Lugo. No se usan los fondos decorativos (back2,
// back-3) ni las miniaturas de videos con texto. No se descargó nada nuevo. Este script crea copias .webp en
// ../assets/web/, el logo, el favicon, la imagen para compartir y src/data/fotos.json con las medidas.
// Uso: node fotos-web.mjs   (desde proyectos/337-drtoothsaltillo/rediseno)
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

// Pacientes: prefijo del archivo en el clon y nombre corto de la copia (como en src/data/content.ts).
const pacientes = [
  ['Daniela-Saldana', 'daniela'], ['Cristina-San-Miguel', 'cristina'], ['Erika-Liliana', 'erikal'],
  ['lucia-de-Valle', 'lucia', 'Lucia-de-valle'], ['Erika-Trevino', 'erikat'], ['Ana-Claudia', 'anaclaudia'],
  ['Marcela-Guerrero', 'marcela'], ['Paty-Montanez', 'paty'], ['Yessica-Torres', 'yessica'],
];
const fotos = [
  ['editada-1-1024x768.jpg', 'f-edificio', 1024],
  ['podcast1-768x387.jpg', 'f-recepcion', 768],
  ['director-general-dr-luis-saucedo.png', 'f-saucedo', 233],
  ['director-clinico-dra-yolitzma-lugo.png', 'f-lugo', 233],
];

let antes = 0, despues = 0;
const medidas = {};
async function webp(archivo, nombre, ancho) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: ancho, withoutEnlargement: true }).flatten({ background: '#111111' }).webp({ quality: 80, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
for (const [prefijo, nombre, prefijoDespues] of pacientes) {
  await webp(`${prefijo}-Antes_1.jpg`, `a-${nombre}`, 450);
  await webp(`${prefijoDespues ?? prefijo}-Despues_1.jpg`, `d-${nombre}`, 450);
}
for (const [a, n, w] of fotos) await webp(a, n, w);

const logo = await sharp(path.join(origen, '34.-Logo-horizontal-negro-version-2026-e1778799263748-768x165.png')).trim().resize({ height: 90 }).webp({ quality: 92 }).toFile(path.join(destino, 'logo.webp'));
medidas.logo = [logo.width, logo.height];
await sharp(path.join(origen, 'cropped-drtooth-1-192x192.jpg')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));
await sharp(path.join(origen, 'Ana-Claudia-Despues_1.jpg')).resize(1200, 630, { fit: 'contain', background: '#111111' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${Object.keys(medidas).length} archivos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
