# Kiumo Hospital Veterinario: plan de rediseño (método 1.1)

**Sitio original:** https://kiumo.com.mx/ (WordPress con Elementor Pro, hecho por Ker3). Páginas: Inicio, Servicios, Hospital Veterinario, Spa, Kiumo Check, Nosotros, Contacto y Blog. Casi todos sus botones ("Contáctanos", "Agendar visita", "Realizar pedido", "Hacer pedido") abren la misma ventana emergente con los teléfonos de tres sucursales; "Agendar Cita" en Hospital y Spa va a un enlace corto de WhatsApp (`wa.me/message/…`).

**Materia prima:** `investigacion/crudo.json` (Inicio, Servicios, Hospital Veterinario, Spa y Kiumo Check) e `investigacion/resumen.json` (teléfonos, WhatsApp, correo y redes). El clon se ve completo en escritorio; en el celular tiene 430 px de desborde y 2 o 3 imágenes rotas (defectos del clon, no del cliente).

**Comprobado en vivo** (curl a https://kiumo.com.mx/ el 2026-09-27):
- En el pie, el icono de WhatsApp de Kiumo Check abre el de la Sucursal La Primavera (`phone=526674897387`, con el mensaje "…Sucursal La Primavera"), aunque el texto de al lado dice "Whatsapp: 6672116122".
- Ningún teléfono es un enlace `tel:`: no se pueden tocar para llamar, ni el 667 135 8509 del hospital 24 horas.
- La ventana "¡Contáctanos!" lista solo tres sucursales (falta Kiumo Check).
- Su único JSON-LD de negocio es un `PetStore` con la dirección "Blvd. Maniel J. Cloutier" (así, con errores), sin número, teléfono ni horario, y ninguna de las otras sucursales.

No se bajó ninguna imagen nueva.

**Rubro:** hospital veterinario con spa, farmacia, tienda de alimento y guardería en Culiacán, Sinaloa. Tres sucursales (Guadalupe, abierta 24 horas; Las Quintas; La Primavera) y Kiumo Check en La Conquista. Tipo para Google: `Organization` con cada sucursal como `VeterinaryCare` y Kiumo Check como `PetStore`.

**Sobre las fotos (revisadas antes de construir):** hay de sobra, y son propias:
- la fachada de la Sucursal Guadalupe;
- su quirófano, ultrasonido y consulta;
- el spa (limpieza de oídos, pomerania en la mesa de estética);
- el anaquel de la farmacia;
- cuatro integrantes del equipo con uniforme Kiumo en recortes PNG con fondo transparente;
- mascotas atendidas (un bulldog, un gato con pañuelo, cachorros).

Ninguna trae EXIF de Google Maps o Picasa ni marcas de IA. No se usan:
- las imágenes de los artículos del blog (de banco);
- las de marcas de alimento;
- las pequeñas en círculo.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): desborde horizontal de 430 px en el celular y 2 o 3 imágenes rotas.
- Fotos: 15 copias `.webp` (3.75 MB → 0.68 MB), el favicon y el símbolo del logo, hechas con `rediseno/fotos-web.mjs` en `assets/web/`; el clon no se toca.

## Qué tiene que lograr el sitio
1. **Urgencias**: llamar en un toque al hospital 24 horas (Sucursal Guadalupe, 667 135 8509).
2. **Agendar** spa, vacunas o consulta por WhatsApp en la sucursal correcta, con lo que necesita la mascota ya escrito.
3. Dejar claro todo lo que hacen (hospital, spa, farmacia, croquetas a domicilio, guardería) y dónde están las cuatro sucursales.

## Dirección visual (primera pasada)
Los colores de su logo y de su fachada: el perrito de triángulos naranja, amarillo y azul, y el azul marino de sus uniformes.

| Token | Color | Uso |
|---|---|---|
| `marino` | `#180a32` | Títulos, panel "Tu lista", tienda y pie (17.7:1 sobre `crema`; blanco encima 18.6:1) |
| `naranja` | `#eb6f3e` | Botones, con texto `marino` (6.1:1) |
| `naranja-honda` | `#b9461a` | Enlaces y notas sobre claro (5.0:1 sobre `crema`, 5.3:1 sobre blanco) |
| `amarillo` | `#f5b920` | Acentos y enlaces sobre `marino` (10.5:1) |
| `azul` / `azul-hondo` | `#008fd2` / `#006a9e` | Triángulos y casillas marcadas (azul con palomita `marino`, 5.2:1); foco (5.9:1 sobre blanco) |
| `crema` | `#fff8ee` | Fondo |
| `texto` | `#4a4458` | Texto de párrafos (8.8:1 sobre `crema`) |

**Tipografía:** **Archivo** (400, 600 y 800), la única familia que usa su tema de Elementor; de @fontsource y solo latino.

## Elemento memorable: "El checklist de tu mascota"
Su tienda nueva se llama Kiumo Check y se presenta como "el checklist esencial de tu mascota". El rediseño convierte esa idea en la herramienta principal del sitio:
- Eliges **perro o gato** y, si quieres, escribes su nombre.
- Palomeas lo que necesita, en cuatro grupos tomados de sus páginas:
  - Salud: consulta, vacunas, parásitos, dental, laboratorio y rayos X, cirugía.
  - Spa: baño, servicio completo (solo perros, como en su página), lavado bucal, pomada.
  - Tienda y farmacia: croquetas, entrega a domicilio, medicamentos, accesorios.
  - Cuidados de día: guardería, recolección.
- La palomita se dibuja al marcar, en el color del grupo, y un panel azul marino cuenta "2 de 16".
- Eliges la sucursal y el botón manda por WhatsApp, **al número de esa sucursal**, "Esto es lo que necesita mi perro Rocky: …".
- Si es gato y hay algo del spa, aparece su "Martes de gatos".
- Abajo, siempre: "¿Es una urgencia? Llama a la Sucursal Guadalupe, abierta 24 horas".

Sale del negocio: los servicios, los detalles, los números por sucursal, los mensajes ("Hola, quiero comunicarme con Kiumo Sucursal…") y el martes de gatos son suyos.

No repite elementos anteriores:
- No es un reloj de horarios (ya usado en Pacific Palace).
- No es un cotizador con precios; Kiumo no publica precios.
- No es un mapa.

## Estructura
1. Encabezado: símbolo y "Kiumo", navegación, botón "Urgencias 24 h" (llamada).
2. Portada: H1 "Hospital veterinario y spa para perros y gatos en Culiacán", fachada de Guadalupe, 25+ años, 24 horas y +1000 productos.
3. **El checklist de tu mascota.**
4. Hospital: quirófano, ultrasonido y consulta; seis líneas de servicio (sus textos).
5. Spa: perros y gatos, adicionales, martes de gatos.
6. Tienda, farmacia y guardería (fondo azul marino) con sus marcas de alimento.
7. Nosotros: "Creamos lazos de lealtad®", cuatro integrantes del equipo sobre los colores del logo, tres testimonios de su sitio.
8. Sucursales: las cuatro con WhatsApp, teléfono tocable y Google Maps; horarios.
9. Pie y barra fija en el celular: WhatsApp (Guadalupe), Llamar 24 h y Cómo llegar.

## Revisión contra lo genérico (segunda pasada)
- Se quitaron las etiquetas pequeñas en mayúsculas que estaban sobre cada sección y el punto medio de la portada.
- Los servicios del hospital dejaron de ser seis tarjetas iguales: ahora son una lista con filetes.
- Sin numeración de secciones.
- Solo se mueven la palomita y la lista; quietas con `prefers-reduced-motion`.
- La decoración es solo de triángulos, sacados del logo.
- Sin inventar:
  - sin precios;
  - sin horario de domingo (no lo publican; solo Guadalupe dice 24 horas);
  - sin nombres del equipo (no los publican);
  - sin qué servicios tiene cada sucursal (tampoco lo publican: el checklist deja elegir cualquiera).
- Sin videos de YouTube, sin mapa de Google incrustado y sin scripts de terceros.
