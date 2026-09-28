// El clon guarda en sitio/assets/wp-content/uploads/ sus fotos: 21 fotos propias de eventos (1280 px, tomadas en sus
// salones, jardines y montajes), dos de bodas, una de convención, las tarjetas de servicio con marco de boleto
// (foto + código de barras, diseño del sitio) y fondos decorativos (palmeras, cortina roja, brillos). Se usan las fotos
// propias; no las tarjetas-boleto ni los fondos. Este script crea copias .webp en assets/web/ (publicDir de Vite) y el
// ícono. No se descargó nada nuevo y el clon no se toca.
// Uso: node fotos-web.mjs   (desde proyectos/502-hollywoodmeetingplanners/rediseno)
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

const lista = [
  ['2025/08/fiestas-tema-cancun-1.jpeg', 'escenario-luces'],
  ['2025/08/fiestas-tema-cancun-10.jpeg', 'noche-hindu'],
  ['2025/08/fiestas-tema-cancun-11.jpeg', 'steampunk-avion'],
  ['2025/08/fiestas-tema-cancun-12.jpeg', 'carrera'],
  ['2025/08/fiestas-tema-cancun-13.jpeg', 'salon-banquete'],
  ['2025/08/fiestas-tema-cancun-14.jpeg', 'bailarina-alas'],
  ['2025/08/fiestas-tema-cancun-15.jpeg', 'personaje'],
  ['2025/08/fiestas-tema-cancun-16.jpeg', 'mesas-desde-arriba'],
  ['2025/08/fiestas-tema-cancun-2.jpeg', 'gala-escenario'],
  ['2025/08/fiestas-tema-cancun-3.jpeg', 'pista-gala'],
  ['2025/08/fiestas-tema-cancun-4.jpeg', 'equipo-avion'],
  ['2025/08/fiestas-tema-cancun-5.jpeg', 'lounge'],
  ['2025/08/fiestas-tema-cancun-6.jpeg', 'mural-planeta'],
  ['2025/08/fiestas-tema-cancun-7.jpeg', 'staff-retro'],
  ['2025/08/fiestas-tema-cancun-8.jpeg', 'staff-disfraces'],
  ['2025/08/fiestas-tema-cancun-9.jpeg', 'carpa-jardin'],
  ['2025/08/meeting-planners-cancun-HOLLYWOOD-CANCUN-1.webp', 'salon-morado'],
  ['2025/08/meeting-planners-cancun-HOLLYWOOD-CANCUN-10.webp', 'salon-estrellas'],
  ['2025/08/meeting-planners-cancun-HOLLYWOOD-CANCUN-11.webp', 'salon-dorado'],
  ['2025/08/meeting-planners-cancun-HOLLYWOOD-CANCUN-9.webp', 'fiesta-pantallas'],
  ['2026/05/foto-de-mostrativa.webp', 'safari'],
  ['2025/07/organizacion-de-eventos-en-cancun-mexico-1.jpg', 'boda-mesa'],
  ['2025/07/Wedding-Planner-Cancun10.jpeg', 'boda-jardin'],
  ['2025/07/Hollywood_Cancun_Organizador-de-Eventos-9.webp', 'salon-convencion'],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).rotate().resize({ width: 1000, height: 1000, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 72, effort: 5 }).toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}
await sharp(path.join(origen, '2025/07/cropped-FAVICON_HC-180x180.png')).resize(64).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
