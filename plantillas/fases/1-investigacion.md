# Fase 1: Investigación

Objetivo: entender el negocio y el sitio actual, y dejar todo listo para rediseñarlo.

1. Ejecuta: `node herramientas/investigar.mjs {{URL}} {{CARPETA}} --max 8`
   Genera `{{RUTA}}/investigacion/crudo.json`, `investigacion/resumen.json`, capturas en `referencias/` y un borrador de `assets.json`.
2. Lee `investigacion/resumen.json` y mira las capturas de `referencias/` (sobre todo `01-inicio-escritorio.png` y `02-inicio-movil.png`).
3. Si hace falta más contexto del negocio (qué vende, a quién, en qué ciudad), usa WebFetch sobre las páginas clave o WebSearch con el nombre del negocio.
4. Llena `{{RUTA}}/PROYECTO.md`, secciones "1. Brief" y "2. Análisis":
   - rubro, propuesta de valor, público probable, idiomas
   - productos o servicios con precios y horarios, si los hay
   - paleta detectada (hex), tipografías, logo
   - estructura actual (secciones y páginas)
   - **problemas concretos** (UX, móvil, SEO, accesibilidad, rendimiento), uno por línea y con su porqué
   - oportunidades (lo más valioso que el sitio no aprovecha)
5. Escribe `{{RUTA}}/contenido/contenido.md` con **todos** los textos reales, organizados por sección: títulos, textos, precios, horarios, preguntas frecuentes, testimonios (con nombre y lugar), contacto, redes y ubicaciones.
6. Depura `{{RUTA}}/assets.json`:
   - quita íconos, pixeles de rastreo, avatares repetidos y logos de terceros
   - agrupa por `carpeta` con nombres claros: `marca`, `hero`, `servicios`, `galeria`, `equipo`...
   - deja en `nota` cuántas imágenes quedaron y por qué quitaste las demás
7. `node --no-warnings herramientas/db.mjs estado {{CARPETA}} assets`
