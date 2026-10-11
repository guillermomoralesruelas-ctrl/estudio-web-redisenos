# Instrucciones para Claude Code en la nube (lote 10)

> Este archivo es para sesiones de Claude Code **en la nube**. Solo trabaja los sitios de esta lista. No toques proyectos de otros lotes.

## Antes de empezar

1. `git pull --rebase origin main`
2. Lee completos, en este orden: `CLAUDE.md`, `INSTRUCCIONES-METODO-1.1.md`, `METODOS.md` y `DESCARTADOS.md`.
3. Toma como modelo los rediseños 1.2 hechos en la nube: `proyectos/468-grimaradventures`, `proyectos/600-junglerealtor`, `proyectos/446-gemaspahuatulco` y `proyectos/27-alcazarinmobiliaria`. Antes se usaban los últimos rediseños terminados: `proyectos/433-freewalkoaxaca`, `proyectos/204-cervusbarberia`, `proyectos/399-eventosjubileo`, `proyectos/533-hotelmaculis` y `proyectos/13-academiamusicalrubinstei` (su `entregables/plan-diseno.md`, `CAMBIOS.md`, `OPORTUNIDADES.md`, `rediseno/src/*`, `rediseno/index.html` y `rediseno/fotos-web.mjs`).
4. Instala herramientas una vez: `cd herramientas && npm install`. En la nube, Chromium ya está en `/opt/pw-browsers`; no ejecutes `playwright install`.

## Tu lista: lote 10 (30 sitios)

Lote armado en la nube el 2026-10-11 con los candidatos que sobraron al armar el lote 9: sitios "construido / funcional" del fabricador sin carpeta y con dominio propio del negocio. Los clones (`sitio/`) se hicieron con `herramientas/clonar.mjs` sobre una copia temporal de `fabricador.db`: **la base real no se tocó**. `300-dentalstudiodra` se cambió por `376-equayogastudio` porque su sitio responde 403 a cualquier descarga.

Igual que en el lote 9, solo traen `investigacion/original.html`: lee textos y contacto del sitio en vivo y baja de ahí sus fotos propias (método 1.2 en la nube).

| # | Carpeta | Negocio | Sitio original | Plataforma |
|---|---|---|---|---|
| 1 | `532-hotelklimt` | Hotel Klimt, Xalapa, Veracruz (hospedaje) | https://hotelklimtxalapa.com/ | wordpress |
| 2 | `563-igcapital` | IG Capital, El Marqués, Querétaro (inmobiliaria) | https://www.igcapitalqueretaro.com/ | html-custom |
| 3 | `488-hausrealestate` | Haus Real Estate, Bacalar, Quintana Roo (inmobiliaria) | https://www.hausrealestate.com.mx/ | html-custom |
| 4 | `576-innovacioninmobiliaria` | Innovación Inmobiliaria, Manzanillo, Colima (inmobiliaria) | https://www.innovacioninmo.com/ | html-custom |
| 5 | `464-greathomesrs` | Great Homes RS, Ciudad de México, CDMX (inmobiliaria) | https://www.greathomes.mx/ | html-custom |
| 6 | `572-inmobiliariaconstructora` | INMOBILIARIA & CONSTRUCTORA CDG BUILDINGS, Campeche, Campeche (inmobiliaria) | https://www.inmobiliariacdg.com/ | html-custom |
| 7 | `573-inmobiliariafeyte` | Inmobiliaria Feyte, Manzanillo, Colima (inmobiliaria) | https://www.inmobiliariafeyte.com/ | html-custom |
| 8 | `478-guiacasasy` | Guia Casas y Terrenos, San Francisco de Campeche, Campeche (inmobiliaria) | https://www.guiacasasyterrenos.mx/ | html-custom |
| 9 | `474-grupoinmobiliarioelite` | Grupo Inmobiliario Elite, San Miguel de Allende, Guanajuato (inmobiliaria) | https://www.grupoinmobiliarioelite.com/ | wordpress |
| 10 | `450-globalkeyreal` | Global Key Real Estate, Zapopan, Jalisco (inmobiliaria) | https://www.globalkeyrealestate.com/ | html-custom |
| 11 | `42-ampicolimaclubsantiago` | Ampicolima - Club Santiago, Manzanillo, Colima (inmobiliaria) | https://www.ampicolima.com.mx/ | html-custom |
| 12 | `475-grupoinsapropiedades` | Grupo Insa Propiedades, Ensenada, Baja California (inmobiliaria) | https://www.grupoinsapropiedades.org/ | html-custom |
| 13 | `152-carsainmobiliaria` | CARSA Inmobiliaria, Loreto, Baja California Sur (inmobiliaria) | https://www.carsainmobiliaria.com/ | html-custom |
| 14 | `523-hotelcelayamexico` | Hotel Celaya – México Plaza, Celaya, Guanajuato (hospedaje) | https://mexicoplaza.com.mx/ | wordpress |
| 15 | `618-lab` | LAB, San José del Cabo, Baja California Sur (restaurante) | http://lab-baja.mx/ | squarespace |
| 16 | `473-grupofractal` | Grupo Fractal, Monterrey, Nuevo León (inmobiliaria) | https://www.grupofractal.mx/ | html-custom |
| 17 | `457-gotransferscancun` | Go Transfers - Cancun Airport Transportation, Cancún, Quintana Roo (turismo) | https://cancunsairporttransportation.com/ | html-custom |
| 18 | `348-eduardodavalosfotografia` | Eduardo Davalos Fotografía, Guadalajara, Jalisco (eventos) | https://eduardodavalosfotografia.com/ | html-custom |
| 19 | `415-fit` | Fit+, Chihuahua, Chihuahua (fitness) | https://www.fitmas.com/ | wix |
| 20 | `556-huatulcowellnesssanctuar` | Huatulco Wellness Sanctuary | Natoorales, Huatulco, Oaxaca (spa/barbería) | https://natoorales.com/ | wordpress |
| 21 | `587-ixiimchableyucatan` | Ixi’im – Chablé Yucatán, Mérida, Yucatán (restaurante) | https://ixiimrestaurant.com/ | wordpress |
| 22 | `470-grupobeardman` | Grupo Beardman, Ciudad de México, CDMX (spa/barbería) | https://beardman.mx/ | html-custom |
| 23 | `376-equayogastudio` | Equa Yoga Studio, Veracruz, México (fitness) | https://equayogastudio.mx/ | html-custom |
| 24 | `598-jrtransporteejecutivo` | JR Transporte Ejecutivo, Ciudad de México, CDMX (turismo) | https://jrtransporteejecutivo.com/ | html-custom |
| 25 | `479-gymvjlmazatlan` | Gym VJL Mazatlán, Mazatlán, Sinaloa (fitness) | https://gymvjl.com/ | html-custom |
| 26 | `644-larefineriabarber` | La Refinería Barber Shop, San Luis Potosí, S.L.P (spa/barbería) | https://larefineriabarber.com/ | html-custom |
| 27 | `622-labvida` | LabVida, San Juan del Río, Querétaro (salud) | https://labvidaqro.com/ | wordpress |
| 28 | `525-hotelesboutiquecampeche` | Hoteles Boutique Campeche (Las Tres Casas), Campeche, Campeche (hospedaje) | https://hotelescampeche.com/ | html-custom |
| 29 | `650-leduo` | LeDuo, Ciudad de México, CDMX (restaurante) | https://www.leduo.mx/ | html-custom |
| 30 | `202-centrouniversitarioanglo` | Centro Universitario Anglotorreón, Torreón, Coahuila (educacion) | https://institutoanglotorreon.edu.mx/ | html-custom |

**Claves borradas:** el clon de `644-larefineriabarber` traía una clave pública de Google Maps del sitio del cliente; se sustituyó por `[CLAVE-OMITIDA]` en `sitio/` y en `investigacion/original.html` antes del commit. Es el único cambio a esos archivos.

Quedan sin lote, del mismo grupo de candidatos: `257-coppercanyontours`, `288-daryakrylovafotografia`, `418-floraspa`, `548-hotelsuiteskino` y `597-joypack`.

Los datos de la tabla salen del fabricador y pueden estar mal (ciudad, nombre, rubro): confírmalos en el sitio en vivo antes de usarlos. Varios son de una cadena o de un resort grande (por ejemplo, Chablé o Grupo Beardman): revisa y descarta como `cadena` si aplica.

**Hazlos en orden. No trabajes en ningún otro proyecto.**

### Esta lista se reparte entre varias sesiones

- **Al empezar**, revisa `METODOS.md` y salta los que ya tengan fila "Terminado", "Descartado" o "En curso". Empieza por el primero sin fila.
- **Apartar antes de empezar:** agrega la fila del sitio en `METODOS.md` como "En curso" de inmediato, antes de hacer nada más.
- **Un sitio a la vez, completo:** commit y push al terminar o descartar cada uno, nunca varios juntos.
- Si la sesión se corta con un sitio a medias, deja su fila como "En curso" con nota de hasta dónde llegó.
- Lleva `entregables-nube-10.md` en la raíz y actualízalo después de cada sitio (no al final).
- Si el sitio no publica WhatsApp, usa su teléfono principal como WhatsApp y márcalo como pendiente en `CAMBIOS.md`.
- **Si el clon no trae fotos suficientes** pero el sitio en vivo sí las tiene, haz el método 1.2 en la nube: bájalas a `assets/originales/` (con `fotos-web.mjs` crea las copias `.webp`). Verifica que sean propias (EXIF, C2PA, búsqueda de banco).

### No toques el panel

**No modifiques nada dentro de `panel/` ni `datos/verificaciones.json`.**

## Elementos memorables ya usados (no repetir)

Revisa la columna "Elemento memorable" de `METODOS.md` antes de cada sitio. Del lote 9: "¿Cuántas noches te quedas?" (El Dorado Hermosillo), efectivo o tarjeta en todos los precios (Esencia Yoga Spa), "El Anillo de los Cenotes" (Sotuta de Peón), "¿Cuántos vienen?" con 17 habitaciones (Hotel Boutique Valle de Guadalupe), regla de distancias "Oaxaca a la medida de tus pasos" (Hotel Maela). Otros: teclado de piano interactivo (Academia Rubinstein), carril por plan de membresía (Arena Hybrid), "¿Qué incluye tu corte?" con botones (Barón Barbershop), "¿Cuánto tiempo tienes?" con minutos (Cervus), "¿Desde dónde empiezas?" con pizarrón (Cinco dos Cinco), "Arma tu escapada" con burbuja de WhatsApp (Hotel Maculís), "¿Vienes solo o en pareja?" con barra de duración (Dolcebella Spa), "Arma tu evento" con salón según tipo e invitados (Eventos Jubileo), "¿Qué quieres entrenar?" con fichas de sucursal (Gimnasio Befit), "Un día en el hotel" con línea de 24 horas (Hafersons Inn), "¿Qué te trae a consulta?" con motivos (Dr. Hugo Sánchez).

## Cómo hacer cada sitio (método 1.1)

1. **Revisa las fotos y el contacto primero.** Descártalo si: tiene menos de 3 fotos propias del negocio con calidad usable; no hay WhatsApp, teléfono ni ubicación; la URL no es del negocio; o es una cadena grande. Agrega su fila en `METODOS.md` como "Descartado" y en `DESCARTADOS.md` con la clave (`sin-fotos`, `sin-contacto`, `url-ajena`, `cadena`, `pocas-fotos`, `sitio-reciente`), haz el commit y pasa al siguiente. Las fotos de Google Maps, de banco, generadas con IA (revisa C2PA) o de otro negocio no cuentan.
2. `node herramientas/nuevo-rediseno.mjs <carpeta>` y luego `cd proyectos/<carpeta>/rediseno && npm install`.
3. `node herramientas/qa-rediseno.mjs <carpeta>` para diagnosticar el clon.
4. Crea `rediseno/fotos-web.mjs`: copias `.webp` de las fotos que uses, en `../assets/web` (`publicDir` de `vite.config.ts`).
5. Escribe `entregables/plan-diseno.md` con **un** elemento memorable único, basado en datos reales del negocio.
6. `npx tsc --noEmit && npm run build`.
7. QA: `node herramientas/qa-rediseno.mjs <carpeta>` — 0 problemas. Corrige y vuelve a compilar si hay fallos.
8. `node herramientas/guardar-capturas.mjs <carpeta>`.
9. Completa `CAMBIOS.md` y `OPORTUNIDADES.md` del proyecto.
10. Actualiza `METODOS.md` ("Terminado", "Hecho en la nube.") y `OPORTUNIDADES.md` raíz y `entregables-nube-10.md`.
11. Commit:
    ```
    git add METODOS.md OPORTUNIDADES.md entregables-nube-10.md proyectos/<carpeta>/CAMBIOS.md proyectos/<carpeta>/OPORTUNIDADES.md proyectos/<carpeta>/entregables proyectos/<carpeta>/referencias proyectos/<carpeta>/rediseno proyectos/<carpeta>/qa/reporte-rediseno.json
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

`entregables-nube-10.md` lleva por cada sitio: carpeta, commit, resultado del QA (o motivo del descarte o "Pendiente 1.2"), elemento memorable, prioridad y hallazgo principal.
