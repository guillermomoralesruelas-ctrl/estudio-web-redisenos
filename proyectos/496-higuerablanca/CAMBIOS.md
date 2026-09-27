# Higuera Blanca: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://higuerablanca.com.mx/ (una sola página en HTML, CSS y JS; la carta está en un PDF, `/assets/menu/MENU.pdf`) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-26 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/496-higuerablanca/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-26/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 496-higuerablanca`) |

**Negocio:** Higuera Blanca, restaurante familiar de mariscos veracruzanos desde 1981 (Sra. Columba Márquez Rivera; el nombre es el del ejido). Sucursal **Boca del Río** ("Principal"): De Los Reyes Católicos 65, Fracc. Las Américas, C.P. 94298; miércoles a lunes de 12:00 a 7:30 pm; tel. y WhatsApp 229 476 4100; higuerablanca.boca@hotmail.com. **Zempoala** ("Matriz"): Carretera Cardel-Nautla km 8, Ejido Higuera Blanca, C.P. 91660; miércoles a lunes de 12:00 a 7:00 pm; tel. y WhatsApp 296 109 6287; higuera.blanca@hotmail.com. Anuncia "Plaza Portamar, Riviera Veracruzana" como próximamente. Facebook /higuerablancadeboca, Instagram @higuerablanca.boca.

## En una línea

Mismo negocio, mismos textos, fotos y datos de contacto; cambia la forma: la carta completa con precios en la página (antes solo en un PDF), sus palabras veracruzanas explicadas, "¿Cómo lo quieres?" (eliges enchipotlado, enchilpayado, al acuyo… y ves qué platillos vienen así y cuánto cuestan), reservación por WhatsApp directa a cada sucursal y datos para Google que el sitio no tenía.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 14 de 14 imágenes rotas en escritorio y móvil: el HTML pide `assets/…` pero el clon las guardó en `sitio/assets/assets/` | 0 imágenes rotas; 14 copias `.webp` de fotos del clon en `assets/web/` |
| La hoja `styles.css` no carga (el clon la guardó en `sitio/assets/`) y falta `script.js` (menú del celular, pestañas de sucursal, carrusel): la página sale sin diseño | Sitio nuevo con sus estilos propios; sin scripts externos |
| Faltan el video `assets/videos/videopromo.mov` (86 MB), sus fuentes Avenza y Modern Deluxe Smooth y el script de correos de Cloudflare | Sin video (ver "Qué se quitó"); fuentes de @fontsource; correos escritos como enlaces `mailto:` |
| 19 errores de consola y 19 recursos fallidos en escritorio (18 y 18 en móvil) | 0 errores y 0 recursos fallidos |
| El clon no trae el logo suelto (el encabezado del sitio es el texto "HB") | Logo recortado de la portada de su menú (`img/fotomenu.png`) con `fotos-web.mjs` |
| Faltan fotos del salón, de la sucursal de Zempoala y de la mayoría de los platillos (no existen en el sitio) | Se usan las 13 fotos de platillos y la de la entrada; lo demás va sin foto (ver pendientes) |

## Qué se cambió (mismo contenido, otra forma)

- **La carta**: el sitio solo enlaza un PDF de 8 páginas (3.6 MB) con el texto en curvas. El rediseño la transcribe completa en la página, en 9 pestañas (Entradas, Cocteles, Chilpachole y caldos, Mariscos, Especialidades y pescados, Camarones huevas y carnes, Extras, Postres, Bebidas), dentro de un marco dorado de doble filete como el de su carta impresa, con renglones en letra condensada y línea punteada hasta el precio. Se conserva el botón "Descargar menú PDF".
- **De MAYÚSCULAS a tipo oración** y erratas corregidas: "Dobunnet" (Dubonnet), "Late" (latte), "Chartreusse" (Chartreuse), "Kalhúa" (Kahlúa), "Express" (exprés), "Capuccino" (capuchino), "Ultra Michelob" (Michelob Ultra), "Stella" (Stella Artois), "Delaware" (Delaware Punch), "grs."/"gr." (g), "pzas." (piezas), "c/" (con), "Ord." (orden de). Las cervezas se ordenaron por precio y las artesanales se juntaron con las demás, marcadas "(artesanal)"; los aperitivos y digestivos van juntos, ordenados por precio.
- **Notas crípticas de la carta explicadas:**
  - "(CADA 100 grs.)" → el precio va como "$95 cada 100 g" y, en el pámpano y la rebanada de robalo, un ejemplo con sus números: "Un pámpano de 600 g sale en $570." y "Una rebanada de 350 g sale en $560." (cuentas nuestras con sus precios). En el glosario: "Cada 100 g: se cobra por peso; eliges el tamaño del pescado."
  - "POR TEMPORADA" → "Por temporada" y en el glosario: "el precio cambia con la temporada: pregúntalo al reservar."
  - "(AL GUSTO)" → glosario: "en la preparación que elijas."
  - Los tamaños del chilpachole (chico 95 ml, mediano 220 ml, grande 350 ml) → nota "Chico, mediano o grande: la carta da la medida de cada uno en mililitros."
  - Los asteriscos (*) de "Rebanada de robalo*", "Robalito entero*", "Robalito en lomos culichi*" y "Lomo de negrillo*" no tienen nota en la carta (la única nota es "*Todo se prepara al momento que usted lo ordena"): se quitaron (ver pendientes).
  - "Salseo extra" → "Porción extra de salsa." (deducido, ver pendientes). "Con marisco" ($215, entre las cervezas preparadas) → "Así viene en la carta, junto a las cervezas preparadas; pregunta qué lleva al reservar."
- **Renglones que en el PDF dependen del de arriba** se escriben completos (deducido, ver pendientes): "Al mojo de ajo, enchipotlada y ajillo (500 g)" y "Empapelada al horno, enchilpayada y habanera (500 g)" → "Mojarra al mojo de ajo, enchipotlada o al ajillo" y "Mojarra empapelada al horno, enchilpayada o en salsa habanera"; "Empanizado (180 g)" → "Filete de pescado empanizado"; "(A la mexicana, enchipotlada, al mojo de ajo, al ajillo) 200 g" → "Hueva de lisa a la mexicana, enchipotlada, al mojo de ajo o al ajillo". Los chilpacholes y caldos llevan el nombre completo en cada renglón.
- **Sugerencias del chef y especialidades**: las 12 fotos con nombre de su sitio se juntan en una tira, cada una con la medida y el precio del renglón de su carta (camarones al mojo de ajo: los camarones pelados o enteros de 200 g, $360; caldo de rebanada de robalo: el grande de robalo de rebanada, 350 ml, $520; lomo de negrillo al chile-limón: el horneado de 350 g, $580; etc.). "Tentáculos teriyaki" no está en la carta: va sin precio con "Pregunta por él al reservar" (ver pendientes). "Acamayas enchipotladas" va en la portada y en "¿Cómo lo quieres?".
- **Reservación**: las pestañas "Elige tu sucursal" (que cambiaban horario, dirección, teléfono y WhatsApp con JavaScript) pasan a dos bloques fijos, uno por sucursal, cada uno con su WhatsApp, su teléfono, su correo y su Google Maps. Los mensajes de WhatsApp son los de su sitio ("Hola, me gustaría hacer una reservación en Boca del Río / en Zempoala") más "Somos __ personas, para el día __ a las __.".
- **Horarios**: el sitio los escribe como "Reservaciones: Miércoles - Lunes 12:00 PM - 7:30 PM" en las sucursales y como "Horarios" en el pie; el rediseño los pone como "Horario" (ver pendientes).
- "Nuestras Sucursales" y "Haz Tu Reservación" se juntan en una sola sección, "Haz tu reservación". "Nuestra Historia" y "Nuestra Esencia" se juntan con la foto de la entrada.
- Fotos: 14 copias `.webp` (3.19 MB → 0.75 MB) con `rediseno/fotos-web.mjs`; el clon no se tocó. Favicon con su sello "HB".
- Colores: los de su CSS (vino `#7E2625`, crema `#F0E6C2`, azul marino `#1C3762` y ladrillo `#BD550E`, oscurecido a `#9A430A` para texto y botones) más el oro de su logo y su carta (`#A67C2E`).
- Tipografía: sus fuentes Avenza y Modern Deluxe Smooth son comerciales y no están en @fontsource; se usan Crimson Pro (títulos, parecida a la de su carta impresa), Raleway (texto, la de los botones de su sitio) y Barlow Condensed (renglones de la carta, como la letra condensada de su PDF), solo latino.

## Qué se agregó (no existía en el original)

- **Datos tomados con curl el 2026-09-26** (descargas en una carpeta temporal del sistema, fuera del estudio): la carta completa de su PDF `https://higuerablanca.com.mx/assets/menu/MENU.pdf` (leída de la imagen de cada página porque el texto está en curvas), el WhatsApp de Zempoala de su `script.js` (`wa.me/522961096287`) y las coordenadas de sus dos enlaces de Google Maps (Boca del Río 19.1466865, -96.105484; Zempoala 19.4390945, -96.3789978).
- **Elemento memorable: "¿Cómo lo quieres?"** (componentes `ComoLoQuieres`, `Plato` y `conPreparacion()` en `App.tsx`; datos en `preparaciones` de `content.ts` y el campo `prep` de cada renglón de `carta.ts`). Diez botones con las preparaciones de su carta (Enchipotlado, Enchilpayado, Al mojo de ajo, Al ajillo, En salsa habanera, Al chile-limón, Empapelado, Al acuyo, A la veracruzana, A la sal). Al elegir una, un plato dibujado con un pescado se baña con el color de esa salsa, aparece una frase de qué es y la lista de todos los renglones de su carta que se piden así, con su medida, su sección y su precio; si hay foto de un platillo así, se muestra. Dos botones de WhatsApp (Boca del Río y Zempoala) con la preparación en el mensaje.
  - Textos nuevos: "¿Cómo lo quieres?"; "En Higuera Blanca el mismo pescado o marisco se pide de muchas maneras. Elige una preparación y te decimos qué es y qué platillos de la carta puedes pedir así."; "Un platillo de la carta viene así" / "N platillos de la carta vienen así"; "En la foto: …"; "Reservar en Boca del Río", "Reservar en Zempoala"; "Precios de su carta en PDF (2025). Todos los precios están sujetos a cambios. Las frases que explican cada preparación son generales de la cocina veracruzana."; `aria-label` "Preparaciones" y "Dibujo de un plato (preparación)".
  - Frases de qué es cada preparación (explicaciones generales de la cocina veracruzana, **no recetas de la casa**; ver pendientes): Enchipotlado "Bañado en salsa de chile chipotle, el jalapeño seco y ahumado."; Enchilpayado "En salsa de chile chilpaya, un chile silvestre pequeño y muy picoso de Veracruz."; Al mojo de ajo "Con mucho ajo dorado."; Al ajillo "Salteado con ajo y chile guajillo en rodajas."; En salsa habanera "En salsa de chile habanero."; Al chile-limón "Con chile y limón."; Empapelado "Envuelto en papel y cocido al horno en su propio jugo."; Al acuyo "Al horno con acuyo, la hoja santa de sabor anisado de la cocina veracruzana."; A la veracruzana "En la salsa del puerto: jitomate, cebolla, aceitunas, alcaparras y chiles güeros."; A la sal "Horneado entero dentro de una costra de sal."
  - Qué platillos van en cada preparación sale de las palabras de cada renglón de la carta (por ejemplo, "en chilpaya", "enchilpayados" y "en salsa chilpaya" cuentan como enchilpayado). "En salsa de chipotle" de los camarones se deja fuera de "Enchipotlado" porque la carta los lista como dos opciones distintas.
  - Mensaje de WhatsApp: "Hola, me gustaría hacer una reservación en (sucursal). Se me antoja algo (preparación). Somos __ personas, para el día __ a las __."
- **Palabras de la carta** (glosario, `glosario` en `content.ts`; explicaciones generales, ver pendientes): Chilpachole "caldo picoso de jaiba o de camarón con chile y epazote, típico de Veracruz."; Acamayas "langostinos de río."; Negrillo "un mero del Golfo."; Peto "pez del Golfo de carne firme."; Minilla "pescado desmenuzado y guisado."; Rasurado "picado muy fino."; Picadas "tortillas gruesas de maíz con el borde pellizcado."; Campechana y marinera "cocteles de dos mariscos." (de la carta: "2 mariscos"); A la tumbada "arroz caldoso con mariscos, al estilo de Alvarado."; Culichi "salsa cremosa de chile poblano, al estilo de Culiacán."; Lechero "café con leche caliente, como se toma en el puerto."; Moros con cristianos "arroz con frijoles negros."; Al gusto, Por temporada y Cada 100 g (arriba).
- **WhatsApp a cada sucursal** con mensaje prellenado: Boca del Río 52 229 476 4100 y Zempoala 52 296 109 6287 (los de su sitio).
- Barra fija en el celular: "Boca del Río" y "Zempoala" (WhatsApp de cada una), llamar y cómo llegar a Boca del Río (la "Principal").
- Otros textos nuevos: "Mariscos veracruzanos en Boca del Río y en Zempoala. Tradición que sabe." (armada con "Tradición y sabor del mar", sus dos sucursales y su frase "Tradición que sabe"); "Desde 1981" (de su "DESDE 1981"); "En Zempoala"; "Ver la carta con precios"; navegación "Carta", "¿Cómo lo quieres?", "Historia", "Sucursales"; "Reservar mesa" (de su "Reservar Mesa"); "Toda la carta"; "Pregunta por él al reservar"; "Nuestra carta" (de "Nuestra Carta"); "Palabras de la carta"; "Precios de su carta en PDF (2025)."; "Haz tu reservación" y "Garantiza tu mesa y vive la experiencia Higuera Blanca." (suyos) + "Elige tu sucursal y resérvala por WhatsApp o por teléfono."; "Dirección", "Horario", "Teléfono y WhatsApp", "Correo"; "Reservar por WhatsApp", "Llamar", "Ver ubicación" (suyo); "Próximamente: Plaza Portamar, Riviera Veracruzana." (suyo, en una frase); "Síguenos en Facebook e Instagram."; "Calidad y sazón nos distinguen." (de la contraportada de su carta); `aria-label` "Higuera Blanca, volver al inicio", "Abrir el menú", "Reservar en Boca del Río por WhatsApp", "Reservar en Zempoala por WhatsApp", "Llamar a Higuera Blanca Boca del Río", "Cómo llegar a Higuera Blanca Boca del Río en Google Maps", "Partes de la carta", "Sugerencias del chef"; "Ir a la carta" (salto de teclado).
- JSON-LD con dos `Restaurant` (uno por sucursal) con datos reales: nombre, lema, año, dirección, coordenadas, horario (lunes y miércoles a domingo), teléfono, correo, cocina, menú (el PDF), `acceptsReservations`, Facebook e Instagram. El sitio no tiene JSON-LD.
- Title nuevo con ciudad ("Higuera Blanca | Mariscos veracruzanos en Boca del Río y Zempoala"), description nueva con platillos reales, Open Graph con la foto del vuelve a la vida (el sitio no tiene), `lang="es-MX"`, favicon con su sello "HB".
- Textos alternativos descriptivos en todas las fotos (en el sitio son solo el nombre del platillo).
- Accesibilidad: un solo H1 ("Higuera Blanca"), contraste AA (texto `#56423B` sobre papel 8.8:1 y sobre crema 7.5:1; ladrillo `#9A430A` sobre papel 6.2:1; blanco sobre ladrillo 6.6:1; crema sobre vino 7.7:1; papel sobre marino 11:1; oro claro sobre marino 6.1:1), pestañas con `role="tab"`, botones con `aria-pressed`, lista con `aria-live`, foco visible y `prefers-reduced-motion` (sin desplazamiento suave ni transiciones; el plato cambia sin animación).

## Qué se quitó o no se usó

- **Los cinco testimonios** ("María González, Ciudad de México", "Roberto Martínez, Monterrey", etc., todos de cinco estrellas): no se pueden comprobar y dos mencionan platillos que no están en su carta ("Cazuela de Mariscos") o no como se nombran ("Pescado a la Veracruzana"; en la carta solo el lomo de negrillo viene a la veracruzana). Parecen textos de ejemplo; no se usan (ver `OPORTUNIDADES.md`).
- **El video** "Nuestra Esencia" (`videopromo.mov`, 86 MB, QuickTime, en reproducción automática): no está en el clon y no se descarga (regla del método); su texto sí se conserva.
- **El fondo de la portada** (`img/background.webp`): un banquete en una terraza frente al mar con máquina de pasta, alcachofas y una botella con la etiqueta deformada; parece generada con IA y no muestra el restaurante.
- La imagen de la portada del menú como botón (`fotomenu.png`): solo se usa para recortar el logo; la carta ya está en la página.
- El enlace "Ver Ubicación" de Plaza Portamar (`maps.app.goo.gl/portamar`, da 404; en el sitio está desactivado).
- Las insignias "Principal", "Matriz" y "Próximamente" en forma de etiqueta (quedan como texto), el indicador de scroll, el botón "volver arriba", las animaciones de entrada, el carrusel y los títulos en mayúsculas.
- La meta `keywords` (en inglés: "seafood, luxury dining") y el script de correos de Cloudflare.

## Qué se conserva al pie de la letra

- "Tradición y Sabor del Mar desde 1981", "Tradición que sabe", "Desde 1981", los párrafos de "Nuestra Historia" y "Nuestra Esencia", "Sugerencias del Chef" y "Los sabores más auténticos del mar de Veracruz", "Descubre la esencia culinaria de Veracruz", "Descargar Menú PDF", "Todos los precios están sujetos a cambios", "Haz Tu Reservación", "Garantiza tu mesa y vive la experiencia Higuera Blanca", "Ambas opciones están disponibles en horario de atención", "Ver Ubicación", "© (año) Higuera Blanca. Todos los derechos reservados." (en tipo oración).
- De la carta: todos los nombres, opciones, medidas y precios, y "*Todo se prepara al momento que usted lo ordena" (sin el asterisco).
- Contacto de las dos sucursales (direcciones, horarios, teléfonos, WhatsApp, correos y enlaces de Google Maps), Facebook e Instagram, y la sucursal próxima de Plaza Portamar.

## Pendiente de confirmar con el cliente

- **Teléfonos distintos en la carta en PDF:** su contraportada dice Sucursal (Boca del Río) "Tel: (229) 927 3129 / Pedidos WhatsApp (229) 476 4100" y Matriz "Tels. (296) 971 4885" y la página www.higuerablancadeboca.com (ese dominio no existe). El sitio y el rediseño usan 229 476 4100 y 296 109 6287. ¿Cuáles son los vigentes? ¿El 229 927 3129 sigue siendo de Boca del Río?
- **WhatsApp de Zempoala:** el 296 109 6287 solo sale como WhatsApp en el `script.js` de su sitio; confirmar que tiene WhatsApp.
- **Horario:** el sitio dice "Reservaciones: Miércoles - Lunes 12:00 PM - 7:30 PM" (Boca) y "7:00 PM" (Zempoala). ¿Es el horario del restaurante o solo el de reservaciones? Que los martes no abren es deducido (dice "miércoles a lunes").
- **Precios:** el PDF se llama internamente "Menu Boca 2025". ¿Zempoala tiene los mismos precios? ¿Siguen vigentes en 2026?
- **Renglones deducidos** (en el PDF dependen del de arriba): mojarra al mojo de ajo / enchipotlada / al ajillo ($295) y empapelada / enchilpayada / habanera ($340), filete empanizado ($260) y hueva de lisa preparada ($295).
- **Asteriscos sin nota** en rebanada de robalo, robalitos y lomo de negrillo: ¿qué querían decir?
- **Palabras que no se explican** porque no se pudo saber qué son: "Dobladas de jaiba a la Malpica", "Camarones Don Tony", "mignon" y "arrecife" (camarones), "Mignonett de robalo al acuyo", "hueva de naca", "Con marisco" ($215, con las cervezas). "Salseo extra" se explicó como "Porción extra de salsa" (deducido).
- **Las explicaciones** de las diez preparaciones y del glosario son generales de la cocina veracruzana: confirmar con su cocina que describen cómo las preparan ellos (sobre todo chilpaya, ajillo, chile-limón y acuyo).
- **Tentáculos teriyaki:** está entre las "Sugerencias del Chef" con foto, pero la carta no lo tiene (tiene tentáculos a la parrilla, al chimichurri o enchipotlados, y atún en salsa teriyaki). ¿Precio y medida?
- **Foto de la entrada:** en sepia, de 1024 px, sin metadatos. ¿Es foto real de su local? ¿De cuál sucursal?
- **Fotos que faltan:** salón, fachada actual de cada sucursal, Zempoala, y platillos típicos que no tienen foto (chilpachole, pámpano, pulpos enchilpayados, cocteles).
- **Testimonios:** si son reseñas reales, ¿de dónde vienen? Mejor usar las de Google con enlace.
- **Plaza Portamar:** ¿sigue en planes? ¿Fecha?

## Dónde está cada cosa

- Textos, contacto de las sucursales, fotos, preparaciones y glosario: `rediseno/src/data/content.ts`
- La carta completa (nombres, opciones, medidas, precios y en qué preparación viene cada renglón): `rediseno/src/data/carta.ts`
- Diseño, "¿Cómo lo quieres?" (`ComoLoQuieres`, `Plato`, `conPreparacion()`), la carta en pestañas (`Carta`, `Renglon`) y los mensajes de WhatsApp (`reservar()`): `rediseno/src/App.tsx`
- Colores, fuentes y el marco de la carta (`.marco`): `rediseno/src/index.css`
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/assets/` (sin tocar); copias `.webp`, el logo recortado y el favicon en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`.
- Capturas para comparar: `referencias/capturas-2026-09-26/` (se generan con `node herramientas/guardar-capturas.mjs 496-higuerablanca` después del QA).
