# Gran Familia: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.lagranfamilia.mx/ (tres páginas en HTML con Tailwind por CDN y Alpine: inicio, `menu-desayuno.html` y `menu-tarde.html`; en Cloudflare Pages) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/463-granfamilia/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-27/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 463-granfamilia`) |

**Negocio:** Gran Familia ("Cocina Rancho" en su logo; "Gran Familia Cocina Potosina Tradicional" en su JSON-LD). Restaurante de cocina potosina en Av. Vasco de Quiroga 209, Industrial Aviación 1ra Secc., C.P. 78140, San Luis Potosí, S.L.P. Lunes a domingo de 8:00 a.m. a 6:00 p.m.; comida corrida de lunes a viernes de 1:00 a 5:00 p.m. ($150); barbacoa de borrego sábados y domingos hasta agotar existencia. Tel. y WhatsApp +52 444 411 5560. "Est. 2025". No publica correo ni redes sociales. En la base del estudio está como GASTRONOMIA, y lo es: un solo restaurante con fotos propias.

## En una línea

Mismo restaurante, mismos textos, precios, fotos y contacto; cambia la forma: las tres páginas en una, el menú completo de la mañana y de la tarde en pestañas con sus notas explicadas, "¿Qué día vienes?" (un mantel con los siete días que dice qué hay cada uno, comida corrida o barbacoa, y reserva ese día por WhatsApp) y datos para Google sin contradicciones.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 14 de 14 imágenes rotas en escritorio y móvil: el HTML pide `assets/img/…` pero el clon las guardó en `sitio/assets/assets/img/` | 0 imágenes rotas; 7 copias `.webp` de fotos del clon y el logo en `assets/web/` |
| Faltan `assets/js/tailwind-config.js` y `assets/js/main.js`: sin sus colores `gf-*`, la portada sale gris, el título blanco sobre blanco y los botones vacíos | Sitio nuevo con sus colores (tomados del `tailwind-config.js` en línea) y sin scripts externos |
| Tailwind y Alpine por CDN, Font Awesome y Google Fonts desde otros dominios | Todo local: Tailwind compilado, íconos en SVG, fuentes de @fontsource |
| El mapa de Google (iframe) sale en blanco | Sin mapa incrustado: enlace "Cómo llegar en Google Maps" y botón en la barra del celular |
| 25 errores de consola y 22 recursos fallidos en escritorio (23 y 21 en móvil) | 0 errores y 0 recursos fallidos |
| Faltan fotos del salón, de la fachada y de la barbacoa (no están en el sitio) | Se usan las fotos de platillos que sí hay (ver pendientes) |

## Qué se cambió (mismo contenido, otra forma)

- **Tres páginas en una**: el inicio, "Menú Mañana" y "Menú Tarde" van en una sola página; los dos menús en pestañas ("Menú mañana" y "Menú tarde"). La pestaña que abre primero depende de la hora de San Luis Potosí (antes de la 1:00 p.m., la mañana; después, la tarde; es solo el orden de las pestañas, no dice qué se sirve a qué hora). Los enlaces "Ver todo el menú de mañana/tarde" de los favoritos abren su pestaña.
- **El menú como carta impresa**: renglones con puntos hasta el precio en lugar de tarjetas, en dos columnas. Tipo oración en lugar de mayúsculas; "c/" → "con"; "pzas" → "piezas"; "80g" → "80 g"; "$150 mxn mxn" → "$150"; "mxn" se quita de cada precio y queda "Precios en MXN" al pie; "Capuchino / Cortado" → "Capuchino o cortado" (y así en todos los "/"); "Sincronizada Natural ($89 mxn) o Divorciada ($89 mxn) $89" → "Sincronizada, natural o divorciada, $89"; "Gelatina / Flan $30 / $35" y "Jarra Agua / Limonada $140 / $155" se separan en dos renglones cada uno; "Tacos Rojos (Queso $120 mxn / Pollo $155 mxn) Var" → "Tacos rojos de queso $120" y "Tacos rojos de pollo $155".
- **Notas crípticas del original explicadas** (las deducidas, en pendientes):
  - "Var" (tacos rojos) → dos renglones y la nota "Los tacos rojos cambian de precio según el relleno: de queso o de pollo." (sale de su propio texto).
  - "(Refill)" en el café de olla y el americano → "Con refill." y la nota "Con refill: te vuelven a llenar la taza sin costo." (deducido).
  - "Licuado frutas (1-2 ing)" → "Licuado de frutas. De 1 o 2 ingredientes."
  - "Tropical / Paraíso / Mézclalo" → "Tropical, Paraíso o Mézclalo. Combinaciones de la casa: pregunta qué llevan." (el sitio no dice qué llevan).
  - "Micheladas / Preparado / Clamato $25 / $30" → "Michelada: preparado +$25" y "Michelada: con Clamato +$30", con "Se suma al precio de la cerveza." (deducido: el precio es muy bajo para ser la bebida completa).
  - Chilaquiles "Paso 1: La Base / Paso 2: Agrega Proteína / Paso 3: Elige tu Salsa" → "Se arman en tres pasos. Paso 1, la base. Paso 2, agrega proteína: se suma al precio de la base. Paso 3, elige tu salsa."; las proteínas llevan "+" en el precio. En la tarde, "Extras:" → "Extra de cecina +$59", etc.
  - "Tocino (3)" y "Huevos (2)" → "3 piezas" y "2 piezas".
  - "+ Extra granola/amaranto: $7 mxn" (en el sitio va después de los jugos) → "Extra de granola o amaranto: +$7." al final de "Fruta, jugos y licuados".
  - "Ingredientes a elegir: Queso Jamón Espinaca Acelga" → "Ingredientes a elegir: Queso, Jamón, Espinaca, Acelga." Los salmones, camarones y el filete de pescado llevan sus preparaciones escritas como frase ("A la mantequilla, al mojo de ajo o a las finas hierbas.").
  - "Paso 3: Elige tu Salsa. Verde Tomatillo, Roja Jitomate, Mole Dulce…" → "Verde (tomatillo), Roja (jitomate), Mole (dulce), Cacahuate (cremosa), Chipotle (picosita), Suiza (cremosa)."
- **Secciones del menú de la mañana reagrupadas**: "Fruta y Yogurt", "Jugos Frescos" y "Licuados y Cremosos" van juntas como "Fruta, jugos y licuados"; "Jugos Frescos" y "Bebidas Calientes" dejan de ser listas sueltas. En la tarde, "Bebidas y Micheladas" ordena primero cervezas, luego micheladas y aguas.
- **Omelette de claras**: "Ligero y saludable (1 ingrediente)" → "Ligero, con 1 ingrediente." (sin afirmaciones de salud).
- **Favoritos de la casa**: los ocho del inicio (4 de la mañana y 4 de la tarde) con sus textos y precios, en dos columnas con un mosaico de fotos cada una, en lugar de ocho tarjetas iguales (el sitio repetía la foto de los chilaquiles y la de la cecina en las dos columnas). "Chilaquiles c/ Cecina" → "Chilaquiles con cecina".
- **La franja "¡Barbacoa de Borrego!"** del final del inicio y los "Especiales de Fin de Semana" de los menús se juntan en "¿Qué día vienes?" (sábado y domingo) y siguen en los dos menús.
- **"Sé parte de la familia." y el pie**: se juntan en una sección "Visítanos" con dirección, horario, teléfono y WhatsApp y Google Maps. El teléfono del pie, que en el sitio abre WhatsApp aunque parece un número para llamar, aquí es `tel:`; WhatsApp va en su botón.
- **Portada**: la foto de su mesa (chilaquiles con cecina, fruta y jugo sobre el mantel a cuadros) en lugar de la foto de una familia de modelos (ver "Qué se quitó").
- "Est. 2025 • SLP" → "Est. 2025, San Luis Potosí".
- Fotos: 7 copias `.webp` y el logo en negro y blanco (3.03 MB → 0.63 MB) con `rediseno/fotos-web.mjs`; la cecina y el omelette se recortan para quitar las letras de anuncio. Favicon: el suyo (`favicon.ico`), copiado.
- Colores: los de su `tailwind-config.js` (rojo `#B91C1C`; verde `#15803D`, oscurecido a `#166534` para texto) más el negro de su logo, un crema de fonda y el mantel a cuadros de su foto.
- Tipografía: las suyas, Besley (títulos) y Lato (texto), de @fontsource, solo latino (el sitio las pide a Google Fonts).

## Qué se agregó (no existía en el original)

- **Elemento memorable: "¿Qué día vienes?"** (componentes `QueDia`, `PlatoDia` y `BarraDelDia` en `App.tsx`; datos en `dias`, `comidaCorrida`, `especialesFinde` y `barbacoa` de `content.ts`). Un mantel a cuadros rojo y blanco (el de su foto) con siete platos dibujados, uno por día: de lunes a viernes, el plato de la comida corrida (sopa, plato fuerte, agua fresca y postre); sábado y domingo, tacos de barbacoa. El día de hoy (hora de San Luis Potosí, `America/Mexico_City`) dice "Hoy" y viene elegido. Al tocar un día: su horario, una barra de 8:00 a 18:00 con la franja de la comida corrida (13 a 17 h) o la de la barbacoa ("hasta agotar"), la marca "Ahora" si es hoy y están abiertos, y lo que hay ese día con precios (comida corrida $150 y sus cuatro tiempos, o los cuatro especiales de fin de semana). El botón reserva ese día por WhatsApp con la fecha.
  - Textos nuevos: "¿Qué día vienes?"; "Abrimos todos los días, pero cada día tiene lo suyo: entre semana hay comida corrida por la tarde y el fin de semana, barbacoa de borrego hasta que se acaba. Elige tu día y aparta tu mesa."; los días ("Lun"… "Dom", "Hoy"); "Abierto de 8:00 a.m. a 6:00 p.m."; "Comida corrida" y "Barbacoa, hasta agotar" (en la barra); "Ahora"; "Abierto ahora, hasta las 6:00 p.m.", "Hoy abre a las 8:00 a.m.", "Hoy ya cerró; abre mañana a las 8:00 a.m."; "Además, nuestros dos menús: el de la mañana y el de la tarde."; "Comida corrida, $150"; "De 1:00 a 5:00 p.m. Sabor casero diario." (con su "Sabor casero diario"); "Y mañana sábado empieza la barbacoa de borrego." (solo el viernes); "Reservar para hoy" / "Reservar para el (día) (fecha)"; `aria-label` "Días de la semana". En sábado y domingo se usan sus textos "¡Barbacoa de borrego!" y "Sábados y domingos. Auténtica tradición, disponible hasta agotar existencia. ¡Llega temprano!".
  - Mensaje de WhatsApp: "Hola, Gran Familia. Quiero reservar mesa para (hoy) (día) (fecha)." + " Vamos por la barbacoa de borrego." (sábado y domingo) + " Somos __ personas y llegaríamos a las __.". Si hoy ya cerraron, la fecha es la de la semana siguiente.
- **WhatsApp con mensaje prellenado** en todos los botones "Reservar mesa" (el sitio los manda vacíos): "Hola, Gran Familia. Quiero reservar mesa. Somos __ personas, para el día __ a las __." Número: el de su sitio, 52 444 411 5560.
- **Barra fija en el celular**: "Reservar" (WhatsApp), "Llamar" y "Cómo llegar" (Google Maps).
- **Enlace a Google Maps** (el sitio solo tiene el mapa incrustado): búsqueda de "Gran Familia, Av. Vasco de Quiroga 209, Industrial Aviación 1ra Secc, 78140 San Luis Potosí, S.L.P.".
- Datos rápidos en la portada: "Abierto todos los días / De 8:00 a.m. a 6:00 p.m.", "Comida corrida / Lunes a viernes, de 1:00 a 5:00 p.m., $150", "Barbacoa de borrego / Sábados y domingos, hasta agotar existencia" (con sus datos).
- Otros textos nuevos: "Cocina potosina de rancho" (de "Cocina Rancho" de su logo y "Cocina Potosina" de su título); navegación "Favoritos", "¿Qué día vienes?", "Menú", "Visítanos" (suyo); "Reservar mesa" (suyo), "Ver el menú" (de su "VER MENÚ"); "El menú"; "Con todos sus precios. Hay dos: el de la mañana y el de la tarde."; "Menú mañana" y "Menú tarde" (suyos); "Sábados y domingos, hasta agotar existencia." (bajo los especiales); "Lunes a viernes, de 1:00 a 5:00 p.m." (bajo la comida corrida, de su "Disponible Lunes a Viernes (1:00 PM - 5:00 PM)"); las notas del menú de arriba; "Aparta tu mesa por WhatsApp o llámanos."; "Teléfono y WhatsApp"; "Comida corrida: lunes a viernes, de 1:00 a 5:00 p.m."; "Cómo llegar en Google Maps"; "Llamar ahora" (suyo); "Ir al menú" (salto de teclado); `aria-label` "Gran Familia, volver al inicio", "Abrir el menú", "Principal", "Menú del celular", "Menús", "Acciones rápidas", "Llamar a Gran Familia", "Cómo llegar a Gran Familia en Google Maps".
- **JSON-LD** `Restaurant` con una sola dirección (la de su página, Vasco de Quiroga 209), horario, teléfono, cocina, `acceptsReservations`, reserva por WhatsApp y los especiales de fin de semana con precio. El sitio tiene dos JSON-LD que se contradicen (ver `OPORTUNIDADES.md`); no se copian sus coordenadas (dan dos puntos distintos) ni su calificación "4.7 / 150 reseñas" (no se pudo comprobar).
- Title y description nuevos con la dirección, el horario y lo que sirven (el title del sitio no cambia mucho: "Gran Familia | Restaurante Cocina Potosina, Desayunos y Almuerzos en San Luis Potosí"); Open Graph con la foto de la mesa (el sitio no tiene).
- Textos alternativos que describen cada foto (en el sitio son frases para buscadores, como "Chilaquiles tradicionales rojos o verdes Gran Familia San Luis Potosi").
- Accesibilidad: un solo H1 con texto ("Gran Familia"; el del sitio está vacío), contraste AA (texto `#44403c` sobre crema 9.5:1 y sobre maíz 8.4:1; rojo `#b91c1c` sobre crema 6.0:1 y sobre maíz 5.3:1; blanco sobre rojo 6.5:1; verde `#166534` sobre crema 6.6:1 y sobre blanco 7.1:1; crema sobre negro 16:1), pestañas con `role="tab"`, días con `aria-pressed`, ficha con `aria-live`, foco visible y `prefers-reduced-motion` (sin desplazamiento suave ni transiciones; el plato elegido no se mueve).

## Qué se quitó o no se usó

- **Las cuatro reseñas "Historias de Gran Familia"** ("Mariana R.", "Luis M.", "Claudia P.", "Javier T.", todas marcadas "Reseña de Google"): no se pueden comprobar, no enlazan a Google y dos elogian platillos que no están en su menú ("El Asado de Boda es espectacular", "Vengo cada fin de semana por las gorditas"). Parecen textos de ejemplo (ver `OPORTUNIDADES.md`).
- **"4.7 en Google Maps"** del pie: no se pudo comprobar (ver pendientes).
- **La foto de la portada** (`WhatsApp Image 2025-12-13 at 16.24.05_6f16f09-1.jpg`, "Ambiente del Restaurante"): una familia de modelos en un salón que no se parece al de sus demás fotos, con su logo encima; parece de banco.
- **La foto de "Nuestra esencia"** (`WhatsApp Image 2025-12-13 at 16.22.57_3b30f1c9.jpg`): un anuncio con letras ("El desayuno perfecto ¡SÍ EXISTE!") y un plato que parece montaje.
- El mapa de Google incrustado (se cambia por un enlace), la marca de agua del logo sobre la portada, el zoom lento de la foto, las animaciones de entrada, el acercamiento de las fotos al pasar el ratón, el fondo de textura de `transparenttextures.com`, las etiquetas en mayúsculas ("DESCUBRE NUESTROS SABORES", "NUESTRA ESENCIA", "LO QUE DICEN DE NOSOTROS", "SOLO FINES DE SEMANA") y el botón "Ver Precios" (los precios ya están en la página).
- "© 2024": el año del pie se calcula solo.
- Los scripts de terceros: Tailwind y Alpine por CDN, Font Awesome, Google Fonts y la analítica de Cloudflare.

## Qué se conserva al pie de la letra

- "Donde la tradición se sienta a la mesa.", "No somos solo un restaurante, somos el guardián del sazón casero que has buscado. Desayunos y comidas con herencia, servidos con la calidez de familia.", "Dos momentos, el mismo sazón de hogar." y su párrafo, los ocho favoritos con sus textos y precios, "Cocina honesta, ingredientes locales." y sus dos párrafos, "Sé parte de la familia.", "Raíces profundas, cocina viva. Un homenaje a la tradición potosina en cada plato.", "¡Barbacoa de borrego!" y su texto, "Para empezar el día en San Luis Potosí", "Menú de desayunos y almuerzos potosinos", "Sabor casero y tradición", "Menú de comida corrida y antojitos potosinos", "Precios en MXN. Menú sujeto a cambios.", "Bolillo extra: $9.50", "Empaque para llevar: +$15" y "Todos los derechos reservados.".
- De los dos menús: todos los nombres, descripciones, gramajes, opciones y precios.
- Contacto: dirección, horario y el teléfono y WhatsApp +52 444 411 5560.

## Pendiente de confirmar con el cliente

- **Dirección para Google**: su página dice Av. Vasco de Quiroga 209, pero uno de sus dos JSON-LD dice "Av. Venustiano Carranza 1050, Tequisquiapan". ¿Es otra sucursal, una dirección anterior o un error? El rediseño usa Vasco de Quiroga 209 (la de su página y de la marca de agua de sus fotos).
- **Horario de los menús**: ¿a qué hora cambia el menú de la mañana al de la tarde? ¿Se puede pedir del de la mañana por la tarde? El rediseño no lo dice.
- **Barbacoa**: ¿a qué hora empieza a servirse y a qué hora suele acabarse? ¿Se puede apartar por kilo por WhatsApp?
- **Comida corrida**: ¿hay menú del día que se pueda publicar (sopa y plato fuerte)?
- **Notas deducidas del menú**: "refill" sin costo; el preparado ($25) y el Clamato ($30) de las micheladas se suman al precio de la cerveza; "Frutos rojos" ($159) y "Tradicionales" ($120) son hotcakes o waffle como el "Nutella & Fruit"; qué llevan los jugos Tropical, Paraíso y Mézclalo; si el "Extra granola/amaranto $7" es para el plato de fruta o para los jugos; si "Oreo Lovers" es hotcakes o waffle; si "Cerveza Modelo/Negra" es Modelo Especial y Negra Modelo.
- **Precios de los chilaquiles**: en la mañana la base cuesta $125 y la cecina extra $49; en la tarde, $110 y $59 (el pollo $39 contra $49, el jamón $19 contra $29, los huevos $26 contra $36). ¿Es a propósito?
- **"4.7 en Google Maps"** y las cuatro reseñas: ¿de dónde vienen? Mejor enlazar las de su perfil de Google.
- **Fotos**: la de la familia de la portada, ¿es de su restaurante? ¿Tienen fotos del salón, de la fachada, de la barbacoa, de la comida corrida servida y del equipo? Ninguna foto trae metadatos (no hay marca de IA que revisar).
- **Redes y correo**: el sitio no publica ninguno. ¿Tienen Facebook, Instagram o correo para agregar?
- **"Est. 2025"** y "© 2024": ¿en qué año abrieron?

## Dónde está cada cosa

- Textos, contacto, favoritos, esencia y datos de "¿Qué día vienes?": `rediseno/src/data/content.ts`
- Los dos menús completos (nombres, descripciones, precios y notas): `rediseno/src/data/carta.ts`
- Diseño, "¿Qué día vienes?" (`QueDia`, `PlatoDia`, `BarraDelDia`, `ahoraSLP()`), el menú en pestañas (`MenuCompleto`, `Linea`) y los mensajes de WhatsApp: `rediseno/src/App.tsx`
- Colores, fuentes, el mantel (`.mantel`) y los puntos del menú (`.puntos`): `rediseno/src/index.css`
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/assets/img/` (sin tocar); copias `.webp`, el logo y el favicon en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`.
- No se tomó ningún texto con curl: las tres páginas están completas en `investigacion/crudo.json`. El curl del 2026-09-27 (descargas en una carpeta temporal del sistema, fuera del estudio) solo sirvió para comprobar que el sitio sigue igual, leer sus colores en `/assets/js/tailwind-config.js` y revisar los hallazgos de `OPORTUNIDADES.md`.
- Capturas para comparar: `referencias/capturas-2026-09-27/` (se generan con `node herramientas/guardar-capturas.mjs 463-granfamilia` después del QA).
