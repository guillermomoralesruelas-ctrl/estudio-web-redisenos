# RE/MAX Espacios Hábitat: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json`, o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://espacioshabitat.com/ . Oficina RE/MAX en Hermosillo (Blvd. Navarrete 134, Valle Grande); bróker owner Karim Oviedo |
| Prioridad | **ALTA**: fichas de inmuebles con datos que se contradicen (un edificio "en Venta" marcado "En Renta" y sin precio, una casa con dos precios, un departamento con dos superficies) y textos de demostración de la plantilla a la vista |
| Contacto publicado | Tel. 662 311 3776; WhatsApp 662 115 0662; contacto@espacioshabitat.com; Facebook e Instagram /espacioshabitat, LinkedIn remax-espacios-habitat |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-27 con curl al sitio real (inicio, /contacto/, /inmuebles/ y las nueve fichas de destacados) y en `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Un edificio en venta aparece "En Renta" y sin precio.** "Edificio Comercial en Venta en Casa Grande" tiene estatus "En Renta", la tarjeta no muestra precio y solo la descripción dice "Precio de venta: $14,000,000 MXN". | Un inversionista que busca comprar lo descarta, y quien busca rentar pregunta por algo que no se renta. Es uno de sus destacados. | Inicio en vivo y /propiedad/edificio-comercial-en-venta-en-casa-grande/ |
| 2 | **Precios y medidas que no coinciden.** Casa en Montecarlo: $2'300,000 en el precio y $2,400,000 en la descripción. Departamento en Lomas Altas: 57 m² en la portada y 65.82 m² en la ficha. | En bienes raíces el precio y los metros son lo primero que se revisa; dos cifras restan confianza y generan llamadas para aclarar. | Inicio en vivo y las fichas de Montecarlo y Lomas Altas |
| 3 | **Textos de demostración de la plantilla.** En todas las páginas está el login de Houzez con "User registration is disabled for demo purpose", y /inmuebles/ muestra cuatro veces "0 Inmueble Residencial" y "© Houzez - All rights reserved". | Se ve como un sitio a medio configurar; "0 inmuebles" hace pensar que no hay oferta. | Inicio en vivo; /inmuebles/ en vivo y `crudo.json` |
| 4 | **El mensaje de WhatsApp tiene errores.** El botón abre con "¿Me Interesa Contactar un Aseor Inmobiliario en Hemosillo de RE/MAX", y el ícono de Viber no lleva a Viber. | Es lo primero que el cliente "firma" al escribir; se nota descuidado. | Inicio en vivo |
| 5 | **La portada de un terreno es una imagen generada con IA.** La foto de "Terreno en Venta en Camino del Seri" es `ChatGPT-Image-15-jun-2026…png`, también su imagen para redes. | Si el comprador lo nota, duda del resto de las fotos. | Inicio en vivo y la ficha de Camino del Seri |
| 6 | **Dos sitios y menú cruzado.** "Propiedades" manda a otro dominio (espacioshabitat.com.mx) y el pie lleva a /inmuebles/, un tercer listado. | El cliente no sabe cuál es el listado vigente. | Inicio en vivo y `crudo.json` |
| 7 | **Sin H1 y datos para Google de "persona".** 0 H1 en la portada; su JSON-LD dice `Person`/`Organization` (no `RealEstateAgent`), sin dirección ni horario, y enlaza un Instagram distinto (@remax_eh). | Pierde búsquedas como "inmobiliaria en Hermosillo" y la ficha de Google no toma su dirección ni su horario. | Inicio en vivo |

Nota: **el sitio tiene buen contenido**: fichas muy completas, asesores con teléfono y un blog activo. El argumento no es "está mal hecho", sino **ordenar lo que ya tienen y que ningún destacado se contradiga.**

## Qué le ofrecemos

- "Metro a metro": sus destacados dibujados a la misma escala, con precio, metros, precio por m² y WhatsApp que ya dice qué inmueble le interesa y quién es el asesor.
- Fichas con un solo precio y un solo estatus, revisadas contra su descripción.
- Página limpia de textos de demostración, con H1, datos para Google de inmobiliaria (dirección y horario) y barra fija en el celular.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo (por WhatsApp al 662 115 0662 o por Instagram @espacioshabitat). Tono: respetuoso y útil.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Revisé la página de RE/MAX Espacios Hábitat y noté que el edificio comercial de Casa Grande aparece como "En Renta" y sin precio, aunque la descripción dice que se vende en $14 millones, y que la casa de Montecarlo tiene dos precios distintos. Les preparé una propuesta donde sus destacados se comparan metro a metro, cada uno con un solo precio y WhatsApp directo sobre ese inmueble. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿El edificio de Casa Grande se vende en $14,000,000 o también se renta? ¿La casa de Montecarlo cuesta $2,300,000 o $2,400,000? ¿El departamento de Lomas Altas mide 65.82 m²?
- ¿Tienen fotos reales del terreno de Camino del Seri y de la obra en Obregón?
- ¿Cuál es el listado vigente: espacioshabitat.com, /inmuebles/ o espacioshabitat.com.mx?
- ¿El 662 115 0662 es el WhatsApp de la oficina?
- ¿Qué permite la franquicia RE/MAX sobre el uso de la marca en su sitio?
