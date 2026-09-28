# AquaCore Adventures: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` y abriendo el sitio real con curl el 2026-09-28. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://aquacoreadventures.com/ |
| Prioridad | **MEDIA**: su sitio es moderno y completo, pero cada botón de WhatsApp pasa por una página intermedia que espera 3 segundos, y la portada muestra íconos y fotos de banco en vez de sus fotos reales |
| Contacto publicado | Tel. y WhatsApp +52 999 178 6704, aquacoreadventures@gmail.com; oficina en Blvd. Kukulcán km 8, Punta Cancún; salidas de Progreso desde Marina Yucalpetén |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Los botones de WhatsApp del inicio no abren WhatsApp: llevan a `/thank-you/whatsapp/`, una página con analítica que espera 3 segundos antes de redirigir | Es su único canal de reserva ("respuesta en 1 hora"); cada segundo de espera y cada salto pierden turistas, sobre todo en el celular | Inicio y `/thank-you/whatsapp/?service=hero`, curl 2026-09-28 |
| 2 | La portada de Cancún muestra íconos de línea en vez de fotos, y las fotos de destino son de banco (en Los Cabos, una se llama `los-cabos-cabo-fishing-sunrise-panoramio.jpg`); sus fotos reales de la flota, la escuela de kite y el paddleboard solo están en páginas interiores | El visitante no ve sus barcos ni a su gente en la primera pantalla, que es lo que genera confianza | Inicio y `/los-cabos/`, curl 2026-09-28 |
| 3 | La portada descarga un video de 5.4 MB (`hero-bg.mp4`) | En datos móviles de turista tarda en cargar y gasta su plan | `Content-Length` de `/assets/video/hero/hero-bg.mp4`, curl 2026-09-28 |
| 4 | Para Google, el inicio solo tiene datos de `WebPage`: no dice que es un negocio, ni su dirección, horario o teléfono; y la vista previa al compartir habla solo del Caribe de Cancún aunque operan en cuatro costas | No aparece como negocio local en Maps y búsquedas de "yacht charter Progreso" | JSON-LD y `og:description` del inicio, curl 2026-09-28 |
| 5 | Los calendarios de temporada de sus siete actividades de Progreso están repartidos, uno por página | Quien visita en un mes concreto no ve de un vistazo qué le conviene hacer | Páginas de Progreso, `investigacion/crudo.json` |

Lo que sí funciona: tiene un solo H1, versión en inglés y español, y publica precios de la flota y las actividades de Progreso.

## Qué le ofrecemos

- WhatsApp directo desde cada botón, con el barco, la actividad o el mes ya escritos.
- Sus fotos reales en la primera pantalla y una portada ligera, sin video pesado.
- "Progreso mes por mes": un solo lugar donde el turista elige su mes y ve qué actividad está en temporada, con precio.
- Datos para Google como negocio local, con dirección, horario y teléfono.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar. Menciona **un** hallazgo concreto y ofrece enseñar la propuesta.

> Hi! I was looking at the AquaCore Adventures website and noticed that the WhatsApp buttons go through a "thank you" page that waits 3 seconds before opening the chat, which can lose people on mobile. I redesign websites and put together a proposal with direct WhatsApp, your real fleet photos up front and a "Progreso month by month" planner. Happy to show it to you, no strings attached.

(Si prefieren español: "Hola, vi el sitio de AquaCore Adventures y noté que los botones de WhatsApp pasan por una página que espera 3 segundos antes de abrir el chat. Me dedico a rediseñar sitios y preparé una propuesta con WhatsApp directo, sus fotos reales de la flota y un planeador de Progreso mes por mes. Con gusto se la enseño, sin compromiso.")

## Preguntas para la conversación

- Si quieren el sitio en inglés, en español o en los dos.
- Cuál es su base principal: Progreso o Cancún.
- Precios de Cancún, Riviera Maya y Los Cabos.
- Fotos de la Tiara 34ft y la Sea Ray 50ft, y fotos propias de Cancún, Riviera Maya y Los Cabos.
- Si el punto de Google Maps de la oficina y de Marina Yucalpetén es el correcto.
- Si necesitan conservar la analítica de la página intermedia (Google y Facebook) y cómo medirla sin retrasar el WhatsApp.
