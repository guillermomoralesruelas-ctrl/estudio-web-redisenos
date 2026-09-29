// Método 1.2 en la nube: el clon (Hostinger / Zyro) no traía fotos. Se bajaron de assets.zyrosite.com las cuatro fotos
// reales de la clínica (el doctor con su equipo, el doctor con una paciente, el consultorio y la recepción), reducidas a
// 1600 px, en assets/originales/. Las 12 imágenes de tratamientos traen credenciales C2PA de imagen generada con IA y no
// se usaron. Este script crea copias .webp en assets/web/ (publicDir de Vite).
// Uso: node fotos-web.mjs   (desde proyectos/333-drhugosanchez/rediseno)
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
  await sharp(path.join(origen, f)).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 76 }).toFile(path.join(destino, f.replace('.jpg', '.webp')));
}
fs.writeFileSync(path.join(destino, 'icono.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#0f5e5a"/><path d="M20 18c4-3 8-2 12 0 4-2 8-3 12 0 4 4 2 12 0 18-2 6-3 12-6 12-3 0-3-10-6-10s-3 10-6 10c-3 0-4-6-6-12-2-6-4-14 0-18z" fill="#f7f5f0"/></svg>');
console.log('ok');
