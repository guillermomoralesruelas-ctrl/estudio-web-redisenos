# Instrucciones para Claude Code en la nube

> Este archivo es para la sesión de Claude Code en la nube que trabaja sobre este repositorio. La sesión en la PC de Guillermo trabaja al mismo tiempo en **otros** sitios. Para no pisarse, cada una tiene su lista y **no toca los proyectos de la otra**.

## Antes de empezar

1. Lee completos, en este orden: `CLAUDE.md`, `INSTRUCCIONES-METODO-1.1.md`, `METODOS.md` y `DESCARTADOS.md`. Ahí están el proceso, las reglas (no inventar datos, no tocar el clon ni `datos/fabricador.db`) y el estado.
2. Toma como modelo los últimos rediseños terminados: `proyectos/579-integra360`, `proyectos/35-altheawellnessclinic`, `proyectos/384-escueladefotografia`, `proyectos/326-domusvallartafine` y `proyectos/557-humaredaprime` (su `entregables/plan-diseno.md`, `CAMBIOS.md`, `OPORTUNIDADES.md`, `rediseno/src/*`, `rediseno/index.html` y `rediseno/fotos-web.mjs`).
3. Instala las herramientas una vez: `cd herramientas && npm install`. En la nube, Chromium ya está en `/opt/pw-browsers` y Playwright lo encuentra solo; no ejecutes `playwright install`.

## Tu lista: lote 3 (solo estos 20)

| # | Carpeta | Negocio | Sitio original |
|---|---|---|---|
| 1 | `26-alasdelhombre` | Alas del Hombre, Valle de Bravo (turismo) | https://alas.com.mx/ |
| 2 | `486-harmonyspahuatulco` | Harmony Spa Huatulco, Huatulco | https://www.spahuatulco.com/ |
| 3 | `539-hotelplazacolonial` | Hotel Plaza Colonial, Campeche | https://www.hotelplazacolonial.com/ |
| 4 | `605-katarsiscdmx` | Katarsis CDMX, Ciudad de México (salud) | https://www.katarsis.mx/ |
| 5 | `499-holboxphotos` | HolboxPhotos, Sayulita (fotografía) | https://holboxphotos.com/ |
| 6 | `439-gabyboatpesca` | Gaby Boat, Xperience Ixtapa, Zihuatanejo (pesca y snorkel) | https://xperienceixtapa.com/ |
| 7 | `394-estudio184piercing` | Estudio 184 Piercing & Custom Tattoo, Ciudad de México | https://estudio184.com/ |
| 8 | `428-foriu` | Foriu, Ciudad de México (spa) | https://foriu.mx/ |
| 9 | `456-gomexicoadventures` | Go México Adventures, Ciudad de México (turismo) | https://gomexicoadventures.com/ |
| 10 | `574-inmobiliariatitan` | Inmobiliaria Titán, León | https://inmobiliariatitan.com/ |
| 11 | `419-floreriaflordivan` | Florería Flordivan, Guadalajara | https://www.flordivan.com/ |
| 12 | `383-escueladebuceo` | Escuela de Buceo Proyecto Azul, La Paz | https://www.buceoproyectoazul.com.mx/ |
| 13 | `508-hospitalveterinariojoaqu` | Hospital Veterinario Joaquín Buxadé, Puebla | https://www.hveterinario.com/ |
| 14 | `347-ecoturismo` | Ecoturismo, Valle de Bravo | https://ecoturismo.com.mx/ |
| 15 | `651-letssmile` | Let's Smile Dentistry, Mexicali | https://letssmiledentistry.com/ |
| 16 | `407-eyeklinik` | Eyeklinik, Monterrey (oftalmología) | https://eyeklinik.com/ |
| 17 | `546-hotelsoleilcelaya` | Hotel Soleil Celaya, Celaya | https://www.soleilcelaya.com.mx/ |
| 18 | `322-doggieshospital` | Doggie's Hospital Veterinario, Monterrey | https://doggies.mx/ |
| 19 | `337-drtoothsaltillo` | Dr. Tooth, Saltillo (dental) | https://drtooth.com.mx/ |
| 20 | `607-kenaxturismo` | Kenax Turismo, Querétaro | https://kenaxturismo.com/ |

Sus clones (`sitio/`) y textos (`investigacion/`) ya vienen en el repositorio. **No trabajes en ningún otro proyecto**: la PC de Guillermo está haciendo otros sitios en paralelo (Explora Valle, Dolcebella Spa, Hollywood Meeting Planners, CuadroxCuadro, El Palmar, IAAC, ARIA y los que siga eligiendo).

Nota: en `499-holboxphotos` hay nombres de archivo muy largos. Si git se queja, usa `git -c core.longpaths=true`.

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
13. Si trabajas con varios agentes en paralelo y alguno se detiene a medias, sube su avance a una rama `nube3-<carpeta>` con "EN PROGRESO" en el mensaje, para que la PC lo pueda terminar.

## Reglas que no se rompen

- Nunca inventar datos del negocio: precios, horarios, teléfonos, reseñas, premios ni certificaciones. Lo deducido se marca como pendiente en `CAMBIOS.md`.
- No descargar imágenes nuevas del sitio del cliente; usa solo las del clon. (Recuperar fotos del sitio en vivo es el método 1.2 y solo se hace en la PC.)
- No usar teléfonos que parezcan de plantilla (por ejemplo 123 4567) como si fueran reales.
- Sin afirmaciones de salud ni de seguridad que el negocio no haga. En clínicas, dentistas y veterinarias: nada de "garantizado", "sin dolor", "sin riesgo" ni antes/después inventados.
- No copiar claves, tokens ni API keys a ningún archivo.
- No modificar `sitio/` ni `investigacion/`, y no escribir en `datos/fabricador.db`.
- Obligatorio en cada sitio: un solo H1, WhatsApp con mensaje prellenado (con el número real), barra fija en el celular, enlace a Google Maps, `prefers-reduced-motion`, contraste AA, JSON-LD del tipo correcto, title y description reales, y ningún script ni mapa de terceros.

## Al terminar los 20

Escribe un resumen corto en `entregables-nube-3.md` en la raíz: por cada sitio, el commit, el resultado del QA (o el motivo del descarte), el elemento memorable, la prioridad y el hallazgo principal de oportunidades, y lo que hay que confirmar con el cliente. Haz commit y push.
