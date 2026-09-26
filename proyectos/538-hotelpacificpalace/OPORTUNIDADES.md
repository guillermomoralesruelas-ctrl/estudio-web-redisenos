# Hotel Pacific Palace: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.pacificpalace.mx/ (sitio propio en PHP con jQuery y Bootstrap, desarrollado por Intelimail; reservas en el motor de hotelespalace.mx) |
| Prioridad | **ALTA**: las tres noticias del inicio y los enlaces "Noticias" y "Opiniones" del pie abren páginas en blanco, y la política de cancelación lleva el nombre de otro hotel y contradice sus preguntas frecuentes |
| Contacto publicado | Reservaciones 669 989 3200, WhatsApp oficial 669 216 1096 (solo aparece dentro de la política de cancelación), ventas@hotelespalace.mx, IG @hotelespalacemazatlan, FB OceanoPalaceMazatlan |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-26/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-26 a las 12:20 (inicio, /hotel, /habitaciones, /amenidades, /restaurantes, /gastronomia, /contacto, /preguntas, /noticias, /politica_cancelacion, /terminos_condiciones y los enlaces de noticias) y en `public/js/custom.js`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Páginas en blanco desde el inicio.** Las tres noticias del inicio ("Museo de Conchas", "Eclipse solar 2024", "La mejor época del año…") enlazan a `/noticia1`, `/noticia2` y `/noticia3`, que responden con una página vacía. Lo mismo pasa con "Noticias" (`/news`) y "Opiniones" (`/index#opiniones`) en el menú del pie. Las noticias sí existen, pero en `/noticias/noticia1`, etc. | El visitante que hace clic ve una pantalla en blanco y piensa que el sitio está caído; Google también encuentra esas páginas vacías. | Sitio real (las cinco URL devuelven 3 bytes) y `original.html` |
| 2 | **La política de cancelación dice "Star Palace Beach Hotel"** en su encabezado y dice que las reservas son **no reembolsables** y solo se pueden posponer hasta 5 días **hábiles** antes. En cambio, las preguntas frecuentes dicen que reservando directo "tienes 5 días **naturales** antes de tu llegada para cualquier cambio o **cancelación**". | Dos reglas distintas para lo mismo, en una página con el nombre de otro hotel: es la receta para reclamos, contracargos y malas reseñas. | Sitio real (/politica_cancelacion y /preguntas) |
| 3 | **No hay botón de WhatsApp.** El "WhatsApp oficial (669 216 1096)" solo aparece escrito dentro de la política de cancelación, que también da otros dos teléfonos de reservas (669 989 3211 y 3212) distintos del que se ve en todo el sitio (669 989 3200). | La mayoría de los huéspedes nacionales pregunta por WhatsApp antes de reservar; si no lo encuentran, preguntan en Booking o se van con otro hotel. | Sitio real (/politica_cancelacion; ningún enlace `wa.me` en las 14 páginas) |
| 4 | **El buscador de reservas pierde la edad de algunos niños.** El script solo envía la edad del segundo niño si tiene 2 años o más, y la del tercero si tiene 3 o más. Con un segundo hijo de 1 año, el motor recibe la reserva sin esa edad. | Tarifas o disponibilidad mal calculadas justo en familias con bebés, el público de un todo incluido. | `public/js/custom.js` del sitio real (formulario `booking_widget`) |
| 5 | Sin datos de **`Hotel`** para Google: ninguna página tiene JSON-LD (dirección, teléfono, estrellas, check-in). | Google tiene que adivinar qué es el hotel; con datos estructurados puede mostrar mejor su ficha. | Sitio real (inicio y /hotel) y `original.html` |
| 6 | Detalles de marca y texto: el logotipo de **Star Palace** está marcado como "Logo Hotel Pacific Palace Mazatlan" y enlaza a pacificpalace.mx; el enlace de Facebook va a la página de Océano Palace; el plan todo incluido dice que incluye gimnasio, pero las preguntas frecuentes dicen que el gimnasio está en Océano Palace y Star Palace; la foto del desayuno buffet se llama "Buffet de restaurante terraza de Oceano Palace"; erratas en textos y `alt` ("Pacific Palce", "pacifc palace", "mi familia disfruto", "fue de lo mejor", "quieres le proporcionarán"). | Pequeños descuidos que confunden sobre qué hotel es cuál. | `crudo.json`, `original.html` y sitio real (/preguntas) |
| 7 | Las tres opiniones del inicio no tienen nombre ni fuente y el carrusel las repite varias veces. | Opiniones anónimas convencen poco; enlazar a sus reseñas de Google o TripAdvisor da más confianza. | `crudo.json` (inicio) |

Nota: el sitio tiene muchas cosas bien: fotos profesionales, horarios claros de los planes, preguntas frecuentes muy completas y un motor de reservas propio. El argumento es arreglar lo roto y que el todo incluido se entienda en segundos.

## Qué le ofrecemos

- Una sola página sin enlaces rotos, con la reserva en su mismo motor (fechas, adultos, niños con todas sus edades y código promocional).
- "Un día en el Pacific Palace": un reloj con la hora de Mazatlán que enseña qué incluye cada plan en este momento y a qué hora abre cada servicio, con WhatsApp para cotizar el plan elegido.
- WhatsApp visible en todo el sitio y una barra fija en el celular (reservar, WhatsApp, llamar y cómo llegar).
- Datos de `Hotel` para Google y textos alternativos correctos en todas las fotos.
- Sitio ligero: sin jQuery ni más de 20 scripts externos; las fotos que usa pasan de 2 MB a menos de 1 MB.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para hoteles. Revisando el sitio del Pacific Palace (las fotos y las preguntas frecuentes están muy completas) noté que las tres noticias del inicio y los enlaces "Noticias" y "Opiniones" del pie abren una página en blanco, y que la política de cancelación aparece con el nombre de Star Palace y con una regla distinta a la de sus preguntas frecuentes. Les preparé una propuesta de cómo podría verse el sitio, con el todo incluido explicado por horario y el WhatsApp a la vista. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Cuál es la política de cancelación vigente para reservas directas: no reembolsable o 5 días naturales?
- ¿El 669 216 1096 es el WhatsApp que quieren en el sitio? ¿Y el 669 989 3211 y 3212 siguen siendo de reservas?
- ¿Qué porcentaje de sus reservas llega por el sitio y cuánto por agencias o Booking?
- ¿Quieren mostrar tarifas "desde" por plan?
- ¿Tienen reseñas en Google o TripAdvisor que podamos enlazar, y fotos de la alberca, la playa y el lobby en buena resolución?
- ¿El sitio del Pacific Palace lo manejan ustedes o el grupo Hoteles Palace (Intelimail)?
