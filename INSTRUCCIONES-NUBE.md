# Instrucciones para Claude Code en la nube

> Este archivo es para la sesión de Claude Code en la nube que trabaja sobre este repositorio. La sesión en la PC de Guillermo trabaja al mismo tiempo en **otros** sitios. Para no pisarse, cada una tiene su lista y **no toca los proyectos de la otra**.

## Antes de empezar

1. Lee completos, en este orden: `CLAUDE.md`, `INSTRUCCIONES-METODO-1.1.md` y `METODOS.md`. Ahí están el proceso, las reglas (no inventar datos, no tocar el clon ni `datos/fabricador.db`) y el estado.
2. Toma como modelo los últimos rediseños terminados: `proyectos/388-escueladevuelo`, `proyectos/530-hotelizkina`, `proyectos/549-hoteltradicional` y `proyectos/557-humaredaprime` (su `entregables/plan-diseno.md`, `CAMBIOS.md`, `OPORTUNIDADES.md`, `rediseno/src/*`, `rediseno/index.html` y `rediseno/fotos-web.mjs`).
3. Instala las herramientas una vez: `cd herramientas && npm install`. En la nube, Chromium ya está en `/opt/pw-browsers` y Playwright lo encuentra solo; no ejecutes `playwright install`.

## Tu lista (solo estos 9, en este orden)

| # | Carpeta | Negocio | Sitio original |
|---|---|---|---|
| 1 | `369-emiliauwphoto` | Emilia UW Photo, Tulum (fotografía bajo el agua) | https://emilia-uwphoto.com/ |
| 2 | `634-lagranaeventos` | La Grana Eventos, Guadalajara | https://lagranaeventos.com/ |
| 3 | `393-estudio070` | Estudio 070, Ciudad de México | https://estudio070.com/ |
| 4 | `614-kiumohospitalveterinario` | Kiumo Hospital Veterinario, Culiacán | https://kiumo.com.mx/ |
| 5 | `43-animalitosmexico` | Animalitos México, Ciudad de México | https://animalitosmexico.com/ |
| 6 | `599-juancamaney` | Juan Camaney, Mérida | https://juancamaney.com/ |
| 7 | `78-baansingtocentral` | Baan Singto Central, Guadalajara (muay thai) | https://baansingtocentral.com/ |
| 8 | `608-kenkwellness` | Kenkō Wellness, Naucalpan | https://kenkowellness.com.mx/ |
| 9 | `498-hmoestudiobarre` | HMO Estudio Barre 7, Hermosillo | https://barre-7.com.mx/ |

Sus clones (`sitio/`) y textos (`investigacion/`) ya vienen en el repositorio. **No trabajes en ningún otro proyecto**: la PC de Guillermo está haciendo otros sitios en paralelo.

## Cómo hacer cada sitio (método 1.1)

1. **Revisa las fotos primero.** Si hay menos de 3 fotos propias del negocio con calidad usable, descártalo: agrega su fila en `METODOS.md` como "Descartado" con el motivo, haz el commit y pasa al siguiente. Las fotos sacadas de Google Maps (EXIF de Picasa/Google), de banco, generadas con IA o de otro negocio no cuentan.
2. `node herramientas/nuevo-rediseno.mjs <carpeta>` y luego `cd proyectos/<carpeta>/rediseno && npm install`.
3. `node herramientas/qa-rediseno.mjs <carpeta>` para diagnosticar el clon.
4. Crea `rediseno/fotos-web.mjs` como el de los modelos: copias `.webp` solo de las fotos que uses, en `../assets/web`, que es el `publicDir` de `vite.config.ts`.
5. Escribe `entregables/plan-diseno.md` con **un** elemento memorable que salga del negocio, con datos reales y distinto de los que ya se usaron (ver `METODOS.md` y los `CAMBIOS.md` de los modelos). Incluye la revisión contra lo genérico.
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

## Al terminar los 9

Escribe un resumen corto en `entregables-nube.md` en la raíz: por cada sitio, el commit, el resultado del QA, el elemento memorable, la prioridad y el hallazgo principal de oportunidades, y lo que hay que confirmar con el cliente. Haz commit y push.
