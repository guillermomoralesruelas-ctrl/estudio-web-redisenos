# Cuadro x Cuadro: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | http://videofilmaciones.mx/ (marca cuadroxcuadro.mx) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/276-cuadroxcuadro/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 276-cuadroxcuadro`) |

## En una línea

Es el mismo estudio de foto y video, con sus fotos, sus paquetes de boda y de XV años, sus preguntas frecuentes, sus formas de pago y sus opiniones de bodas.com.mx. Cambia la forma: una página ligera con estética de cine y, con "Tu día, cuadro por cuadro", una cinta de horas donde cada paquete muestra qué momentos del día cubre.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 1 imagen rota y 20 recursos fallidos; 128 px de desborde horizontal en escritorio | 0 imágenes rotas, 0 errores, 0 recursos fallidos, 0 desbordes, 1 H1; 6,179 px en escritorio y 8,779 px en celular |
| Sus 56 fotos pesan 43 MB (de 0.4 a 2 MB cada una) | 22 fotos .webp de 1.5 MB en total con `rediseno/fotos-web.mjs` |
| Videos de Vimeo y un widget de bodas.com.mx cargados de fuera | Sin scripts de terceros: los videos se enlazan a su canal de YouTube y las opiniones a bodas.com.mx |

## Qué se cambió (mismo contenido, otra forma)

- Los paquetes, que en su sitio son dos páginas de listas en mayúsculas, quedan en un solo selector (boda o XV años, y el paquete) con lo que incluye en fotografía, impresos y video.
- El teléfono se escribe `55 2123 7334` y se marca como `+52 55 2123 7334`: su sitio lo marca `(01) 55 21237334`, y el prefijo 01 ya no existe.
- En los paquetes de boda, su sitio dice "felicitando a la quinceañera", "Sesión Pos-XV" y "Video clip sesión pos-xv" (texto copiado de la página de XV años). Aquí se escribe "Entrevistas a 10 amigos y familiares" y "sesión posterior". **[PENDIENTE confirmar]** qué es la sesión posterior en boda.
- "WEEDING DAY", "Enagment", "Fotobokk", "equpo" y otras erratas se corrigieron o se quitaron.
- "100 FOTOGRAFIAS TAMAÑO 6X" (Básico) queda como "100 fotos impresas", porque falta la medida.
- Los paquetes Básico y Básico Book solo existen en la página de bodas; en XV años se muestran Premium, Top y VIP.
- De sus tres opiniones visibles de bodas.com.mx, dos se cortan en su widget ("[Leer más]"); aquí se usan hasta la última frase completa.

## Qué se agregó (no existía en el original)

- **"Tu día, cuadro por cuadro"**: eliges boda o XV años y un paquete; una cinta de 11 cuadros se llena con sus horas de estancia (6, 8, 10 u 11, de sus páginas de paquetes), se encienden los momentos que cubre (maquillaje, ceremonia y salón, según dice cada paquete) y las sesiones extra (casual, trash the dress, posterior o pos-XV, drone), cada uno con una foto suya. "+ hora extra" agrega hasta 3 cuadros a $1,000 cada uno (su precio en preguntas frecuentes). El WhatsApp lleva el paquete, las horas extra y deja lugar para la fecha. Los textos de cada momento ("El arreglo, el vestido y los nervios", etc.) son nuestros.
- Precio: solo se muestra el del Premium de boda ($20,000, de su página de inicio). Como esa portada dice "incluye tomas con drone" y la lista del Premium no lo menciona, se muestra una nota para confirmarlo.
- Textos nuestros: el H1, "Tu día, cuadro por cuadro" y su explicación, "Su trabajo", "Lo que dicen las parejas", "Cuéntales de tu evento" y su texto, los botones y los mensajes de WhatsApp. El título "De una producción común a una cinematográfica" sale de su frase "Lo que nos diferencia de una producción común a una cinematográfica".
- Barra fija en el celular: WhatsApp, Llamar y Paquetes.
- Enlace a Google Maps: una búsqueda de "Cuadro x Cuadro fotografía y video Ciudad de México", porque su sitio no publica dirección ni tiene mapa (no hay iframe que embeber).
- JSON-LD `ProfessionalService` con ciudad, teléfono, correo, zona de servicio y redes. Open Graph con la foto del velo en la montaña. Ícono con la "x" dorada (no hay logo en el clon).

## Qué se quitó o no se usó

- El logo: su PNG (`full_0VyesKhF.png`) no está en el clon y no se descargó; el nombre va con letra.
- El bloque de Instagram vacío ("¡Aún no hay fotos ni videos! Conectar la cuenta…").
- El formulario "Solicitar presupuesto" (el WhatsApp lo sustituye) y el enlace de Skype.
- Los videos de Vimeo (20 en su página de videos, 6 en la de inicio): no se incrustan (serían scripts de terceros); el botón lleva a su canal de YouTube.
- La foto `full_NbR0yUwQ.jpg` no se usa (tiene una cadena "Dall" en sus metadatos; probablemente es casualidad, pero no hace falta).
- Menús duplicados ("BODAS", "XV AÑOS" repetidos, "Paq", "Más", "CUADROXCUADRO 2") y "© 2017".

## Qué se conserva al pie de la letra

- "Las flores se marchitan, el vino se acaba…" (con puntuación corregida), "22 años de experiencia", "Wedding photo & video".
- Horas, momentos, impresos y video de cada paquete; hora extra de $1,000; las dos formas de pago; sus preguntas frecuentes; su equipo (Ronin-S, DSLR, full frame, DJI Mavic); su lista de servicios de foto y video.
- La calificación 4.8 de 5 con 37 opiniones y las tres opiniones de Eleazar L., María F. y Giovanna P.
- Teléfono y WhatsApp 55 2123 7334, correo saulrosas@cuadroxcuadro.mx, Facebook y YouTube.

## Pendiente de confirmar con el cliente

- Precios de los paquetes que no publica (todos menos el Premium de boda) y si el Premium de $20,000 incluye drone.
- Qué es la "sesión posterior" de los paquetes VIP de boda (su sitio la llama "Pos-XV").
- La medida de las 100 fotos del Básico.
- Si los "22 años" siguen vigentes (el pie de su sitio dice © 2017).
- Su logo en buena calidad y su dirección o estudio, si quieren un mapa.
- Si 4.8 y 37 opiniones siguen siendo sus cifras en bodas.com.mx.

## Dónde está cada cosa

- Textos, paquetes, preguntas, opiniones y fotos: `rediseno/src/data/content.ts`
- Diseño, secciones y "Tu día, cuadro por cuadro": `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/uploads/s/7/z/a/7zakljd088o1/img/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
