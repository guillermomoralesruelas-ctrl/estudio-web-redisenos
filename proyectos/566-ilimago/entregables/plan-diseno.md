# ilimago: plan de rediseño (método 1.1)

**Sitio original:** https://www.ilimago.com.mx/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/assets/img/`), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`.
**Rubro:** Agencia creativa de marketing digital. **Ciudad:** Ciudad de México, CDMX.

## Qué le falta al clon (los "detallitos")

Salida de `qa-rediseno.mjs` en la parte "antes":
- 65 imágenes rotas (todas): el clon no encontró el CSS principal, el SVG del logo ni las fotos
- 47-49 recursos 404: hojas de estilo, JS de la sección de servicios (carrusel)
- Desborde horizontal: 2,188 px en escritorio y 3,068 px en móvil
- Sin favicon

Revisión a ojo:
- El carrusel de especialidades no funciona (JS faltante)
- Los precios de los planes son visibles en el crudo.json pero sin cálculo de inversión total
- La dirección física está en el formulario pero sin enlace a Maps

## Qué tiene que lograr el sitio

1. **Cotizar por WhatsApp**: el CTA principal. Cada plan y cada servicio lleva al WhatsApp prellenado.
2. **Mostrar la inversión de forma clara**: los planes tienen precio × meses = inversión mínima total; esto reduce la fricción y acelera la decisión.
3. **Reforzar la autoridad de la agencia**: 28 logos de clientes reconocidos (Microsoft, Banorte, HSBC, Cruz Roja), +10 años de trayectoria, y un sitio que ellos mismos cuidan.

## Dirección visual

| Token | Color | Uso |
|---|---|---|
| `--color-fondo` | `#0a0a14` | Fondo base (casi negro azulado) |
| `--color-fondo2` | `#11111f` | Tarjetas, navbar |
| `--color-fondo3` | `#181830` | Tarjetas activas, highlight |
| `--color-tinta` | `#e8e8f0` | Texto principal |
| `--color-tinta2` | `#a0a0c0` | Texto secundario, labels |
| `--color-acento` | `#3d6bff` | Botones, CTAs, highlights |
| `--color-acento2` | `#6b8fff` | Hover, glow de la inversión total |
| `--color-blanco` | `#ffffff` | Títulos destacados |

**Tipografía:** Plus Jakarta Sans Variable — la fuente del CSS original del clon (`--font-sans: "Plus Jakarta Sans", sans-serif`). Variable, moderna, geométrica; funciona bien tanto en titulares grandes como en texto de UI.
Sin fuente de display extra: una sola familia en distintos pesos.

**Razón de la paleta oscura:** ilimago se vende como "agencia creativa premium". El fondo oscuro con acento azul eléctrico refuerza esa percepción y diferencia el rediseño del sitio original claro. Las agencias premium que cotizan $6,790–$19,990/mes usan lenguaje visual oscuro y moderno. Los 28 logos de clientes con filter `invert` brillan sobre fondo oscuro mejor que sobre fondo blanco.

## Elemento memorable

**"¿Cuánto es tu inversión mínima?"** — calculadora de inversión interactiva.

- El usuario elige entre 3 planes (Impulsa / Acelera / Domina el Mercado).
- Al seleccionar aparece con animación CSS:
  - Precio mensual en grande
  - Meses de permanencia mínima
  - **Inversión mínima total** en enorme, con glow azul
  - Número de contenidos por mes
  - Botón WhatsApp prellenado con el plan exacto
- Por defecto: Plan Acelera (el "Recomendado" según el sitio original).
- Estado reactivo en React: cambia en tiempo real al seleccionar.

Por qué es único: ningún sitio anterior del estudio tiene una calculadora de inversión. Además, es coherente con el negocio — ilimago vende planes con precio × meses; mostrar ese cálculo en vivo es una herramienta de venta real, no un adorno.

## Estructura de secciones

1. **NavBar fija** — logo, enlaces de ancla, botón WhatsApp. Oculta en móvil excepto el logo.
2. **Hero** — badge "Actualiza tu empresa con IA" (texto original), H1 "Agencia creativa de comunicación", subtítulo real, 2 CTAs, contadores +10 años y 28+ marcas.
3. **Servicios** — 6 tarjetas con foto, nombre y descripción real del crudo.json.
4. **Planes (elemento memorable)** — selector de 3 planes + panel de inversión mínima calculada.
5. **Clientes** — 28 logos en ticker CSS infinito. Mask de degradado para que parezca que "entran y salen".
6. **Nosotros** — +10 años, descripción, Visión / Misión / Valores, equipo (6 roles), sectores (8).
7. **Footer** — logo, descripción, redes, contacto, especialidades.
8. **Barra móvil fija** — WhatsApp + Llamar + Maps. Visible solo en `< md`.

## Qué se evita (revisión contra lo genérico)

- **Etiquetas pequeñas en mayúsculas sobre cada sección** — sí se usan, pero son textos reales del sitio original ("Especialidades", "Inversión Táctica", "Prueba Social", "Autoridad"), no etiquetas inventadas.
- **Numeración 01/02 y puntos medios** — no se usan.
- **Animar cada sección al hacer scroll** — no hay IntersectionObserver. Las únicas animaciones son el ticker CSS de logos y el estado activo de la calculadora. Todo respeta `prefers-reduced-motion`.
- **Tarjetas idénticas repetidas** — las 6 tarjetas de servicio tienen la misma estructura pero distintas fotos y textos; el efecto hover en la imagen rompe la repetición visual.
- **Inventar datos** — todos los textos, precios, logos y datos de contacto vienen del crudo.json o resumen.json. No se inventó nada.
- **Google Maps embed** — se usa enlace a Maps con `target="_blank"`, sin iframe de terceros.
- **Gradientes exagerados** — solo un gradiente sutil en el hero (radial hacia arriba) y el glow de la inversión mínima.
