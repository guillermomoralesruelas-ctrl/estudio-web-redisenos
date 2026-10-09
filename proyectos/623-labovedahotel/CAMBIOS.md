# La Bóveda Hotel: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://labovedahotel.com/ |
| Método | **1.2 en la nube**: el clon no trae fotos; se bajaron del sitio en vivo a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/623-labovedahotel/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La misma Bóveda, en una sola página con sus fotos, sus 5 suites con precio y su historia, más "¿Cuándo venir?": las fiestas de Nochistlán con su próxima fecha y la reserva por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Fotos servidas desde el CDN de Zyro; 4 recursos fallidos | 29 fotos y el logotipo en `assets/originales/`, en .webp desde el sitio |

## Qué se cambió (mismo contenido, otra forma)

- Sus cuatro páginas (inicio, habitaciones, salón, historia) se juntan en una sola.
- Las suites, que en su página se ven con galerías y una descripción fuera de lugar (la de la suite Alegre aparece antes de su título), quedan en una lista con nombre, camas, planta, vista y precio. Las fotos de habitaciones van en una galería aparte porque su sitio no deja claro cuál es de cada suite.
- La historia larga del edificio y del pueblo se resume en una línea del tiempo con sus fechas (1532, 1793, 1810, siglo XIX, 1866, 1913, hoy). Las descripciones de las suites también se resumieron sin cambiar sus datos.
- "Reserva Hoy" llamaba por teléfono; ahora abre WhatsApp con mensaje (el mismo número, que su sitio llama "Teléfono / WhatsApp").
- Ortografía: "Habitaciónes" → "Suites", "Cómodidad" → "Comodidad", "Quinceańeras" → "quinceañeras", "or cualquier momento" → "o cualquier momento", "consultación" → "consulta".

## Qué se agregó (no existía en el original)

- **"¿Cuándo venir?"** (elemento memorable): las fiestas del pueblo en 12 meses con la próxima fecha calculada desde hoy (El Hijo Ausente: último sábado y domingo de julio), selector de suite y noches, total con IVA y mensaje de WhatsApp.
- Textos del estudio: "Pueblo Mágico · Nochistlán, Zacatecas", el párrafo del hero (resumen de sus datos), "Donde el lujo se encuentra con la herencia mexicana" (de su texto de habitaciones), "¿Cuándo venir?" y su explicación, los títulos de la línea del tiempo, "En la Calle Victoria, en el centro del pueblo", la nota de fechas y los textos alternativos.
- Barra fija en el celular (WhatsApp, llamar, cómo llegar), JSON-LD `Hotel` con precios y horarios, title, description e imagen para compartir.

## Qué se quitó o no se usó

- La versión en inglés (`/en`): la propuesta es en español.
- Los enlaces de Instagram, que llevan a instagram.com sin cuenta, y el de Facebook del encabezado que lleva a facebook.com.
- La segunda cuenta de TikTok (@la.boveda.hotel): se usa @labovedahotel, la del encabezado (ver pendientes).

## Qué se conserva al pie de la letra

- Nombre, logotipo, "Elegancia. Historia. Comodidad.", las dos reseñas (A. Legaspi, O. Enriquez), los nombres, camas y precios de las 5 suites (con IVA), lo que incluye cada reserva, llegada 3:00 PM y salida 12:00 PM, los textos del salón y de sesiones de fotos, los datos de la historia, las fiestas y los puntos de interés de Nochistlán, dirección, teléfono, correo y el mapa de Google (su sitio ya lo tiene en un iframe).

## Pendiente de confirmar con el cliente

- Qué foto corresponde a cada suite, y que la descripción con la silla 'Miguelito' y la terraza es de la suite Alegre.
- Su cuenta de Instagram y cuál de las dos de TikTok es la buena.
- Fechas exactas de las fiestas de cada año.

## Dónde está cada cosa

- Textos, suites, historia y fiestas: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs` (crea los .webp)
