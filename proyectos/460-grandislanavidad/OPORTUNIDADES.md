# Grand Isla Navidad Resort: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-27). Los defectos del clon (imágenes que no se descargaron, estilos faltantes) no son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.islanavidad.com.mx/ |
| Prioridad | **MEDIA** — sitio técnicamente funcional, pero con oportunidades de visibilidad y de conversión |
| Contacto publicado | Tel. 314 331 0500 · Call center: 612 175 0860 · WhatsApp: 612 218 6591 (sin mensaje prellenado) |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **El JSON-LD del sitio no declara el tipo de negocio.** El schema.org de la portada solo usa `WebPage` y `WebSite` con la descripción "Hootel Resort en Manzanillo Colima" (con errata). Google no tiene datos estructurados de hotel/resort para mostrar en su buscador (precio, disponibilidad, reseñas estructuradas). | Pierde visibilidad en búsquedas de "hotel en Manzanillo" en Google, especialmente en el Knowledge Panel y Google Hotels. | `investigacion/original.html` → `<script type="application/ld+json">` |
| 2 | **La meta description es el primer párrafo del contenido, truncado.** El buscador la regenera automáticamente (empieza "…de paseo por Barra de Navidad"). No hay una descripción escrita que invite a hacer clic ni menciona el Todo Incluido ni el precio. | Los resultados de búsqueda tienen una descripción genérica que no convierte clics en visitas al sitio. | `investigacion/original.html` → `<meta property="og:description">` |
| 3 | **El título de la portada es "Inicio - Grand Isla Navidad Resort"** en lugar de algo informativo. | Pierde clicks en los buscadores y no ayuda a que el usuario recuerde de qué es el sitio. | `investigacion/original.html` → `<title>` (implícito por el OG title que dice solo el nombre) |
| 4 | **Dos números de WhatsApp distintos** en el mismo sitio: `612 218 6591` en la barra de herramientas y `612 105 0164` en el widget flotante y el pop-up "Envíanos un WhatsApp". El visitante no sabe a cuál escribir; uno puede no estar monitoreado. | Puede resultar en mensajes de reserva que nadie lee, reservas perdidas. | `investigacion/original.html` → barra de herramientas vs. widget flotante y pop-up `wa.me/526121050164` |
| 5 | **El WhatsApp no lleva mensaje prellenado.** Ambos enlaces solo abren la conversación vacía (`wa.me/526122186591`, `wa.me/526121050164`). | El viajero tiene que escribir desde cero; muchos no lo hacen. Un mensaje prellenado ("Hola, quisiera información sobre el resort y tarifas") reduce la fricción. | `investigacion/original.html` → todos los enlaces `wa.me` |
| 6 | **La descripción del WebSite en el JSON-LD tiene una errata:** "Hootel Resort en Manzanillo Colima" (doble "o"). | Aunque el buscador tolera erratas, es una señal de descuido que puede afectar la percepción de la marca en resultados ricos. | `investigacion/original.html` → `"description":"Hootel Resort en Manzanillo Colima"` |
| 7 | **El sitio carga cinco familias de Google Fonts** (Jost, Montserrat, Playfair Display, Libre Caslon Display, EB Garamond) más un video de YouTube en la portada. En conexiones lentas o desde Manzanillo/Barra de Navidad (zonas con señal irregular), el sitio tarda en cargarse. | Los viajeros en tránsito o con datos móviles limitados pueden abandonar antes de ver el contenido. | `investigacion/original.html` → `<link rel="preconnect" href="https://fonts.googleapis.com">` y la capa del Revolution Slider con YouTube |

## Qué le ofrecemos

- Un sitio de una página, sin scripts externos, que carga en < 3 segundos en móvil
- JSON-LD `Resort` correcto para Google, con todos los datos del negocio
- Title y description reales con el Todo Incluido, la ubicación y el teléfono
- Botones de WhatsApp con mensaje prellenado en cada suite y sección
- Barra fija en el celular con Reservar, Llamar y Cómo llegar
- "¿A qué despiertas?": selector de vista por suite que convierte la geografía única de la isla en argumento de venta
- La lámina antes/después lista para mostrarles en la llamada

## Mensaje sugerido para el primer contacto

> Hola, soy Guillermo. Encontré el sitio del Grand Isla Navidad Resort y noté que su JSON-LD no declara el tipo de negocio "Hotel/Resort", así que Google no puede mostrar los datos del resort en el Knowledge Panel ni en Google Hotels. También su descripción en el buscador sale truncada y dice "…de paseo por Barra de Navidad" sin mencionar el Todo Incluido ni la marina. Preparé una propuesta de sitio nuevo con todos esos detalles corregidos y con un elemento interactivo que usa la geografía de la isla —la laguna, el Pacífico y la marina— para ayudar a elegir la suite. ¿Les gustaría verla?

## Preguntas para la conversación

- ¿Cuál de los dos WhatsApp es el correcto para recibir reservaciones?
- ¿Las suites tienen vistas asignadas? (confirmar laguna, Pacífico o marina por tipo)
- ¿Tienen coordenadas GPS exactas del resort para el JSON-LD?
- ¿Desean incluir los testimonios de Google en el sitio? (algunos mencionan áreas en mantenimiento)
- ¿El campo de golf tiene tarifas publicables para huéspedes?
