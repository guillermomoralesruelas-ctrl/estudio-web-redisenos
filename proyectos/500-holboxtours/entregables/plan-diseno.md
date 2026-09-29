# Holbox Tours: plan de rediseño (método 1.1)

Tours en Isla Holbox, Quintana Roo, de la red HolboxGuide / Holbox Adventure: nado con tiburón ballena (temporada del 1 de junio al 15 de septiembre de 2026; compartido desde $2,999 por persona o privado VIP desde $24,000 de 1 a 5 personas), bioluminiscencia, Cabo Catoche, recorridos por la isla y excursiones de un día a Chichén Itzá, Ek Balam y Tulum. Público: turistas que ya están en Holbox o planean ir, en pareja, familia o grupo.

Fuentes: clon en `sitio/`, `investigacion/crudo.json` y la página en vivo leída con curl el 2026-09-29 (`entregables/textos-sitio-en-vivo-2026-09-29.txt`).

## Qué le falta al clon (los "detallitos")

- El clon carga sin su CSS/JS (35 recursos fallidos, 21 imágenes rotas).
- Fotos: la playa con su marca de agua, dos de nado con tiburón ballena tomadas con cámara de acción, el letrero de Holbox, el muelle y el faro de Cabo Catoche. Las de bioluminiscencia, Chichén Itzá, Ek Balam, Tulum y dos de tiburón de estudio parecen de banco: no se usan.
- Las tarjetas traen etiquetas ("SALE", "PRIVATE") pegadas en la imagen: se recortan.

## Qué tiene que lograr el sitio

1. Que el viajero entienda la temporada del tiburón ballena y elija entre compartido y privado según cuántos van.
2. Que reserve por WhatsApp con el tour y el número de personas escritos.
3. Que vea los demás tours y excursiones con precio, días de salida y lo que incluyen.

## Dirección visual

| Token | Color | Uso |
|---|---|---|
| rosa | `#d4145a` / `#a80f47` | El rosa flamenco de su logo: botones y precios |
| profundo | `#062c42` | Fondos de mar profundo |
| turquesa | `#3fd0c9` | El agua de Holbox, acentos |
| arena | `#fbf6ec` | Fondo |

Contrastes en `rediseno/src/index.css`. **Tipografía:** Baloo 2 (títulos, redonda como su logo) y Outfit (texto), locales con @fontsource.

## Elemento memorable

**"Tu grupo junto al gigante"**: un tiburón ballena de 15 metros dibujado a escala (su texto: "algunos llegan a crecer más de 15 metros") y, debajo, tu grupo en fila, cada persona de 1.70 m. Mueves el número de personas y los nadadores se agregan; dice cuánto mide tu grupo en fila y cuántos caben a lo largo del tiburón. Al lado, el precio del tour compartido para tu grupo y el del privado VIP (por persona, si son hasta 5), con WhatsApp para cada uno.

### Revisión contra lo genérico

- Sale de su tema central (el tiburón ballena) y de sus dos precios reales.
- No es la lancha con asientos ni la profundidad de un cenote: es una comparación de tamaño que responde "¿compartido o privado?".
- Aclara que la escala es aproximada y que los tiburones pueden medir menos.

## Estructura

1. Encabezado con su logo y WhatsApp.
2. Portada: foto de nado con el tiburón, H1, temporada, qué incluye y precio desde.
3. "Tu grupo junto al gigante", foto y qué incluye.
4. Tours en la isla: bioluminiscencia, Cabo Catoche, Descubre Holbox y Tour clásico 3 islas.
5. Excursiones de un día: Chichén Itzá, Río Lagartos–Ek Balam y Tulum–Cobá, con días de salida.
6. Isla Holbox: su texto, transporte y guía.
7. Contacto: WhatsApp, teléfono, correo y redes.
8. Barra fija en el celular: WhatsApp, Llamar, Correo.

## Qué se evita

- Fotos de banco y las etiquetas "SALE/PRIVATE".
- El título y la descripción en inglés de su página en español.
- Inventar dirección u horario: no los publica.
