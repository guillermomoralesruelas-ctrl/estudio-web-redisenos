# Invino Cava & Copeo: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://invino.com.mx/ (tienda Shopify "Invinomx"). Wine & coffee bar, vinoteca e importadora en Centrito Valle, San Pedro Garza García, N. L., en la guía Star Wine List |
| Prioridad | **ALTA**: en el inicio, la pestaña "Argentina" de "Vinos por país" muestra ocho productos de ejemplo del tema ("Producto", $49.99, 4.5 estrellas, "2 reseñas") y el menú lleva a cuatro colecciones vacías; además, 10 de sus 14 vinos están agotados en línea y el inicio los presenta igual |
| Contacto publicado | WhatsApp y tel. 81 1018 3565 (escrito en catas y en el winebar, sin enlace), botón flotante de WhatsApp "Tanino" al 81 2602 0119, IG y FB @invinomx, OpenTable (rid 1432354), David Zárate en IG @vinohistorias |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-26/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-26 (inicio, /pages/winebar, /pages/cata-winebar, /pages/cata-online, /pages/vino-historias, colecciones, `/products.json` y `/collections/<país>/products.json`, todos 200) y en `investigacion/original.html` y `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Productos de ejemplo con reseñas falsas en el inicio.** En "Vinos por país", la pestaña "Argentina" muestra ocho tarjetas iguales que dicen "Producto", "$ 49.99" y 4.5 estrellas con "2 reseñas", y enlazan a `#`. Es el relleno que pone el tema de Shopify cuando la colección está vacía (la colección Argentina tiene 0 productos). | Un cliente que busca un malbec ve productos de mentira a $49.99 con reseñas que nadie escribió. En una tienda que vende vinos de $400 a $1,800 eso quita confianza justo antes de comprar. | `original.html` y curl del inicio: 8 veces `<a href="#" class="product-title h6">Producto</a>` con `$ 49.99` y `title="2 reseñas"`; `/collections/argentina/products.json` → 0 productos |
| 2 | **El menú de la tienda lleva a colecciones vacías.** "Destilados y Licores" y "Jamón Ibérico y Serrano" dicen "Esta colección está vacía"; los países Chile, Estados Unidos y Argentina no tienen ningún vino. | Cada clic en una sección vacía es un cliente que piensa que la tienda está abandonada. | curl de `/collections/licores`, `/collections/valdihuelo` ("Esta colección está vacía") y `/collections/chile`, `/estados-unidos`, `/argentina` (`products.json` vacío) |
| 3 | **Casi todo está agotado y se ve así desde el inicio.** De 14 vinos, 10 están agotados en línea (solo quedan 804 Casa Momentos, los dos Tierra Maria y L'Ostal Cazes Rosé 750 ml). Los carruseles del inicio y "Todos los productos" los muestran con la etiqueta "Agotado" y sin ofrecer alternativa ni contacto. El vino blanco (1) y el espumoso (1) están agotados. | La tienda en línea no puede vender lo que enseña; quien llega por un anuncio o por Google se va sin saber que en el winebar hay más de 100 etiquetas. | `/products.json` (campo `available`), `crudo.json` (inicio y colecciones: "Agotado" en 10 productos) |
| 4 | **Dos WhatsApp distintos y el número escrito no se puede tocar.** Su página de catas dice "Escríbenos a nuestro whatsapp… 81-1018-3565" y el winebar "Contáctanos 81-1018-3565", pero son texto sin enlace (el "Contáctanos" es un `<a>` sin `href`). El botón flotante de WhatsApp manda a otro número, 81 2602 0119 ("Tanino"). Ninguna página tiene un enlace `tel:`. El inicio promete "Te asesoramos vía WhatsApp" sin decir el número. | Desde el celular, quien quiere rentar el bar o una cata privada tiene que copiar el número a mano; y según por dónde escriba, le contesta un número distinto. | curl de `/pages/winebar` (`<a class="link">Contáctanos 81-1018-3565</a>`), `/pages/cata-winebar`; configuración pública del botón (`/apps/sc/setting.php`: `"number":"5218126020119"`); 0 enlaces `tel:` |
| 5 | **No dice a qué hora abre el winebar ni cómo llegar.** Ninguna página publica horario ("vino y café durante todo el día"); la dirección solo está en /pages/winebar y en la de catas, sin enlace a Google Maps. Los datos para Google son solo `Organization` y `WebSite`, sin dirección ni tipo de negocio; el título del inicio es "Invinomx". | La gente que viaja y los encuentra en Star Wine List (su mejor argumento) busca el horario y el mapa en el celular; si no los encuentra, no llega. | `original.html` (JSON-LD `Organization`, `WebSite`; `<title>Invinomx</title>`) y curl de todas las páginas: ningún horario ni enlace a Maps |
| 6 | Detalles menores: los términos y condiciones están en inglés (el texto por defecto de Shopify); "View all" en inglés en el inicio; "pretenciones" en el título del winebar; "Edomond Thery" en el nombre de un producto y "Cuatro Ciéngeas" en las fichas de Tierra Maria (que además no aparece en la colección "México"); el L'Ostal Cazes tiene un precio "antes" ($490) menor que el actual ($570); no hay ningún aviso de venta a mayores de edad ni de consumo responsable. | Descuidos que restan en un sitio que por lo demás se ve cuidado. | curl de `/policies/terms-of-service`, del inicio, `/pages/winebar` y `/products.json` |

Nota: el sitio **está bien hecho en lo visual**: fotos propias muy buenas (el bar con su neón, las copas, las cajas de regalo), fichas de cata completas en cada vino, catas con precio y fecha, reserva por OpenTable y el reconocimiento de Star Wine List. El argumento no es "su sitio está mal hecho", sino **que la tienda no enseñe productos de mentira ni estantes vacíos, y que el bar, que es lo que los distingue, esté al frente con horario, mapa y WhatsApp**.

## Qué le ofrecemos

- Una página que abre con el winebar (Star Wine List, más de 100 etiquetas, reservar en OpenTable) y tiene horario, cómo llegar, WhatsApp y llamar a un toque, en una barra fija del celular.
- "¿Qué vas a servir?": el cliente dice qué hay en la mesa y ve los vinos de su tienda que lo acompañan según sus propias fichas, con una copa que se llena del color del vino; si está disponible lo compra en la tienda, y si está agotado pregunta por WhatsApp por uno parecido en vez de irse.
- Sin productos de ejemplo ni colecciones vacías; las catas, los regalos y la consultoría en la misma página, cada uno con su botón de compra o su WhatsApp con mensaje.
- Datos de bar y tienda para Google (dirección, teléfono, reservas) y una leyenda de consumo responsable.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Vi que están en Star Wine List, ¡felicidades! Revisando su sitio noté que en el inicio, en "Vinos por país", la pestaña de Argentina muestra ocho productos de ejemplo que dicen "Producto" a $49.99 con estrellas de reseñas; es el relleno que pone la plantilla de Shopify cuando una colección está vacía, y puede confundir a quien entra a comprar. Les preparé una propuesta de cómo podría verse su sitio, con el winebar al frente y una forma de elegir vino según lo que vas a cenar. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Cuál es su WhatsApp principal, el 81 1018 3565 o el 81 2602 0119 del botón? ¿El 81 1018 3565 recibe llamadas?
- ¿Qué horario tiene el winebar?
- ¿Van a volver a surtir la tienda en línea, o prefieren que los agotados inviten a preguntar por WhatsApp?
- ¿Quieren mantener las secciones de destilados, jamón y los países sin vinos?
- ¿Qué leyenda de consumo responsable prefieren usar?
- ¿Nos comparten fotos del winebar, de las catas, de David y de los paquetes de regalo?
- ¿El precio de la Cata a ciegas ($990) es por persona?
- ¿Quieren conservar la newsletter con 10% de descuento?
