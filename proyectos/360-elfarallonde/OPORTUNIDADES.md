# El Farallón de Tepic: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://elfarallondetepic.mx/ (WordPress con el tema Zakra y Elementor). Restaurante de mariscos nayaritas fundado en 1975; está en Av. Niño Obrero 560, Chapalita, **Zapopan** (no en Tepic) |
| Prioridad | **ALTA**: al tocar sus teléfonos en el celular se marca a un número de plantilla (981 234 5678), el enlace del correo va a una dirección que no existe y el botón "RESERVACIONES" solo abre Google Maps; no hay WhatsApp. Quien quiere reservar o pedir a domicilio desde el sitio no les llega |
| Contacto publicado | Tel. 33 3121 2616 y 33 3121 9616, elfarallondetepic@gmail.com, Facebook /farallondetepic, Instagram @el_farallon (no publica WhatsApp) |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-26/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-26 (inicio, /historia, /menus, /gallery y /contact responden 200; `/demo/` da 404) y en `investigacion/original.html` y `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Sus teléfonos llaman a otro número.** En el pie de todas las páginas, el texto "33 3121 2616 y 33 3121 9616" es un enlace a `tel:9812345678`, el número de ejemplo de la plantilla. En el celular, quien toca el teléfono para reservar o pedir a domicilio marca a un número que no es el suyo. Es el único teléfono con enlace del sitio. | Es la llamada más valiosa: alguien que ya decidió ir o pedir. Se pierde o llama a un desconocido, y se va con otro restaurante. | Pie de todas las páginas (`<a href="tel:9812345678"> 33 3121 2616 y 33 3121 9616 </a>`) |
| 2 | **El correo no llega.** El texto "elfarallondetepic@gmail.com" enlaza a `mailto:info@zakraresturant@gmail.com`: una dirección mal escrita de la plantilla Zakra (con dos @), que no existe. En /contact el ícono del correo lleva a la página de inicio de Gmail. | Quien escribe para reservar un grupo, un evento o pedir información no les llega nada, y ellos no se enteran. | Pie de todas las páginas; /contact (`href="https://mail.google.com/"`) |
| 3 | **"RESERVACIONES" no reserva.** El botón principal del encabezado, en todas las páginas, abre su ficha de Google Maps. No hay WhatsApp en ninguna parte, aunque dicen "Contamos con servicio a domicilio". | Prometen reservar y el botón no lo hace; para pedir a domicilio hay que copiar un número a mano (y el enlace marca mal, punto 1). | Encabezado (`goo.gl/maps/bWWKbeZubP1Mpc9J7`); /contact |
| 4 | **Restos de la plantilla a la vista.** Los botones "Contáctanos", "Conoce más" y "MENÚ" del inicio apuntan a `/demo/…` (hoy WordPress los redirige), y el botón "HOME" de /historia va a `/demo/`, que da **404**. El escudo del pie enlaza a `shiny-yacare.w6.wpsandbox.pro`, un sitio de pruebas que ya no existe. Pie con "All Rigths Reserved" y páginas tituladas en inglés ("Menus", "Gallery", "Contact"). | Detalles que se notan y restan confianza a un restaurante con 50 años de historia. | Inicio, /historia y pie (`href="http://elfarallondetepic.mx/demo/…"`) |
| 5 | **Google no sabe qué son ni dónde están.** Ninguna página tiene meta description ni datos estructurados de Restaurant (JSON-LD: horario, dirección, menú, precios); no hay H1; el sitio se declara en inglés (`lang="en-US"`); 30 de las 36 imágenes del inicio no tienen texto alternativo. Además, el nombre dice "de Tepic" y la dirección es de Zapopan. | Al buscar "mariscos en Chapalita" o "pescado zarandeado en Zapopan", Google entiende poco del sitio; al compartir el enlace por WhatsApp no sale descripción. | `original.html` y las cinco páginas del sitio real |
| 6 | **El menú está repartido.** Los platillos con foto del inicio (tacos de carnitas de atún, doraditos, Panchobalas, Ostionazo…) no aparecen en /menus, y el menú completo también está en un PDF. Las "Tostadas Miyazaki" usan la foto de la tostada de Santa María del Oro. En "Cócteles y ensaladas" hay dos precios por platillo ("$195 / $325") sin decir de qué tamaño. | El cliente no sabe si lo que vio en el inicio sigue en la carta ni cuánto cuesta cada tamaño; más preguntas por teléfono. | Inicio y /menus (`crudo.json`) |
| 7 | Detalles menores: el pescado zarandeado, su platillo estrella, se cobra por kilo y nada ayuda a calcular cuánto sale; enlace a Twitter; erratas ("desee hace", "camarónes", "parilla", "saborosos", "gERARDO sANTOYO V."). | Pequeños descuidos. | Sitio real y `crudo.json` |

Nota: el sitio tiene cosas bien: publica **todo el menú con precios** (algo poco común), su historia, horario, dirección y tres opiniones, y tiene fotos propias buenas de sus platillos. El problema no es la información: es que **los contactos no funcionan** justo en el paso en que el cliente quiere reservar o pedir.

## Qué le ofrecemos

- Llamada, WhatsApp y correo que sí llegan, en toda la página y en una barra fija en el celular, con el mensaje ya escrito ("Quisiera reservar una mesa…").
- "La báscula del zarandeado": el cliente elige pescado zarandeado o frito y cuántos kilos, ve cuánto sale con sus precios, y pide para comer allá o a domicilio por WhatsApp con el peso y el total en el mensaje.
- Todo el menú en una sola página, por pestañas, sin PDF.
- Su historia de 50 años y sus estandartes (empanadas de camarón, Piña Cantamar, pescado zarandeado) al frente.
- Datos de Restaurant para Google (horario, dirección, menú), vista previa con foto al compartir y "Cómo llegar en Google Maps".

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para restaurantes. Revisando el sitio de El Farallón noté algo que les puede estar costando reservaciones: en el celular, al tocar sus teléfonos del pie de página se marca a otro número (981 234 5678, que viene de la plantilla del sitio), y el enlace del correo tampoco llega. Les preparé una propuesta de cómo podría verse el sitio en una sola página, con su menú completo, WhatsApp y llamada en un toque, y una báscula que calcula cuánto sale el pescado zarandeado por kilo. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Cómo les llegan hoy las reservaciones y los pedidos a domicilio: teléfono, WhatsApp, apps? ¿Tienen WhatsApp para el restaurante?
- ¿Sabían que el teléfono y el correo del sitio llevan a otra parte? ¿Alguien les ha dicho que escribió y no le contestaron?
- ¿A qué zonas llevan a domicilio y con qué costo?
- ¿Los precios del sitio siguen vigentes? ¿Qué tamaños son los dos precios de los cócteles?
- ¿El pescado zarandeado tiene un peso mínimo o piezas típicas?
- ¿Cierran en días festivos? ¿A qué hora cierra la cocina?
- ¿Tienen fotos del restaurante, del salón y de platillos que faltan (tostadas Miyazaki, pescado frito, salmón zarandeado)?
