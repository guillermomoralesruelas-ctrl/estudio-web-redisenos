# Plan de diseño — 10 Experiences (v1, 2026-09-25)

Hecho con la skill `frontend-design` (Anthropic): dos pasadas, plan y luego revisión contra los defaults genéricos.

## Tema, público y trabajo de la página
- **Tema:** una cena narrada de 10 tiempos que recorre México. El vocabulario del negocio es de **viaje**: pasaporte, postales, sellos de "admitido", itinerario, mapa iluminado sobre la mesa.
- **Público:** viajeros de EE. UU., Canadá y Reino Unido, y cruceristas en Cozumel.
- **Trabajo principal:** que la persona elija experiencia y horario y mande su solicitud de reserva (por WhatsApp) en menos de un minuto.

## Color (5 valores, derivados de la marca)
| Nombre | Hex | Uso |
|---|---|---|
| Noche | `#1E1612` | Fondo base (espresso de la marca, un poco más profundo) |
| Vela | `#A37932` | Botones, precios, detalles; el oro de la marca |
| Champán | `#D6BF8E` | Texto secundario y enlaces sobre Noche (contraste AA) |
| Papel | `#EADDC4` | Solo la sección del pasaporte: la página "de papel" |
| Tinta | `#2B1E17` | Texto sobre Papel |

## Tipografía
- **Cormorant Garamond** (500/600): titulares grandes y citas. Es la serif que la marca ya usa.
- **Nunito Sans** (400/600/700): texto e interfaz. Es la alternativa libre más cercana a la Avenir del sitio actual.
- Escala: 16 / 18 / 22 / 30 / 44 / 64 / 88. Cuerpo a 17-18px con interlineado de 1.65 y líneas de menos de 70 caracteres.

## Layout
```
[Header: logo · anclas · Reservar]
[HERO foto a sangre: titular a la izquierda, 2 CTAs, línea de reseñas]
[INTRO: texto izq + foto der · datos en lista de definición]
[PASAPORTE ▓ banda de papel · postales en fila horizontal · sellos]   ← lo memorable
[EXPERIENCIAS: Original 7/12 (grande) | Taco 5/12 · horarios como botones]
[OPINIONES: calificación + 4 citas en 2 columnas]
[PERSONAS: Chef / Lorena / Fundadores, foto ancha con texto encima]
[NARRADORES: 8 retratos]
[GALERÍA: pestañas + mosaico + visor]
[PREGUNTAS: 3 grupos, desplegables nativos]
[VISÍTANOS: sedes con "Cómo llegar" + contacto]
[Footer]  [Barra fija en móvil: Reservar | WhatsApp]
```
Todo alineado a la izquierda; nada centrado salvo la banda del pasaporte.

## Principios
1. **Un solo momento audaz:** la banda de papel del pasaporte, clara dentro de un sitio oscuro. Los sellos "caen" una sola vez cuando entra en pantalla. Es la única animación que no provoca la persona.
2. Todo lo demás, sereno y a la luz de las velas: fotos grandes, pocos bordes y ninguna tarjeta de más.
3. Reservar siempre está a un toque. Cada botón de horario abre la reserva con la experiencia y la hora ya elegidas.
4. Textos en voz del negocio, simples, en minúsculas normales. Los botones dicen exactamente lo que pasa ("Enviar por WhatsApp").

## Revisión contra los defaults (qué cambié y por qué)
- **Quité** las etiquetas en MAYÚSCULAS sobre cada título que tenía el primer prompt: son un tic de plantilla.
- **Quité** los números 01/02/03: las secciones no son una secuencia. Los 13 estados no se numeran porque no son los 10 tiempos.
- **Quité** las animaciones de entrada en todas las secciones, el parallax y los contadores animados. Solo queda el momento de los sellos.
- **Cambié** el eslogan con viñetas "Relato • Maridajes • Cultura • Conexión" por una frase normal: las cadenas con puntos medios son otro tic.
- **Oscuro con acento dorado** se parece al default "fondo casi negro con un acento". Se mantiene porque es la marca del cliente, y se rompe a propósito con la banda de papel del pasaporte.
- **Tarjetas de experiencias con tamaños distintos**, no dos cajas idénticas: la Original es el producto principal.

## Notas de construcción (v1)
- El pasaporte va **antes** de las experiencias: primero el deseo, luego la decisión. El botón de reservar ya está en el hero y en la barra fija.
- Galería: cuadrícula con una foto grande (todas las fotos son 2:3), 7 visibles en móvil y 6 en escritorio, y el visor muestra las 8.
- Las ilustraciones de los estados se convirtieron a WebP (de 7 MB a 1 MB en total). Los PNG originales se conservan.
- Fuentes locales con @fontsource (sin depender de Google Fonts).
