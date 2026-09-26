# Prompt para Lovable — 10 Experiences Tour (v2)

**Cómo usarlo:** pega el **PROMPT PRINCIPAL** completo en Lovable. Cuando termine de generar, manda los **prompts de refinamiento** uno por uno, en orden. Lovable da mejores resultados si se construye primero la base y después se pule por partes.

---

## PROMPT PRINCIPAL

```
ROL
Actúa como un diseñador web senior especializado en hospitalidad de lujo y restaurantes con estrella Michelin, y como desarrollador frontend experto en React, Tailwind y Framer Motion.

PROYECTO
Crea la nueva landing page en español de "10 Experiences Tour" (sitio actual: https://10experiencestour.com/es/).
Es una experiencia gastronómica y cultural de lujo en Cozumel, Quintana Roo, México: una cena narrada de 10 tiempos, con 10 maridajes de bebidas 100% mexicanas, que recorre 10 regiones de México y se acompaña con una producción audiovisual en pantalla. Se realiza en una sede privada y es solo con reservación.
Público: turistas de alto poder adquisitivo de EE. UU., Canadá y Reino Unido, cruceristas y parejas que buscan una experiencia auténtica y memorable.
Prueba social: más de 1600 reseñas de 5 estrellas en TripAdvisor, Google, OpenTable, Yelp y Airbnb.

OBJETIVO
1. Que el visitante sienta en los primeros 3 segundos que es una experiencia premium, cinematográfica y profundamente mexicana.
2. Llevarlo a reservar: debe haber un botón de reserva siempre a la vista.
3. Mantener la identidad oscura y dorada de la marca, pero con mucho más movimiento, ritmo y storytelling.

CONCEPTO CREATIVO: "Un pasaporte por México"
Cada tiempo es un destino. La página se recorre como un pasaporte: sellos postales, sellos de "admitido", postales ilustradas de cada estado y numeración de destinos (01, 02, 03…). Aplícalo con elegancia, en detalles y microinteracciones, nunca de forma infantil.

SISTEMA DE DISEÑO
Colores (define estos tokens en tailwind.config):
- espresso #211915 (fondo principal)
- ink #0F0B09 (fondo profundo y secciones alternas)
- gold #A37932 (acentos, precios, botones)
- champagne #CBB87A (texto destacado sobre oscuro y líneas de 1px)
- sand #D2BA90 (secciones claras de respiro)
- cream #EFE6D2 (texto de párrafo sobre oscuro)
- terracotta #9E3B22 y agave #4F6B4A: solo para sellos y badges pequeños, con mucha moderación
Tipografía (Google Fonts):
- Títulos: Cormorant Garamond 500/600; usa itálica para frases poéticas.
- Texto y UI: Manrope 400/500/600.
- Eyebrows: Manrope en mayúsculas, 12px, letter-spacing 0.2em, color champagne.
Escala: H1 de 56–88px (con clamp), H2 de 40–56px, cuerpo de 17px con line-height 1.7.
Estilo: lujo a la luz de las velas. Mucho espacio negativo (secciones de 120px en desktop y 72px en móvil), líneas doradas finas, grano/ruido sutil sobre los fondos oscuros, radios de 6px, sin sombras duras y fotos a sangre como protagonistas.
Botones:
- Primario: fondo gold, texto ink y hover a champagne.
- Secundario: borde champagne de 1px, texto cream y hover con relleno gold/10.

ANIMACIÓN (Framer Motion)
- Hero: zoom lento de la imagen de 1.0 a 1.08 en 20s; el H1 aparece palabra por palabra.
- Todas las secciones: reveal al entrar en pantalla (opacity 0→1, y 24→0, 0.6s, escalonado 0.08s).
- Parallax suave en los bloques del Chef, de Lorena y de los fundadores.
- Contadores animados: +1600, 10, 10, 2.5 h y 5★.
- Marquee infinito: "Relato • Maridajes • Cultura • Conexión • Tradición • México".
- Tarjetas: en hover, la imagen escala 1.05 y aparece un borde gold.
- Sellos postales: entran con una ligera rotación (-8° a 0°) y un rebote suave.
- Respeta prefers-reduced-motion.

ESTRUCTURA (en este orden exacto)

1. HEADER FIJO
Transparente sobre el hero; al hacer scroll más allá de 80px cambia a espresso/90 con backdrop-blur. Logo a la izquierda. Menú: Inicio, El Viaje, Experiencias, Galería, Historias, Preguntas. Selector ES | EN. Botón primario "Reservar". En móvil, menú hamburguesa a pantalla completa con links grandes en Cormorant.

2. HERO (100vh, imagen hero)
Degradado de ink/80 abajo a transparente arriba.
Eyebrow: "COZUMEL · MÉXICO"
H1: "México, vivido a través de los sentidos"
Subtítulo: "Un viaje de 10 tiempos por la herencia culinaria y cultural de México."
CTAs: "Reserva tu experiencia" (primario) y "Descubre el viaje" (secundario, ancla a #viaje).
Badge: ★★★★★ "+1600 reseñas · TripAdvisor · Google · OpenTable".
Indicador animado de scroll abajo al centro.

3. BARRA DE CONFIANZA
Logos de TripAdvisor, Google, Yelp, OpenTable y Airbnb en champagne monocromo, más el marquee de palabras clave.

4. CÓMO FUNCIONA (id="como-funciona")
Dos columnas: el texto a la izquierda y la imagen howItWorks a la derecha, con marco dorado desplazado.
Texto: "Disfrute de un viaje culinario de 2.5 horas por México con 10 platos elaborados y maridajes, que combinan sabores, tradiciones e historias."
Debajo van 4 stat-cards con íconos de línea fina: "2.5 horas" · "10 tiempos + 10 maridajes" · "Sede privada, exclusiva en Cozumel" · "100% bebidas mexicanas".
Añade acordeones: "¿Por qué vivir nuestra experiencia de 10 tiempos?" y "¿Qué vas a probar?".

5. EL VIAJE: PASAPORTE POR MÉXICO (id="viaje") ← sección estrella
Fondo: imagen journeyHero (el mapa de México con puntos de luz) con un overlay oscuro.
Título: "Completa tu visita a México". Subtítulo: "Diez estados, diez historias y una nueva forma de entender México."
Carrusel horizontal con scroll-snap y arrastre en desktop, con 13 postales. Cada tarjeta lleva: fondo sand, la ilustración del estado, su sello postal en la esquina superior derecha, el sello "admitido" superpuesto y rotado, el nombre en Cormorant, el ícono en itálica y la descripción.
Contador "Destino 03 / 13", barra de progreso gold y flechas.

6. EXPERIENCIAS / RESERVA (id="reservar")
Título: "Reserva tu Experiencia". Subtítulo: "Cupo limitado. Solo con reservación."
Dos tarjetas grandes lado a lado (apiladas en móvil), con la imagen arriba y el contenido abajo:
A) "La Experiencia Original" (imagen exp1), con badge "Más popular"
   - Lunes a sábado · 2 h 30 min
   - 10 tiempos · 10 maridajes · 10 regiones de México
   - "México narrado, plato a plato"
   - $195 USD por persona
   - Chips de horario: 1:30 PM y 6:30 PM
B) "La Experiencia del Taco" (imagen exp2)
   - Lunes a sábado · 1 h 45 min
   - 7 platillos · 7 maridajes · un recorrido por los tacos de México
   - "Olvídate de todo lo que crees saber sobre los tacos."
   - $148 USD por persona
   - Chips de horario: 9:00 AM y 11:00 AM
Al hacer clic en un chip, se abre el modal de reserva con la experiencia y el horario ya cargados.

7. GALERÍA (id="galeria")
Grid bento/masonry con pestañas animadas: "El momento", "Dónde sucede", "Los creadores", "Los detalles" y "México reimaginado". Muestra 8 fotos por pestaña, con lightbox y navegación con teclado.

8. RESEÑAS (id="historias")
Columna izquierda: título "Gracias", subtítulo "A los viajeros que han compartido su experiencia.", el contador gigante "+1600" en gold y "reseñas en las plataformas en las que confías", más el badge "EXCELENTE · Muy bien valorado por huéspedes de todo el mundo".
Columna derecha: carrusel automático (se pausa en hover) con 4 testimonios, cada uno con ★★★★★, la cita, el nombre, la ciudad y el logo de la plataforma:
- Jessica M., New York (TripAdvisor): "Una experiencia inolvidable de principio a fin. La pasión del Chef Alejandro y las historias detrás de cada platillo la convirtieron en mucho más que una cena. Sin duda, lo mejor de nuestro viaje a Cozumel."
- Michael R., Toronto (Google): "La experiencia culinaria más íntima y auténtica que hemos vivido. Cada detalle fue perfecto: los sabores, los maridajes, el relato. ¡Totalmente recomendable!"
- Sophie L., Londres (OpenTable): "Una mezcla perfecta entre la herencia mexicana y la elegancia moderna. El lugar, la comida, la gente: todo fue excepcional. ¡Volveremos!"
- David T., Los Ángeles (Airbnb): "Desde que llegamos nos sentimos parte de la familia. El Chef Alejandro y su equipo hacen magia. Una de las mejores experiencias que hemos tenido."

9. LAS PERSONAS DETRÁS
Tres bloques a pantalla completa con parallax y texto sobre degradado lateral:
- "El Chef" — Chef Alejandro Torres (imagen chef): toma la cocina de su abuela y la reinventa sin perderle el alma; una cocina mexicana refinada e intencional.
- "El Alma" — Lorena Sanromán (imagen lorena): "Es el alma detrás de cada detalle, dándole vida a la experiencia con un sentido de perfección poco común. Para ella, cada sabor del chef cuenta una historia, convirtiendo cada región de México en un viaje único por el país que representa con orgullo."
- "Los Fundadores" (imagen founders): México merece ser reconocido por su riqueza, su tradición, su música, su comida y su historia.

10. NUESTROS NARRADORES
Texto a la izquierda: "Detrás de cada experiencia hay un equipo entregado a compartir los sabores, las tradiciones y el espíritu de México con calidez y pasión." Botón "Conoce sus historias".
A la derecha, un grid de 4x2 retratos: en escala de grises, pasan a color en hover y el nombre y rol se deslizan desde abajo. Adrián (Narrador), Cristina (Mesera), Gerardo (Narrador), María (Ventas), Moisés (Mesero), Sergio (Sous-Chef), Delta (Sous-Chef) y Javier (Mesero). En móvil, carrusel.

11. PREGUNTAS FRECUENTES (id="preguntas")
Acordeón con: ¿Cuánto dura la experiencia? · ¿Hay código de vestimenta? · ¿Pueden adaptarse a alergias o dietas especiales? · ¿Pueden asistir menores de edad? · ¿Cómo llego a la sede? · ¿Cuál es la política de cancelación? Con respuestas placeholder editables.

12. CTA FINAL
Banda a lo ancho con la imagen de la galería "the-moment-1" y overlay oscuro.
H2: "Tu lugar en la mesa te espera". Botones: "Reservar ahora" y "Escríbenos por WhatsApp".

13. FOOTER (fondo ink)
Columna 1: logo del footer, hello@10experiences.com.mx, +52 987-118-9999.
Columna 2 "Visítanos": "Cozumel, Quintana Roo, México." y tres botones "Cómo llegar" (no muestres las URLs):
- Experiencia Original 6:30 PM → https://maps.app.goo.gl/6Lbsoi8VSKucavTW9
- Experiencia Original 1:30 PM → https://maps.app.goo.gl/khsoJvQwMA1VeLD26
- Experiencia del Taco 9:00 y 11:00 AM → https://maps.app.goo.gl/khsoJvQwMA1VeLD26
Columna 3: Términos de Uso, Políticas de privacidad y Políticas de cookies.
Redes (íconos de línea): facebook.com/10ExperiencesTour, instagram.com/10experiencestour, youtube.com/@10experiencestour, x.com/10experiencesgm, tiktok.com/@10experiencestour y mx.pinterest.com/10experiencestour.
Barra inferior: "© 2026 10 Experiences. Todos los derechos reservados." e íconos de Visa, Mastercard y Amex.

MODAL DE RESERVA (componente reutilizable)
Campos:
- Experiencia (Original / Taco)
- Invitados (stepper de 1 a 16)
- Fecha (calendario; domingos y fechas pasadas deshabilitados)
- Horario (filtrado: Original → 1:30 PM / 6:30 PM; Taco → 9:00 AM / 11:00 AM)
- Nombre, teléfono con lada, email y mensaje (opcional)
Muestra en vivo el "Total estimado" (precio × invitados, en USD).
Validación con react-hook-form + zod, un estado de éxito con un sello animado de "RESERVA SOLICITADA" y un botón alternativo "Confirmar por WhatsApp" que abra https://wa.me/529871189999 con el resumen de la reserva prellenado.

CONVERSIÓN MÓVIL
- Barra fija inferior (solo en móvil) con "Reservar" (primario, 70% del ancho) y un ícono de WhatsApp.
- En desktop, un solo botón flotante de WhatsApp abajo a la derecha. No dupliques botones flotantes.
- Áreas táctiles de 44px o más y nada de scroll horizontal accidental.

TÉCNICO / SEO / ACCESIBILIDAD
- React + Vite + TypeScript + Tailwind + Framer Motion + shadcn/ui. Un componente por sección en /components/sections.
- Todo el contenido (textos, precios, horarios, equipo, estados, testimonios) en un solo archivo /src/data/content.ts para poder editarlo fácilmente.
- Un solo H1 y jerarquía correcta de H2/H3.
- alt descriptivo en español en TODAS las imágenes.
- loading="lazy" en todas las imágenes excepto el logo y el hero.
- Title: "10 Experiences Tour | Experiencia gastronómica de 10 tiempos en Cozumel". Meta description de unos 155 caracteres, Open Graph y JSON-LD schema.org Restaurant con aggregateRating (5, 1600) y offers con los dos precios.
- Contraste AA, foco visible en dorado y navegación completa con teclado.
- Smooth scroll a las anclas, compensando la altura del header.

IMÁGENES
Usa exactamente estas URLs (son las oficiales del cliente). Si alguna no carga, deja un placeholder con la misma proporción y el nombre del archivo.
BASE = https://10experiencestour.com/wp-content/uploads/

logoHeader  = BASE + 2024/08/logo-header-10experiences-june-2026.png
logoFooter  = BASE + 2026/06/logo-10experiences-june-2026.png
hero        = BASE + 2026/06/mexico-told-through-the-senses-10experiences-june-2026.jpg
howItWorks  = BASE + 2026/06/how-it-works-10experiences-june-2026.jpg
exp1        = BASE + 2026/06/exp1-june-2026.jpg
exp2        = BASE + 2026/06/exp2-june-2026.jpg
chef        = BASE + 2026/06/the-chef-alejandro-torres-10experiences-june-2026.jpg
lorena      = BASE + 2026/06/lorena-sanroman-10experiences-june-2026.jpg
founders    = BASE + 2026/06/the-founders-10experiences-june-2026.jpg
journeyHero = BASE + 2026/07/the-journey-10experiences-july-2026.webp
journeyOriginal = BASE + 2026/07/the-journey-original-10experiences-july-2026.webp
journeyTaco = BASE + 2026/07/the-journey-taco-10experiences-july_2026.webp
mayanCalendar = BASE + 2026/07/the-journey-mayan-calendar-10experiences-july-2026.png
leaves1     = BASE + 2026/07/the-journey-leaves-1-10experiences-july-2026.png
leaves2     = BASE + 2026/07/the-journey-leaves-2-10experiences-july-2026.png

Equipo:
BASE + 2026/06/adrian-guia-color.jpg
BASE + 2026/06/cristina-mesera-color-julio-2026.jpg
BASE + 2026/06/gerardo-guia-color-julio-2026.jpg
BASE + 2026/06/maria-color.jpg
BASE + 2026/06/moises-mesero-color-julio-2026.jpg
BASE + 2026/06/sergio-sous-chef-color-julio-2026.jpg
BASE + 2026/06/delta-sous-chef-color.jpg
BASE + 2026/06/javier-mesero-color.jpg

Galería (N = 1 a 8):
El momento         → BASE + 2026/06/the-moment-N-10experiences-june-2026.webp
Dónde sucede       → BASE + 2026/06/where-it-happens-N-10experiences-june-2026.webp
Los creadores      → BASE + 2026/06/the-makers-N-10experiences-june-2026.webp
Los detalles       → BASE + 2026/06/the-details-N-10experiences-june-2026.webp
México reimaginado → BASE + 2026/06/mexico-reimagined-N-10experiences-june-2026.webp

Postales de El Viaje. Por cada estado hay 3 archivos:
ilustración  = BASE + 2026/07/the-journey-{slug}-10experiences-july-2026.png
sello postal = BASE + 2026/07/the-journey-{slug}-postage-stamp-10experiences-july-2026.png
sello admitido = BASE + 2026/07/the-journey-admitted-stamp-{slug}-10experiences-july-2026.png
Slugs, con nombre | ícono | descripción:
veracruz | Veracruz | "Voladores de Papantla" | Ritual totonaca que simboliza la unión entre el cielo y la tierra.
cdmx | CDMX | "Ángel de la Independencia" | Monumento que celebra la Independencia de México.
cozumel | Cozumel | "El Cielo" | Aguas cristalinas famosas por sus estrellas de mar.
nuevo-leon | Nuevo León | "Cerro de la Silla" | El ícono natural más representativo de Monterrey.
san-luis-potosi | San Luis Potosí | "Huasteca Potosina" | Cascadas, ríos turquesa y naturaleza extraordinaria.
oaxaca | Oaxaca | "Alebrijes" | Arte popular lleno de color y tradición.
puebla | Puebla | "Cholula" | La pirámide con la base más grande del mundo.
yucatan | Yucatán | "Chichén Itzá" | Una de las Nuevas Siete Maravillas del Mundo.
state-of-mexico | Estado de México | "Cosmovitral" | Jardín botánico rodeado por un impresionante vitral.
sinaloa | Sinaloa | "Carnaval de Mazatlán" | Uno de los carnavales más importantes de América.
jalisco | Jalisco | "Charrería" | Tradición ecuestre y deporte nacional de México.
michoacan | Michoacán | "Danza de los Viejitos" | Danza purépecha llena de alegría y tradición.
tlaxcala | Tlaxcala | "Tapetes de Huamantla" | Coloridas obras de arte creadas sobre las calles.
EXCEPCIONES en los nombres de archivo (respétalas tal cual):
- La ilustración de Tlaxcala usa el slug "talxcala".
- El sello admitido de Jalisco usa el slug "jaslico".

NO HACER
- No uses fotos de stock ni inventes imágenes: solo las URLs listadas.
- No cambies precios, horarios ni datos de contacto.
- No uses colores fuera de la paleta ni más de 2 familias tipográficas.
- No dejes textos en inglés en la versión en español.
- No pongas emojis en la interfaz.

CRITERIOS DE ACEPTACIÓN
- Se ve impecable en 375px, 768px, 1280px y 1920px.
- El botón de reservar está visible en todo momento (header en desktop y barra inferior en móvil).
- El modal abre con la experiencia y el horario correctos desde cualquier chip.
- Lighthouse de Performance y Accesibilidad mayor a 90.
```

---

## PROMPTS DE REFINAMIENTO (mándalos uno por uno después)

**1. Pulir el hero**
```
Mejora el hero: haz que el H1 aparezca palabra por palabra con blur de 8px a 0 y que la imagen tenga un zoom lento continuo. Añade grano sutil sobre el overlay y verifica que el texto sea legible en móvil (375px) sin tapar a las personas de la foto.
```

**2. Sección El Viaje**
```
Haz la sección "El Viaje" más inmersiva: al hacer scroll vertical, las postales deben avanzar horizontalmente (scroll pinned con Framer Motion useScroll). Los sellos postales y los sellos de "admitido" entran rotando con un pequeño rebote. Muestra "Destino 0X / 13" y la barra de progreso dorada. En móvil, que sea un carrusel normal con swipe.
```

**3. Modal de reserva**
```
Revisa el modal de reserva: bloquea los domingos y las fechas pasadas en el calendario, filtra los horarios según la experiencia elegida, muestra el total estimado en vivo y agrega el botón "Confirmar por WhatsApp", que abra wa.me/529871189999 con este texto prellenado: experiencia, fecha, horario, número de invitados y nombre.
```

**4. Versión en inglés**
```
Agrega la versión en inglés (/en) con un selector ES | EN en el header. Traduce todos los textos desde /src/data/content.ts con un tono de hospitalidad de lujo, no literal. El inglés es el idioma principal del público.
```

**5. Auditoría final**
```
Haz una revisión final: contraste AA, alt en todas las imágenes, un solo H1, foco visible, prefers-reduced-motion, sin scroll horizontal en 375px y que las imágenes pesadas usen lazy loading. Corrige lo que encuentres y dime qué cambiaste.
```
