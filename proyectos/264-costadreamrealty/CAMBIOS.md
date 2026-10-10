# Costa Dream Realty: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.costadreamrealty.com/ (EasyBroker) |
| Método | **1.2 en la nube** (lote 9): el clon solo trae el logotipo y unas capturas; el catálogo vive en EasyBroker. Se leyeron las 3 páginas de `/properties` (50 propiedades) y se bajó la portada de cada una a `assets/originales/portadas/` |
| Fecha | 2026-10-10 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/264-costadreamrealty/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La asesoría inmobiliaria de Elsa Ontiveros en una sola página en español con los colores de la costa de Oaxaca: sus 50 propiedades sobre una línea de costa de Puerto Escondido a Huatulco, filtros por tipo y preventa, y WhatsApp por propiedad.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| No trae las propiedades (EasyBroker las arma en el servidor y el clon no las incluye) | Las 50 fichas se leyeron en vivo; sus datos (operación, precio y moneda, zona, recámaras, baños, m², coordenadas) están en `rediseno/src/data/content.ts` y la portada de cada una en `assets/originales/portadas/<código EB>.jpg` |

## Qué se cambió (mismo contenido, otra forma)

- El sitio mezcla inglés y español; el rediseño va en español (sus textos en español de "Quién está detrás" y "Qué hacemos", y traducciones fieles de "Why the Oaxaca Coast" y "What we look at").
- Los títulos largos de las fichas (en inglés, como "Ocean-View 2BR Condo in Zipolite | 89.25 m² / 961 sq ft, 5 Min to Beach") se muestran como tipo + lugar + pueblo. El pueblo lo asignó el estudio a partir de la ubicación y del título (una ficha de Puerto Ángel que EasyBroker ubica en "Playa Zipolite" va en Puerto Ángel).
- Los precios van en la moneda que publica cada ficha (pesos o dólares), primero pesos y luego dólares, de menor a mayor; no se convierten.
- Se muestran 9 propiedades y el botón "Ver las N restantes" abre el resto.

## Qué se agregó (no existía en el original)

- **"La costa, pueblo por pueblo"** (elemento memorable): la costa de Oaxaca dibujada como una línea de poniente a oriente (Puerto Escondido, Mazunte, Zipolite, Puerto Ángel, Huatulco) con un punto por propiedad publicada; se toca un pueblo y la lista se filtra. Debajo, "tierra adentro": San Miguel de Allende y otros destinos (sierra de San José del Pacífico y un hostal en Playa del Carmen). Las frases de Huatulco, Mazunte, Zipolite y Puerto Ángel son las de su página "Why the Oaxaca Coast".
- Cada ficha: "Preguntar" por WhatsApp con tipo, lugar, precio y enlace a su ficha ya escritos; "Mapa" con sus coordenadas ("Mapa aprox." cuando EasyBroker marca la ubicación como aproximada) y "Ficha completa".
- Textos del estudio: el titular "Propiedades en la costa de Oaxaca, sin lo obvio" (de su lema "For buyers who are not looking for the obvious Mexico"), la explicación del mapa, "Lo que revisamos antes de recomendar", "Cuéntame tus objetivos y tus tiempos" y los textos alternativos.
- Barra fija en el celular (llamar, WhatsApp, agendar videollamada), JSON-LD `RealEstateAgent`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Las decenas de páginas de inversión, guías, revista y subdominios: se enlaza su revista en Substack.
- La portada de la ficha EB-TB7446 (es una captura de Google Maps): sale "Foto en la ficha original".
- El pin de la casa nueva de Zipolite (EB-WH6643): EasyBroker la ubica cerca de la ciudad de Oaxaca, así que su ficha no tiene botón "Mapa".

## Qué se conserva al pie de la letra

- Nombre, fundadora y su bio, WhatsApp local (958) 107 9570, teléfono nacional (55) 1007 6781, internacional +1 (213) 550 1067, correo, enlace de agenda, redes, servicios y los precios, medidas y operación de cada ficha.

## Pendiente de confirmar con el cliente

- **Dirección de oficina**: no la publica. No hay botón general de "Cómo llegar"; el tercer botón de la barra del celular es "Agendar" y cada propiedad tiene su mapa.
- Algunas portadas son renders de preventa: conviene confirmar que puede usarlos.
- El pin de EB-WH6643 y la ubicación de EB-WO6872 (dice Puerto Ángel en el título y Playa Zipolite en EasyBroker).

## Dónde está cada cosa

- Textos, pueblos y propiedades: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/portadas/` y `rediseno/fotos-web.mjs` (copias .webp en `assets/web/p/`)
