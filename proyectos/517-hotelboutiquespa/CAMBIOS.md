# Hotel Boutique & Spa Valle de Guadalupe: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.hoteldelvalledeguadalupe.com/ (Duda, reservas con Easy-Rez; en inglés, con selector es/fr/it) |
| Método | **1.2 en la nube** (lote 9): el clon solo trae la portada; se leyeron sus páginas (habitaciones y las 17 fichas, spa, Fuego, Valle Omakase, Equitarius, Valle Tours, bodas, decoración, reserva directa, ubicación, nosotros, contacto) y se bajaron 66 fotos y el logotipo a `assets/originales/` |
| Fecha | 2026-10-11 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/517-hotelboutiquespa/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El hotel boutique entre viñedos en una sola página en español: un buscador "¿Cuántos vienen?" para sus 17 tipos de habitación, el spa Luna de Sol, los restaurantes Fuego y Valle Omakase, experiencias, bodas, paquetes de decoración y cómo llegar.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Solo la portada; las habitaciones y servicios están en unas 30 subpáginas | Se leyeron todas; `rediseno/fotos-web.mjs` hace las copias .webp |
| 16 imágenes rotas y desborde horizontal de 378 px en el celular | Sin imágenes rotas ni desborde |

## Qué se cambió (mismo contenido, otra forma)

- El sitio está en inglés; el rediseño está en español (traducción del estudio).
- Las 17 fichas de habitación, cada una en su página, pasan a tarjetas con una ventana de detalle (dos fotos, camas, capacidad, lo que la distingue y lo común a todas).
- Las instrucciones para llegar desde el aeropuerto de Tijuana se ordenaron en tres tramos.
- Los paquetes de decoración se muestran en pestañas.

## Qué se agregó (no existía en el original)

- **"¿Cuántos vienen?"** (elemento memorable): eliges adultos y niños (hasta 12 años) y lo que no puede faltar (terraza, fogata, jacuzzi, cocina, tina, dos recámaras) y aparecen solo las habitaciones que caben según sus fichas, de la más chica a la más grande. Cada una manda a Easy-Rez o a WhatsApp con el mensaje armado ("la habitación X para 2 adultos y 1 niño"). Las fichas que no indican si admiten niños se avisan aparte con un enlace para preguntar.
- Textos del estudio: titulares, introducciones y textos alternativos.
- Barra fija en el celular (llamar, WhatsApp, reservar), JSON-LD `Hotel`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Los créditos de relleno "Photo By: John Doe", los botones vacíos "Button" y los textos de plantilla "Título de diapositiva / Escriba el subtítulo aquí" de la página de decoración.
- Los paquetes "romántico" y "entre amigos" de la página de reserva directa: dicen "válido hasta el 30 de diciembre de 2025" (vencido) y no tienen precio.
- Misión, visión y valores de "Nosotros", y el formulario de contacto (se usa WhatsApp, teléfono y correo).

## Qué se conserva al pie de la letra

- Nombre, dirección, teléfonos +52 646 145 2967, +52 646 155 2164 y concierge +52 646 116 6351, WhatsApp (wa.me/526461452967, el de su página de contacto), correos ventas@ y contacto@, horario de agentes, enlace de reservas Easy-Rez, mapa, redes y Tripadvisor.
- Camas, capacidades y metros de cada habitación según su ficha; servicios del spa; terrazas de Fuego; trayectoria del chef Antonio Quindere; servicios de Equitarius y Valle Tours; parejas de bodas; contenido y condiciones de los cinco paquetes de decoración; instrucciones para llegar.

## Pendiente de confirmar con el cliente

- **Penthouse con dos recámaras**: su ficha copia los datos del Deluxe Studio (1 cama queen, 3 adultos); se marcó "por confirmar" y no aparece en el buscador.
- Si las habitaciones cuyas fichas no mencionan niños (Classic, Superior Suite, Junior Suite con terraza, Master Grand Deluxe, Penthouse con una cama) los admiten.
- Tarifas (están en Easy-Rez), precios de los paquetes de decoración, menús y horarios de los restaurantes.
- Qué WhatsApp prefieren: el sitio usa tres (wa.me/526461452967, wa.link y el del concierge).
- Governor de una recámara y Superior Villa tienen fichas casi idénticas (70 m², 3 huéspedes); se respetaron tal cual.

## Dónde está cada cosa

- Contenido: `rediseno/src/data/content.ts` (fuente y fecha en el encabezado).
- Fotos: `assets/originales/` (descargadas) y `assets/web/` (webp de `fotos-web.mjs`).
- Capturas: `referencias/capturas-2026-10-11/`.
