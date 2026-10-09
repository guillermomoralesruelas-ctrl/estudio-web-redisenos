# Alcázar Inmobiliaria: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.alcazarinmobiliaria.com/ |
| Método | **1.2 en la nube**: el clon no trae fotos; se bajaron de `assets.easybroker.com` a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/27-alcazarinmobiliaria/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La misma agencia en una sola página con sus 137 propiedades en un mapa del valle de Oaxaca que se filtra por operación, tipo, recámaras y presupuesto, con WhatsApp por propiedad.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Ninguna foto (todas en `assets.easybroker.com`) y 5 a 7 recursos fallidos | Foto de portada de cada propiedad y 8 fotos grandes en `assets/originales/`, en .webp |

## Qué se cambió (mismo contenido, otra forma)

- Sus páginas de inicio, ventas (6 páginas de listado), rentas (3 páginas), ¿quiénes somos? y contacto se juntan en una sola.
- El listado paginado se vuelve un buscador con mapa; cada propiedad enlaza a su ficha en su sitio de EasyBroker para ver todas las fotos.
- Los títulos escritos en mayúsculas ("CASA CUMBRE") se muestran con mayúscula inicial ("Casa Cumbre"); el texto es el mismo.
- El formulario de contacto se sustituye por WhatsApp (su mismo número, que su sitio enlaza con un ícono sin texto) y llamada.

## Qué se agregó (no existía en el original)

- **"Buscar en el mapa"** (elemento memorable): mapa dibujado con las coordenadas que publica de cada propiedad, recuadro para la costa, filtros (comprar o rentar, tipo, recámaras, tope de presupuesto), lista ordenada por precio y "Me interesa" por WhatsApp con el título, precio y enlace.
- Cifras calculadas de su listado: 91 en venta y preventa, 46 en renta, 19 municipios.
- Textos del estudio: "Agencia inmobiliaria · Oaxaca de Juárez", "Buscar en el mapa" y su explicación, "Todas sus propiedades, en el valle de Oaxaca", "Para vivir, invertir o emprender" (de su texto de ¿quiénes somos?), "¿Buscas, vendes o rentas?" y su párrafo (de "compra, venta y renta de inmuebles"), la nota del listado, los rótulos del mapa y los textos alternativos.
- Enlace a Google Maps buscando "Alcázar Inmobiliaria, Oaxaca de Juárez", porque su sitio no publica dirección.
- Barra fija en el celular (WhatsApp, llamar, propiedades), JSON-LD `RealEstateAgent`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- El aviso de privacidad (sigue en su sitio) y el selector de más de 200 países del formulario.
- "Powered by EasyBroker" y el "© 2025".
- Las fotos grandes de 4 propiedades que se bajaron y no se usaron (calle, clóset, baño y una estancia que parece imagen generada).

## Qué se conserva al pie de la letra

- Nombre, logotipo, "Encuentra tu próxima casa", su lema, los textos de ¿quiénes somos? ("personalizado, transparente y eficiente"), y de cada propiedad: título, tipo, zona, municipio, operación, precio, recámaras, baños, m², coordenadas y foto de portada (incluidos los renders de las preventas en Zicatela, que son los que publica). Teléfonos, WhatsApp, correo y Facebook.

## Pendiente de confirmar con el cliente

- Dirección de la oficina (no la publica).
- El listado cambia: se tomó el 9 de octubre de 2026. Conviene conectar el sitio a su API de EasyBroker para que se actualice solo.
- Datos que parecen errores en EasyBroker (ver `OPORTUNIDADES.md`): una bodega de 1,500,000 m², una casa con 20 recámaras, propiedades publicadas dos veces.

## Dónde está cada cosa

- Textos y destacadas: `rediseno/src/data/content.ts`
- Las 137 propiedades: `rediseno/src/data/propiedades.json`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs` (crea los .webp)
