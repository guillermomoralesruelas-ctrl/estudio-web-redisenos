# Bizé Nizá Spa: plan de rediseño (método 1.1)

**Sitio original:** https://www.bizenizaspa.com/ (sitio propio con Materialize; páginas Inicio, Corporal, Facial, Rituales, Otros, Promoción y Domicilio).
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/images/`), textos de `investigacion/crudo.json` y `/domicilio` y `/promocion` leídos con curl el 2026-09-27. No se bajó ninguna imagen nueva.
**Rubro:** spa (masajes, faciales, rituales, tratamientos corporales y servicio a domicilio). **Ciudad:** Puebla, Pue. (Vía Volkswagen 4501, Col. La Paz). En la BD figura como Ciudad de México, pero su dirección, su lada (222) y su WhatsApp son de Puebla.

**Sobre las fotos (revisadas antes de construir):** pocas, pero suficientes. Tres fotos de 800 px de una misma sesión (una pareja con batas bordadas con su logo en una cabina, masaje de espalda y piedras calientes) y la foto de sus pantuflas y bata bordadas. Sin EXIF de Google ni marcas de IA. No se usan las miniaturas de 174 px ni `home_footer.jpg` (tira de 964 × 291 que parece de banco). Las fotos de cada servicio (`images/corporales/…`) no están en el clon.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): 19 imágenes rotas de 19, 21 recursos fallidos y 27 a 28 errores de consola (las rutas `/images/…` y `css/estilos.css` son absolutas al dominio). Sin título, sin H1.
- Es un defecto del clon, no del cliente; su sitio en vivo sí carga las imágenes.

## Qué tiene que lograr el sitio
1. Que la persona encuentre el servicio que busca entre 43 (con nombres en lenguas indígenas que no dicen qué son), vea precio y duración y lo pida por WhatsApp.
2. Saber qué se puede pedir a domicilio y cómo regalar un certificado.
3. Llegar al spa: dirección, horario, Google Maps, teléfono.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| `tinta` | `#173a47` | Títulos (11.02:1 sobre arena) |
| `texto` | `#46555b` | Texto (7.04:1 sobre arena) |
| `azul` | `#00a7ce` | El azul de su logo; solo decoración |
| `azul-hondo` | `#146080` | Botones y enlaces, de su CSS (blanco encima 6.97:1; sobre arena 6.33:1) |
| `noche` | `#0f4a63` | Sección oscura y "Tu elección" (blanco encima 9.63:1) |
| `verde` / `verde-hondo` | `#abd05e` / `#4d6b12` | El verde de su logo (zona encendida) y su versión para texto (5.57:1) |
| `lima` | `#c9e79a` | Detalles sobre noche (7.06:1) |
| `arena` / `cielo` | `#f6f4ee` / `#dff1f7` | Fondos claros |

**Tipografía:** Spectral (títulos, a veces en cursiva) y Lato (texto): las dos que ya usa su sitio. @fontsource, solo latino.

## Elemento memorable
**"¿Qué quieres consentir hoy?"**: una figura dibujada en SVG, con los ojos cerrados, dividida en zonas (cabeza, ojos, rostro, cuello y espalda, brazos, manos, vientre, piernas, pies o cuerpo completo). Al tocar una zona se enciende en el verde de su logo y aparecen los servicios de su carta que la trabajan, con su descripción, duración y precio reales. Eliges uno y una ficha "Tu elección" arma el WhatsApp con el mensaje que ya usa su sitio ("estoy interesado en su servicio: '…'"), más duración, precio y si es en el spa o en casa (solo para los tres servicios de su página /domicilio). Sale del negocio: sus 43 servicios tienen nombres como Nelpilollia o Tankugni, que no dicen qué parte del cuerpo trabajan; la zona sí. No se parece a ningún elemento ya usado (el mandala de Kenkō es un plan por pilares con suma; aquí es encontrar un servicio por la parte del cuerpo).

## Estructura
1. Portada: frase suya, H1 "Masajes, faciales y rituales en Puebla", dos acciones y sus tres promesas (cuerpo y alma, domicilio, certificado de regalo); foto de la pareja en la cabina.
2. ¿Qué quieres consentir hoy? (elemento memorable).
3. Todos los servicios: pestañas Corporal, Facial, Rituales y Otros, con su lema, precio, duración y WhatsApp por servicio.
4. 10 años de experiencia: su texto, especiales y promociones, tres fotos.
5. A domicilio y certificado de regalo (sección oscura).
6. Visítanos: dirección, Google Maps, teléfono, redes y horario.
7. Pie y barra fija en el celular (WhatsApp, Llamar, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Sin etiquetas pequeñas en mayúsculas sobre las secciones, sin 01/02, sin puntos medios como separador.
- Sin filas de tarjetas idénticas: los servicios son listas con filetes; la única caja es "Tu elección".
- Sin animaciones al hacer scroll: solo la transición de color de las zonas y un halo suave en "Cuerpo completo" (quietos con `prefers-reduced-motion`).
- Sin degradados de moda; los arcos de las fotos toman la forma redonda de su logo.
- Sin inventar precios, reseñas ni beneficios; se recortan las afirmaciones de salud más fuertes de sus textos (ver CAMBIOS).
