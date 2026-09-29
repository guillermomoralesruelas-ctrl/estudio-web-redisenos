# Centro Odontológico Especializado de la Costa: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://coec.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/199-centroodontologicoespeci/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 199-centroodontologicoespeci`) |

## En una línea

La misma clínica, sus textos, sus cédulas, su WhatsApp y su mapa, pero en una sola página que sí carga: sin carrusel repetido ni fotos de banco, con sus tres fotos propias y un diente dibujado por capas que dice qué especialidad atiende cada parte y abre WhatsApp con el tratamiento escrito.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| El clon guardó los archivos en `sitio/assets/assets/` pero su HTML pide `assets/…`: sale sin estilos, con las 21 imágenes rotas y 44 a 45 recursos con 404 (es un defecto del clon, no del cliente) | Todo el diseño es nuevo; las 3 fotos propias y el logo se copian a .webp/.png en `assets/web/` con `rediseno/fotos-web.mjs`: 0 imágenes rotas y 0 recursos fallidos |
| Carrusel de portada con los mismos tres mensajes repetidos tres veces | Una sola portada con el H1 y su texto de "Sobre nuestra clínica" |
| Reseñas repetidas dos veces, con avatares de caricatura (uno repetido para dos personas) | Las cuatro reseñas una sola vez, sin avatares |

## Qué se cambió (mismo contenido, otra forma)

- Los nueve servicios, antes tarjetas con foto de banco, ahora salen al tocar una parte del diente (o los botones "Es para un niño", "Los dientes no cierran bien" y "Verlo en 3D").
- El especialista, sus cédulas y la tomografía Cone Beam juntos en una sección, con su foto junto al tomógrafo.
- La lista de "Sobre nuestra clínica" y sus cinco características en una sección.
- Invisalign®: el video pasó de estar incrustado a un enlace a YouTube.

## Qué se agregó (no existía en el original)

- **"Un diente, de la corona al hueso"** (elemento memorable): un molar dibujado en corte con esmalte, pulpa y conductos, encía y hueso con un implante; cada capa enciende las especialidades que la atienden, con su texto y un WhatsApp con el tratamiento escrito ("Hola, quiero una valoración en COEC para endodoncia."). "Verlo en 3D" enciende todo el diente con una línea de escaneo.
- Textos nuestros: el título y la entrada del diente, las etiquetas de cada capa ("Lo que se ve al sonreír", "El nervio, dentro del diente", "Lo que rodea al diente", "Donde se sostiene el diente, o un implante si falta", "Niños y adolescentes", "Posición y mordida", "Todo el diente, el hueso y los nervios"), "Varias especialidades en un mismo lugar y tomografía 3D en la clínica", "Tomografía Cone Beam en la misma clínica", "La tomografía Cone Beam es uno de los servicios de la clínica", la nota de la SEP, la frase "Hacen ortodoncia convencional, Invisalign® y paquetes para ortodoncia." (de su lista de servicios) y los textos de los botones.
- Enlace para consultar las cédulas en el Registro Nacional de Profesionistas de la SEP.
- WhatsApp con mensaje prellenado en cada especialidad, en Invisalign® y en contacto; barra fija en el celular (WhatsApp, Llamar, Cómo llegar).
- JSON-LD de tipo `Dentist` con teléfono, ciudad, Facebook, el especialista y los servicios; Open Graph; `alt` en todas las fotos.

## Qué se quitó o no se usó

- Las tres portadas y las nueve fotos de servicios (de banco) y los avatares de caricatura de las reseñas.
- La captura del video promocional (`appointment-2.jpg`), que trae los controles de YouTube encima.
- "Contamos con todas las normas de higiene ante COVID 19" y el año © 2021.
- El formulario de contacto (`enviaform.php`): el contacto es por WhatsApp, teléfono y su sistema de citas en línea.
- La segunda mitad del texto de la tomografía, que repite el texto de cirugía maxilofacial.
- Las palabras clave con nombres de otros consultorios y el título de 298 caracteres.
- Los videos incrustados de YouTube (quedan como enlaces).

## Qué se conserva al pie de la letra

- Los textos de sus nueve servicios (recortados en prótesis, cirugía maxilofacial y ortodoncia), el de "Sobre nuestra clínica" y sus cinco características.
- C. D. E. E. Mario Cruz Pérez, Ced. Prof. 6452234 y Ced. Esp. 6926390.
- 14 años de experiencia y 8,405+ servicios realizados.
- WhatsApp 954 127 0671, teléfono 954 104 2659, horario 09:00 a 18:00, su sistema de citas (coec.com.mx/citas/coec/), Facebook y su mapa de Google (el mismo `iframe`).
- Las cuatro reseñas en inglés (Melissa SuKasa, Ellen DeAngelis, Blue Horizon Real Estate y Debra Curry); solo se corrigió "performed their" por "performed there".

## Pendiente de confirmar con el cliente

- **Dirección escrita:** el sitio no la publica; solo está su mapa de Google (ficha "COEC Centro Odontológico Especializado de la Costa"). En el rediseño va "Puerto Escondido, Oaxaca", el mapa y el enlace a Maps.
- **Días de atención:** su horario dice "09:00 AM a 18:00 PM" sin días. Por eso el JSON-LD no lleva `openingHours`.
- **Especialidad del doctor:** "C. D. E. E." y la cédula de especialidad no dicen cuál; el bordado de su bata parece decir "Esp. Endodoncia". No se escribió.
- Si los 14 años y los 8,405+ servicios siguen vigentes (el sitio es de 2021).
- Si hay más especialistas en el equipo ("Dentistas certificados", "los mejores especialistas") y sus nombres.
- Fotos de los consultorios, del sillón y del equipo, y del tomógrafo solo; solo hay 3 fotos propias.
- Si su sistema de citas en línea sigue funcionando (la nube no llega a coec.com.mx).

## Dónde está cada cosa

- Textos, especialidades, capas del diente y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y el diente en SVG: `rediseno/src/App.tsx`
- Colores, fuentes y el apagado de las capas: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/assets/images/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
