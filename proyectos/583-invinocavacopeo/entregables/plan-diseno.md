# Invino Cava & Copeo: plan de rediseño (método 1.1)

**Sitio original:** https://invino.com.mx/ (tienda en línea de Shopify, "Invinomx": inicio, tienda por tipo, país, precio, "mood" y regalos, /pages/winebar, /pages/cata-winebar, /pages/cata-online, /pages/vino-historias, blog y políticas).
**Materia prima:** clon en `../sitio/` (28 imágenes en `sitio/assets/cdn/shop/`), textos de cinco páginas en `investigacion/crudo.json` (inicio, todos los productos, vino tinto, vino blanco y vino rosado), redes en `investigacion/resumen.json`.
**Textos que no están en `crudo.json`** (tomados del sitio real con curl el 2026-09-26; las descargas se guardaron en una carpeta temporal del sistema, fuera del estudio):
- `/pages/winebar`: "Una experiencia única con vino sin pretenciones", "Somos un wine & coffee bar", la dirección (Río Tamazunchale #305-A, Del Valle, 66220, San Pedro Garza García), "más de 100 etiquetas por copa y por botella", el enlace de OpenTable de su botón "Reserva tu mesa" (`https://www.opentable.com.mx/restref/client/?rid=1432354`), el texto de Star Wine List y "Renta nuestro winebar… Contáctanos 81-1018-3565".
- `/pages/cata-winebar`: la cata presencial, la Cata a ciegas ($990, 30 de septiembre de 2026, 8:00 pm), sus preguntas frecuentes (donde dice "Escríbenos a nuestro whatsapp… 81-1018-3565") y el certificado.
- `/pages/cata-online`: la Cata en Línea ($6,000), cómo funciona, qué incluye y sus preguntas frecuentes.
- `/pages/vino-historias`: David Zárate (fundador, sommelier WSET nivel 3, juez del Concurso Mundial de Bruselas) y la consultoría Vinohistorias.
- `/products.json` (el catálogo público de la tienda): la ficha de cada vino (uva, región, crianza, maridaje, vista, nariz y boca), su precio y si está disponible; la Etiqueta Premium Personalizada, los seis paquetes de regalo y la Gift Card. Lo necesario se guardó en `rediseno/src/data/vinos.json` y `content.ts`.
- La configuración pública del botón flotante de WhatsApp del sitio (`/apps/sc/setting.php`, la misma que lee el botón): "Tanino, Atención al Cliente", número 52 1 81 2602 0119. **No se usa como número principal** (ver abajo).
No se descargó ninguna imagen nueva.

**Rubro:** vinoteca, importadora y wine bar ("wine & coffee bar") en Centrito Valle, San Pedro Garza García, Nuevo León (zona metropolitana de Monterrey). Vende vino en línea con envío a todo México, organiza catas presenciales y en línea, personaliza botellas, arma paquetes de regalo y ofrece consultoría de vino con su fundador, David Zárate. Está en la guía Star Wine List. No es una cadena ni un directorio: sitio propio con fotos propias (el winebar con su letrero de neón, el bartender, las copas, las cajas de regalo, el cartel de su cata) y fotos de sus botellas.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 6,268 px de alto, desborde 0, 1 H1 (el logo), 31 imágenes y **27 rotas** (el logo, el banner del inicio, el bartender, las botellas y las portadas del blog piden `&width=…` que no existen en local), **51 errores de consola** (CORS de `theme.js` y de las fuentes del tema) y **23 recursos fallidos** (píxeles de Shopify, `graphql.json`, `monorail`, Shop Pay, un CSS en base64). Móvil: 6,892 px, 27 rotas, 52 errores, 24 fallidos.
- A ojo: el clon sale casi en blanco, con los textos del tema sin estilo, sin fotos ni logo, los carruseles sin moverse y el botón de WhatsApp sin cargar.
- Fotos: 21 copias `.webp` (11.71 MB → 0.56 MB) con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca. **Faltan en el clon**: las fotos de la página del winebar (`Invino_winebar2.jpg`, `Invino_Winebar_exterior.jpg`, `star_wine_list_invino.jpg`), la de la cata presencial (`Cata_Invino_Winebar.jpg`), la de la cata en línea, el certificado, la foto de David Zárate y las de los paquetes de regalo. No se descargan (regla del método) y se anota como pendiente.

## Qué tiene que lograr el sitio
1. **Traer gente al winebar:** dónde está, qué es ("wine & coffee bar", más de 100 etiquetas por copa y por botella, sin protocolos), reservar mesa en OpenTable (que ya usan) y cómo llegar.
2. **Vender las catas:** la próxima Cata a ciegas con fecha, precio y cupo; la Cata en Línea con lo que incluye; y la cata privada para grupos por WhatsApp.
3. **Vender vino en línea sin frustrar:** hoy 10 de los 14 vinos de la tienda están agotados y el inicio los muestra igual. El rediseño enseña cada vino con su ficha, dice con honestidad si está disponible en línea y, si no, ofrece preguntar por WhatsApp.
4. Regalos (botella con etiqueta personalizada, paquetes y Gift Card) y la consultoría para negocios, sin tener que abrir cinco páginas.

Público: gente de San Pedro y Monterrey que busca un lugar tranquilo para tomar una copa o un café, quien viaja y consulta Star Wine List, quien quiere regalar vino, y restaurantes, hoteles y marcas que necesitan asesoría.

## Dirección visual
El negro del winebar y el amarillo de su letrero de neón y de su isotipo (el sacacorchos de la "Ö"), el vino tinto oscuro de uno de los esquemas de su tema y el blanco de su logo. Página mayormente oscura, como el bar de noche; los bloques de la tienda y los regalos en claro, como una etiqueta.

| Token | Color | Uso |
|---|---|---|
| `noche` | `#1c1c1c` | Fondo de la portada, el winebar y el pie; texto fuerte sobre claro (el `28 28 28` de su tema) |
| `vino` | `#4b1816` | Bloque de las catas y "¿Qué vas a servir?" (el `--background: 75 24 22` de su tema) |
| `oro` | `#d1a000` | Su amarillo (`--background: 209 160 0` y el isotipo): botones con texto negro (7.1:1; 6.1:1 sobre `vino`) y detalles sobre negro y vino |
| `oro-oscuro` | `#7a5d00` | Precios y enlaces sobre claro (6.2:1 sobre blanco, 5.3:1 sobre `papel`) |
| `papel` | `#f0eeea` | Fondo de los bloques claros (el `239 239 239` de su tema, un poco más cálido, como el papel de una etiqueta) |
| `texto` | `#3a3632` | Texto normal sobre claro (10.3:1 sobre `papel`) |

**Tipografía:** las de su tema: **Instrument Sans** (títulos; `--heading-font-family`) variable con ejes de peso y ancho, de `@fontsource-variable/instrument-sans`, y **Nunito** 400, 600 y 700 (texto; `--text-font-family`), de `@fontsource/nunito`; solo el subconjunto latino. Los títulos van en Instrument Sans condensada (ancho 75 %) y seminegra, en tipo oración, que recuerda las letras altas y angostas de su logo.

## Elemento memorable: "¿Qué vas a servir?"
Cada vino de su tienda trae una ficha de cata completa, escrita por ellos: **uva, región, crianza, maridaje, vista, nariz y boca**. Pero en la tienda esa ficha está escondida dentro de cada producto y el maridaje no sirve para buscar. Y su propio menú de la tienda ya piensa en ocasiones ("Mood": Aniversario, Netflix & Chill, Cena con amigos).

El elemento da la vuelta a la pregunta: **primero dices qué vas a servir** (pescados y mariscos, ceviche, ensaladas, quesos, embutidos, carnes rojas, pastas, guisos y moles, comida asiática, postres o nada, solo la copa) y aparecen **los vinos de su tienda cuyo maridaje lo menciona**, como una fila de botellas (sus fotos). Al elegir una botella, **se dibuja una copa que se llena con el color de ese vino**, tomado de su nota "Vista" (rojo rubí, rojo picota, púrpura, rosa pálido con reflejos salmón, amarillo brillante; con burbujas en los espumosos), y junto a ella la ficha: uva, región, crianza, nariz, boca y, subrayado, el maridaje tal como lo escriben. Abajo, el precio y **si está disponible en la tienda en línea**: si sí, "Comprar en la tienda" abre esa botella en su Shopify; si no, lo dice ("Agotado en la tienda en línea") y "Preguntar por WhatsApp" manda "Voy a servir (platillo). Me interesa el (vino). ¿Lo tienen o me recomiendan uno parecido?".

Sale del negocio, no es un adorno: son sus 13 vinos con sus fichas, sus precios y su disponibilidad reales. El color de la copa es una interpretación de su nota "Vista" y se dice así en el sitio. No se inventa ningún maridaje: si la ficha no lo menciona, el vino no aparece (el Tierra Maria 4C no trae maridaje, así que no aparece). Una sola cosa se mueve: la copa que se llena, y se queda quieta con `prefers-reduced-motion`.

## Estructura
1. Cinta: "Envío gratis a todo México en compras mayores a $1,299 MXN" (del sitio).
2. Encabezado negro con el logo blanco, navegación (Winebar, Catas, ¿Qué vas a servir?, Regalos, Visítanos) y "Reservar mesa" (OpenTable).
3. Portada: la foto del bartender bajo el letrero de neón, H1 "Una experiencia única con vino sin pretensiones", "Somos un wine & coffee bar en San Pedro Garza García…", botones "Reservar mesa" y "Escríbenos por WhatsApp", y la dirección.
4. El winebar: "Donde el vino se disfruta sin reglas" (su texto), más de 100 etiquetas por copa y por botella, la foto con el distintivo de Star Wine List y su texto, las tres citas de la prensa (Star Wine List, Jancis Robinson, Buena Mesa Reforma) y "Renta nuestro winebar".
5. Catas (bloque vino): "Hay experiencias que se viven mejor en persona", la próxima Cata a ciegas con su cartel, precio, fecha y "Comprar mi lugar"; la Cata en Línea con lo que incluye y cómo funciona en tres pasos (es una secuencia real); cata privada para grupos por WhatsApp; el certificado y sus preguntas frecuentes.
6. **¿Qué vas a servir?** (elemento memorable, también es el catálogo de vinos).
7. Regalos (claro): la botella con etiqueta personalizada (ocasiones, dorado o plateado, $450, 3 a 4 días hábiles), los seis paquetes de regalo con lo que incluye cada uno en lista con precio, y la Gift Card.
8. Vinohistorias: David Zárate y la consultoría para negocios (comunicación y contenido, experiencias y catas, consultoría para restaurantes y hoteles), en texto; su foto no está en el clon.
9. Visítanos (negro): dirección, "vino y café durante todo el día", OpenTable, WhatsApp, teléfono, Google Maps, Instagram y Facebook; la foto de la barra enlaza a Maps.
10. Pie con el logo, "Somos Invino", políticas de la tienda y la leyenda de consumo responsable; barra fija en el celular (Reservar, WhatsApp, Llamar y Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Primera versión del plan: portada con "Lo mejor del vino en un solo lugar" y una fila de tarjetas de producto iguales con botón "Añadir a la cesta", como cualquier tienda de Shopify. Se cambió: la tienda casi no tiene existencias, así que el catálogo vive dentro del elemento memorable, por maridaje, y la portada abre con el bar, que es lo que los distingue (Star Wine List).
- Sin etiquetas pequeñas en mayúsculas sobre cada título (su sitio usa "SOMOS INVINO", "BEST SELLERS", "SUSCRÍBETE", "conoce nuestro winebar"): los títulos van solos y en tipo oración. Sin numeración 01/02: solo los tres pasos de la cata en línea, que sí son una secuencia. Sin puntos medios de adorno.
- Sin carruseles ("Ir al artículo 1, 2, 3"), sin pestañas de "Vinos por país" con países vacíos, sin fila de tarjetas idénticas: los paquetes de regalo van en lista con precio, como una carta.
- Sin degradados de moda ni brillos: el amarillo se usa como en su letrero, en pocas cosas.
- Nada que invite a beber de más: ni "happy hour", ni "barra libre", ni conteo de copas; se agrega la leyenda de consumo responsable al pie.
- No se inventan horarios, precios, existencias, reseñas ni fotos: las citas de prensa son las de su inicio, con su autor; el horario no está publicado y queda pendiente.
- Sin widget de OpenTable, sin botón flotante de WhatsApp de terceros, sin newsletter, sin mapa incrustado y sin scripts de terceros: OpenTable, la tienda, Maps y WhatsApp se enlazan.
