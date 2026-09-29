# Fuente de Piedra: plan de rediseño (método 1.1)

Salón de eventos "boutique" en Camino al Registro 122, Col. San Rafael, Tlajomulco de Zúñiga (zona metropolitana de Guadalajara), terminado en diciembre de 2024, con vista al Bosque de la Primavera. Hasta 300 invitados; explanada de 600 m² con techo de 500 m², jardín de 220 m², fogata, suite de preparación y valet para 150 autos. Planes todo incluido o solo renta. Público: parejas que planean su boda, familias de XV años y aniversarios, y wedding planners.

Fuentes: clon en `sitio/`, `investigacion/crudo.json` y su página en vivo revisada con curl el 2026-09-29 (mapa de Google, metadatos, enlaces de WhatsApp).

## Qué le falta al clon (los "detallitos")

- El clon carga sin su JS (35 imágenes rotas por carga diferida y 10 recursos fallidos) y no trae el mapa.
- Todas las fotos son propias y buenas (fotos profesionales del lugar y de sus primeros eventos, con pie de foto).

## Qué tiene que lograr el sitio

1. Que la pareja o la familia pida cotización o una visita por WhatsApp con los datos que el salón necesita (tipo de evento, invitados, espacio, plan y fecha).
2. Que se vea el lugar: explanada, jardín, fogata, suite y sanitarios.
3. Que la ubicación y el contacto estén a un toque.

## Dirección visual

| Token | Color | Uso |
|---|---|---|
| piedra | `#26241f` | Fondos oscuros, encabezado |
| olivo | `#4f553c` | Servicios, botones (su verde olivo #818765, oscurecido para AA) |
| arena | `#f3eee5` | Fondo |
| cantera | `#e3d9c8` | Secciones alternas |
| oro | `#c8a766` | Las luces de sus eventos: botones y subrayado de la frase |

Contrastes en `rediseno/src/index.css`. **Tipografía:** Playfair Display (la de su sitio; títulos y la frase) y Jost (texto), locales con @fontsource.

## Elemento memorable

**"Tu evento en una frase"**: una oración grande en Playfair ("Queremos celebrar *nuestra boda* para *150* invitados *en la explanada techada*, con *el plan todo incluido*, el *fecha*. Nos gustaría *conocer el salón en persona*.") donde cada parte subrayada en dorado es un selector con sus opciones reales: tipos de evento de su galería y su suite, invitados hasta su capacidad de 300, sus espacios (explanada, jardín o los dos), sus dos planes (todo incluido o solo renta) y su invitación a "programar un tour del lugar". Al lado, la foto de un evento real en ese espacio con su pie ("Boda Madelin y Carlos, agosto 2025"), el dato del espacio y una barra de invitados contra la capacidad. La frase, tal cual, es el mensaje de WhatsApp.

### Revisión contra lo genérico

- ¿Podría ser de cualquier salón? Las opciones, los metros, la capacidad, los planes y las fotos con pie son los suyos.
- ¿Se parece a uno ya usado? No es un plano de mesas ni una carta o certificado: es la solicitud de cotización escrita como frase, sin formulario.
- Sin datos inventados: no pone precios ni disponibilidad de fechas.

## Estructura

1. Encabezado oscuro con su logo y WhatsApp.
2. Portada: foto al atardecer con los cerros, H1, texto de "terminado en diciembre de 2024" y 300 invitados / 600 m² / 150 autos.
3. "Tu evento en una frase".
4. Nuestro lugar: explanada, jardín, fogata e ingreso.
5. Suite de preparación e instalaciones para invitados.
6. Eventos ya celebrados (sus fotos con pie).
7. Servicios: todo incluido o solo renta y su lista completa.
8. Colaboradores (sus cinco enlaces de Instagram).
9. Contacto: dirección, su mapa de Google (iframe), WhatsApp, teléfono, correo y redes.
10. Barra fija en el celular: WhatsApp, Llamar, Llegar.

## Qué se evita

- La sección de testimonios vacía ("Aún no hay testimonios publicados").
- Misión, visión y valores genéricos; el texto "messages.gallery.description" que se ve en su sitio; el enlace "Iniciar sesión" del pie.
