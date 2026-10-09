# Galería Mexicana de Diseño: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.galeriamexicana.mx/ |
| Método | **1.2 en la nube**: el clon no trae fotos (Squarespace las sirve desde `images.squarespace-cdn.com`); se bajaron a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/441-galeriamexicanade/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La misma galería en una sola página: su colección completa con un "Encuentra tu pieza" por presupuesto, sus diseñadores, su historia, su interiorismo y sus exposiciones, con la casa-estudio de Carmen Cordera como portada.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Ninguna foto (las carga Squarespace desde su CDN) | La foto principal de las 38 piezas (`assets/originales/p/`), 9 proyectos de interiorismo, 10 exposiciones, 10 retratos, la casa-estudio y sus logotipos, en .webp |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, colección, historia, diseñadores, Carmen Cordera, interiorismo, curaduría y contacto se juntan en una sola página. Las fichas largas (cada proyecto, cada exposición, cada pieza) se enlazan a su sitio.
- La portada usa la foto real de su casa-estudio en lugar de la imagen generada con IA de su portada (`Imagen generada 1 (7).png`).
- Las semblanzas de los diseñadores y de Carmen Cordera se abreviaron a una o dos frases, con sus datos.
- La compra se queda en su tienda de Squarespace: cada pieza tiene "Comprar" (a su ficha) y "Preguntar" por WhatsApp.

## Qué se agregó (no existía en el original)

- **"Encuentra tu pieza"** (elemento memorable): un control de presupuesto (de $600 a sin límite), el tipo (objetos, mobiliario, luminaria, textil) y "solo con existencias". Muestra cuántas piezas y de cuántos diseñadores caben, ordenadas por precio, con etiquetas reales de su tienda: "Última pieza", "Quedan N", "Agotado" y el 20% de las Mesas Orgánicas. Datos del JSON público de su colección del 2026-10-09 (`rediseno/src/data/piezas.json`).
- Franja de cifras con sus datos: 1990, más de 750 diseñadores, más de 150 exposiciones, más de 85 marcas, 14 países.
- Textos del estudio: "¿Cuánto quieres invertir en diseño?" y su explicación, "Detrás de cada pieza hay un nombre", "Espacios con piezas 100% mexicanas" (su frase de Marea Villa 50) y su resumen, "Más de 150 exposiciones", "¿Eres diseñador?", los rótulos y los textos alternativos.
- Barra fija en el celular (WhatsApp, llamar, cómo llegar), JSON-LD `ArtGallery` + `Store`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Las imágenes generadas con IA de su portada y de su noticia de Davit Nava.
- Las noticias, el formulario de contacto y el de newsletter (ver `OPORTUNIDADES.md`), el carrito y las políticas: siguen en su sitio.
- Nota: muchas fotos de producto de su tienda son escenas ambientadas y algunas llevan nombre de archivo "ChatGPT Image" (por ejemplo, el Marco de papel). Se usaron porque son las fotos con que ellos venden cada pieza; conviene pedirles fotos de producto reales.

## Qué se conserva al pie de la letra

- Nombre, logotipo, dirección (Jalapa 30B, Roma Norte), teléfono, WhatsApp, correo e Instagram; el H1 y el texto de su portada; su historia y sus cifras; las 38 piezas con nombre, diseñador, precio, medidas y primera frase de su descripción; los proyectos de interiorismo y las exposiciones con sus títulos.

## Pendiente de confirmar con el cliente

- **Horario**: su pie dice "Lun - Vie (10am - 7pm)" y su página de contacto "Lun - Vie (8am - 5pm)". El rediseño dice "Lunes a viernes" y pide confirmar por WhatsApp.
- Precios y existencias: cambian; antes de enseñar la propuesta conviene regenerar `piezas.json` desde `https://www.galeriamexicana.mx/coleccion?format=json`.

## Dónde está cada cosa

- Textos, diseñadores, interiorismo y curaduría: `rediseno/src/data/content.ts`
- Piezas: `rediseno/src/data/piezas.json`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs` (crea los .webp)
