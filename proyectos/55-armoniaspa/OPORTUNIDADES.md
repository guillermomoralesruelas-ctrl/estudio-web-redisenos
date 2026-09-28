# Armonía Spa: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.armoniaspa.com.mx/ |
| Prioridad | **MEDIA**: el sitio en línea funciona, pero tiene problemas que le cuestan clientes: páginas incompletas, sin dirección ni horarios, y sin posicionamiento en Google (no H1 correcto, no JSON-LD). |
| Contacto publicado | Tel. 56 2055 7964, WhatsApp wa.me/525620557964, correo armonia.spa32@gmail.com, Instagram @armonia_spa30, Facebook |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Las páginas "Servicios" y "Citas" muestran solo "PRÓXIMAMENTE.." con una imagen de construcción | Una clienta que hace clic en "Servicios" desde el menú no ve nada: se va sin agendar. El menú principal lleva a páginas vacías | `investigacion/crudo.json`, páginas `servicios.html` y `citas.html` |
| 2 | No hay dirección física en el sitio | Alguien que busca "spa en Chihuahua" en Google Maps o que quiere confirmar la ubicación antes de ir no puede hacerlo desde el sitio | Revisión de `crudo.json` — no aparece calle ni colonia |
| 3 | No hay horarios de atención publicados | Las clientas no saben cuándo llamar o si pueden ir de improviso; llegan llamadas de más para preguntar algo que podría estar en el sitio | Revisión de `crudo.json` — no aparece ningún horario |
| 4 | No tiene meta description ni JSON-LD | Google no sabe qué tipo de negocio es ni muestra datos enriquecidos (nombre, teléfono, servicios). La descripción en el buscador la genera Google de forma genérica | `investigacion/original.html` — no hay tag `<meta name="description">` ni `<script type="application/ld+json">` |
| 5 | El sitio tiene múltiples H1 en la misma página | Google puede penalizarlo en posicionamiento: no sabe cuál es el título principal del negocio | `investigacion/original.html` — aparecen varios `<h1>` (hero + sección Nosotros + sección Servicios) |
| 6 | El enlace de WhatsApp en la página "Citas" usa `wa.me/message/6GQL42KEEJAKG1` (un enlace de invitación de mensaje fijo), no un número | Si ese enlace caduca, nadie puede contactar al spa vía WhatsApp desde esa página | `investigacion/crudo.json`, página `citas.html` |

## Qué le ofrecemos

- Un sitio completo con todos los 28 servicios y sus precios, que no deja páginas en "próximamente"
- El calculador de depilación láser (IPL vs tridiodo, 4 zonas): la clienta llega al WhatsApp ya sabiendo qué quiere, sin que el personal tenga que explicar precios por teléfono
- Dirección y horarios correctos (pendientes de que el cliente los confirme)
- JSON-LD y meta description correctos para aparecer mejor en Google Chihuahua
- Un solo H1 y botones de WhatsApp que sí funcionan

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Vi el sitio de Armonía Spa y me di cuenta de que las páginas de "Servicios" y "Citas" todavía dicen "próximamente" — si alguien hace clic desde el menú, no ve los servicios ni puede agendar. Preparé una propuesta de sitio nuevo con todos sus servicios y precios, y con un calculador para que las clientas vean el costo de su plan de depilación láser antes de llamar. ¿Les gustaría verla?

## Preguntas para la conversación

- ¿Cuál es la dirección física? (para incluirla en el sitio y en Google Maps)
- ¿Cuál es el horario de atención? (para publicarlo)
- ¿Las 6 promociones del carrusel siguen vigentes? ¿Hay nuevas?
- ¿El número de WhatsApp es el mismo para citas y para depilación láser, o hay números distintos por servicio?
- ¿Se puede usar la descripción "mayor precisión" para el tridiodo vs "luz pulsada" para el IPL?
