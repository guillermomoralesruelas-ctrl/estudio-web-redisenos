# Hafersons Inn Hotel & Suites: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://hafersonsinn.mx/ (plataforma Rotamundos con motor de reservas)
**Materia prima:** textos en `investigacion/crudo.json`. El clon no traía fotos; se bajaron de `rotamundos-assets.b-cdn.net` las 11 fotos reales distintas (fachada, recepción, lobby, restaurante, desayuno y habitaciones) y el logotipo a `assets/originales/`. El clon (`sitio/`) no se tocó.
**Rubro:** hotel en Av. Ejército Mexicano 1435, Loma del Gallo, Ciudad Madero, Tamaulipas, en la zona comercial de Tampico y Madero. Alberca, gimnasio, estacionamiento, centro de negocios 24 h, restaurante y cinco salones.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: recursos fallidos (fotos y motor en el CDN de Rotamundos).

## Qué tiene que lograr el sitio
1. Ubicar el hotel (zona comercial, central de autobuses, Altama).
2. Saber a qué hora hay desayuno, restaurante y centro de negocios.
3. Reservar por WhatsApp o teléfono.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| tinta | `#1d2418` | Texto y sección oscura |
| hueso | `#f8f6ef` | Fondo |
| oliva | `#3f6b2a` | Botones (el verde de su trébol) |
| gris | `#5b6157` | Texto secundario |
| salvia | `#eef0e2` | Fondo alterno |
| girasol | `#f3c73b` | Foco sobre oscuro (el amarillo de su fachada) |

Contrastes: tinta/hueso 14.74, blanco/oliva 6.27, oliva/hueso 5.80, gris/hueso 5.90, oliva/salvia 5.44, girasol/tinta 9.90.
Fuentes: Lora 600 (títulos) y Source Sans 3 400/600 (texto).

## Elemento memorable (uno solo)
**"Un día en el hotel"**: una línea de 0:00 a 24:00 con una barra para el desayuno, el restaurante y el centro de negocios. Un selector cambia entre lunes a viernes (desayuno de 7:00 a 10:30) y sábado y domingo (de 7:00 a 11:00). Debajo, las fotos del desayuno, el restaurante y la recepción. No se ha usado antes en el estudio.

## Secciones
1. Portada partida con la fachada: H1 "Hotel en Ciudad Madero sobre Av. Ejército Mexicano".
2. Un día en el hotel.
3. Habitaciones estándar y Junior Suites.
4. Cinco salones para tu evento.
5. Reserva directo con el hotel.

## Revisión contra lo genérico (segunda pasada)
- Nada de playa de banco: Madero tiene playa, pero el hotel vende ubicación comercial y servicios; se usan sus fotos.
- Sin tarifas inventadas (su motor muestra "USD 0"); se pide cotización.
- Sin "garantizamos el éxito de tu evento" ni "máximo confort".
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02 y sin puntos medios como separadores.
- Sin animaciones salvo el cambio de las barras (CSS, respeta `prefers-reduced-motion`).
