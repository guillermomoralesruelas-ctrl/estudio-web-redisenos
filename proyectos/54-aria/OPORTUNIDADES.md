# ARIA: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json`, o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://somosaria.com/ . Academia de baile ARIA, clases semi personalizadas de salsa, bachata, cumbia y más en Hipódromo Condesa, CDMX |
| Prioridad | **BAJA**: su sitio es moderno, rápido de leer, con precios, horarios, preguntas frecuentes y promociones al día. Los problemas son de datos que no coinciden entre páginas, no de un sitio viejo |
| Contacto publicado | WhatsApp y teléfono +52 56 3468 4421; Av. Baja California 275, piso 5, Hipódromo Condesa; Facebook, Instagram y TikTok |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-28/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-28 con curl al sitio real.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Dos horarios distintos para el sábado**: "Horarios y ubicación" dice de 10:00 AM a 1:00 PM y de 3:00 a 6:00 PM; las páginas de TotalPass y Wellhub dicen de 11:00 AM a 2:00 PM y de 3:00 a 6:00 PM. | Quien llega a las 10 con su membresía de TotalPass o a la 1:30 siguiendo la otra página encuentra la clase cerrada. | `/horarios-ubicacion/`, `/totalpass/` y `/wellhub/` en vivo |
| 2 | **El piso no coincide**: todo el sitio dice piso 5, pero la pregunta "¿Dónde se realizan los ensayos?" de la página de boda dice "Piso 4". | Una pareja que va a ensayar su coreografía sube al piso equivocado. | `/coreografia-para-boda/` en vivo |
| 3 | **La página de promociones sigue mostrando promociones vencidas**: el 20% de julio (JULIO26), el 35% de Hot Sale (HOTSALE26) y el "10% y sin inscripción" de mayo, debajo de la vigente de septiembre. | El cliente pide un cupón que ya no vale y la conversación empieza con un "no". | `/promociones/` en vivo |
| 4 | **Cifras que no se ponen de acuerdo**: la portada dice 4.8 en Google y +4 mil alumnos; "Nosotros" dice 4.9/5 y "cientos de alumnos". | Resta confianza a números que son buenos. | Portada y `/nosotros/` en vivo |
| 5 | **Tres rastreadores en la portada**: Google Tag Manager, Microsoft Clarity y el píxel de Facebook. | Más peso en el celular y un aviso de privacidad que debe mencionarlos. | HTML de la portada en vivo |

Nota: la vigencia de los paquetes (16 a 38 días) es corta y está en letra chica. El argumento principal: **que cada alumno vea antes de pagar qué paquete sí termina con los días que puede ir**, y que llegue por WhatsApp con esa decisión ya tomada.

## Qué le ofrecemos

- "¿Cuántas clases te caben?": calendario real con sus días y horas, que dice qué paquete termina antes de que venza y cuál le conviene, con WhatsApp que ya lo dice.
- Precios individuales y en pareja, inscripción y clase suelta en una sola vista (en su sitio, pareja es una pestaña oculta).
- El mapa real, el aviso de la puerta del edificio y una barra fija en el celular con Clase gratis, Llamar y Cómo llegar.

## Qué hay que pedirle

- Cuál es el horario real del sábado y en qué piso están los ensayos de boda.
- Si la inscripción va aparte en el paquete individual de 12 clases.
- Una foto real de una pareja de boda (la de su sitio parece generada).
