# Fulton Hotel: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-28), o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://fultonhotel.mx/ |
| Prioridad | **ALTA**: hotel de negocios activo con motor de reservas, sin CTA de WhatsApp y con sitio multipágina que dificulta la conversión |
| Contacto publicado | WhatsApp +52 1 33 40 72 83 42 · Tel +52 1 33 3260 9376 · reservas@fultonhotel.mx |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Sin botón de WhatsApp en ninguna página | La gente quiere reservar rápido; si no hay acceso directo, se va con otro hotel | `investigacion/crudo.json` — ninguna sección tiene enlace wa.me |
| 2 | Sitio multipágina PHP sin CTA claro de reserva en el home | El visitante llega al inicio, no ve cómo reservar sin navegar a otra página | `investigacion/original.html` — el enlace de Cloudbeds está escondido en `habitaciones.php` |
| 3 | 5 páginas separadas con carga lenta (PHP) | En móvil, cada navegación recarga la página completa; aumenta la tasa de abandono | Clon local + QA: 29 recursos fallidos, 13 imágenes rotas |
| 4 | Sin meta description ni Open Graph | El hotel no aparece bien en Google ni en links compartidos por WhatsApp/redes | Inspeccionando `investigacion/original.html` — head sin og:image ni description |
| 5 | Galería de 20 fotos en página separada sin contexto | Las fotos no ayudan a la decisión de compra si están aisladas sin descripción de habitación o servicio | galeria.php — fotos sin nombre ni texto de apoyo |

## Qué le ofrecemos

- Una landing de una sola página que lleva al visitante desde el hero hasta el botón de reserva sin fricción
- Botón de WhatsApp con mensaje preformateado en cada habitación y servicio (menos llamadas, más reservas directas)
- Motor de reservas Cloudbeds integrado con botón visible en navbar y barra móvil fija
- Carga rápida: Vite + WebP, sin PHP, sin dependencias externas
- SEO listo: JSON-LD, Open Graph, title y meta description optimizados para "hotel negocios Guadalajara"
- Barra móvil fija con acceso a Reservar y WhatsApp en todo momento (75%+ de sus huéspedes llegan en móvil)

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, buen día. Me llamo Guillermo y trabajo en diseño web en Guadalajara. Revisé el sitio de Fulton Hotel y noté que no tiene botón de WhatsApp — algo que hoy los huéspedes buscan antes de reservar. Preparé una propuesta de cómo podría verse el sitio con eso resuelto, y también con el motor de reservas más visible desde la primera pantalla. Si le parece, con gusto le muestro la demo. No hay compromiso.

## Preguntas para la conversación

- ¿Cuáles son los precios por noche de cada tipo de habitación? (no publicados en el sitio)
- ¿El check-in es a las 15:00 y el check-out a las 12:00?
- ¿El Rooftop tiene horario publicado o es solo para huéspedes del hotel?
- ¿Tienen más fotos actualizadas de las habitaciones que podamos usar?
