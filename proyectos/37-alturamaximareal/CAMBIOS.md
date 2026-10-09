# Altura Máxima Real Estate: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.alturamaxima.mx/ |
| Método | **1.2 en la nube**: el clon no trae fotos; se bajaron de `assets.easybroker.com` a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/37-alturamaximareal/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La misma inmobiliaria en una sola página: sus 433 propiedades de Zapopan, Guadalajara, Puerto Vallarta y Riviera Nayarit en una calculadora que dice, con su propio listado, qué te alcanza por metro cuadrado en cada zona.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Ninguna foto (todas en `assets.easybroker.com`) y 4 a 6 recursos fallidos | 28 fotos grandes (1200 px) de sus propiedades y su logotipo en `assets/originales/`, en .webp |

## Qué se cambió (mismo contenido, otra forma)

- Sus páginas de inicio, ventas (22 páginas de listado), rentas (3), vender mi casa, ¿quiénes somos? y contacto se juntan en una sola.
- Sus textos largos y repetidos en español e inglés (escritos para buscadores) se resumen en un párrafo de presentación y en los 3 puntos de "Vender mi casa" (asesoría personalizada, marketing de alto impacto, casas de lujo), sin cambiar lo que ofrecen.
- El formulario de contacto se sustituye por WhatsApp (su número y su mismo mensaje) y llamada.
- Cada propiedad enlaza a su ficha en su sitio para ver todas las fotos.
- De sus 9 destacadas se muestran 6: tres departamentos de Versalles repiten el mismo render (se quedan 1) y la del lote de Lomas del Pacífico es un plano, no una foto. Las 9 siguen en la calculadora.

## Qué se agregó (no existía en el original)

- **"El metro cuadrado, por zona"** (elemento memorable): eliges casa o departamento, o terreno; la región; tu presupuesto y los m² que buscas. Cada zona con 3 o más propiedades en venta o preventa muestra su precio por m² mediano (barra), el más alto (franja clara) y tu límite (línea): "Te alcanza" o "Arriba de tu límite", y cuántas caben en tu presupuesto. Al tocar una zona se ve su foto y sus propiedades del m² más barato al más caro; "Pedir opciones por WhatsApp" manda presupuesto, m² y zona ya escritos.
- Cálculos del estudio sobre su listado del 9 de octubre de 2026: precio ÷ m² publicado, mediana por zona (colonia o condominio, tal como lo nombra EasyBroker), solo en pesos. "Caben" = precio dentro del presupuesto y al menos 90% de los m² buscados.
- Cifras de su listado: 220 en venta, 175 en preventa, 38 en renta; 154 en Zapopan y Guadalajara, 273 en Puerto Vallarta y Riviera Nayarit.
- Textos del estudio: "Inmobiliaria en Zapopan, Jalisco", el H1, "¿Qué te alcanza, y dónde?" y su explicación, "Las que ellos destacan hoy", el título de rentas, "¿Vas a vender en Zapopan?", "Oficina en La Estancia, Zapopan", las notas de la calculadora y los textos alternativos.
- "Precio por confirmar" en una renta publicada a $38,000,000 al mes (ver `OPORTUNIDADES.md`).
- Enlace "Cómo llegar" a Google Maps con su dirección, barra fija en el celular (WhatsApp, llamar, cómo llegar), JSON-LD `RealEstateAgent`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- La imagen de fondo del inicio (`wallpaper.jpeg`): es un render genérico de una casa que no está en su listado.
- La línea "Keywords: …", el texto de plantilla "Puedes añadir tu logo…", el selector de idioma, el campo "Company Name" del formulario, "Powered by EasyBroker" y "© 2024".
- El logotipo de Realtor (su archivo es una silueta negra que no se distingue sobre el fondo del rediseño).

## Qué se conserva al pie de la letra

- Nombre, logotipo, dirección, teléfonos, WhatsApp con su mensaje, correo, Facebook, Instagram, YouTube y el sello de AMPI Guadalajara. De cada propiedad: título, tipo, zona, municipio, operación, precio (con centavos donde los tiene), recámaras, baños, m² y foto (incluidos los renders de las preventas, que son los que publica). "Evaluación gratuita de tu propiedad".

## Pendiente de confirmar con el cliente

- El listado cambia: se tomó el 9 de octubre de 2026. Conviene conectar el sitio a su API de EasyBroker para que se actualice solo.
- Datos que parecen errores en EasyBroker (ver `OPORTUNIDADES.md`).
- Si sigue en AMPI Guadalajara.

## Dónde está cada cosa

- Textos, destacadas y regiones: `rediseno/src/data/content.ts`
- Las 433 propiedades: `rediseno/src/data/propiedades.json`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs` (crea los .webp)
