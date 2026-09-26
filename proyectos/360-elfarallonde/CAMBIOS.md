# El Farallón de Tepic: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://elfarallondetepic.mx/ (WordPress con el tema Zakra y Elementor; cinco páginas: inicio, /historia, /menus, /gallery y /contact) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/360-elfarallonde/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-26/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 360-elfarallonde`) |

**Ubicación:** a pesar del nombre, el restaurante no está en Tepic. Nació en Tepic en 1975, se mudó a Guadalajara a principios de los 80 y hoy está en Av. Niño Obrero 560, Fracc. Camino Real, CP 45040, Zapopan, Jalisco (zona de Chapalita). El sitio publica una sola sucursal.

## En una línea

Mismo restaurante, mismos textos, precios, fotos, opiniones y datos de contacto; cambia la forma: una sola página con el menú completo con precios, y "La báscula del zarandeado", que dice cuánto sale un pescado zarandeado por kilo y manda el pedido o la reservación por WhatsApp ya escrito.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 27 imágenes rotas en escritorio y 9 o 10 en móvil: el clon reescribió las rutas como `https://elfarallondetepic.mxassets/wp-content/...` (dominio pegado a `assets/`) | 0 imágenes rotas; 27 copias `.webp` de las fotos del clon en `assets/web/` |
| 50 errores de consola en escritorio y 33 en móvil (dominios que no resuelven por esa ruta mal armada, scripts de Elementor y Zakra) | 0 errores; sin scripts de terceros |
| Desborde horizontal de 1,320 px en escritorio y 2,210 px en móvil | 0 desbordes |
| Página de más de 41,000 px de alto: carruseles y galería de Elementor desarmados, una foto debajo de otra | Página de 6,577 px en escritorio y 10,235 px en móvil, con galería en cuadrícula |
| Ningún H1 (el sitio real tampoco tiene) | Un solo H1: "El Farallón de Tepic" |
| Una foto de banco en el clon (`2019/07/shrimp-400572_1920.jpg`, nombre típico de Pixabay) | No se usa |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, /historia, /menus, /gallery y /contact se juntaron en **una sola página**.
- El menú de /menus, en columnas y con encabezados sueltos, pasa a **7 pestañas** con precios en línea punteada: "Los sabrosos" (los platillos con foto del inicio del sitio, secciones "Para empezar" y "De la casa"), "Aguachiles y cócteles" ("para empezar" y "cócteles y ensaladas" de /menus), "Ostiones y tostadas", "Pulpos y camarones" ("Pulpos" y "Camarones y filetes"), "Los incomparables", "Zarandeados" e "Infantil". Dentro de cada pestaña se conservan los títulos de sección del sitio.
- Los platillos del inicio ("los saborosos") dejan las filas de tarjetas con foto grande y van en la pestaña "Los sabrosos" como carta con miniatura.
- Los zarandeados del inicio (tres tarjetas con foto y precio) pasan a la báscula (ver abajo).
- Calidad, tradición y sabor (tres bloques en /historia) van como tres frases junto al texto de la historia.
- Los tres estandartes ("Empanadas de camarón, Piña Cantamar y nuestro delicioso Pescado Zarandeado") se muestran con foto y precio; el Pescado Zarandeado lleva a la báscula.
- Las tres opiniones del inicio se muestran sin foto (una grande y dos al lado).
- La galería (17 fotos en /gallery y 16 en el inicio) queda en 8 fotos de platillos.
- Teléfonos, correo y dirección pasan a enlaces que sí funcionan (`tel:` a cada número, `mailto:` a elfarallondetepic@gmail.com con asunto, Google Maps). En el sitio, el enlace de los teléfonos marca a `9812345678` y el del correo va a `info@zakraresturant@gmail.com` (ver OPORTUNIDADES).
- Correcciones de redacción: "80´s" y "80's" por "80"; "desee hace" por "desde hace"; "camarónes" por "camarones"; "parilla" por "parrilla"; "saborosos" por "sabrosos"; comas en las opiniones; nombres en mayúsculas raras ("gERARDO sANTOYO V." por "Gerardo Santoyo V.", "CHELY ESPINOZA" por "Chely Espinoza", "GALADRIEL DESSEÄ" por "Galadriel Desseä", "eL FARALLÓN" por "El Farallón"); "Niño Obrero 560" por "Av. Niño Obrero 560" (así lo escribe /contact: "Avenida Niño Obrero #560"); "platillos tradicionales Nayaritas" por "nayaritas"; "Doradito la ticla" con punto final en su descripción.
- Fotos: 27 copias `.webp` de las del clon (de 17.16 MB a 1.82 MB) con `rediseno/fotos-web.mjs`; el clon no se tocó.
- Colores: el naranja `#e67700` del CSS del sitio (el color que más se repite en `original.html`), un naranja oscuro `#a34b00` para texto, el oro del escudo del 50 aniversario y el carbón de la parrilla.
- Tipografía: las del sitio (Cormorant Garamond para títulos y Lato para texto), servidas desde el propio sitio con @fontsource, solo latino.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "La báscula del zarandeado"** (componentes `Bascula` y `Caratula` en `App.tsx`). Una báscula de carátula dibujada en SVG con la foto del platillo en el plato. Platillos: Pescado zarandeado ($629 el kilo), Pescado frito ($546 el kilo), Pulpo zarandeado (250 g, $546) y Camarones zarandeados (400 g, $436), todos con precio y peso de /menus. En los de por kilo se elige de ½ a 3 kg de cuarto en cuarto; la aguja se mueve y sale el total aproximado (precio por kilo × peso). El pescado frito no tiene foto en el sitio: el plato muestra su nombre. Textos nuevos: "Los zarandeados, al peso" (el sitio dice "los zarandeados"), "El pescado zarandeado se cobra por kilo. Elige el platillo y cuánto quieres: la báscula te dice cuánto sale con los precios de nuestro menú.", "¿Qué se pone en la báscula?", "$… el kilo", "… g, $…", "¿Cuánto quieres?", "Viene en porción de", "… kg a $… el kilo", "Porción de … g, precio del menú", "≈ $…", "Para comer allá", "A domicilio", "Pedirlo por WhatsApp", "Llamar", "Total aproximado con los precios publicados en nuestro menú. En los platillos por kilo, la cuenta depende del peso de la pieza.", y para lectores de pantalla "Un cuarto de kilo menos", "Un cuarto de kilo más" y "¿Dónde lo quieres?".
- WhatsApp al **33 3121 2616** (el primer teléfono; el sitio no publica WhatsApp, ver pendientes) con mensajes prellenados: "Hola, me comunico desde su sitio web. Quisiera reservar una mesa en El Farallón de Tepic." (general) y, desde la báscula, "Hola, me comunico desde su sitio web. Me interesa un (platillo) de unos (peso) (según su menú, $… el kilo: unos $…)" o "Me interesa el (platillo) (… g, $… según su menú)", seguido de "para comer en el restaurante. ¿Me ayudan a reservar una mesa?" o "con servicio a domicilio. ¿Me confirman si llegan a mi zona?".
- Títulos, botones y textos nuevos: navegación "Zarandeados", "Menú", "Historia", "Opiniones", "Visítanos"; "Reservar por WhatsApp", "Ver el menú con precios", "Reservar", "Llamar"; datos de la portada "Horario: Todos los días, 12:00 a 18:00", "Dónde: Av. Niño Obrero 560, Chapalita, Zapopan", "Servicio a domicilio: Sí, llámanos o escríbenos", "Desde: 1975, en Tepic"; "Nuestra historia, desde 1975"; "Nuestros estandartes"; "Y el Pescado Zarandeado", "Pésalo en la báscula"; "Nuestro menú", "Todos los platillos con su precio, sin descargar nada.", "Menú 2025 en PDF", "Precios en pesos mexicanos, tal como aparecen en nuestro menú."; nombres de pestaña (ver arriba); "Lo que dicen nuestros clientes"; "De la cocina a la mesa" (galería); "Visítanos en Chapalita", "Dirección", "Teléfonos", "Síguenos", "Correo", "Cómo llegar en Google Maps"; "© (año) El Farallón de Tepic. Todos los derechos reservados."; "Saltar a la báscula del zarandeado".
- Barra fija en el celular: WhatsApp (Reservar), llamar y cómo llegar.
- Enlace a Google Maps: el destino real del enlace "RESERVACIONES" de su sitio (`goo.gl/maps/bWWKbeZubP1Mpc9J7`, resuelto con curl el 2026-09-26: la ficha "El Farallón de Tepic" en 20.6707542, -103.4096487). Una foto de su mesa abre ese enlace; no hay mapa incrustado.
- JSON-LD `Restaurant` con datos reales: nombre, lema, descripción de /historia, `servesCuisine` (Mariscos, Nayarita, Pescado zarandeado), fundación 1975, dirección, coordenadas de su enlace de Maps, los dos teléfonos, correo, menú, rango de precios $39 a $629 MXN (del taco de frijoles al kilo de pescado zarandeado), horario publicado (todos los días de 12:00 a 18:00), Facebook e Instagram. El original no tiene ninguno.
- Title y description nuevos con datos reales (el sitio no tiene meta description); Open Graph con la foto del pescado zarandeado; `lang="es"` (el original dice `en-US`); favicon con su escudo (`cropped-50-Aniversario-192x192.png`).
- Textos alternativos descriptivos en todas las fotos (en el sitio, 30 de 36 imágenes del inicio tienen `alt` vacío).
- Accesibilidad: un solo H1, contraste AA (texto `#4a3f38` sobre crema 8.9:1; naranja oscuro 5.2:1; carbón sobre naranja 5.7:1; oro sobre carbón 7.7:1), botones con `aria-pressed`, pestañas con `role="tab"`, total con `aria-live` y `prefers-reduced-motion` (la aguja deja de animarse y el desplazamiento no es suave).

## Qué se quitó o no se usó

- Elementor, Zakra, sus scripts y Google Fonts; el botón "Scroll to top" y "Skip to content" en inglés.
- El botón "RESERVACIONES" (abre Google Maps, no reserva): lo sustituye "Reservar por WhatsApp".
- Los botones que apuntan a `/demo/…` ("Contáctanos", "Conoce más", "MENÚ", "HOME", "contacto").
- El enlace del escudo del pie a `shiny-yacare.w6.wpsandbox.pro` (sitio de pruebas que ya no existe).
- Twitter (`twitter.com/farallondetepic`): no se pudo confirmar que la cuenta siga activa; quedan Facebook e Instagram.
- Encabezados de página y migas ("Historia", "Menus", "Gallery", "Contact", "Home").
- El copyright "All Rigths Reserved" (pasa a "Todos los derechos reservados").
- Las fotos de los clientes de "Opiniones" (`GERARDO-SANTOYO.jpg`, `CHELY-ESPI.jpg` y la captura de pantalla de Galadriel): sus opiniones se conservan solo con el nombre.
- Fotos del clon sin usar: la foto de banco `shrimp-400572_1920.jpg`, `Frame-1796.png` (el sitio no dice qué platillo es), `Tacos-Atún.jpg` (no aparece en el texto del sitio), `sashimi2.jpg`, `sashimi3.jpg`, `enchiladas.jpg`, `callo-de-hacha.jpg` y `doradito.jpg` (versiones de 2019 de platillos que no están en el menú actual o que ya tienen foto nueva), `taquitos-ajillo.jpg`, `zaran.jpg` (repetida de `zaran-1.jpg`), `tostada-Santa-Maria-del-Oro-1024x768.jpg` (el inicio del sitio la usa para "Tostadas Miyazaki", pero su nombre dice Santa María del Oro; se usa la versión grande solo en la galería, sin nombre de platillo) y los demás tamaños del escudo.

## Qué se conserva al pie de la letra

- "El Farallón de Tepic", "Excelencia y tradición en mariscos", "Sirviendo los mejores mariscos desde hace 50 años", "Sirviendo lo mejor desde hace 50 años".
- La historia completa de /historia (1975 en Tepic, principios de los 80 en Guadalajara, Niño Obrero 560 en Chapalita, los estandartes), calidad, tradición y sabor, y "¡El mejor Pescado Zarandeado del mundo! 50 años sirviendo la más fresca comida del mar. Además tenemos servicio a domicilio."
- **Todos los precios y pesos** de /menus y del inicio, tal como se publican el 2026-09-26 (incluidos "$195 / $325", "Pregunte al mesero" y "Pregunte a su mesero").
- Las tres opiniones con sus nombres.
- Contacto: Av. Niño Obrero 560, Fraccionamiento Camino Real, CP 45040, Zapopan, Jalisco; 33 3121 2616 y 33 3121 9616; elfarallondetepic@gmail.com; "Abierto todos los días de 12:00 a 18:00"; "Contamos con servicio a domicilio"; Facebook /farallondetepic e Instagram @el_farallon; el PDF del menú 2025 (enlace a su sitio).

## Pendiente de confirmar con el cliente

- **WhatsApp.** El sitio no publica ninguno. El rediseño manda los mensajes al 33 3121 2616, que parece fijo: confirmar si tiene WhatsApp o qué número usar (y cuál de los dos teléfonos es para servicio a domicilio).
- **Reservaciones:** ¿aceptan reservaciones y por qué medio? El botón del sitio solo abre Google Maps.
- **Servicio a domicilio:** zonas, costo, pedido mínimo, horario y si es propio o por aplicación.
- **Precios:** confirmar que los del sitio siguen vigentes y coinciden con el PDF "Menu-Alimentos-2025" (no se revisó el PDF). En "Cócteles y ensaladas" hay dos precios por platillo ("$195 / $325") sin decir de qué tamaño es cada uno.
- **Tostadas Miyazaki:** el sitio les pone la foto de la tostada de Santa María del Oro; pedir su foto. Tampoco hay fotos del pescado frito, del salmón zarandeado, del restaurante por fuera ni del salón.
- **Horario:** el sitio dice de 12:00 a 18:00 todos los días; confirmar si cierra en festivos y a qué hora cierra la cocina.
- Si quieren conservar el nombre "de Tepic" con la dirección de Zapopan tal cual (la gente puede buscarlos en Tepic); si hay otras sucursales.
- Twitter: ¿siguen usando la cuenta?
- El total de la báscula es aproximado: confirmar que el pescado se cobra por su peso entero y si hay un peso mínimo o piezas típicas (el sitio no lo dice; la báscula no lo inventa).

## Dónde está cada cosa

- Textos, contacto, fotos, opiniones y platillos de la báscula: `rediseno/src/data/content.ts`
- Menú completo con precios: `rediseno/src/data/menu.json`
- Diseño, la báscula (`Bascula` y `Caratula`) y el menú en pestañas: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y `@font-face`)
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/wp-content/uploads/` (sin tocar); copias `.webp` en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`. Para cambiar una foto, edita la lista de `rediseno/fotos-web.mjs` y vuelve a ejecutarlo.
- Capturas para comparar: `referencias/capturas-2026-09-26/` (se generan con `node herramientas/guardar-capturas.mjs 360-elfarallonde` después del QA).
