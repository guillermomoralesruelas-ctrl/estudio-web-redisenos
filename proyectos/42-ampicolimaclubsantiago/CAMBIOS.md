# AMPI Colima: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.ampicolima.com.mx/ (sitio de EasyBroker con páginas propias) |
| Método | **1.2 en la nube** (lote 10): el clon trae miniaturas e imágenes rotas; se leyeron inicio, Nosotros, Socios AMPI, "¿Por qué contratar a un socio AMPI Colima?", contacto y todo el catálogo (677 propiedades en 34 páginas de venta y 6 de renta), y se bajaron a `assets/originales/` las fotos de portada de 20 propiedades, los 44 logotipos de la página de socios, el logotipo blanco de AMPI Colima y la foto de su página de inicio |
| Fecha | 2026-10-11 y 2026-10-12 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/42-ampicolimaclubsantiago/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La asociación de profesionales inmobiliarios de Colima en una página que responde la pregunta del público, "¿mi asesor es socio AMPI?": un buscador sobre el directorio de sus 43 socios, filtros por municipio y especialidad, la bolsa de 677 propiedades de los socios, por qué conviene un socio AMPI, la invitación a afiliarse y contacto.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Miniaturas pequeñas, 12 imágenes rotas y un buscador que no funciona sin el servidor de EasyBroker | Fotos a 1400 px y logotipos a 320 px en `.webp` (`rediseno/fotos-web.mjs`); buscador y filtros propios en el navegador |

## Qué se cambió (mismo contenido, otra forma)

- La página "Socios AMPI" (una columna larga de logotipos con dirección, correo y teléfono) se vuelve un directorio con buscador, filtros por municipio (según la dirección publicada) y por especialidad (según el nombre de cada socio: inmobiliaria, construcción y desarrollo, notaría y valuación).
- Los nombres de los socios salen de su enlace de Facebook en esa página; donde no hay enlace, del texto del logotipo o de su dominio (Altozano El Nuevo Colima, Ardica Construcciones, RC Bienes Raíces y Gestoría Urbana, Cántiko, Construmanía, Intercabos, Lega Desarrollos, Real Estate Colima, SEAL, SIMEN y Simor).
- El catálogo compartido se resume con su reparto por municipio y una muestra de casas, rentas y terrenos; el título de cada tarjeta se arma con el tipo y la colonia que publica EasyBroker.
- El texto de "Nosotros" y el de "¿Por qué contratar a un socio AMPI?" se resumen en cuatro razones, sin las comparaciones con medicinas y dietas del original.

## Qué se agregó (no existía en el original)

- **"¿Tu asesor es socio AMPI?"** (elemento memorable): se escribe el nombre y responde al momento si aparece en el directorio publicado; si no, sugiere pedir la credencial o llamar a la asociación.
- Barras con el reparto del catálogo por municipio (Colima 343, Villa de Álvarez 193, Comala 47, resto 94), cálculo del estudio sobre su catálogo del 2026-10-11.
- Sección "Afíliate", con el texto de su anuncio de portada ("Afíliate o asóciate a la red más grande de profesionales inmobiliarios") y WhatsApp.
- Textos del estudio: titulares, introducciones y textos alternativos.
- Barra fija en el celular (llamar y WhatsApp), JSON-LD `ProfessionalService`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- El formulario de contacto, el buscador de EasyBroker y la lista de más de 200 países del teléfono.
- El anuncio de portada con foto de banco de imágenes.
- Portnexis: su logotipo aparece en la página de socios sin ningún dato de contacto, así que no se incluye.
- Correos y sitios mal escritos en la página de socios (ver `OPORTUNIDADES.md`): no se enlazan, para no mandar a nadie a una dirección que no existe.

## Qué se conserva al pie de la letra

- Dirección (Av. Constitución 2171, Local 8, C.P. 28017, Colima), teléfono (312) 330 9218, WhatsApp de su botón flotante, correos, Facebook, Instagram y YouTube.
- El lema "Liderando el futuro del sector inmobiliario en Colima con profesionalismo y liderazgo".
- AMPI desde 1956, en Colima desde 2004, más de 4,000 socios y afiliados en el país, y las afiliaciones NAR, CREA, FIABCI e ICREA.
- Direcciones, teléfonos, correos, sitios e Instagram de cada socio tal como aparecen; precio, operación, recámaras, baños y superficie de cada propiedad.

## Pendiente de confirmar con el cliente

- Que el directorio esté al día (altas y bajas de socios) y los correos correctos de Century 21 Royal Estates, Notaría 9 y Rúbrica, y el sitio de Miramar Hills.
- Los datos de Portnexis.
- Requisitos y costo de afiliación.
- Los precios cambian: los datos del catálogo son del 2026-10-11.

## Dónde está cada cosa

- Socios: `rediseno/src/data/socios.ts`; propiedades y cifras: `rediseno/src/data/propiedades.ts`; textos: `rediseno/src/data/content.ts`.
- Fotos y logotipos: `assets/originales/` y `assets/web/`.
- Capturas: `referencias/capturas-2026-10-12/`.
