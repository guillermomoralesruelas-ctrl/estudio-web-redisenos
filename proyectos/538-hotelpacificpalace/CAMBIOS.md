# Hotel Pacific Palace: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.pacificpalace.mx/ (PHP con jQuery y Bootstrap, plantilla de hotel "Cappa"; desarrollado por Intelimail) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/538-hotelpacificpalace/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-26/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 538-hotelpacificpalace`) |

## En una línea

Mismo hotel, mismos textos, fotos, teléfono, planes y motor de reservas; cambia la forma: una sola página donde el todo incluido se entiende con un reloj a la hora de Mazatlán, con WhatsApp a la vista y sin enlaces rotos.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 47 de 48 imágenes rotas en escritorio y 43 de 44 en móvil: el HTML pide `img/...` y las fotos quedaron en `sitio/assets/img/` | 0 imágenes rotas; 12 copias `.webp` en `assets/web/` |
| 39 errores de consola y 38 recursos fallidos (fotos, fuentes de íconos themify y Flaticon, script de Cloudflare para el correo) | 0 errores y 0 recursos fallidos |
| Las cuatro fotos de la portada (fondos que carga un script) no se descargaron: portada vacía | Portada con la vista aérea del hotel, que sí está en el clon |
| Carruseles de planes, opiniones y noticias sin avanzar | Contenido fijo, sin carruseles |
| Buscador de reservas que depende de jQuery, daterangepicker y bootstrap-input-spinner | Formulario propio con fechas nativas que abre el mismo motor de Hoteles Palace |
| 6 H1 en el clon (la portada repite sus diapositivas) | Un solo H1 |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, El hotel, Habitaciones, Planes y Amenidades se juntaron en **una sola página**.
- Los dos planes, que el original repite tres veces cada uno en un carrusel, se muestran una vez y se comparan en el reloj.
- Las opiniones, que el carrusel repite, aparecen una sola vez cada una.
- Se quitó la etiqueta "Pacific Palace Beach Tower Hotel" con el imagotipo que el original pone encima de cada sección; el nombre va en el encabezado y la portada.
- Correcciones mínimas de redacción: "Con un diseño vanguardista y acogedor, el hotel…" (coma), "Ofrecer una variedad de opciones…" por "Variedad de opciones…", "mi familia disfrutó", "fueron de lo mejor", "Excelente servicio." (punto), "Horno Microondas" por "Horno de microondas", "Balcón/ Terraza" y "Cable/ satélite" por "Balcón o terraza" y "Cable o satélite", "(… etc)" por "etc.)", "51 - 54 m 2" por "51 a 54 m²", "1-4 Personas" por "1 a 4 personas", "Acceso áreas comunes como (…)" por "Acceso a áreas comunes (…)", horas en minúscula ("3:00 pm").
- "Cocktail and bar" se tradujo a "Coctelería y bar".
- Fotos: 12 copias `.webp` de las del clon (de 2.05 MB a 0.95 MB) con `rediseno/fotos-web.mjs`; el clon no se tocó.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "Un día en el Pacific Palace, a la hora de Mazatlán"** (componentes `UnDia` y `Reloj` en `App.tsx`). Reloj de 24 horas con la hora actual de Mazatlán (`America/Mazatlan`) y los horarios reales de cada plan como arcos: alimentos y bebidas de 7:00 am a 1:00 am y barra libre de 10:00 am a 1:00 am (Todo Incluido), o desayuno buffet de 7:00 am a 12:00 pm; más las marcas de check-out (12:00 pm) y check-in (3:00 pm). Se cambia de plan con dos botones y se puede mover la hora. Textos nuevos: el título, "Elige un plan", "Todo Incluido" / "Desayuno buffet" (botones), "En Mazatlán son las …" / "A las …", las frases que genera ("con el Todo Incluido tienes incluidos alimentos y bebidas y barra libre en bares hasta la 1:00 am", "…; la barra libre en bares abre a las 10:00 am", "con el Todo Incluido, el servicio de alimentos y bebidas abre a las 7:00 am"), "Mueve la hora para ver otro momento del día", "Volver a la hora de Mazatlán", "Check-in desde las 3:00 pm y check-out hasta las 12:00 pm.", "Cotizar el Todo Incluido / el plan con desayuno buffet por WhatsApp".
- Barra de reserva con llegada, salida, adultos (1 a 6), niños (0 a 3) con la edad de cada uno (1 a 17 años, como el original) y código promocional. Abre `https://www.hotelespalace.mx/reservaciones-busqueda/Reservacion-hotel:16/…` con los mismos parámetros que el formulario del sitio (`public/js/custom.js`), para una habitación. Textos nuevos: "Reserva directo con el hotel", "Una habitación por reserva desde aquí. Para más habitaciones o grupos, llámanos al 669 989 3200.", "Edad de cada niño", "Ver disponibilidad".
- WhatsApp **669 216 1096** (el "WhatsApp oficial" que el sitio publica en /politica_cancelacion) con mensaje prellenado: "Hola, me comunico desde su sitio web. Quiero información del Hotel Pacific Palace." y, por plan, "Quiero cotizar el Plan Hospedaje Todo Incluido / con Desayuno Buffet en el Hotel Pacific Palace."
- Botones y títulos nuevos: "Reservar ahora", "Escríbenos por WhatsApp", "Pregúntanos por WhatsApp", "Ver el video del hotel en YouTube" (enlace, no incrustado), "Reservar esta habitación", "Llegada y salida", "Todas las habitaciones incluyen", "Restaurantes y bar", "Amenidades del hotel", "Te esperamos en la Zona Dorada", "Cómo llegar en Google Maps", "Reservaciones", "Síguenos", "Saltar a reservar". Fila de datos de la portada: "Hotel 4 estrellas", "Ubicación: Zona Dorada, a pie de playa", "Check-in desde las 3:00 pm", "Check-out hasta las 12:00 pm" (datos del original).
- Barra fija en el celular: reservar, WhatsApp, llamar y cómo llegar.
- Enlace a Google Maps (búsqueda por nombre y dirección).
- JSON-LD `Hotel` (dirección, teléfono, correo, 4 estrellas, check-in 15:00, check-out 12:00, servicios y marca Hoteles Palace); el original no tiene ninguno.
- Title y description nuevos con datos reales; Open Graph; favicon con el imagotipo.
- Accesibilidad: un solo H1, `alt` corregido en todas las fotos (sin "Palce" ni "pacifc"), contraste AA (el verde agua del logotipo solo se usa como línea; botones y enlaces en `#00706c`; el naranja solo sobre marino o como fondo con texto marino), enlace para saltar a reservar y `prefers-reduced-motion` (la aguja del reloj no se anima).

## Qué se quitó o no se usó

- Scripts de terceros: Google Tag Manager, jQuery y sus plugins, moment.js y daterangepicker de jsDelivr, bootstrap-input-spinner de shaack.com y Google Fonts. Si el cliente quiere GTM, se agrega al publicar.
- Las noticias (sus enlaces del inicio abren páginas en blanco en el sitio real; su texto no está en `crudo.json`), Gastronomía (chef y platillos), Recorrido virtual 360, Galería y Preguntas frecuentes: sus páginas no están en `crudo.json`. Se pueden agregar después.
- El video de YouTube incrustado: queda como enlace.
- El selector de idioma y el formulario "Déjanos un mensaje" de /contacto (sustituido por WhatsApp, teléfono y correo).
- El logotipo de Star Palace (en el original está marcado como "Logo Hotel Pacific Palace" y enlaza a pacificpalace.mx) y el imagotipo repetido en cada sección.
- Fotos del clon sin usar: `public/img/slider/1.jpg` (fondo "Coming soon" de la plantilla, no es del hotel), las tres fotos de noticias y `quot.png`.

## Qué se conserva al pie de la letra

- Los textos del hotel (inicio y /hotel), la Zona Dorada, check-in y check-out, "Somos parte de un complejo reconocido de hoteles en Mazatlán" y el agradecimiento final.
- Los dos planes con todo lo que incluyen y sus horarios.
- Las dos Junior Suites (vista al mar 51 a 54 m², vista a la ciudad 34 a 38 m², 1 a 4 personas, 2 camas matrimoniales, cocineta, wifi) y las 17 amenidades de las habitaciones.
- Sunset Restaurant y Bar Polinesio con sus textos; las nueve amenidades de /amenidades; las tres opiniones (sin nombre, como en el original).
- Contacto: Av. Camarón Sábalo, Fracc. Sábalo Country Club, Mazatlán, Sinaloa, C.P. 82100; 669 989 3200; ventas@hotelespalace.mx; Instagram, Facebook, YouTube, X y Pinterest; enlaces a Términos y condiciones, Política de cancelación y Política ambiental del sitio real.
- Los logotipos y enlaces del grupo que ya publica: Hoteles Palace, Luna Palace y Océano Palace.
- El motor de reservas de Hoteles Palace (hotel 16).

## Pendiente de confirmar con el cliente

- Que el WhatsApp para el sitio sea el 669 216 1096 (solo aparece en la política de cancelación), y si el 669 989 3211 y 3212 siguen siendo de reservas.
- La política de cancelación vigente (el sitio da dos distintas) y si quieren mostrarla junto al botón de reservar.
- Tarifas: el sitio no las publica. ¿Quieren un "desde $…" por plan?
- Horarios de alberca, shows y actividades para agregarlos al reloj (están en /preguntas, que no está en `crudo.json`; no se usaron).
- Si el gimnasio está en el Pacific Palace o en Océano Palace y Star Palace (el plan y las preguntas frecuentes dicen cosas distintas).
- Si quieren mencionar Star Palace y cómo se comparten las instalaciones entre los hoteles del grupo.
- Fotos en buena resolución de la alberca, la playa, el jacuzzi y el lobby (en el clon no se descargaron) y reseñas con nombre o enlace a Google o TripAdvisor.
- Si quieren conservar Google Tag Manager.
- Reservas de más de una habitación: el formulario nuevo manda una; para más se remite al teléfono.

## Dónde está cada cosa

- Textos, planes y datos: `rediseno/src/data/content.ts`
- Diseño, reloj y reserva: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y `@font-face`)
- Imágenes: originales en el clon, `sitio/assets/img/` (sin tocar); copias `.webp` en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. Para cambiar una foto, edita la lista de `rediseno/fotos-web.mjs` y ejecuta `node fotos-web.mjs` dentro de `rediseno/`.
- Capturas para comparar: `referencias/capturas-2026-09-26/` (se generan con `node herramientas/guardar-capturas.mjs 538-hotelpacificpalace` después del QA).
