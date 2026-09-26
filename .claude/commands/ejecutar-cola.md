---
description: Ejecuta los scripts que Claude (Cowork) dejó en cola/pendientes y resume los resultados.
---
1. Lista `cola/pendientes/*.ps1`. Si no hay ninguno, dilo y termina.
2. Muestra la línea `# QUE HACE:` de cada uno.
3. Ejecuta `powershell -ExecutionPolicy Bypass -File herramientas/ejecutar-cola.ps1 -Si`.
4. Lee los `.log` nuevos en `cola/procesadas/` (los de número más alto) y resume qué funcionó y qué falló.
