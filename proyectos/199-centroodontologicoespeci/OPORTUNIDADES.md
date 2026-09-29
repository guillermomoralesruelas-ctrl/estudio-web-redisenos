# COEC Centro Odontológico Especializado de la Costa: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` e `investigacion/crudo.json` (captura del 2026-09-26). La red de la nube no llega a coec.com.mx (403 del proxy), así que **no se pudo comprobar en vivo**. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://coec.com.mx/ . Clínica dental con varias especialidades y tomografía Cone Beam en Puerto Escondido, Oaxaca |
| Prioridad | **MEDIA**: tiene WhatsApp, teléfono y citas en línea, pero no escribe su dirección ni sus días, su sitio se quedó en 2021 (COVID, © 2021) y sus palabras clave llevan nombres de otros consultorios |
| Contacto publicado | WhatsApp 954 127 0671; tel. 954 104 2659; citas en línea en coec.com.mx/citas/coec/; Facebook /coeccentroodontologico; mapa de Google con su ficha |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-29/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Cada uno con **qué pasa**, **qué le cuesta al negocio** y **dónde se ve**.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | La dirección no está escrita en ninguna parte; solo hay un mapa incrustado. El horario dice "09:00 AM a 18:00 PM" sin decir qué días | Quien llega de fuera (todas sus reseñas están en inglés) no puede copiar la dirección ni saber si abren el sábado; llama o escribe para preguntar | `original.html` (barra superior y contacto) |
| 2 | Sus palabras clave (`meta keywords`) incluyen nombres de otros consultorios y dentistas ("dental group valencia", "consultorio dental sonrisa y salud", "ziloy odontologia integral", "dra olga livia cortez loaeza", "costa dental mx") y su título mide 298 caracteres ("Los 20 Dentistas - Odontólogos más recomendados…") | Google no usa esas palabras clave y recorta el título; cualquiera que vea el código ve los nombres de la competencia | `original.html`, `<head>` |
| 3 | El sitio se quedó en 2021: "Contamos con todas las normas de higiene ante COVID 19" y "Marca Registrada © 2021" | Da la impresión de que nadie lo actualiza, y los 14 años de experiencia ya podrían ser más | `original.html` y `crudo.json` |
| 4 | Sin datos estructurados (JSON-LD) ni Open Graph | Google no lo reconoce como dentista en Puerto Escondido y al compartir el enlace por WhatsApp no sale foto ni descripción | `original.html` (0 bloques `ld+json`, 0 `og:`) |
| 5 | Casi todas las fotos son de banco (modelos sonriendo); solo hay tres fotos reales de la clínica y una del doctor | Un paciente que compara clínicas no ve sus consultorios ni su tomógrafo, que es lo que los distingue | `original.html` y `sitio/assets/` |
| 6 | Las reseñas se repiten dos veces con avatares de caricatura (el mismo para dos personas) y una la firma una inmobiliaria ("Blue Horizon Real Estate") | Restan credibilidad a opiniones que sí son buenas | `crudo.json`, sección "Pacientes felices" |
| 7 | El botón flotante de WhatsApp carga su imagen de otro sitio y por `http://` (societymonkey.com.mx) | Si ese sitio cae o el navegador bloquea la imagen por no ser segura, el botón desaparece | `original.html` |
| 8 | Detalles de texto: el servicio de tomografía repite el párrafo de cirugía maxilofacial, "Invisaling®" y "Odontólogico" | Pequeños descuidos en una clínica que presume precisión | `crudo.json` |

Lo que sí funciona: WhatsApp directo, teléfono que se toca para llamar, un sistema de citas en línea y las cédulas del doctor a la vista.

## Qué le ofrecemos

- Una página que se ve como su clínica real (su sala, su doctor y su tomógrafo), sin fotos de banco.
- Un diente dibujado por capas que explica sus especialidades y abre WhatsApp con el tratamiento ya escrito: menos mensajes de "¿ustedes hacen…?".
- Dirección, días y horario claros, y los datos que Google usa para mostrar un dentista en Puerto Escondido.
- Cédulas visibles con enlace para verificarlas en la SEP.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar. Menciona **un** hallazgo concreto y ofrece enseñar la propuesta.

> Hola, buen día. Estuve viendo la página de COEC y me gustó que tengan varias especialidades y tomografía 3D en la misma clínica. Noté que la dirección no aparece escrita (solo el mapa), que el horario no dice qué días atienden y que el sitio todavía habla de COVID y de 2021. Me dedico a rediseñar sitios y preparé una propuesta con sus fotos, donde el paciente toca la parte del diente que le preocupa y le escribe por WhatsApp con el tratamiento ya indicado. Si les interesa, con gusto se la enseño, sin compromiso.

## Preguntas para la conversación

- Dirección escrita y días de atención.
- Especialidad del Dr. Mario Cruz Pérez y nombres de los demás especialistas.
- Si los 14 años y los 8,405+ servicios siguen vigentes.
- Si su sistema de citas en línea funciona y si prefieren citas por ahí o por WhatsApp.
- Fotos de los consultorios, del tomógrafo y del equipo.
- Si quieren una versión en inglés para sus pacientes extranjeros.
