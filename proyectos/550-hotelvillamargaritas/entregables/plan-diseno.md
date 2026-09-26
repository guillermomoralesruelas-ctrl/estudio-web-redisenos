# Hotel Villa Margaritas: plan de rediseño (método 1.1)

**Sitio original:** https://villamargaritashotel.com/ (sitio propio en PHP con Bootstrap 5, desarrollado por JCSE; motor de reservas propio en `/reservar`, con pago por Stripe, y página `/pago` para pagar una reservación con el código que llega por WhatsApp).
**Materia prima:** clon en `../sitio/` (9 fotos de la galería en `sitio/assets/public/img/galeria/` y el logotipo), textos en `investigacion/crudo.json` (inicio, /habitaciones, /pago, /reservar y /habitaciones/suite-familiar) y contacto en `investigacion/resumen.json`. El texto completo, la capacidad ("máx. por habitación") y los servicios de la Doble Matrimonial y la King Size no están en `crudo.json`: se tomaron del sitio real descargado con curl el 2026-09-26 (/habitaciones/doble-matrimonial y /habitaciones/king-size).
**Rubro:** hospedaje, hotel de ciudad. **Ciudad:** Villahermosa, Tabasco (Centro, a cuadra y media de la terminal ADO y a la vuelta del Hospital de Pemex).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): sin desbordes y con un H1, pero 1 imagen rota en escritorio y en móvil (la imagen vacía del visor de la galería), 5 errores de consola en escritorio y 4 en móvil, y 2 recursos fallidos (las fuentes de Bootstrap Icons que el clon no bajó).
- A ojo: la sección de habitaciones dice "No se pudieron cargar las habitaciones." porque las tarjetas se piden a `https://villamargaritashotel.com/api/room-types` y el navegador lo bloquea fuera de su dominio (CORS); todos los íconos salen como cuadros vacíos; el buscador de disponibilidad no funciona fuera del sitio.
- El clon **no trae fotos de habitaciones**: solo las 9 de la galería (dos salones, entrada, elevador, lobby y cuatro de platillos del restaurante) y el logotipo. Las fotos de habitaciones existen en el sitio real (`/public/img/doble-matrimonial/`, `king-size/`, `suite-familiar/`, cinco de cada una) pero no se descargaron; no se usan fotos de banco: queda pendiente.
- Las fotos se sirven como copias .webp (de 4.12 MB a 0.81 MB) con `rediseno/fotos-web.mjs`.

## Qué tiene que lograr el sitio
1. **Reservar directo** en su motor propio (`/reservar`, pago con Stripe) o preguntar por WhatsApp, con el precio de oferta a la vista.
2. Que quien llega **en grupo o en familia** (al hospital, a la terminal, a un evento) sepa en segundos cuántas habitaciones necesita y cuánto paga. Hoy la capacidad está en cada página de habitación y el listado dice "2 personas" en las tres.
3. Vender lo que tiene además de cuartos: restaurante con desayuno y servicio a cuarto, 3 salones de eventos, centro de negocios y estacionamiento vigilado.

Público: viajeros que llegan en autobús a la terminal ADO, familiares de pacientes del Hospital de Pemex, viajeros de trabajo en el centro de Villahermosa y grupos para reuniones o celebraciones.

## Dirección visual
Hotel de ciudad sobrio y cálido: la crema y el negro del sitio actual, el oro de la margarita del logotipo y los manteles amarillos de sus salones.

| Token | Color | Uso |
|---|---|---|
| `crema` | `#f8f6f0` | Fondo general (`--vm-light` del CSS del sitio) |
| `champana` | `#f2f2cf` | Restaurante, tarjeta elegida del cálculo y nota de servicios (`--vm-champagne`) |
| `noche` | `#141414` | Franja de ubicación, "¿Cuántos vienen?", contacto y botón principal (`--vm-dark-2`) |
| `oro` | `#c9a227` | Acento del sitio (`--vm-accent`): solo sobre negro (7.6:1) o como fondo con texto negro |
| `oro-texto` | `#7a5f0f` | El mismo oro, oscurecido para texto sobre crema (5.6:1): "Margaritas" del H1 y capacidades |
| `tinta` | `#1c1c1c` | Títulos y texto fuerte |

**Tipografía:** las del sitio original, de @fontsource y solo el subconjunto latino: Playfair Display 500 normal e itálica (títulos; el H1 conserva "Margaritas" en itálica, como el original) e Inter 400, 500 y 600 (texto).

## Elemento memorable
**"¿Cuántos vienen?"**: el hotel tiene tres tipos de habitación con capacidades distintas (Doble Matrimonial hasta 4 personas, King Size hasta 2, Suite Familiar hasta 4, según "máx. por habitación" de cada página) y precios de oferta publicados ($700, $700 y $900 por noche). Eliges adultos (1 a 9) y menores (0 a 6), los mismos rangos del buscador de sus páginas de habitación, noches y llegada, y el sitio te dice, para cada tipo, cuántas habitaciones necesitan, cuánto pagan por noche y en total, y marca la opción más económica. Cada habitación se dibuja como un recuadro con un punto por lugar: los puntos llenos son tu grupo. Si hacen falta más habitaciones de las que tiene el hotel (32, 28 y 9, dato de /habitaciones), la opción se desactiva. El botón de WhatsApp lleva el grupo, la habitación, cuántas y las fechas. Es la misma lógica del aviso "Vas a necesitar N habitaciones de este tipo" de su sitio, pero antes de entrar al motor y con las tres opciones a la vista. No se inventa ninguna tarifa: son multiplicaciones de los precios publicados.

## Estructura
1. Encabezado claro con el logotipo, navegación, "Pagar reserva" y "Reservar".
2. Portada: "Bienvenidos a Villahermosa, Tabasco", el H1 "Hotel Villa *Margaritas*", su frase de ubicación, Reservar y WhatsApp, datos reales (desde $700 MXN por noche, check-in 3:00 pm, check-out 12:00 pm, servicio 24/7) y la foto de la entrada.
3. "En busca de la Excelencia" en negro, con las tres distancias grandes: A 1½ cuadras de la Terminal ADO, a la vuelta del Hospital Pemex, en el centro de Villahermosa.
4. Habitaciones: "Confort para cada viajero", 69 habitaciones, lo que incluyen todas y las tres en filas con capacidad, número de habitaciones, texto y precio tachado y de oferta (sin fotos: pendientes).
5. ¿Cuántos vienen? (elemento memorable).
6. ¿Por qué reservar con nosotros? (sus cuatro razones) y "Garantiza tu estancia" con el enlace a /pago.
7. Restaurante: "Desayuno y servicio a cuarto" con sus cuatro fotos de platillos.
8. Salones: los 3 salones de eventos y el centro de negocios, con sus dos fotos y WhatsApp.
9. Todo lo que necesitas: instalaciones, con la foto del elevador.
10. Contacto "En el corazón de Villahermosa" (dirección, teléfono, WhatsApp, correo, check-in y check-out) con la foto del lobby que abre Google Maps; pie y barra fija en el celular (Reservar, WhatsApp, llamar y cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Nada de las etiquetas pequeñas en mayúsculas del original ("NUESTRA ESENCIA", "INSTALACIONES", "GALERÍA") ni del separador dorado bajo cada título; nada de puntos medios ("Reserva directa · Sin cargos extra").
- Sin la franja de estadísticas "3 / 24/7 / $700" ni íconos de Bootstrap en cada servicio: los datos van en la portada y los servicios con nombre y frase.
- Las habitaciones no son tres tarjetas iguales con foto: filas como un tarifario, con la columna de precio.
- La galería de nueve fotos revueltas se reparte donde cuenta algo: platillos en el restaurante, salones en eventos, elevador en instalaciones, lobby en contacto, entrada en la portada.
- Sin carrusel en la portada, sin animaciones al hacer scroll; con `prefers-reduced-motion` no hay transiciones ni desplazamiento suave.
- No se inventan fotos de habitaciones, reseñas, premios, código postal ni horarios del restaurante.
- Sin mapa incrustado ni el buscador con Flatpickr, jQuery y Stripe en la portada: enlaces directos al motor del hotel y una foto que abre Maps.
