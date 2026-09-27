# Baan Singto Central: plan de rediseño (método 1.1)

**Sitio original:** https://baansingtocentral.com/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/`), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`, y dos imágenes suyas del clon: el horario de abril de 2026 y la tabla de mensualidades.
**Rubro:** academia de Muay Thai y artes marciales. **Ciudad:** Zapopan, Jalisco (Plaza La Perla).

## Qué le falta al clon (los "detallitos")
- 56 imágenes rotas y 34 a 35 recursos fallidos (qa-rediseno.mjs, parte "antes").
- Página de 17,817 px de alto en escritorio y 10,627 px en celular.
- El horario y los precios solo existen como imágenes o enlaces a Google Drive: no se pueden leer en el celular ni buscar.
- Textos de plantilla en inglés y de otra agencia (ver `OPORTUNIDADES.md`).

## Qué tiene que lograr el sitio
1. Que la persona sepa **cuándo** puede entrenar lo que le interesa y **cuánto** le cuesta, y pida informes por WhatsApp.
2. Llegar al local: segundo piso de Plaza La Perla, con Google Maps.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| tinta | #121212 | Fondos oscuros, texto de títulos |
| rojo | #c62828 | Botones, Muay Thai (blanco encima 5.62:1) |
| rojo-hondo | #9e1b1b | Hover, precios destacados (8.00:1) |
| oro | #e8c872 | Detalles sobre tinta (11.54:1), como sus cinturones |
| papel | #f6f1e7 | Fondo claro (tinta encima 16.64:1) |
| azul, petróleo, verde, morado, rojo-claro | #0063ad, #007599, #4a7a00, #6b4bb0, #d0463f | Color por disciplina en el horario, tomados de su imagen de horarios (morado es nuestro, para Defensa personal). Blanco encima: 6.20, 5.24, 5.15, 6.44 y 4.54:1 |

**Tipografía:** Oswald (títulos en mayúsculas, como sus letreros) y Barlow (texto). @fontsource, solo latino.

## Elemento memorable
**"Arma tu semana"**: eliges las disciplinas y el horario real de abril de 2026 se ilumina, cuenta cuántas clases tienes a la semana y te dice qué mensualidad te toca y cuánto pagas el primer mes (con inscripción). El WhatsApp sale con tus disciplinas escritas.

## Estructura
1. Portada con foto de pelea, H1 y dos acciones.
2. Arma tu semana (horario + cálculo).
3. Artes marciales (su lista, Kru Carlos y fotos de pelea).
4. Fotos de la academia.
5. Precios.
6. Plaza La Perla (dirección, Maps, teléfono, redes).
7. Pie y barra fija en el celular (WhatsApp, Llamar, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas sobre cada sección, numeración 01/02 y puntos medios como separador.
- Animar cada sección al hacer scroll (solo la entrada de la portada).
- Tarjetas idénticas repetidas (artes y precios son listas con filetes).
- Inventar reseñas, fotos, precios o datos del negocio.
