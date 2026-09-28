# Go México Adventures: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con `curl` en el sitio real el 2026-09-28 y en `investigacion/original.html`. Los defectos del clon (carruseles desbordados, imágenes rotas) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://gomexicoadventures.com/ |
| Prioridad | ALTA: sus botones "Login" y "Sign Up" llevan al sitio de demostración de su plantilla, y la mayoría de sus imágenes (incluida la foto principal de su experiencia estrella) están hechas con IA, aunque tiene fotos reales muy buenas |
| Contacto publicado | WhatsApp y tel. +52 56 5927 1819, info@gomexicoadventures.com (y gomexicoadventure@gmail.com), IG, FB, TikTok y YouTube @gomexicoadventures |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | "Login" y "Sign Up" del encabezado llevan a `wptravelenginedemo.com/travel-monster/my-account/`, el sitio de demostración de la plantilla. | Un cliente que quiere entrar a su cuenta termina en otro sitio: se ve improvisado y puede dar desconfianza para pagar. | `curl https://gomexicoadventures.com/` |
| 2 | La mayoría de las imágenes son generadas con IA: 60 PNG con nombre tipo UUID y 4 "ChatGPT-Image-…"; los originales traen credenciales C2PA de OpenAI. Incluye la foto de "Kayak al amanecer" (su experiencia destacada y "viaje del mes"). | En turismo de naturaleza el cliente quiere ver el lugar real; una foto de IA puede prometer algo que no es, y ya tienen fotos reales buenas (WhatsApp, clientes). | `curl` del inicio; metadatos de `51af9210…png` y `687aee60…png` en el clon |
| 3 | El precio de "Sabores en la Chinampa" es $399 en la portada y "desde $199 por persona" en su ficha; en las experiencias por grupo, la caja de reserva dice "Adulto (Adult): Gratis". | Precios que no cuadran generan dudas y mensajes para aclarar; "Gratis" confunde en una experiencia que cuesta $750 o más. | Portada y fichas /es/trip/flavors… y /es/trip/private-trajinera… |
| 4 | Sin imagen para compartir (sin `og:image`); la portada abre en inglés aunque su clientela y sus opiniones están en español; el bloque "Blog & Tips" muestra "No posts found!". | Al compartir el enlace por WhatsApp no sale ninguna foto; el visitante mexicano llega a una página en inglés. | `curl` del inicio |
| 5 | Dos correos distintos (info@gomexicoadventures.com arriba y gomexicoadventure@gmail.com en el pie) y el punto de encuentro solo aparece dentro de cada ficha. | No queda claro a qué correo escribir ni a dónde llegar sin abrir una experiencia. | `curl` del inicio y fichas |

## Qué le ofrecemos

- Una página en español, con solo fotos reales, que responde lo primero que pregunta un grupo: "somos 8, ¿en qué cabemos y cuánto sale?".
- Punto de encuentro, horario y temporada a la vista, con mapa.
- Encabezado sin enlaces a la demo, precios consistentes y datos para Google.

## Mensaje sugerido para el primer contacto

> Hola, ¿qué tal? Vi su página de experiencias en la Laguna del Toro y noté que los botones "Login" y "Sign Up" llevan al sitio de demostración de la plantilla (wptravelenginedemo.com), no a su sitio. Armé una propuesta en español, con sus fotos reales, donde el visitante pone cuántos van y ve en qué experiencias caben y cuánto sale, con WhatsApp directo. ¿Les comparto el enlace?

## Preguntas para la conversación

- ¿"Sabores en la Chinampa" cuesta $199 o $399 por persona?
- ¿Cobran distinto a niños? ¿Desde qué edad?
- ¿Tienen fotos reales del kayak al amanecer y de la Chinampa Atlicpac?
- ¿Cuál correo prefieren y cuál es la dirección exacta del punto de encuentro?
