# Free Walk Oaxaca: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://freewalkoaxaca.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/433-freewalkoaxaca/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

Mismo negocio (tour a pie gratuito en Oaxaca desde 2014), mismos datos de contacto y horarios reales, con un selector de horario en vivo con la hora de Oaxaca que llena el WhatsApp automáticamente — sin el plugin de TripAdvisor, sin el mapa de Google incrustado y sin los formularios de WordPress.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 4 errores de consola y 3 recursos con 404 (CSS de Elementor Pro no descargados) | 0 errores de consola y 0 recursos fallidos |
| Carrusel de reseñas de TripAdvisor cargado por plugin JS externo (con contador de visitantes y scripts de seguimiento) | Reseñas en texto plano (★★★★★ + nombre + texto) sacadas de `crudo.json` |
| Mapa de Google incrustado (requiere JS de google-analytics y maps) | Botón "Open in Google Maps" que enlaza directamente |
| Formularios de WordPress visibles en el clon (labels con nombres internos: "Name \*", "FODIE TIP WALK", "Reserve your spot today…") | Reserva directamente por WhatsApp con mensaje prellenado |
| Íconos de font-awesome y skyboot que no cargaron del plugin: "Mdi-bank-outline", "Las La-wine-bottle", "Chevron-right" | Sección limpia con nombre y descripción del tour |
| `ChatGPT-Image-9-sept-2026-07_35_35-p.m.webp` usada como imagen de reseñas (IA) | No se usa en el rediseño |

## Qué se cambió (mismo contenido, otra forma)

- El horario del tour (lun-sáb 10:00, 11:00, 13:00, 16:00; dom 10:00, 13:00, 16:00; español lun-vie 10:00, 16:00) pasa de estar repartido en tres páginas y dentro de formularios de JS a una tabla clara y a un selector interactivo.
- Las reseñas se muestran en texto plano con ★★★★★, sacadas de `crudo.json`, sin depender de widgets externos.
- Los precios de los tours de paga (food tour $1,400 MXN, mezcal & alebrijes $1,200 MXN, market tour $1,100 MXN, privado desde $200 MXN p/p) están visibles sin tener que abrir otra página.
- El logo SVG original (3000×3000) se sirve directamente desde `../assets/web/`; el PNG negro (2020/06) se usa solo para el favicon (64×64).
- Las fotos del clon se sirven como copias .webp desde `../assets/web/` (`fotos-web.mjs`); el clon original no se toca.

## Qué se agregó (no existía en el original)

- **Selector de horario "Find Your Walk"** (elemento memorable): muestra los tours disponibles hoy con la hora real de Oaxaca (`Intl.DateTimeFormat`, `timeZone: 'America/Mexico_City'`), permite elegir idioma (English/Español) y número de personas, y genera el mensaje de WhatsApp con día, fecha, hora, idioma y número de personas. Si ya no hay tours hoy, muestra los del día siguiente.
- Texto redactado por el estudio (no del sitio original): "Find Your Walk" como título de sección, el mensaje prellenado de WhatsApp ("Hi, we'd like to join the Free Walking Tour in English on..."), el copy del botón "Book Free Walk".
- Barra fija en móvil: Book Walk (WhatsApp) · Call · Maps.
- JSON-LD tipo `TouristAttraction` con dirección, coordenadas, horarios y `aggregateRating` (datos reales del sitio).
- `<title>` y `<meta description>` reales (el original tenía la descripción correcta pero el title era muy largo para SEO).

## Qué se quitó o no se usó

- Plugin de reseñas de TripAdvisor (JS de terceros con seguimiento de visitantes).
- Plugin TrustIndex para Google Reviews (JS de terceros).
- Mapa de Google incrustado.
- Formularios de WordPress (JS, validación, spinner de carga).
- Íconos de Font Awesome, skyboot-custom-icons y eicons (no descargados en el clon).
- `ChatGPT-Image-9-sept-2026-07_35_35-p.m.webp` (imagen generada con IA, nombre explícito).
- 7 de las 8 fotos de guías (`Rectangle-39.webp`, `Rectangle-94.webp`) y otras del about-us que no se descargaron en el clon.

## Qué se conserva al pie de la letra

- Nombre del negocio: **Free Walk Oaxaca** / "Oaxaca's Original Free Walking Tour".
- Teléfono y WhatsApp: **+52 951 525 7240** (número real del sitio).
- Email: **info@freewalkoaxaca.com**.
- Horarios exactos (Mon–Sat: 10:00, 11:00, 1:00 pm, 4:00 pm; Sunday: 10:00, 1:00 pm, 4:00 pm; Español lun–vie: 10:00, 4:00 pm).
- Punto de encuentro: **Teatro Macedonio Alcalá, Av. de la Independencia 900, Centro**.
- Coordenadas: 17.0615736, -96.7235381 (del enlace de Google Maps del sitio original).
- Precios de los tours de paga (tomados de `crudo.json`).
- Descripción del negocio ("Free Walk Oaxaca was created to help travelers experience the city beyond monuments…").
- Valores de la empresa (100% Local Guides, Real Over Perfect, Curiosity Over Scripts, Respect the City).
- Rating: 450+ reviews en TripAdvisor, 52 en Google.
- Tres reseñas textuales de Google (Kate Murphy, SOPHIE MCDONALD, Margarita Quiceno).
- Redes sociales: Facebook, Instagram, TripAdvisor, Threads.
- "Since 2014" y "Come as a visitor. Leave as a friend."

## Pendiente de confirmar con el cliente

- Los nombres de los guías en las fotos de `about-us` (Carlos Padilla, María Rincón, Iván García) aparecen en el clon pero sus fotos (`Rectangle-39.webp`, `Rectangle-94.webp`) no se descargaron. Si el cliente da sus fotos con permiso, se pueden agregar la sección de guías.
- El tour de mercado en el sitio original usa la misma imagen (Rectangle-47.webp) que los otros tres tours de la página de Tours; se usa `t-market.webp` (Rectangle-39-1.webp) como sustituto visual.
- La nota "Suggested tip: $200 MXN per person" está publicada en el sitio del Free Walking Tour; se incluye en el horario.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` (creadas por `rediseno/fotos-web.mjs`; `publicDir` en `rediseno/vite.config.ts`)
