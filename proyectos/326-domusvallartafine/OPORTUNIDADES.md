# DOMUS Vallarta Fine Real Estate: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26) y con curl al sitio real el 2026-09-27. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://domusvallarta.com/ |
| Prioridad | MEDIA: el sitio funciona y publica su inventario con precios, pero el WhatsApp de una ficha va a un número equivocado, la portada y Contacto no tienen WhatsApp, la portada carga un video de 16 MB y Google no tiene datos estructurados del negocio |
| Contacto publicado | Bucerías +52 (329) 688 7509; Puerto Vallarta +52 (322) 115 5040; Guadalajara +52 (333) 817 5022 y 817 5025; formulario en /contacto; Instagram @domus_vallarta, Facebook DomusVallartaInmobiliaria, TikTok @domusvallartainmo. WhatsApp solo en las fichas (el del asesor de cada propiedad); sin WhatsApp general ni correo visibles |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **El WhatsApp de una ficha lleva a un número equivocado.** En Playa Royale Torre 4 Unidad #4103 el botón es `wa.me/3227799047`, sin el 52 de México: WhatsApp lo lee como un número de otro país (el 32 es Bélgica) y el chat no llega al asesor. | Quien se interesa en ese departamento y escribe por WhatsApp no llega a nadie, y no sabe que su mensaje se perdió. | `curl` a https://domusvallarta.com/comprar-propiedades/condominios-en-venta/departamento-playa-royale-4103-nuevo-vallarta-en-venta (2026-09-27) |
| 2 | **Ni la portada ni Contacto tienen WhatsApp.** El botón flotante solo está en las fichas (el del asesor de cada propiedad), y 14 de las 114 fichas no lo tienen (Harbor 171 Torre Sur #2008A y Torre Norte 1207, 1304 y 1309; Mar de Plata D3, E3, F3 y G3; Ciyé Casas 5, 13 y 15; Azulejos 307; Maralma 301 y 1002). Su formulario de contacto ofrece "WhatsApp" como forma de respuesta, pero no publica el número. | En bienes raíces de playa buena parte de los compradores escribe primero por WhatsApp. Quien entra por la portada, o a una de esas 14 fichas, tiene que llenar un formulario o llamar a una oficina. | `original.html`: 0 `wa.me` en la portada; `curl` a `/contacto` (solo `<option value="WhatsApp">`) y a las 114 fichas el 2026-09-27 (100 con `wa.me`, 14 sin él) |
| 3 | **La portada reproduce sola un video de 16 MB**, también en el celular, y además carga el mapa de Google, reCAPTCHA, 143 imágenes y cuatro buscadores con 795 opciones de colonias (410 KB solo de HTML). | Con datos móviles la portada tarda en mostrarse y gasta datos del visitante; Google también penaliza las páginas lentas en celular. Es la primera impresión de quien viene de un anuncio o de Instagram. | `original.html`: `<video autoplay muted loop>` con `domus-home-new.mp4`; `curl -I` al video: `Content-Length: 16004654`; `curl` a `/`: 410,082 bytes; 795 `<option>`, 143 `<img>` |
| 4 | **Sin datos estructurados (JSON-LD) y sin `og:image`.** No hay `RealEstateAgent` ni `LocalBusiness` con sus tres oficinas; para compartir solo tiene `og:image:secure_url` (algunas apps piden `og:image`). No hay `canonical` ni `hreflang` aunque tiene versión en inglés (/en). | Google no sabe con certeza que son una inmobiliaria con oficinas en Bucerías, Puerto Vallarta y Guadalajara, y al compartir el enlace puede salir sin imagen. Las versiones en español e inglés pueden competir entre sí en la búsqueda. | `original.html`: 0 `application/ld+json`; `og:` solo url, type, title, description, image:secure_url y locale; sin `rel="canonical"` ni `hreflang` |
| 5 | **Cifras distintas del equipo:** la portada dice "39 asesores en inversiones inmobiliarias" y la página Vender, "más de 30 agentes". Esa misma página tiene "asi preparanos" (sin acento y con una letra de menos). | Detalles menores, pero en una página que pide confianza para vender una propiedad se notan. | `crudo.json` (portada); `curl` a `/vender-propiedades` |

Lo que sí está bien y conviene decirlo: publica su inventario completo con precio, moneda, m², recámaras y baños (114 propiedades), sus preventas con precio "desde", los teléfonos de sus tres oficinas como enlace para llamar, versión en inglés y sus afiliaciones (AMPI, NAR, MLS Vallarta). No se encontró spam, textos de demostración ni enlaces rotos en la portada.

## Qué le ofrecemos

- **Más conversaciones y mejor calificadas por WhatsApp:** cada propiedad abre WhatsApp con su nombre y su precio escritos ("me interesa Maralma 301… publicada en $7,205,000 MXN"), y el asesor sabe desde el primer mensaje de qué se trata.
- **Su inventario convertido en respuesta:** "¿Dónde de la bahía te alcanza?" pone sus 114 propiedades por pueblo, de La Cruz de Huanacaxtle a Puerto Vallarta, contra el presupuesto del visitante, en pesos o en dólares.
- **Una portada ligera en el celular:** sin video de 16 MB ni buscadores de cientos de colonias, con barra fija para escribir, llamar o llegar.
- **Que Google los entienda:** JSON-LD de inmobiliaria con sus tres oficinas e imagen para compartir.
- Vender y Contacto en la misma página, con el texto y las fortalezas que ya tienen.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar. Menciona **un** hallazgo concreto y ofrece enseñar la propuesta.

> Hola, buen día. Estuve viendo el sitio de Domus Vallarta y me gustó que publican todo su inventario con precios. Les aviso de un detalle: en la ficha de Playa Royale Torre 4 #4103 el botón de WhatsApp tiene el número sin el 52, así que los mensajes no le llegan al asesor. Además, la portada no tiene WhatsApp. Hice una propuesta de rediseño con sus propias propiedades: el visitante elige su presupuesto, ve en qué pueblos de la bahía le alcanza y escribe por WhatsApp con la propiedad y el precio ya en el mensaje. ¿Le puedo enseñar cómo quedó? Son cinco minutos.

## Preguntas para la conversación

- ¿Tienen un WhatsApp de ventas general? ¿O prefieren que cada propiedad siga yendo al WhatsApp de su asesor, como en sus fichas?
- ¿Cuál es su oficina principal para "Cómo llegar": Bucerías, Puerto Vallarta o Guadalajara?
- ¿El inventario se puede leer de su sistema para que los precios del sitio nuevo se actualicen solos?
- ¿Quieren que entren también el inventario MLS, Fraccional y Comercial?
- ¿Cuántos asesores tienen hoy: 39 o "más de 30"?
- ¿Les sirve el video de portada, o prefieren una foto y el video en otra sección?
