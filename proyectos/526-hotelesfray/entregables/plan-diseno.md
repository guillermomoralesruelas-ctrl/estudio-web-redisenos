# Hoteles Fray: plan de rediseño (método 1.1)

**Sitio original:** https://hotelesfray.com/ (WordPress con Divi)
**Materia prima:** clon en `../sitio/` (fotos en `sitio/assets/wp-content/uploads/`), textos en `investigacion/crudo.json` (inicio, Fray Junípero, Fray Select y habitaciones), contacto en `investigacion/resumen.json`. El motor de reservas es Cloudbeds: `u2yvwq` (Fray Junípero) y `d8ajqB` (Fray Select), tomados del formulario de `investigacion/original.html`.
**Rubro:** hospedaje, un grupo local de dos hoteles de ciudad. **Ciudad:** Tepic, Nayarit.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): 3 imágenes rotas en escritorio y 4 en móvil (los píxeles de AdRoll), 33 errores de consola (fuentes de íconos de Divi bloqueadas por CORS y scripts de seguimiento) y ningún desborde.
- A ojo: los íconos de Divi salen como cuadros vacíos, los carruseles de cada hotel no avanzan y el buscador de reservas depende de jQuery UI.
- La carpeta del clon trae temas y plugins de WordPress; el rediseño usa solo 30 fotos en `.webp` (ver `rediseno/fotos-web.mjs`).

## Qué tiene que lograr el sitio
1. **Reservar** en el hotel correcto. Son dos hoteles con teléfono, WhatsApp, correo, dirección y motor de reservas distintos, y en el sitio actual cada uno vive en su página.
2. Que el viajero entienda en segundos la diferencia: Fray Junípero es la tradición frente a la Catedral; Fray Select es lo más nuevo.
3. Vender el desayuno buffet incluido, los restaurantes, los salones de eventos y el convenio para empresas.

Público: viajeros de negocios y familias que llegan a Tepic (Guadalajara, Durango, Bajío), y empresas con convenio de tarifas.

## Dirección visual
Hotel de ciudad sobrio: tinta oscura, cantera clara del centro de Tepic y los colores de cada marca, que cambian según el hotel elegido.

| Token | Color | Uso |
|---|---|---|
| `cantera` | `#f6f2ec` | Fondo general |
| `piedra` | `#e8e1d6` | Sección de habitaciones |
| `tinta` | `#1f262e` | Encabezado, portada y pie (el gris oscuro de los logotipos) |
| `fray` | `#4f6a6a` | Verde piedra del logotipo de Hoteles Fray (ventajas) |
| `ambar` | `#e8a020` | Acento de Fray Junípero (logotipo); texto ámbar oscuro `#8a5a00` para contraste AA |
| `rojo` | `#c82038` | Acento de Fray Select (logotipo) |

**Tipografía:** Figtree, la misma del sitio original (@fontsource, solo latino), en peso 700 para títulos.

## Elemento memorable
**"Dos hoteles en el centro de Tepic. ¿Cuál es el tuyo?"**. La portada son los dos hoteles lado a lado, con su foto y su frase. Al elegir uno, todo el sitio toma su color (ámbar para Junípero, rojo para Select) y todos los botones van a ese hotel: reservar en su Cloudbeds, su WhatsApp, su teléfono, su mapa, sus habitaciones, su restaurante y su cotización de eventos. El formulario de reserva, con llegada, salida y código promocional, abre el mismo motor Cloudbeds que usa el sitio actual. El hotel elegido se recuerda en el navegador.

## Estructura
1. Encabezado con el logotipo blanco del grupo y el botón "Reservar en (hotel elegido)".
2. Portada con los dos hoteles para elegir.
3. Barra de reserva: hotel, llegada, salida y código promocional.
4. El hotel elegido: logotipo, frase, texto, fotos, reservar, WhatsApp y teléfono.
5. Habitaciones del hotel elegido, con un enlace para ver las del otro, y lo que incluyen todas.
6. Restaurante del hotel, su extra (terrazas panorámicas o desayuno buffet) y sus servicios.
7. Recompensas de The Guestbook y convenio de tarifas.
8. Salones de eventos.
9. Premios y opiniones.
10. Contacto de los dos hoteles, pie y barra fija en el celular (reservar, WhatsApp, llamar y cómo llegar del hotel elegido).

## Qué se evita (revisión contra lo genérico)
- Nada de etiquetas pequeñas en mayúsculas ni numeración.
- Las habitaciones no son tarjetas iguales: la primera ocupa el ancho, y las que no tienen foto local van como texto.
- Los servicios no llevan íconos genéricos, solo una línea del color del hotel.
- Sin animaciones al hacer scroll; solo un fundido corto al cambiar de hotel, que se quita con `prefers-reduced-motion`.
- No se inventan precios (el sitio no publica tarifas) ni opiniones: solo las tres que ya publican.
