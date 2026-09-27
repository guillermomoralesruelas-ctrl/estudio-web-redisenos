# Desértika Spa: plan de rediseño (método 1.1)

**Sitio original:** https://www.desertikaspa.com/ (Odoo 17 con tienda en línea, citas de Odoo y appt.link, membresías y facturación en apps de Replit).
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/web/image/`), textos de `investigacion/crudo.json` (Inicio, /masajes, /bar-de-oxigeno, /wellness-corporativo, /faciales), contacto en `investigacion/resumen.json`. Con curl el 2026-09-27: /sucursales, las páginas `/book/…` de sus botones Reserva y **las fotos de su sesión** de /masajes y /faciales (el clon no las trae), guardadas en `assets/originales/`.
**Rubro:** spa urbano (masajes, faciales, bar de oxígeno, temazcal, hidroterapia, envolventes, reductivos, spa parties, paquetes, wellness corporativo). **Ciudad:** Ciudad de México, con 13 sucursales en la ciudad (Nápoles, Miguel Ángel de Quevedo, Lomas, Barranca del Muerto, Tlacoquemécatl, Del Valle, Anzures, Ámsterdam, Condesa, Homero, Masaryk, San Ángel, Aeropuerto T2) más Hyatt Insurgentes y Samara Satélite (Naucalpan). La BD dice Ciudad de México: coincide.

**¿Es una cadena grande?** Es una marca local de la Ciudad de México con 14 sucursales, sin presencia fuera de la zona metropolitana y con un WhatsApp central para agendar. No es un corporativo nacional ni internacional (como Grand Velas o Anderson's), así que se trabaja; se anota para que Guillermo lo decida.

**Sobre las fotos (revisadas antes de construir):**
- Del clon solo sirven dos: `_BWE0297.jpg` (aceite sobre la espalda, 1280 × 1920) y el collage de sucursales (recepción con su logo y pasillo con velas, 1100 × 350, se parte en dos).
- Del clon **no** se usan: las miniaturas de 330 px de cada servicio (el mismo modelo sonriente en masajes, faciales y paquetes: banco), `Desertika_Header_1.jpg` y `Desertika_TestimonioFondo.jpg` (su XMP menciona AdobeStock, Getty y Shutterstock), el banner de promoción de marzo y el avatar de "Diseño sin título (5)".
- Bajadas de su sitio en vivo: 13 fotos de su sesión (FT_JUL/FT_OCT/FT_DIC_DESERTIKA_*, FOTOS DESERTIKA 22 y _BWE04xx/05xx), con toallas bordadas "Desērtika SPA — BOUTIQUE" y la misma terapeuta; la del bar de oxígeno (DESERTIKA_2021_1545) y su logotipo en blanco. Sin EXIF de Google/Picasa, sin credenciales C2PA ni marcas de IA.
- No se usan tampoco: `reflexologie-plantaire-cellulite.jpg`, `que-es-el-shiatsu.webp`, la del masaje prenatal, la captura de pantalla de "Alivio muscular" ni `Desertika_Home_PersonalizaTuServicio.jpg` (banco o dudosas).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): la portada se queda en el primer carrusel (800 px de alto en escritorio, 844 en celular), 1 imagen rota (el logo), 15 y 13 recursos fallidos y errores de consola (fuentes Butler con ruta `RUTA_REAL/`, iconos de Odoo, FontAwesome, el JS de Odoo) y **4 H1**.
- Ninguna foto de su sesión se descargó (están en /masajes y /faciales), así que el clon solo muestra fotos de banco.
- Es un defecto del clon, no del cliente.

## Qué tiene que lograr el sitio
1. Que la persona encuentre un masaje o facial que le quepa en el tiempo que tiene, vea el precio y agende (WhatsApp central, su agenda en línea o la agenda de la sucursal).
2. Encontrar la sucursal más cómoda: dirección, teléfono que se pueda marcar, cómo llegar y agenda.
3. Saber cómo funciona la personalización (el "sello Desértika") y las demás experiencias (temazcal, hidroterapia, paquetes, spa parties, regalo).

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| `tinta` | `#2b2521` | Texto y títulos (de su `#292122`; 13.4:1 sobre crema) |
| `salvia` | `#8a9177` | El verde de su sitio (`o-color-1`); solo fondos y decoración |
| `salvia-honda` | `#555a48` | Botones y enlaces (de su CSS; blanco encima 7.1:1, sobre crema 6.3:1) |
| `terracota` | `#8f3c26` | El rojo de sus toallas bordadas; acentos y botón de agenda (blanco encima 7.4:1, sobre crema 6.6:1) |
| `arena` | `#d9c3a0` | La arena del reloj; decoración |
| `crema` / `duna` | `#f6f1e8` / `#ece3d3` | Fondos claros |
| `noche` | `#2f2a22` | Sección oscura (la del reloj) y pie (crema encima 12.7:1, arena 8.3:1) |

**Tipografía:** su sitio usa Butler (serif de alto contraste, no está en @fontsource) para títulos y Open Sans para texto. Se usa **Fraunces** (serif con carácter, en la línea de Butler y del logotipo) y **Open Sans**. @fontsource, solo latino.

## Elemento memorable
**"¿Cuánto tiempo tienes?" con un reloj de arena.** Su propio texto lo pide: "Puedes elegir de acuerdo con el tiempo disponible con el que cuentas, lo que deseas sentir y la zona de la ciudad que te resulte más conveniente", y su nombre viene del desierto. Eliges los minutos libres (15, 20, 25, 30, 50, 80 o 110, las duraciones que publica), y un reloj de arena en SVG llena su parte de arriba con esa arena; debajo aparecen solo los servicios que caben (masajes, faciales y bar de oxígeno), cada uno en la duración más larga que entra, con su precio real. Filtras por tipo y eliges sucursal (las 15 que lista), y "Tu pausa" arma el WhatsApp con servicio, minutos, precio y sucursal, o abre su agenda en línea de ese servicio y duración. Los granos caen en una línea fina (quietos con `prefers-reduced-motion`).
No repite nada de lo ya hecho: las zonas del cuerpo (114), el mandala (608) y el pase de abordar (35) son otras ideas; los relojes del gimnasio y de Pacific Palace eran de hora del día, este es de minutos disponibles.

## Estructura
1. Encabezado: logotipo, Masajes, Faciales, Sucursales y "Agenda en WhatsApp".
2. Portada: "¡Hoy mereces consentirte!", H1 "Masajes y faciales a tu medida en la Ciudad de México" (sin número de sucursales: su sitio dice 13 y 14, y lista 15), su texto de bienvenida, dos acciones y la foto del aceite.
3. ¿Cuánto tiempo tienes? (elemento memorable, sección oscura).
4. El sello Desértika: las seis cosas que eliges (color de la cabina, música, aroma, presión, aceite o crema, té), con la foto de la toalla bordada.
5. Masajes: cuerpo completo (8) y zona específica (4), con sus duraciones y precios y botón de reserva; tres fotos de la sesión.
6. Faciales (5), con foto de cada uno, Face Mapping sin costo y Touch Therapy.
7. Bar de oxígeno (20, 25 y 30 min) y "Disponible para eventos".
8. Más experiencias: temazcal, hidroterapia, envolventes, reductivos, spa parties y paquetes, con enlace a su página.
9. Sucursales: las 15 que lista su sitio, con dirección, teléfono, agenda y cómo llegar; políticas de reagenda, pago y calidad; fotos de recepción y pasillo.
10. Pie: regala una giftcard, tienda, membresías, factura, redes, aviso de privacidad. Barra fija en el celular (WhatsApp, Llamar, Cómo llegar) que usa la sucursal elegida.

## Qué se evita (revisión contra lo genérico)
- Sin etiquetas pequeñas en mayúsculas sobre las secciones, sin 01/02 (su sitio numera el sello del 1 al 6; aquí es una lista), sin puntos medios como separador.
- Sin carruseles (su portada tiene cuatro) ni filas de tarjetas idénticas: los masajes son una carta con filetes y precios alineados; la única caja es "Tu pausa".
- Sin animaciones al hacer scroll: solo la arena del reloj.
- Sin testimonios: los suyos ("Hace 10 horas", con contadores de "me gusta") no se pueden verificar.
- Sin la lista de "Beneficios de la Oxigenoterapia" ni otras afirmaciones de salud o de resultados (ver `CAMBIOS.md`).
- Sin inventar horarios (no los publica), precios de paquetes ni disponibilidad por sucursal.
