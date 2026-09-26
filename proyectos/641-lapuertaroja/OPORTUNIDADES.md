# La Puerta Roja Hotel Boutique: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/crudo.json` y `sitio/index.html` (captura del 2026-09-26). Los defectos del clon no son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir https://lapuertarojahotel.com.mx/Nosotros: si ya lo arreglaron, empieza por el hallazgo 2.

| Dato | Valor |
|---|---|
| Sitio | https://lapuertarojahotel.com.mx/ |
| Prioridad | **ALTA**: su sitio muestra publicidad de casinos y su botón de reservar lleva a fechas imposibles. Les está costando reservas y reputación ahora mismo. |
| Contacto publicado | Tel. (647) 428 1552 (y otro número en el encabezado: 647 428 0142). Instagram y Facebook @lapuertarojahotel. No publican WhatsApp ni correo. |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **La página "Nosotros" muestra publicidad de casinos en indonesio** ("NAGA188: Slot Gacor 777…"). El título de la página también es de casino. | Un huésped que busca conocerlos encuentra spam de apuestas: pierde confianza. Google puede bajarlo en los resultados o marcarlo como sitio de riesgo; si ya indexó esa página, puede aparecer así en las búsquedas. Suele ser señal de que el sitio o el dominio fueron vulnerados. | https://lapuertarojahotel.com.mx/Nosotros (`crudo.json`, página 3) |
| 2 | **El botón "Reservar" lleva a Cloudbeds con fechas imposibles:** llegada 16/06/2024 y salida 29/12/2021. | Quien quiere reservar ve un error o fechas pasadas, y muchos se van sin reservar. Es el botón más importante del sitio. | Todos los botones "Reservar" (`crudo.json`) |
| 3 | **Al pie del inicio aparece "This is the free demo result…" de una herramienta que recupera sitios de archive.org.** El sitio se reconstruyó con una versión de prueba que solo recuperó 4 páginas. | Se ve poco profesional, y 6 de las 7 habitaciones no tienen página: el enlace "Ver detalles" de Índigo, Concha, Escher, Turquesa, Azul y Rosa no lleva a nada útil. | Final del inicio y `/habitaciones/indigo` (`crudo.json`) |
| 4 | **Cada habitación muestra dos tarifas distintas**, por ejemplo Elefante a $2,700 y a $1,700. | El cliente no sabe cuánto cuesta, desconfía o llama solo para preguntar. | Página Habitaciones (`crudo.json`) |
| 5 | **Dos teléfonos diferentes** en el encabezado: 428 1552 y 428 0142. | Confunde: ¿a cuál llamo? | Encabezado (`crudo.json`) |
| 6 | **Ninguna foto tiene descripción** (0 de 23) y no hay datos estructurados de hotel. | Google Imágenes y Google Maps no entienden qué es cada foto; se pierde visibilidad en búsquedas como "hotel boutique Álamos". | `sitio/index.html` |
| 7 | **La descripción de Google promete "desayuno incluido y estacionamiento cercano a la plaza principal"**, pero el sitio no lo menciona en ningún lado. | Buena oferta escondida: si es verdad, debería verse en el sitio. Si ya no aplica, es una promesa que no se cumple. | Etiqueta `meta description` de `sitio/index.html` |

## Qué le ofrecemos

- **Un sitio limpio y nuevo, sin el spam y sin restos de la demo.** Recomendarles además revisar quién tiene acceso a su dominio y hosting, y cambiar contraseñas.
- **Reservas que funcionan:** el botón lleva a su Cloudbeds sin fechas rotas, desde cualquier parte del sitio y desde la barra fija del celular.
- **Las 7 habitaciones en un solo lugar**, con capacidad y una tarifa clara. Se eligen como "puertas", en línea con su marca.
- **Mejor presencia en Google:** descripciones de fotos, datos estructurados de hotel y un título y descripción correctos.
- **Sus propias fotos y textos**, con Teresita's, Le Bleu y los eventos bien presentados.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, por teléfono, Instagram o Facebook. Tono respetuoso, sin alarmar.

> Hola, buen día. Soy Guillermo, hago sitios web para hoteles y restaurantes. Revisando el sitio de La Puerta Roja noté algo que les conviene saber: la página "Nosotros" (lapuertarojahotel.com.mx/Nosotros) está mostrando publicidad de casinos en otro idioma, y el botón de Reservar abre el calendario con fechas de 2021 y 2024. Suele pasar cuando alguien se mete al sitio o cuando se restauró con una herramienta de prueba.
> Me tomé la libertad de preparar una propuesta de sitio nuevo con sus propias fotos y textos, con las siete habitaciones y la reserva funcionando. ¿Les puedo enseñar cómo quedó? Son 10 minutos.

## Preguntas para la conversación

- ¿Cuál es la tarifa vigente de cada habitación y es por noche? ¿Cambia por temporada?
- ¿Tienen fotos, descripción y amenidades de Índigo, Concha, Escher, Turquesa, Azul y Rosa?
- ¿Cuál es el teléfono principal? ¿Tienen WhatsApp para reservas?
- ¿El desayuno está incluido? ¿Tienen estacionamiento?
- ¿Quién les administra hoy el dominio y el sitio?
