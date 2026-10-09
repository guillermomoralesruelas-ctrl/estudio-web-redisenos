# Lic. César Sobrado: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.cesarsobrado.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima (hecho en la nube) |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/653-liccesarsobrado/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El mismo nutriólogo, con sus textos, sus fotos del consultorio y su contacto, en una sola página con "La supermedición" (qué se mide en su consulta, sobre una silueta) y un WhatsApp que sí abre con el número completo.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 12 errores de consola: fuentes de Elementor (Montserrat, Aclonica, Dela Gothic One) bloqueadas por CORS | Fuentes locales con @fontsource (Sora e Inter); 0 errores |
| Contadores animados que arrancan en "+0" | Números fijos: +300 pacientes atendidos, +10 años de experiencia |
| Logotipo gigante en el pie y texto muy pequeño | Logotipo a la medida y texto de 16 a 18 px |

## Qué se cambió (mismo contenido, otra forma)

- Las tres páginas (inicio, servicios, contacto) quedan en una sola.
- Sus tres preguntas ("¿Harto de las dietas…?", "¿Estás listo para darlo todo…?", "¿Sufres enfermedades…?") van en tres columnas con su texto recortado y sin emojis.
- Los cinco pasos de "¿Qué veremos en mi consulta?" se ven abiertos, sin acordeón, sobre una cinta métrica.
- Los textos de servicios se recortaron (sin cambiar lo que dicen).
- Las fotos del clon se sirven como copias .webp desde `assets/web/` (`rediseno/fotos-web.mjs`).

## Qué se agregó (no existía en el original)

- **"La supermedición"** (elemento memorable): silueta con ocho puntos que muestran qué se mide (talla, brazo, pliegues, grasa/músculo/hueso, cintura, cadera, pierna, peso e IMC) y en qué servicio; el visitante elige su meta y las medidas que le interesan, y se arma el mensaje de WhatsApp.
- Textos del estudio: el H1 ("Nutriólogo en Cancún: transforma tu vida, a través de la nutrición."; la frase es suya), el subtítulo del hero, los títulos "La supermedición", "Olvídate de las dietas de siempre" (de su frase "Olvídate de las dietas de siempre…") y "Contáctame" (suyo), las descripciones cortas de cada medida (resumen de sus textos de antropometría e impedancia), las metas cortas ("Comer mejor sin dietas aburridas", "Rendir más en mi deporte", "Comer bien con una enfermedad") y los mensajes prellenados de WhatsApp.
- Barra fija en el celular: Agendar (WhatsApp), Llamar (`tel:`), Cómo llegar (Google Maps).
- JSON-LD `MedicalBusiness` con especialidad `DietNutrition`, dirección y teléfono; title, description e imagen para compartir.

## Qué se quitó o no se usó

- Las tres fotos de "casos" (`Nutricionista-en-cancun`, `Nutricionistas-en-cancun-1`, `Nutriologo-cancun`): modelos de banco recortadas sobre un patrón.
- Los íconos de Facebook, Instagram y WhatsApp del pie: en el sitio llevan a su propia página de inicio, no a sus redes.
- Las ondas decorativas del fondo (`Fondo-Cesar-1.png`), los emojis y el botón flotante de compartir.

## Qué se conserva al pie de la letra

- Nombre: Lic. César Sobrado, "Nutrición clínica y deportiva"; frase "Transforma tu vida, a través de la nutrición".
- Teléfono 998 480 9900 y dirección: Porto Napoli 21, Viocenter, primer piso, local 7, consultorio 3, 77533 Cancún, Q. R. Mapa: `goo.gl/maps/FhuvLt9A8tF5QusNA`.
- +300 pacientes atendidos y +10 años de experiencia (valores finales de sus contadores en `original.html`).
- Su presentación, sus tres preguntas, sus cinco pasos de consulta y sus cuatro servicios (recortados).

## Pendiente de confirmar con el cliente

- **WhatsApp:** su botón abre `api.whatsapp.com/send?phone=9984809900` (sin el 52). El rediseño usa `529984809900`; confirmar que ese número tiene WhatsApp.
- Horario de consulta, precio de la consulta y correo: no se publican.
- Redes sociales: sus íconos no llevan a ninguna; si tiene Facebook o Instagram, se agregan.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` (creadas por `rediseno/fotos-web.mjs`; `publicDir` en `rediseno/vite.config.ts`)
