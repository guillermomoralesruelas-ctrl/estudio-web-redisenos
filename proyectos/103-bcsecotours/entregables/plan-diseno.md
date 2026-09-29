# BCS Eco Tours: plan de rediseño (método 1.1)

**Sitio original:** https://loretobaytours.com/
**Materia prima:** clon en `../sitio/` (seis fotos que parecen suyas: playa con dron, caleta, lancha Keiko, pangas con turistas, dorado y mariscos; más fotos de fauna y paisaje que parecen de banco), `investigacion/crudo.json` (en inglés) y las páginas en español leídas con curl el 2026-09-28 (`entregables/textos-sitio-en-vivo-2026-09-28.txt`).
**Rubro:** tours marinos (safaris, ballena azul, snorkel, buceo y pesca deportiva). **Ciudad:** Loreto, Baja California Sur.

## Qué le falta al clon (los "detallitos")
- La ficha de los tres safaris dice "Duración: 1 horas", pero el texto dice 5 a 6 horas.
- La capacidad (10 a 16 pasajeros) y lo que significa compartido, privado y especial están enterrados en textos largos; el "Safari Especial" se llama "Safari Marino Exclusivo" y se describe como "Safari Privado".
- La página de ballena azul (/ballenaazul/) tiene otros precios y otra capacidad (10 personas) que la página de tours.

## Qué tiene que lograr el sitio
1. Que el viajero entienda en un vistazo los tres safaris, su precio y qué incluye.
2. Que calcule cuánto le cuesta a su grupo y reserve por WhatsApp con safari, pasajeros, fecha y actividades.
3. Que sepa de dónde sale (Marina de Loreto) y cómo llegar a la oficina.

## Dirección visual
Mar de Cortés y desierto: azul profundo, turquesa de Isla Coronado, arena y el ocre de la Sierra de la Giganta.
| Token | Color | Uso |
|---|---|---|
| abismo / mar | #06323d / #0b5566 | portada, calculadora, contacto |
| turquesa / espuma | #5fd3cc / #cfe9e6 | acentos sobre oscuro |
| arena / concha | #f5ede0 / #fffaf2 | fondos y tarjetas |
| sol / ocre | #f0a04b / #b4471f | botón principal / antetítulos |

**Tipografía:** Fraunces (títulos) y Work Sans (texto).

## Elemento memorable
**"Tu lugar en la Keiko"**: la lancha Keiko vista desde arriba con sus 16 lugares. Eliges safari (compartido, privado o especial) y cuántos van: tus lugares se pintan en la lancha, los demás quedan para otros viajeros (compartido) o libres para tu grupo (privado). Da el precio desde para tu grupo, el aviso de capacidad y un WhatsApp con safari, pasajeros, fecha y actividades.

## Estructura
1. Portada con su foto de dron, H1 y datos clave.
2. Los tres safaris, las islas, la fauna y el equipo incluido.
3. Tu lugar en la Keiko.
4. Ballena azul: temporada, precios de su página e itinerario.
5. Snorkel, buceo y pesca; del mar a la mesa.
6. Las lanchas Keiko y su equipo; opiniones; preguntas; contacto.

## Qué se evita
- Tres H1 en la portada, carruseles, la foto de ballena con marca de agua ajena, fotos de fauna presentadas como suyas.
- Duraciones y precios que no coinciden: se usan los del texto de cada safari.
