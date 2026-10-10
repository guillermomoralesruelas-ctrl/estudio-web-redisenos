# Abud Asesoría Inmobiliaria: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.abudbienesraices.com/ |
| Método | **1.2 en la nube** (lote 9): el clon solo trae la portada y fotos de banco; la lista de inmuebles se carga con JavaScript desde Firebase. Se leyeron las 54 fichas de `/inmuebles` y se bajó la primera foto de cada una a `assets/originales/portadas/` |
| Fecha | 2026-10-10 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/10-abudasesoriainmobiliaria/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La inmobiliaria campechana en una sola página con los colores de las fachadas del centro: sus 54 inmuebles reales, un "¿Ciudad, playa o campo?" para elegir zona, presupuesto y tipo, y WhatsApp por cada inmueble.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Los inmuebles no aparecen (los carga JavaScript desde Firebase) y faltan scripts de Next.js | Las 54 fichas se leyeron en vivo; sus datos (operación, precio, zona, recámaras, baños, m², coordenadas) están en `rediseno/src/data/content.ts` y la primera foto de cada una en `assets/originales/portadas/<id>.jpg` |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, quiénes somos, filosofía, afiliaciones, créditos e inmuebles se juntan en una página.
- Los títulos de las fichas (muchos en mayúsculas, como "CASA EN VENTA CERCA DE ESTACION DEL TREN MAYA CAMPECHE") se muestran como tipo + lugar ("Casa · Siglo XXI"). El tipo sale del título: tres terrenos que su sitio clasifica como "casas" se muestran como terreno, y el hotel y el edificio con su nombre.
- La lista va de menor a mayor precio y muestra 9 inmuebles; el botón "Ver los N restantes" abre el resto.
- "Quiénes somos" se recortó un poco; misión, visión y valores, tal cual.

## Qué se agregó (no existía en el original)

- **"¿Ciudad, playa o campo?"** (elemento memorable): cinco zonas, cada una con el color de una fachada campechana (ocre, añil, turquesa, verde y rosa) y un arco de puerta colonial: Centro y barrios, Colonias y fraccionamientos, Frente al mar, Campo y afueras, Grandes extensiones. La zona de cada inmueble la asignó el estudio a partir de su dirección. Se combina con venta o renta, casas o terrenos y presupuesto (hasta 1, 2, 3.5 o 6 millones).
- Cada ficha tiene "Preguntar" por WhatsApp con el tipo, la zona, el precio y el enlace a su ficha original ya escritos, "Mapa" (sus coordenadas) cuando la ficha las tiene y "Todas las fotos" (su ficha).
- Textos del estudio: el titular "Casas y terrenos en Campeche, de la muralla al mar", la explicación del buscador, la frase de cada zona, "Tramitamos tu crédito hipotecario" y su texto, "Visítanos o escríbenos" y los textos alternativos.
- Barra fija en el celular (llamar, WhatsApp, cómo llegar), JSON-LD `RealEstateAgent`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Las fotos de portada, "quiénes somos" y "¡Esto es Campeche!": parecen de banco de imágenes (parejas con llaves, catedral de noche).
- Los logotipos de AMPI, Infonavit, Fovissste, ISSFAM y los bancos: se escriben sus nombres.
- La foto del terreno de Mérida: trae la marca de agua de otra inmobiliaria. La ficha sale con "Foto propia pendiente".
- Las categorías "Locales" y "Fraccionamientos" de su buscador: no tienen ningún inmueble publicado.

## Qué se conserva al pie de la letra

- Nombre, fundación en 2011 por Luis Alberto Abud Romero, dirección (Av. Luis Donaldo Colosio 142, entre Allende y Aldama, interior 4 y 5), horario de oficina (9:00 a 17:00), teléfono (981) 813 2618, correo, afiliaciones, bancos, y los precios, medidas y operación de cada ficha.

## Pendiente de confirmar con el cliente

- **WhatsApp**: el sitio no publica uno; todos los botones usan el teléfono principal (981) 813 2618 hasta que confirme un número con WhatsApp (`negocio.whatsapp` en `content.ts`).
- **Días del horario**: el sitio dice "9:00 a 17:00 hrs." sin días.
- Dos precios salen marcados "por confirmar": el terreno de calle Allende ($4,500 por 750 m², ¿precio por m²?) y el edificio de Av. Madero ($80,000 "en venta", aunque la ficha dice "renta y venta").
- Una ficha (terreno en la carretera Carmen–Champotón) no tiene precio: sale "Precio a consultar".
- Las fotos son la primera de cada ficha; muchas son de WhatsApp y algunas son planos o mapas.

## Dónde está cada cosa

- Textos, zonas, inmuebles y precios por confirmar: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/portadas/` y `rediseno/fotos-web.mjs` (copias .webp en `assets/web/p/`)
