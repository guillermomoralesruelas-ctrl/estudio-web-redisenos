# High Point León: plan de rediseño (método 1.1)

**Sitio original:** https://highpointleon.com/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/images/`), textos en `investigacion/crudo.json`
**Rubro:** Inmobiliario — Residencial de lujo (departamentos en preventa)
**Ciudad:** León, Guanajuato
**Desarrolladora:** Grupo OR-B (Mítikah, The St. Regis Mexico City, The St. Regis Punta Mita)

## Qué le falta al clon (problemas detectados)

- **0 H1**: el sitio original no tiene ninguna etiqueta H1 — crítico para SEO
- **39 imágenes rotas**: rutas con backslash de Windows en el clon; en el sitio en línea funcionan pero el clon es inservible
- **42 recursos con 404**: scripts Astro, fuentes locales (Montserrat, cities-typeface), JS de sliders
- **Carruseles rotos**: los de amenidades, acabados y plantas dependen de scripts Astro que no se sirven correctamente
- **Sin meta OG ni JSON-LD**: compartir el link en WhatsApp no muestra imagen ni descripción
- **Sin favicon**: 404 silencioso en cada carga

## Qué tiene que lograr el sitio

1. **Convertir visitantes en prospectos**: capturar interés con CTA de WhatsApp antes de que el usuario cierre la pestaña
2. **Diferenciar por tipología**: separar el interés por 1/2/3 recámaras desde el primer clic
3. **Activar el argumento de inversión**: la plusvalía del 11.10% es el dato más poderoso — debe tener protagonismo visual
4. **Comunicar el nivel de la marca**: OR-B / St. Regis — el diseño debe transmitir ese nivel sin que el usuario lea el texto

## Dirección visual

| Token | Valor | Uso |
|---|---|---|
| `--color-fondo` | `#0D0D0D` | Fondo principal — oscuro profundo |
| `--color-fondo-2` | `#141414` | Fondo alternado de secciones |
| `--color-fondo-3` | `#1C1C1C` | Tarjetas y elementos elevados |
| `--color-tinta` | `#FFFFFF` | Texto principal |
| `--color-tinta-2` | `#C8C8C8` | Texto secundario |
| `--color-acento` | `#C9A227` | Dorado — énfasis, subtítulos, líneas |
| `--color-acento-2` | `#A8841D` | Dorado oscuro — hover de botones |
| `--color-borde` | `#2A2A2A` | Bordes de tarjetas |

**Tipografía:**
- Títulos: **Cormorant Garamond 600** — serif de alta moda, alineada con el nivel de la marca. Local via `@fontsource/cormorant-garamond/latin-600.css` (sin CDN).
- Cuerpo: **Inter Variable** — legible, moderno, contraste excelente. Local via `@fontsource-variable/inter`.

**Razón de la elección**: el original usaba Montserrat (sans-serif genérico). Cormorant Garamond es la tipografía de marcas de lujo internacional (Chanel, Louis Vuitton, Hermès) — transmite el nivel del proyecto sin decirlo.

## Elemento memorable

**Proyector de plusvalía interactivo** — el usuario selecciona el tipo de departamento (1, 2 o 3 recámaras) y ve proyectado en tiempo real su valor a +1, +3 y +5 años usando el dato real de León 2024: 11.10% anualizado. El CTA de WhatsApp cambia dinámicamente según el tipo seleccionado.

- Cálculo: `Math.round(precio * Math.pow(1.111, años))` — transparente
- Respeta `prefers-reduced-motion`
- `aria-live="polite"` para lectores de pantalla
- Primero en el estudio

## Estructura de secciones

1. **Hero** — foto full-screen `FondoBanner.jpg` (desktop) / `FondoBannerMovil.jpg` (móvil), H1 "High Point León", precios desde, 2 CTAs
2. **Proyecto** — texto OR-B + grid 4 fotos (info1-4)
3. **Departamentos** — Proyector de plusvalía + planos de planta y prototipos
4. **Amenidades** — grid 4 col / 2 col con 11 fotos + overlay de nombre
5. **Acabados** — grid 3 col / 2 col con 6 tarjetas
6. **Razones para invertir** — grid 3 col / 2 col con 6 tarjetas y ícono
7. **Ubicación** — imagen mapa enlazada + lista de 10 puntos cercanos
8. **Contacto** — 3 tarjetas (WhatsApp, Teléfono, Email) + imagen promocional + CTAs finales
9. **Footer** — logo + datos del proyecto
10. **Barra flotante móvil** — WhatsApp + Llamar + Maps (siempre visible en < lg)

## Qué se evita

- Etiquetas numeradas (01/02) o puntos medios como separadores de lujo genérico
- Animar cada sección al hacer scroll (solo transiciones sobre interacción directa)
- Tarjetas idénticas repetidas sin distinción
- Inventar reseñas, fotos de personas, precios o datos del negocio
- Scripts de terceros (el mapa es imagen enlazada, no embed de Google Maps)
- Fuentes externas en runtime (todas locales)
