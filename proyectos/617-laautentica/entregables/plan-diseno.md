# La Auténtica: plan de rediseño (método 1.1)

**Sitio original:** https://autenticabarberia.com/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/wp-content/uploads/`), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`.
**Rubro:** barbería para caballeros con spa (masajes y faciales) y club social con terraza, barra y billar. **Ciudad:** Ciudad Satélite, Zona Azul (la base dice Ciudad de México; Ciudad Satélite está en Naucalpan, Estado de México). Una sola sucursal: no es cadena.

## Revisión de fotos y contacto (paso 1)
- Fotos propias usables: 6 grandes de 1600 px (salón con el mapa de México y el logo, mesa de billar con el logo, barra con coctelería, barra con partido en pantalla, cabina de masaje con toallas bordadas, lámpara del spa), 4 de producto a 300 px con su propia mesa de madera, y los dos barberos a 150 px. Ninguna trae EXIF de Picasa/Google ni marcas C2PA o de IA; `LA-ene-23-31-scaled.jpg` lleva de autora a Alitzel Durango (fotógrafa).
- No se usa `LA-dorado.jpg` (textura dorada genérica, posible banco).
- Contacto: teléfono y WhatsApp 56 2020 3272 (los `wa.link` del sitio redirigen a 5215620203272), correo, Instagram, Facebook y TikTok. Ubicación: solo "Cd. Satélite, Zona Azul" (meta description); la calle queda pendiente.

## Qué le falta al clon (los "detallitos")
- El video del inicio (`LA-F-reel-1.mp4`) no se descargó: la portada queda como un rectángulo oscuro.
- El carrusel de Instagram carga las imágenes desde el servidor del cliente y el de barberos (LatePoint) no se mueve.
- Títulos encimados por falta de la fuente: "Experiencia Auténtica – ALL INCLUSIVE" y "MASAJE EN PAREJA".
- `qa-rediseno.mjs` (antes): desborde 0, imágenes rotas 0, 1 recurso fallido.

## Qué tiene que lograr el sitio
1. Que el cliente agende por WhatsApp (barbería o spa) viendo antes el precio.
2. Vender la tarjeta de regalo "Experiencia Auténtica" y la membresía de Socio Auténtico.
3. Contar que hay un club social con terraza, que hoy queda enterrado al final de la página.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| carbon | #141312 | fondo general (el negro del sitio) |
| humo | #211f1c | fondos de tarjetas y contacto |
| crema | #f1eadc | texto sobre oscuro y fondo de Barbería y Tienda (las toallas bordadas) |
| oro | #b7a582 | acento de la marca (del CSS original), botones y precios sobre oscuro |
| oro-osc | #6e5f3f | precios sobre crema (contraste AA) |
| verde | #1d372e | fondo del Spa (las paredes verde botella de la cabina) |
| madera | #4a2f1f | el librero |

**Tipografía:** las de la marca, que ya usaba el sitio: Bebas Neue (títulos y precios) y Prata (nombres de servicio y citas), con Inter para el texto corrido. Todas con @fontsource, solo latín.

## Elemento memorable: "Detrás del librero"
Sale de su propia publicación de Instagram: *"No todo está a la vista. Detrás de ese librero empieza otra experiencia. Terraza Auténtica"*. El Club Social se presenta tapado por un librero de madera. Los lomos de los libros llevan lo que hay del otro lado, todo tomado del sitio: Coctelería, Destilados, Cervezas artesanales, Billar, Fútbol en pantalla, Paquete de cumpleaños y Un evento por año. El botón "Empuja el librero" lo gira sobre su canto como una puerta y deja ver la terraza, sus fotos, lo que incluye ser Socio Auténtico y el botón de WhatsApp para pedir la membresía. Con `prefers-reduced-motion` se abre sin giro. Es distinto de todos los de `METODOS.md` (no es una rockola, ni calculadora, ni reloj).

## Estructura
1. Encabezado fijo: logo, secciones y "Agenda tu cita" por WhatsApp.
2. Portada: foto del salón con el mapa de México, H1 "Barbería, SPA & Club Social", zona y dos botones.
3. Barbería: carta por pestañas (Paquetes, Corte, Afeitado, Recorte) con precios; a un lado la tarjeta de regalo "Experiencia Auténtica" ($1,290), los dos barberos con su WhatsApp y la mesa de billar.
4. Spa: carta por pestañas (Paquetes, Masajes, Faciales, Terapias), foto de la cabina y cómo se aparta la cita.
5. Club Social: el librero.
6. Tienda: las cuatro pomadas y el aceite, con precio y enlace a su tienda.
7. Reseñas: las tres que publica su sitio.
8. Contacto: zona, teléfono, correo, redes, Maps.
9. Barra fija en móvil: WhatsApp, llamar y cómo llegar.

## Qué se evita (revisión contra lo genérico)
- Sin etiquetas pequeñas en mayúsculas sobre cada sección, sin numeración 01/02 y sin puntos medios como separador.
- Sin animaciones al hacer scroll: el único movimiento es el del librero, y porque lo pide el usuario.
- Las cartas de servicios son listas de precios, no filas de tarjetas idénticas; las reseñas van una grande y dos chicas.
- Sin degradados de moda: solo el oscurecido de la foto de portada para leer el título.
- No se inventan horarios, dirección exacta, ni más barberos (la reseña menciona a "Alfredo", pero el sitio solo publica a Miguel Leon y Santiago Pajaro).
