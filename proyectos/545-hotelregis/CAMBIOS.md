# Hotel Regis: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://hotel-regis.com/ |
| Método | **1.2 en la nube**: el clon no trae fotos; se bajaron del sitio en vivo a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/545-hotelregis/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El mismo Hotel Regis, con sus fotos, sus precios y Villa Don Nacho, más un reloj del día que dice qué está abierto a la hora en que llegas y una cuenta de la estancia.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 26 imágenes rotas y 22 recursos fallidos | 13 fotos y el logotipo de Villa Don Nacho en `assets/originales/`, en .webp desde el sitio |

## Qué se cambió (mismo contenido, otra forma)

- Su carrusel de portada pasa a una sola foto (la fachada con la franja ámbar); las otras fachadas van en la galería y en contacto.
- La galería repetía fotos (las mismas de habitaciones y restaurante): cada foto aparece una vez.
- Los horarios del restaurante (desayunos, filete mignon, comida del día, buffet de domingo) y del hotel, que estaban en tres lugares, se juntan en "¿A qué hora llegas?".
- "Habitacion" se escribe con acento.

## Qué se agregó (no existía en el original)

- **"¿A qué hora llegas?"** (elemento memorable): reloj de 24 horas con la hora de Mexicali, día de la semana y barras de recepción, check-in, check-out y los servicios de Villa Don Nacho; dice qué está abierto en ese momento.
- Cuenta de la estancia: habitación × noches con sus precios publicados y correo armado a inforegis@hotel-regis.com.
- Textos del estudio: "Desde $975 por noche, con el restaurante Villa Don Nacho dentro del hotel", "¿A qué hora llegas?" y su explicación, las etiquetas de la cuenta y del reloj, la nota de precios y los textos alternativos.
- Barra fija en el celular (llamar, correo, cómo llegar), JSON-LD `Hotel` con precios, check-in, check-out y el restaurante, title, description e imagen para compartir.
- No hay WhatsApp: el negocio no publica ninguno. "Reservar mesa" llama al teléfono del hotel (en su sitio ese botón no lleva a ningún lado).

## Qué se quitó o no se usó

- Los tres testimonios ("María García", "Carlos Mendoza", "Ana Ruiz"): están escritos en el código con 6 estrellas y uno dice "el desayuno incluido", cuando su sitio aclara que el desayuno no está incluido. Parecen de ejemplo.
- La ventana emergente de "Reservar Estancia" (sus datos quedan en Contacto y en la cuenta).

## Qué se conserva al pie de la letra

- Nombre, "Tradición · Confort · Hospitalidad", sus cifras (50+ habitaciones, 30 años de historia, ★ 4.8, 24/7), "Espacios de confort", las descripciones y precios de las tres habitaciones, el texto y horarios de Villa Don Nacho, sus 7 amenidades (con "Desayuno: con costo adicional"), "¿Listo para hospedarte?", dirección, teléfonos, correo, check-in 3:00 PM, check-out 12:00 PM, Google Maps y Facebook.

## Pendiente de confirmar con el cliente

- Si los precios siguen vigentes y si incluyen impuestos.
- Si tienen WhatsApp, y cómo se reserva mesa en Villa Don Nacho.
- Testimonios reales (por ejemplo, de Google) para sustituir los de ejemplo.
- Cuántas camas tiene la triple (la foto muestra tres; el texto no lo dice).

## Dónde está cada cosa

- Textos, precios y horarios: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs` (crea los .webp)
