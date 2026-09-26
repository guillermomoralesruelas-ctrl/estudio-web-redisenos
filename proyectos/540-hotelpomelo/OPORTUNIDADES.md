# Hotel Pomelo: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.hotelpomelo.com/ (Squarespace) |
| Prioridad | **ALTA**: el botón "Escríbenos" del inicio lleva a un WhatsApp con el número incompleto y el formulario de newsletter no guarda los correos |
| Contacto publicado | WhatsApp (+52) 55 2069 4573, tel. (+52) 55 3919 0673, hola@hotelpomelo.com, IG @hotelpomelo, Facebook "Hotel Pomelo" |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Los tres primeros se volvieron a comprobar descargando el sitio real el 2026-09-26 a las 11:17.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | El botón **"Escríbenos"** de la sección "¿Qué te apetece?" abre `wa.me/+5220694573`: al número le faltan los dígitos "55" (el correcto es 52 55 2069 4573). WhatsApp no encuentra ese número. | Es el botón que aparece justo después de las experiencias, cuando el huésped ya está interesado. Esas consultas se pierden sin que el hotel se entere. | `original.html` (enlace `buttonLink` de la sección) y sitio real |
| 2 | El **formulario de newsletter** ("Únete a nuestro newsletter") no está configurado: el bloque de Squarespace no tiene dónde guardar los correos (`data-collection-id` vacío y el aviso "This newsletter signup form needs a storage option" en el HTML). | Quien deja su correo cree que se suscribió, pero el hotel no recibe nada. Es una lista de clientes potenciales que se pierde. | `original.html`, `crudo.json` (inicio) y sitio real |
| 3 | La **meta description está vacía** y los datos para Google (`LocalBusiness`) tienen la dirección y el horario vacíos. | Google arma el resumen del resultado con cualquier texto de la página y no tiene la dirección del hotel en datos estructurados. Menos visibilidad frente a otros hoteles de Troncones. | `original.html` y sitio real |
| 4 | Publican dos números sin aclarar para qué es cada uno: "Teléfono (+52) 55 3919 0673" en Visítanos y "(+52) 55 2069 4573" en el pie (WhatsApp). | El huésped no sabe a cuál escribir o llamar. | `crudo.json` (inicio) |
| 5 | Erratas visibles: "Únete a nuestro **newsltetter**", "**Nuestas** habitaciones" y "© HOTEL POMELO **2025**". El mensaje prellenado de surf termina con los caracteres "\n\n". | Detalles menores, pero en un hotel boutique que vende cuidado en cada detalle restan confianza. | `crudo.json` (inicio y habitaciones) y `original.html` |
| 6 | La información está repartida en seis páginas (Habitaciones, Eventos, Galería, Nosotros, Vive Troncones) y en el celular la reserva queda dentro del menú. | Más pasos para llegar a reservar. | `crudo.json` |

Nota: el sitio está muy bien escrito y las fotos son excelentes. El argumento no es "su sitio está mal", sino que dos botones importantes no funcionan y la reserva puede estar más a mano.

## Qué le ofrecemos

- Que ninguna consulta se pierda: todos los botones de WhatsApp con el número correcto y un mensaje prellenado por tema (estancia, mesa en El Chiringuito, surf, yoga, masaje, caballo, eventos).
- Reservar siempre a un toque: botón fijo en el celular con Reservar, WhatsApp, llamar y cómo llegar.
- Todo en una sola página que carga rápido, sin depender de los scripts de Squarespace.
- Mejor presencia en Google: descripción real y datos de `Hotel` con dirección, teléfono y número de habitaciones.
- Un detalle propio del lugar: el atardecer de Troncones de cada día en la portada, que refuerza su lema "Aquí el tiempo fluye diferente".

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, Ángela y Fran. Soy Guillermo, diseño sitios web para hoteles boutique. Revisando el de Pomelo (que tiene fotos y textos preciosos) vi que el botón "Escríbenos" de la sección de experiencias abre un WhatsApp con el número incompleto, así que esas consultas no les llegan. Les preparé una propuesta de cómo podría verse el sitio con la reserva siempre a mano y todos los WhatsApp funcionando. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Qué número prefieren para llamadas y cuál para WhatsApp?
- ¿Quieren publicar tarifas o noches mínimas, o prefieren que todo pase por el motor de reservas?
- ¿Usan algún servicio para el newsletter (Mailchimp, Squarespace Email)?
- ¿Tienen el video de portada en archivo y la versión en inglés de los textos?
- ¿El Chiringuito recibe a gente que no se hospeda? ¿En qué horario?
