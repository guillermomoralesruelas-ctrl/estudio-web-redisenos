# Kitesurf Mexico: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.kitesurfmexico.com/ |
| Método | **1.2**: rediseño con fotos reales del sitio live descargadas a `assets/originales/` |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/613-kitesurfmexico/rediseno/dist/index.html |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (0 problemas automáticos) |

## En una línea

Los datos de contacto y los textos clave del negocio son los mismos; lo que cambió es que el rediseño reemplaza las imágenes generadas con IA por las 3 fotos reales de la escuela, y simplifica la navegación para que el visitante llegue más rápido a reservar.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 6 imágenes rotas y 13–16 recursos con 404 (WordPress con CDN externo) | Fotos descargadas del sitio live y convertidas a .webp local |
| La foto hero es una imagen generada con ChatGPT (archivo nombrado `ChatGPT-Image-20-may-2026...png`) | Reemplazada por foto real de clase de kiteboarding (2026/07, sin C2PA) |
| Navegación de 8+ ítems más login/carrito de WooCommerce | Simplificada a 4 secciones + botón de reserva |

## Qué se cambió (mismo contenido, otra forma)

- El sitio original está en inglés; el rediseño es en español (para presentar al dueño mexicano)
- Las 3 tarjetas de servicio (kiteboarding, wing foil, escuela) con fotos reales propias
- Los 3 testimonios reales de clientes (Alana M., Grahama L., Jee-Hoon Y.) traducidos al español
- Ventajas presentadas como grid de 4 tarjetas con íconos
- Mapa de Isla Blanca con embed de Google Maps

## Qué se agregó (no existía en el original)

- Barra fija de WhatsApp en móvil para reservar clase (+52 984 807 2567)
- JSON-LD de tipo `SportsActivityLocation` con datos del negocio
- Open Graph con imagen de acción real
- Favicon inline vacío para evitar 404 en consola

## Qué se quitó o no se usó

- Sistema de login y carrito de WooCommerce
- Tienda online de kits/equipo
- Secciones de Playa del Carmen y El Cuyo (no hay fotos disponibles para esas sedes)
- Menú de 8 ítems (simplificado a lo esencial)
- Imagen hero generada con ChatGPT (2026/05)

## Qué se conserva al pie de la letra

- Nombre: Kitesurf Mexico (sin tilde en el nombre comercial)
- Teléfono/WhatsApp: +52 984 807 2567
- Instagram: @kitesurf_mexico
- Ubicación: Isla Blanca, Cancún, Quintana Roo
- Descripción del negocio (15+ años, "Experience Premium", laguna plana, jet ski)
- Testimonios de clientes reales con sus nombres y fechas

## Pendiente de confirmar con el cliente

- Precios de los cursos (no están en el home del sitio; están en /kiteboarding-courses-and-prices/)
- Si quieren el sitio en inglés o bilingüe (el sitio original es completamente en inglés)
- Email de contacto (no aparece en el sitio original)
- Si hay instructores con nombres para presentar

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos originales: `assets/originales/` (3 imágenes del sitio live 2026/07)
- Fotos optimizadas (.webp): `assets/web/` (generadas por `rediseno/fotos-web.mjs`)
- Vite publicDir apunta a `../assets/web` (método 1.2)
