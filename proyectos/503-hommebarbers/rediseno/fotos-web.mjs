// Fotos del clon (sitio/assets/wp-content/uploads/): el mostrador con el logo "HB" y tres fotos del interior de la
// barbería con sus barberos (las capas llevan el logo de "El Taller", el otro nombre que usa su sitio). No se usan:
// la foto de Cristiano Ronaldo, el hombre con copa de 2025 y el barbero con mandil (parecen hechas o editadas con IA),
// ni el barbero junto a un muro de ladrillo, el afeitado y el corte con peine (de banco). No se descargó nada nuevo.
// Este script crea copias .webp en ../assets/web/, el favicon (el "HB" del mostrador), la imagen para compartir y
// src/data/fotos.json con las medidas.
// Uso: node fotos-web.mjs   (desde proyectos/503-hommebarbers/rediseno)
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
  ['2024/11/Mostrador-de-Homme-Barbers-Cancun.jpg', 'f-mostrador'],
  ['2025/12/orte-de-cabello-1-min.jpg', 'f-local'],
  ['2025/12/orte-de-cabello-4-min.jpg', 'f-equipo'],
  ['2025/12/orte-de-cabello-3-min.jpg', 'f-barbero'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of fotos) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().webp({ quality: 80, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: el círculo "HB" del mostrador.
await sharp(path.join(origen, fotos[0][0])).extract({ left: 290, top: 462, width: 232, height: 232 }).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));
await sharp(path.join(origen, fotos[1][0])).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${Object.keys(medidas).length} archivos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
