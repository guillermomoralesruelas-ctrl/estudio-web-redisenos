# Fase 3: Concepto de diseño

Usa la skill **frontend-design** (`.claude/skills/frontend-design/SKILL.md`; léela completa antes de empezar).

1. Lee `{{RUTA}}/PROYECTO.md`, `contenido/contenido.md` y mira las imágenes principales de `assets/`.
2. Escribe `{{RUTA}}/entregables/plan-diseno.md` siguiendo el proceso de dos pasadas de la skill:
   - tema, público y **trabajo principal** de la página (la acción que debe lograr)
   - color: de 4 a 6 valores con nombre y hex, derivados de la marca actual
   - tipografía: una o dos familias disponibles en @fontsource, con sus roles y su escala
   - layout: un wireframe ASCII con todas las secciones en orden
   - principios: el **único** elemento audaz y memorable, sacado del mundo del negocio
   - "Revisión contra los defaults": qué parte del plan era genérica, qué cambiaste y por qué
   - la acción principal siempre a un toque en móvil (barra fija), y el flujo de contacto o reserva que se va a usar (WhatsApp, formulario, enlace externo)
3. Como referencia de calidad y estructura (no de estilo), revisa `proyectos/01-10experiences/entregables/plan-diseno.md`.
4. `node --no-warnings herramientas/db.mjs estado {{CARPETA}} diseno`

Esta fase termina en una **aprobación de la persona**. Tu resumen final debe explicar el concepto en 4 viñetas claras.
