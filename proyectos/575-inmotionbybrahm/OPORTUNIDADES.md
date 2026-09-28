# InMotion by Brahmā: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html`, `investigacion/crudo.json` y con curl al sitio real (2026-09-27). Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://inmotionbybrahma.com/ |
| Prioridad | **MEDIA**: el sitio funciona y vende en línea, pero no hay WhatsApp ni un teléfono que se pueda tocar, y Google casi no sabe qué es ni dónde está. |
| Contacto publicado | Tel. +52 618 273 92 38 (solo texto), brahmastudio11@gmail.com, IG @brahmastudio_, @inmotionby_paula, @fisio.itzelcorral, FB y TikTok @brahma.studio. Sin WhatsApp |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **No hay WhatsApp en ninguna página** y el teléfono +52 618 273 92 38 es texto sin enlace `tel:`: en el celular no se puede tocar para llamar. El contacto es un formulario. | Quien quiere preguntar por su primera clase o un horario tiene que copiar el número a mano o esperar respuesta a un formulario; muchos se van a Instagram o no escriben. | Pie de todas las páginas y `/contacto` (`original.html`, curl) |
| 2 | **Su página de reservas mostraba clases solo lunes, martes y miércoles**: jueves 1, viernes 2, sábado 3 de octubre y domingo decían "No hay clases programadas para este día". | Si es porque todavía no cargan esos días, quien entra a planear su semana cree que no hay clases de jueves a domingo. | https://inmotionbybrahma.com/reservar (curl, 2026-09-27) |
| 3 | **Sin datos de negocio para Google** (no hay JSON-LD), la imagen para compartir es el favicon (`og:image` = `/favicon.png`) y no hay mapa del sitio (`/sitemap.xml` da 404). | Al compartir el sitio por WhatsApp sale un cuadrito en vez de una foto; Google no ve dirección, teléfono ni que es un estudio de yoga en San Luis Potosí. | `original.html` y curl a `/sitemap.xml` |
| 4 | **Varios H1 por página**: 3 en el inicio ("nuestras CLASES", "PAQUETES ONLINE", "PAQUETES EN STUDIO") y 11 en Coaches. Las fotos se llaman "s1", "s2", "s3" e "imagen" para Google. | Google no sabe cuál es el tema principal de cada página y sus fotos no aparecen en búsquedas de imágenes. | `original.html`, curl a `/coaches` |
| 5 | **Gaby Ove aparece en Coaches sin información** ("Estudios: . .") y sin texto. | Se ve incompleto justo en la página que da confianza sobre quién enseña. | https://inmotionbybrahma.com/coaches |
| 6 | **Las clases presenciales y en línea son dos páginas casi iguales** con diez nombres parecidos (Vinyasa Flow, Power Vinyasa, Vinyasa Suave, Rocket Yoga…) y nada que ayude a elegir, aunque su propio texto dice que la clase se escoge según la energía y el momento del día. | Quien empieza no sabe cuál tomar y pregunta, o no reserva. | `/clases` y `/clases-en-linea` (`crudo.json`) |
| 7 | La página Corporativo usa cifras sin fuente ("75% de los colaboradores reporta altos niveles de estrés crónico", "3x más rotación"). | A un área de recursos humanos una cifra sin fuente le resta credibilidad a la propuesta. | https://inmotionbybrahma.com/corporativo |

Lo que está bien: fotos propias muy cuidadas (sesión en blanco y negro), precios claros, compra de paquetes y reservas en línea funcionando, y 14 días de prueba en línea.

## Qué le ofrecemos

- **WhatsApp y llamada a un toque** desde cualquier parte de la página y desde una barra fija en el celular, con el mensaje ya escrito ("quiero tomar una clase de Vinyasa Flow en el studio").
- **"¿Con qué energía llegas hoy?"**: sus diez clases en un tapete, de la más suave a la más intensa; la persona elige y le sale su clase con foto, descripción y el botón para reservar o registrarse. Es su propia filosofía convertida en herramienta.
- **Todo en una página**: clases, paquetes con precio por clase, coaches, testimonios, empresa y ubicación con Google Maps.
- **Mejor presencia en Google**: un solo H1, datos de estudio con dirección y teléfono, imagen para compartir y fotos descritas.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar. Menciona **un** hallazgo concreto y ofrece enseñar la propuesta.

> Hola, soy Guillermo. Vi el sitio de brahmā studio y me encantaron sus fotos y cómo explican cada clase. Noté que no hay un WhatsApp y que el teléfono no se puede tocar desde el celular, así que quien quiere preguntar por su primera clase tiene que copiarlo a mano. Preparé una propuesta de cómo podría verse su página, con sus mismas fotos y textos, donde la persona elige su clase según la energía con la que llega y les escribe por WhatsApp con un toque. ¿Les puedo mandar el enlace para que la vean?

## Preguntas para la conversación

- ¿El +52 618 273 92 38 tiene WhatsApp y es el número del estudio? (la lada 618 es de Durango)
- ¿El orden de las clases de suave a intensa les parece correcto?
- ¿Barre y Mindfulness son solo en línea?
- ¿Por qué la página de reservas solo mostraba lunes a miércoles? ¿Hay clases de jueves a domingo?
- ¿Tienen fotos de las coaches, del studio por dentro y de las clases de Barre y Mindfulness?
- ¿Falta la información de Gaby Ove en Coaches?
- ¿Tienen una fuente para las cifras de la página Corporativo?
