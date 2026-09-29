# Cervus Barbería: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://cervusbarberia.com/ (Framer)
**Materia prima:** textos de inicio y tendencias en `investigacion/crudo.json` y en la página en vivo. El clon no traía fotos; se bajaron de `framerusercontent.com` las reales: retratos de Jesse y Diego, la foto de clientes en la silla y la mascota de la marca, a `assets/originales/`. No se usaron las 12 imágenes de "Tendencias" (generadas con IA, el mismo modelo en todas) ni el feed de Instagram (Elfsight y cdninstagram, bloqueados para la nube). El video de portada solo anima la mascota. El clon (`sitio/`) no se tocó.
**Rubro:** barbería en San Cristóbal 713, Zoquipan, Zapopan, fundada en 2021. Lunes a viernes de 10:00 a 20:00; sábado de 10:00 a 16:00. Reservas en Setmore.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: 6 imágenes rotas (las fotos viven en el CDN de Framer).

## Qué tiene que lograr el sitio
1. Que el cliente vea los siete servicios con duración y precio.
2. Elegir según el tiempo que tiene y reservar en su Setmore.
3. Conocer a los dos barberos.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| tinta | `#111318` | Texto, portada y contacto |
| papel | `#f6f4ef` | Fondo |
| azul | `#1f2fa3` | Botones, precios y cursivas (el trazo de su mascota) |
| gris | `#5a5d66` | Texto secundario |
| lavanda | `#e6e8f7` | Fondo alterno y barras vacías |
| cielo | `#c9ceff` | Acento sobre oscuro |

Contrastes: tinta/papel 16.90, blanco/azul 10.53, azul/papel 9.58, gris/papel 5.98, cielo/tinta 12.17, azul/lavanda 8.65.
Fuentes: Instrument Serif 400 y cursiva (títulos, con la cursiva que ya usa su sitio) y DM Sans 400/700 (texto).

## Elemento memorable (uno solo)
**"¿Cuánto tiempo tienes?"**: botones de 25, 30, 40, 60 y 80 minutos. Cada servicio tiene una barra con su duración; los que caben en el tiempo elegido quedan activos con su botón de reserva, y los que no, en línea punteada con "Necesitas N min". Arriba se resume cuántos servicios alcanzas. No se ha usado antes en el estudio.

## Secciones
1. Portada con la foto de clientes: H1 "Barbería en Zapopan donde el estilo se construye".
2. ¿Cuánto tiempo tienes? (servicios).
3. Dos barberos. Una misma técnica.
4. Historia (desde 1998 en familia, barbería desde 2021) con la mascota y los nombres de las tendencias.
5. Visita la barbería.

## Revisión contra lo genérico (segunda pasada)
- Nada de postes de barbero ni navajas cruzadas: la identidad es su mascota azul dibujada a mano.
- No se muestran las fotos de tendencias (IA): solo sus nombres, como ideas para pedir.
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02 y sin puntos medios como separadores (su sitio usa "40 min · Classic cut").
- Sin "100% atención al detalle": se dicen duración y precio.
- Sin animaciones salvo el cambio de estado de los servicios (CSS, respeta `prefers-reduced-motion`).
