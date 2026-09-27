# Fotoproducto: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json`, o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.fotoproducto.com/ . Estudio de fotografía de producto, video corporativo y renta de estudio en Zapopan, Jalisco |
| Prioridad | **MEDIA**: el sitio funciona y su trabajo se ve muy bien, pero el teléfono y el correo no se pueden tocar, la página de Servicios tiene una descripción de "sitio en construcción" y la renta de medio día da dos horarios distintos |
| Contacto publicado | Tel. y WhatsApp 33 3559 6393; fotoproducto675@gmail.com; Instagram foto_producto.com1; Facebook fotoproductogdl |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` (la captura "antes" del clon sale en blanco por un defecto nuestro: enseñar el sitio real) |

## Hallazgos en su sitio actual

Comprobados el 2026-09-27 con curl al sitio real (Inicio, Servicios, Nuestro Estudio y Política de privacidad) y en `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Servicios tiene una descripción de "sitio en construcción".** Además de su description normal, la página lleva una segunda: "…nuestro sitio se encuentra en el cuarto oscuro, donde está tomando forma. Pronto estará listo para revelar una galería fotográfica…". | Google puede mostrar ese texto en los resultados: parece que el sitio no está terminado, justo en la página que vende sus servicios. | /servicios/ en vivo (dos `<meta name="description">`) |
| 2 | **Dos horarios para el medio día.** En "Renta Estudio Medio Día" dice "3 a 5 hrs continuas" y, junto al precio, "$2,000 De dos a 4 horas". La iluminación del día completo dice "$1,000 por 8 hrs" aunque la renta es de 6 a 10 horas. | Quien quiere rentar tiene que preguntar antes de reservar, y se presta a malentendidos al cobrar. | /nuestro-estudio/ en vivo |
| 3 | **Teléfono y correo no se pueden tocar.** "33 3559 6393" y "fotoproducto675@gmail.com" son texto: no hay ningún enlace `tel:` ni `mailto:` en las tres páginas. | En el celular no se puede llamar ni escribir con un toque; solo queda el WhatsApp. | Inicio, Servicios y Nuestro Estudio en vivo |
| 4 | **Sin datos de negocio para Google.** Su JSON-LD (de Yoast) solo declara `WebPage`, `WebSite` y `Organization`: no dice que es un estudio fotográfico con dirección, teléfono y tarifas. La portada tiene dos H1. No hay enlace a Google Maps. | Pierde búsquedas locales como "renta de estudio fotográfico Zapopan" o "fotografía de producto Guadalajara". | Inicio en vivo |
| 5 | **Analítica que ya no mide.** La portada carga Universal Analytics (UA-172767835-1), que Google dejó de procesar en 2023, además de la etiqueta de Google Ads. | No sabe cuántas visitas llegan ni de dónde vienen sus contactos. | Inicio en vivo |
| 6 | **Detalles de texto y carga.** "Experiencia Expert", "Sorft Box", "Fotografia" sin acento y seis familias de Google Fonts con todos sus pesos. | Restan cuidado a un negocio que vende precisión y detalle; la página tarda más en el celular. | Inicio y Nuestro Estudio en vivo |

Nota: **su trabajo es excelente**: más de 100 fotos de producto propias, bien iluminadas, en moda, muebles, alimentos, vinos y redes, y un estudio con tarifas claras. El argumento principal: **que el sitio esté a la altura de sus fotos y que la renta del estudio se pueda armar y reservar desde el celular.**

## Qué le ofrecemos

- "Arma tu día en el estudio": el set dibujado, las tarifas reales con luces y cicloramas, el total y la reserva por WhatsApp con todo escrito.
- Su portafolio ordenado por especialidad, con "Cotizar" por WhatsApp desde cada una.
- Una sola página rápida, con teléfono y correo tocables, Google Maps, datos para Google y barra fija en el celular.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo (por WhatsApp al 33 3559 6393 o por Instagram). Tono: respetuoso y útil.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Vi el trabajo de Fotoproducto y sus fotos de producto son muy buenas. Revisando su página noté que la de Servicios todavía tiene un texto para Google que dice que el sitio "pronto estará listo", y que la renta de medio día aparece con dos horarios distintos (3 a 5 horas y de 2 a 4). Les preparé una propuesta donde quien quiere rentar el estudio arma su día con luces y cicloramas, ve el total y reserva por WhatsApp. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿El medio día es de 3 a 5 horas o de 2 a 4? ¿La iluminación cuesta más si el día es de 10 horas?
- ¿Qué colores de ciclorama tienen y cuántos se pueden usar a la vez? ¿Los precios llevan IVA?
- ¿Tienen fotos del estudio y del equipo, y permiso para mostrar los logos de sus clientes?
- ¿Su Instagram correcto es foto_producto.com1?
