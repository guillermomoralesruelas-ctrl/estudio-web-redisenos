# Haus Real Estate: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.hausrealestate.com.mx/ (plantilla de EasyBroker) |
| Método | **1.2 en la nube** (lote 10): el clon trae miniaturas de 450 px; se leyeron inicio, ¿Quiénes somos?, contacto, rentas y las 40 páginas del catálogo (707 propiedades), y se bajaron las fotos de portada de 46 propiedades, la foto de portada, la de la fundadora, la del kayak, el logotipo y el de AMPI a `assets/originales/` |
| Fecha | 2026-10-11 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/488-hausrealestate/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La inmobiliaria de inversión en el Caribe en una sola página: una "brújula" con sus 9 destinos (cuántas propiedades hay, qué parte es preventa y desde cuánto), una muestra con fotos de cada destino, un comparador de hasta tres propiedades, quiénes son y contacto.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Miniaturas pequeñas y un buscador de EasyBroker que no funciona sin su servidor | Fotos a 1200 px en `.webp` (`rediseno/fotos-web.mjs`) y filtros propios en el navegador |

## Qué se cambió (mismo contenido, otra forma)

- Las 14 páginas por destino y tipo del menú se resumen en la brújula: cada destino muestra su conteo real, el porcentaje en preventa, el precio más bajo publicado en pesos y en dólares, y sus tipos de propiedad (cálculos del estudio con el catálogo del 2026-10-11).
- "Cancún" agrupa lo que EasyBroker etiqueta como Benito Juárez (Cancún Centro, Zona Hotelera, Puerto Cancún…), "Holbox" lo de Lázaro Cárdenas y "Ciudad de México" lo de Cuauhtémoc. Puerto Aventuras queda dentro de Playa del Carmen, como lo agrupa EasyBroker.
- La biografía de la fundadora se pasa a tercera persona y se resume, sin cambiar datos.
- Los precios se muestran en la moneda en que se publican; no se convierte de dólares a pesos.

## Qué se agregó (no existía en el original)

- **Brújula de destinos** (elemento memorable): los 9 destinos como barras proporcionales a su inventario; al elegir uno aparece su ficha y una muestra con fotos, con filtro preventa / en venta. En el celular se ven 3 y un botón "Ver las N".
- **Comparador**: hasta tres propiedades lado a lado (precio, precio por m² calculado con su precio y m², superficie, recámaras, baños, operación y ubicación) y un botón que manda la comparación por WhatsApp con los enlaces a las fichas.
- Textos del estudio: titulares, introducciones y textos alternativos.
- Barra fija en el celular (destinos o comparar, WhatsApp), JSON-LD `RealEstateAgent`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- El formulario de contacto y el buscador avanzado (se enlaza al catálogo completo en su sitio).
- Los logotipos de portales y la imagen del equipo (texto pequeño dentro de la imagen; los nombres del equipo no aparecen en texto).
- Una propiedad de la muestra automática en Bacalar con un precio que parece un error de captura (ver `OPORTUNIDADES.md`).

## Qué se conserva al pie de la letra

- Teléfono y WhatsApp +52 984 185 1505, correo, razón social, redes (Instagram, Facebook, YouTube).
- La promesa "Todas las propiedades han sido estudiadas previamente…", el lema, el cierre "Invierte de forma inteligente & segura" y los datos de la fundadora (AMPI, REALTOR, formación y trayectoria).
- Precio, moneda, operación, tipo, recámaras, baños y m² de cada propiedad tal como los publica.

## Pendiente de confirmar con el cliente

- Dirección de oficina: el sitio no la publica.
- La muestra es de 46 de 707 propiedades; si el cliente quiere, se conecta a EasyBroker para mostrar todas.
- Los precios cambian: los datos son del 2026-10-11.

## Dónde está cada cosa

- Propiedades y destinos: `rediseno/src/data/propiedades.ts`; textos: `rediseno/src/data/content.ts`.
- Fotos: `assets/originales/` y `assets/web/`.
- Capturas: `referencias/capturas-2026-10-11/`.
