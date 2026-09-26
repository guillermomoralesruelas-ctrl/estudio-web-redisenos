# Hotel Pacific Palace: plan de rediseño (método 1.1)

**Sitio original:** https://www.pacificpalace.mx/ (sitio propio en PHP con la plantilla de hotel "Cappa", jQuery y Bootstrap; desarrollado por Intelimail)
**Materia prima:** clon en `../sitio/` (fotos en `sitio/assets/img/`), textos en `investigacion/crudo.json` (inicio, /hotel, /habitaciones y /amenidades), contacto en `investigacion/resumen.json`. El motor de reservas es el del grupo, `https://www.hotelespalace.mx/reservaciones-busqueda/` con `Reservacion-hotel:16`, tomado de `public/js/custom.js` del sitio real. El WhatsApp oficial (669 216 1096) sale de la página /politica_cancelacion del sitio real (2026-09-26).
**Rubro:** hospedaje, hotel 4 estrellas todo incluido a pie de playa, parte del grupo Hoteles Palace. **Ciudad:** Mazatlán, Sinaloa (Zona Dorada).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): 47 de 48 imágenes rotas en escritorio y 43 de 44 en móvil, 39 errores de consola y 38 recursos fallidos. El HTML del clon pide `img/...`, pero las fotos quedaron en `sitio/assets/img/`; tampoco bajaron las fuentes de íconos (themify, Flaticon), las cuatro fotos de la portada (fondos que carga un script) ni el script de Cloudflare que descifra el correo.
- A ojo: la portada es un recuadro vacío, los carruseles de planes, opiniones y noticias no avanzan y el buscador de reservas no funciona fuera de su servidor.
- El clon solo trae 7 fotos útiles del hotel (vista aérea, dos Junior Suites, Sunset Restaurant, Bar Polinesio y dos platillos). La foto `public/img/slider/1.jpg` es el fondo "Coming soon" de la plantilla, no del hotel: no se usa.
- Las fotos se sirven como copias .webp (de 2.05 MB a 0.95 MB) con `rediseno/fotos-web.mjs`.

## Qué tiene que lograr el sitio
1. **Reservar** en su mismo motor (fechas, adultos, niños con edad y código promocional) o preguntar por WhatsApp.
2. Que el viajero entienda en segundos **qué incluye el todo incluido y a qué hora**, y en qué se diferencia del plan con desayuno buffet. Hoy eso está en tres carruseles que repiten lo mismo.
3. Vender lo que lo distingue: a pie de playa en la Zona Dorada, Junior Suites con cocineta y balcón para 4 personas, Sunset Restaurant y Bar Polinesio.

Público: familias y grupos de amigos del norte y occidente del país (Sinaloa, Durango, Chihuahua, Sonora, Jalisco) que llegan en coche o autobús a Mazatlán y comparan hoteles todo incluido en la Zona Dorada.

## Dirección visual
Hotel de playa luminoso: el verde agua del logotipo, arena clara, azul marino del Pacífico de noche y el naranja del atardecer, que es lo que más mencionan sus propias opiniones.

| Token | Color | Uso |
|---|---|---|
| `arena` | `#f9f7f3` | Fondo general (del CSS del sitio) |
| `concha` | `#f1eeeb` | Secciones de habitaciones y amenidades (del CSS del sitio) |
| `marino` | `#003159` | Portada, "Un día en el Pacific Palace", pie (del CSS del sitio) |
| `agua` | `#009c97` | Verde agua del logotipo: líneas, íconos y arcos (no como texto sobre blanco) |
| `agua-texto` | `#00706c` | Botón principal y enlaces (blanco sobre este color: 5.9:1) |
| `atardecer` | `#ef9c28` | Acento sobre marino (6:1) y el arco de la barra libre; nunca como texto sobre claro |

**Tipografía:** las del sitio original, en @fontsource y solo el subconjunto latino: Gilda Display (títulos), Barlow (texto) y Barlow Condensed (horas y datos cortos).

## Elemento memorable
**"Un día en el Pacific Palace"**: un reloj de 24 horas con la hora actual de Mazatlán (zona `America/Mazatlan`). Alrededor, los horarios reales de cada plan como arcos: alimentos y bebidas de 7:00 am a 1:00 am y barra libre de 10:00 am a 1:00 am (Todo Incluido), o desayuno buffet de 7:00 am a 12:00 pm (Hospedaje con desayuno buffet), más las marcas de check-out (12:00 pm) y check-in (3:00 pm). Debajo dice qué tienes incluido en ese momento ("En Mazatlán son las 10:40 pm: con el Todo Incluido tienes alimentos, bebidas y barra libre hasta la 1:00 am"). Se puede cambiar de plan y mover la hora para ver cualquier momento del día; el botón de WhatsApp lleva el plan elegido en el mensaje. Todo sale de los textos del sitio, sin inventar horarios de alberca ni de shows (el sitio no los da en las páginas que tenemos).

## Estructura
1. Encabezado claro con el logotipo, navegación, teléfono y "Reservar".
2. Portada: la vista aérea del hotel y la playa, H1 "Hotel a pie de playa en Mazatlán", frase del sitio, Reservar y WhatsApp, y una fila de datos reales (hotel 4 estrellas, Zona Dorada, check-in 3:00 pm, check-out 12:00 pm).
3. Barra de reserva: llegada, salida, adultos, niños (con edad) y código promocional, al mismo motor de Hoteles Palace.
4. Un día en el Pacific Palace (elemento memorable) con los dos planes.
5. El hotel: su texto, la Zona Dorada, el video de YouTube (enlace, no incrustado) y el Bar Polinesio.
6. Habitaciones: las dos Junior Suites con foto, metros, personas y camas; y las 17 amenidades de todas las habitaciones.
7. Restaurantes: Sunset Restaurant y Bar Polinesio.
8. Amenidades del hotel (las nueve de /amenidades).
9. Lo que dicen sus huéspedes (las tres opiniones que ya publican, una sola vez cada una).
10. Hoteles Palace: "Somos parte de un complejo reconocido de hoteles en Mazatlán" con los logotipos que ya enlazan (Luna Palace, Océano Palace y Hoteles Palace).
11. Contacto (dirección, teléfono, correo, WhatsApp, Google Maps, redes y políticas), pie y barra fija en el celular (Reservar, WhatsApp, llamar y cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Nada de la etiqueta "Pacific Palace Beach Tower Hotel" con el imagotipo encima de cada sección, como en el original: el nombre va una vez, en el encabezado y la portada.
- Los dos planes no son dos tarjetas de precios iguales: se comparan en el reloj, que es lo que el huésped quiere saber.
- Las habitaciones no son tarjetas idénticas: foto grande y ficha de datos alternadas.
- Las amenidades no llevan íconos genéricos: nombre y frase, con una línea verde agua.
- Sin animaciones al hacer scroll; solo la aguja del reloj se mueve, y se queda quieta con `prefers-reduced-motion`.
- No se inventan precios (el sitio no publica tarifas), horarios que no están en los textos, premios ni nombres de huéspedes.
- No se usan la foto "Coming soon" de la plantilla, las fotos de noticias ni el logotipo de Star Palace, que el sitio enlaza por error a pacificpalace.mx.
