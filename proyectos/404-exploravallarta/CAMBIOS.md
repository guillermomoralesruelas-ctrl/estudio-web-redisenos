# Explora Vallarta: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.exploravallarta.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/404-exploravallarta/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 404-exploravallarta`) |

## En una línea

La misma empresa de ecoturismo, sus textos, precios, reglas y WhatsApp, en una sola página: los tres tours con precio completos, el resto del catálogo en una lista, un formulario que arma el WhatsApp y un diagrama a escala de a cuántos metros de la ballena llega cada embarcación.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Ver `qa/reporte-rediseno.json` → `antes`. El sitio reparte precios, horarios y reglas en una página por tour | Página nueva sin scripts de terceros: 0 desbordes, 0 imágenes rotas y 0 recursos fallidos; precios de ballenas, Marietas y delfines en un solo lugar |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, nosotros y las páginas de ballenas, Islas Marietas y delfines en una sola página.
- Los tres tours con precio como fichas con foto, duración, precios, notas e "incluye"; los otros siete en una lista con duración y "Pedir precio".
- Su formulario "Reserva vía WhatsApp" con los mismos campos (expedición, fecha, adultos, niños, nombre).

## Qué se agregó (no existía en el original)

- **"¿Qué tan cerca de la ballena?"** (elemento memorable): un diagrama visto desde arriba con anillos a escala de 60 m (su lancha, de tamaño menor), 80 m (barcos grandes) y 240 m (sin autorización), según la NOM-131-SEMARNAT-2010 que explican en su FAQ; se toca cada lancha y se explica su distancia, con la temporada, los tres comportamientos y el precio.
- En el formulario: aviso si eliges un lunes para Islas Marietas (parque cerrado) y del 20% de grupo a partir de 4 personas, con sus propias reglas.
- Textos nuestros: la entrada del diagrama, "Tu lancha con Explora Vallarta / Un barco grande / Sin autorización" (resumen de su FAQ), "Expediciones con precio", "Más aventuras en el mar y la montaña", la leyenda del diagrama, los avisos del formulario y los textos de los botones.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar); enlace a Google Maps; JSON-LD `TravelAgency` con ofertas y precio; Open Graph; `hreflang` a su versión en inglés.

## Qué se quitó o no se usó

- Las dos fotos de buceo (parecen de banco), la de canopy y la de San Sebastián.
- Los emojis de los títulos y de los mensajes de WhatsApp.
- La pregunta "¿Es garantizado ver ballenas?": se dejó su 95% y su garantía de repetir el tour tal como la escriben en la página de ballenas.
- Renta de vans, masajes a domicilio, grupos, eventos, bodas y blog (se pueden agregar).
- Las reseñas de las páginas de tour (se dejaron las tres del inicio).

## Qué se conserva al pie de la letra

- Precios: ballenas y delfines $1,900 adultos y $1,535 niños (4 a 11); Marietas clásico $2,200 y $1,750, con Playa del Amor $2,550, + $180 de brazalete CONANP; 20% desde 4 pasajeros; reserva con 50%.
- Temporada de ballenas (8 de diciembre al 23 de marzo), lunes cerrado en Marietas, requisitos de Playa del Amor, horarios de delfines, qué incluye cada tour.
- Sus guías (Biól. Jorge Morales, Cap. José Ángel, Fabiola Flores), sus redes de conservación y las 700 personas capacitadas.
- Dirección (Pampano 9, Cruz de Huanacaxtle), horario de 8:00 a 19:00, WhatsApp y teléfono (322) 132 27 53, correo y redes.

## Pendiente de confirmar con el cliente

- **Días del horario de 8:00 a 19:00** (no dicen qué días); el JSON-LD no lleva horario.
- Precios de tortugas, Los Arcos, kayak, buceo, Nogalito, canopy y San Sebastián (sus páginas no se leyeron).
- Si las fotos de buceo, canopy y San Sebastián son propias.
- Fotos de los guías y de su lancha.

## Dónde está cada cosa

- Textos, tours, precios, distancias y FAQ: `rediseno/src/data/content.ts`
- Diseño, secciones, el diagrama y el formulario: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/img/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
