# Azul Bacalar: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.bacalar.com.mx/ (ventas) y https://www.azulbacalar.com/ (administración y rentas, misma marca) |
| Método | **1.2 en la nube**: el clon no trae fotos; se bajaron de sus dos sitios a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/75-azulbacalar/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

Sus dos sitios (venta en `bacalar.com.mx` y administración de rentas en `azulbacalar.com`) en una sola página: Malena y Casa de Piedra con sus fotos, y un comparador de sus planes que dice qué hace Azul Bacalar y qué te queda a ti.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Ninguna foto | 25 fotos de sus sitios (laguna, Casa de Piedra, renders de Malena y propiedades en renta) y su logotipo en `assets/originales/`, en .webp |

## Qué se cambió (mismo contenido, otra forma)

- Sus páginas de inicio, servicios, por qué invertir, desarrollos, Casa de Piedra, Malena, acerca de y contacto (`bacalar.com.mx`) y lo esencial de `azulbacalar.com` (cómo funciona, planes, renta vacacional y de largo plazo) se juntan en una sola. Los textos largos se resumen sin cambiar lo que dicen.
- Sus 8 infografías de inversiones (Tren Maya, aeropuertos, Ichkabal, Royal Caribbean…) se vuelven una lista de nombres: son imágenes de terceros.
- "SOLD OUT" de Casa de Piedra se traduce como "Vendido".
- Los formularios se sustituyen por WhatsApp (su número del botón flotante, 984 167 5437) y llamada (55 1048 9576).

## Qué se agregó (no existía en el original)

- **"¿Quién se encarga de qué?"** (elemento memorable): eliges el plan Starter o Relax y una tabla marca cada tarea (reservas, limpieza, pagos, mantenimiento de piscina…) como "Azul Bacalar", "Tú" o "No incluido", con el conteo ("12 de 12") y WhatsApp con el plan elegido. Todo sale de la lista de cada plan en `azulbacalar.com`; dos filas juntan tareas parecidas del mismo plan (pagos de servicios, limpieza y lavandería; insumos y amenidades).
- Nota en Casa de Piedra: hoy administran departamentos de sus torres A y B en renta vacacional (de su listado de rentas).
- Textos del estudio: "Agencia inmobiliaria · Bacalar, Quintana Roo", el H1, "Desarrollos que comercializan", "A una cuadra de la laguna", "Roof top de Malena", "¿Quién se encarga de qué?" y su explicación, "Para vacacionar o para quedarte", "El nuevo hot spot del Caribe mexicano" (de su "nuevo Hot Spot del caribe mexicano"), "Compra, vende o desarrolla en Bacalar", el título de contacto, la nota "renders" y los textos alternativos.
- Enlaces a Google Maps con la dirección de cada desarrollo y una búsqueda de "Azul Bacalar" (no publican dirección de oficina). Barra fija en el celular (WhatsApp, llamar, cómo llegar), JSON-LD `RealEstateAgent`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Los "Lorem ipsum" de las páginas de Casa de Piedra y Malena, la imagen genérica de avatar, el logotipo de Grupo Bakal (se nombra en el pie) y el de "Azul Investment".
- La foto `cdp-bienvenidos.jpg` (raíces de un árbol, se ve oscura como portada) y las de infraestructura.
- La lista detallada de propiedades en renta: sigue en `azulbacalar.com`, donde se reserva; aquí se enlaza.

## Qué se conserva al pie de la letra

- Nombre, logotipo y sus franjas de azules, "Somos expertos en el mercado de Bacalar", servicio completo, sus valores, los datos de Malena (8 departamentos, 2 torres de 4 niveles, 2 recámaras y 2 baños, roof top, dirección y "desde $3,096,000", el precio de su página) y de Casa de Piedra (900 m², 12 departamentos, 4 torres, amenidades, dirección), sus 5 pasos, sus canales, el 25.4% de su comparativo, "desde 20% de comisión", las opciones de renta de largo plazo, los datos de la laguna y sus razones para invertir. Teléfono, WhatsApp, correo, Instagram y Facebook.

## Pendiente de confirmar con el cliente

- El precio desde de Malena: $3,096,000 en su página y $2,747,000 en la de desarrollos (se usó el de su página).
- Cuál WhatsApp prefieren: el botón flotante usa 984 167 5437 y la página de contacto 55 1048 9576.
- Dirección de la oficina (dicen tener oficinas en Bacalar, pero no la publican).
- Si quieren unir sus dos sitios en uno.

## Dónde está cada cosa

- Textos, planes, desarrollos y rentas: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs` (crea los .webp)
