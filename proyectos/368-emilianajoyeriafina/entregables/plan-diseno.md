# Emiliana Joyería Fina: plan de rediseño (método 1.1)

**Sitio original:** https://emiliana.com.mx/ (Shopify con tema personalizado; páginas Inicio, colecciones individuales —Anillos, Aretes, Collares, Engagement, Pulseras, Churumbelas, Birthstone Rings, Lab Grown—, Nosotros, Cuidados, Garantía, Guía de tallas, Contacto). Venta directa en línea. Showroom en Bundal, Av. Campestre x 7 #15, Mérida.

**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/cdn/shop/`), textos en `investigacion/crudo.json` (Inicio, Anillos, Aretes, Collares, Engagement), contacto en `investigacion/resumen.json`.

**Rubro:** joyería fina (RETAIL). Tipo para Google: `JewelryStore`. **Ciudad:** Mérida, Yucatán.

**Sobre las fotos (revisadas antes de construir):**
El clon trae en `sitio/assets/cdn/shop/files/`: `EE60A0DF-…CC5.jpg` (1440×1440, lifestyle joyas sobre piedra blanca), `IMG_1822.jpg` (3024×4032, mano con anillo de boda en oro), `IMG_2336.jpg` (3024×4032, anillo de compromiso en dedo), `6CB3AF3A-…268.jpg` (3024×4032, Anillo Sorrento con diamante oval), `IMG_3068.jpg` (3024×3024, argollas en caja negra), `IMG_9186.jpg` (3024×4032, mano con sortija de gema de color), `IMG_1786.jpg` (3070×1947, plano cenital de mesa con joyas / taller), y logo en PNG. En `collections/`: imágenes de seis colecciones (anillos, aretes, engagement, pulseras, collares, ver todo). Ninguna trae metadatos de Google Maps/Picasa ni marcas de IA. **No se usa** `1000_F_318385552_…removebg-preview.png` (stock de Shutterstock). Copias `.webp` de 13 fotos (7.29 MB → 0.54 MB) en `assets/web/` (`rediseno/fotos-web.mjs`).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 48,724 px y móvil 31,571 px, **desborde 1,960 px en escritorio y 2,850 px en móvil**, 51 imágenes, **18 rotas**, 87 errores de consola y 16 recursos fallidos (APIs de Shopify checkout, monorail, web-pixels, Shop Pay) que no funcionan fuera de Shopify.
- A ojo: el clon carga la tienda Shopify completa incluyendo carrito, lista de deseos y scripts de analytics que no funcionan localmente. Las páginas de colección son listas largas de 186 productos con filtros interactivos que no operan sin el backend.

## Qué tiene que lograr el sitio
1. **Contactar y cotizar**: WhatsApp con mensaje prellenado para información o cotizar argollas / piezas personalizadas.
2. **Descubrir las colecciones**: imagen clara de qué tipo de joyería hace Emiliana antes de que el visitante vaya a la tienda Shopify.
3. **Confianza y propuesta**: oro 14K, gemas naturales, 4ª generación, hecho en Mérida, envíos asegurados.
4. **El anillo con tu piedra**: el selector de mes de nacimiento con su birthstone.

Público: mujeres de 25 a 45 años y parejas que buscan compromiso o regalo especial; compradores locales (showroom en Mérida) y de toda la República (envíos).

## Dirección visual (primera pasada)

La marca usa negro con toques dorados, fondo crema muy claro y tipografía serifada elegante.

| Token | Color | Uso |
|---|---|---|
| `fondo` | `#faf9f6` | Fondo principal — crema cálido |
| `oscuro` | `#0f0c07` | Encabezado, pie y bandas oscuras |
| `tinta` | `#2c2010` | Texto corrido — café oscuro (10.8:1 sobre fondo) |
| `oro` | `#b8903a` | Acento principal — el oro de 14K |
| `oro-suave` | `#f0e6c8` | Fondo tenue de secciones con acento |
| `piedra` | `#7a5f3a` | Texto secundario, etiquetas (5.1:1 sobre fondo) |

**Tipografía:** **Cormorant Garamond** (600, latin) en títulos —elegancia de joyería fina— y **Lato** (400 y 700, latin) en texto corrido y botones.

## Elemento memorable: "¿Cuál es tu piedra?"

Emiliana tiene una colección "Birthstone Rings" — anillos con la piedra del mes de nacimiento. Su sitio la lista en el menú pero no la explica ni la hace atractiva.

El elemento: un **selector de 12 meses** con un pequeño círculo del color de cada piedra. Al elegir un mes, aparece:
- El nombre de la piedra (ej. "Granate" para enero)
- Una joya SVG simple con el color de la piedra
- El significado de la tradición joyera (ej. "protección, energía y fuerza")
- Un botón "Ver anillos con granate →" que enlaza a la colección Birthstone Rings en Shopify

Los birthstones son datos de tradición joyera pública, no datos del negocio.

## Estructura

1. **Encabezado** (oscuro): logo, navegación, "Ver tienda".
2. **Portada**: foto hero, H1 "Joyería fina hecha a mano en Mérida", botones WhatsApp y Ver colecciones.
3. **Colecciones**: seis fichas en mosaico (Anillos, Aretes, Collares, Engagement, Pulseras, Lab Grown) con enlace a la tienda.
4. **¿Cuál es tu piedra?**: selector de mes con birthstone y ficha de la piedra.
5. **Piezas especiales**: argollas de boda y piezas personalizadas con fotos y WhatsApp para cotizar.
6. **Nosotros**: historia de 4 generaciones, foto del taller, cuatro pilares (oro 14K, gemas naturales, 4ª generación, envíos asegurados).
7. **Showroom y contacto**: dirección, enlace a Maps, WhatsApp, correo.
8. **Pie** (oscuro): logo, redes, políticas, copyright.
9. **Barra fija en celular**: WhatsApp, Llamar, Cómo llegar.

## Revisión contra lo genérico (segunda pasada)

- Se quitan: el carrito y el buscador de Shopify, la lista de deseos, los filtros de colección, el GIF sparkle.
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02, sin puntos medios como separador.
- Las seis colecciones como mosaico asimétrico, no tarjetas idénticas en fila.
- El birthstone selector: solo un fade CSS al cambiar de mes, quieto con `prefers-reduced-motion`.
- Sin inventar: no se publican precios, no se inventan horarios (el sitio no los publica), no se citan reseñas inexistentes.
- Sin mapa ni scripts de terceros: enlace de imagen y texto a Google Maps.
