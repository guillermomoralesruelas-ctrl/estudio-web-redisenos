# Fase 5: Control de calidad

1. `npm run build` en `{{RUTA}}/sitio` (si falla, corrige).
2. `node herramientas/qa.mjs {{CARPETA}}`. Genera `{{RUTA}}/qa/reporte.md` y capturas en `qa/`.
3. Mira las capturas `qa/movil-completa.png` y `qa/escritorio-completa.png`. Busca problemas visuales: textos encimados, imágenes cortadas, secciones vacías, contraste bajo, botones tapados por la barra móvil.
4. Corrige todo lo que encuentres (automático y visual), recompila y vuelve a ejecutar el paso 2, **hasta 3 vueltas**.
5. Agrega al final de `qa/reporte.md` una sección "Revisión visual" con lo que viste y lo que corregiste.
6. `node --no-warnings herramientas/db.mjs estado {{CARPETA}} revision`
