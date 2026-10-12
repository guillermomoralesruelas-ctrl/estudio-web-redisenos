# Instrucciones para Claude Code en la nube (lote 11)

> Este archivo es para sesiones de Claude Code **en la nube**. Solo trabaja los sitios de esta lista. No toques proyectos de otros lotes.

## Antes de empezar

1. `git pull --rebase origin main`
2. Lee completos, en este orden: `CLAUDE.md`, `INSTRUCCIONES-METODO-1.1.md`, `METODOS.md` y `DESCARTADOS.md`.
3. Toma como modelo los rediseños 1.2 hechos en la nube: `proyectos/468-grimaradventures`, `proyectos/600-junglerealtor`, `proyectos/446-gemaspahuatulco` y `proyectos/27-alcazarinmobiliaria`. Antes se usaban los últimos rediseños terminados: `proyectos/433-freewalkoaxaca`, `proyectos/204-cervusbarberia`, `proyectos/399-eventosjubileo`, `proyectos/533-hotelmaculis` y `proyectos/13-academiamusicalrubinstei` (su `entregables/plan-diseno.md`, `CAMBIOS.md`, `OPORTUNIDADES.md`, `rediseno/src/*`, `rediseno/index.html` y `rediseno/fotos-web.mjs`).
4. Instala herramientas una vez: `cd herramientas && npm install`. En la nube, Chromium ya está en `/opt/pw-browsers`; no ejecutes `playwright install`.

## Tu lista: lote 11 (30 sitios)

Lote armado en la nube el 2026-10-12 cuando el lote 10 quedó casi cerrado: los 5 candidatos que sobraron del lote 10 (`257`, `288`, `418`, `548`, `597`); 12 inmobiliarias "construido / funcional" del fabricador cuya URL apunta a una sola ficha de su propio sitio de EasyBroker (se rediseña la inmobiliaria, no la ficha); 8 sitios "complejo" que no son WordPress; y 5 más con dominio propio (`639`, `279`, `654`, `06` y `41`). Los clones (`sitio/`) se hicieron con `herramientas/clonar.mjs` sobre una copia temporal de `fabricador.db`: **la base real no se tocó**.

Igual que en el lote 9, solo traen `investigacion/original.html`: lee textos y contacto del sitio en vivo y baja de ahí sus fotos propias (método 1.2 en la nube).

| # | Carpeta | Negocio | Sitio original | Plataforma |
|---|---|---|---|---|
| 1 | `257-coppercanyontours` | Copper Canyon Tours Mexico, Creel, Chihuahua (turismo) | https://coppercanyon.tours/en | html-custom |
| 2 | `288-daryakrylovafotografia` | Darya Krylova Fotografía de Producto, Guadalajara, Jalisco (eventos) | https://daryakrylova.com/ | html-custom |
| 3 | `418-floraspa` | Flora Spa, Tulum, Q.R. (spa/barbería) | https://www.floraspa.com.mx/es | html-custom |
| 4 | `548-hotelsuiteskino` | Hotel Suites Kino, Hermosillo, Sonora (hospedaje) | https://www.hotelsuiteskino.com/es/index.html | html-custom |
| 5 | `597-joypack` | Joypack, Puerto Vallarta, Jalisco (turismo) | https://joypack.com.mx/experiencia/yate-de-lujo-y-snorkel/ | wordpress |
| 6 | `21-agenciainmobiliariaproin` | Agencia inmobiliaria Proinmex, Veracruz, Veracruz (inmobiliaria) | https://www.indavarealestate.com/property/venta-departamentos-exclusivos-con-salida-a-playa | html-custom |
| 7 | `155-casaazulgran` | Casa Azul: Gran residencia colonial en García Ginerés, Mérida, Yucatán (inmobiliaria) | https://www.thorealestate.com/property/casa-azul-gran-residencia-colonial-en-garcia-gineres | html-custom |
| 8 | `158-casacolonialen` | Casa Colonial en Barrio Guadalupe, San Francisco de Campeche, Campeche (inmobiliaria) | https://www.estrategasinmobiliarios.com/property/en-venta-casa-colonial-en-barrio-guadalupe-guadalupe-casa | html-custom |
| 9 | `159-casacolonialrestaurada` | Casa Colonial Restaurada y Amueblada en Santiago, Mérida, Yucatán (inmobiliaria) | https://www.vivayucataninm.com/property/casa-colonial-restaurada-y-amueblada-en-santiago-en-venta-centro-de-merida | html-custom |
| 10 | `160-casaconsuelo` | Casa Consuelo, La Paz, Baja California Sur (inmobiliaria) | https://www.flexbroker.com.mx/property/casa-en-venta-en-lomas-del-centenario-con-vista-a-la-bahia-de-la-paz | html-custom |
| 11 | `166-casaenrenta` | Casa en Renta Frente la Laguna, Bacalar, Quintana Roo (inmobiliaria) | https://www.firmainmobiliaria.com/property/casa-en-renta-frente-la-laguna | html-custom |
| 12 | `167-casaenventa` | Casa en Venta en Nuevo Vallarta de 4 recámaras, frente al Campo de Golf, Nuevo Vallarta, Bahía de Banderas, Nayarit (inmobiliaria) | https://www.punto-once.com/property/casa-en-venta-en-nuevo-vallarta-de-4-recamaras-frente-al-campo-de-golfo-en-rivi | html-custom |
| 13 | `180-casaventaboca` | CASA VENTA BOCA DEL RIO VERACRUZ, Boca del Río, Veracruz (inmobiliaria) | https://www.luxeinmobiliaria.mx/property/casa-venta-boca-del-rio-veracruz-26b4eef8-76f8-4a87-ab62-2eb1b695df98 | html-custom |
| 14 | `304-departamentoenventa` | Departamento en venta en Troncones Emiliano Zapata Guerrero, Troncones, Guerrero (inmobiliaria) | https://www.grupoemco.com.mx/property/departamento-en-venta-en-troncones-zihuatanejo-ixtapa-departamento | html-custom |
| 15 | `400-exclusivacasaen` | Exclusiva Casa en Venta en La Paz BCS | Vista al Mar y a Pasos de la Playa, La Paz, Baja California Sur (inmobiliaria) | https://www.amistadrealestates.com/property/propiedad-con-vista-al-mar-en-el-comitan-la-paz-b-c-s-mexico | html-custom |
| 16 | `401-exclusivosdepartamentosd` | Exclusivos Departamentos de Lujo sobre Calzada del Valle en San Pedro, San Pedro Garza García, Nuevo León (inmobiliaria) | https://www.gipgrupoinmobiliariodelpacifico.com/property/exclusivos-departamentos-de-lujo-sobre-calzada-del-valle-en-san-pedro | html-custom |
| 17 | `564-ikal30` | Ikal 30, Nuevo Vallarta, Nayarit (inmobiliaria) | https://www.lulahomes.com.mx/property/ikal-30 | html-custom |
| 18 | `170-casaliza` | Casa Liza, San Miguel de Allende, Guanajuato (hospedaje) | https://www.hotelcasaliza.com/ | html-custom |
| 19 | `177-casasanmiguel` | Casa San Miguel Spa, Zacatlán, Puebla (spa/barbería) | https://www.casasanmiguelhotel.com/spa | html-custom |
| 20 | `191-centrodelbosque` | Centro del Bosque, Zapopan, Jalisco (salud) | https://www.centrodelbosque.mx/ | html-custom |
| 21 | `255-copaltulumhotel` | Copal Tulum Hotel, Tulum, Quintana Roo (hospedaje) | https://www.copaltulumhotel.com/ | html-custom |
| 22 | `317-divineesteticacanina` | Divine Estética Canina, Monterrey, Nuevo León (mascotas) | https://divineesteticacanina.com/ | html-custom |
| 23 | `341-drarosalindasepulveda` | Dra. Rosalinda Sepúlveda García, Monterrey, Nuevo León (salud) | https://www.drarosalindasepulveda.com/ | html-custom |
| 24 | `375-entrevallehotelboutique` | Entrevalle Hotel Boutique, Valle de Guadalupe, Baja California (hospedaje) | https://www.hotelentrevalle.com/en | html-custom |
| 25 | `625-lacasadel` | La Casa del Agave Mexicano, Mazatlán, Sinaloa (retail) | https://aylluclub.com/products | html-custom |
| 26 | `639-laotraespana` | La Otra España, San Luis Potosí, S.L.P. (restaurante) | https://la-otra-espana.vercel.app/ | html-custom |
| 27 | `279-cuetzpallintemazcal` | Cuetzpallin Temazcal, Cuernavaca, Morelos (spa/barbería) | https://cuetzpallin.es.tl/ | html-custom |
| 28 | `654-licjazmincortes` | Lic. Jazmín Cortés Garza, San Pedro Garza García, Nuevo León (salud) | https://www.psicologasanpedro.com/ | html-custom |
| 29 | `06-1828brasay` | 1828 Brasa y Carbón, Aguascalientes, Aguascalientes (restaurante) | https://1828brasaycarbon.mx/ | wordpress |
| 30 | `41-amornegrocafe` | Amor Negro Café, San Cristóbal de Las Casas, Chiapas (restaurante) | https://amornegro.com/ | wordpress |

**Claves borradas:** los clones de `170-casaliza`, `177-casasanmiguel`, `191-centrodelbosque`, `255-copaltulumhotel`, `341-drarosalindasepulveda` y `375-entrevallehotelboutique` traían claves públicas de mapas del sitio del cliente; se sustituyeron por `[CLAVE-OMITIDA]` / `[TOKEN-OMITIDO]` en `sitio/` y en `investigacion/original.html` antes del commit. Es el único cambio a esos archivos.

**Sin clon:** `160-casaconsuelo` (flexbroker.com.mx) respondió HTTP 503 al clonar; revisa si el sitio está activo y, si no, descártalo como `sin-contacto`.

Los datos de la tabla salen del fabricador y pueden estar mal (ciudad, nombre, rubro): confírmalos en el sitio en vivo antes de usarlos. Varios pueden ser de una cadena, de un hotel grande o tener un sitio reciente: revisa y descarta como `cadena` si aplica.

**Hazlos en orden. No trabajes en ningún otro proyecto.**

### Esta lista se reparte entre varias sesiones

- **Al empezar**, revisa `METODOS.md` y salta los que ya tengan fila "Terminado", "Descartado" o "En curso". Empieza por el primero sin fila.
- **Apartar antes de empezar:** agrega la fila del sitio en `METODOS.md` como "En curso" de inmediato, antes de hacer nada más.
- **Un sitio a la vez, completo:** commit y push al terminar o descartar cada uno, nunca varios juntos.
- Si la sesión se corta con un sitio a medias, deja su fila como "En curso" con nota de hasta dónde llegó.
- Lleva `entregables-nube-11.md` en la raíz y actualízalo después de cada sitio (no al final).
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
10. Actualiza `METODOS.md` ("Terminado", "Hecho en la nube.") y `OPORTUNIDADES.md` raíz y `entregables-nube-11.md`.
11. Commit:
    ```
    git add METODOS.md OPORTUNIDADES.md entregables-nube-11.md proyectos/<carpeta>/CAMBIOS.md proyectos/<carpeta>/OPORTUNIDADES.md proyectos/<carpeta>/entregables proyectos/<carpeta>/referencias proyectos/<carpeta>/rediseno proyectos/<carpeta>/qa/reporte-rediseno.json
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

`entregables-nube-11.md` lleva por cada sitio: carpeta, commit, resultado del QA (o motivo del descarte o "Pendiente 1.2"), elemento memorable, prioridad y hallazgo principal.
