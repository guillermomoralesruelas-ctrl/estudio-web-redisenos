# Florería Riviera: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` e `investigacion/crudo.json` (captura del 2026-09-26). La red de la nube no llega a floreriariviera.com, así que **no se pudo comprobar en vivo**. Los defectos del clon no son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.floreriariviera.com/ (español e inglés). Florería con entrega a domicilio en Playa del Carmen y la Riviera Maya (la base decía Cancún) |
| Prioridad | **ALTA**: sus datos para Google dan otro teléfono (984 803 4735) que el que muestra el sitio (984 204 0410), y se contradicen en si hay tienda o es "100% en línea" |
| Contacto publicado | Tel. +52 984 204 0410, WhatsApp 984 242 0053, info@floreriariviera.com, FB /Floreriarivieramexico, IG @floreriaplayadelcarmen y @floresrivieramaya |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-29/` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Tiene tres bloques de datos para Google que se contradicen: dos dan el teléfono +52 984 803 4735 (el sitio muestra 984 204 0410), uno dice "Servicio 100% en línea" y otro da dirección en Ave. Constituyentes; uno dice que entrega "en las principales ciudades de México" | Google puede mostrar un teléfono que no es el que atiende y una ficha confusa | `original.html` (tres `ld+json`) |
| 2 | Sus datos para Google anuncian "Ramos desde $695 MXN con entrega el mismo día", pero el arreglo más barato publicado cuesta $800 (orquídea) y los ramos empiezan en $1,099 | Un cliente que llega por ese precio no lo encuentra | `original.html` y `crudo.json` |
| 3 | El carrusel de portada repite los mismos siete arreglos tres veces y no hay meta description | Parece que tiene menos variedad de la que tiene; Google arma la descripción solo | `crudo.json`, `original.html` |
| 4 | Las fotos de los arreglos son de 300 x 360 px | En pantallas grandes se ven chicas y borrosas | `sitio/assets/img/` |
| 5 | Sus políticas hablan de "FloresRivieraMaya.com" y tienen erratas ("HO HAY ENTREGAS", "informacion incorecta") | Confunde sobre qué empresa responde | `crudo.json`, políticas de servicio |
| 6 | El costo de envío no se publica ("+ envío" en todo) | El cliente no sabe el total hasta el final | `crudo.json` |

Lo que sí funciona: WhatsApp con mensaje en cada página, reglas de entrega claras, varios métodos de pago, versión en inglés y estatus del pedido en línea.

## Qué le ofrecemos

- Datos para Google corregidos, con un solo teléfono y su dirección.
- Una tarjeta de dedicatoria que el cliente escribe en pantalla y manda por WhatsApp junto con el arreglo, la fecha y la zona: menos idas y vueltas.
- Avisos automáticos con sus reglas (domingo, 14 de febrero, 10 de mayo, después de las 3 PM).
- Una portada sin repeticiones y con los precios claros.

## Mensaje sugerido para el primer contacto

> Hola, buen día. Estuve viendo la página de Florería Riviera y me gustaron mucho sus arreglos. Noté que los datos que su página le da a Google traen otro teléfono (984 803 4735) distinto al que aparece en el sitio, y un precio "desde $695" que no está en el catálogo. Me dedico a rediseñar sitios y preparé una propuesta donde el cliente escribe la tarjeta del arreglo en pantalla y se la manda por WhatsApp con la fecha y la zona. Si les interesa, con gusto se la enseño, sin compromiso.

## Preguntas para la conversación

- Cuál teléfono es el correcto y si el 984 803 4735 sigue en uso.
- Si tienen tienda para recoger y su número en Ave. Constituyentes.
- Costo de envío por zona.
- Fotos de los arreglos en mayor tamaño.
