# Instrucciones para las sesiones de la PC (lote PC-1)

> Este archivo es para las sesiones de Claude Code que corren **en la PC de Guillermo** (la carpeta `C:\xampp\htdocs\project-1-25092026`). Al mismo tiempo, la nube trabaja en **otra** lista (lote 4, en `INSTRUCCIONES-NUBE.md`): no toques esos sitios.
>
> Esta lista la puede hacer una sesión o varias, al mismo tiempo o una después de otra. Las reglas de abajo existen para que no se pisen.

## Antes de empezar

1. Lee completos, en este orden: `CLAUDE.md`, `INSTRUCCIONES-METODO-1.1.md`, `METODOS.md` y `DESCARTADOS.md`.
2. Toma como modelo los últimos rediseños terminados en la PC: `proyectos/624-lacanteraeventos`, `proyectos/421-florerializette`, `proyectos/436-fusiontours` y `proyectos/540-hotelpomelo` (método 1.2).
3. El panel (http://localhost:4000) sirve para revisar el resultado en la pestaña Galería. **No modifiques `panel/` ni `datos/verificaciones.json`.**

## La lista: lote PC-1 (20 sitios)

| # | Carpeta | Negocio | Sitio original | Fotos en el clon |
|---|---|---|---|---|
| 1 | `501-holboxtravel` | Holbox Travel, Holbox, Quintana Roo (turismo) | https://www.holboxtravel.com.mx/ | 19 |
| 2 | `315-discovervallarta` | Discover Vallarta, Puerto Vallarta, Jalisco (turismo) | https://www.discoverpvr.com/ | 14 |
| 3 | `435-fultonhotel` | Fulton Hotel, Guadalajara, Jalisco (hospedaje) | https://fultonhotel.mx/ | 13 |
| 4 | `643-lapurificadora` | La Purificadora, Puebla, Puebla (gastronomia) | https://www.lapurificadora.com/ | 11 |
| 5 | `179-casatunkul` | Casa Tunkul, Mérida, Yucatán (hospedaje) | https://www.tunkul.mx/ | 9 |
| 6 | `604-kasumiflowersatelier` | Kasumi Flowers Atelier, Oaxaca de Juárez, Oaxaca (retail) | https://www.kasumiflowers.com/ | 10 |
| 7 | `314-dipazinmobiliaria` | DIPAZ Inmobiliaria, La Paz, Baja California Sur (inmuebles) | https://www.dipaz.com.mx/ | 12 |
| 8 | `443-galospilates` | Galo's Pilates Studio, Oaxaca de Juárez, Oaxaca (fitness) | https://galostudios.com/ | 16 |
| 9 | `410-fc4boxinggym` | FC4 Boxing Gym, Ciudad de México, CDMX (fitness) | https://fc4boxinggym.com/ | 13 |
| 10 | `229-clinicadela` | Clínica de la CNE, Mérida, Yucatán (estetica) | https://clinicadelacne.com.mx/ | 15 |
| 11 | `445-gcbeautybarber` | GC Beauty Barber, Cabo San Lucas, Baja California Sur (spa) | https://gcbeautybarber.com.mx/ | 16 |
| 12 | `387-escuelademusica` | Escuela de música Lukin Aguascalientes, Aguascalientes, Aguascalientes (educacion) | https://www.lukinmusic.com/ | 14 |
| 13 | `363-elpatronbarberia` | El Patrón Barbería, Ciudad de México, CDMX (spa) | https://www.elpatron.com.mx/ | 11 |
| 14 | `613-kitesurfmexico` | Kitesurf México, Cancún, Quintana Roo (turismo) | https://www.kitesurfmexico.com/ | 16 |
| 15 | `600-junglerealtor` | Jungle Realtor, Bacalar, Quintana Roo (inmuebles) | https://junglerealtor.com/ | 16 |
| 16 | `280-cumbresdemita` | Cumbres de Mita, Sayulita, Nayarit (inmuebles) | https://www.cumbresdemita.com/ | 12 |
| 17 | `544-hotelrecreoclandestino` | Hotel Recreo - Clandestino Hotel, San Miguel de Allende, Guanajuato (hospedaje) | https://clandestinohotel.com/ | 15 |
| 18 | `649-lebenarquitectos` | LEBEN ARQUITECTOS, Zapopan, Jalisco (servicios) | https://lebenarq.com/ | 10 |
| 19 | `143-cancuncatamaranes` | Cancun Catamaranes, Cancún, Quintana Roo (turismo) | https://cancuncatamarans.mx/ | 13 |
| 20 | `250-colegiobanting` | Colegio Banting, Ciudad de México, CDMX (educacion) | https://www.colegiobanting.edu.mx/ | 14 |

Hazlos en orden. Los que tienen pocas fotos en el clon pueden ir por el **método 1.2** (recuperar las fotos del sitio en vivo), que solo se hace en la PC.

## Cómo repartir la lista entre sesiones

Todas las sesiones de la PC trabajan en la **misma carpeta**, así que se ven los cambios de las otras al instante.

- **Apartar el sitio antes de empezar.** Vuelve a leer `METODOS.md` y toma el primer sitio de la lista que no tenga fila. Agrega su fila como "En curso" (con la hora) de inmediato, antes de hacer cualquier otra cosa. Si ya tiene fila "En curso", "Terminado" o "Descartado", sáltalo: otra sesión lo tiene.
- **Un sitio a la vez, completo:** termina o descarta el sitio, haz su commit y después toma el siguiente.
- **Commit solo con las rutas de tu sitio** (más `METODOS.md`, `OPORTUNIDADES.md` y `DESCARTADOS.md`). Nunca `git add .` ni `git add proyectos/<carpeta>` completo: el `sitio/` de algunos tiene nombres demasiado largos para Windows y hace fallar el commit. Usa `proyectos/<carpeta>/rediseno`, `qa`, `entregables`, `referencias`, `CAMBIOS.md` y `OPORTUNIDADES.md`.
- **Nunca uses `git stash`, `git reset` ni `git checkout -- .`**: borrarían el trabajo sin commit de la otra sesión.
- Antes de editar `METODOS.md`, `OPORTUNIDADES.md` o `DESCARTADOS.md`, vuelve a leerlos y cambia solo tu línea.
- Si una sesión se corta con un sitio a medias, deja su fila en "En curso" con una nota de hasta dónde llegó. La siguiente sesión que lo encuentre así (sin avance reciente) puede retomarlo.

## Cómo hacer cada sitio

Sigue el proceso de `INSTRUCCIONES-METODO-1.1.md` (o el de 1.2 para recuperar fotos). Los mismos criterios de descarte que la nube: menos de 3 fotos propias usables, sin WhatsApp, teléfono ni ubicación, la URL no es del negocio, o es una cadena grande. El descarte va a `METODOS.md` y a `DESCARTADOS.md` con su clave.

Además de lo obligatorio (un H1, WhatsApp prellenado con el número real, barra fija en el celular, JSON-LD, contraste AA, `prefers-reduced-motion`):

- **Mapa real:** si el original tiene un mapa de Google, el rediseño lleva ese `<iframe>` embebido (`mapaEmbed` en `content.ts`), como en `proyectos/624-lacanteraeventos`.
- **Fotos:** en las capturas del QA todas las fotos deben cargar, sin huecos.
- **Verificar en XAMPP:** `node --no-warnings herramientas/verificar-xampp.mjs <carpeta>` debe dar `ok`; si no, el sitio no aparece como aprobado en la Galería.

## Reglas que no se rompen

- Nunca inventar datos del negocio: precios, horarios, teléfonos, reseñas, premios ni certificaciones.
- Sin afirmaciones de salud ni de seguridad que el negocio no haga (nada de "garantizado", "sin dolor", "sin riesgo" ni antes/después inventados).
- No modificar `sitio/` ni `investigacion/`, y no escribir en `datos/fabricador.db`.
- No copiar claves, tokens ni API keys a ningún archivo.

## Al terminar cada sitio

Agrega una línea en `entregables-pc-1.md` (raíz) con: carpeta, commit, resultado del QA o motivo del descarte, elemento memorable y prioridad. Cuando haya varios listos, súbelos a GitHub: `git pull --rebase origin main` y `git push origin main`.
