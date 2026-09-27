# Explora Valle: plan de rediseño (método 1.1)

**Sitio original:** https://exploravalle.com/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/wp-content/uploads/`), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`, HTML en `investigacion/original.html`. Las fichas de las diez experiencias (qué incluye, duración, días, horarios de reserva, edad mínima, punto de encuentro) se leyeron con curl de sus páginas el 2026-09-27; no se bajó ninguna imagen.
**Rubro:** turismo de aventura y tours (operadora local de experiencias terrestres, acuáticas y aéreas, recorridos por el pueblo y team building). **Ciudad:** Valle de Bravo, Estado de México (oficina en Rincón San Vicente #13, Col. Centro).

## Qué le falta al clon (los "detallitos")

Del reporte `qa/reporte-rediseno.json` → `antes` y de abrir el clon:

- 119 errores de consola y 4 recursos fallidos en escritorio y en el celular: el script `email-decode.min.js` de Cloudflare (dos veces), el fondo `uploads/2019/08/7-1.jpg` y `ticketing.umd.min.js` de GetYourGuide (este también da 404 en el sitio real).
- El carrusel de portada (Revolution Slider) no carga sus fotos grandes (parapente, velero, trekking): quedan los textos en mayúsculas sobre fondo vacío.
- Las cifras "Clientes Felices / Visitas Por Año / Tours Realizados" se quedan en 0 (el contador animado no corre).
- El carrito, el buscador "Find Tours", el widget de reseñas de Google y el chat de Joinchat no funcionan en local.
- Solo hay cinco fotos propias, de 360 × 240 px, con su marca de agua; más la panorámica del lago (1280 × 400, ya oscurecida).

## Qué tiene que lograr el sitio

1. **Reservar una experiencia por WhatsApp con todo escrito**: cuál, qué día, a qué hora y cuántas personas, con el total. Hoy su sitio tiene carrito de WooCommerce con horarios, pero el mensaje de su botón de WhatsApp solo pide "descuentos".
2. Que se vean de un vistazo las diez experiencias con precio, precio anterior, duración y qué incluye, sin abrir diez páginas.
3. Llamar o llegar a la oficina (Rincón San Vicente #13) desde el celular.

Público: familias, parejas y grupos de amigos de la Ciudad de México, Toluca y otros estados que van a Valle de Bravo el fin de semana o en vacaciones (sus reseñas mencionan Irapuato, Culiacán, agencias de viaje y grupos); deciden en el celular, muchas veces ya en el pueblo.

## Dirección visual

Primera pasada: una operadora de aventura con raíz local ("guía Vallesano"), bosque de pino-oyamel, lago y postales. Nada de "adrenalina" en neón: tierra, agua y papel.

| Token | Color | Uso |
|---|---|---|
| `bosque` | #0f3b2a | Encabezado, pie, secciones oscuras (de su verde #007b37, oscurecido para texto blanco: 12.5:1) |
| `naranja` | #e96b00 | Símbolo de su logo; botones con texto `tinta` (4.8:1), sellos |
| `naranja-hondo` | #a64700 | Enlaces y cifras sobre `papel` (5.2:1) y sobre blanco (6.0:1) |
| `naranja-claro` | #ff9a3d | Texto naranja sobre `bosque` (5.9:1): datos de la portada y títulos del contacto |
| `lago` | #1d5c63 | El lago de su panorámica; reverso de la postal, etiquetas de agua (texto blanco 7.6:1) |
| `papel` | #f6efe2 | Fondo general, cartulina de la postal |
| `tinta` | #1c2620 | Texto (13.6:1 sobre `papel`) |
| `pluma` | #27407a | "Escritura a mano" y matasellos de la postal (8.7:1 sobre `papel`) |

**Tipografía:** Nunito (la de su tema, `main-custom.css`) para el texto; Zilla Slab para títulos (tipo de madera de cartel de feria, legible y con peso); Caveat solo para lo "escrito a mano" en la postal. De @fontsource, solo el subconjunto latino.

## Elemento memorable

**"Manda tu postal de Valle"**. Su propio sitio dice que el Tour Cascadas "te regalará postales que jamás olvidarás". El elemento es un exhibidor de postales, como el de las tiendas del centro: diez postales, una por experiencia (bicicleta, cuatrimoto, cabalgata, kayak, lancha, cascadas, La Peña, la Stupa, Todo Valle y guía turístico), agrupadas en Tierra, Agua y Recorridos. Al tomar una, la postal grande muestra:

- **Frente:** su foto (con su marca de agua) en las cinco experiencias que tienen foto; en los cinco recorridos, una ilustración en SVG del lugar (la roca de La Peña sobre el lago, la cascada Velo de Novia entre pinos, la Gran Stupa, el lago con velero y parapente, las torres de San Francisco) porque el clon no trae fotos de esos tours.
- **Reverso:** a la izquierda, "escrito a mano", lo que vas a hacer con sus datos reales: los puntos que visitas, la duración, lo que incluye y qué llevar. A la derecha, el **timbre es el precio** (con el precio anterior tachado), el **matasellos es la fecha y la hora** que eliges (solo sus horarios de reserva reales), y la postal va **dirigida a Explora Valle, Rincón San Vicente 13, Centro**. Eliges personas y la postal calcula cuántas unidades se necesitan según su regla (por persona; kayak doble de 2; lancha hasta 5; cuatrimoto con 1 acompañante; un guía hasta 30 personas), el total y cuánto ahorras con su precio actual.
- **Avisos con sus reglas:** la bicicleta es de viernes a domingo (entre semana solo en puentes y vacaciones), la Stupa sale con mínimo 3 personas, en cuatrimoto maneja un mayor de 18 años, edad mínima de cada una, y el guía turístico va en tu propio vehículo.
- **"Enviar postal por WhatsApp"** abre WhatsApp a su número (722 851 90 81) con la experiencia, la fecha, la hora, las personas y el total escritos.

No se parece a ningún elemento anterior de `METODOS.md`: no es un recorrido dibujado (388, también en Valle de Bravo), ni un pase de abordar (35), ni un ticket o cuenta (133, 352), ni una hoja de contactos (393). Es la postal como documento: timbre = precio, matasellos = fecha, destinatario = la oficina.

## Estructura

1. **Encabezado** oscuro con su logotipo blanco, navegación y "Reservar por WhatsApp".
2. **Portada**: la panorámica del lago; H1 "Tours y experiencias en Valle de Bravo"; su frase "Ven y encuéntrate a ti mismo…"; cuatro datos: desde $349 por persona, 4.9 en Google, oficina 9:00 a 19:00 h, Rincón San Vicente 13.
3. **Manda tu postal de Valle** (el elemento), con el exhibidor y la postal.
4. **También organizamos**: el resto de su catálogo (senderismo al amanecer, rapel, RZR, cañonismo, velero, stand up paddle, parapente, mariposa monarca, lunada, team building), solo nombres y WhatsApp para preguntar, porque no revisamos sus precios.
5. **Valle de Bravo**: su texto "Paraíso entre montañas…" y cinco datos de sus propias fichas (cascada de 35 m, agua del Nevado de Toluca, La Peña de 150 millones de años, fundación en 1532, raíces matlatzincas).
6. **Antes de venir**: sus reglas, en claro (llegar 10 minutos antes para la responsiva, comer hora y media antes, clima, tolerancia y cancelaciones, sin estacionamiento, sin alcohol).
7. **Opiniones**: 4.9 en Google con dos reseñas completas que aparecen en su sitio.
8. **Contacto**: dirección, Google Maps, teléfono, WhatsApp, correos, redes.
9. Barra fija en el celular: WhatsApp, Llamar y Cómo llegar.

## Qué se evita (revisión contra lo genérico)

Segunda pasada, quitado del borrador:

- Etiquetas pequeñas en mayúsculas sobre cada título ("EXPERIENCIAS", "NOSOTROS"): fuera; los títulos dicen lo que hay.
- Filas de tarjetas idénticas con foto, precio y botón para las diez experiencias: su lugar lo ocupa el exhibidor de postales, que es a la vez el catálogo.
- Contadores animados ("3,925 clientes felices"): no se usan; no sabemos de cuándo son y su sitio los muestra en 0 sin JavaScript.
- Numeración 01/02, puntos medios como separador y animaciones al hacer scroll: no.
- Degradados de moda: solo la sombra oscura necesaria para leer sobre la panorámica.
- Afirmaciones de seguridad propias ("100 % seguro", "guías certificados"): no; solo lo que dicen sus fichas (por ejemplo, "seguro de gastos médicos menores" donde lo incluyen).
- Nada inventado: reseñas, precios, horarios y reglas salen de su sitio.
