# Cumbres de Mita: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.cumbresdemita.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/280-cumbresdemita/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 280-cumbresdemita`) |

## En una línea

El mismo desarrollo de CAM Grupo en Corral del Risco (lotes, Kumo Living, Nahya y amenidades) en una sola página, con los 12 lotes que quedan encendidos entre los 157 y la ficha de cada uno lista para pedirse por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Tres imágenes .avif de la portada (`hero-bg`, `desarrollo-aerea`, `nahya-render`) no cargan en el clon (ver `qa/reporte-rediseno.json` → `antes`) | Página nueva con copias .webp de las fotos que sí se bajaron: 0 desbordes, 0 imágenes rotas y 0 recursos fallidos |
| En /lotes los contadores de especificaciones salen en 0 ("0 Lotes disponibles", "$0 MXN/m² precio base", "0 m² superficie mínima") | Los números salen de su propia tabla de lotes: 12 disponibles de 157, desde $9,500/m², desde 160 m² |
| La ciudad en la base era Sayulita | Es Punta de Mita (Corral del Risco), como dice su sitio |

## Qué se cambió (mismo contenido, otra forma)

- Lotes, Kumo Living, Nahya, amenidades y "El ecosistema" de Punta de Mita en una sola página en vez de cinco.
- La tabla de 12 lotes se volvió una ficha que cambia al tocar cada lote, con filtro Compacto / Mediano / Amplio.
- Amenidades con su estado ("Construida" / "En planeación") junto al nombre.

## Qué se agregó (no existía en el original)

- **"Quedan 12 de 157"** (elemento memorable): una cuadrícula de 157 cuadritos, 145 apagados (vendidos) y 12 encendidos con su número; al tocar uno se abre su ficha (manzana, calle, m², frente × fondo, lados y precio) y el WhatsApp pide información de ese lote. Se aclara que la cuadrícula no es el plano.
- Nahya como "8 de 8": ocho casillas llenas, sin fecha de entrega (ver pendientes).
- Textos nuestros: la entrada del H1, la de la cuadrícula, "Amenidades que se usan", "600 hectáreas. Un plan. Desde 1994." (con sus datos del ecosistema) y los botones.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar), enlace a Google Maps por dirección, JSON-LD `RealEstateAgent` y Open Graph.

## Qué se quitó o no se usó

- "Los precios de preventa son los mejores que tendrá este desarrollo" (promesa).
- Los contadores en 0 de /lotes.
- La fecha de entrega de Nahya (su sitio dice 2025 y a la vez "Mayo 2026 — construcción avanzada").
- La foto de golf y la del gym: el gym está "En planeación" y se muestra como tal, sin foto; en Kumo y en la ficha de lote se aclara "(en planeación)".
- Blog, plusvalía y selector ES/EN (no están en la captura).

## Qué se conserva al pie de la letra

- Los 12 lotes con manzana, tipo, calle, superficie, medidas, lados y precio; $9,500/m²; 145 vendidos en preventa.
- Kumo Living: 27 departamentos, entrega 2027, tipologías 1R desde $2.9M, 2R Compacto desde $4.2M y 2R Premium desde $6.8M, y su lista de amenidades.
- Nahya: 2 torres, 8 unidades de 100 m², 100% vendido.
- Amenidades y su estado; datos del ecosistema (12 playas, 50+ rutas, 2 campos Jack Nicklaus, 300 a 500 ballenas, master plan desde 1994).
- Contacto: WhatsApp y tel. (311) 202 8186, ventas@c21camgrupo.com, Carretera Federal 200, Corral del Risco; "Desarrollado por CAM Grupo, comercializado por Century 21 CAM Grupo"; su aviso de precios indicativos y renders.

## Pendiente de confirmar con el cliente

- **Entrega de Nahya:** 2025 o posterior (el avance de mayo de 2026 dice "entrega programada para 2025").
- Si los 12 lotes siguen disponibles y a esos precios.
- Fecha del gym + studio.
- Plano real de lotificación (para reemplazar la cuadrícula ilustrativa por el plano).
- Respuestas de su FAQ de lotes (en la lectura solo aparecen las preguntas).

## Dónde está cada cosa

- Lotes, tipologías, amenidades y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y "Quedan 12 de 157": `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
