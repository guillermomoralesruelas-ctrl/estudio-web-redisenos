# GreenSpa: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://greenspa.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/465-greenspa/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 465-greenspa`) |

## En una línea

De cinco páginas con una carta muy larga y beneficios de salud, a una sola página con la carta por pestañas, un certificado de regalo que se arma en pantalla y WhatsApp en cada categoría.

## Qué estaba roto o incompleto en el clon

- El clon funciona, pero el diseño depende de Elementor y de muchas hojas decorativas; en el celular hay 2 imágenes rotas.

## Qué se cambió (mismo contenido, otra forma)

- Servicios: de una página larga a pestañas por categoría, con la duración y el precio de cada servicio.
- Promociones, nosotros, testimonios y contacto en una sola página.

## Qué se agregó (no existía en el original)

- El certificado de regalo interactivo (su sitio solo tenía un botón "Cotiza aquí").
- WhatsApp con mensaje prellenado en cada categoría, promoción y certificado, y barra fija en el celular.
- JSON-LD de tipo `DaySpa` con dirección y horario; Open Graph; `alt` en todas las fotos.

## Qué se quitó o no se usó

- Los beneficios de salud y promesas de resultado de su carta (regular el pH, fortalecer el sistema inmune, eliminar toxinas, "sin cirugía ni dolor", "resultados visibles desde la primera sesión", "eficacia clínicamente probada").
- Los tratamientos Timexpert Radiance C+, Timexpert Lift In, Therapy O2 y Antiedad global SRN, que no tienen precio en su carta (aparecen dentro de los días de spa).
- El sello "Garantía de servicio" (no dice qué garantiza), la foto de banco de la portada y el blog con entradas "Hello world!".
- El texto bilingüe completo: se dejó "Welcome" y los nombres en inglés de los masajes.

## Qué se conserva al pie de la letra

- Precios de masajes, faciales, días de spa, corporales, reductivos, consulta nutricional y escuela de masajes.
- Green Loyalty ($300 y sus beneficios), eventos especiales (5 personas, 4 horas, $12,250) y el 15% en el mes de cumpleaños.
- Los tres testimonios de su página (Andrea, Carolina y Hanna).
- Horario, dirección, WhatsApp, teléfono y correo de su página de contacto.

## Pendiente de confirmar con el cliente

- **Colonia:** su página dice "Col. Prados Guadalupe" y su mapa busca "Av. Sebastian Bach 4759, Prados Vallarta, 45029". Se usó el texto y su mismo mapa.
- Si los precios de los masajes que no tienen precio propio (relajante, descontracturante, descarga, piedras calientes, ventosas) son los generales de 1 h $1,200, 1.5 h $1,700 y 2 h $2,250, como da a entender su carta.
- Precio del drenaje linfático y de los reductivos sin precio.
- Si el certificado de regalo puede ser de cualquier servicio o monto.
- Redes sociales: su sitio no enlaza ninguna.

## Dónde está cada cosa

- Textos, carta de precios, promociones y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y el certificado: `rediseno/src/App.tsx`
- Colores, fuentes y el marco del certificado: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
