# Estudio 184: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, comprobados con `curl` en el sitio real el 2026-09-27 y en `investigacion/original.html`. Los defectos del clon (el tema Avada que no carga) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://estudio184.com/ (y sus reservas en https://estudio184.com.mx/) |
| Prioridad | ALTA: la página de Contacto de su menú da error 404 (junto con Promociones, Estudio 184 y Eventos), sus WhatsApp no se pueden tocar y Google no tiene título ni descripción del estudio; es un estudio con prensa y buen portafolio |
| Contacto publicado | Tel. 55 4755 5123, WhatsApp Roma 55 3715 2425, WhatsApp Del Valle 55 7374 4110, estudio184@gmail.com, IG y FB @estudio184 |
| Propuesta para enseñar | `rediseno/dist/index.html` y `entregables/comparacion-antes-despues.jpg` |

## Hallazgos en su sitio actual

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | Cuatro enlaces del menú dan **404**: CONTACTO (`?page_id=15779`), PROMOCIONES (`?page_id=20658`), ESTUDIO 184 (`?page_id=10883`) y EVENTOS (`/category/eventos/`). | Quien busca cómo contactarlos desde el menú llega a una página de error. | `curl` a cada enlace, 2026-09-27 |
| 2 | Sus WhatsApp (Roma 55 37 15 24 25 y Del Valle 55 73 74 41 10) están escritos como texto, sin enlace; el sitio no tiene ningún botón de WhatsApp. | Desde el celular hay que copiar el número a mano; es su principal canal para cotizar. | `curl` del inicio: 0 enlaces `wa.me` o `api.whatsapp.com` |
| 3 | La portada no tiene título principal (0 H1), ni descripción para Google, ni datos de negocio (sin JSON-LD). | Google no sabe bien que es un estudio de tatuaje en la Roma ni su dirección u horario. | `curl` del inicio |
| 4 | El horario solo está en su página de reservas (estudio184.com.mx), que abre en inglés y con precios en dólares ("EN (USD)"); el sitio principal no lo dice, y la sucursal Del Valle no tiene dirección en ningún lado. | Un cliente local tiene que ir a otra página en inglés para saber a qué hora abren; Del Valle no se puede encontrar. | `curl https://estudio184.com.mx/contact/` y `original.html` |
| 5 | El pie dice "Copyright © 2020" y el portafolio visible es de 2020 a 2022. | Da la impresión de un sitio sin mantenimiento aunque el estudio siga activo. | `curl` del inicio |

## Qué le ofrecemos

- Una página que convierte su forma de cotizar (referencia + cm + zona) en un mensaje de WhatsApp listo, a la sucursal correcta.
- Menú sin errores, WhatsApp de un toque, horario visible y datos para Google.
- Su portafolio por artista y su prensa (MXCITY, El Universal, Cultura Colectiva…) al frente.

## Mensaje sugerido para el primer contacto

> Hola, qué tal. Vi la página de Estudio 184 y noté que el enlace de "Contacto" del menú manda a una página de error (también Promociones y Eventos), y que sus WhatsApp están como texto, así que desde el celular no se pueden abrir. Armé una propuesta donde el cliente llena tamaño en cm y zona del cuerpo, lo ve dibujado en un stencil y se los manda por WhatsApp a la sucursal que elija. ¿Les comparto el enlace?

## Preguntas para la conversación

- ¿Cuál es la dirección de la sucursal Del Valle y su horario?
- ¿Quién está hoy en el equipo en cada sucursal?
- ¿Prefieren recibir cotizaciones por WhatsApp o por su sistema de reservas?
- ¿Quieren que la página de reservas abra en español y en pesos?
