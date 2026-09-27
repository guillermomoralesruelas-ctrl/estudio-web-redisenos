# Hotel Izkina: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://izkina.com/ (sitio propio en PHP, CodeIgniter con plantilla de Bootstrap; motor de reservas propio). Casa hotel de 4 habitaciones en Calle Dr. Adolfo Rosado Salas 200, Centro, Cozumel |
| Prioridad | **MEDIA**: el sitio funciona y está bien escrito (reserva en línea propia, precios a la vista, textos honestos y fotos profesionales), pero su galería muestra leyendas de prueba ("jjajajaj", "algo", "Primera"), el buscador de la portada pierde adultos y niños, y se contradice en aire acondicionado, horario y datos vacíos ("Tamaño m²") |
| Contacto publicado | Tel. y WhatsApp +52 445 103 33 78; contacto@izkina.com; Instagram @izkina.cozumel |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-27 (el inicio responde 200 y coincide con `original.html`; también `/reservaciones`, `/habitaciones/pajaro-azul`, `/paloma`, `/tukan`, `/jilguero`, `/galeria`, `/historia`, `/contacto`, `/terminos-y-condiciones`, `/robots.txt` y `/sitemap.xml`).

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **La galería muestra leyendas de prueba.** Al abrir las fotos, el visor enseña como título "jjajajaj", "algo" y "Primera" (y " Instalaciones" o "instalaciones" en otras). | Es lo primero que ve quien quiere conocer la casa antes de reservar: se nota descuidado en un hotel que cuida cada detalle. | curl de `/galeria` (`data-title` del visor y `alt` de las fotos) |
| 2 | **El buscador de la portada pierde a los huéspedes.** Los campos "Adultos" y "Niños" de "Consulta disponibilidad" no tienen nombre, así que no se envían: `/reservaciones` recibe las fechas pero vuelve a poner 2 adultos y 0 niños. Si se envía sin fechas, sale un aviso con el texto interno "Site.select_date_range" (o "Site.invalid_date_range"). | Quien viene solo o con un niño tiene que volver a llenar el formulario, y el aviso sin traducir parece un error del sitio justo al reservar. | `original.html` (inputs `form-element-stepper` sin `name`, script de validación) y curl de `/reservaciones?check_in=…` |
| 3 | **Datos que se contradicen o quedan vacíos.** "Todas nuestras habitaciones tienen aire acondicionado", pero la página de Paloma solo lista "wifi"; las cuatro habitaciones dicen "Tamaño m²" sin número; `/contacto` da un horario de atención (lunes a viernes 9 a 6, fines de semana 11 a 4) y en la misma página dice "disponibles las 24 horas"; Paloma tiene sofá cama pero todas dicen "Máx: 2 Adultos, 0 Niños"; tres fichas muestran "breakfast" sin decir si el desayuno está incluido. | Son justo las dudas que hacen que el huésped escriba en vez de reservar (o que reserve otro hotel donde sí está claro). | curl de las cuatro páginas de habitación y de `/contacto`; `crudo.json` |
| 4 | **Google lo lee poco.** La portada no tiene H1, su título es solo "Hotel Izkina" y su description dice "Hotel de lujo con las mejores vistas y comodidades" (genérica, y no coincide con una casa del centro que avisa del ruido); no hay datos estructurados de hotel y `/sitemap.xml` da 404. | Menos visibilidad para búsquedas como "hotel boutique centro Cozumel", y lo que Google muestra no cuenta lo que lo hace especial. | `original.html` y curl de `/sitemap.xml` |
| 5 | **Su teléfono tiene lada de Guanajuato (445)**, no de Cozumel, y es el único que se publica; el WhatsApp abre sin mensaje. | Un huésped que no conoce el número puede dudar de que sea del hotel; un mensaje prellenado ahorra conversaciones. | `original.html` (`tel:` y `wa.me/+524451033378`) |
| 6 | Detalles: "John Ruski" (John Ruskin) en la cita de Misión y Visión, "descansás", "Pajaro Azul" sin acento, "Tukan" en el nombre y "Tucán" en su texto, una "n" suelta en la página de Pájaro Azul ("plantas naturales n —"), el mapa de Contacto incrustado con el ancla de ejemplo "4v1234567890" y el pie "Hotel Izkina by Félix Omar Ramírez Vázquez". | Pequeñas pérdidas de confianza. | `crudo.json`, curl de `/habitaciones/pajaro-azul` y `/contacto` |

Nota: el sitio **tiene mucho a su favor**: motor de reservas propio que funciona y recibe las fechas, precios por noche a la vista, textos de habitación muy bien escritos (cada una dice dónde está y para quién es), un aviso honesto del ruido del centro, fotos profesionales y descripciones propias para cada habitación. El argumento no es "su sitio está mal", sino **que la galería y los datos estén a la altura de sus fotos y sus textos, y que elegir habitación sea un gusto**.

## Qué le ofrecemos

- "¿Con qué quieres despertar?": un pájaro en cada esquina del Giglio; el huésped elige con qué quiere despertar (el agua, la luz, madrugar o el patio) y le aparece su habitación con su texto, precio y botón para reservarla o preguntar por WhatsApp.
- Todo en una página: la casa, la historia, lo que hay que saber antes de reservar y cómo llegar, con barra fija en el celular y datos de hotel para Google.
- Corregir las leyendas de la galería, el buscador de la portada y los datos que se contradicen (con la información que ellos confirmen).
- Cuando nos compartan fotos: la alberca, la cocina, el patio, la fachada y el antes y después de la restauración en buena resolución.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta (por WhatsApp al 445 103 3378). Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Vi la página de Hotel Izkina y me encantaron sus textos y la historia de la casa. Les escribo porque noté que en la galería, al abrir algunas fotos, aparecen títulos de prueba como "jjajajaj" o "algo", y que el buscador de la portada no pasa el número de adultos y niños a la reserva. Les preparé una propuesta de cómo podría verse su sitio, donde el huésped elige su habitación según con qué quiere despertar. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿El 445 103 3378 es el teléfono y WhatsApp correcto para huéspedes? ¿Tienen un número local?
- ¿Paloma tiene aire acondicionado? ¿Qué medida tiene cada habitación?
- ¿El desayuno está incluido? ¿En qué habitaciones?
- ¿Aceptan niños o una tercera persona en Paloma (con el sofá cama)?
- ¿Cuál es el horario real de atención: el de la página o 24 horas?
- ¿Nos pueden compartir las fotos de la alberca, la cocina, el patio, la fachada y el antes y después de la restauración? ¿Podemos usar las fotos de Roksana Rita Photography y darle crédito?
- ¿Quieren el sitio nuevo también en inglés, como el actual?
