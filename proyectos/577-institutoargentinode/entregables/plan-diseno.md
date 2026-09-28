# IAAC: plan de rediseño (método 1.1)

**Sitio original:** https://iaacmexico.com/
**Materia prima:** clon en `../sitio/` (cocinas de cinco sedes en miniaturas de 370 px y el banner "Inicio de clases"), portada y páginas de sede en `investigacion/crudo.json`, y las páginas de cada programa leídas con curl el 2026-09-28 (texto en `entregables/textos-sitio-en-vivo-2026-09-28.txt`).
**Rubro:** escuela de gastronomía. **Sedes:** Guadalajara, León, Querétaro (Centro y Campanario), Mérida y Toluca. La lista del lote decía "Ciudad de México, Polanco/Condesa", pero su sitio no tiene sede en la CDMX.

## Qué le falta al clon (los "detallitos")
- La portada no dice qué se aprende en cada programa: el plan de estudios está en páginas separadas, y cada una es distinta.
- Las páginas de programa solo muestran cuatro de sus seis sedes, y la de Mixología repite un párrafo del programa de Sommelier.
- No hay precios, horarios ni fechas: todo pasa por un formulario.

## Qué tiene que lograr el sitio
1. Que alguien que quiere estudiar cocina compare los programas por lo que va a aprender, clase por clase.
2. Que pida informes por WhatsApp con el programa y la sede ya escritos.
3. Que encuentre su sede y cómo llegar.

## Dirección visual
Cocina profesional: carbón de su marca, acero inoxidable, papel de comanda y rojo chile.
| Token | Color | Uso |
|---|---|---|
| carbón / carbón-medio | #22272d / #2f353c | portada, riel, contacto |
| acero-claro / papel | #eef0f2 / #fbf8f1 | fondo / comandas |
| chile / brasa | #b8321a / #ff9a70 | botones / acentos sobre oscuro |

**Tipografía:** Archivo (títulos y texto) e IBM Plex Mono (comandas y datos).

## Elemento memorable
**"Tu programa, comanda por comanda"**: eliges uno de sus ocho programas y su plan de estudios aparece como comandas de cocina colgadas de un riel de acero: una comanda por módulo, con sus clases numeradas en orden (Chef Profesional: 45 clases en 6 comandas). Arriba, tipo, duración y turno; abajo, la sede y un WhatsApp que ya dice programa y sede.

## Estructura
1. Portada con la foto del chef y sus alumnos, H1, cómo se estudia y sus cifras.
2. Tu programa, comanda por comanda.
3. Sedes con su cocina, dirección, cómo llegar y WhatsApp.
4. Master Class, team building, Bon Appétit y bolsa de trabajo; por qué estudiar ahí.
5. Contacto.

## Qué se evita
- Íconos de "por qué elegirnos" como imágenes, slides con texto, contadores animados y popups.
- Precios y horarios que no publican.
