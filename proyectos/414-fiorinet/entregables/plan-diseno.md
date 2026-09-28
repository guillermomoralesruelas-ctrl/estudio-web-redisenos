# FioriNET: plan de rediseño (método 1.1, con fotos recuperadas del sitio en vivo)

**Sitio original:** https://www.fiorinet.com.mx/ (Magento 2 con el tema Porto)
**Materia prima:** clon en `../sitio/`, textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`. Como el clon no trae fotos de arreglos, se tomaron con curl (2026-09-27) sus páginas de costo de envío, condiciones de entrega, tienda física, hospitales, funerarias y dos categorías del catálogo, y se bajaron 14 fotos de producto a `assets/originales/`.
**Rubro:** florería con tienda física y venta en línea (en la BD figura como RETAIL). **Ciudad:** Ciudad de México (Piedad Narvarte, Benito Juárez).

## Confirmación del giro (pedido en la tarea)

`crudo.json` dice que es una "florería mexicana fundada en 1999", "empresa familiar con tienda física en Piedad Narvarte". Arma sus arreglos en sus talleres de la CDMX y, fuera de la ciudad, entrega con "florerías asociadas a nuestra red". No es una cadena grande ni un marketplace: es una florería independiente con tienda en línea propia y una red de socios para envíos foráneos. Se trabaja como negocio local.

## Qué le falta al clon (los "detallitos")
- El clon sale sin estilos: una lista de enlaces sin formato, 6,639 px de alto en escritorio y 8,192 px en el celular.
- 12 scripts propios con 404 (`media/fn/*.js`, el decodificador de correo de Cloudflare) y 35 errores de consola.
- No trae ninguna foto de arreglo: el catálogo de Magento se carga del sitio en vivo. Solo bajó los tres banners del carrusel (1920 × 500, con el texto encimado y una modelo que parece de banco), iconos y el logo.

## Qué tiene que lograr el sitio
1. Que la persona sepa **cuánto le cuesta que el arreglo llegue a donde lo quiere mandar** y pida por WhatsApp con todo escrito (arreglo, zona, total, dedicatoria).
2. Enseñar arreglos reales con su precio y un camino directo a su tienda en línea.
3. Resolver los dos casos que más explica su sitio: hospitales y funerales.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| crema | `#F6F4EE` | fondo (de su `#F5F7F1`) |
| olivo | `#55624C` / oscuro `#3E4A36` | textos de título, bandas oscuras, pestañas (su color del CSS) |
| salvia | `#C9D3BC` / claro `#E8EDE0` | bordes, zonas con envío sin costo |
| rosa | `#B23A63` (del `#D4537E` del logo, oscurecido para AA) | botones, precios, zonas con costo |
| morado | `#74478A` | la flor morada del logo; lema y marcador de la tienda |

**Tipografía:** Fraunces (títulos, con cursiva para el lema "La vida es mejor con flores") y Nunito Sans (texto), subconjunto latino de @fontsource. El logo mezcla una cursiva con una sans redonda; el par lo imita sin copiarlo.

## Elemento memorable
**"¿A dónde lo mandas?"**: un mosaico de las 16 alcaldías de la CDMX colocadas en su posición aproximada, cada una con el costo de envío que publica su página `/df_spa/shipping-cost/` (13 sin costo; Xochimilco $100, Tláhuac $180 y Milpa Alta $200), con la flor morada marcando su tienda en Benito Juárez. Pestañas para Estado de México (36 municipios), Jalisco (6), Nuevo León (10) y "Recoger en tienda" (sin costo). A un lado, "Tu pedido": eliges el arreglo (o lo mandas desde el catálogo con "Enviar este"), se suma el envío de la zona y da el total; si la alcaldía tiene hospitales en su lista de `/cdmx/hospitales`, dice a cuáles ya entregan; hay un campo para la dedicatoria de la tarjeta (sin costo, como dice su FAQ) y el WhatsApp sale con arreglo, zona, total y dedicatoria escritos.

Sale del negocio: su tabla de 69 zonas es su dato más útil y en su sitio está enterrada en una página del pie. Es distinto de los elementos de METODOS.md (las otras dos florerías usaron "¿Para quién es?" por ocasión y "¿Llega hoy?" con cuenta regresiva; "Un Animalitos® cerca de ti" usa distancia en km, no costo por zona).

## Estructura
1. Encabezado con logo, navegación y WhatsApp.
2. Portada: lema, H1 (el de su sitio), qué es FioriNET, WhatsApp y "¿Cuánto cuesta que llegue?", tres datos (desde 1999, 2 a 4 h, 4.7 en Google con enlace a su ficha) y un collage de tres arreglos.
3. Algunos de sus arreglos: pestañas "Para regalar" (8) y "Condolencias" (4), con precio, "Enviar este" y "Ver en la tienda".
4. ¿A dónde lo mandas? (elemento memorable).
5. Armado y entregado en persona: sin paquetería, condiciones de entrega, 14 de febrero y 10 de mayo, cobertura nacional e internacional.
6. Hospitales y funerales: sus recomendaciones por área del hospital, tipos de arreglo fúnebre, cinta sin costo y servicio urgente.
7. Preguntas frecuentes (9 de las 13 de su inicio), pagos y factura.
8. Su tienda en Piedad Narvarte: dirección, horario, Google Maps y los cuatro teléfonos.
9. Pie y barra fija en el celular (WhatsApp, Llamar, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Sin etiquetas pequeñas en mayúsculas sobre cada sección, sin numeración 01/02, sin puntos medios como separador.
- Sin animaciones de entrada por sección; solo transiciones de color en botones.
- La cuadrícula de arreglos es una ficha de catálogo (foto, nombre, precio); se limita a 8 + 4 y cada tarjeta lleva una acción real ("Enviar este" alimenta el cálculo), no es relleno.
- Sin degradados de moda: el único fondo con textura es el renglonado de la nota del pedido.
- Sin reseñas inventadas: solo la calificación que su propio sitio publica (4.7, 122 reseñas) con enlace a Google Maps.
- No se usan los banners (texto encimado y modelo de banco) ni fotos con la marca de otra florería.
