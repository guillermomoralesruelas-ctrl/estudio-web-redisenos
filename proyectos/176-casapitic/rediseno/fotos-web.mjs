// Método 1.2 en la nube: el clon no traía fotos. Se bajaron de su almacenamiento en Supabase
// (qiomcexgggnmjxtbzynp.supabase.co/storage/v1/object/public/fotos/) las seis que usa su sitio (patio, sala, cocina y
// recámara de Suite Pitic; terraza y entrada de Suite Kino) a assets/originales/, ya de 960 x 1280.
// Ojo: cuatro traen credenciales C2PA de "Watermark Remover" (foto real a la que se le quitó una marca de agua con IA).
// Este script crea copias .webp en assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/176-casapitic/rediseno)
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

for (const f of fs.readdirSync(origen).filter((n) => n.endsWith('.jpg'))) {
  await sharp(path.join(origen, f)).webp({ quality: 76 }).toFile(path.join(destino, f.replace('.jpg', '.webp')));
}
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#a2461f"/><path d="M10 30 32 14l22 16M16 28v24h32V28M16 40h32" stroke="#f7f2ea" stroke-width="4" fill="none" stroke-linejoin="round"/></svg>');
console.log('ok');
