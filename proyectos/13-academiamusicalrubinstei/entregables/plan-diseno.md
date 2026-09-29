# Academia Musical Rubinstein: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://www.academiamusicalrubinstein.com/ (hecho en iWeb)
**Materia prima:** textos de inicio, contacto y galería en `investigacion/crudo.json`; las 6 fotos de la galería se bajaron del sitio en vivo a `assets/originales/` (el clon solo traía un banner). El clon (`sitio/`) no se tocó.
**Rubro:** escuela de música con más de 35 años en Polanco: clases personalizadas de piano, teclado, guitarra, ukulele, bajo, batería, canto, composición, armonía y solfeo, presenciales, a domicilio y en línea. **Ciudad:** Moliere 340 B, interior 103, Col. Polanco, Ciudad de México.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: página de iWeb de ancho fijo (980 px), sin versión para celular; la galería depende de JavaScript de iWeb.

## Qué tiene que lograr el sitio
1. Que el alumno (o su mamá o papá) vea qué maestro enseña el instrumento que quiere.
2. Cuánto cuesta el primer mes en cada modalidad (una hora, media hora, a domicilio o en línea).
3. Escribir por WhatsApp con el instrumento y la modalidad.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| tinta | `#1d1a18` | Texto y teclas negras |
| marfil | `#faf6ef` | Fondo y teclas blancas |
| vino | `#8b1e1e` | Botones y títulos (el rojo del logotipo) |
| madera | `#6a625a` | Texto secundario |
| laton | `#e9c98f` | Acento sobre oscuro |

Contrastes: tinta/marfil 16.07, blanco/vino 9.12, vino/marfil 8.47, madera/marfil 5.56, latón/tinta 10.89.
Fuentes: Libre Caslon Text 400/700 (títulos, de partitura) e Instrument Sans 400/600 (texto).

## Elemento memorable (uno solo)
**"¿Qué quieres tocar?"**: un teclado de piano donde cada tecla blanca es un instrumento o materia de su lista (piano, teclado, guitarra, bajo, batería, canto, violín, composición, iniciación musical, ukulele). Al tocar una tecla se hunde y aparecen los maestros que lo imparten según su sitio (con foto cuando la hay) y el costo del primer mes según la modalidad elegida: cuota más inscripción. El WhatsApp lleva instrumento y modalidad. No se ha usado antes en el estudio.

## Secciones
1. Portada: H1 "Clases de música en Polanco", más de 35 años, cualquier edad y nivel.
2. ¿Qué quieres tocar?
3. Los maestros.
4. Géneros y servicios (recitales, cursos de verano, ingreso a conservatorio, audiciones).
5. El estudio (fotos de los salones), horario y contacto.

## Revisión contra lo genérico (segunda pasada)
- El piano negro con letras doradas es el cliché de toda escuela de música: aquí el teclado es la herramienta para elegir, no un fondo decorativo, y el rojo vino sale de su logotipo.
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02 y sin puntos medios como separadores.
- Las tarjetas de maestros se recortan para quitar el texto horneado en la imagen; los nombres e instrumentos van en texto real.
- Nada de "los mejores maestros" ni promesas de resultados: se dicen los años, las clases y los precios.
- Sin animaciones salvo la tecla que se hunde (CSS, respeta `prefers-reduced-motion`).
