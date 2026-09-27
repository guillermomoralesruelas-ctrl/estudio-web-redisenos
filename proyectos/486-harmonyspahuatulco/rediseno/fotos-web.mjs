// El clon (sitio/assets/images) trae fotos de plantilla (prettyPhoto, franjas decorativas) mezcladas con
// fotos propias del negocio. Fotos propias reales usadas: 01.jpg, 02.jpg y 04.jpg (esteticista aplicando
// tratamiento facial, 380x300), transporte.jpg (fachada del spa con las camionetas del traslado VIP, 1000x461)
// y update/01.jpg (sala de masajes con velas y toallas, 380x179). nutricion.jpg no se usa: es foto de banco
// (frutas y verduras genéricas). El domo del temazcal no tiene foto suelta: se recorta de update01.jpg, un
// flyer propio del negocio con dos fotos reales (temazcal + sala de masajes) y texto de precios superpuesto;
// el recorte deja solo el domo, sin texto. No se descargó nada nuevo.
// Este script crea copias .webp ligeras en ../assets/web/ (no toca el clon); Vite usa esa carpeta como publicDir.
// También escribe src/data/fotos.json con las medidas de cada archivo para poner width y height.
// Uso: node fotos-web.mjs   (desde proyectos/486-harmonyspahuatulco/rediseno)
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

const medidas = {};
let antes = 0, despues = 0;
async function webp(de, a, opciones = {}) {
  const entrada = path.join(origen, de);
  antes += fs.statSync(entrada).size;
  let img = sharp(entrada);
  if (opciones.extract) img = img.extract(opciones.extract);
  if (opciones.ancho) img = img.resize({ width: opciones.ancho, withoutEnlargement: true });
  const info = await img.webp({ quality: opciones.calidad ?? 82, effort: 5 }).toFile(path.join(destino, a));
  despues += info.size;
  medidas[a] = [info.width, info.height];
}

await webp('01.jpg', 'tratamiento-1.webp');
await webp('02.jpg', 'tratamiento-2.webp');
await webp('04.jpg', 'tratamiento-3.webp');
// Se recorta la franja inferior con el texto del cartel ("Cortesía a Nuestros clientes VIP...");
// el rediseño ya dice ese mensaje con su propio texto.
await webp('transporte.jpg', 'transporte.webp', { extract: { left: 0, top: 0, width: 1000, height: 340 } });
await webp('update/01.jpg', 'sala.webp');
// Domo del temazcal: recorte sin el texto de precios del flyer (ver nota arriba).
await webp('update01.jpg', 'temazcal.webp', { extract: { left: 685, top: 480, width: 560, height: 470 } });

// Imagen para compartir (Open Graph): la fachada + traslado VIP, en 1200 x 630, en JPG.
await sharp(path.join(origen, 'transporte.jpg')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 80 }).toFile(path.join(destino, 'compartir.jpg'));

// Favicon: una hoja como la del logo real del negocio (update01.jpg), en su teal (#206779) sobre crema. Dibujado por nosotros.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" rx="14" fill="#fbe9da"/><path d="M32 12c11 4 16 13 16 24-11 0-20-5-24-16-2-5-2-6 0-8 2 4 5 8 10 11-2-5-3-8-2-11Z" fill="#206779"/></svg>`;
await sharp(Buffer.from(svg)).png().toFile(path.join(destino, 'icono.png'));

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${Object.keys(medidas).length} archivos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
