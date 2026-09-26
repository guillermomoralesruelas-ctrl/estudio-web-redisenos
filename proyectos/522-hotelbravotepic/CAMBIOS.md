# Hotel Bravo Tepic: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://hotelbravotepic.com.mx/ (sitio propio en PHP con una plantilla de Bootstrap 4, "Concepto y diseño por AM."; sin motor de reservas) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/522-hotelbravotepic/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-26/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 522-hotelbravotepic`) |

## En una línea

Mismo hotel, mismos textos, fotos, precios, teléfonos, correo, promociones y servicios; cambia la forma: una sola página donde eliges habitación por sus camas y su clima ("¿Cómo quieres dormir?") y pides disponibilidad con un toque por WhatsApp o por teléfono, porque el sitio no tiene reservas en línea.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| La página sale sin estilos: el `index.html` del clon pide `styles/…`, `plugins/…` e `images/…` en la raíz de `sitio/`, pero se guardaron en `sitio/assets/` (35 recursos fallidos en escritorio y 31 en móvil) | Estilos propios con Tailwind; 0 recursos fallidos |
| 6 imágenes rotas en escritorio y en móvil (logotipo, lobby y las cuatro habitaciones) | 0 imágenes rotas; 8 copias `.webp` en `assets/web/` |
| 38 errores de consola en escritorio y 34 en móvil (jQuery, GreenSock, ScrollMagic, datepicker, API de Google Maps, SDK y chat de Facebook) | 0 errores; sin scripts de terceros |
| Ningún H1 (el sitio real tampoco tiene) | Un solo H1: "Hotel Bravo Tepic" |
| Los íconos de Font Awesome y el carrusel no funcionan | Íconos SVG propios solo en botones; sin carrusel |
| `habitacion-familiar.jpg` es el mismo archivo que `habitacion-doble.jpg` (igual en el sitio real) | La Familiar se muestra sin foto, con su dibujo de 6 camas y un aviso; pendiente |
| Sin desbordes (esto ya estaba bien) | Igual: 0 desbordes |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, /acerca-de, /habitaciones y /contacto se juntaron en **una sola página**.
- Las habitaciones dejan las cuatro tarjetas con foto y las listas en mayúsculas ("1 MATRIMONIAL", "VENTILADOR") y pasan al elemento "¿Cómo quieres dormir?" (ver abajo). Los nombres de cama se escriben en minúsculas: "1 cama matrimonial", "1 cama king size", "2 camas matrimoniales", "6 camas individuales". Se ordenan de menor a mayor precio (el sitio usa Doble, King Size, Doble Matrimonial, Familiar en el inicio y otro orden en /habitaciones).
- Lo que /habitaciones repite en las cuatro ("Agua caliente", "T.V. por Cable", "Aceptamos Tarjetas Bancarias") se dice una vez: "Agua caliente, T.V. por cable y pago con tarjetas bancarias".
- El servicio "Pago en línea" se llama "Pago con tarjeta": el sitio no tiene forma de pagar en línea y su texto habla de pago con tarjeta ("Pago mediante tarjetas bancarias de crédito/débito sin costo extra"). "Extras" se llama "Personas extra".
- El aviso de espacio libre de humo, que el sitio pone como alerta verde en tres páginas, va una sola vez, en un recuadro junto al texto del hotel, y "Libre de humo" en los datos de la portada.
- Los cuatro contadores de "Acerca de Tepic, Nayarit" (animados, salen en 0 hasta hacer scroll) se muestran como números fijos: 1531, 2,274, 471 mil y 30.
- Las dos fotos de Tepic (atardecer con el volcán y Bellavista) pasan de fondos con parallax a la sección de Tepic, con `alt` y un pie que dicen que son de la ciudad, no del hotel.
- Teléfonos, correo y dirección pasan de texto plano a enlaces (`tel:`, `mailto:` con asunto y Google Maps).
- Correcciones de redacción: "estuvierán" por "estuvieran"; "sálon" por "salón"; "Nyarit" por "Nayarit"; "es la capital Nayarit y cabecera del municipio Tepic" por "es la capital de Nayarit y cabecera del municipio de Tepic"; "programadolo" por "programados"; "hasta 5 mesas y su sillas" por "y sus sillas"; "Kilometros" por "kilómetros"; "Año de la Fundación" por "año de la fundación"; "Sígenos" por "Síguenos" (el enlace queda como "Facebook"); "WIFI" por "Wi-Fi"; "(cigarros, puros, vapeadores, etc)" por "etc.)"; "Desde $650.00 MXN" por "$650".
- Fotos: 8 copias `.webp` de las del clon (de 2.16 MB a 0.84 MB) con `rediseno/fotos-web.mjs`; el clon no se tocó.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "¿Cómo quieres dormir?"** (componentes `Dormir`, `Plano` y `CamaDibujo` en `App.tsx`). Cada habitación se dibuja vista desde arriba en SVG, con sus camas del sitio en medida estándar de colchón (individual 0.99 × 1.90 m, matrimonial 1.37 × 1.90 m, king 1.93 × 2.03 m), la colcha a cuadros azul y arena de sus fotos, ventana, puerta y un ícono de ventilador o de aire acondicionado. Filtro por clima y ficha de la elegida con foto, precio desde, camas, clima, lo que incluye, WhatsApp con la habitación y llamar. En el celular, al elegir, la página baja a la ficha. Textos nuevos: "¿Cómo quieres dormir?", "Las cuatro habitaciones se distinguen por sus camas y por su clima. Elige la tuya y pide disponibilidad con un mensaje o una llamada:" (seguido de su frase "comodidad y confort tanto para estancias de negocios, familiares y de placer"), "Filtrar por clima", "Todas", "Con aire acondicionado", "Con ventilador", "desde $…", "MXN por noche, desde", "Camas:", "Clima:", "Incluye:", "Pedir disponibilidad por WhatsApp", "Llamar para reservar", "¿Te quedas una semana?" (antes de su texto de la noche gratis), "El sitio del hotel todavía no tiene una foto propia de esta habitación. Pregúntanos por ella al pedir disponibilidad." y "Dibujo ilustrativo: las camas van en su medida estándar y el acomodo es aproximado; el hotel no publica planos ni medidas de sus habitaciones. Precios "desde" publicados en su sitio."
- WhatsApp al **(311) 212-9565** (el teléfono principal; el sitio no publica WhatsApp, ver pendientes) con mensajes prellenados: "Hola, me comunico desde su sitio web. Quisiera información sobre habitaciones en el Hotel Bravo Tepic." (general), "…Me interesa la (habitación) (camas, clima). ¿Me pueden dar disponibilidad y tarifa?" (ficha), "…Me interesa la promoción de una noche gratis al reservar 6 noches consecutivas. ¿Me pueden dar información?" y "…Me interesa rentar el salón para negocios. ¿Me pueden dar información y disponibilidad?".
- Promociones: título "Seis noches seguidas y la séptima va por nuestra cuenta", siete casillas (1 a 6 y "Gratis"; para lectores de pantalla, "Seis noches pagadas y una gratis"), "Preguntar por la noche gratis", "MXN por hora", "Salón para negocios", "Preguntar por el salón".
- Títulos, botones y textos nuevos: navegación "Habitaciones", "Promociones", "Servicios", "Tepic", "Contacto"; "Calle Bravo #186 Pte., Centro de Tepic"; "Escríbenos por WhatsApp", "Llamar para reservar", "Llamar"; datos de la portada "Por noche, desde $650 MXN", "Central camionera: A 15 minutos", "Playa, en San Blas: A 30 minutos", "Todo el hotel: Libre de humo"; "Fotos de Tepic y sus alrededores, publicadas en el sitio del hotel."; "Dirección", "Reservaciones", "Facebook", "Correo"; "Cómo llegar en Google Maps"; "© 2000-(año) Hotel Bravo Tepic. Todos los derechos reservados."; "Saltar a elegir habitación". El título de contacto "¿Necesitas saber más acerca de Hotel Bravo Tepic?" es del sitio (/contacto), con la errata corregida.
- Barra fija en el celular: llamar, WhatsApp y cómo llegar.
- Enlace a Google Maps (búsqueda por nombre y dirección) en lugar del mapa incrustado.
- JSON-LD `Hotel` con datos reales (nombre, lema, dirección, coordenadas de su propio mapa incrustado, los dos teléfonos, correo, precio desde $650 MXN, pago con tarjeta, libre de humo, Facebook y servicios). El original no tiene ninguno.
- Title y description nuevos con datos reales; Open Graph con la foto del lobby; `lang="es"` (el original dice `lang="en"`); favicon con su propio ícono (`favicon-96x96.png`).
- Accesibilidad: un solo H1, `alt` descriptivo en todas las fotos (el original usa "DOBLE", "KING SIZE"…), contraste AA (vino, azul y tinta sobre claro; blanco y arena sobre vino y azul), botones con `aria-pressed`, ficha con `aria-live` y `prefers-reduced-motion` (sin desplazamiento suave ni animación de la ficha).

## Qué se quitó o no se usó

- Scripts de terceros: jQuery, Bootstrap JS, GreenSock, ScrollMagic, Isotope, Owl Carousel, parallax, Magnific Popup, bootstrap-datepicker, API de Google Maps, SDK y chat de Facebook (el chat de Messenger para sitios ya no funciona desde 2024), Font Awesome y Google Fonts.
- El formulario "Reserva una habitación" (no reserva: va a `#`) y el formulario de contacto (no envía: va a `#`); el menú "Reservaciones" (va a `#`) y el enlace a Instagram (va a `#`).
- El botón "Un tour por las instalaciones": abre un video `.mov` de 53 MB; no se incrusta (pendiente).
- El mapa incrustado de Google en el pie y en /contacto; el cuadro de "Me gusta" y la página de Facebook incrustados.
- Encabezados de página ("Acerca de", "Nuestras Habitaciones", "Contacto e información"), migas de pan y "Concepto y diseño por AM.".
- Fotos del clon sin usar: `find.jpg` (palmeras de noche, fondo de la plantilla, no es del hotel), `down.png`, `habitacion-familiar.jpg` (repetida) y los demás tamaños de favicon.

## Qué se conserva al pie de la letra

- "Hotel Bravo Tepic", "Hospédate y combina negocios, descanso y diversión", "Combina negocios, descanso y diversión", "Ofrecemos atención precisa…", "Estamos ubicados en Calle Bravo #186 pte. en el Centro de Tepic, Nayarit.", "A 15 minutos de la central camionera", "A 30 minutos de la playa, en el nuevo San Blas, Nayarit", "Hotel Bravo es su mejor opción de hospedaje en Tepic, la capital de Nayarit." y el aviso completo de espacio libre de humo (desde el 15 de enero de 2023).
- Las cuatro habitaciones con sus precios "desde" por noche tal como los publica el sitio el 2026-09-26: Doble $650 (1 matrimonial, ventilador), King Size $700 (1 king size, aire acondicionado), Doble Matrimonial $1,350 (2 matrimoniales, aire acondicionado) y Familiar $2,100 (6 individuales, ventilador).
- Promociones: "¡Noche gratis!", "1 Noche", "En estancias familiares o de negocios extendidas", "Recibe una noche gratis al reservar 6 noches consecutivas"; "¡Precio especial!", $150 MXN "Precio por hora en renta de salón para negocios" y lo que incluye.
- "Servicios", "Amenidades que se incluyen y/o con costo adicional" y las nueve amenidades con su frase.
- "Acerca de Tepic, Nayarit", "Lugar de piedras macizas", su texto y sus cuatro datos (1531, 2274, 471 mil y 30, del `data-end-value` de /acerca-de, descargada con curl el 2026-09-26; son del sitio, no se verificaron).
- Contacto: Bravo #186 Pte., Col. Centro, Tepic, Nayarit, México; (311) 212-9565 y (311) 212-0327; reservaciones@hotelbravotepic.com.mx; Facebook /hotelbravotepic; "Reservación de habitaciones, tarifas, salones, promociones e información en general."

## Pendiente de confirmar con el cliente

- **WhatsApp.** El sitio no publica ninguno. El rediseño manda los mensajes al (311) 212-9565, que parece fijo: confirmar si tiene WhatsApp o qué número usar.
- **Foto de la Habitación Familiar.** Su foto en el sitio es la misma que la de la Doble. Pedir fotos de la Familiar (6 camas individuales) y, de paso, del edificio por fuera, del salón y del estacionamiento (el clon solo tiene el lobby y tres habitaciones).
- **Camas de la Doble.** Su ficha dice "1 matrimonial", pero su foto muestra dos camas. Confirmar.
- **Clima de la King Size.** La ficha dice aire acondicionado y la foto muestra un ventilador de techo: ¿tiene los dos?
- Capacidad de cada habitación y costo de las personas extra (el sitio dice "según capacidad de habitaciones" sin decir cuál).
- Horarios de check-in y check-out, si los precios "desde" cambian por temporada o por número de personas, y cómo se aplica la noche gratis (¿en cualquier habitación?, ¿todo el año?).
- Capacidad y horario del salón para negocios.
- Si quieren reservas en línea (hoy no hay motor) o que el sitio siga llevando a llamada y WhatsApp.
- Instagram: el sitio tiene el enlace pero va a `#`. ¿Tienen cuenta?
- El video del recorrido (`hotel-bravo.mov`, 53 MB): si lo quieren, subirlo a YouTube o Facebook y enlazarlo.
- Los datos de Tepic (año de fundación, territorio, habitantes) son de su sitio; revisar si los quieren conservar.

## Dónde está cada cosa

- Textos, precios y datos: `rediseno/src/data/content.ts`
- Diseño, "¿Cómo quieres dormir?" (dibujos de habitación) y contacto: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y `@font-face`; Montserrat de @fontsource, solo latino)
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/images/` y `sitio/assets/favicon/` (sin tocar); copias `.webp` en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`. Para cambiar una foto, edita la lista de `rediseno/fotos-web.mjs` y vuelve a ejecutarlo.
- Capturas para comparar: `referencias/capturas-2026-09-26/` (se generan con `node herramientas/guardar-capturas.mjs 522-hotelbravotepic` después del QA).
