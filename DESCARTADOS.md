# Sitios descartados y saltados

Registro de los sitios que **no** se rediseñaron con el método 1.1 y por qué, para poder reclasificarlos después (otro método, pedirle material al cliente o sacarlos de la lista). `METODOS.md` sigue llevando el estado de cada sitio; aquí va el motivo agrupado por tipo.

**Regla:** cada vez que se descarte un sitio, o se salte al elegir candidatos, se agrega su fila aquí además de en `METODOS.md`. Esto vale para la PC y para la nube.

## Tipos de motivo

| Clave | Motivo | Cómo se podría recuperar |
|---|---|---|
| `sin-fotos` | Menos de 3 fotos propias usables: las del clon son de banco, de fabricante, de Google Maps (EXIF de Picasa/Google), hechas con IA o de otro negocio | Método 1.2 si el negocio da fotos propias |
| `sin-contacto` | No hay WhatsApp, teléfono ni dirección, así que no se pueden cumplir los requisitos de WhatsApp prellenado y Google Maps | Retomar si el cliente da un número y una ubicación |
| `url-ajena` | La URL de la base apunta a un directorio, portal de reservas, revista o nota de prensa, no al sitio del negocio | Buscar el sitio propio del negocio y volver a clonar; si no tiene, es cliente para sitio nuevo (método 1) |
| `cadena` | Cadena o corporativo grande: no es el tipo de cliente del estudio | Solo si Guillermo decide lo contrario |
| `pocas-fotos` | Tiene fotos propias pero muy pocas o de baja calidad para un rediseño completo | Revisar a mano; puede servir para un sitio de una página |

## Descartados (revisados a fondo)

| Carpeta | Negocio | Ciudad | Motivo | Detalle | Dónde |
|---|---|---|---|---|---|
| `172-casamariahotel` | Casa Maria Hotel | Puerto Vallarta, Jal. | `url-ajena` | La URL es de un sitio de reservas de terceros, no del hotel | PC |
| `139-cafeole` | Café Olé | Loreto, BCS | `sin-fotos` | Solo 3 fotos grandes, todas con EXIF de Picasa (de Google Maps), y una parece del hotel vecino. cafeole.shop parece generado por terceros: sin teléfono, dirección incompleta, reseñas con el mismo avatar | PC |
| `596-joyeriapaco` | Joyería Paco | Taxco, Gro. | `sin-contacto` | Joyería de mayoreo en Shopify sin teléfono, WhatsApp ni dirección física | PC |
| `391-estanteriavinoslicores` | Estantería Vinos & Licores | Culiacán, Sin. | `sin-contacto` | Licorería solo de envío a domicilio en Shopify, sin WhatsApp ni tienda física. La base dice Aguascalientes pero el sitio anuncia envío en Culiacán | PC |
| `316-distribuidoraeanpets` | Distribuidora Ean Pet's | Ciudad de México | `sin-fotos` | Ninguna foto propia: productos de fabricante, gráficos de Canva con perros y gatos de banco, una imagen hecha con ChatGPT y el logo solo a 32×32 px. Sí tiene WhatsApp (55 3901 1584) | Nube |
| `469-grupoandersons` | Grupo Anderson's | Cancún, Q. Roo (la base dice San Luis Potosí) | `cadena` | Consorcio restaurantero con 50 unidades en varios países y sin canal para el comensal (ni WhatsApp ni `tel:`). Sus 50 ubicaciones con coordenadas están en `investigacion/original.html` si se retoma | Nube |
| `353-elclaustro` | El Claustro, Educación Continua de la Universidad del Claustro de Sor Juana | Ciudad de México | `sin-fotos` | Sus imágenes de curso son de banco, ilustraciones, dos parecen hechas con IA y el resto son postales con texto; solo dos podrían ser propias (un pasillo y sus publicaciones), a 300 px. Tampoco publica dirección (sí WhatsApp 56 2139 9597 y 56 2139 9598). Es una universidad con seis áreas de contacto y decenas de programas | PC |
| `499-holboxphotos` | HolboxPhotos | Sin sede (la base dice Sayulita, Nay.) | `url-ajena` | Portal de experiencias de terceros (picnics, pedidas y sesiones en más de 30 destinos, con "¡Hazte anfitrión!" y blog de moda en Copenhague y Madrid), no un negocio local: sin dirección, WhatsApp de EE. UU. (+1 858 877 9227). Fotos de banco (Pixabay, Unsplash), postales de destinos y de los anfitriones; solo unas 5 podrían ser propias | Nube |
| `439-gabyboatpesca` | Gaby Boat (pesca chica y snorkel) | Zihuatanejo, Gro. | `url-ajena` | La URL es de Xperience Ixtapa, una agencia (DMC) con el sitio en inglés que revende yates de terceros (Bloody Hook, Gaby Boat), tours y traslados; "Gaby Boat" solo existe como un producto de su tienda (`?product=gaby-boat-deep-sea-fishing-copy`). Sin WhatsApp publicado; el clon solo trae 5 miniaturas de 360 × 240 (una con EXIF de Google). Retomar si Gaby Boat tiene sitio o redes propias, o evaluar a Xperience Ixtapa como cliente aparte | Nube |
| `428-foriu` | Foriu (peinado y maquillaje a domicilio) | Sin sede (la base dice CDMX) | `cadena` | Plataforma de servicios de belleza a domicilio para novias, XV años y eventos, con red de "coaches", registro "Únete a Foriu", línea de uñas Nailu y selector de país (México, Estados Unidos, Perú, Chile y Colombia); en México lista más de 20 ciudades (CDMX, Toluca, Valle de Bravo, Acapulco, Puebla, Querétaro, Hermosillo, Torreón, Chihuahua…). Sin dirección; WhatsApp +52 1 55 1289 1489 detrás de wa.link. Jina chocó con reto anti-bot. Retomar solo si Guillermo decide trabajar con plataformas | Nube |
| `347-ecoturismo` | Ecoturismo (agencia de viajes y mayorista) | Sin sede publicada, teléfonos de la CDMX (la base dice Valle de Bravo) | `sin-fotos` | Agencia desde 2003 que revende excursiones de operadores en todo México. Su página "Créditos de las imágenes" dice que las fotos son de los operadores y que las publica "de buena fe"; el resto son imágenes de la plantilla. Sí tiene contacto (WhatsApp 55 3888 6633, tel. 55 5646 1034, info@ecoturismo.com.mx). Retomar si la agencia da fotos propias o con permiso de sus operadores | Nube |
| `407-eyeklinik` | Eyeklinik (oftalmología, Dr. Alejandro Tamez) | San Pedro Garza García, N. L. | `sin-fotos` | Solo 2 retratos propios del doctor y un collage con logos; el resto son imágenes genéricas de banco (consultorio, pasillo, ojo, LASIK, cataratas y exámenes a 600 px). Sí tiene contacto completo (tels. 81 2085 4245 y 81 1492 4940, Av. José Vasconcelos 316 Ote., Consultorio 7) y el texto del clon está completo. Retomar con método 1.2 si da fotos del consultorio y del equipo | Nube |
| `607-kenaxturismo` | Kenax Turismo (agencia de viajes) | Ciudad de México (la base dice Querétaro) | `sin-fotos` | Todas las imágenes son postales de destinos de banco (una con C2PA) y algunas de su tienda están hechas con ChatGPT; ninguna de sus grupos o coordinadores. Tiene contacto completo (WhatsApp 55 6133 7747) y su API de WooCommerce trae 68 viajes con fechas de salida ("¿Cuándo nos vamos?"), buena base para un calendario de salidas. Retomar con método 1.2 si da fotos de sus viajes | Nube |
| `294-dentalevolution` | Dental Evolution (clínica dental) | Cancún, Q. Roo | `sin-fotos` | Imágenes de banco (modelos sonriendo, doctor de catálogo, banners) y solo 2 o 3 posiblemente propias a menos de 300 px; sitio muy antiguo (tour virtual en Flash). Tiene WhatsApp (998) 887 8561 y horario publicado. Retomar con método 1.2 si da fotos de la clínica y de su galería de antes y después | Nube |
| `580-interlingua` | Interlingua (escuela de inglés) | Nacional, en línea (la base dice Cancún) | `cadena` | Más de 56 años, más de 1 millón de alumnos y más de 200 maestros; hoy 100% en línea (planes de $1,999 y $2,499 al mes) y sin plantel en Cancún. Las imágenes del clon son avatares y banners. Retomar solo si Guillermo decide trabajar con cadenas | Nube |
| `396-estudiolotus` | Estudio Lotus (diseño web, video y fotografía) | Guadalajara, Jal. | `sin-contacto` | Solo tiene formulario: ni teléfono, ni WhatsApp, ni correo, ni dirección. Es una agencia de páginas web, del mismo giro que el estudio; imágenes de banco e íconos, y shortcodes "[tx_row]" a la vista en su página de fotografía | Nube |
| `492-hermesspa` | Hermes Spa (spa para mujeres) | Guadalajara, Jal. | `sin-fotos` | Fotos de masajes de banco o con aspecto de IA y testimonios en capturas de WhatsApp; ninguna del local. Tiene teléfonos y horario, pero la dirección cambia entre páginas (Lope de Vega 982 y 782). Menú con masajes "Tántrico" y "Seduction": revisar el giro antes de retomar. Retomar con método 1.2 si da fotos propias | Nube |
| `72-aventurasmayas` | Aventuras Mayas (tours de aventura) | Riviera Maya, Q. Roo | `sin-fotos` | Banners con texto encima y collages de 250 × 400 px; solo una o dos fotos limpias. Operador grande (17 tours, Hacienda Chukum, lada gratuita a EE. UU. y Canadá). Retomar con método 1.2 si dan sus fotos sin texto | Nube |
| `555-huatulcotoursand` | Huatulco Tours and Travel (agencia de tours) | Huatulco, Oax. | `sin-fotos` | El clon solo trae un banner, un collage y un fondo; el sitio en vivo bloquea con un reto anti-bot. Tiene teléfono (+52 958 100 4084) y correo. Retomar con método 1.2 si da fotos de sus tours | Nube |
| `342-drasofiamarin` | Dra. Sofía Marín, dermatóloga (Dermaclinik) | Aguascalientes, Ags. | `sin-fotos` | Las 16 fotos de servicios y los fondos del carrusel son de banco con modelos; lo único propio son dos retratos de la doctora en banners de 1920×605 (ella ocupa una franja a la derecha) y el logotipo. La biblioteca de medios en vivo (183 archivos) solo agrega logotipos y demos del tema Bridge. Sí tiene teléfonos (449 971 7545, 449 186 8002, tratamientos 449 387 5645), horario y mapa; no publica WhatsApp. Retomar con 1.2 si da fotos de su consultorio | PC |

## Saltados al elegir candidatos (sin revisar a fondo)

Salieron en `candidatos-1.1.mjs` el 2026-09-27 y se saltaron solo por la URL o el tamaño del negocio. No se abrió el clon con cuidado, así que conviene revisarlos antes de darlos por perdidos.

| Carpeta | Negocio | Ciudad | Motivo | Detalle |
|---|---|---|---|---|
| `513-hotelspamansion` | Hotel & Spa Mansión Solís by Hotsson | Morelia, Mich. | `url-ajena` · `cadena` | La URL es hotelesenmorelia.com (portal) y el hotel es de la cadena Hotsson |
| `647-latorrada` | La Torrada | Monterrey, N. L. | `url-ajena` | La URL es una reseña en residente.mx |
| `406-expobodaxv` | Expo Boda & XV Años 2026 | Xalapa, Ver. | `url-ajena` | La URL es una nota en golpepolitico.com |
| `153-cartiermonterrey` | Cartier Monterrey | Monterrey, N. L. | `url-ajena` · `cadena` | La URL es una nota en hola.com y es una marca de lujo internacional |
| `380-escondidoplace` | Escondido Place | San Miguel de Allende, Gto. | `url-ajena` | La URL es una nota en adn40.mx; además solo 7 fotos locales |
| `632-lagarduna` | La Garduña | Zacatecas, Zac. | `url-ajena` | La URL es una nota en imagenzac.com.mx; solo 7 fotos locales |
| `381-escueladebaile` | Escuela de baile Citlali | Monterrey, N. L. | `url-ajena` | La URL es un directorio (infoescuelas.com.mx) |
| `213-chinahousemexicali` | China House Mexicali | Mexicali, B. C. | `url-ajena` | La URL es un directorio (mexicali.org) |
| `511-hotelspadona` | Hotel & Spa Doña Urraca | San Miguel de Allende, Gto. | `url-ajena` | La URL es de momondo.mx (buscador de viajes); solo 7 fotos locales |
| `609-kevinveleznutriologo` | Kevin Velez, nutriólogo | Cancún, Q. Roo | `url-ajena` | La URL es un directorio (avena.io) |
| `409-fairmontmayakoba` | Fairmont Mayakoba | Cancún, Q. Roo (según la base) | `cadena` | Hotel de la cadena Fairmont |
| `452-goldsgym` | Gold's Gym Saltillo | Saltillo, Coah. | `cadena` · `pocas-fotos` | Franquicia internacional; la URL es la página de sucursales de la marca y solo hay 6 fotos locales |
| `448-georgieurisfotografia` | Georgi Euris Fotografía | Ciudad de México | `pocas-fotos` | Sitio propio (georgieuris.com) pero solo 16 fotos locales. No está descartado: es buen candidato si las fotos sirven |
| `372-ensalsateqdancecenter` | EnsalSateq Dance Center | Corregidora, Qro. | `url-ajena` | La URL es salsavida.com, un directorio de salsa, no el sitio de la academia |
