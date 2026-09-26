# Hotel Bravo Tepic: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://hotelbravotepic.com.mx/ (sitio propio en PHP con una plantilla de Bootstrap 4 de agencia de viajes, "Concepto y diseño por AM."; sin motor de reservas) |
| Prioridad | **ALTA**: el botón "Reservar" del inicio, el menú "Reservaciones" y el formulario de contacto no hacen nada (van a `#`), así que las reservas y los mensajes que intentan hacer desde el sitio se pierden; además los teléfonos no se pueden tocar en el celular y no hay WhatsApp |
| Contacto publicado | Tel. (311) 212-9565 y (311) 212-0327, reservaciones@hotelbravotepic.com.mx, Facebook /hotelbravotepic (no publica WhatsApp; el enlace de Instagram va a `#`) |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-26/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-26 (inicio, /acerca-de, /habitaciones y /contacto responden 200; /reservaciones, /favicon.ico, /robots.txt y /sitemap.xml dan 404) y en `investigacion/original.html` y `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Reservar desde el sitio no funciona.** El formulario "Reserva una habitación" del inicio tiene `action="#"` y ningún script lo envía: al tocar "Reservar" no pasa nada. Además, el calendario de "Fecha de llegada" y "Fecha de salida" está configurado para elegir solo años (`minViewMode: 2`), no días. El menú "Reservaciones" de todas las páginas también va a `#`, y las cuatro habitaciones del inicio enlazan a `#`. | El huésped que ya decidió y quiere reservar se topa con un botón muerto. Es el momento en que más fácil se pierde una venta: se va a Booking o a otro hotel. | Inicio y todas las páginas (`<form action="#" id="find_form">`, script del datepicker, `href="#"`) |
| 2 | **El formulario de contacto no envía nada.** En /contacto el formulario tiene `action="#"`, los campos de nombre, correo y asunto no tienen `name` y no hay ningún script que lo mande. El botón "Enviar" no hace nada. | Quien pregunta por tarifas, salones o promociones (lo que la propia página invita a preguntar) cree que escribió al hotel y nunca recibe respuesta. | /contacto (`<form action="#" id="contact_form">`; `js/custom.js` no lo maneja) |
| 3 | **No hay WhatsApp y los teléfonos no se pueden tocar.** Los números (311) 212-9565 y 212-0327 están como texto, sin enlace `tel:`, en el encabezado y en el pie; no hay botón de WhatsApp. El chat de Facebook Messenger que carga la página es un complemento que Meta dejó de ofrecer en 2024. | En el celular, llamar exige copiar el número a mano. Hoy la única forma de reservar es por teléfono o correo, así que cada paso de más son reservas que no llegan. | Todas las páginas (`<span class="telefono">`, pie; `fb-customerchat`) |
| 4 | **La Habitación Familiar muestra la foto de la Doble.** `habitacion-familiar.jpg` y `habitacion-doble.jpg` son el mismo archivo (mismo MD5). La Familiar dice "6 individuales" y la foto enseña dos camas. Además, la Doble dice "1 matrimonial" y su foto muestra dos camas. | La Familiar es la habitación más cara ($2,100); una familia que no ve sus 6 camas duda o pregunta de más. | /habitaciones e inicio (fotos descargadas del sitio real y comparadas) |
| 5 | **Google no tiene sus datos de hotel.** No hay H1 en ninguna página, ni datos estructurados de Hotel (JSON-LD), ni imagen para compartir (Open Graph); la página dice estar en inglés (`lang="en"`) y las cuatro páginas usan la misma descripción; no hay `sitemap.xml`. | Al buscar "hotel centro Tepic" Google entiende peor qué es y cuánto cuesta, y al compartir el enlace por WhatsApp no sale foto. | `original.html` y las cuatro páginas del sitio real |
| 6 | **"Pago en línea" que no existe.** En Servicios dice "Pago en línea: Pago mediante tarjetas bancarias…", pero el sitio no tiene forma de pagar. | Promete algo que el huésped no encuentra. | /acerca-de |
| 7 | Detalles menores: el enlace de Instagram va a `#`; el botón "Un tour por las instalaciones" abre un video `.mov` de 53 MB (pesado para el celular); los números de "Acerca de Tepic" salen en 0 hasta que se anima la página; erratas ("estuvierán", "sálon", "Nyarit", "programadolo", "Sígenos"); la portada usa una foto del volcán y un fondo de palmeras de la plantilla en vez del hotel; `/favicon.ico` da 404. | Pequeños descuidos que restan confianza. | Sitio real e `original.html` |

Nota: el sitio tiene cosas bien: publica precios "desde" de las cuatro habitaciones, dos promociones claras (noche gratis y salón por hora), dirección, dos teléfonos, correo y un aviso claro de espacio libre de humo. El problema no es la información, es que **no se puede actuar** sobre ella desde el sitio.

## Qué le ofrecemos

- Botones que sí funcionan: WhatsApp con la habitación ya escrita en el mensaje, llamada con un toque y correo, en toda la página y en una barra fija en el celular.
- "¿Cómo quieres dormir?": el huésped ve las cuatro habitaciones dibujadas con sus camas (1 matrimonial, king size, 2 matrimoniales o 6 individuales) y si tienen ventilador o aire acondicionado, elige y pide disponibilidad.
- Sus promociones al frente (la séptima noche gratis y el salón a $150 por hora) con su botón para preguntar.
- Datos de Hotel para Google, vista previa con foto al compartir y botón "Cómo llegar en Google Maps".
- Si quieren, más adelante un motor de reservas o un bot de WhatsApp.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para hoteles. Revisando el sitio del Hotel Bravo noté algo que les puede estar costando reservas: el botón "Reservar" del inicio y el formulario de contacto no envían nada, así que quien intenta reservar o preguntar desde ahí no les llega. Les preparé una propuesta de cómo podría verse el sitio en una sola página, con WhatsApp y llamada en un toque y las habitaciones explicadas por sus camas. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Cómo les llegan hoy las reservas: teléfono, Facebook, Booking? ¿Tienen WhatsApp para el hotel?
- ¿Sabían que el formulario del sitio no envía? ¿Alguien les ha dicho que escribió y no le contestaron?
- ¿Cuántas camas tiene de verdad la Doble? ¿Tienen fotos de la Familiar, del edificio y del salón?
- ¿Cuántas personas caben en cada habitación y cuánto cuesta la persona extra?
- ¿Horario de entrada y salida? ¿Los precios cambian por temporada?
- ¿La noche gratis aplica en cualquier habitación y todo el año?
- ¿Les interesaría recibir reservas en línea o prefieren seguir por teléfono y WhatsApp?
