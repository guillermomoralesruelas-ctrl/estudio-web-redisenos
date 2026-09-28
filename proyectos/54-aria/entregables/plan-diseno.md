# ARIA: plan de rediseño (método 1.1)

**Sitio original:** https://somosaria.com/
**Materia prima:** clon en `../sitio/` (nueve fotos propias de clases en `sitio/assets/_astro/`), textos en `investigacion/crudo.json`, y las páginas de precios, preguntas frecuentes, boda, TotalPass, Wellhub y empresas leídas con curl el 2026-09-28 (texto en `entregables/textos-sitio-en-vivo-2026-09-28.txt`).
**Rubro:** academia de baile (salsa, bachata, cumbia y más), clases semi personalizadas. **Ciudad:** Hipódromo Condesa, Ciudad de México.

## Qué le falta al clon (los "detallitos")
- El clon no se ve: el HTML de Astro quedó con rutas rotas ("assetsassetsassets") y la captura mide 0 px. Es un defecto del clonador, no del cliente.
- En su sitio, los precios están en una página y la vigencia de cada paquete en letra chica: nadie sabe si le alcanzan los días para usar sus clases.
- Datos que no coinciden entre páginas: piso 4 contra piso 5 y dos horarios distintos para el sábado.

## Qué tiene que lograr el sitio
1. Que quien nunca ha bailado vaya a su primera clase gratis (sin cita, por WhatsApp).
2. Que elija el paquete que sí va a terminar antes de que venza.
3. Que llegue al edificio (puerta cerrada de noche y el sábado en la tarde).

## Dirección visual
Salón de baile de noche: morado profundo, lila y un amarillo de luz de escenario.
| Token | Color | Uso |
|---|---|---|
| noche / morado | #1d0838 / #5b12a8 | portada, pie / botones secundarios |
| lila / lila-claro / fondo | #d9c6f5 / #efe5ff / #faf6ff | tarjetas y fondos |
| amarillo | #ffd166 | botón principal y día en que terminas |
| tinta / gris | #2a1b3d / #6b5a80 | texto |

**Tipografía:** Bricolage Grotesque (títulos) y Figtree (texto).

## Elemento memorable
**"¿Cuántas clases te caben?"**: eliges qué días puedes ir (lunes a sábado), cuántas horas por visita y si vas solo o en pareja. Aparece un calendario real de 38 días desde hoy con tus días marcados, y cada paquete dice "Lo terminas el…" o "Usarías 9 de 12"; el más grande que sí terminas lleva "Te conviene". El WhatsApp ya dice el paquete, los días y las horas.

## Estructura
1. Portada oscura con la foto de clase, H1, clase muestra gratis y cifras.
2. Ritmos (salsa, bachata, cumbia, salsa cubana, cumbia sonidera y otros).
3. ¿Cuántas clases te caben? con paquetes, inscripción y clase suelta.
4. Cómo son las clases y su equipo.
5. Coreografía de boda y otras formas de venir (TotalPass, Wellhub, empresas).
6. Reseñas, mapa real y aviso de la puerta, preguntas frecuentes, pie.

## Qué se evita
- Carruseles, contadores animados, popups y rastreadores.
- La imagen de "Su primer baile" (parece generada) y los banners de promoción con texto.
