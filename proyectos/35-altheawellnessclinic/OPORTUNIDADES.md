# Althea Wellness Clinic: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26) y con curl al sitio real el 2026-09-27. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://altheawellnessclinic.com/ (Odoo; inglés y español en `/es_MX`) |
| Prioridad | MEDIA: el sitio funciona y publica precios, pero su portada muestra un texto de plantilla de Odoo, los 12 tratamientos del inicio no llevan a ningún lado y sus datos para Google tienen enlaces de relleno |
| Contacto publicado | WhatsApp +52 984 165 3990 (también como teléfono en su JSON-LD); admin@altheawellnessclinic.com; Calle 42 Lote 1, Int. 101, Col. Zazil-Ha, Playa del Carmen (Casa Habanero, esquina 42 y 15 Av.); Instagram @altheawellnessclinic, Facebook, TikTok y LinkedIn |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **La portada muestra un mensaje de plantilla de Odoo:** en la sección de productos se lee "Your Dynamic Snippet will be displayed here... This message is displayed because you did not provided both a filter and a template to use." en lugar de los productos. | Es una clínica que vende una experiencia de lujo; un mensaje técnico en inglés a media portada se ve descuidado justo donde presenta su tienda. | `crudo.json` (inicio) y `curl` a https://altheawellnessclinic.com/ el 2026-09-27 (1 coincidencia de "Dynamic Snippet") |
| 2 | **Los 12 tratamientos de la portada no llevan a ningún lado:** "Botox (Botulinum Toxin)", "Hyaluronic Acid", "Sofwave & Endolifting", "IV Therapy", "Cosmelan"… son enlaces a `#` (15 enlaces `href="#"` en la portada). | Quien toca el tratamiento que le interesa espera ver precio o detalles y no pasa nada; es el punto donde más fácil se pierde a alguien que viene de Google o de Instagram. | `original.html` y `curl` a la portada (`<a href="#" class="te_icon_title_1 …">Botox (Botulinum Toxin)</a>`) |
| 3 | **Sus datos para Google tienen enlaces de relleno y van duplicados:** el JSON-LD `MedicalClinic` aparece dos veces, su `sameAs` apunta a `https://instagram.com` y `https://google.com` (no a sus cuentas), la `image` es la URL de la portada y declara 5.0 con 252 reseñas que no se muestran en la página. `medicalSpecialty` es "AestheticMedicine", que no es un valor válido. | Google no puede ligar el sitio con su Instagram ni su ficha, y una calificación que no se ve en la página puede ser ignorada o penalizada. Es fácil de corregir y ayuda a salir en búsquedas locales de "aesthetic clinic Playa del Carmen". | `original.html`: 2 bloques `application/ld+json` idénticos |
| 4 | **Un enlace roto en la página de Sofwave:** "Discover the Evolution of Ultrasound Lifting" apunta a `http://Sofwave vs. HIFU and Ultraformer: Which Skin Tightening Treatment Actually Works?` (el título de un artículo en lugar de la dirección). | Justo en la parte que compara Sofwave con otras tecnologías, el botón da error. | `curl` a https://altheawellnessclinic.com/sofwave-playa-del-carmen el 2026-09-27 |
| 5 | **Los testimonios usan las fotos de ejemplo de Odoo** (`s_quotes_carousel_demo_image_3`, `_4` y `_5`) en la página de tratamientos. | Una foto de catálogo junto a la opinión de una paciente le resta credibilidad al testimonio. | `curl` a https://altheawellnessclinic.com/treatments |
| 6 | **Dos H1 y el horario no está en la página:** la portada tiene dos títulos principales ("Premier Aesthetic…" y "Book your private consultation"), y su horario (lunes a viernes 9 a 19, sábado 9 a 14) solo está en el código para Google, no a la vista. El formulario de cita pide el correo como obligatorio. | Quien quiere ir no sabe si hoy está abierto sin escribir; el correo obligatorio frena a quien prefiere WhatsApp. | `original.html` y `curl` (2 `<h1>`; horario solo en el JSON-LD; `E-mail *`) |
| 7 | **Las dos imágenes del aparato Sofwave™ están generadas con IA:** los PNG originales traen credenciales C2PA de `gpt-image` ("trainedAlgorithmicMedia"). No es un error, pero conviene tener fotos reales del equipo en su sala. | En medicina estética la confianza se construye con fotos reales de la clínica; varias plataformas ya marcan las imágenes con esas credenciales como hechas con IA. | Archivos `web/image/269076-…/Sofwave HIFU Lifting Ultrasound Althea Wellness Clinic.png` y `269078-…/Sofwave Playa del Carmen.png` descargados de su sitio |

Lo que sí está bien y conviene decirlo: publica precios "Starting at" en dólares y pesos para casi todo su menú (algo raro en el rubro), tiene WhatsApp en los botones principales, versión en español, dirección con referencia clara y fotos propias muy buenas de su recepción, sala y tratamientos. No se encontró spam ni hackeo.

## Qué le ofrecemos

- **Más citas por WhatsApp y mejor calificadas:** el "pase Althea" deja que el paciente elija de dónde viene, sus tratamientos y fecha, y manda por WhatsApp un mensaje con todo y el precio "desde" (en inglés, o en español si vive en México).
- **Su menú con precios en una sola página**, en pestañas y sin enlaces muertos, con cada tratamiento agregable al pase.
- **Una portada limpia**: sin textos de plantilla, un solo H1, horario a la vista y barra fija en el celular para escribir, llamar o llegar.
- **Que Google los entienda:** JSON-LD de clínica con sus redes reales, horario, coordenadas y servicios.
- Sin imágenes hechas con IA ni afirmaciones difíciles de sostener: solo sus fotos, sus precios y sus datos.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar. Menciona **un** hallazgo concreto y ofrece enseñar la propuesta.

> Hola, buen día. Estuve viendo el sitio de Althea y me gustó mucho que publiquen sus precios en dólares y pesos. Les aviso de un detalle: en la portada, donde deberían verse sus productos, aparece un mensaje técnico de Odoo ("Your Dynamic Snippet will be displayed here…"), y los tratamientos de la portada no abren nada al tocarlos. Hice una propuesta de rediseño con sus fotos y su menú: el paciente elige de dónde viene y qué tratamientos quiere, y se arma un "pase" que llega a su WhatsApp con todo escrito y el precio desde. ¿Le puedo enseñar cómo quedó? Son cinco minutos.

## Preguntas para la conversación

- ¿Qué parte de sus pacientes viene de fuera (EE. UU., Canadá, Europa) y cuánta vive en la Riviera Maya? ¿El sitio debe abrir en inglés o en español?
- ¿El horario de lunes a viernes 9 a 19 y sábado 9 a 14 está vigente?
- ¿El +52 984 165 3990 también recibe llamadas?
- ¿Los precios "Starting at" en USD y MXN siguen vigentes?
- ¿Tienen el logo en vector y fotos reales del equipo con Sofwave™ y Endolifting?
- ¿Quieren que el pase muestre también sus promociones o paquetes de concierge?
