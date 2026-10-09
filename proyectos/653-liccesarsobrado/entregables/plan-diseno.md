# Lic. César Sobrado: plan de rediseño (método 1.1)

**Sitio original:** https://www.cesarsobrado.com/ (WordPress con Elementor; páginas: inicio, servicios, contacto). Nutriólogo en Cancún, nutrición clínica y deportiva, consultorio en Viocenter (Porto Napoli 21).

**Materia prima:** clon en `../sitio/` con 5 fotos propias de una sesión profesional en su consultorio de paredes aqua (escritorio, tomando la presión, computadora, de pie con carpeta, con platos de alimentos) y sus logotipos (SVG a color y PNG en blanco). Textos en `investigacion/crudo.json` (3 páginas); contadores reales en `original.html` (+300 pacientes, +10 años). Fotos a .webp en `../assets/web/` (`rediseno/fotos-web.mjs`).

No se usan las tres fotos de "casos" (mujer con hot dog y ensalada, hombre musculoso, niño con báscula): son modelos de banco recortadas sobre un patrón.

**Contacto real:** tel. 998 480 9900 (su botón de cita abre WhatsApp con ese número), Porto Napoli 21, Viocenter, primer piso, local 7, consultorio 3, 77533 Cancún; mapa `goo.gl/maps/FhuvLt9A8tF5QusNA`. No publica horario, precios ni correo.

## Qué le falta al clon

- `qa-rediseno.mjs` (antes): escritorio 4,151 px, móvil 6,527 px, 0 desbordes, 0 imágenes rotas, 12 errores de consola (fuentes de Elementor bloqueadas por CORS).
- A ojo: centrado, texto pequeño con emojis, contadores animados que arrancan en +0, íconos de redes que no llevan a ninguna red, logotipo enorme en el pie.

## Qué tiene que lograr el sitio

1. Que quien busca "nutriólogo en Cancún" entienda en segundos quién es, qué hace y dónde está.
2. Agendar la consulta por WhatsApp con un mensaje que ya diga su meta.
3. Quitar el miedo a la primera consulta: qué se mide y qué pasa en cada paso.

Público: adultos en Cancún que quieren comer mejor, deportistas y personas con enfermedades que piden restricciones alimenticias (sus tres preguntas del inicio).

## Dirección visual (primera pasada)

Colores del logotipo SVG (`#2b8f9a` aqua y `#fab72b` ámbar) y el menta de las paredes de su consultorio.

| Token | Color | Uso |
|---|---|---|
| `tinta` | `#142326` | Texto y fondo de la supermedición y el pie |
| `agua` | `#2B8F9A` | Aqua del logotipo: bordes y trazos |
| `hondo` | `#1B6670` | Texto y botones sobre claro (AA con blanco) |
| `ambar` | `#FAB72B` | Ámbar del logotipo: la cinta métrica y acentos sobre oscuro |
| `menta` | `#E3F3F1` | Fondo del hero y de la consulta |
| `papel` | `#FBFAF6` | Fondo general |

Tipografía (@fontsource, solo latín): **Sora** 600/700 para títulos (geométrica y clara, cercana a su logotipo) e **Inter** 400/600 para el texto.

## Elemento memorable: "La supermedición"

Sale de su propio texto: el paso 2 de su consulta es la «supermedición del cuerpo» con cinta métrica, calibradores y "balanza mágica" (talla, peso, IMC, circunferencias y pliegues), y sus servicios añaden composición corporal por impedancia (grasa, músculo, hueso, hidratación).

- Una silueta sencilla con ocho puntos (talla, brazo, pliegues, composición, cintura, cadera, pierna, peso/IMC). Al tocar un punto, o su botón, se ve qué es y en qué servicio se hace (con sus palabras). La cintura y la cadera se marcan con una cinta punteada ámbar.
- "Quiero que me midan esto" agrega la medida al mensaje; se elige una de sus tres metas.
- El mensaje de WhatsApp se arma en pantalla: "¡Hola! Quiero agendar mi consulta de nutrición. Mi meta: rendir más en mi deporte. Me interesa que midamos: cintura, grasa, músculo y hueso."
- La cinta métrica ámbar con marcas de centímetro se repite como línea de tiempo de los cinco pasos y junto a la foto del hero.

No repite elementos usados: no es "¿Qué te trae a consulta?" (motivos de Dr. Hugo Sánchez) ni la hoja de primera consulta de Fátima Buenfil; es un mapa del cuerpo con lo que se mide.

## Estructura

1. Nav fijo: logotipo, secciones y "Agenda tu consulta".
2. Hero: H1 "Nutriólogo en Cancún: transforma tu vida, a través de la nutrición.", foto en su escritorio, +300 pacientes, +10 años.
3. ¡Hola!: su presentación con tres fotos del consultorio.
4. La supermedición (elemento memorable).
5. Sus tres preguntas (dietas, deporte, restricciones) con su texto.
6. ¿Qué veremos en mi consulta?: los cinco pasos sobre la cinta, con la foto de los platos.
7. Servicios: los cuatro de su página.
8. Contacto: dirección, teléfono, WhatsApp y foto que abre Google Maps (el original no incrusta mapa).
9. Pie y barra fija en el celular: Agendar, Llamar, Cómo llegar.

## Revisión contra lo genérico (segunda pasada)

- Sin fotos de banco: solo las suyas en el consultorio.
- Sin emojis ni contadores animados; los números se ven quietos.
- El ámbar solo aparece como cinta métrica y en botones sobre oscuro.
- Sin etiquetas en mayúsculas, numeración 01/02 ni animaciones por sección; solo late el punto activo de la silueta (se apaga con `prefers-reduced-motion`).
