# Casa Pitic: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://casapitic.mx/ |
| Método | **1.2 en la nube**: el clon no traía fotos; se bajaron de su almacenamiento en Supabase a `assets/originales/` |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/176-casapitic/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 176-casapitic`) |

## En una línea

La misma residencia ejecutiva de Colonia Pitic, con sus dos suites, tarifas, amenidades, reglas, barrio y eventos, en una sola página donde se elige planta y noches y se ve el precio.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Las fotos viven en Supabase: 3 imágenes rotas y 7 recursos fallidos | Copias .webp locales: 0 rotas, 0 fallidos |

## Qué se cambió (mismo contenido, otra forma)

- Las tarjetas de suites y la tabla "¿Cuál suite reservar?" se volvieron "¿Arriba o abajo?".
- Las amenidades y las "Reglas de la Casa" de cada suite se resumieron en "Para trabajar desde aquí".
- "El Barrio" quedó en la tabla de distancias en auto; los eventos, en dos tarjetas.

## Qué se agregó (no existía en el original)

- **"¿Arriba o abajo?"** (elemento memorable): corte de la casa con una planta por suite; muestra fotos, diferencias y precio según 14, 21 o 30 noches. El WhatsApp lleva la suite y las noches.
- Textos nuestros: el H1, las entradas de las secciones y los botones.
- Barra fija en el celular (WhatsApp, Suites, Cómo llegar), enlace a Google Maps, JSON-LD `LodgingBusiness` y Open Graph.

## Qué se quitó o no se usó

- Las siete guías largas, las páginas de cada evento, "Sobre nosotros", FAQ y la versión en inglés (siguen en su sitio).
- La guía de 16 restaurantes y servicios del barrio (se dejaron las distancias clave).
- El cotizador con calendario (su sitio dice "No podemos mostrar disponibilidad en este momento").

## Pendiente de confirmar con el cliente

- **Fotos:** cuatro de sus seis fotos (patio, sala de Suite Pitic, terraza y entrada de Suite Kino) traen credenciales C2PA de "Watermark Remover" (quitaron una marca de agua con IA). Confirmar que las fotos son suyas y que pueden usarlas.
- Tarifas para estancias de menos de 14 noches.
- Teléfono para llamadas (solo publican WhatsApp).
