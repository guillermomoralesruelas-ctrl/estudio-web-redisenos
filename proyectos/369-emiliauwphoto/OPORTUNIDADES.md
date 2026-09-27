# Emilia UW Photo (Emilia Black Box): oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://emilia-uwphoto.com/ (WordPress con Astra y Elementor; reseñas con Trustindex, WhatsApp con el widget GetButton, formulario de contacto). Fotografía submarina en cenotes entre Tulum y Playa del Carmen |
| Prioridad | **MEDIA**: su sitio no está roto, pero pierde reservas en cómo presenta la información: cada botón "Check availability" y "Book your photoshoot" lleva a un formulario, su WhatsApp solo existe dentro de un widget de terceros, en Services dos títulos llevan a la página equivocada y sus preguntas frecuentes le dicen a Google que la respuesta a "Booking & policies" es "rescheduled." |
| Contacto publicado | WhatsApp +52 998 538 3661 (solo en el widget GetButton); formulario en `/contact/`; Instagram @emilia.blackbox (y @em.blackbox en otras páginas); Facebook emiliablackbox; YouTube; Pinterest |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados el 2026-09-27 con curl al sitio real (inicio, `/services/`, `/underwater-photoshoot-in-cenotes/`, `/beach-photoshoot-playa-del-carmen/`, `/contact/` y `/about/`) y en `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Para reservar hay que llenar un formulario.** Todos los botones "Check availability", "Book your photoshoot" y "Contact me" llevan a `/contact/`, un formulario (nombre, correo, interés, cómo nos conociste, mensaje, términos). Su WhatsApp no aparece escrito ni enlazado en ninguna página: solo lo abre un botón flotante que carga el widget de getbutton.io. | Un turista que está de viaje decide en el momento y escribe por WhatsApp; un formulario con seis campos y una respuesta por correo se abandona. Si el widget falla o lo bloquea el navegador, no hay forma rápida de escribirle. | Inicio y `/contact/` en vivo (0 enlaces `wa.me` en el HTML; formulario "Contact Me"), `crudo.json` |
| 2 | **Dos títulos de Services llevan a la página equivocada.** En `/services/`, "Cenote & Natural Photoshoot" y "Scuba Diving Photography" enlazan a la página de Beach Photoshoot. | Quien busca buceo o la sesión de superficie cae en la de playa y cree que no existe lo que buscaba. | `/services/` en vivo |
| 3 | **Sus preguntas frecuentes salen mal en Google.** En la página de Underwater Photoshoot, los títulos de sección ("SAFETY & EXPERIENCE", "PLANNING YOUR SESSION", "BOOKING & POLICIES"…) están marcados como preguntas en sus datos para Google, y bajo "BOOKING & POLICIES" hay un texto suelto: "rescheduled." (también visible en la página). | Google puede mostrar "rescheduled." como respuesta sobre sus políticas de reserva; en la página se ve descuidado justo donde se habla de dinero. | `/underwater-photoshoot-in-cenotes/` en vivo (FAQPage en el JSON-LD) |
| 4 | **Precios escritos de cinco formas y viñetas repetidas.** "6000 MX", "8000" (sin moneda), "9.800 MX", "12.000 MX" y "8650 mx"; el paquete Full Experience repite dos veces "fabrics, skirt and dresses available". La sesión de playa no tiene paquetes ni precios. | "9.800" puede leerse como 9.8 para un extranjero; sin moneda no queda claro si son pesos o dólares, y eso genera preguntas antes de reservar. | `crudo.json` y las páginas en vivo |
| 5 | **Google no sabe qué negocio es.** El sitio está en inglés pero su HTML dice `lang="es"`; la portada tiene 2 H1; sus datos estructurados son de página web y de persona, sin negocio local, zona, teléfono ni precios. | Menos visibilidad en búsquedas como "underwater photoshoot Tulum" o "cenote photoshoot Playa del Carmen", que son las que le traen clientes. | `original.html` |
| 6 | **Dos Instagram distintos.** El inicio y Services enlazan @emilia.blackbox; las páginas de sesión enlazan @em.blackbox. | Divide a sus seguidores y hace dudar cuál es la cuenta oficial. | `crudo.json` |

Nota: el sitio **tiene mucho a su favor**: fotos propias espectaculares, precios publicados, 102 reseñas "Excellent" en Google, preguntas frecuentes muy completas y políticas claras (depósito del 30 %, cancelación con 48 h, lluvia). El argumento no es "su sitio está mal", sino **que reservar sea tan fácil como mirar sus fotos**.

## Qué le ofrecemos

- "How far into the water?": el cliente elige si quiere quedarse en la selva, en la superficie, completamente bajo el agua o bucear, y si viene solo o en pareja; ve el paquete, el precio y le escribe por WhatsApp con la sesión ya escrita.
- WhatsApp a un toque en cada pantalla (barra fija en el celular), sin widgets de terceros.
- Todo en una página: sesiones, primera vez, reseñas, quién es ella, preguntas y reglas de reserva; con datos de negocio para Google y precios con un solo formato.
- Cuando nos den la información: precios de buceo y de playa, fotos de playa y la zona que quiere mostrar en Google Maps.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta (por WhatsApp al +52 998 538 3661 o por Instagram @emilia.blackbox). Tono: respetuoso y útil, sin alarmar ni presionar. Se puede mandar en español (su biografía dice que estudió en La Plata y una reseña está en español) o en inglés.

> Hola Emilia, buen día. Soy Guillermo, hago sitios web para negocios locales. Vi tu página y tus fotos en los cenotes son impresionantes. Te escribo porque noté que todos los botones de "Check availability" llevan a un formulario, y que tu WhatsApp solo aparece en el botón flotante; además, en Services, "Cenote & Natural Photoshoot" y "Scuba Diving" abren la página de playa. Te preparé una propuesta de cómo podría verse tu sitio, donde el cliente elige qué tanto quiere meterse al agua, ve el paquete y el precio, y te escribe por WhatsApp desde ahí. Si te interesa, te la enseño sin compromiso.

## Preguntas para la conversación

- ¿Tu +52 998 538 3661 recibe llamadas o solo WhatsApp?
- ¿Prefieres aparecer como "Emilia Black Box" o "Emilia UW Photo"? ¿Cuál es tu Instagram principal?
- ¿Cuánto cuestan las sesiones de buceo y de playa?
- ¿Quieres mostrar el nombre o la zona del cenote en Google Maps, o prefieres mandarla solo al reservar?
- ¿Los precios cambian por temporada?
- ¿Tienes fotos de sesiones en la playa de Playa del Carmen y de buceo en mar abierto?
- ¿Quieres una versión en español además de la de inglés?
