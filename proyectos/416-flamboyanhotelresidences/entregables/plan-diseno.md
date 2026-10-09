# Flamboyan Hotel & Residences: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://www.flamboyan.com.mx/ (WordPress con Elementor y motor de reservas de Mirai; inicio en español en /es/, el resto en inglés). Hotel de apartamentos con cocina en Avenida Centenario 1718, Centro, San José del Cabo, a una cuadra del Art Walk. 14 tipos de apartamento, rooftop con alberca, florería Flor de Mar y socios (Veleros Beach Club, Gypsy Soul House Spa).

**Materia prima:** el clon no traía fotos. En la nube se bajaron del sitio en vivo a `assets/originales/` las 14 fotos de sus apartamentos (images.mirai.com, 1024 px) y 12 fotos del hotel (fachada, rooftop, atardecer, vista aérea, florería, pasillo, huésped en el balcón, una obra de Mónica Andrade), más su logotipo. No se usan las fotos de actividades (yoga, golf, pesca, buggy, cine) ni las del destino (Arco, ballena, pelícanos): parecen de banco. Textos de `investigacion/crudo.json` (inicio, ubicación, galería, apartamentos).

**Contacto real:** hotel +52 624 142 3305; central de reservas México +52 55 4741 1285 y USA +1 442 249 0547; reservations@flamboyan.com.mx. Sin WhatsApp publicado.

## Qué le falta al clon

- `qa-rediseno.mjs` (antes): escritorio 16,099 px con **5,920 px de desborde**, móvil 10,885 px con **6,810 px de desborde**, 44 errores de consola, sin fotos.

## Qué tiene que lograr el sitio

1. Que el viajero vea en segundos qué es (apartamentos con cocina en el Distrito del Arte) y cuánto cuesta.
2. Elegir entre 14 apartamentos sin perderse (su página los lista uno tras otro, en inglés, con el mismo párrafo repetido).
3. Reservar: correo armado a reservaciones, teléfonos de la central y enlace a su motor de reservas.

## Concepto

Galería de arte cálida: blanco cal y arena, el naranja de la flor de flamboyán y el verde de su logotipo. Bodoni Moda para títulos (cartela de museo) y Karla para texto. Esquinas rectas, como marcos.

## Elemento memorable: "Sus 14 apartamentos, a escala"

Cada apartamento es un cuadro cuyo tamaño corresponde a sus m² (de 29 a 108). Se elige cuántos son, el exterior (balcón, patio, terraza, esquina con vista) y si se necesita cocina completa; los cuadros que sirven se encienden en naranja y el elegido muestra foto, camas, precio "desde" y un correo de reservación ya armado. Además, una tarjeta calcula el próximo jueves de Art Walk (noviembre a junio) con la hora de Los Cabos.

## Secciones

1. Hero con H1, descuento del 10% por reservar directo y fotos.
2. Sus 14 apartamentos, a escala, y lo que incluyen todos.
3. Rooftop con alberca.
4. Servicios y socios.
5. Colección de arte actual (Mónica Andrade, Rendición).
6. Reseñas de Tripadvisor que publica su sitio.
7. Ubicación con distancias reales, próximo Art Walk y reservaciones.
8. Barra fija en el celular: reservar, llamar, cómo llegar.
