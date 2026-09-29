# GreenSpa: plan de rediseño (método 1.1)

Spa de masajes, faciales, días de spa, corporales y reductivos en Sebastian Bach 4759, Zapopan, Jalisco, desde 2012. Público: personas de la zona de Prados Guadalupe y Vallarta que buscan un masaje o un facial, quien busca un regalo y grupos que celebran (cumpleaños, despedidas, empresas).

Fuentes: clon en `sitio/`, `investigacion/crudo.json` y sus páginas leídas en vivo el 2026-09-28 (`entregables/textos-sitio-en-vivo-2026-09-28.txt`).

## Qué le falta al clon (los "detallitos")

- Casi todo el diseño son hojas recortadas y fondos; solo hay tres fotos propias (masaje, facial y el equipo frente a la fachada).
- La carta de servicios es una página muy larga con textos de beneficios de salud.

## Qué tiene que lograr el sitio

- Que se vea la carta completa con precios en poco espacio, por categoría.
- Que cada categoría, promoción y certificado lleve a WhatsApp con el mensaje escrito.
- Que horario, dirección y mapa estén a un toque.

## Dirección visual

- Paleta de su propio sitio: verde bosque `#22362a`, salvia `#3f5f45`, verde hoja `#a9c97a`, crema `#f5f2e7` y un dorado `#7d5f1c` tomado de su sello. Contrastes AA en `rediseno/src/index.css`.
- Tipografía: Gilda Display (títulos) y Mulish (texto), locales con @fontsource.
- Sus hojas recortadas como acento y sus tres fotos propias.

## Elemento memorable

El **certificado de regalo**: se escribe para quién, de quién, el servicio (de su lista de precios) y un mensaje, y el certificado se arma en pantalla con su vigencia de 3 meses; el botón lo manda por WhatsApp para cotizarlo. Es el producto real de su página de promociones ("Certificados de regalo, cotiza aquí").

## Estructura

1. Encabezado con su logo y "Agendar cita".
2. Portada: H1, texto de "desde 2012", tres datos (masaje de 1 h $1,200, faciales desde $1,050, horario) y la foto del masaje.
3. Carta de servicios por pestañas: masajes, faciales, días de spa, corporales y reductivos.
4. Certificado de regalo.
5. Promociones: Green Loyalty, eventos especiales y mes de cumpleaños.
6. Nosotros: equipo, facial, sus 4 valores y 3 testimonios de su página.
7. Escuela de masajes.
8. Contacto: dirección, horario, mapa de Google (su iframe), WhatsApp, teléfono y correo.
9. Barra fija en el celular: Agendar, Llamar, Cómo llegar.

## Qué se evita

- Los beneficios de salud y promesas de resultado de su carta ("fortalecen el sistema inmune", "eliminan toxinas", "sin cirugía ni dolor", "resultados visibles desde la primera sesión"): solo nombre, duración y precio.
- El sello "Garantía de servicio" y las fotos de banco.
