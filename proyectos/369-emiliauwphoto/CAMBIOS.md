# Emilia UW Photo: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://emilia-uwphoto.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/369-emiliauwphoto/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 369-emiliauwphoto`) |

## En una línea

Es el mismo negocio con sus propios textos (en inglés, como su sitio), fotos, paquetes y precios; cambia la forma: una sola página donde eliges **qué tanto te metes al agua** y ves la sesión, el paquete y el precio, con WhatsApp a un toque en lugar de un formulario.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 2 H1 ("Underwater Cenote Photoshoot in the Riviera Maya" y "No experience needed") | Un solo H1; "No experience needed" pasa a la frase de la portada |
| 72 imágenes rotas en escritorio y 76 en móvil (estrellas y avatares de Trustindex, fotos con carga diferida que no cargan sin sus scripts) | 16 imágenes, 0 rotas; copias .webp locales |
| 34 y 38 errores de consola, 1 recurso con 404 (script de Cloudflare) | 0 errores, 0 fallidos, sin scripts de terceros |
| El carrusel de la portada queda en blanco; tres de las cuatro tarjetas de servicios y la foto de "First time underwater?" salen vacías | Fotos fijas en cada sección y en el selector |
| 14.16 MB en las 17 fotos que se usan | 1.44 MB (`rediseno/fotos-web.mjs`) |

## Qué se cambió (mismo contenido, otra forma)

- Las cuatro tarjetas de "Choose your experience" y las tres páginas de sesión se juntan en el selector "How far into the water?", con sus paquetes y precios.
- Los paquetes se muestran según "Just me" o "Couple" en lugar de cuatro columnas de viñetas.
- Precios con formato uniforme ("from 6,000 MXN"); en su sitio van como "6000 MX", "8000", "9.800 MX", "12.000 MX" y "8650 mx".
- Las preguntas frecuentes se recortaron a 12 y algunas se juntaron (ubicación con transporte; entrega de fotos con selección y fotos extra; depósito con cancelación). Las respuestas son sus palabras, recortadas.
- "What makes this experience different?" se integró en "A private experience, not just a photoshoot".
- Los botones "Check availability" y "Book your photoshoot" van a WhatsApp con mensaje prellenado; el formulario de contacto sigue enlazado.
- La sesión de playa queda como un bloque corto con "Request a quote" (su página no publica paquetes ni precios).

## Qué se agregó (no existía en el original)

- **"How far into the water?"**: corte del cenote con una persona que sube o baja al nivel elegido, cuatro niveles, interruptor Just me / Couple, fichas de paquete y WhatsApp con la sesión y el paquete escritos. Textos nuestros: el título, "Every session happens in a cenote between Tulum and Playa del Carmen. What changes is how far into the water you go…", los nombres de nivel ("In the jungle", "At the surface", "Fully underwater", "Diving" y sus subtítulos), las frases de respiración de jungle ("You stay dry if you want to."), surface ("Your head stays out of the water.") y diving ("You breathe from your tank; I follow your dive."), "Prices for diving photography aren’t published…" y "Prices in Mexican pesos, as published on her site".
- Microcopy: "Check availability on WhatsApp", "Find your session", "Ask about this one", "Ask for a quote", "Request a quote", "Before you book", "The questions people ask most, answered in Emilia’s own words", "Behind the camera", "Tell Emilia your dates and the session you like…", "Where"/"Booking" y la línea de reseñas "Rated “Excellent” on Google, based on 102 reviews (as shown on her site)".
- Los cuatro datos de la portada (Private, 6,000 MXN, 8 years, Included): salen de sus textos.
- Mensajes prellenados de WhatsApp (en inglés).
- Barra fija en el celular (WhatsApp, Call, Directions), enlace a Google Maps con la ruta Playa del Carmen–Tulum, JSON-LD `ProfessionalService` con sus paquetes, Open Graph, favicon y `lang="en"`.

## Qué se quitó o no se usó

- Widgets de terceros: Trustindex (reseñas), GetButton (WhatsApp flotante), Cloudflare; el formulario queda enlazado a su página.
- El carrusel de la portada, las franjas de mayúsculas ("NO EXPERIENCE NEEDED", "FULLY GUIDED", "PRIVATE SESSION"), "Follow me for latest news" como sección (las redes van en "Behind the camera").
- Las páginas de Portfolio, Blog y Scuba Diving no se copian: se enlazan.
- Fotos del clon no usadas: `UNDERWATER-PORTRAITS-IN.CENOTE-4DRADO` (recorte de otra) y las miniaturas del logo.
- Reseñas: se usan 4 de las 11 que muestra su widget.

## Qué se conserva al pie de la letra

- Textos de la portada, "A Private Experience…", "First time underwater?", "How it works?", las descripciones de cada sesión y "Where water, light and movement come together".
- Paquetes y precios: Underwater Short (1 persona, 1 h, 1 outfit, 10 fotos, desde 6,000), Full (1 persona, 2-2.5 h, 2 outfits, 20 fotos, desde 8,000), pareja Underwater (2 h, 2 outfits, 20 fotos, desde 9,800) y Full Experience Underwater + Jungle (3 h, 2-3 outfits, 30 fotos, 1 reel, desde 12,000); Cenote Photoshoot Solo (desde 6,000) y Couple (desde 8,650), 2 h, 20 fotos, 2 outfits.
- Reglas: depósito del 30 %, cancelación con 48 h, lluvia, fotos extra a 300 MXN, entrega en 7 a 10 días, inicio 8-8:30 am.
- Las cuatro reseñas (Nicole Topham, Eugenia Parcero Fernandez, Darren Cosgrove y Luis Aguilar; recortadas, sin cambiar palabras) y el "Excellent, 102 reviews".
- WhatsApp +52 998 538 3661 y sus redes (Instagram @emilia.blackbox, Facebook, YouTube, Pinterest).
- Biografía: de su página `/about/` en vivo (2026-09-27), recortada.

## Pendiente de confirmar con el cliente

- Si el +52 998 538 3661 también recibe llamadas (el botón "Call" de la barra móvil lo usa) o solo WhatsApp.
- El nombre con el que quiere aparecer: "Emilia Black Box" (logo, Facebook, Instagram) o "Emilia UW Photo" (dominio).
- Si el mismo cenote sirve para la sesión de superficie y la de selva, y si quiere publicar su nombre o una zona más precisa para Google Maps (hoy se enlaza la ruta Playa del Carmen–Tulum).
- Precios de Diving y de Beach Photoshoot (no están publicados).
- Qué certificaciones de buceo tiene (una reseña la llama "instructora"; su sitio no dice cuál).
- Su Instagram principal: su sitio enlaza @emilia.blackbox y @em.blackbox.
- Si los precios "starts from" cambian por temporada o por cenote.
- Fotos de playa en Playa del Carmen para la sección Beach.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
