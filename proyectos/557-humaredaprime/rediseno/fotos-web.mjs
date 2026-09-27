// El clon guarda las fotos en sitio/assets/wp-content/uploads/2026/06/ (9 fotos, el logo y 3 íconos del sitio).
// Todas son fotos propias del restaurante (su letrero, su terraza frente a la playa, sus mesas, sus cortes).
// Metadatos: ninguna trae XMP ni marcas de IA (C2PA, "Google AI", Gemini…). Exterior e Interior (1470x827) dicen
// "Google" como programa en su EXIF (probablemente exportadas de Google Fotos o de su perfil de Google); tres traen "Photoshop 3.0".
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en ../assets/web/ (no toca el clon),
// más el logo y el favicon. Vite usa esa carpeta como publicDir.
// Uso: node fotos-web.mjs   (desde proyectos/557-humaredaprime/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/wp-content/uploads/2026/06');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

// [archivo original, nombre de salida, lado largo máximo]
const lista = [
  ['Humareda-Prime-Flameado.jpeg', 'flameado', 1280],                          // corte flameado frente al letrero de madera "Humareda Prime"
  ['interior-restaurante-humareda-prime-boca-del-rio.jpeg', 'mesa', 1200],     // mesa con lámpara de luz cálida y el salón al fondo
  ['ribeye-filete-parrilla-vegetales.jpeg', 'ribeye', 1200],                   // rib eye con brochetas de verduras y piña
  ['humareda-prime-steakhouse-boca-del-rio-cortes-vino.jpeg', 'cortes-vino', 1280], // corte, guarniciones y vino (su imagen para compartir)
  ['Humareda-Prime-Interior.jpg', 'salon', 1470],                              // el salón de día, con lámparas de fibra y plantas
  ['Humareda-Prime-Exterior.jpg', 'fachada', 1470],                            // la fachada de noche, con su letrero encendido
  ['Humareda-Prime-Vista-al-Mar.jpeg', 'vista-mar', 1200],                     // mesa de la terraza con la playa al fondo
  ['Humareda-Prime-Cocteleria.jpeg', 'cocteles', 1100],                        // dos cócteles sobre la mesa
  ['Humareda-Prime-Brindis.jpeg', 'brindis', 1200],                            // brindis con vino tinto sobre la mesa servida
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .rotate()
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(path.join(destino, `${nombre}.webp`));
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Logo (PNG con fondo negro, 500x200): copia .webp tal cual.
const logo = path.join(origen, 'Logo_Humareda_Prime.png');
antes += fs.statSync(logo).size;
const infoLogo = await sharp(logo).webp({ quality: 90 }).toFile(path.join(destino, 'logo.webp'));
despues += infoLogo.size;
medidas.logo = [infoLogo.width, infoLogo.height];

// Favicon: el ícono que ya usa su sitio (192x192), reducido a 64x64.
await sharp(path.join(origen, 'cropped-Site-Icon-Humareda-Prime-192x192.png')).resize(64, 64).png().toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length + 1} imágenes: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
