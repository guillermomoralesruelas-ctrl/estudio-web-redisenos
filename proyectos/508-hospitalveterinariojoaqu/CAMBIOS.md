# Hospital Veterinario Joaquín Buxadé: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.hveterinario.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/508-hospitalveterinariojoaqu/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 508-hospitalveterinariojoaqu`) |

## En una línea

[PENDIENTE: qué es igual (negocio, datos) y qué cambió en lo esencial]

## Qué estaba roto o incompleto en el clon

Sácalo de `qa/reporte-rediseno.json` → `antes` (desborde, imágenes rotas, recursos con 404) y de revisar el clon a ojo.

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| [PENDIENTE] | [PENDIENTE] |

## Qué se cambió (mismo contenido, otra forma)

- [PENDIENTE]

## Qué se agregó (no existía en el original)

- [PENDIENTE: el elemento distintivo, CTA de WhatsApp o reserva, barra móvil, JSON-LD… y cualquier texto redactado por nosotros]

## Qué se quitó o no se usó

- [PENDIENTE]

## Qué se conserva al pie de la letra

- [PENDIENTE: textos, precios, contacto]

## Pendiente de confirmar con el cliente

- [PENDIENTE]

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: se leen del clon en `sitio/assets/images/` (`publicDir` en `rediseno/vite.config.ts`)
