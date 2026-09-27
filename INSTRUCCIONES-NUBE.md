# Instrucciones para Claude Code en la nube

> Este archivo es para la sesión de Claude Code en la nube que trabaja sobre este repositorio. La sesión en la PC de Guillermo trabaja al mismo tiempo en **otros** sitios. Para no pisarse, cada una tiene su lista y **no toca los proyectos de la otra**.

## Antes de empezar

1. Lee completos, en este orden: `CLAUDE.md`, `INSTRUCCIONES-METODO-1.1.md` y `METODOS.md`. Ahí están el proceso, las reglas (no inventar datos, no tocar el clon ni `datos/fabricador.db`) y el estado.
2. Toma como modelo los últimos rediseños terminados: `proyectos/566-ilimago`, `proyectos/477-grupopacificoescondido`, `proyectos/557-humaredaprime`, `proyectos/549-hoteltradicional` y `proyectos/388-escueladevuelo` (su `entregables/plan-diseno.md`, `CAMBIOS.md`, `OPORTUNIDADES.md`, `rediseno/src/*`, `rediseno/index.html` y `rediseno/fotos-web.mjs`).
3. Instala las herramientas una vez: `cd herramientas && npm install`. En la nube, Chromium ya está en `/opt/pw-browsers` y Playwright lo encuentra solo; no ejecutes `playwright install`.

## Tu lista (solo estos 10, en este orden)

| # | Carpeta | Negocio | Sitio original |
|---|---|---|---|
| 1 | `384-escueladefotografia` | Escuela de Fotografía, Ciudad de México | https://www.escueladefotografia.com.mx/ |
| 2 | `326-domusvallartafine` | DOMUS Vallarta Fine Real Estate, Bucerías | https://domusvallarta.com/ |
| 3 | `431-fotoproducto` | Foto Producto, Guadalajara (fotografía de producto) | https://www.fotoproducto.com/ |
| 4 | `469-grupoandersons` | Grupo Anderson's, San Luis Potosí | https://grupoandersons.com/ |
| 5 | `390-espacioshabitatbienes` | Espacios Hábitat Bienes Raíces, Hermosillo | https://espacioshabitat.com/ |
| 6 | `316-distribuidoraeanpets` | Distribuidora Ean Pet's, Ciudad de México | https://www.eanpets.com.mx/ |
| 7 | `579-integra360` | Integra 360 (inmobiliaria), Pachuca | https://integra360.com.mx/ |
| 8 | `353-elclaustro` | El Claustro (educación continua), Ciudad de México | https://educacioncontinuadelclaustro.mx/ |
| 9 | `35-altheawellnessclinic` | Althea Wellness Clinic, Playa del Carmen | https://altheawellnessclinic.com/ |
| 10 | `114-bizenizaspa` | Bizeniza Spa, Ciudad de México | https://www.bizenizaspa.com/ |

Sus clones (`sitio/`) y textos (`investigacion/`) ya vienen en el repositorio. **No trabajes en ningún otro proyecto**: la PC de Guillermo está haciendo otros sitios en paralelo.

## Elementos memorables ya usados (no repetir)

Los siguientes elementos ya aparecen en otros sitios del lote — cada sitio nuevo debe tener **uno distinto**:

birthstone selector, selector por ocasión, reloj countdown, calculadora de inversión por plan, filtro interactivo de propiedades, proyección de plusvalía, recorrido de vuelo, selector pájaro/habitación, plano de mesas/eventos, preparación de mariscos, armador de vaso, calendario semanal/día, vista al mar/atardecer, tejido de faja/paquetes, hoja de contactos/negativo, checklist mascota, mapa con círculos de distancia, mes en la barra, mandala 360, rockola/Spotify, armador de horario semanal, profundidad del cenote, calculadora de plusvalía por años.

## Cómo hacer cada sitio (método 1.1)

1. **Revisa las fotos primero.** Si hay menos de 3 fotos propias del negocio con calidad usable, descártalo: agrega su fila en `METODOS.md` como "Descartado" con el motivo y otra en `DESCARTADOS.md` con la clave del motivo (`sin-fotos`, `sin-contacto`, `url-ajena`, `cadena`, `pocas-fotos`), haz el commit y pasa al siguiente. Las fotos sacadas de Google Maps (EXIF de Picasa/Google), de banco, generadas con IA o de otro negocio no cuentan.
2. `node herramientas/nuevo-rediseno.mjs <carpeta>` y luego `cd proyectos/<carpeta>/rediseno && npm install`.
3. `node herramientas/qa-rediseno.mjs <carpeta>` para diagnosticar el clon.
4. Crea `rediseno/fotos-web.mjs` como el de los modelos: copias `.webp` solo de las fotos que uses, en `../assets/web`, que es el `publicDir` de `vite.config.ts`.
5. Escribe `entregables/plan-diseno.md` con **un** elemento memorable que salga del negocio, con datos reales y distinto de los que ya se usaron (ver lista arriba y los `CAMBIOS.md` de los modelos). Incluye la revisión contra lo genérico.
6. Construye: `npx tsc --noEmit && npm run build`.
7. QA final: `node herramientas/qa-rediseno.mjs <carpeta>` (sin `--solo-rediseno`). Debe dar 0 desbordes, 1 H1, 0 imágenes rotas, 0 errores de consola y 0 recursos fallidos. La captura móvil no debe pasar de 16,000 px de alto. Revisa a ojo `qa/despues-escritorio.png` y `qa/despues-movil.png`, recortándolas con sharp, y corrige lo que se vea mal.
8. Guarda las capturas: `node herramientas/guardar-capturas.mjs <carpeta>`.
9. Completa `CAMBIOS.md` y `OPORTUNIDADES.md` del proyecto. En `OPORTUNIDADES.md` van **solo** problemas del sitio en línea, comprobados con curl o en `investigacion/original.html`. Si la red de la nube no llega a un sitio, usa `original.html` y `crudo.json` y anota que no se pudo comprobar en vivo.
10. Agrega la fila del sitio en `METODOS.md` (como "Terminado") y en el `OPORTUNIDADES.md` de la raíz, por prioridad. Vuelve a leer esos dos archivos justo antes de editarlos y cambia solo tu línea.
11. Commit solo con las rutas del sitio:
    ```
    git add METODOS.md OPORTUNIDADES.md proyectos/<carpeta>/CAMBIOS.md proyectos/<carpeta>/OPORTUNIDADES.md proyectos/<carpeta>/entregables proyectos/<carpeta>/referencias proyectos/<carpeta>/rediseno proyectos/<carpeta>/qa/reporte-rediseno.json
    git commit -m "<carpeta>: rediseño método 1.1 (<Negocio>, <Ciudad>) [nube]"
    ```
12. Después de cada sitio: `git pull --rebase origin main` y `git push origin main`. Si hay conflicto en `METODOS.md` u `OPORTUNIDADES.md`, conserva las líneas de los dos lados.

## Reglas que no se rompen

- Nunca inventar datos del negocio: precios, horarios, teléfonos, reseñas, premios ni certificaciones. Lo deducido se marca como pendiente en `CAMBIOS.md`.
- No descargar imágenes nuevas del sitio del cliente; usa solo las del clon.
- No usar teléfonos que parezcan de plantilla (por ejemplo 123 4567) como si fueran reales.
- Sin afirmaciones de salud ni de seguridad que el negocio no haga.
- No copiar claves, tokens ni API keys a ningún archivo.
- No modificar `sitio/` ni `investigacion/`, y no escribir en `datos/fabricador.db`.
- Obligatorio en cada sitio: un solo H1, WhatsApp con mensaje prellenado (con el número real), barra fija en el celular, enlace a Google Maps, `prefers-reduced-motion`, contraste AA, JSON-LD del tipo correcto, title y description reales, y ningún script ni mapa de terceros.

## Al terminar los 10

Escribe un resumen corto en `entregables-nube-2.md` en la raíz: por cada sitio, el commit, el resultado del QA, el elemento memorable, la prioridad y el hallazgo principal de oportunidades, y lo que hay que confirmar con el cliente. Haz commit y push.
