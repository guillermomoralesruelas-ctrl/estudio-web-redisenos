# Erick Oseguera Fotografía: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://erickoseguera.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/378-erickoseguerafotografia/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 378-erickoseguerafotografia`) |

## En una línea

Es el mismo fotógrafo, con sus fotos, su estilo, sus precios, sus ciudades y su contacto. Cambia la forma: una sola página en español y, con "Cada historia empieza con un saludo", cada pareja le escribe una carta con su fecha, su ciudad y cómo se conocieron, que sale por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 27 imágenes rotas en escritorio y 21 en celular; 2 recursos fallidos | 0 imágenes rotas, 0 errores, 0 recursos fallidos, 0 desbordes, 1 H1; 7,209 px en escritorio y 9,685 px en celular |
| Sección "Testimonios" sin ningún testimonio | Se quitó; no se inventaron testimonios |
| 56 scripts, Google Tag Manager y píxel de Facebook | Sin scripts de terceros; 14 fotos .webp (1.15 MB, antes 3.3 MB) con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Precios de su portada: bodas desde $26,000 (tres paquetes de fotografía y video, de 5 a 10 horas, dos fotógrafos, Save the Date incluida); Love Session y Save the Date desde $5,000.
- "Sobre mí" resume su texto en tercera persona. Se quitaron "25 años" y los "7 años" porque caducan; se dejan los hechos: empezó a los 17 años y documenta bodas desde 2016.
- La galería usa nueve de sus fotos sin rotular pareja ni lugar; los nombres de sus historias van en una lista con enlace a su portafolio.
- "Weedings" y "CONTÁCTO" no se usan; los textos en inglés se quedan solo en su lema y en "Based in San Miguel de Allende · capturing stories all over Mexico".

## Qué se agregó (no existía en el original)

- **"Cada historia empieza con un saludo"**: nombres, servicio, ciudad (las cinco que nombra su sitio u otro destino), fecha y cómo se conocieron. Se arma una carta a máquina con el matasellos de la ciudad y su hoja, y se envía por WhatsApp o por correo tal como se ve. Sin datos de ejemplo: los nombres vacíos aparecen como rayas.
- Textos nuestros: la bajada de la portada (resume la suya), los títulos de sección, "Un narrador de historias con cámara", la explicación de la carta, los botones, los mensajes de WhatsApp y los textos alternativos de las fotos.
- Barra fija en el celular: WhatsApp, Llamar y Escribirle.
- JSON-LD `ProfessionalService` con su teléfono, correo, ciudades, redes y precios desde.
- **Sin mapa:** su sitio solo dice "con base en San Miguel de Allende", sin dirección ni mapa, así que no hay iframe ni enlace a Google Maps.

## Qué se quitó o no se usó

- Testimonios (vacíos), "My journey" (Enero 2024, Cancún), el chat de Joinchat, el píxel y el formulario.
- El logo completo (se usa su hoja y el nombre con letra), el sello de Junebug (se menciona en texto) y la historia "Melanie's Birthday" de la lista (no es boda ni sesión de pareja).

## Qué se conserva al pie de la letra

- WhatsApp y teléfono 415 138 0544 (el número del chat de su sitio, 521 415 138 0544); hola@erickoseguera.com; Instagram @erickoseguera_storyteller y Facebook ErickOsegueraWP.
- Su H1 "Fotógrafo de bodas en México", su lema "Human. Friend. Buddhist. Disruptive.", la cita de García Márquez y "Cada viaje comienza con un saludo" (como "Cada historia empieza con un saludo").
- Sus ciudades: San Miguel de Allende, Guadalajara, Querétaro, León y CDMX; disponibles en todo el país.

## Pendiente de confirmar con el cliente

- Qué incluye cada uno de los tres paquetes de boda y sus precios (su sitio solo dice "desde $26,000").
- Qué número usar: su página de contacto también enlaza el 461 239 4778.
- Testimonios reales de parejas (con su permiso) para volver a poner esa sección.
- Si la foto del hombre con sombrero en el pastizal es un retrato suyo (se dejó en la galería sin decir quién es).
- Si sigue vigente el sello de Junebug Weddings (su sitio muestra el de 2024).

## Dónde está cada cosa

- Textos, precios, ciudades y galería: `rediseno/src/data/content.ts`
- Diseño, secciones y la carta: `rediseno/src/App.tsx`
- Colores, fuentes, la carta de correo aéreo y el matasellos: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
