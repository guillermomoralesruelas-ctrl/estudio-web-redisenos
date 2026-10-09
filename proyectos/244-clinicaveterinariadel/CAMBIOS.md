# Clínica Veterinaria del Dr. Memo: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.drmemoveterinario.com.mx/ |
| Método | **1.2 en la nube**: el clon no traía fotos; se bajaron del sitio en vivo a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/244-clinicaveterinariadel/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La misma clínica, con sus fotos, textos, médicos y contacto, en una sola página con "La agenda del Dr. Memo" (su horario partido, abierto o cerrado ahora y cita por WhatsApp con día, hora, mascota y motivo).

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Sin fotos (Duda las carga de su CDN): 7 imágenes rotas | 12 fotos reales bajadas del sitio a `assets/originales/`, servidas como .webp; 0 rotas |
| 378 px de desborde en el celular | 0 desborde |
| 13 errores de consola y 6 recursos fallidos (scripts de Duda, Snipcart, Sección Amarilla) | 0 errores, sin scripts de terceros |

## Qué se cambió (mismo contenido, otra forma)

- Las tres páginas quedan en una.
- El horario, que en su sitio aparece en un párrafo y en el pie, ahora es una agenda interactiva.
- Su texto largo de servicios se repartió en tarjetas (consulta, preventiva, cirugía, estudios, viajes, cremación) y una sección de estética con sus cinco puntos.
- Las fotos de la tienda van juntas con su texto de productos; las galerías con pies repetidos se quitaron.

## Qué se agregó (no existía en el original)

- **"La agenda del Dr. Memo"** (elemento memorable): estado "abierto/cerrado ahora" con la hora de Querétaro, siete días a partir de hoy, horas del día elegido con el hueco de 3 a 5, perro o gato, motivo y WhatsApp prellenado.
- Textos del estudio: "Perros y gatos · Centro de Querétaro", el subtítulo del hero, los títulos "La agenda del Dr. Memo", "Lo que hacemos por tu mascota", "La clínica y su tienda", los nombres cortos de los motivos, las etiquetas de la agenda ("2 turnos", "Hasta 3 pm", "cerrado de 3 a 5"), los mensajes de WhatsApp y las descripciones cortas de cada servicio (resumen de su texto).
- Barra fija en el celular (WhatsApp, llamar a citas, cómo llegar), JSON-LD `VeterinaryCare` con horario y coordenadas, title, description e imagen para compartir.

## Qué se quitó o no se usó

- La foto de banco del perro salchicha (`076-1920w.jpg`).
- Formularios de contacto de Duda, mapa con scripts, botón de "retorno de llamada" de Sección Amarilla y botones "Button" vacíos de las galerías.
- El título "Dermatología en caninos y felinos" de la página de servicios: no aparece en su lista de servicios.

## Qué se conserva al pie de la letra

- Nombre, frase "¡Nuestra veterinaria está al servicio de tu mascota!", lema "¡Cuidar a tu mascota es un compromiso, pero hacerlo feliz es un placer!" y "15 años de experiencia nos avalan".
- Teléfono 442 224 3800, citas y WhatsApp 442 172 1841, correo, dirección y coordenadas.
- Horario del texto del inicio; lista de servicios; puntos de estética; médicos con cédula (Guillermo Espíndola Martínez 5291765, Alma del Carmen Luna Reséndiz 5291769, UAQ); formas de pago.

## Pendiente de confirmar con el cliente

- **Horario:** su inicio dice martes a sábado de 10 am a 3 pm y de 5 pm a 8 pm, pero el pie dice "Mar - Sáb 10:00 - 20:00" corrido. El rediseño usa el del texto (con el corte de 3 a 5).
- Qué requisitos pide para viajar con mascota (el sitio no los lista).
- Fotos en mayor tamaño: las de su sitio miden 800 px.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Fotos: originales en `assets/originales/`, copias .webp en `assets/web/` (`rediseno/fotos-web.mjs`)
