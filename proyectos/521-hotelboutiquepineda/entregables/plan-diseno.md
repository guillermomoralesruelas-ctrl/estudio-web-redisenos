# Hotel Boutique Pineda: plan de rediseño (método 1.1)

**Sitio original:** https://hotelboutiquepineda.com/ (WordPress con el tema CozyStay y Elementor)
**Materia prima:** clon en `../sitio/` (fotos en `sitio/assets/wp-content/uploads/`), textos en `investigacion/crudo.json` (inicio, suite 6 personas, suites y contacto), contacto y coordenadas en `investigacion/resumen.json`.
**Rubro:** hospedaje, hotel boutique de 9 suites con cocina, alberca climatizada y restaurante. **Ciudad:** Rincón de Guayabitos, Nayarit.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): 0 desbordes, 0 imágenes rotas y 0 recursos fallidos. El clon funciona bien.
- A ojo: los tres recuadros "Alberca climatizada", "Restaurante Pineda" y "Vistas panorámicas" salen como marcos vacíos (sus fotos son fondos que carga un script); el buscador de reservas no funciona fuera de su servidor; el carrusel de fotos del inicio está cortado a la derecha.
- Las fotos originales pesan hasta 3 MB y miden hasta 6,960 px. Se sirven copias .webp (ver `rediseno/fotos-web.mjs`).

## Qué tiene que lograr el sitio
1. **Reservar una suite por WhatsApp** (el mismo número del hotel, +52 322 180 4587), con el motor de reservas de su sitio como segunda opción.
2. Que cada familia o grupo sepa rápido qué suite le toca y cuánto cuesta.
3. Vender lo que los distingue: suites con cocina, alberca climatizada y la playa a 4 minutos caminando.

Público: familias y grupos de amigos de Guadalajara, Tepic y el Bajío que viajan en coche a Guayabitos y buscan espacio y cocina.

## Dirección visual
Casa de playa nayarita: madera oscura de la recepción, el terracota del ícono "P" de la marca, el rosa de los muros de la alberca y el azul de la bahía.

| Token | Color | Uso |
|---|---|---|
| `arena` | `#f8f2ea` | Fondo general |
| `rosa` | `#f1d9cc` | Secciones "¿Cuántos viajan?" y servicios (muros de la alberca) |
| `chocolate` | `#33211a` | Encabezado, suites y pie (madera de la recepción); el logotipo es blanco |
| `texto` | `#4a3a33` | Texto corrido |
| `terracota` | `#8f3f1f` | Botón principal (ícono "P", #904020) |
| `bahia` | `#125d78` / `#0d4558` | Sección de ubicación |

**Tipografía:** las del sitio original, Cardo (títulos) e Inter (texto), ambas de @fontsource y solo el subconjunto latino.

## Elemento memorable
**"¿Cuántos viajan?"**. El hotel se vende por tamaño de grupo ("Suites con capacidades para 2, 4 y 6 personas. Grupos de hasta 40 personas"), así que justo después de la portada hay un contador de personas (1 a 40) con una fila de figuritas que crece. Muestra la suite que les corresponde con su foto, su precio real por noche y cuánto sale por persona (precio entre personas, calculado), y un botón de WhatsApp con el mensaje "Hola, somos 5 personas y quiero reservar la Suite 6 Personas". De 7 personas en adelante cambia a "Viaje en grupo" y abre WhatsApp para cotizar. No inventa combinaciones de suites porque no sabemos cuántas hay de cada tipo.

## Estructura
1. Encabezado chocolate con el logotipo blanco, navegación y Reservar.
2. Portada: foto de la bahía (vertical en el celular), H1 "Hotel Boutique Pineda", Reservar por WhatsApp y una fila de datos (check-in 3 pm, check-out 11 am, grupos de hasta 40, 4 min a la playa).
3. ¿Cuántos viajan?
4. Bienvenida con tres fotos de huéspedes.
5. Nuestras suites: las tres, alternando foto e información, y lo que traen todas.
6. Alberca climatizada, Restaurante Pineda y Vistas panorámicas.
7. Ubicación: "4 min caminando a la playa" sobre la foto aérea de Guayabitos, con Google Maps.
8. La opinión de TripAdvisor que ya publican.
9. Servicios.
10. Contacto y pie; barra fija en el celular (Reservar, llamar y cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Nada de etiquetas pequeñas en mayúsculas ("BIENVENIDO A HOTEL BOUTIQUE PINEDA", "CERCA DE LA PLAYA") sobre cada título, como en el original.
- Las suites no van en tres tarjetas iguales: son filas alternadas con foto grande.
- Los servicios no llevan íconos genéricos: nombre y frase.
- Sin animaciones al hacer scroll.
- No se usan la foto de fachada generada con IA ni las fotos de banco (Unsplash) del original.
