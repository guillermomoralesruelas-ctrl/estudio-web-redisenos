# Entregables de la sesión en la nube, lote 8

Lote de 30 sitios de `INSTRUCCIONES-NUBE-8.md`, trabajados uno por uno. Cada sitio se sube en su propio commit a `main`. Los rediseños terminados llevan su `rediseno/dist/` compilado en el repo (subido con `git add -f`), así que en la PC basta con `git pull` y abrirlos en XAMPP.

**Red de la nube (2026-10-09):** en la sesión del 9 de octubre la nube ya llega a los sitios de los clientes y a sus CDN de fotos (probado con 14 de los 16 sitios sin fotos pendientes). 

**Red de la nube (2026-09-29):** esta sesión no llega a ningún dominio de los clientes del lote ni a sus CDN de fotos (el proxy responde 403 por política). Por eso los sitios cuyo clon no trae fotos quedan como "Pendiente 1.2 (PC)", con el dominio que hay que abrir anotado en su fila. La lista completa de dominios está al final.

| # | Carpeta | Resultado | Commit | QA (escritorio / celular) | Elemento memorable | Prioridad | Hallazgo principal |
|---|---|---|---|---|---|---|---|
| 1 | 27-alcazarinmobiliaria | Pendiente 1.2 (PC) | 76301d90 | — (clon sin fotos; fotos en `assets.easybroker.com`, bloqueado) | — | — | — |
| 2 | 28-aldocastanedabodas | Pendiente 1.2 (PC) | 468feca4 | — (clon sin fotos; portafolio en `assets.zyrosite.com`, bloqueado) | — | — | — |
| 3 | 37-alturamaximareal | Pendiente 1.2 (PC) | 76e12fb7 | — (clon sin fotos; fotos en `assets.easybroker.com`, bloqueado) | — | — | — |
| 4 | 75-azulbacalar | Pendiente 1.2 (PC) | 647fc31a | — (clon sin fotos; `bacalar.com.mx` sí es del negocio; revisar en la PC si hay 3 fotos propias) | — | — | — |
| 5 | 247-codamusicinstitute | Descartado, `sin-fotos` | bf4d95f3 | — (29 fotos de Unsplash; teléfono y dirección de plantilla) | — | — | — |
| 6 | 345-dremmanuelsanchez | Descartado, `sin-fotos` | ea75e3df | — (imágenes "ChatGPT Image…", solo el logotipo es propio) | — | — | — |
| 7 | 370-encisan | Pendiente 1.2 (PC) | d046479b | — (clon sin fotos; fotos en `irp.cdn-website.com`, bloqueado; varias parecen de iStock) | — | — | — |
| 8 | 395-estudiodearte | Descartado, `sin-fotos` | abee95fc | — (plantilla de otro negocio, Nor.skin; fotos de banco) | — | — | — |
| 9 | 413-finoasis | Pendiente 1.2 (PC) | bf36ffa4 | — (clon sin fotos; `finoasis.mx` bloqueado; probablemente solo el retrato de Ernesto es propio) | — | — | — |
| 10 | 426-flowbarber | Pendiente 1.2 (PC) | 51e1f0b9 | — (clon sin fotos; `flowbarberpdc.com` bloqueado; teléfono de plantilla 984 123 4567) | — | — | — |
| 11 | 430-forter | Pendiente 1.2 (PC) | 0dde644d | — (clon con 1 foto propia; el resto en `forter.mx`, bloqueado) | — | — | — |
| 12 | 437-fabricadelentes | Pendiente 1.2 (PC) | 62ccda65 | — (clon sin fotos; `fabricadelentes.mx` bloqueado; 10 sucursales: evaluar si es cadena) | — | — | — |
| 13 | 441-galeriamexicanade | Pendiente 1.2 (PC) | ce321ca7 | — (clon sin fotos; 260 imágenes en `images.squarespace-cdn.com`, bloqueado) | — | — | — |
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

Se llenará al terminar el lote.

## En curso

Ninguno.
