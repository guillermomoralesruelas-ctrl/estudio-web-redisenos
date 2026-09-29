# BCS Eco Tours: oportunidades para hablar con el cliente

> Argumentos para que Guillermo se acerque al negocio. **Solo se anotan problemas del sitio en línea**, confirmados en `investigacion/original.html` o `investigacion/crudo.json`, o abriendo el sitio real. Los defectos del clon (imágenes que no se descargaron, estilos faltantes) **no** son problemas del cliente y no van aquí.
> Antes de contactar, vuelve a abrir el sitio real: puede haber cambiado desde la captura.

| Dato | Valor |
|---|---|
| Sitio | https://loretobaytours.com/ . BCS Eco Tours, safaris marinos, ballena azul, snorkel, buceo y pesca en el Parque Nacional Bahía de Loreto |
| Prioridad | **MEDIA**: sitio propio reciente, con precios y mucho texto, pero con datos que se contradicen (duración, capacidad, precios de ballena azul), un enlace de administración a la vista y fotos de fauna que no parecen suyas |
| Contacto publicado | WhatsApp 613 100 9373; contacto@bcs.tours; Fco. de Ulloa 240, Loreto; Facebook ToursBCS y YouTube @bcstours |
| Propuesta para enseñar | `rediseno/dist/index.html`, `entregables/comparacion-antes-despues.jpg` y `referencias/capturas-2026-09-28/` |

## Hallazgos en su sitio actual

Comprobados el 2026-09-28 con curl al sitio real.

| # | Qué pasa | Por qué le importa al negocio | Dónde se comprobó |
|---|---|---|---|
| 1 | **Los tres safaris dicen "Duración: 1 horas"** en su ficha, y el texto del mismo tour dice "5 a 6 horas". | El viajero no sabe si es un paseo corto o el día entero, y compara mal con otros operadores. | `/tours.php` y `/tour.php?id=24/25/26` en vivo |
| 2 | **Precios y capacidad que no coinciden**: la página de ballena azul da $2,300 por persona (mínimo 5) o $21,000 privado para máximo 10 personas; los safaris, $1,350 a $2,500 por persona para 10 a 16. El "Safari Especial" se llama "Safari Marino Exclusivo" y su texto lo describe como "Safari Privado". | Confunde al que quiere reservar y genera preguntas antes de pagar. | `/ballenaazul/`, `/tours.php` y `/tour.php?id=24` en vivo |
| 3 | **El menú enlaza "admin/login"** a la vista de todos. | Invita a intentos de acceso al panel de administración. | HTML de la portada en vivo |
| 4 | **La foto de ballena de la galería lleva la marca de agua de otro fotógrafo**, y varias fotos de fauna parecen de banco de imágenes. | Riesgo de derechos de autor y resta credibilidad a un operador que sí tiene fotos propias (su lancha Keiko, sus pangas, el dorado). | `uploads/galeria_6a94d9e8a4725.jpg` del sitio |
| 5 | **Tres H1 en la portada** y fotos con texto alternativo genérico ("Foto galería", "Tour", "Blog"). | Google no sabe cuál es el tema principal y no indexa bien las fotos. | HTML de la portada en vivo |
| 6 | **Imágenes pesadas**: un PNG del blog pesa 4.2 MB y la galería suma más de 11 MB. | Lento con la señal de un turista en el celular. | Imágenes del sitio |
| 7 | **Erratas y respuestas informales**: "Safary Marino"; a "¿Empacan el pescado?" responden "Si, claro lo hacemos bien". | Detalle de imagen. | Portada y `/faq.php` en vivo |

Nota: su contenido es muy completo (equipo de las Keiko, itinerario de ballena azul, especies, islas). El argumento principal: **que el viajero vea en un solo lugar qué safari le toca, cuánto le cuesta a su grupo y reserve por WhatsApp, con datos que no se contradigan.**

## Qué le ofrecemos

- "Tu lugar en la Keiko": su lancha con 16 lugares, el precio para el grupo y un WhatsApp con safari, pasajeros, fecha y actividades.
- Una página en español con sus tres safaris, ballena azul, snorkel, buceo y pesca, con sus fotos propias al frente.
- Datos estructurados con dirección, teléfono y los tres safaris.

## Qué hay que pedirle

- Duración real y capacidad de cada safari; precios vigentes de ballena azul.
- Fotos propias de fauna (lobos marinos, ballenas, mantas) tomadas en sus salidas.
- Si el teléfono para llamar es el mismo del WhatsApp.
