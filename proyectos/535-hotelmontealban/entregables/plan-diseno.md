# Hotel Monte Albán: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://hotelmontealban.com/ (app de React; el HTML llega vacío y todo se arma con JavaScript)
**Materia prima:** textos en `investigacion/crudo.json` y en el JavaScript del sitio en vivo (revisado el 2026-09-29). El clon no traía fotos; se bajaron de `hotelmontealban.com/src/assets/images/` las cinco reales que responden (fachada, Guelaguetza en el patio y las tres habitaciones) a `assets/originales/`. Las otras 12 rutas de su código devuelven la página en lugar de la imagen. No se usaron las dos llamadas `regenerated_image` (patio y restaurante). El clon (`sitio/`) no se tocó.
**Rubro:** hotel de 16 habitaciones en una casona del siglo XVIII, General Antonio de León 1, Centro, Oaxaca de Juárez, a menos de 30 pasos de la Catedral.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: el HTML no tiene contenido (todo lo arma el JavaScript) y el clon no trae imágenes.

## Qué tiene que lograr el sitio
1. Que el viajero entienda cómo es la casona y qué hay en ella (patio, restaurante, pasillos, habitaciones).
2. Tarifas claras por habitación y ocupación.
3. Reservar directo por WhatsApp, sin anticipo.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| tinta | `#231a14` | Texto, portada y contacto |
| cal | `#faf5ea` | Fondo |
| terracota | `#9a3f28` | Botones y precios (el rojo de su logotipo y de sus vigas) |
| cantera | `#3f5e3a` | El plano (la piedra verde de Oaxaca) |
| tierra | `#6a5e52` | Texto secundario |
| arena | `#efe4cc` | Fondo alterno y del plano |
| ocre | `#e2b04a` | Acento sobre oscuro (el amarillo de los muros de sus habitaciones) |

Contrastes: tinta/cal 15.71, blanco/terracota 6.74, terracota/cal 6.20, cantera/cal 6.72, tierra/cal 5.79, ocre/tinta 8.58, cantera/arena 5.79.
Fuentes: Spectral 500 y cursiva 400 (títulos, serif de libro antiguo) y Work Sans 400/600 (texto).

## Elemento memorable (uno solo)
**"Recorre la casona antes de llegar"**: un plano sencillo de la mansión alrededor de su patio, con cada zona en forma de arco (habitaciones arriba, pasillos, patio y restaurante en medio, la entrada abajo y la Catedral a la salida). Al tocar una zona se ve qué hay ahí con su foto cuando la hay: la Guelaguetza en el patio (con reserva de boletos), el restaurante y su horario, las mesas de trabajo de los pasillos, las habitaciones sin elevador y la entrada frente a la Catedral. No se ha usado antes en el estudio.

## Secciones
1. Portada con la fachada: H1 "Hotel en el centro de Oaxaca, frente a la Catedral".
2. Recorre la casona antes de llegar.
3. Habitaciones y tarifas (sencilla, triple, cuádruple y persona extra).
4. Antes de venir (sin anticipos, mayores de 12, pet friendly, sin elevador).
5. Reserva directo: WhatsApp, teléfono, dirección, correo y el mapa que ya usa su sitio.

## Revisión contra lo genérico (segunda pasada)
- Nada de papel picado ni alebrijes de adorno: los colores salen de sus vigas, sus muros y su logotipo.
- El plano no es un mapa arquitectónico exacto (no lo publican): es un esquema de cómo se reparte la casona según su propio texto, y se presenta así.
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02 y sin puntos medios como separadores (su sitio usa "Casona Colonial • S. XVIII"; aquí no).
- Sin "preservación histórica certificada" ni "reservación 100% segura": se dice lo verificable (sin anticipos, pago al llegar).
- Sin animaciones salvo el cambio de color de las zonas (CSS, respeta `prefers-reduced-motion`).
