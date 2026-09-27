# Grupo Pacífico Escondido: plan de rediseño (método 1.1)

**Sitio original:** https://grupopacificoescondido.com/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/wp-content/`), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`.
**Rubro:** Inmobiliaria (terrenos residenciales y comerciales). **Ciudad:** Puerto Escondido, Oaxaca.

## Qué le falta al clon (los "detallitos")

QA del clon (`qa/reporte-rediseno.json`, 2026-09-27):
- Escritorio: 24 imágenes rotas, 8 errores de consola (JS de WordPress y plugins)
- Móvil: 26 imágenes rotas, 8 errores de consola
- Contenido duplicado: cada sección (desarrollos, razones, testimonios, equipo) aparece 3 veces en el HTML por los carruseles infinitos
- Login de WordPress visible al fondo de la página (campo usuario/contraseña público)

Revisión a ojo:
- El filtro de búsqueda avanzada es difícil de usar en móvil (sliders de rango de precio, múltiples dropdowns)
- El carrusel de preventa en el hero y la sección de desarrollos muestran las mismas 3–5 propiedades, creando confusión sobre cuántas hay en total
- Sin botón directo de WhatsApp por desarrollo

## Qué tiene que lograr el sitio

1. **Acción principal:** que el visitante abra WhatsApp para preguntar por un desarrollo específico.
2. **Acción secundaria:** que llame o guarde el número desde la barra móvil.
3. **Confianza:** mostrar los 15 desarrollos con foto, precio y categoría, y los 4 testimonios reales.
4. **SEO local:** aparecer en búsquedas de "terrenos Puerto Escondido" con datos estructurados.

## Dirección visual

| Token | Color | Uso |
|---|---|---|
| `--color-fondo` | `#FAF9F7` | Fondo de página (blanco roto cálido) |
| `--color-tinta` | `#1B2A4A` | Texto y encabezados |
| `--color-acento` | `#C5A028` | Dorado: CTA principal, badges de precio, estadísticas |
| `--color-acento2` | `#2D6A4F` | Verde costa: badges Promoción, enlace Maps |
| `--color-marino` | `#1B2A4A` | Fondos de secciones oscuras (nosotros, footer) |

**Tipografía:**
- Títulos: **Playfair Display** 600/700 — serif con carácter, evoca el mercado inmobiliario de playa con aspiración
- Texto: **Inter** 400/500/600 — legible, neutral, contrasta con la serif
- Solo subconjunto `latin`; cargadas desde Google Fonts con `display=swap`

## Elemento memorable

**"¿Qué tipo de lote buscas?"** — filtro interactivo de los 15 desarrollos.

Cuatro botones: **Todos** (activo por defecto) / **A pie de playa** / **Vista al mar** / **Cercano a la playa**. Al hacer clic, la grilla se filtra al instante con `useState` (sin recargar). Cada tarjeta muestra: foto, nombre, ubicación, m², precio desde, badge de estado (Preventa/Promoción) y botón de WhatsApp prellenado con el nombre exacto del desarrollo.

Justificación: ningún sitio anterior en este estudio ha implementado un filtro interactivo de propiedades. Es útil (15 desarrollos en 3 categorías es mucho para scrollear), es único y demuestra capacidad técnica real.

## Estructura de secciones

1. **Hero** — carrusel manual (4 fotos portada-gpe1/4/3/gpe.webp). H1 "Haz tuyo Puerto Escondido con Grupo Pacífico". Contadores: 15+ proyectos, 700+ clientes, 1,000+ pagos. CTA doble: "Ver desarrollos" + WhatsApp.
2. **Desarrollos** — filtro + 15 tarjetas con WhatsApp por desarrollo.
3. **Por qué elegirnos** — 4 razones (con fotos logos-web-pe). Sobre fondo marino. Lista de 6 servicios.
4. **Testimonios** — 4 tarjetas con foto, nombre, rol y cita real.
5. **Equipo** — 4 asesores con foto y nombre.
6. **Contacto** — tarjeta info (dirección, tel, email, horario, redes) + CTA directo WhatsApp/Llamar/Maps.
7. **Footer** — logo, nav secundario, copyright.
8. **Bottom bar (móvil)** — fija en la parte inferior: WhatsApp + Llamar + Maps.

## Qué se evita

- No se usan carruseles infinitos con contenido duplicado.
- No se inventan precios, testimonios, estadísticas ni datos del negocio.
- No se incluye el mapa embed (sin scripts de terceros).
- No se usa el formulario de contacto PHP (requería backend).
- No se modifican `sitio/` ni `investigacion/`.
- Las animaciones respetan `prefers-reduced-motion`.
- Sin etiquetas pequeñas de sección en mayúsculas (se usa un eyebrow en color acento, no genérico).
- Sin numeración "01 / 02" ni decoradores innecesarios.
