---
description: Analiza el sitio original de un proyecto y llena PROYECTO.md y assets.json. Uso: /analizar-sitio <slug>
---
Proyecto: $ARGUMENTS

1. Lee `proyectos/<slug>/PROYECTO.md` para obtener la URL original.
2. Revisa el sitio (página principal y subpáginas del menú). Obtén:
   - rubro, público, propuesta de valor
   - paleta (colores más usados), tipografías
   - estructura de secciones, CTAs, datos de contacto
   - problemas de UX, SEO y accesibilidad
   - TODAS las URLs de imágenes (img, background-image, lazy-load)
3. Escribe el análisis en la sección "Análisis" de PROYECTO.md.
4. Escribe `proyectos/<slug>/assets.json` con el formato de `plantillas/assets.json`.
5. Extrae los textos a `proyectos/<slug>/contenido/contenido.md`.
6. Ejecuta `db log <slug> "Análisis completo"` y `db estado <slug> assets`.
