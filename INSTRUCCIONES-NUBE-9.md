# Instrucciones para Claude Code en la nube (lote 9)

> Este archivo es para sesiones de Claude Code **en la nube**. Solo trabaja los sitios de esta lista. No toques proyectos de otros lotes.

## Antes de empezar

1. `git pull --rebase origin main`
2. Lee completos, en este orden: `CLAUDE.md`, `INSTRUCCIONES-METODO-1.1.md`, `METODOS.md` y `DESCARTADOS.md`.
3. Toma como modelo los rediseños 1.2 hechos en la nube: `proyectos/468-grimaradventures`, `proyectos/600-junglerealtor`, `proyectos/446-gemaspahuatulco` y `proyectos/27-alcazarinmobiliaria`. Antes se usaban los últimos rediseños terminados: `proyectos/433-freewalkoaxaca`, `proyectos/204-cervusbarberia`, `proyectos/399-eventosjubileo`, `proyectos/533-hotelmaculis` y `proyectos/13-academiamusicalrubinstei` (su `entregables/plan-diseno.md`, `CAMBIOS.md`, `OPORTUNIDADES.md`, `rediseno/src/*`, `rediseno/index.html` y `rediseno/fotos-web.mjs`).
4. Instala herramientas una vez: `cd herramientas && npm install`. En la nube, Chromium ya está en `/opt/pw-browsers`; no ejecutes `playwright install`.

## Tu lista: lote 9 (30 sitios)

Lote armado en la nube el 2026-10-10 con los sitios "construido / funcional" del fabricador que aún no tenían carpeta y cuya URL es un dominio propio del negocio (se dejaron fuera directorios, notas de prensa, Wikipedia, páginas de reservas y subdominios de plataformas como setmore, menufyy, ohotel o hoteltodoincluido). Los clones (`sitio/`) se hicieron con `herramientas/clonar.mjs` sobre una copia temporal de `fabricador.db`: **la base real no se tocó** y en ella estos 30 siguen igual.

Estos sitios solo traen `investigacion/original.html` (el HTML de la portada que guarda el clonador); no hay `crudo.json` ni `resumen.json` porque no se corrió Jina. Lee los textos y el contacto del sitio en vivo, y baja de ahí sus fotos propias (método 1.2 en la nube). Casi todos los clones traen pocas o ninguna foto porque el sitio las carga con JavaScript o desde un CDN.

| # | Carpeta | Negocio | Sitio original | Plataforma |
|---|---|---|---|---|
| 1 | `448-georgieurisfotografia` | Georgi Euris Fotografía, Ciudad de México, CDMX (servicios) | https://georgieuris.com/ | wordpress |
| 2 | `10-abudasesoriainmobiliaria` | Abud Asesoría Inmobiliaria, Campeche, Campeche (inmobiliaria) | https://www.abudbienesraices.com/ | html-custom |
| 3 | `147-cancunprimereal` | Cancún Prime Real Estate, Cancún, Quintana Roo (inmobiliaria) | https://cancunprimerealestate.com/ | html-custom |
| 4 | `70-aventuradeesnorquel` | Aventura de esnórquel con tiburón ballena de día completo en Isla Mujeres, Isla Mujeres, Quintana Roo (turismo) | https://www.isla-mujeres-boat-charters.com/ | html-custom |
| 5 | `79-backtothe` | Back to the Breath | Lunita Jungle Retreat, Puerto Morelos, Quintana Roo (salud) | https://www.lunitajungleretreat.com/ | html-custom |
| 6 | `95-barberiadeluxepolanco` | Barbería Deluxe - Polanco, Ciudad de México, CDMX (spa/barbería) | https://barberia.mx/ | html-custom |
| 7 | `109-belovaluxuryhotel` | Belova Luxury Hotel, San Cristóbal de las Casas, Chiapas (hospedaje) | https://www.hotelbelova.com.mx/ | html-custom |
| 8 | `209-chefgabygreen` | Chef Gaby Green, San Miguel de Allende, Guanajuato (educacion) | https://www.chefgabygreen.com/ | html-custom |
| 9 | `264-costadreamrealty` | Costa Dream Realty Mexico, Puerto Escondido, Oaxaca (inmobiliaria) | https://www.costadreamrealty.com/ | html-custom |
| 10 | `269-crisantemofotografia` | Crisantemo Fotografía, Monterrey, Nuevo León (eventos) | https://www.crisantemo.com.mx/ | html-custom |
| 11 | `302-dentistacuernavaca` | Dentista Cuernavaca, Cuernavaca, Morelos (salud) | https://dentistacuernavaca.com/ | html-custom |
| 12 | `319-dmstudiosdestino` | DM Studios (Destino Musical), Ciudad de México, Coyoacán (educacion) | https://www.destinomusical.com/ | wix |
| 13 | `344-drecastudio` | DRECA Studio, Ciudad de México, CDMX (eventos) | https://drecastudio.com/ | wordpress |
| 14 | `331-dredgarmonroy` | Dr. Edgar Monroy, Ciudad de México (salud) | https://dredgarmonroy.com/ | html-custom |
| 15 | `355-eldentistapachuca` | El Dentista Pachuca, Pachuca de Soto, Hidalgo (salud) | https://eldentistapachuca.mx/ | html-custom |
| 16 | `356-eldoradobeach` | El Dorado Beach Club & Restaurant, Puerto Vallarta, Jalisco (restaurante) | https://www.eldoradopvr.com/ | webflow |
| 17 | `357-eldoradohermosillo` | El Dorado Hermosillo, Hermosillo, Sonora (hospedaje) | https://www.eldoradohermosillo.com.mx/ | html-custom |
| 18 | `373-ensenadafishingcharter` | Ensenada Fishing Charter, Ensenada, Baja California (turismo) | https://www.ensenadaexcursionsandtours.com/ | squarespace |
| 19 | `377-equilibratenutriciony` | Equilíbrate | Nutrición y Salud, Apizaco, Tlaxcala (salud) | https://equilibratenutricionysalud.com/ | html-custom |
| 20 | `385-escueladegastronomia` | Escuela de Gastronomía en Monterrey, Monterrey, Nuevo León (educacion) | https://www.cursosgastronomia.com.mx/ | html-custom |
| 21 | `389-esenciayogaspa` | Esencia Yoga Spa, San Miguel de Allende, Guanajuato (fitness) | https://www.esenciayogaspa.com/ | squarespace |
| 22 | `408-ezenciastudiopilates` | Ezencia Studio Pilates, Xalapa, Veracruz (fitness) | https://ezencia.mx/ | wordpress |
| 23 | `455-goldensgym` | Goldens Gym, Cancún, Yucatán (fitness) | https://goldensgym.fit/ | html-custom |
| 24 | `467-greenyogacondesa` | Green Yoga Condesa, Ciudad de México, CDMX (fitness) | https://www.greenyoga.com.mx/ | html-custom |
| 25 | `476-gruponavierode` | Grupo Naviero de la Bahia Puerto Vallarta, Nuevo Vallarta, Nayarit (turismo) | https://gnbvallarta.com/ | html-custom |
| 26 | `482-haciendasotutade` | Hacienda Sotuta de Peón, Cancún, Yucatán (turismo) | https://www.haciendaviva.com/ | html-custom |
| 27 | `517-hotelboutiquespa` | Hotel Boutique & Spa Valle de Guadalupe, Ensenada, Baja California (hospedaje) | https://www.hoteldelvalledeguadalupe.com/ | html-custom |
| 28 | `534-hotelmaela` | Hotel Maela, Oaxaca de Juárez, Oaxaca (hospedaje) | https://www.hotelmaela.com/ | html-custom |
| 29 | `568-indigopilatesand` | Indigo Pilates and Fitness Studio, Cabo San Lucas, BCS, Mexico (fitness) | https://indigopilates.mx/ | html-custom |
| 30 | `610-khemspa` | Khem Spa, Chihuahua, Chihuahua (spa/barbería) | https://khemtierraviva.com/ | html-custom |

**Claves borradas:** 7 clones traían en su HTML claves públicas de Mapbox o de Google Maps del sitio del cliente (209, 264, 269, 357, 482, 517 y 534). Se sustituyeron por `[TOKEN-OMITIDO]` o `[CLAVE-OMITIDA]` en `sitio/` y en `investigacion/original.html` antes del commit, porque GitHub bloquea secretos y el estudio no guarda claves. Es el único cambio a esos archivos; el mapa del clon de esos sitios no carga.

Los datos de la tabla salen del fabricador y pueden estar mal (ciudad, nombre, rubro): confírmalos en el sitio en vivo antes de usarlos. Varios son de una cadena o de un resort grande (por ejemplo, El Dorado o Hacienda Sotuta de Peón): revisa y descarta como `cadena` si aplica.

**Hazlos en orden. No trabajes en ningún otro proyecto.**

### Esta lista se reparte entre varias sesiones

- **Al empezar**, revisa `METODOS.md` y salta los que ya tengan fila "Terminado", "Descartado" o "En curso". Empieza por el primero sin fila.
- **Apartar antes de empezar:** agrega la fila del sitio en `METODOS.md` como "En curso" de inmediato, antes de hacer nada más.
- **Un sitio a la vez, completo:** commit y push al terminar o descartar cada uno, nunca varios juntos.
- Si la sesión se corta con un sitio a medias, deja su fila como "En curso" con nota de hasta dónde llegó.
- Lleva `entregables-nube-9.md` en la raíz y actualízalo después de cada sitio (no al final).
- Si el sitio no publica WhatsApp, usa su teléfono principal como WhatsApp y márcalo como pendiente en `CAMBIOS.md`.
- **Si el clon no trae fotos suficientes** pero el sitio en vivo sí las tiene, haz el método 1.2 en la nube: bájalas a `assets/originales/` (con `fotos-web.mjs` crea las copias `.webp`). Verifica que sean propias (EXIF, C2PA, búsqueda de banco).

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
10. Actualiza `METODOS.md` ("Terminado", "Hecho en la nube.") y `OPORTUNIDADES.md` raíz y `entregables-nube-9.md`.
11. Commit:
    ```
    git add METODOS.md OPORTUNIDADES.md entregables-nube-9.md proyectos/<carpeta>/CAMBIOS.md proyectos/<carpeta>/OPORTUNIDADES.md proyectos/<carpeta>/entregables proyectos/<carpeta>/referencias proyectos/<carpeta>/rediseno proyectos/<carpeta>/qa/reporte-rediseno.json
    git add -f proyectos/<carpeta>/assets/originales proyectos/<carpeta>/rediseno/dist
    git commit -m "<carpeta>: rediseño método 1.1 (<Negocio>, <Ciudad>) [nube]"
    ```
    Nunca `git add .` ni `git add proyectos/<carpeta>` completo. Si git se queja de nombres largos: `git -c core.longpaths=true add ...`.
12. `git pull --rebase origin main && git push origin main`. Si hay conflicto en `METODOS.md` u `OPORTUNIDADES.md`, conserva las líneas de los dos lados.

## Reglas que no se rompen

- Nunca inventar datos del negocio.
- Solo fotos propias del negocio, del clon o de su sitio en vivo (método 1.2). Nada de banco ni IA.
- Sin afirmaciones de salud/seguridad que el negocio no haga.
- No copiar claves, tokens ni API keys a ningún archivo.
- No modificar `sitio/` ni `investigacion/`. No escribir en `datos/fabricador.db`.
- Obligatorio: un H1, WhatsApp prellenado (número real), barra fija móvil, Google Maps enlace, `prefers-reduced-motion`, contraste AA, JSON-LD, title y description reales, sin scripts de terceros.
- **Mapa real:** si el sitio en vivo o el clon tienen un `<iframe>` de Google Maps, el rediseño lleva ese mismo iframe (`mapaEmbed` en `content.ts`).
- **Fotos:** 0 imágenes rotas en el QA, sin huecos grises.

## Resumen del lote

`entregables-nube-9.md` lleva por cada sitio: carpeta, commit, resultado del QA (o motivo del descarte o "Pendiente 1.2"), elemento memorable, prioridad y hallazgo principal.
