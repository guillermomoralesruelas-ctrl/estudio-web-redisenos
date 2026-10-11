# GlobalKey International Real Estate: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.globalkeyrealestate.com/ (sitio de EasyBroker con páginas propias) |
| Método | **1.2 en la nube** (lote 10): el clon trae miniaturas; se leyeron inicio, nosotros, propietarios, contacto, las páginas de destinos y todo el catálogo (525 propiedades), y se bajaron 25 fotos de portada, el logotipo, la imagen del club en Miami y los sellos de afiliación a `assets/originales/` |
| Fecha | 2026-10-11 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/450-globalkeyreal/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La asesoría de inversión de Zapopan en una página que empieza por la pregunta "¿qué tipo de inversión buscas?": preventa en Guadalajara, pool de rentas, propiedades en dólares en Miami, playa o compra inmediata, cada una con cuántas opciones tienen publicadas, desde cuánto se entra y una muestra con WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Miniaturas pequeñas, 14 imágenes rotas y desborde horizontal de 110 px en el celular | Fotos de su catálogo a 1200 px en `.webp` (`rediseno/fotos-web.mjs`), sin desborde |

## Qué se cambió (mismo contenido, otra forma)

- Las decenas de páginas de destino ("/nueva-página1" a "/nueva-página41") y el catálogo de 525 propiedades se agrupan en cinco estrategias de inversión, que es como el propio texto de "Nosotros" describe el negocio (preventas, pools de rentas, lujo, internacional).
- El texto de "Nosotros", que venía con emojis como viñetas, se ordena en párrafo, lista de servicios y bloque internacional (Estados Unidos, Dubái, República Dominicana).
- La portada usa una foto de su preventa en Zona Real, Zapopan, en lugar del render de Miami: su oficina y la mayoría de su catálogo están en Guadalajara y Zapopan.

## Qué se agregó (no existía en el original)

- **Selector de estrategia** (elemento memorable): cinco opciones con el número de propiedades publicadas que caben en cada una (228 preventas en Guadalajara, 6 con pool de rentas, 67 en dólares, 92 de playa, 81 para comprar ya) y la entrada más baja, con una muestra de fotos y WhatsApp con el mensaje armado. Los conteos y precios son cálculo del estudio sobre su catálogo del 2026-10-11.
- Textos del estudio: titulares, introducciones y textos alternativos.
- Barra fija en el celular (llamar y WhatsApp), JSON-LD `RealEstateAgent`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Formularios de contacto y el buscador de EasyBroker.
- Las rentas amuebladas de Solares (8) no forman una estrategia propia; siguen en su catálogo.
- Los emojis del texto de "Nosotros".

## Qué se conserva al pie de la letra

- Teléfono 33 3673 7940, correo contacto@globalkeyrealestate.com, oficina en Solares Residencial (C.P. 45019, Zapopan), Instagram y Facebook.
- El lema "Tu patrimonio merece más que una propiedad. Merece una estrategia." y el texto de presentación.
- Los sellos AMPI, Realtor, FIABCI y World Properties.
- Precio, moneda, operación, recámaras, baños y m² de cada propiedad tal como los publica.

## Pendiente de confirmar con el cliente

- Fotos del equipo y de la oficina.
- Qué proyectos de Dubái y República Dominicana quieren mostrar (el sitio los menciona sin propiedades publicadas).
- Los precios cambian: los datos son del 2026-10-11.

## Dónde está cada cosa

- Propiedades y cifras por estrategia: `rediseno/src/data/propiedades.ts`; textos: `rediseno/src/data/content.ts`.
- Fotos: `assets/originales/` y `assets/web/`.
- Capturas: `referencias/capturas-2026-10-11/`.
