# Hacienda Sotuta de Peón: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.haciendaviva.com/ (Duda, reservas con Easy-Rez) |
| Método | **1.2 en la nube** (lote 9): el clon solo trae la portada (seis mosaicos); se leyeron sus nueve páginas y se bajaron 50 fotos y 4 logotipos a `assets/originales/` |
| Fecha | 2026-10-11 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/482-haciendasotutade/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La hacienda henequenera de 1858 en una sola página: su ubicación sobre el Anillo de los Cenotes, el hotel, el museo vivo y sus tours, los restaurantes Kih y Muum, wellness, bodas y un formulario para armar la visita por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| La portada son seis mosaicos con "VER MÁS"; el contenido está en subpáginas | Se leyeron hotel, museo vivo, tours, tour henequenero, restaurantes, wellness, bodas, galería y contacto; `rediseno/fotos-web.mjs` hace las copias .webp |
| Desborde horizontal de 378 px en el celular | Sin desborde |

## Qué se cambió (mismo contenido, otra forma)

- Nueve páginas se juntan en una.
- La historia del cráter de Chicxulub y del anillo, que en su sitio es un texto largo, pasa a un esquema con cifras.
- Los textos largos (gastronomía, bodas, museo) se resumieron; los de wellness se dejaron sin promesas de salud.
- Los restaurantes se presentan con su nombre (Kih para el casco, por el logotipo junto a su texto; Muum para el hotel).

## Qué se agregó (no existía en el original)

- **El Anillo de los Cenotes** (elemento memorable): esquema ilustrativo (lo dice: no a escala) con la costa, el centro del cráter, Mérida y Sotuta de Peón sobre el anillo a 45 minutos; un botón cambia a "Los 15 cenotes", 8 en turquesa (se puede nadar) y 7 punteados (intactos en la selva), con fotos de cenotes.
- **Arma tu visita**: eliges visita de día u hospedaje, actividades y personas, y se manda por WhatsApp; avisa si el temazcal no llega al mínimo de 6 personas.
- Textos del estudio: titulares, introducciones, textos alternativos.
- Barra fija en el celular (llamar, WhatsApp, reservar), JSON-LD `Resort`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Los textos de relleno de la plantilla ("Título de diapositiva", "Escriba el subtítulo aquí", "Breathtaking colors of our planet", "Portraits of people from around the globe") y los botones vacíos "Button".
- El formulario de contacto (se usa WhatsApp, teléfono y correo).

## Qué se conserva al pie de la letra

- Nombre, dirección, teléfonos (999) 941 6431 y 941 6441, WhatsApp 999 175 9923, correo, enlace de reservas Easy-Rez, redes y TripAdvisor.
- Cifras (15 cenotes, 8 en actividades, 30 habitaciones, 1858, 66 millones de años, +160 km, 27 municipios), tipos de habitación, lo incluido en la estadía, modalidades de tour, horarios de Kih y Muum, precios del masaje ($550 / $1,000), temazcal (50 min, mínimo 6) y detalles de las bodas.

## Pendiente de confirmar con el cliente

- Tarifas de habitaciones (están en Easy-Rez) y precios y horarios de tours y temazcal.
- Que Kih sea el restaurante del casco y Muum el del hotel (se dedujo del orden de logotipos y textos).
- Si "Relájate" es otro masaje: en su página aparece entre el nombre del masaje y sus dos precios.
- Año de construcción: su descripción para Google dice "finales del siglo XIX" y su página, "mediados del siglo XIX"; se usó la página.

## Dónde está cada cosa

- Textos, cifras, habitaciones, restaurantes, wellness y bodas: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs`
