# Florería Riviera: plan de rediseño (método 1.1)

**Sitio original:** https://www.floreriariviera.com/ (español, con versión en inglés en /eng/)
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/img/`), textos de inicio, estatus, políticas y nuevos modelos en `investigacion/crudo.json`, y el HTML con sus tres bloques de datos estructurados en `investigacion/original.html`. La red de la nube no llega al sitio.
**Rubro:** florería con entrega a domicilio. **Ciudad:** Playa del Carmen, Quintana Roo (Ave. Constituyentes, C.P. 77710, según su JSON-LD); entrega en Playa, Playacar, Riviera Maya, Puerto Aventuras, Akumal y Tulum. La base decía Cancún.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json`. Solo 7 fotos de arreglos, de 300 x 360 px, con su marca de agua.
- El carrusel repite los mismos siete arreglos tres veces.

## Qué tiene que lograr el sitio
1. Elegir un arreglo con su precio y pedirlo por WhatsApp con fecha, zona y lo que dirá la tarjeta.
2. Que las reglas de entrega (mismo día antes de 3 PM, horario 10 a 19 h de lunes a sábado, fechas especiales con 24 h) se vean antes de pedir.
3. Teléfono, WhatsApp y cómo pagar a la mano.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| fucsia | `#a3215f` | El rosa de su marca de agua, oscurecido: títulos y botones |
| rubor | `#fbe9f1` | Fondo rosa claro |
| papel | `#fffaf6` | Fondo y la tarjeta |
| hoja | `#2f5d3a` | Verde de tallo: detalles |
| vino | `#3a1a2a` | Fondo oscuro |
| gris | `#5e5157` | Texto secundario |

**Tipografía:** Cormorant Garamond (títulos y la letra de la tarjeta, en cursiva) y DM Sans (texto), locales con @fontsource.

## Elemento memorable
**"¿Qué dice la tarjeta?":** cada arreglo lleva una tarjeta de dedicatoria. Eliges el arreglo (sus siete con foto, código y precio), escribes para quién, el mensaje y de parte de quién, y la tarjeta se escribe en pantalla, colgada de la foto del arreglo como en la tienda. Eliges fecha y zona de entrega (sus seis zonas) y el sitio avisa con sus propias reglas: si es domingo (aplican restricciones), si es 14 de febrero o 10 de mayo (pedir con 24 h) o si es hoy y ya pasaron las 3 PM en Playa del Carmen. El WhatsApp sale con el código, la fecha, la zona y el texto de la tarjeta.

## Estructura
1. Encabezado con nombre, secciones, "English" y WhatsApp.
2. Portada: H1, entrega el mismo día antes de las 3 PM, zonas, y tres arreglos.
3. ¿Qué dice la tarjeta? (elemento memorable).
4. Los siete arreglos con precio, más las ofertas y frutales con precio (sin foto).
5. Condolencias y bodas (su texto).
6. Cómo pedir y pagar: entrega, pagos (PayPal, Oxxo, transferencia), cancelaciones.
7. Contacto: teléfono, WhatsApp, correo, Ave. Constituyentes en Maps, redes. Barra fija en el celular.

## Qué se evita (revisión contra lo genérico)
- El carrusel repetido y los precios "desde $695" de su JSON-LD, que no aparecen en su catálogo.
- "La mejor florería" y "garantizar" (solo sus reglas tal cual).
- Fotos de banco (solo sus arreglos).
