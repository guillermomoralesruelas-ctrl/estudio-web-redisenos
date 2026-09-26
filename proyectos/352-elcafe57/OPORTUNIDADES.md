# El Café 57: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://elcafe57.mx/ (WordPress con Elementor). Café y restaurante en la colonia Pitic de Hermosillo, desde 2005 |
| Prioridad | **ALTA**: los botones "Reservar" no llevan a la reserva (el del celular apunta a `#` y el del menú a una sección que no existe), así que solo reserva quien baja hasta el widget de OpenTable del inicio; además, el sitio no tiene descripción ni datos de restaurante para Google ni vista previa al compartirlo |
| Contacto publicado | Tel. (662) 214 46 74, WhatsApp (662) 361 53 82, c57pitic@icr.mx, FB e IG /elcafe57, OpenTable (widget en el inicio) |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-26/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-26 (inicio, las cinco páginas de menú, /parallevar/, /menu/paquetes/ y /contacto/ responden 200) y en `investigacion/original.html` y `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Los botones "Reservar" no llevan a la reserva.** En el celular, el botón amarillo "RESERVAR" del encabezado tiene `href="#"` y no hace nada (Elementor declara `"hasPopUps":false`, no abre ninguna ventana). En el menú, "Reservar" lleva a `elcafe57.mx/#widgetreserva`, pero ningún elemento de la página tiene ese `id`: te deja arriba del inicio. Lo mismo pasa con "Eventos" (`#eventos1`, tampoco existe). El widget de OpenTable sí está en el inicio, pero solo lo encuentra quien baja hasta él. | Quien quiere reservar desde el celular toca el botón más visible y no pasa nada; desde las páginas del menú, "Reservar" lo regresa al inicio sin explicación. Son reservas que se pierden o que terminan en una llamada. | `original.html` y curl del inicio: `<a class="elementor-button …" href="#">RESERVAR</a>` en el bloque `elementor-hidden-desktop`; `href="https://elcafe57.mx/#widgetreserva"` sin `id="widgetreserva"` en ninguna página |
| 2 | **Google no sabe qué son ni dónde están.** Ninguna página tiene `meta description`, Open Graph ni datos de restaurante (JSON-LD con dirección, horario, teléfono o menú). El título de todas las páginas termina en "Cocina Contempo". | En Google aparecen con un texto que Google elige al azar, y al compartir el sitio por WhatsApp o Facebook sale un enlace sin foto ni descripción. Tampoco ayuda a que su horario y "Cómo llegar" salgan bien en búsquedas como "desayunos Pitic Hermosillo". | curl de las diez páginas: `description` 0, `og:title` 0, `application/ld+json` 0 |
| 3 | **Organizar un evento obliga a hacer cuentas.** La página de paquetes tiene los precios por persona, tres espacios con capacidad y un consumo mínimo que cambia entre lunes a jueves y viernes a domingo, pero no dice si los paquetes cubren el mínimo, ni sobre qué monto es el "anticipo del 50%". El botón "Cotiza tu evento" abre WhatsApp sin mensaje. | Quien organiza un cumpleaños o un desayuno de trabajo tiene que escribir para preguntar lo básico; cada duda es una conversación más para el equipo y un cliente que puede irse a otro lado. | /menu/paquetes/ (`crudo.json`): "Anticipo del 50% para reservar el área", enlaces `api.whatsapp.com/send?phone=5216623615382` sin `text=` |
| 4 | **El menú está en cinco páginas y el Lunch 57 escondido.** Desayunos, comida, postres, cafés y vinos son páginas separadas con un carrusel para cambiar; el Lunch 57 ($230, lunes a viernes) está al final de "Comidas | Cena" y dice "Aplican restricciones" sin decir cuáles. Los pedidos para llevar abren WhatsApp sin mensaje. | Para comparar un desayuno con un café hay que cargar dos páginas; la promoción más atractiva para oficinas queda al fondo de una página larga. | `crudo.json` (/menu/comida-y-cena/ y /parallevar/) |
| 5 | Detalles menores: el logo tiene `alt=""` y casi todas las fotos se llaman "El Café 57"; el menú del sitio escribe "Cafe, Tés & Más" sin acento; en paquetes, la foto del "Panini Italia con ensalada" es la del Florencia (su `alt` lo dice); en desayunos, el omelette "De la granja" usa la foto del "Clásico". | Pequeños descuidos que restan en un sitio que por lo demás se ve cuidado. | `original.html` y `crudo.json` |

Nota: el sitio **se ve bien**: fotos propias muy buenas (el patio, el equipo, sus platillos), menú completo con precios, horario y contacto claros y reserva por OpenTable. El argumento no es "su sitio está mal hecho", sino **que los botones de reservar funcionen y que los eventos se vendan solos**.

## Qué le ofrecemos

- Botones de reserva que sí abren OpenTable, en el encabezado, en el menú y en una barra fija del celular (con WhatsApp, llamar y cómo llegar).
- "La cuenta de tu reunión": eligen espacio, día, cuántos son y paquete, y ven cuánto sale y si cubren el consumo mínimo de ese día; el WhatsApp les llega con la cuenta escrita.
- Todo el menú en una sola página, con pestañas, y el Lunch 57 y los platillos para llevar a la vista, cada uno con su WhatsApp prellenado.
- Descripción, vista previa y datos de restaurante para Google (dirección, horario, teléfono, menú, reservas).

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Me gustó mucho su sitio, sobre todo las fotos del patio y el menú completo con precios. Revisándolo desde el celular noté que el botón amarillo "Reservar" de arriba no lleva a ningún lado (y el de "Reservar" del menú solo regresa al inicio), así que quien quiere reservar tiene que bajar hasta encontrar el recuadro de OpenTable. Les preparé una propuesta de cómo podría verse, con la reserva a un toque y una calculadora para sus eventos que dice cuánto sale y si se cubre el consumo mínimo. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿El enlace de OpenTable con su número de restaurante (1327186) es el correcto para reservar?
- ¿El consumo mínimo se cubre con los paquetes? Si no se alcanza, ¿se paga la diferencia? ¿El anticipo del 50 % es sobre el mínimo o sobre el total? ¿El Comedor 1 pide anticipo?
- ¿Qué restricciones aplican al Lunch 57?
- ¿La foto del patio con el árbol es la Terraza o el área interior?
- ¿Nos pueden compartir fotos de los platillos, postres, paquetes y de los tres espacios?
- ¿Qué número exterior tienen en Blvd. Valentín Gómez Farías? ¿El pin del mapa es correcto?
- ¿Quieren conservar el registro de promociones por correo?
