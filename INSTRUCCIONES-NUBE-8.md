# Instrucciones para Claude Code en la nube (lote 8)

> Este archivo es para sesiones de Claude Code **en la nube**. Solo trabaja los sitios de esta lista. No toques proyectos de otros lotes.

## Antes de empezar

1. `git pull --rebase origin main`
2. Lee completos, en este orden: `CLAUDE.md`, `INSTRUCCIONES-METODO-1.1.md`, `METODOS.md` y `DESCARTADOS.md`.
3. Toma como modelo los últimos rediseños terminados: `proyectos/433-freewalkoaxaca`, `proyectos/204-cervusbarberia`, `proyectos/399-eventosjubileo`, `proyectos/533-hotelmaculis` y `proyectos/13-academiamusicalrubinstei` (su `entregables/plan-diseno.md`, `CAMBIOS.md`, `OPORTUNIDADES.md`, `rediseno/src/*`, `rediseno/index.html` y `rediseno/fotos-web.mjs`).
4. Instala herramientas una vez: `cd herramientas && npm install`. En la nube, Chromium ya está en `/opt/pw-browsers`; no ejecutes `playwright install`.

## Tu lista: lote 8 (30 sitios)

Los clones (`sitio/`) y textos (`investigacion/`) de los 30 ya vienen en el repositorio. Si alguno ya tiene fila "Terminado" o "Descartado" en `METODOS.md`, sáltalo.

| # | Carpeta | Negocio | Sitio original | Fotos en el clon |
|---|---|---|---|---|
| 1 | `27-alcazarinmobiliaria` | Alcázar Inmobiliaria, Oaxaca de Juárez, Oaxaca (inmobiliaria) | https://www.alcazarinmobiliaria.com/ | — |
| 2 | `28-aldocastanedabodas` | Aldo Castañeda Bodas, Guadalajara, Jalisco (servicios/eventos) | https://aldocastanedabodas.com/ | — |
| 3 | `37-alturamaximareal` | Altura Maxima Real Estate, Zapopan, Jalisco (inmobiliaria) | https://www.alturamaxima.mx/ | — |
| 4 | `75-azulbacalar` | Azul Bacalar, Bacalar, Quintana Roo (inmobiliaria) | https://www.bacalar.com.mx/ | — |
| 5 | `247-codamusicinstitute` | Coda Music Institute, Querétaro, Querétaro (educacion) | https://codamusicinstitute.com/ | — |
| 6 | `345-dremmanuelsanchez` | Dr. Emmanuel Sánchez Sepúlveda, Monterrey, Nuevo León (salud) | https://saludmentalmonterrey.mx/ | — |
| 7 | `370-encisan` | Encisan, Oaxaca de Juárez, Oaxaca (salud) | https://www.encisan.com/ | — |
| 8 | `395-estudiodearte` | Estudio de Arte Coyoacán, Ciudad de México, CDMX (educacion) | https://www.estudiodeartecoyoacan.com/ | — |
| 9 | `413-finoasis` | FinOasis, Ciudad de México, CDMX (finanzas) | https://finoasis.mx/ | — |
| 10 | `426-flowbarber` | Flow Barber, Playa del Carmen, Quintana Roo (spa/barbería) | https://flowbarberpdc.com/ | — |
| 11 | `430-forter` | Forter, Hermosillo, Sonora (retail) | https://forter.mx/ | — |
| 12 | `437-fabricadelentes` | Fábrica de Lentes, Guadalajara, Jalisco (salud/óptica) | https://fabricadelentes.mx/ | — |
| 13 | `441-galeriamexicanade` | Galería Mexicana de Diseño, Ciudad de México, CDMX (retail) | https://www.galeriamexicana.mx/ | — |
| 14 | `446-gemaspahuatulco` | Gema Spa Huatulco, Bahías de Huatulco, Oaxaca (spa) | https://gemaspahuatulco.com/ | — |
| 15 | `454-goldenscissors` | Golden Scissors, Cancún, Quintana Roo (spa/barbería) | https://goldenscissors.com.mx/ | — |
| 16 | `487-harmoniapilatesreformer` | Harmonía Pilates Reformer Studio, Ciudad de México, CDMX (fitness) | https://www.harmoniapilates.com/ | — |
| 17 | `491-heartsonfilm` | Hearts on Film, Monterrey, Nuevo León (servicios/fotografía) | https://heartsonfilm.com/ | — |
| 18 | `497-hiya` | Hiya, Ciudad de México, CDMX (restaurante) | https://hiya.mx/ | — |
| 19 | `510-hostaldela` | Hostal de la Luz Spa Holistic Resort, Tepoztlán, Morelos (spa/hospedaje) | https://hostaldelaluzspa.stateofmexico.mx/ | — |
| 20 | `542-hotelpremierhermosillo` | Hotel Premier Hermosillo, Hermosillo, Sonora (hospedaje) | http://www.hotelpremierhermosillo.com/ | — |
| 21 | `545-hotelregis` | Hotel Regis, Mexicali, Baja California (hospedaje) | https://hotel-regis.com/ | — |
| 22 | `570-inglespractico` | Inglés Práctico, Ciudad Juárez, Chihuahua (educacion) | https://www.inglespractico.com.mx/ | — |
| 23 | `595-joyeriadignum` | Joyería Dignum, Guadalajara, Jalisco (retail) | https://joyeriadignum.com/ | — |
| 24 | `611-kingstoninstitute` | Kingston Institute, Torreón, Coahuila (educacion) | https://institutokingston.com.mx/ | — |
| 25 | `620-lablancamerida` | La Blanca Mérida, León, Guanajuato (restaurante) | https://lablancamerida.com/ | — |
| 26 | `623-labovedahotel` | La Bóveda Hotel, Nochistlán, Zacatecas (hospedaje) | https://labovedahotel.com/ | — |
| 27 | `631-lafortalezaacademia` | La Fortaleza Academia de Artes, Guadalajara, Jalisco (educacion) | https://www.lafortalezaacademiadeartes.com/ | — |
| 28 | `640-lapincoyacafe` | La Pincoya Café, La Paz, Baja California Sur (restaurante) | https://lapincoyacafe.com/ | — |
| 29 | `648-lcpfastridlarrondo` | LCPF Astrid Larrondo (contadora/finanzas), Tampico, Tamaulipas (servicios) | https://www.astridlarrondo.com/ | — |
| 30 | `653-liccesarsobrado` | Lic. César Sobrado, Cancún, Quintana Roo (servicios/legal) | https://www.cesarsobrado.com/ | — |

**Notas especiales:**
- `75-azulbacalar`: el dominio es `bacalar.com.mx`, no del negocio directamente — verifica en el clon que el contenido corresponde a Azul Bacalar (inmobiliaria) y no a un portal de la ciudad. Descártalo como `url-ajena` si no es el sitio del negocio.
- `510-hostaldela`: URL en subdominio de `stateofmexico.mx` — puede ser directorio. Verifica en el clon. Si el contenido es del spa/hotel, úsalo; si es un directorio genérico, descártalo.

Los datos de la tabla pueden estar mal (ciudad, nombre): confírmalos en `sitio/` e `investigacion/` antes de usarlos.

**Hazlos en orden. No trabajes en ningún otro proyecto.**

### Esta lista se reparte entre varias sesiones

- **Al empezar**, revisa `METODOS.md` y salta los que ya tengan fila "Terminado", "Descartado" o "En curso". Empieza por el primero sin fila.
- **Apartar antes de empezar:** agrega la fila del sitio en `METODOS.md` como "En curso" de inmediato, antes de hacer nada más.
- **Un sitio a la vez, completo:** commit y push al terminar o descartar cada uno, nunca varios juntos.
- Si la sesión se corta con un sitio a medias, deja su fila como "En curso" con nota de hasta dónde llegó.
- Lleva `entregables-nube-8.md` en la raíz y actualízalo después de cada sitio (no al final).
- Si el sitio no publica WhatsApp, usa su teléfono principal como WhatsApp y márcalo como pendiente en `CAMBIOS.md`.
- **Si el clon no trae fotos suficientes** pero el sitio en vivo sí las tiene, no lo descartes: agrega su fila en `METODOS.md` como "Pendiente 1.2 (PC)" con nota de qué fotos faltan, haz el commit y pasa al siguiente.

### No toques el panel

**No modifiques nada dentro de `panel/` ni `datos/verificaciones.json`.**

## Elementos memorables ya usados (no repetir)

Revisa la columna "Elemento memorable" de `METODOS.md` antes de cada sitio. Algunos ejemplos recientes: teclado de piano interactivo (Academia Rubinstein), carril por plan de membresía (Arena Hybrid), "¿Qué incluye tu corte?" con botones (Barón Barbershop), "¿Cuánto tiempo tienes?" con minutos (Cervus), "¿Desde dónde empiezas?" con pizarrón (Cinco dos Cinco), "Arma tu escapada" con burbuja de WhatsApp (Hotel Maculís), "¿Vienes solo o en pareja?" con barra de duración (Dolcebella Spa), "Arma tu evento" con salón según tipo e invitados (Eventos Jubileo), "¿Qué quieres entrenar?" con fichas de sucursal (Gimnasio Befit), "Un día en el hotel" con línea de 24 horas (Hafersons Inn), "¿Qué te trae a consulta?" con motivos (Dr. Hugo Sánchez).

## Cómo hacer cada sitio (método 1.1)

1. **Revisa las fotos y el contacto primero.** Descártalo si: tiene menos de 3 fotos propias del negocio con calidad usable; no hay WhatsApp, teléfono ni ubicación; la URL no es del negocio; o es una cadena grande. Agrega su fila en `METODOS.md` como "Descartado" y en `DESCARTADOS.md` con la clave (`sin-fotos`, `sin-contacto`, `url-ajena`, `cadena`, `pocas-fotos`), haz el commit y pasa al siguiente. Las fotos de Google Maps, de banco, generadas con IA (revisa C2PA) o de otro negocio no cuentan.
2. `node herramientas/nuevo-rediseno.mjs <carpeta>` y luego `cd proyectos/<carpeta>/rediseno && npm install`.
3. `node herramientas/qa-rediseno.mjs <carpeta>` para diagnosticar el clon.
4. Crea `rediseno/fotos-web.mjs`: copias `.webp` de las fotos que uses, en `../assets/web` (`publicDir` de `vite.config.ts`).
5. Escribe `entregables/plan-diseno.md` con **un** elemento memorable único, basado en datos reales del negocio.
6. `npx tsc --noEmit && npm run build`.
7. QA: `node herramientas/qa-rediseno.mjs <carpeta>` — 0 problemas. Corrige y vuelve a compilar si hay fallos.
8. `node herramientas/guardar-capturas.mjs <carpeta>`.
9. Completa `CAMBIOS.md` y `OPORTUNIDADES.md` del proyecto.
10. Actualiza `METODOS.md` ("Terminado", "Hecho en la nube.") y `OPORTUNIDADES.md` raíz y `entregables-nube-8.md`.
11. Commit:
    ```
    git add METODOS.md OPORTUNIDADES.md entregables-nube-8.md proyectos/<carpeta>/CAMBIOS.md proyectos/<carpeta>/OPORTUNIDADES.md proyectos/<carpeta>/entregables proyectos/<carpeta>/referencias proyectos/<carpeta>/rediseno proyectos/<carpeta>/qa/reporte-rediseno.json
    git commit -m "<carpeta>: rediseño método 1.1 (<Negocio>, <Ciudad>) [nube]"
    ```
    Nunca `git add .` ni `git add proyectos/<carpeta>` completo. Si git se queja de nombres largos: `git -c core.longpaths=true add ...`.
12. `git pull --rebase origin main && git push origin main`. Si hay conflicto en `METODOS.md` u `OPORTUNIDADES.md`, conserva las líneas de los dos lados.

## Reglas que no se rompen

- Nunca inventar datos del negocio.
- No descargar imágenes nuevas del sitio del cliente; usa solo las del clon.
- Sin afirmaciones de salud/seguridad que el negocio no haga.
- No copiar claves, tokens ni API keys a ningún archivo.
- No modificar `sitio/` ni `investigacion/`. No escribir en `datos/fabricador.db`.
- Obligatorio: un H1, WhatsApp prellenado (número real), barra fija móvil, Google Maps enlace, `prefers-reduced-motion`, contraste AA, JSON-LD, title y description reales, sin scripts de terceros.
- **Mapa real:** si `investigacion/original.html` o el clon tienen un `<iframe>` de Google Maps, el rediseño lleva ese mismo iframe (`mapaEmbed` en `content.ts`).
- **Fotos:** 0 imágenes rotas en el QA, sin huecos grises.

## Resumen del lote

`entregables-nube-8.md` lleva por cada sitio: carpeta, commit, resultado del QA (o motivo del descarte o "Pendiente 1.2"), elemento memorable, prioridad y hallazgo principal.
