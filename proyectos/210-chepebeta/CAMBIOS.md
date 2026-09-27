# Che Pebeta: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://chepebeta.mx/ (sitio de una página hecho con Lovable, en React: inicio y /menu con la carta completa; selector de cinco idiomas) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/210-chepebeta/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-26/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 210-chepebeta`) |

**Negocio:** Che Pebeta, restaurante argentino ("Restaurante Argentino de Alta Gama") en Pueblo Serena, Carretera Nacional 500, Valle Alto, 64983 Monterrey, Nuevo León. Parrilla de cortes Angus, empanadas, pastas amasadas a mano, pizzas, milanesas, postres argentinos (Balcarce, rogel, alfajores) y cava de vinos. Show de tango los viernes y cata maridaje el último jueves de cada mes. Premios CANIRAC 2019 y 2023. Reservas por WhatsApp (81 1762 6442).

## En una línea

Mismo negocio, mismos textos, precios, fotos y datos de contacto; cambia la forma: una sola página que junta el inicio y la carta completa de /menu (149 renglones con precio, con sus notas explicadas), reserva por WhatsApp con su propio número (no con el de ejemplo del botón flotante) y agrega "El despiece", una res dibujada con sus cortes donde cada uno dice de qué parte sale, cómo lo sirven, cuánto cuesta y en qué parrillada viene.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| La página sale **en blanco** (0 px de alto) en escritorio y en móvil: al clonar, cada "/" del HTML se reescribió como "assets/" (`</title>` quedó como `<assets/title>`) y, además, es un sitio de React cuyos scripts no están en el clon | Página completa de 7,636 px en escritorio y 10,674 px en móvil |
| 0 H1, 2 errores de consola en escritorio y 1 en móvil, 1 recurso fallido (el logo pedido en `assetsassets/assetsassets/…`) | 1 H1, 0 errores, 0 recursos fallidos, 0 desbordes, 0 imágenes rotas |
| 20 imágenes locales que pesan 44 MB (las 14 de la galería son PNG de unos 3 MB) | 18 copias `.webp` (47.73 MB → 0.95 MB, contando la picadita) más el logo y el favicon, con `rediseno/fotos-web.mjs` en `assets/web/` |
| Faltan en el clon las fotos de las otras pestañas de "Nuestra Carta" (`menu-cortes`, `menu-pastas`, `menu-postres`, `menu-bodega`, `ensalada-acompanar`, `choripan-casa`) y la de Mafalda | Cada pestaña de la carta usa una foto de su galería; no se descargó nada (ver pendientes) |

## Qué se cambió (mismo contenido, otra forma)

- El inicio y la página /menu se juntaron en **una sola página**: portada, Nuestra alma, El despiece, la carta, Nuestras noches, Nuestra esencia y Reservar mesa.
- **La carta:** la sección "Nuestra Carta" del inicio (siete pestañas con una frase y una foto, sin platillos) y la página /menu (platillos, vinos y postres con precio) se juntaron en ocho pestañas: Entradas, Para acompañar, Pastas y pizzas, De la parrilla, De la casa, Postres y café, Vinos y Bebidas. Cada una lleva la frase de su pestaña del inicio y los platillos de /menu en renglones con puntos y precio.
  - Entradas se dividió en "Empanadas" y "Para picar y compartir"; "Empanadas Argentinas Horneadas — Carne Angus" pasa a "Horneada de carne Angus" y "Empanada Gourmet — Campo" a "Gourmet Campo".
  - Las variantes van en un renglón con dos precios: Ensalada Che Pebeta (chica $199, grande $299), Hamburguesa Angus (sola $229, con huevo $249), Milanesa empanizada y Milanesa napolitana (de pollo o de arrachera), pizzas (chica y grande), cortes (200 g y 400 g) y alfajores (por pieza y caja de 12).
  - Las parrilladas pasan de "Pituca — 2 personas" a "Pituca, para 2 personas".
  - Bebidas se agrupó en "Sin alcohol y preparadas", "Cervezas", "Licores, gin, brandy y ron", "Tequila y mezcal" y "Whisky"; los vinos en "Vinos de autor", "Vino por copa", "Vino por botella", "Vinos mexicanos", "Vinos de España" y "De Italia, Portugal y Francia" (las tres últimas tenían uno cada una).
  - "Para acompañar": su frase dice "desde vegetales asados a la leña hasta nuestras icónicas papas fritas crujientes", pero la carta no tiene vegetales a la leña; se recortó a "Realza los sabores de tu mesa con guarniciones artesanales, como nuestras icónicas papas fritas crujientes." (ver pendientes). "Entradas" dice "la Provoletta a la plancha" y el platillo "fundido a la parrilla": la frase queda en "la provoletta".
- **Notas crípticas explicadas:**
  - "Descorche $290" → "¿Traes tu propia botella? El descorche (abrirla y servirla en tu mesa) cuesta $290."
  - "High Choice Angus · Cortes Nacionales" → "Cortes de res Angus de calidad High Choice, de origen nacional. En varios eliges 200 o 400 gramos." (ver pendientes).
  - "Bife Angosto N.Y. 1"" y "2"" → "Bife angosto (New York) de 1 pulgada: 250 g, de unos 2.5 cm de grueso" y "de 2 pulgadas: 500 g, de unos 5 cm de grueso".
  - "Chica 30×20 cm · Grande 60×20 cm" → "Son rectangulares: la chica mide 30 × 20 cm y la grande 60 × 20 cm."
  - "Salsas: Bolognesa · Crema a los 4 quesos · Fileto. Agrega: Parmesano $20 · …" → "Con la salsa que elijas: boloñesa, crema a los cuatro quesos o fileto (la salsa de tomate a la argentina). Agrega parmesano +$20, pollo +$60, jamón serrano +$70 o salmón +$90."
  - "Tira de Asado: 400 g · Nacional extra suave" → "400 g, corte nacional, extra suave."
  - "c/u" y "Caja 12" → "por pieza" y "caja de 12".
- Correcciones de redacción: "Margaritta" por "Margarita"; "San Peregrino" por "San Pellegrino"; "Buchanans" por "Buchanan's"; "Capuccino" por "Cappuccino"; "RibEye" por "rib eye"; "USA" por "Estados Unidos"; "&" por "y"; "Edición Limitada" en minúsculas; los "·" de la carta pasan a comas; precios con coma de miles ("$2,590"); "Lun–Sáb 12:30–23:00 · Dom 12:30–22:00" pasa a "Lunes a sábado, 12:30 a 11:00 pm" y "Domingo, 12:30 a 10:00 pm"; el guion largo del segundo párrafo de "Nuestra Alma" pasa a dos puntos; las mayúsculas de adorno ("PROMOS") desaparecen.
- **El formulario de reserva** se conserva (nombre, fecha, hora, personas y solicitud especial, y abre WhatsApp al 81 1762 6442 con el mismo texto "Hola, me gustaría realizar una reserva:"), pero sin pedir correo (ver "Qué se quitó"); la hora se elige de una lista de 12:30 a 22:00 dentro de su horario.
- Portada: el título partido en dos líneas ("De Buenos Aires a Monterrey:" y, en cursiva dorada, "el sabor de nuestra herencia"); la foto de fondo pasa a ser el postre flameado de su galería (la de la empanada va en "Nuestra esencia").
- Fotos: 18 copias `.webp` de las del clon con `rediseno/fotos-web.mjs`; el clon no se tocó.
- Colores: el negro `#120905`, el crema `#f8f7f3` y `#ece7df`, el texto `#2a1f19` y el cuero `#914f2f` de su CSS; el celeste `#5bb0d7` de su logo y el dorado `#e0af3b` de sus medallas y su cursor.
- Tipografía: las de su sitio, Playfair Display (títulos) y Montserrat (texto), servidas con @fontsource, solo latino.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "El despiece"** (componentes `Despiece`, `Res` y `Ficha` en `App.tsx`; datos en `cortes` de `content.ts`). Una res dibujada de perfil, como el cuadro de cortes de una carnicería argentina, con nueve cortes de su carta: rib eye, bife angosto, picaña, lomo, tira de asado, arrachera, vacío, matambre y chamorro; el cogote, el pecho y la nalga van apagados porque no están en la carta. Se toca una zona o se elige el corte en la lista; la zona se pinta de dorado y la ficha dice de qué parte sale, los platillos de la carta que salen de él con su precio y su sección, en qué parrillada viene y un botón de WhatsApp.
  - Platillos por corte (todos de su carta): rib eye (Rib Eye Angus 500 g $1,190; Churrasco Rib Eye ½ kilo $690; Chicharrón de rib eye $399), bife angosto (1 pulgada, 250 g, $390; 2 pulgadas, 500 g, $690), lomo (caña de filete 200 g $320 o 400 g $590; Torta de Lomito $359; Carpaccio de Res $280), picaña (200 g $320 o 400 g $590; en Pituca 200 g, Piba 400 g y Che Pebeta 400 g), tira de asado (Tira de Asado 400 g $399; Costilla de Res $399), arrachera (200 g $290 o 400 g $490; milanesa empanizada $299 y napolitana $369 de arrachera; en Pituca 200 g y Che Pebeta 400 g), vacío (200 g $350 o 400 g $690; en Pituca 200 g, Piba 400 g y Che Pebeta 400 g), matambre (Matambre de Campo $349; Entradita $369) y chamorro (Chamorro horneado al vino tinto $369).
  - Textos nuevos: "El despiece"; "¿Qué es un vacío? ¿De dónde sale la picaña? Toca un corte de la res y te decimos de qué parte sale, cómo lo servimos y cuánto cuesta."; los nombres de los cortes en los botones ("Rib eye (bife ancho)", "Bife angosto (New York)", "Lomo (filete)", "Picaña", "Tira de asado", "Arrachera (entraña)", "Vacío", "Matambre", "Chamorro"); "Cogote", "Pecho", "Nalga"; "En nuestra carta"; "Viene en las parrilladas Angus:"; "Reservar y pedir este corte"; "La ubicación de cada corte es una guía general de carnicería; las partes apagadas no están en nuestra carta. Nuestros cortes son Angus de calidad High Choice; pesos y precios de nuestra carta."; `aria-label` "Res dibujada de perfil con sus cortes. Elegido: (corte)" y "Cortes".
  - **De qué parte sale cada corte** (explicación general de carnicería, escrita por nosotros): rib eye "El ojo de la costilla, en la parte alta del lomo, detrás del cuello. Es el corte con más marmoleo."; bife angosto "El lomo bajo, a lo largo del espinazo, entre el rib eye y la cadera."; lomo "El músculo que corre por dentro, debajo del bife angosto. Es el más tierno; la caña es su parte central."; picaña "La tapa de la cadera (en Argentina, tapa de cuadril), con su capa de grasa encima."; tira de asado "Las costillas cortadas a lo ancho, en tiras con hueso: el asado de tira de toda parrilla argentina."; arrachera "El diafragma, por dentro de las costillas. En Argentina se llama entraña."; vacío "La falda, entre las últimas costillas y la pierna. Jugoso y con su capa de grasa: un clásico argentino."; matambre "La capa delgada de carne entre el cuero y las costillas. Se enrolla con relleno, se cocina y se sirve frío, en rodajas."; chamorro "La parte baja de la pierna, con hueso. Se cocina lento hasta que se deshace." Los nombres de los platillos en la ficha se reescribieron un poco ("Bife angosto de 1 pulgada (unos 2.5 cm), 250 g", "Torta de Lomito, con filete de res", "Entradita: matambre y picadita").
  - Mensaje de WhatsApp: "Hola, les escribo desde su sitio web. Quiero reservar mesa. Me interesa (el corte, con peso y precio cuando es uno solo). ¿Tienen lugar para (día, hora y personas)?".
- **Textos del sitio que no están en `crudo.json`, tomados con curl el 2026-09-26** (descargas en una carpeta temporal del sistema, fuera del estudio): la carta completa de /menu (del archivo `/assets/menu-B19Cg0DX.js`, solo el español; en `rediseno/src/data/carta.json`), las frases de las siete pestañas de "Nuestra Carta" y el horario (de `/assets/index-LVYPD67w.js`), el funcionamiento de su formulario de reserva y el número de su botón flotante (de `/assets/WhatsAppButton-CKCIaMIX.js`), y el title y description de /menu. No se descargó ninguna imagen.
- **WhatsApp al 52 81 1762 6442** (el de su formulario de reserva y de su "Teléfono"), con mensajes prellenados: general "Hola, les escribo desde su sitio web. Quiero hacer una reservación en Che Pebeta." (su propio texto del botón flotante); reserva (el mensaje de su formulario, con "(nombre)", "(fecha)" y "(hora)" si faltan); tango "… Quiero reservar lugar para el Show de Tango (todos los viernes, 9:00 pm). Somos (personas)."; cata "… Quiero reservar lugar para el Cata Maridaje (último jueves de mes, 8:30 pm). Somos (personas)."; los de El despiece (arriba).
- Otros textos nuevos: la continuación de la portada "En Pueblo Serena, sobre la Carretera Nacional."; "Ver la carta"; "hoy" en el horario (según el día en Monterrey); "Premio CANIRAC" con el año; "Recetas familiares de Buenos Aires" (del título de su página /menu) como antetítulo de la carta; los títulos de pestañas y secciones de la carta ("De la parrilla", "De la casa", "Postres y café", "Bebidas", "Empanadas", "Para picar y compartir", "Guarniciones y ensaladas", "Parrilladas Angus", "Cortes Angus", "La bodega", "Alfajores", "Café y té" y los de bebidas y vinos de arriba); las notas "Las horneadas son las tradicionales argentinas; las gourmet llevan los rellenos de la casa.", "Para compartir: cada una dice para cuántas personas es y cuántos gramos lleva de cada corte.", "Por pieza o en caja de 12." y "¿De qué parte sale cada corte? Míralo en El despiece."; la frase de Bebidas "Limonadas, sangría, clericot, fernet, cervezas y destilados."; "Ver El despiece"; "Reservar lugar" con la hora; "Llena los datos y se abre WhatsApp con tu solicitud lista para enviar. Te confirmamos a la brevedad." (lo segundo es de su mensaje de confirmación); "Elige la hora"; "Más de 12"; "Solicitar reservación por WhatsApp"; "Los domingos cerramos a las 10:00 pm: te sugerimos llegar antes de las 9:00 pm." (aparece si eliges domingo después de las 9:00 pm); "Dónde", "WhatsApp", "Teléfono", "Cómo llegar", "Escríbenos", "Ver en Google Maps", "Síguenos en Instagram y Facebook."; navegación "Nuestra alma", "El despiece", "La carta", "Noches", "Visítanos"; "Ir a la carta"; pie "© (año) Che Pebeta. Restaurante argentino en Pueblo Serena, Monterrey, Nuevo León."; `aria-label` "Che Pebeta, volver al inicio", "Abrir el menú", "Partes de la carta", "Premios", "Escribir a Che Pebeta por WhatsApp", "Llamar a Che Pebeta", "Cómo llegar a Che Pebeta en Google Maps", "Abrir Che Pebeta en Google Maps".
- **Leyenda de consumo responsable en el pie:** "Venta de bebidas alcohólicas solo a mayores de 18 años. Evita el exceso." (su sitio no tiene ninguna).
- Enlace a Google Maps: el mismo de su "Ver en Google Maps"; la foto del salón también lo abre.
- Barra fija en el celular: Reservar (al formulario), WhatsApp, Llamar (81 1099 5176) y Cómo llegar.
- JSON-LD `Restaurant` con datos reales: nombre, descripción (su texto), dirección, coordenadas (las de su enlace a Maps), teléfono, horario, carta (/menu), reservas, premios CANIRAC 2019 y 2023, logo, foto y redes. Su sitio no tiene JSON-LD.
- Title "Che Pebeta | Restaurante argentino en Pueblo Serena, Monterrey", description (la suya, con Pueblo Serena y "Reserva por WhatsApp"), Open Graph con la foto del salón (la suya es una imagen "Diseño sin título" subida a Lovable), `lang="es-MX"` (su sitio dice `lang="en"`) y favicon con el óvalo de su logo (`icono.png`, generado por `fotos-web.mjs`).
- Textos alternativos descriptivos en todas las fotos (en su galería son "Che Pebeta - foto 1" a "foto 14").
- Accesibilidad: un solo H1, contraste AA (texto sobre crema 15.0:1; cuero sobre crema 5.8:1 y sobre `#ece7df` 5.1:1; celeste con texto negro 8.1:1; dorado sobre negro 9.7:1), pestañas con `role="tab"`, botones con `aria-pressed`, ficha con `aria-live`, campos con etiqueta y `prefers-reduced-motion` (sin desplazamiento suave ni transiciones).

## Qué se quitó o no se usó

- **El botón flotante de WhatsApp**: manda al 52 81 1234 5678, un número de ejemplo, no al suyo (ver `OPORTUNIDADES.md`). Todos los WhatsApp del rediseño van al 81 1762 6442.
- **Las promociones del Mundial** ("¡Vamos Argentina!": La Scaloneta $199, Tercer Estrella $299 y La Mano de Dios $990) y la opción "PROMOS" del menú: el Mundial terminó el 19 de julio de 2026 (ver pendientes).
- **La promoción escondida de Mafalda** ("¡Me atrapaste!… Pizza individual $99, toma captura de pantalla"): es un juego que aparece al azar, su imagen no está en el clon y usa un personaje con derechos de autor.
- El selector de cinco idiomas (español, inglés, coreano, japonés y francés): el rediseño va solo en español; las traducciones siguen en su sitio.
- El campo "Email" del formulario de reserva: la solicitud se manda por WhatsApp, así que el correo no hace falta.
- "Shot de Limón o Tercias" ($20) de Bebidas: no se entiende qué es "tercias" (ver pendientes).
- La insignia "Edit with Lovable" y las fuentes de Google (Noto Sans KR y JP incluidas).
- La foto de "Cata Maridaje" (`wine-pairing-B2hgLQB3.jpg`): un tomahawk con velas y manteles blancos que no se parecen a su salón; parece de banco o generada. La cata usa su foto de dos copas de tinto (ver pendientes). La foto `5-CeESOmBZ.png` se usa en la galería.

## Qué se conserva al pie de la letra

- "Restaurante Argentino de Alta Gama" (en tipo oración), "De Buenos Aires a Monterrey: el sabor de nuestra herencia", "Reservar Mesa" y su description (cortes Angus, pastas artesanales, el único Postre Balcarce de la ciudad y shows de tango en vivo).
- "Tradición y pasión", "Nuestra Alma" y sus dos párrafos; los premios CANIRAC 2019 y 2023.
- "Experiencias únicas", "Nuestras Noches", Show de Tango (todos los viernes, 9:00 pm, "Una noche de pasión y elegancia con los mejores bailarines de tango.") y Cata Maridaje (último jueves de mes, 8:30 pm, "Vinos de autor y cortes Angus seleccionados en una experiencia gastronómica exclusiva."), "Reservar lugar".
- Las frases de las siete pestañas de "Nuestra Carta" (con los dos recortes de arriba) y la carta de /menu: 149 renglones con sus nombres, descripciones y precios (sin el shot de limón).
- "Momentos únicos", "Nuestra Esencia" y las 14 fotos de su galería (repartidas entre la galería y las pestañas de la carta).
- "Tu mesa te espera", "Reservar Mesa", los campos de su formulario y su mensaje de WhatsApp.
- Contacto: WhatsApp 81 1762 6442, teléfono 81 1099 5176, horario, "PUEBLO SERENA, Carr Nacional 500, Valle Alto, 64983 Monterrey, N.L." (escrito "Pueblo Serena, Carretera Nacional 500, Valle Alto, 64983 Monterrey, N. L."), su enlace a Google Maps, Instagram @chepebeta.oficial y Facebook /chepebetarestaurante.

## Pendiente de confirmar con el cliente

- **WhatsApp:** el rediseño usa el 81 1762 6442 (el de su formulario de reserva); su botón flotante manda al 81 1234 5678, que parece un número de ejemplo. Confirmar que el 81 1762 6442 es el de reservas y que el 81 1099 5176 recibe llamadas.
- **El despiece:** la ubicación de cada corte en la res es una explicación general de carnicería escrita por nosotros; que su parrillero la revise. También a qué corte corresponden la "Costilla de Res" de Platillos de la casa (se puso con la tira de asado) y el "Carpaccio de Res" (se puso con el lomo por decir "filete de res").
- **"High Choice Angus · Cortes Nacionales":** se explicó como "Cortes de res Angus de calidad High Choice, de origen nacional"; confirmar que "nacionales" quiere decir de origen mexicano.
- **"Shot de Limón o Tercias" ($20):** ¿qué son las tercias? Se quitó de la carta hasta saberlo.
- **"Para acompañar":** su frase habla de "vegetales asados a la leña", que no están en la carta. ¿Los tienen?
- **Promociones del Mundial:** se quitaron porque el Mundial ya terminó. ¿Siguen alguna (La Mano de Dios, La Scaloneta, Tercer Estrella) como promoción normal?
- **Foto de la cata:** la de su sitio no parece de su restaurante; ¿nos comparten una foto real de una cata?
- **Fotos que faltan en el clon:** las de las pestañas Cortes, Pastas, Postres, La Bodega, Para acompañar y el choripán; si nos las comparten, se ponen en su pestaña.
- **Formulario sin correo:** ¿necesitan el correo del cliente en la reserva?
- **Leyenda de consumo responsable:** confirmar el texto que quieran usar.
- **Premios CANIRAC:** el sitio solo dice "CANIRAC, Premio 2019" y "Premio 2023"; si quieren, se agrega el nombre del premio.

## Dónde está cada cosa

- Textos, contacto, horario, noches, fotos y los cortes de El despiece: `rediseno/src/data/content.ts`
- La carta completa (pestañas, secciones, notas, platillos y precios): `rediseno/src/data/carta.json`
- Diseño, El despiece (`Despiece`, `Res`, `Ficha`), la carta y el formulario de reserva: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y `@font-face`)
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/assets/` (sin tocar); copias `.webp`, el logo y el favicon en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`.
- Capturas para comparar: `referencias/capturas-2026-09-26/` (se generan con `node herramientas/guardar-capturas.mjs 210-chepebeta` después del QA).
