# El Rey Bar & Supper Club: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://elreybarpv.com/ |
| Método | **1.2**: fotos descargadas del CDN del sitio en vivo (img1.wsimg.com) |
| Fecha | 2026-09-29 |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/365-elreybar/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `referencias/capturas-2026-09-29/` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

Mismo negocio, datos y textos; diseño oscuro speakeasy con tabs Comer/Beber en lugar de la plantilla blanca de GoDaddy.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Sitio hecho en GoDaddy Website Builder — imágenes solo accesibles desde CDN externo (img1.wsimg.com); el clon no las descargó | Fotos descargadas directamente del CDN y convertidas a .webp (fotos-web.mjs) |
| El clon registró 3 recursos fallidos (GoDaddy scripts) | El rediseño no carga ningún script de GoDaddy |
| Correo de contacto "filler@godaddy.com" — es texto de plantilla, no un email real | Se eliminó del rediseño |
| Sin número de teléfono ni WhatsApp publicados en el sitio | Se usa +52 322 115 2881 (hallado en Google Maps Business) — **pendiente de confirmación** |

## Qué se cambió (mismo contenido, otra forma)

- Plantilla blanca genérica → diseño oscuro speakeasy (zinc-950 + amber-400)
- Fuente GoDaddy por defecto → Playfair Display (headings) + Inter (body)
- Secciones estáticas de food y cocktails → tabs interactivas "¿Qué te trae al Rey?" (Comer / Beber) con CTA de WhatsApp contextual
- Menús solo como PDF → textos descriptivos de los platillos fotografiados

## Qué se agregó (no existía en el original)

- Elemento memorable: tabs Comer / Beber con CTA de WhatsApp específico por tab
- Barra fija en móvil con WhatsApp
- JSON-LD FoodEstablishment con datos reales
- title y description reales con ciudad y servicios
- prefers-reduced-motion
- Enlace a Google Maps en header y en sección de ubicación

## Qué se quitó o no se usó

- Links al sistema de reserva de GoDaddy (/book-now, /m/bookings) — plataforma de terceros
- Newsletter con 10% de descuento — no se puede verificar si sigue vigente
- Enlace a takeawaypv.com — se omitió (servicio de pedidos externo, no se puede confirmar estado)

## Qué se conserva al pie de la letra

- Nombre: "El Rey Bar & Supper Club"
- Dirección: Lisboa 162A, Versalles, 48310 Puerto Vallarta, Jal., México
- Horarios: Lun cerrado / Mar–Sáb 16:00–23:00 / Dom 11:00–23:00
- Nota de brunch y day pass domingos (textual del sitio original)
- Nombres de platillos: Smoked Pork Belly Burnt Ends, Pulled Pork Sandwiches, Chicken Wings, Pulled Pork Sliders
- Enlace a Google Maps: https://maps.app.goo.gl/vGQMHi7sQauLi5Sd9
- Descripción de la selección de agave como la más grande de PV (tomada del sitio original)

## Pendiente de confirmar con el cliente

- Número +52 322 115 2881 (hallado en Google Maps, no publicado en el sitio)
- Si takeawaypv.com/elreybbq sigue activo y quieren enlazarlo
- Carta completa con precios (actualmente solo disponible como PDF sin texto indexable)
