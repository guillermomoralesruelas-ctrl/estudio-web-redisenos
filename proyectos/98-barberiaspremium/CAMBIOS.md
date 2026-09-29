# Barberías Premium: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://barberiaspremium.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/98-barberiaspremium/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 98-barberiaspremium`) |

## En una línea

La misma barbería, sus tres sucursales, sus textos, su plataforma de reservas y su WhatsApp, en una sola página más corta: las tres sucursales con foto, dirección y horario juntas, sus cortes reales y una tarjeta de sellos que calcula cuándo te toca el corte gratis.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Es una aplicación de Next.js: el clon depende de sus scripts y no se comporta como el original (ver `qa/reporte-rediseno.json` → `antes`) | Página nueva sin scripts de terceros: 0 desbordes, 0 imágenes rotas y 0 recursos fallidos |
| La información de cada sucursal (dirección y horario) está en una página aparte por sucursal | Las tres sucursales juntas, con foto, dirección, horario, reserva y Google Maps |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, análisis facial, las tres sucursales y un resumen de franquicias en una sola página.
- La oferta de primera visita (Premium Service) como tarjeta junto a la foto de Plaza Real.
- Las funciones de la app en una lista sin numeración.

## Qué se agregó (no existía en el original)

- **"¿Cada cuánto te cortas?"** (elemento memorable): eliges cada cuántas semanas vienes (2 a 6) y una tarjeta de sellos muestra seis sellos con la fecha aproximada de cada visita a partir de hoy y el séptimo, el gratis, con su fecha; sale de su regla "seis cortes pagados elegibles te dan un corte gratis".
- Textos nuestros: el párrafo de la portada (armado con sus textos de inicio y Premium ID), "¿Cada cuánto te cortas?" y su explicación, "Seis visitas pagadas, una cada N semanas. La séptima va por la casa.", "Cortes hechos en la silla", "Tres sucursales en Ciudad del Carmen", "Premium ID y la app: todo lo tuyo en tu teléfono" y los textos de los botones.
- WhatsApp con mensaje prellenado para agendar (su sitio solo lo usa para preguntar por la app de Android); barra fija en el celular (Reservar, WhatsApp, Cómo llegar).
- JSON-LD de `Organization` con sus tres `HairSalon` (dirección y horario); Open Graph; `alt` en todas las fotos.

## Qué se quitó o no se usó

- La prueba de selfie con IA ("Premium Look"): queda como enlace a su sitio.
- El retrato y los tres "looks de ejemplo" del mismo modelo (su sitio los marca como ilustrativos), la foto del cine, las piezas de la app y los carteles ("Tu opinión sí se revisa", "Tu barbero ya sabe cómo te gusta verte").
- La foto de la máquina de cortar de la portada (no se pudo confirmar que sea propia).
- Los detalles de Premium CRM y la calculadora de la página de franquicias: se enlaza a su página.
- Los videos de Julián Escobar (enlazados en YouTube desde su sitio).

## Qué se conserva al pie de la letra

- "Desde 2006"; Premium Service $199, 30 minutos, con corte de cabello, mascarilla negra, asesoría y registro en Premium ID; barba $139, 25 minutos.
- Las tres sucursales con sus direcciones y el horario de lunes a sábado de 11:00 a 20:30 y domingo de 11:00 a 18:00.
- Análisis facial avanzado: 5 fotos, 4 propuestas, 1 reporte, qué incluye y la nota "asesoría estética, no un diagnóstico médico".
- Las funciones de la app y la regla de sellos; franquicia de 5 sillas, 3 años, 5% de regalías y $300,000 MXN aproximados.
- Teléfono 938 175 0049, contacto@barberiaspremium.com, su plataforma de reservas, la App Store, Facebook e Instagram.

## Pendiente de confirmar con el cliente

- **WhatsApp para citas:** su sitio solo usa el 938 175 0049 por WhatsApp para preguntar por la app de Android; el rediseño lo usa para agendar.
- **Ciudad:** la base del estudio lo tenía en Oaxaca de Juárez; su sitio dice Ciudad del Carmen, Campeche, en todas las páginas.
- Precios de los cortes y servicios de barba (solo aparecen en su plataforma de reservas).
- Qué cortes son "elegibles" para los sellos.
- Si la foto de la máquina de cortar de su portada es propia.

## Dónde está cada cosa

- Textos, sucursales, primera visita, análisis, app y franquicia: `rediseno/src/data/content.ts`
- Diseño, secciones y la tarjeta de sellos: `rediseno/src/App.tsx`
- Colores, fuentes y los sellos: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/assets/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
