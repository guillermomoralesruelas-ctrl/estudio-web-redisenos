# Escuela de Fotografía: plan de rediseño (método 1.1)

**Sitio original:** https://www.escueladefotografia.com.mx/ (WordPress 6.9 con el tema Divi)
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/wp-content/uploads/`), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`. Se consultaron con curl el 2026-09-27 sus páginas `/reglamento/`, `/aviso-de-privacidad/`, `/pagos-en-linea/` e `/inscripciones/`.
**Rubro:** educación, escuela de fotografía para principiantes (Susunaga Escuela de Fotografía & Arte, profesor Luis Susunaga).
**Ciudad:** Torreón, Coahuila (domicilio de su aviso de privacidad y lada 871). Su formulario de inscripción tiene unidades en Aguascalientes, Durango, Saltillo y Torreón, además de cursos online. La base de chatbots la tenía como "Ciudad de México", pero el sitio no menciona la CDMX en ninguna parte.

## Qué le falta al clon (los "detallitos")
- 18 imágenes rotas en escritorio y 10 en el celular: el logo, la portada, el retrato del profesor y los anuncios de cursos quedaron con rutas mal armadas (`...com.mxassets/...`) o apuntando al sitio en línea.
- Errores de consola `ERR_NAME_NOT_RESOLVED` por esas rutas.
- 10 etiquetas H1 y 206 imágenes sin `alt` (esto viene del sitio original).
- Página larguísima: 25,202 px en escritorio y 22,152 px en el celular, casi todo por la galería de 206 fotos.
- Los videos de Wistia, la caja de comentarios de Facebook y el aviso de cookies no funcionan en el clon.

## Qué tiene que lograr el sitio
1. **Que el interesado pida informes**, que es lo que su propio formulario de inscripción pide hacer antes de inscribirse ("ANTES de inscribirte te sugerimos contactarnos"). El original manda todo a Messenger; el rediseño lo manda a WhatsApp con el mensaje escrito y deja Messenger como segunda opción.
2. Dejar claro qué cursos hay (8 online con profesor en vivo y 3 presenciales) y dónde se toman los presenciales.
3. Dar confianza: quién enseña (Luis Susunaga), desde cuándo (2008), las cifras que ellos publican y las reglas antes de inscribirse.

## Dirección visual

La idea es un cuarto oscuro y una hoja impresa: secciones negras donde se ven las fotos y secciones de papel cálido para leer.

| Token | Color | Uso |
|---|---|---|
| `tinta` | `#151413` | Fondo del encabezado, la portada y el contacto; títulos sobre papel |
| `carbon` | `#22201e` | Fondo de la sección "¿Qué cámara tienes?" |
| `rojo` | `#9a0103` | Rojo de su logotipo: botones y enlaces sobre papel |
| `rojo-claro` | `#ff7a6e` | Enlaces y acentos sobre fondo oscuro |
| `papel` | `#f4f1ea` | Fondo de lectura |
| `texto` | `#4a4642` | Texto corrido |
| `humo` / `visor` | `#a8a29a` / `#e9e4d8` | Texto secundario sobre oscuro y la lectura del visor |

Contrastes (WCAG): texto/papel 8.3, tinta/papel 16.3, rojo/papel 7.8, blanco/rojo 8.8, rojo-claro/tinta 7.2, humo/tinta 7.3, humo/carbon 6.4, visor/negro 16.6. Todos pasan AA.

**Tipografía:** Barlow Condensed 600/700 en títulos (condensada, como el logotipo), Barlow 400/600 en el texto e IBM Plex Mono 500 para la lectura del visor (velocidad, diafragma, ISO). Todas de @fontsource, solo el subconjunto latino.

## Elemento memorable

**"¿Qué cámara tienes?"** Su formulario de inscripción pregunta si tu cámara es réflex y su marca y modelo, y las fotos de su portafolio de alumnos guardan en el EXIF con qué cámara, lente y ajustes se tomaron (174 de 206). El visitante elige su cámara (Canon Rebel T3i, Nikon D3100, Sony SLT-A37…) y ve fotos reales de alumnos tomadas con ese mismo modelo, dentro de un visor de réflex con la lectura de velocidad, diafragma, ISO y milímetros. El botón de WhatsApp cambia a "Tengo una D3100: quiero informes" y el mensaje ya lleva la cámara escrita. Si no tiene cámara, se le muestra el punto 14 de su reglamento (se presta cámara en clase; hay que traer tarjeta SD).

Sale del negocio mismo: responde la duda más común del principiante ("¿con mi cámara sencilla puedo sacar fotos así?") con el trabajo de sus propios alumnos, y le da a la escuela un dato útil en el primer mensaje.

## Estructura
1. Encabezado fijo oscuro con el logo, el menú y "Informes" (WhatsApp).
2. Portada: H1 "Cursos de fotografía para principiantes", su texto de bienvenida, las cifras (1,167 egresados, 98% de calificaciones positivas) y una foto de alumno en el visor con sus ajustes.
3. ¿Qué cámara tienes? (el elemento memorable).
4. Cursos: online con profesor en vivo y presenciales, cada uno con su enlace a WhatsApp; la lista de talleres.
5. Profesor: Luis Susunaga, su biografía y su sitio.
6. Inscripción: el diploma, cómo inscribirse, enlaces para alumnos y un resumen del reglamento.
7. Aprende ¡gratis!: las seis entradas más recientes del fotoblog.
8. Contacto: WhatsApp, Messenger, teléfonos, correo, domicilio con enlace a Google Maps y redes.
9. Barra fija en el celular: WhatsApp, Llamar y Cómo llegar.

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas sobre cada sección, numeración 01/02 y puntos medios como separador: no hay.
- Animar cada sección al hacer scroll: la única animación es el "revelado" de la foto al cambiar de cámara, y se apaga con `prefers-reduced-motion`.
- Tarjetas idénticas repetidas: los cursos, el reglamento y el blog son listas con filetes, no tarjetas.
- La galería de 206 fotos se sustituye por el visor, que enseña 58 con contexto.
- Inventar reseñas, fotos, precios o datos del negocio: no hay precios porque el sitio no los publica; las cifras y la biografía son las suyas.
