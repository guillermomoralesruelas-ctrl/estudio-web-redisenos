// El clon guarda las fotos en sitio/assets/wp-content/uploads/ (17 imágenes de elcafe57.mx: el logo blanco, retratos
// del equipo y de clientes en el patio, platillos, el patio con el árbol, un comedor y los banners de 2026/06).
// Este script crea copias .webp ligeras SOLO de las fotos que usa el rediseño en ../assets/web/ (no toca el clon).
// Vite usa esa carpeta como publicDir.
// No se usan: 2026/06/eventos.png, para-llevar.png, manana.png y lunch-57.png (son recortes panorámicos de fotos que
// sí se usan en su tamaño completo) ni 2026/06/comida-cena.png (una ensalada que no se puede atribuir a un platillo).
// Uso: node fotos-web.mjs   (desde proyectos/352-elcafe57/rediseno)
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

// [archivo original, nombre de salida, lado largo máximo]
const lista = [
  ['2025/01/logo-blanco-el-cafe-57.png', 'logo-blanco', 223],
  // Portada y "Desde 2005"
  ['2026/06/INICIO.png', 'patio-arbol', 1600],
  ['2026/04/Diseno-sin-titulo-1.png', 'patio-comida', 1100],
  ['2026/04/7.png', 'cocina-panini', 900],
  ['2026/04/6.png', 'mesera', 900],
  ['2026/04/14.png', 'brindis', 900],
  // Menú
  ['2026/07/PD_Cafe57_Comida366-scaled.jpg', 'desayunos', 1100],
  ['2026/07/ARP_Cafe57_JUN_560-scaled.jpg', 'comida-cena', 1100],
  ['2026/07/PD_Cafe57_034-scaled.jpg', 'cafes-frios', 1100],
  ['2026/07/ARP_Cafe57_May070-scaled.jpg', 'lunch-57', 1100],
  // Para llevar y eventos
  ['2025/06/PD_Cafe57_226-scaled.jpg', 'charola-paninis', 1100],
  ['2026/04/1.png', 'comedor', 1000],
];

let antes = 0, despues = 0;
const medidas = {};
for (const [archivo, nombre, lado] of lista) {
  const entrada = path.join(origen, archivo);
  const salida = path.join(destino, `${nombre}.webp`);
  antes += fs.statSync(entrada).size;
  const info = await sharp(entrada)
    .resize({ width: lado, height: lado, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(salida);
  despues += info.size;
  medidas[nombre] = [info.width, info.height];
}

// Favicon: el logo blanco sobre el café de la marca, cuadrado.
const logo = await sharp(path.join(origen, '2025/01/logo-blanco-el-cafe-57.png')).resize({ height: 200, fit: 'inside' }).toBuffer();
await sharp({ create: { width: 256, height: 256, channels: 4, background: '#3E1E16' } })
  .composite([{ input: logo, gravity: 'center' }])
  .png()
  .toFile(path.join(destino, 'icono.png'));

console.log(`${lista.length} fotos: ${(antes / 1048576).toFixed(2)} MB -> ${(despues / 1048576).toFixed(2)} MB`);
console.log(JSON.stringify(medidas));
