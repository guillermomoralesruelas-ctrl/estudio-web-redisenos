# Alas del Hombre: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json`, o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://alas.com.mx/ . Vuelo en parapente tándem, paquetes de un día y escuela de vuelo libre en Valle de Bravo, Estado de México |
| Prioridad | **MEDIA**: el sitio funciona y vende, pero dos vuelos del menú dan 404, la portada no tiene H1 ni datos para Google y el precio del vuelo cambia entre español e inglés |
| Contacto publicado | WhatsApp 722 254 1403; tel. 726 262 6382; reservaciones@alas.com.mx; Facebook, Instagram y YouTube |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-27 con curl al sitio real (portada, 11 paquetes y 4 páginas de vuelo) y en `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Dos vuelos del menú dan 404.** "Vuelo en parapente aventura en El Peñón" y "Acrobático en El Peñón" están en el menú de todas las páginas y devuelven "no encontrado". | Quien busca volar en El Peñón llega a una página vacía y se va, en un vuelo que además venden en "Descubre Temascaltepec". | curl a `/vuelo-en-parapente-aventura-en-el-penon.php` y `/vuelo-en-parapente-acrobatico-en-el-penon.php` (404) |
| 2 | **Dos precios para el mismo vuelo.** En español el vuelo cuesta $1,980 y en la versión en inglés $2,190. | Un cliente que compara las dos versiones duda del precio; se presta a discusiones al cobrar. | `crudo.json` |
| 3 | **Sin datos de negocio para Google.** La portada no tiene H1 ni JSON-LD; la página del vuelo tiene dos H1 y no tiene meta description. | Pierde búsquedas como "parapente Valle de Bravo", donde compite con muchos operadores. | Portada y página del vuelo en vivo |
| 4 | **Once páginas de paquetes casi iguales.** El vuelo es el mismo; lo que cambia es el resto del día, pero hay que abrir cada página para saberlo. | El visitante se cansa antes de elegir y termina preguntando por WhatsApp lo que ya está escrito. | Las 11 páginas de paquetes en vivo |
| 5 | **Teléfono como texto y WhatsApp en formato viejo.** El 726 262 6382 no tiene enlace `tel:`; el WhatsApp usa `api.whatsapp.com/send?phone=+52…&text=Hola`. | En el celular no se llama con un toque y el mensaje llega sin decir qué quiere el cliente. | Portada en vivo |
| 6 | **Carga pesada.** jQuery dos veces, el widget de Google Translate y gtag en cada página. | La página tarda más en el celular, justo donde se reserva. | Portada en vivo |

Nota: **su material es muy bueno**: más de 40 años, certificación AVLM, Mención de Honor de SECTUR, sello Safe Travels y fotos GoPro reales de sus vuelos. El argumento principal: **que el cliente elija su paquete en un minuto y reserve por WhatsApp con todo escrito.**

## Qué le ofrecemos

- "¿Y después de aterrizar?": el cliente elige qué quiere hacer al tocar tierra y ve el paquete que lo incluye, con el trayecto dibujado, el día y el precio.
- Una sola página rápida con su vuelo, sus paquetes, la escuela, sus certificaciones y opiniones.
- Teléfono y WhatsApp tocables, Google Maps, datos para Google y barra fija en el celular.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo (por WhatsApp al 722 254 1403 o por Instagram). Tono: respetuoso y útil.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios de turismo. Vi la página de Alas del Hombre y sus fotos de vuelo están increíbles. Revisándola noté que los vuelos de El Peñón del menú marcan "página no encontrada" y que el vuelo aparece a $1,980 en español y a $2,190 en inglés. Les preparé una propuesta donde el cliente elige qué quiere hacer después de aterrizar y ve al momento qué paquete le conviene, con el precio y la reserva por WhatsApp. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿El vuelo cuesta $1,980 o $2,190? ¿Siguen vigentes los precios de los paquetes?
- ¿Siguen haciendo vuelos desde El Peñón?
- ¿Cuál es el punto exacto para Google Maps?
- ¿Tienen fotos propias de las experiencias de los paquetes (cena, hotel, masaje) para no usar fotos de banco?
