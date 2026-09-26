# Don Sanchez: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://donsanchezrestaurant.com/ (WordPress con Divi, en inglés). Restaurante de cocina mexicana contemporánea del chef Edgar Román en San José del Cabo, parte de Grupo Ediths |
| Prioridad | **ALTA**: el único contacto directo del sitio, el WhatsApp, no funciona: el enlace está mal formado (`whatsapp:` en lugar de `wa.me`) y apunta a otro número (624 142 2444) que el que se lee (624 157 4267). Además, los precios del inicio no coinciden con los del menú y sus políticas de reservación tienen los títulos revueltos (el cargo por no presentarse aparece bajo "Pets") |
| Contacto publicado | WhatsApp +52 624 157 4267 (el que se muestra), Instagram y Facebook @donsanchez.loscabos, YouTube @donsanchezrestaurant, OpenTable. No publica teléfono ni correo |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-26/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-26 (inicio, Cuisine, Events, Cava, Menu, /reservations, /7338-2, /contact-us y /blog responden 200) y en `investigacion/original.html` y `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **El WhatsApp no abre.** En el inicio dice "Whatsapp: +52 624 157 4267", pero el enlace es `whatsapp:526241422444`: un formato que los navegadores no reconocen (el correcto es `https://wa.me/...`) y, además, **otro número** (624 142 2444). Es el único teléfono del sitio: no hay teléfono para llamar ni correo, solo formularios. | Un turista que quiere preguntar algo antes de reservar (grupo grande, cava, alergias) toca el número y no pasa nada, o le escribe a un número distinto. Es el contacto más directo que tienen. | Inicio, bloque "SCHEDULE" (`<a href="whatsapp:526241422444">+52 624 157 4267</a>`) |
| 2 | **Precios distintos para el mismo platillo.** El inicio y la página de menú no coinciden: langosta $1,990 contra $1,500, Grilled octopus $1,200 contra $800, tartar $600 contra $400, tiradito $450 contra $320, Desert catch $950 contra $880, entre otros. En el inicio, el "Desert Catch" trae la descripción del betabel. Hay dos platillos del inicio (Jicama and cauliflower aguachile, Totoaba pozole) que no están en el menú. | Una de las reseñas que ellos mismos muestran se queja de sorpresas en la cuenta ("make sure you ask prices… before you get a shock"). Precios contradictorios refuerzan esa desconfianza y generan discusiones en la mesa. | Inicio (dos carruseles "Delight-in a farm-to-fork feast") y /don_sanchez_san_jose_del_cabo_menu/ (`crudo.json`) |
| 3 | **Las políticas de reservación están revueltas.** En /7338-2/, bajo "No Show Policy" hay un texto de no discriminación; bajo "Pets", el cargo de $500 MXN por persona por no presentarse; bajo "Service Times", lo de las mascotas. "Maximum Waiting Time" dice "your reservation will be available until your reservation is available". La cava dice "up to 8 guests" en su página y "máximo 6" en las políticas. | Son reglas con cargos de dinero (no show, descorche de $630, mínimo de $300 USD en la cava). Si el cliente no las entiende, el cobro se vuelve una queja o una mala reseña. | https://donsanchezrestaurant.com/7338-2/ (curl) y /wine_cava_san_jose_del_cabo/ |
| 4 | **Textos de plantilla a la vista.** En la cava, la primera pregunta "For how many people is the cava?" responde "Your content goes here. Edit or remove this text inline or in the module Content settings…" (y la pregunta sale dos veces). En /Cuisine hay un título que dice "Title"; en /Events, letras "p p p" y un "7" sueltos. Errata "The Cava at Don Shancez". | Para un restaurante de alta cocina con premios internacionales, se ve descuidado justo en la página que vende la experiencia más cara (la cava). | /wine_cava_san_jose_del_cabo/, /an_jose_del_cabo_restaurant/, /los_cabos_events_venues/ |
| 5 | **El menú en el celular lleva a otra sección.** En la página de menú, las pestañas del celular dicen "Based on vegetables", "Animal-based dishes", "From the sea" y "Desserts", pero llevan a Raw, Garnachas, Warm starters y Main dishes. Tocando "Desserts" se ven los platos fuertes; no hay postres en el menú. | Quien busca opciones vegetarianas o postres desde el celular (la mayoría de los turistas) no las encuentra. | /don_sanchez_san_jose_del_cabo_menu/ (`href="#mobile-desserts"` → sección "Main dishes") |
| 6 | **Datos que no cuadran.** Horario: "Open Daily 5 to 10 pm" en el inicio y "5 pm to 9:30 pm" en la cava. Premio: el texto dice "International Five Star Diamond Award in 2025" y la insignia, "2023 Winner". | Pequeñas dudas que hacen que el cliente llame (y no hay teléfono) o que Google muestre datos distintos. | Inicio y /wine_cava_san_jose_del_cabo/ |
| 7 | **Google entiende poco del sitio.** Ninguna página tiene H1; no hay datos estructurados de Restaurant (el JSON-LD de Yoast no trae horario, dirección, menú ni precios); el sitio se declara en español de Colombia (`lang="es-CO"`, `og:locale es_ES`) aunque está en inglés; la imagen para compartir es una foto de 300 px que parece de banco; 18 de 39 imágenes del inicio no tienen `alt`. La dirección de una página del sitio tiene errata en su URL (`/an_jose_del_cabo_restaurant/`). | Al buscar "restaurant San José del Cabo" o compartir el enlace por WhatsApp, pierde frente a competidores con datos completos. | `original.html` y las páginas descargadas |
| 8 | Detalles menores: fotos de banco en eventos (`pexels-helena-lopes…`), el video del inicio pesa y tarda en cargar, formulario de eventos con suma "12 + 1 =" como filtro. | Pequeños descuidos. | Inicio y /los_cabos_events_venues/ |

Nota: el sitio tiene cosas muy bien: fotos propias excelentes de platillos, salón y chef; el menú completo con precios, ingredientes y gramos; reservaciones por OpenTable; premios reales y un texto de marca claro ("regionally sourced", "from the farm, the sea and the ranch"). El problema no es el contenido: es que **el contacto no funciona** y que **las cifras (precios, horarios, cupo de la cava, cargos) se contradicen**.

## Qué le ofrecemos

- WhatsApp que sí abre, con el mensaje ya escrito (reservar, cotizar un evento, reservar la cava), en toda la página y en una barra fija en el celular junto a OpenTable y "cómo llegar".
- Un solo menú con un solo precio por platillo, en pestañas que llevan a donde dicen, con postres y menú infantil.
- "From the farm, the sea and the ranch": un mapa de la península donde el cliente ve de dónde vienen sus ingredientes (Miraflores, Pescadero, Sierra de San Francisco, Oaxaca, Valle de Guadalupe) y qué platillos los llevan, y lo pide por WhatsApp. Cuenta su propuesta de cocina local mejor que cualquier párrafo.
- Las políticas (no show, descorche, cava, mascotas, formas de pago) claras y en su lugar, antes de que el cliente llegue.
- Datos de Restaurant para Google (horario, dirección, menú, reservaciones), idioma correcto, vista previa con foto al compartir y un solo H1.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para restaurantes. Revisando el sitio de Don Sanchez noté algo que les puede estar costando reservaciones: el WhatsApp que aparece en su página (624 157 4267) no abre el chat al tocarlo, y el enlace lleva a otro número (624 142 2444). También vi que el inicio y el menú tienen precios distintos para los mismos platillos. Les preparé una propuesta de cómo podría verse el sitio en una sola página, en inglés, con su menú completo, OpenTable y WhatsApp en un toque, y un mapa de la península con el origen de sus ingredientes. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Cuál es su WhatsApp correcto: 624 157 4267 o 624 142 2444? ¿Tienen teléfono o correo para reservaciones y eventos?
- ¿Cómo les llegan hoy las reservaciones: OpenTable, WhatsApp, formularios, hoteles o concierges?
- ¿Qué precios están vigentes, los del inicio o los de la página de menú? ¿Siguen el aguachile de jícama y el pozole de totoaba? ¿Qué postres tienen?
- ¿La cava es para 6 u 8 personas? ¿El horario es hasta las 10 pm o hasta las 9:30?
- ¿En qué años recibieron el Five Star Diamond Award?
- ¿Quiénes son sus proveedores locales (pescadores, granjas, ranchos)? Se pueden sumar al mapa.
- ¿Les interesa una versión en español del sitio?
- ¿Tienen fotos de la cava, de la fachada, de la música en vivo y de los platillos de Miraflores, Pescadero y la Sierra de San Francisco?
