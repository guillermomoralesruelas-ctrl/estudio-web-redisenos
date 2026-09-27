# HMO Estudio BARRE 7: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://barre-7.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/498-hmoestudiobarre/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 498-hmoestudiobarre`) |

## En una línea

Es el mismo estudio de Hermosillo con sus precios, fotos, textos de Cocoy y testimonios; cambia la forma: una sola página que explica qué es una clase, te dice qué paquete te conviene según cuántas veces por semana vas y agenda por WhatsApp con el mensaje ya escrito.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 7 imágenes rotas en escritorio y 11 en móvil (video de YouTube y fotos que cargan scripts de Divi) | 8 imágenes, 0 rotas |
| 26 y 30 errores de consola, 1 hoja de estilos con 404 | 0 errores, 0 fallidos |
| Franja negra vacía de la galería y 1,500 px en blanco en "Opción ONLINE" | Sin huecos; la opción en línea es un recuadro con su enlace |
| Fotos de WhatsApp de 1,000 a 1,600 px (1.42 MB) | 7 fotos y el logo en .webp (0.71 MB) con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Los paquetes van en orden (1, 4, 8, 12, 16 y 20 clases); su sitio los pone 8, 12, 16, 20, 4 y 1.
- H1: "Barre: fusión de Pilates, Ballet y Entrenamiento Funcional" (su lema de BARRE 7); "El mejor momento para iniciar siempre es hoy" pasa a ser el texto de la portada.
- "Qué pasa en una clase" junta frases de sus entradas "Beneficios" y "Entrenamiento funcional", recortadas a lo que describe la clase. Dos se resumieron: "No se necesita ser flexible para practicar barre: cada clase trae muchos estiramientos" y "Durante toda la clase te daremos instrucciones para mantener una postura correcta; entre las instrucciones y la buena música, no te deja pensar en otras cosas".
- La cita de Cocoy y los dos testimonios se recortaron: se quitaron "no solo es el adelgazar y tonificar", "huesos más fuertes", "un cuerpo sano que rara vez se enferma" y otras frases de salud.
- WhatsApp: `wa.me/526621502587` con mensajes escritos ("quiero agendar mi clase de prueba…" y el del paquete); su sitio manda solo "Hola".
- "Soriana encinas" → "Soriana Encinas".

## Qué se agregó (no existía en el original)

- **"Tu mes en la barra"**: eliges de 1 a 5 veces por semana; una barra de ballet dibujada sobre un piso con los 30 días de vigencia pone tus clases como puntos (floor(veces × 30 / 7)), y una tarjeta dice el paquete más chico que alcanza, su precio, el precio por clase, las clases de repuesto, lo que costaría clase por clase ($200) y la fecha en que terminan los 30 días si empiezas hoy (hora de Hermosillo); WhatsApp con veces por semana y paquete. Textos nuestros: el título, "Todos sus paquetes duran 30 días. Dinos cuántas veces…", "Te conviene", "de repuesto por si faltas un día", "El reparto es ilustrativo: los horarios los confirma el estudio", "Con 5 veces por semana serían unas 21 clases y su paquete más grande es de 20: pregunta por las que faltan" y "Todos los paquetes" con precio por clase (división de sus precios).
- Títulos y microcopy: "Estudio en Hermosillo, Sonora", "Qué pasa en una clase", "En palabras de Cocoy Landavazo, en su blog", los cinco subtítulos de la clase, "Lo que dicen sus alumnas", "¿Prefieres entrenar en casa?", "Agenda tu clase de prueba en el estudio", "Manda mensaje y te decimos cuándo puedes venir", "Barre en Hermosillo, Sonora. Todo suma." (su logo dice "todo suma").
- Barra fija en el celular, botón Llamar, Google Maps, JSON-LD `ExerciseGym` con dirección y rango de precios, Open Graph, favicon y textos alternativos en todas las fotos.

## Qué se quitó o no se usó

- El aviso «Contamos con las medidas sanitarias necesarias para que puedas entrenar de manera segura» (de la pandemia).
- El video de YouTube, la galería de Comunidad, las entradas del blog, la tienda (pelotas en Amazon), los comentarios y el menú de la plataforma en línea (queda un enlace a sus suscripciones).
- Fotos no usadas: la selfie con cubrebocas, el fondo degradado de Instagram y las portadas del blog con texto.

## Qué se conserva al pie de la letra

- Los seis paquetes y precios ($200, $500, $900, $1,100, $1,200 y $1,300) con vigencia de 30 días.
- "El mejor momento para iniciar siempre es hoy", la invitación a la clase de prueba, la dirección, la cita de Cocoy Landavazo (recortada), los testimonios de Guillermina M. y Viry C. (recortados) y "Si por alguna razón prefieres hacer ejercicio en tu casa…".
- WhatsApp 662 150 2587, Instagram @barre.7 y su Facebook.

## Pendiente de confirmar con el cliente

- Si el 662 150 2587 recibe llamadas (lo usa el botón "Llamar"); su sitio solo lo usa para WhatsApp.
- Horarios de las clases y si abren sábados (no están publicados; el elemento no los inventa).
- Precio de la clase de prueba (el sitio no lo dice) y si los precios siguen vigentes.
- Número exterior y punto exacto en Google Maps (hoy se busca "BARRE 7, Bv. Paseo de las Quintas, Hermosillo").
- Cómo se cuenta la vigencia de 30 días (desde la compra o desde la primera clase); el sitio muestra la fecha contando desde hoy.
- Que el retrato (`cocoy.webp`) es de Cocoy Landavazo: su sitio lo pone junto a su nombre, sin decirlo.
- Fotos recientes sin cubrebocas (todas las de clase son de 2021).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
