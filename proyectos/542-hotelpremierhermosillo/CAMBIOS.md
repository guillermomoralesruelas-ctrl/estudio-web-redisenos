# Hotel Premier Hermosillo: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | http://www.hotelpremierhermosillo.com/ |
| Método | **1.2 en la nube**: el clon no trae fotos; se bajaron del sitio en vivo a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/542-hotelpremierhermosillo/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El mismo Hotel Premier, con sus fotos limpias de franjas publicitarias, su dirección, sus tres teléfonos y su correo a la vista, y una "Tarjeta de registro" que arma la solicitud de disponibilidad.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 22 imágenes rotas y 6 recursos fallidos | 24 fotos y el logotipo en `assets/originales/`, en .webp desde el sitio |
| Dirección, correo, horario y dos teléfonos solo existen en los datos ocultos de Duda | Visibles en Ubicación, en el pie y en el JSON-LD |

## Qué se cambió (mismo contenido, otra forma)

- Las fotos traían pegadas una franja roja con dirección y logotipo (con texto deformado: "Hermodia, Senox"), marcos y letreros ("Desayunos", "Buffet"): se recortaron.
- Sus 8 bloques de servicios quedan como tarjetas con foto y lista; la galería de 22 fotos sin texto se reparte en habitaciones, amenidades y restaurante con textos alternativos.
- Los 4 servicios de su sección "Servicios de hospedaje" tenían descripciones cruzadas (King Size y Junior Suite decía "Atención pensada…"): se usan los nombres de las habitaciones sin esas descripciones.
- En su párrafo de bienvenida se quitó "premium" de "servicio premium".

## Qué se agregó (no existía en el original)

- **"Tarjeta de registro"** (elemento memorable): fechas con cálculo de noches, tipo de habitación, adultos y niños, motivo del viaje (trabajo, familia, de paso por la carretera) que muestra sus amenidades para ese viaje, habitación accesible y sala de juntas; envía un correo armado a reservaciones@hotelpremier.com.mx o llama. Sello con la hora actual de Hermosillo.
- Indicador "Recepción abierta las 24 h · en Hermosillo son las …" (su horario es de 24 h todos los días).
- Textos del estudio: "Del buffet a su habitación", "Todo lo que necesita sin salir del hotel", "Zona norte, salida a Nogales", la explicación de la tarjeta, los nombres y notas de los tres motivos de viaje, la nota de que las fotos de habitaciones no indican el tipo, y los textos alternativos.
- Barra fija en el celular (llamar, disponibilidad, cómo llegar), enlace a Google Maps con sus coordenadas, JSON-LD `Hotel`, title, description e imagen para compartir.
- No hay WhatsApp: su campo de WhatsApp está vacío aunque la descripción de su sitio dice "Reserva directo o por WhatsApp". Se usa correo y teléfono.

## Qué se quitó o no se usó

- El comparador de servicios ("Comparar", "Ver más", "Comparar ahora") que no hace nada y el texto de configuración que se ve en la página ("vibrante|false|grid|2|center…").
- Restos del editor ("Engage --- Guardar", "Vista previa") y el logotipo de Sección Amarilla.
- La foto del personal, la camioneta rotulada "Transporte gratuito aeropuerto" (el sitio no menciona ese servicio), las piezas "Platillos mexicanos" y "Cumpleañero ¡gratis!" (promociones sin vigencia) y una habitación repetida.
- El formulario: se reemplaza por la tarjeta que abre el correo.

## Qué se conserva al pie de la letra

- Nombre, logotipo, "Comodidad y Excelente Ubicación", "4.9 · +2,000 huéspedes satisfechos", su párrafo de bienvenida, los 4 destacados, sus listas de servicios (habitación, áreas recreativas, restaurante, centro de negocios, servicios adicionales, accesibilidad, estacionamiento, conectividad) y "Disfrute de alimentos y bebidas sin salir del hotel".

## Pendiente de confirmar con el cliente

- Si tienen WhatsApp (lo promete su descripción, pero no hay número).
- Si el transporte gratuito al aeropuerto que se ve en la camioneta sigue vigente.
- Qué foto corresponde a cada tipo de habitación, y tarifas.
- De dónde sale la calificación 4.9.

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` (recortadas) y `rediseno/fotos-web.mjs` (crea los .webp)
