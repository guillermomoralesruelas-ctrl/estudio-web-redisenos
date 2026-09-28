# Plan de diseño — Eco Adventures Puerto Escondido (402-excursiondesnorkel)

**Sitio original:** https://ecoadventurespuertoescondido.com/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/wp-content/`), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`.
**Rubro:** TURISMO. **Ciudad:** Puerto Escondido, Oaxaca.

## Qué le falta al clon (los "detallitos")

- 14 imágenes rotas (.webp generados que no existen): logo, grupos de iconos SVG, fotos de bioluminiscencia y mezcal.
- 23 recursos 404 (JS de Elementor, Trustindex, WooCommerce).
- 43 errores de consola (JavaScript de plugins: peek.com booking widget, Trustindex, cookie consent).
- Desborde 0 en escritorio, 0 en móvil (el clon está bien estructurado).
- Alto de 20,207 px en móvil: muy largo.

## Qué tiene que lograr el sitio

1. **Reservar un tour** — botón a peek.com (su plataforma de booking).
2. **Escribir por WhatsApp** — para grupos privados o dudas.
3. **Llamar** — número +52 954 134 7889.

## Dirección visual

| Token | Valor | Uso |
|---|---|---|
| `--color-fondo` | `#f0f4f3` | Fondo general (verde agua muy claro) |
| `--color-tinta` | `#0d1f1a` | Texto principal |
| `--color-acento` | `#1a6b47` | Verde bosque — botones, links, acentos |
| `--color-agua` | `#0b7b8a` | Azul-turquesa — tours marinos |
| `--color-arena` | `#c4935a` | Arena cálida — badges, precios |
| `--color-noche` | `#0a1628` | Azul noche profundo — hero, bioluminiscencia |

**Tipografía:**
- Títulos: `Playfair Display` (700, latin) — elegante, evocadora de naturaleza.
- Cuerpo: `Inter` (400, 600, latin) — legible a cualquier tamaño.

## Elemento memorable único

**"Does the sea glow tonight?" / ¿Brilla el mar esta noche?**

Un bloque que, con JavaScript puro (sin APIs externas), calcula la fase lunar actual y dice:
- Si estamos cerca de luna nueva (±3 días): "Perfect conditions for bioluminescence. The new moon is tonight / in X days." Con el símbolo de luna nueva y el porcentaje de iluminación.
- Si estamos en otra fase: "The sea still glows. Even better nights in X days (new moon)." Con la luna actual.
- Si es temporada de anidación de tortugas (julio–noviembre): también aparece "Sea turtle nesting season is active" como badge secundario.

El cálculo usa una fórmula astronómica simple (ciclo de 29.53 días desde una luna nueva conocida), 100% JavaScript sin fetch.

Por qué es único: ninguno de los otros rediseños del estudio usa datos astronómicos reales. Conecta directamente con el tour de bioluminiscencia ($850, el más barato y popular) y con el de tortugas ($1,000). Es información útil para el turista que ya está decidiendo qué hacer esta noche.

## Estructura de secciones

1. **Hero** — foto del Pacífico, H1 "Eco Adventures Puerto Escondido", rating 4.9 · 1,284 Google reviews, botón Book Now.
2. **Elemento memorable: "Does the sea glow tonight?"** — calculador de luna para bioluminiscencia + badge de temporada de tortugas.
3. **Our tours** — cuadrícula de 12 tours con foto, nombre, precio y botón Book Now (peek.com).
4. **Why Eco Adventures** — 1,745 reseñas combinadas, free cancellation 24h, hotel pickup, guías certificados.
5. **What you might see** — temporadas: delfines todo el año, ballenas nov-mar, tortugas jul-nov, bioluminiscencia todo el año.
6. **What guests say** — 5 reseñas reales del clon.
7. **Book your adventure** — formulario simple: nombre + fecha + tour + WhatsApp prellenado.
8. **Footer** — teléfono, email, redes sociales, Google Maps, copyright.
9. **Barra móvil fija** — WhatsApp (Book) + llamar + mapa.

## Qué se evita (revisión contra lo genérico)

- Números 01/02/03 encima de secciones.
- Etiquetas en mayúsculas tipo "OUR TOURS" sobre cada bloque.
- Olas SVG decorativas (cliché de turismo de playa).
- Animaciones de fade-in en cada sección al hacer scroll.
- Filas de iconos con ticks verdes bajo "Why Choose Us".
- Degradados de azul genérico sin razón.
- Inventar reseñas, fotos, precios o datos del negocio.
