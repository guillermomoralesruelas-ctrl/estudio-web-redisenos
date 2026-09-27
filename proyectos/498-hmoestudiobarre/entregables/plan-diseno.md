# HMO Estudio BARRE 7: plan de rediseño (método 1.1)

**Sitio original:** https://barre-7.com.mx/ (WordPress con el tema Divi; páginas HMO Estudio, Blog, Comunidad, Tienda, Preguntas frecuentes). Es la página del **estudio presencial de Hermosillo**; el menú mezcla enlaces a barre-7.com, su plataforma de clases en línea con suscripción (Inicio, Entrenamientos, Suscripciones, Certificación, Iniciar sesión). Contacto: 9 botones de WhatsApp con el mismo mensaje "Hola".

**Materia prima:** `investigacion/crudo.json` (Inicio, Blog, Comunidad, Tienda y la entrada "Es hora de regresar") y `investigacion/resumen.json` (WhatsApp 5216621502587, Facebook, Instagram @barre.7; el resto de "teléfonos" son fechas e identificadores de archivos). El texto de `/beneficios/` y `/preguntas-frecuentes/` se leyó con curl.

**Comprobado en vivo** (curl al sitio real el 2026-09-27): título "HMO Estudio BARRE 7", dos H1 (uno vacío) y siete H2 vacíos, el único JSON-LD es un `Article` con autor "memo" (sin datos de negocio), ningún enlace `tel:`, todos los WhatsApp con el texto "Hola", el aviso de COVID «Contamos con las medidas sanitarias necesarias…» sigue publicado y las 8 fotos del estudio en el inicio tienen `alt=""`. No se bajó ninguna imagen nueva.

**Rubro:** estudio de barre (fusión de Pilates, Ballet y Entrenamiento Funcional) en Hermosillo, Son., de la instructora Cocoy Landavazo. Tipo para Google: `ExerciseGym`.

**Sobre las fotos (revisadas antes de construir):** el clon trae **8 fotos propias del estudio**: la fachada con su letrero (1600 px), cinco fotos de clase en la barra mandadas por WhatsApp en julio de 2021 (con cubrebocas), una alumna de espaldas en el tapete y un retrato de Cocoy (1024×574). Ninguna trae EXIF de Picasa o Google Maps ni marcas de IA. Hay suficientes (≥ 3). No se usan la selfie con cubrebocas, el fondo degradado de Instagram ni las portadas del blog (llevan texto encima).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 7,029 px y móvil 8,007 px, desborde 0, 12 imágenes con 7 rotas en escritorio y 11 en móvil (el video de YouTube y fotos cargadas por scripts de Divi), 26 y 30 errores de consola y 1 hoja de estilos con 404.
- A ojo: el video de la portada es un recuadro gris, una franja negra vacía donde iba la galería y una sección "Opción ONLINE" con 1,500 px en blanco.
- Fotos: copias `.webp` de 7 fotos y el logo (1.42 MB → 0.71 MB) y su favicon, con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca.

## Qué tiene que lograr el sitio
1. **Agendar la clase de prueba por WhatsApp** (el único objetivo que tiene hoy la página).
2. **Elegir paquete**: seis paquetes (1 a 20 clases) con la misma vigencia de 30 días; la duda real es "¿cuántas clases necesito si voy X veces por semana?".
3. Entender qué es barre y qué pasa en una clase (quien llega no sabe).
4. Confianza: Cocoy y sus alumnas. Llegar: dirección y Google Maps.

Público: mujeres de Hermosillo que buscan una clase de ejercicio de bajo impacto, con grupo e instructora.

## Dirección visual (primera pasada)
El rosa y el verde agua del degradado de su logo, sobre un fondo claro de estudio con espejo.

| Token | Color | Uso |
|---|---|---|
| `tinta` | `#173533` | Títulos, sección de Cocoy, tarjeta del paquete y pie (12.4:1 sobre `crema`; blanco encima 13.2:1) |
| `agua` | `#75a9a4` | Verde agua de su logo: texto pequeño sobre `tinta` (5.0:1) y bordes |
| `agua-honda` | `#2e6661` | Enlaces y botones de contorno (6.2:1 sobre `crema`, 6.6:1 sobre blanco, 5.7:1 sobre `rosa-clara`) |
| `rosa` | `#f4acc2` | Su rosa (CSS del clon): botones con texto `tinta` (7.2:1) y precio sobre `tinta` (7.2:1) |
| `rosa-honda` | `#9c2f55` | Acentos de texto sobre claro (6.7:1 sobre `crema`, 7.1:1 sobre blanco) |
| `crema` | `#fbf7f5` | Fondo; `texto` `#3b4544` encima 9.3:1 |

En el dibujo de la barra, las etiquetas del piso `#fff8f2` sobre madera `#8a5a3c` dan 5.5:1.

**Tipografía:** **Montserrat** (600 y 800) en títulos y **Open Sans** (400 y 600) en texto, dos de las familias que carga su tema Divi; de @fontsource y solo latino.

## Elemento memorable: "Tu mes en la barra"
Todos sus paquetes (1, 4, 8, 12, 16 y 20 clases) tienen **la misma vigencia de 30 días**, y su sitio los enseña desordenados (8, 12, 16, 20, 4, 1) sin decir cuál conviene. La pregunta de una alumna nueva no es "¿cuánto cuesta el de 16?", sino "si voy tres veces por semana, ¿cuál compro?". El elemento: eliges **cuántas veces por semana** (1 a 5) y se dibuja en SVG **una barra de ballet frente al espejo sobre un piso de madera marcado con los 30 días** (desde "Hoy"); tus clases se posan sobre la barra como puntos rosas, repartidas en el mes (1 vez → 4, 2 → 8, 3 → 12, 4 → 17, 5 → 21). Al lado, el paquete que te conviene (el más chico que alcanza), su precio, **cuánto sale cada clase**, las clases de repuesto si faltas un día, lo que costaría clase por clase ($200) y la fecha hasta la que corren los 30 días si empiezas hoy. Con 5 veces por semana se dice que el más grande es de 20 y que pregunten. El botón de WhatsApp lleva escrito "quiero ir 3 veces por semana… paquete de 12 clases ($1,100, vigencia de 30 días). ¿Qué horarios tienen?".

Sale del negocio: son sus seis precios y su vigencia; el reparto por semana es aritmética y se avisa que es ilustrativo (su sitio no publica horarios). No repite nada anterior: no es un reloj de horario (1MR Fitness), ni un plano, ni un selector de habitaciones; es la barra del estudio convertida en calendario.

## Estructura
1. Encabezado: logo, navegación y "Agendar" por WhatsApp.
2. Portada: H1 "Barre: fusión de Pilates, Ballet y Entrenamiento Funcional", su frase "El mejor momento para iniciar siempre es hoy", botones y dirección; foto de la clase en sentadilla en la barra.
3. Qué pasa en una clase: cinco frases de Cocoy en su blog, con tres fotos.
4. **Tu mes en la barra** y los seis paquetes en orden.
5. Cocoy: su cita y su retrato.
6. Lo que dicen sus alumnas (Guillermina M. y Viry C.) y la opción en línea.
7. Agenda y ubicación: WhatsApp, llamar, dirección, redes y la fachada enlazada a Google Maps.
8. Pie y barra fija en el celular: WhatsApp, Llamar y Cómo llegar.

## Revisión contra lo genérico (segunda pasada)
- Se quitan: el video de YouTube, la galería de Comunidad, las tres entradas del blog, la tienda de pelotas (enlaces de Amazon), el menú de la plataforma en línea y el aviso de medidas sanitarias.
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración, sin puntos medios; las cifras solo están en los paquetes.
- Solo se mueve la entrada de los puntos sobre la barra; quieta con `prefers-reduced-motion`.
- Sin inventar: sin horarios, sin precio de la clase de prueba, sin número exterior de la dirección, sin promesas de salud (los testimonios se recortan para quitar "huesos más fuertes", "rara vez se enferma" y "adelgazar").
- Sin videos incrustados ni scripts de terceros.
