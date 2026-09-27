# La Punta Coffee: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://lapuntacoffee.com/ (una sola página en HTML a mano, en Netlify; en inglés con un botón "ES" que cambia los textos a español) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/642-lapuntacoffee/rediseno/dist/index.html (en español: `…/index.html?lang=es`) |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-27/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 642-lapuntacoffee`) |

**Negocio:** La Punta Coffee ("Beach • Coffee • Vibes"), cafetería y bar de jugos junto a la alberca, **dentro del hotel boutique La Punta Rooms** (según la biografía de su Instagram), en Nayarit S/N, Brisas de Zicatela, 70934 Puerto Escondido, Oaxaca. Todos los días de 8:00 am a 4:00 pm. Espresso de especialidad, jugos prensados en frío, smoothies, un açaí bowl y snacks de pan brioche y de masa madre. Tipo para Google: `CafeOrCoffeeShop`.

**Idioma:** el sitio está en inglés (`lang="en"`) y trae sus propios textos en español detrás del botón "ES". El rediseño va **en inglés por defecto** y **conserva el botón ES/EN**; los textos en español son los del propio sitio (`investigacion/original.html`, objeto `data.es` de su script). Los textos nuevos se escribieron en los dos idiomas. El idioma elegido se recuerda en el navegador y también se puede abrir con `?lang=es`.

## En una línea

Mismo negocio, mismos textos (en inglés y español), fotos, precios y datos de contacto reales; cambia la forma: el menú completo con los tamaños y las notas explicadas, "What's in your pocket? / ¿Cuánto traes?" (tocas los billetes que traes y ves en la orilla de la alberca lo que te alcanza), que están dentro de La Punta Rooms, datos para Google que el sitio no tenía, y **sin** el teléfono y WhatsApp de plantilla (pendiente su número real).

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 11 de 11 imágenes rotas en escritorio y en móvil: el HTML pide `./IMG_5143.jpg` y demás en la raíz, pero el clon las guardó en `sitio/assets/` (la portada sale sin su foto de fondo y la galería vacía) | 0 imágenes rotas; 9 copias `.webp` de las fotos del clon en `assets/web/` |
| 13 errores de consola y 12 recursos fallidos en escritorio (12 y 12 en móvil), incluido el mapa de Google incrustado (`iframe`) | 0 errores y 0 recursos fallidos; sin mapa incrustado: la foto de la alberca enlaza a Google Maps |
| Desborde horizontal de 164 px en el celular: la navegación (About, Menu, Gallery, Visit, ES y Visit Us) no se acomoda | Desborde 0; en el celular la navegación se oculta y hay una barra fija abajo |
| `IMG_1927.jpg` no es una foto: es un recuadro rosa que dice "Placeholder for IMG_1927.jpg" (igual en el sitio en línea) | No se usa |

## Qué se cambió (mismo contenido, otra forma)

- **El menú** pasa de seis tarjetas blancas iguales a renglones con puntos hasta el precio, en dos columnas, con los tamaños en columnas con su encabezado y fotos del café, los smoothies y el açaí bowl junto a su sección.
- **Notas crípticas explicadas:**
  - Juice Bar: "Orange (12oz/16oz) $60 / $90" pasa a "Orange" con dos columnas de precio bajo "12 oz" y "16 oz", y la nota "Two sizes: 12 oz and 16 oz." / "Dos tamaños: 12 oz y 16 oz.".
  - Smoothies: "$80 / $120" sin explicación pasa a columnas "Small / Large" ("Chico / Grande") con la nota "Two sizes, small and large." / "Dos tamaños, chico y grande." (que sean dos tamaños es **deducido**, ver pendientes).
  - Powerfull: "— espresso shot +$30", metido entre los ingredientes, pasa a "Add an espresso shot for +$30." / "Agrégale un shot de espresso por +$30.".
  - "hemp hearts" / "corazones de hemp": en español se agrega "(semillas de cáñamo peladas)"; "cacao nibs" se aclara en español "(trocitos de cacao)".
  - Extras: "Extras (maca, spirulina, hemp hearts) $15" pasa a "Maca, spirulina or hemp hearts $15" / "Maca, espirulina o corazones de hemp $15", con la nota "To add to your order." / "Para agregar a tu pedido." (a qué se agregan es deducido, ver pendientes); "Espresso Shot +$30" se conserva.
  - Los ingredientes que iban entre paréntesis en el nombre pasan a una línea de descripción debajo, con mayúscula inicial y punto final. "sourdough" en español: "Pan de masa madre" (el sitio dice "masa madre").
- **About**: sus tres píldoras de colores ("Specialty beans", "Vegan options", "Cold‑pressed juice") pasan a una frase: "Specialty beans, vegan options and cold-pressed juice." / "Café de especialidad, opciones veganas y jugo prensado en frío.". El texto de About cambia su raya "—" por una coma (inglés) y dos puntos (español).
- **El lema** "Beach • Coffee • Vibes" se escribe "Beach, coffee & vibes" / "Playa, café y buena vibra" (sin puntos medios; la versión en español es nuestra).
- **La dirección** "Nayarit Sn" se escribe "Nayarit S/N" y "Oax" pasa a "Oax.".
- **Visit Us**: los emojis (📍📞✉️📸🕒) se cambian por etiquetas (Address, Hours, Email, Instagram); el correo y el Instagram, que en el sitio son texto sin enlace, ahora abren el correo (con asunto y mensaje prellenados) y el perfil.
- **Botones**: "Open in Maps ➜" pierde la flecha; "☕ See Menu" pierde el emoji.
- Fotos: 9 copias `.webp` (7.98 MB → 0.54 MB) con `rediseno/fotos-web.mjs`; el logo se recorta de su fondo blanco sobrante; el clon no se tocó. Los `alt` se reescribieron porque en el sitio están corridos (la foto de la alberca desde el dron se llama `IMG_5164.jpg`, no `IMG_1927.jpg`).
- Colores: su rosa `#F0C6DD`, su amarillo `#F1CC69` y su naranja `#F0A42F` (su CSS y su logo), más el turquesa de la alberca y la piedra de la orilla de sus fotos; se agregaron un turquesa oscuro, un naranja quemado y un negro ciruela para cumplir contraste AA.
- Tipografía: su sitio usa la letra del sistema y su logo una letra redonda de los setenta que no está en @fontsource; se usan Shrikhand (títulos) y Outfit (texto), con @fontsource y solo el subconjunto latino.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "What's in your pocket?" / "¿Cuánto traes?"** (componentes `Bolsillo`, `Orilla`, `Objeto`, `Billete` y la función `mejores()` en `App.tsx`; datos en `productos`, `dinero`, `antojos` y `bolsillo` de `content.ts`). Tocas los billetes y monedas que traes ($10, $20, $50, $100, $200, $500; arranca con $100 + $50) y eliges qué se te antoja (Lo que sea, Café, Jugo, Smoothie, Açaí bowl o Snack). Aparecen las tres combinaciones de una bebida y algo de comer (o una sola cosa) de su menú que más aprovechan lo que traes, sin repetir bebida ni comida, con precios, total y "Te sobran $X". La que eliges se dibuja sobre la orilla rosa de la alberca, junto a tu dinero: taza, vaso con hielo o frasco con popote del color de la bebida (más alto si es el tamaño grande), bowl o pan. Precios de su menú; no suma extras. Los colores de los billetes y de las bebidas son ilustrativos.
  - Textos nuevos (inglés / español): "What's in your pocket?" / "¿Cuánto traes?"; "Came up from the beach with some pesos? Tap the bills and coins you have and we lay out, on the pool edge, what you can get from our menu." / "¿Subiste de la playa con unos pesos? Toca los billetes y monedas que traes y te ponemos en la orilla de la alberca lo que te alcanza de nuestro menú."; "You have" / "Traes"; "Empty pocket" / "Vaciar"; "Add $X" / "Agregar $X" (etiqueta de los botones); "What are you craving?" / "¿Qué se te antoja?"; "Anything" / "Lo que sea", "Coffee" / "Café", "Juice" / "Jugo", "Smoothie", "Açaí bowl", "Snack"; "What you can get" / "Lo que te alcanza"; "Total"; "You keep $X" / "Te sobran $X"; "Exact change" / "Justo lo que traes"; "Not enough yet: the cheapest thing on the menu is a tea for $30." / "Todavía no alcanza: lo más barato del menú es un té de $30."; "Not enough for that yet. Add a bill or pick something else." / "Para eso todavía no alcanza. Agrega un billete o elige otra cosa."; "Order it at the bar." / "Pídelo en la barra."; "Prices in Mexican pesos, from our menu. Extras not included. Illustration." / "Precios en pesos mexicanos, de nuestro menú. Sin extras. Dibujo ilustrativo."; `aria-label` del dibujo "The pool edge with your money and …" / "La orilla de la alberca con tu dinero y …"; "(12 oz)", "(16 oz)", "(Small)", "(Large)" / "(Chico)", "(Grande)" junto al nombre.
- **"Dentro de La Punta Rooms"**: tomado de la biografía pública de su Instagram `@lapuntacoffee` ("Cafecito y bar de jugos adentro de @lapuntarooms.pxm (abierto todos los dias de 8:00am-4:00pm)"), consultada con curl el 2026-09-27; el perfil `@lapuntarooms.pxm` se llama "La Punta Rooms ~ Boutique Hotel in La Punta, Puerto Escondido". Textos: "Inside La Punta Rooms, Brisas de Zicatela." / "Dentro de La Punta Rooms, Brisas de Zicatela."; "Open every day, 8 am to 4 pm." / "Abierto todos los días, de 8 am a 4 pm."; "The pool at La Punta Rooms. Tap the photo for directions." / "La alberca de La Punta Rooms. Toca la foto para ver cómo llegar.".
- **Correo con mensaje prellenado** (en lugar del WhatsApp, que no es real): asunto "Hi from your website" / "Hola desde su sitio web" y mensaje "Hi! I found you on your website and I have a question: " / "¡Hola! Los encontré en su sitio web y tengo una pregunta: "; botón "Email us" / "Escríbenos".
- **WhatsApp preparado pero apagado:** en `content.ts`, `negocio.whatsapp` está vacío. Cuando den su número real se escribe ahí y aparece el botón de WhatsApp en Visítanos con mensaje prellenado.
- Barra fija en el celular: "Directions" / "Cómo llegar" (Google Maps), Menú, Instagram y Correo. No hay botón de llamar porque su teléfono publicado es de plantilla (pendiente).
- Otros textos nuevos: navegación "What's in your pocket?", "Gallery" / "Galería", "Visit" / "Visita"; botón "ES" / "EN" con `aria-label` "Ver en español" / "View in English"; "Address" / "Dirección", "Hours" / "Horario", "Email" / "Correo"; "Directions" / "Cómo llegar"; `aria-label` "La Punta Coffee, back to top" / "La Punta Coffee, volver al inicio", "Open La Punta Coffee in Google Maps" / "Abrir La Punta Coffee en Google Maps", "La Punta Coffee on Instagram" / "La Punta Coffee en Instagram", "Email La Punta Coffee" / "Escribir un correo a La Punta Coffee"; salto de teclado "Skip to What's in your pocket?" / "Ir a ¿Cuánto traes?"; "Fresh & sunny" en español: "Fresco y soleado" (el sitio no lo traduce); "Abrir en Maps" (el sitio no traduce "Open in Maps").
- Título de la página en los dos idiomas: "La Punta Coffee | Coffee, juices & smoothies by the pool in Puerto Escondido" / "La Punta Coffee | Café, jugos y smoothies en la alberca, Puerto Escondido".
- Description nueva ("Specialty espresso, cold-pressed juices, smoothies, açaí bowl and snacks by the pool, inside La Punta Rooms, Brisas de Zicatela, Puerto Escondido. Every day, 8 am to 4 pm."), Open Graph con la foto del latte entre hojas (el sitio no tiene), favicon con su logo (`icono.png`, generado por `fotos-web.mjs`; el sitio no tiene y `favicon.ico` da 404).
- JSON-LD `CafeOrCoffeeShop` con datos reales: nombre, descripción (su About), lema, correo, dirección, horario de lunes a domingo de 8:00 a 16:00, menú, `containedInPlace` La Punta Rooms (de su Instagram), Instagram. **Sin teléfono** (el publicado es de plantilla). El sitio no tiene JSON-LD.
- El sol del logo (rayos amarillos y centro naranja) dibujado detrás de la foto de la portada.
- Textos alternativos descriptivos en las fotos, en los dos idiomas.
- Accesibilidad: un solo H1, contraste AA (texto `#5b4450` sobre cal 8.5:1 y sobre rosa 5.8:1; tinta `#2b1a24` sobre rosa 10.8:1, sobre sol 10.6:1 y sobre alberca 9.8:1; precios `#8a4200` sobre rosa 4.8:1; blanco sobre turquesa oscuro `#0d5a60` 7.9:1; los botones de billete oscurecen su color para el texto blanco), botones con `aria-pressed`, resultados con `aria-live`, foco visible, `lang` que cambia con el idioma y `prefers-reduced-motion` (sin desplazamiento suave ni transiciones).

## Qué se quitó o no se usó

- **El teléfono "+52 954 123 4567" y los dos botones "Order on WhatsApp" a `wa.me/529541234567`**: parecen de plantilla (la secuencia 123 4567); no se usan como si fueran reales (pendiente).
- **"Order on UberEats"**: va a `https://ubereats.com`, la portada general de Uber Eats, no a su tienda; no se enlaza (pendiente).
- **"Tip: Convert HEIC images to JPG (Preview → File → Export → JPEG) and keep the exact file names above."**: una nota de desarrollo que quedó visible bajo la galería.
- `IMG_1927.jpg` (el recuadro "Placeholder for IMG_1927.jpg").
- El mapa de Google incrustado (`iframe`): sin mapas de terceros; la foto de la alberca y los botones enlazan a Google Maps.
- Las píldoras de colores, los emojis, las flechas, las sombras y la rejilla de 9 fotos iguales.
- El script que cambia el idioma (se reemplaza por el botón ES/EN del rediseño, que hace lo mismo).

## Qué se conserva al pie de la letra

- Inglés: "Coffee & Vibes by the Pool", "Espresso, smoothies & sunshine in Puerto Escondido.", "See Menu", "About", el texto de About (con la coma), "Menu", "Fresh & sunny", "Gallery", "Shots from the pool & garden.", "Visit Us", "Coffee with ocean vibes in Puerto Escondido.", "Mon–Sun: 8:00am – 4:00pm", "Open in Maps", "© (año) La Punta Coffee".
- Español (del script del sitio): "Café y Buenas Vibras en la Alberca", "Espresso, smoothies y sol en Puerto Escondido.", "Ver Menú", "Acerca de", "Menú", "Galería", "Tomas de la alberca y el jardín.", "Visítanos", "Café con vibra playera en Puerto Escondido.", "Lun–Dom: 8:00am – 4:00pm", y los nombres y descripciones del menú en español.
- Todos los productos y precios del menú (Coffee Bar, Juice Bar, Smoothies, Acai Bowl, Snack Bar y Extras), con sus nombres ("Powerfull" se deja así: es el nombre del producto).
- Contacto: Nayarit S/N, Brisas de Zicatela, 70934 Puerto Escondido, Oax.; lapuntacoffee@gmail.com; Instagram @lapuntacoffee; su enlace de Google Maps.

## Pendiente de confirmar con el cliente

- **WhatsApp y teléfono reales.** El sitio publica +52 954 123 4567 y `wa.me/529541234567`, que parecen de plantilla. El rediseño no los usa: el contacto es por correo e Instagram. Con su número, se escribe en `negocio.whatsapp` (`content.ts`) y aparecen los botones de WhatsApp; también se agregaría a la barra del celular y al JSON-LD.
- **Uber Eats:** ¿tienen tienda en Uber Eats? Si sí, su enlace directo va en `negocio.ubereats`.
- **Tamaños de los smoothies:** el sitio da dos precios sin decir de qué; el rediseño dice "chico" y "grande". ¿Son 12 oz y 16 oz, como los jugos?
- **Extras:** ¿a qué se agregan la maca, la espirulina y los corazones de hemp ($15)? ¿$15 cada uno? El rediseño dice "To add to your order." / "Para agregar a tu pedido." y no los suma en "¿Cuánto traes?".
- **Dentro de La Punta Rooms:** sale de su Instagram; confirmar que así quieren presentarlo y que el café está abierto a quien no se hospeda en el hotel (su sitio dice "Visit Us").
- **Formas de pago:** "¿Cuánto traes?" habla de billetes y monedas pero no dice cómo se paga; ¿aceptan tarjeta?
- **Fotos que faltan:** snacks (Blue Crush, Endless Summer, Sea Side, banana bread), jugos, la barra o el local, y la foto que iba en `IMG_1927.jpg` (su alt dice "Pool drone shot over turquoise pool").
- El lema en español "Playa, café y buena vibra" y "Fresco y soleado" son traducciones nuestras.
- Las aclaraciones "(semillas de cáñamo peladas)" y "(trocitos de cacao)" son nuestras.

## Dónde está cada cosa

- Textos (inglés y español), contacto, fotos, menú y datos de "¿Cuánto traes?": `rediseno/src/data/content.ts`
- Diseño, idioma (`Ctx`, `useT`, `leerIdioma`), "¿Cuánto traes?" (`Bolsillo`, `Orilla`, `Objeto`, `Billete`, `mejores()`): `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y `@font-face`)
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html` (el título cambia con el idioma desde `App.tsx`)
- Imágenes: originales en el clon, `sitio/assets/` (sin tocar); copias `.webp` y el favicon en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`.
- Capturas para comparar: `referencias/capturas-2026-09-27/` (se generan con `node herramientas/guardar-capturas.mjs 642-lapuntacoffee` después del QA).
