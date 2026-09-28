# Christian Macías: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.christianmacias.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/214-christianmacias/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

Los datos, textos y fotos son los mismos del sitio original; el rediseño corrige las 33 imágenes rotas del clon, reemplaza la fuente Kanit con Cormorant Garamond + Inter, pone todos los precios a la vista y añade el cronógrafo "¿A qué hora de tu boda está el fotógrafo?" — una narrativa interactiva del día de boda en las palabras del fotógrafo.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 33 imágenes rotas (rutas con `/214-christianmacias/sitio/images/` y versiones `-800.webp`/`-480.webp` no descargadas) | Se convirtieron las fotos del clon a .webp en `assets/web/` con `fotos-web.mjs`; el rediseño sirve sus propias imágenes |
| Fuentes Kanit no descargadas (6 archivos woff2 con 404) | Se usan Cormorant Garamond (serif) e Inter Variable (sans) de @fontsource, sin llamadas externas |
| Scripts de Cloudflare (consent, challenge-platform) y cursor personalizado con 404 | No se usan en el rediseño |
| El clon renderizaba la estructura pero sin imágenes ni tipografía: no funcional para presentar | El rediseño tiene 0 rotas, 0 fallidos, 0 errores de consola |

## Qué se cambió (mismo contenido, otra forma)

- Paleta: de fondo blanco/minimalista a alternancia de secciones negras (`#0c0c0c`) y marfil (`#f5f2ec`); los precios y detalles activos llevan acento dorado (`#c4a96e`).
- Tipografía: de Kanit (sans-serif geométrica genérica) a Cormorant Garamond italic para títulos y citas, e Inter para texto funcional. Carácter más editorial, acorde al posicionamiento de autor.
- Estructura: de multi-página (inicio / paquetes / libro / presets / blog) a una sola página que cubre los puntos de venta principales (filosofía, portafolio, destinos, paquetes, reconocimientos, contacto).
- Portafolio: de cuadrícula básica a cuadrícula con dos fotos wide que anclan la composición.
- Paquetes: de páginas separadas a tres columnas en la misma pantalla con precios visibles desde el inicio y botón de WhatsApp por colección.

## Qué se agregó (no existía en el original)

- **Elemento memorable:** "¿A qué hora de tu boda está el fotógrafo?" — cronógrafo interactivo de cuatro momentos del día (Preparativos, Ceremonia, Sesión, Fiesta) con los textos reales del fotógrafo y la foto correspondiente. Está basado en párrafos del sitio original y el blog.
- **Barra fija móvil:** WhatsApp + Llamar + Maps, visible solo en pantallas pequeñas.
- **WhatsApp prellenado** por colección (Esencia, Memoria, Autor) y por momento del día.
- **Formulario activo** que arma el mensaje de WhatsApp con nombre, fecha y lugar antes de enviarlo.
- **JSON-LD** con tipos `Photographer` y `LocalBusiness` (el sitio original no publica JSON-LD en la página de inicio según el `original.html`).
- **Open Graph** completo (el original no tiene OG en inicio).
- **Add-ons** de las experiencias adicionales (Trash the dress, Sesión previa, etc.) presentados en la misma página.

## Qué se quitó o no se usó

- Navegación de Tienda (Libro, Presets): no se rediseñaron esas páginas; el rediseño es solo la propuesta del sitio principal.
- El video de YouTube integrado (miniatura con overlay ▶): no se incrusta video de terceros en el rediseño.
- El blog (listado de artículos): los artículos se mencionan en los destinos como enlaces externos.
- Las páginas en inglés y francés: el rediseño es solo en español.
- El podcast y los talleres como secciones propias: se mencionan en Reconocimientos y en la sección Sobre mí.
- Fotos de la página de Libro y Presets que están en la carpeta `assets/images` pero no en el clon local (4 fotos de páginas adicionales).

## Qué se conserva al pie de la letra

- Nombre, cargo, ciudad: Christian Macías, fotógrafo de bodas documental, Guadalajara, Jalisco.
- Dirección: Av. de las Américas 870, Guadalajara, Jalisco.
- Teléfono: +52 33 3142 5580.
- Email: hola@christianmacias.com.
- WhatsApp: 523331425580 (del botón flotante del sitio original).
- Precios: Esencia $32,000 MX, Memoria $48,000 MX, Autor $69,000 MX; add-ons con sus valores publicados.
- Textos de "Bodas sin pose", "Documentar es mi forma de ver el mundo", descripción de colecciones y add-ons: copiados de `investigacion/crudo.json`.
- Estadísticas: 300+ bodas, 12+ años, 4 países.
- Testimonios de Alex & Andy y Elisa & Jacob: copiados del sitio original.
- Destinos (Oaxaca, Hacienda El Centenario, Monte Coxalá): con sus textos reales y fotos del clon.
- Redes sociales: Instagram, Facebook, TikTok, YouTube con sus URLs reales.
- Reconocimientos: MyWed, Inspiration Photographers, Google Business, talleres — con los textos reales.

## Pendiente de confirmar con el cliente

- Verificar si el número +52 33 3142 5580 también funciona como WhatsApp directo (en el sitio aparece como `wa.me/523331425580` pero el resumen.json lo extrae de texto, no del botón flotante).
- Confirmar que la dirección "Av. de las Américas 870, Guadalajara, Jalisco" es el estudio (el sitio la publica pero no la verifica con Google Maps).
- Plazo de entrega de fotos: el sitio dice "te doy un estimado en firme al reservar" — si quiere publicarlo, puede agregarse.
- Video documental (colección Autor): se describe "5–8 minutos, estilo autor"; confirmar si es servicio vigente.

## Dónde está cada cosa

- Textos y datos de contacto: directamente en `rediseno/src/App.tsx`, objeto `NEGOCIO`.
- Galería y destinos: arrays `GALERIA` y `DESTINOS` en `App.tsx`.
- Paquetes: array `PAQUETES` en `App.tsx`.
- Cronógrafo: array `MOMENTOS` en `App.tsx`, con textos del sitio original.
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`).
- Imágenes .webp: `assets/web/` (generadas por `rediseno/fotos-web.mjs`).
- publicDir de Vite: `../assets/web` (`rediseno/vite.config.ts`).
