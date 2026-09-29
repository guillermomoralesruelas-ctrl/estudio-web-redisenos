# Arena Hybrid Club: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://arenahybridclub.com/ |
| Método | **1.2 en la nube**: el clon (Lovable) no traía fotos; se bajaron del sitio en vivo y se guardaron reducidas en `assets/originales/` |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/51-arenahybridclub/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 51-arenahybridclub`) |

## En una línea

El mismo gimnasio híbrido de Aguascalientes, con sus tres pilares, sus planes, sus anualidades y su club de corredores, en una página que funciona sin JavaScript de terceros y donde cada plan corre en su carril según cuántas clases tomas al mes.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Sitio de Lovable que se arma con JavaScript: el clon no trae contenido visible ni fotos (ver `qa/reporte-rediseno.json` → `antes`) | Página nueva con contenido real: 0 desbordes, 0 imágenes rotas, 0 recursos fallidos |

## Qué se cambió (mismo contenido, otra forma)

- Los precios (drop-in, packs y membresía) se volvieron "Carril por carril"; las anualidades y el Race Program quedaron en tarjetas.
- "El problema", "El concepto" y "Tu membresía" se juntaron en "Tres pilares, un sistema".
- La galería de 15 imágenes quedó en tres del espacio y seis de la comunidad.

## Qué se agregó (no existía en el original)

- **"Carril por carril"** (elemento memorable): pista de atletismo con un carril por plan. Se elige cuántas clases al mes (4, 8, 12, 18 o 24); cada carril muestra lo que costaría el mes, los packs que no alcanzan se apagan y el más barato se pinta de amarillo con su costo por clase. El WhatsApp lleva el plan y las clases.
- Textos nuestros: la entrada del H1, la explicación de la pista, "Más que un gimnasio: un club que corre junto" y los botones.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar), enlace a Google Maps, JSON-LD `ExerciseGym` y Open Graph.

## Qué se quitó o no se usó

- El evento ATHLO Athlete Series (Rayo Collection, $690 a $1,890): es de una sola edición y sin fecha publicada; se menciona en la comunidad.
- "La mayoría de los gyms no están diseñados para rendimiento real" con sus ✕, el manifiesto y "No es un evento, es una experiencia".
- El contador "0 de 100 membresías disponibles".
- Los videos y algunas imágenes del espacio (mismos ambientes repetidos).

## Qué se conserva al pie de la letra

- Tres pilares: Hybrid Training (inspirado en HYROX), Strength y Recovery (cold plunge, sauna, terapia de contraste, botas de compresión).
- Precios: drop-in $250; Hybrid Pack 8 clases $1,200, 12 clases $1,400, 18 clases $1,800 (30 días); Hybrid Membership 24 clases $2,200 al mes; Anualidad Full Access $19,150; Anualidad Área de Pesas $13,200; Arena Race Program $2,500 al mes, con lo que incluye cada uno.
- La membresía incluye 2 créditos de recovery al mes.
- Blvd. Luis Donaldo Colosio Murrieta 406, Puerto las Hadas, Aguascalientes; WhatsApp 449 769 7866; Instagram @arenahybridclub.

## Pendiente de confirmar con el cliente

- **Imágenes del espacio:** parecen renders del proyecto (su propio sitio llama "render arquitectónico" a una). Confirmar si ya abrió y cambiar por fotos reales.
- Fecha de apertura y horario (no se publican).
- Si el contador "0 de 100 membresías disponibles" significa que ya se agotaron o es un error.

## Dónde está cada cosa

- Pilares, planes, anualidades, comunidad y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y la pista: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: originales reducidas en `assets/originales/` y copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` (`publicDir` en `rediseno/vite.config.ts`)
