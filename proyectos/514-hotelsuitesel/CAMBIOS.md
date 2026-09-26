# Hotel & Suites El Moro: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://hotelelmoro.com/ (sitio propio con restos de la plantilla de WordPress "Sailing", desarrollado por PixelesWeb; reservas en Cloudbeds `Ed16fN`) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/514-hotelsuitesel/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-26/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 514-hotelsuitesel`) |

## En una línea

Mismo hotel, mismos textos, fotos, precios, teléfonos, WhatsApp y motor de reservas; cambia la forma: una sola página donde eliges cuántas noches te quedas y te dice cuánto pagas reservando directo o, desde una semana, qué incluye la Larga Estancia y cómo cotizarla.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 3 imágenes rotas en escritorio y en móvil: las tres fotos grandes de la portada (el HTML las pide en `/wp-content/...` y quedaron en `sitio/assets/wp-content/...`) | 0 imágenes rotas; 11 copias `.webp` en `assets/web/` |
| 40 errores de consola y 34 recursos fallidos (jQuery, Revolution Slider, jQuery UI, Owl Carousel, select2, Bootstrap y Font Awesome de WordPress) | 0 errores y 0 recursos fallidos |
| La página se queda con el cargador de tres puntos arriba, sin encabezado ni portada | Encabezado y portada con la alberca al atardecer |
| Carrusel de habitaciones muerto: cada habitación sale como una foto enorme, una tras otra | Las cinco habitaciones en filas con foto, texto, capacidad y precio |
| Buscador de Cloudbeds (script externo) y mapa de Google que no cargan fuera de su servidor | Formulario propio con fechas nativas que abre el mismo Cloudbeds; foto aérea que abre Google Maps |
| Sin desbordes y con un H1 (esto ya estaba bien) | Igual: 0 desbordes y un solo H1 |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, Habitaciones, las cinco páginas de habitación, Reservaciones, Larga Estancia, las cuatro actividades y Contacto se juntaron en **una sola página**.
- Las habitaciones dejan el carrusel y quedan en filas; cada una junta lo que en el original está en su propia página (descripción, "Hasta N personas", "Impuestos incluidos" y detalles).
- Las cuatro actividades, que en el original son cuatro páginas, quedan en una sección con un resumen del texto de cada una y un enlace a su página.
- Larga Estancia se resume: el texto principal, lo que incluye (seis puntos), la comparación con rentar y cuatro de sus seis preguntas frecuentes; las tres modalidades (semana, mes y temporada) pasan al selector de noches.
- Correcciones de redacción: "Está habitación" por "Esta habitación" (y se quitó "Está habitación" del arranque), "cuenta dos habitaciones" por "cuenta con dos recámaras independientes, cada una con baño propio" (dato de sus preguntas frecuentes), "la Suite con Loft" por "la Suite con Desván" (el nombre que usa el resto del sitio), "Sólo sigue los pasos que el sitio web te indica" por "…que el sistema de reservas te indica", "a las siguientes teléfonos" por "por teléfono", "Lúnes a Domingo" por "de lunes a domingo", "Abierto las 24 Horas" por "Abierto las 24 horas", "1 galón de agua purificada de 6lts" por "1 galón de agua purificada de 6 L", "Wifi" por "wifi", "Restaurant" por "Restaurante", "TV Digital con cable 80 canales." por "TV digital con cable, 80 canales", "Rentar / Airbnb" por "Rentar o Airbnb", "A unos 30 kilómetros de la capital" por "…de la ciudad".
- Textos recortados sin cambiar su sentido: los de cada habitación, kayak, snorkeling (juntando tres párrafos), buceo (Los Islotes y la lista de sitios) y pesca.
- "Por mes" junta su texto con la respuesta "A partir de 28 noches la tarifa mejora de forma importante"; "Por temporada" junta su texto con "De octubre a abril, cambia el frío por el Mar de Cortés" (de "Pasas el invierno en Baja").
- El texto de pago seguro del pie se acortó a sus dos primeras frases (el pago ya no ocurre en esta página, sino en Cloudbeds).
- Cloudbeds se abre en español (`/es/reservation/Ed16fN`) en vez de en inglés, sin la pantalla intermedia de 5 segundos del original.
- Fotos: 11 copias `.webp` de las del clon (de 1.50 MB a 0.91 MB) con `rediseno/fotos-web.mjs`; el clon no se tocó.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "Una noche, una semana o toda la temporada"** (componente `Estancia` en `App.tsx`; el título es una frase del inicio del sitio). Selector de noches (1 a 180) sobre una línea con las cuatro modalidades y sus umbrales reales (1 noche, desde 7, desde 28 y desde 3 meses), más llegada, personas (1 a 5; las habitaciones que no alcanzan se desactivan según su capacidad) y habitación. Con menos de 7 noches calcula el total con el precio directo publicado y el ahorro frente al precio tachado y abre Cloudbeds con esas fechas; desde 7 noches muestra la modalidad de Larga Estancia, lo que incluye y un WhatsApp para cotizar. Textos nuevos: "Mueve las noches y mira qué te conviene.", "N noches", "1 semana y 3 noches" / "un mes" / "unos N meses" / "del … al …", "Por noche" y "1 noche" (botón de la primera modalidad), "Menos noches" y "Más noches" (lectores de pantalla), "Llegada", "Personas", "Habitación", "(habitación): hasta N personas.", "(habitación), precio directo", "N noches a $X por noche, impuestos incluidos.", "Te ahorras $X frente al precio publicado de $Y por noche.", "Precio por noche publicado en el sitio del hotel. La tarifa final depende de tus fechas y se confirma en el sistema de reservas.", "Ver disponibilidad y reservar", "Preguntar por WhatsApp", "Larga Estancia", "En N noches en la (habitación) tienes incluido:", "Cocineta equipada", "Luz, agua e internet", "Limpieza y cambio de blancos", "N cargas de ropa de 10 piezas y N galones de agua purificada de 6 L, uno por semana", "Sin contrato, sin depósito y sin aval", "La Estándar Doble no tiene cocineta. Para estancias largas, la Suite Familiar, la Suite con Desván, la Suite Deluxe y la Master Suite tienen cocineta equipada.", "A precio por noche serían $X MXN; la tarifa de Larga Estancia es preferente y te la cotizamos con tus fechas.", "Pedir cotización por WhatsApp", "Conocer Larga Estancia". Los totales y ahorros son multiplicaciones de los precios publicados; no se inventa ninguna tarifa de larga estancia.
- WhatsApp **612 159 1758** (el del sitio) con mensajes prellenados: "Hola, me comunico desde su sitio web. Quiero información para hospedarme en el Hotel & Suites El Moro." (general), "…Me gustaría reservar en el Hotel & Suites El Moro. ¿Me pueden ayudar?" (reserva), "…Quiero reservar la (habitación) para N personas, del … al … (N noches)." y "…Quiero cotizar una larga estancia (por semana / por mes / por temporada) en la (habitación) para N personas: llegada el …, N noches." (selector), "…Me interesa la habitación (nombre) en el Hotel & Suites El Moro. ¿Me pueden dar información?" (cada habitación), "…Me interesa una larga estancia en el Hotel & Suites El Moro. ¿Me pueden enviar una cotización?" y "…Me interesa la actividad (nombre) durante mi estancia en el Hotel & Suites El Moro. ¿Me pueden dar información?" (cada actividad, con la actividad correcta).
- Botones, títulos y etiquetas nuevos: navegación "Tu estancia", "Habitaciones", "Larga Estancia", "Actividades", "Contacto"; "Reservar"; en la portada "Desde $2,385 MXN la noche", "Check-in desde las 3:00 pm", "Check-out hasta las 12:00 pm", "Recepción abierta las 24 horas" (datos del original: precio más bajo, términos y condiciones y /contacto); "Ver disponibilidad"; "Reserva por WhatsApp"; "Hasta N personas, con cocineta"; "Precio por noche"; "Impuestos incluidos, reservando directo"; "Preguntar"; "Cotiza tu estancia por WhatsApp"; "Calcular mis noches"; "Hotel El Moro" (columna de la tabla); "Preguntar por (actividad)"; "Más en el sitio del hotel"; "Teléfonos", "WhatsApp", "Correo", "Síguenos"; "Cómo llegar en Google Maps"; "Blog de viajes en La Paz" y "English" (enlaces del pie); "© (año) Hotel & Suites El Moro, La Paz, BCS"; "Saltar a reservar". En el servicio de alberca se agregó "entre jardines y palmeras" (del lema del inicio, "alberca entre jardines").
- Barra fija en el celular: reservar, WhatsApp, llamar y cómo llegar.
- Enlace a Google Maps (búsqueda por nombre y dirección) desde la foto aérea y un botón.
- JSON-LD `Hotel` con datos reales (dirección, coordenadas del JSON-LD original, teléfono, correo de reservaciones, precios de $2,385 a $4,032 MXN por noche, check-in 15:00, check-out 12:00, recepción 24 horas, servicios y redes). El original ya tenía uno, pero con el correo informacion@ y sin check-in, horario ni servicios.
- Title y description nuevos con datos reales; Open Graph con la foto de la alberca (el original usa el logotipo); favicon del sitio.
- Accesibilidad: un solo H1, `alt` descriptivo en todas las fotos, contraste AA (el cobre del sitio solo sobre añil o como fondo con texto añil; `#8a5418` para texto sobre claro), enlace para saltar a reservar, botones con `aria-pressed` en el selector y `prefers-reduced-motion` (sin desplazamiento suave ni transiciones).

## Qué se quitó o no se usó

- Scripts de terceros: jQuery y sus plugins, Revolution Slider, el widget de Cloudbeds, Google Maps incrustado, Google Fonts, Font Awesome y la pantalla intermedia de 5 segundos antes de reservar.
- El formulario "Subscríbete" (restos del plugin MailChimp for WordPress) y el formulario "Envíanos un mensaje" de /contacto, sustituidos por WhatsApp, teléfono y correo.
- Galería (sus fotos no se descargaron en el clon), el blog (queda como enlace), la versión en inglés (queda como enlace), los íconos de servicios de 2015, los sellos "PCI Compliant" y "SSL Security", la etiqueta "Hotel & Suites El Moro · La Paz, BCS" encima de cada título, "Comodidad y Elegancia" y "Proveemos Todo Lo Que Necesites".
- De Larga Estancia: los cuatro casos de "Pensado para tu situación" (solo se usó el del invierno) y dos preguntas frecuentes ("¿Tengo que pagar luz, agua o internet?" y "¿Con qué frecuencia limpian la suite?"; su contenido ya está en "Servicios incluidos" y "Limpieza incluida").
- Fotos del clon sin usar: `storage/sliders/home/…-desktop.webp` (casi igual a la alberca al atardecer), `img/main-logo.jpg` (se usó la versión PNG transparente), los íconos de servicios, el cargador y las banderas.

## Qué se conserva al pie de la letra

- H1 "Tu casa frente al Mar de Cortés" y su frase; "Un rincón colonial a la orilla de La Paz" y su texto; "Suites con alma mexicana frente al Mar de Cortés" y su texto; "Siempre el mejor precio, directo con nosotros" y su texto; "¿Prefieres platicarlo primero?"; "¿Listo para el mar?" y su texto; "Estamos para ayudarte" y su texto.
- Las cinco habitaciones con sus precios tal como los publica el sitio el 2026-09-26: Estándar Doble $2,650 → $2,385; Suite Familiar $3,050 → $2,745; Suite con Desván $3,710 → $3,339; Suite Deluxe $3,810 → $3,429; Master Suite $4,480 → $4,032 (MXN por noche, impuestos incluidos), su capacidad (4, 4, 5, 4 y 5 personas) y sus detalles.
- Larga Estancia: "Vive en La Paz sin firmar un contrato", "Entre más larga sea tu estancia, mejor es la tarifa…", las modalidades con sus umbrales, los seis puntos de lo que incluye, la tabla "El Moro o rentar un departamento" y las respuestas de las preguntas frecuentes.
- Servicios: alberca, wifi gratis, transportación y restaurante.
- Contacto: Blvd. Alberto Alvarado Aramburo No. 7, Colina del Sol, La Paz, BCS, C.P. 23010; +52 612 122 4084 y +52 612 125 2828; WhatsApp +52 612 159 1758; reservaciones@hotelelmoro.com; Facebook e Instagram; términos y condiciones (enlace al sitio real); check-in desde las 15:00 y check-out hasta las 12:00.
- El motor de reservas Cloudbeds del hotel (`Ed16fN`), con las fechas en el mismo formato que usa el sitio (`#checkin=AAAA-MM-DD&checkout=AAAA-MM-DD`).

## Pendiente de confirmar con el cliente

- Que el precio tachado y el directo (10 % menos) apliquen todo el año y así los cobre Cloudbeds; el selector multiplica esos precios por las noches.
- Qué correo usar: reservaciones@ (visible en el sitio) o informacion@ (JSON-LD y Larga Estancia). El rediseño usa reservaciones@.
- Si pueden publicar una tarifa "desde" por semana, por mes o por temporada.
- Qué ofrece el restaurante (horario, desayuno, menú); el sitio no lo dice y el rediseño solo lo nombra.
- Si la limpieza, la carga de ropa y el galón de agua semanales aplican desde 7 noches o solo en estancias por mes; y si el galón es de 6 L o un garrafón de otra medida.
- Si la Suite Deluxe tiene sala y comedor (su descripción lo dice, su lista de detalles no).
- Si todas las habitaciones tienen balcón (el inicio dice "suites amplias con cocineta y balcón").
- Fotos en buena resolución del restaurante, el lobby, las actividades y la galería (no se descargaron en el clon), y reseñas de Google o TripAdvisor para enlazar.
- Si quieren conservar el boletín por correo (el formulario actual es de la plantilla anterior) y la versión en inglés.

## Dónde está cada cosa

- Textos, precios y datos: `rediseno/src/data/content.ts`
- Diseño, selector de noches y reserva: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y `@font-face`; Crimson Text y Roboto de @fontsource, solo latino)
- Imágenes: originales en el clon, `sitio/assets/` (sin tocar); copias `.webp` en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`. Para cambiar una foto, edita la lista de `rediseno/fotos-web.mjs` y vuelve a ejecutarlo.
- Capturas para comparar: `referencias/capturas-2026-09-26/` (se generan con `node herramientas/guardar-capturas.mjs 514-hotelsuitesel` después del QA).
