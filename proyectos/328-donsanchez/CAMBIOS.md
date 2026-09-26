# Don Sanchez: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://donsanchezrestaurant.com/ (WordPress con el tema Divi; inicio, Cuisine, Events, Cava, Menu, Reservations, Reservation Policies, Contact us y Blog) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Idioma | **Inglés**, como el sitio original (todos sus textos están en inglés). `lang="en"` |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/328-donsanchez/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-26/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 328-donsanchez`) |

**Negocio:** restaurante de cocina mexicana contemporánea del chef Edgar Román, en Blvd. Antonio Mijares 27, Centro (distrito del arte), CP 23400, San José del Cabo, B.C.S. Es parte de Grupo Ediths (grupo local de Los Cabos). Tiene cava de vinos y hace eventos.

## En una línea

Mismo restaurante, mismos textos, precios, fotos, premios, reseñas y datos de contacto; cambia la forma: una sola página con el menú completo con precios, reservación por OpenTable y WhatsApp en un toque, y un mapa de la península que enseña de dónde vienen sus ingredientes y qué platillos los llevan.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Ningún H1 (el sitio real tampoco tiene, en ninguna página) | Un solo H1: "Don Sanchez" |
| 7 imágenes rotas en escritorio y en móvil (6 de los carruseles de Divi sin `src` y la bandera de GTranslate, 404) | 0 imágenes rotas; 23 copias `.webp` de fotos del clon en `assets/web/` |
| 23 errores de consola (fuentes de Divi bloqueadas por CORS, conexiones al dominio real) y 1 recurso fallido | 0 errores y 0 recursos fallidos; sin scripts de terceros |
| En la primera corrida del QA la versión de escritorio no terminó de cargar en 45 s (el video del inicio se pide al sitio real) | Sin video; la portada es una foto `.webp` de 1600 px |
| Carruseles de platillos, premios y eventos desarmados ("4" y "5" sueltos en lugar de fotos) | Menú en pestañas, premios en rejilla y eventos con dos fotos fijas |
| Fotos que parecen de banco: `pexels-helena-lopes-696218-1-1-300x200.jpg` (nombre de Pexels) y, por su estilo, `Cava-don-sanchez-1.jpg`, `Cava-don-sanchez-2.jpg` y `Carrusel-bodas.jpg` | No se usan |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, Cuisine, Events, Cava, Menu y las políticas de reservación se juntaron en **una sola página**.
- El **menú** de /don_sanchez_san_jose_del_cabo_menu pasa a 6 pestañas con precio en línea punteada: Raw, Garnachas & tacos, Warm starters & soups y Main dishes (las cuatro secciones de su menú), más Dessert y Kids (ver "Qué se agregó"). Los ingredientes, que el sitio separa con "|", se leen separados por comas.
- **Precios:** se usan los de la página de menú. El inicio muestra otros precios para los mismos platillos (por ejemplo, la langosta en $1,990 en el inicio y $1,500 en el menú); ver pendientes y OPORTUNIDADES.
- Los dos carruseles de platillos del inicio ("Delight-in a farm-to-fork feast") dejan de ser tarjetas: sus fotos van como miniatura del platillo en el menú.
- Las fotos se asignaron a los platillos por el nombre del archivo del sitio (`grilled.jpg` → Grilled octopus, `sterling.jpg` → Sterling Silver beef brisket, `desert.jpg` → Desert catch, `quail.jpg` → Quail pozole, `jicama.jpg` → Jicama sashimi, `churros.jpg`, `tar-tar-de-la-pesca-del-dia…` → Catch of the day tartar, `surf-and-turf-taco…`, `risotto-langosta…` → California chili stuffed with lobster, `MenuDonSanchez-34.jpg` → Charred beets, como la pone el inicio). Los `alt` del sitio están cruzados (a `jicama.jpg` le dice "Abalone Carpaccio"); se escribieron de nuevo.
- La nota del menú "1 ST PLACE WINNER AT THE GRUPO EDITHS CONTEST", que el sitio pone al inicio de la descripción del Pibil style mushroom taco, se muestra aparte, como sello del platillo: "1st place winner at the Grupo Ediths contest". No quedan notas crípticas: "(reloaded)" es parte del nombre del coliflor; "(prep 90 gr)", "(raw 125 gr)" y "(cooked 90 gr)" son el peso de la porción (lo explica una línea al pie del menú).
- La cava: sus textos se recortaron y sus cuatro preguntas frecuentes van en acordeón; se agregó una quinta con la política de descorche (de /7338-2/). La primera respuesta junta los dos datos que el sitio da sobre el cupo (ver pendientes).
- Las **políticas de reservación** (`/7338-2/`), que en el sitio tienen los títulos revueltos (bajo "No Show Policy" hay un texto de no discriminación y bajo "Pets" el cargo por no presentarse), se reacomodaron: cada texto va con el título que le corresponde, en seis datos cortos. Se enlaza la página completa.
- Reseñas: el sitio muestra un widget de Google con ocho reseñas; se usan tres positivas (Tony Pujara, Christina E, Kristen W), recortadas y sin foto. Se dejan fuera las de Jomo Fisher (sin texto), Bibi Santana (muy corta), April Lauren (mixta) y Dean Johnson (negativa, sobre el precio de los "specials"). Se conserva la calificación "4.6, based on 468 reviews" con enlace a su ficha de Google.
- Eventos: los cuatro tipos (Special celebrations, Weddings, Rehearsal dinners, Corporate groups) pasan de carrusel con fotos a una frase; el formulario de contacto pasa a WhatsApp con mensaje.
- Dirección: el inicio dice "Blvd. Mijares 27, 23400 District" y su mapa incrustado "Boulevard Antonio Mijares, Centro, San José del Cabo, B.C.S."; el rediseño junta las dos: "Blvd. Antonio Mijares 27, Centro, Art District, 23400 San José del Cabo, B.C.S.".
- Correcciones de redacción: "Don Shancez" por "Don Sanchez"; "Queer Destintions Commited" por "Queer Destinations Committed"; "This assure" por "This assures"; "palace for dinner" por "place for dinner" (reseña); "togarachi" por "togarashi"; "quenele" por "quenelle"; "axiote" por "achiote"; "in quinoa crusted" por "in quinoa crust"; "smoked carrot pure … I charred yellow lemon" por "… | charred yellow lemon"; "(90gr cocido)" por "(cooked 90 gr)"; "Sirenia Concepcion Mora from Rancho del Rincon" por "Concepción … Rincón"; "cata experience" por "tasting experience"; "20 year experience" por "20 years of experience"; el precio repetido al final de las descripciones del tartar y del tiradito se quitó; "San Jose" por "San José".
- Fotos: 23 copias `.webp` de las del clon (de 1.83 MB a 1.21 MB) con `rediseno/fotos-web.mjs`; el clon no se tocó.
- Colores: el arena `#e0dcd5`, el grafito `#404047` y el cobre `#c3701e` del CSS de su tema; se agregaron un cobre oscuro y uno claro para que el texto cumpla contraste AA.
- Tipografía: las del sitio (Playfair Display para títulos y Montserrat para texto), servidas desde el propio sitio con @fontsource, solo latino.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "From the farm, the sea and the ranch"** (componentes `Origen`, `Mapa` y `Punto` en `App.tsx`; datos en `origen` de `content.ts`). Mapa en SVG de la península de Baja California (contorno simplificado con coordenadas públicas) con un recuadro ampliado de Los Cabos. Lugares y platillos, todos del menú o de la cava: San José del Cabo (mar: Catch of the day tartar, tiradito, Tikin-xic fish, Desert catch), Miraflores (granja: Pork gorditas, Golden onion tinga sopes), Pescadero (granja: Blackened shrimp), Sierra de San Francisco (rancho: Confited goat sope), Valle de Guadalupe y Ensenada (vinos de la cava); fuera de la península: Huajuapan de León, Oaxaca (Ancestral mole), Hidalgo y Coahuila, y Napa Valley y Columbia Valley (vinos). Al elegir un lugar sale su frase, sus platillos con precio y un WhatsApp con mensaje. Textos nuevos: el título "From the farm, the sea and the ranch" y su introducción (armados con frases de /Cuisine: "inspired by the fresh ingredients found in the Baja California peninsula" y "the local products from the farm, the sea and the ranch"), "On the peninsula", "Beyond the peninsula", "Los Cabos", "Pacific Ocean", "Sea of Cortez", los tipos "From the farm", "From the sea", "From the ranch", "For the cava", "From a traditional kitchen", las regiones ("Baja California Sur", "Baja California", "Mixteca Baja, Oaxaca", "Mexico", "United States"), "Book and try it", "Ask about the cava", "See the full menu", "About the cava" y el `aria-label` del mapa. Frases de cada lugar: las de Miraflores, Pescadero, Sierra de San Francisco y Huajuapan son del menú casi textuales; las de San José del Cabo ("Regionally sourced seafood. The catch of the day, at our table on Blvd. Mijares."), Valle de Guadalupe ("…for a five-course dinner in the cava."), Hidalgo y Coahuila ("Mexican wines from Hidalgo and Coahuila on our wine list and in the cava tastings.") y Napa ("Wines from Napa Valley, California, and Columbia Valley, among other important wine regions.") se redactaron con frases del inicio y de /Cava.
- **Reservaciones por OpenTable**: el sitio incrusta el widget de OpenTable (`rid=335539`); el rediseño lo enlaza (`https://www.opentable.com.mx/restref/client/?rid=335539&lang=en-US`) en el encabezado, la portada, el contacto y la barra del celular. OpenTable rechaza las peticiones de curl, así que el enlace no se pudo abrir desde la terminal: revisarlo en el navegador (pendiente).
- WhatsApp al **+52 624 157 4267** (el número que el sitio muestra; ver pendientes) con mensajes prellenados: general "Hello! I'm writing from your website. I'd like to book a table at Don Sanchez."; desde el mapa "… I want to try the (platillos) (from (lugar))." o "… I'd like to know more about a wine tasting in the cava, with wines from (lugar)."; cava "… I'd like to book the cava for a wine tasting dinner. Date: ___, number of guests: ___."; eventos "… I'd like to plan an event at Don Sanchez. Type of event: ___, date: ___, number of guests: ___.".
- Pestaña **Dessert**: Churros, $280 MXN (precio del primer carrusel del inicio; la página de menú no tiene postres aunque su pestaña móvil dice "Desserts").
- Pestaña **Kids**: Quesadillas with mashed potatoes $150 MXN y Pasta with various sauces (tomato, alfredo and butter) $200 MXN, con el aviso "The children's menu is exclusively available for children up to 5 years old." (de /7338-2/, tomado con curl).
- "Good to know before you come" con textos de /7338-2/ (tomados con curl el 2026-09-26): "Open-air restaurant: The cava is the only air-conditioned room." (resumen nuestro de "We are an open-air restaurant… the air-conditioned cava"), "Pet-friendly", "Payment", "Table time", "Tolerance", "No show", y "Full reservation policies" (enlace).
- Pregunta de la cava "Can I bring my own wine?" con la política de descorche ($630 MXN por botella de 750 ml) y el consumo mínimo de $300 USD en la cava (de /7338-2/). La pregunta "Will a meet the chef Edgar Román, head at Don Sánchez?" se reescribió como "Will I meet chef Edgar Román?".
- Títulos, botones y textos nuevos: navegación "Origins", "Menu", "Cava", "Events", "Visit us"; "Book a table", "Book on OpenTable", "Book", "WhatsApp"; datos de portada "Hours", "Where", "Every night", "On Google" y "4.6 stars, 468 reviews"; "Meet the chef, Edgar Román" (el sitio: "Meet The Chef Edgar Román"); "Menu at Don Sanchez" (título del sitio) con la frase del sitio "When you visit…"; "Prices in Mexican pesos, as published on our menu. Grams show the portion of the main ingredient."; "Book the cava"; "Recognitions"; "250 Best Restaurants in Mexico, 2024" y "Culinaria Mexicana" (enlace); "What our guests say", "on Google, based on 468 reviews", "Read the reviews on Google"; "Event venue in Los Cabos" (título del sitio), "Contact an event specialist" (del sitio); "Good to know before you come"; "Visit us in the Art District", "Address", "Get directions on Google Maps", "Follow us"; pie "Don Sánchez, part of Grupo Ediths. © (año) Don Sanchez Restaurant."; "Skip to the menu"; `aria-label` "Open navigation", "Message Don Sanchez on WhatsApp", "Directions to Don Sanchez on Google Maps", "Don Sanchez, back to top".
- Barra fija en el celular: reservar (OpenTable), WhatsApp y cómo llegar. El sitio no publica teléfono para llamar (solo WhatsApp), así que no hay botón de llamada.
- Enlace a Google Maps: la ficha del restaurante que el propio sitio enlaza en su bloque de reseñas (`maps.google.com/?cid=16682735836891619597`). No hay mapa incrustado.
- JSON-LD `Restaurant` con datos reales: nombre, descripción del inicio, `servesCuisine` (Contemporary Mexican, Baja Med), dirección, WhatsApp como teléfono, menú, reservaciones (OpenTable), rango de precios $150 a $1,600 MXN (del menú infantil al rack de cordero), formas de pago, horario (todos los días de 17:00 a 22:00), mapa, Grupo Ediths, dos premios y redes. El original solo tiene el `WebPage`/`Organization` de Yoast, sin horario ni dirección.
- Title y description reales (la description es la del sitio más el horario); Open Graph con la foto del muro de neón (el sitio usa una foto de 300 px que parece de banco); `lang="en"` (el sitio dice `es-CO`); favicon con su ícono naranja.
- Textos alternativos descriptivos en todas las fotos (en el inicio del sitio, 18 de 39 imágenes tienen `alt` vacío).
- Accesibilidad: un solo H1, contraste AA (texto `#4c4c52` sobre arena 7.5:1; botones blancos sobre cobre oscuro 6.3:1; cobre claro sobre grafito 6.3:1), botones con `aria-pressed`, pestañas con `role="tab"`, ficha del mapa con `aria-live` y `prefers-reduced-motion` (el pulso del mapa se detiene y el desplazamiento no es suave).

## Qué se quitó o no se usó

- Divi, sus scripts, Google Fonts, GTranslate (selector de idioma), el widget de OpenTable incrustado, el mapa de Google incrustado y el widget de reseñas.
- El video del inicio (`Don-sanchez-video-sin-logos.mp4`) y el de /Cuisine: no están en el clon y pesarían demasiado; la portada usa una foto.
- El newsletter (no dice qué envía ni tiene formulario visible en `crudo.json`), el blog y el aviso de privacidad (se pueden enlazar si el cliente quiere).
- Los formularios de contacto de /reservations, /contact-us y Events: los sustituye WhatsApp con mensaje.
- Textos de plantilla del sitio: la primera respuesta de la cava ("Your content goes here. Edit or remove this text inline…"), el título "Title" de /Cuisine, las letras "p p p" y el "7" sueltos de /Events.
- El texto "Where to eat in San José del Cabo Art District?…" y otros párrafos de SEO repetidos.
- Las fotos de perfil de las reseñas de Google (`2024/04/ChIJe4D…jpg`).
- El enlace a las guías de Amazon ("Get your Mexico Gastronómico guide!").
- Los platillos que solo aparecen en el inicio y no en la página de menú: "Jicama and cauliflower aguachile" ($300) y "Totoaba pozole" ($500). Ver pendientes.
- Fotos del clon sin usar: las que parecen de banco (arriba), `MenuDonSanchez-59-scaled.jpg` (igual al carpaccio de abulón), `MenuDonSanchez-207.jpg`, `MenuDonSanchez-39.jpg`, `MenuDonSanchez-84.jpg`, `MenuDonSanchez-173.jpg`, `2022/09/MenuDonSanchez-34.jpg` (repetidas o sin platillo identificado), `Marca-Don-Sanchez_-2022_beige_mobile-01-1.png`, `Five.png`, `WhatsApp-Image-2022-10-13…jpeg` (logo de Grupo Ediths, se enlaza por nombre) y las miniaturas `-300x…`.

## Qué se conserva al pie de la letra

- "Don Sanchez", "Signature cuisine by chef Edgar Román", "Live a culinary experience in one of the best restaurants in San José del Cabo", el párrafo de presentación del inicio, "Live music daily", "Open Daily 5 to 10 pm".
- De /Cuisine: "Baja Med cuisine with a twist", "Redefining contemporary Mexican gastronomy", el texto del remodelo del edificio histórico, "We are an open-air restaurant…" y la semblanza del chef Edgar Román.
- De /Cava: "A wine lover's paradise", "Enhancing the wine experience", "The Cava at Don Sanchez" y sus preguntas frecuentes (recortadas).
- De /Events: "Event venue in Los Cabos", sus dos párrafos (el segundo, recortado) y los cuatro tipos de evento.
- **Todos los precios** de la página de menú, tal como se publican el 2026-09-26, con sus ingredientes y gramajes.
- Los tres reconocimientos con sus textos (Five Star Diamond Award, 250 Best Restaurants by Culinaria Mexicana 2024, Queer Destinations Committed).
- Contacto: WhatsApp +52 624 157 4267 (el que se ve en el sitio), Blvd. Mijares 27, Facebook /donsanchez.loscabos, Instagram @donsanchez.loscabos, YouTube @donsanchezrestaurant, "Don Sánchez, part of Grupo Ediths" con enlace a edithscabo.com.

## Pendiente de confirmar con el cliente

- **WhatsApp:** el sitio muestra "+52 624 157 4267" pero el enlace lleva a `whatsapp:526241422444` (otro número, 624 142 2444, y con un formato de enlace que no abre el chat). El rediseño usa el número visible; confirmar cuál es el bueno. Tampoco hay teléfono para llamar ni correo publicados.
- **OpenTable:** confirmar que `rid=335539` es su perfil actual (el enlace no se pudo abrir con curl porque OpenTable bloquea peticiones automáticas).
- **Horario:** el inicio dice "Open Daily 5 to 10 pm" y la cava "We are open daily from 5 pm to 9:30 pm". Se usa 5 a 10 pm; confirmar y a qué hora cierra la cocina.
- **Precios:** la página de menú y los dos carruseles del inicio dan precios distintos para los mismos platillos (Grilled octopus $800 / $1,200; Sterling Silver beef brisket $880 / $900; Catch of the day tartar $400 / $600; tiradito $320 / $450; Surf & turf taco $380 / $400; Charred beets $300 / $390; langosta $1,500 / $1,990; Desert catch $880 / $950). Se usan los de la página de menú; confirmar cuáles están vigentes.
- **Platillos solo del inicio:** "Jicama and cauliflower aguachile" ($300) y "Totoaba pozole" ($500) no están en el menú; el menú tiene "Quail pozole". ¿Siguen? ¿Hay más postres además de los churros, y los churros cuestan $280?
- **Fotos:** confirmar que `jicama.jpg` es el Jicama sashimi y `quail.jpg` el Quail pozole (el inicio los pone junto a "Jicama and cauliflower aguachile" y "Totoaba pozole"). Faltan fotos de la cava, de la fachada, de la música en vivo y de los platillos de Miraflores, Pescadero y la Sierra de San Francisco.
- **Nombres del menú:** "Totoaba Dove" y "Totoaba fish necklace (240 gr)" parecen traducciones literales (¿"collar" de totoaba?); se dejaron como están.
- **Cava:** el sitio dice "up to 8 guests" en la cava y "a minimum of 2 people and a maximum of 6… for groups of 8 people, comfort may be compromised" en las políticas; el rediseño da los dos datos. Confirmar.
- **Five Star Diamond Award:** el texto del inicio dice 2025 y la insignia dice "2023 Winner"; el rediseño no pone año. Confirmar los años.
- **Reseñas de Google:** 4.6 con 468 reseñas es lo que mostraba el widget del sitio el 2026-09-26; actualizar el número antes de publicar.
- **Dirección:** confirmar "Blvd. Antonio Mijares 27, Centro, 23400".
- Si quieren una versión en español (el logo dice "Pasión culinaria por la Baja" y el sitio se declara `es-CO`).
- Los datos de lugares del mapa salen de su menú; si hay más proveedores locales (pescadores, granjas, ranchos), se pueden agregar.

## Dónde está cada cosa

- Textos, contacto, fotos, lugares del mapa, cava, premios, reseñas, eventos y políticas: `rediseno/src/data/content.ts`
- Menú completo con precios: `rediseno/src/data/menu.json`
- Diseño, el mapa (`Origen`, `Mapa`, `Punto`, contorno en `COSTA`) y el menú en pestañas: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y `@font-face`)
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/wp-content/uploads/` (sin tocar); copias `.webp` en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`. Para cambiar una foto, edita la lista de `rediseno/fotos-web.mjs` y vuelve a ejecutarlo.
- Capturas para comparar: `referencias/capturas-2026-09-26/` (se generan con `node herramientas/guardar-capturas.mjs 328-donsanchez` después del QA).
