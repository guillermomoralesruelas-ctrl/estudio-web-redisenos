# Dra. Dafne Arellano, Medicina Estética y Láser (Puebla): plan de rediseño (método 1.1)

**Sitio original:** https://www.drdafnearellano.com/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/`), textos en `investigacion/crudo.json` (inicio, portal, /doctora/, /wellness/, /longevidad/), contacto en `investigacion/resumen.json`.
**Rubro:** medicina estética y láser (en la BD, ESTETICA). Consultorio de la Dra. Dafne Arellano Montalvo dentro de la Clínica Dermatológica y Cirugía Estética de Puebla, fundada en 1971. **Ciudad:** Puebla, Pue. (C. 20 Sur 2539, Col. Bella Vista).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 10,005 px y móvil 16,581 px de alto; desborde 0, 56 imágenes, 0 rotas; 1 error de consola en móvil (política de permisos `compute-pressure`, de un script de terceros).
- A ojo: el clon está bastante completo (sitio en Astro), pero es muy largo: el inicio repite la misma información (VISIA, credenciales, tres generaciones) en varias secciones, y la página /doctora/ supera las 700 líneas de texto. El menú lleva más de 50 enlaces.
- Fotos: solo 3 fotos propias (retrato de la doctora a 420 × 630 px, fachada de 1991 y el Dr. Francisco en el congreso de Nueva York de 1992). Las nueve hojas de otoño son adorno de campaña y las ocho fotos de equipos (Alma, Lumenis, Fotona, EndyMed, HydraFacial, VISIA) son del fabricante: no se usan. Sin EXIF de Google ni credenciales C2PA en las tres fotos.

## Qué tiene que lograr el sitio
1. Que la paciente agende la **valoración** por WhatsApp (el único camino que el sitio original ofrece en todos sus botones), con el tratamiento que le interesa ya escrito.
2. Que confíe en la médica: formación verificable (dos cédulas SEP), dónde se entrenó en cada técnica y que ella aplica personalmente.
3. Que sepa lo que cuesta empezar (valoración $600 reembolsable) y los precios "desde" que ya publica.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| `vino` | `#7A1E28` | Su monograma DA y botones (del favicon y el CSS del clon, `#882220`) |
| `vino-oscuro` | `#4E1219` | Fondos oscuros del mapa y del pie |
| `crema` | `#FAF7F3` | Fondo general (su favicon) |
| `arena` | `#EFE7DC` | Bloques secundarios |
| `oro` | `#C9A876` | Líneas del mapa y detalles (su CSS, `#C9A876`) |
| `tinta` | `#2A2224` | Texto (su CSS, `#2a2224`) |

**Tipografía:** las de la marca: Playfair Display (títulos) y Montserrat (texto), de @fontsource, solo latín.

## Elemento memorable
**"¿Dónde aprendió lo que te va a aplicar?"**: un mapa de formación. Dos láminas (México y Colombia a la izquierda, Europa a la derecha), sin contornos de países, solo con paralelos, los nombres del Golfo de México, el Mar Caribe, el Pacífico y el Mediterráneo, y un punto por cada ciudad donde la doctora se formó según sus 31 constancias publicadas en /doctora/: Monterrey, Ciudad de México, Veracruz, Puebla, Cancún, Bogotá, Barcelona, Niza, Mónaco, París y Gante (coordenadas reales de cada ciudad).

Arriba, eliges un tratamiento (toxina botulínica, ácido hialurónico, armonización facial, bioestimuladores, láser, hilos y rinomodelación, corporal, longevidad o "toda su formación"): se encienden solo las ciudades donde tomó ese entrenamiento, una línea dorada une cada una con la 20 Sur de Puebla, y abajo aparece la lista de esas constancias con año, institución y ciudad (las que no dicen sede van como "sin sede indicada"), el precio "desde" si lo publica y el botón de WhatsApp con el tratamiento escrito.

Sale del negocio: su propio sitio dedica una página entera a sus diplomas y responde "¿Dónde se entrenó específicamente la Dra. Dafne para inyectables faciales?" como pregunta frecuente. Es distinto de los ya usados en `METODOS.md` (no es pase de abordar, ni plano a escala con círculos de distancia, ni rosa de los vientos, ni silueta del cuerpo, ni línea de tiempo de generaciones, que es lo propio de la clínica de la familia en `235-clinicadermatologicay`). No promete resultados: solo dice dónde y cuándo se formó.

La relación tratamiento–constancia es nuestra lectura del título de cada diploma (pendiente de confirmar con la doctora, en `CAMBIOS.md`).

## Estructura
1. Encabezado: monograma DA dibujado, "Dra. Dafne Arellano, Medicina Estética y Láser", menú corto (Valoración, Formación, Tratamientos, La clínica, Contacto) y WhatsApp.
2. Portada: H1 "Medicina estética y láser en Puebla", su texto de presentación, las dos cédulas con enlace al Registro Nacional de Profesionistas, "Clínica desde 1971", horario y su retrato.
3. La valoración: qué incluye (VISIA, historia clínica, plan escrito con presupuesto y tres escenarios), cuánto dura (45 a 60 min), cuánto cuesta ($600 reembolsable) y cómo llegar preparada (sus cuatro recomendaciones no médicas).
4. Mapa de formación (elemento memorable).
5. Tratamientos y precios: los cinco precios que publica y el catálogo por familia (faciales, corporales, dermatología estética, cosmetología) en texto, más la plataforma de equipos en una línea.
6. Cómo trabaja: sus cuatro puntos de metodología (VISIA, producto original con caja y lote, aplicación personal, hialuronidasa en consultorio) y a quién deriva (cirugía, dermatología de patologías complejas, embarazo y lactancia, menores).
7. La clínica desde 1971: fachada de 1991 y el Dr. Francisco en 1992, con las tres generaciones en un párrafo.
8. Dos opiniones textuales con su fuente (Google y Doctoralia), sin números de calificación (el sitio da 143 y 181 reseñas).
9. Contacto: dirección, horario, teléfono, correo, Maps y WhatsApp.
10. Pie con su aviso legal ("Los resultados pueden variar. Este sitio no sustituye una consulta médica profesional.").
11. Barra fija en el celular: WhatsApp, Llamar y Cómo llegar.

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas sobre cada sección, numeración 01/02 (el original la usa en el Protocolo Estrella: se quita) y puntos medios como separador (el original los usa en casi cada línea).
- Animar cada sección al hacer scroll: solo el mapa tiene transición, y se apaga con `prefers-reduced-motion`.
- Tarjetas idénticas repetidas: los precios van como lista de carta, no como fila de tarjetas.
- Las cifras de marketing del original ("10,000+ procedimientos exitosos y resultados comprobados", "100 %") y los sellos de Google o LegitScript: no se repiten (sin afirmaciones de resultados).
- Fotos del fabricante de los equipos y las hojas de otoño de la campaña.
- Inventar reseñas, fotos, precios o datos del negocio.
