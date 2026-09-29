# AMATE Studio: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://arqacasillas.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/39-amatestudio/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 39-amatestudio`) |

## En una línea

El mismo despacho de arquitectura, interiorismo y construcción de Puerto Vallarta, en una página donde cada cliente elige desde dónde empieza (terreno, obra gris, remodelación, renta vacacional o desarrollo) y ve qué haría el mismo equipo, paso a paso, con un proyecto real de ejemplo.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Ver `qa/reporte-rediseno.json` → `antes` | Página sin scripts de terceros: 0 desbordes, 0 imágenes rotas, 0 recursos fallidos |
| Solo se bajaron fotos de 4 de sus 14 proyectos | Se usan esos cuatro y se mencionan los 14 por nombre |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, servicios, proyectos y la ficha de Rosamorada H5 en una sola página.
- Los 17 servicios de su página de servicios se reparten en "¿Desde dónde empiezas?" según el caso.
- Rosamorada H5 como proyecto destacado con su ficha (86 m², Versalles, renta vacacional, Burgundy Style).

## Qué se agregó (no existía en el original)

- **"¿Desde dónde empiezas?"** (elemento memorable): cinco puntos de partida; cada uno despliega sus servicios como una línea de obra numerada y coloreada por área (arquitectura, interiores, construcción, desarrollo) y un proyecto de su portafolio de ese tipo. El WhatsApp lleva el punto de partida.
- Textos nuestros: la entrada del H1, "Arquitecto, interiorista y constructor, en uno" (resumen de su propio argumento), los textos cortos de cada servicio y los botones.
- Barra fija en el celular (WhatsApp, Llamar, Correo), enlace de búsqueda en Google Maps, JSON-LD `ProfessionalService` y Open Graph.

## Qué se quitó o no se usó

- "Resultados medibles" y "sin sorpresas" (promesas sin dato).
- Los renders y videos de Rosamorada (no se bajaron) y la versión en inglés (se puede hacer después).
- El logo en imagen (el nombre va en texto).

## Qué se conserva al pie de la letra

- Servicios de arquitectura, interiores, construcción y para desarrolladores, con su descripción.
- Rosamorada H5: 86 m², 2 recámaras, 2 baños, Versalles, renta vacacional, estilo Burgundy, materiales y mobiliario a diseño.
- Portafolio: 14 proyectos (8 de arquitectura, 9 de interiorismo, 4 de construcción) y sus nombres.
- Dos reseñas de Google; primera consulta gratuita de 30 minutos.
- Contacto: +52 322 264 2367, contacto@arqacasillas.com, Instagram @amatestudiomx.

## Pendiente de confirmar con el cliente

- **WhatsApp:** su sitio usa un enlace corto (`wa.me/message/ELDHF4FZPEAMM1`) que no deja ver el número; el rediseño usa el teléfono publicado (322 264 2367) con mensaje. Confirmar que ese número tiene WhatsApp.
- Dirección de oficina o taller (no se publica).
- Fotos y datos de los otros diez proyectos.
- Si el dominio se quedará como arqacasillas.com o cambiará a uno de AMATE Studio.

## Dónde está cada cosa

- Puntos de partida, servicios, Rosamorada, reseñas y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y "¿Desde dónde empiezas?": `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/images/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
