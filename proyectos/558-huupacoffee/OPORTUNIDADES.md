# Huupa Coffee: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://huupa.coffee/ (tienda en línea de Shopify). Tostador de café mexicano tostado en leña de mezquite, con local en el Centro de Hermosillo |
| Prioridad | **MEDIA**: la tienda funciona y está bien hecha (fotos propias, fichas completas, envíos claros), pero su local en Hermosillo solo aparece en la página de Contacto, el menú "Mayoristas" lleva a la tienda normal, el WhatsApp no está escrito en ninguna parte y su botón saluda en inglés, y dos productos muestran un precio "antes" más bajo que el precio actual |
| Contacto publicado | Instagram y Facebook @huupa.coffee, formulario en /pages/contacto, C. Pino Suárez 90, Centro, Hermosillo (lunes a sábado de 8:00 a 19:00). WhatsApp +52 662 460 0099 solo en el botón flotante. No publica teléfono ni correo |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-26/` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Comprobados descargando el sitio real con curl el 2026-09-26 (inicio, /pages/contacto, /pages/facturacion, /policies/shipping-policy, /pages/blogs y las fichas `/products/<handle>.js` responden 200) y en `investigacion/original.html` y `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **"Mayoristas" no lleva a nada para mayoristas.** El menú del sitio tiene el enlace "Mayoristas" (`/pages/cafe-para-tu-negocio`), pero la página redirige (301) a la colección de café normal, sin precios de mayoreo, requisitos ni forma de contacto. | Una cafetería, oficina o restaurante que quiere comprarles café por volumen, el cliente más valioso, llega a la tienda de bolsas de 250 g y no sabe a quién escribirle. | Menú del inicio (`crudo.json`) y `curl -I https://huupa.coffee/pages/cafe-para-tu-negocio` → `location: /collections/cafe-mexicano` |
| 2 | **El local de Hermosillo está escondido.** La dirección (C. Pino Suárez 90, Centro) y el horario (lunes a sábado de 8 a 7) solo están al fondo de /pages/contacto. El inicio no dice que tienen local, ni dónde, ni a qué hora abre. Tampoco hay datos de negocio local para Google: el inicio solo trae el `WebSite` y `BreadcrumbList` de Yoast, sin dirección, horario ni coordenadas; su H1 es el logo y el idioma declarado es `es_ES`. | La gente de Hermosillo que busca "café en grano Hermosillo" o quiere pasar por una bolsa no se entera de que pueden ir. Google tampoco puede mostrar su horario ni el botón "Cómo llegar" desde el sitio. | `original.html` (sin JSON-LD de negocio, `og:locale es_ES`, `<h1 class="header__heading">` con el logo) y /pages/contacto (curl) |
| 3 | **El WhatsApp no se ve escrito y saluda en inglés.** El número (+52 662 460 0099) solo existe dentro del botón flotante verde "Contáctanos"; ninguna página lo escribe. La ventanita del botón dice "Hi there", "We are here to help. Chat with us on WhatsApp for any queries." y "Hi! How can we help you?", y no lleva mensaje prellenado. La página de Contacto solo tiene un formulario con hCaptcha. | Quien no ve el botón (o lo tapa el carrito en el celular) no tiene ningún teléfono para preguntar por su pedido. Un sitio en español que de pronto saluda en inglés se ve descuidado, y sin mensaje prellenado no saben desde qué producto les escriben. | Configuración pública del botón (`whatsapp.carthike.com/api/chat/public/config?shop=huupa.myshopify.com`, la que lee el sitio) y /pages/contacto |
| 4 | **Precios "antes" más bajos que el precio actual.** El Kit Fogata se vende en $1,923 con "$1,864" tachado, y el filtro de talega en "Desde $30" con "$26" tachado (en la ficha: $30, $35 y $40 contra $25.86, $30.17 y $34.48). El Café Extremo muestra "$182" tachado junto a $182. El Kit Termo cuesta $693.02 en grano y $693 en las otras moliendas. | Un precio tachado más bajo parece un error o, peor, un aumento disfrazado de oferta; en un regalo de casi $2,000 genera desconfianza justo antes de pagar. | /collections/kits-de-regalo y /collections/tazas-coyotas-y-cafeteras (`crudo.json`) y `/products/kit-fogata.js`, `talega-para-cafe.js`, `huupa-extremo.js`, `kit-termo.js` |
| 5 | **Erratas en la página que vende su diferencia.** En "La diferencia" (/pages/proceso): "transformació n", "Atitlán,dan", "amigablecon la naturaleza" (sin espacio), "momento cafecero" (el resto del sitio dice "cafesero"). En las fichas de producto hay palabras partidas: "a roma", "c autivador", "e s una", "C afeína", "P otencia", "3 V entajas… T alega". | Es la página que explica por qué su café vale más; los errores le restan a un producto que se vende por su cuidado artesanal. | `crudo.json` (/pages/proceso) y fichas de producto (curl) |
| 6 | Detalles menores: en la pestaña Specialty del inicio, Bourbon Amarillo y Garnica y Caturra salen dos veces; el inicio presume "+7k 'Mi nuevo café favorito'" sin decir de qué es el número; /pages/proceso dice "Solo granos orgánicos" pero ninguna ficha habla de certificación. | Pequeñas dudas: ¿7 mil qué?, ¿orgánico certificado? Un cliente exigente de café de especialidad pregunta justo eso. | `crudo.json` (inicio y /pages/proceso) |

Nota: el sitio está **bien hecho** en lo principal: fotos propias muy buenas (bolsas, cafeteras junto al fuego, kits), fichas de café con origen, finca, productor, altura, proceso y notas, café en seis moliendas, envíos claros (costos, tiempos y paquetería), facturación en línea y kits de regalo bien armados. El argumento no es "su sitio está roto", sino **que venda más y que se note el local**: que el cliente llegue a su bolsa exacta en menos pasos y que Hermosillo sepa dónde están.

## Qué le ofrecemos

- "Molido para tu cafetera": el cliente elige con qué prepara su café, ve cómo queda la molienda, elige café y tamaño, y llega a su tienda con esa bolsa ya seleccionada (o la pide por WhatsApp con el pedido escrito). Convierte su promesa "para todas las cafeteras" en la forma de comprar.
- Su historia (el mezquite, "hoohopam", los cafetaleros de Chiapas, Loxicha, Atitlán y Veracruz) contada en la misma página que vende.
- El local de Hermosillo en el inicio, con horario, WhatsApp escrito y "Cómo llegar en Google Maps", y datos de negocio local para Google (dirección, horario, coordenadas).
- Precios coherentes en kits y accesorios, textos sin erratas y un WhatsApp en español con mensaje prellenado.
- Si retoman mayoreo: una sección para negocios con WhatsApp para cotizar.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Me gustó mucho su tienda y cómo cuentan el tostado en leña de mezquite. Revisándola noté un par de cosas que les pueden estar costando ventas: el enlace "Mayoristas" del menú lleva a la tienda normal, sin información para negocios, y en el inicio no aparece que tienen local en Pino Suárez ni su horario. Les preparé una propuesta de cómo podría verse el inicio: eliges tu cafetera, ves la molienda, eliges café y tamaño, y llegas directo a la bolsa en su tienda. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Siguen vendiendo a mayoristas (cafeterías, oficinas, restaurantes)? ¿Qué necesitan saber de ellos?
- ¿En el local de Pino Suárez venden café para tomar, solo bolsas, o también es punto de recolección de pedidos?
- ¿El +52 662 460 0099 es su WhatsApp de atención? ¿Quieren que aparezca escrito? ¿Tienen teléfono o correo?
- ¿Cuál es el precio correcto del Kit Fogata y del filtro de talega?
- ¿El Intenso y el Extremo son de Chiapas (Soconusco)? ¿Sus cafés son orgánicos certificados?
- ¿Las fotos de paisaje (desierto, montañas) son suyas? ¿Tienen fotos del local, del tostador, de las coyotas y del caramelo?
- ¿Qué significa el "+7k" del inicio? ¿Quieren mostrar reseñas de clientes?
