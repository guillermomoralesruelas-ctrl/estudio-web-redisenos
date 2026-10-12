# Plan de diseño: CARSA Inmobiliaria (método 1.2 en la nube, lote 10)

## Negocio y público
Inmobiliaria en el Centro Cívico de Mexicali (De los Pioneros 1140). Su sitio en EasyBroker muestra la red completa, pero solo 52 propiedades llevan "Asesor: Carsa Inmobiliaria": 35 casas (muchas son modelos nuevos en privadas: Paseo de Santiago, Privada San Andrés, Toscana, Altaria, Monet), 6 departamentos, 6 terrenos, locales y bodegas y 5 rentas; 50 en Mexicali y 2 en Playas de Rosarito. Público: familias de Mexicali que comparan casas nuevas en privadas, y propietarios que quieren vender o rentar.

## Qué le falta al clon
Solo trae la plantilla, miniaturas de 450 px de propiedades ajenas, 11 imágenes rotas y desborde horizontal (416 px en escritorio, 1,306 px en celular según el QA).

## Concepto
"Dos casas, lado a lado": en una ciudad de privadas parecidas, la decisión casi siempre es entre dos. Azul y carbón de su logotipo sobre un tono arena del valle, con un acento teja.

## Tokens
- Colores: azul #0B5592 (del logotipo, AA con blanco), carbón #2E2F33, arena #F5F0E7, teja #A84B22 (AA con blanco y sobre arena).
- Fuentes: Lexend (títulos, geométrica como las letras del logotipo) y Figtree (texto).

## Estructura
1. Cabecera con la casa del logotipo, nombre y WhatsApp.
2. Portada: H1, fotos del modelo Santiago (fachada, comedor y escalera), cifras por tipo.
3. **Dos casas, lado a lado** (memorable): dos selectores, fotos, siete renglones con barras, conteo de renglones ganados, "otra de precio parecido" y WhatsApp para ver las dos.
4. Catálogo de sus 52 propiedades con filtros por tipo.
5. Nosotros: su texto, logotipo e interiores.
6. Contacto y barra fija en el celular.

## Qué se evita
- Mostrar propiedades de otras inmobiliarias.
- Mapa, histograma, calculadora o dispersión (ya usados en el lote).
- Inventar asesores, reseñas, años o datos que el sitio no publica.
