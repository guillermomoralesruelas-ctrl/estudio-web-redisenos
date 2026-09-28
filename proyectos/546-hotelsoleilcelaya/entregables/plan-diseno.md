# Hotel Soleil Celaya: plan de rediseño (método 1.1)

**Sitio original:** https://www.soleilcelaya.com.mx/ (HTML de plantilla, "Diseño por Jesus Solano"; página de reservaciones nueva y aparte)
**Materia prima:** clon en `../sitio/`, `investigacion/original.html`, `crudo.json` (inicio, Ejecutivas, Junior y Master). Con `curl`, el 2026-09-28, Servicios, los salones Premium, Monaco y Scala (medidas y capacidades), Restaurante y bar, Contacto, Política y la página de reservaciones (tarifas, check-in, cancelación, opiniones y WhatsApp).
**Rubro:** hotel de negocios de 4 estrellas con 70 habitaciones y 3 salones. **Ciudad:** Celaya, Gto. (Av. Constituyentes 125 Ote.).

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-28): 2,827 px en escritorio y 3,043 px en el celular, 10 de 10 imágenes rotas, 36 errores de consola y 33 recursos fallidos.
- Solo trae 3 fotos útiles (una por tipo de habitación, 1142 × 580). Las galerías de salones y restaurante no se clonaron y la foto de fachada dice "Euro Inn".

## Qué tiene que lograr el sitio
1. Reservar con la tarifa a la vista (desayuno incluido) o escribir por WhatsApp.
2. Cotizar un evento: saber en qué salón cabe su grupo según el montaje.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| cafe | #2b2320 | El café oscuro de la madera de sus habitaciones: portada y contacto. Blanco encima 15.40:1; sobre arena 13.49:1 |
| sol | #b24d14 | Naranja de "soleil" para lo que se elige y los precios. Blanco encima 5.30:1; sobre arena 4.64:1 |
| durazno | #f0b27a | Cifras sobre café (8.32:1) |
| arena | #f5efe8 | Fondos claros, el tono de sus muros. Gris #5b5552 encima 6.42:1 |

**Tipografía:** Jost para títulos (palo seco de trazo fino, como el "soleil" de su logo) e Inter para texto.

## Elemento memorable
**"Acomoda a tus invitados"**: sus tres salones dibujados a escala con sus medidas (Premium 15 × 12 m, Monaco 8 × 12 m, Scala 8 × 12 m con terraza). Eliges el montaje (auditorio, escuela, herradura o banquete) y cuántas personas van; cada punto es una silla y se acomodan como en ese montaje (filas, mesas de dos, U o mesas redondas de 10). Los salones donde caben se pintan en naranja, los demás quedan en gris con su máximo. El botón de WhatsApp lleva personas, montaje y el salón más justo.
Sale del negocio: su sitio publica una tabla de medidas y capacidades por montaje para cada salón, pero en tres páginas separadas y sin forma de compararlas.
**Por qué no repite otros:** 508 recorre las salas de un hospital; 539 abre ventanas de un hotel. Aquí se **acomoda gente a escala** en un espacio con sus capacidades reales.
**Límite honesto:** capacidades y medidas son las publicadas; la distribución de sillas es ilustrativa y la terraza del Scala no tiene medida publicada. La página lo dice.

## Estructura
1. Encabezado con su logo, enlaces y "Reservar".
2. Portada: H1 "Hotel de negocios en Celaya, con desayuno incluido y salones para tus eventos", foto de la Junior Suite, calificaciones (8.4 Booking, 4.0 TripAdvisor) y horarios.
3. Habitaciones con tarifa (Ejecutiva $880 y $980, Junior Suite $1,950, Master Suite por WhatsApp).
4. Acomoda a tus invitados (el elemento).
5. Servicios, restaurante y bar, y 3 opiniones verificadas.
6. Cómo llegar y contacto.
7. Pie y barra fija en el celular (Reservar, WhatsApp, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas, numeración 01/02 y puntos medios (su página de reservaciones los usa).
- "La mejor calidad y servicio con la máxima Elegancia" y "Mejor tarifa garantizada": superlativos.
- Carruseles y animaciones al hacer scroll.
