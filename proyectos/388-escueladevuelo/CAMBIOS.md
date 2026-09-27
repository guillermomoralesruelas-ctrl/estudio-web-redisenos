# Escuela de Vuelo FLUMEN: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.parapentevalledebravo.com/ (Joomla con el tema YOOtheme "Vision"; reservas y pagos en línea con Planyo en `/reservaciones`) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/388-escueladevuelo/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-27/` (página completa, escritorio y móvil, antes y después) |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 388-escueladevuelo`) |

**Negocio:** FLUMEN Escuela de Vuelo ("Parapente Valle de Bravo"): escuela de parapente y vuelos tándem en El Peñón, Temascaltepec, "a 15 km de Valle de Bravo", Estado de México. Tres vuelos (Aventurero $2,699, Explorador $3,199, Explorador VIP 360 $3,799), paquetes de grupo y Precio amigos; pilotos certificados APPI. WhatsApp +52 722 521 0695 (8:30 a 19:30), info@parapentevalledebravo.com, Instagram @flumenparagliding. Punto de encuentro: Oficina FLUMEN, calle Del Salitre. Tipo para Google: `SportsActivityLocation`. El sitio está en español (con una parte en inglés); el rediseño va en español.

## En una línea

Misma escuela, mismos textos, fotos, precios y contacto; cambia la forma: la noche azul y el rosa de su logo con sus letras (Barlow), "El recorrido de tu vuelo" (eliges el vuelo y se dibuja su recorrido desde El Peñón hasta el aterrizaje, con sus minutos en el aire, lo que incluye, el precio y los botones de reservar y de WhatsApp), los grupos, El Peñón, el equipo, sus fotos 360, lo que hay que saber antes de volar y cómo cancelar en una sola página, su reserva en línea a un toque, WhatsApp con mensaje, barra fija en el celular y datos de negocio para Google.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 21 imágenes rotas en escritorio y 16 en móvil, 28 y 23 recursos con 404 y los mismos errores de consola: faltan los scripts de YOOtheme y Joomla (`uikit.min.js`, `theme.js`, `core.min.js`…) y las versiones `.webp` de `media/yootheme/cache/` | 0 rotas, 0 errores y 0 fallidos: 14 fotos y el logo del clon como copias `.webp` locales, sin scripts externos |
| La portada queda sin fotos (el carrusel de 8 capturas no arranca), las tarjetas de vuelo salen sin foto y "Si buscas calidad…" y "Quiénes somos" dejan grandes huecos en blanco | Portada con foto a todo lo ancho; cada vuelo, paquete y sección con su foto |
| 4 H1 | Un solo H1, "La gran experiencia de tu vida" |
| Los testimonios en imagen y los logos de "Trabajando con" no se ven | Tres testimonios de texto de su página del Explorador; los logos no se usan |
| No están en el clon: las fotos propias de las páginas de cada vuelo (`vuelosparapentevalledebravo-explorer.jpg`, `360/explorer360vip-001.jpg`, `360/group001.jpg`) ni las 13 de "Fotos GOPRO" | Se usaron las fotos de sus tarjetas y sus capturas 360; las demás quedan pendientes (no se descargaron) |
| Fotos pesadas (las capturas 360 pesan de 1 a 1.6 MB) | 15 imágenes a `.webp` (5.18 MB → 0.83 MB) más un favicon con el ala de su logo, con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se tocó |

## Qué se cambió (mismo contenido, otra forma)

- **Portada:** el carrusel pasa a una foto fija (vuelo tándem con El Peñón al fondo), con su H1 "La gran experiencia de tu vida" y "Vuela como un superhéroe." (en su sitio, en mayúsculas). La línea de arriba sale del título de su página Aventurero ("VUELO EN PARAPENTE TRADICIONAL EN EL PEÑÓN, TEMASCALTEPEC a 15km de Valle de Bravo").
- **"Elige tu experiencia":** las cuatro tarjetas iguales pasan a "El recorrido de tu vuelo" (ver "Qué se agregó") con los tres vuelos de El Peñón. Cada ficha usa el texto de la página de ese vuelo, recortado: Aventurero sin "como los ángeles" ni "La amplia zona de aterrizaje te hará sentir super seguro…" (no se hacen afirmaciones de seguridad), Explorador sin "Los mejores pilotos del mundo vienen…", y el VIP arma su texto con sus frases ("Un vuelo de distancia con unas vistas increíbles", "Lo que hace una gran diferencia son las increíbles fotos…", "fotos 360 originales y la versión editada en Photoshop. Somos los únicos que tenemos este servicio en México" y la de las acrobacias). Erratas: "no han sensaciones" → "no hay sensaciones", "muncicipo" → "municipio", "increibles" → "increíbles", "Si le gusta el SIXFLAGS, te va gustar" → "Si te gusta Six Flags, te va a gustar".
- **Precios y duraciones:** los de la página de cada vuelo ($2,699, $3,199 y $3,799; 20 a 25, 30 a 45 y 45 min o más). La portada del sitio pone otros (ver pendientes). "Instructor Certificado por APPI" → "Instructor certificado por APPI".
- **"Precio amigos":** en su portada venía como cuarta tarjeta ("PROMO VUELOS ESTE OCTUBRE"); pasa a la sección de grupos con los precios y términos de su página `/experiencias/precio-amigo` (grupo de 4 a $1,999 y de 6 a $1,899 por persona, 7 a 15 min). Sus términos, recortados ("Flumen Parapentes se reserva el derecho de modificar el horario…" no se usa).
- **"Trae a los amigos y gana un descuento":** sus dos paquetes para 4 con precio anterior tachado y precio actual ($12,796 → $11,796 y $11,796 → $9,796), y sus condiciones de `/experiencias/volar-en-grupo`. "4 AVENTUREROS volando simultáneamente / Volando 2x2" → "4 Aventureros, volando 2x2"; de ese paquete no se pone la duración (ver pendientes).
- **El Peñón:** su texto de la portada y de `/experiencias/faq/el-penon`, recortado ("sin comprometer la seguridad de nadie" no se usa), con su nombre del aterrizaje ("Piano" o "África", de su FAQ).
- **Quiénes somos:** su texto y sus cuatro pilotos con sus credenciales ("PILOTO TANDEM APPI 45184, Asistente Instructor" → "Piloto tándem APPI 45184, asistente instructor"; "RedBull X-Alps19" → "Red Bull X-Alps 19"). Marko va primero porque es el Master Instructor. El enlace "Aprendeavolar" pasa a un botón "Conocer los cursos".
- **Preguntas frecuentes:** seis de su FAQ, recortadas; "Transferencia bancaría" → "bancaria"; "Paypal" → "PayPal".
- **Reservas, cancelaciones y clima:** de `/reservaciones` y de su FAQ, recortados (la tabla de cancelaciones con sus cuatro porcentajes y "solicitándolo por escrito"; el clima en un párrafo). Se enlazan su política completa y su carta responsiva; no se escribió ningún texto legal nuevo.
- **Contacto:** su texto del punto de reunión de la FAQ ("Todos los vuelos tándem… tienen su punto de reunión en la OFICINA DE FLUMEN") con la frase de sus páginas de vuelo "Nuestra transportación te recogerá y te regresará a este punto", y su recomendación de salir una hora antes desde Valle de Bravo. El boletín se cambia por WhatsApp, correo y redes.
- **WhatsApp:** su número (que solo escribe como texto) pasa a enlace `wa.me/527225210695` con mensaje prellenado.
- Colores: la noche azul (`#181937` de su CSS, a `#141a3d`) y el rosa de su logo y su CSS (`#ff2e64`, con texto azul noche; `#c8174a` para enlaces), el gris de su texto y el verde de los pinos. Tipografía: las de su tema, Barlow Semi Condensed y Barlow, de @fontsource y solo latino (sin mayúsculas en los títulos).

## Qué se agregó (no existía en el original)

- **Elemento memorable: "El recorrido de tu vuelo"** (componentes `Vuelos`, `Recorrido`, `Regla` y `Ficha` en `App.tsx`; datos en `vuelos` de `content.ts`; trazos en `trazos` de `App.tsx`). Tres botones (Aventurero, Explorador y Explorador VIP 360, cada uno con "[duración], $[precio]"). Un dibujo de perfil de la sierra con El Peñón, el despegue (con su manga de viento) y el aterrizaje "Piano": al elegir, se dibuja el recorrido de ese vuelo (el Aventurero sube en unas vueltas y baja; el Explorador sube más y pasea por las montañas; el VIP va más alto y lejos y termina con una espiral de acrobacias); los otros dos quedan punteados. Debajo, "Minutos en el aire", una regla de 0 a 60 con la franja de cada vuelo. Al lado, la ficha del vuelo.
  - Textos nuevos: "Los tres vuelos despegan de El Peñón. Lo que cambia es cuánto tiempo pasas en el aire, hasta dónde te lleva el piloto y qué fotos te llevas. Elige uno y mira su recorrido."; "Minutos en el aire"; "20 a 25", "30 a 45", "45 o más"; "Dibujo simbólico y sin escala: la ruta real la decide el piloto según el viento y las térmicas del día."; etiquetas del dibujo "El Peñón", "Despegue" y "Aterrizaje «Piano»"; en la ficha "Tiempo en el aire", "Por persona", "Incluye", "Reservar este vuelo" (su reserva en línea), "Preguntar por WhatsApp" y "Ver su página"; los encabezados de cada vuelo son sus textos ("Descubre cómo es andar por los cielos", "Vamos por más kilómetros en el aire", "El mejor souvenir de tu viaje"); "Precios por persona publicados en la página de cada vuelo; el precio final lo da su reserva en línea."; enlace "lista de profesionales APPI" (su enlace de verificación); `aria-label` "Elige tu vuelo" y "Dibujo del recorrido del vuelo [nombre], del despegue en El Peñón al aterrizaje".
  - Mensaje de WhatsApp: "Hola, me interesa el vuelo [nombre] ([duración], $[precio]). ¿Tienen lugar para el día ".
- **Portada:** datos "$2,699 / el vuelo Aventurero, de 20 a 25 minutos", "Fotos y video / GoPro o Insta360 en los tres vuelos", "APPI / pilotos certificados, con licencia que puedes verificar", "Transporte / local desde el punto de encuentro"; botones "Reserva tu vuelo" (su texto) y "Escríbenos por WhatsApp".
- **Grupos:** subtítulos "Volar en grupo" (su menú) y "por el grupo"/"por persona"; botón "Pedir disponibilidad para el grupo" con el mensaje "Hola, somos un grupo de 4 y nos gustaría volar juntos con FLUMEN. ¿Tienen disponibilidad para el día "; "Vuelo de 7 a 15 min, con transporte local."; botones "Reservar" y "Ver sus términos"; la línea del descuento entre semana (de `/experiencias/promo`: "Vuelos entre semana tienen descuento de MX$50.00 por persona"; días feriados, puentes y periodos vacacionales excluidos) y "Ver promociones".
- **El Peñón:** pie de foto "El Peñón, el monolito que acompaña cada vuelo, sobre las nubes." y "Leer más sobre El Peñón".
- **Galería:** título "Así se ve desde arriba" y "Capturas de los videos 360 de sus pasajeros, sobre Temascaltepec y Valle de Bravo."; "Testimonios publicados en su sitio."
- **Antes de volar:** títulos "Antes de volar", "Cómo se reserva" (resumen de los 14 pasos de su ayuda de `/reservaciones`), "Cancelaciones" con "Cargo sobre el precio total, solicitándolo por escrito.", "El clima"; enlaces "Todas sus preguntas frecuentes", "Política de cancelaciones" y "Carta responsiva".
- **Contacto:** título "¿Listo para volar?"; etiquetas "Punto de encuentro", "WhatsApp" (con "De 8:30 a 19:30." y su aviso "A veces estamos volando y no contestamos en el momento."), "Correo" (asunto "Vuelo en parapente"), "Síguenos" (su texto); "Cómo llegar en Google Maps" (su enlace "Oficina FLUMEN" de la FAQ).
- Mensaje general de WhatsApp: "Hola, me gustaría reservar un vuelo en parapente con FLUMEN. ¿Qué fechas tienen disponibles?".
- Navegación: "Vuelos", "En grupo", "El Peñón", "Antes de volar", "Contacto"; barra del celular "Reservar" y botones de WhatsApp, Llamar (a su número de WhatsApp) y Cómo llegar con `aria-label`; salto de teclado "Saltar a los vuelos"; "Abrir navegación".
- Pie: su logo, "FLUMEN Escuela de Vuelo", enlaces a su política de cancelaciones y aviso de privacidad y "© [año] FLUMEN Escuela de Vuelo".
- Title "Vuelos en parapente en Valle de Bravo | FLUMEN Escuela de Vuelo"; description nueva ("Vuelos en parapente tándem en El Peñón, Temascaltepec, a 15 km de Valle de Bravo: Aventurero, Explorador y VIP 360, con fotos y pilotos APPI. Reserva en línea o por WhatsApp."); Open Graph en español con la foto de portada ("La gran experiencia de tu vida: vuelos tándem desde El Peñón, Temascaltepec, de 20 a más de 45 minutos, con fotos y video incluidos."); favicon con el ala de su logo (`icono.png`); `lang="es-MX"`.
- JSON-LD `SportsActivityLocation` con datos reales: nombre, descripción, sitio, WhatsApp, correo, dos fotos y el logo (sus URLs), calle Del Salitre y Estado de México, coordenadas (de su enlace de Google Maps "FLUMEN - Vuelos Tándem" de la FAQ), mapa, zonas (Valle de Bravo y Temascaltepec), rango de precio, formas de pago, redes, acción de reserva (su `/reservaciones`) y los tres vuelos como ofertas con precio. El sitio solo tiene un "Article" llamado "Home".
- Accesibilidad: un solo H1, contraste AA (texto `#454b5c` sobre niebla 7.9:1, azul noche sobre rosa 4.7:1, blanco sobre pino 7.6:1, rosa hondo sobre claro 5.2:1), botones con `aria-pressed`, ficha con `aria-live`, foco visible y `prefers-reduced-motion` (sin trazo animado, transiciones ni desplazamiento suave).

## Qué se quitó o no se usó

- El carrusel de la portada y el de "Si buscas calidad, es con nosotros", los títulos gigantes en mayúsculas, el boletín, "Bikepacking Essentials" (texto de ejemplo del tema), los logos de "Trabajando con" (APPI, Club El Peñón, Temascaltepec) y "Google Reviews", y los scripts de la plantilla.
- Las 14 capturas de reseñas de Google (`images/testimonios/`): son imágenes de texto; en su lugar van tres testimonios de texto de su página.
- Los testimonios de Ana Luisa Carmona ("te sientes increíblemente segura") y Santiago de la Peña (un niño): no se usan para no hacer afirmaciones de seguridad ni de edad que el sitio no aclara.
- "La amplia zona de aterrizaje te hará sentir super seguro", "sin comprometer la seguridad de nadie" y "SITIO DE VUELO ÚNICO A NIVEL MUNDIAL".
- Los precios "Desde" de la portada, los paquetes de Promo (Parejas exploradoras, 6 amigos en rondas, VIP para 2 o 4, etc.) y la frase "Vuelos a partir de dos personas tienen descuento de MX$2500.00 por persona" (ver `OPORTUNIDADES.md`).
- Los vuelos en La Torre con ICAROS (solo se mencionan en su FAQ), la versión en inglés, "360 videos" y la galería GoPro (no está en el clon).
- El RFC y el nombre completo del responsable que aparecen en su carta responsiva.
- Dos capturas 360 del clon (`VID_20260418_131524…` y `VID_20230318_180631…`), `vuelosparapentevalledebravo-explorerVIP360.jpg` y `slider01`/`slider02`/`0004a` (fotos del carrusel).

## Qué se conserva al pie de la letra

- Sus textos de portada, de cada vuelo (recortados), de Volar en grupo, de Precio amigos, de El Peñón, de Quiénes somos y de su FAQ.
- Precios de la página de cada vuelo ($2,699, $3,199, $3,799), de los paquetes de grupo ($11,796 y $9,796, antes $12,796 y $11,796) y del Precio amigos ($1,999 y $1,899 por persona), y lo que incluye cada uno.
- Los cuatro pilotos y sus credenciales APPI; su enlace para verificar licencias.
- Contacto: WhatsApp 722 521 0695 y su horario, info@parapentevalledebravo.com, Instagram, Facebook y YouTube, punto de encuentro y su enlace de Maps.
- Su política de cancelaciones (porcentajes) y de clima, con enlaces a las completas.
- Su logo y sus fotos (capturas 360 de sus videos, El Peñón y las fotos de sus tarjetas).

## Pendiente de confirmar con el cliente

- **Precios:** la portada del sitio dice "Desde" $2,499, $2,899 y $3,499; las páginas de cada vuelo, $2,699, $3,199 y $3,799. El rediseño usa los de cada página. Promo tiene precios "E.S." (entre semana) $50 más baratos.
- **Duración del VIP:** "40-60 min" en la portada, "45+ min" en su página y "35-50 min" en Promo. El rediseño usa "45 min o más".
- **4 Aventureros 2x2:** la portada dice 30-45 min "en termales y de distancia" (como el Explorador) y Promo dice 20-25 min; no se puso duración.
- **Punto de encuentro:** las páginas de vuelo dicen "el café-contenedor SkyCafé" y la FAQ dice "la Oficina de FLUMEN, en la calle Del Salitre". El rediseño usa la oficina (con su enlace de Maps). ¿Son el mismo lugar? Falta el número, la colonia y el municipio de la dirección.
- **Coordenadas** (19.06394, -100.0682482): tomadas de su enlace de Google Maps "FLUMEN - Vuelos Tándem"; confirmar que es el punto de encuentro.
- **Llamadas:** el botón "Llamar" de la barra del celular usa su número de WhatsApp, que es el único que publica. ¿Recibe llamadas?
- **Requisitos:** su carta responsiva habla de "requisitos físicos y de peso establecidos" y la reserva pide anotar niños y pesos; el sitio no dice cuáles son. No se publicó ninguno.
- **Precio amigos:** ¿se vuela en El Peñón? En el dibujo solo están los tres vuelos que su sitio sitúa en El Peñón.
- **"Red Bull X-Alps 19":** así lo escribe su sitio ("RedBull X-Alps19"); confirmar cómo quieren mostrarlo.
- **Testimonios:** son los publicados en su página del Explorador; confirmar que pueden seguir usándose.
- **Fotos que faltan:** las de la página de cada vuelo, las 13 de "Fotos GOPRO", y fotos de la oficina, el despegue y el aterrizaje. Existen en su sitio (las primeras) pero no se descargaron.
- **Versión en inglés y cursos:** el sitio tiene una parte en inglés y los cursos están en aprendeavolar.com.mx; el rediseño solo enlaza los cursos.
- Los textos de "El recorrido de tu vuelo", el dibujo (sierra, El Peñón, trazos) y la regla de minutos son nuestros; el dibujo es simbólico, sin escala ni ruta real.

## Dónde está cada cosa

- Textos, contacto, vuelos, grupos, El Peñón, equipo, galería, testimonios, preguntas y reservas: `rediseno/src/data/content.ts`
- Diseño y secciones, "El recorrido de tu vuelo" (`Vuelos`, `Recorrido`, `Regla`, `Ficha`, `trazos`): `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y `@font-face`)
- Title, description, Open Graph, favicon y JSON-LD: `rediseno/index.html`
- Imágenes: originales en el clon, `sitio/assets/images/` y `sitio/assets/media/yootheme/cache/` (sin tocar); copias `.webp` y el favicon en `assets/web/`, que es el `publicDir` de `rediseno/vite.config.ts`. `assets/web/` no va en git: se regenera con `node fotos-web.mjs` dentro de `rediseno/`. Dos copias que al final no se usaron se movieron a `_papelera/388-escueladevuelo/`.
- Capturas para comparar: `referencias/capturas-2026-09-27/` (`node herramientas/guardar-capturas.mjs 388-escueladevuelo` después del QA).
- Datos tomados del sitio real el 2026-09-27 (no están en `crudo.json`), con curl a través de Jina Reader porque el sitio bloquea curl directo (406 de Mod_Security): el WhatsApp, la ayuda de reserva y el aviso de pago previo (`/reservaciones`); punto de encuentro, su enlace de Maps, preguntas, correo, horario del WhatsApp, cancelaciones y clima (`/experiencias/faq`); Precio amigos (`/experiencias/precio-amigo`); el descuento entre semana (`/experiencias/promo`); y el nombre del aterrizaje. `/experiencias/faq/el-penon`, la carta responsiva, la política de cancelaciones y el aviso de privacidad se leyeron para comprobar y se enlazan. Las descargas quedaron fuera del estudio (carpeta temporal del sistema).
