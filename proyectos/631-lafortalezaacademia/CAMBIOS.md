# La Fortaleza Academia de Artes: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.lafortalezaacademiadeartes.com/ |
| Método | **1.2 en la nube**: el clon no trae fotos; se bajaron del sitio en vivo a `assets/originales/` |
| Fecha | 2026-10-09 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/631-lafortalezaacademia/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La misma academia en una sola página con fotos de sus funciones, sus programas, precios y cartelera, más "Tu semana en La Fortaleza": eliges grupo y horarios, ves tu semana, si algo se cruza y cuánto pagas, y apartas por WhatsApp.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Fotos y fuentes servidas por Zoho; 8 recursos fallidos | 10 fotos y el logotipo en `assets/originales/`, en .webp; fuentes propias |

## Qué se cambió (mismo contenido, otra forma)

- Sus siete páginas (inicio, Diplomado AEI, Enfoques, Taller de Montaje, Contacto, Cartelera, La Sala) se juntan en una sola. Los textos largos de cada programa se resumieron sin cambiar sus datos.
- Los horarios, que en su sitio están repartidos por página y grupo, quedan en la cuadrícula semanal.
- El enlace de WhatsApp roto del contacto (`http://wa.me528142445362/`) y el número partido ("81 42 44 5" / "362") quedan como un solo enlace a wa.me/528142445362.
- Dirección: se usa Mariano Otero 3429, piso 4, int. 4 (contraesquina de Plaza del Sol), la de su inicio y su página de contacto con indicaciones; la de Av. Mariano Otero 2347 planta baja int. B, que aparece en el pie de algunas páginas, va a pendientes.
- Ortografía: "SEstoy aprendiendo" → "Estoy aprendiendo".

## Qué se agregó (no existía en el original)

- **"Tu semana en La Fortaleza"** (elemento memorable): grupo, horarios reales, cuadrícula de lunes a domingo, aviso de horarios que se cruzan, horas por semana, mensualidad con su tabla de precios (AEI, AEI + enfoques, enfoques solos y talleres) y mensaje de WhatsApp con lo elegido.
- La cartelera oculta sola las funciones cuya fecha ya pasó.
- Textos del estudio: el párrafo del hero (resumen de sus datos), "Tu semana en La Fortaleza" y su explicación, "Escenarios reales, público real" (de su frase "Escenarios reales, no solo ensayos"), "Producciones de nuestros alumnos", "Antes de tu primera clase", "Ven a conocer La Fortaleza", los pies de foto y los textos alternativos.
- Barra fija en el celular (WhatsApp, mi semana, cómo llegar), JSON-LD `EducationalOrganization`, title, description e imagen para compartir.

## Qué se quitó o no se usó

- **Los datos bancarios** (banco, beneficiario y CLABE) que su página del Diplomado publica para pagar: no se publican en una propuesta; el pago se acuerda por WhatsApp.
- Las fotos con aspecto de imagen generada (página del Diplomado AEI) y los carteles de cartelera (uno se llama "ChatGPT Image"); también imágenes `optimized_*` que el servidor ya no entrega.
- Lo vencido: bonos de lanzamiento "antes del 16 de agosto de 2026", "inicio primera semana de septiembre 2026" del Diplomado, la audición de Avenida Q "antes del 20 de septiembre" y la función de In the Heights del 20 de septiembre.
- El número 33 1518 6556, que aparece solo como título oculto de un enlace al WhatsApp de 81.
- El formulario de Zoho (zfrmz.com) para apartar lugar: se aparta por WhatsApp.
- La insignia "Powered by Zoho Sites".

## Qué se conserva al pie de la letra

- Nombre, logotipo, "Donde los sueños se hacen arte.", "Guadalajara · Artes Escénicas · Desde 2021", las cifras (250+ alumnos, 7+ producciones, 5 años), los programas con sus horarios, grupos y edades, la tabla de precios de enfoques (+ IVA), la inscripción de $650 + IVA, los precios y estados de los talleres, la cartelera, la trayectoria, los testimonios, La Sala, las preguntas frecuentes, el horario de atención, la dirección, el WhatsApp, el correo y las redes.

## Pendiente de confirmar con el cliente

- Cuál de las dos direcciones es la vigente (3429 piso 4 o 2347 planta baja).
- Fechas del próximo módulo del Diplomado AEI y si siguen los bonos.
- Si el 33 1518 6556 es un número de la academia.
- Que los horarios de Canto por grupo siguen iguales.

## Dónde está cada cosa

- Textos, programas, horarios y precios: `rediseno/src/data/content.ts`
- Fotos: `assets/originales/` y `rediseno/fotos-web.mjs` (crea los .webp)
