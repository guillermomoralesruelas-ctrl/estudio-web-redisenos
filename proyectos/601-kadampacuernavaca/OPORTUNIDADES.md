# Kadampa Cuernavaca: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26) y abriendo el sitio real con curl el 2026-09-28. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.kadampacuernavaca.org/ |
| Prioridad | **ALTA**: el botón para inscribirse al retiro de un mes lleva a "Page Not Found", y la charla de octubre anuncia el programa de la de septiembre |
| Contacto publicado | Tel. y WhatsApp 777 565 6011, info@meditarencuernavaca.org, educacion@meditarencuernavaca.org |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | El enlace de inscripción al retiro en la página de Eventos especiales abre "Page Not Found" (404) | Es su evento más largo (retiro de enero en Tepoztlán): quien quiere apartar lugar no puede y tiene que escribir o desistir | `/eventosespeciales` → `kadampacuernavaca.odoo.com/event/retiro-nyempa-202/register`, curl 2026-09-28 |
| 2 | La página de la charla "Aprende a soltar" (24 de octubre) muestra el programa de la charla anterior: "Sábado 26 de septiembre, 17:00 a 18:15…", y la aportación y el pronto pago también son de septiembre | Quien se inscribe ve otra fecha y otro precio; genera dudas o llamadas | `/event/charla-aprende-a-soltar-238/register`, curl 2026-09-28 |
| 3 | Eventos especiales sigue enlazando la Rueda de la Vida del 6 de septiembre, que ya pasó | La página se ve desatendida y oculta lo que sí viene | `/eventosespeciales`, curl 2026-09-28 |
| 4 | La página "Temas de la semana" se llama "Contact Us" para Google | En los resultados de búsqueda aparece en inglés y con otro nombre | `<title>` de `/temasdelasemana`, curl 2026-09-28 |
| 5 | El inicio tiene 7 H1, no tiene meta description ni datos estructurados (JSON-LD), y Eventos especiales no tiene ningún H1 | Google no sabe que es un centro de meditación en Cuernavaca ni cuál es el tema de cada página | `investigacion/original.html` y curl de `/eventosespeciales` |
| 6 | El horario está repartido entre Inicio, Nuestras clases y un calendario que no coinciden (por ejemplo, Gema del corazón: solo miércoles 12:00 en el sitio, cuatro días en el calendario) | Quien quiere ir no sabe a qué hora ni dónde; las sedes de Jiutepec y Yautepec no tienen dirección | `investigacion/crudo.json`; detalle en `CAMBIOS.md` |

## Qué le ofrecemos

- Una sola página que dice qué hay hoy y en los próximos catorce días, en qué sede y a qué hora, con "Avisar que voy" por WhatsApp ya escrito.
- Inscripciones a eventos que siempre llevan al evento correcto, con la fecha y la aportación de ese evento.
- Que Google la muestre como centro de meditación en Cuernavaca, con título y descripción en español.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar. Menciona **un** hallazgo concreto y ofrece enseñar la propuesta.

> Hola, buen día. Estuve revisando la página de Kadampa Cuernavaca y noté que el botón para inscribirse al retiro de enero abre una página de "Page Not Found", así que quien quiere apartar lugar desde el sitio no puede. Me dedico a rediseñar sitios y preparé una propuesta con los horarios de las próximas dos semanas por sede y un botón para avisar por WhatsApp. Si les interesa, con gusto se la enseño, sin compromiso.

## Preguntas para la conversación

- Hora de la Ofrenda al Guía Espiritual (10 y 25) y del Melodioso Tambor (29), que el sitio no publica y el calendario pone en otros días.
- Horario real de Gema del corazón (el sitio dice solo miércoles; el calendario, cuatro días).
- Direcciones de Jiutepec y Yautepec, y si esas clases siguen en octubre.
- Aportación de la charla Aprende a soltar y del retiro de Vajrayoguini.
- Nombre de quien da la clase para niños ("María Fernanda Cano" o "Fernanda Cano").
- Días de suspensión en octubre y noviembre.
- Si prefieren inscripción por WhatsApp o por su sistema de eventos de Odoo.
- Autorización para usar el retrato de Gueshe Kelsang Gyatso y la ilustración de Je Tsongkhapa.
