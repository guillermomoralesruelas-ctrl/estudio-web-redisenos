# FC4 Boxing Gym: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://fc4boxinggym.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/410-fc4boxinggym/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 410-fc4boxinggym`) |

## En una línea

Mismo negocio (boxeo en CDMX, dos sedes, cuatro coaches), diseño oscuro negro/rojo de alto impacto con elemento memorable de coaches expandibles y selector de sedes.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| WordPress cargaba scripts de `fc4boxinggym.com` bloqueados por CORS | Sin dependencias externas en el rediseño |
| 6 H1 (WordPress genera uno por bloque) | Un solo H1 ("FC4 Boxing Gym") |
| Navegación móvil sin acceso directo a WhatsApp | Barra fija móvil con dos botones WA (Pánuco / Anzures) |
| Mapas sin iframe real | Iframes de Google Maps reales, uno por sede |

## Qué se cambió (mismo contenido, otra forma)

- Secciones reorganizadas en flujo narrativo: hero → sobre → planes → coaches → por qué FC4 → sedes → footer
- Paleta reducida a negro/zinc/rojo para coherencia visual y peso de marca
- Tipografía unificada (Inter) en lugar de mezcla de fuentes WordPress

## Qué se agregó (no existía en el original)

- **Elemento memorable**: sección de coaches con tarjetas expandibles al clic — muestra nombre, sede y al tocar se despliegan las certificaciones/credenciales reales
- Selector de sedes (pestañas Pánuco / Anzures) que cambia el mapa y el botón de contacto
- Barra de navegación fija en móvil con acceso directo a cada sede por WhatsApp
- JSON-LD `SportsActivityLocation` con dos direcciones y teléfono
- Inscripción gratuita el día de la clase muestra destacada en la sección de planes

## Qué se quitó o no se usó

- Menú de WordPress (hamburguesa, header sticky) — reemplazado por barra móvil de CTA
- Slider/carrusel de imágenes del original — reemplazado por grid estático de dos fotos
- Blog y entradas de WordPress

## Qué se conserva al pie de la letra

- Nombre del negocio: FC4 Boxing Gym
- Teléfonos WhatsApp: Pánuco +52 55 2560 1504 / Anzures +52 55 1599 3032
- Precios de planes: $1,200 / $1,400 / $1,600 MXN · Inscripción $500 (gratis el día de la muestra)
- Nombres y certificaciones de los cuatro coaches: Sergio, Enrique, Roberto, Brayan
- URLs de Instagram y Facebook
- Ambos iframes de Google Maps (Pánuco y Anzures)

## Pendiente de confirmar con el cliente

- Horarios de clases (no aparecían en el sitio original)
- Dirección exacta en texto de cada sede
- Foto o video principal más reciente para el hero

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: se leen del clon en `sitio/assets/wp-content/uploads/2025/` (`publicDir` en `rediseno/vite.config.ts`)
