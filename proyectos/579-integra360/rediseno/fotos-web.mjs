// El clon guarda en sitio/assets/wp-content/uploads/ las portadas (592 x 444) de las seis propiedades destacadas de su inicio,
// el logo, el logotipo en blanco (Texto-logo.png) y los once logos de desarrollos de su sección "Explora".
// De las seis portadas solo se usan tres fotos reales (dos de Alvento Habitat y una de Gema Residencial); las otras tres
// (Lagos, Atalia y la de Alvento de $3,800,000) parecen renders o fotos retocadas con IA y no se usan. 2020/03/206.jpg es
// una foto de ejemplo del tema Houzez y tampoco se usa. Ninguna trae EXIF de Google/Picasa ni credenciales C2PA.
// No se descargó nada nuevo. Este script crea copias .webp ligeras en ../assets/web/ (no toca el clon); Vite usa esa carpeta
// como publicDir. También escribe src/data/fotos.json con las medidas de cada archivo para poner width y height.
// Uso: node fotos-web.mjs   (desde proyectos/579-integra360/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../sitio/assets/wp-content');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(path.join(destino, 'p'), { recursive: true });
fs.mkdirSync(path.join(destino, 'd'), { recursive: true });

const medidas = {};
let antes = 0, despues = 0;
async function webp(de, a, ancho, calidad = 76) {
  const entrada = path.join(origen, de);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada).resize({ width: ancho, withoutEnlargement: true }).webp({ quality: calidad, effort: 5 }).toFile(path.join(destino, a));
  despues += info.size;
  medidas[a] = [info.width, info.height];
}

// Fotos de propiedades (las que usa src/data/propiedades.json en "fotos").
const propiedades = JSON.parse(fs.readFileSync(path.join(aqui, 'src/data/propiedades.json'), 'utf8'));
for (const p of propiedades) {
  for (const [i, f] of (p.fotos ?? []).entries()) await webp(f, `p/${p.id}-${i + 1}.webp`, 592);
}

// Logos de desarrollos de su sección "Explora" (300 x 300).
const desarrollos = ['4760', '4761', '4763', '4765', '4767', '4769', '4772', '4775', '4778', '4781', '4783'];
for (const n of desarrollos) await webp(`uploads/2023/08/IMG_${n}-300x300.png`, `d/${n}.webp`, 300, 82);

// Logotipo en blanco (1920 x 1080 con mucho margen transparente): se recorta el margen.
{
  const info = await sharp(path.join(origen, 'uploads/2023/07/Texto-logo.png')).trim().resize({ width: 520 }).webp({ quality: 88 }).toFile(path.join(destino, 'logotipo-blanco.webp'));
  medidas['logotipo-blanco.webp'] = [info.width, info.height];
}
// Símbolo del logo (la parte de arriba de Logo.jpeg, sin las letras) para el pie, la portada y el favicon.
{
  const logo = path.join(origen, 'uploads/2023/06/Logo.jpeg');
  const simbolo = await sharp(logo).extract({ left: 0, top: 0, width: 585, height: 400 }).trim({ threshold: 20 }).toBuffer();
  const info = await sharp(simbolo).resize({ height: 240 }).webp({ quality: 88 }).toFile(path.join(destino, 'simbolo.webp'));
  medidas['simbolo.webp'] = [info.width, info.height];
  await sharp(simbolo).resize(64, 64, { fit: 'contain', background: '#ffffff' }).png().toFile(path.join(destino, 'icono.png'));
  const logoInfo = await sharp(logo).resize({ width: 400 }).webp({ quality: 86 }).toFile(path.join(destino, 'logo.webp'));
  medidas['logo.webp'] = [logoInfo.width, logoInfo.height];
}

fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(`${Object.keys(medidas).length} archivos: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
