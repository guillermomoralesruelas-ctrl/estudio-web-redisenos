# Katarsis: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.katarsis.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/605-katarsiscdmx/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 605-katarsiscdmx`) |

## En una línea

Mismo centro, mismo equipo con sus cédulas y perfiles, mismos precios, sedes, pasos y respuestas; cambia la forma: se entra por **lo que quieres trabajar** y se llega a una persona del equipo, y las fotos de banco de médicos se sustituyen por los rostros reales de sus psicoterapeutas.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 29 imágenes rotas: logo, iconos de canales y `blur.png` (marcador de los retratos, que carga `lazy.js`, ausente) | Retratos en `.webp` servidos directo; logo desde `logo1.png`; iconos dibujados en SVG |
| 83 px de desborde en el celular | 0 |
| Fuentes de Font Awesome con 404 | No se usan |
| 27 errores y 14 recursos fallidos | 0 y 0 |

## Qué se cambió (mismo contenido, otra forma)

- El carrusel "Nuestro Equipo" y la página /nuestro-equipo quedan en un solo lugar: tarjetas con retrato, cédula, grado, enfoque, perfil, a quién atiende y modalidad, filtrables por tema. Los perfiles se acortaron sin cambiar lo que dicen (se quitó la repetición "Psicoterapia presencial y en línea" dentro del texto, que va aparte).
- Las dos listas de precios del inicio y de /nosotros, y la ventana del carrito (que tiene además el precio por sesión de cada paquete y la terapia de pareja), quedan en una sola sección.
- "¿Cómo funciona?" de /empresas y /nuestro-equipo pasa a la página principal.
- Las tres sedes del pie pasan a su propia sección, cada una con Google Maps (la de Tlalpan con su ficha de Maps; las otras dos con búsqueda por dirección, porque no tienen enlace propio).
- De la FAQ se usan 6 preguntas, redactadas un poco más cortas y con la ortografía corregida ("segur@" y "cómd@" quedan en masculino genérico).

## Qué se agregó (no existía en el original)

- El elemento **"¿De qué quieres hablar?"** (`DeQueQuieresHablar` y `Tarjeta` en `App.tsx`; temas en `content.ts` → `temas`). Cada tema lista solo a quienes lo mencionan en su perfil publicado.
- Selector "¿Cómo quieres tu sesión?" (en línea o presencial) que cambia el precio y el mensaje de WhatsApp de cada tarjeta.
- WhatsApp por psicoterapeuta ("Hola, me gustaría tomar una sesión en línea con…"), sin mencionar el tema. El mensaje general era "Hola, deseo  información" (con doble espacio).
- Barra fija en el celular (WhatsApp, Llamar, Sedes).
- JSON-LD `MedicalBusiness` con sus tres sedes, ofertas y redes, **sin** horario (el suyo decía abierto de 00:00 a 23:59 todos los días); title, description y Open Graph con los rostros del equipo.
- Textos nuestros: "¿De qué quieres hablar?", "Cada psicoterapeuta de Katarsis publica su formación y su experiencia. Elige un tema y ve quién lo menciona en su perfil, con su cédula profesional y su enfoque.", "Todo el equipo", los nombres de los temas (tomados de los perfiles), "¿Cómo quieres tu sesión?", "Quiero una sesión", "¿No encuentras tu tema? Escríbenos y el equipo de Katarsis te asigna un psicoterapeuta según tu horario. El mensaje de WhatsApp solo dice con quién quieres tu sesión, no el tema.", "Sedes para terapia presencial", "Solo se atiende previa cita. Escríbenos para agendar en la sede que te quede mejor.", "Encontrar psicoterapeuta", "Pedir información".

## Qué se quitó o no se usó

- Todas las fotos de banco: médicos con estetoscopio (`images/doctors.jpg`, `images/team-member-img1.jpg`), laboratorio, tabletas con electrocardiograma, la mujer en el balcón (`banner1.jpeg`, hoy su imagen para compartir) y los pies caminando (`banner2.jpg`).
- "ATENCIÓN 24/7" y "de lunes a domingo": contradicen "Sólo atendemos previa cita" de su propio pie.
- "Tenemos los mejores psicólogos" y "Somos la mejor comunidad de psicólogos online" (superlativos sin sustento).
- El chip del tema "suicidio" (un perfil lo menciona): se deja el aviso "Importante" con su texto de que no son servicio de emergencia.
- La sección para psicoterapeutas que quieren unirse ("Valor que ofrecemos al Psicoterapeuta", requisitos) y los datos de estrés laboral de /nosotros: no son para el paciente.
- El carrito y el pago con Stripe: el rediseño lleva a WhatsApp; su proceso de pago se mantiene en su sitio.
- Messenger, LinkedIn y la página de Facebook "psicadistancia".

## Qué se conserva al pie de la letra

- Nombres, cédulas, grados y enfoques de los 10 psicoterapeutas.
- Precios: en línea $750 / $2,900 / $5,600; presencial $800 / $3,100 / $6,000; pareja $900; "la tarifa de paquete solo aplica con pago anticipado"; sesión de 50 minutos.
- Las tres direcciones, "previa cita", el teléfono 55 5107 3098, el correo contacto@katarsis.mx y el aviso de que no es servicio de emergencia.

## Pendiente de confirmar con el cliente

- Calle y número de la sede de Tlalpan y número de la de Félix Parra (el sitio no los da).
- Si todo el equipo atiende en línea y presencial (4 perfiles no lo dicen) y en qué sede atiende cada quien.
- Si quieren que el botón de cada psicoterapeuta lleve a su carrito y pago en línea en lugar de WhatsApp.
- Horario real de atención (para ponerlo en Google en lugar de "24 horas").

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` genera los retratos `.webp`, el logo, el favicon y la imagen para compartir desde `sitio/assets/` hacia `../assets/web` (el `publicDir` de `rediseno/vite.config.ts`); no se descargó nada nuevo.
