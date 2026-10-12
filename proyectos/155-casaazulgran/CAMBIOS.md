# Thó Real Estate: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.thorealestate.com/ (plantilla "Praga" de EasyBroker) |
| URL del fabricador | https://www.thorealestate.com/property/casa-azul-gran-residencia-colonial-en-garcia-gineres: la ficha de una casa de la red de EasyBroker (con la marca de agua de otra inmobiliaria). Se rediseñó la inmobiliaria completa, no esa ficha |
| Método | **1.2 en la nube** (lote 11): el clon solo trae esa ficha, con 18 imágenes rotas. Se leyeron el inicio, /about, /owners, /contact, el aviso de privacidad y todo el catálogo (211 propiedades en 12 páginas de venta y 1 de renta). Se abrieron las 46 fichas que Thó publica a su nombre y se bajaron 40 fotos de portada (1200 px) y el logotipo a `assets/originales/` |
| Fecha | 2026-10-12 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/155-casaazulgran/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La inmobiliaria yucateca en una página: sus casas del Centro de Mérida ordenadas "parque por parque" (Santiago, La Ibérica, San Sebastián, La Plancha, Paseo de Montejo e Izamal), con las esquinas que la separan del parque tal como las escribe en cada ficha, más sus casas del norte, terrenos, rentas y contacto.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Solo la ficha de una casa de la red, con 18 imágenes rotas y un recurso fallido | Las 46 propiedades propias de Thó, con fotos a 1200 px en `.webp` (`rediseno/fotos-web.mjs`) y 0 imágenes rotas |
| Mapa de Google con clave de la plataforma y buscador que dependen del servidor de EasyBroker | Sin scripts de terceros: enlace a Google Maps con la dirección de la oficina |

## Qué se cambió (mismo contenido, otra forma)

- El listado de 211 propiedades, que mezcla las de Thó con las de la red de EasyBroker, se centra en las **46 que llevan su nombre** ("Thó Real Estate" como agente en cada tarjeta). Las demás se dejan en su catálogo, enlazado.
- Las casas del Centro se agrupan por el parque o barrio que menciona su descripción (agrupación del estudio).
- Las casas sin nombre propio llevan un título corto armado con su ficha ("Casa remodelada", "Casa colonial"); el título original va en el mensaje de WhatsApp.
- Terrenos y rentas pasan a listas compactas con precio y WhatsApp.

## Qué se agregó (no existía en el original)

- **"El Centro, parque por parque"** (elemento memorable): siete mosaicos de pasta (el piso hidráulico de las casas antiguas de Mérida, dibujado en SVG) para elegir parque. Cada uno muestra sus casas, con la distancia en esquinas como un cuadro por esquina, ordenadas de la más cercana a la más lejana. Las esquinas y las referencias ("a 4 ½ esquinas de la Plaza Principal y del Parque de Santiago", "a 7 esquinas del Convento") salen de las fichas; las que no dan esquinas muestran su referencia de barrio.
- Textos del estudio: titular ("Casas en el Centro de Mérida, a unas esquinas del parque"), entrada de la portada, introducciones de sección, nombres de los grupos, botones y textos alternativos.
- Barra fija en el celular (llamar, WhatsApp y cómo llegar), WhatsApp prellenado por propiedad, JSON-LD `RealEstateAgent`, title, description, imagen para compartir y favicon.

## Qué se quitó o no se usó

- Las 165 propiedades de la red de EasyBroker, incluida la "Casa Azul" de la URL del fabricador: muchas llevan la marca de agua de otras inmobiliarias (un sol con "Y", "Izamal Real Estate").
- Dos fichas duplicadas (Casa Lucía, EB-OJ9195 = EB-SK2526; la casona de Alcalá Martín, EB-QJ2648 = EB-XD7503), la preventa EB-WQ0210 (foto con marca de agua), la imagen de un volante (terreno EB-SK3321, se lista sin foto) y dos fotos de lofts con colores invertidos (se listan sin foto).
- Formularios, el buscador con 14 monedas, el texto de plantilla de /contact y el título "Acerca de Inmobiliaria de Diana Fleites".
- El mapa de cada ficha (lleva la clave de Google Maps de la plataforma: no se copia).

## Qué se conserva al pie de la letra

- Teléfono y WhatsApp 999 256 8543, correo administracion@thorealestate.com y dirección del pie (Calle 20 #106 x 25 y 27, Colonia México Norte, Mérida).
- Los textos de bienvenida ("Somos una Empresa Yucateca de Servicios Profesionales Inmobiliarios…"), de /about y de /owners.
- Precio, operación, tipo, colonia, recámaras, baños y m² de cada propiedad, los nombres de casa que da Thó (Casa Na, Casa Almita, Casa Caracol, Casa Tapia, Casa 60, Casa Ciruela, Casa Lucía, Casa Azul, Casa Bugambilia, Casa Elevada) y sus referencias de distancia.

## Pendiente de confirmar con el cliente

- Qué dirección es la vigente: el pie dice Calle 20 #106, México Norte; el aviso de privacidad, Av. 32 No. 458 int. 6-A, Fracc. La Florida. Se usó la del pie.
- Si el 999 256 8543 es el WhatsApp principal (es el que usa su botón de WhatsApp).
- Si quieren mostrar también las propiedades de la red y si alguna de ellas es suya.
- Horario de oficina, redes sociales y fotos del equipo: el sitio no los publica.
- Los precios cambian: los datos son del 2026-10-12.

## Dónde está cada cosa

- Propiedades y grupos por parque: `rediseno/src/data/propiedades.ts`; textos y contacto: `rediseno/src/data/content.ts`.
- Fotos: `assets/originales/` y `assets/web/`.
- Capturas: `referencias/capturas-2026-10-12/`.
