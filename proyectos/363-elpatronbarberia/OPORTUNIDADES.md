# El Patrón Barbería (Juárez): oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` e `investigacion/crudo.json` (captura del 2026-09-26). La red de la nube no llega a elpatron.com.mx, así que **no se pudo comprobar en vivo**. Los defectos del clon no son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.elpatron.com.mx/ . Barbería premium en Av. Insurgentes Sur 26, Col. Juárez, CDMX (con sedes en Arcos y Zibatá, Querétaro) |
| Prioridad | **MEDIA**: el sitio es moderno y tiene reservas y WhatsApp por barbero, pero su contador dice "+0 Estilos Transformados", el retrato de un barbero está hecho con IA y su mapa parece de ejemplo |
| Contacto publicado | WhatsApp 55 2860 0906; Arcos 442 452 3077; Zibatá 442 782 0265; Instagram @elpatronbarberiaytonicos; Facebook /ElPatronBarberiaJuarez |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-29/` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | El contador de la portada dice "+0 Estilos Transformados" | Es lo primero que se ve y dice que no han transformado a nadie | `original.html` y `crudo.json` |
| 2 | El retrato de Yosef es una imagen hecha o retocada con IA (credenciales C2PA con SynthID de Google) | Un cliente que lo nota desconfía del resto de las fotos | `sitio/assets/yosef_cool.png` |
| 3 | El mapa incrustado trae un identificador de lugar y una fecha que parecen de ejemplo ("0x6b8f3b6c2d1b7b7a", "1616612345678") | Puede no marcar su local en Google Maps | `original.html` (iframe) |
| 4 | La FAQ promete "servicio de lujo garantizado" y "el referente definitivo en diseño de imagen masculina en México" | Promesas difíciles de sostener | `original.html` |
| 5 | La membresía ($2,650 con $3,480 de crédito) no explica en qué servicios o sedes se puede usar | El cliente no sabe si le conviene | `original.html` |

Lo que sí funciona: reservas en línea, WhatsApp con mensaje por barbero, precios claros, horario y FAQ, y datos para Google.

## Qué le ofrecemos

- "Tu año de Patrón": el cliente ve en doce meses en qué usaría el crédito de la membresía y la pide por WhatsApp.
- Quitar el contador en cero, la foto hecha con IA y las promesas.
- Una página más directa: servicios con foto, equipo y ubicación.

## Mensaje sugerido para el primer contacto

> Hola, buen día. Estuve viendo la página de El Patrón y me gustó mucho el concepto y las reservas por barbero. Noté que el contador de la portada dice "+0 Estilos Transformados" y que el mapa incrustado parece no apuntar a su local. Me dedico a rediseñar sitios y preparé una propuesta donde el cliente arma su año de visitas y ve cómo le rinde la membresía antes de pedirla por WhatsApp. Si les interesa, con gusto se la enseño, sin compromiso.

## Preguntas para la conversación

- Número real de estilos transformados o quitar el contador.
- Fotos reales de Yosef y Uriel.
- En qué servicios y sedes se usa el crédito de la membresía.
- El enlace correcto del mapa de Google.
