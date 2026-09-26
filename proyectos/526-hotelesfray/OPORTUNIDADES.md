# Hoteles Fray: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://hotelesfray.com/ (WordPress, Divi) |
| Prioridad | **BAJA**: su sitio está bien hecho (buenas fotos, descripciones para Google, motor de reservas y premios). El argumento es convertir más reservas directas con un sitio que no obliga a elegir entre dos páginas |
| Contacto publicado | Fray Junípero +52 311 212 2525, recepcion@hotelfrayjunipero.com; Fray Select +52 311 133 7060, recepcion@hotelfrayselect.com; IG @hotelesfray |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-26/` |

## Hallazgos en su sitio actual

Comprobados descargando el sitio real el 2026-09-26 (inicio, /frayjunipero/, /frayselect/ y /habitaciones/).

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | En /habitaciones/ aparecen seguidas **dos secciones llamadas "Habitación estándar"** con textos distintos. Solo un logotipo pequeño indica que una es de Fray Junípero y otra de Fray Select. | El huésped puede reservar en el hotel equivocado o llamar para preguntar. | `crudo.json` (habitaciones) y sitio real |
| 2 | Ninguna página tiene datos de **`Hotel`** para Google: solo `WebSite` y `Organization`, sin dirección, teléfono ni servicios de cada hotel. | Google tiene que adivinar qué es cada hotel; con datos estructurados puede mostrar mejor la ficha, los servicios y el desayuno incluido. | Sitio real (JSON-LD de las cuatro páginas) |
| 3 | Muchas imágenes sin texto alternativo: 18 de 42 en el inicio, 15 de 24 en Fray Junípero, 14 de 20 en Fray Select y 23 de 35 en Habitaciones. | Google Imágenes no las entiende y las personas con lector de pantalla no saben qué muestran. | Sitio real |
| 4 | Para reservar hay que elegir hotel en un formulario y, si no se elige, sale una alerta ("Por favor selecciona un hotel"). El teléfono, el WhatsApp y el correo cambian según la página en la que estés. | Un paso de más, sobre todo en el celular. | `original.html` (formulario `booking-form-unified`) |
| 5 | Detalles de redacción: "¿**Porqué** es mejor reservar en nuestro sitio web?" (Junípero y Select), "la experiencia de nuestro equipo **harán**", "Regist**r**ate". | Detalles menores. | Sitio real y `crudo.json` |

Nota: su sitio está bien cuidado (meta descriptions reales, premios, reserva directa con recompensas y convenio para empresas). Conviene decirlo: el argumento es convertir más, no que esté mal.

## Qué le ofrecemos

- Una sola página donde el viajero elige su hotel y todo (color, reservas, WhatsApp, teléfono, mapa, habitaciones y restaurante) se ajusta a él.
- Reserva directa en su mismo Cloudbeds, con fechas y código promocional, desde la portada y desde una barra fija en el celular.
- Datos de `Hotel` para Google en los dos hoteles y texto alternativo en todas las fotos.
- Sitio ligero, sin depender de Divi ni de jQuery.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para hoteles. Me gustó mucho el sitio de Hoteles Fray (se nota el cuidado en las fotos y en la reserva directa con recompensas). Les preparé una idea para convertir más reservas directas: una sola página donde el huésped elige entre Fray Junípero y Fray Select, y todo el sitio se ajusta a ese hotel, desde el teléfono y el WhatsApp hasta las habitaciones y el botón de reservar en su mismo Cloudbeds. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Qué porcentaje de sus reservas llega por el sitio y cuánto por Booking o Expedia?
- ¿Quieren mostrar una tarifa "desde"?
- ¿La cancelación flexible y la reserva sin anticipo aplican en los dos hoteles?
- ¿Tienen fotos de la Jr. Suite y de la Habitación panorámica?
- ¿Cómo se solicita el convenio de tarifas para empresas?
