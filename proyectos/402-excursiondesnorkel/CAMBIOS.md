# Eco Adventures Puerto Escondido: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://ecoadventurespuertoescondido.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/402-excursiondesnorkel/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 402-excursiondesnorkel`) |

## En una línea

Sitio original de WordPress/Elementor con 14 imágenes rotas, 43 errores de consola y plugins de terceros (WooCommerce, Trustindex, Klaviyo) que no funcionan localmente → una sola página estática en inglés, con los mismos tours, precios y fotos reales, más el elemento "Does the sea glow tonight?" que guía al turista a reservar el tour correcto en el momento adecuado.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 14 imágenes rotas (.webp de logo, iconos SVG y fotos recientes que no se descargaron) | Fotos convertidas a .webp en `assets/web/` con `fotos-web.mjs`; logo tomado de `ecoadventurestransparente.png` |
| 43 errores de consola (JS de Elementor, Trustindex, WooCommerce, Klaviyo) | Ningún script de terceros; el rediseño es React estático puro |
| 23 recursos 404 (fonts de Elementor/Google, WooCommerce JS, admin-ajax.php) | No existen en el rediseño; fuentes locales con @fontsource |
| Carrusel del hero (Swiper.js) que no funciona sin los scripts de Elementor | Reemplazado por una imagen fija de alta resolución del Pacífico |
| Widget de reserva peek.com embebido que no funciona localmente | Enlace directo a la URL de book.peek.com de cada tour |
| Botón de reserva "Book now" con la URL de peek.com funcionando | Conservado como enlace directo |
| Alto de 20,207 px en móvil | Reducido a 11,608 px |

## Qué se cambió (mismo contenido, otra forma)

- Los tours se presentan como cuadrícula de tarjetas (foto, nombre, precio, botón Book) en lugar de la lista de WooCommerce con ratings en cero.
- Las reseñas son 5 textuales del clon en lugar del widget de Trustindex (que no carga localmente).
- El selector de idioma (EN/ES) se eliminó: el rediseño es solo en inglés (el sitio original también es en inglés principalmente).
- Los precios siguen en MXN por persona, igual que el original.
- El footer condensa contacto (teléfono, email, redes) en lugar del footer de WordPress con múltiples columnas.

## Qué se agregó (no existía en el original)

- **"Does the sea glow tonight?"**: calculador de fase lunar en JavaScript puro. Muestra la fase lunar actual, días hasta la próxima luna nueva, y un badge de "Sea turtle nesting season is active" de julio a noviembre. Permite reservar el tour adecuado en el momento correcto. Texto: "Does the sea glow tonight?" es texto original de este rediseño.
- **Barra fija en móvil** con WhatsApp, llamar y Google Maps.
- **Sección de temporadas** (delfines todo el año, ballenas jorobadas nov-mar, tortugas jul-nov, bioluminiscencia año redondo) con los datos tomados del texto de la página de Dolphin Watching.
- **JSON-LD** del tipo `TouristAttraction` + `LocalBusiness`, con teléfono, email, coordenadas y aggregateRating real (4.8, 1745 reseñas). El sitio original carece de JSON-LD.
- **Open Graph** completo (title, description, image, type). El original no lo tiene.
- **Favicon** usando el logo del negocio.
- Texto de llamada a la acción "Free cancellation up to 24h before · Hotel pickup included" bajo el hero — dato real del sitio original, no visible en la portada del original.

## Qué se quitó o no se usó

- Widget de WooCommerce y carrito de compras (no funciona localmente; las reservas van a peek.com).
- Widget de Trustindex con reviews en tiempo real (se reemplazó por 5 reseñas estáticas del clon).
- Blog ("Our Blog") — no hay contenido del blog en el clon.
- Sección "Marriage Proposals" y "Transfers" — menciones de servicio que no tienen suficiente contenido en el clon para justificar una sección propia (pueden agregarse después).
- Selector de idioma EN/ES — el sitio original es en inglés y el rediseño también.
- Foto `pexels-daniel-torobekov-5015532.jpg` (Pexels, de banco) para el tour de snorkel — se usa igualmente porque es la única foto disponible para ese tour en el clon.

## Qué se conserva al pie de la letra

- Nombre del negocio: Eco Adventures Puerto Escondido.
- Teléfono: +52 954 134 7889.
- Email: info@ecoadventurespuertoescondido.com.
- Horario: Mon – Fri: 9:00 – 18:30.
- Todos los precios de los tours (tal como aparecen en el clon, en MXN por persona).
- URLs de reserva peek.com de cada tour (book.peek.com/s/5ecebc33-2848-4fba-ae1e-87d5e94ae515/…).
- WhatsApp para tours privados: wa.me/message/W2ALEP33BIV3N1.
- WhatsApp directo: +52 954 134 7889 (529541347889).
- 5 reseñas reales de Google: Mr. G., Gabriela García Barrón, Annika Lie, Phil Ressel, Michelle Ascencio.
- Todos los textos de las descripciones de los tours son del clon.
- Descripciones del tour de bioluminiscencia y de tortugas son del clon.
- Rating 4.9 · 1,284 Google reviews / 4.8 · 1,745 Trustindex.

## Pendiente de confirmar con el cliente

- La foto de snorkel (`pexels-daniel-torobekov-5015532.jpg`) aparece con el nombre de Pexels: confirmar si es propia o de banco.
- Número de WhatsApp real: el clon tiene dos (wa.me/message/W2ALEP33BIV3N1 para grupos y 529541347889 directo). El rediseño usa el número 529541347889 para el wa.me prellenado.
- Verificar si tienen presencia en WhatsApp Business activa o si se prefiere solo el enlace de grupo.
- Coordenadas exactas de la oficina en Google Maps (se usó aproximado 15.8598, -97.0706).
- Secciones "Transfers", "Marriage Proposals" y "Group Tours" podrían agregarse si el cliente las quiere.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos .webp: `assets/web/` (generadas por `rediseno/fotos-web.mjs`)
- PublicDir: `../assets/web` (definido en `rediseno/vite.config.ts`)
