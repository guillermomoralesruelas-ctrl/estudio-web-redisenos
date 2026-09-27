# Emiliana Joyería Fina: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://emiliana.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/368-emilianajoyeriafina/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 368-emilianajoyeriafina`) |

## En una línea

El clon es una tienda Shopify completa (con carrito, lista de deseos y APIs de analytics) que no funciona fuera de su CDN. El rediseño es una sola página estática que muestra la marca, las colecciones y el elemento memorable —el selector de birthstone— con sus propias fotos y sus propios textos, y manda al cliente a la tienda Shopify para comprar.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Desborde de 1,960 px en escritorio y 2,850 px en móvil | 0 desbordes en ambas vistas |
| 18 imágenes rotas (fotos de producto y colecciones no descargadas) | 0 imágenes rotas; se usan 13 fotos propias convertidas a .webp |
| 87 errores de consola (APIs de Shopify checkout, monorail, web-pixels) | 0 errores de consola |
| 16 recursos fallidos (Shop Pay, .well-known/shopify/monorail, checkouts/internal/preloads.js) | 0 recursos fallidos |
| 4 H1 repetidos (el nav duplicado de Shopify) | 1 solo H1 |
| Altura de 48,724 px en escritorio (tienda completa con 186 productos en listado) | 5,901 px en escritorio |
| El carrito, la lista de deseos y el buscador no funcionan localmente | Eliminados (son de la tienda Shopify) |

## Qué se cambió (mismo contenido, otra forma)

- Estructura: de una tienda Shopify completa a una sola página de presentación que enlaza a la tienda para comprar.
- El menú de colecciones (Anillos, Aretes, Collares, Engagement, Pulseras, Churumbelas, Birthstone Rings, Lab Grown) se presenta como un mosaico visual asimétrico de seis tarjetas con foto.
- La información de contacto (WhatsApp, dirección, correo, redes) está en el cuerpo de la página y no solo en el pie.
- Las fotos de la página de inicio (`EE60A0DF-…`, `IMG_1822`, `IMG_1786`, etc.) se convirtieron a .webp ligero en `assets/web/` con `rediseno/fotos-web.mjs`.
- Tipografía: se cambia la tipografía del tema Shopify (no publicada) por Cormorant Garamond (serifada, elegancia de joyería) + Lato (sans-serif legible), ambas de @fontsource.

## Qué se agregó (no existía en el original)

- **"¿Cuál es tu piedra?"**: selector de 12 meses que muestra la piedra de nacimiento de la tradición joyera (birthstone) con su nombre, su color SVG, su significado y un botón de WhatsApp para pedir el anillo. Corresponde a la colección Birthstone Rings que el sitio original tiene pero no explica. Los significados de las piedras son datos de la tradición joyera internacional, no del negocio.
- **Barra fija en celular** con WhatsApp, Llamar y Cómo llegar (no existe en el original).
- **Botón de WhatsApp con mensaje prellenado** en hero, en cada sección de piezas especiales y en la ficha de cada birthstone.
- **Sección "Nosotros"** con la historia y los cuatro pilares visibles en la página de inicio (el original solo la tiene en `/pages/nosotros`).
- **Sección "Piezas especiales"** (argollas de boda y piezas personalizadas) con fotos propias del clon.
- **JSON-LD de tipo `JewelryStore`** con nombre, descripción, teléfono, correo, dirección y redes.
- **Open Graph** completo (título, descripción, imagen).
- **Favicon** generado desde el logo.
- Galería de tres fotos de anillos con enlace a Instagram.
- Microcopy nuevo: etiqueta "Oro Yucateco · Est. 2018" en la portada; títulos de sección "Las colecciones", "¿Cuál es tu piedra?", "Piezas para momentos especiales", "Nosotros", "Showroom"; textos de botones ("Ver colecciones", "Cotizar por WhatsApp", "Pedir anillo de [piedra]", "Agendar cita").

## Qué se quitó o no se usó

- El carrito de compras, la lista de deseos, el buscador y el login (funciones de la tienda Shopify).
- Los filtros de colección (por disponibilidad, precio y tipo de piedra) y la paginación de 186 productos.
- El GIF animado "sparkle.gif" del tema.
- Las páginas individuales de producto (se enlaza directamente a la tienda).
- La foto de stock de Shutterstock (`1000_F_318385552_…removebg-preview.png`), identificada por su nombre de archivo.
- El ícono de WhatsApp PNG que el sitio usa como imagen (`whatsapp.png` de `cdn.shopify.com`) —se reemplaza por un SVG inline—.
- Las páginas Cuidados, Garantía y Guía de tallas (se enlazan desde el pie al sitio original).

## Qué se conserva al pie de la letra

- Nombre del negocio: **Emiliana Joyería Fina**.
- Tagline / subtítulo de la portada: "Hecho en México · Oro Yucateco / est. 2018" (adaptado como "Oro Yucateco · Est. 2018").
- Textos de la portada: "Hecho en México" y "Joyería fina personalizada".
- Historia: "Emiliana nació en 2018, inspirada en el amor por la joyería que ha vivido en nuestra familia por cuatro generaciones."
- Pilares: "Autenticidad y calidad garantizados en todas nuestras piedras y metales preciosos", "4ta generación de joyeros — reunimos el talento de los mejores artesanos en Mérida, Yucatán por más de 40 años", "Envíos a toda la República — todos nuestros envíos están asegurados."
- Descripción de colecciones: textos de cada colección del HTML de `/collections/anillos`, `/collections/aretes`, etc.
- Texto de argollas: "Los costos cambian dependiendo de la talla y los mm de ancho requeridos. Con gusto te cotizamos."
- Texto de piezas personalizadas: "¿Tienes un diseño en mente? Nosotros te ayudamos a hacerlo realidad."
- Dirección: Avenida Campestre x 7 #15, Mérida, Yucatán 97120.
- WhatsApp: +52 999 364 12 46 (número 529993641246).
- Correo: oroyucateco@gmail.com.
- Redes: facebook.com/EmilianaJoyeria, instagram.com/emiliana_mx.
- Enlace a Maps: el mismo del pie del sitio (Bundal, Mérida).
- Políticas y páginas de la tienda: enlazadas desde el pie al sitio original.

## Pendiente de confirmar con el cliente

- Horario de atención del showroom (no publicado en el sitio ni en el clon).
- Foto del showroom o del taller: el clon no tiene una foto del local, solo de las joyas.
- WhatsApp para la sección de Birthstone Rings: se usa el mismo número general porque no hay uno específico para esa colección.
- Confirmar si el nombre del lugar en Maps es correcto ("Bundal", que es el nombre del centro comercial).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` (generadas por `rediseno/fotos-web.mjs`)
