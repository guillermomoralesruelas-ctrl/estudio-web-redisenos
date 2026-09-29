# Hotel Maculís: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://hotelmaculis.mx/ |
| Método | **1.2 en la nube**: el clon (GoDaddy) no traía fotos; las reales se bajaron de su CDN a `assets/originales/` |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/533-hotelmaculis/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 533-hotelmaculis`) |

## En una línea

El mismo hotel boutique de San Román, con su alberca, su jardín, sus habitaciones y sus detalles para ocasiones especiales, en una página donde el huésped arma su escapada y manda el mensaje listo por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Fotos y scripts en el CDN de GoDaddy: 26 imágenes rotas y 14 recursos fallidos | Copias .webp locales: 0 rotas, 0 fallidos |
| Títulos repetidos por el carrusel ("Suite loft dos niveles" tres veces, "Refrescante zona de piscina" en tres tarjetas) | Cada sección con su propio título |

## Qué se cambió (mismo contenido, otra forma)

- "Personaliza tu experiencia" y las cuatro habitaciones se volvieron "Arma tu escapada".
- "Nuestras instalaciones" quedó en tres tarjetas (alberca, pet friendly, casa colonial).
- Se conserva el mapa, ahora con el embed sin clave y las mismas coordenadas.

## Qué se agregó (no existía en el original)

- **"Arma tu escapada"** (elemento memorable): ocasión, habitación y mascota; el mensaje de WhatsApp se escribe en una burbuja.
- Textos nuestros: el H1, la entrada de la portada y de las secciones.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar), JSON-LD `Hotel` y Open Graph.

## Qué se quitó o no se usó

- La página "Propiedad en venta" (el hotel se anuncia en venta por $15,000,000 MXN): la propuesta es para huéspedes.
- La "Tienda" (página vacía).
- Los carteles "Curiosidades de Campeche" y fotos de viajes o mascotas que no son del hotel.

## Pendiente de confirmar con el cliente

- Tarifas por tipo de habitación.
- Si la venta del hotel sigue en pie (cambia qué propuesta tiene sentido).
- Qué incluye cada detalle especial (decoración, amenidades) y si tiene costo.
