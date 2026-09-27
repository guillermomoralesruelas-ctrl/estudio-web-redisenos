# Fotoproducto: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.fotoproducto.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/431-fotoproducto/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 431-fotoproducto`) |

## En una línea

Es el mismo estudio, con sus servicios, textos, fotos, videos, tarifas de renta, dirección, teléfono y WhatsApp. Cambia la forma: tres páginas se juntan en una, su trabajo se ve por especialidad y, con "Arma tu día en el estudio", quien quiere rentar ve el set, arma su renta con los precios publicados y reserva por WhatsApp con todo escrito.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| La página sale en blanco (alto 0 px): en `sitio/index.html` todas las `/` de las rutas se cambiaron por `assets/` (bug de `clonar.mjs` anterior al arreglo del 2026-09-26), así que no carga ni estilos ni scripts. La captura "antes" está vacía por eso | Página completa: 5,741 px en escritorio y 9,134 px en celular, 0 desbordes, 1 H1, 0 imágenes rotas, 0 errores, 0 recursos fallidos |
| 2 errores de consola en escritorio y 1 en celular (404 y un túnel fallido a Google Tag Manager) | Sin scripts de terceros |
| Faltan las fotos del equipo (13a…13e), los logos de clientes y las miniaturas de los videos | No se usan (pendiente, abajo) |
| 23 fotos originales de 10.68 MB (más el logo) | 24 copias .webp de 1.51 MB con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, Servicios y Nuestro Estudio se juntan en una página.
- Un solo H1, "Maestros de la fotografía de producto" (su lema). La portada original tiene dos H1 ("Fotoproducto" y "Fotografía de Producto Única").
- Los títulos largos de Servicios se acortan ("Eleva tu Estilo: Fotografía de Moda que Deslumbra" → "Fotografía de moda que deslumbra") y los textos se recortan; las mayúsculas en cada palabra pasan a mayúscula inicial.
- "Experiencia Expert" pasa a "Experiencia experta"; "Sorft Box" a "softbox".
- La galería de la portada (más de 50 fotos en carrusel) se ordena en cinco pestañas con 4 fotos cada una; "Fotografía Industrial / Empresarial" no tiene fotos propias en el clon y queda dentro de "Video corporativo".
- Los 5 videos de su canal de YouTube se enlazan (antes estaban incrustados en carruseles); títulos tomados de YouTube.
- El teléfono lleva `tel:+523335596393` y el correo `mailto:` (en el sitio no se pueden tocar). WhatsApp con mensaje prellenado según lo que se cotiza; el mensaje general es su propio texto sin emojis.
- Google Maps con la dirección que publican (el sitio no enlaza a Maps).

## Qué se agregó (no existía en el original)

- **"Arma tu día en el estudio"**: dibujo del set (rollos de papel, ciclorama, dos luces con softbox, producto al centro y personas), selector medio día / 1 día, horas dentro del rango de cada modalidad, personas de 1 a 12, equipo de iluminación y cicloramas de color de 0 a 3, total aproximado y WhatsApp con la renta escrita. Los precios son los publicados. Decisiones nuestras: el total es la suma simple (renta + luces + cicloramas), las horas no cambian el precio y el máximo de 3 cicloramas es nuestro. **[PENDIENTE confirmar]**.
- Los colores de ciclorama del dibujo (naranja, celeste y rosa, tomados de sus fotos) son de ejemplo; se dice en la página.
- Textos nuestros: "Fotoproducto, estudio de fotografía y video en Zapopan, Jalisco", "Sesión de moda deportiva sobre fondo naranja, de su portafolio.", "Fotografía especializada para cada mercado" (adaptado de su "Enfoque Personalizado para Cada Mercado"), la bajada de "Arma tu día en el estudio", "¿Cuánto tiempo?", "Total aproximado", "Horas continuas. Los colores del dibujo son de ejemplo…", "Incluido en las dos modalidades", "Cuéntanos qué producto quieres fotografiar…", los botones ("Cotizar moda", "Ver la renta", "Cotizar un video", "Reservar por WhatsApp") y los mensajes de WhatsApp.
- JSON-LD `ProfessionalService` (con `additionalType` PhotographyStudio), dirección, teléfono, correo, mapa, redes y las dos tarifas de renta. Open Graph.
- Barra fija en el celular: WhatsApp, Llamar y Cómo llegar.

## Qué se quitó o no se usó

- Google Analytics (UA-172767835-1, Universal Analytics ya no registra datos) y la etiqueta de Google Ads: no se incluyen scripts de terceros.
- Los carruseles con "Previous / Next", los videos incrustados y las fuentes de Google (seis familias).
- La ilustración `b9bbf287-….webp` (estudio dibujado de 512 px, sin metadatos; posible IA).
- La sección "Nuestros Clientes" (sus logos no están en el clon) y las fotos del equipo de "Nosotros en la Lente".
- "Sitio Web Creado por FUSIÓN MX" y la política de privacidad (se puede enlazar después).

## Qué se conserva al pie de la letra

- "Maestros de la Fotografía de Producto", "No tomamos fotografías; las creamos", "En un mundo impulsado por la imagen, nosotros creamos el impacto", "¿Listo para elevar tu marca?".
- Tarifas de renta: 1 día, 6 a 10 horas continuas, $3,000; medio día, 3 a 5 horas continuas, $2,000; iluminación (2 luces con softbox) $1,000 por 8 hrs o $600 por 4 hrs; cicloramas de color $300 c/u; cupo hasta 12 personas, fondo blanco, aire acondicionado, tocador con luces para maquillaje, 2 baños, 4 espacios de estacionamiento y jardín para catering y descanso.
- Dirección, teléfono, WhatsApp, correo, Instagram y Facebook.

## Pendiente de confirmar con el cliente

- Medio día: el sitio dice "3 a 5 hrs continuas" y, junto al precio, "De dos a 4 horas". Se usa 3 a 5.
- La iluminación del día completo dice "por 8 hrs" aunque la renta es de 6 a 10 horas: ¿cuesta más si son 10?
- Qué colores de ciclorama tienen y cuántos se pueden rentar a la vez.
- Si la suma del total es correcta (¿hay IVA?).
- Fotos del estudio y del equipo (no están en el clon) y los logos de clientes, con permiso para mostrarlos.
- Si la cuenta de Instagram correcta es `foto_producto.com1`.
- Qué fotos de marcas conocidas (tequilas, whisky) pueden mostrarse como portafolio.

## Dónde está cada cosa

- Textos, fotos, videos y tarifas: `rediseno/src/data/content.ts`
- Diseño, secciones y "Arma tu día en el estudio": `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/2023/08/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
