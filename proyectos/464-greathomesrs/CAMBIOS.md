# Great Homes RS: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.greathomes.mx/ (plantilla de EasyBroker; la base del fabricador lo tenía como greathomesrs) |
| Método | **1.2 en la nube** (lote 10): el clon trae miniaturas de 450 px; se leyeron inicio, nosotros, vende o renta tu propiedad, preguntas frecuentes, aviso de privacidad y todo el catálogo (106 en venta, 27 en renta), y se bajaron las fotos de portada de 43 propiedades y el logotipo a `assets/originales/` |
| Fecha | 2026-10-11 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/464-greathomesrs/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La firma de lujo de San Ángel en una página editorial: índice de propiedades por zona, una calculadora de referencia "¿Cuánto vale tu casa?" con sus propios precios por m², el proceso del avalúo a la escritura, quiénes son, preguntas frecuentes y contacto.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Miniaturas pequeñas y un buscador de EasyBroker que no funciona sin su servidor | Fotos a 1200 px en `.webp` (`rediseno/fotos-web.mjs`) y filtros propios en el navegador |

## Qué se cambió (mismo contenido, otra forma)

- El listado de EasyBroker se cambia por un "índice por zona": las 133 propiedades contadas por zona (agrupación del estudio a partir de la colonia y la alcaldía: San Ángel y el sur, Lomas, Polanco y Anzures, Santa Fe y Cuajimalpa, Centro y Benito Juárez, fuera de la ciudad y Miami) y una selección de 43 con fotos.
- El título de cada tarjeta se arma con el tipo y la colonia que publica EasyBroker ("Casa en Tizapán") en lugar de sus títulos con errores ("Casa en venta en San Angel ,Tizapán"); el título original se usa en el mensaje de WhatsApp.
- Las 15 preguntas frecuentes se reducen a 5 y se resumen sin cambiar datos; las de precio por m² y renta alimentan la calculadora.
- El texto largo de Nosotros se condensa en dos párrafos y en los cinco pasos del proceso.

## Qué se agregó (no existía en el original)

- **"¿Cuánto vale tu casa?"** (elemento memorable): el propietario elige zona y tipo (Polanco departamento o casa, Lomas, San Ángel, Santa Fe), mueve los m² y ve el rango de valor con los precios por m² de referencia 2025-2026 que publica Great Homes, más la referencia de renta de esa zona, y pide su valuación sin costo por WhatsApp con los datos ya escritos. Se aclara que son rangos orientativos.
- **Del avalúo a la escritura**: el proceso en cinco pasos, tomado de sus textos.
- WhatsApp por propiedad, enlace al mapa de su oficina, textos del estudio (titulares y textos alternativos).
- Barra fija en el celular (llamar y WhatsApp), JSON-LD `RealEstateAgent` con la dirección del aviso de privacidad, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Formularios de contacto (con lista de 200 países) y el buscador avanzado; se enlaza a su catálogo completo de venta y de renta.
- Los banners con texto dentro de la imagen ("Propiedades extraordinarias en las mejores zonas", "Nuestro equipo te acompañará…"); su texto se usa como texto real.
- La foto de sala de la portada (render de un desarrollo de Miami): se usa una casa de San Ángel de su catálogo.
- Aviso de privacidad y aviso legal: se quedan en su sitio.

## Qué se conserva al pie de la letra

- Teléfonos (55) 5550-3199 y (55) 5285-3478, WhatsApp, correo jose@greathomes.mx, dirección Mariscal 29, San Ángel (de su aviso de privacidad), redes.
- "Más de 30 años", las zonas donde operan, "Valuación sin costo · Discreción total · Resultados comprobados", la comisión de 4% a 5% más IVA y los rangos por m² y de renta de sus preguntas frecuentes.
- Precio, moneda, operación, tipo, recámaras, baños y m² de cada propiedad tal como los publica.

## Pendiente de confirmar con el cliente

- Si quieren mostrar sus 133 propiedades conectadas a EasyBroker (hoy es una selección de 43).
- Si los rangos de la calculadora siguen vigentes; son los que publican para 2025-2026.
- Los precios cambian: los datos son del 2026-10-11.

## Dónde está cada cosa

- Propiedades y zonas: `rediseno/src/data/propiedades.ts`; textos, proceso, rangos y preguntas: `rediseno/src/data/content.ts`.
- Fotos: `assets/originales/` y `assets/web/`.
- Capturas: `referencias/capturas-2026-10-11/`.
