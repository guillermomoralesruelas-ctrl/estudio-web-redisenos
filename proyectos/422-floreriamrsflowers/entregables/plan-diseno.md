# Florería Mrs. Flowers: plan de rediseño (método 1.1)

**Sitio original:** https://www.mrsflowers.com.mx/ (WordPress + WooCommerce; páginas Inicio, Flores a Domicilio Hoy, Ramos, Arreglos Funerales, Tulipanes). Venta en línea con carrito. Entrega a domicilio en CDMX y Edomex.

**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/wp-content/`), textos en `investigacion/crudo.json` (Inicio, Flores con Entrega Hoy, Ramos, Funerales, Tulipanes), contacto en `investigacion/resumen.json`.

**Rubro:** florería y regalos (RETAIL). Tipo para Google: `Florist`. **Ciudad:** Ciudad de México, CDMX.

**Sobre las fotos (revisadas antes de construir):**
El clon trae en `sitio/assets/wp-content/uploads/` una mezcla de fotos reales del WhatsApp y fotos generadas con ChatGPT. Las fotos propias identificadas (sin nombre ChatGPT-Image, con contenido real):
- `2017/12/Ramo-de-50-Rosas-2.png` (540x540) — ramo de 50 rosas rosadas, foto propia
- `2020/05/Envia-flores-de-amor-en-CDMX-Ramo-de-rosas-disponible-Mrs.-Flowers.jpg` (590x701) — ramo de rosas, foto publicitaria
- `2022/10/Ramo-de-Rosas-Inglesas.webp` (540x540) — ramo de rosas inglesas pastel
- `2023/01/Coronas-para-Muertos.jpg` (1080x1440) — corona para Día de Muertos
- `2026/01/Ramo-de-50-rosas-negras.png` (540x540) — ramo 50 rosas negras
- `2026/02/Ramo-con-80-Rosas-Mixtas.jpg` (540x540) — ramo mixto 80 rosas
- `2022/08/Cono-de-Girasol-con-Rosas-1-450x450.png` (450x450) — cono de girasoles y rosas
- `2026/09/WhatsApp-Image-2026-08-26-at-4.20.45-PM-450x450.jpeg` (450x450) — girasoles y mini rosas
- `2018/03/WhatsApp-Image-2026-07-23-at-5.04.07-PM-1-450x450.jpeg` (450x450) — ramo 24 rosas rojas
- `2018/03/WhatsApp-Image-2026-07-23-at-5.04.07-PM-450x450.jpeg` (450x450) — caja 25 rosas rojas
- `2018/03/WhatsApp-Image-2026-07-23-at-5.04.07-PM-2-450x450.jpeg` (450x450) — ramo 12 gerberas
- `2026/06/Fondo-de-flores-Mrs-Floweres-1536x864.jpg` (1536x864) — fondo floral del hero
**NO se usan** imágenes de `wp-content/plugins/`, las `ChatGPT-Image-*` (generadas con IA), ni logos.
Copias `.webp` en `assets/web/` (`rediseno/fotos-web.mjs`).

## Qué le falta al clon (los "detallitos")
- QA antes: escritorio 16,297 px, móvil 16,550 px, **10 imágenes rotas** en escritorio, 9 en móvil, 1,155/2,112 errores de consola (WooCommerce JavaScript), 1 recurso fallido (wc-ajax get_refreshed_fragments).
- A ojo: el clon carga WooCommerce completo (carrito, botones "Añadir al carrito") con JavaScript que no funciona localmente; la mayoría de fotos de productos son generadas con IA (ChatGPT-Image-*) pero el cliente las usa como si fueran propias.

## Qué tiene que lograr el sitio
1. **¿Llega hoy?** — El elemento memorable: reloj en tiempo real que dice si aún se puede ordenar con entrega hoy (antes de las 6 PM, horario de CDMX).
2. **Pedir por WhatsApp**: el camino más corto para hacer un pedido.
3. **Confianza con fotos reales**: usar solo las fotos genuinas del negocio.
4. **Contacto claro**: WhatsApp, zonas de entrega CDMX, entrega en 2-3 horas.

Público: personas en CDMX y Edomex que quieren mandar flores hoy mismo; compra urgente (aniversario, cumpleaños, condolencias) con entrega en pocas horas.

## Dirección visual (primera pasada)

La marca usa verde oscuro, dorado y rosa — colores del logo (letras doradas sobre verde oscuro) y de las rosas.

| Token | Color | Uso |
|---|---|---|
| `fondo`      | `#fdf8f0` | Fondo principal — crema floral cálido |
| `oscuro`     | `#1a2e24` | Verde oscuro — encabezado, pie y bandas oscuras |
| `tinta`      | `#2a1f1a` | Texto corrido — café oscuro (10:1 sobre fondo) |
| `rosa`       | `#e06b8a` | Acento principal — rosa encendido de las flores |
| `rosa-suave` | `#fceef3` | Fondo tenue de secciones con acento |
| `dorado`     | `#b8962e` | Acento secundario — dorado del logo |
| `crema`      | `#f0e6d0` | Separadores y fondos alternos |

**Tipografía:** **Cormorant Garamond** (600, latin) en títulos — elegancia floral — y **Lato** (400 y 700, latin) en texto corrido y botones.

## Elemento memorable: "¿Llega hoy?"

El servicio principal de Mrs. Flowers es la entrega el mismo día en CDMX. El corte para ordenar es **antes de las 6 PM** (del clon: "Ordena antes de las 6 PM"). El elemento muestra un reloj en tiempo real con la hora de Ciudad de México y una cuenta regresiva.

**Comportamiento (hora de Ciudad de México, con `Intl.DateTimeFormat` zona `America/Mexico_City`):**
- **8:00 AM – 5:59 PM:** "Ordena antes de las 6 pm y tu arreglo llega hoy. Te quedan [H horas M minutos]." + barra de progreso visual del tiempo disponible + botón WhatsApp con mensaje de entrega hoy.
- **6:00 PM – 11:59 PM:** "El horario de entrega de hoy ya cerró. Tu arreglo llega mañana si ordenas ahora."
- **12:00 AM – 7:59 AM:** "Estamos preparando los arreglos del día. Las entregas empiezan a las 8:00 am."

Se actualiza cada 30 segundos con `setInterval`. Respeta `prefers-reduced-motion`.

Posición: inmediatamente después del hero (primera sección de contenido).

## Estructura

1. **Encabezado** (oscuro): logo, número de teléfono, enlace WhatsApp.
2. **Portada** (hero): fondo con flores, H1 "Flores a domicilio en CDMX con entrega hoy", botón WhatsApp.
3. **"¿Llega hoy?"**: reloj en tiempo real, cuenta regresiva hasta las 6 PM, barra de progreso.
4. **Galería de arreglos reales**: mosaico con fotos genuinas del negocio.
5. **El servicio**: Entrega express en 2-3 horas, zonas clave (Polanco, Condesa, Roma, Santa Fe, Coyoacán), pago seguro, fotos por WhatsApp antes de enviar, facturación.
6. **Categorías**: Ramos, Rosas, Tulipanes, Arreglos Funerales, Girasoles, Coronas — con botón por categoría que lleva a WhatsApp.
7. **Contacto**: WhatsApp, teléfono, enlace Maps.
8. **Pie** (oscuro): logo, links, copyright.
9. **Barra fija en celular**: WhatsApp + llamar + cómo llegar.

## Revisión contra lo genérico (segunda pasada)

- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02.
- El reloj "¿Llega hoy?" no es un banner estático: tiene hora real y cuenta regresiva visual.
- La galería: tamaños distintos en mosaico asimétrico, no cuadrícula uniforme.
- Animación solo en el reloj y fade de secciones; quieto con `prefers-reduced-motion`.
- Sin carrito, sin "Añadir al carrito": el camino de compra va por WhatsApp.
- No se usan las imágenes generadas con ChatGPT que el sitio original usa como fotos de producto.
- Sin degradados de moda sin razón.
