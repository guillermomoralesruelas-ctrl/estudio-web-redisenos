# Hotel Tradicional: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.hoteltradicional.com/ (PHP con plantilla de Bootstrap; reservas con el motor Nobeds) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/549-hoteltradicional/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-27/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 549-hoteltradicional`) |

**Negocio:** Hotel Tradicional San Cristóbal, hotel temático de 34 habitaciones en una casona con jardín, en Calle 1ro. de Marzo 58, Barrio de La Merced, San Cristóbal de Las Casas, Chiapas, a 4 cuadras de la Catedral, con una colección de más de 1300 piezas de los grupos étnicos de Chiapas. Teléfono 967 631 6851, WhatsApp 967 631 6216, reserva@hoteltradicional.com. Tipo para Google: `Hotel`.

## En una línea

Mismo hotel, mismos textos, fotos, paquetes, tours, experiencias y contacto; cambia la forma: los colores de su logo y de sus textiles con sus letras (Josefin Sans y Poppins), la colección al frente, "Teje tu viaje por Chiapas" (cada paquete se dibuja como una faja tejida, una franja por noche y un motivo por tour, con WhatsApp para preguntar por él), el motor de reservas a un toque, barra fija en el celular y datos de hotel para Google.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Las 18 imágenes rotas y 33 recursos con 404 (hojas de estilo e imágenes) en escritorio y móvil, 34 y 33 errores de consola: el HTML pide `css/…` e `images/…`, pero los archivos quedaron en `sitio/assets/…`. Se ve como texto plano | 0 imágenes rotas, 0 errores y 0 recursos fallidos; las fotos salen del clon como copias `.webp` |
| 3 H1 ("Textiles Chiapanecos", "Habitaciones", "Historia, Cultura y mucha pasión"), igual que en el sitio | Un solo H1: "Hotel Tradicional San Cristóbal" |
| El clon no trae las fotos de la galería, las habitaciones, los paquetes, las experiencias, los tours ni la colección (existen en el sitio real): solo 3 fotos del hotel | Se diseñó con 3 fotos propias; las demás quedan pendientes de pedir al hotel (no se descargaron) |
| Fotos pesadas para el celular | 4 fotos y el logo a `.webp` (0.98 MB → 0.39 MB) más un favicon del escudo del logo, con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se tocó |

## Qué se cambió (mismo contenido, otra forma)

- **Portada:** el carrusel de tres frases ("2a. colección más grande en México de Textiles Chiapanecos", "Cómodas y confortables Habitaciones", "Todos nuestros rincones guardan Historia, Cultura y mucha pasión") pasa a un H1 con el nombre, su ubicación y la última frase, la foto del pasillo con vitrinas y cuatro datos del propio sitio (34 habitaciones, más de 1300 piezas, 4 cuadras de la Catedral, check-in y check-out). No se usa lo de "2a. colección más grande" (el sitio se contradice, ver pendientes).
- **Bienvenidos:** su texto recortado (se quitó "En nuestras instalaciones le garantizamos el máximo confort… EXPERIENCIA INOLVIDABLE", que repite la idea); su frase "PERMÍTANOS ATENDERLE…" pasa de mayúsculas a tipo normal, entre comillas.
- **Servicios:** la lista con íconos pasa a una lista de dos columnas; "34 Habitaciones" va en el título ("Confort y descanso: 34 habitaciones") y "Internet Inalámbrico", "Servicio de Lavandería", etc. se escriben con minúscula inicial.
- **Hotel temático:** el texto de `/tradicional.php` dice "Hotel Misión Colonial San Cristóbal es un complejo de servicios de hospedaje orientados al rescate y difusión cultural…"; se recorta a partir de "Todos nuestros espacios…" y en "…en colaboración con la Fundación…" se escribe "el hotel" en vez de "Hotel Misión Colonial San Cristóbal" (ver pendientes). "Nuestras colección" → "Nuestra colección".
- **Paquetes:** las seis tarjetas iguales pasan a "Teje tu viaje por Chiapas" (ver "Qué se agregó"). En Chiapas Mágico, "4 noches de hospedaje y desayunos" se separa en "4 noches de hospedaje" y "Desayunos incluidos"; en Luna de Miel, "3 Noches de hospedaje con desayunos" en "3 noches de hospedaje" y "Desayunos incluidos". Los demás renglones van tal cual.
- **Tours diarios:** "La mejor manera de conocer chiapas Nuestros Tours Diarios" pasa a "¿Solo un día? Nuestros tours diarios" con "La mejor manera de conocer Chiapas." Cada circuito lleva un nombre corto (por ejemplo "Circuito 1: Cañón del Sumidero") además de su texto.
- **Experiencias:** el carrusel (que repite seis de las ocho) pasa a una lista de ocho; "Cenas Romanticas" → "Cenas románticas", "pergola" → "pérgola", "De la bienvenida" → "Dé la bienvenida", "Show Cooking" → "Show cooking", "Limpias Tradicionales" → "Limpias tradicionales"; su texto de introducción se recorta ("las cuales crean atmosferas que harán…" → "que harán…"). Sus ocho botones "Más Información" (van al formulario) pasan a uno solo a WhatsApp.
- **Opiniones:** cuatro de las cinco, con sus nombres, recortadas con "[…]": se quitaron los precios de estancias pasadas ("Fue un costo de 600 la noche…", "El costo de una habitación con doble cama matrimonial fue de 890 aproximadamente") y "Recomendado al 💯🙋🏻‍♂️"; se deja fuera la de Wiliado David Hernandez, que habla de las medidas por COVID. Erratas: "sevicio" → "servicio", "esta" → "está", mayúsculas ("CORAZÓN", "BIENVENIDA", "EXHIBICIÓN") a minúsculas. Nombres con acentos: "Rosa María", "Julio César". Sin sus fotos de perfil.
- **Descubra San Cristóbal:** su texto con el segundo párrafo recortado (se quita "e inspirador de la nueva fé…" en adelante); "Fray" → "fray".
- **Compromiso ambiental:** el carrusel (que repite sus seis grupos) pasa a seis grupos plegables con sus mismos puntos; "Rotulos" → "Rótulos", "Shampoo y Jabón" → "shampoo y jabón"; su texto dice "nuestro compromiso con el planeta y el entorno nos inspira" (el sitio: "nos inspiran"). Los logos de distintivos pasan a texto: "Distintivos que publica el hotel".
- **Contacto:** "¡Hospédate con Nosotros!" (de `/contacto.php`, tomado con curl) → "¡Hospédate con nosotros!". El formulario de contacto se cambia por el motor de reservas, WhatsApp, teléfono y correo.
- **Teléfono:** "+52 967 631 6851" se escribe "967 631 6851" con enlace `tel:+529676316851`.
- **WhatsApp:** su mensaje "Estoy interesado en reservar una habitación!..." pasa a "Hola, estoy interesado en reservar una habitación en el Hotel Tradicional."; va a `wa.me/529676316216`, el mismo número.
- Colores: el naranja del logotipo (`#cc7100`) y colores de sus textiles (añil, grana, morado, jade) sobre un fondo cal; se deja el rojo y el azul de la plantilla de turismo (`#D60D45`, `#005294`), que no son de la marca.
- Tipografía: las de su sitio, Josefin Sans (títulos) y Poppins (texto), de @fontsource y solo latino (el sitio carga cuatro familias de Google Fonts).
- Textos alternativos reescritos y descriptivos (en el sitio son "testimonial_094_01", "in_th_030_01"…).

## Qué se agregó (no existía en el original)

- **Elemento memorable: "Teje tu viaje por Chiapas"** (componentes `TejeTuViaje`, `Faja`, `Motivos` y `Muestra` en `App.tsx`; datos en `paquetes` y `circuitos` de `content.ts`). Seis botones, uno por paquete. La faja se dibuja desde el palo de un telar de cintura y se teje de izquierda a derecha: una franja añil con una luna por cada noche (en Todo Chiapas, las 2 noches en Palenque en verde), una de puntos para los desayunos, una con motivo por cada tour (zigzag: Cañón del Sumidero; ondas: Montebello y El Chiflón; grecas escalonadas: Palenque y Agua Azul; rombos: Chamula y Zinacantán; dientes: Bonampak y Yaxchilán), una para la comida en la selva o la decoración con vino, y flecos para los souvenirs. En el celular la faja se dibuja más alta. Al lado: nombre, precio "desde" por persona o pareja, cuántas noches y tours trae, y la lista de renglones con su muestra (al pasar el mouse por uno se resalta su franja). Debajo, los cinco tours diarios con el mismo motivo y WhatsApp.
  - Textos nuevos: título "Teje tu viaje por Chiapas"; "Paquetes diseñados especialmente para ti." (suyo) + "Elige uno y se teje su faja: una franja por cada noche en el hotel y un motivo por cada tour, con los desayunos, los detalles y los flecos de los souvenirs de obsequio."; "De izquierda a derecha: primero las noches en el hotel, luego los desayunos, los tours y los detalles; al final, los flecos."; "[n] noches y [n] tours incluidos."; "desde, por persona" / "desde, por pareja"; "Preguntar por este paquete"; "Precios «desde» publicados en su página de paquetes, sin fechas de vigencia: se confirman por WhatsApp. Dibujo ilustrativo; los motivos son geométricos y no reproducen piezas de la colección."; "¿Solo un día? Nuestros tours diarios"; "Cada circuito lleva el mismo motivo que en las fajas de los paquetes."; nombres cortos de los circuitos ("Cañón del Sumidero", "Montebello y El Chiflón", "Palenque y Agua Azul", "Chamula y Zinacantán", "Bonampak y Yaxchilán"); `aria-label` "Elige un paquete", "Qué incluye [paquete]", "Faja tejida del paquete [paquete]: una franja por cada noche, tour y servicio incluido", "Preguntar por el [circuito] por WhatsApp".
  - Mensajes de WhatsApp: "Hola, me interesa el paquete [nombre] (desde $[precio] por [persona/pareja]). ¿Me pueden dar fechas, disponibilidad y precio final?"; "Hola, me interesa el [Circuito n] ([su texto]). ¿Qué días sale y cuál es el precio?".
- **Portada:** "San Cristóbal de Las Casas, Chiapas"; "En el antiguo barrio de La Merced, a tan solo 4 cuadras de la emblemática Catedral." (recorte de su texto); etiquetas de los datos ("habitaciones", "piezas en su colección", "de la Catedral", "check-in y check-out"); pie de foto "Los pasillos del hotel, con la exhibición permanente de trajes tradicionales de Chiapas." (de una de sus opiniones).
- **Check-in y check-out** (de `/terminos-condiciones.php`, con curl): "Check-in después de las 15:00 h. Check-out antes de las 12:00 h. Trataremos de asignar las habitaciones lo antes posible de acuerdo a nuestra disponibilidad." (la última frase es suya).
- Botones: "Reservar ahora" (su texto) y "Ver disponibilidad y tarifas", que abren su motor Nobeds (`nobeds.app/DirectForm/Step/1508168107`, del iframe de `/reserva.php`); "Necesito información" (suyo), "Preguntar por WhatsApp", "Más información" (experiencias, mensaje "Hola, me interesan las experiencias exclusivas del Hotel Tradicional. ¿Me pueden dar información?"), "WhatsApp".
- La colección: pie de foto "Telar de cintura, con traje tradicional de mujer de Zinacantán, en la colección del hotel." (leído de la cédula de la foto); "+1300 piezas de los grupos étnicos de Chiapas".
- Contacto: "Consulta disponibilidad y tarifas en línea, o escríbenos y te ayudamos a reservar tu habitación."; etiquetas "Dirección", "Teléfono", "WhatsApp", "Correo", "Redes"; "Cómo llegar en Google Maps" (búsqueda de Google Maps con su nombre y dirección); asunto del correo "Reservación en Hotel Tradicional".
- Opiniones: "Opiniones publicadas en el sitio del hotel." Ciudad: "Foto de la ciudad publicada en el sitio del hotel."
- Navegación: "El hotel", "La colección", "Paquetes y tours", "Experiencias", "Contacto"; barra del celular "Reservar" y botones de WhatsApp, Llamar y Cómo llegar con `aria-label`; salto de teclado "Saltar a Teje tu viaje por Chiapas"; "Abrir navegación".
- Pie: logo, sus enlaces a "Términos y condiciones" y "Aviso de privacidad" (a sus páginas; no se escribió ningún texto legal nuevo) y "© [año] Hotel Tradicional San Cristóbal".
- Title "Hotel Tradicional San Cristóbal | Hotel en San Cristóbal de las Casas"; description nueva ("Hotel temático en el Barrio de La Merced, a 4 cuadras de la Catedral de San Cristóbal de Las Casas, con colección de textiles chiapanecos, tours y paquetes por Chiapas. Reserva en línea o por WhatsApp."); Open Graph en español con la foto del pasillo; favicon con el escudo del logo (`icono.png`).
- JSON-LD `Hotel` con datos reales: nombre, descripción, sitio, teléfono, correo, imagen y logo (sus URLs), 34 habitaciones, check-in 15:00 y check-out 12:00, dirección, mapa, redes, acción de reserva (su motor) y los servicios de su lista. Sin coordenadas ni código postal (el sitio no los publica). El sitio no tiene datos estructurados.
- Página en español de México (`lang="es-MX"`).
- Accesibilidad: un solo H1, contraste AA (texto `#5a4a40` sobre cal 7.5:1, blanco sobre el botón ocre 6.7:1, blanco sobre añil 13.6:1, oro sobre añil 7.2:1, grana sobre cal 6.5:1; el naranja del logo solo en gráficos), botones de paquete con `aria-pressed`, ficha con `aria-live`, foco visible y `prefers-reduced-motion` (sin tejido animado, transiciones ni desplazamiento suave).

## Qué se quitó o no se usó

- Los carruseles, el precargador, Google Analytics (`UA-884297-1`), el script de Cloudflare y los scripts de la plantilla; el formulario de contacto (su envío se cambia por WhatsApp, teléfono, correo y el motor).
- El iframe del motor de reservas dentro de la página: el motor se abre en su propia pestaña.
- Los logos de los distintivos (quedan como texto) y las fotos de perfil de las opiniones (datos personales de terceros; dos son logos).
- La opinión de Wiliado David Hernandez (habla de las medidas por COVID) y los precios dentro de las opiniones.
- El enlace a "Protocolo COVID-19" y la foto `dealsbg.jpg` (una multitud de noche, sin relación clara con el hotel).
- "2a. colección más grande en México" / "la segunda más grande de México" (el sitio se contradice; ver pendientes).
- La galería: sus fotos no están en el clon (no se descargaron).

## Qué se conserva al pie de la letra

- Su bienvenida (recortada), "Hotel temático, un concepto diferente", el rescate de más de 1300 piezas, la curaduría (Jan de Vos, Miguel Ángel Muñoz, Walter Morris y Dilery Penagos), las tres salas, los servicios, las ocho experiencias, "Descubra San Cristóbal", el compromiso ambiental y sus puntos.
- Los seis paquetes con sus precios "desde" ($3,000, $2,350, $2,100, $4,700 por pareja, $3,850 y $6,050) y sus renglones, y los cinco circuitos.
- Contacto: Calle 1ro. de Marzo 58, Barrio de La Merced, San Cristóbal de Las Casas, Chiapas, México; +52 967 631 6851; WhatsApp 529676316216; reserva@hoteltradicional.com; Facebook, Instagram y YouTube.
- Su logo y sus tres fotos del hotel.

## Pendiente de confirmar con el cliente

- **"Hotel Misión Colonial San Cristóbal":** así se llama al hotel en `/tradicional.php`, el escudo del logo dice "Misión Colonial", su aviso de privacidad y su correo de facturación son de `misioncolonial.com` y su `robots.txt` apunta al mapa del sitio de misioncolonial.com. ¿Son el mismo grupo? El rediseño dice "el hotel".
- **Lugar de la colección en México:** el inicio dice "2a. colección más grande en México", `/tradicional.php` "la segunda más grande de México" y `/terminos-condiciones.php` "La 3ra. Colección más grande del país". No se usa.
- **Tipos de habitación y tarifas:** el sitio no los publica; su motor, consultado el 2026-09-27 para una noche, solo ofrecía una "Habitación Cuádruple" de "Max: 2 Guests" a MXN 450 (ver `OPORTUNIDADES.md`). El rediseño manda al motor.
- **Paquetes:** vigencia de los precios "desde", fechas, qué incluye cada tour (transporte, entradas), a partir de cuántas personas y si "Chiapas en 3 Días" son 3 noches (así lo dice). **Tours y experiencias:** sin precios ni días de salida en el sitio.
- **WhatsApp:** se usa el de su botón (967 631 6216). En sus términos aparece otro, (967) 678 1538, para enviar comprobantes de depósito.
- **Distintivos** (Distintivo H, Distintivo M, Punto Limpio, Safe Travels, Cambio Ambiental Empresarial, Pacto Mundial, Marca Chiapas): el rediseño solo dice que el hotel los publica; **vigencia pendiente de confirmar**.
- **Opiniones:** origen y fecha (las fotos de perfil parecen llevar la insignia de Local Guides de Google; deducido); se recortaron.
- **Foto de la ciudad** (`scbg.jpg`): parece de banco de imágenes; confirmar que el hotel tiene derecho a usarla. Sin marcas de IA en ninguna foto.
- **Fotos que faltan:** habitaciones (solo hay una), jardín y pérgola, fachada, restaurante, la colección, los paquetes y las experiencias. Existen en su sitio pero no en el clon.
- **Horario del Museo de Historia** ("10 – 18 hrs.", en sus términos para grupos) y entrada gratuita a sus museos: no se usan hasta confirmar si aplica a todos los huéspedes.
- Los nombres cortos de los circuitos, los motivos de la faja y el título "Teje tu viaje por Chiapas" son nuestros.

## Dónde está cada cosa

- Textos, contacto, paquetes, circuitos, experiencias, opiniones y fotos: `rediseno/src/data/content.ts`
- Diseño y secciones, "Teje tu viaje por Chiapas" (`TejeTuViaje`, `Faja`, `Motivos`, `Muestra`, `columnas`): `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y `@font-face`)
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/images/` (sin tocar); copias `.webp`, el logo y el favicon en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`.
- Capturas para comparar: `referencias/capturas-2026-09-27/` (`node herramientas/guardar-capturas.mjs 549-hoteltradicional` después del QA).
- Datos tomados con curl el 2026-09-27 (no están en `crudo.json`): check-in y check-out (`/terminos-condiciones.php`), "¡Hospédate con Nosotros!" (`/contacto.php`) y el enlace del motor (`/reserva.php`). Las demás descargas (robots, sitemap, aviso de privacidad, motor) solo se usaron para `OPORTUNIDADES.md` y quedaron fuera del estudio.
