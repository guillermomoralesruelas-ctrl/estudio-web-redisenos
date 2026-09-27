# Higuera Blanca: plan de rediseño (método 1.1)

**Sitio original:** https://higuerablanca.com.mx/ (una página en HTML, CSS y JS a mano: portada con fondo, "Nuestra Historia", "Nuestra Esencia" con un video, "Nuestra Carta" con enlace a un PDF, "Sugerencias del Chef" y "Nuestras Especialidades" con fotos, sucursales, testimonios, "Haz Tu Reservación" con pestañas por sucursal y pie).
**Materia prima:** clon en `../sitio/` (16 imágenes en `sitio/assets/assets/`), textos del inicio en `investigacion/crudo.json` (el sitio solo tiene esa página), contacto y redes en `investigacion/resumen.json`.
**Datos que no están en `crudo.json`** (tomados con curl el 2026-09-26; las descargas se guardaron en una carpeta temporal del sistema, fuera del estudio):
- **La carta completa**, de su PDF `https://higuerablanca.com.mx/assets/menu/MENU.pdf` (8 páginas, 3.6 MB, título interno "Menu Boca 2025"). El texto del PDF está convertido en curvas (no se puede copiar), así que se leyó página por página a partir de las imágenes y se transcribió a `rediseno/src/data/carta.ts`: entradas frías y calientes, cocteles, chilpachole, caldos, mariscos, especialidades, pescados, camarones, huevas, carnes, extras, postres, aperitivos, digestivos, café, cervezas y bebidas sin alcohol, con medidas y precios. La contraportada del PDF trae otros teléfonos (ver pendientes).
- El WhatsApp de Zempoala (`wa.me/522961096287`, "Hola, me gustaría hacer una reservación en Zempoala"), que está en su `script.js` (las pestañas de reservación).
- Las coordenadas de sus dos enlaces de Google Maps: Boca del Río 19.1466865, -96.105484 ("Restaurante de Mariscos Higuera Blanca Boca del Río") y Zempoala 19.4390945, -96.3789978 ("Higuera Blanca").
- `https://higuerablanca.com.mx/` responde igual que `investigacion/original.html` (solo cambia el cifrado de los correos de Cloudflare).
No se descargó ninguna imagen nueva.

**Rubro:** restaurante de mariscos veracruzanos, familiar, fundado en 1981 por la Sra. Columba Márquez Rivera; el nombre es el del ejido. Dos sucursales: **Boca del Río** ("Principal", De Los Reyes Católicos 65, Fracc. Las Américas) y **Zempoala** ("Matriz", Carretera Cardel-Nautla km 8, Ejido Higuera Blanca). Anuncia una tercera, Plaza Portamar, "próximamente". Abre de miércoles a lunes desde las 12:00 (hasta las 7:30 pm en Boca y 7:00 pm en Zempoala). Reservaciones por teléfono y WhatsApp. No es una cadena ni un directorio: un negocio familiar con fotos profesionales propias de sus platillos y la foto de su entrada.

**Sobre las fotos:** 13 fotos de platillos (verticales, 854x1280, con su mantel naranja y su vajilla), la foto de la entrada (en sepia, con el letrero "Bienvenidos desde 1981" y el cangrejo del logo), la portada del menú con el logo y el sello "HB" (favicon). Ninguna trae metadatos de edición con IA. **No se usa** `img/background.webp`, el fondo de su portada: un banquete en una terraza frente al mar con máquina de pasta, alcachofas y una botella con la etiqueta deformada; parece generada con IA y no muestra el restaurante (se anota en `OPORTUNIDADES.md`). El logo suelto no está en el clon: se recorta de la portada del menú (`img/fotomenu.png`).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 5,571 px de alto, desborde 0, **14 de 14 imágenes rotas**, 1 H1, 19 errores de consola y 19 recursos fallidos. Móvil: 5,985 px, 14 rotas, 18 errores y 18 fallidos.
- Causa: el HTML pide `styles.css`, `script.js` y `assets/…` en la raíz, pero el clon guardó la hoja en `sitio/assets/styles.css` y las imágenes en `sitio/assets/assets/`; no trae `script.js` (menú del celular, pestañas de sucursal, carrusel de testimonios), ni el video `videopromo.mov` (86 MB), ni sus fuentes Avenza y Modern Deluxe Smooth, ni el script de correos de Cloudflare. La página sale sin estilos y sin fotos.
- Fotos: sí están las 16. Se hacen 14 copias `.webp` (3.19 MB → 0.75 MB) con `rediseno/fotos-web.mjs` en `assets/web/`, más el favicon con su sello "HB"; el clon no se toca. **Faltan**: fotos del salón, de la sucursal de Zempoala, de la mayoría de los platillos de la carta y el video (no se descarga: regla del método).

## Qué tiene que lograr el sitio
1. **Reservar** en la sucursal correcta por WhatsApp o teléfono, sin confundir los números.
2. **Ver la carta completa con precios en la página**, no en un PDF de 3.6 MB que Google no puede leer, y entender sus palabras (chilpachole, enchilpayado, acuyo, minilla, rasurado, "por temporada", "cada 100 g").
3. Saber horario, dirección y cómo llegar a cada sucursal.

Público: familias y grupos de Veracruz y Boca del Río que van a comer mariscos al mediodía, y visitantes (del centro del país y de fuera) que buscan "mariscos en Boca del Río" y no conocen los nombres veracruzanos.

## Dirección visual (primera pasada)
Los colores de su CSS (`--color-principal` vino `#7E2625`, `--color-secundario` crema `#F0E6C2`, `--color-tercero` azul marino `#1C3762`, `--color-cuarto` ladrillo `#BD550E`), el oro de su logo y su menú impreso (`#A67C2E`) y el mantel naranja de sus fotos.

| Token | Color | Uso |
|---|---|---|
| `papel` | `#FBF7EC` | Fondo general: el papel de su carta |
| `arena` | `#F0E6C2` | Su crema: bloques alternos (historia, sucursales) |
| `vino` | `#7E2625` | Su color principal: sello, encabezado de la carta, pie (texto crema 7.7:1) |
| `marino` | `#1C3762` | Su tercer color, el del mar: fondo de "¿Cómo lo quieres?" (texto papel 11:1) |
| `ladrillo` | `#9A430A` | Su `#BD550E` oscurecido: botones con texto blanco (6.6:1), precios sobre papel (6.2:1) |
| `oro` | `#A67C2E` / `oro-claro` `#D9B56A` | El oro del logo: filetes y marcos de la carta (decorativo); `oro-claro` para texto sobre marino (6.1:1) y vino (4.9:1) |
| `tinta` / `texto` | `#2B1A17` / `#56423B` | Títulos y texto (15.5:1 y 8.8:1 sobre papel) |

**Tipografía:** sus fuentes Avenza y Modern Deluxe Smooth son comerciales y no están en @fontsource; Raleway (la de sus botones) sí. Se usan, solo en latino: **Crimson Pro** (serif de libro, parecida a los títulos de su menú impreso "ENTRADAS", "CALDOS"), **Raleway** (texto, la de su sitio) y **Barlow Condensed** para los renglones de la carta, como la letra condensada de su PDF.

## Revisión contra lo genérico (segunda pasada)
- Vino, crema, oro y serif es el "restaurante elegante" por defecto. Se ancla en lo suyo: el **marco dorado de doble línea con esquinas de listón** de su carta impresa enmarca la carta del sitio (no cada sección), los renglones van en letra condensada como en su PDF, y el azul marino, que casi no usan, es el campo del elemento memorable. El oro no se usa para texto sobre claro.
- Se quitan: el indicador de scroll, las animaciones de entrada en cada sección, el divisor bajo cada título, el carrusel de testimonios, las tarjetas idénticas con insignia ("Principal", "Matriz", "Próximamente") y los títulos en mayúsculas espaciadas.
- Las fotos no van en una fila de tarjetas iguales: la portada es un par de fotos grandes y las sugerencias del chef son una tira con su precio real.
- Una sola cosa se mueve: el plato de "¿Cómo lo quieres?" cambia de salsa; queda quieto con `prefers-reduced-motion`.

## Elemento memorable: "¿Cómo lo quieres?"
En su carta, el mismo marisco se pide de muchas maneras: "enchipotlados, al mojo de ajo, en salsa de chipotle, empanizados, al ajillo, al tamarindo…", "enchilpayados", "empapelado al horno", "acuyo al horno", "a la veracruzana". Esas palabras son lo más veracruzano de su cocina, pero están repartidas en renglones en mayúsculas de un PDF y quien no es de ahí no sabe qué es "enchilpayado" o "al acuyo".

El elemento pone al frente **las diez preparaciones de la casa** (enchipotlado, al mojo de ajo, al ajillo, enchilpayado, en salsa habanera, al chile-limón, empapelado, al acuyo, a la veracruzana y a la sal):
1. Eliges una. Un **plato dibujado** se baña con el color de esa salsa (rojo chipotle, ajo dorado, chilpaya, naranja habanero, verde de la hoja de acuyo, el papel del empapelado…), con una frase de qué es.
2. Aparecen **todos los platillos de su carta que se pueden pedir así**, con su medida y su precio (por ejemplo, enchilpayado: jaibas suaves, dobladas de jaiba a la Malpica, pulpos, mariscos mixtos, ostiones, pasta con mariscos, mojarra, lomo de negrillo y hueva de naca), y la foto del platillo cuando existe (acamayas enchipotladas, camarones al mojo de ajo, dobladas en salsa chilpaya, negrillo al chile-limón).
3. Dos botones: **reservar en Boca del Río o en Zempoala** por WhatsApp, con la preparación escrita en el mensaje.

Sale del negocio: son sus platillos, sus preparaciones, sus medidas y sus precios. Las frases de "qué es" son explicaciones generales de la cocina veracruzana, no recetas de la casa, y se anotan como pendientes de confirmar con su cocina.

## Estructura
1. Encabezado: logo (recortado de su menú), navegación (Carta, ¿Cómo lo quieres?, Historia, Sucursales) y "Reservar".
2. Portada: H1 "Higuera Blanca", "Tradición y sabor del mar desde 1981", "Tradición que sabe", botón a WhatsApp de Boca del Río, enlace a Zempoala y a la carta; horario de las dos sucursales; fotos del vuelve a la vida y las acamayas.
3. Sugerencias del chef: tira de fotos con su nombre y el precio de la carta.
4. **¿Cómo lo quieres?** (bloque marino).
5. La carta completa en pestañas, dentro del marco dorado de su menú, con "Palabras de la carta" (glosario) y el enlace al PDF.
6. Nuestra historia (1981, la Sra. Columba Márquez Rivera, el ejido) y nuestra esencia, con la foto de la entrada.
7. Sucursales y reservación: Boca del Río y Zempoala con dirección, horario, teléfono, WhatsApp, correo y Google Maps; Plaza Portamar próximamente.
8. Pie; barra fija en el celular (WhatsApp de Boca del Río y de Zempoala, llamar y cómo llegar a Boca del Río).
