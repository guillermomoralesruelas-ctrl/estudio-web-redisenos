# Florería Guadalajara: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://floreriaguadalajara.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/420-floreriaguadalajara/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 420-floreriaguadalajara`) |

## En una línea

El clon es una tienda WooCommerce completa (carrito, botones "Añadir al carrito", slider con placeholders, feed de Instagram vacío) que no funciona fuera de WordPress. El rediseño es una sola página estática que muestra la marca, los arreglos y el selector "¿Para quién es?" con las propias fotos del clon y los textos del original, y manda a la persona a pedir directamente por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| El slider del hero (Revolution Slider) mostraba un placeholder en lugar de la foto real; su JS no funciona fuera de WordPress | El hero usa directamente la foto de rosas rojas del clon, sin slider |
| 2 imágenes rotas (miniaturas de producto con URL 380x380 que no se descargaron en el clon) | 0 imágenes rotas; se usan 13 fotos propias convertidas a .webp |
| 14 errores de consola (WooCommerce fragments, Revolution Slider JS, feed de Instagram) | 0 errores de consola |
| 1 recurso fallido (wc-ajax get_refreshed_fragments, endpoint de WooCommerce) | 0 recursos fallidos |
| El feed de Instagram del pie mostraba 4 placeholders vacíos | Eliminado; el enlace a Instagram queda en la galería y en el pie |
| Carrito de WooCommerce, botones "Añadir al carrito", paginación de 55 productos | Eliminados; la conversión va por WhatsApp |
| Altura móvil: 31,739 px (tienda completa con productos paginados) | 6,586 px en móvil |

## Qué se cambió (mismo contenido, otra forma)

- Estructura: de una tienda WooCommerce multipágina a una sola página de presentación con WhatsApp como único canal de pedido.
- El menú del sitio original (Inicio, Nosotros, Testimonios, Productos → subcategorías, Servicios, Blog, Contacto) se condensa en una página fluida.
- La galería de 55 productos de WooCommerce (con carrito y paginación) se reemplaza por un mosaico de 6 fotos reales representativas.
- Las fotos del clon (`wp-content/uploads/`) se convirtieron a .webp en `assets/web/` con `rediseno/fotos-web.mjs` (5.05 MB → 0.94 MB).
- Tipografía: se cambia la del tema WordPress por Cormorant Garamond (6/latin) + Lato (400 y 700/latin), ambas de @fontsource.
- Paleta: verde oscuro (#1a2e1a) como color de marca, rosa (#c85a7a) como acento y crema (#fdfaf6) como fondo.

## Qué se agregó (no existía en el original)

- **"¿Para quién es?"**: selector de 6 ocasiones (14 de Febrero, 10 de Mayo, Cumpleaños, Boda, Solo porque sí, Algo extra especial). Cada una muestra la foto del arreglo más representativo de esa categoría (del clon) y un botón de WhatsApp con mensaje prellenado diferente. El microcopy de los mensajes es nuevo.
- **Barra fija en celular** con WhatsApp, Llamar y Cómo llegar (no existe en el original).
- **Botones de WhatsApp con mensajes prellenados** en hero, en el selector de ocasión, en la sección de la florista y en la sección de entrega.
- **Sección de entrega** con las 4 zonas (Guadalajara, Zapopan, Tonalá, Tlaquepaque), el aviso de 1:00 pm y el aviso del negocio único, tomados del texto del sitio original.
- **JSON-LD de tipo `Florist`** (schema.org/Florist) con nombre, descripción, teléfono, dirección, horarios y redes sociales.
- **Open Graph** completo (título, descripción, imagen, locale).
- **Favicon** generado desde el logo.
- Microcopy nuevo: tagline "Flores que llegan al corazón", etiqueta "Paulina Fernández · más de 20 años de experiencia" en el hero, botones de ocasión, texto "Síguenos para ver los arreglos más recientes".

## Qué se quitó o no se usó

- El carrito de WooCommerce, los botones "Añadir al carrito", la paginación y los filtros de producto.
- El slider de Revolution Slider del hero (requiere WordPress y su plugin).
- El feed de Instagram del pie (plugin de Instagram Feed sin sesión).
- El traductor de idioma (plugin GTranslate con banderas) — se quita porque el negocio es local y la página va en español.
- Las páginas individuales de producto, de blog, de testimonios y de servicios — se enlazan al sitio original desde el pie si alguien las necesita.
- Las imágenes de `wp-content/plugins/` y `wp-content/themes/` (iconos de plugins, placeholders de slider).
- La imagen de "Formas de Pago" (tarjetas y logos de pago) — el rediseño no habla de precios ni de carrito.

## Qué se conserva al pie de la letra

- Nombre del negocio: **Florería Guadalajara**.
- Teléfono: **3322106699** (el único publicado en el sitio).
- Horarios: Lun–Vie 8:30 am – 6:30 pm, Sábado 9:00 am – 1:00 pm, Domingo cerrado.
- Texto de la florista: "Nosotros tenemos el detalle más bonito y delicado creado por el Universo que son las FLORES…" (de la página Nosotros del clon).
- Texto de Paulina Fernández: "Sus diseños están inspirados en su tiempo viviendo en la vibrante Ciudad de Nueva York…" (de la página Nosotros).
- Aviso del sitio: "Florería Guadalajara NO tiene sucursales. Único teléfono para pedidos e información: 3322106699."
- Zonas de entrega: Guadalajara, Zapopan, Tonalá y Tlaquepaque.
- Aviso de tiempo de entrega: "Solicita tu pedido antes de la 1:00 pm."
- Redes: instagram.com/floreriaguadalajara, facebook.com/floreriagdl.
- Fotos: todas las imágenes del rediseño son del clon (propias del negocio).

## Pendiente de confirmar con el cliente

- **WhatsApp**: se usa el número de teléfono 3322106699 como número de WhatsApp (`wa.me/523322106699`). El sitio original no publica un enlace de WhatsApp, solo el teléfono. Confirmar si ese número también funciona para WhatsApp.
- **Google Maps**: el negocio es de entrega a domicilio y no publica dirección física. Se usa el enlace de búsqueda `https://www.google.com/maps/search/Florería+Guadalajara+Jalisco`. Si tienen un establecimiento con registro en Google, reemplazar por el enlace directo.
- **Twitter/X**: el clon tiene enlace a `twitter.com/floreriagdl` pero no se incluye en el rediseño porque las redes principales del negocio son Instagram y Facebook. Confirmar si quieren que aparezca.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` (generadas por `rediseno/fotos-web.mjs`)
- Mosaico de imágenes disponibles: `rediseno/IMAGENES.txt`
