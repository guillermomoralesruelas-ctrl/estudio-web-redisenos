# Che Pebeta: plan de rediseño (método 1.1)

**Sitio original:** https://chepebeta.mx/ (sitio de una página hecho con Lovable, en React: inicio con "Nuestra Alma", "Nuestras Noches", "Nuestra Carta", promociones del Mundial, galería "Nuestra Esencia" y formulario "Reservar Mesa"; y la página /menu con la carta completa: platillos, vinos y postres; selector de cinco idiomas).
**Materia prima:** clon en `../sitio/` (20 imágenes en `sitio/assets/assets/`), textos del inicio en `investigacion/crudo.json` (solo trae esa página), contacto y redes en `investigacion/resumen.json`.
**Textos que no están en `crudo.json`** (tomados del sitio real con curl el 2026-09-26; las descargas se guardaron en una carpeta temporal del sistema, fuera del estudio):
- La carta completa de /menu: está en el archivo de la página (`/assets/menu-B19Cg0DX.js`), con platillos, descripciones y precios de entradas, para acompañar, pastas, pizzas, parrilladas Angus, cortes Angus, platillos de la casa, bebidas, vinos (de autor, por copeo, por botella, mexicanos, de España, Italia, Portugal y Francia), alfajores, postres y café. Se pasó a `rediseno/src/data/carta.json` (solo el español).
- Del archivo del inicio (`/assets/index-LVYPD67w.js`): los textos de cada pestaña de "Nuestra Carta" (solo se lee la de Entradas sin JavaScript), el horario, el formulario de reserva (arma un WhatsApp al 52 81 1762 6442 con nombre, correo, fecha, hora, personas y solicitud) y el title y description de /menu.
- Del archivo del botón flotante (`/assets/WhatsAppButton-CKCIaMIX.js`): el botón verde de WhatsApp manda al 52 81 1234 5678, un número de ejemplo (ver `OPORTUNIDADES.md`).
No se descargó ninguna imagen nueva.

**Rubro:** restaurante argentino ("Restaurante Argentino de Alta Gama") en Pueblo Serena, Carretera Nacional 500, Valle Alto, Monterrey, Nuevo León. Parrilla con cortes Angus, empanadas, pastas amasadas a mano, pizzas, milanesas, choripán, postres argentinos (el Balcarce, que dicen ser los únicos en servir en Monterrey), cava de vinos argentinos y mexicanos, show de tango los viernes y cata maridaje el último jueves de cada mes. Premios CANIRAC 2019 y 2023 (en su logo). No es una cadena ni un directorio: un solo restaurante, con fotos propias y profesionales de sus platillos, su cava y su salón lleno.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio y móvil **0 px de alto**: la página sale en blanco. 0 imágenes, 0 H1, 2 errores de consola en escritorio y 1 en móvil, 1 recurso fallido (el logo pedido en `assetsassets/assetsassets/…`).
- Causa: en `sitio/index.html` cada "/" del HTML se reescribió como "assets/" (`</title>` quedó como `<assets/title>`, `https://` como `https:assets/assets/`), así que el navegador no entiende el documento. Además, es un sitio de React: sin sus scripts, que el clon no trae, no se dibuja nada.
- Fotos: sí están las 20 del inicio (44 MB en total). Se hacen 18 copias `.webp` (47.73 MB → 0.95 MB) con `rediseno/fotos-web.mjs` en `assets/web/`, más el logo y el favicon; el clon no se toca. **Faltan en el clon** las fotos de las otras pestañas de la carta (`menu-cortes`, `menu-pastas`, `menu-postres`, `menu-bodega`, `ensalada-acompanar`, `choripan-casa`) y la de Mafalda de su promoción escondida. No se descargan (regla del método): cada pestaña usa una foto de su galería.

## Qué tiene que lograr el sitio
1. **Reservar mesa** (su botón principal está en todas partes): por WhatsApp, con fecha, hora y personas, como su formulario, y con su horario a la vista.
2. **Enseñar la parrilla, que es lo que los hace argentinos:** qué cortes tienen, de qué parte de la res sale cada uno, cuánto pesa y cuánto cuesta, y en qué parrillada viene.
3. **La carta completa en la misma página**, sin abrir /menu, y con las notas crípticas explicadas (descorche, High Choice, 1" y 2", medidas de pizza, "fileto").
4. Las noches (tango los viernes, cata el último jueves) con su botón de reservar, y cómo llegar a Pueblo Serena.

Público: familias y parejas de Monterrey y de la Carretera Nacional (Valle Alto, Santiago) que buscan una parrilla de nivel para una ocasión, argentinos que extrañan su comida (alfajores, Balcarce, fernet) y grupos que quieren una noche de tango.

## Dirección visual
El negro del óvalo de su logo, el celeste de sus letras (la bandera argentina), la madera y el cuero de su salón y el dorado de sus medallas CANIRAC. Página que alterna el negro de la noche (portada, despiece, noches, pie) con el crema de su sitio (alma, carta, reservar), como un mantel sobre una mesa de madera.

| Token | Color | Uso |
|---|---|---|
| `noche` | `#120905` | Fondo de la portada, el despiece, las noches y el pie (el `#120905` de su CSS) |
| `crema` | `#f8f7f3` | Fondo claro (su `--crema` y `--background`) |
| `crema-oscura` | `#ece7df` | Fondo de la carta y de los campos del formulario (su `--crema-dark`) |
| `tinta` | `#2a1f19` | Texto sobre crema (su `--foreground`; 15.0:1) |
| `cuero` | `#914f2f` | Precios, enlaces y botones sobre crema (su `--cuero`; 5.8:1 con texto crema, 5.1:1 sobre `crema-oscura` `#ece7df`) |
| `celeste` | `#5bb0d7` | El celeste de su logo: detalles y botones sobre negro (8.1:1 con texto `noche`); nunca como texto sobre crema |
| `oro` | `#e0af3b` | El dorado de sus medallas y de su cursor: los cortes elegidos en el despiece y detalles sobre negro (9.7:1) |

**Tipografía:** las de su sitio: **Playfair Display** (títulos; `--font-display`) y **Montserrat** (texto; `--font-body`), variables, de `@fontsource-variable/playfair-display` y `@fontsource-variable/montserrat`, solo el subconjunto latino. Los Noto Sans de su CSS son para el coreano y el japonés de su selector de idiomas: no se usan.

## Elemento memorable: "El despiece"
Su carta nombra los cortes como los nombra un parrillero argentino (vacío, picaña, tira de asado, bife angosto, matambre), pero quien no es argentino no sabe qué es un vacío ni por qué el bife angosto viene de 1" o de 2". Y la carta los reparte en cinco lugares: cortes Angus, parrilladas, entradas (matambre, chicharrón de rib eye), platillos de la casa (chamorro, costilla, milanesas de arrachera, torta de lomito) y promociones.

El elemento es **la res dibujada de perfil, como el cuadro de cortes que cuelga en las carnicerías argentinas**, con sus cortes marcados. Tocas una zona (o eliges el corte en la lista) y se ilumina en dorado; a un lado aparece su ficha: el nombre, **de qué parte sale** (una línea, explicada en español de México: "el vacío es la falda, entre las costillas y la pierna"), cómo lo sirve Che Pebeta (**sus pesos y precios**: "200 g $350 · 400 g $690"), **todos los platillos de su carta que salen de ese corte** (el rib eye de 500 g, el churrasco de ½ kilo y el chicharrón de rib eye; la arrachera a la parrilla y sus dos milanesas) y **en qué parrillada viene** (el vacío va en la Pituca, la Piba y la Che Pebeta, con sus gramos). Abajo, "Reservar y pedir este corte" abre WhatsApp: "Quiero reservar mesa. Me interesa el vacío (400 g, $690)".

Sale del negocio, no es un adorno: son sus 9 cortes con sus pesos y precios reales, sus 3 parrilladas y los 18 platillos de la carta que salen de ellos. La ubicación de cada corte en la res es conocimiento general de carnicería y se dice así en la página; se marca como pendiente de revisar con su parrillero. Una sola cosa se mueve: la zona elegida cambia de color, y queda quieta con `prefers-reduced-motion`.

## Estructura
1. Encabezado negro con el logo (el óvalo y sus medallas), navegación (Nuestra alma, El despiece, La carta, Noches, Visítanos) y "Reservar mesa".
2. Portada (negro): la foto del postre flameado, "Restaurante argentino de alta gama", H1 "De Buenos Aires a Monterrey: el sabor de nuestra herencia", su description (cortes Angus, pastas artesanales, el único Balcarce de la ciudad y tango en vivo), "Reservar mesa" y "Ver la carta", y el horario con "hoy" marcado (hora de Monterrey).
3. Nuestra alma (crema): la foto "polaroid" de la familia amasando, "Tradición y pasión", sus dos párrafos y las medallas CANIRAC 2019 y 2023.
4. **El despiece** (negro; elemento memorable).
5. La carta (crema): pestañas Entradas, Para acompañar, Pastas y pizzas, De la parrilla, De la casa, Postres y café, Vinos, Bebidas; cada una con su frase del sitio, una foto de su galería y los platillos con precio en renglones con puntos. Las notas explicadas.
6. Nuestras noches (negro): Show de Tango (viernes, 9:00 pm) y Cata Maridaje (último jueves de mes, 8:30 pm), cada una con "Reservar lugar" por WhatsApp.
7. Nuestra esencia: cinco fotos de su galería (una grande y cuatro chicas) en una retícula sin huecos.
8. Reservar mesa (crema): el formulario que arma el WhatsApp (nombre, fecha, hora, personas, solicitud) y, al lado, teléfono, WhatsApp, horario, dirección y la foto del salón que abre Google Maps.
9. Pie con el logo, redes y la leyenda de consumo responsable; barra fija en el celular (Reservar, WhatsApp, Llamar y Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Primera versión del plan: portada a pantalla completa con la foto de la empanada vista desde arriba, "Nuestra carta" en seis tarjetas iguales con foto y un contador "próximo show de tango en…". Se cambió: el contador se parece a los relojes ya usados en otros sitios del estudio, y las tarjetas escondían la carta; la carta va completa en renglones, como una carta impresa, y lo distintivo es el despiece.
- Sin etiquetas pequeñas en mayúsculas sobre cada título (su sitio las pone en todas: "TRADICIÓN Y PASIÓN", "EXPERIENCIAS ÚNICAS", "GASTRONOMÍA ARGENTINA"): el antetítulo de su portada se conserva en tipo oración y los demás títulos van solos. Sin numeración 01/02. Sin puntos medios de adorno: los "·" de su carta pasan a comas o a renglones.
- Sin filas de tarjetas idénticas: las noches son dos bloques con foto de distinto tamaño; la galería es una retícula con una foto grande.
- Sin degradados ni brillos de moda: el celeste se usa como en su logo, en pocas cosas, y el dorado solo para lo elegido.
- Sin el selector de cinco idiomas, sin la promoción escondida de Mafalda y sin las promociones del Mundial (el Mundial terminó el 19 de julio de 2026).
- Nada que invite a beber de más; se agrega la leyenda de consumo responsable al pie.
- No se inventan precios, cortes, horarios, reseñas ni fotos: la carta es la suya; la ubicación de los cortes en la res se dice como explicación general.
- Sin mapa incrustado, sin botón flotante de terceros, sin Google Fonts y sin scripts de terceros: WhatsApp y Maps se enlazan.
