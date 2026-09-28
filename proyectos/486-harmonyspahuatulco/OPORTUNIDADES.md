# Harmony Spa Huatulco: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` (clon del 2026-09-26) o intentando abrir el sitio real. La red de la nube no llegó al sitio en vivo: `curl` a `https://www.spahuatulco.com/` el 2026-09-27 devolvió un redirect a `/.well-known/sgcaptcha/` (reto anti-bot), lo mismo que le pasó a Jina Reader al investigar. Por eso todos los hallazgos de abajo se comprobaron en el HTML real ya clonado, no navegando el sitio en vivo. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, intenta abrir el sitio real de nuevo: puede que el reto anti-bot ya no esté o haya cambiado.

| Dato | Valor |
|---|---|
| Sitio | https://www.spahuatulco.com/ |
| Prioridad | MEDIA: negocio real y con datos completos (precios, teléfono, redes), pero esconde su mejor argumento de venta y tiene fallas de SEO/accesibilidad fáciles de mostrar |
| Contacto publicado | Tel./WhatsApp 958 122 9345; Facebook "Harmony spa Huatulco"; Instagram @spa_huatulco_by_c_harmony |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Su mejor argumento de venta —el traslado gratis ida y vuelta al hotel— solo existe dentro de una imagen (`images/transporte.jpg`) cuyo texto alternativo dice `alt="Beauty centre"`. No hay ni una palabra de "traslado" o "transporte" en el texto de la página. | Google no puede indexar ese beneficio (nadie lo encuentra buscando "spa con transporte en Huatulco") y quien usa lector de pantalla no se entera de que existe. Es el dato que más pesa para un turista sin coche al elegir spa. | `investigacion/original.html`, línea 510: `<img class="scale-with-grid" src="images/transporte.jpg" alt="Beauty centre" />` |
| 2 | La página tiene **3 etiquetas `<h1>`**: el logo, "Harmony SPA Huatulco: 01 958 122 9345" y la dirección completa, las tres en el pie. | Un H1 le dice a Google cuál es el tema central de la página; con tres (y ninguno describiendo el servicio) el buscador no tiene claro de qué trata, y perjudica el posicionamiento en "spa Huatulco" o "temazcal Huatulco". | `investigacion/original.html`: 3 coincidencias de `<h1` |
| 3 | 11 imágenes con `alt=""` (vacío) y varias más con textos de plantilla sin editar: "Beauty centre" (×6), "Full service" (×4), "Geotermal centre" (con errata). Ninguna foto real (el temazcal, los tratamientos) tiene una descripción real. | Las fotos no aparecen en Google Imágenes por temas relevantes ("temazcal Huatulco", "masaje Huatulco") y son invisibles para quien navega con lector de pantalla. | `investigacion/original.html`, atributos `alt` de las etiquetas `<img>` |
| 4 | El `<meta name="viewport">` incluye `maximum-scale=1`, que bloquea el pellizco para hacer zoom en el celular. | Alguien con baja visión no puede agrandar el texto con los dedos; es una barrera de accesibilidad común en revisiones WCAG. | `investigacion/original.html`, línea 32 |
| 5 | El sitio carga jQuery 2.1.4 (2015) y Revolution Slider completo (`plugins/rs-plugin/`), un plugin con historial de vulnerabilidades críticas conocidas (usado para el slider de la portada). | Son piezas de software sin soporte hace años, corriendo en un sitio público; es un riesgo de seguridad y hace más lenta la carga de la página. | `investigacion/original.html`, líneas 985 y 993-1003 (`jquery-2.1.4.min.js`, `jquery.themepunch.revolution.min.js`) |

## Qué le ofrecemos

- Un selector de paquetes por precio o duración que arma el mensaje de WhatsApp con el paquete exacto: menos preguntas repetidas de "¿cuánto cuesta el temazcal?" por WhatsApp.
- El traslado gratis, hoy escondido, como argumento central de la página: es lo que decide la compra frente a otro spa de Huatulco cuando alguien no tiene coche.
- Un solo H1 real, textos alternativos en cada foto y datos estructurados (JSON-LD) para que Google entienda de qué trata el sitio.
- Un sitio que no depende de jQuery ni de plugins con vulnerabilidades conocidas.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar. Menciona **un** hallazgo concreto y ofrece enseñar la propuesta.

> Hola, vi la página de Harmony Spa Huatulco y noté algo que seguramente les está costando reservas: el traslado gratis al hotel, que es un diferenciador enorme para quien visita Huatulco sin coche, no aparece como texto en ningún lado de la página (solo dentro de una imagen), así que Google no lo puede mostrar cuando alguien busca "spa con transporte en Huatulco". Armé una propuesta de cómo se vería resuelto, ¿les interesa que se las comparta?

## Preguntas para la conversación

- ¿Los 8 paquetes y sus precios siguen siendo los mismos que en el sitio actual (que no tiene fecha de actualización visible)?
- ¿El WhatsApp +52 958 122 9345 del botón sigue siendo el número correcto?
- ¿Cuál es el horario de atención? (no está publicado en el sitio actual)
- ¿Qué promoción mostraban en el popup de la portada, que no se pudo recuperar del clon?
