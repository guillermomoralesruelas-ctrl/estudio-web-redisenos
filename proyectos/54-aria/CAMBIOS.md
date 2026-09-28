# ARIA: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://somosaria.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/54-aria/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 54-aria`) |

## En una línea

Es la misma academia, con su dirección, su WhatsApp, sus ritmos, sus precios individuales y en pareja, sus paquetes de boda y sus preguntas frecuentes. Cambia la forma: todo en una página y, con "¿Cuántas clases te caben?", cada quien ve en un calendario real qué paquete termina antes de que venza.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| El clon no se ve: el HTML de Astro quedó con rutas rotas y la captura mide 0 px (defecto del clonador) | 0 imágenes rotas, 0 errores, 0 recursos fallidos, 0 desbordes, 1 H1; 6,090 px en escritorio y 9,803 px en celular |
| Precios en una página aparte y vigencias en letra chica | Paquetes con clases, vigencia, precio individual y en pareja, e inscripción, junto al calendario |
| GTM, Microsoft Clarity y píxel de Facebook en la portada | Sin scripts de terceros salvo el mapa real de Google; 9 fotos .webp (0.35 MB) con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Precios de sus páginas en vivo: 8, 12, 18 y 24 clases, con 16, 20, 30 y 38 días de vigencia; individual $899, $1,369, $1,789 y $2,099; pareja $1,259, $1,789, $2,189 y $2,599. Inscripción $250 (aparte en 8 y 12 clases, incluida en 18 y 24). Clase suelta $170 individual y $240 en pareja.
- Coreografía de boda: 5 clases $3,299, 8 clases $4,699 y 10 clases $5,299.
- La promoción VIVAMEXICO15 (15%) se muestra solo hasta el 30 de septiembre de 2026, la fecha que da su sitio; después desaparece sola.
- Sus preguntas frecuentes se resumieron en nueve.
- El horario es el de su página "Horarios y ubicación" (sábado de 10:00 a 13:00 y de 15:00 a 18:00).

## Qué se agregó (no existía en el original)

- **"¿Cuántas clases te caben?"**: eliges días (lunes a sábado), horas por visita (0.5 a 2) e individual o pareja. Un calendario de 38 días desde hoy marca tus visitas; cada paquete dice "Lo terminas el…" o "Usarías X de N", con precio por hora. El más grande que sí terminas lleva "Te conviene". El WhatsApp ya dice paquete, días y horas. Supone que cada clase es de una hora, como dice su sitio.
- Textos nuestros: el H1, la bajada de la portada, los títulos de sección, "¿Cuántas clases te caben?" y su explicación, los botones y los mensajes de WhatsApp.
- El aviso de la puerta del edificio (su texto) junto al mapa real de Google, con el enlace "Ver ARIA en Google Maps" detrás.
- Barra fija en el celular: Clase gratis (WhatsApp), Llamar y Cómo llegar.
- JSON-LD `LocalBusiness` + `EducationalOrganization` con dirección, coordenadas, horario y redes. Open Graph con la foto de clase.

## Qué se quitó o no se usó

- La imagen "Su primer baile" de boda (1456 × 816, parece generada con IA) y los banners de promoción con texto.
- Los carruseles, contadores, el formulario de contacto, el blog y los rastreadores (GTM, Clarity, píxel de Facebook).

## Qué se conserva al pie de la letra

- Av. Baja California 275, piso 5, Hipódromo Condesa, CDMX, 06100; WhatsApp y teléfono +52 56 3468 4421.
- Horario de lunes a viernes de 11:00 a 14:00 y de 15:00 a 21:00.
- Precios, vigencias, inscripción, clase suelta, paquetes de boda, TotalPass (TP3+, 10 visitas al mes) y Wellhub (Gold+, hasta 20 al mes y 4 por semana).
- 4.8 en Google, +4 mil alumnos y +13 mil clases desde 2022; su equipo (Abigail, directora; Iván, Evelyn y Mariana) y cuatro de sus reseñas.

## Pendiente de confirmar con el cliente

- El horario del sábado: "Horarios y ubicación" dice de 10:00 a 13:00; sus páginas de TotalPass y Wellhub dicen de 11:00 a 14:00. Se usó el primero.
- El piso: casi todo el sitio dice piso 5; la pregunta de boda dice piso 4. Se usó piso 5.
- Si la inscripción va aparte en el paquete individual de 12 clases (su sitio lo dice para pareja; se supuso igual).
- Si la promoción VIVAMEXICO15 sigue o se extiende.
- Una foto real de una pareja de boda para esa sección.

## Dónde está cada cosa

- Textos, precios, horarios y preguntas: `rediseno/src/data/content.ts`
- Diseño, secciones y "¿Cuántas clases te caben?": `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/_astro/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
