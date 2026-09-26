---
description: Descarga las imágenes de un proyecto según su assets.json. Uso: /descargar-assets <slug>
---
Proyecto: $ARGUMENTS

1. Ejecuta `powershell -ExecutionPolicy Bypass -File herramientas/descargar-assets.ps1 -Proyecto <slug>`.
2. Ejecuta `node --no-warnings herramientas/db.mjs sync-assets <slug>` y reporta cuántas se descargaron y cuáles fallaron.
3. Si todo está bien: `db estado <slug> contenido`.
