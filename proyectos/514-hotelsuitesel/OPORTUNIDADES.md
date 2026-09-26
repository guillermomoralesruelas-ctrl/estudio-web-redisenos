# Hotel & Suites El Moro: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://hotelelmoro.com/ (sitio propio, renovado hace poco, desarrollado por PixelesWeb; reservas en Cloudbeds) |
| Prioridad | **BAJA**: el sitio está bien hecho (precios a la vista, WhatsApp con mensaje, página de Larga Estancia muy completa, datos de Hotel para Google). Hay detalles que corregir, el más visible: los botones de WhatsApp de las actividades mandan el mensaje con la actividad equivocada |
| Contacto publicado | Tel. +52 612 122 4084 y +52 612 125 2828, WhatsApp +52 612 159 1758, reservaciones@hotelelmoro.com, IG @hotelsuiteselmoro, FB "Hotel Suites Club El Moro" |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-26/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-26 (inicio, /habitaciones, las cinco páginas de habitación, /reservaciones, /galeria, /larga-estancia, /kayak, /pesca-deportiva, /buceo-scuba, /snorkeling, /contacto, /terminos-y-condiciones, /blog, /en y dos entradas del blog; todas responden 200) y en `investigacion/original.html`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **El WhatsApp de las actividades pregunta por otra actividad.** El botón "Preguntar por WhatsApp" de /kayak, /pesca-deportiva y /buceo-scuba abre el mensaje "Me interesa la actividad 'Snorkeling'", y el de /snorkeling dice "'Buceo Scuba'". | El huésped que quiere pescar manda un mensaje sobre snorkel: recepción tiene que aclarar qué quiere y el cliente ve un descuido justo cuando está por decidir. | Sitio real (enlace `wa.me` de las cuatro páginas) |
| 2 | **Dos correos distintos.** En todas las páginas se ve reservaciones@hotelelmoro.com, pero los datos para Google (JSON-LD) y la página de Larga Estancia, donde se piden las cotizaciones largas, dan informacion@hotelelmoro.com. | Si uno de los dos buzones no se revisa, se pierden justo las cotizaciones de estancias de semanas o meses, las más valiosas. | Sitio real (/larga-estancia y JSON-LD de todas las páginas) |
| 3 | **Reservar tiene pasos de más.** Antes de abrir Cloudbeds el sitio muestra una pantalla con cuenta regresiva de 5 segundos ("Abriendo en…"), y el buscador del inicio abre el motor en inglés (`/en/reservation/`) aunque la página esté en español. | Cada paso extra en el momento de pagar hace que algunos abandonen, y el motor en inglés confunde al huésped nacional. | `original.html` (script con `COUNTDOWN_SECONDS = 5`) y `crudo.json` (enlace del botón RESERVAR) |
| 4 | **Restos de la plantilla anterior de WordPress.** El formulario "Subscríbete" del pie es el de un plugin de WordPress (MailChimp for WordPress, fechado en 2016) que se envía a la misma página en un sitio que ya no es WordPress; lo más probable es que no guarde los correos (no se probó enviándolo). El servicio "Restaurant" solo dice "Restaurant", y los íconos de servicios son de 2015. | Un boletín que no guarda correos es una lista de clientes que no se está formando; y el restaurante, que podría vender, no dice nada. | Sitio real (inicio: formulario `mc4wp-form-1`) y `crudo.json` |
| 5 | **Larga Estancia no da ninguna referencia de precio.** La página es muy buena (comparación con rentar, qué incluye, preguntas frecuentes), pero para saber cuánto cuesta un mes hay que escribir por WhatsApp. | Quien compara con un departamento o Airbnb quiere un "desde" para decidir si vale la pena preguntar. | Sitio real (/larga-estancia) |
| 6 | Erratas y datos que no cuadran: "Está habitación" (Estándar Doble y Suite Familiar), "cuenta dos habitaciones" (Master Suite), la Suite con Desván se llama "Suite con Loft" en su propia página, la Suite Deluxe dice tener sala y comedor pero no los lista, "1 galón de agua purificada de 6lts" (un galón son 3.8 L), "Lúnes", "vivélo", "Subscríbete", "Hacía Arriba" (en todas las páginas), "¿Como realizo…?" y "a las siguientes teléfonos". | Detalles pequeños que restan confianza en un sitio que, por lo demás, se ve cuidado. | Sitio real (páginas de habitación, /larga-estancia, /contacto, /galeria) y `crudo.json` |

Nota: el sitio tiene muchas cosas bien: precios por noche con descuento por reservar directo e impuestos incluidos, WhatsApp con mensaje prellenado en casi todos los botones, textos y `alt` en las fotos, versión en inglés, blog activo (entradas de junio a septiembre de 2026) y datos de `Hotel` para Google. El argumento no es "su sitio está mal", sino convertir más: juntar en una sola página lo que hoy está en diez, y hacer que la Larga Estancia se entienda y se cotice en un minuto.

## Qué le ofrecemos

- "Una noche, una semana o toda la temporada": un selector de noches que, con sus precios publicados, calcula el total y el ahorro por reservar directo, y desde 7 noches explica la Larga Estancia que le toca (semana, mes o temporada) y manda un WhatsApp ya armado con habitación, personas, llegada y noches.
- Una sola página con las cinco habitaciones, Larga Estancia, actividades y contacto, sin pantallas intermedias: reservar abre directo su Cloudbeds en español con las fechas elegidas.
- WhatsApp con la actividad correcta en cada botón y un solo correo en todo el sitio.
- Barra fija en el celular (reservar, WhatsApp, llamar y cómo llegar) y fotos más ligeras.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para hoteles. Estuve viendo el sitio de El Moro y está muy bien hecho; la página de Larga Estancia me gustó mucho. Solo noté un detalle: en las páginas de kayak, pesca y buceo, el botón de WhatsApp manda el mensaje preguntando por snorkel. Aprovechando, les preparé una propuesta de cómo podría verse el sitio en una sola página, con una calculadora de noches que lleva directo a la reserva o a cotizar la larga estancia por WhatsApp. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Qué correo quieren en el sitio: reservaciones@ o informacion@? ¿Los dos se revisan?
- ¿Cuántas de sus reservas son de larga estancia y cómo les llegan (WhatsApp, Airbnb, recomendación)?
- ¿Pueden publicar un "desde" por semana o por mes para Larga Estancia?
- El precio tachado y el precio directo (10 % menos), ¿aplican todo el año y así los cobra Cloudbeds?
- ¿Qué ofrece el restaurante (horario, desayuno, menú) y quieren mostrarlo?
- ¿El boletín del pie les está juntando correos? ¿Lo usan?
- ¿Tienen fotos de las actividades, del restaurante y del lobby en buena resolución, y reseñas de Google o TripAdvisor que podamos enlazar?
