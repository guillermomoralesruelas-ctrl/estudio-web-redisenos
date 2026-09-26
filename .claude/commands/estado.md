---
description: Muestra el estado de todos los proyectos o de uno. Uso: /estado [slug]
---
Argumentos: $ARGUMENTS

- Sin slug: `node --no-warnings herramientas/db.mjs proyectos` y `cola/pendientes` (cuántos pendientes).
- Con slug: `db proyecto <slug>`, `db tareas <slug>` y las últimas 10 entradas de `db bitacora <slug>`.
Resume en una tabla corta y sugiere el siguiente paso según la fase.
