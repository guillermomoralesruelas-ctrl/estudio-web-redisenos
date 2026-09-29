# Dolcebella Spa: plan de rediseño (método 1.1 en la nube)

**Sitio original:** http://web.dolcebellaspa.com.mx/ (WordPress con una plantilla de spa y WooCommerce)
**Materia prima:** textos de inicio, faciales y tres fichas de producto en `investigacion/crudo.json` y `investigacion/original.html`; las cuatro fotos propias del spa (cabina, cabina de aparatología, sala de meditación y sauna) y el logotipo vienen del clon (`sitio/assets/wp-content/uploads/`). El clon no se tocó. El subdominio `web.` está bloqueado para la nube, así que no se revisó en vivo.
**Rubro:** spa de faciales, masajes y paquetes en Blvd. Sánchez Taboada 10750-A, Zona Urbana Río, Tijuana. Lunes a sábado de 9:00 a 19:00, con cita previa y anticipo.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: plantilla genérica con restos en inglés ("Amazing Theme!", "Book Now", "select plan", blog de 2018), carrito vacío en el encabezado y un WhatsApp con número incompleto.

## Qué tiene que lograr el sitio
1. Que quien busca un spa en Tijuana vea los paquetes con su precio y cuánto dura cada uno.
2. Que sepa cuánto paga si va solo o acompañado.
3. Escribir por WhatsApp con el paquete y el número de personas.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| noche | `#2a1d27` | Texto, portada y contacto |
| crema | `#fbf6f2` | Fondo |
| ciruela | `#7a3d73` | Botones y precios (la flor de loto del logotipo) |
| agua | `#1f6e70` | Enlaces y ahorro (la letra turquesa del logotipo) |
| malva | `#6b5b64` | Texto secundario |
| rosa | `#f3e6ea` | Fondo alterno |
| vela | `#f3c9a0` | Acento sobre oscuro (la luz de las velas de sus fotos) |

Contrastes: noche/crema 15.01, blanco/ciruela 7.66, ciruela/crema 7.13, agua/crema 5.55, malva/crema 5.92, agua/rosa 4.92, vela/noche 10.49.
Fuentes: Cormorant Garamond 500 (títulos, con cursiva para la frase "Tiempo para relajarte") y Figtree 400/600 (texto).

## Elemento memorable (uno solo)
**"¿Vienes solo o en pareja?"**: un selector de dos posiciones sobre los cuatro paquetes (Time Relax, Total Relax, Masauna y Day Spa). Cada paquete tiene una barra cuyo largo es su duración total y cuyos tramos son los pasos con minutos conocidos (masaje 50, facial 60, depuración 30); el tiempo que su sitio no desglosa queda en tono claro y se dice así. Al elegir "Vamos dos" cambia el precio al de pareja y aparece cuánto se ahorra frente a dos individuales. Time Relax solo existe para dos y lo dice. El WhatsApp lleva el paquete y el número de personas. No se ha usado antes en el estudio.

## Secciones
1. Portada con la sala de meditación: H1 "Spa en Tijuana para faciales, masajes y un día completo".
2. ¿Vienes solo o en pareja? (paquetes).
3. Faciales (con precio) y masajes (con duración), más otros tratamientos.
4. Así es el spa por dentro (cabina, sauna, cabina de aparatología).
5. Opiniones (las cuatro de su sitio).
6. Agenda tu cita: dirección con Google Maps, horario, correo y redes.

## Revisión contra lo genérico (segunda pasada)
- Nada de piedras con orquídea ni velas de banco: la plantilla traía esas imágenes y se quitaron; solo quedan sus fotos reales, que ya tienen velas y luz cálida.
- La barra de tiempo no inventa duraciones: solo se pintan los minutos que publica el spa; el resto se marca como "resto del ritual".
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02 y sin puntos medios como separadores.
- Sin promesas de salud: los faciales se listan con nombre, duración y precio; no se repiten frases como "resultados garantizados" ni "combate las bacterias".
- Sin contadores de clientes ni "los mejores precios": se dicen los precios.
- Sin animaciones salvo la transición de la barra (CSS, respeta `prefers-reduced-motion`).
