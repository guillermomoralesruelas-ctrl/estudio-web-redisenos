# Holbox Travel: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.holboxtravel.com.mx/ |
| Método | **1.2**: fotos descargadas del sitio en vivo → `assets/originales/` → WebP → `assets/web/` |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/501-holboxtravel/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El negocio, los datos de contacto, los cuatro tours y las reseñas son iguales. Lo que cambió: se eliminó la estructura WordPress multipágina y se convirtió en una landing de página única con cards de tour expandibles y todos los CTA dirigidos a WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Desborde horizontal de >8 800 px (imágenes anchas sin `max-width`) | 0 px de desborde |
| Dos H1 en la página de inicio | Un solo H1: "Discover Holbox Island" |
| Script de Cloudflare email-decode.min.js devuelve 404 | Eliminado; email visible en texto plano con `mailto:` |
| Widget de Elfsight (reseñas de Google) carga JS externo lento | Tres reseñas estáticas con texto real de Google Reviews |
| Pixel de WordPress.com en cada página | Eliminado |

## Qué se cambió (mismo contenido, otra forma)

- Los cuatro tours (whale sharks, three islands, bioluminescence, transportation) pasaron de ser páginas separadas a tarjetas expandibles en la misma pantalla.
- Las reseñas de Google se adaptaron como tarjetas estáticas (Maxime Carette, Pilar Chicatti, Aditya Parikh — nombres reales del widget Elfsight en el original).
- El texto de "Why Book with Us" se consolidó en cuatro puntos directos (especialistas en tiburón ballena, agencia local, viajeros satisfechos, soporte bilingüe).
- La sección de contacto conserva dirección, teléfono, email, Facebook e Instagram del original.

## Qué se agregó (no existía en el original)

- Barra de navegación fija con CTA de WhatsApp siempre visible.
- Barra móvil fija en la parte inferior ("See Tours" + "Book via WhatsApp") — elemento distintivo del diseño.
- JSON-LD `TravelAgency` para búsqueda semántica.
- Open Graph completo (og:title, og:description, og:image) para compartir en redes.
- `prefers-reduced-motion` y contraste AA en toda la página.
- Favicon SVG inline (ola de mar) para evitar 404 en el navegador.

## Qué se quitó o no se usó

- Sección de partners/afiliados (±15 logos de otras agencias de turismo de otros destinos).
- Menú multipágina con submenús en francés (`/fr/transportation/`).
- Carrusel de imágenes en el hero.
- Sección de certificaciones/membresías (VFT, Whale Shark Mexico, etc.) — sin datos verificables de vigencia.
- Google Maps embed — no se encontró iframe en el clon original; la dirección se muestra en texto con foto aérea de la isla.

## Qué se conserva al pie de la letra

- Nombre: Holbox Travel
- Teléfono / WhatsApp: +52 984 184 0323
- Email: ventas@holboxtravel.com
- Dirección: Isla Holbox, Quintana Roo, México
- Facebook: facebook.com/holboxtravelagencia
- Instagram: instagram.com/holboxtravelsocial/
- Nombres de los cuatro tours con sus descripciones sin inventar precios ni garantías
- Nombres reales de los autores de las reseñas (tomados del widget de Google Reviews del original)

## Pendiente de confirmar con el cliente

- Precios actualizados de cada tour.
- Si el tour de tiburón ballena sigue activo en 2026 (temporada junio–septiembre).
- WhatsApp de contacto actual (el número del sitio es de 2019+; confirmar que sigue activo).
- Si quieren agregar Google Maps embed en la sección de contacto.
- Logo oficial en PNG/SVG para la navbar.
