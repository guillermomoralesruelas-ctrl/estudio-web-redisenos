# 52 CrossFit Cinco Dos: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://52cincodemayo.com/ |
| Método | **1.2 en la nube**: el clon (LeadConnector) no traía fotos; las reales se bajaron de su CDN a `assets/originales/` |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/217-cincodoscinco/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 217-cincodoscinco`) |

## En una línea

El mismo box de la colonia 5 de Mayo, con sus membresías, horario, servicios y comunidad, en una página donde el pizarrón del WOD te dice cuánto pagas hoy según cómo empiezas.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Las fotos viven en el CDN de LeadConnector: 19 imágenes rotas | Copias .webp locales: 0 rotas, 0 fallidos |
| El correo del encabezado dice "infol@52cincodmayo.com" y su enlace abre "youremail@email.com" | Correo correcto del pie: info@52cincodemayo.com |

## Qué se cambió (mismo contenido, otra forma)

- Las tres tarjetas de membresía se volvieron "¿Desde dónde empiezas?".
- "Qué ofrecemos", "Beneficios" y los tres bloques de equipo, horario y metodología se juntaron en "Lo que encuentras en el Cinco Dos".
- El blog "Revista" no se repite; del artículo se tomó al coach Isaac A. Aguirre Rosas, CCF-L3.

## Qué se agregó (no existía en el original)

- **"¿Desde dónde empiezas?"** (elemento memorable): pizarrón con el plan, lo que pagas hoy (con la inscripción sumada en la mensualidad), lo que incluye y el horario.
- Galería con nueve fotos reales del box.
- Textos nuestros: el H1, la entrada de la portada y de las secciones.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar), enlace a Google Maps, JSON-LD `ExerciseGym` y Open Graph.

## Qué se quitó o no se usó

- Los textos de plantilla en inglés ("ENJOY THE FEATUREs").
- "El estándar de élite", "resultados reales" y "el único afiliado en Hermosillo" (no se pudo comprobar).
- La tienda ("Store") y las portadas de revista.

## Pendiente de confirmar con el cliente

- Si hay clases los sábados además del Open Box (su sitio dice "abierto de lunes a sábado" y "clases de 5:00 a 20:30").
- Si la clase de prueba es gratis (lo dice el título de su página, no el contenido).
- Qué incluyen "servicios premium" y "beneficios exclusivos" de la mensualidad.
