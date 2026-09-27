# Escuela de Fotografía: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26) y con curl al sitio real el 2026-09-27. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.escueladefotografia.com.mx/ |
| Prioridad | MEDIA: el sitio funciona, pero ningún botón de informes lleva a WhatsApp, no dice dónde se toman los cursos presenciales y Google no tiene descripción ni datos del negocio |
| Contacto publicado | Tel. (800) 849-3278 y (871) 228-7501; WhatsApp 871 183 6568; info@escueladefotografia.mx; Messenger m.me/diplomadosfotografia; Facebook e Instagram @diplomadosfotografia |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Los 11 botones "Solicita Información" de los cursos van a Messenger**, no a WhatsApp. El único WhatsApp (871 183 6568) está en el pie y en Contacto, y abre el chat vacío, sin mensaje. El enlace "contactarnos" del formulario de inscripción es un `ow.ly` que también termina en Messenger. | Quien no usa Messenger o no tiene la sesión abierta en el celular se queda sin pedir informes. El chat vacío obliga al interesado a redactar y a la escuela a preguntar qué curso le interesa. | `original.html`: 11 enlaces `m.me/DiplomadosFotografia` y 2 `api.whatsapp.com/send?phone=528711836568` sin `text`; `crudo.json` (página de inicio e inscripciones); `curl` a `ow.ly/65XH30cqOWB` → 301 a `m.me/diplomadosfotografia` |
| 2 | **No dice dónde se toman los cursos presenciales.** El inicio dice "disponible solo en algunas ciudades", pero no dice cuáles. Las ciudades (Aguascalientes, Durango, Saltillo, Torreón) solo aparecen como opciones del formulario de inscripción, y el único domicilio está en el aviso de privacidad. | Quien busca "curso de fotografía en Saltillo" no encuentra la ciudad en la página, ni Google tampoco. El visitante tiene que escribir para saber si le queda cerca. | `crudo.json` (inicio: "(Solo algunas ciudades)"); `curl` a `/inscripciones/` (opciones de "Unidad"); `curl` a `/aviso-de-privacidad/` (domicilio en Torreón) |
| 3 | **Sin meta description, sin Open Graph y sin datos estructurados (JSON-LD).** El título no lleva acentos ("Fotografia"). | Google arma la descripción con el texto que encuentre, y al compartir el enlace por WhatsApp o Facebook no sale ni imagen ni descripción. | `original.html` y `curl` a la página de inicio: no hay `<meta name="description">`, ni `og:`, ni `application/ld+json` |
| 4 | **10 etiquetas H1 y 206 fotos sin texto alternativo** (toda la galería de alumnos). | Google no sabe cuál es el título principal de la página, y las fotos del portafolio, su mejor prueba de resultados, no aparecen en la búsqueda de imágenes. | `original.html`: 10 `<h1`, 229 `<img` y 206 sin `alt` |
| 5 | **No hay precios, fechas de inicio ni horarios en la página.** El único horario ("Diplomado certificado (7 meses), sábados…") está dentro del formulario de inscripción. | El principiante que compara escuelas quiere saber cuánto cuesta y cuándo empieza; si no lo ve, pregunta o se va. Cada informe cuesta una conversación. | `crudo.json`: ningún precio en inicio, cursos ni contacto; `curl` a `/inscripciones/` (opciones de "Programa") |
| 6 | **La página de inicio carga 206 miniaturas de la galería y mide unos 25,000 px.** Los teléfonos se muestran como texto, sin enlace para llamar. | En el celular hay que desplazarse muchísimo para llegar a los cursos o al contacto, y para llamar hay que copiar el número a mano. | `original.html`: 206 miniaturas `-400x284.jpg`, 0 enlaces `tel:`; captura `referencias/capturas-2026-09-27/antes-movil.jpg` |
| 7 | **Detalles que se ven viejos:** la última entrada del blog es de junio de 2023, el pie dice "© 2024" y la biografía sigue diciendo "+15 años de experiencia" (la escuela enseña desde 2008). | Son detalles menores, pero el visitante los nota y parece que nadie actualiza el sitio. | `crudo.json` (blog: "Jun 29, 2023"; pie "© 2024"; biografía) |

Lo que sí está bien y conviene decirlo: el sitio carga, el formulario de inscripción es completo, el reglamento está publicado y actualizado (vigente desde el 1 de enero de 2026) y tienen un portafolio de alumnos muy amplio.

## Qué le ofrecemos

- **Más informes por WhatsApp y mejor calificados:** cada curso y cada cámara abre WhatsApp con el mensaje ya escrito ("tengo una Nikon D3100 y quiero informes del curso…"). La escuela sabe desde el primer mensaje qué curso quiere y con qué cámara llega.
- **Su portafolio de alumnos convertido en argumento de venta:** en vez de 206 fotos sueltas, el visitante elige su cámara y ve lo que otros alumnos lograron con ella, con los ajustes que usaron.
- **Que lo encuentren en cada ciudad:** las unidades presenciales a la vista, domicilio con Google Maps y datos para Google (descripción, JSON-LD, imagen para compartir).
- **Una página corta que se lee bien en el celular,** con barra fija para escribir, llamar o llegar.
- **Menos preguntas repetidas:** el resumen del reglamento (pagos, asistencia, tolerancia, cámara en préstamo, bajas) antes de inscribirse.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar. Menciona **un** hallazgo concreto y ofrece enseñar la propuesta.

> Hola, buen día. Estuve viendo el sitio de la Escuela de Fotografía y me llamó la atención que los botones de "Solicita información" de todos los cursos llevan a Messenger, y el de WhatsApp abre el chat vacío. Hice una propuesta de rediseño con sus propias fotos: el visitante elige qué cámara tiene, ve fotos de sus alumnos tomadas con esa misma cámara y le escribe por WhatsApp con el curso y su cámara ya en el mensaje. ¿Le puedo enseñar cómo quedó? Son cinco minutos.

## Preguntas para la conversación

- ¿Prefieren recibir los informes por WhatsApp o por Messenger? ¿El 871 183 6568 lo atiende alguien todo el día?
- ¿En qué ciudades hay cursos presenciales hoy, y cuál es el domicilio de cada unidad? ¿El de Torreón es el de la escuela?
- ¿Se pueden publicar precios, fechas de inicio y horarios, o prefieren darlos por mensaje?
- ¿Siguen vigentes las cifras de 1,167 egresados y 98% de calificaciones positivas? ¿Se actualiza el "+15 años de experiencia"?
- ¿Tienen permiso de los alumnos para mostrar sus fotos y nombres en un lugar más visible?
