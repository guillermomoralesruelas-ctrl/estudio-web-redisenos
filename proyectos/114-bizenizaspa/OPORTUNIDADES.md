# Bizé Nizá Spa: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json`, o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.bizenizaspa.com/ . Spa de masajes, faciales y rituales con servicio a domicilio en Col. La Paz, Puebla (en la BD figura como Ciudad de México) |
| Prioridad | **MEDIA**: el sitio funciona, pero no tiene título para Google, los precios se contradicen dentro de la misma ficha, hay servicios a "0.00 MXN", sigue la promoción de junio y el WhatsApp abre la versión web para computadora |
| Contacto publicado | Tel. 222 225 0935; WhatsApp 222 728 4970; Instagram @bizeniza, Facebook bizenizaspa, Twitter @BizeNizaSpa |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-27 con curl a Inicio, /corporal, /facial, /rituales, /otros, /promocion y /domicilio, y en `crudo.json`.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Ninguna página tiene título ni descripción.** Las siete llevan `<title></title>` vacío y ninguna `meta description`; tampoco hay H1 ni datos estructurados (JSON-LD). | Google no sabe cómo llamar a sus páginas ni que es un spa en Puebla: pierde búsquedas como "masajes en Puebla" o "spa a domicilio Puebla", y en la pestaña del navegador no aparece su nombre. | Las 7 páginas en vivo |
| 2 | **Precios que se contradicen en la misma ficha.** Masaje Personalizado dice "desde $670 hasta $1950" y abajo "Costo: 1,045.00 MXN"; Yamania dice "$620 y $1300" y "Costo: 1,370.00"; Kiimak "desde $2,950 por 2 personas" y "Costo: 4,800.00". | La clienta no sabe cuánto va a pagar y escribe para preguntar, o se va con otro spa. | /corporal y /rituales en vivo |
| 3 | **Servicios a "0.00 MXN".** Maderoterapia, Depilación y Cepanca (y Maderoterapia con "Duración: 0") se muestran con costo 0.00. | Parece un error o un sitio abandonado; resta confianza. | /otros en vivo |
| 4 | **Promoción vencida.** /promocion solo muestra "Cumples años en Junio", "Precio: 0.00" y "Junio 2026". | En septiembre ya no aplica; da la idea de que nadie actualiza la página. | /promocion en vivo |
| 5 | **El WhatsApp abre la versión web.** Los botones de cada servicio van a `web.whatsapp.com/send?phone=5212227284970?&text=…` (WhatsApp Web, para computadora, y con un "?" pegado al número); en la portada el WhatsApp es solo texto, sin enlace. | Desde el celular, que es donde se reservan estas citas, el botón no abre la app directamente y se pierden mensajes. | Inicio y /corporal en vivo |
| 6 | **El teléfono no se puede tocar.** No hay ningún enlace `tel:`; el número aparece como "222.225.09.35". | En el celular hay que copiarlo a mano para llamar. | Las 7 páginas en vivo |
| 7 | **Precios escondidos y nombres que no dicen qué son.** Cada uno de los 43 servicios (Nelpilollia, Tankugni, Xitse…) está en una ventana "Detalles" que hay que abrir una por una. | Encontrar "un masaje de espalda" o "algo para los ojos" cuesta mucho; la mayoría se rinde antes. | /corporal, /facial, /otros en vivo |

Nota: es un **spa con carta amplia y bien descrita**, precios publicados, servicio a domicilio y certificados de regalo. El argumento principal: **que Google lo encuentre y que cualquiera encuentre su servicio y lo pida por WhatsApp desde el celular en dos toques.**

## Qué le ofrecemos

- "¿Qué quieres consentir hoy?": tocas la parte del cuerpo y ves los servicios que la trabajan, con precio y duración, y lo pides por WhatsApp en el spa o en casa.
- Todos los servicios en una página, con precios claros (sin 0.00 ni cifras dobles), por pestañas.
- Título, descripción, H1 y datos para Google (tipo DaySpa, dirección, horario), teléfono y WhatsApp que se abren en el celular, barra fija y enlace a Google Maps.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo (por WhatsApp al 222 728 4970 o por Instagram @bizeniza). Tono: respetuoso y útil.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Revisé la página de Bizé Nizá Spa y me gustó lo completa que es su carta, pero noté que sus páginas no tienen título para Google (por eso casi no aparecen al buscar "spa en Puebla") y que algunos servicios salen con dos precios distintos o en $0.00. Les preparé una propuesta donde la clienta toca la parte del cuerpo que quiere consentir, ve los masajes o faciales que le sirven con su precio y lo pide por WhatsApp desde el celular. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Cuál es el precio correcto de Masaje Personalizado, Yamania, Tuchkiin y Kiimak? ¿Y de Maderoterapia, Depilación y Cepanca?
- ¿Qué servicios se pueden pedir a domicilio además de Sueco, Xanthe y Nanyotl?
- ¿Están de acuerdo con la zona del cuerpo que le pusimos a cada servicio?
- ¿Cómo se compra el certificado de regalo? ¿Qué promociones tienen ahora?
- ¿Tienen fotos de sus cabinas y de cada servicio? ¿Las del sitio son de su spa?
