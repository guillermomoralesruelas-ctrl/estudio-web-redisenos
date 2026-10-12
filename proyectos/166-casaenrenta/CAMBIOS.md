# Firma Inmobiliaria: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.firmainmobiliaria.com/ (plantilla "Frutillar" de EasyBroker). El fabricador apuntaba a una sola ficha (`/property/casa-en-renta-frente-la-laguna`, una casa en renta en Bacalar); se rediseñó la inmobiliaria completa |
| Negocio confirmado en vivo | Firma Inmobiliaria, Av. Unión 126, Col. Americana, Lafayette, 44160 Guadalajara, Jal. (no está en Bacalar: esa es una de sus fichas) |
| Método | **1.2 en la nube** (lote 11): el clon trae miniaturas de 450 px. Se leyeron inicio, /about, /contact, las páginas del menú y el catálogo (100 páginas de venta y 100 de renta, que es el tope que muestra EasyBroker, más el catálogo completo de Guadalajara, Zapopan, Tlajomulco y Tlaquepaque: 2,806 en venta y 738 en renta), y se bajaron 21 fotos grandes de 17 propiedades y el logotipo a `assets/originales/` |
| Fecha | 2026-10-12 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/166-casaenrenta/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (0 problemas; desborde 0 en escritorio y celular) |

## En una línea

La inmobiliaria de la colonia Americana en una página: su catálogo ordenado como su propio menú (ciudad, bosque, playa e industria) con 17 propiedades de muestra, y "¿Rentar o comprar?", que con lo que publican en Guadalajara, Zapopan y Tlajomulco dice cuántos años de renta cuesta comprar cada tipo de vivienda.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Miniaturas de 450 px, 9 imágenes rotas, buscador y carrusel que no funcionan sin el servidor de EasyBroker, desborde horizontal (648 px en escritorio, 1,538 px en celular) | Fotos de su catálogo a 1,200 px en `.webp` (`rediseno/fotos-web.mjs`), pestañas propias y desborde 0 |

## Qué se cambió (mismo contenido, otra forma)

- El menú de 20 enlaces (Venta, Renta, Playa con diez destinos, Bosque, Industria, Desarrolladores, Macro Lotes, Nosotros, Contáctanos y "Nueva página 4") se convierte en cuatro pestañas: Ciudad, Bosque, Playa e Industria, cada una con propiedades reales y ligas a su catálogo en vivo.
- El título de cada tarjeta se arma con el tipo y la colonia que publica EasyBroker ("Departamento, Colomos Providencia") en lugar de los títulos en mayúsculas; el título original va en el mensaje de WhatsApp.
- "La Cahchora" (así viene en la ficha de Punta Lobos) se escribe "La Cachora".
- El texto "Acerca de" se conserva y sus cuatro servicios (compra, venta, alquiler y tasaciones) se muestran como etiquetas.

## Qué se agregó (no existía en el original)

- **"¿Rentar o comprar?"** (elemento memorable): se elige municipio (Guadalajara, Zapopan, Tlajomulco), tipo (departamento o casa) y recámaras; aparece la mediana del precio de venta, la mediana de la renta mensual y cuántos años de renta equivalen a comprar (por ejemplo, 15.9 años para un departamento de 2 recámaras en Zapopan), dibujado como una fila de 30 casillas, una por año. Debajo, tres propiedades en venta y tres en renta cercanas al precio típico, con enlace a su ficha. Solo se muestran combinaciones con al menos 20 en venta y 10 en renta (10 combinaciones). Es un cálculo del estudio con datos del 2026-10-12, aclarado en la página (no incluye enganche, crédito, mantenimiento ni predial y no es un avalúo).
- Cifras del catálogo en la portada (7,852 propiedades publicadas, 2,671 departamentos, 2,189 terrenos, 1,596 casas y 646 casas en condominio), tomadas del filtro de su sitio.
- Textos del estudio: titulares de sección ("De la Americana al bosque, la playa y la nave industrial", "¿Rentar o comprar? Cuántos años de renta cuesta una casa", "Platiquemos de lo que buscas"), las descripciones de cada pestaña, pies de foto, textos alternativos y mensajes de WhatsApp prellenados.
- Barra fija en el celular (WhatsApp, llamar y cómo llegar), enlace a Google Maps con la dirección, JSON-LD `RealEstateAgent`, title, description, imagen para compartir y favicon con el roble.
- Logotipo con fondo transparente (el original es un roble blanco sobre un rectángulo negro).

## Qué se quitó o no se usó

- Formulario de contacto con hCaptcha y la lista de 240 países: se sustituye por WhatsApp y teléfono.
- Las páginas vacías del menú (Playa, Bosque, Industria, Desarrolladores y Macro Lotes muestran el texto de relleno de la plantilla) y el enlace "Nueva página 4".
- Fotos con marca de agua de otras inmobiliarias (Casa Luna, Ellevant, MLS Vallarta Nayarit y otras), renders de preventas y láminas con texto: no se usan.
- La ficha de Punta Mita que se titula "en venta" pero se publica en renta: se dejó fuera por la contradicción.
- El correo: el sitio muestra "Email: r@firmainmobiliaria.com" con la "r" pegada a la etiqueta, y no queda claro si es la dirección completa; no se publica hasta confirmarlo.

## Qué se conserva al pie de la letra

- Dirección (Av. Unión 126, Col. Americana, Lafayette, 44160 Guadalajara, Jal.) y teléfono 33 1961 1173; el WhatsApp es el mismo número que enlaza su sitio (wa.me/523319611173).
- El titular "Encuentra tu próxima casa", el texto de bienvenida y el texto "Acerca de".
- Precio, operación, tipo, colonia, recámaras, baños y m² de cada propiedad tal como los publica.

## Pendiente de confirmar con el cliente

- El correo electrónico completo.
- Horario de atención (el sitio no lo publica).
- Cuáles propiedades son de exclusiva de Firma y cuáles vienen de la red de EasyBroker, para destacar las suyas.
- Fotos del equipo y de la oficina en la Americana.
- Los precios cambian: los datos y el cálculo de "¿Rentar o comprar?" son del 2026-10-12.

## Dónde está cada cosa

- Propiedades de muestra y pestañas: `rediseno/src/data/propiedades.ts`; textos, contacto y cifras: `rediseno/src/data/content.ts`; medianas y ejemplos de "¿Rentar o comprar?": `rediseno/src/data/rentar-comprar.json`.
- Fotos: `assets/originales/` y `assets/web/` (las crea `rediseno/fotos-web.mjs`).
- Capturas: `referencias/capturas-2026-10-12/`.
