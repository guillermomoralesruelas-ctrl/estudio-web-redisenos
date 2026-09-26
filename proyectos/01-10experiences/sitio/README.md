# Sitio — 10 Experiences

Vite 7 + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion 12. Fuentes locales (@fontsource).

```
npm install      # una sola vez
npm run dev      # http://localhost:5173
npm run build    # genera dist/ para publicar
npm run preview  # prueba la versión de dist/
```

- **Textos, precios, horarios e imágenes:** `src/data/content.ts`
- **Colores y fuentes:** `src/index.css` (bloque `@theme`)
- **Imágenes:** se sirven desde `../assets` (ver `vite.config.ts`, `publicDir`)
- **Reservas:** el formulario arma el mensaje y abre WhatsApp (`src/components/ReservaDialog.tsx`); no requiere servidor.
- **Plan de diseño:** `../entregables/plan-diseno.md`
