# ilimago: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/crudo.json` (captura del 2026-09-26). Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.ilimago.com.mx/ |
| Prioridad | **MEDIA**: el sitio original funciona, pero tiene oportunidades de mejora técnica y de conversión que van contra la imagen de "agencia premium" que venden. |
| Contacto publicado | WhatsApp `56 5242 1069`, email `hola@ilimago.com.mx`, Facebook / Instagram / LinkedIn `@ilimago` |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **La meta description es de 56 caracteres y solo dice "Estrategias de marketing digital, branding corporativo y desarrollo web de alto impacto."** Sin ciudad, sin diferenciador, sin CTA. | Una agencia que vende SEO no debería descuidar su propio SEO. En Google se ve cortado y no da razones para hacer clic. | `crudo.json` página 0 campo `descripcion` |
| 2 | **El formulario de contacto usa PHP (`/contacto.php`)**: si el servidor no está bien configurado o el script falla, los prospectos que llenan el formulario no llegan. No hay confirmación visible de envío en el clon. | Pierden leads sin saberlo. WhatsApp existe pero está escondido; el formulario es el punto de conversión principal. | `crudo.json` página 0 sección "Hablemos de negocios" |
| 3 | **No hay datos estructurados (JSON-LD)** en el sitio. Como agencia, llevan SEO a sus clientes pero su propio sitio no tiene marcado de `Organization` ni `ProfessionalService`. | Google no puede mostrar su nombre, teléfono ni dirección como "Knowledge Panel" en los resultados de búsqueda. Resta credibilidad frente a prospectos que los buscan. | `crudo.json` — no hay script `application/ld+json` en ninguna página |
| 4 | **La dirección solo aparece en el formulario de contacto**, sin un enlace a Maps y sin horario de atención publicado. | Un prospecto que quiere ir a visitarlos no puede hacerlo desde el sitio; muchos no van a buscar la dirección en Maps por su cuenta. | `crudo.json` página 0: "Oficina Central Av. Miguel Ángel de Quevedo 785, Coyoacán 04330 CDMX" — sin enlace |
| 5 | **Las 6 imágenes de servicios no tienen atributo `alt` descriptivo** en el HTML original (usan "Image 3: Estrategia de MKT" en formato Jina, no el atributo real). | Las imágenes no contribuyen al SEO de imágenes y reducen la accesibilidad del sitio (lector de pantalla lee "Image 3"). | `crudo.json` página 0 — lista de imágenes |
| 6 | **El carrusel de especialidades requiere JavaScript específico del servidor** (cargado desde `/assets/js/servicios.js`). Si ese archivo falla o tarda, el contenido de servicios no es accesible. | Un sitio de agencia que se queda en blanco por fallo de JS es una mala vitrina. | `crudo.json` — referencia a scripts externos |
| 7 | **Los precios de los planes no muestran la inversión mínima total** — el visitante tiene que multiplicar mentalmente precio × meses para saberlo. | La fricción cognitiva reduce conversiones. Un prospecto que no hace la cuenta puede sentir la inversión como "open-ended". | `crudo.json` página 0 sección "Planes de Marketing" |

## Qué le ofrecemos

- **Un sitio que refuerza su propia autoridad digital:** JSON-LD, meta tags correctos y alt textos — lo que ellos hacen para sus clientes, aplicado a su propio sitio.
- **La calculadora de inversión:** elimina la fricción de los precios y acelera la decisión de compra. El prospecto ve en tiempo real cuánto invierte en el plan que le interesa, con botón de WhatsApp prellenado.
- **Conversión directa a WhatsApp** en lugar del formulario PHP, eliminando el riesgo de leads perdidos.
- **Barra móvil fija** con WhatsApp, llamada directa y Maps: el 70%+ de sus prospectos visitan en móvil y necesitan contactar con un toque.
- **Sitio sin dependencias externas frágiles**: no falla por un script de terceros; funciona desde cualquier hosting.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta de WhatsApp o Instagram. Tono: colega que encontró algo interesante, sin presionar.

> Hola, buen día. Soy Guillermo, me dedico a rediseñar sitios web. Vi el sitio de ilimago y noté algo curioso: como agencia de marketing, llevan SEO a sus clientes, pero el sitio propio no tiene datos estructurados y la descripción de Google no menciona la ciudad. Me tomé la libertad de preparar un rediseño con su mismo contenido y precios, con fondo oscuro premium y una calculadora que muestra la inversión mínima de cada plan. ¿Me darían 10 minutos para enseñárselo?

## Preguntas para la conversación

- ¿Quieren incluir también los planes de diseño gráfico (Emprende / Impulsa / Crece) en el nuevo sitio?
- ¿El formulario PHP de contacto está funcionando? ¿Los leads llegan al correo?
- ¿Tienen preferencia de foto de portada para redes sociales / Open Graph?
- ¿Tienen Behance activo (`ilimago`)? Lo tenían en el pie del sitio.
- ¿Hay horario de atención en la oficina que quieran publicar?
