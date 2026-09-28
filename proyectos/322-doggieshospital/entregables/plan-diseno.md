# Doggie's Hospital Veterinario: plan de rediseño (método 1.1)

**Sitio original:** https://doggies.mx/ (Webflow, una sola página más aviso de privacidad y términos)
**Materia prima:** clon en `../sitio/`, `investigacion/original.html`, `crudo.json` y `resumen.json`; revisión del sitio en línea con `curl` el 2026-09-28.
**Rubro:** hospital veterinario de especialidades con urgencias 24/7. **Ciudad:** Monterrey, N. L. (3 hospitales al sur: Especialidades en Av. Revolución 3419, Serena y Sur sobre la Carretera Nacional).

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-28): 5,336 px en escritorio y 5,172 px en el celular, 52 de 52 imágenes rotas, 57 errores de consola y 45 recursos fallidos (el clon de Webflow no carga sus recursos).

## Qué tiene que lograr el sitio
1. En una urgencia, a cualquier hora, saber a qué hospital ir y llamar.
2. Mostrar sus especialidades y servicios con sus fotos, y sus 3 hospitales.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| rojo | #c41f2a | El rojo de su logo y de su sitio (#d72d37), un poco más oscuro para contraste: urgencias. Blanco encima 5.87:1 |
| azul | #004887 | El azul de su sitio: títulos y enlaces. Blanco encima 9.22:1; sobre nube 8.81:1 |
| noche | #0f1b33 | Fondo del reloj. Blanco 17.14:1; amarillo 14.28:1; lluvia #9fb1cc 7.87:1 |
| amarillo | #fcef02 | El amarillo de su paleta: la hora elegida en el reloj |
| verde | #1f7a4a | "Abierto: 24 horas". Blanco encima 5.33:1 |

**Tipografía:** Nunito en su peso más grueso para títulos (letras redondas y gordas como "DOGGIE'S" en su logo) e Inter para texto.

## Elemento memorable
**"¿A qué hora es tu urgencia?"**: un reloj de 24 horas que empieza en la hora actual de Monterrey; lo mueves a la hora en que necesitas ayuda y a la derecha aparecen sus 3 hospitales: Especialidades "Abierto: 24 horas" con el botón de urgencias, Serena "Horario no publicado, llama antes" y Sur sin teléfono publicado. Las horas de noche se ven más oscuras en el aro.
Sale del negocio: su argumento central es "servicio de hospital veterinario 24/7 para atender las emergencias inesperadas" y un letrero rojo de 24/7 en su fachada; con tres sucursales, la pregunta real es cuál abre a esa hora.
**Por qué no repite otros:** 508 (otro hospital veterinario) recorre un plano de salas; aquí es el tiempo, no el espacio. 486 resuelve traslados y 574 compara precios.
**Límite honesto:** solo Especialidades tiene horario publicado (24 horas); para Serena y Sur el reloj dice "Horario no publicado". La página lo aclara.

## Estructura
1. Encabezado con su logo, enlaces y "Urgencias".
2. Portada: H1 "Hospital veterinario de especialidades, abierto las 24 horas", foto de la fachada con el letrero 24/7, su lema "Rumbo a los primeros 50 años" y sus cifras.
3. ¿A qué hora es tu urgencia? (el elemento).
4. Especialidades (6, con foto).
5. Servicios (6, con foto), Eye Clinic y certificaciones.
6. Hospitales y "Escríbenos".
7. Pie y barra fija en el celular (Urgencias, WhatsApp, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas ("QUIÉNES SOMOS", "ESPECIALIDADES" de su sitio), numeración y puntos medios.
- Los perros recortados de la portada (parecen de banco) y los adornos punteados.
- "La más alta tecnología" y "los mejores especialistas": superlativos.
