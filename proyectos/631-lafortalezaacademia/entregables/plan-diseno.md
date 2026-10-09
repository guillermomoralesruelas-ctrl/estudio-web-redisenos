# La Fortaleza Academia de Artes: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://www.lafortalezaacademiadeartes.com/ (Zoho Sites; páginas inicio, Diplomado AEI, Enfoques, Taller de Montaje, Contacto, Cartelera y La Sala). Escuela de teatro, canto y danza en Guadalajara, Jalisco, desde 2021. WhatsApp 81 4244 5362, hola@lafortalezaacademiadeartes.com, Instagram, Facebook, YouTube y TikTok.

**Materia prima:** el clon no trae fotos (las sirve Zoho). En la nube se bajaron del sitio en vivo 10 fotos de funciones reales (RENT, In the Heights, Shrek, Something Rotten, una función con abanicos, cuatro de otra producción y una tras bambalinas) y el logotipo a `assets/originales/`. Se descartaron las fotos con aspecto de imagen generada (las de la página del Diplomado AEI) y los carteles de la cartelera (uno se llama "ChatGPT Image"). Tiene horarios por grupo, la tabla de precios de enfoques, precios de los talleres, cartelera, trayectoria, testimonios y preguntas frecuentes.

## Qué le falta al clon

- `qa-rediseno.mjs` (antes): 8 recursos fallidos (fuentes de Zoho); las fotos dependen del CDN de Zoho.

## Qué tiene que lograr el sitio

1. Que se vea que aquí se hace teatro de verdad: funciones, teatro, público.
2. Que cada persona encuentre su grupo, su horario y su precio sin brincar entre 5 páginas.
3. Inscribirse por WhatsApp.

## Dirección visual

| Token | Color | Uso |
|---|---|---|
| bosque | #2F5A36 | verde de su marca: sección "Tu semana", acentos |
| telón | #A3201D | botón principal, avisos, franja de telón |
| escena | #121212 | fondos del hero, cartelera y contacto |
| foco | #F4C542 | luz del seguidor: acentos sobre oscuro |
| papel | #FBF8F1 | fondo claro |

**Tipografía:** Bebas Neue (marquesina de teatro) y DM Sans.

## Elemento memorable: "Tu semana en La Fortaleza"

Eliges tu grupo (Kids, Teens, Jóvenes, Adultos) y los horarios reales de cada programa. Una cuadrícula de lunes a domingo, de 9 am a 9 pm, dibuja tus clases; si dos se cruzan, las marca y avisa. Calcula la mensualidad con su propia tabla (Diplomado AEI solo, AEI + n enfoques o n enfoques solos, más talleres), las horas por semana, y arma el mensaje de WhatsApp con todo lo elegido.

## Secciones

1. Hero con H1 ("Donde los sueños se hacen arte."), cifras y acciones.
2. Tres caminos: Diplomado AEI, Enfoques, Taller de Montaje.
3. "Tu semana en La Fortaleza".
4. Tabla de precios de enfoques.
5. Cartelera (oculta lo que ya pasó) y producciones de alumnos.
6. Por qué La Fortaleza y qué la hace diferente.
7. Testimonios.
8. La Sala (55+).
9. Preguntas frecuentes.
10. Contacto, horario de atención y redes (su sitio no tiene mapa incrustado; se enlaza a Google Maps).
11. Barra fija en el celular: WhatsApp, mi semana, cómo llegar.
