# La Punta Coffee: plan de rediseño (método 1.1)

**Sitio original:** https://lapuntacoffee.com/ (una sola página en HTML a mano, alojada en Netlify: encabezado con el logo, portada "Coffee & Vibes by the Pool", About, Menu, Gallery, Visit Us y pie). Está en **inglés** (`lang="en"`) y tiene un botón **ES** que cambia los textos a español con un script. No tiene tienda ni pedidos en línea propios: sus botones "Order on WhatsApp" van a un número de plantilla y "Order on UberEats" va a la portada general de Uber Eats (`https://ubereats.com`), no a una tienda.

**Materia prima:** clon en `../sitio/` (10 imágenes en `sitio/assets/`), textos en inglés en `investigacion/crudo.json` (solo trae el inicio; el sitio no tiene otras páginas: `/menu` y `/es` dan 404), contacto en `investigacion/resumen.json`. Los **textos en español** están en el script del propio sitio (`investigacion/original.html`, objeto `data.es`): se copian de ahí.

**Datos que no están en `crudo.json`** (tomados con curl el 2026-09-27; las descargas se guardaron en una carpeta temporal del sistema, fuera del estudio):
- `https://lapuntacoffee.com/` responde 200 y es **igual** a `investigacion/original.html` (sin cambios desde la captura). `robots.txt`, `sitemap.xml` y `favicon.ico` dan 404.
- Su perfil de Instagram `@lapuntacoffee` (título y descripción públicos de la página): "La Punta Coffee", 37 seguidores, **0 publicaciones**, y su biografía: "Cafecito y bar de jugos adentro de @lapuntarooms.pxm (abierto todos los dias de 8:00am-4:00pm)". El perfil `@lapuntarooms.pxm` se llama "La Punta Rooms ~ Boutique Hotel in La Punta, Puerto Escondido". De ahí sale que el café está **dentro del hotel La Punta Rooms**.
- Se bajaron a la carpeta temporal `IMG_1927.jpg`, `IMG_5164.jpg` y el logo del sitio en línea para comprobar que son los mismos archivos del clon (lo son). No se usó ninguna imagen nueva.

**Rubro:** cafetería y bar de jugos (espresso de especialidad, jugos prensados en frío, smoothies, un açaí bowl y "snacks" de pan brioche y de masa madre) junto a la alberca, **dentro del hotel boutique La Punta Rooms**, en calle Nayarit s/n, Brisas de Zicatela (La Punta), 70934 Puerto Escondido, Oaxaca. Abre todos los días de 8:00 am a 4:00 pm. En la base del estudio está como GASTRONOMIA, y lo es. No es cadena ni directorio: un solo local con fotos propias (su alberca, sus cafés, smoothies y el açaí bowl). Tipo para Google: `CafeOrCoffeeShop`.

**Idioma:** el sitio está en inglés y ofrece español con un botón. El rediseño va **en inglés** (el idioma principal del sitio, el de su público de surfistas y viajeros de La Punta) y **conserva el botón ES**, con los textos en español que el propio sitio ya tiene. Los textos nuevos se escriben en los dos idiomas.

**Sobre las fotos:** 10 archivos en el clon, ninguno con EXIF ni XMP (las dos `screenshot-*.png` solo dicen "Screenshot" en sus metadatos): no hay marcas de IA. Son fotos propias, del mismo lugar (la orilla rosa de la alberca, plumerias, hojas de plátano, el edificio blanco del hotel). **Se usan 8 fotos y el logo.** **No se usa `IMG_1927.jpg`: no es una foto, es un recuadro rosa que dice "Placeholder for IMG_1927.jpg"** (y así sale en la galería del sitio en línea, con el alt "Pool drone shot over turquoise pool"). Los `alt` del sitio están corridos: la foto de la alberca desde el dron es `IMG_5164.jpg`, no la 1927. Faltan fotos de los snacks (Blue Crush, Endless Summer, Sea Side, banana bread), de los jugos y del local o la barra (pendiente).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 3,606 px de alto, desborde 0, **11 de 11 imágenes rotas**, 1 H1, 14 errores de consola y 13 recursos fallidos (incluye el mapa de Google incrustado). Móvil: 6,633 px, **desborde de 164 px** (el menú de navegación no se acomoda en el celular), 11 rotas, 12 errores y 12 fallidos.
- Causa: el HTML pide `./IMG_5143.jpg` y demás en la raíz, pero el clon las guardó en `sitio/assets/`. La portada sale sin su foto de fondo y la galería vacía.
- El mapa de Google incrustado (`iframe`) falla en el clon.
- Fotos: sí están las 10. Se hacen 9 copias `.webp` (7.98 MB → 0.54 MB) y el favicon con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca.

## Qué tiene que lograr el sitio
1. **Que den ganas de ir**: qué es (café y jugos junto a la alberca, dentro de La Punta Rooms), a qué hora abre y **cómo llegar** (Google Maps).
2. **Ver el menú completo con precios claros**: hoy los tamaños de los jugos van entre paréntesis "(12oz/16oz)", los smoothies dan dos precios sin decir por qué, el "espresso shot +$30" va metido en la descripción del Powerfull y "hemp hearts" no se entiende en español ("corazones de hemp").
3. Saber **qué alcanza con lo que traes** al subir de la playa (el elemento memorable).
4. Contactar por lo que sí funciona: correo e Instagram. **No hay WhatsApp real** (el del sitio es de plantilla): queda pendiente.

Público: surfistas y viajeros en La Punta de Zicatela (mucho extranjero, por eso el inglés), huéspedes del hotel y gente de Puerto Escondido que busca café de especialidad, jugos y algo ligero en la mañana.

## Dirección visual (primera pasada)
Los colores de su CSS (`--peach:#F0C6DD`, que en realidad es rosa, `--sand:#F1CC69`, `--orange:#F0A42F`, `--deep:#E5850A`) son los de su logo: una taza rosa con un sol amarillo y naranja. Sus fotos agregan el turquesa de la alberca y la piedra clara de la orilla.

| Token | Color | Uso |
|---|---|---|
| `cal` | `#fffaf6` | Fondo general: la piedra clara de la orilla |
| `rosa` | `#f0c6dd` | Su rosa (la taza del logo): portada y menú |
| `sol` | `#f1cc69` | Su amarillo (los rayos del sol): Visítanos |
| `naranja` | `#f0a42f` | Su naranja: detalles y el centro del sol |
| `alberca` | `#7fd6d8` | El agua de sus fotos: fondo del elemento memorable |
| `alberca-honda` | `#0d5a60` | Botones con texto blanco (7.9:1) |
| `quemado` | `#8a4200` | Precios y enlaces sobre rosa (4.8:1) y sobre cal (6.6:1) |
| `tinta` | `#2b1a24` | Títulos y texto fuerte (10.8:1 sobre rosa); un negro ciruela que va con el rosa, en vez de su `#111` |
| `texto` | `#5b4450` | Texto corrido (8.5:1 sobre cal, 5.8:1 sobre rosa) |

**Tipografía:** su sitio usa la letra del sistema; su logo usa una letra redonda y gruesa de los años setenta que no está en @fontsource. Se usa **Shrikhand** (una display redonda, gruesa y cursiva, de la misma familia de sensaciones que el logo) solo en títulos, y **Outfit** (sans geométrica) para el texto. Las dos de @fontsource, solo el subconjunto latino.

## Elemento memorable: "What's in your pocket?" / "¿Cuánto traes?"
Subes de la playa con lo que traes en la bolsa del short. Tocas los billetes y monedas que tienes ($10, $20, $50, $100, $200, $500) y aparecen, sobre la orilla rosa de la alberca, **las combinaciones de su menú que te alcanzan**: una bebida (café, jugo o smoothie, en el tamaño que cabe) y, si alcanza, algo de comer (el açaí bowl, el banana bread o uno de sus tres panes). Dice el total y **cuánto te sobra**.

1. **El bolsillo**: seis billetes y monedas dibujados con los colores de los billetes mexicanos; se apilan sobre la orilla al tocarlos. "Vaciar" empieza de nuevo. Arranca con $100 + $50.
2. **¿Qué se te antoja?**: Lo que sea, Café, Jugo, Smoothie, Açaí bowl o Snack.
3. **Tres opciones** que usan lo más posible de lo que traes, sin repetir bebida ni comida, cada una dibujada en la orilla (taza, frasco con popote del color del jugo, bowl, pan) con su precio, el total y "Te sobran $X". Si no alcanza para nada, dice cuánto cuesta lo más barato (el té, $30).

Sale del negocio: son sus productos y sus precios, y su lugar (la orilla rosa de la alberca de sus fotos). No se inventa nada: no dice cómo se paga (pendiente), no suma extras (no se sabe a qué bebidas se agregan) y los dos precios de los smoothies se muestran como "chico" y "grande" (deducido, pendiente). No repite ningún elemento anterior: no arma un vaso, no es un reloj ni una báscula ni un mapa ni una cuenta de evento; va del dinero al menú.

## Estructura
1. Encabezado: logo, navegación (Menu, What's in your pocket?, Gallery, Visit), botón ES/EN y "Visit Us".
2. Portada rosa: H1 "Coffee & Vibes by the Pool", su frase, "dentro de La Punta Rooms, Brisas de Zicatela", horario, botones "See Menu" y "Open in Maps"; la foto del latte entre hojas en una ventana en arco.
3. About: su texto, sus tres rasgos (Specialty beans, Vegan options, Cold-pressed juice) y la foto de la alberca desde el dron.
4. Menú completo: Coffee Bar, Juice Bar, Smoothies, Acai Bowl, Snack Bar y Extras, con precios alineados y las notas explicadas; fotos del açaí, del Moonrise y del Sunshine junto a su renglón.
5. **What's in your pocket?** (fondo alberca).
6. Gallery: "Shots from the pool & garden.", tres fotos del latte en la orilla.
7. Visit Us: dirección, horario, correo, Instagram, Google Maps; la foto del Sunshine enlaza a Maps.
8. Pie y barra fija en el celular (Menú, Cómo llegar, Instagram, Correo).

## Revisión contra lo genérico (segunda pasada)
- Rosa, amarillo y naranja en un sitio de playa podría ser cualquier "beach café". Se ancla en lo suyo: el rosa es el de la orilla de su alberca (está en sus fotos), el turquesa solo aparece en el elemento memorable (el agua), y el sol del logo es el único adorno, en la portada.
- Se quitan: los emojis de la lista de contacto (📍📞✉️📸🕒) y del botón (☕), las píldoras de colores de "Specialty beans / Vegan options / Cold-pressed juice" (quedan como una línea de texto), el lema con puntos medios "Beach • Coffee • Vibes" (queda como "Beach, coffee & vibes"), la flecha "➜" de "Open in Maps", la rejilla de 9 fotos iguales con sombra y las tarjetas blancas idénticas del menú.
- El menú no va en tarjetas: renglones con puntos hasta el precio, como una pizarra, y los tamaños en columnas con su encabezado.
- Sin etiquetas en mayúsculas ni numeración.
- Una sola cosa se mueve: los billetes que caen en la orilla y las opciones que aparecen; quietos con `prefers-reduced-motion`.
- Nada de mapa incrustado (el original carga un `iframe` de Google Maps): la foto enlaza a Maps.
