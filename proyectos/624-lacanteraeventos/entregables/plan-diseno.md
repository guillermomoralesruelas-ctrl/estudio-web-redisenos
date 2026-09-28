# La Cantera Eventos: plan de rediseño (método 1.1)

**Sitio original:** https://lacanteraeventos.com/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/wp-content/uploads/2026/`), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`. Los enlaces bit.ly de sus botones se siguieron con curl: todos terminan en `api.whatsapp.com/send?phone=5218127495777`.
**Rubro:** salón de eventos (bodas, XV años, graduaciones, posadas, empresariales y sociales). **Ciudad:** Monterrey, N.L. (Carretera Nacional 2700, Valle de Cristal).

## Qué le falta al clon (los "detallitos")
- Es WordPress con Elementor y Royal Addons: el carrusel de fondo de la portada (7 fotos "HERO" y el cartel del Wedding Event) no se descargó, así que la portada del clon queda sin su imagen principal.
- Las secciones de eventos y testimonios vienen duplicadas y triplicadas (carruseles sin su JavaScript).
- La cuenta regresiva del "próximo evento" es un widget que en el clon queda congelado.
- Ver números exactos en `qa/reporte-rediseno.json` (parte `antes`).

## Qué tiene que lograr el sitio
1. Que la gente **cotice su evento o agende una visita** por WhatsApp (son los dos botones del sitio original, y los dos van al 81 2749 5777).
2. Que vean el salón montado y lleno (tiene muchas fotos propias buenas) y confíen (10 años, más de 2,500 eventos, opiniones).
3. Que el próximo evento abierto (Wedding Event, domingo 4 de octubre, 3 p.m.) se vea con su hora correcta.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| tinta | `#121212` | Negro de la marca (logo y color global de Elementor): texto, opiniones, pie |
| fondo | `#f5f1ea` | Hueso "cantera": fondo general |
| piedra | `#e6ddd0` | Cantera más oscura: sección de la invitación, bordes |
| arena | `#b9a88f` | Filetes de la invitación y bordes de campos |
| vino | `#6b1d2a` | El vino de su cartel del Wedding Event: botones principales y la franja del próximo evento |
| gris | `#55504a` | Texto secundario (AA sobre fondo y piedra) |

**Tipografía:** las de la marca, que ya usa su sitio: Libre Baskerville (títulos, con itálica para la invitación) y Quattrocento Sans (texto), por @fontsource, solo latin.

## Elemento memorable
**"Escribe tu invitación antes que nadie".** Un salón de eventos vende una fecha. En vez de un formulario (el suyo pide nombre, apellido, correo y tipo de evento y manda un correo), el visitante elige cuál de sus seis tipos de evento va a celebrar (con la foto y el texto real de cada uno), escribe los nombres, la fecha que quiere y cuántos invitados calcula, y se arma en vivo **la invitación impresa** de su evento: papel hueso con doble filete, el logo de La Cantera, los nombres, "Acompáñanos a celebrar *nuestra boda / mis XV años / nuestra posada…*", la fecha escrita completa con su día de la semana y la dirección real del salón. El botón "Mandar a La Cantera y cotizar" abre WhatsApp al 81 2749 5777 con su mismo mensaje de cotizar más el tipo, los nombres, la fecha, los invitados y "¿Tienen disponible esa fecha?". Debajo va su propia advertencia de los términos: la disponibilidad se confirma directo con el salón.
- Datos reales: los seis tipos de evento y sus textos, el logo, la dirección, el WhatsApp y el mensaje de cotizar son del sitio; la advertencia es de sus términos y condiciones.
- No se usó el plano de mesas ni de jardín (ya lo usa 634-lagranaeventos) ni un cronómetro del día (214-christianmacias).

Además, la franja del **próximo evento** conserva su cuenta regresiva, pero apuntando a la hora del cartel (3 p.m.): la de su sitio llega a cero a las 9 a.m. Cuando pasa la fecha, la franja cambia sola al Open House XV Años con WhatsApp para preguntar la fecha.

## Estructura
1. Encabezado fijo: logo negro, navegación y "Cotizar evento".
2. Portada: foto del salón con techo de flores, H1 "Salón de eventos excepcionales en Monterrey", su bienvenida, botones Cotizar evento y Agendar visita, y sus cifras (10+ años, 2,500+ eventos).
3. Próximo evento (franja vino): Wedding Event con cuenta regresiva y "Confirma tu asistencia".
4. El salón: su texto de bienvenida y Mobiliario, Decoración y Gastronomía (una grande y dos en fila, no tres tarjetas iguales).
5. La invitación (elemento memorable).
6. Galería: 10 fotos propias, dos grandes.
7. Opiniones: sus tres testimonios (uno grande) y enlace a Google.
8. Visítanos: foto que abre Google Maps, dirección, horario, teléfonos tocables, correo, Agendar visita y Cómo llegar.
9. Pie con redes. Barra fija en el celular: WhatsApp, Llamar y Cómo llegar.

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas sobre cada sección, numeración 01/02 y puntos medios como separador: no hay ninguna; los títulos son frases del negocio ("Más de 2,500 celebraciones en el mismo salón").
- Animar cada sección al hacer scroll: solo la invitación aparece suave al cambiar de evento, y se apaga con `prefers-reduced-motion`.
- Tarjetas idénticas repetidas: los eventos son opciones del selector con foto, no una fila de tarjetas; el salón es una foto grande y dos filas.
- Degradados de moda: solo el oscurecido de la foto de portada, para que el texto blanco tenga contraste.
- No se usan los dos carteles con modelo (Open House XV Años y Wedding Event), que parecen fotos de banco.
- Inventar reseñas, fotos, precios o datos del negocio: no publica precios ni capacidad, así que la invitación no calcula costos; los invitados solo se mandan como dato.
