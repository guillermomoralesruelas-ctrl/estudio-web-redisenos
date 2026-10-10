# DM Studios (Destino Musical): diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.destinomusical.com/ (Wix); el estudio está en `/estudiodegrabacion` |
| Método | **1.2 en la nube** (lote 9): el clon de Wix trae imágenes pequeñas; se bajaron en tamaño original las 7 fotos del estudio a `assets/originales/` |
| Fecha | 2026-10-10 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/319-dmstudiosdestino/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El sitio de Destino Musical es sobre todo una tienda de karaoke; el negocio de la base es su estudio, DM Studios. El rediseño es una página oscura de control room para el estudio, con una consola donde cada fader es un servicio y arma el mensaje para reservar.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| El clon es el inicio de la tienda (bocina karaoke, catálogo de canciones) y sus imágenes son miniaturas de Wix | El rediseño toma el estudio: textos de "Estudio de grabación", "Nosotros" y "Contacto", y 7 fotos del estudio en tamaño original (`rediseno/fotos-web.mjs`) |

## Qué se cambió (mismo contenido, otra forma)

- La página se centra en DM Studios; la tienda de karaoke queda como un enlace ("Ver su tienda de karaoke").
- La línea de tiempo de "Nosotros" se ordena por año (su página la muestra en dos columnas desordenadas).
- Se corrigen erratas al citar ("FOCUSRTIE" → Focusrite).

## Qué se agregó (no existía en el original)

- **"Sube los canales de tu sesión"** (elemento memorable): una consola con siete faders, uno por servicio (grabación, edición y mezcla, masterización, producción, postproducción, doblaje, podcast). Al subir un fader se encienden sus medidores y el servicio entra al mensaje de WhatsApp para reservar.
- Textos del estudio: el titular "Graba, mezcla y masteriza en DM Studios", la presentación, la explicación de la consola, "Más de 30 años en la música" y los textos alternativos.
- Barra fija en el celular (llamar, WhatsApp, cómo llegar), JSON-LD `RecordingStudio`, title, description, ícono e imagen para compartir.

## Qué se quitó o no se usó

- Los productos de karaoke (bocina K-box, micrófonos, CDs, catálogo de canciones), la tienda y los logotipos de tarjetas.
- La frase "uno de los tres más avanzados en estructura y tecnología en México" de su historia: es una afirmación que no se puede comprobar.

## Qué se conserva al pie de la letra

- Nombre del estudio, servicios, preamplificadores, dirección (Ejido San Lorenzo Tezonco 150, San Francisco Culhuacán de Santa Ana, Coyoacán, 04260), teléfono (55) 5607 2090, correo, horario (lunes a viernes, 9 a 18 h) y la historia de la empresa.

## Pendiente de confirmar con el cliente

- **WhatsApp**: el sitio no publica uno; los botones usan el teléfono (55) 5607 2090 hasta que confirme un número.
- Precios o tarifas por hora del estudio: no los publica.
- Si quiere que la página del estudio viva aparte de la tienda o como sección de destinomusical.com.

## Dónde está cada cosa

- Textos, servicios, preamps e historia: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs`
