# Cuadro x Cuadro: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json`, o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | http://videofilmaciones.mx/ . Fotografía y video de bodas y XV años, Ciudad de México |
| Prioridad | **MEDIA**: tiene muy buenas fotos, opiniones y paquetes detallados, pero el sitio es de 2017, marca el teléfono con el 01, no publica precios y sus paquetes de boda traen textos copiados de los de XV años |
| Contacto publicado | WhatsApp y teléfono 55 2123 7334; saulrosas@cuadroxcuadro.mx; Facebook CUADROXCUADROPRO |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-28/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-28 con curl al sitio real y en `investigacion/crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **El botón de teléfono marca `(01)5521237334`.** El prefijo 01 se eliminó en México en 2019. | Quien toca "llamar" desde el celular puede no comunicarse, justo cuando está listo para cotizar. | `href="tel:(01)5521237334"` en el HTML del sitio en vivo |
| 2 | **Los paquetes de boda traen textos de los de XV años**: "felicitando a la quinceañera" (3 veces), "Sesión Pos-XV" y "Video clip sesión pos-xv", además de "WEEDING DAY". | Una pareja que compara fotógrafos lo nota y parece descuido, en un servicio que vende atención al detalle. | Página `/paquetesdefotografiayvideobodas` en vivo |
| 3 | **La portada vende el "Paquete Premium $20,000, incluye tomas con drone", pero la lista del Premium no incluye drone** (solo el VIP lo lista). Los demás paquetes no tienen precio. | Genera dudas y mensajes de ida y vuelta; sin precios de referencia, la pareja compara con quien sí los publica. | Página de inicio en vivo y `crudo.json` (página de paquetes de boda) |
| 4 | **Un bloque de Instagram vacío**: "¡Aún no hay fotos ni videos! Conectar la cuenta para mostrar las fotos". | Se ve abandonado. | Página `/paquetesdefotografiayvideoxvanos` en vivo |
| 5 | **Fotos muy pesadas**: sus 56 fotos suman 43 MB; varias pasan de 1.5 MB (la más grande, 1.98 MB). | En el celular la galería tarda mucho en cargar. | `curl` a `full_MIzKEGeG.jpg` (1,981,305 bytes) y las fotos del sitio |

Nota: **sus fotos son excelentes** y tienen 4.8 de 5 en bodas.com.mx. El argumento principal: **que el sitio esté a la altura de su trabajo, con precios claros y un botón que sí llame.**

## Qué le ofrecemos

- "Tu día, cuadro por cuadro": la pareja elige su paquete y ve, en una cinta de horas, qué momentos del día cubre y cuánto cuesta cada hora extra; lo pide por WhatsApp con un mensaje ya escrito.
- Sus paquetes de boda y de XV años corregidos y en un solo lugar.
- La galería con sus mejores fotos, de 43 MB a 1.5 MB.
- Barra fija en el celular con WhatsApp, Llamar y Paquetes.

## Qué hay que pedirle

- Los precios de sus paquetes (o un "desde") y si el Premium incluye drone.
- Su logo en buena calidad.
- Si tiene estudio con dirección, para ponerlo en Google Maps.
