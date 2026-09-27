# Cafessia - Coffee & Lunch: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://cafessia.com/ (una página en HTML y CSS) y su pedido en línea https://coffeeshop.maikodev.com/cafessia. Café para llevar con terraza en Llano Verde, Hermosillo |
| Prioridad | **ALTA**: el menú del sitio y el pedido en línea, donde se cobra, tienen precios distintos en cinco productos (el muffin cuesta $55 en el sitio y $65 al pedir), y su pedido en línea tiene activo un código de descuento de prueba "DEMO" del 10 % en todo |
| Contacto publicado | WhatsApp 662 291 5226, Instagram @cafessia.hmo |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-26/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-26 (`https://cafessia.com/` responde 200 y es igual a `original.html`) y los datos públicos de su pedido en línea (`https://coffeeshop-api.maikodev.com/menus/public/cafessia`, lo que lee la página "Ordena aquí").

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Dos menús con precios distintos.** El sitio dice capuccino caliente $60 - $70, dirty chai $70 - $80 (frío $80), muffin de huevito $55 y refresco $40; su pedido en línea cobra $55/$65, $65/$75 (frío $75), $65 y $30. El capuccino frío, la tisana caliente y las galletas solo están en el sitio; los tres combos y la Coca-Cola light solo en el pedido en línea. | Quien ve el muffin a $55 y al pedir le sale en $65 siente que le cambiaron el precio; y quien busca el capuccino frío del sitio no lo encuentra al pedir. Son dudas en la ventanita y pedidos que no se hacen. | `crudo.json` (menú del sitio) contra el JSON del pedido en línea (campos `basePrice` y `variants`) |
| 2 | **Un código de descuento de prueba está activo.** Los datos públicos de su pedido en línea incluyen un descuento llamado "Demo", código `DEMO`, 10 % en todos los productos, activo, sin fecha de fin ni restricción; el formulario de pedido tiene campo para código. No se probó hacer un pedido. | Si alguien lo encuentra, cualquier pedido sale 10 % más barato. Parece un resto de cuando se configuró el sistema. | JSON del pedido en línea, `discounts`: `"name":"Demo"`, `"code":"DEMO"`, `"discountPercent":"10"`, `"isActive":true` |
| 3 | **"Caliente $50 - $60" sin decir por qué.** El sitio da dos precios sin explicar que son Mediano (12 oz) y Grande (16 oz); tampoco dice que tienen leches vegetales, 13 jarabes, shot extra y cold foam, ni los combos. | El cliente no sabe cuánto le va a costar su café hasta abrir el pedido en línea; lo que más vende un café (personalizarlo, los combos de desayuno) no aparece en su sitio. | `crudo.json` y `original.html` (tarjetas `card-prices`) |
| 4 | **Google no sabe qué son ni dónde están.** No tiene `meta description`, Open Graph ni datos de negocio (JSON-LD con dirección, horario y teléfono), y la página no tiene ningún H1: la portada es solo la imagen del logo. | En Google aparecen con un texto al azar, y al compartir el enlace por WhatsApp sale sin foto ni descripción (su pedido en línea sí la tiene). Menos visitas de quien busca "café Llano Verde". | curl de `https://cafessia.com/`: `description` 0, `og:` 0, `ld+json` 0, `<h1` 0 |
| 5 | **Un script comentado deja a la vista una clave.** Al final del HTML hay un widget de chatbot desactivado (apunta a `localhost:8000`) con su `data-apiKey` escrita. | No afecta a los clientes, pero cualquiera que vea el código de la página puede leer esa clave; conviene borrar el comentario y cambiarla si se usa. | `original.html` y curl del inicio: `script.dataset.apiKey = '…'` dentro de un comentario |
| 6 | Detalles menores: el botón "Ordena aquí" lleva el icono de WhatsApp pero abre el pedido en línea; la foto de las galletas parece de banco y la del refresco es la foto de producto de Coca-Cola; 10 fotos de producto tienen en sus datos "Edited with Google AI" y la estrellita de Gemini en la esquina; "Tizana" en vez de "Tisana"; el pie dice © 2025. | Pequeños descuidos que restan confianza a un sitio que por lo demás se ve cuidado. | `original.html` y metadatos de las imágenes (`sitio/assets/assets/images/`) |

Nota: el sitio **está bien hecho** en lo básico: fotos de sus vasos con su logo, precios a la vista, horario, dirección, WhatsApp y un pedido en línea que funciona. El argumento no es "su sitio está mal", sino **que el precio que ven sea el que pagan y que el café se venda solo**.

## Qué le ofrecemos

- Un solo menú con los precios del pedido en línea, los dos tamaños explicados y los combos a la vista.
- "Arma tu vaso": el cliente elige bebida, tamaño, leche, jarabes y extras, ve su vaso y el total, y lo pide en línea o por WhatsApp con todo escrito.
- "Abierto ahora" o a qué hora abren, según la hora de Hermosillo (solo abren entre semana en la mañana).
- Descripción, vista previa y datos de negocio para Google; barra fija en el celular con Ordena aquí, WhatsApp, llamar y cómo llegar.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Me gustó mucho su sitio y que se pueda pedir en línea. Revisándolo noté que algunos precios del menú de la página no coinciden con los del pedido en línea (por ejemplo, el muffin de huevito sale a $55 en la página y a $65 al pedir), y que en el sistema de pedidos sigue activo un código de prueba "DEMO" con 10 % de descuento. Les preparé una propuesta de cómo podría verse su sitio, con un solo menú y una sección para armar tu café y ver cuánto sale antes de pedir. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Qué precios son los vigentes, los del sitio o los del pedido en línea?
- ¿Siguen vendiendo el capuccino frío, la tisana caliente y las galletas de chocolate? ¿La tisana caliente tiene dos tamaños?
- ¿Todas las bebidas frías son de 16 oz?
- ¿El código "DEMO" es a propósito?
- ¿Tienen fotos de sus productos sin retocar, y de los combos y las galletas?
- ¿El 662 291 5226 también recibe llamadas?
- ¿La terraza es para que los clientes se queden a tomar su café?
