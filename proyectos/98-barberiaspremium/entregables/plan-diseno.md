# Barberías Premium: plan de rediseño (método 1.1)

**Sitio original:** https://barberiaspremium.com/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/assets/`), textos de inicio, franquicias, análisis facial y dos sucursales en `investigacion/crudo.json`, y el JSON-LD de sus tres sucursales en `investigacion/original.html`. La red de la nube no llega al sitio: no se pudo leer en vivo.
**Rubro:** barbería con tres sucursales, app propia, Premium ID y análisis facial; ofrece franquicias. **Ciudad:** Ciudad del Carmen, Campeche (la base del fabricador decía Oaxaca de Juárez; el sitio dice Ciudad del Carmen en todas sus páginas).

## Qué le falta al clon (los "detallitos")
- Es una aplicación de Next.js: el clon depende de sus scripts y no carga igual que el original (ver `qa/reporte-rediseno.json`).
- Su sitio en línea está bien hecho y es moderno (JSON-LD por sucursal, Open Graph, horarios, reservas en línea). El rediseño no corrige errores graves: propone una página más corta y con la información de cada sucursal a la vista.

## Qué tiene que lograr el sitio
1. Reservar (su plataforma de reservas) o escribir por WhatsApp desde cualquier parte.
2. Ver las tres sucursales con dirección, horario y foto sin entrar a tres páginas.
3. Entender la primera visita (Premium Service $199) y la tarjeta de sellos.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| carbon | `#111214` | El negro de su sitio: fondo principal |
| grafito | `#1d1e21` | Paneles sobre negro |
| oro | `#d4a948` | El dorado de su logo: botones y cifras |
| oropalido | `#dcca8c` | Dorado claro para texto destacado sobre negro |
| hueso | `#efeae2` | El crema de su sitio: secciones claras |
| bronce | `#76591a` | Dorado oscuro para texto sobre crema |

**Tipografía:** Oswald (títulos, condensada como el "PREMIUM" de su logo y sus carteles) y Libre Franklin (texto), locales con @fontsource.

## Elemento memorable
**"¿Cada cuánto te cortas?":** su programa de lealtad dice "seis cortes pagados elegibles te dan un corte gratis". Eliges cada cuánto vienes (cada 2, 3, 4, 5 o 6 semanas) y aparece tu tarjeta de sellos en un calendario: seis sellos dorados con la fecha aproximada de cada corte a partir de hoy y el séptimo, el gratis, con su fecha. El botón reserva la primera visita. Sale de su propia regla, sin precios inventados.

## Estructura
1. Encabezado con logo, secciones, "Reservar" (su plataforma) y WhatsApp.
2. Portada: H1, "Desde 2006", su texto de portada, la tarjeta de Premium Service ($199, 30 min, qué incluye, barba +$139) y la foto de la sucursal Plaza Real.
3. Tarjeta de sellos (elemento memorable).
4. Cortes: sus tres cortes reales (lacio, rebelde, remolinos).
5. Análisis facial avanzado: 5 fotos, 4 propuestas, 1 reporte; qué incluye y sus preguntas.
6. Premium ID y la app: sus funciones, con enlace a la App Store y WhatsApp para Android.
7. Sucursales: Plaza Real, Centro Paseo Juárez y Express HSBC con foto, dirección, horario, Maps y reservar.
8. Franquicias: modelo base de 5 sillas, $300,000 MXN aproximados, 5% de regalías, 3 años, enlace a su página.
9. Pie con teléfono, correo y redes. Barra fija en el celular: Reservar, WhatsApp, Cómo llegar.

## Qué se evita (revisión contra lo genérico)
- Los "looks de ejemplo" del mismo modelo, el retrato ilustrativo y la foto del cine (parecen producidos o generados): solo cortes y sucursales reales.
- Numeración 01/02 en cada bloque y etiquetas pequeñas en mayúsculas (su sitio las usa en todas las secciones).
- Repetir la prueba de selfie con IA de su sitio: el rediseño enlaza a su sitio para eso.
- Inventar precios de cortes (su sitio los muestra solo al reservar).
