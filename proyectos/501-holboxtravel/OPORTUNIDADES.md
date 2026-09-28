# Holbox Travel: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-28), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.holboxtravel.com.mx/ |
| Prioridad | **ALTA**: turismo activo en destino internacional, mercado anglohablante, presencia deficiente en móvil |
| Contacto publicado | WhatsApp/Tel: +52 984 184 0323 · ventas@holboxtravel.com · Instagram: @holboxtravelsocial |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Desborde horizontal masivo en móvil (>8 800 px) | Los turistas que buscan tours en el teléfono ven la página rota y no confían en la agencia | `qa/reporte-rediseno.json` → campo `antes.desbordeX` |
| 2 | Estructura multipágina sin CTA claro en la home | El visitante llega a la home y no sabe qué hacer: no hay botón de reserva ni número de WhatsApp destacado | `investigacion/original.html` |
| 3 | Título SEO confuso: "Tour Bioluminescence in Holbox & 3 Island Tours" | No posiciona bien para "whale shark tour Holbox" — el tour más buscado y de mayor valor | `investigacion/crudo.json` → título de la página principal |
| 4 | Script de Cloudflare email-decode.min.js produce 404 | Error en consola que puede afectar la confianza de bots de indexación y velocidad percibida | `qa/reporte-rediseno.json` → campo `antes.fallidos` |
| 5 | Widget de Elfsight (reseñas) carga JavaScript de terceros | Aumenta el tiempo de carga; si Elfsight falla, la sección de reseñas queda en blanco | `investigacion/original.html` → script elfsightcdn.com |
| 6 | Sección de partners con logos de 15 agencias de otros destinos | Confunde al visitante sobre qué ofrece Holbox Travel específicamente | `investigacion/original.html` → sección de afiliados |
| 7 | No hay barra de CTA fija en móvil | En móvil, el botón de WhatsApp queda enterrado; el usuario abandona antes de contactar | Revisión visual del clon en móvil (390 px) |

## Qué le ofrecemos

- Una landing page que abre correctamente en cualquier teléfono, sin overflow.
- Todos los CTAs apuntan a WhatsApp directo — más reservas con menos clicks.
- Título SEO optimizado para "whale shark tour Holbox" + JSON-LD TravelAgency para Google.
- Carga rápida: 6 fotos WebP optimizadas, sin scripts de terceros, sin widget externo.
- Barra fija en móvil con botón verde de WhatsApp siempre visible.
- Presentación clara de los cuatro servicios en tarjetas expandibles — sin navegar entre páginas.

## Mensaje sugerido para el primer contacto

> Hola, vi su sitio de Holbox Travel y quería compartirles algo. En celular la página tiene un problema de diseño que hace que se vea cortada hacia los lados — en destinos turísticos donde casi todo se busca desde el teléfono, esto puede estar costando reservas.
>
> Preparé una versión nueva, rápida y en inglés, con los cuatro tours y el botón de WhatsApp siempre visible. Si les interesa verla les mando la liga. No hay compromiso.
>
> Saludos, Guillermo

## Preguntas para la conversación

- ¿Cuáles son los precios actuales de cada tour? (no se publicaron en el rediseño porque no estaban en el sitio con claridad)
- ¿El tour de tiburón ballena sigue activo? ¿Solo en temporada junio–septiembre?
- ¿El número de WhatsApp +52 984 184 0323 sigue activo?
- ¿Tienen logo oficial en formato PNG o SVG para usar en la navbar?
- ¿Quieren agregar un iframe de Google Maps en la sección de contacto?
