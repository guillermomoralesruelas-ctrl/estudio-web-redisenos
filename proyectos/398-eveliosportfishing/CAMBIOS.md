# Evelio Sport Fishing: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.eveliosfishing.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/398-eveliosportfishing/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 398-eveliosportfishing`) |

## En una línea

Mismo negocio, mismas salidas, precios, fotos y contacto; cambia la forma: el turista elige el mes de su viaje y cuántos van, y ve qué salidas hay, cuánto cuestan y cuánto le toca a cada quien.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Página en blanco (0 px) por depender del JavaScript de IONOS | 2,995 px en escritorio, 0 errores |

## Qué se cambió (mismo contenido, otra forma)

- "Conoce nuestros paquetes" queda en cuatro tarjetas con foto y en el boleto con el precio de cada una.
- La galería se reduce a 4 fotos de capturas y clientes, más el premio del torneo.

## Qué se agregó (no existía en el original)

- El elemento **"¿Qué hay en el mar ese mes?"** (`Dia` en `App.tsx`; datos en `salidas`): meses con la temporada de ballenas, personas, salidas con estado y precio, costo por persona y WhatsApp con mes, salida y personas.
- WhatsApp que funciona (`wa.me/529541009497`); el suyo va sin el 52 de México.
- JSON-LD `TouristAttraction`; title y description; Open Graph; favicon con su logo.
- Textos nuestros: el H1, "¿Qué hay en el mar ese mes?" y su explicación, "Mes de tu viaje", "Van … personas", "Fuera de temporada en …", "Pregunta el precio", "Le toca a cada quien", "Su sitio no publica el precio para seis personas", "Lo que sale del agua", "Reserva con Evelio", "Arma tu salida" y los mensajes de WhatsApp.

## Qué se quitó o no se usó

- El banner de cookies con texto legal europeo, el video de YouTube incrustado y el traductor de Google.
- "Brindar el mejor de los servicios", "sin igual".
- Fotos de banco (delfín y marlín saltando) y los peces vela ilustrados.

## Qué se conserva al pie de la letra

- Precios: pesca de 5 horas $7,000; paseo a playas $1,500 (2 a 5 personas) y $2,000 (7 a 10); ballenas $700 por persona de noviembre a marzo.
- Teléfono 954 100 9497, Facebook, YouTube y el segundo lugar en Dorado del Torneo de Pesca Puerto Escondido 2024.

## Pendiente de confirmar con el cliente

- Precio del paseo para 6 personas y del avistamiento de delfines.
- Si la pesca de $7,000 es por lancha y para cuántas personas.
- Punto de salida (muelle o playa) para ponerlo en el mapa.
- Si el 954 100 9497 es su WhatsApp (su enlace va sin el 52).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño, secciones y el elemento: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` las genera en `.webp` desde `sitio/assets/wp-content/uploads/go-x/u/` hacia `../assets/web` (el `publicDir` de `rediseno/vite.config.ts`); no se descargó ninguna imagen.
