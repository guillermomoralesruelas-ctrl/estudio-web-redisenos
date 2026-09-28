# La Cantera Eventos: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` y abriendo el sitio real con curl el 2026-09-28. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://lacanteraeventos.com/ |
| Prioridad | **MEDIA**: sus botones de WhatsApp funcionan, pero Google casi no puede leer la página y el contador del próximo evento no dice qué evento ni qué día es |
| Contacto publicado | Tel. (81) 1291 2007 y (81) 2749 5777 (WhatsApp), ventas@lacanteraeventos.com, IG @lacanteraeventos, FB /lacanteraeventos, TikTok @lacanteraeventos.mty; Carr. Nacional 2700, Valle de Cristal, Monterrey |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | La página no tiene ningún H1, ni meta description, ni datos estructurados (JSON-LD) | Google no sabe que es un salón de eventos en Monterrey; compite en desventaja en "salón de eventos Monterrey" o "salón para bodas Carretera Nacional" | Inicio, curl 2026-09-28 |
| 2 | "Prepárate para nuestro próximo evento" muestra solo un contador de días, horas y minutos, sin decir qué evento es ni la fecha escrita | Quien llega no sabe si es el Wedding Event o el Open House XV Años, ni si le conviene ir | Inicio, curl 2026-09-28; su cartel del Wedding Event dice 3 p.m. y el contador llega a cero a las 9 a.m. (ver `CAMBIOS.md`) |
| 3 | Sus dos teléfonos están escritos como texto, sin enlace para llamar | En el celular no se pueden tocar para marcar | Inicio y pie, curl 2026-09-28 |
| 4 | Los cuatro botones de WhatsApp pasan por dos redirecciones (bit.ly y wa.link) antes de abrir el chat | Cada salto tarda y puede fallar o ser bloqueado; si alguno de esos servicios cambia, se pierden los contactos | Curl de los cuatro enlaces, 2026-09-28 |
| 5 | No publica capacidad, paquetes ni rangos de precio | Quien compara salones descarta a los que no dicen para cuántos invitados son | Inicio y `investigacion/crudo.json` |

Lo que sí funciona: sus cuatro botones terminan en su WhatsApp con un mensaje distinto para cotizar, agendar visita, confirmar asistencia y pedir información.

## Qué le ofrecemos

- Una página que Google entiende como salón de eventos en Monterrey, con título, descripción y datos del negocio.
- El próximo evento con nombre, fecha y hora escritos, y un botón para confirmar asistencia.
- Cotizar con los datos del evento ya escritos en WhatsApp (tipo de evento, nombres, fecha e invitados), directo y sin redirecciones.
- Teléfonos que se tocan para llamar y un enlace a Google Maps.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar. Menciona **un** hallazgo concreto y ofrece enseñar la propuesta.

> Hola, buen día. Estuve viendo la página de La Cantera Eventos y está muy bien presentada. Noté que el contador del próximo evento no dice cuál evento es ni qué día, y que la página no tiene los datos que Google usa para mostrarla como salón de eventos en Monterrey. Me dedico a rediseñar sitios y preparé una propuesta donde el visitante arma su invitación y la manda por WhatsApp para cotizar. Si les interesa, con gusto se la enseño, sin compromiso.

## Preguntas para la conversación

- Hora real del Wedding Event (el cartel dice 3 p.m. y el contador apunta a las 9 a.m.).
- Fecha del próximo Open House XV Años.
- Si el punto de Google Maps armado con la dirección es el correcto.
- Capacidad del salón, paquetes y rangos de precio.
- Si se pueden usar los carteles de sus eventos y si tienen versión sin foto de banco.
- Si prefieren conservar un formulario por correo además de WhatsApp.
