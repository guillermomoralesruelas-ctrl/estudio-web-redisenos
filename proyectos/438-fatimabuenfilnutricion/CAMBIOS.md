# Fátima Buenfil Nutrición Clínica: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.fatimabuenfil.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/438-fatimabuenfilnutricion/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 438-fatimabuenfilnutricion`) |

## En una línea

La misma nutrióloga, sus cédulas, su currículum, sus servicios y su WhatsApp, pero en una sola página sin restos de plantilla ni fotos de banco: sus cuatro fotos propias y una hoja de primera consulta que el paciente llena en pantalla y manda por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| El clon depende de la plantilla Joomla Salient (Gantry 5) con carrusel y scripts; ver `qa/reporte-rediseno.json` → `antes` | Diseño nuevo sin plantilla ni scripts de terceros: 0 desbordes, 0 imágenes rotas y 0 recursos fallidos |
| Las páginas de servicios y especialidades solo traen títulos y "más información" | Los servicios con sus textos cortos y las especialidades como opciones de la hoja |
| Las fotos de servicios, especialidades y blog son de banco | Solo sus 4 fotos propias, copiadas a .webp en `assets/web/` con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Cinco páginas (inicio, servicios, especialidades, currículum y blog) en una sola.
- Sus nueve especialidades y la consulta general pasaron de tarjetas con foto de banco a opciones de la hoja de consulta.
- El currículum, antes una página muy larga con títulos repetidos, en cinco secciones que se abren, con el número de puntos de cada una.
- El blog: tres artículos con su primer párrafo y enlace a su sitio.

## Qué se agregó (no existía en el original)

- **"Tu hoja de primera consulta"** (elemento memorable): una hoja clínica con su logo, nombre y cédulas que se llena en pantalla con el motivo (sus especialidades), la modalidad (consultorio, domicilio o distancia), el nombre y una nota, con la fecha del día; para empresa, escuela, talleres o menús se vuelve "Solicitud de servicio" con el nombre de la institución. El botón manda la hoja por WhatsApp tal cual.
- Textos nuestros: el H1 "Nutrición clínica en Mérida, Yucatán", el párrafo de la portada (armado con sus grados y sus tres modalidades), la entrada de la hoja ("Una nutrióloga de hospital empieza con una hoja clínica…"), "En su consultorio 705 del Hospital Star Médica de Mérida." (texto de la consulta general, que en su sitio se corta), "Agenda tu cita", la nota de la SEP, los nombres de los grupos del currículum abreviados y los textos de los botones.
- Enlaces a Google Maps del Hospital Star Médica y del Centro Médico de las Américas; barra fija en el celular (WhatsApp, Llamar, Cómo llegar).
- JSON-LD de tipo `MedicalBusiness` (especialidad `DietNutrition`) con teléfono, hospital, redes y la nutrióloga; Open Graph; `alt` en todas las fotos.

## Qué se quitó o no se usó

- Las fotos de banco de servicios, especialidades y blog (consulta a domicilio, a distancia, niña con fruta, familia, pláticas, ensaladas, sonda, gráfico de IMC, etiquetado).
- El texto de demostración de la plantilla que se ve en su blog ("Creativity", "Innovation", "Originality", "Imagination" y "Salient is an excellent design… Download").
- La entrada del blog sobre COVID-19 y las páginas Recetas y Descargas (no están en la captura).
- Las listas de congresos y algunos seminarios repetidos del currículum: se dejaron los de sus grupos principales; el currículum completo sigue en su sitio.
- La página "Agendar Cita" (no está en la captura): la cita es por WhatsApp.

## Qué se conserva al pie de la letra

- MNC. ED. Fátima Buenfil Rello, Maestra en Nutrición Clínica, Educadora en Diabetes, Investigación Clínica; Cédula profesional 7443679 y de especialidad 8686291.
- Consultorio 705 del Hospital Star Médica de Mérida y Hospital Centro Médico de las Américas.
- Los textos de consulta a domicilio y a distancia, "¿Qué es la nutrición clínica?" (sus dos primeras frases) y los nombres de sus nueve especialidades.
- Su investigación, certificaciones, docencia y ponencias (resumidas en redacción, sin agregar nada); "Profesor titular" se escribió "Profesora titular".
- WhatsApp 999 260 2804, Facebook /FatimaNutricion e Instagram @fatimanutricion.

## Pendiente de confirmar con el cliente

- **Horario, días y precios de la consulta:** el sitio no los publica.
- **Teléfono para llamar:** solo publica el WhatsApp 999 260 2804; el botón "Llamar" usa ese número.
- Qué incluye la consulta general (su página se corta en "algunos de estos procedimientos y tratamientos:") y si hace calorimetría o prueba InBody en consulta (hay fotos y un artículo, pero no lo dice).
- Si sigue atendiendo en el Centro Médico de las Américas y en qué consultorio.
- Qué hace en cada especialidad (sus páginas no tienen texto) y si empresas y escuelas se atienden por WhatsApp.
- Si la foto del gimnasio es de ella (el archivo se llama `nutricion-deporte-fatima.jpg`).
- Más fotos: el consultorio 705 y su equipo de medición.

## Dónde está cada cosa

- Textos, modalidades, motivos, currículum y blog: `rediseno/src/data/content.ts`
- Diseño, secciones y la hoja de consulta: `rediseno/src/App.tsx`
- Colores, fuentes y el estilo de la hoja: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
