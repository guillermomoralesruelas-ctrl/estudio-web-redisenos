# Cancun Catamarans: plan de rediseño (método 1.1)

**Sitio original:** https://cancuncatamarans.mx/ (inglés, con ES)
**Materia prima:** clon en `../sitio/` (fotos en `sitio/assets/uploads/`), textos de inicio, tours, flota, promociones y transportación en `investigacion/crudo.json`. La red de la nube no llega al sitio.
**Rubro:** tours en catamarán a Isla Mujeres, compartidos y privados, con flota de 20 barcos (36 a 82 pies) y transportación desde hoteles. **Ciudad:** Cancún, Quintana Roo (Marina Playa Tortugas, Blvd. Kukulcán km 6.5).
**Idioma del rediseño:** inglés, como el sitio (su público son turistas de EUA y Canadá; tiene línea gratuita +1 866).

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: carrusel con seis H1 y cinco videos de YouTube incrustados.
- Las fotos de cada barco de la flota no se bajaron (solo las de portada, ocasiones y tours).

## Qué tiene que lograr el sitio
1. Que un grupo sepa en qué barco y en qué tour cabe (van de 2 a 100 personas).
2. Qué incluye cada tour, cuánto cuesta y qué no incluye (docking fee y propinas).
3. Pedir por WhatsApp el tour con el tamaño del grupo y la zona del hotel.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| abismo | `#0b3b4a` | Fondo oscuro y texto |
| espuma | `#f3faf9` | Fondo claro |
| laguna | `#7fe0d6` | Acento sobre oscuro (el turquesa de Isla Mujeres) |
| coral | `#b8402a` | Botones |
| bruma | `#4b6570` | Texto secundario |
| arrecife | `#0e7a74` | Etiquetas sobre claro |
| sol | `#ffd9a0` | Precios sobre oscuro |

Contrastes: abismo/espuma 11.42, blanco/coral 5.52, laguna/abismo 7.78, coral/espuma 5.22, bruma/espuma 5.85, arrecife/espuma 4.90, sol/abismo 9.02.
Fuentes: Bricolage Grotesque 800 (títulos) y Figtree 400/600/700 (texto).

## Elemento memorable (uno solo)
**"How many are coming aboard?"**: un control de tamaño de grupo (2 a 100). Debajo, los 20 catamaranes de la flota dibujados a escala por su eslora, de 36 a 82 pies; los que no alcanzan se apagan y el más chico que sí alcanza se marca. A un lado, los tours donde cabe ese grupo, con su precio (el compartido multiplicado por persona, más el docking fee de $20 por persona que su sitio solo menciona en promociones) y, si se elige zona de hotel, el transporte redondo para ese número de pasajeros. El WhatsApp manda "We're 18 people, staying in Playa del Carmen…". No se ha usado antes en el estudio.

## Secciones
1. Portada: H1 "Catamaran tours to Isla Mujeres from Cancún", desde $75 USD, open bar y snorkel incluidos.
2. How many are coming aboard? (flota + tours + transporte).
3. Tours: cinco tarjetas con foto, horas, capacidad, precio y qué incluye.
4. Occasions: despedidas, familias, romance y empresas, con su WhatsApp.
5. Deals: tres promociones y los cupones, con la nota del docking fee.
6. Reviews (sus seis testimonios, sin calificación propia en JSON-LD).
7. Contacto: marina con Google Maps, teléfonos, WhatsApp, correo.
Barra fija en el celular: WhatsApp, Call, Directions.
