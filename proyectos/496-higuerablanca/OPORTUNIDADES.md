# Higuera Blanca: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://higuerablanca.com.mx/ (una página) y su carta en PDF https://higuerablanca.com.mx/assets/menu/MENU.pdf. Restaurante de mariscos veracruzanos desde 1981, con sucursales en Boca del Río y Zempoala |
| Prioridad | **MEDIA**: la carta con precios solo está en un PDF de 3.6 MB que Google no puede leer (el texto está en curvas) y que da teléfonos distintos a los del sitio y una página web que no existe; además, el sitio descarga un video de 86 MB al abrirse |
| Contacto publicado | Boca del Río: tel. y WhatsApp 229 476 4100, higuerablanca.boca@hotmail.com. Zempoala: tel. y WhatsApp 296 109 6287, higuera.blanca@hotmail.com. Facebook /higuerablancadeboca, Instagram @higuerablanca.boca |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-26/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-26 (`https://higuerablanca.com.mx/` responde 200 y es igual a `original.html`, salvo el cifrado de los correos), su `script.js` y su PDF.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Su carta en PDF trae otros teléfonos y una web que no existe.** La contraportada dice Sucursal "Tel: (229) 927 3129 / Pedidos WhatsApp (229) 476 4100" y Matriz "Tels. (296) 971 4885", con "www.higuerablancadeboca.com"; el sitio da 229 476 4100 y 296 109 6287, y ese dominio no existe (no resuelve en DNS). | Quien descarga la carta (justo el cliente que ya decidió ir) puede llamar a un número que ya no contestan o buscar una página que no abre. Llamadas perdidas y reservaciones que no se hacen. | PDF página 8; `original.html` (`tel:+522294764100`, `tel:+522961096287`); `nslookup higuerablancadeboca.com` → "Non-existent domain" |
| 2 | **La carta solo está en un PDF y Google no la puede leer.** El sitio no tiene ningún platillo con precio: todo está en un PDF de 8 páginas y 3.6 MB cuyo texto está convertido en curvas (no se puede copiar ni buscar). | Quien busca "chilpachole Boca del Río" o "precio caldo de robalo" no los encuentra; en el celular, un PDF de 3.6 MB tarda y se lee con zoom. Lo que más vende (su carta, muy completa) no ayuda a que los encuentren. | `original.html` (enlace a `assets/menu/MENU.pdf`); el PDF no tiene texto extraíble (PyMuPDF devuelve 0 caracteres en sus 8 páginas) |
| 3 | **Un video de 86 MB se descarga al abrir la página.** "Nuestra Esencia" tiene un `<video autoplay muted loop>` con `videopromo.mov` (QuickTime, 86,122,171 bytes), sin `preload="none"`. | En el celular con datos, abrir el sitio puede gastar 86 MB y tardar mucho; varios navegadores no reproducen .mov. Mucha gente se va antes de llegar a "Reservar". | curl `-I` de `https://higuerablanca.com.mx/assets/videos/videopromo.mov`: `Content-Length: 86122171`, `video/quicktime` |
| 4 | **Testimonios que parecen de ejemplo.** Cinco reseñas de cinco estrellas con nombres genéricos ("María González, Ciudad de México", "Roberto Martínez, Monterrey"…) y sin enlace; una elogia la "Cazuela de Mariscos", que no está en su carta, y otra el "Pescado a la Veracruzana" (en la carta solo el lomo de negrillo viene a la veracruzana). | Si un cliente nota que la reseña habla de un platillo que no existe, desconfía de todo lo demás. Sus reseñas reales de Google valen más. | `original.html`, sección "Lo Que Dicen Nuestros Clientes"; PDF páginas 2 a 5 |
| 5 | **La foto de la portada parece generada con IA.** El fondo del inicio (`assets/img/background.webp`) es un banquete en una terraza frente al mar con máquina de pasta, alcachofas y una botella con la etiqueta deformada; no es su restaurante ni su comida. Tienen fotos profesionales de sus platillos que no usan ahí. | La primera imagen que ve el cliente no es de Higuera Blanca; quien la reconoce como imagen de IA desconfía. | `styles.css` (`background-image: url('assets/img/background.webp')`) y la imagen |
| 6 | **Google no sabe qué son ni dónde están.** No tiene datos de restaurante (JSON-LD con dirección, horario y teléfono de cada sucursal) ni Open Graph; al compartir el enlace por WhatsApp sale sin foto. La meta `keywords` está en inglés ("seafood, luxury dining"). | Menos visitas de quien busca mariscos en Boca del Río o Zempoala, y enlaces compartidos sin vista previa. | curl del inicio: `ld+json` 0, `og:` 0 |
| 7 | Detalles menores: "Tentáculos Teriyaki" sale en "Sugerencias del Chef" pero no en la carta; la carta tiene asteriscos (*) en cuatro pescados sin nota que los explique y renglones que dependen del de arriba ("Al mojo de ajo, enchipotlada y ajillo (500 gr.)"); dice "Reservaciones: Miércoles - Lunes" sin aclarar si es el horario del restaurante; el enlace de Plaza Portamar (`maps.app.goo.gl/portamar`) da error 404 (está desactivado); erratas como "Dobunnet" y "Chartreusse"; el encabezado es solo el texto "HB", sin su logo del cangrejo. | Pequeños descuidos que generan preguntas por teléfono y restan confianza a un sitio que por lo demás se ve cuidado. | `original.html`, PDF y curl de `https://maps.app.goo.gl/portamar` (404) |

Nota: el sitio **está bien hecho** en lo básico: fotos profesionales de sus platillos, las dos sucursales con dirección, horario y enlace a Google Maps, y botones de llamar y WhatsApp con mensaje para cada sucursal. El argumento no es "su sitio está mal", sino **que su carta (muy completa) trabaje para ellos y que nadie llame a un número viejo**.

## Qué le ofrecemos

- La carta completa en la página, con precios, en pestañas, que Google puede leer, y las palabras veracruzanas explicadas (chilpachole, acamayas, minilla, rasurado, "por temporada", "cada 100 g").
- "¿Cómo lo quieres?": el cliente elige enchipotlado, enchilpayado, al acuyo, a la veracruzana… y ve qué platillos de su carta vienen así y cuánto cuestan, y reserva por WhatsApp con eso escrito.
- Un solo juego de teléfonos, el mismo en el sitio y en la carta.
- Sus fotos reales en la portada, sin video pesado; datos de restaurante para Google por sucursal y vista previa al compartir; barra fija en el celular con WhatsApp de cada sucursal, llamar y cómo llegar.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Estuve viendo su página y su carta, que está muy completa. Noté que la carta en PDF trae teléfonos distintos a los de la página (por ejemplo, un 229 927 3129 y un 296 971 4885) y una dirección web que ya no abre, y que Google no puede leer los platillos porque solo están en el PDF. Les preparé una propuesta de cómo podría verse su sitio, con la carta completa y sus precios en la página y una sección para elegir cómo quieres tu pescado (enchilpayado, al acuyo, a la veracruzana…) y ver qué platillos vienen así. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Qué teléfonos son los vigentes en cada sucursal? ¿El 229 927 3129 y el 296 971 4885 todavía contestan? ¿El 296 109 6287 tiene WhatsApp?
- ¿El horario "miércoles a lunes" es el del restaurante o solo el de reservaciones? ¿Cierran los martes?
- ¿La carta de Zempoala tiene los mismos precios que la de Boca del Río? ¿Siguen vigentes los de 2025?
- ¿Qué significan los asteriscos de la carta? ¿Qué son las "Dobladas a la Malpica", los "Camarones Don Tony", el "mignon", el "arrecife" y la "Con marisco"?
- ¿Tienen fotos de sus salones y de la fachada de cada sucursal? ¿La foto en sepia de la entrada es de su local?
- ¿Los testimonios del sitio vienen de reseñas reales? ¿Les interesa mostrar las de Google?
- ¿Para cuándo es la sucursal de Plaza Portamar?
