# Esencia Yoga Spa: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.esenciayogaspa.com/ (Squarespace, bilingüe) |
| Método | **1.2 en la nube** (lote 9): el clon solo trae la portada, que es un muro para elegir idioma; se leyeron sus páginas en español y se bajaron 32 fotos, el logotipo y los sellos a `assets/originales/` |
| Fecha | 2026-10-11 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/389-esenciayogaspa/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

El centro de yoga y spa de Melinda Marino en San Miguel de Allende en una sola página en español: qué paquete de yoga te conviene, las diez clases, el menú de spa completo con precio en efectivo o tarjeta, el jardín con jacuzzi, sus terapeutas invitados, retiros y equipo.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| La portada es solo un muro de idioma (English / Español) | Se leyeron inicio, quiénes somos, yoga, spa, experiencias y contacto en español; `rediseno/fotos-web.mjs` hace las copias .webp |
| El logotipo existe solo a 300 px | Se usa pequeño en la cabecera, junto al nombre en texto |

## Qué se cambió (mismo contenido, otra forma)

- Seis páginas se juntan en una, solo en español (su página de yoga en español tiene la mitad de las clases en inglés; se tradujeron).
- Las descripciones largas de clases y tratamientos se resumieron en una o dos frases, **sin promesas de salud** (se quitaron frases como "estimula todos los órganos" o "combate la alopecia").
- Los precios "Efectivo | Tarjeta" se muestran de uno en uno según el selector.
- El horario, que en su sitio es una imagen con corazones de colores, pasa a una tabla; los bloques con calor van en terracota.

## Qué se agregó (no existía en el original)

- **"¿Cuántas clases al mes vas a tomar?"** (elemento memorable): mueves de 1 a 25 clases al mes y la página compara lo que pagarías al mes clase por clase, con el paquete de 10 (vence en 2 meses: con menos de 5 al mes, las que sobran se pierden) y con el ilimitado mensual, marca el que conviene y lo manda por WhatsApp. Usa la forma de pago elegida.
- **Selector efectivo / tarjeta** en la cabecera, en la banda rosa y en el spa: cambia todos los precios de la página.
- Textos del estudio: titulares, introducciones, resúmenes de clases y tratamientos, textos alternativos y la nota de la calculadora.
- Barra fija en el celular (llamar, WhatsApp, mapa), JSON-LD `DaySpa` con horario y coordenadas, title, description e imagen para compartir.

## Qué se quitó o no se usó

- Los formularios de contacto y boletín (en su sitio no funcionan: dicen "This form needs a storage option").
- El texto de ejemplo de la plantilla ("You can edit the text in this area…").
- Las largas listas de beneficios de salud de tratamientos y terapeutas invitados.
- El blog y la versión en inglés.

## Qué se conserva al pie de la letra

- Nombre, dirección, teléfono 415 152 5421, WhatsApp 415 111 0464, correo, horario de atención, redes y TripAdvisor.
- Todos los precios de yoga, spa, tina, terapeutas invitados y el especial de octubre ($2,660 a $2,260, solo efectivo), y las duraciones.
- Nombres, cargos y certificaciones del equipo; avisos de Mindbody, yoga aéreo y formación RYS 200.

## Pendiente de confirmar con el cliente

- Qué estilo de yoga hay en cada bloque del horario (la imagen no lo dice).
- Si el especial de octubre sigue vigente cuando se publique.
- Precios de retiros (se piden por correo).
- Permiso para usar las fotos de terapeutas invitados.

## Dónde está cada cosa

- Textos, precios, clases, spa, invitados y equipo: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs`
