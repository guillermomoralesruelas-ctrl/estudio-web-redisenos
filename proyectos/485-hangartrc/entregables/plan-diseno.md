# Hangar TRC: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://www.hangartrc.com/ (una sola página en React, hecha por nitsuga.dev). Gimnasio en Blvd. Francisco Sarabia 850, int. 13, Aviación, Torreón: pesas, box y crossfit / Hyrox en una sola membresía, sin inscripción, coaches incluidos, estancia infantil.

**Materia prima:** el clon queda en blanco (la página se arma con JavaScript que no se descargó) y no trae fotos. En la nube se bajaron del sitio en vivo a `assets/originales/` sus 27 fotos de instalaciones (1920 px .webp, con los pies de foto de su galería) y su logotipo. Textos de `investigacion/crudo.json`; las respuestas de sus preguntas frecuentes salen del código de su sitio (`index-*.js`), porque la captura solo traía las preguntas.

**Contacto real:** tel. 871 942 3133 (su botón principal llama), info@hangartrc.com, Instagram y Facebook @hangar.trc. Sin WhatsApp publicado.

## Qué le falta al clon

- `qa-rediseno.mjs` (antes): página en blanco (0 px de alto) en escritorio y móvil, 4 errores de consola y 3 recursos fallidos.

## Qué tiene que lograr el sitio

1. Que se entienda al instante: pesas, box y crossfit en una sola membresía, sin inscripción.
2. Elegir plan sabiendo qué clases le tocan a su hora y cuánto ahorra.
3. Llamar o escribir en un toque.

## Concepto

Hangar de aviación nocturno: negro, el amarillo dorado de su logotipo y sus franjas de advertencia, fotos cálidas de su gimnasio. Saira Condensed (rotulación industrial) y Manrope.

## Elemento memorable: "Tu pase de abordar"

Eliges disciplina (pesas, box, crossfit / Hyrox), franja (temprano, mediodía, tarde y noche, sábado) y duración. Un pase de abordar muestra las clases reales a esa hora, la tarifa (restringida solo si es pesas de 10 a 4, su regla), el total, su equivalente al mes y el ahorro frente a pagar mes a mes; se llama o se manda el pase por correo.

## Secciones

1. Hero con H1, su lema "Únete al cambio" y tres datos (desde $608 al mes, $0 inscripción, L-V 5 a 22 h).
2. Lo que nos hace diferentes (sus 9 puntos).
3. Tu pase de abordar.
4. Horarios de clases.
5. Precios (pases, planes, restringido, estancia infantil).
6. Galería de sus 27 fotos con sus pies.
7. Preguntas frecuentes con respuesta.
8. Contacto y barra fija en el celular: llamar, tu pase, cómo llegar.
