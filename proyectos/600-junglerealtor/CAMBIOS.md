# Jungle Realtor: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://junglerealtor.com/ |
| Método | **1.2 en la nube**: Jina chocó con un reto anti-bot y el clon solo trae avatares; las páginas se leyeron en vivo y las fotos se bajaron de `storage.googleapis.com/junglerealtors/` a `assets/originales/` |
| Fecha | 2026-10-10 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/600-junglerealtor/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La misma inmobiliaria en una página en español: sus 19 propiedades destacadas con sus fotos, su equipo con nombre y correo, y un buscador "Tu presupuesto, en el mapa de la costa" que cuenta en un mapa cuántas propiedades te quedan en cada destino.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Sin textos ni contacto (`investigacion/crudo.json` solo tiene la pantalla anti-bot) y solo 7 avatares de reseñas | Textos leídos el 2026-10-10 del inicio en inglés y español, about-us, contact-form y las páginas de cada destino |
| Ninguna foto de propiedad ni del equipo | 19 fotos de propiedades, 9 del equipo, 4 de destinos, el reconocimiento "Best in Tulum 2024", logotipo e ícono en `assets/originales/`, convertidos a .webp por `rediseno/fotos-web.mjs` |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, el listado destacado, destinos, about-us y contacto se juntan en una sola página, en español (su sitio en español es una traducción parcial con textos en inglés).
- Los títulos de las propiedades se pasaron al español a partir de sus títulos; en su sitio en español van cortados ("Terreno en venta en El Cuyo, Yucatán, a 130 m de...").
- Precios: los de su inicio en inglés. Su sitio en español muestra otros montos en dólares para la misma propiedad (ver `OPORTUNIDADES.md`); el rediseño lo aclara bajo el listado.
- Superficies: se muestran en m² solo las que su sitio marca en "Sq. M."; las cuatro marcadas en "Sq. Ft." con valores imposibles (252 ft² para 4 recámaras) se omiten. Del condominio de Cumbres (título "3BDR" pero ficha con 4 recámaras y 4 baños) no se muestran recámaras.
- Dos fotos de propiedad traían abajo una franja con el asesor y el teléfono: se recortaron para dejar solo la propiedad.
- Cada propiedad conserva el enlace a su ficha en su sitio ("Ver ficha"), donde está su formulario.

## Qué se agregó (no existía en el original)

- **"Tu presupuesto, en el mapa de la costa"** (elemento memorable): un tope de presupuesto en dólares, el tipo (terrenos, condominios, casas y villas) y un mapa dibujado de la costa, de El Cuyo a Bacalar, con un número en cada destino que cambia según lo que cabe. Al tocar un destino se filtran las tarjetas, ordenadas de menor a mayor precio. Cada tarjeta arma un WhatsApp con el título, la zona, el MLS y el precio. Si no queda ninguna, ofrece pedir opciones por WhatsApp o ir a su buscador.
- Textos del estudio: "Tu presupuesto, en el mapa de la costa" y su explicación, "De la laguna de Bacalar al Caribe de Cancún", "Quienes ya compraron en el Caribe", las descripciones cortas de cada destino (resumen de sus páginas), los pies de foto, los cargos del equipo en español y los textos alternativos.
- Botón "Hablar con un asesor", enlace al perfil de Google, barra fija en el celular (WhatsApp, llamar, ver en Maps), JSON-LD `RealEstateAgent`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- **El bloque de spam de casinos en francés** (Winbet, Frumzi, Gratorama, Majestic Slots, Roman Casino, Fatboss, Bassbet, Casino Together) que su sitio muestra en el inicio, en inglés y en español.
- El buscador avanzado por MLS, recámaras y precio (sigue en su sitio, enlazado), el selector USD/MXN, el carrusel de YouTube de su página de compra, el aviso de cookies y el formulario.
- Los teléfonos personales del equipo: todos publican el mismo (+52 1 984-187-8759), distinto del de la oficina; el rediseño usa el de la oficina y deja el correo de cada asesor.
- De sus seis reseñas de Google se usan cuatro, en fragmentos textuales.

## Qué se conserva al pie de la letra

- Nombre, logotipo, teléfono y WhatsApp (+52 984 136 1005), correo, redes, su H1 en español ("Bienes Raíces en Riviera Maya"), su lema "Bienvenido a la Jungla, déjanos guiarte", su texto de inicio (resumido), las 19 propiedades destacadas con MLS, zona, tipo, precio, recámaras, baños y superficie en m², los nombres, cargos y correos del equipo, el reconocimiento "Best Tulum Real Estate Agents 2024 · Honorable Mention", fragmentos de sus reseñas de Google en inglés y los enlaces a su guía del comprador y a los avisos de nuevas propiedades.

## Pendiente de confirmar con el cliente

- Qué precio en dólares es el vigente (inglés o español).
- Superficies correctas de las propiedades marcadas en "Sq. Ft.".
- Dirección de la oficina (su sitio no la publica).

## Dónde está cada cosa

- Textos, propiedades, destinos, equipo y reseñas: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs` (crea los .webp, recorta las dos franjas, el logotipo, el ícono y la imagen para compartir)
