# Inmobiliaria Titán: plan de rediseño (método 1.1)

**Sitio original:** https://inmobiliariatitan.com/ (WordPress con el tema WpResidence)
**Materia prima:** clon en `../sitio/`, `investigacion/original.html` y `crudo.json` (inicio, páginas 2 y 3, venta y renta). El inventario completo se tomó con `curl` el 2026-09-28 de su API pública (`/wp-json/wp/v2/estate_property`: 132 fichas con tipo, operación, zona, ciudad y características, y sus taxonomías) y del texto de sus 14 páginas de listado (8 de venta y 6 de renta), que traen precio, recámaras, baños y m². 117 fichas tienen precio y m² y forman `rediseno/src/data/propiedades.json`.
**Rubro:** inmobiliaria (venta y renta de casas, departamentos, terrenos, locales, oficinas y bodegas). **Ciudad:** León, Guanajuato (también Silao, Irapuato, Lagos de Moreno y San Francisco del Rincón).

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-28): 5,892 px en escritorio y 10,710 px en el celular, 0 desborde, 1 H1, 0 imágenes rotas, 69 errores de consola y 1 recurso fallido (`residence-gutenberg/dist/blocks.style.build.css`).
- A ojo: el buscador de su portada muestra más de 100 zonas, entre ellas "COLONIA PRUEBA", y cuatro formas de escribir León.

## Qué tiene que lograr el sitio
1. Que quien busca en León encuentre **una propiedad concreta** y sepa si su precio es razonable para su tipo, y agende una visita.
2. Llamar o escribir al equipo; conocer a sus agentes.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| azul | #145082 | El azul del techo de su logo (muestreado). Botones, puntos "en o debajo de la mediana". Blanco encima 8.40:1; sobre niebla 7.69:1 |
| azulhondo | #0d3a61 | Hover y pie. Blanco encima 11.70:1 |
| rojo / rojohondo | #d2141e / #b0111a | El rojo del techo y de la "t" de su logo: la línea de la mediana y el punto elegido; texto en rojohondo (7.14:1 sobre blanco) |
| niebla | #f3f5f8 | Fondo de portada, gráfica y equipo. Tinta encima 15.07:1; gris 5.86:1 |

**Tipografía:** Manrope para títulos y cifras (geométrica y firme, como una firma inmobiliaria seria) e Inter para texto.

## Elemento memorable
**"El termómetro del metro cuadrado"**: cada punto es una de sus propiedades, acomodada por lo que cuesta cada m² (precio publicado entre m² publicados), en su grupo: casas, departamentos y terrenos en venta; locales, oficinas, bodegas y naves y departamentos en renta (solo grupos con 7 o más fichas). Una línea roja marca la mediana del grupo; los puntos azules están en o debajo de ella y los blancos arriba. Al tocar uno se abre su ficha: foto (si el clon la tiene), zona, precio, m², precio por m², "74% abajo de la mediana", recámaras y baños, lo que tiene cerca o incluye, su enlace y "Agendar visita" por WhatsApp con el título y el enlace. Debajo, la lista del más barato al más caro por m², para teclado y lector de pantalla.
Sale del negocio: es su inventario completo, con sus precios y superficies; la pregunta de quien compra o renta en León es "¿esto está caro para lo que es?".
**Por qué no repite otros:** 495 proyecta plusvalía, 390 dibuja superficies a escala ("Metro a metro"), 326 compara precios contra un tope por pueblo, 579 ubica por rumbo alrededor de Pachuca. Aquí se compara **el precio por m² de cada propiedad contra la mediana de su propio tipo** en la inmobiliaria.
**Límite honesto:** la superficie puede ser de terreno o de construcción según la ficha (el sitio no lo distingue en el listado) y la mediana es de su inventario, no del mercado; la página lo dice.

## Estructura
1. Encabezado con su logo, enlaces y teléfono.
2. Portada: H1 "Casas, departamentos, terrenos, locales y bodegas en venta y renta en León", foto real (casa en Cumbres del Campestre) y conteo de su inventario.
3. El termómetro del metro cuadrado (el elemento).
4. Programa tu visita (su frase): sus 4 agentes con retrato.
5. Contacto y horario.
6. Pie y barra fija en el celular (WhatsApp, Llamar, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas, numeración 01/02 y puntos medios.
- Animar cada sección al hacer scroll.
- "La inmobiliaria #1 en León" y "A SOLO $": superlativos y reclamos sin sustento.
- Mapas de terceros: "Cómo llegar" es un enlace a Google Maps.
