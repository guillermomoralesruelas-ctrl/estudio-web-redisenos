# Althea Wellness Clinic: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://altheawellnessclinic.com/ (Odoo; inglés por defecto y versión en español en `/es_MX`) |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima. Hecho en la PC |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/35-altheawellnessclinic/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas de referencia | `referencias/capturas-2026-09-27/` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 35-altheawellnessclinic`) |

## En una línea

Mismos tratamientos con sus precios "Starting at" en dólares y pesos, mismos textos, mismo WhatsApp, dirección y horario; en vez de cinco páginas de Odoo con textos de plantilla y enlaces a `#`, una página en inglés que arma el "pase Althea" del visitante (de dónde viene, qué tratamientos quiere y desde cuánto) y lo manda por WhatsApp ya escrito.

## Idioma

Se dejó en **inglés**, como su sitio por defecto (title, description, H1 y precios primero en USD), porque su público declarado son pacientes de EE. UU., Canadá y Europa y su servicio de turismo médico. Quien elige "I live in Mexico" en el pase ve los precios primero en pesos y su WhatsApp sale en español (texto nuestro). La versión completa en español con los textos de `/es_MX` queda pendiente.

## Qué estaba roto o incompleto en el clon

Sacado de `qa/reporte-rediseno.json` → `antes` y de revisar el clon a ojo.

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 5 imágenes rotas (el logo y cuatro fotos de los pilares: el clon tiene el .jpg pero la página pide el .webp), 13 recursos fallidos y 13 errores de consola en escritorio (11 y 11 en el celular) | 0 imágenes rotas, 0 recursos fallidos y 0 errores; las fotos salen de los .jpg del clon, convertidas a .webp |
| La captura de página completa mide 800 px (escritorio) y 844 px (celular): sin el JavaScript de Odoo el contenido no se puede recorrer y solo se ven el encabezado y la portada gris | Página completa: 8,020 px en escritorio y 13,065 px en el celular |
| El logo no está en el clon y sale como texto enorme que se corta a la derecha | Logotipo de texto como el letrero de su recepción ("ALTHEA / — WELLNESS CLINIC —") |
| Dos H1 ("Premier Aesthetic & Wellness Clinic…" y "Book your private consultation") | Un solo H1, el de su portada |

## Qué se cambió (mismo contenido, otra forma)

- **Cinco páginas (inicio, Treatments, Sofwave, Endolifting y tienda) → una página**: portada, pilares, el pase, menú con precios, Sofwave™ y Endolifting, Why Althea y Visit.
- **"The Foundations…" (cuatro tarjetas con foto)** → una lista editorial con sus cuatro pilares, su lema y su texto recortado, junto a dos fotos.
- **Treatments & Services** (página larga) → menú en 8 pestañas, una por su categoría, con "Starting at" en USD y MXN, lo que incluye cada tratamiento y los 10 sueros IV; cada renglón tiene "Add to your pass".
- **Páginas de Sofwave y Endolifting** → una sección con dos columnas: su explicación técnica recortada, sus pasos (4 de Sofwave, 6 de Endolifting), los precios de Endolifting y las dos doctoras certificadas en Sofwave™.
- **Formulario "Book your private consultation"** (pide correo obligatorio) → WhatsApp con mensaje prellenado en todos los botones.
- Paleta: su color 1 `#343A40` y su color 2 `#A48D78` del tema de Odoo, más marfil, arena y "luz" (el brillo de su espejo) sacados de sus fotos. Tipografía: Raleway (la de su tema) y Marcellus para títulos, por las romanas del letrero de su recepción.
- **Textos recortados y sin afirmaciones fuertes de salud** (es medicina estética): en cada tratamiento se dejó *qué incluye* (sus nombres de procedimientos, productos y marcas) y se quitaron frases como "clinically proven", "completely safe", "zero risk", "guarantees", "drastically reverses", "erase", "eliminate" y "melt localized fat". Lo de Sofwave sin tiempo de recuperación va atribuido: "According to the clinic there is no downtime…" (de su FAQ).
- Title y description nuevos (los suyos dicen "the best aesthetic clinic", que no se puede sostener); JSON-LD `MedicalClinic` limpio (ver abajo).

## Qué se agregó (no existía en el original)

- **El elemento "Your Althea pass"**: un pase de abordar. Eliges de dónde vienes (United States, Canada, Europe, las regiones que nombra su sitio, o "I live in Mexico"), fecha de llegada opcional y tratamientos (sus 21 renglones del menú, agrupados por su categoría). El pase muestra From, To (Playa del Carmen), Gate (Casa Habanero, planta baja, Int. 101), Boarding (su horario), una línea por tratamiento con su precio "from" en la moneda que te toca y la otra debajo (las dos suyas, nunca convertidas), el total "desde" de lo que tiene precio, cuántos se cotizan tras valoración y su frase "Final pricing is determined after medical assessment". Muestra sus datos de agenda: Sofwave™ "Session of 30 to 45 minutes", Endolifting "Includes 5 post-care medical massages", GLP-1 "Starts with a consultation & assessment". El talón repite origen, número de tratamientos y total, con un código de barras decorativo (no codifica nada). "Send my pass on WhatsApp" manda todo escrito, en inglés o en español.
- Textos redactados por nosotros: el título "Your Althea pass" y su párrafo; "Flying in from", "Arriving (optional)", "Preferred date", "Treatments", las notas de moneda, "Pick a treatment to add it to your pass.", "From, in total, plus N priced after evaluation", "Total from", "Prices as published on altheawellnessclinic.com.", la nota "From the clinic: Sofwave™ and Endolifting can be combined with injectables, collagen biostimulators and regenerative treatments. The medical team decides the plan with you." (resumen de sus FAQ), "See your pass (N treatments)" y los mensajes de WhatsApp; "The foundations of Althea"; "Treatments & prices" y su párrafo (armado con dos frases suyas); "Sofwave™ and Endolifting in the Riviera Maya" y "Two different technologies for different needs…"; los títulos "Sofwave™ ultrasound", "ENDOLYSE® Endolifting", "Certified in Sofwave™ clinical protocols", el paso "Back to your day" (su paso 4 se llama "Instant Radiance") y "Progressive Changes" (el suyo, "Progressive Results"); "Why Althea? We go beyond aesthetics." (une su título y su subtítulo); "Visit the clinic", "Opening hours", "Hours", "Follow Althea"; los botones "Book on WhatsApp", "Plan your visit", "Book my assessment", "Add them to your pass", "Add to your pass", "On your pass", "Open in Google Maps", "Call", "Directions"; los textos alternativos de las fotos.
- **WhatsApp con mensaje prellenado** (general, pase y valoración de Sofwave/Endolifting) al +52 984 165 3990.
- **Croquis de la esquina** (Calle 42 y 15 Avenida, con "Althea, Casa Habanero") dibujado por nosotros, que enlaza a Google Maps; la cuadrícula es decorativa, no es un mapa a escala.
- Barra fija en el celular: WhatsApp, Call y Directions.
- JSON-LD `MedicalClinic` con dirección, coordenadas y horario (de su propio JSON-LD), teléfono, correo, `currenciesAccepted` USD y MXN, cinco servicios y sus redes reales en `sameAs`. Open Graph con la foto del lobby y favicon (una "A" en su taupe, nuestra).
- `prefers-reduced-motion`: el fundido del pase y el scroll suave se apagan.

## Qué se quitó o no se usó

- Las dos imágenes de Sofwave™ (`269076…Sofwave HIFU Lifting Ultrasound…png` y `269078…Sofwave Playa del Carmen.png`): traen credenciales C2PA de `gpt-image` ("trainedAlgorithmicMedia"), o sea que están generadas con IA. También el fondo de destellos `Althea Wellness Clinic - Home.PNG` (mismas credenciales).
- Los carruseles de antes y después de Sofwave y Endolifting, los premios y logotipos de revistas de Sofwave™, el video del fabricante y la comparación con HIFU, Ultraformer y Liftera (afirmaciones sobre otras tecnologías).
- La calificación 5.0 con 252 reseñas de su JSON-LD (no se ve en la página ni se pudo comprobar) y dos de sus tres testimonios (el de Guillermo Martínez es de un colaborador y el de la Dra. Diana es de la clínica); se dejó el de Michelle G.
- La tienda en línea (carrito, lista de deseos, 20 productos): se nombran las marcas de su tienda física.
- Los menús de Blog, Events, Our Team y Promotions, el inicio de sesión y registro, el aviso de cookies y el aviso para instalar la app.
- La página de GLP-1 y la de Botox no están en el clon: solo se usa lo que dice /treatments de ellas.

## Qué se conserva al pie de la letra

- H1 "Premier Aesthetic & Wellness Clinic in Playa del Carmen" y su subtítulo (recortado: sin "Achieve natural results").
- Sus cuatro pilares con sus lemas: "Beauty guided by science.", "Holistic balance and regenerative health.", "The medicine of the future, today." y "World-class Care, Globally Trusted.".
- Todos los precios de /treatments: Botox $150 USD / $2,500 MXN; Dermal Fillers $350 / $6,000; Collagen Biostimulators $450 / $8,000; Biorevitalization $100 / $1,800; Sofwave™ $280 / $5,000 ("Customized pricing upon medical consultation"); Endolifting $1,200 / $20,000; Depigmenting $850 / $15,000; Recombinant Enzymes $155 / $2,800; Hair Restoration $155 / $2,800; IV $95 / $1,600; GLP-1 consulta $30 / $500; Clinical Rejuvenation $85 / $1,500; Facials $55 / $1,000; Body Shock $80 / $1,400; Post-Op Suite $45 / $800; Molecular Hydrogen $35 / $600; LED $30 / $500; InBody $30 / $500; Peptides, F Cells y VIP Concierge sin precio, como ellos. Endolifting facial $20,000 MXN y corporal $25,000 MXN.
- Los 10 sueros IV, los pasos de Sofwave (30 a 45 minutos) y de Endolifting (5 masajes post), el texto de "Why choose Althea?", "Over 10 years of experience", la cita de Michelle G. y las marcas Mesoestetic®, Colorescience®, TiZO®, Regene Global®, IDENEL® y Dr. CYJ.
- Contacto: Calle 42 Lote 1, Número interior 101, Colonia Zazil-Ha, Playa del Carmen, 77720, Q. Roo; "Ground Floor of the Casa Habanero Building (Corner of 42nd St & 15th Ave)"; WhatsApp +52 984 165 3990; admin@altheawellnessclinic.com; Instagram, Facebook, TikTok y LinkedIn (enlaces reales resueltos con curl); aviso de privacidad (enlazado a su sitio).

## Pendiente de confirmar con el cliente

- **Horario:** Mon to Fri 9:00 to 19:00 y Sat 9:00 to 14:00 salen de su JSON-LD; la página no lo publica. ¿Es correcto y cierran el domingo?
- Si el +52 984 165 3990 también recibe llamadas (el botón "Call" y el `tel:` lo usan; su JSON-LD lo pone como teléfono).
- Si los precios "Starting at" siguen vigentes (son los del 27 de septiembre de 2026) y si el USD/MXN que publican es fijo.
- Versión en español completa con los textos de `/es_MX`.
- El logo en vector (el clon no lo trae) y fotos de Sofwave™ y Endolifting reales en su clínica, en lugar de las generadas con IA.
- Fotos del equipo médico y los nombres completos de las doctoras (el certificado dice Dra. Diana Edlthe Hernandez Guerra y Dra. Miriam Leticia Aguirre Raudry; se dejaron como los escribe su página: "Dr. Diana H." y "Dr. Miriam Aguirre").
- Permiso para usar sus fotos y la cita de Michelle G.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`; medidas de fotos: `rediseno/src/data/fotos.json` (lo escribe `fotos-web.mjs`)
- Diseño, secciones y el pase: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp en `assets/web/` (lobby, sala, iv, consulta, exosomas, `compartir.jpg` y `icono.png`), generadas desde el clon (`sitio/assets/web/image/`) con `node fotos-web.mjs` en `rediseno/`. `assets/web/` es el `publicDir`; no se sube al commit y se regenera con ese script antes de `npm run build`.

## QA final

| Vista | Alto | H1 | Imágenes | Rotas | Errores | Fallidos | Desborde |
|---|---|---|---|---|---|---|---|
| Escritorio (1280 px) | 8,020 px | 1 | 5 | 0 | 0 | 0 | 0 |
| Móvil (390 px) | 13,065 px | 1 | 5 | 0 | 0 | 0 | 0 |

Probado también con Playwright: "I live in Mexico" cambia a pesos y el WhatsApp a español; Canada vuelve a dólares; agregar desde el menú aparece en el pase; 0 errores de consola.
