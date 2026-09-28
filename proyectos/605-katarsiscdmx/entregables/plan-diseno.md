# Katarsis: plan de rediseño (método 1.1)

**Sitio original:** https://www.katarsis.mx/
**Materia prima:** clon en `../sitio/` (retratos del equipo en `sitio/assets/users/`), textos de 5 páginas en `investigacion/crudo.json` (inicio, /nuestro-equipo, /nosotros, /empresas, /faq), contacto en `investigacion/resumen.json`; correo, redes y enlace a Maps de su JSON-LD en vivo (`curl`, 2026-09-27).
**Rubro:** psicoterapia (Katarsis - Centro de Atención Psicológica Integral), en línea y presencial. **Ciudad:** Ciudad de México; sedes en Tlalpan (Toriello Guerra), Benito Juárez (San José Insurgentes) y Gustavo A. Madero (Lindavista), previa cita.

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-27): 4,358 px en escritorio y 6,100 px en el celular, 83 px de desborde en el celular, 1 H1, 29 imágenes rotas, 27 errores y 14 recursos fallidos (el logo `logo1m.webp`, los iconos de Skype, FaceTime, teléfono, Gmail, WhatsApp y Messenger, `blur.png` —el marcador de los retratos— y las fuentes de Font Awesome).
- A ojo: los retratos del equipo cargan con `lazy.js`, que no está en el clon, así que se ven en blanco; la portada se sostiene sobre fotos de banco.

## Qué tiene que lograr el sitio
1. Que alguien que busca terapia encuentre a **una persona concreta** del equipo para lo que quiere trabajar, con su cédula y su enfoque, y pida su sesión por WhatsApp.
2. Precios claros por modalidad (en línea o presencial) y cómo funciona el proceso.
3. Saber que la atención presencial es solo previa cita, en cuál de las tres sedes, y que no es un servicio de emergencia.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| turquesa | #54b5bf | Cuadro superior izquierdo de su logo. Mosaico de portada y viñetas. Tinta encima 6.57:1 |
| turquesahondo | #1d6b73 | El mismo turquesa, más hondo, para botones y enlaces. Blanco encima 6.17:1; sobre papel 5.79:1 |
| ámbar / naranja | #f2a516 / #f24e29 | Los otros dos cuadros del logo: solo en el mosaico y los marcadores de pasos y sedes (gráficos) |
| vino | #8c1c1c | El cuarto cuadro del logo. Tema elegido y el lema. Blanco encima 9.14:1; sobre papel 8.57:1 |
| naranjahondo | #c2381a | Filete del aviso "Importante" (5.08:1 sobre papel) |
| papel | #fbf7f2 | Fondo general, cálido. Tinta encima 14.79:1; gris 6.39:1 |
| noche | #2a1414 | "¿Cómo funciona?" y pie: el vino casi negro. Papel encima 16.29:1 |

**Tipografía:** su sitio usa las fuentes de su plantilla y su logotipo es una palo seca delgada. Títulos en Newsreader (serifa editorial, tranquila, sin la frialdad de lo médico) y texto en Inter. Con @fontsource.

## Elemento memorable
**"¿De qué quieres hablar?"**: los temas salen, uno por uno, de lo que cada psicoterapeuta escribió en su propio perfil (ansiedad, depresión y estado de ánimo, pareja y familia, duelo y pérdidas, trauma, vivir con un diagnóstico médico, sexualidad, alimentación, adicciones, niños y adolescentes que vivieron violencia o abuso, orientación a padres, deportistas, evaluación psicodiagnóstica, terapia cognitivo conductual). Eliges uno y quedan las personas que lo mencionan, con su retrato real, su cédula profesional, su grado, su enfoque, su perfil, a quién atiende y si da sesión en línea y presencial. Un selector "¿Cómo quieres tu sesión?" cambia el precio que se muestra y el mensaje: "Hola, me gustaría tomar una sesión en línea con Carla Molina".
Sale del negocio: su diferencia frente a una app de terapia son **personas con nombre, cédula y formación publicada**; el sitio original las pone en un carrusel y en una página aparte, sin forma de buscar por lo que te pasa.
**Por qué no repite otros:** "¿Para quién es?" elige destinatario de un regalo; "zonas del cuerpo" elige un tratamiento por zona; "checklist de mascota" es una lista. Aquí se elige **un tema personal** y el resultado son personas del equipo con su cédula.
**Cuidado por el tema:** el mensaje de WhatsApp dice con quién quieres tu sesión, **no** el tema (queda en tu teléfono y en el de la recepción). No hay chip de "suicidio" aunque un perfil lo menciona: esa situación va al aviso "Importante" (su propio texto: no es servicio de emergencia), no a un botón de reservar.
**Límite honesto:** "atiende a" y "presencial y en línea" solo aparecen cuando el perfil lo dice; Mario Cuadros no publica a quién atiende y se queda sin esa línea.

## Estructura
1. Encabezado con su logo, enlaces (Psicoterapeutas, Precios, Sedes, Preguntas) y WhatsApp.
2. Portada: su lema "Psicoterapia en un clic", H1 "Psicoterapia en línea y presencial en la Ciudad de México", mosaico de 8 rostros del equipo con los cuatro colores del logo.
3. ¿De qué quieres hablar? (el elemento).
4. Precios: en línea y presencial, 1, 4 y 8 sesiones, precio por sesión y terapia de pareja.
5. ¿Cómo funciona?: sus 4 pasos y la confidencialidad.
6. Sedes: las tres, previa cita, cada una con Google Maps.
7. Preguntas frecuentes (6 de su FAQ) y el aviso "Importante".
8. Para empresas (su texto) y pie con teléfono, correo y redes; barra fija en el celular (WhatsApp, Llamar, Sedes).

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas, numeración 01/02 y puntos medios como separador (los pasos llevan un cuadrito de color del logo, no un número grande).
- Animar cada sección al hacer scroll.
- Fotos de banco de médicos con estetoscopio, laboratorios o electrocardiogramas: no son psicoterapia ni son su equipo.
- Promesas de salud: nada de "los mejores psicólogos", "resultados" ni "garantizado"; "Mereces ser feliz" tampoco se usa como promesa. Sin testimonios (el sitio no tiene).
- "Atención 24/7": el propio sitio dice "sólo atendemos previa cita", así que no se repite.
