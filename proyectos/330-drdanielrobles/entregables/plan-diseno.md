# Dr. Daniel Robles Pereyra — plan de rediseño (método 1.1)

**Sitio original:** https://drdanielrobles.com/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/img/`), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`.
**Rubro:** Salud — Cirugía Plástica, Estética y Reconstructiva. **Ciudad:** Guadalajara, Jalisco.

## Qué le falta al clon (diagnóstico QA)

| Problema | Detalle |
|---|---|
| CSS principal con 404 | `assets/css/main.css` no se descargó |
| Scripts con 404 | `scripts/main.js`, `scripts/forms.js`, `scripts/custom_scripts.js` |
| 11 imágenes rotas | Las de `/img/` no están en la ruta esperada; están en `/assets/img/` |
| Desborde en móvil 29 px | Consecuencia del CSS roto |
| 18 errores de consola | JS faltante |

## Qué tiene que lograr el sitio

El trabajo principal del sitio es **generar consultas**. El paciente quiere conocer al cirujano, entender qué procedimientos le corresponden, y agendar una cita. Todo debe ir hacia `tel:3336400933` y un WhatsApp prellenado.

## Dirección visual

| Token | Color | Uso |
|---|---|---|
| `--color-azul` | `#0277BD` | Acento principal (del CSS original) |
| `--color-azul-profundo` | `#01578b` | Hover y variante oscura |
| `--color-cielo` | `#E8F4FB` | Fondos suaves, tarjetas |
| `--color-fondo` | `#FCFCFC` | Fondo general (del CSS: `#FCFCFC`) |
| `--color-tinta` | `#202124` | Texto principal (del CSS: `#202124`) |
| `--color-tinta-suave` | `#5F6368` | Texto secundario (del CSS: `#5F6368`) |

La paleta es limpia y médica: blanco/gris muy claro con el azul como único acento. No se usan tonos cálidos, gradientes sin razón ni negro puro.

**Tipografía:** `@fontsource/montserrat` (la tipografía original del sitio, con subconjunto latino). Montserrat para texto y titulares — claro, profesional, sin serifa. No se usa Google Fonts.

## Elemento memorable

**"¿Qué área quieres trabajar?"** — un silueta frontal del cuerpo humano dibujada en SVG con cuatro zonas interactivas (cara, pecho, cuerpo, no-quirúrgico). Al tocar una zona, se ilumina y aparece la lista de procedimientos de esa categoría con sus nombres reales del sitio, y el botón de WhatsApp abre con el procedimiento ya escrito: "Hola Dr. Robles, me interesa información sobre [Aumento Mamario]."

Este elemento:
- Sale del trabajo del doctor, no es un adorno
- Ayuda al paciente que no sabe el nombre exacto de su procedimiento
- Diferencia al sitio de páginas con listas planas de procedimientos
- Usa únicamente nombres y datos tomados de `crudo.json` — no se inventan procedimientos
- No hace afirmaciones de resultados garantizados ni promesas médicas

## Estructura de secciones

1. **Nav** — logo + teléfono + botón "Agendar cita"
2. **Hero** — foto mujer-hero, H1, subtítulo del doctor, credenciales en una línea, dos CTAs (cita y WhatsApp)
3. **Doctor** — foto retrato, bio del doctor, cédulas, logos de asociaciones (ASPS, CMCPER, AMCPER, ISAPS)
4. **Procedimientos** — el elemento memorable: silueta con zonas tocables, lista filtrada, WhatsApp prellenado
5. **Hospitales** — "En colaboración con" + 7 logos de hospitales de Guadalajara
6. **Testimonios** — 5 reseñas reales de Sara, Helen, Roxana, Maru y Ma. Eugenia
7. **Turismo médico** — foto, texto de la sección Turismo del crudo.json
8. **CTA final** — fondo oscuro, frase corta, botón de cita
9. **Pie** — logo, dirección, teléfonos, redes, aviso de privacidad, cédulas, pie legal
10. **Barra móvil fija** — WhatsApp, llamar, Google Maps

## Qué se evita (revisión contra lo genérico)

- No se etiquetan secciones con números (01, 02) ni con mayúsculas pequeñas tipo "ACERCA DE"
- No se anima cada sección al hacer scroll
- Los testimonios no son tarjetas idénticas con estrellas inventadas: son citas en texto
- No se usa la foto "cta-woman.webp" como fondo de sección con overlay (es un recurso pequeño de 377×499 px)
- El elemento de procedimientos no es un grid de tarjetas repetidas: es una figura interactiva
- No se usa el down-button.webp (es decoración sin función en un rediseño)
- No se inventan precios, tiempos de recuperación ni número de cirugías realizadas
