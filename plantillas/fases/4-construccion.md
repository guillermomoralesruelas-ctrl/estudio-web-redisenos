# Fase 4: Construcción del sitio

Construye el sitio en `{{RUTA}}/sitio/` según `{{RUTA}}/entregables/plan-diseno.md` (ya aprobado).

**Base técnica:** copia la configuración de `proyectos/01-10experiences/sitio/`: `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `.gitignore` y `README.md`. Adáptala (nombre, fuentes @fontsource del plan, meta/SEO/JSON-LD del negocio). **No copies** los componentes ni los colores: el diseño es nuevo.

Reglas:
- Vite + React + TypeScript + Tailwind 4 (`@theme` en `src/index.css`) + Framer Motion solo para el momento audaz.
- **Todo el contenido** va en `src/data/content.ts`, con los textos reales de `contenido/contenido.md`.
- Las imágenes se sirven desde `../assets` (`publicDir: '../assets'`). Usa la versión `.webp` cuando exista.
- Mobile first, sin desborde horizontal. Un solo H1, `alt` en todas las imágenes, foco visible, `prefers-reduced-motion`.
- Barra fija inferior en móvil con la acción principal. El contacto o la reserva deben funcionar de verdad (por ejemplo, un mensaje prellenado de WhatsApp).
- Evita los defaults que señala la skill frontend-design (etiquetas en mayúsculas, puntos medios, animaciones en cada sección, tarjetas idénticas).

Pasos:
1. Crea los archivos.
2. `npm install` y `npm run build` dentro de `{{RUTA}}/sitio`. Corrige hasta que compile sin errores.
3. `npx tsc --noEmit`. Corrige los errores de tipos.
4. `node --no-warnings herramientas/db.mjs estado {{CARPETA}} desarrollo`
