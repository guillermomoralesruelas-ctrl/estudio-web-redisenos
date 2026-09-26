# Plan de diseño — 1MR Fitness (método 1.1, 2026-09-26)

Materia prima: el clon del método 3 (`sitio/`, `investigacion/crudo.json`). Hecho con la skill `frontend-design` (dos pasadas).

## Tema, público y trabajo de la página
- **Tema:** gimnasio **24/7** en Hermosillo (Blvd. Paseo Río Sonora). Incluye In Body, plan de alimentación, clases y un Energy Bar con café gratis. El nombre viene de *One More Rep* (redes: @1onemorerep).
- **Público:** gente de Hermosillo con horarios difíciles (turnos nocturnos, madrugadores, fines de semana) y adultos de 55 o más.
- **Trabajo principal:** que elijan una membresía y escriban por WhatsApp para inscribirse.

## Qué falla en el sitio actual (y en el clon)
- Las **9 membresías con precio** están escondidas en una subpágina; el inicio no muestra ni un precio.
- Clases, promoción e instalaciones viven en subpáginas: el inicio no deja decidir.
- La foto principal es de stock (un modelo) y **las fotos reales del gimnasio** (máquinas moradas, logo neón, fachada) salen pequeñas.
- La promesa "24 horas" es solo un texto, sin nada que la haga sentir real.
- El clon solo descargó las imágenes del inicio (faltan las de clases y servicios).

## Color (de la marca)
| Nombre | Hex | Uso |
|---|---|---|
| Tinta | `#181030` | Fondo del hero y del pie (morado casi negro de la marca) |
| Morado | `#4c2c8d` | Superficies, sección de membresías |
| Lima | `#c4d73d` | Solo para acciones y números (botones, precios, el reloj) |
| Lavanda | `#efe9fb` | Secciones claras de respiro |
| Grafito | `#3f4855` | Texto sobre claro |

## Tipografía
- **Orbitron** (la de la marca): solo en números y titulares cortos (reloj, precios, H1).
- **Work Sans** (la de la marca): todo el texto y la interfaz.

## Layout
```
[Header: logo · Membresías Clases Instalaciones Contacto · 662-220-7196 · Inscribirme]
[HERO tinta: foto del atleta en duotono morado | H1 "Gym 24 horas en Hermosillo"
             RELOJ EN VIVO "Son las 2:14 a. m. en Hermosillo. Estamos abiertos."  ← lo memorable
             CTA WhatsApp + Ver membresías]
[INCLUYE (lavanda): 4 beneficios reales a la izquierda | mosaico de fotos reales a la derecha]
[MEMBRESÍAS (morado): Citizen destacada grande + lista de precios agrupada por tipo, cada una con su botón de WhatsApp]
[PROMO: sorteo de viaje para dos con Citizen]
[CLASES: 8 clases con sus días, tal como las publica el gimnasio]
[INSTALACIONES: galería de las 6 fotos reales]
[EQUIPO: la lámina del staff]
[CONTACTO: dirección + mapa, teléfonos, WhatsApp, correo, redes, formas de pago]
[Barra fija móvil: Inscribirme (WhatsApp) | Llamar]
```

## Principios
1. **Lo memorable: el reloj en vivo.** Muestra la hora real de Hermosillo (zona America/Hermosillo) y dice "Estamos abiertos" a cualquier hora, porque es verdad. Convierte el 24/7 en algo que se ve.
2. Los precios se ven desde el inicio. Cada membresía tiene su propio mensaje de WhatsApp prellenado ("Me interesa la membresía Citizen").
3. Las fotos reales del gimnasio van por encima de las de stock.
4. El lima es solo para acciones y números; el morado manda.

## Revisión contra los defaults
- "Fondo casi negro + acento verde ácido" es un default. Aquí lo impone la marca, así que lo rompo con **secciones lavanda y morado**: el tinta queda solo en el hero y el pie, y el lima es escaso.
- **Quité** las tarjetas idénticas para las 9 membresías: Citizen va destacada y las demás en una lista de precios agrupada.
- **No uso** números 01–06 en los servicios (no son una secuencia) ni etiquetas en mayúsculas.
- **Clases:** no invento una tabla por día, porque el sitio dice "Lunes - Miércoles" sin aclarar si es un rango o dos días. Uso el texto tal cual.
- **Sin animaciones decorativas:** el único movimiento es el reloj.
