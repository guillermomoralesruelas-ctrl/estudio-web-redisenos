# 1MR Fitness: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.1mrfitness.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/02-1mrfitness/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 02-1mrfitness`) |

## En una línea

Es el mismo gimnasio con los mismos datos. Ahora los precios, las clases y la promoción están en una sola página, en lugar de repartidos en subpáginas, y el "abierto 24/7" se ve con un reloj en vivo.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 10 logos de formas de pago (`assets/assets/pay/*.svg`) no se descargaron: imágenes rotas | Las formas de pago se muestran como texto en el pie |
| La hoja de Google Fonts no se descargó (404) | Las fuentes Orbitron y Work Sans van dentro del proyecto (@fontsource), sin depender de Google |
| Solo se clonó el inicio: faltan las imágenes de las subpáginas de clases y servicios | Las clases se presentan como lista tipográfica y no se inventaron fotos |

## Qué se cambió (mismo contenido, otra forma)

- **Estructura:** el original reparte la información en subpáginas (servicios, membresías, promoción, instalaciones, contacto). El rediseño es **una sola página** con todo.
- **Membresías:** los 9 planes con sus precios exactos. Citizen ($999) va destacada porque el original la marca como "Más popular". El resto va en una lista agrupada (Individuales / Para tu caso) en lugar de 9 tarjetas iguales.
- **Hero:** la foto del atleta se muestra en escala de grises con un velo morado, para que el texto se lea y combine con la marca.
- **Colores:** los de la marca (morado `#4c2c8d`, lima `#c4d73d`), más un lavanda claro para las secciones de respiro.

## Qué se agregó (no existía en el original)

- **Reloj en vivo** con la hora de Hermosillo (`America/Hermosillo`) y el texto "Estamos abiertos". Es el elemento distintivo del diseño.
- **Un mensaje de WhatsApp listo por membresía**, por ejemplo "Me interesa la membresía Citizen". El original usaba el mismo enlace para todas.
- **Barra fija en el celular** con Inscribirme y Llamar.
- **Datos estructurados** JSON-LD `ExerciseGym` (horario 24/7, dirección, rango de precios) y etiquetas Open Graph.

## Qué se quitó o no se usó

- Los íconos de formas de pago (estaban rotos, ver arriba).
- La navegación a subpáginas: los enlaces del menú llevan a secciones de la misma página.

## Qué se conserva al pie de la letra

- **Precios y nombres de membresías:** Weekend $599, 55+ $799, Five+ $899 por 60 días, Citizen $999, One Pass $1,299, One $1,499, Fitness $1,699, Plus $1,999 y Duo $2,499.
- **Clases y días** tal como están publicados. "Lunes - Miércoles" no se convirtió en tabla porque el original no aclara si es un rango o dos días.
- **Teléfono, WhatsApp, correo, dirección y redes sociales.**
- **Textos de la promoción del viaje** (Citizen) y de los servicios (In Body, plan de alimentación, Energy Bar, café gratis).

## Pendiente de confirmar con el cliente

- Días exactos de cada clase (rango o días sueltos).
- Fechas y destino del sorteo del viaje: el original dice "próximamente".

## Dónde está cada cosa

- Textos, precios y contacto: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx` (el componente `Reloj` es el elemento distintivo)
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: se leen del clon en `sitio/assets/assets/` (`publicDir` en `rediseno/vite.config.ts`)
