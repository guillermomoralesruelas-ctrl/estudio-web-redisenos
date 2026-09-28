# FioriNET: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.fiorinet.com.mx/ (Magento 2, tema Porto) |
| Método | **1.1 con fotos del sitio en vivo** (como el 1.2): el clon no trae fotos de arreglos, así que 14 fotos de producto y los textos de 7 páginas se tomaron con curl el 2026-09-27 |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/414-fiorinet/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 414-fiorinet`) |

## En una línea

Misma florería, mismos textos, precios, teléfonos y tabla de envíos; cambia de una tienda Magento con menús de cuenta, carrito y comparador a una sola página que dice cuánto cuesta que el arreglo llegue a cada alcaldía o municipio y manda el pedido por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Sale sin estilos: lista de enlaces sin formato (6,639 px en escritorio, 8,192 px en el celular) | Página nueva con estilos propios; 5,793 px en escritorio y 10,135 px en el celular, sin desborde |
| 12 scripts con 404 (`media/fn/*.js`, `email-decode.min.js` de Cloudflare) y 35 errores de consola | Sin scripts de terceros: 0 errores y 0 recursos fallidos |
| No trae fotos de arreglos (el catálogo se carga del sitio en vivo) | 14 fotos de su catálogo bajadas a `assets/originales/` y convertidas a .webp en `assets/web/` (`rediseno/fotos-web.mjs`): 2.17 MB a 0.57 MB |
| Solo trae los banners del carrusel, con el texto encimado en la imagen | No se usan (ver "Qué se quitó") |

## Qué se cambió (mismo contenido, otra forma)

- El H1 es el de su sitio ("Florería en CDMX — Envío de flores a domicilio el mismo día") y el párrafo de portada es su "¿Qué es FioriNET?".
- Su tabla de costos de envío (69 zonas, página `/df_spa/shipping-cost/`) pasa de una página del pie a ser la sección central, con un mosaico de las 16 alcaldías.
- Su lista de hospitales por alcaldía (`/cdmx/hospitales`) se usa dentro del cálculo: al elegir una alcaldía se ven los hospitales de ahí a los que ya entregan.
- Las páginas de condiciones de entrega, hospitales y funerarias se resumen con sus propias frases en dos secciones.
- De las 13 preguntas frecuentes de su inicio se dejan 9; pagos y factura van junto a las preguntas.
- Los cuatro teléfonos (CDMX, Guadalajara, Monterrey, USA y Canadá) quedan tocables (`tel:`).

## Qué se agregó (no existía en el original)

- **"¿A dónde lo mandas?"** (elemento memorable): mosaico de alcaldías con el costo de cada una (esquema, no a escala), pestañas de Estado de México, Jalisco, Nuevo León y "Recoger en tienda", nota "Tu pedido" con arreglo + envío = total, hospitales de la alcaldía, dedicatoria y WhatsApp con todo escrito.
- Botón "Enviar este" en cada arreglo, que lo pone en la nota del pedido.
- WhatsApp con mensaje prellenado (su enlace `wa.me/525555089212` abre vacío), barra fija en el celular (WhatsApp, Llamar al (55) 8526 1197, Cómo llegar) y enlace a su ficha de Google Maps.
- JSON-LD `Florist` con dirección, coordenadas (las de su enlace de Maps), horario, teléfonos por ciudad, formas de pago y redes; Open Graph; title y description nuevos.
- Textos redactados por nosotros: "Algunos de sus arreglos", "¿A dónde lo mandas?" y su párrafo de instrucciones, "¿Cuánto cuesta que llegue?", "Enviar este", "Ver en la tienda", "Ver el catálogo completo", "Precios de su tienda en línea, en pesos e IVA incluido; el envío se suma según la zona", "Tu pedido", "Todavía no lo elijo", "Dedicatoria para la tarjeta (sin costo)", "¿Es para un hospital de …? Ya entregan en …", "El total es aproximado; FioriNET lo confirma por WhatsApp", "Esquema de las 16 alcaldías, no está a escala", "Armado y entregado en persona", "Flores para un hospital", "Coronas y arreglos para funerales", "Pedido urgente por WhatsApp", "Su tienda en Piedad Narvarte", las leyendas del mosaico y el mensaje de WhatsApp.

## Qué se quitó o no se usó

- Menús de tienda: moneda, idioma, lista de deseos, comparar productos, iniciar sesión, carrito, reportar depósito, recuperar contraseña (la compra sigue en su tienda, enlazada desde cada arreglo).
- Los tres banners del carrusel (`1fn_2025_1.jpg`, `2fn_2025.jpg`, `3fn_2025.jpg`): tienen el texto encimado y el primero usa una modelo que parece foto de banco.
- Fotos de su catálogo con la marca de otra florería: "Anturios & Rosas" y "Orquídeas Phalaenopsis BS" llevan la caja de **Blooming Secrets**; "Bouquet Encanto" tiene una modelo de banco; la corona "con Foto" lleva el retrato de una persona.
- El bloque de texto SEO del pie ("red independiente de florerías online más grande de México", enlaces a Flores.Guru) y la lista completa de funerarias y panteones (se resume en una línea).
- El chat "Envíenos un mensaje" y los iconos de pago.

## Qué se conserva al pie de la letra

- Precios de los 12 arreglos (del catálogo en vivo, 2026-09-27) y los 69 costos de envío.
- Dirección: Casa del Obrero Mundial 246, col. Piedad Narvarte, alcaldía Benito Juárez, CDMX, C.P. 03100.
- Teléfonos: CDMX (55) 8526 1197, Guadalajara (33) 8526 1616, Monterrey (81) 4170 8140, USA y Canadá (213) 261 0497; WhatsApp +52 55 5508 9212; correo mail@fiorinet.com.
- Horario: lunes a viernes 9:00 a 19:00, sábados 9:30 a 13:30 (de su pie, su página de entrega y su página de tienda).
- Textos de entrega, cobertura, hospitales, funerales, pagos, factura y preguntas frecuentes.
- La calificación que publica su sitio: 4.7 en Google (122 reseñas), con enlace a su ficha.

## Pendiente de confirmar con el cliente

- **Autoría de las fotos del catálogo.** Son fotos de producto con fondos de ambiente montados; dos traen la marca Blooming Secrets (no se usan). Confirmar que las 14 usadas son de sus arreglos.
- **Envío en CDMX.** Su página de costos cobra Xochimilco $100, Tláhuac $180 y Milpa Alta $200, pero su página de hospitales dice que el envío "está incluido dentro de las 16 alcaldías" y los banners dicen "Envío incluido en CDMX". El rediseño usa la tabla de costos (dice que se lee de las plantillas del carrito).
- **Horario del sábado.** Su FAQ dice 9:00 a 13:30; el pie, la página de entrega y la de tienda dicen 9:30. Se usa 9:30.
- **Domingos.** Sus páginas de hospitales y funerarias dicen que atienden los 7 días (domingos y festivos hasta las 5 pm, con cargo hasta las 8 pm); el horario general no lo menciona. No se pone en el rediseño.
- **Puebla y Querétaro.** Su description y su FAQ los nombran como cobertura, pero no están en la tabla de costos. En el rediseño no aparecen como zona; queda la frase "si tu zona no aparece… cotizando la entrega aparte".
- El total de la nota es aproximado (arreglo + envío); no incluye cargos de entrega express, horario especial ni poblados pequeños.
- El "Bouquet de rosas" va "desde $699" (12 rosas); el precio cambia con la cantidad.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`) y `rediseno/src/main.tsx`
- Imágenes: originales en `assets/originales/` (bajadas de su catálogo), copias .webp en `assets/web/` (`publicDir` en `rediseno/vite.config.ts`, las genera `rediseno/fotos-web.mjs`)
- Nota de QA: en esta PC, `herramientas/navegador.mjs` pide un Chromium de Playwright que no está instalado; el QA se corrió con una precarga que usa Edge (`--import` de un script del scratchpad), sin tocar las herramientas.
