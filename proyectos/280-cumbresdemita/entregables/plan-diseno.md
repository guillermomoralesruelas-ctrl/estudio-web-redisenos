# Cumbres de Mita: plan de rediseño (método 1.1)

**Sitio original:** https://www.cumbresdemita.com/ (español, con ES/EN)
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/`), textos de inicio, lotes, Nahya, Kumo Living y amenidades en `investigacion/crudo.json`. La red de la nube no llega al sitio.
**Rubro:** desarrollo inmobiliario de CAM Grupo, comercializado por Century 21 CAM Grupo: 157 lotes, Nahya Residences (8) y Kumo Living (27). **Ciudad:** Corral del Risco, Punta de Mita, Nayarit (Carretera Federal 200). La base decía Sayulita.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json`. En /lotes los contadores de especificaciones salen en 0 ("0 lotes disponibles", "$0 MXN/m²").
- Su sitio avisa que "las imágenes son renders": se usan así y se dice en el pie.

## Qué tiene que lograr el sitio
1. Que se entienda cuánto queda (12 de 157 lotes) y el precio de cada uno.
2. Solicitar información de un lote o agendar un tour por WhatsApp.
3. Kumo Living con sus tres tipologías y precios, y Nahya como caso vendido.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| selva | `#1f3d2b` | Fondo oscuro y títulos |
| arena | `#f4efe6` | Fondo claro |
| trigo | `#d9c9a3` | Acentos sobre selva |
| teja | `#a14f2a` | Botones y lotes disponibles |
| musgo | `#566058` | Texto secundario |

**Tipografía:** DM Serif Display (títulos) y Manrope (texto), locales con @fontsource.

## Elemento memorable
**"Quedan 12 de 157":** una cuadrícula de 157 cuadritos, uno por lote: 145 apagados (vendidos en preventa) y 12 encendidos con su número. Se puede filtrar por tamaño (compacto, mediano, amplio, como su sitio los clasifica) y al tocar uno aparece su ficha: manzana, calle, superficie, frente por fondo, lados y precio; el WhatsApp sale con el número de lote. Es su dato más fuerte (145 vendidos) dicho de forma visual y honesta.

## Estructura
1. Encabezado con nombre, secciones y WhatsApp.
2. Portada: H1 "Punta de Mita empieza aquí", 192 unidades, desde $9,500 MXN/m², vista aérea.
3. Quedan 12 de 157 (elemento memorable).
4. Kumo Living: tres tipologías con precio desde.
5. Nahya Residences: 8 de 8 vendidas.
6. Amenidades con su estado (construida / en planeación).
7. El ecosistema Punta de Mita (sus cuatro datos).
8. Contacto y aviso legal ("los precios son indicativos… las imágenes son renders"). Barra fija en el celular.

## Qué se evita (revisión contra lo genérico)
- "Los precios de preventa son los mejores que tendrá este desarrollo" y cualquier promesa de plusvalía.
- Contadores animados en 0 y la foto del golf.
- Filas de tarjetas idénticas: los lotes van en la cuadrícula y una sola ficha.
