# Cervus Barbería: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://cervusbarberia.com/ |
| Método | **1.2 en la nube**: el clon (Framer) no traía fotos; las reales se bajaron de su CDN a `assets/originales/` |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/204-cervusbarberia/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 204-cervusbarberia`) |

## En una línea

La misma barbería de Zoquipan, con sus siete servicios, sus dos barberos, su historia y su mascota, en una página donde eliges cuánto tiempo tienes y ves qué te alcanza.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Las fotos viven en el CDN de Framer: 6 imágenes rotas en el clon | Copias .webp locales: 0 rotas, 0 fallidos |

## Qué se cambió (mismo contenido, otra forma)

- "Elige tu servicio" se volvió "¿Cuánto tiempo tienes?".
- La página "Tendencias" quedó como una línea con los nombres de los 12 cortes.
- "Visita la barbería" y "Tu próximo corte empieza aquí" se juntaron.

## Qué se agregó (no existía en el original)

- **"¿Cuánto tiempo tienes?"** (elemento memorable): botones de minutos; los servicios que caben quedan activos con su reserva.
- Botón de WhatsApp (ver pendiente).
- Textos nuestros: el H1, la entrada de la portada y de las secciones.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar), JSON-LD `BarberShop` y Open Graph.

## Qué se quitó o no se usó

- Las 12 fotos de "Tendencias": son imágenes generadas con IA (el mismo modelo en todas), no cortes de la barbería.
- El feed de Instagram de Elfsight (widget de terceros).
- El video de portada (anima la mascota; se usa la mascota fija).
- Los contadores "5 años" y "100% atención al detalle".

## Pendiente de confirmar con el cliente

- **WhatsApp:** su sitio no publica WhatsApp. Por regla se usó el teléfono 33 3503 5280; confirmar si ese número tiene WhatsApp.
- Más fotos reales de la barbería y de cortes (el sitio solo tiene tres propias; las de su Instagram serían ideales).
- Su sitio dice "5 años" y "fundada en 2021": se dejó el año de apertura.
