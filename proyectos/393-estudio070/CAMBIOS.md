# Estudio 070: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://estudio070.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/393-estudio070/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 393-estudio070`) |

## En una línea

Es el mismo estudio con sus textos, fotos, servicios y testimonios; cambia la forma: una sola página donde eliges el servicio y revisas su trabajo como en una hoja de contactos, y el WhatsApp va al número correcto con el mensaje de ese servicio.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| El clon sale en blanco (alto 0): su `index.html` tiene rotas las etiquetas de cierre | Sitio completo, 1 H1, 8 imágenes cargadas y el resto al elegir servicio |
| 1 recurso con 404 | 0 errores, 0 fallidos |
| ~55 fotos sueltas de 360 a 2500 px | 36 copias .webp (2.62 MB → 1.52 MB) con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Las páginas de Bodas, XV años, Marcas, Gastronomía y las galerías se juntan en "La hoja de contactos", un servicio a la vez.
- Los textos de cada servicio se recortaron (su sitio los repite en varias páginas).
- La pregunta "¿En qué formato realizan la entrega de las fotos de mi boda?" (que también aparece en la página de 15 años) pasa a "¿En qué formato entregan las fotos?"; "Todo nuestra cobertura" → "Toda nuestra cobertura", "álbums" → "álbumes".
- WhatsApp con el 52 de México: `wa.me/525529694578` (su sitio usa `phone=5529694578`).
- "Sesiones de fotos profesionales" y "Embarazo y newborn" usan su mensaje "Quiero conocer más sobre sus sesiones de retrato".

## Qué se agregó (no existía en el original)

- **"La hoja de contactos"**: seis servicios, tira de negativo con seis cuadros numerados (070-1A…), círculo de lápiz en el elegido, foto grande "revelada", quién lo hace y WhatsApp. Textos nuestros: el título, "Así revisa un fotógrafo su rollo…", los nombres cortos de pestaña, los textos de "quién lo hace" (armados con frases de su sitio), "Ver la galería completa" y "Los precios no están publicados en su sitio; cada paquete maneja un mínimo de fotos según las horas del evento, y la asesoría es gratuita".
- Títulos y microcopy: "Pedir asesoría por WhatsApp", "Ver su trabajo", "Dos fotógrafos en cada evento", las fichas de Sabina y Cristhian, "Escríbenos para recibir asesoría gratuita y personalizada, o agenda una cita en el estudio sin ningún compromiso".
- Barra fija en el celular, Google Maps de la Colonia Narvarte, JSON-LD `ProfessionalService`, Open Graph y favicon.

## Qué se quitó o no se usó

- La promoción "25% de Descuento en nuestra preventa 2025" (vencida) y "Reserva tu fecha 2025".
- Las menciones de Caracas y Venezuela, los videos de YouTube, el blog, el formulario, la barra de suscripción de WordPress.com y los comentarios.
- Los Instagram @fotopop, @fotografoencdmx y @saborvisual (se deja @estudio070).
- Fotos no usadas: un desnudo artístico de embarazo, el producto de vapeo y las más pequeñas o repetidas.

## Qué se conserva al pie de la letra

- Presentación del estudio, textos de cada servicio (recortados), "Más de 8 años dedicados a la fotografía y artes visuales…", "Dos fotógrafos de boda profesionales, más un equipo de video y drone…", los dos testimonios (Evelys y Alberto 2022; Angélica y Ernesto 2021) y las cuatro preguntas frecuentes.
- Correo estudio070mx@gmail.com, WhatsApp 55 2969 4578, Colonia Narvarte, Instagram @estudio070 y los mensajes prellenados de su sitio.

## Pendiente de confirmar con el cliente

- Si el 55 2969 4578 también recibe llamadas (lo usa el botón "Llamar").
- Dirección del estudio en Narvarte para Google Maps (hoy se enlaza la colonia).
- Si siguen trabajando en Caracas y si quieren mencionarlo.
- Cuál es su Instagram principal y si quieren mostrar los de fotografía gastronómica (@saborvisual) y retrato.
- Promoción vigente para 2026, si la hay; rangos de precio o paquetes que quieran publicar.
- Fotos en mayor resolución (la mayoría del clon son de unos 400×600 px).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
