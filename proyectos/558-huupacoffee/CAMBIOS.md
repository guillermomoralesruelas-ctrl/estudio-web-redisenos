# Huupa Coffee: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://huupa.coffee/ (tienda en línea de Shopify: inicio, colecciones de café, accesorios y kits, "La diferencia", contacto, blog, facturación y políticas) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/558-huupacoffee/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-26/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 558-huupacoffee`) |

**Negocio:** Huupa Coffee (HUUPA®), tostador de café mexicano de altura que tuesta con leña de mezquite del desierto de Sonora. Tienda en línea con envíos a todo México y local en C. Pino Suárez 90, Centro, 83000 Hermosillo, Son. (lunes a sábado de 8:00 a 19:00). Vende café en grano o molido, cafeteras, tazas, coyotas, caramelo de rancho y kits de regalo.

## En una línea

Misma marca, mismos cafés, precios, textos, fotos y datos; cambia la forma: una sola página donde eliges tu cafetera, ves cómo queda la molienda, eliges café y tamaño y llegas a su tienda con esa bolsa exacta, más la historia del mezquite, los accesorios, los kits y, por primera vez en el inicio, su local en Hermosillo y su WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 25 imágenes rotas en escritorio y 19 en móvil: el banner de la portada (`Huupa_Hero_Banner.jpg`, no se descargó), los íconos, las bolsas del carrusel, los banners de "Transforma tus momentos cafeseros", el sello y los métodos de pago (el HTML pide medidas con `&width=` que no existen en local) | 0 imágenes rotas; 31 copias `.webp` de fotos del clon en `assets/web/` |
| 40 errores de consola en escritorio y 36 en móvil, 22 recursos fallidos (píxeles y `monorail` de Shopify, `graphql.json`, el redireccionador por país de SpiceGems, Shop Pay) | 0 errores y 0 recursos fallidos; sin scripts de terceros |
| Portada en blanco con el título en blanco encima: no se lee | Portada clara con el H1 en carbón y la foto de la taza junto al fuego |
| Carrusel de productos con texto alternativo azul en lugar de fotos; bloques de "Transforma tus momentos cafeseros" vacíos o en gris; reseñas sin foto | Selector de café con foto de cada bolsa; "La diferencia" con foto del fuego; sin reseñas (ver "Qué se quitó") |
| El único H1 del inicio es el logo (así es también en el sitio real) | Un solo H1: "Café tostado en leña. No cualquier leña. No cualquier café." |
| Banners de paisaje que parecen de banco (`desierto-de-sonora.jpg`, `montanas-sur-mexico.jpg`, `granos-cafe-montana-sur-mexico.jpg`, `lena-mezquite-sonora.jpg`) | No se usan |

## Qué se cambió (mismo contenido, otra forma)

- El inicio, las colecciones de café, accesorios y kits, "La diferencia" (/pages/proceso), contacto y la política de envíos se juntaron en **una sola página**.
- **El catálogo de café** deja de ser un carrusel con pestañas (que repetía Bourbon Amarillo y Garnica y Caturra dos veces en la pestaña Specialty) y pasa al selector "Molido para tu cafetera" (ver "Qué se agregó"). Los once cafés se agrupan en "Los cafés de la casa" (Clásico, Premium, Descafeinado Natural, Intenso, Extremo) y "Specialty, edición limitada" (Bourbon Amarillo, Garnica y Caturra, Manos de Mujer Oaxaqueña, Typica & Bourbon Rojo, Bourbon Typica y Solok). Los agotados el 2026-09-26 (Typica & Bourbon Rojo, Bourbon Typica y Solok) se muestran marcados "(agotado)".
- **Moliendas:** en la tienda son las opciones "Molido" de cada café ("Sin moler - EN GRANO", "Para Cafetera de Espresso - FINO", "Para Cafetera Italiana - MEDIO FINO", "Para Cafeteras de Colar - MEDIO", "Para Cafetera Percoladora - MEDIO GRUESO", "Para Prensa Francesa - GRUESO"); el rediseño las nombra por la cafetera ("En grano", "Espresso", "Italiana", "De colar", "Percoladora", "Prensa francesa") y el grado va aparte. Ninguna nota queda sin explicar: "de colar" se explica como las cafeteras que pasan el agua por un filtro (de goteo o de talega).
- **Tamaños:** la tienda escribe "250 g" en los cafés de la casa y "250 gr" en los Specialty; el rediseño usa "g" en todos.
- **Tueste y origen** de cada café salen de los filtros de la colección (Tueste: Medio 6, Medio Oscuro 3, Oscuro 2; Origen: Chiapas, Oaxaca, Veracruz, Santiago Atitlán Oaxaca) y de las portadas de las bolsas: Clásico, Premium y Descafeinado, medio oscuro; Intenso y Extremo, oscuro; los Specialty, medio. Intenso y Extremo llevan "Chiapas" porque la colección los cuenta ahí y su ficha los etiqueta "Soconusco", aunque su texto solo dice "montañas de México" (ver pendientes).
- Las fichas de producto son textos largos de SEO; de cada una se tomó solo el dato (origen, finca, productor, altura, variedad, proceso, notas) y una frase.
- Los accesorios (13 productos) pasan de carrusel con tarjetas a una lista con foto pequeña, precio con línea punteada y un dato; los que no tienen foto en el clon (coyotas, caramelo de rancho, filtro de talega, Huupa Shot, Sun Kit) van en "Para acompañar", sin foto.
- **Precios:** los de la tienda el 2026-09-26. Cuando un tamaño está agotado se dice (cafetera italiana de 150 ml, $723; cafetera de talega de 2 L, $872) y se muestra el precio del que sí hay. Para el filtro de talega y el Kit Fogata **no** se muestran los precios tachados de la tienda, porque son menores que el precio de venta (ver OPORTUNIDADES). El termo, el Kit Termo y el Sampler sí llevan su precio anterior ("Antes $492", "Antes $769", "$973" tachado), que es mayor.
- Los kits: la ficha de cada kit dice qué incluye; se resumió en una línea.
- Dirección, horario y el enlace "Ver Mapa", que solo estaban en /pages/contacto, pasan al bloque "Visítanos en Hermosillo" del inicio.
- La política de envíos (/policies/shipping-policy) se resume en cuatro filas y se enlaza la página completa.
- Correcciones de redacción: "transformació n" por "transformación"; "Atitlán,dan" por "Atitlán, dan"; "amigablecon" con espacio; "momento cafecero" por "cafesero" (así lo escribe el resto del sitio); "a roma", "c autivador", "n otas", "e s", "C afeína", "P otencia" de las fichas; las mayúsculas de adorno ("Granos Seleccionados a Mano por Expertos Cafetaleros") pasan a minúsculas; "el mezquite, tiene alma" sin coma; "cuales" por "cuáles".
- Fotos: 31 copias `.webp` de las del clon (de 7.48 MB a 1.13 MB) con `rediseno/fotos-web.mjs`; el clon no se tocó.
- Colores: el naranja `#ff6d24` del encabezado de su tema, el amarillo `#f9cd2e` de su cinta y el carbón `#212326` (33,35,38) de su tema; se agregaron un crema, un papel y un naranja oscuro para que el texto cumpla contraste AA.
- Tipografía: las de su tema, Fjalla One (títulos) y Merriweather (texto), servidas desde el propio sitio con @fontsource, solo latino. Los títulos van en tipo oración, no en mayúsculas.

## Qué se agregó (no existía en el original)

- **Elemento memorable: "Molido para tu cafetera"** (componentes `Selector`, `Cafetera`, `DibujoMolienda`, `EscalaTueste` y `SamplerFila` en `App.tsx`; datos en `moliendas` y `cafes` de `content.ts` y en `cafes.json`). Paso 1: seis botones con el dibujo de cada cafetera; un recuadro dibuja la molienda (granos enteros o partículas del tamaño de cada grado, de fino a grueso; el dibujo es ilustrativo, no a escala). Paso 2: los once cafés con su punto de color de tueste; la ficha trae foto, origen, finca o productor, altura, proceso, notas, una frase y una escala de tueste (medio, medio oscuro, oscuro). Paso 3: el tamaño (los que vende ese café). La página da el precio de esa variante exacta y el botón "Comprar esta bolsa" abre la tienda con la variante ya elegida (`https://huupa.coffee/products/<café>?variant=<número>`); si está agotada, "Agotado por ahora" y "Ver en la tienda"; si el café no se vende en esa molienda (el Solok, solo en grano), "Este café solo se vende en grano" y "Cambiar a en grano". Al pie, el Sampler de 5 cafés con el precio en la molienda elegida.
  - Textos nuevos: "Molido para tu cafetera"; "Todos nuestros cafés se venden en grano o molidos, personalizados para tu cafetera. Dinos con qué preparas tu café, elige el café y el tamaño, y te llevamos a la tienda con tu bolsa lista." (armado con "En grano o molido, personalizado para tu cafetera" del inicio); "1. ¿Con qué preparas tu café?", "2. Elige tu café", "3. Tamaño", "Los cafés de la casa", "Specialty, edición limitada"; nombres cortos de cafetera y las notas de cada molienda ("Para moler en casa, justo antes de preparar.", "Para cafetera de espresso.", "Para cafetera italiana (moka), la que va a la estufa.", "Para las cafeteras que pasan el agua por un filtro: de goteo o de talega.", "Para cafetera percoladora.", "Para prensa francesa."); "Molienda (grado)."; "Notas", "Tueste:", "Tu bolsa: …", "MXN", "Agotado por ahora", "(agotado)", "Comprar esta bolsa", "Ver en la tienda", "Pedir por WhatsApp", "Este café solo se vende en grano.", "Cambiar a en grano", "Ver el Sampler"; el `aria-label` del dibujo ("Así se ve la molienda …").
  - Frase de cada café: tomada de su ficha o del Sampler ("El más pedido por nuestros clientes.", "Café de altura, sabor suave y aroma dulce.", "Un café con más carácter.", "Úsalo en pequeñas cantidades. No apto para menores de edad.", etc.). La del Solok, "Solo se vende en grano.", es nuestra (su única variante es "Sin moler - EN GRANO").
- Textos del sitio que no están en `crudo.json`, **tomados con curl el 2026-09-26** (descargas en una carpeta temporal del sistema, fuera del estudio): las fichas de los cafés, accesorios y kits (`/products/<handle>.js`: descripciones, precios, variantes, disponibilidad), la dirección, el horario y el enlace del mapa (`/pages/contacto`) y la política de envíos (`/policies/shipping-policy`).
- **WhatsApp al +52 662 460 0099.** El número no está escrito en ninguna página: es el del botón flotante verde del sitio (app "WhatsApp abandoned cart" de Carthike), leído de su configuración pública (`whatsapp.carthike.com/api/chat/public/config?shop=huupa.myshopify.com`) el 2026-09-26. Mensajes prellenados: general "Hola, les escribo desde su sitio web. Tengo una pregunta sobre sus cafés."; desde el selector "Hola, les escribo desde su sitio web. Quiero pedir: (café), (tamaño), molido para (cafetera) ((grado))." o "… en grano (sin moler).". Ver pendientes.
- Bloque "Visítanos en Hermosillo": "Dirección", "Horario", "WhatsApp", "Cómo llegar en Google Maps", "Escríbenos", "Síguenos en Instagram y Facebook, o déjanos un mensaje en nuestro formulario de contacto."; "Envíos a todo México" con "Estándar", "Express", "Gratis", "El mismo día" (datos de su política), "Enviamos con SkyDropX, normalmente por DHL México, y en algunos destinos por FedEx o Estafeta. Política de envíos completa." y "¿Necesitas factura? Genérala tú mismo en Facturación rápida." (de /pages/facturacion).
- Enlace a Google Maps: el "Ver Mapa" de /pages/contacto (`https://maps.app.goo.gl/VwPHoVrKyk8TZ79d7`, abre la ficha "HUUPA Coffee"). No hay mapa incrustado.
- Otros títulos y botones nuevos: navegación "Cafés", "La diferencia", "Accesorios", "Regalos", "Visítanos"; "Ir a la tienda", "Elegir mi café"; el rótulo de la portada "Tostado en leña de mezquite del desierto de Sonora." (de su meta description); "Cafeteras, tazas y coyotas"; "Para acompañar"; los resúmenes de cada accesorio y kit (con datos de sus fichas); "Todos los kits llevan moño de regalo y el café se muele como lo pidas."; la frase de la gift card ("Le llega por correo electrónico de inmediato, y puedes programar la fecha de envío.", de su ficha); "Solo granos de las mejores montañas cafetaleras de México" (el sitio: "Solo granos orgánicos de las mejores montañas cafetaleras de México"; ver pendientes); las cuatro regiones con sus cafés; el recuadro del nombre ("El mezquite, o 'hoohopam' en la lengua seri, no solo nos da nuestro nombre: define nuestro perfil de sabor.", de la ficha del Café Intenso); pie "© (año) Huupa Coffee. Café tostado en leña de mezquite, Hermosillo, Sonora."; "Ir a los cafés"; `aria-label` "Huupa Coffee, volver al inicio", "Abrir el menú", "Escribir a Huupa por WhatsApp", "Cómo llegar a Huupa en Google Maps".
- Barra fija en el celular: "Elegir mi café", WhatsApp y cómo llegar. El sitio no publica teléfono para llamar, así que no hay botón de llamada.
- JSON-LD `CafeOrCoffeeShop` con datos reales: nombre, descripción (de su meta description y del sitio), dirección, coordenadas (de la ficha de Google Maps que enlaza el sitio), mapa, horario (lunes a sábado de 8:00 a 19:00), WhatsApp como teléfono, moneda y redes. El sitio solo tiene el `WebSite` y `BreadcrumbList` de Yoast.
- Title y description reales (la description es la del sitio más "En grano o molido para tu cafetera, con envíos a todo México"), Open Graph con la foto de la taza junto al fuego, `lang="es-MX"` y `og:locale es_MX` (el sitio dice `es_ES`), favicon con su "H".
- Textos alternativos descriptivos en todas las fotos.
- Accesibilidad: un solo H1, contraste AA (texto `#4b4540` sobre crema 8.8:1; botón blanco sobre naranja oscuro 5.5:1; carbón sobre naranja 5.6:1; naranja sobre carbón 5.6:1), botones con `aria-pressed`, ficha y molienda con `aria-live` y `prefers-reduced-motion` (sin desplazamiento suave ni transiciones; la molienda aparece sin fundido).

## Qué se quitó o no se usó

- Shopify y todos sus scripts, el carrito, la búsqueda, el inicio de sesión, los píxeles, el redireccionador por país, el botón flotante de WhatsApp de Carthike y el de Shop Pay: la compra se hace en su tienda.
- "+7k 'Mi nuevo café favorito'" (no dice de qué es el número) y las reseñas "El efecto Huupa" y las estrellas del carrusel (vienen de un widget y no están en `crudo.json`).
- El video de /pages/proceso (no está en el clon).
- El blog, "Mayoristas" (hoy redirige a la colección de café; ver OPORTUNIDADES), los términos, el aviso de privacidad y la página de cambios y devoluciones: se pueden enlazar si el cliente quiere.
- El formulario de contacto: se enlaza su página, y WhatsApp va como vía directa.
- La Taza Peltre Espresso ($143) y la Cafetera italiana de 150 ml no van como productos aparte: se mencionan en la línea de la taza y de la cafetera.
- Los enlaces "Haz CLICK AQUÍ" de /pages/proceso (café de Chiapas, Specialty, Descafeinado): los reemplaza el selector.
- Fotos del clon sin usar: los banners de paisaje que parecen de banco (arriba), `bannergc1200.jpg`, `gift-card-003…png`, `Giftcard2.jpg`, las segundas fotos de cada producto (`…_02`, `…-1.jpg`, portadas de color como `clasico-huupa-cover…`), `Cafetera.jpg`, `TazaFogata_03.jpg`, `Taza_Peltre_11.jpg`, `Talega_4.jpg`, `MolinoNuevo_oct_05.jpg`, `02_…png`, `05.png`, `HuupaMX-Extremo.jpg`, `image_4.png`, `image_4_1.png`, `image_5.png`, `Hamburger_Menu_blog.png`, `banner-tostado-especial-huupa.jpg`, `sampler-huupa…jpg`, `italiana-huupa-2…jpg`, los tres íconos y los SVG del sello, la tríada, los pagos y el carrito.

## Qué se conserva al pie de la letra

- "ENVÍO GRATIS en compras mayores de $840 MX"; "Café tostado en leña. No cualquier leña. No cualquier café."; "Nos tomó tiempo encontrar los mejores granos y la leña de mezquite ideal para crear cafés extraordinarios."; "Envíos a todo México", "Café recién tostado", "En grano o molido".
- De /pages/proceso: "El alma del mezquite, el poder del fuego y la magia del café. Todo en una taza.", "Todo inicia con la leña" y su texto, "Respeta la naturaleza", "Es auténtica", el texto del tostado (recortado) y los párrafos de los granos (recortados).
- De las colecciones: el texto de accesorios ("Logra mejores extracciones…"), "Disfruta el sabor de la tradición con nuestras coyotas horneadas en leña, o ¿por qué no? Un buen caramelo de rancho.", el de regalos ("Esa persona especial…" y "Porque un buen café no solo se toma, también se comparte."), "Regala Huupa®".
- **Todos los precios** de café, accesorios y kits, tal como se publican el 2026-09-26, con tamaños, moliendas y disponibilidad.
- Orígenes, fincas, productores (Enrique López de Finca Chelín, Wilfrido Martínez), alturas, variedades, procesos y notas de sabor de cada café.
- Contacto: C. Pino Suárez 90, Centro, 83000 Hermosillo, Son.; lunes a sábado de 8:00 am a 7:00 pm, domingos cerrado; Facebook /huupa.coffee e Instagram @huupa.coffee.

## Pendiente de confirmar con el cliente

- **WhatsApp:** +52 662 460 0099 sale de la configuración de su botón flotante; confirmar que es el número de atención y si quieren que aparezca escrito. No publican teléfono ni correo.
- **Local:** confirmar que en C. Pino Suárez 90 atienden al público de lunes a sábado de 8:00 a 19:00 y qué se puede hacer ahí (comprar café, tomar café, recoger pedidos). El rediseño solo dice "Visítanos en Hermosillo". El JSON-LD usa el tipo `CafeOrCoffeeShop`: si no sirven café para tomar, cambiarlo a `Store`.
- **Origen de Intenso y Extremo:** el rediseño dice "Chiapas" por los filtros de la colección y la etiqueta "Soconusco"; confirmar.
- **Tueste del Descafeinado y del Premium:** "medio oscuro" sale de la portada de sus bolsas y del filtro de la colección; confirmar.
- **Orgánico:** /pages/proceso dice "Solo granos orgánicos"; ninguna ficha habla de certificación. El rediseño dice "Solo granos de las mejores montañas cafetaleras de México"; si tienen certificación orgánica, se agrega.
- **Precios tachados:** ¿cuál es el precio correcto del Kit Fogata ($1,923 o $1,864) y del filtro de talega ($30 o $26)?
- **Agotados:** Typica & Bourbon Rojo, Bourbon Typica, Solok, la cafetera italiana de 150 ml, la cafetera de talega de 2 L y la coyota de chocolate estaban agotados el 2026-09-26; revisar antes de publicar (el rediseño lee `cafes.json`, que hay que actualizar a mano o conectar a la tienda).
- **Mayoristas:** ¿siguen vendiendo a negocios? Se puede agregar una sección con WhatsApp para cotizar.
- **Fotos:** faltan fotos de coyotas, caramelo de rancho, del local y del tostador con la leña; las de paisaje del sitio parecen de banco (confirmar si son suyas).
- ¿Quieren mostrar sus reseñas? Habría que pedir el texto y el permiso.

## Dónde está cada cosa

- Textos, contacto, fotos, moliendas, fichas de los cafés, accesorios, kits y envíos: `rediseno/src/data/content.ts`
- Precios, tamaños, moliendas, disponibilidad y número de cada variante (de `/products/<handle>.js`): `rediseno/src/data/cafes.json`
- Diseño, el selector de molienda (`Selector`, `Cafetera`, `DibujoMolienda`, `EscalaTueste`, `SamplerFila`) y las demás secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y `@font-face`)
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/cdn/shop/files/` (sin tocar); copias `.webp` en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`. Para cambiar una foto, edita la lista de `rediseno/fotos-web.mjs` y vuelve a ejecutarlo.
- Capturas para comparar: `referencias/capturas-2026-09-26/` (se generan con `node herramientas/guardar-capturas.mjs 558-huupacoffee` después del QA).
