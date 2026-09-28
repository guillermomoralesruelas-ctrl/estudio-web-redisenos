# Discover Vallarta: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.discoverpvr.com/ |
| Método | **1.2**: fotos descargadas del sitio en vivo → `assets/originales/` → WebP → `assets/web/` |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/315-discovervallarta/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El negocio, los datos de contacto, los seis tours principales y los precios de los add-ons de traslado son idénticos al original. Lo que cambió: sitio IONOS desactualizado → landing page de una sola pantalla con tours expandibles, sección de traslados con precios reales y todos los CTAs dirigidos a WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Imágenes de tours en subpáginas no descargadas por el clonador | 9 fotos WebP propias del sitio descargadas en `assets/web/` |
| Solo los 3 JPGs de la home estaban en el clon; 6 páginas de tours sin fotos | Fotos de tours descargadas directamente de la CDN del sitio live |
| IONOS builder `login` y `edit page` expuestos en el footer del clon | Eliminados |

## Qué se cambió (mismo contenido, otra forma)

- Los 9 tours del sitio multipágina se condensaron en 6 tarjetas expandibles en la misma pantalla (PV City, Snorkeling, Sayulita, Cerro del Mono, Colomitos, Rainforest) — los tours de Tequila, Riviera Nayarit y San Sebastian se mencionan como disponibles via WhatsApp.
- Los add-ons de traslado (Shopping Stop $39, Wine $45, Flowers $55, Tequila $60 USD) pasaron de un formulario CAPTCHA a una lista visual clara con CTA de WhatsApp.
- La sección "Write a review on TripAdvisor" se convirtió en un argumento de confianza sin inventar reseñas.

## Qué se agregó (no existía en el original)

- Navbar fija con CTA de WhatsApp siempre visible.
- Barra móvil fija en la parte inferior ("See Tours" + "Book via WhatsApp") — elemento distintivo del diseño.
- Sección dedicada para Airport Transfers con los 4 add-ons y sus precios reales.
- JSON-LD `TravelAgency` con dirección, horario y teléfono.
- Open Graph completo para compartir por WhatsApp y redes.
- Favicon SVG inline (palmera) para evitar 404 en el navegador.
- `prefers-reduced-motion` y contraste AA.

## Qué se quitó o no se usó

- Formularios CAPTCHA de reserva (IONOS builder) — reemplazados por WhatsApp directo.
- Sección de Adventure Tours separada (Marietas, Yelapa, ATV, Zip Lines, Hidden Beach) — mencionados como disponibles vía WhatsApp.
- Sección de Travel Agency / Grupos y Eventos — no se incluyó por falta de detalles en el scrape.
- Enlace a Real Estate — fuera del alcance de la landing de tours.
- Login/Edit page de IONOS expuestos en el footer.
- YouTube video embed (bxWFmTCf4ag) — no incluido para simplificar y agilizar carga.

## Qué se conserva al pie de la letra

- Nombre: Discover Vallarta (también Discover Vallarta S.A. de C.V.)
- Teléfono / WhatsApp: +52 (322) 373 5793
- Email: reserve@discover-mx.com
- Dirección: Vicente Guerrero 278, Puerto Vallarta, Jalisco 48317
- Horario: Mon–Fri 9:00am–6:00pm, Sat–Sun 9:00am–2:00pm
- Precios de add-ons de traslado: $39/$45/$55/$60 USD (del formulario original)
- Nombres y descripciones de los seis tours principales (texto adaptado, no inventado)

## Pendiente de confirmar con el cliente

- ¿El teléfono +52 (322) 373 5793 sigue siendo el WhatsApp activo?
- Precios actualizados de cada tour (el original no los publica en el sitio).
- Si quieren incluir los Adventure Tours (ATV, Marietas, etc.) en la landing.
- Si hay fotos propias de alta calidad disponibles para los tours que no tenían fotos en el clon.
- ¿El correo reserve@discover-mx.com sigue activo? También había info@discoverPVR.com.
