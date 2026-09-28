# Clínica Dermatológica y Cirugía Estética de Puebla: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json` (captura del 2026-09-26). Los defectos del clon no son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://www.draristidesarellano.com/ |
| Prioridad | **BAJA**: el sitio del Dr. Arellano está excepcionalmente bien hecho — JSON-LD completo, Open Graph, meta descriptions por página, buen SEO. El argumento no es "su sitio está roto" sino "hay una forma más eficiente de presentar su diferenciador principal" |
| Contacto publicado | Teléfono +52 222 237 7494 · WhatsApp +52 221 155 2228 (en el pie del sitio) |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

Ordenados de más a menos grave. El sitio es de alta calidad; los hallazgos son de mejora, no de errores graves.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | El sitio tiene decenas de subpáginas (una por procedimiento: rinoplastia, blefaroplastia, lifting, liposucción…), lo que hace difícil para un visitante nuevo entender el panorama completo de lo que ofrece el doctor | Un paciente que llega buscando "quiero verme mejor" no sabe si buscar en Cirugía, Medicina Estética o Dermatología; puede salir sin escribir | `crudo.json`, menú de navegación del inicio (más de 140 procedimientos en 5 categorías con decenas de submenús) |
| 2 | El WhatsApp del pie enlaza a un número (+52 221 155 2228) y el botón "Agendar" del encabezado enlaza al mismo número, pero el CID de Google Maps registra un número diferente (+52 222 237 7494 para llamadas). Dos números distintos en el mismo sitio pueden generar confusión | Un paciente que intenta marcar puede llamar al WhatsApp esperando respuesta inmediata (o viceversa) | `crudo.json` → sección de contacto y pie de página |
| 3 | El sitio tiene un widget de accesibilidad (lector de pantalla, contraste alto, tamaño de texto) que es un script de terceros. En la captura del clon, los scripts externos no se cargaban, lo que confirma la dependencia de terceros para la accesibilidad | Si el CDN del widget falla o cambia, el botón de accesibilidad deja de funcionar; un riesgo real para un consultorio médico | `investigacion/original.html`, etiquetas `<script>` del encabezado |
| 4 | El sitio no publica el precio de la consulta inicial. Muchos pacientes escriben por WhatsApp solo para preguntar el costo de la primera cita antes de decidir si agendan | Más mensajes de WhatsApp de baja intención, más tiempo del personal respondiendo antes de la valoración real | `crudo.json`, inicio (no hay sección de tarifas en la portada) |

## Qué le ofrecemos

- Un rediseño de **una sola página** que presenta las cinco áreas de práctica del doctor sin que el visitante tenga que navegar por decenas de subpáginas: entra, entiende de inmediato quién es el doctor y qué hace, elige su preocupación y escribe al WhatsApp.
- El selector "¿Qué quieres resolver?" pone el argumento central del doctor ("el equipo se elige por el problema") en manos del visitante: en lugar de que el paciente tenga que adivinar qué procedimiento necesita, elige su preocupación y el sitio muestra los equipos del arsenal que se usan para ella.
- La barra fija en el celular (WhatsApp, Llamar, Cómo llegar) hace que las tres acciones más comunes estén siempre visibles sin desplazarse.
- El sitio compilado funciona sin dependencias de terceros: sin CDN de accesibilidad, sin mapas incrustados, sin scripts externos.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo, desde su cuenta. Tono: respetuoso y útil.

> Hola, Doctor Arellano. Le escribo porque me encontré con el sitio de la clínica — está muy bien hecho, y la forma en que presenta su arsenal de equipos es clara y profesional.
>
> Preparé una propuesta de cómo se vería ese mismo argumento — "el equipo se elige por el problema" — convertido en una herramienta interactiva dentro del sitio: el visitante elige qué le preocupa (arrugas, flacidez, calvicie…) y ve de inmediato qué equipos usan y por qué. Si le parece interesante, con mucho gusto le comparto la maqueta para que la vea en su celular.

## Preguntas para la conversación

- ¿Hay precio de consulta publicable para incluirlo en el sitio y reducir las preguntas de WhatsApp?
- ¿El WhatsApp (+52 221 155 2228) y el teléfono (+52 222 237 7494) tienen funciones distintas (WhatsApp para citas, teléfono para urgencias), o se usa indistintamente?
- ¿Quiere mantener las subpáginas de procedimientos individuales para el SEO, o prefiere consolidar en una sola página?
- ¿Hay fotos nuevas del consultorio o del equipo (además de las que tiene en el sitio) que quiera incluir en el rediseño?
