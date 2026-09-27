# Kenkō Wellness: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://kenkowellness.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/608-kenkwellness/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 608-kenkwellness`) |

## En una línea

Es la misma casa holística con sus textos, servicios, precios, horario, equipo y fotos propias; cambia la forma: una sola página donde armas tu Plan 360 tocando los servicios de cada pilar y lo mandas por WhatsApp, sin fotos de banco ni textos de plantilla.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 10 imágenes rotas en escritorio y 12 en móvil (tamaños reducidos que no se bajaron) | 8 imágenes, 0 rotas |
| 5 px de desborde en móvil | 0 |
| 38 y 39 errores de consola | 0 errores, 0 fallidos |
| 22,069 px de alto en móvil | 10,577 px |

## Qué se cambió (mismo contenido, otra forma)

- Catálogo, Talleres, Clases, Membresía, Filosofía, Kenko 360 y Equipo se juntan en una página.
- Los servicios del catálogo van por pilar con su precio y una línea (recortada) de qué son. "Yoga a tu ritmo, 10 clases" ($2,000) se pone en Cuerpo.
- El equipo se reduce a ocho integrantes con su rol en una línea (sin sus biografías).
- Se corrigen "Espítitu", "disponiblesen", "Hilaúrónico", "dónde habita".
- WhatsApp con mensajes escritos (su sitio no manda mensaje).

## Qué se agregó (no existía en el original)

- **"Tu Plan 360"**: mandala SVG de tres pilares con un pétalo por servicio (17), lista por pilar, contador "N de 3 pilares" / "360°", suma de precios publicados y WhatsApp con los servicios elegidos. Textos nuestros: el título, "Toca los servicios que te llaman la atención…", las líneas cortas de cada servicio (armadas con palabras de su catálogo), "Suma de los precios publicados por sesión", "sin precio publicado", "Preguntar", "Su plan real empieza con una plática con sus expertas…" (de su texto del Plan Wellness), "Agendar este plan", "Pedir mi entrevista".
- Títulos y microcopy: "Casa holística en Naucalpan, Estado de México", "“Kenko” significa salud en japonés", "Clases de yoga, meditación y respiración", "Preguntar por una clase", "Membresías", "Nuestro equipo está para tu servicio" (su frase), "Te esperamos en tu casa holística", "Pedir una Gift Card".
- Barra fija en el celular, Google Maps, JSON-LD `HealthAndBeautyBusiness`, meta description, Open Graph y textos alternativos.

## Qué se quitó o no se usó

- El bloque de plantilla del inicio (Make an Appointment, lorem ipsum, correo, teléfono y dirección de Nueva York) y los contadores en "+ 0".
- Las afirmaciones de salud: beneficios de Mindfulness, Ikigai, Nutrición y Kundalini ("fortalece el sistema inmunológico", "16 veces más potente"…), Flores de Bach "sin efectos secundarios", los textos del Baño de Gong y Constelaciones, y la herbolaria en microdosis.
- Servicios médico-estéticos del catálogo: rinoplastia con ácido hialurónico ($6,000), blefaroplastia con Plasmapen ($1,999) y eliminación de verrugas ($800) (pendiente: si quieren mostrarlos).
- Talleres sin precio (Numerología Angelical, El color de tus Emociones, 7 Rayos) y Nutrición Integrativa (sin instructora).
- Promociones con fecha (10 de Mayo, Yoga matutina de abril, código KenKoYogaMar25) y las demás promociones.
- Fotos de banco, acuarelas, video de stock, blog, newsletter, widget de chat y la X (Twitter).

## Qué se conserva al pie de la letra

- "Salud Integral para el Equilibrio Vital", su presentación, la bienvenida de Claudia y Lucía García, misión, visión, valores, textos de los tres pilares y de Clases.
- Precios: masajes $1,200, terapias $1,100, faciales $1,100, Dermapen $1,900, peeling $3,000, psicología $1,300, tanatología $1,000, coaching $1,000, Mindfulness $1,800, Propósito de Vida $1,100, sanación kármica $1,200, armonización energética $1,800, angeloterapia $1,400; paquetes de yoga ($2,000, $3,795, $3,975, $2,550 al mes) y membresías Premium y Platinum.
- Horario de yoga: lunes a viernes de 8:30 a 9:30 am y de 8:00 a 9:00 pm.
- WhatsApp (55) 1939 8546, teléfono (55) 5548 7500, claudia.garcia@kenkowellness.com.mx, dirección de Naucalpan, Instagram, Facebook y TikTok.

## Pendiente de confirmar con el cliente

- **Dirección**: Naucalpan (Felipe Ángeles #22, Lomas del Huizachal) o Interlomas (Paseo de la Herradura #403 B). Se usa la de Inicio.
- WhatsApp: 55 1939 8546 (casi todos los botones) o 55 6435 9242 (Gift Card).
- Precios de meditación, respiración y tarot; si los precios siguen vigentes.
- Si quieren mostrar los tratamientos médico-estéticos y la herbolaria.
- Horario de atención de la casa (solo está el de yoga).
- Fotos propias de cabinas, masajes y faciales (las del sitio de esos servicios son de banco).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
