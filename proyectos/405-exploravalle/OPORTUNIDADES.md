# Explora Valle: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26) y con curl a sus páginas el 2026-09-27. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://exploravalle.com/ |
| Prioridad | MEDIA: lo que Google muestra de dos experiencias trae un precio distinto al que cobran ("Lancha desde $1000" contra $1,700; "Stupa en $350" contra $400), el correo del sitio manda a otra dirección de la que dice, y el sitio arrastra textos en inglés y un script de reservas que da 404 |
| Contacto publicado | Teléfono y WhatsApp 722 851 90 81 (botón de Joinchat con 5217228519081); contacto@exploravalle.com y atencionaclientes@exploravalle.com; Rincón San Vicente #13, Col. Centro, Valle de Bravo; oficina 9:00 - 19:00 hrs; Facebook exploravalle1, Instagram exploravalle, Twitter ExploraValle1 |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Precios distintos entre el título y la ficha.** La página de la lancha se titula "Oferta paseo en Lancha desde $1000 en Valle de Bravo", pero cobra $1,700 (antes $1,800). La de la Stupa, "Oferta Tour a la Stupa en $350", y cobra $400 (antes $489). El título es lo que sale en Google y al compartir el enlace. | Quien llega esperando $1,000 y ve $1,700 siente que lo engañaron, se va o llama a reclamar. | `<title>` y precio de `lancha-en-valle-de-bravo/` y `tour-a-la-stupa-de-valle-de-bravo/` (curl, 2026-09-27) |
| 2 | **El correo dice una dirección y manda a otra.** En la cabecera y en "Contáctanos" se lee contacto@exploravalle.com, pero el enlace abre un correo a atencionaclientes@exploravalle.com. | Si una de las dos bandejas no se revisa, se pierden solicitudes de grupos y empresas (team building), que suelen escribir por correo. | `crudo.json` (texto y `mailto:`) y la portada real (enlace protegido por Cloudflare que decodifica a atencionaclientes@, curl 2026-09-27) |
| 3 | **Datos que se contradicen dentro de las fichas.** La Stupa da como punto de encuentro Rincón San Vicente **#7** (las demás, #13). Todo Valle dice que incluye "Estacionamientos" y, en la misma ficha, "No contamos con estacionamientos". La cabalgata se puede reservar a las 16:30 y 17:00 aunque su horario es de 9:30 a 4:00 pm; la lancha a las 9:00 aunque abre a las 10. La política dice "Para una devolución se deberá realizar mínimo 6 antes" (falta la unidad). | Llamadas y mensajes de más para preguntar, clientes en la puerta equivocada y reservas en horas que no existen. | Fichas de la Stupa, Todo Valle, cabalgata, lancha y guía turístico (curl y `crudo.json`) |
| 4 | **Partes del sitio en inglés y restos del tema.** "Book the tour", "Details", "Photos", "You May Also Like", "One tour per person", "Find Tours", "Tour Reviews", "Leave a Review" y calificaciones "Perfect / Good / Average". En la ficha de la cuatrimoto quedaron publicadas como "reseñas" de 5 estrellas un "Dudas de precios" y una respuesta del negocio ("Estamos a sus ordenes por whatsapp"). | Da imagen de sitio a medio terminar a un público que busca en español, y las reseñas falsas de 5 estrellas le quitan valor a las reales. | Portada y fichas (curl, 2026-09-27), `crudo.json` |
| 5 | **Un script de reservas que no existe.** Todas las páginas cargan `ticketing.umd.min.js` de GetYourGuide, que responde 404. | Cada visita pierde tiempo cargando algo roto; si esperaban vender por GetYourGuide desde el sitio, eso no está funcionando. | `original.html` y curl a `https://cdn.getyourguide.com/partner-ticketing/latest/ticketing.umd.min.js` (404) |
| 6 | **Google entiende poco del negocio.** La portada no tiene H1 (tampoco las fichas de bicicleta, cuatrimoto, cabalgata, kayak y Stupa); el JSON-LD solo dice `WebPage` e `ImageGallery` (de los logos), sin `TravelAgency` o `LocalBusiness` con dirección y teléfono; no hay `og:image`. | Menos visibilidad en "tours en Valle de Bravo" frente a otras operadoras, y enlaces sin foto cuando se comparten por WhatsApp. | `original.html` y curl a las fichas (conteo de `<h1>`) |
| 7 | **El botón de WhatsApp solo pide descuentos.** Su mensaje prellenado es "busco descuentos de actividades en Valle de Bravo"; no lleva la actividad, el día ni las personas. | Cada conversación empieza con preguntas de ida y vuelta antes de poder confirmar. | `data-settings` de Joinchat en la portada (curl) |

Lo que sí está bien y conviene decirlo: tienen un catálogo amplio y bien explicado (qué incluye, qué llevar, duración, edad mínima, punto de encuentro), precios visibles con su oferta, WhatsApp en todas las páginas, 4.9 en Google y fotos propias con su marca de agua. No se encontró spam ni hackeo.

## Qué le ofrecemos

- **Reservas que llegan completas:** la postal manda por WhatsApp la experiencia, el día, la hora, cuántas personas y el total, calculado con sus reglas (kayak doble, lancha hasta 5, cuatrimoto con acompañante, guía hasta 30).
- **Un precio y un dato por cosa:** los diez tours en una sola página, con el mismo precio en el título, la ficha y el mensaje, y las reglas de cada uno a la vista.
- **Todo en español** y sin restos del tema ni scripts rotos.
- **Que Google los entienda:** título y descripción reales, un H1, JSON-LD de agencia de viajes con sus diez experiencias y precios, e imagen para compartir.
- Barra fija en el celular para escribir, llamar o llegar a la oficina en el centro.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar. Menciona **un** hallazgo concreto y ofrece enseñar la propuesta.

> Hola, buen día. Estuve viendo el sitio de Explora Valle y me gustó lo completo que es su catálogo de tours en Valle de Bravo. Les aviso de un detalle: en Google la lancha aparece "desde $1000" y la Stupa "en $350", pero en la página cobran $1,700 y $400, y eso puede confundir a quien llega por la búsqueda. Hice una propuesta de rediseño con sus propias fotos y precios: el visitante elige su experiencia como una postal, pone día, hora y personas, y les llega por WhatsApp con el total ya calculado. ¿Les puedo enseñar cómo quedó? Son cinco minutos.

## Preguntas para la conversación

- ¿El acompañante de la cuatrimoto paga? ¿La "Promoción 2x1" sigue vigente?
- ¿La lancha y la Stupa cuestan $1,700 y $400, o los precios del título?
- ¿El punto de encuentro de la Stupa es el #7 o el #13 de Rincón San Vicente? ¿Qué días abre la oficina?
- ¿Cuál correo revisan: contacto@ o atencionaclientes@?
- ¿Tienen fotos propias de las cascadas, La Peña, la Stupa y los recorridos, y las cinco actuales en tamaño grande? ¿La panorámica del lago es suya?
- ¿Los logos de su portada (Bimbo, Danone, PlayStation, AMTAVE…) son clientes de team building o afiliaciones?
- ¿Venden por GetYourGuide? ¿Quieren conservar el carrito o reservar solo por WhatsApp?
