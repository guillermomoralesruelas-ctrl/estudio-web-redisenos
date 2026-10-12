# LAB (Lab Baja Roasters): diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | http://lab-baja.mx/ (Squarespace, en inglés) |
| Método | **1.2 en la nube** (lote 10): el clon de Squarespace no sirve como base; se leyeron 18 páginas del sitio en vivo y se bajaron 37 fotos propias (a 2500 px) y el logotipo a `assets/originales/` |
| Fecha | 2026-10-12 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/618-lab/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El tostador de café de especialidad de San José del Cabo, con sus dos cafeterías (LAB Centro, desde 2015, y LAB Playita, desde 2022), en una sola página en español que empieza por "¿Qué día vienes?" y después enseña sus cuatro cafés, el cowork y la comunidad.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Página de Squarespace que depende de sus scripts y de su CDN; las galerías de cada sucursal no están en el inicio | Fotos de las galerías de /lab-centro, /lab-playita, /rcoffee, /cowork-2-1 y del inicio en `.webp` (`rediseno/fotos-web.mjs`) |

## Qué se cambió (mismo contenido, otra forma)

- Todo el texto se tradujo al español sin agregar datos (su sitio está solo en inglés). Se conservan en inglés el lema "Coffee. Culture. Community.", los nombres de los pases y "gone surfing".
- Las 18 páginas (sucursales, café, tienda, cold brew, cowork, oficinas, co-live, eventos, experiencias) se juntan en una página con secciones.
- Los eventos se muestran por tipo (pop ups con Noroom, vino y vinilos, bienestar, talleres, cine y arte) en lugar de con fecha: su página /events termina en enero de 2023.
- Las notas de taza, proceso, variedades, altitud y acidez de cada café salen de la descripción de cada producto de su tienda.

## Qué se agregó (no existía en el original)

- **"¿Qué día vienes?"** (elemento memorable): siete botones de día; cada día dibuja la línea de 7:00 a 20:00 con el horario de LAB Centro, LAB Playita (más las bebidas hasta las 19:00 de miércoles a domingo) y el Outsite Cowork Lounge (lunes a viernes). El domingo LAB Centro muestra una ola animada ("gone surfing") y se avisa del brunch de LAB Playita. El botón arma el WhatsApp con el día elegido. Abre en el día de hoy.
- Silueta de montaña con la franja de altitud de cada café (1,100 a 1,800 m).
- Bloque de mayoreo con los lugares donde se sirve su café (Casena, Pan Springs, Drift Hotel, Manta at The Cape) y botón para pedir una cata.
- Textos del estudio: titulares, introducciones y textos alternativos.
- Barra fija en el celular (llamar y WhatsApp), JSON-LD `CafeOrCoffeeShop` con las dos sucursales, title, description, imagen para compartir y favicon con las letras L A B.

## Qué se quitó o no se usó

- El bloque de boletín (en su sitio sale el aviso de Squarespace "This newsletter signup form needs a storage option").
- Los carteles de películas, flyers de eventos y las capturas de pantalla de Airbnb de /colive.
- El precio de la oficina privada (MX$2,500 en su lista de eventos, sin decir por qué periodo).
- Fechas de eventos y de la sesión de tostado del 29 de mayo de 2026 (ya pasó).

## Qué se conserva al pie de la letra

- LAB Centro: Benito Juárez 1717, Plaza Adriana, Centro, San José del Cabo; tel. 624 105 2835. LAB Playita: Calle Delfín, La Playa, C.P. 23403 (junto a El Marinero Borracho); tel. 624 180 6340. Los enlaces de Google Maps de cada una.
- gerencia@lab-baja.mx, Instagram @lab_baja, Facebook coffeelabcabo.
- Precios de su tienda al 2026-10-12: Oaxaca MX$360 / 720, Chiapas MX$375 / 750 (agotado), Veracruz MX$390 / 780 (agotado), Guerrero MX$390 / 780 (250 g / 1 kg); pases de cowork MX$200 / 850 / 3,000; playera MX$350, gorra MX$500, libreta MX$250, overol MX$3,500.
- Cold brew reposado 22 horas y hecho cada semana; descripciones de Casa Playita y Outsite Cabo.

## Pendiente de confirmar con el cliente

- **WhatsApp:** no publica uno (en /lab-playita dice "Take-out WhatsApp: (624)" sin número). Se usa el teléfono de LAB Centro, 624 105 2835.
- **Horario de LAB Centro:** el pie dice lunes a sábado 7:30 a 15:00; /lab-centro, 8:00 a 15:30; /location, lunes a viernes 8:00 a 15:00. Se usa el del pie.
- En qué sucursal está el Outsite Cowork Lounge y la foto de la entrada (salen del inicio sin decir cuál es).
- Precio y periodo de las oficinas privadas y la sala de juntas.
- Si quieren el sitio en inglés también (gran parte de su público en Los Cabos es extranjero).

## Dónde está cada cosa

- Textos, horarios, cafés y precios: `rediseno/src/data/content.ts`.
- Fotos: `assets/originales/` y `assets/web/`; medidas en `rediseno/src/data/fotos.json`.
- Capturas: `referencias/capturas-2026-10-12/`.
