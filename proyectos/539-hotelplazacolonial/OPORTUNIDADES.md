# Hotel Plaza Colonial: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con `curl` en el sitio real el 2026-09-27 y en `investigacion/original.html`. Los defectos del clon (scripts que no cargan, slider vacío) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.hotelplazacolonial.com/ |
| Prioridad | ALTA: la descripción que Google muestra de su hotel es la de fábrica de WordPress y el sitio sigue viéndose de 2017; tiene fotos nuevas muy buenas (2026) y motor de reservas propio que se desaprovechan |
| Contacto publicado | Tel. (981) 811 9900 ext. 305 (reservaciones) y (981) 811 9930, reservaciones@hotelplazacolonial.com, FB /hotelplazacolonialcampeche. Sin WhatsApp |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Su descripción para Google es `"Just another WordPress site"`, el texto de ejemplo de WordPress. | Es lo que puede aparecer debajo de su nombre en Google y al compartir el enlace: en vez de "hotel en el Centro Histórico de Campeche" dice "otro sitio de WordPress" (en inglés). | `curl https://www.hotelplazacolonial.com/`, `<meta name="description">` |
| 2 | La portada no tiene ningún título principal (0 H1), ni datos de hotel para Google (sin JSON-LD) ni imagen para compartir (sin Open Graph). | Google no tiene claro que es un hotel ni dónde está; al compartirlo por WhatsApp o Facebook sale sin foto. | `curl` del inicio: 0 `<h1`, 0 `ld+json`, 0 `og:image` |
| 3 | No tiene WhatsApp: solo teléfonos fijos, un correo y un formulario que "contesta en 24 h". | La mayoría de los viajeros pregunta por WhatsApp; hoy tienen que llamar o esperar un día. | Todo el sitio (`crudo.json`, 5 páginas) |
| 4 | Su promoción de la portada ("3a Noche gratis… Vigente hasta septiembre 30, 2026") es una imagen generada con ChatGPT (trae credenciales C2PA de OpenAI) y vence en días. | Una imagen de IA en la primera pantalla resta confianza frente a sus fotos reales, que son muy buenas; y al vencer quedará una oferta caducada. | `curl` del inicio: `ChatGPT-Image-4-ago-2026-02_59_03-p.m.png`; metadatos del archivo en el clon |
| 5 | Hay dos páginas de habitaciones: /habitaciones/ está en inglés ("Rooms", "Standard room", "Std. occupation") y la de español dice "Air Conditioning, Flat-screen TV, Balcony with view" en la Jr. Suite. Las fotos tienen de texto alternativo el nombre del archivo o nada. | Se ve descuidado y confunde: un huésped mexicano cae en una página en inglés; las fotos no aparecen en Google Imágenes. | `curl https://www.hotelplazacolonial.com/habitaciones/` (title "Rooms – Hotel Plaza Colonial"); `alt` en `original.html` |
| 6 | Su número 01-800-000-PLAZA usa el prefijo 01, que dejó de marcarse en México en 2019; el pie dice "© 2008-2017" y muestra "Acceder" (acceso a WordPress) y enlaces a feeds. | Un número que no entra y un año viejo dan la impresión de un sitio abandonado. | `curl` de /habitaciones-2/ y del inicio |

## Qué le ofrecemos

- Que Google y las redes muestren bien al hotel: título, descripción real, foto de la fachada al compartir y datos de hotel.
- Una página que presume su fachada y sus fotos nuevas, y lleva directo a su motor de reservas con las fechas ya puestas.
- WhatsApp con la habitación y las fechas ya escritas en el mensaje (con el número que ellos elijan).

## Mensaje sugerido para el primer contacto

> Hola, buen día. Revisando hoteles del Centro Histórico de Campeche vi el sitio del Hotel Plaza Colonial y noté que la descripción que Google toma de su página es "Just another WordPress site", el texto de ejemplo de WordPress, en lugar de algo sobre el hotel. Sus fotos nuevas de la fachada y las habitaciones son muy buenas; preparé una propuesta de cómo podría verse su página aprovechándolas, con las fechas directo a su sistema de reservas. ¿Les puedo compartir el enlace?

## Preguntas para la conversación

- ¿Tienen WhatsApp para reservaciones? ¿Qué número?
- ¿Qué fotos son de la Jr. Suite y cuáles de la habitación estándar? ¿Tienen foto de la piscina?
- ¿Siguen usando el motor `hotelplazacolonial.hpaq.me`? ¿Quieren que el sitio muestre tarifas "desde"?
- ¿El 01-800-000-PLAZA sigue funcionando?
