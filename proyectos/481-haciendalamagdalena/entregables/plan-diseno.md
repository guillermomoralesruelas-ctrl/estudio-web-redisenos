# Hacienda La Magdalena: plan de rediseño (método 1.1)

Hotel boutique y centro de eventos en una hacienda del siglo XVII, en Carretera Colotlán Km 1.7, Zapopan, Jalisco. Público: parejas (noche de bodas, cenas románticas, pedidas de mano), novios que buscan sede con capilla, empresas de Guadalajara que quieren salir de la oficina y personas que van al spa por el día.

Fuentes: clon en `sitio/`, `investigacion/crudo.json` y sus páginas leídas en vivo el 2026-09-28 (`entregables/textos-sitio-en-vivo-2026-09-28.txt`).

## Qué le falta al clon (los "detallitos")

- El slider y los íconos dependen de jQuery, Bootstrap, Font Awesome y AOS desde CDN; en el clon hay 14 imágenes rotas y 27 recursos fallidos.
- La información está repartida en 13 páginas: los precios de paquetes, cenas, extras y spa no se ven desde el inicio.
- No hay WhatsApp; hay dos teléfonos y siete correos distintos.

## Qué tiene que lograr el sitio

- Que en una sola página se entienda qué es (hacienda, hotel, eventos, spa) y cuánto cuesta cada cosa que ya tiene precio publicado.
- Que cada tipo de habitación, paquete, cena, espacio y servicio de spa tenga un botón a WhatsApp con el mensaje ya escrito.
- Que la ubicación (su mapa de Google) y los dos teléfonos estén a un toque en el celular.

## Dirección visual

- Paleta de la propia hacienda: verde jardín `#1d2a22` y musgo `#34503c`, cal `#f6f0e6`, cantera rosa `#9a4630`, oro `#d2b06a`, latón `#c9a24e` y madera `#5a3a22`. Todas las combinaciones de texto pasan AA (ver `rediseno/src/index.css`).
- Tipografía: Marcellus (títulos, letra labrada en cantera) y Alegreya Sans (texto), locales con @fontsource.
- Fotos: sus 8 fotos del clon (casco al anochecer, estanque, alberca morisca, capilla verde, terraza del comedor, cabina de spa y dos habitaciones), en .webp.

## Elemento memorable

El **tablero de llaves de la recepción**: un tablero de madera con 24 llaves de latón colgadas en rieles (10 alcobas, 10 suites con jacuzzi, 1 alcoba adaptada, 2 master suites y 1 presidencial, tal como cuenta su página de habitaciones). Al elegir un tipo, sus llaves se inclinan y las demás se apagan, y al lado aparece la ficha con lo que tiene y un botón a WhatsApp. En el celular el tablero pasa a 5 llaves por riel.

## Estructura

1. Encabezado con su logo caligráfico y "Consultar disponibilidad".
2. Portada: casco al anochecer, H1, 4 datos (4 hectáreas, 24 habitaciones, capilla abierta, spa y alberca).
3. Historia: Ruta de la Plata, eventos desde 1990, hotel desde 2007; foto del estanque y su video.
4. Habitaciones: el tablero de llaves y la ficha.
5. Paquetes de hospedaje (5, con precio domingo a jueves y fin de semana) y promociones.
6. Cenas románticas (3) y extras (desayunos, picnic, sesión de fotos).
7. Eventos: 6 espacios con su capacidad máxima (barra proporcional a 480), eventos empresariales.
8. Spa Tierras Lejanas: alberca y jacuzzi, medio día de spa, tabla de masajes y faciales.
9. Contacto: dirección, mapa de Google (su iframe), teléfonos, correos por área y redes.
10. Barra fija en el celular: WhatsApp, Llamar, Cómo llegar.

## Qué se evita

- Beneficios de salud de los masajes y faciales ("combate el dolor", "elimina toxinas", "regenera las cadenas celulares"): solo nombre, duración y precio.
- Inventar tarifas de habitación (su sitio las da en el motor de reservas) o reseñas.
- Presentar como vigentes los sellos de asociaciones que muestra su sitio.
