# Go México Adventures: plan de rediseño (método 1.1)

**Sitio original:** https://gomexicoadventures.com/ (WordPress con WP Travel Engine; inglés por defecto y versión en español en /es/)
**Materia prima:** clon en `../sitio/` y `investigacion/original.html`. `crudo.json` quedó vacío (Jina no trajo texto), así que el contenido salió de `original.html`, de /es/ y de las 7 fichas en /es/trip/… leídas con `curl` el 2026-09-28 (qué incluye, horarios, edades, capacidad, si el precio es por persona o por grupo, punto de encuentro).
**Rubro:** ecoturismo (kayak, trajinera y chinampas). **Ciudad:** Xochimilco, Ciudad de México (Reserva Ecológica Laguna del Toro; punto de encuentro en Pilares "San Marcos").

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-28): 42,334 px en escritorio y 30,281 px en el celular (el carrusel repite las experiencias), 160,085 px de desborde horizontal en escritorio, 2 imágenes rotas en el celular, 44 y 46 errores de consola y 8 recursos fallidos. La herramienta se ajustó para capturar solo los primeros 16,000 px de páginas así de altas (Chromium no puede más).

## Qué tiene que lograr el sitio
1. Que un grupo (familia, amigos, empresa) sepa **en qué experiencias cabe** y cuánto sale, y pregunte fechas por WhatsApp.
2. Reservar en línea en la ficha de su sistema (WP Travel Engine), que sí funciona.
3. Saber dónde es el punto de encuentro, a qué hora abren y qué incluye cada cosa.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| nopal | #409880 | El verde azulado del nopal de su logo (muestreado). Detalles y el remo en el dibujo |
| canal | #1d5a53 | Su fondo verde (#287870 en sus portadas), más hondo. Botones y la franja "Mucho más que una actividad". Blanco encima 7.96:1; sobre agua 7.29:1 |
| flor | #d9383e | Las tunas rojas del nopal del logo: el casco de la trajinera y el foco |
| sol | #f2b33d | El arco pintado de la trajinera. Tinta encima 8.38:1 |
| agua | #f2f6f2 | Fondo claro de portada y "Cómo llegar". Tinta encima 14.27:1; gris 5.84:1 |

**Tipografía:** Bricolage Grotesque para títulos y para las letras pintadas del arco (redondas y con carácter, como la rotulación de las trajineras), Inter para el texto.

## Elemento memorable
**"Súbanse: ¿cuántos van?"**: las trajineras de Xochimilco llevan un nombre pintado en el arco; aquí el arco dice "Somos 4" (letras de colores, con flores a los lados) y la banca de la trajinera se llena con una figura por persona, hasta sus 15 lugares; si pasan de 15, avisa cuántos ya no caben. Con − y + cambias el grupo (1 a 30) y eliges la hora (amanecer, mañana, tarde, noche, o "cuando sea", según los horarios de cada ficha). Al lado quedan solo las experiencias donde cabe tu grupo, ordenadas de la más económica a la más completa, con el total calculado con sus precios publicados: por persona (kayak $299 y $300, sabores desde $199) o por grupo (trajinera $750, chinampa para 4 $1,499, para 10 $3,599, Atlicpac para 30 $4,449) y cuánto sale por persona. Cada una pregunta fechas por WhatsApp con "somos N personas" o lleva a su reserva en línea.
**Por qué no repite otros:** "¿Y después de aterrizar?" arma el día de un paquete; "reloj de arena" filtra por tiempo; "pase de abordar" es un boleto. Aquí se filtra por **tamaño de grupo**, que es como se venden sus chinampas y su trajinera (por grupo, con tope de personas), en el objeto más reconocible de Xochimilco.
**Límite honesto:** los totales se calculan con sus precios publicados y avisan que se confirman al reservar; "Sabores" dice "desde $199 por persona" en su ficha y $399 en la portada (se muestran las dos cosas).

## Estructura
1. Encabezado con su logo, enlaces y WhatsApp.
2. Portada: H1 "Kayak, trajinera y chinampas en los canales de Xochimilco", su texto de "¿Qué es Go México Adventures?", foto real de una trajinera en el canal, horario y precio desde.
3. Súbanse: ¿cuántos van? (el elemento).
4. "Mucho más que una actividad, una forma de descubrir México" (su título) con sus tres razones y la foto de kayaks al atardecer.
5. Cómo llegar: punto de encuentro, muelle, estacionamiento, horario, temporada, Google Maps.
6. Lo que dicen sus visitantes: sus 4 opiniones, con las fotos de los clientes.
7. Pie y barra fija en el celular (WhatsApp, Experiencias, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas, numeración 01/02 y puntos medios.
- Animar cada sección al hacer scroll: solo aparecen las figuras de la trajinera.
- Las imágenes hechas con IA de su sitio (PNG con nombre UUID y "ChatGPT-Image"): solo fotos reales.
- Inventar horarios de salida, precios de niño o descuentos: se dice lo que dice cada ficha.
