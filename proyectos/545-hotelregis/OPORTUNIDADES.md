# Hotel Regis: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/crudo.json` (captura del 2026-09-26) o en el sitio en vivo (2026-10-09). Los defectos del clon **no** son problemas del cliente. Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado.

| Dato | Valor |
|---|---|
| Sitio | https://hotel-regis.com/ |
| Prioridad | **MEDIA**: el sitio es reciente y funciona, pero tiene testimonios de ejemplo que se contradicen con su propia información |
| Contacto publicado | 686 566 3435, 686 566 8802, inforegis@hotel-regis.com, Facebook hotelregismexicali |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Tres testimonios con 6 estrellas (★★★★★★); uno dice "El desayuno incluido es delicioso" y en amenidades dice "Desayuno: no incluido en la reservación". | Se notan inventados y generan un reclamo por el desayuno. | `crudo.json` y código de su página |
| 2 | "Reservar Mesa" de Villa Don Nacho no lleva a ningún lado. | El restaurante pierde reservaciones desde el sitio. | `crudo.json` (botón sin enlace) |
| 3 | La galería repite las mismas fotos de habitaciones y restaurante. | Parece que tienen menos de lo que tienen. | `resumen.json` (rutas repetidas) |
| 4 | Sin WhatsApp; para reservar hay que llamar o mandar correo en blanco. | En Mexicali mucha gente reserva por WhatsApp. | `crudo.json` |
| 5 | Fotos en formato `.jfif` sin texto alternativo ("Image 6", "Image 8"). | Google no sabe qué muestran; algunos navegadores no las previsualizan al compartir. | `resumen.json` |
| 6 | Errores de escritura: "Habitacion" sin acento. | Detalle de cuidado en un hotel "de tradición". | `crudo.json` |

## Qué le ofrecemos

- Testimonios reales (de Google) en vez de los de ejemplo, y "desayuno con costo adicional" claro en todas partes.
- "¿A qué hora llegas?": el huésped ve si ya puede hacer check-in y qué sirve Villa Don Nacho a esa hora.
- Cuenta de la estancia con sus precios y correo ya escrito.

## Mensaje sugerido para el primer contacto

> Hola, ¿Hotel Regis? Soy Guillermo, hago sitios web para hoteles.
>
> Vi su sitio y los testimonios tienen 6 estrellas y uno dice que el desayuno está incluido, cuando más abajo dice que no. Además, "Reservar Mesa" de Villa Don Nacho no lleva a ningún lado.
>
> Les preparé una propuesta con sus precios, un reloj que dice qué está abierto a la hora que llega el huésped y una cuenta de la estancia. ¿Se la enseño en 5 minutos?

## Preguntas para la conversación

- ¿Los precios incluyen impuestos? ¿Siguen vigentes?
- ¿Tienen WhatsApp para reservaciones?
- ¿Cómo prefieren recibir reservas de mesa en Villa Don Nacho?
- ¿Podemos usar reseñas reales de Google?
