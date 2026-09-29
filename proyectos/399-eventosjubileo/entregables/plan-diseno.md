# Eventos Jubileo: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://eventosjubileo.com/ (GoDaddy Website Builder)
**Materia prima:** textos de la página en vivo (revisada el 2026-09-29) e `investigacion/`. El clon no traía fotos; se bajaron de `img1.wsimg.com` 14 fotos reales (salón vacío y montado, lobby, balcón, terraza lounge, fachada, XV años, boda, show de robot LED y un evento de empresa) a `assets/originales/`. No se usaron las de banco (Vecteezy) ni los íconos. El clon (`sitio/`) no se tocó.
**Rubro:** salón de eventos en Avenida Azcapotzalco 562, 02000 Ciudad de México. Casa del Rey hasta 80 invitados y Gran Salón hasta 260. "Experiencia Paparazzi" es su complemento opcional de foto y video.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: recursos fallidos (las fotos y el JavaScript viven en el CDN de GoDaddy).

## Qué tiene que lograr el sitio
1. Que quien organiza sepa qué salón le toca según sus invitados.
2. Qué incluye el paquete y cómo se reparte el tiempo.
3. Cotizar por WhatsApp con el tipo de evento y los invitados.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| noche | `#1c1426` | Texto y secciones oscuras |
| marfil | `#faf7f2` | Fondo |
| ciruela | `#7a2e5c` | Botones (las luces moradas de su pista) |
| gris | `#5f5866` | Texto secundario |
| rubor | `#f1e6ee` | Tarjeta del resultado |
| dorado | `#e9c46a` | Acento sobre oscuro (los globos dorados de sus XV) |

Contrastes: noche/marfil 16.69, blanco/ciruela 8.85, ciruela/marfil 8.28, gris/marfil 6.39, dorado/noche 10.67, ciruela/rubor 7.29.
Fuentes: Bodoni Moda 500 y cursiva (títulos, de invitación) y Mulish 400/700 (texto).

## Elemento memorable (uno solo)
**"Arma tu evento"**: eliges qué celebras (XV años, boda, aniversario, empresa) y cuántos invitados (de 20 a 300). Te dice qué salón te toca (hasta 80, Casa del Rey; hasta 260, Gran Salón; más, escríbenos), muestra una barra con las horas base (30 min de recepción, 5 h de fiesta, 30 min de desaforo) y cambia las fotos a eventos de ese tipo. El WhatsApp lleva tipo, invitados y salón. No se ha usado antes en el estudio.

## Secciones
1. Portada con el baile de XV años: H1 "Salón de fiestas en Azcapotzalco para XV años, bodas y empresas".
2. Arma tu evento.
3. Qué incluye el paquete.
4. Lobby, balcón y terraza.
5. Ven a conocer el salón.

## Revisión contra lo genérico (segunda pasada)
- Nada de copas brindando ni DJ de banco: solo sus eventos reales.
- Sin precios inventados: su sitio no los publica, así que el resultado es el salón, el tiempo y el WhatsApp.
- Sin etiquetas en mayúsculas sobre cada sección ("NUESTROS PAQUETES" se repetía tres veces), sin numeración 01/02 y sin puntos medios como separadores.
- "Único en Azcapotzalco con lobby, balcón y terraza" no se repite (no se pudo comprobar); se dice lo que tiene.
- Sin animaciones salvo el cambio de estado de los botones (CSS, respeta `prefers-reduced-motion`).
