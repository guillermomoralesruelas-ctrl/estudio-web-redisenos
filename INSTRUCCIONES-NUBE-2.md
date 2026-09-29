# Instrucciones para Claude Code en la nube (lote 5)

> Este archivo es para una **segunda** sesión de Claude Code en la nube. Tiene su propia lista: los 10 sitios que la PC no alcanzó a hacer del lote PC-1. Al mismo tiempo, otra sesión de la nube trabaja en `INSTRUCCIONES-NUBE.md` (lote 4). Para no pisarse, cada una tiene su lista y **no toca los proyectos de la otra**.

## Antes de empezar

1. Lee completos, en este orden: `CLAUDE.md`, `INSTRUCCIONES-METODO-1.1.md`, `METODOS.md` y `DESCARTADOS.md`. Ahí están el proceso, las reglas (no inventar datos, no tocar el clon ni `datos/fabricador.db`) y el estado.
2. Toma como modelo los últimos rediseños terminados: `proyectos/624-lacanteraeventos`, `proyectos/465-greenspa`, `proyectos/481-haciendalamagdalena`, `proyectos/179-casatunkul` y `proyectos/229-clinicadela` (su `entregables/plan-diseno.md`, `CAMBIOS.md`, `OPORTUNIDADES.md`, `rediseno/src/*`, `rediseno/index.html` y `rediseno/fotos-web.mjs`).
3. Instala las herramientas una vez: `cd herramientas && npm install`. En la nube, Chromium ya está en `/opt/pw-browsers` y Playwright lo encuentra solo; no ejecutes `playwright install`.

## Tu lista: lote 5 (10 sitios)

Los primeros 10 del lote PC-1 ya se hicieron en la PC el 2026-09-28 (ver `METODOS.md`). Estos son los que faltan. Sus clones (`sitio/`) y textos (`investigacion/`) ya vienen en el repositorio.

| # | Carpeta | Negocio | Sitio original | Fotos en el clon |
|---|---|---|---|---|
| 1 | `445-gcbeautybarber` | GC Beauty Barber, Cabo San Lucas, Baja California Sur (spa) | https://gcbeautybarber.com.mx/ | 16 |
| 2 | `387-escuelademusica` | Escuela de música Lukin Aguascalientes, Aguascalientes, Aguascalientes (educacion) | https://www.lukinmusic.com/ | 14 |
| 3 | `363-elpatronbarberia` | El Patrón Barbería, Ciudad de México, CDMX (spa) | https://www.elpatron.com.mx/ | 11 |
| 4 | `613-kitesurfmexico` | Kitesurf México, Cancún, Quintana Roo (turismo) | https://www.kitesurfmexico.com/ | 16 |
| 5 | `600-junglerealtor` | Jungle Realtor, Bacalar, Quintana Roo (inmuebles) | https://junglerealtor.com/ | 16 |
| 6 | `280-cumbresdemita` | Cumbres de Mita, Sayulita, Nayarit (inmuebles) | https://www.cumbresdemita.com/ | 12 |
| 7 | `544-hotelrecreoclandestino` | Hotel Recreo - Clandestino Hotel, San Miguel de Allende, Guanajuato (hospedaje) | https://clandestinohotel.com/ | 15 |
| 8 | `649-lebenarquitectos` | LEBEN ARQUITECTOS, Zapopan, Jalisco (servicios) | https://lebenarq.com/ | 10 |
| 9 | `143-cancuncatamaranes` | Cancun Catamaranes, Cancún, Quintana Roo (turismo) | https://cancuncatamarans.mx/ | 13 |
| 10 | `250-colegiobanting` | Colegio Banting, Ciudad de México, CDMX (educacion) | https://www.colegiobanting.edu.mx/ | 14 |

Hazlos en orden. **No trabajes en ningún otro proyecto**, en particular en los de `INSTRUCCIONES-NUBE.md`.

### Esta lista se reparte entre varias sesiones

Una sola sesión quizá no alcance para los 10: cada una avanza lo que pueda y después Guillermo abre otra. Por eso:

- **Al empezar**, revisa `METODOS.md` y `git log origin/main`: salta los sitios de esta lista que ya tengan fila "Terminado", "Descartado" o "Pendiente 1.2 (PC)", y empieza por el primero que no la tenga.
- **Un sitio a la vez, completo:** commit y push al terminar o descartar cada uno (pasos 11 y 12), nunca al final de varios.
- **Si la sesión se va a cortar** con un sitio a medias, sube su avance a una rama `nube5-<carpeta>` con "EN PROGRESO" en el mensaje y anótalo en `entregables-nube-5.md`. La siguiente sesión lo retoma desde esa rama.
- Lleva `entregables-nube-5.md` en la raíz (créalo con el primer sitio) y actualízalo después de cada sitio, no al final. En el mismo commit cambia el "(este commit)" de la fila anterior por su hash.
- Si el sitio no publica WhatsApp, usa su teléfono principal como WhatsApp y márcalo como pendiente en `CAMBIOS.md`.
- **Si el clon no trae fotos suficientes** pero el sitio en vivo sí las tiene, no lo descartes: agrega su fila en `METODOS.md` como "Pendiente 1.2 (PC)" con una nota de qué fotos faltan, haz el commit y pasa al siguiente. Recuperar fotos del sitio en vivo solo se hace en la PC.

### No toques el panel

**No modifiques nada dentro de `panel/` ni `datos/verificaciones.json`.**

## Elementos memorables ya usados (no repetir)

La lista completa y al día está en `METODOS.md` (el título entre comillas de cada fila "Terminado"); revísala antes de cada sitio. Además de los que lista `INSTRUCCIONES-NUBE.md`, la PC usó en el lote PC-1: tarjetas de tour expandibles (Holbox Travel, Discover Vallarta), "Elige tu habitación" con motor de reservas (La Purificadora), reseñas reales de Booking en tarjetas (Casa Tunkul), coaches con cambio foto/información (Galo's Pilates) y "¿Para qué ocasión?" con chips (Florería Lizette).

## Cómo hacer cada sitio (método 1.1)

1. **Revisa las fotos y el contacto primero.** Descártalo si: tiene menos de 3 fotos propias del negocio con calidad usable (ni en el clon ni en el sitio en vivo); no hay WhatsApp, teléfono ni ubicación; la URL no es del negocio; o es una cadena grande. Agrega su fila en `METODOS.md` como "Descartado" con el motivo y otra en `DESCARTADOS.md` (sección "Descartados (revisados a fondo)") con la clave del motivo (`sin-fotos`, `sin-contacto`, `url-ajena`, `cadena`, `pocas-fotos`) y el detalle, haz el commit y pasa al siguiente. Las fotos sacadas de Google Maps (EXIF de Picasa/Google), de banco, generadas con IA (revisa también credenciales C2PA) o de otro negocio no cuentan.
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
    git add METODOS.md OPORTUNIDADES.md entregables-nube-5.md proyectos/<carpeta>/CAMBIOS.md proyectos/<carpeta>/OPORTUNIDADES.md proyectos/<carpeta>/entregables proyectos/<carpeta>/referencias proyectos/<carpeta>/rediseno proyectos/<carpeta>/qa/reporte-rediseno.json
    git commit -m "<carpeta>: rediseño método 1.1 (<Negocio>, <Ciudad>) [nube]"
    ```
    Nunca `git add .` ni `git add proyectos/<carpeta>` completo.
12. Después de cada sitio: `git pull --rebase origin main` y `git push origin main`. Si hay conflicto en `METODOS.md`, `OPORTUNIDADES.md` o `DESCARTADOS.md`, conserva las líneas de los dos lados.

## Reglas que no se rompen

- Nunca inventar datos del negocio: precios, horarios, teléfonos, reseñas, premios ni certificaciones. Lo deducido se marca como pendiente en `CAMBIOS.md`.
- No descargar imágenes nuevas del sitio del cliente; usa solo las del clon.
- No usar teléfonos que parezcan de plantilla (por ejemplo 123 4567) como si fueran reales.
- Sin afirmaciones de salud ni de seguridad que el negocio no haga (nada de "garantizado", "sin dolor", "sin riesgo" ni antes/después inventados).
- No copiar claves, tokens ni API keys a ningún archivo.
- No modificar `sitio/` ni `investigacion/`, y no escribir en `datos/fabricador.db`.
- Obligatorio en cada sitio: un solo H1, WhatsApp con mensaje prellenado (con el número real), barra fija en el celular, enlace a Google Maps, `prefers-reduced-motion`, contraste AA, JSON-LD del tipo correcto, title y description reales, y ningún script de terceros.
- **Mapa real:** si el sitio original tiene un mapa de Google (un `<iframe>` con URL real en `investigacion/original.html` o en el clon), el rediseño lleva ese mismo mapa como `<iframe>` embebido (`mapaEmbed` en `content.ts`), no solo un enlace ni un mapa simulado. Modelo: `proyectos/624-lacanteraeventos/rediseno/src/App.tsx`.
- **Fotos:** revisa en las capturas del QA que todas las fotos carguen (0 rotas) y que no haya huecos grises donde debía ir una imagen.
- Si git se queja de nombres de archivo largos, usa `git -c core.longpaths=true`.

## Resumen del lote

`entregables-nube-5.md` lleva, por cada sitio: carpeta, commit, resultado del QA (o motivo del descarte o del "Pendiente 1.2"), elemento memorable, prioridad, hallazgo principal de oportunidades y lo que hay que confirmar con el cliente.
