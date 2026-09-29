# Casa Don Gustavo Boutique Hotel: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.casadongustavo.com/ |
| Método | **1.2**: rediseño a mano; fotos descargadas de webbox.imgix.net (el clon no tenía imágenes) |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/165-casadongustavo/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 165-casadongustavo`) |

## En una línea

Mismos datos (suites, restaurante, contacto), sitio en español, fotos en alta resolución de webbox.imgix.net, WhatsApp directo y selector visual de suites.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Sitio en inglés por defecto (/es/ requiere hacer clic extra) | Sitio completamente en español |
| Fotos cargadas como `blob:http://localhost/...` (no descargables) | 10 fotos reales descargadas de webbox.imgix.net a 1280px, convertidas a .webp |
| Sin WhatsApp publicado en el sitio | WhatsApp 981 818 6207 en hero, selector de suites y barra móvil |
| Información de suites dispersa en 3 páginas diferentes | Todo unificado en una sola página con tabs |

## Qué se cambió (mismo contenido, otra forma)

- El catálogo de habitaciones (3 páginas separadas en el original) → selector de tabs en una sola sección
- La información del restaurante (una página separada) → sección dentro de la página principal
- Precios del menú del restaurante conservados tal como están en el original (en MXN)

## Qué se agregó (no existía en el original)

- WhatsApp 981 818 6207 (mencionado en la página de promociones, no en el home)
- JSON-LD schema.org tipo `Hotel`
- Barra fija móvil con llamada, WhatsApp y correo
- Header con CTA de reserva siempre visible

## Qué se quitó o no se usó

- Páginas secundarias: Atracciones, Arte y Cultura, Galería, Sobre nosotros
- Motor de reservas en línea (no publicado en el rediseño; se puede agregar más adelante)
- Botón de "Reservar lada gratuita 800 839 0959" (se mantiene el teléfono en el footer)

## Qué se conserva al pie de la letra

- Nombre de cada suite y su descripción histórica
- Precios del restaurante (Chilaquiles $149, Café y repostería $99, etc.)
- Teléfonos: 981 816 8090 y 800 839 0959
- Email: hotel@casadongustavo.com
- Texto "Desayuno y Tour por la ciudad incluidos (reservas directas)"

## Pendiente de confirmar con el cliente

- WhatsApp 981 818 6207 (obtenido de la página de promociones, confirmar que es el correcto para reservas)
- Dirección exacta en Calle 59 (el sitio menciona el número pero no lo especifica)
- Ruta de Google Maps (se usó un placeholder; confirmar el pin exacto)

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: `assets/web/*.webp` (generadas por `rediseno/fotos-web.mjs` desde `assets/originales/`)
