# Cafessia: plan de rediseño (método 1.1)

**Sitio original:** https://cafessia.com/ (sitio de una página, HTML y CSS a mano: portada con el logo, cinta "Café de Calidad ● Desayunos ● Ambiente Único ● Hermosillo, Sonora", menú en tarjetas con foto, frase "Good vibes start with good coffee", ubicación, contacto y pie). Su botón "Ordena aquí" abre su menú de pedidos en línea (Coffeeshop CRM de maikodev: `https://coffeeshop-api.maikodev.com/menus/public/cafessia/og`, que redirige a `https://coffeeshop.maikodev.com/cafessia`).
**Materia prima:** clon en `../sitio/` (18 imágenes en `sitio/assets/assets/images/`), textos del inicio en `investigacion/crudo.json` (solo trae esa página; el sitio no tiene otras), contacto y redes en `investigacion/resumen.json`.
**Datos que no están en `crudo.json`** (tomados con curl el 2026-09-26; las descargas se guardaron en una carpeta temporal del sistema, fuera del estudio):
- Su **menú de pedidos en línea**, en JSON (`https://coffeeshop-api.maikodev.com/menus/public/cafessia`, el que lee la página "Ordena aquí"): productos con descripción, precio por tamaño (Mediano 12 oz y Grande 16 oz), tipos de leche, jarabes, endulzantes y extras con su precio, los tres combos, el horario de pedidos (lunes a viernes de 7:30 a 13:30) y el WhatsApp que recibe los pedidos (+52 1 662 291 5226, el mismo del sitio).
- Las coordenadas de su enlace de Google Maps (`maps.app.goo.gl/vPdW7JZEA6pBkCgs8` abre la ficha "Cafessia - Coffee to go" en 29.0826085, -110.9956292).
- `https://cafessia.com/` responde igual que `investigacion/original.html` (sin cambios desde la captura).
No se descargó ninguna imagen nueva.

**Rubro:** café para llevar ("Cafessia coffee to go" en sus vasos y en Google Maps) con desayunos ligeros, en una ventanita con terraza en Calz. de los Ángeles 13B, Llano Verde, Hermosillo, Sonora. Abre de lunes a viernes de 7:30 am a 1:30 pm. Toma pedidos en línea para recoger y por WhatsApp. No es una cadena ni un directorio: un solo local, con fotos propias de sus vasos (con su logo), sus platos y su local.

**Sobre las fotos:** los metadatos de 10 de sus fotos de producto (americano, capuccino, latte, chai, dirty chai, tisana, limonada, croissant, burrito y muffin) dicen `Edited with Google AI` (`compositeWithTrainedAlgorithmicMedia`): son fotos de sus vasos y platos reales, retocadas con IA de Google (llevan la estrellita ✦ de Gemini en la esquina). Se usan porque son las que el negocio publica de sus productos y se anota como pendiente. No se usan `galleta.png` (parece foto de banco: no hay nada de Cafessia en ella), `refresco.jpeg` (foto de producto de Coca-Cola) ni `map.png` (captura de Google Maps).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 2,701 px de alto, desborde 0, **19 de 19 imágenes rotas**, **0 H1**, 20 errores de consola y 19 recursos fallidos. Móvil: 2,737 px, 19 rotas, 18 errores y 18 fallidos.
- Causa: el HTML pide `assets/images/…` y `assets/css/styles.css`, pero el clon los guardó en `sitio/assets/assets/…`; tampoco trae `assets/js/main.js` (las animaciones de entrada). La página sale sin estilos y sin ninguna foto.
- Fotos: sí están las 18. Se hacen 14 copias `.webp` (11.96 MB → 0.35 MB, la foto doble del local se parte en sus dos mitades) con `rediseno/fotos-web.mjs` en `assets/web/`, más el favicon con la "C" de su logo; el clon no se toca. **Faltan** fotos de los combos, del capuccino frío y de la Coca-Cola light: no se descargan (regla del método).

## Qué tiene que lograr el sitio
1. **Pedir el café como lo quieres** (tamaño, leche, jarabe, shot extra) y saber cuánto sale antes de pedir; luego mandarlo por su pedido en línea o por WhatsApp.
2. **Ver el menú completo con precios claros**: hoy dice "Caliente $50 - $60" sin explicar que son dos tamaños, y no dice qué leches, jarabes ni combos tienen.
3. Saber **si están abiertos hoy** (solo abren entre semana, en la mañana), dónde están y cómo llegar.

Público: gente que pasa por Llano Verde y el poniente de Hermosillo camino al trabajo o a la escuela, que quiere un café y algo de desayunar rápido, para llevar o en la terraza.

## Dirección visual (primera pasada)
Los colores de su logo y de su local: el naranja de la etiqueta de sus vasos (`#e6661f`, su `--color-primary`), el verde olivo de la palabra "cafe" (`#9e8c18`, su `--color-secondary`), el blanco del vaso de papel, el rosa pálido de su CSS (`#f7bcb2`) y el café oscuro de su texto (`#2a2118`). En la terraza hay sillas amarillas y verdes y listones de madera.

| Token | Color | Uso |
|---|---|---|
| `vaso` | `#fffdf9` | Fondo general: el blanco del vaso de papel |
| `crema` | `#f4ece2` | Bloques alternos (menú) |
| `cafe` | `#2a2118` | Títulos y texto fuerte (su `--color-dark`) |
| `texto` | `#5a4a3c` | Texto normal (7.9:1 sobre vaso, 6.8:1 sobre crema) |
| `naranja` | `#e6661f` | Su naranja como campo: la portada y la etiqueta del vaso; encima va texto café (4.7:1, solo en tamaños grandes) |
| `naranja-oscuro` | `#a8440e` | Precios, enlaces y botones con texto blanco (≥ 4.5:1) |
| `olivo` | `#5f5410` | Su verde olivo oscurecido: fondo de "Arma tu vaso" (texto crema 7.6:1) |
| `olivo-claro` | `#c4b53a` | Su `--color-secondary-light`: detalles sobre el olivo |
| `rosa` | `#f7bcb2` | Su acento: el ticket de "Tu vaso" |

**Tipografía:** las de su sitio, **Playfair Display** (títulos) y **DM Sans** (texto), de @fontsource, solo el subconjunto latino.

## Revisión contra lo genérico (segunda pasada)
- Su marca cae justo en el "default" de fondo crema, serif de alto contraste y acento terracota. Se corrige sin traicionar la marca: el fondo general es el **blanco del vaso** (no crema), el naranja se usa **como campo completo** en la portada (como la etiqueta de sus vasos) y no como acento de una palabra, y el bloque del elemento memorable va en su **verde olivo**, el segundo color del logo, que casi no se ve en su sitio actual.
- Playfair solo en títulos, en cursiva la frase de la portada (su "Good coffee, for happy souls" ya va así en su sitio); DM Sans para todo lo demás.
- Se quitan la numeración 01/02/03 de las secciones, la cinta con puntos "●", el indicador "Scroll", las animaciones de entrada en cada sección y las filas de tarjetas idénticas con foto: el menú es una lista de precios con fotos agrupadas.
- Sin etiquetas en mayúsculas ("Dirección", "Horario" van en tipo oración), sin flechas "→" en los botones, sin degradados.
- Una sola cosa se mueve: el vaso que se llena al elegir; queda quieto con `prefers-reduced-motion`.

## Elemento memorable: "Arma tu vaso"
Su menú de pedidos en línea tiene todo para personalizar el café (dos tamaños, cinco leches, trece jarabes, endulzantes, shot extra y cold foam, cada uno con su precio), pero su sitio solo dice "Caliente $50 - $60". El elemento lo convierte en un vaso que se arma frente a ti:

1. **¿Qué se te antoja?** Americano, Capuccino, Latte, Chai latte o Dirty chai, y **caliente o frío**.
2. **Tamaño** (en caliente): Mediano 12 oz o Grande 16 oz. El dibujo del vaso cambia de alto.
3. **Leche**, **jarabes** (hasta 5), **endulzante** y **extras**, solo los que ese producto permite en su pedido en línea, con su precio.
4. **El vaso**: su vaso blanco de papel con la etiqueta naranja (caliente) o el vaso transparente con hielo (frío), dibujado en corte, con capas que se llenan según lo que elegiste: espresso, agua, leche (cada leche con su tono), chai, jarabe, espuma, shot extra o cold foam. Es un dibujo ilustrativo, no la receta exacta.
5. **Tu vaso**: un ticket rosa con cada renglón y su precio, el total, y dos botones: "Ordena aquí" (su pedido en línea, donde eliges lo mismo y lo mandas) y "Pedir por WhatsApp" con el vaso escrito.

Sale del negocio, no es un adorno: son sus productos, sus opciones y sus precios del pedido en línea. No se inventa nada: el capuccino frío, que el sitio vende a $70 pero no está en el pedido en línea, se ofrece por WhatsApp; los precios del pedido en línea que no coinciden con los del sitio se anotan como pendientes.

## Estructura
1. Encabezado: logo, navegación (Arma tu vaso, Menú, Visítanos) y "Ordena aquí".
2. Portada naranja: H1 "Good coffee, for happy souls", una frase con qué es y dónde, si hoy abren (hora de Hermosillo), botones "Arma tu vaso" y "Ordena aquí", foto de la ventanita.
3. **Arma tu vaso** (bloque olivo).
4. Menú completo: combos, café caliente, café frío, bebidas, alimentos y postres, con descripciones del pedido en línea, precios por tamaño y las notas explicadas; fotos de sus productos.
5. "Good vibes start with good coffee" con la foto de la terraza.
6. Visítanos: dirección, horario, WhatsApp, Instagram y Google Maps.
7. Pie; barra fija en el celular (Ordena aquí, WhatsApp, Llamar, Cómo llegar).
