# Kasumi Flowers Atelier: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.kasumiflowers.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/604-kasumiflowersatelier/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

Florería de autor en Oaxaca con tienda en línea real. El rediseño une todas las páginas clave del original en una sola landing con SEO, mapas y contacto directo por email.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Imagen `con_logo_3_1771387130079.png` (Lujo Escarlata $4,500) no descargada → rota localmente | Ese producto se omitió; se muestran 3 productos con imágenes disponibles |
| Imágenes de la tienda alojadas en CDN `mwon.net` (externo) → no disponibles offline | La colección usa las 9 imágenes descargadas del scrape principal |
| Archivo `PLANTILLA%20KASUMI…jpg` con `%20` literal en nombre → URL problemática | Referenciado con doble codificación `%2520` para resolución correcta en Vite |
| Sin `<meta name="description">` con contenido real | Meta description de 150 caracteres añadida |
| Sin JSON-LD (Schema.org) | `LocalBusiness` con dirección, teléfono, horario y redes sociales |
| Sin Google Maps accesible (sólo texto en footer) | Iframes estáticos de Google Maps para sucursal Oaxaca y sucursal Chiapas |
| Sin WhatsApp en ninguna página | Confirmado sin WhatsApp; CTA móvil es "Llamar" + "Escribir" (email) |

## Qué se cambió (mismo contenido, otra forma)

- El contenido de 5 páginas distintas (inicio, shop, servicios, talleres, portfolio) se consolidó en una única landing de scroll
- Tipografía: **Playfair Display** (titulares) + **Source Sans 3** (cuerpo) — coherente con el tono editorial de la marca
- Paleta: fondo `#faf8f4`, oscuro `#1a1408`, acento terracota `#c85a2a`, dorado `#b8934a`, verde botánico `#2a4a2e`

## Qué se agregó (no existía en el original)

- `<meta name="description">` y Open Graph completo
- JSON-LD `LocalBusiness` con todos los datos de la sucursal Oaxaca
- Google Maps embed para Oaxaca de Juárez (Jazmines 618-A, Col. Reforma) y Tuxtla Gutiérrez
- Favicon: isotipo de Kasumi
- Barra móvil fija: "Llamar" (tel:) + "Escribir" (mailto:)

## Qué se conserva al pie de la letra

- Nombre, descripción y tagline del negocio (del original: "Kasumi Flowers Atelier con 30 años creando…")
- Tres pilares de la sección home: 30 años, Diseños de autor, Corazón de Oaxaca
- Productos con nombres y precios exactos: Rojo Majestuoso $2,950 / Esencia Floral Lujo $3,250 / Edición Gran Duquesa Collection $4,850
- Talleres con fechas y precios: ABR 12 Centros de Mesa $1,800 · MAY 04 Ramos de Mano $2,800
- Testimonial: "Kasumi entendió perfecto mi visión. Fue mágico." — Sofia & Marco
- Dirección, teléfonos y horario de ambas sucursales
- Email: info@kasumiflowers.com
- Redes sociales: IG @kasumiflowersatelier · FB @KasumiFlorerias · TT @kasumifloreria
- Todos los "Ver detalles" y "Ver catálogo" enlazan a `kasumiflowers.com/shop` (tienda real)

## Pendiente de confirmar con el cliente

- ¿Tienen WhatsApp para consultas de bodas?
- ¿El producto "Lujo Escarlata Signature Box" $4,500 sigue vigente y quieren que aparezca?
- ¿Hay fotos propias del portfolio que quieran incluir?

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: se leen del clon en `sitio/assets/images/` (`publicDir` en `rediseno/vite.config.ts`)
