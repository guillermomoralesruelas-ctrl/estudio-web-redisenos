# Entregables de la sesión en la nube, lote 3 (2026-09-27 y 2026-09-28)

Lote de 30 sitios de `INSTRUCCIONES-NUBE.md`, trabajados uno por uno con el método 1.1. Cada sitio se subió en su propio commit a `main` y a la rama de la sesión. La nube cerró **18 rediseños y 12 descartes**. Los 18 rediseños pasaron `qa-rediseno.mjs` sin problemas: 0 desbordes, un solo H1, 0 imágenes rotas, 0 errores de consola y 0 recursos fallidos. Los 12 descartes también están en `DESCARTADOS.md` con su tipo de motivo.

Cambios de herramientas en este lote:
- `herramientas/navegador.mjs` (nuevo): abre el Chromium preinstalado de la nube cuando existe.
- `herramientas/qa-rediseno.mjs` (8764bd1): en páginas de más de 16,000 px solo captura los primeros 16,000 (Chromium fallaba con clones muy altos).

Dos sitios van **en inglés**, como su sitio original: 651 Let's Smile y 612 Ikarus. Los demás van en español.

| # | Sitio | Resultado | Commit | Alto escritorio / celular | Prioridad |
|---|---|---|---|---|---|
| 1 | 26-alasdelhombre | Terminado | 2cfc95c | 5,184 / 7,648 px | MEDIA |
| 2 | 486-harmonyspahuatulco | Terminado | 9f43ecc (+ 9923bf6, d39b53c) | 3,556 / 5,545 px | MEDIA |
| 3 | 539-hotelplazacolonial | Terminado | 8127ac8 | 5,108 / 7,140 px | **ALTA** |
| 4 | 605-katarsiscdmx | Terminado | cad1aa8 | 6,055 / 10,231 px | MEDIA |
| 5 | 499-holboxphotos | Descartado, `url-ajena` | 63be691 | — | — |
| 6 | 439-gabyboatpesca | Descartado, `url-ajena` | b5f6ede | — | — |
| 7 | 394-estudio184piercing | Terminado | 294df1f | 6,055 / 8,581 px | **ALTA** |
| 8 | 428-foriu | Descartado, `cadena` | 2f75eda | — | — |
| 9 | 456-gomexicoadventures | Terminado | 798fffb | 6,482 / 10,421 px | **ALTA** |
| 10 | 574-inmobiliariatitan | Terminado | 327e1f7 | 3,008 / 4,321 px | MEDIA |
| 11 | 419-floreriaflordivan | Terminado | 4a6342f | 4,924 / 7,161 px | **ALTA** |
| 12 | 383-escueladebuceo | Terminado | cd69149 | 5,941 / 10,234 px | **ALTA** |
| 13 | 508-hospitalveterinariojoaqu | Terminado | bd73845 | 4,660 / 8,841 px | MEDIA |
| 14 | 347-ecoturismo | Descartado, `sin-fotos` | 4c967d6 | — | — |
| 15 | 651-letssmile | Terminado (en inglés) | 5e00e4a | 5,407 / 10,163 px | MEDIA-BAJA |
| 16 | 407-eyeklinik | Descartado, `sin-fotos` | d227df2 | — | — |
| 17 | 546-hotelsoleilcelaya | Terminado | c03cf87 | 4,430 / 7,450 px | MEDIA |
| 18 | 322-doggieshospital | Terminado | 173c2e8 | 5,412 / 8,646 px | MEDIA |
| 19 | 337-drtoothsaltillo | Terminado | 8dba5a3 | 4,948 / 6,649 px | MEDIA |
| 20 | 607-kenaxturismo | Descartado, `sin-fotos` | f20991b | — | — |
| 21 | 294-dentalevolution | Descartado, `sin-fotos` | 4b81559 | — | — |
| 22 | 580-interlingua | Descartado, `cadena` | 902df8e | — | — |
| 23 | 612-kiteboardmexicoikarus | Terminado (en inglés) | 0d2152b | 4,797 / 7,571 px | MEDIA |
| 24 | 396-estudiolotus | Descartado, `sin-contacto` | 53a7436 | — | — |
| 25 | 503-hommebarbers | Terminado | d5dad5d | 3,718 / 5,729 px | **ALTA** |
| 26 | 492-hermesspa | Descartado, `sin-fotos` | fdd05ab | — | — |
| 27 | 346-dulcevegamake | Terminado | 6856bde | 4,111 / 6,293 px | **ALTA** |
| 28 | 398-eveliosportfishing | Terminado | 6bb1d66 | 2,995 / 4,101 px | **ALTA** |
| 29 | 72-aventurasmayas | Descartado, `sin-fotos` | 6e693a5 | — | — |
| 30 | 555-huatulcotoursand | Descartado, `sin-fotos` | 0acf3d3 | — | — |

## Rediseños

### 26 Alas del Hombre (Valle de Bravo)
- **Elemento memorable:** "¿Y después de aterrizar?". El vuelo es igual en todos los paquetes, así que eliges qué hacer al tocar tierra (cena, hotel, masaje, lancha, karts, cascadas) y ves qué paquetes lo incluyen, con el trayecto dibujado, el día parada por parada, el precio y WhatsApp.
- **Hallazgo principal (MEDIA):** dos vuelos del menú dan 404 y el precio del vuelo cambia entre español ($1,980) e inglés ($2,190).
- **Confirmar:** precio del vuelo; si los paquetes siguen vigentes; si aún vuelan desde El Peñón; punto exacto en el mapa.

### 486 Harmony Spa (Crucecita, Huatulco)
- **Elemento memorable:** "Ida y vuelta, ya resuelta". La visita en 4 paradas con el traslado gratis de ida y vuelta al hotel, su mejor argumento, que en su sitio solo estaba dentro de una imagen.
- **Hallazgo principal (MEDIA):** el traslado gratis solo existe en una imagen con `alt="Beauty centre"`; fallas de SEO y accesibilidad.
- **Confirmar:** horario; si los 8 paquetes (pie "© 2019") siguen vigentes; el WhatsApp +52 958 122 9345.

### 539 Hotel Plaza Colonial (Campeche)
- **Elemento memorable:** "Abre una ventana". Su fachada amarilla con postigos azules dibujada en SVG; cada balcón, ventana o puerta abre una parte real del hotel con su foto.
- **Hallazgo principal (ALTA):** su descripción para Google es "Just another WordPress site" y el sitio se ve de 2017, aunque tiene fotos nuevas muy buenas.
- **Confirmar:** si tiene WhatsApp (se usó el fijo (981) 811 9900); qué foto es de qué habitación; el motor de reservas; el 01-800.

### 605 Katarsis (Ciudad de México)
- **Elemento memorable:** "¿De qué quieres hablar?". Temas tomados de los perfiles de cada psicoterapeuta; al elegir uno quedan quienes lo atienden, con cédula, enfoque, modalidad y precio.
- **Hallazgo principal (MEDIA):** le dice a Google que abre 24 horas en consultorios que solo atienden con cita, y usa fotos de banco de médicos.
- **Confirmar:** direcciones completas de Tlalpan y Félix Parra; modalidad de cada terapeuta; horario real.

### 394 Estudio 184 (Ciudad de México)
- **Elemento memorable:** "Tu idea, en papel de stencil". Su instrucción para cotizar hecha herramienta: tatuaje o perforación, sucursal, zona, medidas y artista, con el dibujo a escala en papel de calco y WhatsApp.
- **Hallazgo principal (ALTA):** Contacto, Promociones, Estudio 184 y Eventos dan 404; sus WhatsApp no se pueden tocar; Google no tiene título ni descripción.
- **Confirmar:** dirección de Del Valle; horario por sucursal; equipo actual.

### 456 Go México Adventures (Xochimilco)
- **Elemento memorable:** "Súbanse: ¿cuántos van?". Una trajinera con "Somos 4" en el arco que se llena con una figura por persona; quedan las experiencias donde cabe el grupo, con el total.
- **Hallazgo principal (ALTA):** "Login" y "Sign Up" llevan al sitio de demostración de la plantilla, y la mayoría de sus imágenes están hechas con IA.
- **Confirmar:** precio de "Sabores en la Chinampa" ($199 o $399); precio de niño; punto de encuentro exacto.

### 574 Inmobiliaria Titán (León)
- **Elemento memorable:** "El termómetro del metro cuadrado". Cada propiedad es un punto según su precio por m², con la mediana de su tipo; al tocarla, su ficha con "…% abajo/arriba de la mediana" y WhatsApp.
- **Hallazgo principal (MEDIA):** sin WhatsApp, Google la ve como "Homepage", "COLONIA PRUEBA" en su buscador y textos de la plantilla en inglés.
- **Confirmar:** número de WhatsApp; dirección de la oficina; si las rentas son mensuales y la superficie es de terreno o construcción.

### 419 Florería Flordivan (Guadalajara)
- **Elemento memorable:** "Llena tu caja". Su caja redonda vista desde arriba se llena con 24 a 200 rosas del color que elijas, con el mensaje en la tarjeta y WhatsApp.
- **Hallazgo principal (ALTA):** su página de bodas muestra "Lorem ipsum" bajo cada pareja y un error del feed de Instagram.
- **Confirmar:** horario de entrega; si hay tienda física; qué Instagram usar; errores del catálogo.

### 383 Escuela de Buceo Proyecto Azul (Ciudad de México)
- **Elemento memorable:** "La Línea Azul". Sus 20 cursos como mapa del metro, de Nado y Snorkeling a Dive Master con ramales de especialidades; eliges nivel y edad y cada estación dice si puedes tomarla o qué te falta.
- **Hallazgo principal (ALTA):** su botón de WhatsApp abre un número sin el 52; el correo de Tienda dice "info@www…"; dice 2, 3 o 4 albercas según la página.
- **Confirmar:** cuántas albercas; año del calendario de viajes; si hay curso de instructor.

### 508 Hospital Veterinario Joaquín Buxadé (Puebla)
- **Elemento memorable:** "Pasa, te enseñamos el hospital". Plano ilustrativo con hospitalización (perros, gatos, exóticos), quirófano, diagnóstico, rehabilitación, estética, recepción con la entrada 24 h y tienda; cada sala abre su foto real.
- **Hallazgo principal (MEDIA):** título de Google como lista de palabras sin acentos, faltas de ortografía, sin correo, redes ni horario de Lomas de Angelópolis.
- **Confirmar:** horario y dirección de Lomas de Angelópolis; correo y redes; servicios por unidad.

### 651 Let's Smile Dentistry (Mexicali; en inglés)
- **Elemento memorable:** "Meet your dentist before you cross". Eliges tratamiento y ves su precio en Mexicali contra EE. UU. y los dentistas que se enfocan en eso, con tarjetas que se voltean entre "Good to know" y "Fun to know".
- **Hallazgo principal (MEDIA-BAJA):** su sección de urgencias dice "emergency dentist in California & Arizona" y la formación del Dr. Salinas cambia entre páginas.
- **Confirmar:** qué dentista atiende niños; vigencia de la tabla de precios; foto del Dr. Preciado.

### 546 Hotel Soleil Celaya
- **Elemento memorable:** "Acomoda a tus invitados". Sus 3 salones a escala; eliges montaje y personas, las sillas se acomodan en filas, mesas de dos, U o mesas redondas y se marca dónde caben.
- **Hallazgo principal (MEDIA):** páginas con título "EURO INN" (otra marca), la Master Suite no se puede reservar y el sitio principal no muestra precios.
- **Confirmar:** tarifa de la Master Suite; medida de la terraza del Scala; fotos de salones y fachada.

### 322 Doggie's Hospital Veterinario (Monterrey)
- **Elemento memorable:** "¿A qué hora es tu urgencia?". Un reloj de 24 horas con la hora de Monterrey; al moverlo dice qué hospital te abre (Especialidades 24 h; Serena y Sur sin horario publicado).
- **Hallazgo principal (MEDIA):** sin WhatsApp, sin horarios de 2 hospitales y el menú de sus páginas legales lleva al dominio de pruebas de Webflow.
- **Confirmar:** horarios de Serena y Sur y teléfono de Sur; número de WhatsApp.

### 337 Dr. Tooth (Saltillo)
- **Elemento memorable:** "Nueve sonrisas, un solo gesto". Sus 9 casos de antes y después en un muro; un solo deslizador mueve una línea dorada en las nueve fotos a la vez.
- **Hallazgo principal (MEDIA):** el botón de citas abre web.whatsapp.com (versión de computadora, en inglés) y la página de Contacto tiene reglas de una promoción que no se describe.
- **Confirmar:** permiso de los pacientes (se usan solo nombres de pila); cuál es la promoción; correo del dominio.

### 612 Kiteboard Mexico Ikarus (Isla Blanca, Cancún; en inglés)
- **Elemento memorable:** "Your kite trip, priced before you pack". Clase, personas, cuarto y noches; un boleto con el total y un kite por hora en el agua, y WhatsApp con el resumen.
- **Hallazgo principal (MEDIA):** tarifas de cuartos distintas entre páginas (doble $1,980 o $1,800; king $2,772 o 126 USD) y una descripción de Google con otro nombre.
- **Confirmar:** tarifas vigentes de cuartos; si quieren versión en español.

### 503 Homme Barbers (Cancún)
- **Elemento memorable:** "¿Paquete o suelto?". Marcas servicios y compara el precio suelto contra el mejor de sus 4 paquetes, con el ahorro o una sugerencia; aviso "Abierto ahora" con la hora de Cancún.
- **Hallazgo principal (ALTA):** teléfono y ubicación con enlaces a `#` (ni `tel:` ni WhatsApp) en un negocio sin cita, y dos nombres (Homme Barbers y El Taller Barbershop).
- **Confirmar:** el nombre; si el 998 103 3712 tiene WhatsApp; la plaza y el horario del domingo.

### 346 Dulce Vega Make up Artist Studio (Guadalajara)
- **Elemento memorable:** "Tu corte de honor". Novia o quinceañera más mamá, madrina, damas y amigas con + y −; siluetas, total con sus paquetes y WhatsApp.
- **Hallazgo principal (ALTA):** la lista de precios dice Novia $8,800, Quinceañera $7,500 y Social $2,200, pero sus botones de WhatsApp mandan $8,300, $6,000 y $1,800.
- **Confirmar:** precio vigente de cada paquete ("con el staff"); número principal; logo en archivo.

### 398 Evelio Sport Fishing (Puerto Escondido)
- **Elemento memorable:** "¿Qué hay en el mar ese mes?". Mes del viaje con la temporada de ballenas (noviembre a marzo), personas y salidas con estado, precio y costo por persona.
- **Hallazgo principal (ALTA):** sus 4 enlaces de WhatsApp van a wa.me/9541009497, sin el 52; paseo sin precio para 6 personas.
- **Confirmar:** precio para 6 y de delfines; si la pesca de $7,000 es por lancha; punto de salida.

## Descartes

| # | Sitio | Motivo | Detalle |
|---|---|---|---|
| 5 | 499-holboxphotos | `url-ajena` | Portal de experiencias de terceros en más de 30 destinos, sin sede |
| 6 | 439-gabyboatpesca | `url-ajena` | La URL es de Xperience Ixtapa, una agencia que revende el bote |
| 8 | 428-foriu | `cadena` | Plataforma de belleza a domicilio en 5 países |
| 14 | 347-ecoturismo | `sin-fotos` | Agencia mayorista; su página de créditos dice que las fotos son de los operadores |
| 16 | 407-eyeklinik | `sin-fotos` | Solo 2 retratos del doctor y un collage; el resto de banco |
| 20 | 607-kenaxturismo | `sin-fotos` | Postales de destinos de banco; su API trae 68 viajes con fechas de salida, útil para el método 1.2 |
| 21 | 294-dentalevolution | `sin-fotos` | Fotos de banco y 2 o 3 propias a menos de 300 px |
| 22 | 580-interlingua | `cadena` | Escuela de inglés nacional, hoy 100% en línea, sin plantel en Cancún |
| 24 | 396-estudiolotus | `sin-contacto` | Solo formulario; además es una agencia de páginas web, del mismo giro |
| 26 | 492-hermesspa | `sin-fotos` | Fotos de banco o con aspecto de IA; dirección distinta entre páginas |
| 29 | 72-aventurasmayas | `sin-fotos` | Banners con texto y collages de 250 × 400 px; operador grande |
| 30 | 555-huatulcotoursand | `sin-fotos` | 3 imágenes en el clon; el sitio en vivo bloquea con reto anti-bot |

## Para retomar
- Los rediseños con WhatsApp no publicado usan el teléfono del negocio y lo dicen en su `CAMBIOS.md` (539, 574, 322, 503): confirmar antes de enseñar la propuesta.
- Las carpetas `assets/web/` no se suben a git: en la PC se regeneran con `node rediseno/fotos-web.mjs` antes de `npm run build`.
- Los descartes `sin-fotos` con buen contenido (607 Kenax, 407 Eyeklinik, 294 Dental Evolution) son candidatos para el método 1.2 si el cliente da fotos.
