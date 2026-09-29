# Instrucciones para Claude Code en la nube (lote 7)

> Este archivo es para sesiones de Claude Code **en la nube**. Solo trabaja los sitios de esta lista. No toques proyectos de otros lotes.

## Antes de empezar

1. `git pull --rebase origin main`
2. Lee completos, en este orden: `CLAUDE.md`, `INSTRUCCIONES-METODO-1.1.md`, `METODOS.md` y `DESCARTADOS.md`.
3. Toma como modelo los últimos rediseños terminados: `proyectos/433-freewalkoaxaca`, `proyectos/235-clinicadermatologicay`, `proyectos/575-inmotionbybrahm`, `proyectos/425-florestudio` y `proyectos/39-amatestudio` (su `entregables/plan-diseno.md`, `CAMBIOS.md`, `OPORTUNIDADES.md`, `rediseno/src/*`, `rediseno/index.html` y `rediseno/fotos-web.mjs`).
4. Instala herramientas una vez: `cd herramientas && npm install`. En la nube, Chromium ya está en `/opt/pw-browsers`; no ejecutes `playwright install`.

## Tu lista: lote 7 (30 sitios)

Los clones (`sitio/`) y textos (`investigacion/`) de los 30 ya vienen en el repositorio. Si alguno ya tiene fila "Terminado" o "Descartado" en `METODOS.md`, sáltalo.

| # | Carpeta | Negocio | Sitio original | Fotos en el clon |
|---|---|---|---|---|
| 1 | `13-academiamusicalrubinstei` | Academia Musical Rubinstein, Ciudad de México, CDMX (educacion) | https://www.academiamusicalrubinstein.com/ | 54 |
| 2 | `16-acurauniversidad` | Acura Universidad, Ciudad de México, CDMX (negocio-local) | https://www.acurauniversidad.mx/ | 39 |
| 3 | `51-arenahybridclub` | Arena Hybrid Club, Aguascalientes, Ags. (fitness) | https://arenahybridclub.com/ | 39 |
| 4 | `102-baronbarbershop` | Barón Barbershop, Zapopan, Jalisco (spa) | https://baronbarbershop.com/ | 16 |
| 5 | `107-bellezalatina` | Belleza Latina, Cancún, Quintana Roo (estetica) | https://bellezalatina.life/ | 15 |
| 6 | `129-cacaospatulum` | Cacao Spa Tulum, Tulum, Quintana Roo (spa) | https://www.cacaospatulum.com/ | 21 |
| 7 | `148-cantonmexicali` | Cantón Mexicali, Ciudad de México, CDMX (restaurante) | https://www.cantonmexicali.com/ | 7 |
| 8 | `165-casadongustavo` | Casa Don Gustavo Boutique Hotel, Campeche, Campeche (hospedaje) | https://www.casadongustavo.com/ | 31 |
| 9 | `176-casapitic` | Casa Pitic, Hermosillo, Sonora (hospedaje) | https://casapitic.mx/ | 6 |
| 10 | `204-cervusbarberia` | Cervus Barbería, Zapopan, Jalisco (spa) | https://cervusbarberia.com/ | 29 |
| 11 | `217-cincodoscinco` | Cinco Dos Cinco de Mayo, Hermosillo, Sonora (fitness) | https://52cincodemayo.com/ | 27 |
| 12 | `224-clinicaveterinariaadrian` | Clínica Veterinaria Adrián Zamora, Querétaro, Qro. (veterinaria) | https://www.clinicaveterinariaadrianzamora.com.mx/ | 20 |
| 13 | `244-clinicaveterinariadel` | Clínica Veterinaria del Dr. Memo, Querétaro, Qro. (veterinaria) | https://www.drmemoveterinario.com.mx/ | 21 |
| 14 | `249-cognitiomexico` | Cognitio México (psicología cristiana), Ciudad de México, CDMX (salud) | https://psicologiacristiana.cognitiomexico.com/ | 44 |
| 15 | `259-corefisioterapia` | Core Fisioterapia, Guadalajara, Jalisco (salud) | https://corefisioterapia.com/ | 13 |
| 16 | `262-cosmetologianaturalspa` | Cosmetología Natural Spa (Elizabeth Herrera), Hermosillo, Sonora (estetica) | https://www.elizabetherreracosmiatria.com/ | 53 |
| 17 | `284-curiosacafejuice` | Curiosa Café & Juice Bar, Ciudad de México, CDMX (restaurante) | https://www.curiosacafe.mx/ | 12 |
| 18 | `306-dermatologiamx` | Dermatología.mx, Monterrey, Nuevo León (estetica) | https://dermatologia.mx/ | 15 |
| 19 | `324-dolcebellaspa` | Dolcebella Spa, Tijuana, Baja California (spa) | http://web.dolcebellaspa.com.mx/ | 41 |
| 20 | `327-donrogeliocafe` | Don Rogelio Café, Tlajomulco, Jalisco (restaurante) | https://donrogeliocafe.com/ | 22 |
| 21 | `333-drhugosanchez` | Dr. Hugo Sánchez, Oaxaca de Juárez, Oaxaca (salud) | https://drhugosanchez.com/ | 41 |
| 22 | `365-elreybar` | El Rey Bar & Supper Club, Puerto Vallarta, Jalisco (restaurante) | https://elreybarpv.com/ | — |
| 23 | `379-escondidooaxacagrupo` | Escondido Oaxaca (Grupo Habita), Oaxaca de Juárez, Oaxaca (hospedaje) | http://escondidooaxaca.com/ | 35 |
| 24 | `399-eventosjubileo` | Eventos Jubileo, Ciudad de México, CDMX (eventos) | https://eventosjubileo.com/ | 21 |
| 25 | `416-flamboyanhotelresidences` | Flamboyan Hotel & Residences, San José del Cabo, B.C.S. (hospedaje) | https://www.flamboyan.com.mx/ | 41 |
| 26 | `449-gimnasiobefit` | Gimnasio Befit, Mazatlán, Sinaloa (fitness) | https://befit.mx/ | 10 |
| 27 | `483-hafersonsinnhotel` | Hafersons Inn, Ciudad Madero, Tamaulipas (hospedaje) | https://hafersonsinn.mx/ | 19 |
| 28 | `485-hangartrc` | Hangar TRC, Torreón, Coahuila (fitness) | https://www.hangartrc.com/ | 28 |
| 29 | `533-hotelmaculis` | Hotel Maculís, Campeche, Campeche (hospedaje) | https://hotelmaculis.mx/ | 69 |
| 30 | `535-hotelmontealban` | Hotel Monte Albán, Oaxaca de Juárez, Oaxaca (hospedaje) | http://www.hotelmontealban.com/ | 8 |

Los datos de la tabla salen de la base del fabricador y pueden estar mal. Confírmalos en el clon (`sitio/`) y en `investigacion/` antes de usarlos. Aplica el paso 1 de descarte con cuidado: si la URL resulta ser de otro negocio, si tiene menos de 3 fotos propias usables, o es una cadena grande, descártalo.

**Hazlos en orden. No trabajes en ningún otro proyecto.**

### Esta lista se reparte entre varias sesiones

- **Al empezar**, revisa `METODOS.md` y salta los sitios que ya tengan fila "Terminado", "Descartado" o "En curso". Empieza por el primero sin fila.
- **Un sitio a la vez, completo:** commit y push al terminar o descartar cada uno (pasos 11 y 12), nunca varios juntos.
- **Apartar antes de empezar:** agrega la fila del sitio en `METODOS.md` como "En curso" de inmediato, antes de hacer nada más.
- Si la sesión se corta con un sitio a medias, deja su fila como "En curso" con nota de hasta dónde llegó.
- Lleva `entregables-nube-7.md` en la raíz y actualízalo después de cada sitio (no al final).
- Si el sitio no publica WhatsApp, usa su teléfono principal como WhatsApp y márcalo como pendiente en `CAMBIOS.md`.
- **Si el clon no trae fotos suficientes** pero el sitio en vivo sí las tiene, no lo descartes: agrega su fila en `METODOS.md` como "Pendiente 1.2 (PC)" con una nota de qué fotos faltan, haz el commit y pasa al siguiente. Recuperar fotos del sitio en vivo solo se hace en la PC.

### No toques el panel

**No modifiques nada dentro de `panel/` ni `datos/verificaciones.json`.**

## Elementos memorables ya usados (no repetir)

Revisa la columna "Elemento memorable" de `METODOS.md` antes de cada sitio. Algunos ejemplos de los últimos lotes: tarjetas de tour expandibles, timeline de historia, calculadora de membresía, galería 3D, "¿Para qué ocasión?" con chips, coaches con foto/info intercambiable, motor de reservas por habitación, cuadrícula de lotes disponibles, carrusel de platos con porciones.

## Cómo hacer cada sitio (método 1.1)

1. **Revisa las fotos y el contacto primero.** Descártalo si: tiene menos de 3 fotos propias del negocio con calidad usable (ni en el clon ni en el sitio en vivo); no hay WhatsApp, teléfono ni ubicación; la URL no es del negocio; o es una cadena grande. Agrega su fila en `METODOS.md` como "Descartado" con el motivo y otra en `DESCARTADOS.md` con la clave (`sin-fotos`, `sin-contacto`, `url-ajena`, `cadena`, `pocas-fotos`) y el detalle, haz el commit y pasa al siguiente. Las fotos de Google Maps (EXIF de Picasa/Google), de banco, generadas con IA (revisa credenciales C2PA) o de otro negocio no cuentan.
2. `node herramientas/nuevo-rediseno.mjs <carpeta>` y luego `cd proyectos/<carpeta>/rediseno && npm install`.
3. `node herramientas/qa-rediseno.mjs <carpeta>` para diagnosticar el clon.
4. Crea `rediseno/fotos-web.mjs` como el de los modelos: copias `.webp` solo de las fotos que uses, en `../assets/web`, que es el `publicDir` de `vite.config.ts`.
5. Escribe `entregables/plan-diseno.md` con **un** elemento memorable que salga del negocio, con datos reales y distinto de los ya usados. Incluye la revisión contra lo genérico.
6. Construye: `npx tsc --noEmit && npm run build`.
7. QA final: `node herramientas/qa-rediseno.mjs <carpeta>` (sin `--solo-rediseno`). Debe dar 0 desbordes, 1 H1, 0 imágenes rotas, 0 errores de consola y 0 recursos fallidos. La captura móvil no debe pasar de 16,000 px de alto. Revisa a ojo `qa/despues-escritorio.png` y `qa/despues-movil.png` y corrige lo que se vea mal.
8. Guarda las capturas: `node herramientas/guardar-capturas.mjs <carpeta>`.
9. Completa `CAMBIOS.md` y `OPORTUNIDADES.md` del proyecto. En `OPORTUNIDADES.md` van **solo** problemas del sitio en línea, comprobados con curl o en `investigacion/original.html`. Si la red de la nube no llega al sitio, usa `original.html` y `crudo.json` y anota que no se pudo comprobar en vivo.
10. Agrega la fila del sitio en `METODOS.md` (como "Terminado", con "Hecho en la nube." al inicio de las notas) y en el `OPORTUNIDADES.md` de la raíz, por prioridad. Vuelve a leer esos dos archivos justo antes de editarlos.
11. Commit solo con las rutas del sitio:
    ```
    git add METODOS.md OPORTUNIDADES.md entregables-nube-7.md proyectos/<carpeta>/CAMBIOS.md proyectos/<carpeta>/OPORTUNIDADES.md proyectos/<carpeta>/entregables proyectos/<carpeta>/referencias proyectos/<carpeta>/rediseno proyectos/<carpeta>/qa/reporte-rediseno.json
    git commit -m "<carpeta>: rediseño método 1.1 (<Negocio>, <Ciudad>) [nube]"
    ```
    Nunca `git add .` ni `git add proyectos/<carpeta>` completo. Si git se queja de nombres de archivo largos, usa `git -c core.longpaths=true add ...`.
12. Después de cada sitio: `git pull --rebase origin main` y `git push origin main`. Si hay conflicto en `METODOS.md` o `OPORTUNIDADES.md`, conserva las líneas de los dos lados.

## Reglas que no se rompen

- Nunca inventar datos del negocio: precios, horarios, teléfonos, reseñas, premios ni certificaciones.
- No descargar imágenes nuevas del sitio del cliente; usa solo las del clon.
- Sin afirmaciones de salud ni de seguridad que el negocio no haga ("garantizado", "sin dolor", "sin riesgo", antes/después inventados).
- No copiar claves, tokens ni API keys a ningún archivo.
- No modificar `sitio/` ni `investigacion/`, y no escribir en `datos/fabricador.db`.
- Obligatorio en cada sitio: un solo H1, WhatsApp con mensaje prellenado (número real), barra fija en el celular, enlace a Google Maps, `prefers-reduced-motion`, contraste AA, JSON-LD del tipo correcto, title y description reales, ningún script de terceros.
- **Mapa real:** si el sitio original tiene un `<iframe>` de Google Maps en `investigacion/original.html` o en el clon, el rediseño lleva ese mismo mapa embebido (`mapaEmbed` en `content.ts`). Modelo: `proyectos/624-lacanteraeventos/rediseno/src/App.tsx`.
- **Fotos:** en las capturas del QA todas las fotos deben cargar (0 rotas), sin huecos grises.

## Resumen del lote

`entregables-nube-7.md` lleva, por cada sitio: carpeta, commit, resultado del QA (o motivo del descarte o del "Pendiente 1.2"), elemento memorable, prioridad y hallazgo principal de oportunidades.
