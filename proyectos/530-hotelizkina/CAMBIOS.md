# Hotel Izkina: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://izkina.com/ (PHP, CodeIgniter con plantilla de Bootstrap para hoteles; motor de reservas propio en `/reservaciones`) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/530-hotelizkina/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-27/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 530-hotelizkina`) |

**Negocio:** Hotel Izkina, "Casa Hotel Cozumel": casa antigua restaurada en Calle Dr. Adolfo Rosado Salas 200, Centro, 77668 Cozumel, Q.R., con cuatro habitaciones con nombre de pájaro (Pájaro Azul, Paloma, Tukan y Jilguero, de $2,000 a $2,500 por noche), alberca de chukum en área compartida y cocina común. Teléfono y WhatsApp +52 445 103 33 78, contacto@izkina.com, Instagram @izkina.cozumel. Tipo para Google: `Hotel`. El sitio está en español (con versión en inglés); el rediseño va en español.

## En una línea

Mismo hotel, mismos textos, fotos, precios y contacto; cambia la forma: los colores de sus paredes de chukum y de su logo con sus letras (Oswald y Lato), "¿Con qué quieres despertar?" (un pájaro en cada una de las cuatro esquinas del Giglio; eliges con qué despertar y se abre la habitación que lo tiene, con su propio texto, precio y reserva), la casa y su historia en una sola página, lo que hay que saber antes de reservar, su motor de reservas a un toque, WhatsApp con mensaje, barra fija en el celular y datos de hotel para Google.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| QA sin fallas visibles (0 rotas, 0 errores, 0 fallidos), pero porque **depende del sitio real**: las tres fotos del carrusel de portada y los scripts (`core.min.js`, `script.js`) se piden a izkina.com. Sin internet la portada queda sin foto y no funcionan el carrusel, el selector de fechas ni el carrusel de "Estancia" | Todo es local: 9 imágenes del clon como copias `.webp`, sin scripts externos |
| Ningún H1 (el sitio tampoco tiene) y una imagen sin `alt` | Un solo H1, "Hotel Izkina", y `alt` descriptivo en todas |
| El clon no trae las fotos del carrusel de portada, las 30 de la galería ni las 4 de la historia (postal, antes, durante y ahora) | Se diseñó con las 4 fotos de habitación y 4 miniaturas de la casa; las demás quedan pendientes (no se descargaron) |
| Las fotos de "Estancia" son miniaturas de 210 px | Se usan 4 a su tamaño real (sin agrandar), en la sección "La casa" |
| Fotos pesadas para el celular | 9 imágenes a `.webp` (0.96 MB → 0.35 MB) más un favicon del logotipo en arena, con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se tocó |

## Qué se cambió (mismo contenido, otra forma)

- **Portada:** el carrusel de tres frases pasa a un H1 con el nombre, su primera frase ("Tu refugio elegante y acogedor en el Caribe Mexicano.") y su texto ("En HOTEL IZKINA, cada detalle…" → "En Hotel Izkina, cada detalle…"), con la foto de Tukan y cuatro datos del propio sitio. Las otras dos frases del carrusel ("Descubre la esencia de Cozumel…", "Vive una experiencia única… Lujo, confort…") no se usan.
- **Formulario "Consulta disponibilidad" de la portada:** se cambia por botones a su motor (`/reservaciones`), donde se eligen fechas, adultos y niños (el formulario de la portada no envía adultos ni niños; ver `OPORTUNIDADES.md`).
- **"IZKINA":** su texto y el del Giglio, con el título "Izkina significa «esquina»" y el logo; comillas “ ” → « ».
- **Habitaciones:** las cuatro tarjetas iguales ("Bienvenidos") pasan a "¿Con qué quieres despertar?" (ver "Qué se agregó"). Cada ficha usa el texto de su página de habitación (tomado con curl), recortado: se deja la parte que la distingue y lo que es igual en las cuatro ("Lavabo y lámpara de cobre artesanal…") va una sola vez en "En las cuatro". Los guiones largos pasan a dos puntos o paréntesis. "Pajaro Azul" → "Pájaro Azul"; "Tukan" se deja como lo escribe el sitio (su texto dice "Tucán"); "King Size" → "King size"; "Máx: 2 Adultos, 0 Niños" → "Máx. 2 adultos". Errata "plantas naturales n —" → "plantas naturales)".
- **Estancia:** el carrusel (que repite sus seis textos dos veces) pasa a "Más que un hotel, somos una casa" con sus textos una sola vez, más su texto de `/reservaciones` ("Un espacio sencillo, bonito y con historia…", "descansás" → "descansas") y sus cuatro puntos de "¿Por qué reservar con nosotros?".
- **Historia:** su texto de `/historia` completo, en dos columnas; "…de Michoacán, reflejan…" → "…de Michoacán reflejan…".
- **Antes de reservar:** cuatro puntos de sus términos y de `/reservaciones`, tal cual (check-in y check-out, identificación, confirmación escrita y su aviso "**Importante:** Al estar en el centro…"); "15:00 hrs." → "15:00 h".
- **Contacto:** "En el corazón de la isla, donde todo sucede" y su texto de `/contacto` (curl), su horario de atención ("Lun - Vie: 9:00 am–6:00 pm" → "Lunes a viernes: 9:00 am – 6:00 pm"; "Sab - Dom" → "Sábado y domingo") y "Consultar Reserva Existente" como enlace a su motor. El formulario de contacto se cambia por WhatsApp, teléfono y correo.
- **WhatsApp:** su enlace `wa.me/+524451033378` (sin mensaje) pasa a `wa.me/524451033378` con mensaje prellenado; mismo número.
- Colores: el chukum de sus fotos, el café (`#8a7049`, oscurecido a `#7a5f3c` para texto) y el arena (`#d7a46f`) del logotipo, el verde salvia de su sección "IZKINA" y el turquesa de su CSS (`#267377`, oscurecido a `#1f6468`). Tipografía: las de su sitio, Oswald y Lato, de @fontsource y solo latino (sin mayúsculas en los títulos).

## Qué se agregó (no existía en el original)

- **Elemento memorable: "¿Con qué quieres despertar?"** (componentes `Despertar`, `Esquinas`, `Pajaro`, `Signo` y `Ficha` en `App.tsx`; datos en `habitaciones` de `content.ts`). Cuatro botones con lo que distingue a cada habitación según su propia página: "Con el agua a un paso" (Pájaro Azul), "Con luz todo el día" (Paloma), "Temprano, sin despertar a nadie" (Tukan) y "Con el silencio del patio" (Jilguero), cada uno con "[nombre], $[precio] por noche". Un dibujo cuadrado con cuatro pirámides escalonadas al centro (como la del Giglio de su logo), una hacia cada esquina, y en cada esquina un pájaro dibujado con su color (azul, paloma gris, tucán con pico naranja, jilguero amarillo) y un signo de lo que ve al despertar (ondas de agua, dos ventanas, una cafetera, una hoja). Al elegir, se traza el camino a esa esquina, el pájaro se ilumina y se abre la ficha. Los pájaros también se pueden tocar (o elegir con el teclado).
  - Textos nuevos: "¿Con qué quieres despertar?"; "Las cuatro valen casi lo mismo; lo que las hace distintas es lo que ves al abrir los ojos. Elige y te decimos cuál es la tuya." (después de su texto "Cada una de nuestras habitaciones lleva el nombre de un pájaro…"); los cuatro nombres de despertar; "Dibujo simbólico, inspirado en el Giglio de su logo y sus cuatro esquinas del mundo: no es el plano de la casa. También puedes tocar un pájaro."; en la ficha "Por noche", "Cama", "Capacidad", "Reservar [habitación] en línea" (abre su página de habitación, que tiene el formulario de su motor) y "Preguntar por WhatsApp"; "En las cuatro"; "Precios por noche publicados en su sitio; la tarifa final y la disponibilidad las da su reserva en línea."; `aria-label` "Elige con qué quieres despertar", "Las cuatro esquinas de Izkina, con un pájaro en cada una" y "[habitación]: [despertar]".
  - Mensaje de WhatsApp: "Hola, me interesa la habitación [nombre] ($[precio] por noche). ¿Tienen disponibilidad? Mis fechas son: ".
- **Portada:** "Casa hotel en el centro de Cozumel"; datos "4 / habitaciones, cada una con nombre de pájaro", "$2,000 / por noche, desde", "15:00 / 12:00 / check-in y check-out", "A pasos / del malecón"; pie de foto "Tukan, una de sus cuatro habitaciones: cabecera de puerta antigua y paredes de chukum."; botón "Escríbenos por WhatsApp".
- **La casa:** botón "Pedir ayuda con auto o moto" con el mensaje "Hola, voy a hospedarme en Hotel Izkina y me gustaría rentar un auto o una moto. ¿Me pueden ayudar?".
- **Antes de reservar:** título "Antes de reservar"; subtítulos "Horarios", "Identificación", "Confirmación" y "El centro, con honestidad"; enlace "Leer sus términos y condiciones completos" (a su página; no se escribió ningún texto legal nuevo).
- **Contacto:** etiquetas "Dirección", "Teléfono", "WhatsApp", "Correo", "Instagram", "Horario de atención" y "¿Ya tienes una reserva?"; "Cómo llegar en Google Maps" (búsqueda de Google Maps con su nombre y dirección); "Consultar mi reserva"; botón "Reservar ahora" (su texto); asunto del correo "Reservación en Hotel Izkina".
- Mensaje general de WhatsApp: "Hola, me gustaría reservar una habitación en Hotel Izkina. ¿Tienen disponibilidad?".
- Navegación: "Habitaciones", "La casa", "Historia", "Cómo llegar"; barra del celular "Reservar" y botones de WhatsApp, Llamar y Cómo llegar con `aria-label`; salto de teclado "Saltar a las habitaciones"; "Abrir navegación".
- Pie: logo, "Casa hotel Cozumel" (del logotipo), su enlace a "Términos y condiciones" y "© [año] Hotel Izkina".
- Title "Hotel Izkina | Casa hotel en el centro de Cozumel"; description nueva ("Casa hotel de cuatro habitaciones con nombre de pájaro en el centro de Cozumel, a pasos del malecón, con alberca de chukum y cocina común. Reserva directo en línea o por WhatsApp."); Open Graph en español con la foto de Tukan; favicon del logotipo en arena (`icono.png`); `lang="es-MX"`.
- JSON-LD `Hotel` con datos reales: nombre, descripción, sitio, teléfono, correo, las cuatro fotos y el logo (sus URLs), 4 habitaciones, rango de precio, check-in 15:00 y check-out 12:00, dirección con código postal, coordenadas (de su mapa incrustado en `/contacto`), mapa, Instagram, acción de reserva (su motor) y servicios de su texto (aire acondicionado, ventilador, WiFi, alberca compartida, cocina común). El sitio no tiene datos estructurados.
- Accesibilidad: un solo H1, contraste AA (texto `#5a4a3b` sobre chukum 7.2:1, blanco sobre café 5.95:1 y sobre agua 6.8:1, tinta sobre salvia 7.3:1, arena sobre tinta 7.1:1), botones con `aria-pressed`, ficha con `aria-live`, foco visible y `prefers-reduced-motion` (sin trazo animado, transiciones ni desplazamiento suave).

## Qué se quitó o no se usó

- Los carruseles (portada y "Estancia"), la palabra gigante "BIENVENIDOS" de fondo, el precargador, los scripts de la plantilla, el selector de fechas y el mapa incrustado de Google (queda un botón a Maps).
- El formulario de la portada y el formulario de contacto (se cambian por su motor, WhatsApp, teléfono y correo).
- "Hotel de lujo con las mejores vistas y comodidades." (su description y su pie): no coincide con una casa del centro que avisa del ruido.
- "MISIÓN Y VISIÓN" ("Ofrecemos hospitalidad excepcional en un ambiente de lujo y confort…") y la cita "La calidad nunca es un accidente…" firmada "John Ruski".
- Las dos frases del carrusel que no se usan, los íconos "wifi ac bath +1 más" de las tarjetas (ver pendientes), "Tamaño m²" (vacío en las cuatro), "© … Hotel Izkina by Félix Omar Ramírez Vázquez" y el enlace "EN" (el rediseño es solo en español).
- `about-us-1.jpg` (el logo sobre arena), el logotipo pequeño del encabezado y dos miniaturas de "Estancia" (bebidas y adorno de pared).

## Qué se conserva al pie de la letra

- Sus textos de portada, "IZKINA" y el Giglio, "Estancia", "¿Por qué reservar con nosotros?", la historia, la ubicación, sus términos (los cuatro puntos usados) y el aviso del ruido.
- Las cuatro habitaciones con sus nombres, precios ($2,000 Pájaro Azul y Jilguero, $2,500 Paloma y Tukan), camas (King size y Queen en Jilguero) y capacidad, y el texto de cada página de habitación.
- Contacto: Calle Dr. Adolfo Rosado Salas 200, Centro, 77668 Cozumel, Q.R.; +52 445 103 33 78; WhatsApp 524451033378; contacto@izkina.com; Instagram @izkina.cozumel; horario de atención.
- Su logo y sus cuatro fotos de habitación (con crédito "Roksana Rita Photography" en los metadatos).

## Pendiente de confirmar con el cliente

- **Teléfono y WhatsApp:** +52 445 103 33 78 tiene lada de Guanajuato (445), no de Cozumel (987). Es el único que publica; se usa para WhatsApp y llamadas. ¿Es el correcto para huéspedes?
- **Aire acondicionado en Paloma:** su página solo lista "wifi", aunque el sitio dice que todas las habitaciones tienen aire acondicionado y su foto muestra un equipo. El rediseño usa el texto general.
- **Desayuno:** tres fichas (no Paloma) muestran un ícono "breakfast" y `/reservaciones` dice "Fruta fresca y ambiente cálido cada mañana". ¿Incluye desayuno? No se dice en el rediseño.
- **Niños y sofá cama:** todas dicen "Máx: 2 Adultos, 0 Niños", pero Paloma tiene sofá cama individual. ¿Aceptan niños o una tercera persona?
- **Horario de atención:** `/contacto` da un horario (lunes a viernes 9 a 6, fines de semana 11 a 4) y en la misma página dice "Estamos disponibles las 24 horas del día por teléfono o correo". El rediseño muestra el horario.
- **Tamaño de las habitaciones:** "Tamaño m²" está vacío en las cuatro.
- **Fotos que faltan:** carrusel de portada, galería (30), historia (antes, durante y ahora), alberca, cocina, patio y fachada en buena resolución (las de "Estancia" solo existen de 210 px en el clon). Existen en su sitio pero no se descargaron.
- **Crédito de las fotos:** los metadatos dicen "© 2025 Roksana Rita Photography, all rights reserved". Confirmar que el hotel puede usarlas en otro sitio y si quiere darle crédito.
- **Coordenadas** (20.5080919, -86.9496562): tomadas de su mapa incrustado; confirmar que marcan la casa.
- **Precios:** son los publicados; su motor puede cambiarlos por fecha.
- **Versión en inglés:** el sitio tiene; el rediseño todavía no.
- Los textos de despertar, el dibujo (pájaros, pirámides y signos) y el título "¿Con qué quieres despertar?" son nuestros; el dibujo es simbólico y no es el plano de la casa.

## Dónde está cada cosa

- Textos, contacto, habitaciones, casa, historia, términos, ubicación y fotos: `rediseno/src/data/content.ts`
- Diseño y secciones, "¿Con qué quieres despertar?" (`Despertar`, `Esquinas`, `Pajaro`, `Signo`, `Ficha`): `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y `@font-face`)
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/uploads/rooms/`, `sitio/assets/images/estancia/` e `images/logo/` (sin tocar); copias `.webp` y el favicon en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`.
- Capturas para comparar: `referencias/capturas-2026-09-27/` (`node herramientas/guardar-capturas.mjs 530-hotelizkina` después del QA).
- Datos tomados con curl el 2026-09-27 (no están en `crudo.json`): el texto de las cuatro páginas de habitación, check-in, check-out, identificación y confirmación (`/terminos-y-condiciones`), y horario, ubicación y coordenadas (`/contacto`). Las demás descargas (inicio, reservaciones, galería, historia, robots, sitemap) solo se usaron para `OPORTUNIDADES.md` y quedaron fuera del estudio (carpeta temporal del sistema).
