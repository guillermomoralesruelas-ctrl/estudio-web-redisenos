# DOMUS Vallarta Fine Real Estate: plan de rediseño (método 1.1)

**Sitio original:** https://domusvallarta.com/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/`), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json` y el listado de sus 114 propiedades que viene dentro de `investigacion/original.html` (variable `arrayListings`: tipo, recámaras, baños, precio, moneda y dirección de la ficha). Textos de Vender y Contacto tomados con curl del sitio en vivo.
**Rubro:** inmobiliaria (venta de casas, departamentos, lotes y preventas; afiliada a AMPI, NAR y MLS Vallarta). **Ciudad:** Bucerías, Nayarit, con oficinas también en Puerto Vallarta y Guadalajara.

## Qué le falta al clon (los "detallitos")
- 1 imagen rota y 6 recursos fallidos (las tarjetas del menú `assets/img/menu-cards/*.webp`), 21 errores de consola (qa-rediseno.mjs, parte "antes").
- El video de portada, el mapa de Google y las fotos de los "Desarrollos destacados" no están en el clon: la portada sale gris y hay un hueco blanco donde iba el mapa.
- 5,462 px de alto en escritorio y 7,638 px en celular, con cuatro buscadores de 250 colonias repetidos.

## Qué tiene que lograr el sitio
1. Que quien busca comprar en la bahía vea **qué hay para su presupuesto** y escriba por WhatsApp por una propiedad concreta.
2. Que quien quiere vender sepa cómo trabaja Domus y pida la visita.
3. Llegar a cualquiera de sus tres oficinas (Google Maps y teléfono).

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| marino | #34455f | El azul de su barra y botones (`#34455F` en `pages_styles-v7.css`). Fondos y botones (blanco encima 9.71:1) |
| noche | #1f2738 | Portada y pie (blanco encima 14.94:1) |
| mar | #1f5a50 | Casas en el dibujo y enlaces; sale de su verde `#246157`, un poco más oscuro (blanco 7.96:1, sobre arena 6.95:1) |
| cobre | #8a4f2a | Lotes en el dibujo; el tono de su banner de preventa, oscurecido (blanco 6.50:1) |
| arena | #f4efe6 | Fondo claro (nuestro). Tinta #1f2633 encima 13.26:1; gris #5a6272 encima 5.35:1 |
| oro | #d9b779 | Detalles sobre noche (7.83:1). Nuestro |

**Tipografía:** Montserrat, la de su sitio (`pages_styles-v7.css`), en 300 para los títulos grandes como su portada y 500/700 para texto y cifras. @fontsource, solo latino.

## Elemento memorable
**"¿Cuánto espacio te da tu presupuesto?"**: eliges moneda (pesos o dólares, como publica cada ficha; no se convierte), un tope y el tipo (casas, departamentos o lotes). Cada propiedad de su inventario que cabe en ese tope se dibuja como un cuadro **a escala de sus metros cuadrados** (el lado del cuadro es proporcional a la raíz de los m², con un cuadro de referencia de 10 × 10 m), agrupados por zona de la bahía, de La Cruz de Huanacaxtle a Puerto Vallarta. Al tocar un cuadro sale su ficha: foto, m², recámaras, baños, precio, precio por m², enlace a su ficha en domusvallarta.com y WhatsApp con el nombre y el precio escritos.
Sale del negocio: es su propio inventario (114 propiedades con precio, m² y foto) y responde la primera pregunta de quien compra en la costa. No repite ninguno de la lista: no es un filtro de tarjetas ni un mapa con círculos, es una comparación de tamaños a escala.

## Estructura
1. Encabezado con logo, navegación corta y teléfono.
2. Portada: H1 "Invierte en Puerto Vallarta & Riviera Nayarit", su description, dos acciones y sus cifras (29 desarrollos, 39 asesores, 1442 propiedades vendidas), con una foto de la alberca de Maralma.
3. ¿Cuánto espacio te da tu presupuesto? (el elemento).
4. Selección Domus: sus cinco propiedades de portada, una grande y cuatro en lista.
5. Preventas: los siete desarrollos destacados con su "desde" y el render de MCS Fluvial.
6. Vender: su texto y sus fortalezas, con WhatsApp "Quiero vender".
7. Oficinas: Puerto Vallarta, Bucerías y Guadalajara con Maps y teléfono; afiliados y redes.
8. Pie y barra fija en el celular (WhatsApp, Llamar, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas sobre cada sección, numeración 01/02 y puntos medios como separador (m², recámaras y baños van con palabras, separados por comas).
- Animar cada sección al hacer scroll: solo la ficha del elemento aparece con un fundido corto.
- Tarjetas idénticas repetidas: la Selección es una grande y una lista con filetes; las preventas, una lista tipo tabla.
- Degradados de moda: ninguno.
- Inventar reseñas, fotos, precios o datos del negocio. Sin tipo de cambio inventado: pesos y dólares no se mezclan.
