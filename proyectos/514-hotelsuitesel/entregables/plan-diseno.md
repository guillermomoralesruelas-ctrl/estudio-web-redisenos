# Hotel & Suites El Moro: plan de rediseño (método 1.1)

**Sitio original:** https://hotelelmoro.com/ (sitio propio en Laravel con restos de la plantilla de WordPress "Sailing"; desarrollado por PixelesWeb). Reservas en Cloudbeds (`Ed16fN`, del widget de `investigacion/original.html`).
**Materia prima:** clon en `../sitio/` (fotos en `sitio/assets/img/`, `sitio/assets/wp-content/uploads/revslider/` y `sitio/assets/storage/`), textos en `investigacion/crudo.json` (inicio, blog, /habitaciones, /reservaciones y /galeria) y contacto en `investigacion/resumen.json`. Los datos de cada habitación (capacidad, detalles, "Impuestos incluidos"), de Larga Estancia, de las cuatro actividades, del horario de recepción y de check-in y check-out no están en `crudo.json`: se tomaron del sitio real descargado con curl el 2026-09-26 (/cuarto-doble, /suite-familiar, /suite-con-desvan, /suite-deluxe, /master-suite, /larga-estancia, /kayak, /pesca-deportiva, /buceo-scuba, /snorkeling, /contacto y /terminos-y-condiciones).
**Rubro:** hospedaje, hotel de suites con cocineta y estancias largas. **Ciudad:** La Paz, Baja California Sur (Colina del Sol, a cinco minutos del malecón).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): sin desbordes y con un H1, pero 3 imágenes rotas en escritorio y en móvil (las tres fotos grandes de la portada: el HTML las pide en `/wp-content/...` y quedaron en `sitio/assets/wp-content/...`), 40 errores de consola y 34 recursos fallidos (jQuery, Revolution Slider, jQuery UI, Owl Carousel, select2, Bootstrap y Font Awesome de WordPress, que el clon no bajó).
- A ojo: la página se queda con el cargador de tres puntos en la parte de arriba, sin encabezado ni portada; el carrusel de habitaciones no funciona y cada habitación sale como una foto enorme una debajo de otra; el buscador de Cloudbeds y el mapa de Google no cargan fuera de su servidor.
- El clon trae 10 fotos útiles: 5 de habitaciones (640 × 640) y 4 de exteriores de 1600 a 1920 px (alberca al atardecer, cúpula con palmeras, fuente y edificio, vista aérea con dron), más la de `storage/`, que es casi la misma que la alberca al atardecer y no se usa. Las de la galería y las de actividades no se descargaron.
- Las fotos se sirven como copias .webp (de 1.50 MB a 0.91 MB) con `rediseno/fotos-web.mjs`.

## Qué tiene que lograr el sitio
1. **Reservar directo** en su Cloudbeds, con el precio con descuento a la vista, o preguntar por WhatsApp.
2. Que quien viene **por semanas o meses** entienda en segundos que aquí se puede vivir: suites con cocineta, servicios y limpieza incluidos, sin contrato ni depósito. Es lo que distingue al hotel y hoy está en otra página.
3. Vender el lugar (arcos blancos, cúpulas, alberca entre palmeras) y lo que hay alrededor: pesca, kayak, buceo y snorkel en el Mar de Cortés.

Público: viajeros nacionales de fin de semana, familias de hasta 5 personas, trabajadores remotos y de proyectos, y extranjeros que pasan el invierno en Baja (de octubre a abril), que comparan el hotel con rentar un departamento o un Airbnb.

## Dirección visual
Hotel de estilo "moro" en La Paz: la cal de los muros, la arena, el añil del logotipo (la cúpula dentro del arco) y el cobre de las luces al atardecer que tienen todas sus fotos.

| Token | Color | Uso |
|---|---|---|
| `cal` | `#fbf9f5` | Fondo general (el `--em-cream` del CSS del sitio) |
| `arena` | `#f6f1e8` | Secciones de habitaciones y larga estancia (`--em-sand` del sitio) |
| `moro` | `#0e1457` | Añil del texto "EL MORO" del logotipo: portada, "Una noche, una semana o toda la temporada" y pie |
| `azulejo` | `#2d3b93` | Azul del emblema: botón principal (blanco encima, 9.7:1) y enlaces |
| `cobre` | `#c9873f` | Acento del CSS del sitio (`--em-accent`): solo sobre añil (5.6:1) o como fondo con texto añil |
| `cobre-texto` | `#8a5418` | El mismo cobre, oscurecido para texto sobre cal y arena (5.9:1) |

**Tipografía:** las del sitio original, de @fontsource y solo el subconjunto latino: Crimson Text (títulos; la serif de la plantilla, cercana a la del logotipo) y Roboto (texto).

## Elemento memorable
**"Una noche, una semana o toda la temporada"** (frase del inicio del sitio). Un selector de noches sobre una línea con tres umbrales reales de Larga Estancia: desde 7 noches ("Por semana"), desde 28 ("Por mes") y desde 3 meses ("Por temporada"). Eliges habitación, personas (la capacidad de cada una: hasta 4 o 5), fecha de llegada y noches, y abajo cambia la respuesta:
- De 1 a 6 noches: el total con el precio directo publicado (impuestos incluidos, como dice cada habitación) y cuánto te ahorras frente al precio tachado; botón a Cloudbeds con esas fechas.
- Desde 7 noches: pasa a Larga Estancia con el texto real de cada modalidad, lo que incluye (en tantas semanas, tantas cargas de ropa de 10 piezas y tantos galones de agua purificada, a razón de uno por semana, como dice el sitio) y un WhatsApp que ya lleva habitación, personas, llegada y noches para pedir la cotización. No se inventa la tarifa de larga estancia: el sitio no la publica.
- Si eliges la Estándar Doble para una estancia larga, avisa que las suites con cocineta son la Familiar, la con Desván, la Deluxe y la Master (dato de las preguntas frecuentes de Larga Estancia).

## Estructura
1. Encabezado claro con el logotipo, navegación, teléfono y "Reservar".
2. Portada con la alberca al atardecer, el H1 del sitio ("Tu casa frente al Mar de Cortés"), su frase, Reservar y WhatsApp, y datos reales (desde $2,385 MXN la noche reservando directo, check-in 3:00 pm, check-out 12:00 pm, recepción 24 horas).
3. Barra de reserva (llegada y salida) al mismo Cloudbeds, con "Siempre el mejor precio, directo con nosotros".
4. Un rincón colonial a la orilla de La Paz: su texto, la cúpula con palmeras y los servicios (alberca, wifi gratis, transportación y restaurante).
5. Una noche, una semana o toda la temporada (elemento memorable).
6. Habitaciones: las cinco, en filas con foto, texto, capacidad, detalles y precio tachado y directo.
7. Larga Estancia: "Vive en La Paz sin firmar un contrato", lo que incluye, la comparación con rentar un departamento y cuatro preguntas frecuentes.
8. ¿Listo para el mar?: las cuatro actividades con su texto real (El Mogote a 20 minutos en kayak, Los Islotes, Isla Espíritu Santo) y WhatsApp con la actividad correcta.
9. Contacto (dirección, teléfonos, WhatsApp, correo, recepción 24 horas, redes) con la vista aérea que abre Google Maps; pie y barra fija en el celular (Reservar, WhatsApp, llamar y cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Nada de la etiqueta "Hotel & Suites El Moro · La Paz, BCS" encima de cada título, como en el original, ni puntos medios de separador.
- Las habitaciones no son un carrusel de tarjetas iguales: filas con foto cuadrada, texto y una columna de precio, como una carta.
- Los servicios no llevan los íconos de 2015 del sitio: nombre y frase.
- Sin animaciones al hacer scroll ni transiciones decorativas; el selector usa el control nativo y con `prefers-reduced-motion` no hay ningún movimiento (tampoco el desplazamiento suave).
- No se inventan tarifas de larga estancia, reseñas, premios ni fotos: no hay opiniones en el sitio y no se agregan.
- Sin mapa de Google incrustado ni el widget de Cloudbeds: una foto que abre Maps y enlaces directos al motor.
