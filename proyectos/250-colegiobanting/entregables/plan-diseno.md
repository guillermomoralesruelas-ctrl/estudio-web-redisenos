# Colegio Banting: plan de rediseño (método 1.1)

**Sitio original:** https://www.colegiobanting.edu.mx/
**Materia prima:** clon en `../sitio/` (fotos en `sitio/assets/_astro/` y `sitio/assets/images/testimonials/`), textos de inicio, nosotros, equipo, comunidad y modelo educativo en `investigacion/crudo.json`. La red de la nube no llega al sitio.
**Rubro:** colegio bilingüe de preescolar, primaria y secundaria, desde 1994, parte del Grupo Educativo Banting. **Ciudad:** Chichimecas MZ70 LT20, Ajusco, Coyoacán, CDMX.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: agendador en iframe, asesor de voz, chat "Bantito" y videos de YouTube.
- Dos retratos de testimonios se llaman `madre-valores-ai.jpg` y `padre-horarios-ai.jpg` y llevan la palomita de "verified"; la foto `padre-integral.jpg` (un papá) dice "Madre de familia".

## Qué tiene que lograr el sitio
1. Que una familia que trabaja sepa cómo se cubre el día de su hijo, de la entrada a la hora en que pasa por él.
2. Modelo, inglés, seguridad y colegiatura desde $3,316 al mes, sin rodeos.
3. Agendar visita o pedir informes por WhatsApp.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| uva | `#4b2a8a` | Botones y títulos (el morado del uniforme) |
| noche | `#2a1a4f` | Fondo oscuro |
| tinta | `#1f1633` | Texto |
| papel | `#faf8fd` | Fondo claro |
| lila | `#ece6f7` | Tarjetas |
| sol | `#f6c945` | Acento sobre oscuro |
| pizarra | `#5d5670` | Texto secundario |

Contrastes: uva/papel 9.97, blanco/uva 10.51, tinta/papel 16.31, sol/noche 9.83, papel/noche 14.65, pizarra/papel 6.57, tinta/sol 10.94, uva/lila 8.63.
Fuentes: Fredoka 600 (títulos, redondeada y escolar) y Nunito Sans 400/700 (texto).

## Elemento memorable (uno solo)
**"¿A qué hora pasas por él?"**: se elige el nivel (preescolar, primaria o secundaria) y la hora a la que la familia puede recogerlo, de la salida hasta las 19:00. Una franja de 6:30 a 19:00 muestra su día real con los bloques de su página "Un día en Banting" y, después de la salida, el horario extendido (supervisión académica y recreativa, club de tareas y talleres sin costo extra) hasta la hora elegida. El WhatsApp pide informes con el nivel y la hora. No se ha usado antes en el estudio.

## Secciones
1. Portada: H1 "Colegio bilingüe en Coyoacán, desde 1994", colegiatura desde $3,316/mes.
2. ¿A qué hora pasas por él?
3. Modelo: cinco pilares, inglés con certificación, y lo que logra en cada etapa.
4. Seguridad: acceso Kigo, antibullying Insight, seguro escolar.
5. Colegiatura y lo que incluye; servicios (comedor, clubes, transporte).
6. Historia breve (1994, seis alumnos, Frederick Banting) y testimonios reales.
7. Contacto: dirección con Google Maps, teléfono, WhatsApp, admisiones, horario de oficina.
Barra fija en el celular: WhatsApp, Llamar, Cómo llegar.
