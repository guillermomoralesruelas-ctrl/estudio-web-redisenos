# El Palmar: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json`, o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://elpalmarmzt.com/ . Restaurante de mariscos y sushi en Av. Sábalo Cerritos 3205, Mazatlán, Sinaloa |
| Prioridad | **BAJA**: su sitio es reciente y está bien hecho (menú completo con precios, reservación por WhatsApp, reseñas, mapa y datos para Google). Lo que hay es peso, fotos de charolas generadas y detalles del menú |
| Contacto publicado | WhatsApp 669 100 5111; llamadas 669 546 6940; Facebook ElPalmarMzt; Instagram @elpalmarmzt |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-28/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-28 con curl al sitio real y en `investigacion/original.html`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Imágenes muy pesadas.** Sus fotos suman unos 29 MB; nueve son PNG de más de 1 MB y la de la mezcalina pesa 2.4 MB. | En el celular, con datos, el menú tarda en cargar justo cuando alguien decide dónde comer. | `curl` a `/assets/cocteles/mezcalina.png` (2,494,379 bytes) y las 54 imágenes del sitio |
| 2 | **Las dos charolas son imágenes generadas.** `Charola-grande.png` y `Charola-pequeña.png` llevan credenciales C2PA de imagen creada con IA, y se muestran como el producto que se vende ($530 y $930). | Si el cliente recibe algo distinto de la foto, pierde confianza; una foto real de la charola vende mejor. | Metadatos de los dos PNG del sitio |
| 3 | **Nombres en inglés dentro del menú en español.** "Chocolate Cake", "House Red", "Flavoured Margarita", "Fresh Lemonade", "Jazmin Tea". | Detalle de cuidado; confunde a quien lee en español. | Pestañas Bebidas del sitio en vivo |
| 4 | **Carga librerías de animación de fuera** (GSAP y ScrollTrigger), un precargador y un cursor propio. | Más peso y más espera antes de ver el menú. | Sitio en vivo |

Nota: **su sitio y sus fotos son buenos**. El argumento principal: **que cargue rápido en el celular y que sus ceviches con nombre de lugar se vuelvan una forma divertida de elegir.**

## Qué le ofrecemos

- "La costa en un ceviche": el mapa del Pacífico con sus siete ceviches y aguachiles de nombre de lugar, cada uno con precio y WhatsApp.
- El mismo menú completo, más ligero (de 29 MB a menos de 1 MB en fotos).
- Barra fija en el celular con WhatsApp, Llamar y Cómo llegar.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo (por WhatsApp al 669 100 5111 o por Instagram). Tono: respetuoso y útil.

> Hola, buen día. Soy Guillermo, hago sitios web para restaurantes. Vi la página de El Palmar y sus fotos de platillos se ven muy bien. Noté que las imágenes pesan casi 30 MB, así que en el celular el menú tarda en abrir, y que las fotos de las charolas son imágenes generadas. Les preparé una propuesta más ligera donde sus ceviches con nombre de lugar (Loreto, Altata, Teacapán, San Blas…) aparecen en un mapa de la costa y se piden por WhatsApp con un toque. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Los ceviches llevan el nombre de esos lugares? ¿Hay historia detrás de alguno?
- ¿Tienen fotos reales de las charolas?
- ¿Prefieren que la reservación siga con formulario o que abra WhatsApp directo?
