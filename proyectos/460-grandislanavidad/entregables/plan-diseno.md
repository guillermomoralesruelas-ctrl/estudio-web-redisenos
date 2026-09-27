# Grand Isla Navidad Resort: plan de rediseño (método 1.1)

**Sitio original:** https://www.islanavidad.com.mx/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/wp-content/uploads/2025/` y `2026/06/`), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`.
**Rubro:** GASTRONOMIA (en la BD; en realidad es un hotel resort con gastronomía destacada).
**Ciudad:** Manzanillo, Colima (Laguna de la Navidad, Costa Alegre).

## Qué le falta al clon (los "detallitos")

Diagnóstico del clon (QA antes): escritorio: alto 10769px, desborde 0, 97 imágenes, 6 rotas, 9 errores de consola, 0 recursos fallidos. Móvil: alto 13232px, desborde 0, 95 imágenes, 6 rotas, 9 errores de consola.
- 6 imágenes rotas (íconos de amenidades en la página de habitaciones, no disponibles en el clon)
- 9 errores de consola (scripts de WordPress: motor de reservas ecommerce-365, slider, Asksuite chatbot, Google Tag Manager, DoubleClick, Microsoft Clarity)
- El carrusel de habitaciones y la galería de Instagram dependen de JS externo no descargado
- Motor de reservas (widget ecommerce-365) no funciona en el clon

## Qué tiene que lograr el sitio

1. **Reservar directamente** en el motor oficial (ecommerce-365) o contactar por WhatsApp/teléfono
2. Mostrar las **suites y su diferenciador de vista** (marina, laguna, Pacífico)
3. Presentar el **todo incluido** y sus restaurantes y bares
4. Dar razones para elegir este resort sobre otros en Manzanillo

## Dirección visual

| Token | Valor | Uso |
|---|---|---|
| `--color-fondo` | `#0e0c09` | Fondo oscuro (negro cálido como el tronco de manglar) |
| `--color-panel` | `#1c1714` | Paneles y tarjetas |
| `--color-tinta` | `#f0ead8` | Texto principal (crema arena) |
| `--color-tinta-suave` | `#b8aa8e` | Texto secundario y etiquetas |
| `--color-acento` | `#8e623a` | Café dorado de la marca (del CSS del hotel 365theme) |
| `--color-dorado` | `#be8627` | Dorado para detalles premium |
| `--color-agua` | `#3a6b7c` | Azul laguna (de las fotos del agua) |
| `--color-cta` | `#7a3b14` | Café oscuro para botones (contraste AA ≥4.5:1) |

**Tipografía:**
- Cormorant Garamond 500/600 para títulos (serif elegante, consonante con el nivel del resort)
- Inter Variable 400/500 para texto y UI
- Solo subconjunto latino con @fontsource

## Elemento memorable: "¿A qué despiertas?"

El resort ocupa una isla privada entre la **Laguna de la Navidad** (sitio Ramsar con cuatro tipos de manglar y avistamiento de aves) y el **Océano Pacífico**, con una **marina de 207 yates**. La vista desde la habitación cambia radicalmente según el lado del edificio — ese dato real del sitio es la diferencia real entre las suites.

**Mecánica:** Tres vistas dibujadas que representan el entorno físico real:
- La laguna al amanecer — manglar y aves (sitio Ramsar, avistamiento de aves mencionado en el sitio)
- El Pacífico — horizonte abierto y terraza
- La marina — los 207 yates

Al elegir una vista aparece: qué suite la tiene (según descripciones reales), sus amenidades clave y botones de reserva en el motor oficial y WhatsApp.

**Por qué no es genérico:** deriva de la geografía única del resort (isla entre laguna y océano), que el sitio actual menciona pero no usa como elemento de venta en el selector de habitaciones. Ningún otro sitio del estudio ha usado esto.

## Estructura

1. Hero — Vista aérea con H1 y reserva
2. Todo Incluido — gastronomía (Grand Café, Oasis Pool Bar, El Faro Lobby Bar, La Plazuela)
3. ¿A qué despiertas? — selector de vista → suite (elemento memorable)
4. La experiencia — 6 actividades en la isla
5. Country Club — campo de golf
6. Bodas y eventos
7. Costa Alegre — qué hay alrededor
8. ¿Por qué reservar directo? — las 5 razones del sitio original
9. Visítanos — contacto, dirección, Maps
10. Pie

## Qué se evita (revisión contra lo genérico)

- No hay etiquetas "01/02/03" ni puntos medios como separador
- No hay animación de entrada en cada sección al hacer scroll
- Las tarjetas de actividades no son filas de 6 tarjetas idénticas
- No se usa "¿Listo para vivir la experiencia?" como título genérico (aunque el texto original lo usa, se conserva en la sección de bodas donde está contextualizado)
- No se inventan reseñas, precios ni datos del negocio
- Los colores oscuros no son "degradados de moda sin razón": derivan del entorno natural (manglar nocturno, arena, agua) y de los colores de la marca
