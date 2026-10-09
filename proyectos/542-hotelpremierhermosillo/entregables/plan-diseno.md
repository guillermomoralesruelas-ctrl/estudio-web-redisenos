# Hotel Premier Hermosillo: plan de rediseño (método 1.2 en la nube)

**Sitio original:** http://www.hotelpremierhermosillo.com/ (Duda, hecho por Sección Amarilla / Engage ADN, una página). Hotel en la zona norte de Hermosillo, sobre la carretera a Nogales. Solo muestra un teléfono (662 215 1630) y un formulario.

**Datos que no se ven en la página:** su sitio carga aparte los datos del negocio (`/_dm/s/rt/actions/sites/01950465/contentLibrary`): dirección (Carretera a Nogales 430, col. San Luis, 83160), coordenadas, tres teléfonos (662 215 1630, 662 210 5262, 800 216 5990), correo reservaciones@hotelpremier.com.mx, Facebook hotelpremiermx y horario de 24 h todos los días. El campo de WhatsApp está vacío.

**Materia prima:** el clon no trae fotos. Se bajaron del CDN de Duda (irp.cdn-website.com/01950465) a `assets/originales/`: 24 fotos propias (alberca de día y de noche, fachada, exterior, estacionamiento, lobby, centro de negocios, sala de juntas, gimnasio, videojuegos, 6 habitaciones, restaurante y comida) y el logotipo. Muchas son piezas de redes con una franja roja (dirección, logotipo, "Desayunos", "Buffet"); se recortaron. No se usan la foto del personal, la camioneta, las piezas de promoción ni una habitación repetida.

## Qué le falta al clon

- `qa-rediseno.mjs` (antes): 22 imágenes rotas y 6 recursos fallidos en escritorio y móvil.

## Qué tiene que lograr el sitio

1. Que se vea dónde está (zona norte, salida a Nogales) y cómo llegar.
2. Ver habitaciones y amenidades con sus fotos.
3. Pedir disponibilidad o llamar, a cualquier hora.

## Concepto

El vino y el rojo de su logotipo, el oro de su "P" y la cantera de su fachada. DM Serif Display y Public Sans.

## Elemento memorable: "Tarjeta de registro"

La tarjeta que se firma en recepción, en papel con renglones y un sello con la hora de Hermosillo (su recepción atiende 24 h). Se eligen fechas (calcula las noches), habitación, huéspedes y motivo del viaje; el resumen muestra las amenidades reales que sirven para ese viaje y sale como correo armado a reservaciones, o se llama.

## Secciones

1. Hero con H1, recepción 24 h con la hora actual, calificación que publica y acciones.
2. Bienvenida con sus 4 destacados.
3. Habitaciones (4 tipos y equipo).
4. Amenidades (sus 8 bloques de servicios).
5. Restaurante y bar.
6. Tarjeta de registro.
7. Ubicación con teléfonos, correo, horario y Google Maps.
8. Barra fija en el celular: llamar, disponibilidad, cómo llegar.
