# Emiliana Joyería Fina: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-27). Los defectos del clon no son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://emiliana.com.mx/ |
| Prioridad | **MEDIA**: el sitio funciona bien; los problemas son de visibilidad para Google y de contacto móvil |
| Contacto publicado | WhatsApp 9993 64 12 46, oroyucateco@gmail.com, facebook.com/EmilianaJoyeria, instagram.com/emiliana_mx |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | El número de teléfono "9993 64 12 46" se muestra como texto, **sin enlace `tel:`**: al tocarlo en el celular no pasa nada | Clientes que quieren llamar tienen que memorizar o copiar el número; se pierde la llamada | `investigacion/original.html` — sin `href="tel:"` en ningún lugar del HTML |
| 2 | El JSON-LD del sitio declara el negocio como `"@type": "Organization"` en lugar de `"JewelryStore"` | Google no identifica el negocio como joyería; pierde relevancia en búsquedas de "joyería en Mérida" | `investigacion/original.html` — script `application/ld+json` |
| 3 | El `sameAs` del JSON-LD incluye varios strings vacíos (`""`) además de Facebook e Instagram | Google puede ignorar el JSON-LD completo por estar malformado | `investigacion/original.html` — campo `sameAs` con 9 entradas, 7 vacías |
| 4 | La colección "Birthstone Rings" aparece en el menú pero **no tiene ningún texto que explique qué es ni por qué comprar** un anillo de birthstone | Los clientes que no conocen la tradición no entienden la propuesta; se pierde una oportunidad de venta emocional | `investigacion/crudo.json` — menú y colecciones del inicio |

## Qué le ofrecemos

- Una página de presentación que explica quiénes son y qué hacen **antes** de que el cliente llegue a la tienda Shopify, con fotos propias reales y el relato de la marca (4 generaciones).
- El selector "¿Cuál es tu piedra?" que convierte la colección Birthstone Rings —hoy invisible— en una propuesta de regalo concreta y personalizada.
- Teléfono con enlace de llamada directa, WhatsApp con mensaje prellenado y barra fija en celular (WhatsApp, llamar y cómo llegar).
- JSON-LD correcto de `JewelryStore` para que Google identifique el negocio y lo muestre en búsquedas de joyería.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, soy Guillermo. Soy diseñador web y conozco su joyería desde su sitio. Vi que su número de teléfono no tiene enlace de llamada en el celular, así que quienes quieren llamar tienen que copiar el número a mano. Armé una propuesta de sitio que muestra sus colecciones y tiene el teléfono listo para marcar con un toque. ¿Les gustaría verla?

## Preguntas para la conversación

- ¿Cuál es el horario de atención del showroom en Bundal? (no está publicado en el sitio).
- ¿Tienen fotos del showroom o del taller que podamos usar?
- ¿El WhatsApp 9993 64 12 46 es el principal para consultas? (en el sitio hay dos enlaces: uno directo al número y otro con `wa.link/qh098x`).
