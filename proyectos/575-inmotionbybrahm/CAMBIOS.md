# InMotion by Brahmā: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://inmotionbybrahma.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-27 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/575-inmotionbybrahm/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Capturas | `referencias/capturas-2026-09-27/` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 575-inmotionbybrahm`) |

## En una línea

Es el mismo estudio de yoga, pilates y entrenamiento de Las Lomas (San Luis Potosí) con sus fotos en blanco y negro, sus diez clases, sus paquetes, sus coaches y sus testimonios; cambia la forma: una sola página que te dice qué clase te toca según la energía con la que llegas, con los paquetes y precios a la vista y WhatsApp con el mensaje escrito.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 1 imagen rota y 5 a 6 recursos con 404: `abajoInicio.jpg` y `fondoInfoEnInicio.jpg` se piden desde `sitio/Imagenes/` en lugar de `sitio/assets/Imagenes/`, faltan las fuentes de Bootstrap Icons y el script de Cloudflare que descifra el correo | 0 rotas, 0 errores de consola, 0 recursos fallidos; la foto de las tres alumnas es la portada |
| El carrusel del inicio depende del JS de Bootstrap | Sin carrusel: una foto fija en la portada y las demás repartidas por la página |
| Fotos de su sesión de 1 a 5.7 MB (hasta 5,568 px) | 12 fotos en .webp (0.2 MB en total) y los dos logotipos, en `assets/web/`, con `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Sus cinco páginas (Inicio, Nosotras, Paquetes, Clases presenciales y Clases en línea) más Coaches, Contacto y Corporativo, en una sola página.
- Las clases presenciales y en línea eran dos listas casi iguales (8 y 10 formatos); ahora son una sola, en el tapete, con el interruptor "En studio / En línea".
- De cada clase se muestra la descripción y su frase "Prepárate para…"; **no** su lista de "Beneficios". En Yoga Integral se quitó "Ideal para rehabilitación o profundizar tu práctica" y en Power Vinyasa "cardiovascular" (de "resistencia cardiovascular"), por ser afirmaciones de salud.
- Paquetes: una lista de precios en orden (1, 4, 8, 15 clases, Híbrido, Ilimitado y Early bird) con el detalle de cada página de paquete (curl, 2026-09-27): vigencia de 30 días, "No aplica con otras promociones" en Early bird y la renovación automática del paquete en línea.
- Coaches: sus textos "Mi intención es…" y sus estudios, con ortografía corregida (auténtica, más, práctica) y sin la sección de Gaby Ove (ver pendientes).
- Testimonios recortados: de Mayra Torres se quitó "las clases me han ayudado a sentirme mejor tanto mentalmente como físicamente, las coaches son increíbles y se ve reflejado en su trabajo"; de Aída Gloria Picazzo "perfecto para liberar el estrés y mejorar tu bienestar físico y mental".
- Corporativo: sus cuatro servicios resumidos en una frase cada uno (de sus textos); sin la numeración 01 a 04.
- H1: "Intención a través del movimiento" (su título de siempre); su lema "Intention through movement." queda arriba.
- El teléfono ahora se puede tocar (`tel:`) y el correo es un `mailto:` normal (su sitio lo esconde con el script de Cloudflare).

## Qué se agregó (no existía en el original)

- **"¿Con qué energía llegas hoy?"**: un tapete de yoga dibujado con sus diez clases acomodadas de más suave a más intenso; deslizas tu energía (o tocas "Necesito calma", "Quiero fluir", "Quiero fuerza", "Quiero sudar"), eliges "En studio" o "En línea" y se enciende la clase más cercana con su foto, descripción y frase, con "Reservar en studio" (su página `/reservar`) o "Registrarme: 14 días gratis" (`/register`) y un WhatsApp con la clase escrita. Textos nuestros: el título, "Desliza tu energía sobre el tapete y te decimos cuál de nuestras clases te toca", "Más suave", "Más intenso", los cuatro atajos, "Solo en línea: se toma desde casa con tu registro" y "El orden del tapete lo armamos con la descripción de cada clase; tu coach te orienta en tu primera visita". El texto entre comillas es suyo (página Nosotras), sin "el ciclo en el que estés".
- Portada: "Yoga, pilates y entrenamiento funcional en Las Lomas, San Luis Potosí. Diez formatos de clase, en studio y en línea."; botones "Elige tu clase" y "Escríbenos".
- Precio por clase en los paquetes de 4, 8 y 15 clases y en el Híbrido (división de sus precios, redondeada).
- Otros textos nuestros: "Todos tienen una vigencia de 30 días. Se compran en línea con tu cuenta.", "Clases en línea", "al mes", "Quién guía cada práctica, con sus estudios y, en sus palabras, su intención.", "Hablemos de tu empresa", "Los horarios de la semana y los lugares disponibles están en nuestra página de reservas", "Cómo llegar en Google Maps".
- WhatsApp (`wa.me/526182739238`) con mensajes escritos por clase, por modalidad y para empresas; barra fija en el celular (WhatsApp, Llamar, Cómo llegar); enlace a Google Maps con su dirección.
- JSON-LD `ExerciseGym` + `SportsActivityLocation` con dirección, teléfono, correo y rango de precios; Open Graph con una foto real (su sitio usa el favicon); title y description con qué es y dónde; textos alternativos que describen cada foto (su sitio dice "s1", "s2", "imagen").

## Qué se quitó o no se usó

- Las cifras de la página Corporativo ("75% de los colaboradores reporta altos niveles de estrés crónico", "3x más rotación"): no citan fuente.
- Las listas de "Beneficios" de cada clase (hablan de eliminar toxinas, reducir ansiedad y depresión, salud cardiovascular, regular el sistema nervioso y rehabilitación).
- El carrusel, el bloque de misión repetido dos veces en el inicio, el formulario de contacto y el de empresas (se reemplazan por WhatsApp), el blog (queda un enlace) y el registro e inicio de sesión (quedan como enlaces a su plataforma).
- `fondoInfoEnInicio.jpg` (es la misma foto que la de Power Vinyasa) y los iconos de estrella y de redes.
- Su tipografía de script (Dream Avenue) y Gibson: no están en @fontsource; se usa Cardo (sí es de su marca) e Inter.

## Qué se conserva al pie de la letra

- Los precios: 1 clase $150, 4 clases $550, 8 clases $850, 15 clases $999, Híbrido (15 clases en studio + online ilimitado) $1,050, Ilimitado $1,111, Early bird $555 (6:00 a 7:00 AM) y Clases Ilimitadas Online $299 al mes, con "¡14 días de prueba gratis al registrarse!" y su nota.
- Las descripciones y frases de las diez clases (salvo lo recortado arriba), "¿Qué es brahma studio?", "Nuestra intención", sus cuatro valores, "Nuestra historia" (dos párrafos de tres), sus nueve coaches y sus tres testimonios con nombre.
- Dirección (Maestros Ilustres 460, Las Lomas 1ra Secc, 78210 San Luis Potosí, S.L.P.), teléfono +52 618 273 92 38, correo brahmastudio11@gmail.com, Instagram @brahmastudio_, @inmotionby_paula y @fisio.itzelcorral, Facebook y TikTok @brahma.studio.
- Los enlaces a su plataforma: `/reservar`, `/register`, `/login`, cada `/paquete/N`, términos y aviso de privacidad.

## Pendiente de confirmar con el cliente

- **WhatsApp:** no publica ninguno; se usa su teléfono +52 618 273 92 38 como WhatsApp. Confirmar que ese número tiene WhatsApp y recibe llamadas.
- La lada 618 es de Durango y el estudio está en San Luis Potosí: confirmar que es el número del estudio y no el personal de alguna coach.
- **El orden de intensidad del tapete lo pusimos nosotros** a partir de sus textos (de Mindfulness y Vinyasa Suave a Rocket Yoga y Cross Training). Que las coaches lo revisen.
- Barre y Mindfulness solo están en la página de clases en línea; confirmar que no se dan en studio. Tampoco hay foto de esas dos clases en el clon (se muestra un recuadro dibujado).
- Horarios: no se publican en el rediseño. Su página de reservas (curl, 27 sep) solo tenía clases lunes, martes y miércoles; de jueves a domingo decía "No hay clases programadas para este día".
- Gaby Ove aparece en Coaches sin estudios ni texto ("Estudios: . .") y es también quien firma un testimonio: se quitó de Coaches hasta tener su información.
- Que los precios sigan vigentes y si el Ilimitado tiene tope de 30 clases (su página de paquete dice "Número de clases: 30").
- Punto exacto en Google Maps (hoy se busca por la dirección).
- Si quieren mostrar su servicio corporativo en la página principal (se dejó como sección breve).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme` y el `@font-face` de Inter)
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
