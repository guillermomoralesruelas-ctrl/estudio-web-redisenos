# Kenkō Wellness: plan de rediseño (método 1.1)

**Sitio original:** https://kenkowellness.com.mx/ (WordPress con Elementor; páginas Inicio, Filosofía, Kenko 360, Catálogo, Talleres, Clases, Equipo, Blog, Galería, Promociones, Membresía y Gift Card). Contacto: WhatsApp (botones "Comprar ahora" y "AGENDA", sin mensaje), dos teléfonos y correo.

**Materia prima:** `investigacion/crudo.json` (Inicio, Gift Card, Filosofía, Fórmula KenKo 360) y `investigacion/resumen.json` (WhatsApp 55 1939 8546 y 55 6435 9242, teléfonos (55) 1939 8546 y (55) 5548 7500, correos, Facebook, Instagram, TikTok). Con curl se leyeron los textos de Catálogo (precios), Clases (horario), Talleres, Membresía, Promociones y Equipo.

**Comprobado en vivo** (curl al sitio real el 2026-09-27): el inicio conserva un bloque de la plantilla ("Make an Appointment", "Nulla porttitor accumsan tincidunt… Lorem ipsum dolor sit amet", correo instructoralina@gmail.com, teléfono 0514-9856-47565 y "1250 Golden house, new york"); el botón "Llámanos" del inicio es `tel:%20` (vacío); Inicio, Clases y Catálogo dan la dirección de Naucalpan (Felipe Ángeles #22) y Gift Card y Membresía la de Interlomas (Paseo de la Herradura #403 B); la Gift Card manda a otro WhatsApp (55 6435 9242); no hay meta description ni JSON-LD. No se bajó ninguna imagen nueva.

**Rubro:** casa holística (masajes, faciales, terapias, psicología, talleres, yoga, meditación y terapias espirituales) en Naucalpan, Edo. Méx. En la BD figura como FITNESS. Tipo para Google: `HealthAndBeautyBusiness`.

**Sobre las fotos (revisadas antes de construir):** el clon trae unas 45 imágenes, pero **solo 8 son fotos propias** (galería de marzo de 2025): tres posturas de yoga frente al muro de piedra de su sala, la recepción con globos, la bolsa de la Gift Card, dos del equipo en la inauguración y las repisas de la tienda. Hay además la foto de su té ("Antidepresiva", no se usa por ser afirmación de salud). El resto son **fotos de banco** (masajes, spa, meditación en la playa, grupo de terapia) y acuarelas de la plantilla de 2021: no se usan. Ninguna foto propia trae EXIF de Picasa o Google Maps ni marcas de IA. Alcanzan (≥ 3); se usan 7.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 11,072 px y móvil 22,069 px, **5 px de desborde en móvil**, 50 imágenes con 10 rotas en escritorio y 12 en móvil (versiones reducidas que el clon no bajó), 38 y 39 errores de consola.
- Fotos: copias `.webp` de 7 fotos y el logo (1.27 MB → 0.66 MB) y su favicon, con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca.

## Qué tiene que lograr el sitio
1. **Agendar por WhatsApp** una sesión, clase o taller, con el servicio escrito.
2. **Ver qué ofrecen y cuánto cuesta**: su catálogo es largo y sus precios están en otra página; su propuesta (la Fórmula KenKo 360) junta mente, espíritu y cuerpo, pero nadie ve cómo se arma.
3. Clases de yoga con horario y paquetes; membresías.
4. Confianza (el equipo) y llegar (dirección y Google Maps).

## Dirección visual (primera pasada)
El morado y el verde azulado de su sitio y el mandala de su logo, sobre rosa pálido.

| Token | Color | Uso |
|---|---|---|
| `noche` | `#322f52` | Títulos, tarjeta del plan, equipo y pie (12.1:1 sobre `fondo`; blanco encima 12.6:1) |
| `morado` | `#67568c` | Botón principal con texto blanco (6.4:1) y precios (6.1:1 sobre `fondo`, 5.9:1 sobre `rosa`) |
| `teal-hondo` | `#2f6f76` | Su verde azulado `#3a878f` oscurecido para enlaces y botones de contorno (5.5:1 sobre `fondo`); `#3a878f` solo en pétalos y bordes |
| `agua` / `lila` | `#b9e3e0` / `#e9c8dc` | Texto y botón claro sobre `noche` (9.1:1 y 8.3:1) |
| `rosa` | `#fff2fa` | Su rosa pálido: portada y elegidos; `texto` `#3d3a4f` encima 10.1:1 |
| `fondo` | `#fdf9fb` | Fondo; `texto` encima 10.5:1 |

**Tipografía:** **Prata** en títulos y **Lato** (400 y 700) en texto, las que carga su sitio; de @fontsource y solo latino.

## Elemento memorable: "Tu Plan 360"
Su idea central es la **Fórmula KenKo 360**: "los 3 pilares de la salud: mente, espíritu y cuerpo, o bien… sólo en alguno". Su logo es un mandala. Pero en el sitio la fórmula es un párrafo, y los precios están en otra página, revueltos con textos largos.

El elemento: un **mandala en SVG de tres pilares** (Cuerpo en verde azulado, Mente en morado, Espíritu en lila) con un pétalo por cada servicio publicado (17). Tocas servicios en las listas de cada pilar (nombre, precio y una línea de qué es) y **se llena su pétalo**; el centro dice cuántos de los 3 pilares tocas y, cuando están los tres, se vuelve "360°". La tarjeta suma los **precios publicados por sesión** (y dice cuáles no tienen precio: meditación, respiración, tarot), y el WhatsApp lleva escrito "quiero armar mi Plan Wellness KenKo 360 con: Masaje, Taller Mindfulness…".

Sale del negocio: sus pilares, su lema, sus servicios y sus precios. No inventa un plan: se aclara que su plan real empieza con una plática con sus expertas. No repite nada anterior: no es un vaso por capas ni una báscula; es su mandala convertido en menú.

## Estructura
1. Encabezado: logo, navegación y "Agendar".
2. Portada: H1 "Salud integral para el equilibrio vital", su presentación, botones; la instructora en flor de loto con marco de arco.
3. "Kenko" significa salud en japonés: bienvenida de las fundadoras, misión, visión, valores, fotos de la casa y Gift Card.
4. **Tu Plan 360.**
5. Clases de yoga, meditación y respiración: horario, paquetes y membresías.
6. Equipo: foto y ocho integrantes con su rol.
7. Contacto: WhatsApp, llamar, dirección, correo, redes y la recepción enlazada a Google Maps.
8. Pie y barra fija en el celular.

## Revisión contra lo genérico (segunda pasada)
- Se quitan: el bloque de plantilla, los contadores, las fotos de banco, las acuarelas, el video de stock, el blog, el newsletter y el widget de chat.
- **Sin afirmaciones de salud**: no se copian "fortalece el sistema inmunológico", "16 veces más potente", "sin efectos secundarios", "reduce la ansiedad y la depresión", ni los textos de rinoplastia, blefaroplastia, verrugas o herbolaria.
- Sin etiquetas en mayúsculas, sin numeración; un solo movimiento (el pétalo que crece), quieto con `prefers-reduced-motion`.
- Sin promociones con fecha (10 de Mayo, abril, código de marzo de 2025).
- Sin mapas ni scripts de terceros.
