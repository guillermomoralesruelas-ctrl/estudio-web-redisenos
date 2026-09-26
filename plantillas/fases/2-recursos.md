# Fase 2: Recursos

1. Ejecuta: `node herramientas/descargar-assets.mjs {{CARPETA}}`
2. Si hubo fallas (`{{RUTA}}/assets-fallas.txt`), revisa si la URL tenía un tamaño alternativo (por ejemplo, quitar `-300x300` en WordPress). Corrige `assets.json` y vuelve a ejecutar el paso 1.
3. Ejecuta: `node herramientas/optimizar-imagenes.mjs {{CARPETA}}` (crea `.webp` junto a las imágenes pesadas).
4. Revisa visualmente 6 a 10 imágenes clave (hero, productos, equipo) para saber qué muestran, y anota en `PROYECTO.md` › "Análisis" una lista corta: `archivo → qué muestra`. La fase de diseño la va a usar.
5. `node --no-warnings herramientas/db.mjs estado {{CARPETA}} contenido`
