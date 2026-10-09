// Método 1.2 en la nube: el clon no traía fotos. Se bajaron de su sitio (assets.cdn.filesafe.space, HighLevel) a
// ../assets/originales/ las fotos de sus platillos que parecen propias (las de celular y las de su mesa) y su logotipo;
// se recortaron los letreros pegados ("Marquesita de Nutella", "El verdadero sabor de Mérida", "¿Listo para
// refrescarte?", "Panuchos yucatecos"). No se usan las fotos de la plantilla (chefs, Londres, París, app de pedidos)
// ni cuatro fotos de platillos que parecen generadas (1408x768 y 5504x3072, muy pulidas): ver CAMBIOS.md.
// Este script crea copias .webp en ../assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/620-lablancamerida/rediseno)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(aqui, '../../../herramientas/package.json'));
const sharp = require('sharp');

const origen = path.join(aqui, '../assets/originales');
const destino = path.join(aqui, '../assets/web');
fs.mkdirSync(destino, { recursive: true });

const medidas = {};
for (const f of fs.readdirSync(origen).filter((n) => n.endsWith('.jpg') && true)) {
  const nombre = f.replace('.jpg', '');
  const info = await sharp(path.join(origen, f)).rotate()
    .resize({ width: 1300, height: 1300, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 }).toFile(path.join(destino, `${nombre}.webp`));
  medidas[nombre] = [info.width, info.height];
}
await sharp(path.join(origen, 'logo.png')).resize({ width: 480 }).png().toFile(path.join(destino, 'logo.png'));
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#7A2E6B"/><text x="32" y="45" text-anchor="middle" font-family="Georgia,serif" font-size="38" fill="#FFF6E8">B</text></svg>');
await sharp(path.join(origen, 'cochinita-plato.jpg')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.join(destino, 'compartir.jpg'));
fs.writeFileSync(path.join(aqui, 'src/data/fotos.json'), JSON.stringify(medidas, null, 1));
console.log(Object.keys(medidas).length, 'fotos');
