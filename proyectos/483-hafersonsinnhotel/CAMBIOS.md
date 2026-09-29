# Hafersons Inn Hotel & Suites: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://hafersonsinn.mx/ |
| Método | **1.2 en la nube**: el clon (Rotamundos) no traía fotos; las reales se bajaron de su CDN a `assets/originales/` |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/483-hafersonsinnhotel/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 483-hafersonsinnhotel`) |

## En una línea

El mismo hotel de Ciudad Madero, con su ubicación, servicios, restaurante, habitaciones y salones, en una página donde se ve de un vistazo a qué hora hay desayuno, comida y centro de negocios.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Fotos y motor de reservas en el CDN de Rotamundos: recursos fallidos | Copias .webp locales: 0 rotas, 0 fallidos |

## Qué se cambió (mismo contenido, otra forma)

- Los horarios del restaurante se volvieron "Un día en el hotel".
- "Disfruta tu estancia" y "Máximo comfort" quedaron en "Habitaciones estándar y Junior Suites".
- "Garantizamos el éxito de tu evento" quedó en "Cinco salones para tu evento".

## Qué se agregó (no existía en el original)

- **"Un día en el hotel"** (elemento memorable): línea de 24 horas con desayuno, restaurante y centro de negocios, entre semana y en fin de semana.
- Textos nuestros: el H1, la entrada de la portada y de las secciones.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar), JSON-LD `Hotel` y Open Graph.

## Qué se quitó o no se usó

- El buscador de fechas del motor (muestra "USD 0" y un selector de moneda).
- Las "Preguntas frecuentes" (su sitio pone las preguntas sin respuestas).
- El aviso de Google Translate.

## Pendiente de confirmar con el cliente

- Tarifas por tipo de habitación.
- Respuestas a sus preguntas frecuentes (mascotas, niños, desayuno incluido, etc.).
- Capacidad de cada salón y cuál foto corresponde a Junior Suite.
