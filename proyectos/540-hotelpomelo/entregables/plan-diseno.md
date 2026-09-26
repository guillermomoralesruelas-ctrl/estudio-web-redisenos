# Hotel Pomelo: plan de rediseño (método 1.2, con el proceso del 1.1)

**Sitio original:** https://www.hotelpomelo.com/
**Materia prima:** clon en `../sitio/` (solo trajo CSS de Squarespace), 143 imágenes descargadas en la PC en `assets/pomelo/` (método 1.2), textos en `investigacion/crudo.json` (inicio, home, habitaciones, eventos y galería), contacto en `investigacion/resumen.json`.
**Rubro:** hospedaje, hotel boutique de 6 habitaciones con restaurante propio (El Chiringuito de Fran). **Ciudad:** Troncones, Guerrero.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): 8 imágenes rotas en escritorio y 7 en móvil, 15 errores de consola y 7 recursos con 404 (`/api/census/*`, `/api/ui-extensions/*`, `social-accounts.svg`). Squarespace carga todo desde su CDN y sus APIs, así que el clon queda casi sin fotos.
- El video de portada no carga: la portada del clon es un bloque de color con el título partido en dos ("Aquí el tiempo" a la izquierda, "fluye diferente" a la derecha) y un hueco.
- El carrusel "¿Qué te apetece?" no se mueve y las galerías de habitaciones salen vacías.
- `assets/` del clon estaba vacío; por eso se pasó al método 1.2 (descarga en la PC con `assets-1.2.json`).

## Qué tiene que lograr el sitio
1. **Reservar una estancia** en su motor de reservas (Zavia, `rbe.zaviaerp.com/hotel/hotelpomelo`).
2. Escribir por **WhatsApp** al hotel, y por separado **reservar mesa** en El Chiringuito (tiene su propio WhatsApp).
3. Vender la escala (solo 6 habitaciones), la cocina de Fran y las experiencias; captar **eventos** (bodas, retiros).

Público: parejas y grupos pequeños de CDMX y extranjeros que buscan un hotel boutique tranquilo, con buena cocina y surf cerca.

## Dirección visual
Mediterráneo encalado junto al Pacífico: fondo de cal, granate del logotipo como color de acción, y el marino y el pomelo de las ilustraciones de la propia marca (pelícano, mono, iguana y ostra con un pomelo).

| Token | Color | Uso |
|---|---|---|
| `cal` | `#fbf6ee` | Fondo general (muros encalados) |
| `arena` | `#f1e6d6` | Fondos de sección alternos |
| `tinta` | `#2b1b1f` | Títulos y pie |
| `texto` | `#4a3a3d` | Texto corrido (contraste AA sobre cal) |
| `granate` | `#a1003a` | Logotipo, botón principal, sección Nosotros |
| `marino` | `#0a4f9c` / `#0a3a72` | Ilustraciones de la marca; sección El Chiringuito |
| `pomelo` | `#e4574a` | Solo decorativo: el sol del elemento memorable |

Colores sacados del logotipo (`ba925d88-HotelPomelo_LogotipoRGB_Granate.png`, #A00038) y de las ilustraciones (ostra #0050A0, iguana #E05040).

**Tipografía:** la marca usa Halyard Display (Typekit), que no está en @fontsource. Se usa **Hanken Grotesk** (grotesca humanista muy cercana a Halyard) para el texto y **Young Serif** para títulos: una serif cálida y redonda que acompaña al logotipo manuscrito sin competir con él.

## Elemento memorable
**"Medimos el tiempo en atardeceres"**, sacado de su propio texto: *"En POMELO, el verdadero lujo es medir el tiempo en atardeceres"* y su lema *"Aquí el tiempo fluye diferente"*. En la portada hay un arco con el recorrido del sol de hoy en Troncones: calcula en el navegador la hora real del amanecer y del atardecer para la fecha de hoy (ecuación del amanecer con las coordenadas de Troncones, sin servicios externos), coloca el sol en su posición actual y dice cuánto falta para el atardecer ("Hoy el sol se pone a las 18:40. Faltan 3 h 12 min."). De noche cambia a la hora del amanecer de mañana. Es dato real, cambia cada día y le da al huésped la sensación del lugar.

## Estructura
1. Encabezado fijo: logotipo, navegación y botón Reservar.
2. Portada: foto de la piscina infinita (vertical en el celular), H1 "Aquí el tiempo fluye diferente", Reservar y WhatsApp, y el arco del atardecer.
3. Bienvenida: texto de "Bienvenidos a POMELO" y su frase "la única regla es desconectar".
4. Habitaciones: "Seis habitaciones…", mosaico de 6 fotos, ficha de la habitación frente al mar (61 m², 2 huéspedes, King…), lo que incluye y Ver disponibilidad.
5. Nuestros espacios: la historia de la construcción del Fonatur, el bambú de Aníbal y la artesanía de Michoacán.
6. El Chiringuito de Fran (fondo marino): Guía Michelin de Fran, Guía Marco Beteta 2026, tres maneras de disfrutar la cocina y Reserva una mesa.
7. ¿Qué te apetece?: lista de experiencias que cambia la foto y el texto; las que tienen mensaje de WhatsApp en el sitio original lo conservan.
8. "El mar, la calma y todo lo que importa": las cuatro frases de POMELO con sus ilustraciones.
9. Eventos.
10. Nosotros (fondo granate): Ángela y Fran.
11. Visítanos: dirección, WhatsApp, teléfono, correo, redes, foto que abre Google Maps.
12. Pie y barra fija en el celular (Reservar, WhatsApp, llamar y cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Nada de etiquetas pequeñas en mayúsculas sobre cada sección, numeración 01/02 ni puntos medios como separador.
- Sin animaciones al hacer scroll; solo el sol se desplaza (y se queda quieto con `prefers-reduced-motion`).
- Las "tres maneras" no son tarjetas idénticas: la del centro va desfasada y las fotos usan la esquina de muro encalado.
- Las experiencias no son una fila de tarjetas: es una lista con una sola foto grande.
- No se inventan tarifas, reseñas ni horarios: el sitio no publica precios y así se queda.
