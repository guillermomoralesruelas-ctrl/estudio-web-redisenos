# Curiosa Café & Juice Bar: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://www.curiosacafe.mx/ (Framer, en inglés; blog en español e inglés). Juice bar y café en Aguascalientes 214 B, Hipódromo (La Condesa), CDMX: jugos prensados en frío, smoothies con superfoods, desayuno todo el día, toasts y wraps, healing lattes y café. Pet friendly.

**Materia prima:** el clon no traía las fotos (Framer las carga de su CDN). En la nube se bajaron del sitio en vivo 12 fotos reales a 1600 px en `assets/originales/` (mesa con platillos, smoothies, avo-egg toast, parfait, jugos, equipo, perros en el local, clientas) y su logotipo SVG. Textos de `investigacion/crudo.json`: el inicio (en inglés) y su entrada de blog "Menú de Curiosa Café & Juice Bar en La Condesa: Precios 2026" (en español), de donde sale `src/data/carta.json` con precios.

**Contacto real:** tel. y WhatsApp +52 56 1855 2013; Aguascalientes 214 B, Hipódromo, Cuauhtémoc, 06100 CDMX; horario lunes a viernes 8:00 a 19:00, sábado y domingo 9:00 a 18:00; Uber Eats, Instagram @curiosacafe, TikTok @curiosa.cafe, Facebook.

## Qué le falta al clon

- `qa-rediseno.mjs` (antes): escritorio 10,988 px, móvil 16,201 px, sin desborde, pero sin sus fotos y con 2 errores de consola. Todo en inglés para un público local.

## Qué tiene que lograr el sitio

1. Que alguien del barrio entienda en segundos qué es, dónde está y a qué hora abre, en español.
2. Pedir antes por WhatsApp (su propio canal) o por Uber Eats.
3. Ver la carta completa con precios sin bajar un PDF.
4. Que se note que es pet friendly.

## Concepto

Crema cálida del local, el azul de su logotipo como color de marca (azul oscuro #2A5C87 para texto y botones, AA) y los colores de sus cuatro jugos como acentos. Young Serif para títulos (cálida, de barra de barrio) y Figtree para texto.

## Elemento memorable: "Arma tu Juice Flight"

Su carta ofrece un Juice Flight de 3 jugos por $140. Se eligen tres de sus cuatro jugos prensados en frío (Daily Greens, Dulce Raíz, Sidra Natural, Puro Sol); tres botellas se llenan con el color de cada jugo, se puede sumar uno de sus shots y el pedido sale armado por WhatsApp para recogerlo.

## Secciones

1. Hero: H1 "Curiosa, juice bar y café en La Condesa", su frase, horario y collage de fotos.
2. Arma tu Juice Flight.
3. Carta con pestañas por sección (precios de su blog) y etiquetas de dieta.
4. El local: "Ven con tu perro", galería.
5. Preguntas frecuentes (sus preguntas; respuestas tomadas de su blog).
6. Visítanos: dirección, horario, mapa (su mismo iframe de Google Maps), botones.
7. Pie con redes y Uber Eats. Barra fija en el celular: pide antes, llamar, cómo llegar.
