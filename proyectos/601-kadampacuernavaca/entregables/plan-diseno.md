# Kadampa Cuernavaca: plan de rediseño (método 1.1)

**Sitio original:** https://www.kadampacuernavaca.org/ (Odoo 19)
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/web/image/`), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`. Cuatro fotos que no están en el clon (la fachada, Guen Nampur enseñando, su retrato y la ilustración de Je Tsongkhapa) se bajaron con curl del sitio en vivo a `assets/originales/` (ver `FUENTE.txt`). Horarios extra, fechas y precios de eventos: páginas `/calendario` y `/event/...` tomadas con curl el 2026-09-27.
**Rubro:** centro de meditación budista de la Nueva Tradición Kadampa (en la BD figura como FITNESS). **Ciudad:** Cuernavaca, Mor. (Río Conchos 321, Vista Hermosa), con clases en el Centro Histórico, Tepoztlán, Jojutla, Jiutepec y Yautepec.

## Revisión de fotos y contacto (paso 1)
- Fotos propias usables: 4 (jardín y sala de meditación con los ocho signos auspiciosos, la sangha reunida en el jardín, Guen Nampur enseñando frente al altar y su retrato). Sin EXIF de Google ni XMP/C2PA. Se usan además el retrato oficial de Gueshe Kelsang Gyatso y la ilustración de Je Tsongkhapa que publica el centro.
- No se usan: las personas de banco del clon (dos retratos de estudio, `vecteezy_cute-attractive-teenage-girl…`, `dul.jpg`, `dsf.jpg`, `234.jpg`), los carteles con fotos de banco y las fotos de templos de otros países.
- Contacto: WhatsApp y teléfono 777 565 6011, correo, dirección y enlace de Google Maps. Cumple.

## Qué le falta al clon (los "detallitos")
- 4 imágenes rotas (logotipo del encabezado, logotipo rectangular y los dos retratos de las tarjetas) y 18 recursos con 404 en escritorio (12 en móvil): scripts y hojas de Odoo que el clon no bajó, así que los carruseles de clases no se mueven.
- 7 H1 en la portada (vienen del original).
- El clon sí trae la foto de la sangha, el retrato de Gueshe-la y los carteles; no trae la fachada ni las fotos de la maestra (están en otras páginas).

## Qué tiene que lograr el sitio
1. Que alguien que nunca ha meditado sepa cuándo y dónde es la próxima clase y avise por WhatsApp que va (el sitio dice que no hace falta inscribirse, pero invita a hacerlo por WhatsApp).
2. Reunir en una página lo que hoy está repartido en Inicio, Nuestras clases, Clases, Calendario (imagen) y Eventos especiales.
3. Presentar la tradición y a la maestra residente con respeto y con su propia terminología.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| `tinta` | `#17324A` | Texto y fondo de "La Nueva Tradición Kadampa" |
| `kadampa` | `#136DA8` | Azul del logotipo (oscurecido a AA para texto y enlaces) |
| `oro` | `#F4B400` | Hábitos y lámparas: detalles, bordes, llama |
| `granate` | `#8C1D2C` | Hábitos y columnas de la sala: estante del altar, subtítulos |
| `cielo` | `#EEF5FA` | Fondos alternos (cielo de Cuernavaca de su foto) |
| `whats` | `#157A3F` | Botones de WhatsApp (blanco sobre verde, 5.4:1) |

**Tipografía:** Nunito 600/700/800 (redondeada, la más cercana a la letra del logotipo) para títulos y botones; Literata 400/600 para el texto, con interlineado amplio porque son enseñanzas que se leen despacio. Solo subconjunto latino.

## Elemento memorable
**"Catorce lámparas: tus próximas dos semanas en el centro".** Un estante de altar color granate con catorce lámparas de ofrenda, una por día desde hoy (hora de Cuernavaca). Una lámpara se enciende si ese día hay clase u oraciones; la lámpara azul marca un evento especial o una oración de fecha fija del mes (Ofrenda al Guía Espiritual los días 10 y 25, Melodioso Tambor el 29, La Rueda de la Vida, la charla del 24 de octubre, el retiro de enero). Viernes y sábados sin actividad quedan apagados. Un filtro "¿Dónde te queda mejor?" deja solo un lugar (Vista Hermosa, Centro Histórico, Tepoztlán, Jojutla, Jiutepec, Yautepec). Al tocar una lámpara se ve la lista del día con hora, lugar, quién la da y la aportación; la práctica que sigue se marca "La siguiente", las de hoy que ya pasaron se atenúan, y cada una tiene "Avisar que voy" con WhatsApp escrito (práctica, día, hora y lugar). La portada repite "La siguiente práctica" como acceso directo.
Sale del negocio: las lámparas de ofrenda son parte de la práctica que ellos enseñan, y los datos son los horarios reales de su sitio y de su calendario de septiembre de 2026. Es distinto de los elementos de `METODOS.md`: no es un reloj ni un mantel de siete días, sino un calendario de dos semanas reales que mezcla la semana con las fechas fijas del mes y los eventos.

## Estructura
1. Encabezado fijo: logotipo, menú, WhatsApp.
2. Portada: "Budismo moderno y meditación", H1 "Kadampa Cuernavaca", "Que todos sean felices", su texto de origen, WhatsApp y "Ver las clases", tarjeta "La siguiente práctica"; foto del jardín y la sala con remate en arco.
3. Frase central: "Sin paz interior, la paz externa es imposible…".
4. Catorce lámparas (elemento memorable).
5. ¿Cómo ir a una clase? (sus cuatro pasos, sí son secuencia).
6. Clases: Programa General, Aprende a meditar, Oraciones por la paz, Niños; puyas con Je Tsongkhapa; Programa Fundamental y FPM; clases cerca de ti.
7. Maestra residente: Guen Kelsang Nampur.
8. La Nueva Tradición Kadampa: Gueshe-la, linaje, lo que ha hecho posible, Proyecto Internacional de Templos.
9. Eventos especiales + "Antes de un evento" (de sus términos) + eBook gratuito.
10. Visítanos: dirección, teléfono, correo, redes, foto de la sangha que abre Maps.
11. Pie y barra fija en el celular (WhatsApp, Llamar, Cómo llegar).

## Revisión contra lo genérico (segunda pasada)
- Primera idea: fondo crema con serif y acento terracota "zen". Se cambió por los colores reales del lugar (azul del logotipo, oro y granate de los hábitos y las columnas, cielo) porque el crema+terracota es el estereotipo de "bienestar".
- Se quitó una fila de tarjetas iguales para las clases: van como texto en dos columnas con su horario en granate.
- Sin etiquetas en mayúsculas sobre las secciones, sin puntos medios, sin animaciones de entrada; el único movimiento es la llama de la lámpara elegida (quieta con `prefers-reduced-motion`).
- La numeración 1 a 4 solo está en "¿Cómo ir a una clase?", que sí es una secuencia.
- Los logros de la tradición van como lista de texto, no como números grandes con etiqueta.
- Sin afirmaciones de salud: no se usan "Libérate de enojo, tristeza, ansiedad" (cartel) ni el texto de la charla que menciona la depresión.
