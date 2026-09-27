# HOUSE Restaurante: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://lascasasbb.com/es/house-restaurante-en-cuernavaca/ y sus subpáginas `menu-de-desayuno/`, `menu-de-desayuno-brunch-de-domingo/`, `menu-de-comida/`, `menu-de-cena/`, `para-llevar/` y `feliz-cumpleanos/`, dentro del sitio del hotel Las Casas B+B (WordPress con Elementor). El fabricador clonó el inicio del hotel, https://lascasasbb.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima (más textos tomados con curl, ver abajo) |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia (es el inicio del hotel) |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/552-houserestaurante/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-27/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 552-houserestaurante`) |

**Negocio:** HOUSE Restaurante ("HOUSE Restaurant" en su logo). Restaurante de cocina mexicana y mediterránea "con espíritu California", de la chef ejecutiva Daniela Salgado Romero, en el jardín del hotel boutique Las Casas B+B: Fray Bartolomé de las Casas 110, Col. Centro, C.P. 62000, Cuernavaca, Morelos, frente al Palacio de Cortés. Desayuno, brunch dominical, comida y cena todos los días, para huéspedes y visitantes. Tel. y WhatsApp +52 777 318 3782; reservas en OpenTable; para llevar por WhatsApp, pick-up y Rappi. IG @houserestaurante, FB /HouseCuernavaca, Tripadvisor. En la base del estudio está como GASTRONOMIA, y lo es: un solo restaurante, no una cadena. El JSON-LD es `Restaurant` con `containedInPlace` el hotel.

## En una línea

Mismo restaurante, mismos textos, precios, fotos y contacto; cambia la forma: siete páginas y cuatro PDF en una sola página, la carta completa con precios en pestañas, un solo horario, todos los botones al WhatsApp del restaurante con mensaje, y "¿Más México o más Mediterráneo?", una mesa con sus 33 platillos colocados según los ingredientes que nombra su carta.

## De dónde salió el contenido

- `investigacion/crudo.json` (inicio del hotel): el bloque "Restaurante Jardín en Cuernavaca | HOUSE Restaurante", las preguntas frecuentes del hotel sobre HOUSE, la dirección, el WhatsApp del restaurante (527773183782, del pie y del botón flotante) y las redes de HOUSE.
- **Tomado con curl el 2026-09-27** (no está en `crudo.json`; las descargas se guardaron en una carpeta temporal del sistema, fuera del estudio): las siete páginas del restaurante de arriba (textos de la cocina, los cuatro momentos, horarios, preguntas frecuentes, para llevar, Birthday Breakfast, celebraciones, reconocimientos y citas) y las cartas en PDF, leídas con `pdftotext`: `Menu-Desayuno-Espanol-v14-09-2026.pdf`, `Brunch-Dominical-Espanol-v10-04-26.pdf`, `Menu-Comida-Cena-Espanol-HOUSE-v26-06-06.pdf` (por dentro "v22/08/26") y `Menu-postres-Espanol-2026.pdf`. También se leyó `Desayuno-Espanol-v10-04-26-.pdf` (desayuno anterior, solo para `OPORTUNIDADES.md`). Está declarado en `content.ts` y `carta.ts`.
- No se descargó ninguna imagen nueva.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| El clon es el **inicio del hotel**, no la página del restaurante: HOUSE ocupa un solo bloque; no hay carta, horarios del restaurante ni sus fotos de platillos | Página propia del restaurante con sus textos (tomados con curl) y su carta completa |
| Desborde horizontal de 45 px en escritorio y 46 px en el celular | Desborde 0 |
| 19 errores de consola: fuentes que el navegador bloquea (CORS) al pedirlas a `lascasasbb.com` y el aviso de CookieYes de que la URL cambió | 0 errores y 0 recursos fallidos; fuentes locales de @fontsource |
| Carruseles, menús y ventanas emergentes del tema (Hoteller/Elementor) sin sus scripts; aviso de cookies de CookieYes | Sin scripts de terceros ni aviso de cookies (el rediseño no usa cookies ni analítica) |
| Las fotos de platillos de las páginas del restaurante (chilaquiles, mezze, mole, ravioles, pork belly…) no están en el clon | Se usan las fotos del comedor y del jardín que sí hay (ver pendientes) |

## Qué se cambió (mismo contenido, otra forma)

- **Siete páginas en una**: la principal del restaurante, desayuno, brunch, comida, cena, para llevar y Birthday Breakfast van en una sola página. La carta de los cuatro PDF va en cuatro pestañas (Desayuno, Brunch dominical, Comida y cena, Postres y sobremesa), cada una con su horario, la fecha de su versión y el enlace a su PDF. La pestaña que abre primero depende de la hora de Cuernavaca (`America/Mexico_City`): desayuno antes de las 12:00 (sábado, 1:00 p.m.), brunch el domingo antes de la 1:00 p.m. y comida y cena después (es solo el orden de las pestañas). Cada carta muestra primero 3 secciones (2 en el celular) y el botón "Ver toda la carta de …" abre las demás.
- **La carta como carta impresa**: renglones con puntos hasta el precio, en dos columnas. Tipo oración en lugar de MAYÚSCULAS; sin la numeración "01.-"; "·" y "—" convertidos en comas o puntos; erratas corregidas ("MEDITERRRÁNEOS", "Capuccino", "pan rustico", "EL PERFECTO” PARFAIT"); "Cambiar a solo claras de huevo" por "Sustitución sólo por claras de huevo"; "Moët Chandon" → "Moët & Chandon"; los gramos entre paréntesis junto a la proteína ("Pollo rostizado (190 g)"); "(3)" → "Tres huevos"; "4 piezas" → "Cuatro tortillas".
- **Notas del original explicadas o reagrupadas** (las deducidas, en pendientes):
  - "Peso promedio antes de cocción." (al pie de cada hoja) → "Los gramos son el peso promedio de la proteína antes de la cocción." ("de la proteína" es deducido).
  - "Pan extra · 2 rebanadas · +$50" → "Pan extra (2 rebanadas), +$50."; "Leche deslactosada +$15", "Miel de Tepoztlán +$40" y los "Upgrade" → frases con "+$".
  - "Para acompañar: yogurt griego +$30 · granola…" y "Proteínas y extras / Acompañamientos" → una sección "Proteínas, extras y acompañamientos" con la nota "Se suman a tu platillo."; "Claras en omelettes y huevos revueltos $40" con "Para pedirlos solo con claras.".
  - "Wellness" → "Ligeros", con la nota "En la carta, "Wellness"."; "FIDO’S TREAT" → "Para tu perro", con "En la carta, "Fido’s treat"."
  - Palabras en inglés o técnicas con su explicación: "beer batter (capeado con cerveza)", "jus de shiitake (salsa de su jugo con hongos)", "pangrattato (pan tostado molido)", "lemon curd (crema de limón)", "moros y cristianos (arroz con frijoles negros)", huevos "any style" "como los pidas".
  - Postres: el "Maridaje sugerido: Carajillo — Licor 43 y espresso: notas de vainilla…" de cada postre → "Maridaje: carajillo." (la bebida, sin la cata), con la nota "Cada postre trae un maridaje sugerido de la sobremesa."
  - "Dos de las tres tostadas tienen un picante medio-alto" se conserva; "Trilogía de tostadas -- Verde · róbalo · recado verde…" → "Verde: róbalo, recado verde…".
  - "OPCIÓN VEGETARIANA" → etiqueta "Vegetariano"; "OPCIÓN PORTOBELLO -- VEGANO" → "También con portobello, en versión vegana."; "FAVORITO HOUSE", "SELECCIÓN DE LA CHEF", "NUEVO", "Daniela recomienda" y "Para compartir · para dos personas" → etiquetas bajo el nombre.
  - En desayuno, "Grand Mimosa" y los smoothies van juntos como "Para brindar y smoothies"; "Jugos" y "Tés y tisanas" juntos; "Café illy · Trieste, Italia", "Cafés con leche", "Otras bebidas calientes" y "Café frío" juntos como "Café illy (Trieste, Italia)".
  - La leyenda "VEGETARIANO" de los PDF (un ícono junto a los platillos que no se ve en el texto) no se pudo leer: solo se marcan como vegetarianos los que el menú o sus preguntas frecuentes nombran (ver pendientes).
- **Los cuatro momentos del día** ("Dónde desayunar, comer y cenar en Cuernavaca") en renglones con la hora grande a la izquierda (8:00, 9:00, 12:00, 18:00; en el celular se ve solo el horario escrito) en lugar de cuatro tarjetas con foto; "RESERVA DIRECTO" y "VER MENÚ" de cada uno → "Ver este menú" (abre su pestaña; reservar está en el encabezado y en la barra del celular).
- **"Los jueves son «al centro»", "Los martes… romance", "Los miércoles celebramos…" y "Viernes y sábado, reúne a tus amigos"** (repartidos en sus preguntas frecuentes) → una fila con los cuatro días, recortados.
- **Horarios**: un solo horario, el de la sección "HORARIOS" de su página principal (lunes a jueves de 8:00 a.m. a 10:00 p.m., última reservación 8:00 p.m.; viernes y sábados hasta las 11:00 p.m., última 9:00 p.m.; domingos de 9:00 a.m. a 8:00 p.m., última 6:00 p.m.) en una tabla; la comida "todos los días, 12:00 p.m.–6:00 p.m.", también de la principal. Las otras páginas dan horarios distintos (ver pendientes y `OPORTUNIDADES.md`).
- **Preguntas frecuentes** (de la principal y de cena) → "Lo que hay que saber", nueve preguntas desplegables (las dos primeras abiertas), recortadas y con títulos cortos.
- **Reconocimientos**: "Fodor’s Choice · Recomendado por Marco Beteta / Más de 1,250 reseñas en Google · 4.8/5 en OpenTable / #1 Brunch en Cuernavaca · OpenTable / Wanderlog: #1 Desayuno & Brunch…" → una línea de texto bajo la portada, sin puntos medios ("#1 Brunch en Cuernavaca, según OpenTable"). Se omiten "#1 para almorzar" y "#3 entre los mejores restaurantes de Cuernavaca" (para no alargar) y "#1 Restaurante Mediterráneo de Cuernavaca — TripAdvisor" (solo en la página de comida).
- **Para llevar, Birthday Breakfast y celebraciones** juntos en una sección oscura; "Cómo ordenar (en 30 segundos)" → tres formas (WhatsApp, pick-up, Rappi); los emojis y el "Top 8 Recomendados To-Go" no van.
- **Portada**: la foto del comedor de noche (la única foto propia del restaurante) en lugar del fondo de su página principal (`Comida-en-Cuernavaca-HOUSE-Restaurante-3.png`, que no está en el clon).
- **Enlace de OpenTable** sin el parámetro `corrid=525aeb64-35d6-40a5-b833-728e65af7e47` (un identificador de sesión fijo): `https://www.opentable.com.mx/restref/client/?restref=162475&lang=es-MX`.
- Fotos: 4 copias `.webp` y el logo HOUSE en blanco y negro (0.76 MB → 0.65 MB) con `rediseno/fotos-web.mjs`. Favicon: su logo HOUSE (negro sobre blanco, 64 px), generado de `Logo-House-150x150.png` (el sitio usa el favicon "B+B" del hotel).
- Colores: el negro de su logo, el ámbar de sus botones (`#FFB846`, solo sobre fondo oscuro o de botón), el encalado de sus mesas y el jardín de noche; un rojo de chile y un verde de olivo para las dos cocinas.
- Tipografía: las de su sitio, Oswald (títulos, la letra condensada de su logo) y Jost (texto), de @fontsource, solo latino.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "¿Más México o más Mediterráneo?"** (componentes `Mesa`, `MesaDibujo` y `colocar()` en `App.tsx`; datos y cálculo en `deMexico`, `delMediterraneo`, `platosDeLaMesa()` y `fueraDeLaMesa()` de `carta.ts`). Parte de su frase "México y el Mediterráneo se encuentran en la mesa de HOUSE… El encuentro sucede en los platos". Una mesa larga dibujada con un chile en un extremo ("México") y una rama de olivo en el otro ("Mediterráneo"); los 33 platillos de la carta de comida y cena son platos sobre la mesa, colocados según los ingredientes que su descripción nombra de cada lado (se calcula solo con el texto de la carta). Un control deslizante de cinco paradas enciende los platos de esa parte de la mesa y abajo aparece la lista con precio; al elegir uno, su ficha con descripción, "De México" y "Del Mediterráneo" (los ingredientes encontrados) y "Reservar mesa para probarlo" por WhatsApp con el nombre del platillo. Quedan fuera los que no nombran ingredientes de ningún lado (Rosemary chicken, Rib eye prime Angus, las dos mini hamburguesas y el medio baguette), y se dice.
  - **La clasificación de ingredientes es nuestra** (pendiente de revisar con la chef). De México: plátano macho, chiles cascabel, guajillo, chilhuacle/mulato/pasilla, de árbol, serrano, toreados, manzano, piquín, habanero, chipotle, jalapeño, piloncillo, epazote, cilantro criollo, hoja de aguacate, aguacate y guacamole, maíz azul, mole negro, recados, pápalo, queso Oaxaca, queso fresco, verdolaga, tomatillo, vainilla mexicana, soda de naranja mexicana, aguachile y elote (esquites). Del Mediterráneo: queso de cabra, aceite de oliva, limón amarillo (y Meyer), garbanzo y hummus, feta, tzatziki, harissa, aceitunas, pecorino, Parmigiano Reggiano, jamón serrano, mozzarella, ricotta, risotto, pasta, pomodoro, albahaca y pesto, alcachofas, alcaparras, eneldo, menta, romero, pepino persa, pan a la parrilla (y focaccia, crostone, crostino, pangrattato), arúgula, balsámico, comino y cardamomo, pistache y almendra, lenteja, orégano y peperoncino.
  - Textos nuevos: "¿Más México o más Mediterráneo?"; "Estos son los 33 platillos de la carta de comida y cena, puestos en una mesa según los ingredientes que nombra la carta: los de México de un lado, los del Mediterráneo del otro. Mueve el control y elige tu lado de la mesa."; "La mesa es larga: deslízala de lado para verla completa." (celular); las paradas "Puro México", "Más México", "Mitad y mitad", "Más Mediterráneo", "Puro Mediterráneo" con "Solo nombra ingredientes de este lado de la mesa.", "Mucho México y un acento mediterráneo.", "Donde de verdad se encuentran las dos cocinas.", "Mucho Mediterráneo y un acento mexicano."; "N platillos"; "De México", "Del Mediterráneo", "Nada de este lado."; "En la carta de comida y cena: todos los días desde las 12:00 p.m."; "Reservar mesa para probarlo"; "Qué ingrediente va de cada lado es nuestra lectura de la carta, no una regla de la cocina. Quedan fuera de la mesa, porque su descripción no nombra ingredientes de ninguno de los dos lados: …"; en el dibujo, "México" y "Mediterráneo".
  - Mensaje de WhatsApp: "Hola, HOUSE. Quiero reservar una mesa para probar: (platillo). Somos __ personas, para el día __ a las __."
- **WhatsApp con mensaje prellenado**, siempre al número del restaurante (52 777 318 3782; el sitio los manda vacíos, salvo en la página de cena, y la página de comida manda al hotel):
  - Reservar: "Hola, HOUSE. Quiero reservar una mesa para el día __ a las __. Somos __ personas."
  - Para llevar: "Hola, HOUSE. Quiero hacer un pedido para llevar. ¿Me pueden confirmar tiempos y disponibilidad?"
  - Birthday Breakfast: "Hola, HOUSE. Quiero ordenar un Birthday Breakfast para el día __ (Pan francés o Chilaquiles HOUSE). ¿Me cotizan el envío a __?"
  - Celebraciones: "Hola, HOUSE. Quiero organizar una celebración para __ personas el día __."
- **Barra fija en el celular**: "Reservar" (WhatsApp), "Llamar" y "Cómo llegar" (su enlace de Google Maps, `maps.app.goo.gl/ZybC2eHGCGTTHpct6`). Los "Llamar" sí llaman (`tel:+527773183782`); en el sitio, los de Para llevar y Birthday Breakfast tienen el enlace vacío.
- **La carta completa en la página** (en el sitio solo en PDF e imágenes): 4 cartas, `src/data/carta.ts`.
- Otros textos nuevos: "Reservar por WhatsApp", "Reservar en OpenTable", "Ver el menú y los precios", "Reservar mesa" (de su "RESERVAR MESA"); pie de foto "Fray Bartolomé de las Casas 110, frente al Palacio de Cortés, dentro de Las Casas B+B."; navegación "La cocina", "¿México o Mediterráneo?", "Menú", "Horarios", "Visítanos"; "Chef ejecutiva: Daniela Salgado Romero." (de "CHEF EJECUTIVA" de su PDF); "Desayuno, brunch, comida y cena."; "Ver este menú"; "La carta"; "Completa y con precios, sin abrir un PDF. Son cuatro: desayuno, brunch del domingo, comida y cena, y postres."; los nombres de pestaña "Comida y cena" y "Postres y sobremesa"; "Ver toda la carta de (carta) (N secciones más)" y "Falta: …"; "Carta del (fecha)" y "Ver la carta en PDF"; "Vinos mexicanos por copa y coctelería de la casa: la copa de la casa (tinto o blanco, cambia cada día) cuesta $125; pregunta por los demás en tu mesa." (con su dato de la copa de $125); en la tabla, "Día", "Horario" y "Última reservación"; "Lo que hay que saber" y los títulos "Valet parking", "Pet-friendly", "¿Y si llueve?", "Vegetariano y vegano", "Si no tomas alcohol", "Con niños", "Silla de ruedas", "Formas de pago"; "Horario de pedidos"; "Pedir en Rappi"; "Menú para llevar: desayuno y brunch (PDF)" y "… comida y cena (PDF)"; "Ordenar el Birthday Breakfast"; "Celebraciones y cenas románticas"; "Ver cenas románticas" (de su "VER CENAS ROMANTICAS"); "HOUSE está dentro de Las Casas B+B, un hotel boutique de 11 habitaciones con alberca climatizada y The White Spa. Sus huéspedes desayunan en HOUSE y, si su estancia incluye domingo, disfrutan el Sunday Brunch." (armado con datos del inicio del hotel en `crudo.json`); "Conoce Las Casas B+B"; "Cómo llegar", "Llamar", "WhatsApp"; en el pie "Dirección", "Reservaciones", "Síguenos", "Cómo llegar en Google Maps", "WhatsApp +52 777 318 3782", "Teléfono +52 777 318 3782"; "Ir al menú" (salto de teclado); `aria-label` "HOUSE Restaurante, volver al inicio", "Abrir el menú", "Principal", "Menú del celular", "Reconocimientos", "Cartas", "Acciones rápidas", "Llamar a HOUSE Restaurante", "Cómo llegar a HOUSE en Google Maps", "Abrir la ubicación de HOUSE en Google Maps".
- **JSON-LD** `Restaurant` (las páginas del restaurante solo tienen un `Hotel` con el teléfono del hotel): nombre, dirección, coordenadas (las de su JSON-LD del hotel), teléfono del restaurante, horario de su página principal, cocina mexicana y mediterránea, formas de pago, reservas (OpenTable), `containedInPlace` el hotel, las cuatro cartas y cuatro platillos con precio (los de "¿Cuánto cuesta cenar en HOUSE?"), y sus redes. No se incluye calificación (no se pudo comprobar).
- Title, description y Open Graph nuevos, con la foto del comedor (su página usa `og:type` "article" y el title "Restaurante En Cuernavaca Centro Con Jardín | HOUSE").
- Textos alternativos que describen cada foto (en el clon son "Image 21", "Image 22"…).
- Accesibilidad: un solo H1 ("HOUSE Restaurante"), contraste AA (texto `#47423b` sobre `#f6f2ea` 9.0:1 y sobre `#ece5d8` 8.0:1; ámbar `#8a5207` sobre `#f6f2ea` 6.0:1; chile `#a3301e` 6.4:1; olivo `#4d5a26` 6.8:1; `#f6f2ea` sobre `#15171b` 16:1; `#1d1b18` sobre el ámbar `#ffb846` 10:1), pestañas con `role="tab"`, platillos con `aria-pressed`, ficha con `aria-live`, control deslizante con `aria-valuetext`, foco visible y `prefers-reduced-motion` (sin desplazamiento suave ni transiciones; los platos no se animan).

## Qué se quitó o no se usó

- **"Around this table everyone belongs."** (`Around-this-table-everyone-belongs.png`, en su página principal): un anuncio con una mesa, un limón perfecto, una copa y un arcoíris que parece generado con IA; no trae metadatos que lo digan (pendiente de confirmar).
- **Fotos del hotel** que no son del restaurante: habitaciones, spa (`spa-masajes-pareja-cuernavaca.jpg`, parece de banco), el Palacio de Cortés (no se sabe si es suya), el mapa ilustrado y los sellos MICHELIN Key y Marco Beteta (son reconocimientos del hotel; el de Marco Beteta del restaurante se menciona en texto).
- Todo lo del hotel que no es del restaurante: habitaciones, tarifas, The White Spa, escapadas, blog y "Qué hacer en Cuernavaca". El hotel queda como el lugar donde está HOUSE, con un enlace a su sitio.
- El "Top 8 Recomendados To-Go" con emojis y textos de venta ("wow", "súper craveable", "legendarios"), los emojis de las listas (🌿🍳☕🐶📍), las estrellas "★★★★★ +1,200 reseñas Google", "✦" delante de cada botón, los títulos en mayúsculas espaciadas, los fondos con parallax y las entradas animadas.
- Los subtítulos en inglés de los smoothies del desayuno ("Very Blush", "Pink Afterglow", "Almond Cashmere", "Body Glow").
- Las catas de los maridajes de postres (queda solo la bebida sugerida).
- Tres citas de su sitio: "La mejor comida que he comido en esa ciudad." (Gastronauta DF) y las del hotel; se conservan dos (ver abajo).
- Las fotos JPG de cada página de las cartas (la carta ya está escrita en la página; el PDF queda enlazado).
- Scripts de terceros: CookieYes, Google Analytics, Elementor, el tema Hoteller y las fuentes de Google.

## Qué se conserva al pie de la letra

- "Restaurante en Cuernavaca Centro Histórico con jardín", "Cocina mexicana y mediterránea. Espíritu California.", "Desayuno, brunch dominical, comida y cena frente al Palacio de Cortés. Abierto todos los días."
- Los párrafos de "Restaurante jardín en el Centro Histórico de Cuernavaca" (el tercero, recortado) y "En pareja, con amigos, en familia. Para hablar de negocios o celebrar algo bueno."
- "Pan recién horneado para empezar…" y "Encuentra tu momento en HOUSE."; los cuatro textos de desayuno, brunch (recortado), comida (recortado) y cena, con sus horarios.
- "Abrimos todos los días.", "Elige tu hora y ven con hambre.", "Aquí nos encuentras.", "La próxima buena mesa puede ser la tuya." y su párrafo; las respuestas de sus preguntas frecuentes (recortadas); "Delivery y pick-up con el sabor de HOUSE…", las tres formas de ordenar y el horario de pedidos; el Birthday Breakfast ($625), lo que incluye y sus condiciones; "Organizamos cumpleaños, aniversarios y reuniones de 10 a 50 personas…".
- Dos citas de su sitio con su fuente: "La comida es deliciosa. Hacía tiempo que no disfrutaba una cena así." (Shannon M., San Diego, OpenTable, en su página de cena) y "Mi lugar de brunch favorito." (Gon Vivant, @gon_vivant, en su página de brunch).
- De las cuatro cartas: todos los nombres, descripciones, gramajes, opciones y precios.
- Contacto: dirección, teléfono y WhatsApp del restaurante, OpenTable, Rappi, Google Maps y redes; "© Las Casas B+B Hotel Boutique, Spa & Restaurante. Todos los derechos reservados." (el año se calcula solo).

## Pendiente de confirmar con el cliente

- **Horario**: el rediseño usa el de su página principal. Las demás páginas dicen otra cosa: comida el sábado de 1:00 a 6:00 y el domingo de 1:00 a 8:00 (o hasta las 6:00, en Para llevar); cena de lunes a jueves "hasta 10:30 pm" o de 6:00 a 8:30 p.m.; "última reservación dos horas antes del cierre". ¿Cuál es el correcto? ¿Hay cena el domingo (cierran a las 8:00)?
- **Cartas**: ¿la de desayuno de septiembre (la que se usa) reemplaza a la de abril, que sigue enlazada con otros precios? ¿La de brunch de abril sigue vigente? ¿La de comida y cena "v22/08/26" es la actual?
- **Precios de tres ensaladas** (deducido): en el PDF salen apilados junto a la segunda; se leyeron en orden como arúgula $315, César $295 y caprese $255.
- **Vegetarianos**: la leyenda "VEGETARIANO" de los PDF es un ícono que no se lee en el texto; solo se marcan los que nombran el menú o sus preguntas frecuentes.
- **"Los gramos son el peso promedio de la proteína"**: su nota dice "Peso promedio antes de cocción"; "de la proteína" es deducido.
- **Clasificación de ingredientes** del elemento memorable (qué es México y qué Mediterráneo): es nuestra; revisarla con la chef.
- **Carta de vinos y coctelería** (Rosa Mexicano $185, Limoncello Spritz, HOUSE Zero Proof, vinos mexicanos por copa): no la encontramos publicada; el rediseño solo da la copa de la casa ($125).
- **Reconocimientos y reseñas**: Fodor’s Choice, Marco Beteta, "más de 1,250 reseñas en Google" (otras páginas dicen "+1,200"), 4.8/5 en OpenTable y los #1 de OpenTable y Wanderlog 2026: ¿vigentes? No se pudieron comprobar.
- **Fotos**: faltan fotos de sus platillos (las de sus páginas no están en el clon) y del equipo y de la chef. ¿"Around this table everyone belongs." es foto o generada? ¿La del Palacio de Cortés es suya? Ninguna foto trae metadatos.
- **WhatsApp**: ¿todas las reservas del restaurante van al 777 318 3782? (la página de comida manda al del hotel).
- **Valet**: su página principal dice $25 antes de las 18:00 y $50 después; las preguntas del hotel dicen desayuno $25, comida o cena $50 y huéspedes $100.

## Dónde está cada cosa

- Textos, contacto, momentos, horarios, preguntas, para llevar, Birthday Breakfast, citas y el lugar: `rediseno/src/data/content.ts`
- Las cuatro cartas completas y los datos de "¿Más México o más Mediterráneo?" (ingredientes, `platosDeLaMesa()`, `fueraDeLaMesa()`): `rediseno/src/data/carta.ts`
- Diseño, el elemento memorable (`Mesa`, `MesaDibujo`, `colocar()`, `paradas`), la carta en pestañas (`MenuCompleto`, `Linea`, `menuDeAhora()`) y los mensajes de WhatsApp: `rediseno/src/App.tsx`
- Colores, fuentes, el control deslizante (`.deslizador`), los platos de la mesa (`.plato-mesa`) y los puntos de la carta (`.puntos`): `rediseno/src/index.css`
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/wp-content/uploads/` (sin tocar); copias `.webp`, el logo y el favicon en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`.
- Textos tomados con curl: de las siete páginas del restaurante y sus PDF (2026-09-27), declarados arriba; las descargas no se guardaron en el estudio.
- Capturas para comparar: `referencias/capturas-2026-09-27/` (se generan con `node herramientas/guardar-capturas.mjs 552-houserestaurante` después del QA).
