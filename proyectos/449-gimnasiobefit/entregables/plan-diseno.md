# Gimnasio Befit: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://befit.mx/ (Next.js)
**Materia prima:** textos del sitio en vivo (revisado el 2026-09-29) e `investigacion/`; el clon solo traía el logotipo. Se bajaron de `befit.mx` las fotos reales a `assets/originales/`: las dos sucursales, una clase de funcional y una zona de pesas (está en su servidor, pero su página no la usa). Las de box, crossfit, zumba, zumba step, spinning y la portada son de banco y no se usaron. El clon (`sitio/`) no se tocó.
**Rubro:** gimnasio con dos sucursales en Mazatlán, Sinaloa: Insurgentes ($499 al mes, sin inscripción) y Real del Valle ($699, con crossfit y funcional).

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: el clon depende de las imágenes optimizadas de Next.js (`/_next/image`), que no existen fuera de su servidor: 13 imágenes rotas y 21 recursos fallidos.

## Qué tiene que lograr el sitio
1. Que el interesado sepa qué sucursal tiene lo que quiere entrenar y cuánto cuesta.
2. Ver los planes cortos (semana, quincena, visitas, año y visita suelta).
3. Escribir por WhatsApp con la sucursal y las clases.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| tinta | `#111827` | Texto, portada, clases y pie |
| hueso | `#f6f5f0` | Fondo |
| azul | `#2340a8` | Botones y precios (el azul de su logotipo) |
| gris | `#5b6170` | Texto secundario |
| amarillo | `#ffd23f` | Acento (las paredes amarillas de su zona de pesas) |

Contrastes: tinta/hueso 16.25, blanco/azul 8.86, azul/hueso 8.12, gris/hueso 5.68, tinta/amarillo 12.28.
Fuentes: Barlow Condensed 700/800 (títulos, anchos como la letra de su logotipo) y Barlow 400/600 (texto).

## Elemento memorable (uno solo)
**"¿Qué quieres entrenar?"**: fichas con los nueve servicios que su sitio lista por sucursal (pesas, cardio, instructor de piso, spinning, box, zumba, crossfit, funcional, nutriólogo). Al marcar lo que te interesa, cada tarjeta de sucursal dice si lo tiene o qué le falta (la que no sirve se pone en gris y pierde su botón), y la que conviene se marca con su ahorro: "Te sirven las dos. Befit Insurgentes cuesta $200 menos al mes". El WhatsApp lleva la sucursal y las clases. No se ha usado antes en el estudio.

## Secciones
1. Portada: H1 "Gimnasio en Mazatlán desde $499 al mes".
2. ¿Qué quieres entrenar? (con las dos sucursales).
3. Clases a diferentes horarios (con la foto real de funcional).
4. Si no quieres pagar el mes (planes cortos y visita).
5. Pie con las dos sucursales, teléfonos y Google Maps.

## Revisión contra lo genérico (segunda pasada)
- Nada de modelos de banco flexionando: solo las fotos reales de sus sucursales y de una clase.
- La comparación de sucursales sale de las listas que ellos mismos publican; no se inventan servicios ni horarios (se piden por WhatsApp).
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02 y sin puntos medios como separadores. Los títulos van en mayúsculas porque así es la letra de su logotipo, no como etiquetas.
- Sin "el mejor gimnasio de Mazatlán" (lo dice su título): se dicen los precios.
- Sin animaciones salvo el cambio de color de fichas y tarjetas (CSS, respeta `prefers-reduced-motion`).
