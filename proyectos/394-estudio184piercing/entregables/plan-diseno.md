# Estudio 184: plan de rediseño (método 1.1)

**Sitio original:** https://estudio184.com/ (WordPress con el tema Avada, en español)
**Materia prima:** clon en `../sitio/` (fotos en `sitio/assets/wp-content/uploads/`) y `investigacion/original.html`, que es el mismo WordPress que responde hoy. `investigacion/crudo.json` **no** sirve: Jina leyó otra página, su sistema de reservas en Slot (estudio184.com.mx, en inglés). De ahí, con `curl` (2026-09-27), se tomaron solo el horario y los enlaces de reserva de tatuaje y perforación.
**Rubro:** estudio de tatuaje y perforación. **Ciudad:** Ciudad de México; Colima #184, Int. 101, Roma Norte (entre Orizaba y Jalapa) y una sucursal en Del Valle (solo publica su WhatsApp).

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-27): el clon mide 366 px en escritorio y 328 px en el celular: sin el JS de Avada no se ve nada; 18 errores de consola y 3 recursos fallidos.

## Qué tiene que lograr el sitio
1. Que quien quiere un tatuaje mande **lo que el estudio pide para cotizar** (imagen de referencia, tamaño en centímetros y zona del cuerpo) al WhatsApp de la sucursal correcta.
2. Agendar una perforación, con perforador si se quiere.
3. Ver el trabajo de cada artista, saber dónde están, a qué hora abren y qué dijo la prensa.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| noche | #151213 | Fondo general, oscuro como el interior del estudio. Hueso encima 16.29:1 |
| hueso | #f4efe9 | Texto principal |
| gris | #a8a29c | Texto secundario; sale del gris de su logo (#787674), aclarado para fondo oscuro. 7.37:1 sobre noche |
| morado | #45143e | El círculo "184" de su logo (promedio de sus píxeles). Botones. Hueso encima 12.91:1 |
| lila | #d7b3d0 | El morado aclarado para enlaces, chips elegidos y detalles sobre fondo oscuro. 9.97:1 sobre noche |
| papel / tinta de stencil | #f5eff6 / #4a2877 | La hoja de calco del elemento: papel lavanda y tinta violeta, como el papel de transferencia de un estudio. 9.97:1 |

**Tipografía:** su logo es una palo seca redondeada en minúsculas; títulos en Space Grotesk, texto en Inter y Caveat solo para las anotaciones "a mano" de la hoja de stencil.

## Elemento memorable
**"Tu idea, en papel de stencil"**: su propia instrucción para cotizar ("Envía un mensaje con una imagen de referencia describiendo el tamaño en centímetros y zona del cuerpo para dar un costo aproximado") hecha herramienta. Eliges tatuaje o perforación, sucursal (Roma o Del Valle), zona del cuerpo, ancho y alto en centímetros, tatuador o perforador (filtrado por sucursal, del menú de su sitio) y tu idea en pocas palabras; al lado, una hoja de papel de calco morado con cuadrícula de 1 cm dibuja tu tatuaje a escala con sus cotas, la zona y el artista escritos a mano y el sello "184". El botón manda todo a WhatsApp de esa sucursal, pidiendo que adjuntes la imagen de referencia, y ofrece su página de reservas en línea como alternativa. Desde cada artista ("Cotizar con Stich") se llega a la hoja con ese artista ya elegido.
Sale del negocio: su regla de oro es "no copiamos diseños", así que no hay catálogo que elegir; lo que sí hay es un proceso de cotización que hoy está escondido en un párrafo de su portada y en un formulario.
**Por qué no repite otros:** "Metro a metro" (390) dibuja superficies de inmuebles; "zonas del cuerpo" elige tratamientos de spa; aquí se dibuja **tu tatuaje a escala sobre el papel de transferencia** y el resultado es la cotización que el estudio pide.
**Límite honesto:** no hay precios (el estudio cotiza cada pieza); las zonas del cuerpo son una lista nuestra de referencia; la sucursal Del Valle no publica dirección.

## Estructura
1. Encabezado con su logotipo dibujado (gris y círculo morado), enlaces y WhatsApp.
2. Portada: H1 "Estudio 184, tatuaje personalizado y perforaciones en la Roma", su texto de presentación y la foto de su fachada con el letrero.
3. Tu idea, en papel de stencil (el elemento).
4. Artistas: tatuadores y perforadores con una pieza de cada quien, su sucursal y "Cotizar con…"; joyería.
5. Lo que han dicho de nosotros: sus 7 menciones de prensa con enlace, bajo la foto de un tatuador trabajando.
6. Visítanos: dirección, entre calles, Maps, teléfono, horario, los dos WhatsApp, correo y redes.
7. Pie y barra fija en el celular (WhatsApp, Llamar, Cómo llegar).

## Qué se evita (revisión contra lo genérico)
- Etiquetas pequeñas en mayúsculas, numeración 01/02 y puntos medios como separador.
- Animar cada sección al hacer scroll.
- Tarjetas idénticas: los artistas son una galería de piezas; la prensa, citas con filete.
- Inventar precios, reseñas, premios o datos de higiene; la cita de El Universal se usa sin la parte de "estrictas normas de higiene" (es una afirmación que el estudio no hace en su sitio).
