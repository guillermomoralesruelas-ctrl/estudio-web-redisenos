# Las Jaras Aguas Termales - Spa El Sendero & Jardín: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://lasjaras.mx/ |
| Método | **1.2**: fotos reales descargadas del sitio live (15/16 fotos del clon tenían C2PA de OpenAI) |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/646-lasjarasaguas/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 646-lasjarasaguas`) |

## En una línea

Mismos datos de contacto y precios reales del sitio. Se eliminaron las 14 fotos generadas con IA (C2PA de OpenAI en 2026/09); se usaron las 5 fotos propias sin C2PA. Paleta verde bosque + crema cálido; mapa de Google embebido; WhatsApp prellenado.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 14/15 fotos de contenido son IA generada (C2PA OpenAI, 2026/09) | Solo se usan las 5 fotos reales (2025/05, 2025/08, 2026/03) |
| WordPress/Elementor multi-página, no clona bien en local | Página única estática, todo visible y funcional |
| Formulario de reserva (Elementor) sin funcionar en clon | Reemplazado por WhatsApp prellenado |

## Qué se cambió (mismo contenido, otra forma)

- Los 3 accesos termales ($480/$750/$1,150) se presentan en tarjetas comparativas con sus inclusiones
- Las fotos del SPA (masajes, faciales, rituales) como tarjetas visuales en lugar de imagen + texto plano
- Actividades del día presentadas como agenda cronológica

## Qué se agregó (no existía en el original)

- Barra fija de WhatsApp en móvil con mensaje prellenado
- JSON-LD (SpaOrBeautyBusiness) con todos los datos reales
- Dos CTAs de WhatsApp diferenciados: uno para accesos termales, otro para el SPA

## Qué se conserva al pie de la letra

- Precios exactos de accesos y servicios de SPA
- Textos descriptivos de los accesos y el SPA
- Las 3 reseñas reales (TripAdvisor y Google)
- Dirección: Carr. Jiquilpan-Manzanillo km 82, La Garita, Jalisco
- WhatsApp: +52 33 2929 7046 (general) / +52 341 317 7393 (SPA)
- Teléfono: +52 358 416 5144

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes originales: `assets/originales/` (descargadas del live, sin C2PA)
- Imágenes optimizadas: `assets/web/` (generadas por `fotos-web.mjs`)
