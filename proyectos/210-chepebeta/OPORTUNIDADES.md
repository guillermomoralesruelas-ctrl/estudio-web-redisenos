# Che Pebeta: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://chepebeta.mx/ (sitio de una página hecho con Lovable, más /menu). Restaurante argentino de alta gama en Pueblo Serena, Carretera Nacional, Monterrey, N. L.; premios CANIRAC 2019 y 2023 |
| Prioridad | **ALTA**: el botón verde de WhatsApp que flota en todas sus páginas, con el mensaje "Hola, quiero hacer una reservación en Che Pebeta", manda a un número de ejemplo (52 81 1234 5678), no al suyo |
| Contacto publicado | WhatsApp 81 1762 6442 (su formulario de reserva y su "Teléfono"), tel. 81 1099 5176, IG @chepebeta.oficial, FB /chepebetarestaurante |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-26/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-26 (inicio y /menu, 200; y sus archivos `/assets/index-LVYPD67w.js`, `/assets/menu-B19Cg0DX.js` y `/assets/WhatsAppButton-CKCIaMIX.js`) y en `investigacion/original.html` y `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **El botón flotante de WhatsApp va a un número de ejemplo.** El botón verde que aparece en la esquina de todas las páginas abre `wa.me/528112345678` con el texto "Hola, quiero hacer una reservación en Che Pebeta". Ese 81 1234 5678 no es ninguno de sus números (su formulario y su "Teléfono" usan el 81 1762 6442). | Es el botón más visible del sitio y el que más usa la gente desde el celular: cada reservación que llega por ahí se le manda a un desconocido o a nadie, y el cliente cree que ya reservó. | `original.html` y curl del inicio: `<a href="https://wa.me/528112345678?text=Hola%2C%20quiero%20hacer%20una%20reservaci%C3%B3n…" class="whatsapp-float">`; `crudo.json` (último enlace); `WhatsAppButton-CKCIaMIX.js` |
| 2 | **Promociones del Mundial vencidas.** El menú tiene "PROMOS" y el inicio "¡Vamos Argentina! Promos especiales durante todo el Mundial" (La Scaloneta $199, Tercer Estrella $299, La Mano de Dios $990). El Mundial terminó el 19 de julio de 2026. | Quien llega hoy pide una promoción que ya no existe, o piensa que el sitio está abandonado. Si alguna sigue, conviene presentarla como promoción de la casa. | `crudo.json` e `index.html` en línea ("Promociones Mundialistas", "Vivimos cada partido con vos") |
| 3 | **Google no sabe que es un restaurante ni en qué idioma está.** No hay datos de restaurante (JSON-LD con dirección, horario y carta), la página se declara en inglés (`lang="en"`) aunque todo está en español, la imagen para compartir es un archivo "Diseño sin título" subido a Lovable, y las 14 fotos de la galería se llaman "Che Pebeta - foto 1" a "foto 14". | Menos visibilidad en búsquedas como "restaurante argentino Carretera Nacional" y en Google Maps; el navegador puede ofrecer traducir la página al español. | curl del inicio y de /menu: 0 `ld+json`, `<html lang="en">`, `og:image` en `storage.googleapis.com/gpt-engineer-file-uploads/…Diseño_sin_título_(1).webp`, `alt="Che Pebeta - foto N"` |
| 4 | **La carta del inicio no enseña precios.** "Nuestra Carta" del inicio son siete pestañas con una frase y una foto, sin platillos; los precios están en otra página (/menu), a la que solo se llega abriendo el desplegable "Menú": en el HTML del inicio no hay ningún enlace a /menu, así que Google tampoco lo encuentra desde ahí. | La gente que decide dónde cenar quiere ver precios sin buscar; una parrilla de alta gama con cortes de $290 a $2,590 gana confianza al enseñarlos. | curl del inicio ("Menú" es un `<button aria-haspopup>`, 0 `href="/menu"`), `crudo.json` ("Nuestra Carta" solo con la frase de Entradas) y `/menu` (la carta sí está completa y bien hecha) |
| 5 | Detalles menores: la insignia "Edit with Lovable" en la esquina; el formulario de reserva pide correo aunque la solicitud se manda por WhatsApp; "Para acompañar" promete "vegetales asados a la leña" que no están en la carta; "Tercer Estrella" (por "Tercera Estrella"); "Shot de Limón o Tercias" sin explicar; la foto de "Cata Maridaje" (un tomahawk con velas y manteles blancos) no se parece a su salón; sin aviso de consumo responsable. | Descuidos que restan en un sitio que por lo demás se ve cuidado. | `crudo.json` ("Edit with"), `index-LVYPD67w.js` ("menu.acompanar.desc", "form.email"), `menu-B19Cg0DX.js` |

Nota: el sitio **está bien hecho**: fotos propias muy buenas de sus platillos, su cava y su salón lleno, la carta completa con precios en /menu, horario, dirección con enlace a Google Maps y un formulario de reserva que sí funciona (arma un WhatsApp al 81 1762 6442). El argumento no es "su sitio está mal hecho", sino **que el botón que más se toca manda las reservaciones a un número de ejemplo**, y que la parrilla, que es lo que los distingue, puede vender más si se explica.

## Qué le ofrecemos

- Que todas las reservaciones lleguen a su WhatsApp: formulario, botones y una barra fija en el celular (Reservar, WhatsApp, Llamar y Cómo llegar) con su número real.
- La carta completa en la misma página, con precios y con las notas explicadas (descorche, High Choice, bife de 1 o 2 pulgadas, tamaños de pizza).
- "El despiece": una res dibujada con sus cortes; el cliente toca el vacío o la picaña y ve de qué parte sale, cuánto cuesta, en qué parrillada viene, y reserva pidiéndolo.
- Datos de restaurante para Google (dirección, horario, carta, premios CANIRAC), página en español y sin promociones vencidas.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Revisando su sitio noté algo que quizá les cuesta reservaciones: el botón verde de WhatsApp que aparece en la esquina de la página manda el mensaje "quiero hacer una reservación" al 81 1234 5678, que parece un número de ejemplo, y no a su 81 1762 6442. Les preparé una propuesta de cómo podría verse su sitio, con la carta completa y una forma de explicar sus cortes a quien no conoce la parrilla argentina. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿El 81 1762 6442 es su WhatsApp de reservas? ¿El 81 1099 5176 recibe llamadas?
- ¿Siguen alguna de las promociones del Mundial?
- "High Choice Angus · Cortes Nacionales": ¿"nacionales" quiere decir de origen mexicano?
- ¿Qué son las "tercias" del shot de limón? ¿Tienen vegetales a la leña?
- ¿Nos comparten fotos de sus cortes, de una cata y de las demás secciones de la carta?
- ¿Su parrillero puede revisar el despiece (de qué parte sale cada corte)?
- ¿Necesitan el correo del cliente en la reserva?
- ¿Quieren conservar el sitio en cinco idiomas?
