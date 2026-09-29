# Barón Barbershop: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://baronbarbershop.com/ (Hostinger Horizons; se arma con JavaScript)
**Materia prima:** textos en `investigacion/crudo.json`. El clon no traía fotos; se bajaron de `horizons-cdn.hostinger.com` las 13 fotos reales del sitio (interior, tres cortes, tres barberos y seis de galería) y el logotipo, reducidas a 1600 px, a `assets/originales/`. La foto "Interior" es de Unsplash y no se usó. El clon (`sitio/`) no se tocó. El dominio `baronbarbershop.com` no abre desde la nube; su CDN sí.
**Rubro:** barbería en Torre West, Av. Central Guillermo González Camarena 500, Valle Real (Ventura), Zapopan. Lunes a sábado de 10:00 a 19:00; domingo de 10:00 a 15:00.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: el HTML no tiene contenido (lo arma el JavaScript de Horizons) y no trae fotos.

## Qué tiene que lograr el sitio
1. Que el cliente vea qué incluye cada corte y cuánto cuesta.
2. Conocer a los tres barberos y agendar con el que quiera.
3. Agendar por WhatsApp con el corte o el barbero ya escrito.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| negro | `#141414` | Texto, encabezado, barberos y contacto |
| hueso | `#f3f0e8` | Fondo (con el negro, el piso de ajedrez de su barbería) |
| cobre | `#9c4a1c` | Botones y acentos |
| gris | `#5d5a55` | Texto secundario |
| durazno | `#e8b48a` | Acento sobre oscuro |
| piedra | `#a8a39a` | Menú sobre oscuro (sus muros de concreto) |

Contrastes: negro/hueso 16.18, blanco/cobre 6.16, cobre/hueso 5.41, gris/hueso 6.03, durazno/negro 9.94, piedra/negro 7.34.
Fuentes: DM Serif Display 400 y cursiva (títulos, de alto contraste como su escudo) y Manrope 400/700 (texto).

## Elemento memorable (uno solo)
**"¿Qué incluye tu corte?"**: tres botones (Básico $300, Premium $380, Barón $500) sobre la lista completa de lo que ofrecen sus cortes (corte, ozono, parches, puntos negros, face wash, mascarilla hidratante, lavado, lavado con ampolleta, peinado, masaje). Al elegir uno se encienden los que incluye, se apagan los que no, aparece cuánto cuesta de más sobre el anterior y cambia la foto. El WhatsApp lleva el corte. No se ha usado antes en el estudio.

## Secciones
1. Portada con el interior: H1 "Barbería en Ventura, Zapopan".
2. ¿Qué incluye tu corte?
3. Tus barberos (Jahir, Arath y Oscar), cada uno con su WhatsApp.
4. En la silla (seis fotos de su galería).
5. Visítanos en Ventura: dirección, Google Maps, horario y redes.

## Revisión contra lo genérico (segunda pasada)
- Nada de navajas cruzadas, postes de barbero ni fotos de banco: solo su local, sus barberos y sus clientes. El único adorno es una franja del piso de ajedrez que se ve en sus fotos.
- La lista de servicios sale tal cual de su sitio; el Corte Barón no dice lavado, así que no se le marca.
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02 y sin puntos medios como separadores.
- Sin promesas: se dice qué incluye y cuánto cuesta.
- Sin animaciones salvo el cambio de estado de la lista (CSS, respeta `prefers-reduced-motion`).
