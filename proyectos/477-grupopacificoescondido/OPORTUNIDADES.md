# Grupo Pacífico Escondido: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/crudo.json` (captura del 2026-09-26). Los defectos del clon **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://grupopacificoescondido.com/ |
| Prioridad | **MEDIA** — el sitio funciona, pero tiene problemas de SEO y de usabilidad en móvil que le cuestan clientes potenciales |
| Contacto publicado | Tel. (954) 127 9774, contacto@grupopacificoescondido.com, WhatsApp 5219541279774, FB @gpacificoescondido, IG @grupopacificoescondido |
| Propuesta para enseñar | `rediseno/dist/index.html` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. Basados en `investigacion/crudo.json` (captura Jina AI Reader, 2026-09-26).

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Sin meta description: el sitio la tiene en el `<head>` pero la versión scrapeada por Jina la extrajo en blanco para páginas internas (solo la home la tiene llena) | Google muestra texto aleatorio en los resultados en lugar del mensaje que el negocio eligió, reduciendo el CTR | `crudo.json` → `descripcion` de las páginas de desarrollos individuales |
| 2 | La sección de desarrollos muestra el contenido repetido tres veces en el HTML (el carrusel infinito duplica las tarjetas en el DOM) | Google puede interpretar contenido duplicado; el peso de la página crece innecesariamente | `crudo.json` → sección "Invierte en Preventa" con Senderos, Punta Lago, Sonterra, La Reserva, Zelena aparecen 3 veces cada uno |
| 3 | Las 4 razones para invertir y los 4 testimonios aparecen cada una 3 veces en el HTML (el mismo carrusel infinito) | Duplicación de contenido, carga innecesaria, peor accesibilidad para lectores de pantalla | `crudo.json` → "Planes de financiamiento", "Inversiones para todos los gustos" etc. repetidos 3 veces |
| 4 | Sin JSON-LD: Google no puede identificar el sitio como inmobiliaria ni mostrar rich snippets en los resultados | No aparece el knowledge panel ni los datos de contacto directamente en Google | Ausente en `crudo.json` (no hay bloque `application/ld+json`) |
| 5 | El filtro de búsqueda avanzada (plugin de WordPress) no es usable en móvil: el selector de rango de precios y los múltiples campos requieren interacciones de escritorio | La mayoría del tráfico de búsqueda de terrenos llega desde celular; un buscador difícil reduce la tasa de conversión | `crudo.json` → múltiples formularios de búsqueda con "Rango de precios Desde $120,000 A $1,390,000" y "Búsqueda Avanzada" |
| 6 | El login de WordPress es público: al pie del sitio aparece un enlace "Login" con formulario de usuario/contraseña visible para cualquier visitante | Expone el panel de administración; un atacante puede intentar acceso por fuerza bruta | `crudo.json` → sección al final "Username / Password Forget Password? / Login / Reset Password" |
| 7 | Los logos de aliados/marcas (brand-1 a brand-18) no tienen texto alternativo ni descripción visible: Google no sabe qué son ni por qué están | Oportunidad perdida para comunicar permisos, notarías o certificaciones que generan confianza | `crudo.json` → imágenes brand-1 a brand-18 sin alt útil |

## Qué le ofrecemos

- Un sitio más rápido y más simple que el actual (sin la carga de WordPress y sus plugins).
- El filtro "¿Qué tipo de lote buscas?" en móvil es más fácil de usar que el buscador avanzado actual.
- Cada tarjeta de desarrollo tiene un botón de WhatsApp con el nombre del proyecto prellenado, lo que convierte la visita directamente en un lead.
- SEO corregido: un solo H1, JSON-LD `RealEstateAgent`, Open Graph y meta descriptions correctas en todas las páginas.
- El login de WordPress queda oculto: no hay panel de admin visible.
- Barra móvil con WhatsApp + Llamar + Maps: tres acciones clave en un toque desde el celular.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil, sin alarmar ni presionar.

> Hola, soy Guillermo. Revisé su sitio de Grupo Pacífico Escondido y noté que el formulario de login de WordPress está visible para cualquier visitante al final de la página — puede atraer ataques automatizados. También me di cuenta de que en el buscador de desarrollos el filtro de precios es difícil de usar desde el celular. Preparé una propuesta que resuelve eso con un filtro por tipo de lote más intuitivo. ¿Tienen unos minutos para que les muestre cómo quedaría?

## Preguntas para la conversación

- ¿Cuál es el rol exacto de cada asesor (Simon Critchley, Thania Suhey, Veronica Martínez, Lorena Díaz)?
- ¿Qué representan los logos brand-1 a brand-18 (notarías, permisos municipales, certificaciones)?
- ¿Desean incluir el video de YouTube del recorrido de la ubicación?
- ¿Tienen WhatsApp separado por asesor o todo va al mismo número?
