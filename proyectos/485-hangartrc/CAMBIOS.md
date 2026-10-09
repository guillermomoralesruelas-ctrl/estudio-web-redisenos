# Hangar TRC: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.hangartrc.com/ |
| Método | **1.2 en la nube**: el clon no traía fotos; se bajaron del sitio en vivo a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/485-hangartrc/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El mismo gimnasio, con sus 27 fotos, clases, precios y contacto, con "Tu pase de abordar" (disciplina, hora y duración dan tus clases, tu tarifa y tu ahorro).

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Página en blanco: el sitio se arma con JavaScript que el clon no descargó | Sitio completo compilado en `dist/` |
| Sin fotos | 27 fotos reales bajadas del sitio a `assets/originales/`, servidas como .webp; 0 rotas |
| 4 errores de consola y 3 recursos fallidos | 0 errores, sin scripts de terceros |

## Qué se cambió (mismo contenido, otra forma)

- Su carrusel de instalaciones que avanza solo queda como galería que el visitante controla, con sus mismos pies de foto.
- Sus preguntas frecuentes llevan la respuesta visible al abrirlas (las mismas de su sitio).
- Los planes de horario restringido se muestran dentro de cada plan para comparar.
- El formulario de contacto (con suma de verificación "¿Cuánto es 4 + 3?") se sustituye por llamada directa y correo ya armado desde el pase.

## Qué se agregó (no existía en el original)

- **"Tu pase de abordar"** (elemento memorable): disciplina, franja y duración; clases reales a esa hora, tarifa, total, equivalente al mes, ahorro frente a pagar mes a mes; llamar o mandar el pase por correo.
- Textos del estudio: el H1 "Hangar TRC: pesas, box y crossfit en Torreón", los datos del hero (desde $608 al mes, $0 inscripción, L-V 5 a 22 h, calculados de sus precios y horario), "Tu pase de abordar", "Arma tu plan de vuelo", "27 rincones para entrenar", los nombres de las franjas y el texto del pase.
- Barra fija en el celular (llamar, tu pase, cómo llegar), JSON-LD `ExerciseGym` con horario, title, description e imagen para compartir.

## Qué se quitó o no se usó

- El video de YouTube incrustado en el hero (queda como enlace en el pie).
- El "changelog" del pie, que es del desarrollador.
- Los planes duplicados (su sitio repite Mensualidad, Trimestre, Semestre y Anualidad dos veces).

## Qué se conserva al pie de la letra

- Nombre, logotipo, dirección, teléfono, correo, redes, enlace de Google Maps, horario.
- Sus 9 diferencias, los horarios de Box y Crossfit / Hyrox, todos los precios (visita, semana, quincena, planes, horario restringido, estancia infantil) y sus equivalencias al mes.
- Los pies de sus 27 fotos y las 6 preguntas frecuentes con sus respuestas.

## Pendiente de confirmar con el cliente

- Si el 871 942 3133 tiene WhatsApp (el sitio no lo dice).
- Si el horario restringido incluye clases o solo el área de pesas (el pase lo aplica solo a pesas de 10 a 4).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Fotos: originales en `assets/originales/`, copias .webp en `assets/web/` (`rediseno/fotos-web.mjs`)
