# KAJEOS: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://kajeos.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/602-kajeos/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 602-kajeos`) |

## En una línea

De una plantilla inmobiliaria con renders, ventanas de registro y testimonios de otras ciudades, a una página con sus propiedades reales donde armas una carpeta de visitas y la mandas por WhatsApp.

## Qué estaba roto o incompleto en el clon

- En el celular se desborda 731 px y tiene 21 imágenes rotas. La ciudad de la base (Boca del Río) no es la de su oficina (Puebla).

## Qué se cambió (mismo contenido, otra forma)

- Las 8 propiedades con foto del inicio en fichas con precio, superficie, recámaras y baños, y filtros por tipo.
- Las 5 propiedades de su catálogo sin foto en el clon, en una lista con precio.
- "Encuentra tu nuevo hogar" y sus cuatro ventajas en una sección para quien quiere vender.

## Qué se agregó (no existía en el original)

- **"Arma tu carpeta de visitas"**: hasta cuatro fichas en una carpeta, con turno preferido y WhatsApp con la lista en orden.
- WhatsApp con su celular (su sitio no publica WhatsApp: los botones de WhatsApp solo comparten la ficha), barra fija en el celular y enlace a Google Maps.
- JSON-LD de tipo `RealEstateAgent` con dirección y horario; Open Graph; ícono con la "K" de su logo.

## Qué se quitó o no se usó

- Los renders de la plantilla en portada y categorías; los testimonios (Cancún, Los Cabos, CDMX); misión, visión y valores; las ventanas de iniciar sesión, registro y "Comparar listados"; el blog; el video de YouTube.
- "Más de 27 años de experiencia" y "cobertura nacional" (pendientes de confirmar).

## Qué se conserva al pie de la letra

- Nombre, zona, precio, superficie, recámaras, baños y descripción corta de cada propiedad; renta de $20,000 en San José Actipan; precio por m² de los terrenos.
- Oficina, horario, celular, teléfono y correo; sus cuatro servicios para vendedores.

## Pendiente de confirmar con el cliente

- **WhatsApp:** se usó el celular 222 812 5189. Confirmar que es su WhatsApp.
- Disponibilidad y precios vigentes de cada propiedad; la zona o municipio exacto de cada una (Clúster Granito, El Saucedal, Av. Las Torres).
- Recámaras de Residencial Avista: su ficha marca 4 (3 más una secundaria).
- Si atienden fines de semana con cita (su horario dice cerrado).
- Los años de experiencia y los testimonios reales de clientes.
- Ubicación exacta en Google Maps (se buscó "Torre Inxignia, Puebla").

## Dónde está cada cosa

- Propiedades, servicios y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y la carpeta: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/wp-content/uploads/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
