# Florería Lizette: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://florerializette.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/421-florerializette/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

Mismo negocio (florería en Monterrey con 40+ años de historia, entrega en 3 horas), mismos datos de contacto reales, con un selector de ocasión que muestra los arreglos correctos y llena el WhatsApp automáticamente — sin el carrito de WooCommerce, sin el WordPress lento y sin los scripts de seguimiento.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| El sitio original es WordPress + WooCommerce: el clon en `sitio/` es una página estática que no reproduce la tienda ni el carrito | El rediseño no intenta clonar la tienda; ofrece una página de presentación con enlace a WhatsApp para cotizar y pedir |
| La imagen "hero" del sitio original usa `cropped-favicon-floreria-lizette-192x192.png` (192×192 px) como imagen decorativa en el banner, lo que se ve pequeña y poco impactante en pantallas grandes | El rediseño usa `VP-03.webp` (1080×1080, ramo de rosas descargado en 2026/02) como imagen principal del hero |
| El clon no trajo la mayoría de imágenes de producto (son 175 arreglos de ocasión + 58 fúnebres en WooCommerce) | El rediseño usa las 11 imágenes descargadas más relevantes: 8 arreglos de ocasión/amor + 3 fúnebres |
| La sección "Los favoritos" del sitio original solo muestra 4 productos; el catálogo completo requiere navegar múltiples páginas de WooCommerce | El elemento memorable ("¿Para qué ocasión?") cubre las 6 categorías principales con arreglos reales y precios reales en un solo clic |

## Qué se cambió (mismo contenido, otra forma)

- El catálogo de dos líneas (Ocasión y Fúnebres) pasa de ser dos secciones separadas con imágenes de miniatura de WooCommerce a un selector de ocasión con fotos completas y precios visibles de entrada.
- Los precios reales ($900–$1,800 MXN para favoritos) aparecen en el grid del catálogo sin tener que entrar a la ficha de cada producto.
- Los datos de contacto (teléfono, email, dirección, redes) se muestran en el footer y en la barra de navegación, sin tener que llegar a la página de contacto.
- Las categorías del menú del sitio original (13 subcategorías de Ocasión + 7 de Fúnebres) se simplifican en 6 chips de ocasión más intuitivos para un visitante que no conoce la marca.
- Fuentes: el sitio original usa las fuentes por defecto de WordPress (Helvetica/sans-serif); el rediseño usa Playfair Display para títulos y Source Sans 3 para cuerpo de texto.
- Paleta: rosa intenso (#C0355A) y crema cálida (#FDF8F3), coherente con la identidad de marca existente (logo con rosas en el sitio original).

## Qué se agregó (no existía en el original)

- **Selector "¿Para qué ocasión?"** (elemento memorable): 6 chips clicables (Aniversario, Cumpleaños, Amor/Romance, Flores Amarillas, Condolencias, Corona Fúnebre). Al elegir uno, aparecen 2 arreglos reales del catálogo con precio y un botón de WhatsApp con el mensaje prellenado. Sin ninguna selección muestra los 3 favoritos más pedidos con sus precios.
- Sección "Zonas de entrega": lista las 9 zonas metropolitanas de Monterrey con CTA a WhatsApp para consultar otras zonas.
- JSON-LD tipo `Florist` con dirección, teléfono, horario (24/7), `aggregateRating` (4.9 ★ / +800 clientes) y redes sociales.
- `<title>` y `<meta description>` optimizados para SEO local ("flores a domicilio Monterrey, entrega en 3 horas").
- Sección de propuesta de valor con 4 iconos (Flores del día · Entrega en 3 horas · 24/7 · 4.9 ★ en Google).
- Acordeón de FAQ (React state, sin JS externo).
- Sección "Dos caminos" (Ocasión / Fúnebre) con imágenes de fondo, que diferencia visualmente los dos públicos del negocio.

## Qué se quitó o no se usó

- Carrito de WooCommerce (no es posible reproducirlo estáticamente; el cliente mantiene su tienda en WordPress para compras en línea).
- Scripts de WordPress: jquery, woocommerce, elementor, order-delivery-date plugin.
- Pixel de Facebook y scripts de seguimiento de wp.com.
- Los thumbnails de WooCommerce (fotos de producto 300×300) que el clon no descargó de rutas 2026/05 y 2026/09.
- El favicon como imagen de sección (aparecía como imagen hero en el clon; no se usa en el rediseño de esa manera).

## Qué se conserva al pie de la letra

- Nombre: **Florería Lizette**.
- Teléfono y WhatsApp: **+52 81 1918 7398** (528119187398).
- Email: **pedidos@florerializette.mx**.
- Dirección: **Av. Pino Suarez #137 Norte, Col. Centro, Monterrey**.
- Mapa: https://maps.app.goo.gl/9kKbgbcg7EKTSWHN6
- Google: **4.9 ★ / +800 clientes satisfechos** (datos del sitio original).
- Tiempo de entrega: **3 horas o menos** (dato del banner del sitio original).
- Historia: **más de cuatro décadas** creando momentos.
- Slogan del sitio: "Flores que dicen lo que las palabras no alcanzan" (copiado del hero del sitio original).
- Servicio fúnebre: **24/7, discreto y respetuoso, entrega en velatorios** (del sitio original).
- Zonas: Monterrey, San Pedro, Guadalupe, San Nicolás, Apodaca, Escobedo, Santa Catarina, García, Juárez (del sitio original).
- Precios de arreglos destacados: $900–$1,800 MXN (de las fichas de producto del sitio original).
- Redes sociales: Facebook FloreriaLizette, Instagram floreria_lizette.mx, TikTok floreria.lizette.
- Categorías reales del catálogo: Flores Amarillas (9), Ramos (54), Limited Love Collection (45), Corazones (11), Aniversario (7), Cumpleaños (13) — conteos del sitio original.

## Pendiente de confirmar con el cliente

- El sitio original tiene pago en línea (tarjeta, OXXO, transferencia) vía WooCommerce. El rediseño no reproduce la tienda; si el cliente quiere integrar el e-commerce en el rediseño, requeriría un método diferente (método 1.2 o enlazar a su WooCommerce existente).
- Los conteos de diseños por categoría (175 arreglos de ocasión totales, 58 fúnebres) pueden actualizarse con el tiempo.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: servidas directamente desde `../sitio/assets/wp-content/` (`publicDir` en `rediseno/vite.config.ts`)
