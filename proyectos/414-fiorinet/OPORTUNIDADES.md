# FioriNET: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26) y con curl al sitio real el 2026-09-27. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.fiorinet.com.mx/ |
| Prioridad | **MEDIA**: la tienda funciona, pero el sitio se contradice en lo que más pesa al comprar flores (cuánto cuesta el envío y cuándo atienden) y Google no lo ve como florería |
| Contacto publicado | CDMX (55) 8526 1197, WhatsApp +52 55 5508 9212, mail@fiorinet.com, IG @fiorinet.com.mx, FB y X @fiorinet; tienda en Casa del Obrero Mundial 246, Piedad Narvarte |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | El costo de envío en CDMX se contradice: su página de hospitales dice que el envío "está incluido dentro de las 16 alcaldías" y los banners de la portada dicen "Envío incluido en CDMX", pero su tabla de costos (que dice leerse del carrito) cobra Xochimilco $100, Tláhuac $180 y Milpa Alta $200 | Quien compra para esas alcaldías ve un cargo que no esperaba al pagar: carritos abandonados o una llamada para reclamar | https://www.fiorinet.com.mx/cdmx/hospitales ("¿Cuánto cuesta el envío a un hospital de CDMX?"), https://www.fiorinet.com.mx/df_spa/shipping-cost/ y los banners `2fn_2025.jpg` y `1fn_2025_1.jpg` |
| 2 | El horario cambia según la página: el FAQ del inicio dice sábados de 9:00 a 13:30; el pie, la página de entrega y la de tienda dicen 9:30 ("Sab 9:30 AM - 13:30 PM"); las páginas de hospitales y funerarias dicen que atienden los 7 días (domingos hasta las 5 pm), algo que el horario general no menciona | Justo en entregas urgentes (hospital, velorio) la persona no sabe si le contestan en domingo | `investigacion/crudo.json` (FAQ y pie del inicio), /entrega, /df_spa/physical-store/, /cdmx/hospitales, /cdmx/funerarias |
| 3 | Su meta description y su FAQ prometen cobertura en Puebla y Querétaro, pero su tabla de costos no tiene ninguna zona de esos estados (solo CDMX, Estado de México, Jalisco y Nuevo León) | Quien busca "flores a domicilio Puebla" llega y no encuentra cómo ni cuánto; si el carrito no deja elegir la zona, se pierde la venta | `investigacion/original.html` (meta description), FAQ "¿Tienen cobertura fuera de CDMX?" y /df_spa/shipping-cost/ |
| 4 | Sus datos para Google dicen `Organization`, no `Florist`, y no tienen horario ni coordenadas | Google no la trata como florería local en Maps y búsquedas "florería cerca de mí", aunque tiene tienda física y 4.7 estrellas | `investigacion/original.html` (JSON-LD con `"@type":"Organization"`) |
| 5 | Los banners de la portada tienen el mensaje principal ("Entrega 2 a 4 horas", "Primera florería en línea en México desde 1999", "Precios todo incluido") escrito dentro de la imagen y sin texto alternativo | Google y los lectores de pantalla no leen sus mejores argumentos; en el celular el texto sale diminuto | `investigacion/original.html` (`<img … owlcarouselslider … alt="">`) |
| 6 | Su botón de WhatsApp abre el chat vacío (`wa.me/525555089212` sin mensaje) y la tabla de costos está escondida en el pie ("Costo de envío") | La persona tiene que escribir desde cero qué quiere y a dónde; más preguntas repetidas para el equipo | `investigacion/original.html` |
| 7 | Dos fotos de su catálogo llevan la marca de otra florería (cajas con el logo "Blooming Secrets") en "Anturios & Rosas" y "Orquídeas Phalaenopsis BS" | Si el cliente recibe otra caja, o nota la marca, baja la confianza | Categoría Funeral, fotos `anturios_rosas_1_1_1.jpg` y `orquidea-phalaenopsis-blancas-bs.jpg` |

Lo que está bien: su tienda en línea funciona, publica precios con IVA, tiene una tabla de envíos por zona muy completa (69 zonas), preguntas frecuentes útiles y páginas especializadas para hospitales y funerarias. Conviene decirlo.

## Qué le ofrecemos

- Una página que contesta de entrada "¿cuánto me cuesta que llegue a tal alcaldía?", con el total del arreglo más el envío y el pedido listo en WhatsApp (arreglo, zona, total y dedicatoria).
- Un solo dato de envío y de horario en todo el sitio, para que no haya sorpresas en el carrito.
- Datos de florería para Google (`Florist` con dirección, horario, coordenadas y teléfonos por ciudad), textos legibles en lugar de banners con letras y botón de WhatsApp con mensaje.
- Barra fija en el celular con WhatsApp, llamada y cómo llegar a la tienda.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar. Menciona **un** hallazgo concreto y ofrece enseñar la propuesta.

> Hola, buen día. Estuve revisando fiorinet.com.mx: su tabla de envíos por zona es de lo más completo que he visto en una florería. Noté un detalle: en la página de hospitales dice que el envío está incluido en las 16 alcaldías, pero en la tabla de costos Xochimilco, Tláhuac y Milpa Alta tienen cargo; alguien que compra para ahí se puede llevar una sorpresa al pagar. Preparé una propuesta de página donde la persona toca la alcaldía, ve el costo y el total con su arreglo y les manda el pedido por WhatsApp ya escrito. ¿Se la puedo enseñar? Son cinco minutos.

## Preguntas para la conversación

- ¿Qué cobra hoy el carrito en Xochimilco, Tláhuac y Milpa Alta? ¿El envío en CDMX está incluido o no?
- ¿El sábado abren a las 9:00 o a las 9:30? ¿Atienden domingos y festivos, como dicen sus páginas de hospitales y funerarias?
- ¿Entregan en Puebla y Querétaro? ¿Con qué costo?
- ¿Las fotos del catálogo son de sus arreglos? ¿Por qué dos traen cajas de Blooming Secrets?
- ¿Prefieren que los pedidos lleguen por WhatsApp o que la página mande directo a la tienda en línea?
