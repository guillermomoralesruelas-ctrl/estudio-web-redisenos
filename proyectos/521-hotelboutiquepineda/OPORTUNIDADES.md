# Hotel Boutique Pineda: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://hotelboutiquepineda.com/ (WordPress, tema CozyStay; desarrollado por Squadra Marketing Puerto Vallarta) |
| Prioridad | **ALTA**: la página de sus suites muestra texto de plantilla en inglés sobre "películas de montañismo", y la foto de la fachada parece generada con IA |
| Contacto publicado | Tel. y WhatsApp +52 322 180 4587, reservaciones@hotelboutiquepineda.com, IG y FB @hotelboutiquepineda |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Los tres primeros se comprobaron descargando el sitio real el 2026-09-26 a las 11:34.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | En la página de la **Suite 6 Personas**, la lista "What's included in this suite?" es texto de ejemplo del tema, en inglés y pensado para un hotel de montaña: "TV-UHD screen for watching mountaineering films", "Room safe for your top mountain photos", "Writing desk with USB ports for documenting your adventures". También aparecen "Family-friendly Amenities" (Kids Swimming Pool, Washing Machine) sin saber si son reales. | Es la página donde el cliente decide y reserva la suite más cara. Promete cosas que tal vez no existen y se nota que nadie la revisó. | `crudo.json` (room/suite-6-personas) y sitio real |
| 2 | La foto grande de la **fachada** es un archivo llamado `ChatGPT-Image-Feb-5-2026-08_48_21-PM.png`. Además, la foto de la reseña es de banco (Unsplash, `apostolos-vamvouras`). | Si la fachada no es el edificio real, el huésped que llega puede sentirse engañado y dejar una mala reseña. Las fotos reales generan más confianza. | `original.html` y sitio real |
| 3 | No tiene meta description, y la vista previa que sale al **compartir el enlace** (WhatsApp o Facebook) dice: "Book Your Stay Check In Check Out Suites Suites Rooms quantity Pax Adultos Adults quantity Niños…". Tampoco tiene datos de `Hotel` para Google (solo `WebSite` y `Organization`). | Casi todas las reservas de Guayabitos se recomiendan por WhatsApp. Cada vez que alguien comparte el sitio, la vista previa se ve rota. Google no conoce sus precios, dirección ni check-in. | Sitio real (`og:description`) y `original.html` |
| 4 | El buscador de reservas y la página de cada suite mezclan inglés y español: "Rooms quantity", "Adults quantity", "Book Your Stay", "Check Availability", "Discover More", y un calendario en inglés. | Su público es nacional y familiar; en inglés se ve descuidado y confunde al reservar. | `crudo.json` (inicio y suites) |
| 5 | Erratas en el texto de venta: "Una suite **equipara**…", "$1,650 MXN **PNoche**" junto a "P/Noche". | Detalles pequeños que restan confianza justo al lado del precio. | `crudo.json` (inicio) |
| 6 | Las 15 imágenes del inicio tienen `alt` vacío. | Google Imágenes no las entiende y las personas con lector de pantalla no saben qué muestran. | `original.html` |

Nota: sus fotos de sesión (suites, alberca, restaurante) son buenas y los precios están a la vista, eso está muy bien. El argumento es que la página de las suites tiene texto que no es suyo y que el sitio se ve mal al compartirlo.

## Qué le ofrecemos

- Un sitio en español, sin texto de plantilla, donde todo lo que dice es del hotel.
- "¿Cuántos viajan?": cada familia ve en segundos qué suite le toca, cuánto cuesta y cuánto sale por persona, y reserva por WhatsApp con el mensaje ya escrito.
- Vista previa correcta al compartir por WhatsApp y Facebook, y datos de hotel para Google (precios, dirección, check-in y check-out).
- Reservar siempre a un toque en el celular.
- Sitio ligero: las fotos pasan de 15 MB a 1.5 MB sin perder calidad visible.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para hoteles. Revisando el de Hotel Boutique Pineda (las fotos de las suites y de la alberca están muy bien) vi que en la página de la Suite 6 Personas aparece un texto en inglés que venía de la plantilla, sobre "películas de montañismo" y "fotos de montaña", que seguramente nadie ha notado. Les preparé una propuesta de cómo podría verse el sitio, todo en español y con la reserva por WhatsApp más directa. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿La foto de la fachada es real? ¿Tienen una foto del edificio?
- ¿Cuántas suites tienen de cada tipo? ¿Cómo cotizan a los grupos de más de 6 personas?
- ¿Tienen alberca de niños, cunas o lavadora para huéspedes?
- ¿Los precios cambian por temporada? ¿Los niños pagan?
- ¿Qué son Casa Sueños y Casa Amanecer?
- ¿Prefieren recibir las reservas por WhatsApp o por su motor en línea?
