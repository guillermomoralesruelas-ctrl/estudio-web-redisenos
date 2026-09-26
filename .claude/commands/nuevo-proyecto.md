---
description: Crea un proyecto nuevo de rediseño. Uso: /nuevo-proyecto <slug> <url-del-sitio> [nombre]
---
Crea un proyecto nuevo con estos argumentos: $ARGUMENTS

1. Ejecuta `powershell -ExecutionPolicy Bypass -File herramientas/nuevo-proyecto.ps1 -Slug <slug> -Url <url> -Nombre "<nombre>"`.
2. Confirma que existe `proyectos/<slug>/PROYECTO.md` y que el proyecto aparece en `node --no-warnings herramientas/db.mjs proyectos`.
3. Muestra a la persona las preguntas del brief (sección "Brief" de PROYECTO.md) que siguen vacías.
