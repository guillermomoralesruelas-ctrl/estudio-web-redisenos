# Academia Musical Rubinstein: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.academiamusicalrubinstein.com/ |
| Método | **1.2 en la nube**: el clon solo traía un banner; las 6 fotos de la galería se bajaron del sitio en vivo a `assets/originales/` |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/13-academiamusicalrubinstei/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 13-academiamusicalrubinstei`) |

## En una línea

La misma escuela de música de Polanco, con sus seis maestros, sus clases y sus cuotas, en una página para celular donde el alumno toca en un teclado el instrumento que quiere y ve quién lo enseña y cuánto sería su primer mes.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Página de iWeb de ancho fijo (`viewport width=1000`, contenido de 980 px) y galería armada con JavaScript de iWeb (ver `qa/reporte-rediseno.json` → `antes`) | Página nueva que se adapta al celular, sin scripts de terceros: 0 desbordes, 0 imágenes rotas, 0 recursos fallidos |
| El clon solo bajó el banner del piano | Se usan las 6 fotos reales de su galería |
| Las fotos de los maestros son tarjetas con texto dentro de la imagen | Se recortó la foto; nombre y clases van en texto |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, contacto y galería en una sola página.
- La lista de maestros y la de clases se cruzaron: cada clase dice quién la imparte.
- Las cuotas se muestran como modalidades para elegir.

## Qué se agregó (no existía en el original)

- **"¿Qué quieres tocar?"** (elemento memorable): un teclado de piano con diez teclas (piano, teclado, guitarra, bajo, batería, canto, violín, composición, iniciación musical, ukulele). La tecla elegida se hunde y aparecen los maestros que la dan según su sitio, con el costo del primer mes (cuota más inscripción) en la modalidad elegida. El WhatsApp lleva la clase y la modalidad.
- Textos nuestros: el H1 y su entrada, las explicaciones del teclado y de las modalidades, "Clásica, rock, jazz y lo que quieras tocar" y los botones.
- WhatsApp que se puede tocar (en su sitio es solo texto), barra fija en el celular, enlace a Google Maps, JSON-LD `MusicSchool` y Open Graph.

## Qué se quitó o no se usó

- El banner del piano (es una imagen genérica) y el logotipo en imagen.
- "¡¡PROMOCIONES!!" (en su sitio es un título sin contenido).
- Ukulele, armonía y solfeo no tienen maestro en su lista: en la tecla de ukulele se pide preguntarlo; solfeo va como parte de todas las clases.

## Qué se conserva al pie de la letra

- Más de 35 años en Polanco; clases personalizadas para cualquier edad y nivel; todas incluyen solfeo, técnica y repertorio.
- Maestros: Araceli Juárez (canto, piano), Neftalí Montaño (guitarra, bajo, batería, piano, teclado), Humberto Mata (batería), Moisés Roque (canto, piano, batería, bajo), Karla Santiago (canto, violín, piano, iniciación musical), Víctor Amaro (guitarra, composición).
- Cuotas: una hora a la semana $1,800 al mes con inscripción anual de $1,600 (gratis en línea); media hora $950 con inscripción de $750; a domicilio en Polanco $2,500.
- Géneros y servicios (recitales, cursos especiales y de verano, ingreso a conservatorio, audiciones).
- Horario lunes a viernes de 11:00 a 21:00; Moliere 340 B, interior 103, Polanco; tel. 55 5280 0507; WhatsApp 55 4832 4630; info@academiamusicalrubinstein.com.

## Pendiente de confirmar con el cliente

- Si la clase a domicilio tiene inscripción.
- Si la clase en línea cuesta lo mismo que la de una hora ($1,800); su sitio solo dice que no tiene inscripción.
- Quién da ukulele, armonía y solfeo.
- Fotos de Neftalí Montaño, Humberto Mata y Víctor Amaro.

## Dónde está cada cosa

- Maestros, clases, cuotas y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y el teclado: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: originales en `assets/originales/` y copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` (`publicDir` en `rediseno/vite.config.ts`)
