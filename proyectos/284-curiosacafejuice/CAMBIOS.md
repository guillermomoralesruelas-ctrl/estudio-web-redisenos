# Curiosa Café & Juice Bar: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.curiosacafe.mx/ |
| Método | **1.2 en la nube**: el clon no traía fotos; se bajaron del sitio en vivo a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/284-curiosacafejuice/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El mismo juice bar, con sus fotos, su carta con precios, horario y contacto, ahora en español y con "Arma tu Juice Flight" (tres de sus cuatro jugos, botellas que se llenan con su color y pedido por WhatsApp).

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Sin sus fotos (Framer las carga de su CDN) | 12 fotos reales bajadas del sitio a `assets/originales/`, servidas como .webp; 0 rotas |
| 2 errores de consola (del mapa de Google) | 0 errores, sin scripts de terceros |
| Página de 16,201 px en el celular | Una sola página más corta, con la carta en pestañas |

## Qué se cambió (mismo contenido, otra forma)

- El sitio pasa del inglés al español. Los nombres y precios de la carta salen de su propia entrada de blog en español ("Menú de Curiosa Café & Juice Bar en La Condesa: Precios 2026"); los nombres de los platillos se dejan como los escriben ellos.
- La carta, que en su inicio va en bloques largos intercalados con fotos, queda en pestañas por sección (smoothies, jugos, shots, desayuno, toasts y wraps, lattes, café, extras).
- Sus preguntas frecuentes, que en el inicio aparecen sin respuesta, llevan las respuestas que su propio blog da (mesas afuera y adentro, perros bienvenidos, pedir por WhatsApp o DM, Uber Eats y Rappi, etiquetas de dieta).

## Qué se agregó (no existía en el original)

- **"Arma tu Juice Flight"** (elemento memorable): elige 3 de sus 4 jugos prensados en frío; las botellas se llenan con el color de cada jugo; shot opcional con su precio; total y WhatsApp prellenado.
- Textos del estudio: el H1 "Curiosa, juice bar y café en La Condesa", el subtítulo del hero (traducción de su frase "In the heart of La Condesa… neighborhood staple with an inventive menu" más datos de su blog), "Lo que hay en la barra", "Ven con tu perro", "Antes de venir", la función corta de cada jugo en español, los mensajes de WhatsApp y los textos alternativos de las fotos.
- Barra fija en el celular (pide antes, llamar, cómo llegar), JSON-LD `CafeOrCoffeeShop`/`Restaurant` con horario, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Textos de la plantilla de Framer que no son del negocio: "Southern California wellness culture" y "Bite is about simple pleasures…".
- Los enlaces de privacidad, cookies y términos, que apuntan a los avisos legales de Framer, no a los de Curiosa.
- El segundo enlace de Google Maps (`maps.app.goo.gl/VcnBaW8GNhfwgGhv5`); se usa el de "Open in Maps" junto a su dirección.
- Las entradas del blog (siguen en su sitio).

## Qué se conserva al pie de la letra

- Nombre, logotipo, dirección, teléfono y WhatsApp, horario, enlaces de Uber Eats y redes.
- Toda la carta con sus precios (de su blog en español), las etiquetas de dieta y el precio del Juice Flight ($140, 3 jugos) y del jugo de 350 ml ($120).
- El mismo iframe de Google Maps de su sitio.

## Pendiente de confirmar con el cliente

- Si el Juice Flight admite repetir un jugo (el rediseño pide tres distintos) y el tamaño de cada botella del flight.
- Cuál de sus dos enlaces de Google Maps es el correcto.
- Si quieren el sitio también en inglés para turistas.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`; carta: `rediseno/src/data/carta.json`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Fotos: originales en `assets/originales/`, copias .webp en `assets/web/` (`rediseno/fotos-web.mjs`)
