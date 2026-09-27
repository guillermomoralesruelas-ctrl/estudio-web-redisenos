# Desértika Spa: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26) y con curl al sitio real el 2026-09-27. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.desertikaspa.com/ . Spa urbano con 14 sucursales anunciadas en la Ciudad de México y Satélite (Odoo, con agenda en línea, tienda y giftcards) |
| Prioridad | **ALTA**: los teléfonos de todas sus sucursales, al tocarlos en el celular, marcan con el código de Brasil (+55), no al número en México |
| Contacto publicado | WhatsApp central 55 6672 8900; un teléfono por sucursal (Nápoles 55 1107 7822, Condesa 55 2614 3438, Masaryk 55 5280 4880…); Instagram @desertika.spa, Facebook desertikaspamx, LinkedIn, X @desertikaspa |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Los teléfonos marcan a Brasil.** Todos los enlaces de sus sucursales son `tel:+55 1107 7822`, `tel:+55 2614 3438`… El "+55" es el código de país de Brasil (el de México es +52); con la lada 55 de la Ciudad de México, el celular intenta llamar a un número de São Paulo. Solo Samara Satélite (`tel:5528391772`) está bien. | La clienta que toca "llamar" desde el menú o la lista de sucursales no llega al spa (o hace una llamada internacional). Es el canal más directo para agendar. | Portada y todas las páginas en vivo (menú superior y listas de sucursales), `original.html` |
| 2 | **Las duraciones no coinciden con la reserva.** La página de masajes dice 50, 80 y 110 min, pero los botones Reserva abren citas llamadas "60 Min", "90 Min" y "120 Min" (por ejemplo, el de 110 min abre "Masaje De Piedras Calientes 120 Min"). El Lomi Lomi de 80 min abre la reserva de 60 min. | La clienta no sabe cuánto dura lo que compra, y en el Lomi Lomi puede reservar el servicio equivocado; se presta a reclamos en el spa. | /masajes en vivo y curl a `/book/PC120`, `/book/LomiLomi60Min` |
| 3 | **¿13, 14 o 15 sucursales?** La portada dice "13 Sucursales" en un carrusel y "14 Sucursales" en otro; entre menú, listas y carruseles aparecen 15 distintas (el Aeropuerto no está en el menú; Samara Satélite solo en el menú y en un carrusel), y "Samara Satélite" en el menú lleva al Hyatt (`#sucursal-hyatt`). | Parece desactualizado y la clienta no sabe si su sucursal sigue abierta. | Portada y /sucursales en vivo |
| 4 | **Sin horarios.** Ninguna página dice a qué hora abre cada sucursal. | Es lo primero que se pregunta antes de agendar; se traduce en llamadas y mensajes de más. | Portada y /sucursales en vivo |
| 5 | **Afirmaciones de salud muy fuertes.** El Bar de Oxígeno promete que "elimina el estrés y la ansiedad", "ayuda a eliminar dolores de cabeza y migrañas", "alivia resacas" e "incrementa la actividad inmunológica"; otras páginas hablan de eliminar toxinas o mejorar la función de órganos. | Son promesas médicas que un spa no puede sostener y que pueden causarle problemas con la publicidad de servicios de salud; también restan credibilidad. | /bar-de-oxigeno y /masajes en vivo |
| 6 | **Testimonios que parecen de ejemplo.** Tres reseñas "Hace 10 horas", "Hace 15 horas" y "Hace 2 horas" con contadores fijos (167, 203, 110) y botón "REPLY" en inglés, siempre iguales. | Una reseña que siempre es "de hace 10 horas" se nota; mejor mostrar sus reseñas reales de Google. | Portada en vivo |
| 7 | **Google no sabe que es un spa ni dónde están sus sucursales.** No hay datos estructurados (JSON-LD) y la portada tiene 4 H1 (el título y las cifras +60, +80, +200 y +50,000). | Pierde visibilidad en búsquedas como "spa en la Condesa" o "masaje en Polanco", justo donde tiene sucursales. | `original.html` y portada en vivo |
| 8 | **Errores de texto a la vista.** "la mpusica", "Benjamín Fraklin", "Sucursal Anzurez", "un día completo de relajació", "otros servicos". | Pequeños, pero en un spa "boutique" dan impresión de descuido. | Portada en vivo |

Nota: es una **marca con buena base**: sesión de fotos propia y cuidada, precios publicados, agenda en línea por servicio y por sucursal, WhatsApp con mensaje, giftcards y tienda. El argumento principal: **que los teléfonos funcionen y que elegir y agendar sea más fácil desde el celular.**

## Qué le ofrecemos

- "¿Cuánto tiempo tienes?": eliges tus minutos libres y aparece lo que cabe, con precio, y se agenda en tu sucursal por WhatsApp o en su agenda en línea.
- Teléfonos que marcan bien (+52), cada sucursal con su botón de Cómo llegar y su agenda, y barra fija en el celular.
- Una página con masajes, faciales y bar de oxígeno con precios claros, sin carruseles y con sus fotos reales.
- Datos para Google (DaySpa con cada sucursal), un solo H1 y textos sin promesas de salud.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo (por WhatsApp al 55 6672 8900 o por Instagram @desertika.spa). Tono: respetuoso y útil.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Revisando la página de Desértika noté algo que les puede estar costando citas: al tocar el teléfono de cualquier sucursal desde el celular, el enlace marca con el código de Brasil (+55) en lugar del de México (+52), así que la llamada no llega. Les preparé además una propuesta de sitio donde la clienta elige cuánto tiempo tiene, ve qué masaje o facial le cabe con su precio y lo agenda en su sucursal en dos toques. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Cuántas sucursales tienen hoy? ¿Siguen el Aeropuerto, el Hyatt y Samara Satélite?
- ¿Qué horario tiene cada sucursal?
- ¿Los masajes duran 50/80/110 o 60/90/120 minutos?
- ¿Todas las sucursales dan todos los servicios?
- ¿El 55 6672 8900 también recibe llamadas?
- ¿Las fotos de la sesión son de alguna sucursal en particular? ¿Tienen fotos de cada sucursal, del temazcal y del bar de oxígeno?
- ¿Tienen reseñas reales (Google) que podamos mostrar?
