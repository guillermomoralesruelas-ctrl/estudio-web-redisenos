# Joy D Fadez: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://joydfadez.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/594-joydfadez/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 594-joydfadez`) |

## En una línea

El mismo barbero independiente de Monterrey, con sus ocho servicios, su historia y su forma de trabajar, en una página donde el cliente arma su servicio y ve en un reloj cuánto dura y desde cuánto cuesta antes de reservar por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Cinco reels de video y el widget de Square (ver `qa/reporte-rediseno.json` → `antes`) | Página sin scripts de terceros: 0 desbordes, 0 imágenes rotas, 0 recursos fallidos |
| `corte.jpg` y `ejecutivo.jpg` parecen fotos de banco | No se usan; solo sus tres fades y el rooftop |

## Qué se cambió (mismo contenido, otra forma)

- Menú de servicios (antes con detalle al pasar el cursor) convertido en "Tu tiempo en la silla".
- "El estudio", la línea de tiempo, "Cómo funciona" y las preguntas quedaron en dos secciones.
- La reserva se hace por WhatsApp con el servicio ya escrito (su sitio manda a Square).

## Qué se agregó (no existía en el original)

- **"Tu tiempo en la silla"** (elemento memorable): se tocan servicios y un reloj de 120 minutos se llena por segmentos de color, uno por servicio; al centro, el tiempo total y el precio "desde" sumado. El domicilio suma $200 y "tiempo a medida". El WhatsApp lleva la lista, los minutos y el total.
- Textos nuestros: la entrada del H1, los cuatro pasos resumidos y los botones.
- Barra fija en el celular (WhatsApp, Instagram, Horario), enlace a Google Maps con sus coordenadas, JSON-LD `BarberShop` con horario y Open Graph.

## Qué se quitó o no se usó

- "+5,400 clientes citados", "N° 013 Verificado" y "Cédula del oficio" (sin fuente).
- La página de productos ("Próximamente", "~182 días"): aún no hay productos.
- Los reels y el reloj "MTY · 20:44" del encabezado.
- "Precisión quirúrgica" y "Detalle clínico" se dejaron solo como lemas de servicio (son sus nombres), sin promesas.

## Qué se conserva al pie de la letra

- Servicios, duración y precio "desde": corte 45 min $150, barba 25 min $50, tinte 90 min $300, uñas 60 min $250, pedicura 60 min $250, Pedi (In-A-Box) 60 min $500, Complemento Ejecutivo 20 min $60, servicio a domicilio $200 a medida.
- Historia de Joy (2013 silla prestada, 2017 estudio propio, 2020 domicilio, 2023 uñas) y su texto.
- Horario: miércoles a domingo de 10:00 a 19:00; lunes y martes solo con cita.
- Preguntas: sin pago previo, walk-ins si hay espacio, domicilio en la zona metropolitana, cancelar hasta 4 horas antes.
- WhatsApp +52 720 637 1461, Instagram @joyd.fadez y Facebook.

## Pendiente de confirmar con el cliente

- **Dirección del estudio:** su sitio solo dice "Monterrey" y da las coordenadas del centro; también dice "Estudio cerrado · reserva en línea".
- **Moneda de los precios** (su menú no la dice).
- Si la reserva por Square funciona para sus clientes (Square no opera en México) y si prefiere reservar por WhatsApp.
- El número 720 es lada del Estado de México: confirmar que es el WhatsApp correcto para Monterrey.
- Fotos del estudio.

## Dónde está cada cosa

- Servicios, historia, preguntas y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y el reloj: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
