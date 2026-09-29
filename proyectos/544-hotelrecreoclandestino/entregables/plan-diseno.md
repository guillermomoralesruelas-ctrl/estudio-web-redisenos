# Clandestino Hotel: plan de rediseño (método 1.1)

**Sitio original:** https://clandestinohotel.com/ (español, con EN)
**Materia prima:** clon en `../sitio/` (fotos en `sitio/assets/wp-content/plugins/clandestinoh-widgets-elementor/assets/img/`), textos de inicio, hoteles, Hotel Recreo, Hotel Pila Seca y experiencias en `investigacion/crudo.json`. La red de la nube no llega al sitio.
**Rubro:** hotel boutique solo para adultos y pet friendly, en dos casonas del Centro Histórico: Hotel Recreo (Recreo #31, 8 suites, rooftop) y Hotel Pila Seca (Pila Seca #2, 13 suites, patios, Spa y restaurante Florios). **Ciudad:** San Miguel de Allende, Guanajuato. La carpeta dice "Hotel Recreo", pero el sitio es de las dos casas.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: WordPress con Elementor y feed de Instagram; 17 recursos externos no cargan en el clon.
- Los `alt` no corresponden a las fotos: el rooftop se llama "Restaurante Florios", una recámara se llama "Spa" y el patio de Pila Seca se llama "Hotel Recreo".

## Qué tiene que lograr el sitio
1. Elegir casa (Recreo para vivir la ciudad, Pila Seca para descansar) y suite.
2. Saber cuánto cuesta su estancia real, con tarifa de entre semana (domingo a jueves) y de fin de semana (viernes y sábado).
3. Escribir por WhatsApp a la casa elegida con las noches y la suite.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| tinta | `#2b211d` | Texto y fondos oscuros |
| cal | `#f6f1ea` | Fondo claro (muro encalado) |
| cantera | `#e6b9a2` | Acento sobre oscuro (cantera rosa de la Parroquia) |
| almagre | `#9c4221` | Botones y Recreo (sus fachadas) |
| nopal | `#3f5a4a` | Pila Seca (patios con plantas) |
| piedra | `#6b5d56` | Texto secundario |

Contrastes: tinta/cal 13.97, cantera/tinta 8.84, almagre/cal 5.81, blanco/almagre 6.53, piedra/cal 5.62, nopal/cal 6.74.
Fuentes: Cormorant Garamond 600 (títulos, de cartel colonial) y Karla 400/700 (texto).

## Elemento memorable (uno solo)
**"¿Qué noches vienes?"**: una semana de domingo a sábado. Se elige la casa y la suite; se tocan las noches que se quedan y cada una muestra su precio (entre semana o fin de semana, según su tabla). Abajo sale el total estimado, lo que incluye (impuestos, desayuno y valet parking) y el WhatsApp de esa casa con el mensaje ya escrito ("Suite Grande en Pila Seca, noches de viernes y sábado, total estimado $…"). La Suite Doble pide cuántas personas (2, 3 o 4). No se ha usado antes en el estudio.

## Secciones
1. Portada: H1 "Hotel boutique en San Miguel de Allende", 21 suites en dos casonas, solo adultos, pet friendly, desayuno y valet incluidos.
2. Dos casas: Recreo y Pila Seca lado a lado, con dirección, carácter ("para vivir la ciudad" / "para descansar de verdad") y teléfono.
3. ¿Qué noches vienes? (con la ficha de la suite elegida).
4. Dentro de Pila Seca: Spa y Florios (solo texto; no hay fotos confirmadas).
5. Experiencias y "Clandestino solo para Ti".
6. Contacto: las dos direcciones con Google Maps, teléfonos, WhatsApp, correo, Instagram y Facebook.
Barra fija en el celular: WhatsApp, Llamar, Cómo llegar.
