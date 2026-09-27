# Alas del Hombre: plan de rediseño (método 1.1)

**Sitio original:** https://alas.com.mx/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/`), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json` y las 11 páginas de paquetes en vivo (leídas con curl, sin descargar imágenes).
**Rubro:** turismo de aventura, vuelo en parapente y escuela de vuelo libre. **Ciudad:** Valle de Bravo, Estado de México.

## Qué le falta al clon (los "detallitos")
- 28 imágenes rotas y 58 recursos fallidos en escritorio y en celular (`qa/reporte-rediseno.json`, parte "antes").
- Portada sin H1, sin datos para Google y con el teléfono como texto.
- Once paquetes, cada uno en su propia página, que se parecen mucho entre sí: el vuelo es el mismo y cambia lo que pasa después.

## Qué tiene que lograr el sitio
1. Reservar el vuelo tándem por WhatsApp, con el precio a la vista.
2. Elegir paquete sin abrir once páginas.
3. Dar confianza (pilotos certificados, SECTUR, Safe Travels, RNT) y llevar a la escuela de vuelo.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| marino | #0b3f5c | títulos, fondos oscuros (azul de la presa) |
| salvia / salvia-hondo | #5f8f78 / #3d6653 | montaña del despegue, textos secundarios |
| sol / sol-hondo | #c2521b / #a3410f | botones y alas del dibujo (color de las velas) |
| claro | #9fd0c0 | texto sobre marino |
| cielo / arena | #eef4f7 / #f7f2ea | fondos claros |

**Tipografía:** Bricolage Grotesque 600/800 en títulos y Figtree en texto (su sitio usa fuentes del sistema).

## Elemento memorable
**"¿Y después de aterrizar?"**: el vuelo es igual en todos los paquetes, así que el visitante elige qué quiere hacer al tocar tierra (cena, hotel, masaje, lancha, karts, cascadas…) y ve qué paquetes lo incluyen. El paquete elegido muestra un dibujo del trayecto (desde Monte Alto o desde El Peñón, con una o dos alas según los vuelos), el día parada por parada, su precio real y un WhatsApp con el paquete escrito.

## Estructura
1. Portada con la foto de los parapentes sobre la presa y el precio del vuelo.
2. El vuelo: duración, qué incluye, fotos/video, qué traer, precio.
3. ¿Y después de aterrizar? (los 11 paquetes).
4. Galería de vuelos.
5. Escuela: cinco cursos.
6. Seguridad y calidad, con tres opiniones de su sitio.
7. Contacto: Google Maps, teléfono, WhatsApp, correo y redes.

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas sobre cada sección, numeración 01/02 y puntos medios como separador.
- Animar cada sección al hacer scroll (no hay animaciones).
- Tarjetas idénticas repetidas: los paquetes son una lista con un detalle, no una rejilla de 11 tarjetas.
- Inventar reseñas, fotos, precios o datos del negocio.
