# InMotion by Brahmā: plan de rediseño (método 1.1)

**Sitio original:** https://inmotionbybrahma.com/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/`), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`. Páginas que no están en `crudo.json` (Coaches, Contacto, Corporativo, Reservar y el detalle de cada paquete) se leyeron con curl el 2026-09-27, solo texto.
**Rubro:** estudio de yoga, pilates y entrenamiento funcional (brahmā studio / InMotion by Brahmā), con clases en studio y en línea y un servicio corporativo. En la BD: FITNESS. **Ciudad:** San Luis Potosí, S.L.P. (Maestros Ilustres 460, Las Lomas 1ra Secc.).

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): escritorio 5,980 px y móvil 7,768 px, sin desborde, pero 1 imagen rota y 5 a 6 recursos con 404: `abajoInicio.jpg` y `fondoInfoEnInicio.jpg` se piden desde `sitio/Imagenes/…` y no desde `sitio/assets/Imagenes/…` (la foto de las tres alumnas y el fondo del bloque de misión no salen), las fuentes de Bootstrap Icons y el script de Cloudflare que descifra el correo.
- El carrusel del inicio depende del JS de Bootstrap: en el clon las tres fotos quedan fijas o se enciman según el ancho.
- Las fuentes de la marca (Cardo, Dream Avenue, Gibson) vienen como archivos sueltos `.ttf`/`.OTF` en `assets/Tipografias`.

## Qué tiene que lograr el sitio
1. Que la persona **elija una clase y la reserve** (en studio, con su sistema de reservas `/reservar`) o **se registre a las clases en línea** (14 días de prueba). Hoy no hay WhatsApp ni un teléfono tocable: el rediseño agrega los dos.
2. Que entienda en un vistazo **qué clase le toca** entre diez formatos con nombres parecidos (Vinyasa Flow, Power Vinyasa, Vinyasa Suave, Rocket Yoga…).
3. Mostrar los paquetes con precio y vigencia sin tener que abrir cada uno.

## Dirección visual
Sale de su sesión de fotos (todas en blanco y negro, fondo blanco, tapete oscuro) y del verde salvia de su logotipo (`#7E8D80`, 48 veces en el CSS del clon).

| Token | Color | Uso |
|---|---|---|
| `fondo` | `#FAF8F7` | Fondo general (del CSS del clon) |
| `papel` | `#FFFFFF` | Bloques de fotos (el fondo de su sesión) |
| `tinta` | `#1F2420` | Texto |
| `salvia` | `#7E8D80` | El tapete, líneas, detalles grandes (no texto pequeño: 3.6:1) |
| `salvia-osc` | `#4E5B51` | Botones y enlaces (7.1:1 con blanco) |
| `bruma` | `#E5EBE6` | Fondos suaves y separadores (del CSS del clon) |

**Tipografía:** Cardo (la serif de su marca, `@fontsource/cardo`, latín) para títulos; Inter Variable para texto (Gibson no está en @fontsource). Dream Avenue (su script) no se usa: no está en @fontsource y el logotipo ya la lleva.

## Elemento memorable
**"¿Con qué energía llegas hoy?": el tapete.** Su página "Nosotras" dice que la clase se escoge "dependiendo de la energía con la que te encuentres, la hora del día y el movimiento que tu cuerpo necesita". El rediseño lo vuelve literal: un tapete de yoga dibujado (el mismo tapete oscuro de todas sus fotos) con sus diez formatos acomodados de un extremo a otro, de lo más suave (Mindfulness, Vinyasa Suave) a lo más intenso (Rocket Yoga, Cross Training), según las palabras de cada descripción ("práctica suave", "bajo impacto", "alta intensidad", "inversiones"). Deslizas tu energía sobre el tapete (o tocas "Necesito calma", "Quiero fluir", "Quiero fuerza", "Quiero sudar"), eliges "En studio" o "En línea" (en studio no hay Barre ni Mindfulness) y se enciende la clase más cercana con su foto, su descripción y su frase "Prepárate para…", con "Reservar en studio" o "Registrarme" y un WhatsApp con la clase escrita.
- Datos reales: los diez formatos, sus textos y fotos, en qué modalidad se dan (de `/clases` y `/clases-en-linea`) y los enlaces de reserva y registro.
- Deducido (pendiente): el orden de intensidad lo pusimos nosotros a partir de sus textos.
- Distinto de todo lo de `METODOS.md`: no es horario semanal (78, "Arma tu semana"), ni paquete por veces a la semana (498, "Tu mes en la barra"), ni reloj de abierto (02), ni mandala de servicios (608).
- Sin afirmaciones de salud: de cada clase se muestra la descripción y su frase, no la lista de "Beneficios" (hablan de eliminar toxinas, depresión, salud cardiovascular y rehabilitación).

## Estructura
1. Encabezado con logotipo, anclas y WhatsApp.
2. Portada: foto de las tres alumnas en triángulo, H1 "Intención a través del movimiento", yoga, pilates y entrenamiento en Las Lomas, San Luis Potosí; botones "Elige tu clase" y WhatsApp.
3. El tapete (elemento memorable).
4. Paquetes: en studio (7, con clases, vigencia de 30 días y precio por clase calculado) y en línea ($299 al mes, 14 días de prueba). Cada uno abre su página de compra.
5. Nosotras: qué es brahmā studio, sus cuatro valores y su historia.
6. Coaches: nueve coaches con estudios e intención (texto; no hay fotos de ellas en el clon).
7. Testimonios (sus tres, con nombre).
8. Corporativo: sus cuatro servicios para empresas y WhatsApp.
9. Visítanos: dirección con foto que abre Google Maps, teléfono, correo y redes.
10. Pie. Barra fija en el celular: WhatsApp, llamar y cómo llegar.

## Qué se evita (revisión contra lo genérico)
- Sin etiquetas pequeñas en mayúsculas sobre cada sección, sin numeración 01/02 (el original la usa en Corporativo: se quita) y sin puntos medios como separador.
- Sin animar cada sección al hacer scroll: el único movimiento es el marcador del tapete y el cambio de clase, y se apaga con `prefers-reduced-motion`.
- Paquetes como una lista de precios de una columna, no una fila de tarjetas idénticas; coaches como texto corrido en dos columnas, no tarjetas con foto de relleno.
- Sin degradados: blanco, salvia y negro como en sus fotos.
- No se inventan horarios, reseñas, coaches ni datos: la sección de horario enlaza a su página de reservas.
- Se quitan las cifras de su página Corporativo (75 % de estrés crónico, 3x de rotación) porque no citan fuente.
