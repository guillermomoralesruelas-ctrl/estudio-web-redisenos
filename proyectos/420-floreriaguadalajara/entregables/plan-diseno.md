# Florería Guadalajara: plan de rediseño (método 1.1)

**Sitio original:** https://floreriaguadalajara.com/ (WordPress + WooCommerce; páginas Inicio, Nosotros, Testimonios, Productos, Servicios, Blog, Contacto). Venta en línea con carrito. Entrega a domicilio en Guadalajara, Zapopan, Tonalá y Tlaquepaque.

**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/wp-content/`), textos en `investigacion/crudo.json` (Inicio, Nosotros, Testimonios, Productos, Arreglos de Flores), contacto en `investigacion/resumen.json`.

**Rubro:** florería y regalos (RETAIL). Tipo para Google: `Florist`. **Ciudad:** Guadalajara, Jalisco.

**Sobre las fotos (revisadas antes de construir):**
El clon trae en `sitio/assets/wp-content/uploads/` fotos de producto de alta calidad, cuadradas, tomadas por la florista. Las mejores seleccionadas:
- `2021/05/Ramo100-rosas-rojas.jpg` (1920×1920) — ramo de rosas rojas intensas
- `2021/05/150-Rosas-en-Caja.1.jpg` (1920×1920) — caja de rosas premium
- `2021/05/Club-de-Flores.2.jpg` (1920×1920) — suscripción de flores, colores vivos
- `2017/05/Florero-Capri-1-scaled.jpg` (2560×2560) — florero elegante estilo europeo
- `2021/05/Ramo-150-Rosas-scaled.jpg` (2311×2560) — ramo de 150 rosas grandiosas
- `2021/05/20-Tulipanes.1-1.jpg` (1920×1728) — tulipanes modernos
- `2021/05/100-Tulipanes.jpg` (1080×1155) — 100 tulipanes en florero
- `2022/02/100-Rosas-Blancas-1-scaled.jpg` (2560×2560) — rosas blancas elegantes
- `2021/10/Caja-Mink-corazones.1.jpg` (968×993) — caja mink con corazones
- `2022/03/Orquideas-360.2.jpg` (701×701) — orquídeas 360°
- `2023/01/Girasoles.1.jpg` (1080×1080) — girasoles vivos y festivos
- `2017/05/25-Rosas-Rojas-con-Orquidea.jpg` (1080×1080) — ramo con orquídea
- `2021/06/Ramo-Amalfi.1.jpg` (1445×1445) — ramo estilo Amalfi
- `2021/05/Caja-Corazones.Cubo_-1.jpg` (1095×1095) — cubo de flores y corazones
- `2021/07/Tulipanes-amarillos.1-3.jpg` (1458×1386) — tulipanes amarillos luminosos
- `2021/11/50-Rosas-Amarillas.1.jpg` (1280×1280) — rosas amarillas vivas
- `2021/06/floreriagdl-03.png` (263×121) — logo horizontal
Ninguna trae metadatos de Google Maps/Picasa ni marcas de IA visibles. `floreriagdl-02.png` es el ícono cuadrado. **No se usan** imágenes de `wp-content/plugins/` ni `wp-content/themes/`.
Copias `.webp` en `assets/web/` (`rediseno/fotos-web.mjs`).

## Qué le falta al clon (los "detallitos")
- QA antes: escritorio 9,208 px, móvil 31,739 px, **2 imágenes rotas**, 14 errores de consola (WooCommerce fragments, Revolution Slider JS), 1 recurso fallido (wc-ajax get_refreshed_fragments).
- A ojo: el clon carga WooCommerce completo (carrito, botones "Añadir al carrito", paginación de 55 productos) con JavaScript que no funciona localmente; el slider del hero muestra un placeholder en lugar de la imagen real; el feed de Instagram muestra placeholders.

## Qué tiene que lograr el sitio
1. **Pedir por WhatsApp**: el camino más corto para hacer un pedido, desde la portada.
2. **Encontrar el arreglo para tu ocasión**: el elemento memorable.
3. **Confianza**: Paulina Fernández, más de 20 años de experiencia, entrega el mismo día.
4. **Contacto claro**: horario, WhatsApp, teléfono, aviso de negocio único sin sucursales.

Público: personas de Guadalajara, Zapopan, Tonalá y Tlaquepaque que quieren mandar flores (a su pareja, a su mamá, en boda, en cumpleaños); compra por impulso y por fechas especiales (14 de febrero, 10 de mayo).

## Dirección visual (primera pasada)

La marca usa verde oscuro, blanco, rosa y rojo — los colores naturales de las flores y del follaje.

| Token | Color | Uso |
|---|---|---|
| `fondo` | `#fdfaf6` | Fondo principal — crema floral cálido |
| `oscuro` | `#1a2e1a` | Verde oscuro — encabezado, pie y bandas oscuras |
| `tinta` | `#2a1f1f` | Texto corrido — café oscuro (10:1 sobre fondo) |
| `rosa` | `#c85a7a` | Acento principal — rosa encendido de la marca |
| `rosa-suave` | `#fceef3` | Fondo tenue de secciones con acento |
| `verde` | `#2d6b3e` | Acento secundario — verde follaje |
| `crema` | `#f0e8d8` | Separadores y fondos alternos |

**Tipografía:** **Cormorant Garamond** (600, latin) en títulos — elegancia de florería fina — y **Lato** (400 y 700, latin) en texto corrido y botones.

## Elemento memorable: "¿Para quién es?"

Florería Guadalajara vende arreglos para ocasiones muy específicas: San Valentín, Día de las Madres, cumpleaños, bodas, y "sin razón, solo porque sí". El sitio original usa categorías de WooCommerce pero no conecta emocionalmente con cada ocasión.

El elemento: un **selector de ocasión** con 6 botones táctiles. Al elegir:
- Se muestra la foto del arreglo más representativo de esa ocasión (del clon)
- El nombre del arreglo
- Un botón "Pedir por WhatsApp" con mensaje prellenado distinto por ocasión

Las 6 ocasiones (todas con foto disponible en el clon):
1. **14 de Febrero / San Valentín** → Ramo 100 Rosas (foto: Ramo100-rosas-rojas)
2. **10 de Mayo / Día de las Madres** → Caja Mónaco (foto: 150-Rosas-en-Caja)
3. **Cumpleaños** → Florero Capri (foto: Florero-Capri)
4. **Boda** → 25 Rosas con Orquídea (foto: 25-Rosas-Rojas-con-Orquidea)
5. **Sin ocasión — solo porque sí** → Club de Flores (foto: Club-de-Flores.2)
6. **Algo extra especial** → Ramo 150 Rosas (foto: Ramo-150-Rosas)

Mensajes de WhatsApp por ocasión:
- San Valentín: "Hola, quisiera pedir un arreglo para el 14 de febrero, ¿me pueden orientar?"
- Día de las Madres: "Hola, quisiera pedir un arreglo para el 10 de mayo, ¿qué tienen disponible?"
- Cumpleaños: "Hola, quisiera pedir un arreglo de cumpleaños, ¿me pueden ayudar?"
- Boda: "Hola, me gustaría cotizar arreglos florales para boda, ¿me pueden asesorar?"
- Sin ocasión: "Hola, quisiera enviar flores como detalle, ¿qué me recomiendan?"
- Extra especial: "Hola, busco algo extra especial, ¿tienen algo único que me puedan mostrar?"

## Estructura

1. **Encabezado** (oscuro): logo, aviso "Sin sucursales · Tel. único: 3322106699", enlace WhatsApp.
2. **Portada** (hero): foto de rosas rojas, H1 "Flores que llegan al corazón", botón WhatsApp, horarios y aviso.
3. **"¿Para quién es?"**: selector de 6 ocasiones con foto, nombre de arreglo y WhatsApp.
4. **La florista**: Paulina Fernández, más de 20 años, texto de Nosotros.
5. **Galería de arreglos**: mosaico con 6 fotos reales (tulipanes, orquídeas, girasoles, cajas mink, rosas blancas, ramo Amalfi).
6. **Entrega a domicilio**: zonas, pedir antes de 1:00 pm, aviso del negocio único.
7. **Contacto y horarios**: horario completo, WhatsApp, teléfono, enlace Maps, redes.
8. **Pie** (oscuro): logo, redes, copyright.
9. **Barra fija en celular**: WhatsApp + llamar + cómo llegar.

## Revisión contra lo genérico (segunda pasada)

- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02, sin puntos medios como separador.
- El selector de ocasión: botones con icono de flor, no pestañas aburridas; el contenido hace fade CSS al cambiar.
- El mosaico de galería: tamaños distintos, no grilla de cuadrados idénticos.
- Animación solo en el selector (fade), quieto con `prefers-reduced-motion`.
- Sin carrito, sin "Añadir al carrito": el camino de compra va por WhatsApp.
- Sin inventar: no se publican precios en el selector (hay precios en WooCommerce pero se omiten porque el rediseño va por WhatsApp donde la florista puede orientar).
