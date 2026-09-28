# Hotel Soleil Celaya: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con `curl` en el sitio real el 2026-09-28 y en `investigacion/`. Los defectos del clon **no** van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.soleilcelaya.com.mx/ |
| Prioridad | MEDIA: hotel activo con reservación en línea nueva, pero el sitio principal es una plantilla vieja con restos de otra marca ("Euro Inn"), sin precios y con enlaces que no hacen nada |
| Contacto publicado | Tel. y WhatsApp (461) 287 6015, ventas@soleilcelaya.com.mx, FB /SoleilCelaya, IG @hotelsoleilcelaya |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Las páginas de Master Suites y de Política de privacidad se llaman "EURO INN \|\| Business Hotel" en la pestaña y en Google. | Un huésped que busca "Soleil" ve el nombre de otro hotel. | `curl` de /master.html y /politica.html |
| 2 | El botón "Reservar" de la Master Suite no lleva a ningún lado (`href="#"`), y esa suite no aparece en la reservación en línea. | Quien quiere la mejor habitación no puede reservarla. | `curl` de /master.html y /reservaciones-soleil.html |
| 3 | El sitio principal no muestra precios: las tarifas ($880 a $1,950 con desayuno) solo aparecen en la página de reservaciones, que tiene otro diseño. | Un precio con desayuno incluido es su mejor argumento y hoy está escondido. | `curl` del inicio y de /reservaciones-soleil.html |
| 4 | Los salones tienen buenas tablas de capacidad, pero en tres páginas separadas y sin botón para cotizar. | Quien organiza un evento tiene que abrir las tres y luego buscar el teléfono. | `curl` de /premium.html, /monaco.html y /scala.html |
| 5 | Faltas y botones muertos: "Internet Inalamcrico", "comodida de hogar", "Politicas", y el botón "ENGLISH" no hace nada. | Restan en un hotel que se presenta como "Business Class". | `curl` del inicio y de las habitaciones |

## Qué le ofrecemos

- Una página con tarifas a la vista y un plano a escala de sus salones donde el cliente acomoda a sus invitados según el montaje y cotiza por WhatsApp.
- Un solo diseño para todo el sitio, sin restos de "Euro Inn", y con datos para Google.

## Mensaje sugerido para el primer contacto

> Hola, buen día. Revisando hoteles de Celaya vi su sitio y noté que algunas páginas aparecen en Google como "EURO INN" y que la Master Suite no se puede reservar. Armé una propuesta con sus tarifas a la vista y un plano a escala de sus tres salones, donde el cliente acomoda a sus invitados según el montaje y cotiza por WhatsApp. ¿Les comparto el enlace?

## Preguntas para la conversación

- ¿Cuál es la tarifa de la Master Suite?
- ¿Cuánto mide la terraza del Salón Scala?
- ¿Tienen fotos recientes de salones, restaurante y fachada?
- ¿El WhatsApp del (461) 287 6015 atiende también eventos?
