# Eduardo Dávalos Fotografía: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://eduardodavalosfotografia.com/ (Adobe Portfolio) |
| Método | **1.2 en la nube** (lote 10): el clon trae portadas recortadas e imágenes rotas; se leyeron todas sus páginas (inicio, Nuestro Trabajo, Video de Boda, Colecciones 2026 y 2027, Preguntas Frecuentes, Historias y contacto) y se bajaron a `assets/originales/` 18 fotos de "Nuestro Trabajo" en su versión más grande y su firma |
| Fecha | 2026-10-12 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/348-eduardodavalosfotografia/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El fotógrafo de bodas de Guadalajara en una sola página oscura y cálida como sus fotos nocturnas: su lema, su manifiesto, una galería, sus cuatro colecciones en una regla de horas del día de la boda con precio 2026 o 2027 y video opcional, testimonios, preguntas y WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Portadas recortadas, 8 imágenes rotas y el formulario de Adobe que no funciona fuera de su servidor | Fotos en `.webp` de hasta 2400 px (`rediseno/fotos-web.mjs`) y contacto directo por WhatsApp |

## Qué se cambió (mismo contenido, otra forma)

- Las ocho páginas sueltas del portafolio (cada una detrás de una portada) se juntan en una sola página con menú a cada sección.
- Las dos páginas de paquetes (2026 y 2027, una de ellas con la dirección "copia-de-colecciones…") se vuelven un solo comparador con selector de año.
- El formulario ("Name", "Email / Whatsapp", "Submit") se sustituye por WhatsApp con el mensaje armado; su número es el mismo de su botón de WhatsApp.
- Los precios se escriben sin el espacio que traen en el original ("$36, 900" queda "$36,900").
- Su firma (trazo negro sobre blanco) se convierte en versión blanca y versión en tinta con transparencia.

## Qué se agregó (no existía en el original)

- **"¿Cuántas horas de su día quieren guardar?"** (elemento memorable): las cuatro colecciones como barras sobre una regla de 12 horas, con el precio del año elegido; al tocar una se ve qué incluye y su inversión, con la casilla de video (en Completa cambia al precio de "únicamente fotografía"; en Esencial y Civil suma el costo de añadir video que publica). El total con video es una suma del estudio sobre sus precios.
- Textos del estudio: titulares, introducciones y textos alternativos.
- Barra fija en el celular (colecciones y WhatsApp), JSON-LD `ProfessionalService`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- El aviso de cookies, la página vacía "Contacto" ("Hi, I'm Eduardo Davalos!") y las páginas de video y redes, que solo traen portadas (se enlaza a Instagram y Facebook).
- Emojis de los paquetes.

## Qué se conserva al pie de la letra

- El lema, el manifiesto de "Nuestro Trabajo" y la nota de que la fotografía es el eje y el video un complemento.
- Las cuatro colecciones con horas, equipo, entregas y precios de 2026 y 2027.
- Las siete preguntas frecuentes (la de "¿Los paquetes se pueden modificar?" resumida) y los seis testimonios con sus nombres.
- WhatsApp 33 1354 4439, Instagram y Facebook.

## Pendiente de confirmar con el cliente

- Si quiere un correo o formulario además de WhatsApp.
- Fotos y nombres de su equipo de video.
- Los precios pueden cambiar: son los publicados el 2026-10-12.

## Dónde está cada cosa

- Textos, colecciones, preguntas, testimonios y galería: `rediseno/src/data/content.ts`.
- Fotos: `assets/originales/` y `assets/web/`.
- Capturas: `referencias/capturas-2026-10-12/`.
