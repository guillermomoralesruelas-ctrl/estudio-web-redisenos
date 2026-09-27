# Integra 360: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26) y con curl al sitio real y a su API pública el 2026-09-27. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://integra360.com.mx/ |
| Prioridad | ALTA: los botones "Venta" y "Renta" del menú muestran 3 de sus 96 propiedades en venta y 0 de sus 4 en renta, y la portada sigue con "Lorem ipsum" y páginas de demostración del tema publicadas |
| Contacto publicado | Teléfono 7712149491; WhatsApp 5217712149491 (en cada ficha); contacto@integra360.com.mx; Boulevard Nuevo Hidalgo 326 Int. 4, Puerta de Hierro, Pachuca de Soto; Facebook IntegraBienesRaices360, Instagram integra360bienesraices, TikTok @integra360br, YouTube @integra360bienesraicescasa9 |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **El menú esconde casi todo el inventario.** "Venta" lleva a `/label/venta/`, que muestra **3 propiedades**; las que están en venta son 96 (`/status/venta/`). "Renta" lleva a `/label/renta/`, que dice **"0 Propiedad"** y "No listing found", aunque tiene 4 en renta (`/status/renta/`). | Quien entra a buscar desde el menú cree que casi no tienen inventario, o que no rentan nada, y se va a otra inmobiliaria. | `curl` a las cuatro URL (2026-09-27): "3 Propiedades", "96 Propiedades", "0 Propiedad", "4 Propiedades"; enlaces del menú en `original.html` |
| 2 | **Textos y páginas de demostración a la vista.** Bajo "Por qué Integra 360 es tu mejor opción?" dice "Lorem ipsum dolor sit amet, consectetur adipisicing". Siguen publicadas páginas del tema Houzez como "Apartments in New York", "Sample Page", "About" y "Testimonial 3", y la ventana de inicio de sesión dice "User registration is disabled for demo purpose". | Un comprador que va a confiar un patrimonio de millones ve un sitio a medio terminar. Y esas páginas pueden salir en Google con el nombre de Integra 360. | `original.html` y `curl` a la portada (Lorem ipsum); `curl` a `/index.php/apartments-in-new-york/`, `/sample-page/`, `/about/`, `/testimonials/testimonial-4/` (las cuatro 200); `crudo.json` (login) |
| 3 | **Google y las redes no reciben bien el sitio.** La portada no tiene meta description ni H1; su `og:image` apunta a `demo.integra360.com.mx`, que falla por certificado y da 404, así que al compartir el enlace sale sin foto; su `og:description` anuncia una casa en E-Sur a $3,200,000 que ya no está en el inventario. El JSON-LD solo dice `WebPage`: no hay `RealEstateAgent` con dirección y teléfono. | Menos visibilidad en búsquedas de "inmobiliaria en Pachuca" y enlaces sin imagen cuando los comparten en WhatsApp o Facebook, que es por donde llegan muchos clientes. | `original.html` (0 `<h1>`, sin `name="description"`, `og:image`, `og:description`, `ld+json`); `curl` a la imagen de demo (error de certificado; con `-k`, 404) |
| 4 | **Fichas con datos que no cuadran.** Una casa de Alvento Habitat está publicada dos veces (fichas 26310 y 26296); un terreno en Villa de Tezontepec tiene precio de $165,300,000, igual a sus m²; otra de Villa de Tezontepec no dice si es venta o renta; una casa en Las Torres, Pachuca, está en la ciudad "TULANCINGO"; un título dice "65 habitaciones" (la ficha dice 5); un palco del Estadio Hidalgo y unos lotes en Zona Plateada están como "Casas"; y hay títulos con errores ("Caasa en venta ona plateada", "Pubelos magicos", "Viilairosa", "PACHUC"). Su buscador tiene un rango de precios "De $500,000 Para $10,000,000", pero 19 propiedades cuestan más. | Filtros y búsquedas dan resultados equivocados, y los errores restan confianza en un servicio que promete asegurar "que los inmuebles propuestos estén en regla". | API pública `/wp-json/wp/v2/properties` (`curl`, 2026-09-27); `crudo.json` (rango de precios) |
| 5 | **Restos del tema en sus datos:** ciudades de ejemplo (Chicago, Miami, New York, Los Angeles) y la licencia de ejemplo "US-123-456-5463" en su ficha de agencia. | Menor, pero es lo que sale cuando alguien filtra o revisa sus datos. | API pública (`/property_city`, `/agencies`) |

Lo que sí está bien y conviene decirlo: publican un inventario grande y al día (fichas de esta misma semana), con precio, m², recámaras, baños y ubicación en el mapa, y cada ficha tiene un botón de WhatsApp con el nombre de la propiedad ya escrito. No se encontró spam ni hackeo.

## Qué le ofrecemos

- **Que se vea todo su inventario:** "Pachuca a 360°" pone sus 96 propiedades alrededor de Puerta de Hierro, por rumbo y distancia (hacia CDMX, la Zona Plateada, Sahagún o los pueblos mágicos), con filtro de compra o renta y de tipo.
- **Más conversaciones por WhatsApp:** cada propiedad abre WhatsApp con su título y enlace, igual que hoy, y quien quiere vender manda dirección y ciudad en el primer mensaje.
- **Un sitio sin restos de plantilla:** sin "Lorem ipsum", páginas de demostración ni menús que muestran 0 resultados.
- **Que Google los entienda:** título y descripción reales, un solo H1, imagen para compartir que sí abre y JSON-LD de inmobiliaria con su dirección y teléfono.
- Barra fija en el celular para escribir, llamar o llegar a la oficina.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar. Menciona **un** hallazgo concreto y ofrece enseñar la propuesta.

> Hola, buen día. Estuve viendo el sitio de Integra 360 y me llamó la atención todo el inventario que tienen en Pachuca. Les aviso de un detalle: el botón "Venta" del menú solo muestra 3 propiedades (tienen 96 en venta) y "Renta" dice que no hay ninguna, aunque tienen 4. Hice una propuesta de rediseño con sus propias propiedades: el visitante elige hacia dónde de Pachuca quiere vivir y ve lo que tienen en ese rumbo, con WhatsApp directo a cada ficha. ¿Le puedo enseñar cómo quedó? Son cinco minutos.

## Preguntas para la conversación

- ¿Dónde está exactamente la oficina (para el centro de la rosa y "Cómo llegar") y cuál es su código postal?
- ¿El WhatsApp general es el mismo 771 214 9491 de las fichas? ¿Qué horario de atención tienen?
- ¿Las fotos de Lagos, Atalia y Alvento de $3,800,000 son renders de los desarrollos? ¿Tienen fotos reales de las demás propiedades?
- ¿Quieren que el sitio nuevo lea su inventario de WordPress para que se actualice solo?
- ¿Revisamos juntos las fichas duplicadas o con precio o tipo equivocado?
