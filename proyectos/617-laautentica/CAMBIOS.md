# La Auténtica: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://autenticabarberia.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/617-laautentica/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 617-laautentica`) |

## En una línea

Es el mismo negocio con sus propios precios, textos, fotos, barberos y reseñas; cambia la forma: una sola página oscura con sus fuentes de marca, cartas de barbería y spa por pestañas, WhatsApp prellenado en cada decisión y el Club Social escondido "detrás del librero", como lo anuncian ellos mismos en Instagram.

## Qué estaba roto o incompleto en el clon

`qa-rediseno.mjs` (antes): desborde 0, imágenes rotas 0 y 1 recurso fallido, más lo que se ve a ojo.

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| El video de la portada (`LA-F-reel-1.mp4`) no se descargó y la portada queda como un rectángulo oscuro | Portada con la foto del salón (mapa de México con el logo, sillones y billar) |
| Títulos encimados por falta de la fuente ("Experiencia Auténtica – ALL INCLUSIVE", "MASAJE EN PAREJA") | Fuentes de la marca (Bebas Neue y Prata) empaquetadas con @fontsource |
| El carrusel de barberos (LatePoint) y el de reseñas no se mueven; "Reservar Ahora" va a `#` | Barberos en una lista fija, cada uno con su botón de WhatsApp; reseñas visibles sin carrusel |
| El carrusel de Instagram depende de las imágenes del servidor del cliente y del plugin | No se usa (ver "Qué se quitó") |
| 1 recurso con error de carga | El rediseño no pide recursos externos: 0 fallidos |

## Qué se cambió (mismo contenido, otra forma)

- La portada lleva un solo H1 ("Barbería, SPA & Club Social") en lugar de tres H1 (el original usa `#` para el lema, "Masajes & Faciales" y "elegancia & Bienestar").
- Las siete tarjetas de precios de barbería y spa se volvieron dos cartas por pestañas (Paquetes, Corte, Afeitado, Recorte; y Paquetes, Masajes, Faciales, Terapias). Los precios no cambian.
- Los nombres de servicio pasaron de mayúsculas y minúsculas mezcladas ("mASAJE 60 + fACIAL", "paquete SPA") a una sola forma ("Masaje 60 + facial", "Paquete SPA").
- Las descripciones del spa se recortaron un poco (por ejemplo, se quitó "¡Descúbrelo Ahora!" y "Tu cuerpo lo agradecerá"); la de la reseña de Fernando Salas Rivera se recortó quitando dos frases del medio.
- Los nombres de marca de la tienda se normalizaron ("REUZEL Concrete Hold Matt Pomade 113 gr" → "Reuzel Concrete Hold Matte Pomade 113 g"; "Kingbrown Beard Grooming Oill 30m" → "King Brown Beard Grooming Oil 30 ml").
- El Club Social pasó del final de la página a una sección propia con el librero.
- Fotos convertidas a .webp (1.18 MB → 0.38 MB) con `rediseno/fotos-web.mjs`; el logo SVG oficial se usa en crema sobre fondo oscuro.

## Qué se agregó (no existía en el original)

- **Elemento distintivo "Detrás del librero":** el Club Social aparece tapado por un librero de madera; los lomos dicen lo que hay del otro lado (Coctelería, Destilados, Cervezas artesanales, Billar, Fútbol en pantalla, Paquete de cumpleaños, Un evento por año, todo tomado del sitio) y el botón "Empuja el librero" lo gira como una puerta. El texto de la tarjeta es su publicación de Instagram. Respeta `prefers-reduced-motion`.
- WhatsApp prellenado (525620203272, el mismo número al que llevan sus `wa.link`) en: agendar cita, agendar en el spa, regalar una Experiencia Auténtica, agendar con cada barbero y pedir ser Socio Auténtico.
- Teléfono con enlace `tel:` (en el original es texto).
- Barra fija en el celular: WhatsApp, llamar y cómo llegar (Google Maps).
- Enlace a Google Maps (búsqueda "La Auténtica Barbería Ciudad Satélite Zona Azul").
- JSON-LD `BarberShop` / `HairSalon` con teléfono, correo, zona, rango de precios, cuatro servicios con precio y redes; title, description y Open Graph con datos reales.
- Textos redactados por nosotros: "Agenda tu cita", "Agendar por WhatsApp", "Ver servicios y precios", "Regalar una experiencia", "¿Con quién te atiendes?", "Agendar con él por WhatsApp", "Agendar en el Spa", "Masajes y faciales" (subtítulo, del original "Masajes & Faciales"), "Ambiente, juego y buen trago. Lo que hay detrás del librero se descubre, no se presume." (armado con frases de su Instagram), "Empuja el librero", "Cerrar el librero", "Quiero ser Socio Auténtico", "Las pomadas y el aceite que usamos en el sillón, en la tienda en línea.", "Lo que dicen de la casa", "Te esperamos", "Pregúntanos por WhatsApp" (en lugar de horario), "Escríbenos", "Cómo llegar", "Ver en Google Maps" y los mensajes prellenados de WhatsApp.

## Qué se quitó o no se usó

- El video de la portada (no está en el clon y pesaría demasiado); se puede volver a poner si el cliente lo quiere.
- El carrusel de Instagram (sus fotos no se descargaron y dependen de un plugin); las redes quedan enlazadas en Contacto.
- El carrito, "Mi cuenta" y el formulario de "Eventos & Promociones" (newsletter): la tienda se enlaza a su tienda actual.
- La textura dorada `LA-dorado.jpg` (fondo genérico, posible banco).
- El enlace "Carta de bebidas": su página no tiene bebidas (ver OPORTUNIDADES.md).
- El crédito "Diseñado con ♡ por O2 Colectivo".

## Qué se conserva al pie de la letra

- Todos los precios de barbería, spa, Experiencia Auténtica ($1,290) y tienda.
- Los textos de presentación ("Somos una Barbería Auténtica…", "Descubre una Auténtica Barbería…", el del spa, el del Club Social y el de Socio Auténtico).
- Los nombres de los barberos tal como los publica el sitio (Miguel Leon y Santiago Pajaro) y sus fotos.
- Las tres reseñas con sus autores (Rodrigo Martínez, Fernando Salas Rivera y Nestor Leal).
- Teléfono y WhatsApp 56 2020 3272, correo contacto@autenticabarberia.com e Instagram, Facebook y TikTok.
- La forma de apartar la cita del spa: $200 en la tienda en línea o por WhatsApp.

## Pendiente de confirmar con el cliente

- **Dirección exacta:** el sitio solo dice "Cd. Satélite 📍 Zona Azul". Que Ciudad Satélite está en Naucalpan de Juárez, Estado de México, es deducido (se usó en el JSON-LD); el enlace a Maps es una búsqueda por nombre y zona.
- **Horario:** no se publica en ninguna página; se dejó "Pregúntanos por WhatsApp".
- Si los barberos llevan acento (Miguel León, Santiago Pájaro) y si hay más: la reseña de Fernando Salas Rivera menciona a "Alfredo".
- Qué incluye la membresía de Socio Auténtico y cuánto cuesta (el sitio no lo dice).
- La carta de bebidas con precios, para agregarla al Club Social.
- Si quieren recuperar el video de la portada y el feed de Instagram.
- Fotos de la terraza y de los sillones de barbería (no hay en el sitio).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: copias .webp de las fotos del clon en `assets/web/`, generadas con `rediseno/fotos-web.mjs` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
