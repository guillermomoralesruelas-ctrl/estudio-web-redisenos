# Cafessia - Coffee & Lunch: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://cafessia.com/ (una sola página en HTML y CSS; su botón "Ordena aquí" abre su menú de pedidos en línea en Coffeeshop CRM de maikodev) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/133-cafessiacoffeelunch/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-26/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 133-cafessiacoffeelunch`) |

**Negocio:** Cafessia ("Coffee & Lunch"; "Cafessia coffee to go" en sus vasos y en Google Maps), café para llevar con terraza en Calz. de los Ángeles 13B, Llano Verde, 83247 Hermosillo, Sonora. Lunes a viernes de 7:30 am a 1:30 pm. Cafés calientes y fríos, tisanas, limonada, desayunos con papitas chips, combos y postres. Pedidos en línea para recoger y por WhatsApp.

## En una línea

Mismo negocio, mismos textos, fotos y datos de contacto; cambia la forma: el menú completo con los dos tamaños explicados, sus opciones de leche, jarabes y extras a la vista, "Arma tu vaso" (eliges tu bebida y ves el vaso, el ticket y el total, y lo pides en línea o por WhatsApp), si están abiertos hoy, y datos para Google que el sitio no tenía.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 19 de 19 imágenes rotas en escritorio y en móvil: el HTML pide `assets/images/…` pero el clon las guardó en `sitio/assets/assets/images/` | 0 imágenes rotas; 14 copias `.webp` de fotos del clon en `assets/web/` |
| La hoja de estilos `assets/css/styles.css` no carga (misma ruta equivocada) y falta `assets/js/main.js`: la página sale sin diseño | Sitio nuevo con sus estilos propios; sin scripts externos |
| 20 errores de consola y 19 recursos fallidos en escritorio (18 y 18 en móvil) | 0 errores y 0 recursos fallidos |
| 0 H1 (tampoco hay H1 en el sitio en línea: la portada es solo el logo) | Un H1: "Good coffee, for happy souls" |
| Faltan fotos de los combos, del capuccino frío y de la Coca-Cola light (no existen en el sitio) | Esos renglones van sin foto (ver pendientes) |

## Qué se cambió (mismo contenido, otra forma)

- **El menú** pasa de tarjetas con una foto por producto a una lista de precios con línea punteada, en seis grupos (Combos, Café caliente, Café frío, Bebidas, Alimentos y Postres), con fotos agrupadas por sección.
- **Nota críptica explicada:** el sitio escribe "Caliente $50 - $60" sin decir por qué hay dos precios; su pedido en línea dice que son **Mediano (12 oz) y Grande (16 oz)**. El rediseño lo escribe: "Dos precios: Mediano (12 oz) y Grande (16 oz)", y los precios van como "$50 / $60". En la tisana caliente, que solo está en el sitio, "$60 - $70" se deja con "Según el tamaño." (deducido, ver pendientes). "(mezcla ya viene azucarada)" pasa a "La mezcla de chai ya viene endulzada."; "tortilla sobaquera" se explica: "(la tortilla de harina grande y delgada de Sonora)"; "Cold Foam (Del sabor de jarabe seleccionado)" pasa a "Cold foam (espuma fría del sabor del jarabe que elijas)".
- **Precios y descripciones del pedido en línea:** el sitio no describe los productos; su pedido en línea sí. Se usan sus descripciones y **sus precios del pedido en línea, que es donde se cobra**. Seis no coinciden con el sitio (ver pendientes). Lo que solo está en el sitio (capuccino frío, tisana caliente, galletas de chocolate) se conserva con el precio del sitio y "No está en el pedido en línea: pregúntanos por WhatsApp."
- "Refresco (lata) $40" pasa a "Coca-Cola o Coca-Cola light en lata $30", como en su pedido en línea.
- "Tizana" por "Tisana"; erratas de su pedido en línea corregidas: "aromaticas", "azucar", "expresso", "acompanado", "envielto", "chedar", "jamon", "Svetia" (Stevia). Los nombres de los combos se escriben "Latte frío y morning burrito" en vez de "Latte frio + morning burrito".
- Horario, dirección y WhatsApp, que están al fondo, pasan también a la portada (si abren hoy, según la hora de Hermosillo) y a "Ven a visitarnos".
- La foto doble de su local (`hero-bg1.jpg`, dos fotos unidas por una curva blanca) se parte en sus dos mitades: la ventanita (portada) y la terraza (Visítanos).
- Fotos: 14 copias `.webp` (11.96 MB → 0.35 MB) con `rediseno/fotos-web.mjs`; el clon no se tocó.
- Colores: el naranja `#e6661f` y el olivo `#9e8c18` de su logo y su CSS, su café oscuro `#2a2118` y su rosa `#f7bcb2`; se agregaron un naranja oscuro y un olivo oscuro para que el texto cumpla contraste AA, y el blanco del vaso como fondo.
- Tipografía: Playfair Display y DM Sans, las de su sitio, servidas con @fontsource (solo latino) en vez de Google Fonts.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "Arma tu vaso"** (componentes `ArmaTuVaso`, `DibujoVaso` y `capas()` en `App.tsx`; datos en `bebidas`, `leches`, `lechesAmericano`, `jarabes`, `endulzantes` y `extras` de `content.ts`). Eliges la bebida (Americano, Capuccino, Latte, Chai latte o Dirty chai), caliente o frío, el tamaño en caliente, y solo las opciones que su pedido en línea permite para esa bebida (leche, hasta 5 jarabes, endulzante, shot extra, cold foam). Se dibuja su vaso en corte, el de papel con la etiqueta naranja o el transparente con hielo, y se llena por capas (espresso, agua, leche, chai, jarabe, espuma, cold foam; dibujo ilustrativo, no la receta). Un ticket rosa suma cada renglón con sus precios del pedido en línea. Botones "Ordena aquí" (su pedido en línea) y "Pedir por WhatsApp" con el vaso escrito. El capuccino frío, que no está en el pedido en línea, se ofrece por WhatsApp.
  - Textos nuevos: "Arma tu vaso"; "Elige tu bebida, el tamaño, la leche y lo que le quieras agregar. Te decimos cuánto sale y lo pides en línea o por WhatsApp."; "¿Qué se te antoja?", "¿Caliente o frío?", "Caliente", "Frío", "Mediano, 12 oz", "Grande, 16 oz", "En frío hay un solo tamaño.", "Leche", "(si le quieres poner)", "Sin leche", "Jarabe", "+$10 cada uno, hasta 5.", "Endulzante", "Extras", "Cold foam: espuma fría del sabor del jarabe que elijas.", "El capuccino frío ($70) no está en el pedido en línea: pídelo por WhatsApp.", "Dibujo ilustrativo.", "Tu vaso", "sin costo", "Total", "Pedir por WhatsApp", "En el pedido en línea eliges lo mismo y lo mandas por WhatsApp." (de la descripción de su pedido en línea: "realiza tu pedido directamente por WhatsApp"); `aria-label` del dibujo ("Dibujo de tu vaso (frío/caliente) (grande/mediano), de abajo hacia arriba: …").
  - Mensaje de WhatsApp: "Hola, les escribo desde su sitio web. Quiero pedir: (bebida y opciones con precio). Total aprox.: $X."
- **Datos tomados con curl el 2026-09-26** (descargas en una carpeta temporal del sistema, fuera del estudio): su menú de pedidos en línea en JSON (`https://coffeeshop-api.maikodev.com/menus/public/cafessia`: descripciones, precios por tamaño, leches, jarabes, endulzantes, extras, combos, horario de pedidos y WhatsApp de pedidos) y las coordenadas de su enlace de Google Maps (29.0826085, -110.9956292, ficha "Cafessia - Coffee to go").
- **Combos** (solo estaban en el pedido en línea): Latte frío y morning burrito $150, Latte frío y muffin de huevito $120, Latte frío y croissant $130.
- **"Personaliza tu bebida"**: leches, jarabes, endulzantes y extras con precio, en frases (del pedido en línea).
- **¿Abren hoy?** En la portada y en Visítanos, según la hora de Hermosillo: "Abierto ahora, hasta la 1:30 pm.", "Hoy abrimos a las 7:30 am.", "Ya cerramos por hoy. Mañana abrimos a las 7:30 am.", "Cerramos el fin de semana. El lunes abrimos a las 7:30 am.", "Hoy domingo cerramos. Mañana lunes abrimos a las 7:30 am."
- **WhatsApp al 52 662 291 5226** (el del sitio) con mensajes prellenados: general "Hola, les escribo desde su sitio web. Quiero hacer un pedido."; productos que no están en línea "… ¿Hoy tienen (producto)?"; y el de "Arma tu vaso".
- **Llamar** (barra del celular) al mismo número, `tel:+526622915226`: el sitio no publica otro teléfono (pendiente).
- Barra fija en el celular: Ordena aquí, WhatsApp, Llamar y Cómo llegar.
- Otros textos nuevos: "Coffee & Lunch, Hermosillo"; "Café de calidad y desayunos para llevar o para quedarte en la terraza, en Calz. de los Ángeles 13B, Llano Verde." (armada con su cinta "Café de Calidad, Desayunos, Ambiente Único", "coffee to go" de sus vasos y la terraza de sus fotos); navegación "Arma tu vaso", "Menú", "Visítanos"; "Ordena aquí" en el encabezado; títulos "Combos", "Café caliente", "Café frío", "Personaliza tu bebida"; "Dos precios: Mediano (12 oz) y Grande (16 oz)."; "Todos vienen con papitas chips. Agrégale huevo extra (+$10), tocino extra (+$20) o queso cheddar extra (+$10)."; "Según el tamaño."; "No está en el pedido en línea: pregúntanos por WhatsApp."; "Ven a visitarnos" y "Y disfruta de un café inolvidable." (su subtítulo partido en dos); "Dirección", "Horario", "WhatsApp", "Instagram", "Abrir en Google Maps" (del sitio), "Escríbenos"; "La terraza de Cafessia, en Llano Verde. Toca la foto para ver cómo llegar."; `aria-label` "Cafessia, volver al inicio", "Escribir a Cafessia por WhatsApp", "Llamar a Cafessia", "Cómo llegar a Cafessia en Google Maps", "Abrir Cafessia en Google Maps"; "Ir a Arma tu vaso" (salto de teclado).
- JSON-LD `CafeOrCoffeeShop` con datos reales: nombre y nombres alternos, lema, dirección, coordenadas, horario, teléfono (el del WhatsApp), menú y pedido en línea, Instagram. El sitio no tiene JSON-LD.
- Title y description (el sitio no tiene description ni Open Graph), Open Graph con la foto del latte, `lang="es-MX"`, favicon con la "C" de su logo (`icono.png`, generado por `fotos-web.mjs`).
- Textos alternativos descriptivos en todas las fotos (en el sitio son solo el nombre del producto).
- Accesibilidad: un solo H1, contraste AA (texto `#5a4a3c` sobre blanco 8.3:1 y sobre crema 7.2:1; naranja oscuro `#a8440e` sobre blanco 5.9:1 y sobre crema 5.1:1; blanco sobre naranja oscuro 6.0:1; crema sobre olivo 7.5:1; café sobre naranja 4.7:1; café sobre rosa 9.6:1), botones con `aria-pressed`, el ticket con `aria-live`, foco visible y `prefers-reduced-motion` (sin desplazamiento suave ni transiciones; el vaso cambia sin animación).

## Qué se quitó o no se usó

- La cinta en movimiento "Café de Calidad ● Desayunos ● Ambiente Único ● Hermosillo, Sonora" (sus palabras se usan en la frase de la portada), la numeración 01/02/03, el indicador "Scroll", las formas decorativas y las animaciones de entrada.
- El icono de WhatsApp del botón "Ordena aquí" (ese botón abre el pedido en línea, no WhatsApp).
- Google Analytics (`gtag`) y el script comentado del chatbot: sin scripts de terceros.
- Fotos del clon sin usar: `galleta.png` (parece de banco: no hay nada de Cafessia en ella), `refresco.jpeg` (foto de producto de Coca-Cola) y `map.png` (captura de Google Maps; se enlaza Maps con la foto de la terraza). `americano.png` y `chai-latte.png` no se usan en la página (sí `latte.png` para Open Graph).

## Qué se conserva al pie de la letra

- "Coffee & Lunch", "Good coffee, for happy souls", "Good vibes start with good coffee", "Nuestro menú", "Descubre nuestra variedad de cafés y delicias", "Ordena aquí", "¿Tienes preguntas? Estamos para atenderte", "Abrir en Google Maps", "© (año) Cafessia. Todos los derechos reservados."
- Nombres de productos y los precios que coinciden entre el sitio y el pedido en línea (americano, latte, chai latte, americano frío, latte frío, chai latte frío, tisana fría, limonada, croissant, morning burrito, banana crumble).
- Contacto: Calz. de los Ángeles 13B, Llano Verde, 83247 Hermosillo, Son.; lunes a viernes de 7:30 am a 1:30 pm; WhatsApp 662 291 5226; Instagram @cafessia.hmo; su enlace de Google Maps.

## Pendiente de confirmar con el cliente

- **Precios distintos entre el sitio y el pedido en línea** (el rediseño usa los del pedido en línea): capuccino caliente $60/$70 en el sitio contra $55/$65; dirty chai caliente $70/$80 contra $65/$75; dirty chai frío $80 contra $75; muffin de huevito $55 contra $65; refresco en lata $40 contra Coca-Cola $30. ¿Cuáles son los vigentes?
- **Solo en el sitio:** capuccino frío ($70), tisana caliente ($60 - $70; que sean dos tamaños es deducido) y galletas de chocolate ($25). ¿Siguen a la venta? **Solo en el pedido en línea:** los tres combos y la Coca-Cola light.
- **Tamaño en frío:** los combos dicen que el latte frío es de 16 oz; no se sabe si todos los fríos lo son. El rediseño solo dice "En frío hay un solo tamaño."
- **Fotos retocadas con IA:** los metadatos de 10 fotos de producto dicen "Edited with Google AI" (composición con IA) y llevan la estrellita de Gemini en la esquina. Confirmar que muestran sus productos tal como se sirven; si tienen fotos sin retocar, mejor.
- **Fotos que faltan:** combos, capuccino frío, Coca-Cola light, galletas (la del sitio parece de banco).
- **Llamadas:** la barra del celular llama al número del WhatsApp; confirmar que contestan llamadas.
- **Código "DEMO":** su pedido en línea tiene activo un descuento de prueba del 10 % en todo (ver `OPORTUNIDADES.md`); si lo quitan, no cambia nada del rediseño.
- La frase de la portada ("para llevar o para quedarte en la terraza") es nuestra; confirmar que la terraza es para clientes.

## Dónde está cada cosa

- Textos, contacto, fotos, menú y opciones de "Arma tu vaso": `rediseno/src/data/content.ts`
- Diseño, "Arma tu vaso" (`ArmaTuVaso`, `DibujoVaso`, `capas()`) y "¿abren hoy?" (`estadoHoy`): `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y `@font-face`)
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/assets/images/` (sin tocar); copias `.webp` y el favicon en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`.
- Capturas para comparar: `referencias/capturas-2026-09-26/` (se generan con `node herramientas/guardar-capturas.mjs 133-cafessiacoffeelunch` después del QA).
