# Florestudio: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26). Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado.

| Dato | Valor |
|---|---|
| Sitio | https://florestudio.shop/ |
| Prioridad | **MEDIA**: el sitio funciona y tiene contacto, pero dos WhatsApp distintos confunden al cliente |
| Contacto publicado | WhatsApp: `wa.me/523319468265` (33 1946 8265) en los botones de contenido; y `5215664068767` (56 6406 8767, número de CDMX) en el widget Joinchat |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Dos números de WhatsApp distintos**: los botones "Contactanos" del contenido van a `wa.me/523319468265` (33 1946 8265, Guadalajara), pero el widget flotante de WhatsApp (Joinchat, visible en todo el sitio) abre `5215664068767` (56 6406 8767, lada 56 de Ciudad de México). Quien usa el chat flotante le escribe al número equivocado. | Los clientes que piden por el chat flotante (la vía más visible) no llegan al negocio: el mensaje va a un número de CDMX que puede ser de la agencia que lo construyó (369Publicidad). Reservas perdidas. | `investigacion/original.html` → `data-settings` del widget `.joinchat` |
| 2 | **Imágenes de IA usadas como fotos de producto**: en la categoría "Flores para Mamá" hay una "Caja Monumental de 150 a 200 Rosas Rojas" (ChatGPT-Image-13-feb-2026) y una "Caja Monumental de Rosas Multicolor" (ChatGPT-Image-13-feb-2026) publicadas como productos en $5,249 y $5,499. Quienes compran sin verlas se llevan una sorpresa; quienes las reconocen pierden la confianza. | Un comprador que detecta la imagen de IA puede dudar de si el producto existe. En tiendas de flores el realismo de la foto es clave para la decisión de compra. | `investigacion/crudo.json` → página "Flores para Mamá", imágenes 11 y 12; `investigacion/resumen.json` → imágenes 24 y 25 |
| 3 | **El JSON-LD declara `Organization` y `WebPage`**, no `Florist`. Google no identifica el negocio como florería en sus resultados enriquecidos ni en Maps (si busca "florería Guadalajara", el tipo `Florist` da ventaja en los resultados locales). | Menor visibilidad en búsquedas de flores en Guadalajara, que son el tráfico orgánico más valioso para este negocio. | `investigacion/original.html` → `<script type="application/ld+json" class="yoast-schema-graph">` |
| 4 | **El título `og:title` del inicio dice solo "Inicio"** (en lugar del nombre del negocio). Al compartir la URL en WhatsApp o redes, la tarjeta de previsualización muestra "Inicio" como título, no "Florestudio". | Cuando alguien recomienda la florería en un chat familiar y comparte el link, la tarjeta dice "Inicio" — poco atractivo y poco confiable. | `investigacion/original.html` → `<meta property="og:title" content="Inicio" />` |
| 5 | **No se publica dirección física** en ninguna página del sitio. El footer menciona "Powered by 369Publicidad" pero ningún dato de ubicación. | Los clientes que quieren pasar a recoger no saben a dónde ir. La ausencia de dirección también reduce la confianza de quienes pagan por adelantado. | `investigacion/crudo.json` → todos los contenidos revisados, ninguna dirección |

## Qué le ofrecemos

- Un sitio nuevo donde el botón flotante, los botones de catálogo y el enlace de WhatsApp van todos al mismo número (el de Guadalajara)
- Un selector de presupuesto interactivo que ayuda al visitante a elegir antes de escribir — menos preguntas repetitivas por WhatsApp
- JSON-LD tipo `Florist` para que Google identifique el negocio correctamente en búsquedas de flores en Guadalajara
- Fotos de producto reales del catálogo (sin imágenes de IA)
- Título y metaetiquetas correctas para que los links compartidos en WhatsApp muestren el nombre del negocio

## Mensaje sugerido para el primer contacto

> Hola, soy Guillermo. Vi el sitio de Florestudio y noté que el chat flotante de WhatsApp lleva a un número de Ciudad de México, no al de Guadalajara. Quienes escriben por ese chat no les llegan. Les preparé una propuesta de sitio nuevo que corrige eso y tiene el catálogo con selector de presupuesto. ¿Les muestro? Es gratis y sin compromiso.

## Preguntas para la conversación

- ¿El número `56 6406 8767` del Joinchat es de la agencia? ¿Ya lo saben?
- ¿Tienen una dirección o zona de Guadalajara donde recogen pedidos o quieren publicar?
- ¿Las "Cajas Monumentales" de ChatGPT son productos que tienen en stock o son aspiracionales?
- ¿El `33 1946 8265` es el único número de WhatsApp del negocio?
- ¿Tienen fotos de producto a mayor resolución (≥ 800 px)? El catálogo mejoraría mucho.
