# La Auténtica: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` y abriendo el sitio real con curl el 2026-09-28. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://autenticabarberia.com/ |
| Prioridad | **MEDIA**: su WhatsApp funciona, pero el sitio no dice dónde están ni a qué hora abren, y reservar el spa se hace como si fuera comprar un producto |
| Contacto publicado | WhatsApp y tel. 56 2020 3272, contacto@autenticabarberia.com, IG @autenticabarberia, FB /autenticabarberia, TikTok @autenticabarberia_ |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | No hay dirección ni enlace a Google Maps: solo "Cd. Satélite 📍 Zona Azul". Tampoco publica horario en ninguna página | Quien no los conoce no sabe cómo llegar ni si están abiertos; tiene que escribir antes de ir | Inicio, curl 2026-09-28 |
| 2 | Para reservar el spa hay que entrar a la tienda y usar "Añadir al carrito" en un "producto" llamado "Agendar cita para: SPA/Masaje" | Se siente como una compra, no como una cita; es fácil abandonar a medio camino | `/producto/agendar-cita-para-spa-masaje/`, curl 2026-09-28 |
| 3 | El teléfono 56 2020 3272 está escrito como texto, sin enlace para llamar | En el celular no se puede tocar para marcar | Inicio, curl 2026-09-28 |
| 4 | Para Google la página se llama solo "La Auténtica", la descripción es una fila de emojis, tiene 6 H1 y sus datos estructurados la describen como "Organization", no como barbería ni spa | No aparece bien al buscar "barbería en Ciudad Satélite" | `<title>`, `<meta description>` y JSON-LD del inicio, curl 2026-09-28 |
| 5 | La terraza y el club social, su diferenciador, solo aparecen como una mención a @terraza.autentica y no se explica qué incluye ser Socio Auténtico ni cuánto cuesta | Pierde a quien busca un lugar para ver el fútbol o festejar un cumpleaños | Inicio y `investigacion/crudo.json` |

Lo que sí funciona: su botón de WhatsApp abre el chat con un mensaje ya escrito ("¡Hola! Me gustaría agendar una cita.").

## Qué le ofrecemos

- Una página que dice en la primera pantalla qué son (barbería, spa y club social), dónde están y cómo agendar.
- Citas de barbería y spa por WhatsApp con el servicio ya escrito, sin pasar por el carrito.
- El club social con su propia sección: qué hay detrás del librero, qué incluye la membresía y un botón para pedirla.
- Que Google la muestre como barbería y spa en Ciudad Satélite.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar. Menciona **un** hallazgo concreto y ofrece enseñar la propuesta.

> Hola, ¿qué tal? Vi la página de La Auténtica y me gustó mucho el concepto de barbería con club social. Noté que en el sitio no aparece la dirección ni el horario, y que para agendar el spa hay que pasar por el carrito de la tienda. Me dedico a rediseñar sitios y preparé una propuesta donde se agenda directo por WhatsApp y la terraza tiene su propia sección. Si les interesa, con gusto se la enseño, sin compromiso.

## Preguntas para la conversación

- Dirección exacta y horario de barbería, spa y terraza.
- Qué incluye la membresía de Socio Auténtico y cuánto cuesta.
- Nombres de los barberos (el sitio menciona a Miguel León y Santiago Pájaro; una reseña, a "Alfredo").
- Carta de bebidas con precios para el Club Social.
- Si quieren conservar el video de la portada y el feed de Instagram.
- Fotos de la terraza y de los sillones de barbería.
