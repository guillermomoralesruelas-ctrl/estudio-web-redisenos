# Crisantemo Fotografía: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.crisantemo.com.mx/ (Google Sites) |
| Método | **1.2 en la nube** (lote 9): el clon de Google Sites no trae las fotos; se bajaron las 11 fotos de su sitio y su logotipo a `assets/originales/` |
| Fecha | 2026-10-10 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/269-crisantemofotografia/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El fotógrafo Luis Sánchez en una sola página ciruela y rosa polvo: su galería, las tres coberturas de sesión con el precio de fin de semana, los dos paquetes integrales, los extras y un "¿Qué tan grande en tu pared?" que dibuja cada ampliación a escala sobre un sillón.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Google Sites no trae las imágenes en el HTML guardado; el inicio queda en blanco | Las 11 fotos (inicio, sesiones y paquetes) y el logotipo se bajaron de `lh7-us.googleusercontent.com` a `assets/originales/` y `rediseno/fotos-web.mjs` hace las copias .webp |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, sesiones, paquetes integrales, "Qué y cómo" y contacto se juntan en una página.
- Las respuestas largas de "Qué y cómo" se resumen en notas cortas debajo de cada sección (revelado, fotos mínimas, pagos, cómo separar fecha).
- La lista de extras se ordena en dos columnas con su precio; las ampliaciones pasan al bloque "¿Qué tan grande en tu pared?".
- El logotipo (un crisantemo de línea negra) se pinta en rosa para los fondos oscuros.

## Qué se agregó (no existía en el original)

- **"¿Qué tan grande en tu pared?"** (elemento memorable): los cinco tamaños de ampliación (8×10″ a 30×40″) dibujados a escala con una de sus fotos dentro de un marco, colgados sobre un sillón de referencia de unos 2 m; al elegir un tamaño cambian el dibujo, el precio y los centímetros, y el botón arma el WhatsApp.
- Botón "Lunes a jueves / Fin de semana" que suma los $350 de fin de semana a las tres coberturas.
- Textos del estudio: el titular "Retratos y eventos que se quedan en la pared", "Locaciones, luz y vestido", "Tres coberturas en locación", "Platiquemos tu sesión", la explicación del bloque de la pared y los textos alternativos.
- Barra fija en el celular (llamar, WhatsApp, punto de reunión), JSON-LD `ProfessionalService`, title, description, ícono e imagen para compartir.

## Qué se quitó o no se usó

- Nada del contenido. Las erratas se corrigen al citar ("Krispy Cream" → Krispy Kreme, "Amplia nción", "$,4500.00" → $4,500).

## Qué se conserva al pie de la letra

- Nombre, fotógrafo, teléfono 81 8011 7764, correo, redes, punto de reunión (Krispy Kreme de Walmart Las Torres, rumbo a la salida a carretera Nacional), precios de coberturas, paquetes, ampliaciones y extras, y sus condiciones.

## Pendiente de confirmar con el cliente

- **WhatsApp**: el sitio da el número 81 8011 7764 sin decir si tiene WhatsApp; los botones lo usan hasta confirmarlo.
- **Duración de la cobertura Intermedia**: la página de precios dice 1 hora; "Qué y cómo" dice 40 minutos (y entrega en USB para la Extendida, que en precios es por galería en la nube). Se usa la página de precios.
- Las fotos son de quinceañeras y retratos de su portafolio; conviene confirmar que tiene permiso de las familias para usarlas en su sitio.

## Dónde está cada cosa

- Textos, precios, extras y galería: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs`
