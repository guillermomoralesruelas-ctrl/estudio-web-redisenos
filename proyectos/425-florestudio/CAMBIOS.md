# Florestudio: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://florestudio.shop/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/425-florestudio/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

Mismo negocio, mismos textos y precios reales; sin WooCommerce roto, sin imágenes generadas con IA ni fotos de banco, con un selector de presupuesto interactivo que ayuda al visitante a elegir su ramo.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 429 desbordes horizontales en escritorio (CSS de Elementor y WooCommerce sin cargar) | Sin desbordes — 0 en escritorio y móvil |
| 15 imágenes rotas (fotos de producto de 2026/02 y 2026/05 no descargadas) | Solo se usan las 8 fotos disponibles en el clon, convertidas a .webp |
| 69 errores de consola (WooCommerce JS, Ajax 404, recursos externos sin respuesta) | 0 errores de consola |
| Carrito de WooCommerce sin funcionar localmente | Eliminado — el contacto es por WhatsApp directo |
| Imágenes generadas con IA (Gemini_Generated_Image, ChatGPT_Image) usadas como fotos de producto | No se usa ninguna imagen de IA |
| Alto de 20,089 px (escritorio) — página de ecommerce muy larga | 3,539 px en escritorio — página de una sola pantalla por sección |

## Qué se cambió (mismo contenido, otra forma)

- Las ventajas del negocio ("Flores frescas del día", "Entrega rápida", "Presentación premium", "Atención humana por WhatsApp") se reorganizaron como lista con la misma redacción del sitio original
- El FAQ usa las preguntas y respuestas reales de la página de "Flores para Mamá" del sitio original, condensadas
- Los precios de los ramos son los exactos publicados en WooCommerce (crudo.json)
- El número de WhatsApp `523319468265` se tomó del enlace `wa.me` del sitio original

## Qué se agregó (no existía en el original)

- **Elemento memorable — "¿Cuánto quieres gastar?"**: control deslizante interactivo de $199 a $1,699 pesos; al moverlo, se resaltan los ramos del catálogo que caben en ese presupuesto; al elegir uno, el botón de WhatsApp incluye el nombre y precio del arreglo. Responde la pregunta real del comprador de flores.
- **Barra fija en móvil** con WhatsApp, llamada y Google Maps
- **JSON-LD** tipo `Florist` con los datos reales del negocio (el sitio original no publica JSON-LD)
- **Sección "Cómo pedir"** con los tres pasos (del texto del sitio original: cotizar, elegir, entregar)
- Metaetiquetas Open Graph completas
- Título y description reales (el original tenía description propia pero sin OG)
- `prefers-reduced-motion` respetado

## Qué se quitó o no se usó

- WooCommerce, carrito y proceso de compra (funcionalidad no disponible localmente)
- Fotos de banco o stock (flowers.jpg, front-view-female-hand, portrait-of-woman, palm-leaf-background, etc.)
- Imágenes generadas con IA: Gemini_Generated_Image (x2) no se usaron
- Newsletter (sección al pie del original)
- Menú de categorías (Rosas, Girasoles, Flores Amarillas, Flores para Mamá) — reemplazado por el catálogo filtrado por presupuesto
- Banner hero de WhatsApp-Image-2026-01-26 (imagen muy pequeña, 835×292 px, usada como banner en el original) — no se usa en el rediseño por baja resolución
- Captura de pantalla e imagen de texto (Captura-de-pantalla-2026-01-26) — no se usa

## Qué se conserva al pie de la letra

- Nombre del negocio: Florestudio
- Ciudad: Guadalajara, Jalisco (Zona Metropolitana)
- WhatsApp: 523319468265 (wa.me/523319468265 del sitio original)
- Los 8 ramos del catálogo con sus nombres y precios exactos del sitio original
- Las 4 ventajas del negocio con sus textos originales
- Las 5 preguntas y respuestas del FAQ del sitio original
- El costo de envío: $15 pesos por kilómetro (del FAQ original)
- El tiempo de entrega: 4 a 5 horas (del FAQ original)
- Métodos de pago mencionados: transferencia, link de pago, efectivo, pago al recibir

## Pendiente de confirmar con el cliente

- **Dirección física**: el sitio no publica dirección. El enlace de Maps apunta a "florestudio guadalajara" como búsqueda.
- **WhatsApp confirmado**: el número `33 1946 8265` se usa como enlace de llamada también, pero no se publicó como número de teléfono separado en el sitio original.
- **Fotos de mayor resolución**: las fotos de producto del clon son miniaturas de 300×300 px; con fotos a 1000 px o más el rediseño mejoraría visualmente.
- Las fotos de 2026/02 del sitio original (tulipanes, girasoles múltiples, gerberas, cajas de rosas) no se descargaron en el clon — podrían mejorar el catálogo.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` (generadas por `rediseno/fotos-web.mjs`)
- publicDir de Vite: `../assets/web` (`rediseno/vite.config.ts`)
