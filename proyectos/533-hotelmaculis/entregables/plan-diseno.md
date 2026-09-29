# Hotel Maculís: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://hotelmaculis.mx/ (GoDaddy Website Builder)
**Materia prima:** textos de inicio, reservaciones y "Propiedad en venta" en `investigacion/crudo.json`. El clon no traía fotos; se bajaron de `img1.wsimg.com` las fotos reales del hotel (patio, fachada, alberca, mascota en la alberca, andador y cuatro habitaciones, casi todas tomadas con iPhone) y el logotipo, reducidas a 1600 px, a `assets/originales/`. No se usaron los carteles "Curiosidades de Campeche" ni fotos de viajes ajenas al hotel. El clon (`sitio/`) no se tocó.
**Rubro:** hotel boutique en una casa colonial restaurada, Calle Bravo 3, barrio de San Román, Campeche. Alberca, jardín, pet friendly, paneles solares. **Su propio sitio anuncia la venta de la propiedad** ($15,000,000 MXN) mientras sigue operando.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: 26 imágenes rotas y 14 recursos fallidos (todo vive en el CDN de GoDaddy).

## Qué tiene que lograr el sitio
1. Mostrar la casa colonial, la alberca y las habitaciones reales.
2. Aprovechar lo que más los distingue: detalles para ocasiones especiales y mascotas bienvenidas.
3. Reservar por WhatsApp con la ocasión y la habitación.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| noche | `#23172a` | Texto y secciones oscuras |
| marfil | `#faf6ef` | Fondo |
| morado | `#5b2a6e` | Botones (el morado de su logotipo) |
| gris | `#5f5a66` | Texto secundario |
| lila | `#efe7f1` | Fondo alterno |
| oro | `#e7c27a` | Acento sobre oscuro |
| burbuja | `#dcf8c6` | Solo la burbuja de WhatsApp |

Contrastes: noche/marfil 15.88, blanco/morado 10.49, morado/marfil 9.74, gris/marfil 6.21, oro/noche 10.10, morado/lila 8.68, texto/burbuja 12.98.
Fuentes: Cinzel 500 (títulos, letra lapidaria) y Lato 400/700 (texto).

## Elemento memorable (uno solo)
**"Arma tu escapada"**: eliges qué celebras (cumpleaños, aniversario, pedida de mano, luna de miel, escapada, familia o solo descansar), la habitación (suite loft de dos niveles, suite deluxe, dos camas, doble) y si viene tu mascota. A la derecha se escribe el mensaje en una burbuja de WhatsApp, listo para enviar. No se ha usado antes en el estudio.

## Secciones
1. Portada con el patio azul: H1 "Hotel boutique en una casa colonial de Campeche".
2. Arma tu escapada.
3. En el barrio de San Román (alberca, pet friendly, casa restaurada).
4. Habitaciones, comodidades y tres opiniones.
5. Reserva con nosotros (con el mapa sin clave).

## Revisión contra lo genérico (segunda pasada)
- Nada de murallas y baluartes de banco: solo el hotel. Los carteles "Curiosidades de Campeche" (ilustrados) se dejaron fuera.
- Sin "inversión segura" ni la venta: la página es para huéspedes.
- Sin etiquetas en mayúsculas sobre cada sección (su sitio repetía "Refrescante zona de piscina" en tres títulos), sin numeración 01/02 y sin puntos medios.
- Sin animaciones salvo el cambio de estado de los botones (CSS, respeta `prefers-reduced-motion`).
