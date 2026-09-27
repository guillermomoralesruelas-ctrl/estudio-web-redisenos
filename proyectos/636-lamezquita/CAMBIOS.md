# La Mezquita: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://lamezquita.mx/ (WordPress con Elementor; reservas de habitación en el motor de Zavia ERP, `https://rbe.zaviaerp.com/hotel/hotelspalamezquita`) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/636-lamezquita/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-27/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 636-lamezquita`) |

**Negocio:** La Mezquita, Concept Hotel & Spa ("Hotel y Spa La Mezquita" en su motor de reservas). Hotel boutique y spa de inspiración árabe, abierto el 15 de abril de 2026 (según su JSON-LD), en el Fraccionamiento Rincón del Pilar, C.P. 20926 (Av. del Valle, Puente del Pilar; municipio de Jesús María, Ags., según su JSON-LD). Tel. y WhatsApp (449) 576 8099, info@lamezquita.mx, Instagram @la.mezquita.hotelspa, Facebook y TikTok @la.mezquita.hotel. Seis suites, spa (masajes, temazcal, sauna y vapor, cámara hiperbárica; clínica de aparatología próximamente), restaurante de autor y bar, cenas románticas y salón de eventos. En la base del estudio está como GASTRONOMIA; es un hotel.

## En una línea

Mismo hotel, mismos textos, fotos reales y contacto; cambia la forma: las seis suites con nombre, amenidades y precio en la página ("Seis suites, seis puertas"; antes solo se veían dentro del motor de reservas), la política de reservación (solo adultos, 65 % al reservar) a la vista antes de pagar, WhatsApp con mensaje para cada cosa (suite, spa, restaurante, cenas, eventos) y datos de hotel correctos para Google.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 10 errores de consola en escritorio y 8 en móvil: las fuentes Poppins, Montserrat y Lato se piden a `clinicasantuario.com`, que no permite cargarlas desde otro dominio (pasa igual en el sitio en línea); los títulos salen en Arial | 0 errores; Cormorant y Poppins de @fontsource, servidas con el sitio |
| Faltan los scripts de Elementor: el carrusel de testimonios y el acordeón de preguntas funcionan a medias | Sin scripts externos: testimonios en lista y preguntas con `<details>` |
| Faltan las fotos de las páginas interiores (temazcal, sauna, cámara hiperbárica, "Nuestra esencia") y el video de YouTube | Se usan solo las 4 fotos reales del clon (ver pendientes); sin video |
| Solo 4 fotos son del hotel; la fachada lleva la estrellita de Gemini y cuatro parecen de banco (ver "Qué se quitó") | 4 copias `.webp` (0.46 MB → 0.16 MB) con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se tocó |
| Desborde 0, 0 imágenes rotas y 1 H1 en el clon (estaba bien en eso) | Desborde 0, 0 rotas, 1 H1, 0 recursos fallidos |

## Qué se cambió (mismo contenido, otra forma)

- **Suites:** en el sitio "Habitaciones" abre directamente el motor de reservas. El rediseño las enseña en la página ("Seis suites, seis puertas", abajo) y conserva "Reservar en línea" hacia el mismo motor.
- **H1:** el suyo es "Descubre un nuevo concepto de Hotel Boutique & Spa"; el rediseño usa su título "Un refugio inspirado en el Medio Oriente" como H1, con su frase de portada ("Vive una experiencia de hospedaje única…").
- **"Todo en un solo lugar"**: la frase que rotaba en su portada (Hotel Boutique, Suites de Lujo, Spa, Masajes, Temazcal, Cámara Hiperbárica, Bar&Lounge, Restaurante, Cocina de Autor, Cenas Románticas, Experiencias, Salón de eventos) pasa a una sola línea en minúsculas; se quitó "Experiencias" (genérico).
- **Spa:** las cinco tarjetas con foto de fondo pasan a una lista: masajes holísticos, temazcal, sauna y vapor, cámara hiperbárica y clínica de aparatología ("Próximamente"), cada una con su frase, una segunda frase de su propia página y enlaces "Reservar por WhatsApp" y "Conocer más" (a su página). Los seis tipos de masaje de su texto van en una línea.
- **Restaurante, cenas y eventos:** tres de sus seis tarjetas pasan a bloques con foto y WhatsApp con mensaje. Al texto del restaurante se le sumó la frase de su pregunta frecuente ("Contamos con un restaurante de autor…"); al del salón, la de su pregunta 8 ("eventos sociales y corporativos: reuniones, celebraciones, conferencias y eventos privados").
- **Preguntas frecuentes:** las 10, al pie de la letra, en acordeón con `<details>`.
- **Testimonios:** el carrusel repetía los tres; van una vez, en lista.
- **Recortes y erratas:** "Clínica de Aparotología" → aparatología; puntuación en "Lo que hace única tu experiencia" (faltaban comas: "tranquilidad desconexión", "el confort la salud"); se quitó "elevando tu estancia a un nivel superior". En sauna y vapor se quitó "desintoxicar el cuerpo" (afirmación de salud que no se puede respaldar); en la cámara hiperbárica se quitaron "fortalece el sistema inmunológico" y "resultados reales" de su página y se dejó su frase corta del spa.
- **Contacto:** su teléfono sin enlace en el encabezado pasa a `tel:`; su dirección del pie se conserva ("Fraccionamiento Rincón del Pilar, C.P. 20926") con Aguascalientes y Google Maps.
- Colores: el cobre de su logo (`#b5663a`, oscurecido a `#8e4a22` para texto y botones), el oro de su CSS (`#d3b574`), su crema, el verde de los azulejos del salón y una noche casi negra. Tipografía: Cormorant y Poppins, las de su sitio, solo latino.

## Qué se agregó (no existía en el original)

- **Datos tomados con curl el 2026-09-27** (descargas en una carpeta temporal del sistema, fuera del estudio):
  - Las páginas `/masajes-en-aguascalientes/`, `/temazcal-en-aguascalientes/`, `/sauna-y-vapor-en-aguascalientes/`, `/camara-hiperbarica-aguascalientes/`, `/nuestra-esencia-hotel-spa-en-aguascalientes/` y `/contactanos-reserva-hoy/`: la segunda frase de cada servicio.
  - **Su motor de reservas**, por su API pública (`https://booking.zaviaerp.com/api/settings` y `/api/room-types`, `hotel_id=hotelspalamezquita`): las seis suites (nombre, tipo, cupo, íconos de amenidades), sus dos tarifas (Plan Europeo y Plan Marroquí, con sus descripciones), el total por noche con impuestos de noches de octubre de 2026 a febrero de 2027 (domingo a jueves y viernes o sábado) y su "Política General". Van en `rediseno/src/data/suites.ts`.
  - Su JSON-LD: "Av. del Valle", municipio Jesús María y fecha de apertura.
- **Elemento memorable: "Seis suites, seis puertas"** (componentes `SeisPuertas` y `Puerta` en `App.tsx`; datos en `suites.ts`). Seis puertas en arco dibujadas con la forma de la cabecera de sus suites, una por suite (Agua de Luna, Agdal, Imperial, Sahara, Oasis, Patio Real). "¿Qué no puede faltar?" (jacuzzi, tina, pantalla, para 3 o 4 personas) enciende con luz cálida las puertas de las suites que lo tienen y apaga las demás; "¿Qué noche?" (domingo a jueves, viernes o sábado) y "¿Qué plan?" (solo la suite, o con masaje y desayuno) cambian el precio bajo cada puerta. Al tocar una puerta, su ficha: tipo, cupo, amenidades, precio de los dos planes, "Reservar en línea" (su motor) y "Preguntar por WhatsApp".
  - Textos nuevos: "Seis suites, seis puertas"; "Cada suite de La Mezquita tiene nombre propio. Dinos qué no puede faltar y se encienden las puertas de las que lo tienen, con su precio por noche."; "¿Qué no puede faltar?", "Jacuzzi", "Tina", "Pantalla", "Para 3 o 4 personas"; "¿Qué noche?", "Domingo a jueves", "Viernes o sábado"; "¿Qué plan?", "Solo la suite", "Con masaje y desayuno"; "Precio por noche para 2 personas, con impuestos. Toca una puerta para ver su suite."; "Ninguna suite tiene todo eso junto: quita una opción."; "Una suite lo tiene." / "N suites lo tienen."; "(tipo), hasta N personas"; "Esta suite no tiene todo lo que elegiste."; "Su motor de reservas no enlista sus amenidades: pregúntalas por WhatsApp."; "Por noche de (…), para 2 personas, con impuestos."; "Antes de reservar"; "Suites, planes, precios y política tomados de su motor de reservas el 27 de septiembre de 2026; las tarifas cambian según la fecha y la disponibilidad. Las puertas son un dibujo, no la foto de cada suite."; nombres de amenidades ("Aire acondicionado", "Wi-Fi", "Pantalla", "Tina", "Jacuzzi", de los íconos `air-cond`, `wifi`, `tv`, `bathtub`, `jacuzzi`; el ícono `towels` no se muestra); tipos de suite escritos a partir de sus claves (`Suite`, `SuiteDoble` → "Suite doble", `JuniorSuite`, `MasterSuite`, `MasterSuiteDoble`, `JuniorSuiteDoble`); `aria-label` "Las seis suites" y "(suite), (tipo), $N la noche, no tiene lo que buscas".
  - Descripción del Plan Marroquí resumida: "Sumérjanse en una atmósfera de serenidad y exotismo diseñada para dos. Incluye masaje relajante y desayuno tipo americano para 2 personas." (su texto dice "Incluye: Masaje Relajante: y Desayuno Tipo Americano:" y sus íconos "Desayuno Tipo Americano para 2 personas" y "Masaje relajante incluido").
  - **Política "Antes de reservar"** (resumen de su "Política General", no es texto legal nuevo; ver pendientes): solo adultos con identificación; 65 % al reservar y el resto al check-in; cancelación 50 % entre 6 y 7 días antes y 100 % entre 0 y 5 días; sin reembolso del 1 de diciembre de 2026 al 30 de enero de 2027; salida tardía hasta las 6:00 p.m. por el 50 % de la tarifa del día.
  - Mensaje de WhatsApp: "Hola, me interesa la suite (nombre) ((tipo)) con (plan), para una noche de (domingo a jueves / viernes o sábado). ¿Tienen disponible el día __? Seríamos __ personas."
- **WhatsApp con mensaje prellenado** (su número 52 449 576 8099; su mensaje actual es "La Mezquita Hola, ¿Cómo puedo ayudarte?"): general "Hola, quiero información para hospedarme en La Mezquita."; spa "Hola, quiero reservar en el spa de La Mezquita. ¿Qué horarios tienen el día __?" y por servicio "Hola, quiero reservar (servicio) en La Mezquita. ¿Qué horarios tienen el día __?"; restaurante "Hola, quiero reservar en el restaurante de La Mezquita para __ personas el día __ a las __."; cenas "Hola, quiero información de las cenas románticas de La Mezquita para el día __."; eventos "Hola, quiero información del salón de eventos de La Mezquita para un evento de __ personas el día __."
- **Portada:** "La Mezquita, hotel boutique & spa en Aguascalientes"; datos rápidos "Check-in 3:00 p.m.", "Check-out 12:00 p.m." (de su pregunta 1), "Huéspedes: Solo adultos" (de su política de reservas, ver pendientes), "Suites: Desde $5,500 la noche" (la tarifa más baja del motor); "Todo en un solo lugar:"; botones "Reservar en línea" y "Escríbenos por WhatsApp".
- Otros textos nuevos: "Un concepto único en Aguascalientes" (de su frase "Vive un concepto único"); "Restaurante, cenas y eventos"; "Reservar mesa", "Pedir información", "Reservar en el spa", "Reservar por WhatsApp", "Conocer más" (de su "Conocer"), "Próximamente" (suyo); "Masajes: sueco, tejido profundo…" (de su lista); "Dónde estamos" (suyo), "Teléfono y WhatsApp", "Correo", "Síguenos", "Ver ubicación en Google Maps"; "Asegura tu estancia y vive un concepto único en Aguascalientes." (suyo); navegación "Suites", "Spa", "Restaurante y eventos", "Preguntas", "Contacto"; "Ir a las suites" (salto de teclado); `aria-label` "La Mezquita, volver al inicio", "Abrir el menú", "Llamar a La Mezquita", "Cómo llegar a La Mezquita en Google Maps".
- Barra fija en el celular: Reservar (motor), WhatsApp, Llamar y Cómo llegar.
- JSON-LD `Hotel` corregido y completo: nombre y nombres alternos, dirección (con `addressCountry` "MX"; el suyo tiene el teléfono en ese campo), coordenadas de su enlace de Maps, check-in y check-out, sin mascotas, rango de precio del motor, amenidades, las seis suites con cupo, `ReserveAction` a su motor y redes. Se quitó su `openingHours` "09:00-17:00" (no se sabe a qué se refiere; ver pendientes).
- Title y description nuevos (el sitio tiene dos `meta description` distintas), Open Graph con la foto de la suite, `lang="es-MX"`, favicon con la estrella de su logo.
- Accesibilidad: un solo H1, contraste AA (texto `#5a4a3f` sobre arena 7.5:1; cobre oscuro sobre arena 5.9:1; blanco sobre cobre oscuro 6.7:1; arena sobre noche 16:1; oro sobre noche 9.3:1; arena sobre azulejo 6.9:1; oro claro sobre azulejo 4.9:1), botones con `aria-pressed`, ficha con `aria-live`, foco visible y `prefers-reduced-motion` (las puertas se encienden sin transición, sin desplazamiento suave).

## Qué se quitó o no se usó

- **La foto de la fachada de noche** (`hotel-y-spa-la-mezquita.webp`, su portada): lleva en la esquina la estrellita de Gemini, señal de que fue generada o editada con IA de Google (no trae metadatos). Parece su edificio, pero no se usa hasta confirmarlo (ver pendientes).
- **Cuatro fotos que parecen de banco o generadas** y no muestran el hotel: la pareja brindando con una rosa (tarjeta "Cenas Románticas"), las toallas y sales sobre fondo rosa, la pareja con una tableta en un sillón ("Haz tu reservación hoy") y la mujer en una alberca frente a un palacio ("Un refugio inspirado en el Medio Oriente"). Cenas románticas va sin foto.
- La franja de iconos "Escapadas románticas / Conexión y descanso / Experiencia boutique / Privacidad absoluta" y la cuadrícula "Descanso, confort y exclusividad" (seis iconos con frases genéricas; "Atención Personalizada" repite el texto de "Privacidad y Exclusividad").
- El video "Una experiencia diseñada para sorprenderte" (YouTube): no se incrustan terceros; el título tampoco se usa.
- La tarjeta "Dónde estamos" con foto (queda como sección de contacto), el blog en la página (queda el enlace "Blog" en el pie), el formulario "Queremos saber tu opinión", el enlace "Iniciar Sesión" del pie (lleva al acceso de correo del servidor, `lamezquita.mx:2096`), el enlace a Mayo Clinic de la cámara hiperbárica, los divisores con adorno bajo cada título, animaciones de entrada y títulos en mayúsculas.
- Los enlaces rotos del sitio: "Cámara Hiperbárica" del pie (`/camara-hiperbarica-en-aguascalientes/`, 404) y "Clínica de Aparotología" (`/clinica-de-aparotologia`, 404). El rediseño enlaza la página que sí existe (`/camara-hiperbarica-aguascalientes/`) y deja la clínica sin enlace.

## Qué se conserva al pie de la letra

- "Un refugio inspirado en el Medio Oriente" y sus dos párrafos, "Vive una experiencia de hospedaje única en Aguascalientes…", "Spa, masajes y experiencias de bienestar" y su párrafo, las frases de cada servicio, las de restaurante y bar, cenas románticas y salón de eventos, "Lo que hace única tu experiencia en La Mezquita" (con los recortes de arriba), los tres testimonios con su nombre y estancia ("Maricela, Suite & Spa", "Rodolfo, Suite & Temazcal", "Diana, Suite & Spa"), "Experiencias contadas por nuestros clientes", las 10 preguntas frecuentes y sus respuestas, "Preguntas Frecuentes" y parte de su introducción, "Haz tu reservación hoy", "© La Mezquita | Concept Hotel & Spa".
- Del motor: nombres de suites y planes, cupos, amenidades, precios y política.
- Contacto: teléfono, WhatsApp, correo, dirección, enlace de Google Maps, Instagram, Facebook y TikTok, y el enlace de reservas.

## Pendiente de confirmar con el cliente

- **Solo adultos:** su política en el motor dice que no aceptan menores de 18 y que, si llegan con menores, no hay reembolso; pero el motor deja reservar con niños (hasta 3 en las suites dobles) y el sitio no lo dice en ninguna parte. ¿Es un hotel solo para adultos? El rediseño lo muestra como dice su política.
- **Tarifas:** tomadas el 27 de septiembre de 2026 para noches de octubre de 2026 a febrero de 2027 (dos precios: domingo a jueves y viernes o sábado). ¿Hay temporadas, puentes o precios por persona extra? ¿Los precios con Plan Marroquí son para 2 aunque la suite sea para 4?
- **Patio Real:** cuesta lo mismo con Plan Europeo que con Plan Marroquí ($8,500 y $9,000) y es más cara que Oasis (master suite doble); su motor no enlista sus amenidades. ¿Es un error de captura?
- **Amenidades:** según los íconos del motor, Agua de Luna no tiene pantalla y solo Imperial tiene tina; ¿es así? ¿Qué cama tiene cada suite?
- **Plan Marroquí:** ¿un masaje por persona o uno para la pareja? ¿Cuánto dura?
- **Fotos:** la fachada con la estrellita de Gemini, ¿es foto real retocada? ¿Tienen una sin editar? Faltan fotos de cada suite, del restaurante, de la alberca (la mencionan en "Instalaciones"), del temazcal y del sauna. Las fotos de la pareja con la rosa, las toallas, la pareja con la tableta y la mujer en la alberca, ¿son de banco?
- **Dirección:** el pie dice "Fraccionamiento Rincón del Pilar, Ags. C.P. 20926"; el JSON-LD, "Av. del Valle, Puente Del Pilar", municipio Jesús María; el motor, "Puente Del Pilar". ¿Cuál es la dirección completa?
- **Correo:** el sitio da info@lamezquita.mx; el motor de reservas, lamezquitahotel@gmail.com. ¿Cuál contestan?
- **Horario del spa, el restaurante y el bar:** no se publica; su JSON-LD dice "lunes a domingo de 9:00 a 17:00". ¿A qué corresponde? ¿Precios del spa, del temazcal y de las cenas?
- **Testimonios:** solo nombre de pila y sin fuente. El hotel abrió en abril de 2026: ¿son de huéspedes reales? Mejor enlazar sus reseñas de Google.
- **Clínica de aparatología:** el sitio dice "Próximamente" y la pregunta 6 dice que ya se puede reservar con cita. ¿Ya abrió?

## Dónde está cada cosa

- Textos, contacto, servicios del spa, espacios, testimonios y preguntas: `rediseno/src/data/content.ts`
- Suites, amenidades, precios, planes y política del motor de reservas: `rediseno/src/data/suites.ts`
- Diseño, "Seis suites, seis puertas" (`SeisPuertas`, `Puerta`, `cumple()`), el arco (`ARCO`, `ArcoDefs`) y los mensajes de WhatsApp: `rediseno/src/App.tsx`
- Colores, fuentes y el marco en arco (`.arco`): `rediseno/src/index.css`
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/wp-content/uploads/2026/` (sin tocar); copias `.webp`, el logo y el favicon en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`.
- Capturas para comparar: `referencias/capturas-2026-09-27/` (se generan con `node herramientas/guardar-capturas.mjs 636-lamezquita` después del QA).
