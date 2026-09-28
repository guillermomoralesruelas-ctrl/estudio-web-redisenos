# La Purificadora: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.lapurificadora.com/ |
| Prioridad | **ALTA**: el botón de Reservar tiene fechas de hace tres años hardcodeadas, lo que puede confundir a huéspedes potenciales directamente en el paso de compra |
| Contacto publicado | Tel. +52 (222) 309 1920 · WhatsApp 522221317724 · IG @lapurificadora · FB GrupoHabita |
| Propuesta para enseñar | `rediseno/dist/index.html` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Todos los botones "Reservar" (habitaciones y menú) llevan al motor SynXis con `arrive=2023-06-18&depart=2023-06-19` hardcodeados — fechas del año 2023 | Un posible huésped llega al motor de reservas con fechas de hace 3 años; según la configuración de SynXis puede ver "no disponible" o fechas en el pasado, lo que genera fricción y abandono justo en el paso de compra | `investigacion/crudo.json` — todos los enlaces de Reservar del scrape original |
| 2 | Sin meta description ni Open Graph — el sitio aparece en Google y WhatsApp sin descripción ni imagen de vista previa | Cada vez que alguien comparte el enlace del hotel (en WhatsApp, Instagram Stories, correo) aparece un cuadro vacío o con el título técnico; reduce clics y hace el hotel ver desatendido digitalmente | `investigacion/crudo.json`: campo `"descripcion": ""` |
| 3 | Sin botón de WhatsApp prominente en el cuerpo del sitio — solo hay un ícono pequeño en el pie de página | El hotel tiene WhatsApp (`522221317724`) pero no lo anuncia visiblemente; los hoteles boutique reciben muchas consultas directas y sin el botón se pierden conversaciones de reserva | HTML del original: WhatsApp solo en `<footer>` como ícono de imagen |
| 4 | Menú de navegación mezcla español e inglés: "Neighborhood" entre "Terraza" y "Contacto" | Da imagen de descuido ante el perfil de huésped del hotel (viajero con criterio, arquitectura Legorreta, Patrimonio UNESCO) | `investigacion/crudo.json` — lista de ítems del menú |

## Qué le ofrecemos

- Un sitio que convierte mejor desde el primer clic: el botón de Reserva lleva al motor sin fechas erróneas.
- WhatsApp visible en todo momento (desktop y móvil) para capturar consultas que hoy se pierden.
- Vista previa correcta al compartir por WhatsApp o redes: imagen + título + descripción del hotel.
- Diseño que respeta la identidad de Legorreta: paleta terracota y piedra, tipografía Playfair Display, sin elementos de plantilla.
- Sitio que carga y se ve bien en cualquier celular (el clon original desbordaba 1,562 px en móvil por falta de CSS).

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, soy Guillermo. Estaba revisando el sitio de La Purificadora y noté que los botones de "Reservar" llevan al motor de reservas con fechas del 18 y 19 de junio de 2023 predefinidas — puede que algunos visitantes vean una disponibilidad confusa justo antes de confirmar. Preparé una propuesta de rediseño del sitio que corrige esto, añade WhatsApp visible y actualiza el look para que esté a la altura de la arquitectura de Legorreta. ¿Les gustaría verla?

## Preguntas para la conversación

- ¿Se puede actualizar el enlace del botón Reservar para que abra sin fechas predefinidas?
- ¿El WhatsApp `+52 222 131 7724` es el correcto para reservas directas, o tienen uno distinto?
- ¿Tienen fotos del SPA / Wellness para incluirlo en el rediseño?
- ¿El menú del restaurante en PDF está actualizado?
