# Gema Spa Huatulco: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://gemaspahuatulco.com/ |
| Método | **1.2 en la nube**: el clon no trae fotos (su sitio las sirve desde `content.app-sources.com`); se bajaron a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/446-gemaspahuatulco/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El mismo spa en una página: sus fotos reales de la playa, la cabina y las terrazas de Huatulco, y un "Arma tu masaje" que da el precio según el lugar (cabina, playa o domicilio) y lo manda por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Ninguna foto (las carga su plataforma desde `content.app-sources.com`) | 23 fotos propias y el logotipo en `assets/originales/`, en .webp. Dos casi repetidas se movieron a `_papelera/446-originales-repetidas/` |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, masajes terapéuticos y relajantes, masajes especiales, promociones, tienda y sobre nosotros se juntan en una sola página.
- Las descripciones de los masajes se resumieron en una línea y **sin promesas de salud** (su sitio dice, por ejemplo, que el drenaje "ayuda a eliminar toxinas" o que el deportivo "previene lesiones").
- Todos los botones de WhatsApp van al número 958 101 3543 (su sitio tiene en cada página otro botón que manda a 52 651323987, un número incompleto).
- Los faciales y tratamientos corporales (dermapen, plasma pen, lipo sin cirugía…) no se detallan: su página usa fotos de banco y son tratamientos con más riesgo de afirmaciones médicas. Se enlaza a su lista.

## Qué se agregó (no existía en el original)

- **"Arma tu masaje"** (elemento memorable): eliges el lugar (cabina, playa o a domicilio, cada uno con su foto real) y el masaje; los que no se ofrecen en ese lugar se desactivan ("No en playa"). Muestra el precio de su lista, la duración cuando la publican y la nota del servicio, y arma el mensaje de WhatsApp ("Quiero reservar: Masaje relajante en la playa ($1,200 MXN)"). También enlaza a su calendario en línea.
- Textos del estudio: "¿Dónde quieres tu masaje?" y su explicación, "Para tu primera visita, en pareja o en tu cumpleaños", "Huatulco de fondo", los rótulos de lugar y los textos alternativos.
- Calificación de Google (5.0, 19 opiniones, como la publica su sitio), enlace "Cómo llegar", barra fija en el celular (reservar, llamar, cómo llegar), JSON-LD `DaySpa`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Fotos de banco: las de faciales, los vales con modelo, "Imagen de WhatsApp" de parejas con velas y la playa genérica.
- El "Masaje en la Playa desde $900, 60 min" de su página de especiales: contradice los precios de playa de cada masaje (desde $1,000). Ver `OPORTUNIDADES.md`.
- El aviso de cookies, el formulario y el carrito (los vales se compran en su tienda).

## Qué se conserva al pie de la letra

- Nombre, logotipo, dirección, teléfono, correo, redes, calendario de citas, tienda de vales ($800, $1,700, $2,700, válidos por 3 meses), su H1 "Relájate en el paraíso" y textos de inicio, todos los precios por lugar, duraciones y notas, y las 4 promociones con sus precios.

## Pendiente de confirmar con el cliente

- **Horario**: "Lunes a Domingo 9:00 AM - 22:00 PM" en el pie y "8:00 AM - 9:00 PM" en sobre nosotros. El rediseño dice "Lunes a domingo" y pide confirmar por WhatsApp.
- Precio del masaje en la playa ($900 o los de cada masaje).

## Dónde está cada cosa

- Textos, masajes, precios y promociones: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs` (crea los .webp)
