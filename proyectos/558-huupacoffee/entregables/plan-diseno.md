# Huupa Coffee: plan de rediseño (método 1.1)

**Sitio original:** https://huupa.coffee/ (tienda en línea de Shopify; inicio, /collections/cafe-mexicano, /collections/tazas-coyotas-y-cafeteras, /collections/kits-de-regalo, /pages/proceso "La diferencia", /pages/contacto, /pages/blogs, /pages/facturacion y políticas).
**Materia prima:** clon en `../sitio/` (69 imágenes en `sitio/assets/cdn/shop/files/`), textos de cinco páginas en `investigacion/crudo.json`, redes en `investigacion/resumen.json`.
**Textos que no están en `crudo.json`** (tomados del sitio real con curl el 2026-09-26; las descargas se guardaron en una carpeta temporal del sistema, fuera del estudio):
- Ficha de cada café (`/products/<handle>.js`, el JSON público de la tienda): origen, finca y productor, altura, variedad, proceso, notas de sabor, tamaños, moliendas, precios, disponibilidad y el número de cada variante. Se guardó lo necesario en `rediseno/src/data/cafes.json` (precios y variantes) y `content.ts` (textos recortados).
- Fichas de accesorios y kits (qué incluye cada kit y sus precios).
- `/pages/contacto`: dirección (C. Pino Suárez 90, Centro, 83000 Hermosillo), horario (lunes a sábado de 8:00 a 19:00, domingos cerrado) y el enlace "Ver Mapa".
- `/policies/shipping-policy`: costos y tiempos de envío.
- El WhatsApp: el sitio lo muestra como un botón flotante verde (app "WhatsApp abandoned cart" de Carthike) cuya configuración pública (`whatsapp.carthike.com/api/chat/public/config?shop=huupa.myshopify.com`, la misma que lee el botón del sitio) trae el número **+52 662 460 0099**. No aparece escrito en ninguna página.
No se descargó ninguna imagen nueva.

**Rubro:** tostador de café de especialidad mexicano ("café tostado en leña de mezquite del desierto de Sonora") con tienda en línea y local en el Centro de Hermosillo, Sonora. Vende café en grano o molido, cafeteras, tazas, coyotas horneadas en leña, caramelo de rancho de su Rancho Ave de Platta y kits de regalo. No es una cadena ni un directorio: marca local con fotos propias de producto (bolsas, cafeteras, tazas junto al fuego, kits).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 6,461 px de alto, desborde 0, 1 H1 (el logo), 94 imágenes y **25 rotas** (el banner de la portada `Huupa_Hero_Banner.jpg`, los tres íconos, las fotos de las bolsas, los banners de "Transforma tus momentos cafeseros", el sello y los métodos de pago piden medidas con `&width=` que no existen en local), **40 errores de consola** y **22 recursos fallidos** (píxeles de Shopify, `graphql.json`, `monorail`, el redireccionador por país de SpiceGems y Shop Pay). Móvil: 4,504 px, 19 rotas, 36 errores, 22 fallidos.
- A ojo: la portada es un bloque blanco enorme con el título en blanco encima (no se lee), las bolsas del carrusel salen como texto alternativo azul, los tres bloques de "Transforma tus momentos cafeseros" quedan vacíos o en gris y las reseñas "El efecto Huupa" salen sin foto.
- Fotos: 31 copias `.webp` (7.48 MB → 1.13 MB) con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca. Los banners de paisaje (`desierto-de-sonora.jpg`, `montanas-sur-mexico.jpg`, `granos-cafe-montana-sur-mexico.jpg`, `lena-mezquite-sonora.jpg`) parecen fotos de banco: **no se usan**.

## Qué tiene que lograr el sitio
1. **Vender café en línea:** que el cliente elija su café, su tamaño y **cómo se lo muelen** y llegue a la tienda con esa bolsa ya elegida (la tienda Shopify sigue siendo donde se paga; el rediseño la enlaza con el número de variante).
2. Contar lo que lo hace distinto: el tostado en leña de mezquite de Sonora ("hoohopam" en la lengua seri, de donde viene su nombre) y los granos de pequeños cafetaleros de Chiapas, Oaxaca y Veracruz, con nombres (Finca Chelín, Enrique López, Wilfrido Martínez, las mujeres de Loxicha).
3. Accesorios y regalos (kits y gift card) sin tener que abrir tres colecciones.
4. Que quien está en Hermosillo sepa que hay local, dónde está y a qué hora abre (hoy solo está en /pages/contacto), y que pueda escribir por WhatsApp.

Público: cafeteros caseros de todo México que compran en línea, gente de Hermosillo que pasa al local y quien busca un regalo para alguien "cafesero".

## Dirección visual
El naranja Huupa de sus bolsas, cafeteras y termos, el amarillo de su cinta de envíos y de la gift card, el carbón del café y del peltre, y el fuego. El sitio es claro (crema) con dos bloques de carbón: el de la leña y el del local.

| Token | Color | Uso |
|---|---|---|
| `crema` | `#fbf6ee` | Fondo general |
| `papel` | `#f3e9da` | Bloques alternos (accesorios, envíos) |
| `carbon` | `#212326` | Títulos, texto fuerte y fondos oscuros (el `--color-foreground` 33,35,38 de su tema) |
| `texto` | `#4b4540` | Texto normal (8.8:1 sobre crema) |
| `naranja` | `#ff6d24` | El naranja del encabezado de su tema (`--gradient-header-background`): botones con texto carbón (5.6:1) y detalles sobre carbón (5.6:1) |
| `naranja-oscuro` | `#b8430a` | Enlaces y precios sobre crema (5.1:1) y botones con texto blanco (5.5:1) |
| `amarillo` | `#f9cd2e` | Su cinta de "ENVÍO GRATIS" y resaltados con texto carbón |

**Tipografía:** las de su tema: **Fjalla One** (títulos; `--font-heading-family`) y **Merriweather** 400 y 700 (texto; `--font-body-family`), de @fontsource y solo el subconjunto latino. Sofia Pro, que el tema también carga, es comercial y no está en @fontsource: no se usa.

## Elemento memorable: "Molido para tu cafetera"
El sitio lo promete en el inicio ("En grano o molido, personalizado para tu cafetera", "PARA TODAS LAS CAFETERAS") y cada café de la tienda se vende en seis moliendas con nombre de cafetera: sin moler (en grano), espresso (fino), italiana (medio fino), de colar (medio), percoladora (medio grueso) y prensa francesa (grueso). Pero en la tienda eso es un menú desplegable más.

El elemento convierte esa promesa en algo que se ve: **primero eliges tu cafetera** (seis botones con su dibujo) y un recuadro **dibuja la molienda** (del grano entero al polvo fino, con partículas del tamaño que corresponde, más gruesas o más finas). Luego eliges el café: los diez de la tienda con su **tueste en una escala de fuego** (medio, medio oscuro, oscuro), su origen, finca o productor, altura, proceso y notas; el tamaño (250 g, 454 g o 1 kg según el café); y la página da el **precio exacto de esa bolsa** y un botón "Comprar esta bolsa" que abre la tienda con esa variante ya elegida (`/products/<café>?variant=<número>`), más un WhatsApp con el pedido escrito ("Café Clásico, 454 g, molido para cafetera italiana (medio fino)"). Los agotados se marcan como agotados; el Solok, que solo se vende en grano, lo dice. Sale del negocio, no es un adorno: son sus seis moliendas, sus precios y sus variantes reales.

## Estructura
1. Cinta amarilla: "ENVÍO GRATIS en compras mayores de $840 MX" (del sitio).
2. Encabezado crema: logo, navegación (Cafés, La diferencia, Accesorios, Regalos, Visítanos) y "Ir a la tienda".
3. Portada: H1 "Café tostado en leña. No cualquier leña. No cualquier café.", la frase del sitio, botones "Elegir mi café" y "Ir a la tienda", los tres datos del sitio (envíos a todo México, recién tostado, en grano o molido) y la foto de la taza de peltre junto al fuego.
4. **Molido para tu cafetera** (elemento memorable, es también el catálogo de cafés): cafetera → dibujo de la molienda → café con ficha → tamaño → precio y compra. Al pie, el Sampler de 5 cafés.
5. La diferencia (carbón): "Todo inicia con la leña", el mezquite de Sonora, "Respeta la naturaleza", "Es auténtica", el nombre Huupa (hoohopam) y "el tostado que hace la magia", con la foto del fuego de mezquite y la leña.
6. Los granos: "Solo granos orgánicos de las mejores montañas cafetaleras de México", pequeños cafetaleros, Soconusco, Loxicha, Atitlán y Veracruz, con la foto de las manos con la bolsa Manos de Mujer en el cafetal.
7. Accesorios y antojos: cafeteras (italiana, talega, prensa francesa), molino, termo, tazas y, sin foto, coyotas a la leña, caramelo de rancho y filtro de talega; en lista con precio, no en tarjetas iguales.
8. Regala Huupa: los cuatro kits con lo que incluye cada uno y la gift card.
9. Visítanos en Hermosillo (carbón): dirección, horario, Google Maps, WhatsApp, Instagram y Facebook; envíos (costos y tiempos de su política) y facturación.
10. Pie con el logo claro; barra fija en el celular (Tienda, WhatsApp y Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Sin la plantilla de tienda con carrusel de productos y fila de cuatro tarjetas iguales: el catálogo es el selector; los accesorios van como lista con precio y los kits como pares foto-texto.
- Sin etiquetas pequeñas en mayúsculas sobre cada sección (el tema pone todo en mayúsculas): los títulos van en Fjalla One en tipo oración. Sin numeración 01/02 ni puntos medios.
- Sin "+7k 'Mi nuevo café favorito'" ni las reseñas del widget: el número no dice de qué es y las reseñas no están en `crudo.json`.
- El fuego no se anima por todos lados: lo único que se mueve son las partículas de la molienda al cambiar de cafetera, y se quedan quietas con `prefers-reduced-motion`.
- No se inventan precios, orígenes, notas, alturas ni recomendaciones: si un café no publica su altura o su finca, la ficha no la trae. No se dice qué café va con qué cafetera (el sitio no lo recomienda, salvo el Extremo "tipo espresso", que se cita).
- Sin carrito propio, sin scripts de Shopify, sin mapa incrustado ni botón flotante de terceros: la compra se hace en su tienda.
