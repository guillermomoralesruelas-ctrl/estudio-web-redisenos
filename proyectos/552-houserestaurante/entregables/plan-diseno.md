# HOUSE Restaurante: plan de rediseño (método 1.1)

**Sitio original:** la sección del restaurante dentro del sitio del hotel Las Casas B+B: https://lascasasbb.com/es/house-restaurante-en-cuernavaca/ y sus subpáginas `menu-de-desayuno/`, `menu-de-desayuno-brunch-de-domingo/`, `menu-de-comida/`, `menu-de-cena/`, `para-llevar/` y `feliz-cumpleanos/` (WordPress con Elementor). Reservas por **OpenTable** (`restref=162475`), WhatsApp del restaurante `527773183782` y teléfono 777-318-3782. Pedidos para llevar por WhatsApp y **Rappi**.

**Materia prima:** el clon en `../sitio/` es el **inicio del hotel** (`https://lascasasbb.com/`), no la página del restaurante; sus imágenes están en `sitio/assets/wp-content/uploads/`. `investigacion/crudo.json` tiene cinco páginas del hotel (inicio en dos idiomas, habitaciones y dos suites): de HOUSE solo trae el bloque "Restaurante Jardín en Cuernavaca | HOUSE Restaurante", las preguntas frecuentes del hotel y el WhatsApp del restaurante en el pie.

**Datos que no están en `crudo.json`** (tomados con curl el 2026-09-27; las descargas se guardaron en una carpeta temporal del sistema, fuera del estudio):
- Las siete páginas del restaurante de arriba (responden 200): textos de la cocina, los cuatro momentos del día, horarios, preguntas frecuentes, para llevar, Birthday Breakfast y celebraciones.
- Las cartas en PDF que enlazan esas páginas, leídas con `pdftotext`: `Menu-Desayuno-Espanol-v14-09-2026.pdf` (desayuno vigente, "V_14/09/26"), `Brunch-Dominical-Espanol-v10-04-26.pdf` ("V_10/04/26"), `Menu-Comida-Cena-Espanol-HOUSE-v26-06-06.pdf` (por dentro dice "v22/08/26") y `Menu-postres-Espanol-2026.pdf` ("v-15-01-26"). También `Desayuno-Espanol-v10-04-26-.pdf`, el desayuno anterior que sigue enlazado desde la página principal del restaurante (solo para `OPORTUNIDADES.md`).
No se descargó ninguna imagen nueva: las fotos de platillos de esas páginas (chilaquiles, mezze, mole, ravioles…) no están en el clon (pendiente).

**Rubro:** restaurante (cocina mexicana y mediterránea "con espíritu California", de la chef ejecutiva Daniela Salgado Romero) en el jardín del hotel boutique Las Casas B+B. Sirve desayuno, brunch dominical, comida y cena todos los días, también a quien no se hospeda. **Ciudad:** Cuernavaca, Morelos (Fray Bartolomé de las Casas 110, Col. Centro, C.P. 62000, frente al Palacio de Cortés). En la base del estudio está como GASTRONOMIA, y lo es. No es cadena ni directorio: un solo restaurante dentro de un hotel de 11 habitaciones. El hotel se menciona solo como el lugar donde está, con lo que dice su sitio.

**Sobre las fotos:** el clon trae 15 fotos y gráficos, casi todos del hotel. Ninguno trae metadatos (ni EXIF ni XMP). **Se usan 4:** el comedor de HOUSE junto a la alberca, de noche, con velas (la única foto propia del restaurante), el jardín con sus salas, el jardín con la alberca al atardecer y un mesero junto a la alberca. Más su logo (blanco y negro). **No se usan:** "Around this table everyone belongs." (un anuncio con una mesa, un limón y un arcoíris que parece generado con IA; pendiente), la foto del spa (parece de banco), la del Palacio de Cortés (no se sabe si es suya), las de habitaciones y los sellos del hotel (MICHELIN Key y Marco Beteta son del hotel). **Faltan fotos de platillos** (pendiente).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 11,866 px de alto, **desborde de 45 px**, 25 imágenes y 0 rotas, 1 H1 (el del hotel), **19 errores de consola** (fuentes bloqueadas por CORS desde `lascasasbb.com` y el aviso de CookieYes de que cambió la URL) y 0 recursos fallidos. Móvil: 13,178 px, desborde de 46 px, 19 errores.
- Es el inicio del hotel: el restaurante ocupa un solo bloque; no hay menú, horarios del restaurante ni sus fotos de platillos.
- Carruseles y ventanas emergentes del tema (Hoteller/Elementor) sin sus scripts; aviso de cookies de CookieYes.
- Fotos: 4 copias `.webp` y el logo en dos versiones con `rediseno/fotos-web.mjs` en `assets/web/` (0.76 MB → 0.65 MB); el clon no se toca.

## Qué tiene que lograr el sitio
1. **Reservar mesa**: por WhatsApp (con mensaje prellenado: día, hora, personas) o por OpenTable, que ya tienen.
2. **Ver la carta completa con precios** sin abrir cuatro PDF: desayuno, brunch dominical, comida y cena, postres.
3. **Saber a qué hora se sirve qué**: desayuno, brunch, comida y cena tienen horarios distintos y hoy están repartidos (y contradichos) en siete páginas.
4. Llegar: frente al Palacio de Cortés, con valet parking; Google Maps.
5. Para llevar (WhatsApp, pick-up, Rappi) y celebraciones (Birthday Breakfast, grupos de 10 a 50).

Público: gente de Cuernavaca y de la Ciudad de México que viene al Centro (desayuno sin prisa, brunch de domingo, comida de negocios, cena en pareja), y los huéspedes del hotel.

## Dirección visual (primera pasada)
Su logo (un cuadro con "HOUSE RESTAURANT" en letra condensada, blanco o negro), la foto del comedor de noche (muros de piedra, mesas y sillas de madera pintadas de blanco, velas, la alberca turquesa) y el color de acento de su sitio (`#FFB846`, el ámbar de sus botones). Dos colores para las dos cocinas de la carta: un rojo de chile y un verde de olivo.

| Token | Color | Uso |
|---|---|---|
| `cal` | `#f6f2ea` | Fondo general (las mesas encaladas) |
| `lino` | `#ece5d8` | Bloques alternos (menú) |
| `carbon` | `#1d1b18` | El negro del logo: títulos, botón principal con texto `cal` (16:1) |
| `noche` | `#15171b` | Secciones oscuras (el jardín de noche), texto `cal` 16:1 |
| `texto` | `#47423b` | Texto corrido (9.0:1 sobre cal, 8.0:1 sobre lino) |
| `vela` | `#ffb846` | Su ámbar: solo sobre `noche` o como fondo de botón con texto `carbon` (10:1) |
| `ambar` | `#8a5207` | Precios y enlaces sobre cal (6.0:1) |
| `chile` | `#a3301e` | Lado México del elemento memorable (6.4:1 sobre cal) |
| `olivo` | `#4d5a26` | Lado Mediterráneo (6.8:1 sobre cal) |

**Tipografía:** las de su sitio, con @fontsource y solo latino: **Oswald** (la letra condensada de su logo y de sus títulos; 500 y 600) y **Jost** (la de su texto; 400, 500 e itálica 400).

## Elemento memorable: "¿Más México o más Mediterráneo?"
Lo que distingue a HOUSE, en sus propias palabras: "México y el Mediterráneo se encuentran en la mesa de HOUSE… El encuentro sucede en los platos". Su carta de comida y cena lo demuestra renglón por renglón (chile cascabel junto a queso de cabra, harissa junto a chile cascabel, limón amarillo junto a cilantro criollo).

1. **Una mesa larga dibujada** (vista desde arriba) con un extremo "México" y el otro "Mediterráneo". Cada platillo de la carta de comida y cena es un plato sobre la mesa, colocado según sus ingredientes: los que el propio menú nombra de un lado (chiles cascabel, guajillo, chilhuacle, cilantro criollo, hoja de aguacate, maíz azul, epazote, mole…) y del otro (aceite de oliva, limón amarillo, kalamata, feta, hummus, tzatziki, harissa, pecorino…). La posición se calcula sola con el texto de la carta: no se escribe a mano.
2. **Un control deslizante de cinco paradas** (Puro México, Más México, Mitad y mitad, Más Mediterráneo, Puro Mediterráneo): al moverlo se encienden los platos de esa parte de la mesa y abajo aparecen esos platillos con precio, sección y sus ingredientes marcados de cada lado.
3. Al elegir un platillo, **"Reservar mesa para probarlo"** abre WhatsApp con el nombre del platillo, y hay una nota de a qué hora se sirve (comida y cena: todos los días desde las 12:00 p.m.).

Sale del negocio: son su frase, sus platillos, sus precios y los ingredientes que su carta nombra. La clasificación de cada ingrediente (qué es México y qué es Mediterráneo) es nuestra y se declara como pendiente de revisar con la chef. No repite ningún elemento anterior: no es un mapa de origen, ni un reloj, ni una báscula ni un selector por día.

## Estructura
1. Encabezado: logo negro, navegación (La cocina, ¿México o Mediterráneo?, Menú, Horarios, Visítanos) y "Reservar mesa".
2. Portada (fondo `noche`): H1 "HOUSE Restaurante", "Restaurante en Cuernavaca Centro Histórico con jardín", "Cocina mexicana y mediterránea. Espíritu California.", su frase de desayuno, brunch, comida y cena, WhatsApp de reservas, OpenTable y "Ver el menú"; la foto del comedor de noche; sus reconocimientos en una línea de texto.
3. La cocina: sus tres párrafos (México y el Mediterráneo, la cocina de Daniela Salgado Romero, la mesa que cambia con el día) con la foto del jardín.
4. Cuatro momentos: desayuno, brunch dominical, comida y cena, cada uno con su texto, su horario y "Ver este menú" (abre su pestaña). En renglones con la hora a la izquierda, no tarjetas iguales.
5. **¿Más México o más Mediterráneo?**
6. La carta completa en cuatro pestañas (Desayuno, Brunch dominical, Comida y cena, Postres y sobremesa), con las notas explicadas.
7. Horarios y lo que hay que saber: horario por día y última reservación, valet, pet-friendly, lluvia, vegetariano y vegano, sin alcohol, accesibilidad, formas de pago.
8. Para llevar y celebraciones: pedidos (WhatsApp, pick-up, Rappi), Birthday Breakfast ($625), grupos de 10 a 50 y cenas románticas.
9. Visítanos: dirección, "dentro de Las Casas B+B", valet, Google Maps, teléfono y WhatsApp; foto del jardín con la alberca.
10. Pie con el logo blanco, redes (Instagram, Facebook, Tripadvisor) y barra fija en el celular (Reservar, Llamar, Cómo llegar).

## Revisión contra lo genérico (segunda pasada)
- Negro, crema y ámbar con letra condensada podría ser cualquier bistró. Se ancla en lo suyo: el cuadro del logo es el único adorno (encabezado, pie y el marco de la mesa del elemento memorable); el ámbar solo aparece de noche, como las velas de su foto.
- Se quitan: los títulos en mayúsculas espaciadas de su sitio ("HORARIOS", "RESERVA DIRECTO", "VER MENÚ"), los emojis de sus listas (🌿🍳☕🐶📍), las estrellas "★★★★★", las estrellitas "✦" delante de cada botón, los separadores con punto medio, los fondos con parallax y las entradas animadas.
- Los cuatro momentos no van en cuatro tarjetas con foto (no hay fotos de platillos): renglones con la hora grande a la izquierda, como una pizarra.
- La carta no va en tarjetas: renglones con puntos hasta el precio, como una carta impresa.
- Una sola cosa se mueve: los platos de la mesa se encienden al mover el control; quietos con `prefers-reduced-motion`.
- Pocas citas: dos de las que ya están en su sitio, con su fuente.
