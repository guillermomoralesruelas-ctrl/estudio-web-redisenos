# Fulton Hotel: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://fultonhotel.mx/ |
| Método | **1.2**: fotos descargadas del sitio en vivo → `assets/originales/` → WebP → `assets/web/` |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/435-fultonhotel/rediseno/dist/index.html |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 435-fultonhotel`) |

## En una línea

Los datos del negocio son los mismos; lo que cambió es la estructura: de un sitio multipágina PHP (5 páginas) a una landing de una sola página con secciones de habitaciones, servicios, ubicación y contacto, con CTA de reserva (Cloudbeds) y WhatsApp en cada sección.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 13 imágenes rotas (rutas PHP relativas a `/images/`) | 15 WebP descargados del sitio en vivo, sin rotas |
| 29 recursos fallidos (CSS, iconos, scripts PHP) | Vite empaqueta todo; sin dependencias externas |
| Sin CTA de reservas visible desde el inicio | Botón "Ver disponibilidad" en navbar, hero y contacto |
| Sin botón de WhatsApp en ninguna página | `btn-wa` en cada habitación, servicio y sección de contacto |
| Sin barra móvil fija | Barra inferior con "Reservar" y "WhatsApp" |
| 5 páginas separadas sin coherencia visual | Una landing fluida con scroll |
| Galería de 20 fotos sin contexto | Fotos integradas en las secciones (habitaciones, servicios, ubicación) |

## Qué se cambió (mismo contenido, otra forma)

- Sitio multipágina PHP → landing React + Vite single-page
- Secciones separadas (habitaciones.php, ubicacion.php, galeria.php) → scroll continuo
- Fotos en JPG originales → WebP optimizadas (~60-80% menos peso)
- Motor de reservas Cloudbeds: mismo enlace, presentado con CTA más visible
- Colores adaptados de la marca: fondo arena (#f8f7f4), oscuro corporativo (#1a1a2e), dorado (#b8965a)
- Fuentes: Playfair Display (headings) + Source Sans 3 (cuerpo) — mismo tono ejecutivo de la marca

## Qué se agregó (no existía en el original)

- JSON-LD de tipo `Hotel` con schema.org
- Barra de navegación fija con enlace a Cloudbeds en desktop
- Barra móvil fija inferior con "Reservar" y "WhatsApp"
- Accordions en habitaciones y servicios para ver detalles sin salir de la sección
- Mensajes preformateados en cada enlace de WhatsApp por habitación/servicio
- Sección de ubicación con 4 puntos clave (zona financiera, aeropuerto, hospitales, servicios) + 3 fotos
- Open Graph tags para redes sociales
- Favicon emoji 🏨 como data URI (evita 404 en desktop)

## Qué se quitó o no se usó

- Galería de fotos independiente (galeria.php — 20 imágenes): integrada en secciones; galería completa sería mejora futura
- Iconos de amenidades (icon-01.png … icon-08.png): reemplazados por emojis en la sección de ubicación
- Logo PNG del sitio: no incluido (landing web no lo necesita visualmente; la identidad va en el navbar con texto)

## Qué se conserva al pie de la letra

- Nombre: Fulton Hotel | Business Luxury Hotel
- Dirección: Av. de las Américas 1450, Country Club, C.P. 44610 Guadalajara, Jalisco
- Teléfono: +52 1 33 3260 9376
- Email: reservas@fultonhotel.mx
- WhatsApp: wa.me/+5213340728342
- Motor de reservas: https://hotels.cloudbeds.com/reservation/HCvcDe
- Facebook e Instagram del negocio
- 4 tipos de habitación con sus nombres exactos: Comfort, Doble Deluxe, Doble Deluxe con Balcón, Premium
- Sala de Juntas: capacidad 60 personas, pantallas 60", impresoras, WiFi, catering
- Starbucks: lunes a domingo 6:00 AM – 10:00 PM
- Rooftop: restaurante en el último piso
- Aeropuerto a 27 km / ~40 minutos

## Pendiente de confirmar con el cliente

- Precios por noche de cada tipo de habitación (no publicados en el sitio original)
- Horario de check-in/check-out (asumido 15:00 / 12:00 en JSON-LD, no confirmado en el sitio)
- Si el Rooftop tiene horario específico o es solo para huéspedes

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: `assets/web/` (método 1.2) — referenciadas vía `publicDir: '../assets/web'` en `vite.config.ts`
