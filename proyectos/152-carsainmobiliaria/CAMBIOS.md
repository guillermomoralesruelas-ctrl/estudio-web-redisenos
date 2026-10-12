# CARSA Inmobiliaria: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.carsainmobiliaria.com/ (plantilla "Milan" de EasyBroker) |
| Método | **1.2 en la nube** (lote 10): el clon solo trae la plantilla y miniaturas de la red; se leyeron en vivo inicio, "¿Quiénes somos?", contacto, las 100 páginas de ventas y las 100 de rentas, y las 52 fichas que el catálogo marca "Asesor: Carsa Inmobiliaria"; se bajaron a `assets/originales/` sus fotos de portada, seis interiores y el logotipo |
| Fecha | 2026-10-12 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/152-carsainmobiliaria/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La inmobiliaria del Centro Cívico de Mexicali en una página: solo sus 52 propiedades (no las 41,000 de la red de EasyBroker), un comparador "Dos casas, lado a lado" para decidir entre dos privadas parecidas y pedir cita para ver ambas por WhatsApp, el catálogo con filtros, quiénes son y contacto.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Miniaturas de 450 px de propiedades de otras inmobiliarias, 11 imágenes rotas y un buscador que no funciona sin el servidor de EasyBroker | Fotos de las propiedades de CARSA a 1200 px en `.webp` (`rediseno/fotos-web.mjs`) y filtros propios en el navegador |
| El logotipo es una diapositiva de 1280×720 con márgenes blancos | Recortado: completo en "Nosotros" y solo la casa en la cabecera, junto al nombre en Lexend |

## Qué se cambió (mismo contenido, otra forma)

- El catálogo de la red (más de 41,000 propiedades en todo México y Estados Unidos) se reduce a las 52 que publica CARSA como asesor: 35 casas, 6 departamentos, 6 terrenos, locales y bodegas y 5 rentas; 50 en Mexicali y 2 en Playas de Rosarito.
- Los títulos en mayúsculas ("SE VENDE CASA EN CANTABRIA RESIDENCIAL") se muestran con un nombre corto ("Cantabria Residencial"); el título original va en el mensaje de WhatsApp junto con el ID de EasyBroker.
- El WhatsApp que solo existía dentro de cada ficha (+52 686 255 1157) pasa a la cabecera, a cada tarjeta, al contacto y a la barra fija del celular.

## Qué se agregó (no existía en el original)

- **"Dos casas, lado a lado"** (elemento memorable): se eligen dos de sus 40 casas y departamentos en venta en Mexicali y se comparan renglón por renglón (precio, construcción, terreno, recámaras, baños, estacionamientos y precio por m² construido, este último cálculo del estudio) con barras y la ganadora en color teja; dice cuántos renglones gana cada una, propone "otra de precio parecido" y arma un WhatsApp para pedir cita y ver las dos, con títulos, IDs, precios y enlaces a sus fichas.
- Textos del estudio: titulares, introducciones y textos alternativos.
- Barra fija en el celular (llamar y WhatsApp), enlace a Google Maps, JSON-LD `RealEstateAgent`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Las propiedades de la red de otras inmobiliarias (las nueve "destacadas" de su portada son de CDMX, Guadalajara, Tijuana, Querétaro y Mérida) y los filtros con 14 monedas.
- El formulario de contacto y la página "Asesores" (/owners), que está vacía.
- Volantes, planos y fichas técnicas como fotos de portada (CC Towers, San Fernando 2, Ejido Hidalgo): esas propiedades aparecen con "Fotos en su ficha".

## Qué se conserva al pie de la letra

- Dirección (De los Pioneros 1140, Centro Cívico, C.P. 21000, Mexicali), teléfono 686 255 1157 y correo carsamexicali@gmail.com.
- Los textos de "¿Quiénes somos?" y del pie.
- Precio, moneda, operación, tipo, colonia, recámaras, baños, m² y estacionamientos de cada propiedad tal como los publica.

## Pendiente de confirmar con el cliente

- Nombres y fotos de sus asesores (la página "Asesores" está vacía) y fotos de la oficina.
- Si quieren mostrar también propiedades de la red.
- EasyBroker solo deja ver 100 páginas por listado: puede haber más propiedades de CARSA después de la página 100. Los datos son del 2026-10-12.

## Dónde está cada cosa

- Propiedades: `rediseno/src/data/propiedades.ts`; textos y contacto: `rediseno/src/data/content.ts`.
- Fotos: `assets/originales/` y `assets/web/`.
- Capturas: `referencias/capturas-2026-10-12/`.
