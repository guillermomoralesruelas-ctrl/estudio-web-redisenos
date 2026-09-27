# Florería Mrs. Flowers: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.mrsflowers.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/422-floreriamrsflowers/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 422-floreriamrsflowers`) |

## En una línea

El contenido es el mismo — nombre, servicio, contacto, fotos reales — pero el rediseño elimina todo el WooCommerce no funcional, reemplaza las fotos generadas con IA por las fotos propias del negocio, y agrega el reloj "¿Llega hoy?" con cuenta regresiva hasta las 6 pm.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 10 imágenes rotas en escritorio (9 en móvil) — fotos de producto no descargadas | Se usan solo las fotos locales disponibles; las no descargadas se omiten |
| 1,155–2,112 errores de consola de WooCommerce JavaScript (carrito, fragments) | Eliminado todo WooCommerce; el flujo de compra va por WhatsApp |
| 1 recurso con 404 (`wc-ajax=get_refreshed_fragments`) | Eliminado |
| Desborde de 1,800 px en escritorio y 2,690 px en móvil | Rediseño: 0 desbordes |
| La mayoría de fotos de producto son generadas con ChatGPT (nombre del archivo: `ChatGPT-Image-*`) | Se usan solo las fotos reales (WhatsApp y propias); se omiten las de IA |
| Carrito de WooCommerce cargado pero no funcional en el clon | No hay carrito; todo va a WhatsApp |

## Qué se cambió (mismo contenido, otra forma)

- La tienda WooCommerce (carrito, botones "Añadir al carrito", paginación) se convirtió en un selector de categorías con botón de WhatsApp prellenado por tipo de arreglo.
- El slider del hero se simplificó a una sola imagen de fondo fija (el fondo de flores del sitio original).
- El menú de navegación multi-nivel se simplificó a un encabezado fijo con logo, aviso de entrega hoy y botón de WhatsApp.
- Los productos listados en grid se agruparon en 4 categorías (Ramos de Rosas, Girasoles, Rosas Especiales, Arreglos Funerales) con selector tipo tabs.
- Las zonas de entrega (Polanco, Condesa, Roma, Santa Fe, Coyoacán y más) se extrajeron del clon y se presentan en la sección de contacto.

## Qué se agregó (no existía en el original)

- **"¿Llega hoy?"**: reloj en tiempo real con la hora de Ciudad de México (`Intl.DateTimeFormat`, zona `America/Mexico_City`). Antes de las 6 pm muestra una barra de cuenta regresiva y el tiempo que queda; después de las 6 pm avisa que el arreglo llega mañana; de madrugada (antes de las 8 am) dice que las entregas empiezan a las 8:00 am. El botón de WhatsApp cambia el mensaje según el estado.
- Barra fija en el celular con WhatsApp, llamar y cómo llegar (Google Maps).
- JSON-LD tipo `Florist` con datos reales del negocio.
- `<title>` y `<meta description>` con el servicio principal, la ciudad y el WhatsApp.
- Open Graph con imagen, título y descripción.
- `prefers-reduced-motion` respetado en todas las animaciones (barra de progreso y fade de categorías).
- Microcopy de WhatsApp por categoría: cada tab de categoría tiene un mensaje prellenado diferente (rosas, girasoles, rosas especiales, funerales).
- Fotos .webp optimizadas en `assets/web/` generadas por `rediseno/fotos-web.mjs`.

## Qué se quitó o no se usó

- WooCommerce completo (carrito, sesión de usuario, botones "Añadir al carrito", "Leer más").
- Imágenes generadas con ChatGPT (`ChatGPT-Image-*`): el sitio original usa cientos de imágenes de IA como fotos de producto; en el rediseño se usan solo las fotos propias del negocio.
- El slider/carrusel del hero (Revolution Slider), que no cargaba en el clon.
- El feed de Instagram (requiere JavaScript externo no disponible en el clon).
- Los menús de navegación de muchos niveles (Categorias Principales, Tipo de Flor, Arreglos Florales para Funerales, Arreglos Frutales, Ramos, Más).
- El logo dorado (`logo-dorado-mrsf.png`) del pie del sitio original — se usa el logo principal.
- El fondo del hero para móvil (`bg-ramos-premium-mb.jpg`) — se usa el fondo de escritorio recortado.

## Qué se conserva al pie de la letra

- Nombre del negocio: **Florería Mrs. Flowers**
- WhatsApp: **+52 55 1878 4901** (`wa.me/525518784901`)
- Teléfono: **55 1878 4901**
- Horario de corte para entrega el mismo día: **6 pm** (del clon: "Ordena antes de las 6 PM")
- Tiempo de entrega: **2 a 3 horas**
- Zonas de entrega: CDMX y Edomex (Polanco, Condesa, Roma, Santa Fe, Coyoacán, mencionados en el clon)
- Ciudad: Ciudad de México, CDMX
- Servicios de pago: Stripe/BBVA, facturación disponible (del clon)
- Categorías de productos tomadas del clon: Ramos, Rosas, Girasoles, Tulipanes, Funerales, Coronas, Arreglos Frutales
- Texto del hero: "Arreglos florales frescos entregados en 2 a 3 horas. Diseños premium para cumpleaños, aniversarios y momentos especiales." (del clon)

## Pendiente de confirmar con el cliente

- Horarios exactos de atención (el clon solo dice "Ordena antes de las 6 PM" pero no publica horario completo).
- Redes sociales: el sitio tiene botones de redes pero no se publican las URLs en el clon ni en resumen.json.
- Fotos adicionales de producto: muchas de las que usa el sitio son generadas con IA; sería valioso reemplazarlas con fotos reales.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: fotos .webp optimizadas en `assets/web/` (generadas por `rediseno/fotos-web.mjs`); `publicDir` en `rediseno/vite.config.ts` apunta a `../assets/web`
