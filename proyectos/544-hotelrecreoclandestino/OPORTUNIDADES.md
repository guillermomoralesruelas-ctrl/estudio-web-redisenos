# Clandestino Hotel (San Miguel de Allende): oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` e `investigacion/crudo.json` (captura del 2026-09-26). La red de la nube no llega a clandestinohotel.com, así que **no se pudo comprobar en vivo**. Los defectos del clon no son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://clandestinohotel.com/ . Hotel boutique en dos casonas del Centro Histórico de San Miguel de Allende: Hotel Recreo (Recreo #31) y Hotel Pila Seca (Pila Seca #2) |
| Prioridad | **MEDIA**: el sitio es completo, con tarifas y reserva directa, pero se contradice en precios, teléfono y estacionamiento |
| Contacto publicado | Recreo +52 415 688 1272, Pila Seca +52 415 688 3717; WhatsApp +52 415 124 5141 y +52 415 117 7901; reservaciones@clandestinohotel.com; IG y FB @clandestinohotel |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-29/` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | La página de Recreo dice "Desde $3,100 MXN", pero su tabla de la misma página empieza en $1,996 | Un precio de entrada más alto que el real espanta reservas directas | `crudo.json` (/hotel-recreo/) |
| 2 | En la página de Pila Seca, "¿Prefieres hablar?" muestra el número de Recreo (+52 415 688 12 72) con enlace al de Pila Seca (3717) | El huésped que marca a mano llama a la otra casa | `crudo.json` (/hotel-pila-seca/) |
| 3 | La portada dice "Estacionamiento cercano: te orientamos con las opciones"; el resto del sitio dice "valet parking incluido" | Duda sobre algo que se paga o no | `crudo.json` (inicio y hoteles) |
| 4 | Los textos alternativos de las fotos no corresponden: el rooftop se llama "Restaurante Florios", una recámara "Spa", el patio de Pila Seca "Hotel Recreo" | Google Imágenes y los lectores de pantalla muestran lo que no es | `crudo.json` |
| 5 | La miga de pan de la página de Pila Seca dice "Hotel Recreo" | Detalle de descuido | `crudo.json` (/hotel-pila-seca/) |
| 6 | Tornabodas promete "alberca de sol", que no aparece en ninguna otra parte | Promesa que puede no cumplirse en un evento privado | `crudo.json` (/experiencias/) |

Lo que sí funciona: tarifas claras con impuestos, desayuno y valet incluidos; dos teléfonos y dos WhatsApp; buenos textos de cada casa; fotos propias con mucho carácter.

## Qué le ofrecemos

- "¿Qué noches vienes?": el huésped toca sus noches, ve el total real y lo manda por WhatsApp a la casa correcta.
- Corregir el "desde $3,100", el teléfono cruzado, el estacionamiento y los textos de las fotos.
- Una página mucho más ligera en el celular (de 25,000 a 10,000 px de alto).

## Mensaje sugerido para el primer contacto

> Hola, buen día. Estuve viendo el sitio de Clandestino y me encantaron las dos casonas y el rooftop de Recreo. Noté que la página de Recreo dice "desde $3,100" cuando su propia tabla empieza en $1,996, y que en la de Pila Seca el teléfono visible es el de Recreo. Me dedico a rediseñar sitios y preparé una propuesta donde el huésped elige casa, suite y noches, ve el total y lo manda por WhatsApp. Si les interesa, con gusto se la enseño, sin compromiso.

## Preguntas para la conversación

- Tarifa de fin de semana de la Suite Grande con Terraza de Pila Seca.
- Si el valet está incluido en las dos casas.
- Si hay alberca para eventos.
- Fotos del Spa, de Florios y de cada suite.
