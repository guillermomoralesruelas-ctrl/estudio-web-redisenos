# Alcázar Inmobiliaria: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://www.alcazarinmobiliaria.com/ (plantilla de EasyBroker; páginas inicio, ventas, rentas, contacto, ¿quiénes somos? y aviso de privacidad). Agencia inmobiliaria en Oaxaca de Juárez. Teléfono 951 236 8601, celular y WhatsApp 951 379 8170, inmueblesalcazar@gmail.com, Facebook. No publica dirección de oficina.

**Materia prima:** el clon no trae ninguna foto (todas viven en `assets.easybroker.com`). El 2026-10-09 la nube ya llega a ese dominio: se bajó la foto de portada (450x300) de sus 137 propiedades publicadas (88 en venta, 3 en preventa, 46 en renta), la foto grande de 8 propiedades para el hero y las destacadas, su logotipo y una foto de terraza de su organización. De su listado se tomaron título, tipo, zona, precio, recámaras, baños, m² y coordenadas de cada propiedad (`rediseno/src/data/propiedades.json`).

## Qué le falta al clon

- `qa-rediseno.mjs` (antes): 5 a 7 recursos fallidos (íconos de EasyBroker) y ninguna foto.

## Qué tiene que lograr el sitio

1. Que quien busca casa, terreno o local en Oaxaca encuentre lo que le alcanza sin pasar 9 páginas de listado.
2. Escribir por WhatsApp sobre una propiedad concreta.
3. Transmitir lo que dicen ser: servicio personalizado, transparente y eficiente.

## Concepto

El oro y el gris grafito de su logotipo, la cantera verde de Oaxaca y el blanco de cal. Jost (geométrica, como su logotipo) y Karla.

## Elemento memorable: "Buscar en el mapa"

Un mapa del valle de Oaxaca dibujado con las coordenadas reales de sus 137 propiedades (y un recuadro para las de Puerto Escondido). Eliges comprar o rentar, el tipo, las recámaras y un tope de presupuesto: los puntos que no coinciden se apagan, la lista se ordena por precio y cada tarjeta tiene "Me interesa" (WhatsApp con el título, el precio y el enlace de la ficha) y "Ver fotos y ficha" (su página en EasyBroker).

## Secciones

1. Hero con H1 ("Encuentra tu próxima casa"), su lema y cifras de su listado.
2. Buscar en el mapa.
3. Destacadas (6 con foto grande).
4. ¿Quiénes somos?
5. Contacto (no tiene dirección ni mapa incrustado; enlace a Google Maps con el nombre).
6. Barra fija en el celular: WhatsApp, llamar, propiedades.
