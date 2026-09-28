# Dulce Vega Make up Artist Studio: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://dulcevega.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/346-dulcevegamake/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 346-dulcevegamake`) |

## En una línea

Mismo estudio, mismos paquetes, cursos, productos y contacto; cambia la forma: la página baja de 12,000 px a 4,100 en escritorio y la festejada suma a su corte de honor para saber el total.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 41 de 41 imágenes rotas y 167 errores de consola | 0 y 0 |
| Desborde de 640 px (escritorio) y 1,610 px (celular) | 0 |

## Qué se cambió (mismo contenido, otra forma)

- La lista de precios pasa a tres tarjetas con lo que incluye cada paquete.
- Los cursos de peinado y maquillaje quedan en una lista con una frase cada uno y enlace a su ficha.
- Ortografía: "auténtica", "Academia", "además", "consentirte".

## Qué se agregó (no existía en el original)

- El elemento **"Tu corte de honor"** (`Corte` y `Figura` en `App.tsx`): novia o quinceañera, acompañantes con + y −, siluetas, total y WhatsApp con el detalle.
- WhatsApp prellenado sin precio en el texto (el suyo trae precios distintos a los publicados); barra fija en el celular y enlace a Google Maps.
- JSON-LD `BeautySalon` con horario y rango de precios; Open Graph; favicon con sus iniciales.
- Textos nuestros: el H1, "Tu corte de honor" y su explicación, los nombres de acompañantes ("Mamá", "Suegra o madrina", "Damas o hermanas", "Amigas y familia"), "… mujeres listas", "Cotizar mi fecha por WhatsApp", "Sus paquetes", "Aprende con ellas", "Visita el estudio", "Arma tu corte de honor" y los pies de foto.

## Qué se quitó o no se usó

- "En la mejor academia de Jalisco", "somos tu mejor opción".
- Los recortes de revista ("cinco años enseñando…"), el cartel del Día de la Amistad y el blog de 2016 a 2018.
- El carrito de la tienda (queda el enlace a su tienda).

## Qué se conserva al pie de la letra

- Precios publicados: Paquete Novia $8,800, Quinceañera $7,500, Social $2,200, con lo que incluye cada uno.
- Su lema "Maquillaje para el alma de la mujer", "Donde la estrella eres tú", dirección, horario, teléfonos, WhatsApp, correo y redes, y las marcas con que han trabajado.

## Pendiente de confirmar con el cliente

- **Precios**: sus botones de WhatsApp dicen Novia $8,300, Quinceañera $6,000 y Social $1,800 "con el staff". ¿Son dos niveles (Master DV y staff) o precios viejos?
- Logo en archivo (el clon no lo trae).
- Precios de los cursos (sus fichas muestran dos cifras sin explicar).

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño, secciones y el elemento: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Fotos: `rediseno/fotos-web.mjs` las genera en `.webp` desde `sitio/assets/wp-content/uploads/` hacia `../assets/web` (el `publicDir` de `rediseno/vite.config.ts`); no se descargó ninguna imagen.
