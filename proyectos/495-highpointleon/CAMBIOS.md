# High Point León: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://highpointleon.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/495-highpointleon/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 495-highpointleon`) |

## En una línea

Mismos datos del negocio, estética completamente transformada: de sitio blanco con carruseles a rediseño oscuro premium con proyector de plusvalía interactivo único en el estudio.

## Qué estaba roto o incompleto en el clon

El clon (sitio original) tenía errores graves detectados en QA:

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 0 etiquetas H1 en todo el sitio | 1 H1 bien posicionado en el Hero |
| 39 imágenes rotas (rutas con backslash de Windows) | 0 imágenes rotas |
| 42 recursos con 404 (Astro JS, fuentes locales, scripts) | 0 recursos con 404 |
| Carruseles sin funcionalidad (JS roto) | Grid estático funcional + proyector interactivo en React |

## Qué se cambió (mismo contenido, otra forma)

- Paleta: blanco → fondo oscuro `#0D0D0D` con dorado `#C9A227`
- Tipografía: Montserrat sans-serif → Cormorant Garamond (títulos) + Inter Variable (cuerpo)
- Carrusel de amenidades → grid visual de 11 tarjetas con foto y nombre
- 3 carruseles de acabados → grid de 6 tarjetas con etiqueta
- Slider de departamentos → proyector de plusvalía interactivo (elemento memorable)
- Sección "¿Quiénes somos?" diluida → integrada en la sección Proyecto
- Formulario inexistente en el original → CTAs de WhatsApp prellenados por tipología

## Qué se agregó (no existía en el original)

- **Proyector de plusvalía interactivo**: usuario selecciona tipo de depto (1/2/3 rec) y ve valor proyectado a +1, +3 y +5 años con el 11.10% real de León. CTA de WhatsApp cambia dinámicamente por tipo. Primero en el estudio.
- Barra flotante móvil fija: WhatsApp + Llamar + Maps
- JSON-LD `ApartmentComplex` con datos reales del negocio
- `prefers-reduced-motion` respetado
- Favicon inline SVG (evita 404 del navegador)
- `aria-live="polite"` en el proyector al cambiar tipología
- Meta OG completos

## Qué se quitó o no se usó

- Slider/carrusel de plantas (se convirtieron en grid estático — más accesible y sin JS externo)
- Imagen `FondoBanner.jpg` en sección "¿Quiénes somos?" (redundante, ya está en el hero)
- `whasap.png` (ícono de WhatsApp reemplazado por SVG inline — sin dependencia de imagen)

## Qué se conserva al pie de la letra

- Todos los precios: $2,800,000 / $4,200,000 / $6,000,000 MXN
- Plusvalía: 11.10% (2024) — dato real del sitio
- Dirección: Blvd. Aeropuerto esq. Blvd Delta, Villas Santa Julia, León, Gto.
- Teléfono: 5525386374
- Email: xael@inside.com
- Google Maps: https://maps.app.goo.gl/habQpTFy41v8kGNv5
- WhatsApp prellenado del original
- Todos los textos de "Razones para invertir"
- Descripción de OR-B (Mítikah, St. Regis Mexico City, St. Regis Punta Mita)
- Lista de 10 puntos de ubicación con distancias
- 11 amenidades y sus fotos
- 6 acabados y sus fotos
- Planos de planta (3 slides) y depto modelo (2 imágenes)

## Pendiente de confirmar con el cliente

- Aviso de privacidad (el footer menciona "Aviso de privacidad" en el original pero sin enlace activo)
- Redes sociales (no hay en el sitio original ni en los datos disponibles)
- Logo de alta resolución para el favicon

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: se leen del clon en `sitio/assets/images/` (`publicDir` en `rediseno/vite.config.ts`)

## QA final

| Vista | H1 | Imágenes | Rotas | Errores | Desborde |
|---|---|---|---|---|---|
| Escritorio (1280px) | 1 | 32 | 0 | 0 | 0 |
| Móvil (390px) | 1 | 32 | 0 | 0 | 0 |
