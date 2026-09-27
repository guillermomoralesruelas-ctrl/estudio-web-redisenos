# Althea Wellness Clinic: plan de rediseño (método 1.1)

**Sitio original:** https://altheawellnessclinic.com/ (Odoo, en inglés por defecto, con versión en español en `/es_MX`)
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/web/image/`), textos en `investigacion/crudo.json` (inicio, tienda, tratamientos, Sofwave y Endolifting), contacto en `investigacion/resumen.json`, horario y coordenadas en el JSON-LD de `investigacion/original.html`. Redes y versión en español comprobadas con curl el 2026-09-27.
**Rubro:** clínica de medicina estética y bienestar (toxina botulínica, rellenos, bioestimuladores, Sofwave™, Endolifting, sueros IV, GLP-1, faciales, tienda de dermocosmética). **Ciudad:** Playa del Carmen, Quintana Roo (Calle 42 Lote 1, Int. 101, Col. Zazil-Ha, planta baja del edificio Casa Habanero, esquina 42 y 15 Av.). Coincide con la base.

## Idioma
**Inglés.** Es el idioma por defecto de su sitio, su title, su description y su H1; sus precios van primero en dólares y dicen atender "patients from the US, Canada, and Europe" con servicio de concierge para turismo médico. El elemento memorable tiene la opción "I live in Mexico": ahí los precios se muestran primero en pesos (los suyos, no convertidos) y el WhatsApp sale en español. Hacer la versión completa en español con los textos de `/es_MX` queda como siguiente paso si la clínica lo pide (pendiente).

## Qué le falta al clon (los "detallitos")
- 5 imágenes rotas (el logo y cuatro de las fotos de sus pilares, porque el clon bajó el .jpg pero la página pide el .webp), 13 errores de consola y 13 recursos fallidos en escritorio, 11 en el celular (qa-rediseno.mjs, parte "antes", 2026-09-27). 0 desborde.
- La captura de página completa mide solo 800 px en escritorio y 844 en el celular: sin el JavaScript de Odoo (404) el contenido no se puede recorrer y solo se ve el encabezado y la portada gris.
- El logo no está en el clon (404) y sale como texto gigante que se corta a la derecha.
- Dos H1 ("Premier Aesthetic & Wellness Clinic…" y "Book your private consultation").

## Qué tiene que lograr el sitio
1. Que quien viene de viaje (o vive en la Riviera Maya) vea sus tratamientos con precio "desde" y **escriba por WhatsApp con lo que quiere ya escrito**.
2. Que se entienda qué hacen: medicina estética, bienestar y longevidad, y tecnología (Sofwave™ y Endolifting).
3. Llegar: dirección con referencia (Casa Habanero, 42 y 15 Av.), horario y Google Maps.

## Dirección visual
Sus propias fotos mandan: paredes crema, madera clara, luz cálida del espejo en forma de flor de la sala. Nada de azul clínico.

| Token | Color | Uso |
|---|---|---|
| carbón | #343a40 | Su color 1 de Odoo (`--o-color-1`). Texto, portada del pase y pie. Blanco encima 11.51:1; sobre marfil 10.24:1 |
| taupe | #a48d78 | Su color 2 (`--o-color-2`). Solo detalles y líneas (3.15:1 con blanco, arriba del 3:1 para gráficos); nunca texto chico |
| taupe hondo | #6b5644 | Su taupe oscurecido para texto y enlaces: 6.15:1 sobre marfil, 5.25:1 sobre arena |
| marfil | #f6f1ea | Fondo general, sacado de las paredes de sus fotos (nuestro) |
| arena | #e9dfd2 | Superficies y el talón del pase (carbón encima 8.74:1) |
| luz | #e8c98f | El brillo de su espejo: detalles sobre carbón (7.22:1) |

**Tipografía:** Raleway, la de su tema de Odoo (`font: 'Raleway'` en el CSS del clon), para el texto. Para títulos, Marcellus: romanas grabadas como las del letrero "ALTHEA / WELLNESS CLINIC" de su recepción (la tipografía exacta del letrero no se conoce). @fontsource, solo latino.

## Elemento memorable
**"Your Althea pass"**: un pase de abordar de la clínica. Arriba eliges de dónde vienes, con las regiones que nombra su sitio (United States, Canada, Europe) o "I live in Mexico"; abajo tocas los tratamientos de su menú (sus 8 categorías, con su precio "Starting at" en USD y MXN tal como los publica). El pase se arma solo:
- **From** tu región, **To** Playa del Carmen, **Gate** "Casa Habanero, ground floor, Int. 101" y **Boarding** su horario (Mon–Fri 9:00–19:00, Sat 9:00–14:00, de su JSON-LD).
- Una línea por tratamiento con su "from" en la moneda que te toca (USD si vienes de fuera, MXN si vives en México; la otra entre paréntesis, nunca convertida por nosotros) y, cuando su sitio lo dice, un dato de agenda: Sofwave™ "30 to 45 minutes", Endolifting "includes 5 post-care medical massages", GLP-1 "Consultation & Assessment". Los que ellos cotizan tras valoración dicen "Priced after medical evaluation".
- Total "From" de lo que tiene precio, con su frase "Final pricing is determined after medical assessment".
- Fecha de llegada opcional. El botón "Send my pass on WhatsApp" escribe el pase completo (región, fecha, tratamientos y precios "desde") en inglés, o en español si vives en México.
- Si eliges Sofwave o Endolifting junto con otros, recuerda su propio texto de que se pueden combinar ("compatible and complementary", "works beautifully in synergy").
El talón del pase es arena con perforación; el pase se imprime con un fundido corto (quieto con prefers-reduced-motion).

Sale del negocio: su servicio "Medical Tourism & VIP Concierge" dice que los tratamientos se acomodan "into your Riviera Maya itinerary", atienden a pacientes de EE. UU., Canadá y Europa, y publican cada precio en dos monedas. El pase es el itinerario de esa visita, con sus datos. No repite nada de `METODOS.md`: no es una cuenta de consumo (352), un ticket de vaso (133), un mapa de cuerpo (114), un mandala de servicios (608), billetes y monedas (642) ni un calculador de inversión (566).

## Estructura
1. Encabezado: logotipo de texto "ALTHEA / Wellness Clinic" (como su letrero), navegación corta (Treatments, Your pass, Sofwave & Endolifting, Visit) y WhatsApp.
2. Portada: su H1 "Premier Aesthetic & Wellness Clinic in Playa del Carmen", su subtítulo, foto del lobby con su letrero, "Book on WhatsApp" y "Plan your visit", y la dirección con horario.
3. Sus cuatro pilares (Advanced Aesthetic Medicine, Wellness & Longevity, Innovation & Biohacking, International Standards) en un bloque editorial: dos fotos y cuatro textos en lista, no cuatro tarjetas iguales.
4. Your Althea pass (el elemento).
5. Treatments & prices: su menú completo en pestañas por categoría, con "Starting at" en las dos monedas y los 10 sueros IV.
6. Sofwave™ y Endolifting: sus pasos (4 y 6), la duración de sesión, las cinco sesiones de masaje post, sus precios de Endolifting (facial $20,000 MXN, corporal $25,000 MXN) y las dos doctoras certificadas en Sofwave™. Foto del facial con exosomas.
7. Why Althea: su texto, una cita de Michelle G. y las marcas de su tienda.
8. Visit: dirección, referencia, horario, WhatsApp, correo, Maps (foto de la sala que enlaza a Maps) y redes.
9. Pie y barra fija en el celular (WhatsApp, Call, Directions).

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas sobre cada sección: solo el pase usa rótulos cortos (From, To, Gate), porque así es un pase de abordar. Sin numeración 01/02 fuera de los pasos de Sofwave y Endolifting, que son suyos y sí son una secuencia.
- Puntos medios como separador: los datos van con comas o en su propia línea.
- Animar cada sección: solo el pase se imprime con un fundido.
- Filas de tarjetas idénticas: pilares en lista con filetes, tratamientos en pestañas con renglones, pasos en una línea de tiempo.
- Degradados de moda y fotos de banco: ninguno. No se usan las dos imágenes de Sofwave (generadas con IA, con credenciales C2PA de gpt-image) ni el fondo de destellos.
- Afirmaciones de salud, seguridad o resultados: se usan sus nombres de tratamientos, lo que incluye cada uno y sus datos de agenda; se quitan frases como "completely safe", "zero risk", "drastically reverses", "erase", "melt" y "guarantees". Sin fotos de antes y después (su página de Sofwave tiene un carrusel de ellas y enlaza a las de sofwave.com; no se usan) ni reseñas o estrellas: su JSON-LD dice 5.0 con 252 reseñas pero no se ve en la página ni se puede comprobar.
