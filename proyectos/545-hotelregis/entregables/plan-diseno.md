# Hotel Regis: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://hotel-regis.com/ (página propia de una sola pantalla). Hotel en el Blvd. Benito Juárez 2150, Mexicali, con el restaurante Villa Don Nacho dentro. Publica dos teléfonos, correo, Google Maps y Facebook; no tiene WhatsApp.

**Materia prima:** el clon no trae fotos (las de su sitio son archivos `.jfif`). En la nube se bajaron de hotel-regis.com/media/ a `assets/originales/` sus 13 fotos distintas (fachadas, las tres habitaciones, otra habitación, escritorio, baño, lavabo, el restaurante) y el logotipo de Villa Don Nacho. Su galería repite varias; aquí van una vez. Tiene precios por noche de cada habitación y horarios de recepción, check-in, check-out y del restaurante por servicio.

## Qué le falta al clon

- `qa-rediseno.mjs` (antes): 26 imágenes rotas y 22 recursos fallidos en escritorio y móvil.

## Qué tiene que lograr el sitio

1. Ver las tres habitaciones con su precio y calcular la estancia.
2. Conocer Villa Don Nacho y sus horarios.
3. Llamar o escribir para reservar; llegar con Google Maps.

## Concepto

El muro blanco de su fachada con la franja ámbar, el rojo de su letrero y la terracota de sus habitaciones. Marcellus (romana clásica, como su "Tradición") y Nunito Sans.

## Elemento memorable: "¿A qué hora llegas?"

Un día del Regis en 24 horas. Toma la hora de Mexicali y se puede mover la hora y el día: barras de recepción, check-in, check-out, desayunos, comida del día, filete mignon y el buffet de domingo muestran qué está abierto en ese momento, con sus horarios reales.

Además, una cuenta de la estancia: habitación × noches con sus precios publicados, que sale como correo armado.

## Secciones

1. Hero con H1, su lema, precio desde y sus cifras (50+ habitaciones, 30 años, 4.8, 24/7).
2. Habitaciones con precio y cuenta de noches.
3. Restaurante Villa Don Nacho.
4. "¿A qué hora llegas?"
5. Amenidades y galería.
6. Contacto con dirección, teléfonos, correo, horarios y Google Maps.
7. Barra fija en el celular: llamar, correo, cómo llegar.
