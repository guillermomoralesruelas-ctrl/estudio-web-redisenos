# Hotel Villa Margaritas: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://villamargaritashotel.com/ (sitio propio y reciente, desarrollado por JCSE; motor de reservas propio con pago por Stripe) |
| Prioridad | **MEDIA**: el sitio está bien hecho y reserva en línea, pero dice que las tres habitaciones son para 2 personas cuando dos de ellas son para 4, y Google no tiene sus datos de hotel ni hay forma de ver cómo llegar |
| Contacto publicado | Tel. y WhatsApp +52 993 205 4701, hotelvillamargaritasventas@gmail.com (no publica redes sociales) |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-26/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-26 (inicio, /habitaciones, /habitaciones/doble-matrimonial, /habitaciones/king-size, /habitaciones/suite-familiar, /reservar y /pago responden 200; /favicon.ico, /robots.txt y /sitemap.xml dan 404) y en `investigacion/original.html` y `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **La capacidad de las habitaciones se contradice.** En /habitaciones las tres dicen "2 personas" y en el inicio "2 huéspedes", pero el texto de la Doble Matrimonial dice "perfecta para máximo 4 personas" y su página, igual que la de la Suite Familiar, dice "4 personas máx. por habitación". | Una familia de 4 que ve "2 personas" cree que necesita dos cuartos o busca otro hotel. Justo el público de la Suite Familiar y la Doble es el que se pierde. | /habitaciones, inicio (tarjetas) y /habitaciones/doble-matrimonial y /suite-familiar |
| 2 | **Google no tiene sus datos de hotel y no hay cómo llegar.** Ninguna página tiene datos estructurados de Hotel (JSON-LD), ni imagen para compartir (Open Graph), ni favicon; no hay mapa ni enlace a Google Maps, y tampoco `sitemap.xml`. | Quien busca "hotel cerca del ADO Villahermosa" no ve su precio ni su dirección en Google, y al compartir el enlace por WhatsApp no sale foto. El huésped que llega en autobús tiene que copiar la dirección a mano. | `original.html` y el sitio real (todas las páginas; /favicon.ico y /sitemap.xml dan 404) |
| 3 | **Las descripciones del inicio se cortan a media palabra.** Las tarjetas muestran los primeros 100 caracteres: "Cuenta con todos los servicio…", "Ambiente tranquilo co…", "microondas…". | Parece una errata en lo primero que lee el cliente, en la sección que más vende. | Inicio (script de `original.html`: `slice(0, 100)`) y `crudo.json` |
| 4 | **No se ven las habitaciones por dentro fuera de su página.** Las fotos de habitaciones solo están en la página de cada una; el inicio y la galería muestran salones, lobby y platillos, pero ninguna cama. | El huésped decide por la foto del cuarto. Hoy tiene que entrar a cada habitación para verla. | Inicio (galería de 9 fotos) y páginas de habitación |
| 5 | Detalles menores: el botón "Escríbenos" de la portada abre WhatsApp sin mensaje; no hay enlaces a redes sociales; "por / noche" en la franja de precios; las fotos de la galería tienen `alt` "Hotel Villa Margaritas — foto 1…9"; la página de error 404 repite dos veces el encabezado de la página (dos `<title>`); y Stripe se carga en todas las páginas, aunque solo se paga en /reservar y /pago. | Pequeños descuidos que restan un poco de confianza y de velocidad en el celular. | Sitio real e `original.html` |

Nota: el sitio tiene muchas cosas bien: es reciente, reserva y cobra en línea con su propio sistema (sin comisiones de Booking), muestra precios de oferta en todas las habitaciones, tiene WhatsApp con mensaje en el botón flotante, página para pagar con el código de reservación y datos de contacto claros. El argumento no es "su sitio está mal", sino que diga bien para cuántas personas es cada cuarto y que Google y los huéspedes lo encuentren.

## Qué le ofrecemos

- "¿Cuántos vienen?": el huésped pone cuántos adultos y menores viajan y ve, para cada tipo de habitación, cuántas necesita y cuánto paga por noche con sus precios de oferta; con un toque manda un WhatsApp con el grupo, la habitación y las fechas, o entra a su motor de reservas.
- Las tres habitaciones con su capacidad correcta y su texto completo, en una sola página con restaurante, salones, instalaciones y contacto.
- Datos de Hotel para Google, vista previa con foto al compartir, favicon y un botón de "Cómo llegar en Google Maps".
- Barra fija en el celular (reservar, WhatsApp, llamar y cómo llegar) y fotos más ligeras.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para hoteles. Estuve viendo el sitio de Villa Margaritas y está muy bien que se pueda reservar y pagar directo. Solo noté un detalle: en la lista de habitaciones las tres dicen "2 personas", pero la Doble Matrimonial y la Suite Familiar son para 4; una familia podría pensar que no le alcanza. Aprovechando, les preparé una propuesta de cómo podría verse el sitio en una sola página, con una calculadora que le dice al huésped cuántas habitaciones necesita según cuántos vienen. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Cuántas personas caben de verdad en cada habitación? ¿Los menores cuentan dentro del máximo? ¿Qué quiere decir "Sin cargo adicional por huéspedes extra" en la Suite Familiar?
- ¿Los precios de oferta aplican todo el año?
- ¿Cuántas reservas les llegan por el sitio y cuántas por WhatsApp o por teléfono?
- ¿Tienen fotos de las habitaciones en buena resolución para usarlas en la página principal?
- ¿Tienen redes sociales o reseñas en Google que quieran enlazar?
- ¿Qué horario y menú tiene el restaurante? ¿Rentan los salones a personas que no se hospedan?
- ¿Se puede abrir su motor de reservas con las fechas ya elegidas (por ejemplo, desde un enlace)?
