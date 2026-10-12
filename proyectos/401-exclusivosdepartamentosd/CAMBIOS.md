# GIP Grupo Inmobiliario del Pacífico: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.gipgrupoinmobiliariodelpacifico.com/ (plantilla "Ensenada" de EasyBroker). El fabricador guardó una ficha: `/property/exclusivos-departamentos-de-lujo-sobre-calzada-del-valle-en-san-pedro` |
| Método | **1.2 en la nube** (lote 11): el clon solo trae hojas de estilo; se leyeron en vivo inicio, /about, /contact, /owners, /rentals, /vacation_rentals, la ficha de San Pedro y el catálogo (búsqueda por La Paz, Los Cabos, B. C. S., Todos Santos, Loreto, Mulegé y Comondú: 1,790 fichas dentro del estado) |
| Fecha | 2026-10-12 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/401-exclusivosdepartamentosd/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La inmobiliaria de La Paz en una página: sus propiedades en Baja California Sur con filtros, "Arma la ficha de tu propiedad" para el propietario que quiere vender sin salir de casa (GIP 2.0), sus destacadas en el resto del país con la preventa de Calzada del Valle, sus asesoras y contacto.

## Nombre, ciudad y rubro

- La base del fabricador nombra el sitio por la ficha ("Exclusivos Departamentos de Lujo sobre Calzada del Valle en San Pedro", San Pedro Garza García). El negocio es **GIP Grupo Inmobiliario del Pacífico**, con oficina en **La Paz, B. C. S.** (comprobado en vivo). Se rediseña la inmobiliaria completa; la ficha de San Pedro queda como destacada.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Sin fotos (17 imágenes rotas en escritorio), buscador que depende del servidor de EasyBroker | 21 fotos de su catálogo de B. C. S. a 1200 px, 4 de destacadas y el logotipo, en `.webp` (`rediseno/fotos-web.mjs`); filtros propios en el navegador |

## Qué se cambió (mismo contenido, otra forma)

- El catálogo nacional (Mérida, Querétaro, Huixquilucan pesan más que La Paz en sus 100 páginas) se centra en Baja California Sur, su zona.
- El título de cada tarjeta se arma con el tipo y la colonia que publica EasyBroker; el título original va en el mensaje de WhatsApp.
- "Vende con GIP" deja de ser un formulario y se vuelve el armador de ficha con WhatsApp.
- El botón de WhatsApp lleva el 52 de México (su sitio usa `wa.me/6122198375`).

## Qué se agregó (no existía en el original)

- **"Arma la ficha de tu propiedad"** (elemento memorable): vista previa en vivo de la ficha del propietario, conteo de propiedades del mismo tipo y operación en su zona (cálculo del estudio sobre las 1,790 fichas, 2026-10-12), porcentaje anunciado en dólares y mensaje de WhatsApp armado al número de "Vende con GIP".
- Cifras por zona en la portada (1,127 La Paz, 579 Los Cabos, 84 resto del estado).
- Textos del estudio: titulares, introducciones y textos alternativos.
- Barra fija en el celular (llamar y WhatsApp), enlace a Google Maps, JSON-LD `RealEstateAgent` con horario, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Formularios de contacto, el selector de 200 países y hCaptcha.
- El texto de ejemplo de la plantilla en /owners ("Puedes añadir tu logo, información de contacto…").
- Los enlaces a propiedadesgip.com (responde 404) y la mención a www.gip.mx (el dominio no existe).
- Fotos de las propiedades de la red fuera de B. C. S. (salvo cuatro destacadas) y fotos con marca de agua, mapas o textos encima.

## Qué se conserva al pie de la letra

- Dirección, teléfonos (612 140 8641; asesoras 612 219 8375 y 612 219 8318; "Vende con GIP" 612 378 1913), correo, horario, Facebook y YouTube.
- Sus textos de presentación, cobertura y lo que incluye GIP 2.0 (con la nota del pago previo del análisis).
- Precio, operación, recámaras, baños y m² de cada propiedad tal como se publican (pesos o dólares, sin convertir).

## Pendiente de confirmar con el cliente

- Cuál es su WhatsApp principal (el sitio publica cuatro números distintos) y su correo principal (ventas@ o contacto@).
- Si las propiedades de la red de EasyBroker son de ellos o compartidas, y cuáles quieren destacar en B. C. S.
- Fotos propias de la oficina y del equipo.
- Los precios cambian: los datos son del 2026-10-12.

## Dónde está cada cosa

- Propiedades, mercado por zona y destacadas: `rediseno/src/data/propiedades.ts`; textos, contacto y la preventa de San Pedro: `rediseno/src/data/content.ts`.
- Fotos: `assets/originales/` y `assets/web/`.
- Capturas: `referencias/capturas-2026-10-12/`.
