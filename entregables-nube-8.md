# Entregables de la sesión en la nube, lote 8

Lote de 30 sitios de `INSTRUCCIONES-NUBE-8.md`, trabajados uno por uno. Cada sitio se sube en su propio commit a `main`. Los rediseños terminados llevan su `rediseno/dist/` compilado en el repo (subido con `git add -f`), así que en la PC basta con `git pull` y abrirlos en XAMPP.

**Red de la nube (2026-10-09):** en la sesión del 9 de octubre la nube ya llega a los sitios de los clientes y a sus CDN de fotos (probado con 14 de los 16 sitios sin fotos pendientes). 

**Red de la nube (2026-09-29):** esta sesión no llega a ningún dominio de los clientes del lote ni a sus CDN de fotos (el proxy responde 403 por política). Por eso los sitios cuyo clon no trae fotos quedan como "Pendiente 1.2 (PC)", con el dominio que hay que abrir anotado en su fila. La lista completa de dominios está al final.

| # | Carpeta | Resultado | Commit | QA (escritorio / celular) | Elemento memorable | Prioridad | Hallazgo principal |
|---|---|---|---|---|---|---|---|
| 1 | 27-alcazarinmobiliaria | Terminado (1.2 en la nube, 2026-10-09) | (este commit) | 0 problemas; 5,848 / 9,571 px | "Buscar en el mapa": sus 137 propiedades en el valle de Oaxaca por coordenadas, filtradas por operación, tipo, recámaras y presupuesto, con WhatsApp por propiedad | MEDIA | Listado de 9 páginas sin búsqueda por presupuesto; fichas con datos erróneos |
| 2 | 28-aldocastanedabodas | Terminado (1.2 en la nube, 2026-10-09) | (este commit) | 0 problemas; 5,443 / 9,372 px | "Capítulo a capítulo": los 16 momentos de la boda con su foto, qué cubre cada paquete, meses para la fecha, anticipo y WhatsApp | MEDIA | Dos precios distintos; cifras que no coinciden |
| 3 | 37-alturamaximareal | Terminado (1.2 en la nube, 2026-10-09) | (este commit) | 0 problemas; 7,260 / 10,677 px | "El metro cuadrado, por zona": con su listado de 433 propiedades, qué te alcanza por m² en cada zona de Zapopan y Vallarta, cuántas caben y WhatsApp | ALTA | 22 páginas de listado; textos para buscadores visibles; datos erróneos |
| 4 | 75-azulbacalar | Terminado (1.2 en la nube, 2026-10-09) | (este commit) | 0 problemas; 8,496 / 13,239 px | "¿Quién se encarga de qué?": sus planes Starter y Relax tarea por tarea (Azul Bacalar, tú o no incluido) con WhatsApp del plan | ALTA | "Lorem ipsum" visible; Malena con dos precios; dos WhatsApp |
| 5 | 247-codamusicinstitute | Descartado, `sin-fotos` | bf4d95f3 | — (29 fotos de Unsplash; teléfono y dirección de plantilla) | — | — | — |
| 6 | 345-dremmanuelsanchez | Descartado, `sin-fotos` | ea75e3df | — (imágenes "ChatGPT Image…", solo el logotipo es propio) | — | — | — |
| 7 | 370-encisan | Descartado, `sin-fotos` | (este commit) | — (sus 7 fotos son de banco (iStock), ninguna del consultorio) | — | — | — |
| 8 | 395-estudiodearte | Descartado, `sin-fotos` | abee95fc | — (plantilla de otro negocio, Nor.skin; fotos de banco) | — | — | — |
| 9 | 413-finoasis | Descartado, `sin-fotos` | (este commit) | — (solo su retrato es propio; 12 fotos de banco) | — | — | — |
| 10 | 426-flowbarber | Terminado (1.2 en la nube, 2026-10-09) | (este commit) | 0 problemas; 5,031 / 7,476 px | "Arma tu visita": servicios, niños, día y hora con precio, duración y hora de salida, y reserva en Fresha (sin WhatsApp: su teléfono es de plantilla) | ALTA | Teléfono de plantilla; precios distintos |
| 11 | 430-forter | Terminado (1.2 en la nube, 2026-10-09) | (este commit) | 0 problemas; 6,917 / 10,754 px | "Dibuja tu barda y tu losa": dibujo a escala y lista de material con sus fórmulas, en un solo WhatsApp | BAJA | WhatsApp no escrito; calculadoras separadas |
| 12 | 437-fabricadelentes | Descartado, `sin-fotos` | (este commit) | — (13 fotos de banco o generadas y fotos de catálogo de proveedores; ninguna de sucursales ni laboratorio) | — | — | — |
| 13 | 441-galeriamexicanade | Terminado (1.2 en la nube, 2026-10-09) | (este commit) | 0 problemas; 7,878 / 11,813 px | "Encuentra tu pieza": sus 38 piezas por presupuesto, tipo y existencias, con comprar o preguntar | MEDIA | Imágenes de IA; dos horarios |
| 14 | 446-gemaspahuatulco | Pendiente 1.2 (PC) | eb797130 | — (clon sin fotos; imágenes en `content.app-sources.com`, bloqueado) | — | — | — |
| 15 | 454-goldenscissors | Pendiente 1.2 (PC) | 668bc9ca | — (clon sin fotos; `goldenscissors.com.mx` bloqueado; sus imágenes parecen de IA) | — | — | — |
| 16 | 487-harmoniapilatesreformer | Terminado (1.1 en la nube) | … | 0 problemas; 6,646 / 10,849 px | "Elige tu hora y tu reformer": sus 13 clases de la semana y el estudio visto desde arriba con ocho reformers; VIP y Elite apartan el suyo | ALTA | WhatsApp sin código de país; horario con palomitas grises sin explicar; sin dirección escrita |
| 17 | 491-heartsonfilm | Terminado (1.2 en la nube) | (este commit) | 0 problemas; 7,249 / 10,310 px | "Su boda, en la línea de tiempo": fecha y destino dan los días que faltan, el fin de semana a apartar y cuándo llega su película | MEDIA | Pide un formulario que no existe; imágenes en imgur |
| 18 | 497-hiya | Terminado (1.2 en la nube) | (este commit) | 0 problemas; 4,736 / 5,973 px | "Tu comanda": platos y vinos por copa o botella suman y se dividen entre la mesa, y reserva en OpenTable | ALTA | Tres horarios distintos; logotipo de otro negocio |
| 19 | 510-hostaldela | Descartado, `url-ajena` | (este commit) | — (ficha de stateofmexico.mx, "sitio web no oficial… de reservas de hoteles") | — | — | — |
| 20 | 542-hotelpremierhermosillo | Terminado (1.2 en la nube) | (este commit) | 0 problemas; 6,376 / 10,067 px | "Tarjeta de registro": fechas, habitación, huéspedes y motivo del viaje arman un correo a reservaciones, con sello de la hora de Hermosillo | ALTA | Texto de configuración visible; sin dirección en la página |
| 21 | 545-hotelregis | Terminado (1.2 en la nube) | (este commit) | 0 problemas; 6,140 / 9,395 px | "¿A qué hora llegas?": reloj de 24 h que muestra qué está abierto en el hotel y en Villa Don Nacho; cuenta de la estancia con sus precios | MEDIA | Testimonios de ejemplo; "Reservar Mesa" sin enlace |
| 22 | 570-inglespractico | Descartado, `pocas-fotos` | (este commit) | — (solo 2 fotos propias: fachadas de sus planteles) | — | — | — |
| 23 | 595-joyeriadignum | Descartado, `sin-fotos` | (este commit) | — (portada y piezas con aspecto de IA) | — | — | — |
| 24 | 611-kingstoninstitute | Descartado, `sin-fotos` | (este commit) | — (8 fotos con aspecto de IA o de banco; testimonios con retratos de estudio) | — | — | — |
| 25 | 620-lablancamerida | Terminado (1.2 en la nube) | (este commit) | 0 problemas; 6,491 / 10,846 px | "Tu antojo de hoy": pedido con su menú; de martes a jueves aplica solas sus promociones y dice cuánto ahorras | ALTA | Plantilla en inglés (Londres, París, Michelin); WhatsApp sin número |
| 26 | 623-labovedahotel | Terminado (1.2 en la nube) | (este commit) | 0 problemas; 8,659 / 12,520 px | "¿Cuándo venir?": fiestas de Nochistlán con su próxima fecha, suite, noches, total con IVA y WhatsApp | MEDIA | Redes sin cuenta; WhatsApp sin botón; errores de ortografía |
| 27 | 631-lafortalezaacademia | Terminado (1.2 en la nube) | (este commit) | 0 problemas; 8,084 / 13,143 px | "Tu semana en La Fortaleza": grupo, horarios reales en cuadrícula, aviso de cruces, mensualidad con su tabla y WhatsApp | ALTA | Datos bancarios publicados; fechas vencidas; WhatsApp roto; dos direcciones |
| 28 | 640-lapincoyacafe | Descartado, `sin-contacto` | (este commit) | — (sin teléfono, WhatsApp ni dirección; pocas fotos) | — | — | — |
| 29 | 648-lcpfastridlarrondo | Descartado, `sin-fotos` | (este commit) | — (Google Sites; sus imágenes dan 403) | — | — | — |
| 30 | 653-liccesarsobrado | Terminado (1.1 en la nube) | (este commit) | 0 problemas; 5,849 / 9,861 px | "La supermedición": silueta con ocho puntos de lo que se mide en su consulta; meta y medidas arman el WhatsApp | ALTA | WhatsApp sin el 52 en todos sus botones; íconos de redes que llevan a su propia página |

## Dominios bloqueados para la nube en este lote

El 2026-09-29 la nube no llegaba a estos dominios, por eso sus sitios quedaron como "Pendiente 1.2 (PC)". Desde el 2026-10-09 la nube ya llega a los sitios de los clientes y a sus CDN, así que se pueden hacer en una sesión en la nube o en la PC:

| # | Carpeta | Dominio de las fotos |
|---|---|---|
| 1 | 27-alcazarinmobiliaria | `assets.easybroker.com` |
| 2 | 28-aldocastanedabodas | `assets.zyrosite.com` |
| 3 | 37-alturamaximareal | `assets.easybroker.com` |
| 4 | 75-azulbacalar | `bacalar.com.mx` |
| 7 | 370-encisan | `irp.cdn-website.com` |
| 9 | 413-finoasis | `finoasis.mx` |
| 10 | 426-flowbarber | `flowbarberpdc.com` |
| 11 | 430-forter | `forter.mx` |
| 12 | 437-fabricadelentes | `fabricadelentes.mx` |
| 13 | 441-galeriamexicanade | `images.squarespace-cdn.com` |
| 14 | 446-gemaspahuatulco | `content.app-sources.com` |
| 15 | 454-goldenscissors | `goldenscissors.com.mx` |

## En curso

Ninguno. Las 30 filas del lote tienen resultado; quedan los 12 "Pendiente 1.2 (PC)" de arriba.
