# Dra. Dafne Arellano, Medicina Estética y Láser: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.drdafnearellano.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/307-dermatologiaesteticaen/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 307-dermatologiaesteticaen`) |

## En una línea

Es la misma médica, con sus mismos textos, precios, cédulas, constancias, teléfono, WhatsApp, dirección y opiniones; cambia que todo cabe en una página de 7,151 px (antes 10,005 px), que cada botón abre WhatsApp con el tratamiento ya escrito y que su formación se ve en un mapa: eliges un tratamiento y se encienden las ciudades donde se entrenó para aplicarlo.

## Qué estaba roto o incompleto en el clon

Datos de `qa/reporte-rediseno.json` → `antes` y revisión a ojo.

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Muy largo: 10,005 px en escritorio y 16,581 px en móvil (más del límite de 16,000) | 7,151 px en escritorio y 12,942 px en móvil |
| El inicio repite VISIA, credenciales y las tres generaciones en varias secciones; más de 200 enlaces y un menú de más de 50 | Cada tema una vez; menú de cinco enlaces (Valoración, Formación, Tratamientos, La clínica, Contacto) |
| En móvil la carga no terminó (tiempo de espera de 45 s) y hubo un error de conexión, con analítica de terceros (Ahrefs) | Sitio estático de un solo JS y CSS, sin scripts de terceros: 0 errores y 0 recursos fallidos |
| 56 imágenes, la mayoría fotos de fabricante de los equipos y hojas de otoño de campaña | 3 fotos propias (retrato, fachada de 1991 y el Dr. Francisco en 1992) en .webp |

## Qué se cambió (mismo contenido, otra forma)

- La valoración ($600 MXN reembolsable, 45 a 60 minutos, qué incluye y cómo llegar) pasa a una sección propia al inicio, porque es el primer paso de todo tratamiento.
- Las 26 constancias de /doctora/ que usa el mapa pasan de una lista de más de 700 líneas a un mapa de formación con su lista filtrada por tratamiento.
- Los cinco precios "desde" que publica van como lista de carta, no como tarjetas.
- El catálogo de tratamientos va por familia (faciales, corporales, dermatología estética, cosmetología) en texto, y los equipos en una línea.
- Las tres generaciones de la clínica quedan en un párrafo con las dos fotos históricas.
- Paleta y tipografía de su marca: vino `#7A1E28`, crema, oro `#C9A876`, Playfair Display y Montserrat (de @fontsource, solo latín).

## Qué se agregó (no existía en el original)

- **"¿Dónde aprendió lo que te va a aplicar?"**: dos láminas (América y Europa) con un punto por cada ciudad de sus constancias. Eliges un tratamiento, se encienden solo las ciudades de esa formación con una línea a Puebla, y abajo aparece la lista de constancias (año, institución y ciudad), el precio "desde" si lo publica y el WhatsApp con el tratamiento escrito. La transición se apaga con `prefers-reduced-motion`.
- WhatsApp con mensaje prellenado según el tratamiento, en todos los botones (522212078722).
- Barra fija en el celular: WhatsApp, Llamar y Cómo llegar (Google Maps armado con su dirección).
- Enlace para verificar sus dos cédulas en el Registro Nacional de Profesionistas.
- JSON-LD `MedicalClinic` y `Physician` con dirección, coordenadas, horario y cédulas.
- Textos redactados por nosotros: los títulos de sección, la explicación del mapa y los mensajes de WhatsApp.

## Qué se quitó o no se usó

- Las cifras de marketing "10,000+ procedimientos exitosos y resultados comprobados" y "100 %", y los sellos de Google y LegitScript: son afirmaciones de resultados que no se pueden sostener en un sitio médico.
- Los números de calificación (4.9, 143 y 181 reseñas): se dejan dos opiniones textuales con su fuente, sin cifras.
- Las fotos de fabricante de los equipos (Alma, Lumenis, Fotona, EndyMed, HydraFacial, VISIA) y las hojas de otoño de la campaña.
- La numeración 01/02 del Protocolo Estrella y los puntos medios como separador.
- La analítica de Ahrefs y cualquier script de terceros.

## Qué se conserva al pie de la letra

- Nombre, cédulas 9048813 y 11077470, teléfono +52 221 207 8722, WhatsApp, correo contacto@drdafnearellano.mx y dirección C. 20 Sur 2539, Col. Bella Vista, 72500 Puebla.
- Precios: Botox desde $3,500; ácido hialurónico desde $7,500; láser CO2 fraccionado desde $5,500; armonización facial desde $15,000; Protocolo Estrella $15,000; valoración $600 reembolsable.
- Su metodología (VISIA primero, producto original con caja y lote, ella aplica, hialuronidasa en consultorio), a quién deriva, la historia de la clínica, las dos opiniones y su aviso legal.

## Pendiente de confirmar con el cliente

- **Horario:** el encabezado y el pie de su sitio, y su JSON-LD, dicen 9:00; su barra superior dice "Lun–Vie 10:00–19:00 · Sáb 10:00–14:00". El rediseño usa 9:00.
- **Relación tratamiento–constancia del mapa:** es nuestra lectura del título de cada diploma; la doctora debe confirmarla. Las constancias que no dicen sede van como "sin sede indicada".
- Si el punto de Google Maps armado con la dirección es el correcto.
- Si quiere mostrar su calificación de Google (4.9, 181 reseñas) y la de Doctoralia.
- Retratos de más calidad (el que publica mide 420 × 630 px) y fotos propias del consultorio y los equipos.
- Relación con el sitio de la clínica familiar (`235-clinicadermatologicay`, Dr. Arístides Arellano): son la misma clínica; conviene que ambos sitios se enlacen.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` (`publicDir` en `rediseno/vite.config.ts`), generadas desde el clon por `rediseno/fotos-web.mjs`
