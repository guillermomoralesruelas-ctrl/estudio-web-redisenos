# Hospital Veterinario Joaquín Buxadé: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.hveterinario.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/508-hospitalveterinariojoaqu/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 508-hospitalveterinariojoaqu`) |

## En una línea

Mismo hospital, mismos servicios, equipo, testimonios, unidades y teléfonos; cambia la forma: en vez de un carrusel y pestañas, un plano del hospital que se recorre sala por sala con sus fotos, y el teléfono de urgencias siempre a la vista.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 41 de 41 imágenes rotas, 59 errores de consola y 57 recursos fallidos (el clon se ve sin estilos) | 0, 0 y 0 |

## Qué se cambió (mismo contenido, otra forma)

- El carrusel (Nueva unidad, Consulta, Hospitalización, Cirugía, Diagnóstico, Rehabilitación), "Servicios" y las pestañas de "Atención y Experiencia" se unen en las fichas de las 7 salas del plano, con sus mismos textos.
- Ortografía corregida en los textos que se usan: "instalaciones", "garantizan", "atención", "Diagnosticamos", "fisioterapéuticas", "está lista", "fue", "compañía", "encontré".
- Los testimonios de Parqui y Tango se recortan (sin cambiar el sentido); se muestran con el nombre de la mascota como título.
- WhatsApp en formato actual (`wa.me/522213611332`); su sitio usa `+521…`.

## Qué se agregó (no existía en el original)

- El elemento **"Pasa, te enseñamos el hospital"** (`Plano`, `Puerta` y la clase `.plano` en `index.css`): plano ilustrativo con muros de línea doble, 7 salas, pasillo y entrada; ficha con foto, textos, equipo y WhatsApp por servicio.
- Botón "Llamar, 24 horas" fijo en el encabezado y barra en el celular (Llamar 24 h, WhatsApp, Cómo llegar); enlaces "Cómo llegar" a Google Maps para cada unidad.
- JSON-LD `VeterinaryCare` por unidad (la de Recta a Cholula con horario 24/7); title y description reales (el original: una lista de palabras clave como título); Open Graph; favicon con las siluetas de su logo.
- Textos nuestros: "Pasa, te enseñamos el hospital" y su explicación, las líneas cortas de cada sala ("Áreas separadas para perros, gatos y exóticos", "Si no puedes traerla, pasan por ella"…), "Pasillo", "Entrada, 24 h", los avisos de plano ilustrativo, "Preguntar por WhatsApp", "Ver el plano", "Consulta general y de especialidad", "Tori, Blacky, Parqui y Tango", "Lo que cuentan sus dueños.", "13 médicos veterinarios, cada uno con uno de sus pacientes.", "Dos unidades en Puebla", "Horario por confirmar", "Estética con recolección y alimento a domicilio" y los mensajes prellenados de WhatsApp.

## Qué se quitó o no se usó

- Las 4 fotos de los testimonios (dos parecen de banco) y la ilustración recortada de perro y gato (`services/dog.png`); las texturas de fondo.
- "Somos líderes en la Ciudad de Puebla" (de su description) y "el mejor equipo": superlativos.
- El retrato `team/07.jpg`, que no tiene nombre en el sitio.
- "Implementado por Netlogics".

## Qué se conserva al pie de la letra

- Direcciones, teléfonos (222) 296 7091 y (222) 290 8808 y WhatsApp 221 361 1332.
- Servicios, especialidades, equipo médico que mencionan (Shor-line, IDEXX, anestesia inhalada…), "más de 25 años", atención 24/7.
- Nombres y cargos (MVZ, MVZ Especialista) de los 13 médicos; nombres de quienes dan los testimonios.

## Pendiente de confirmar con el cliente

- **Horario de la unidad Lomas de Angelópolis** y su dirección completa ("Centro Lomas 6").
- Correo de contacto (el sitio no publica ninguno; en su código hay dos correos comentados de otras unidades) y redes sociales.
- Qué servicios da cada unidad (el plano es ilustrativo y no corresponde a una unidad).
- Si el retrato del consultorio es del Dr. Buxadé (el pie dice "un médico del hospital").

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño, secciones y el plano: `rediseno/src/App.tsx` (la cuadrícula del plano en `rediseno/src/index.css`)
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` las genera en `.webp` desde `sitio/assets/images/` hacia `../assets/web` (el `publicDir` de `rediseno/vite.config.ts`); no se descargó ninguna imagen.
