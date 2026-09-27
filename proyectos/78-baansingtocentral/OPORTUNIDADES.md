# Baan Singto Central: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json`, o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://baansingtocentral.com/ . Academia de Muay Thai y artes marciales en Plaza La Perla, Zapopan |
| Prioridad | **ALTA**: la portada muestra texto en inglés de la plantilla de una agencia, el único correo está mal escrito y horario y precios solo son imágenes |
| Contacto publicado | Tel. y WhatsApp 33 3808 9373; Instagram @baansingto_central, Facebook baansingtogdl, TikTok @baansingtoacademia, YouTube @baansingto5403 |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-27/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-27 con curl al sitio real (Inicio) y en `crudo.json` (Inicio, Biolink, about-us).

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Texto de plantilla en la portada.** Bajo "Maestros Experimentados", "Campeones…" y "Resultados Garantizados" aparece "We create visually compelling designs…", y hay un bloque "Secciones: Redes Sociales, Presencia en Google, Landing Pages". | Quien llega ve una página a medio terminar, en inglés, sobre diseño web y no sobre Muay Thai. | Inicio en vivo |
| 2 | **El correo está mal escrito.** El enlace de correo apunta a hola@baansingtcentral.com (falta la "o"). | Los correos de posibles alumnos se pierden. | Inicio en vivo |
| 3 | **Restos de otra agencia.** La página about-us se titula "Rayo - Digital Agency" con +1 212-708-9400 y hello@rayostudio.com; el Biolink dice "Design. Development. Digital Art. Branding." | Confunde y resta confianza; Google puede mostrar esos datos. | `crudo.json` |
| 4 | **Horario y precios solo en imagen o en Google Drive.** | No se leen bien en el celular, Google no los indexa y no se pueden copiar. | Inicio en vivo |
| 5 | **Sin H1 ni datos para Google.** 0 H1 en la portada y ningún JSON-LD. | Pierde búsquedas como "Muay Thai Zapopan". | Inicio en vivo |
| 6 | **Detalles técnicos.** Chat de terceros (OpenWidget) y el enlace de teléfono `tel:523338089373` sin el +. | Carga extra; en algunos teléfonos la llamada no sale bien. | Inicio en vivo |

Nota: **es una academia seria**, con más de 20 años, campeones, dos áreas de entrenamiento y un horario amplio. El argumento principal: **quitar lo que parece plantilla y que cualquiera vea en su celular cuándo entrenar y cuánto cuesta.**

## Qué le ofrecemos

- "Arma tu semana": el horario real, filtrado por disciplina, con su mensualidad y WhatsApp prellenado.
- Horario y precios como texto, legibles y encontrables en Google.
- Página limpia de textos ajenos, con H1, datos para Google y barra fija en el celular.

## Mensaje sugerido para el primer contacto

Guillermo lo envía él mismo (por Instagram @baansingto_central o por WhatsApp al 33 3808 9373). Tono: respetuoso y útil.

> Hola, buen día. Soy Guillermo, hago sitios web para negocios locales. Revisé la página de Baan Singto Central y noté que en la portada quedó texto en inglés de la plantilla ("We create visually compelling designs…") y que el correo publicado dice "baansingtcentral", sin la "o", así que esos mensajes no les llegan. Les preparé una propuesta donde cada persona elige qué quiere entrenar y ve su horario y su mensualidad en el celular, y pide informes por WhatsApp. Si les interesa, se la enseño sin compromiso.

## Preguntas para la conversación

- ¿Cómo se cobra entrenar dos disciplinas: $1,800 de "todas"?
- ¿El Judo es solo privado? ¿Sigue vigente el horario de abril?
- ¿Cuál es su correo correcto?
