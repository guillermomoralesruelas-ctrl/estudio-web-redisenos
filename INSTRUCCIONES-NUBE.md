# Instrucciones para Claude Code en la nube

> Este archivo es para la sesión de Claude Code en la nube que trabaja sobre este repositorio. La sesión en la PC de Guillermo trabaja al mismo tiempo en **otros** sitios. Para no pisarse, cada una tiene su lista y **no toca los proyectos de la otra**.

## Antes de empezar

1. Lee completos, en este orden: `CLAUDE.md`, `INSTRUCCIONES-METODO-1.1.md`, `METODOS.md` y `DESCARTADOS.md`. Ahí están el proceso, las reglas (no inventar datos, no tocar el clon ni `datos/fabricador.db`) y el estado.
2. Toma como modelo los últimos rediseños terminados: `proyectos/579-integra360`, `proyectos/35-altheawellnessclinic`, `proyectos/384-escueladefotografia`, `proyectos/326-domusvallartafine` y `proyectos/557-humaredaprime` (su `entregables/plan-diseno.md`, `CAMBIOS.md`, `OPORTUNIDADES.md`, `rediseno/src/*`, `rediseno/index.html` y `rediseno/fotos-web.mjs`).
3. Instala las herramientas una vez: `cd herramientas && npm install`. En la nube, Chromium ya está en `/opt/pw-browsers` y Playwright lo encuentra solo; no ejecutes `playwright install`.

## Tu lista: lote 4 (solo estos 30)

| # | Carpeta | Negocio | Sitio original |
|---|---|---|---|
| 1 | `362-elpalmar` | El Palmar, Mazatlán, Sinaloa (gastronomia) | https://elpalmarmzt.com/ |
| 2 | `276-cuadroxcuadro` | CuadroxCuadro, Ciudad de México, CDMX (servicios) | http://videofilmaciones.mx/ |
| 3 | `577-institutoargentinode` | Instituto Argentino de Artes Culinarias, Ciudad de México, Polanco/Condesa (educacion) | https://iaacmexico.com/ |
| 4 | `54-aria` | ARIA, Ciudad de México, CDMX (educacion) | https://somosaria.com/ |
| 5 | `502-hollywoodmeetingplanners` | Hollywood Meeting Planners & Event Management, Cancún, Yucatán (eventos) | https://hollywoodencancun.com/ |
| 6 | `103-bcsecotours` | BCS Eco Tours, Loreto, Baja California Sur (turismo) | https://loretobaytours.com/ |
| 7 | `378-erickoseguerafotografia` | Erick Oseguera Fotografía, Guadalajara, Jalisco (eventos) | https://erickoseguera.com/ |
| 8 | `481-haciendalamagdalena` | Hacienda La Magdalena, Zapopan, Jalisco (eventos) | https://www.haciendalamagdalena.com/ |
| 9 | `591-josecortesinstitute` | José Cortés Institute, Ciudad de México (salud) | https://josecortes.com/ |
| 10 | `197-centromedicoveterinario` | Centro Médico Veterinario, San Luis Potosí, San Luis Potosí (salud) | https://cmvet.mx/ |
| 11 | `332-dreluani` | Dr. Eluani, Hermosillo, Sonora (salud) | https://dreluani.com/ |
| 12 | `458-graceviajesy` | Grace Viajes y Eventos, Villahermosa, Tabasco (turismo) | https://graceviajesyeventos.com/ |
| 13 | `465-greenspa` | GreenSpa, Guadalajara, Jalisco (spa) | https://greenspa.mx/ |
| 14 | `554-huastecaviva` | Huasteca Viva, Ciudad Valles, San Luis Potosí (turismo) | http://huastecaviva.com/ |
| 15 | `434-fuentedepiedra` | Fuente de Piedra, Guadalajara, Jalisco (eventos) | https://fuentedepiedra.mx/ |
| 16 | `592-joyadentcenter` | JoyaDent Center, Nuevo Vallarta, Nayarit (salud) | https://joyadent.com/ |
| 17 | `500-holboxtours` | Holbox Tours, Holbox, Quintana Roo (turismo) | https://holboxtours.com/ |
| 18 | `349-egdental` | EG Dental, Tijuana, Baja California (salud) | https://www.egdentalmex.com/ |
| 19 | `336-drplastico` | Dr. Plastico, Playa del Carmen, Quintana Roo (salud) | https://drplastico.com/ |
| 20 | `602-kajeos` | KAJEOS, Boca del Río, Veracruz (inmuebles) | https://kajeos.com/ |
| 21 | `199-centroodontologicoespeci` | Centro Odontológico Especializado de la Costa, Puerto Escondido, Oaxaca (salud) | https://coec.com.mx/ |
| 22 | `438-fatimabuenfilnutricion` | Fátima Buenfil Nutrición Clínica, Mérida, Yucatán (salud) | https://www.fatimabuenfil.com/ |
| 23 | `98-barberiaspremium` | Barberías Premium, Oaxaca de Juárez, Oaxaca (spa) | https://barberiaspremium.com/ |
| 24 | `232-clinicadentaljustsmiles` | Clínica Dental Justsmiles, Puerto Vallarta, Jalisco (salud) | https://www.justsmiles.mx/ |
| 25 | `646-lasjarasaguas` | Las Jaras Aguas Termales - Spa El Sendero & Jardín, Ciudad de México, CDMX (spa) | https://lasjaras.mx/ |
| 26 | `404-exploravallarta` | Explora Vallarta, Nuevo Vallarta, Nayarit (turismo) | https://www.exploravallarta.com/ |
| 27 | `423-floreriarivieracancun` | Florería Riviera - Cancun, Cancún, Quintana Roo (retail) | https://www.floreriariviera.com/ |
| 28 | `509-hospitalveterinariovetpe` | Hospital Veterinario VetPets, Zapopan, Jalisco (salud) | https://hospitalesvetpets.com.mx/ |
| 29 | `506-hospitalveterinariocarso` | Hospital Veterinario Carson, Ciudad de México, Iztapalapa (veterinaria) | https://hospitalcarson.com/ |
| 30 | `417-floatsano` | Floatsano, San Miguel de Allende, Guanajuato (spa) | https://floatsano.com/ |

Hazlos en orden. Sus clones (`sitio/`) y textos (`investigacion/`) ya vienen en el repositorio. **No trabajes en ningún otro proyecto.**

### Esta lista se reparte entre varias sesiones

Una sola sesión en la nube no alcanza para los 30: cada una avanza lo que pueda y después Guillermo abre otra. Por eso:

- **Al empezar**, revisa `METODOS.md` y `git log origin/main`: salta los sitios de esta lista que ya tengan fila "Terminado" o "Descartado" y empieza por el primero que no la tenga.
- **Un sitio a la vez, completo:** commit y push al terminar o descartar cada uno (pasos 11 y 12), nunca al final de varios.
- **Si la sesión se va a cortar** con un sitio a medias, sube su avance a una rama `nube4-<carpeta>` con "EN PROGRESO" en el mensaje y anótalo en `entregables-nube-4.md`. La siguiente sesión lo retoma desde esa rama.
- Actualiza `entregables-nube-4.md` después de cada sitio (no al final), para que el resumen no se pierda si la sesión termina.

### No toques el panel

El panel (`panel/`, http://localhost:4000) ya tiene la configuración correcta: pestañas Proyectos, Fabricador y Galería (commit `cfdfbb2`, "versión buena"), y la Galería con su lista de verificaciones (`datos/verificaciones.json`). **No modifiques nada dentro de `panel/` ni `datos/verificaciones.json`.**

## Elementos memorables ya usados (no repetir)

La lista completa y al día está en `METODOS.md` (el título entre comillas de cada fila "Terminado"); revísala antes de cada sitio. Hasta hoy, entre otros: calculadora de inversión por plan, filtro de lotes por categoría, proyección de plusvalía, "Metro a metro" por superficie, propiedades por pueblo según presupuesto, rosa de los vientos con propiedades ("Pachuca a 360°"), recorrido de vuelo, vista al despertar, plano de mesas y de jardín, hoja de contactos/negativo, "¿Qué cámara tienes?", checklist de mascota, mapa con círculos de distancia, mes en la barra, mandala 360, rockola/Spotify, armador de horario semanal, profundidad del cenote, zonas del cuerpo, pase de abordar, reloj de arena por tiempo disponible ("¿Cuánto tiempo tienes?"), set del estudio, "¿Llega hoy?", "¿Para quién es?", "¿Cuál es tu piedra?".

## Cómo hacer cada sitio (método 1.1)

1. **Revisa las fotos y el contacto primero.** Descártalo si pasa algo de esto: menos de 3 fotos propias del negocio con calidad usable; no hay WhatsApp, teléfono ni ubicación; la URL no es del negocio; o es una cadena grande. Agrega su fila en `METODOS.md` como "Descartado" con el motivo y otra en `DESCARTADOS.md` (sección "Descartados (revisados a fondo)") con la clave del motivo (`sin-fotos`, `sin-contacto`, `url-ajena`, `cadena`, `pocas-fotos`) y el detalle, haz el commit y pasa al siguiente. Las fotos sacadas de Google Maps (EXIF de Picasa/Google), de banco, generadas con IA (revisa también credenciales C2PA) o de otro negocio no cuentan.
2. `node herramientas/nuevo-rediseno.mjs <carpeta>` y luego `cd proyectos/<carpeta>/rediseno && npm install`.
3. `node herramientas/qa-rediseno.mjs <carpeta>` para diagnosticar el clon.
4. Crea `rediseno/fotos-web.mjs` como el de los modelos: copias `.webp` solo de las fotos que uses, en `../assets/web`, que es el `publicDir` de `vite.config.ts`.
5. Escribe `entregables/plan-diseno.md` con **un** elemento memorable que salga del negocio, con datos reales y distinto de los que ya se usaron. Incluye la revisión contra lo genérico.
6. Construye: `npx tsc --noEmit && npm run build`.
7. QA final: `node herramientas/qa-rediseno.mjs <carpeta>` (sin `--solo-rediseno`). Debe dar 0 desbordes, 1 H1, 0 imágenes rotas, 0 errores de consola y 0 recursos fallidos. La captura móvil no debe pasar de 16,000 px de alto. Revisa a ojo `qa/despues-escritorio.png` y `qa/despues-movil.png`, recortándolas con sharp, y corrige lo que se vea mal.
8. Guarda las capturas: `node herramientas/guardar-capturas.mjs <carpeta>`.
9. Completa `CAMBIOS.md` y `OPORTUNIDADES.md` del proyecto. En `OPORTUNIDADES.md` van **solo** problemas del sitio en línea, comprobados con curl o en `investigacion/original.html`. Si la red de la nube no llega a un sitio, usa `original.html` y `crudo.json` y anota que no se pudo comprobar en vivo.
10. Agrega la fila del sitio en `METODOS.md` (como "Terminado", con "Hecho en la nube." al inicio de las notas) y en el `OPORTUNIDADES.md` de la raíz, por prioridad. Vuelve a leer esos dos archivos justo antes de editarlos y cambia solo tu línea.
11. Commit solo con las rutas del sitio:
    ```
    git add METODOS.md OPORTUNIDADES.md proyectos/<carpeta>/CAMBIOS.md proyectos/<carpeta>/OPORTUNIDADES.md proyectos/<carpeta>/entregables proyectos/<carpeta>/referencias proyectos/<carpeta>/rediseno proyectos/<carpeta>/qa/reporte-rediseno.json
    git commit -m "<carpeta>: rediseño método 1.1 (<Negocio>, <Ciudad>) [nube]"
    ```
12. Después de cada sitio: `git pull --rebase origin main` y `git push origin main`. Si hay conflicto en `METODOS.md`, `OPORTUNIDADES.md` o `DESCARTADOS.md`, conserva las líneas de los dos lados.
13. Si trabajas con varios agentes en paralelo y alguno se detiene a medias, sube su avance a una rama `nube4-<carpeta>` con "EN PROGRESO" en el mensaje, para que la PC lo pueda terminar.

## Reglas que no se rompen

- Nunca inventar datos del negocio: precios, horarios, teléfonos, reseñas, premios ni certificaciones. Lo deducido se marca como pendiente en `CAMBIOS.md`.
- No descargar imágenes nuevas del sitio del cliente; usa solo las del clon. (Recuperar fotos del sitio en vivo es el método 1.2 y solo se hace en la PC.)
- No usar teléfonos que parezcan de plantilla (por ejemplo 123 4567) como si fueran reales.
- Sin afirmaciones de salud ni de seguridad que el negocio no haga. En clínicas, dentistas y veterinarias: nada de "garantizado", "sin dolor", "sin riesgo" ni antes/después inventados.
- No copiar claves, tokens ni API keys a ningún archivo.
- No modificar `sitio/` ni `investigacion/`, y no escribir en `datos/fabricador.db`.
- Obligatorio en cada sitio: un solo H1, WhatsApp con mensaje prellenado (con el número real), barra fija en el celular, enlace a Google Maps, `prefers-reduced-motion`, contraste AA, JSON-LD del tipo correcto, title y description reales, y ningún script de terceros.
- **Mapa real:** si el sitio original tiene un mapa de Google (un `<iframe>` en `investigacion/original.html` o en el clon), el rediseño lleva ese mismo mapa como `<iframe>` embebido (su URL va en `content.ts` como `mapaEmbed`), no solo un enlace ni un mapa simulado. Es la única excepción a "ningún script de terceros". Modelo: `proyectos/624-lacanteraeventos/rediseno/src/App.tsx`.
- **Fotos:** revisa en las capturas del QA que todas las fotos carguen (0 rotas) y que no haya huecos grises donde debía ir una imagen.
- Si git se queja de nombres de archivo largos, usa `git -c core.longpaths=true`.

## Resumen del lote

Lleva un resumen corto en `entregables-nube-4.md` en la raíz: por cada sitio, el commit, el resultado del QA (o el motivo del descarte), el elemento memorable, la prioridad y el hallazgo principal de oportunidades, y lo que hay que confirmar con el cliente. Actualízalo y súbelo con cada sitio.
