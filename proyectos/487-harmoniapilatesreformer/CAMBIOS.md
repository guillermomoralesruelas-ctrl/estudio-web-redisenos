# Harmonía Pilates: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.harmoniapilates.com/ |
| Método | **1.1 en la nube**: fotos y textos del clon y de `investigacion/`; la nube no llega al sitio en vivo (403) |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado y subido al repo, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/487-harmoniapilatesreformer/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-29/` |
| Métricas de QA | `qa/reporte-rediseno.json`: 0 desbordes, 1 H1, 0 imágenes rotas, 0 errores, 0 fallidos; 6,646 px en escritorio y 10,849 px en el celular |

## En una línea

El mismo estudio de Pilates Reformer de Tlalnepantla, con su horario, su maestro, sus precios y sus fotos, en una página donde eliges tu hora y tu reformer y te llega el WhatsApp escrito.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 8 imágenes rotas (logotipo y fondos pedidos desde la raíz) | Copias .webp locales en `assets/web/`: 0 rotas |
| 14 errores de consola y 5 recursos fallidos (script de Cloudflare y otros) | Sin scripts de terceros: 0 errores, 0 fallidos |
| 637 px de desborde horizontal en el celular | 0 desborde |
| 96,723 px de alto en escritorio por las animaciones de revelado | 6,646 px, sin animaciones al hacer scroll |

## Qué se cambió (mismo contenido, otra forma)

- La tabla de "Horarios de Clases" con palomitas se volvió botones por día (las mismas 13 clases) dentro del elemento memorable.
- Precios: la clase muestra y la suelta quedan en dos tarjetas; los cinco paquetes en tarjetas con clases, vigencia, precio, precio anterior y precio por clase (división de sus precios).
- El carrusel de testimonios (que repetía los seis) quedó como tres citas fijas.
- El formulario de contacto (nombre, WhatsApp, días, horario y paquete) se reemplazó por el mensaje de WhatsApp que arma el elemento memorable.
- El H1 "Descubre Tu Mejor Versión" pasó a "Pilates Reformer, máximo 8 por clase".

## Qué se agregó (no existía en el original)

- **"Elige tu hora y tu reformer"** (elemento memorable): la semana con sus 13 clases como botones (mañana en ámbar, tarde en azul), los paquetes como botones y el estudio visto desde arriba con ocho reformers dibujados con su tapete de mandala. Con VIP o Elite los reformers se pueden tocar para apartar tu favorito (beneficio que su sitio da a esos paquetes). Una tarjeta resume primera clase, paquete, precio y vigencia, y el botón abre WhatsApp con todo escrito.
- Textos nuestros: el H1; "Elige tu hora y tu reformer" y su entrada ("Estas son las clases de la semana… te mandamos el mensaje listo"); "¿Qué día y a qué hora?", "¿Con qué paquete?", "El estudio, visto desde arriba", "Ocho lugares por clase. Con los paquetes VIP y Elite puedes apartar tu reformer favorito", "Apartaste el reformer N…", "Borde ámbar: clases de la mañana. Borde azul: de la tarde", "Pedir mi lugar por WhatsApp", "El estudio te confirma si hay lugar en esa clase"; "Lo que trabajas en el Reformer"; "Precios claros"; "Lo que dicen sus alumnos"; "Inicia en Harmonía Pilates" con su entrada; el resumen de clases del contacto; los mensajes de WhatsApp.
- Dirección escrita (estaba solo dentro del mapa), botón "Cómo llegar", barra fija en el celular (WhatsApp, Llamar, Cómo llegar), JSON-LD `ExerciseGym`, Open Graph con foto y un respaldo visible si el mapa no carga.
- Su mismo mapa de Google (`iframe` de `original.html`, sin clave).

## Qué se quitó o no se usó

- Dos de sus seis beneficios: "Esculpe tu figura" y "Descomprime articulaciones / alivia dolores de espalda" (promesas de resultado o de salud). En "Cero impacto" se quitó "que protege tus rodillas, tobillos y cadera", y en la portada "y salud articular".
- Los testimonios de Mariana ("el Reformer cambió mi vida", dolores de espalda), Carlos ("sin lesionar las articulaciones") y Sophia (resultados físicos): son afirmaciones de salud o de resultados.
- En la pregunta sobre lesiones se quitó "El Pilates Reformer es excelente para rehabilitación de bajo impacto"; queda la parte de pedir aprobación médica.
- "Descubre Tu Mejor Versión", los contadores de animación y el fondo decorativo `bg_div.jpg`.
- La mención a "nuestra plataforma" para agendar: su sitio no enlaza ninguna.

## Qué se conservó

Todos los precios, vigencias y beneficios de paquetes; el horario de la tabla; los textos del maestro y sus especialidades; las preguntas frecuentes (con el recorte indicado); "Máximo 8 alumnos por clase", "Instructor certificado", "Equipos higienizados en cada turno"; "¡Cumplimos 3 años!"; Instagram y Facebook.

## Pendiente de confirmar con el cliente

- **WhatsApp:** su botón usa `5625700521` sin código de país. Aquí se usa `+52 56 2570 0521`; confirmar que ese número tiene WhatsApp. No publica otro teléfono: el botón "Llamar" usa el mismo número.
- **Horario:** en su tabla, 2 clases salen con palomita ámbar y 11 en gris claro, pero la leyenda solo explica ámbar (mañana) y azul marino (tarde). Se tomaron las 13 como clases; confirmar si el gris significa "lleno" o "sin clase".
- Cuántos reformers tiene el estudio (se dibujan 8 por "máximo 8 alumnos por clase") y si se puede apartar reformer con otros paquetes.
- Plataforma de reservas que mencionan en las preguntas frecuentes (enlace).
- "Clase muestra" y "Clase suelta" dicen "Sesión individual": confirmar si es clase particular o una clase grupal.
