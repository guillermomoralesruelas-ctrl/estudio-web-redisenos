# Escuela de Fotografía: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.escueladefotografia.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima. Empezado en la nube y terminado en la PC. |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/384-escueladefotografia/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-27/` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 384-escueladefotografia`) |

## En una línea

Mismos cursos, profesor, cifras, reglamento y contacto; en vez de una página de 25,000 px con 206 fotos sueltas y todos los botones a Messenger, una página corta con un visor "¿Qué cámara tienes?" que enseña fotos de alumnos tomadas con tu misma cámara y termina en WhatsApp con la cámara ya escrita.

## Qué estaba roto o incompleto en el clon

Sacado de `qa/reporte-rediseno.json` → `antes` y de revisar el clon a ojo.

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 18 imágenes rotas en escritorio y 10 en el celular (logo, portada, retrato del profesor, anuncios de cursos, íconos), con rutas mal armadas (`https://www.escueladefotografia.com.mxassets/...`) | 0 imágenes rotas. Las fotos que se usan son copias .webp del clon en `assets/web/` |
| Errores de consola `ERR_NAME_NOT_RESOLVED` por esas rutas | 0 errores de consola y 0 recursos fallidos |
| 10 etiquetas H1 | 1 H1: "Cursos de fotografía para principiantes" |
| 206 imágenes sin `alt` | Todas las imágenes llevan `alt` descriptivo (las miniaturas del visor llevan `alt=""` porque el botón ya tiene su etiqueta) |
| Página de 25,202 px en escritorio y 22,152 px en el celular | 5,366 px en escritorio y 8,568 px en el celular |
| Videos de Wistia, comentarios de Facebook y aviso de cookies que no cargan en el clon | No se usan (ver "Qué se quitó") |

## Qué se cambió (mismo contenido, otra forma)

- **Galería de 206 fotos → visor "¿Qué cámara tienes?"** con 58 fotos de alumnos agrupadas por las 10 cámaras con más fotos (Canon Rebel T3i, Rebel T3 y EOS 70D; Nikon D3100, D5100, D700, D90, D3200 y D3300; Sony SLT-A37).
- **"Solicita información" a Messenger → "Pedir informes" a WhatsApp** en cada curso, con el nombre del curso y la modalidad en el mensaje. Messenger sigue en la sección de contacto.
- Las fichas de curso repetidas ("MODALIDAD: ONLINE (Profesor en Vivo)" once veces) → dos listas, online y presencial.
- Paleta: el rojo de su logotipo (`#9a0103`) sobre negro de cuarto oscuro y papel cálido. Tipografía: Barlow Condensed, Barlow e IBM Plex Mono.
- El reglamento completo (18 puntos en mayúsculas en otra página) → un resumen de 5 puntos en "Antes de inscribirte", con enlace al reglamento completo.
- El blog → las seis entradas más recientes como lista con enlace a cada artículo.
- Title con acentos y meta description nueva.

## Qué se agregó (no existía en el original)

- **El visor "¿Qué cámara tienes?"** (elemento memorable). La cámara, el lente, la velocidad, el diafragma, el ISO, los milímetros, el año y el autor de cada foto se leyeron del EXIF de los mismos archivos del clon (`src/data/portafolio.json`). Las 5 fotos con "Picasa" como autor no se usan.
- Textos redactados por nosotros: "¿Qué cámara tienes?" y su párrafo; "El número es cuántas fotos de su portafolio se tomaron con esa cámara…"; "Todavía no tengo cámara"; "Tengo una [modelo]: quiero informes"; "El mensaje ya lleva tu cámara escrita"; "Online con profesor en vivo, o presencial"; "Aprende fotografía desde donde estés"; la nota de ciudades de los presenciales; "Primero pide informes y aclara tus dudas…"; "Antes de inscribirte" y el resumen del reglamento; "Guías y consejos de Luis Susunaga en su fotoblog"; los textos alternativos de las fotos; los botones "Informes", "Pedir informes", "Llamar" y "Cómo llegar".
- Mensajes prellenados de WhatsApp (general, por curso y por cámara).
- Enlaces `tel:` para los dos teléfonos (el original los muestra sin enlace).
- Domicilio y enlace a Google Maps (el domicilio solo aparece en su aviso de privacidad).
- La lista de unidades presenciales (Aguascalientes, Durango, Saltillo y Torreón), tomada de las opciones de su formulario de inscripción.
- Barra fija en el celular: WhatsApp, Llamar y Cómo llegar.
- JSON-LD `EducationalOrganization`, Open Graph y favicon (la "coma" de su logo).
- `prefers-reduced-motion`: la única animación, el "revelado" de la foto en el visor, se apaga.

## Qué se quitó o no se usó

- La galería completa de 206 fotos y sus 206 miniaturas de 400×284.
- Los anuncios de cursos de 2023 (imágenes con fotos de banco) y el banner del diplomado 2021.
- Los videos de Wistia, la caja de comentarios de Facebook, el calendario de eventos, el aviso de cookies y la ventana del libro electrónico gratis.
- Las estrellas y los íconos de certificado y WhatsApp en imagen (el de WhatsApp es un SVG).
- El formulario de inscripción: el rediseño enlaza al suyo (`/inscripciones/`), que es el que llega a la escuela.

## Qué se conserva al pie de la letra

- "Enseñando Fotografía Profesional desde 2008", "Cursos de Fotografía para Principiantes" y el texto de bienvenida ("¿Siempre te ha gustado la fotografía?…").
- Las cifras: 1,167 alumnos egresados y 98% de calificaciones positivas.
- Los nombres de los 8 cursos online y los 3 presenciales; "Profesor en Vivo"; "disponible solo en algunas ciudades".
- La biografía de Luis Susunaga y www.susunaga.mx.
- "Obtén un diploma avalado por la Escuela de Fotografía y Artes Visuales Susunaga".
- Los datos del reglamento vigente desde el 1 de enero de 2026: pago del 14 al 15, recargo de $50 por día, 88% de asistencia, 15 minutos de tolerancia, clase privada de $150, tarjeta SD, bajas con 30 días y saldo en ceros.
- Contacto: (800) 849 3278, (871) 228 7501, WhatsApp 871 183 6568, info@escueladefotografia.mx, Messenger `m.me/diplomadosfotografia`, Facebook, Instagram, YouTube y X.
- Domicilio del aviso de privacidad: Calle Manuel Gómez Morín 260, col. Torreón Residencial, Torreón, Coahuila, C.P. 27268.
- Los enlaces a inscripciones, reglamento, pagos en línea, material de diplomados y acceso de alumnos.
- "¿Necesitas información de nuestros cursos?" y "trataremos de contestar lo más rápido posible".

## Pendiente de confirmar con el cliente

- **Ciudad.** La base de chatbots la tenía como Ciudad de México, pero el sitio no menciona la CDMX; el domicilio del aviso de privacidad es de Torreón y el formulario lista Aguascalientes, Durango, Saltillo y Torreón. ¿Dónde se toman los presenciales y cuál es el domicilio de cada unidad?
- Si el domicilio de Torreón es el de la escuela (el de "Cómo llegar") o solo el del responsable de los datos.
- Precios, fechas de inicio y horarios. El sitio no los publica; solo el formulario menciona "Diplomado certificado (7 meses), sábados".
- La biografía dice "+15 años de experiencia" y la escuela enseña desde 2008. ¿Se actualiza la cifra?
- Si las cifras 1,167 egresados y 98% siguen vigentes.
- Permiso de los alumnos cuyas fotos y nombres aparecen en el visor (ya están publicadas en su portafolio).
- Si prefieren recibir los informes por WhatsApp (871 183 6568) o por Messenger.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`; EXIF del portafolio: `rediseno/src/data/portafolio.json`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/`, generadas desde el clon (`sitio/assets/wp-content/uploads/`) con `node fotos-web.mjs` en `rediseno/`. `assets/web/` es el `publicDir`; no se sube al commit del rediseño y se regenera con ese script antes de `npm run build`.

## QA final

| Vista | Alto | H1 | Imágenes | Rotas | Errores | Fallidos | Desborde |
|---|---|---|---|---|---|---|---|
| Escritorio (1280 px) | 5,366 px | 1 | 10 | 0 | 0 | 0 | 0 |
| Móvil (390 px) | 8,568 px | 1 | 10 | 0 | 0 | 0 | 0 |
