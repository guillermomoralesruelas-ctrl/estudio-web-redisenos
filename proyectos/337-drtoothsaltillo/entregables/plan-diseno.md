# Dr. Tooth Saltillo: plan de rediseño (método 1.1)

**Sitio original:** https://drtooth.com.mx/ (WordPress con Elementor)
**Materia prima:** clon en `../sitio/`, `investigacion/original.html`, `crudo.json` (inicio, podcast, contacto, artículos y aviso de privacidad). Con `curl`, el 2026-09-28, el primer párrafo de sus 12 páginas de servicios.
**Rubro:** clínica dental (implantología, diseño de sonrisa, ortodoncia, periodoncia, rehabilitación). **Ciudad:** Saltillo, Coah. (Ave. San Ángel 240, Edificio San Ángel, 2.º piso).

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-28): 15,399 px en escritorio y 14,956 px en el celular, desborde de 634 px en el celular, 1 imagen rota y 41 errores de consola.

## Qué tiene que lograr el sitio
1. Que el visitante vea resultados reales y agende su valoración por WhatsApp.
2. Conocer a los dos especialistas, los servicios, la dirección y el horario.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| tinta | #111111 | El negro de su logo y del fondo de sus fotos de pacientes: la sección de resultados, botones. Blanco encima 18.88:1 |
| oro | #e0b421 | El dorado de su logo en versión blanca (muestreado #d8a80c a #fccc00): la línea del antes y después, sobre tinta 9.64:1 |
| bronce | #7a5c00 | Dorado oscuro para texto sobre blanco (6.25:1) y marfil (5.70:1) |
| marfil | #f7f4ee | Fondos claros. Gris #555555 encima 6.79:1 |

**Tipografía:** Outfit para títulos (palo seca geométrica como "DR. TOOTH" en su logo) e Inter para texto.

## Elemento memorable
**"Nueve sonrisas, un solo gesto"**: sus 9 casos de antes y después en un muro de 3 × 3 sobre fondo negro, como sus fotos. Un solo deslizador mueve a la vez una línea dorada en las nueve fotos: a la izquierda el antes, a la derecha el después; botones "Todo antes" y "Todo después". Con la línea a la mitad, cada rostro queda partido entre su antes y su después.
Sale del negocio: su sección "Casos extraordinarios" trae 18 fotos (9 pares) tomadas con el mismo encuadre y fondo negro; verlas juntas muestra la constancia del resultado.
**Por qué no repite otros:** 651 (otra clínica dental) junta tratamiento, precio y dentista; aquí el protagonista es el resultado, y el control es uno para todos, no un comparador por foto.
**Límite honesto:** se usan solo nombres de pila; la página aclara que cada caso lleva su propio tratamiento.

## Estructura
1. Encabezado con su logo, enlaces y "Agendar".
2. Portada: H1 "Implantes, diseño de sonrisa y ortodoncia en Saltillo", foto del Edificio San Ángel.
3. Nueve sonrisas, un solo gesto (el elemento).
4. Servicios: 6 principales con texto y 6 generales como enlaces.
5. Quién te atiende: los dos especialistas y su recepción.
6. Visítanos: dirección, horario, WhatsApp, teléfonos, correo y redes.
7. Pie y barra fija en el celular.

## Qué se evita (revisión contra lo genérico)
- Títulos en mayúsculas ("PIONEROS…", "CASOS EXTRAORDINARIOS"), numeración y puntos medios.
- "La clínica N° 1 en Saltillo", "una de las mejores clínicas del país", "la mejor tecnología": superlativos.
- Carruseles y animaciones al hacer scroll.
