# DIPAZ Inmobiliaria: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.dipaz.com.mx/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-28 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/314-dipazinmobiliaria/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 314-dipazinmobiliaria`) |

## En una línea

Mismos datos de negocio (desarrollos, contacto, testimonios). Se corrige el prefijo de WhatsApp (`1` → `52`), se documenta la contradicción de horarios, y se agrega JSON-LD, meta description y barra móvil.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| 6 imágenes rotas (clon WordPress — assets no descargados) | Rediseño usa las 5 fotos disponibles en `sitio/assets/wp-content/` |
| Desborde horizontal en escritorio y móvil | Sin desborde en el rediseño (QA: 0) |
| Logos de bancos no descargados | Sección de créditos solo con texto, sin logotipos |
| Sin meta description ni JSON-LD | Agregados en `index.html` |

## Qué se cambió (mismo contenido, otra forma)

- Paleta: deep navy `#0a1628` + ámbar `#c47d10` (en lugar del azul/blanco del original)
- Tipografía: Montserrat (titulares) + Source Sans 3 (cuerpo)
- WhatsApp: `wa.me/16121300103` → `wa.me/526121300103` (prefijo México `52`)
- Horario: se usa el del footer (`Lun–Sáb 9 AM–7 PM · Dom 10 AM–6 PM`) — hay contradicción con la página Contacto del original (L–V 9–7, Sáb 9–2); ver OPORTUNIDADES.md

## Qué se agregó (no existía en el original)

- Barra móvil fija (Llamar + WhatsApp) en pantallas pequeñas
- Sección "Tipo de hogar" para orientar al visitante (primer hogar / inversión / calidad de vida)
- Sección "Por qué DIPAZ" con los 4 pilares (años, proyectos, familias, créditos)
- JSON-LD `RealEstateAgent` con dirección, teléfonos, horarios y redes sociales
- `<meta name="description">` con 155 caracteres relevantes
- Open Graph completo
- Mapa embed en sección de contacto

## Qué se quitó o no se usó

- Logos de bancos (no disponibles en el clon)
- Formulario de contacto del original (los CTAs van directo a WhatsApp/teléfono)
- Menú de WordPress y barra de administración

## Qué se conserva al pie de la letra

- Nombres y descripciones de los desarrollos (Altavela y Altavista)
- Teléfonos, emails y dirección exacta
- Testimonios (Jesús R. y Paola C. · Altavista; Mariana R. · Altavela)
- Métricas publicadas: 13+ años, 7+ desarrollos, 1,500+ familias
- Lista de créditos: Infonavit, Fovissste, HSBC, Banorte, Santander, Scotiabank, BBVA, Banjercito

## Pendiente de confirmar con el cliente

- ¿El horario correcto es Lun–Sáb 9–7 + Dom 10–6 (footer) o L–V 9–7 + Sáb 9–2 (página Contacto)?
- ¿El número de WhatsApp correcto es (612) 130 0103 con prefijo 52 (+526121300103)?
- ¿Siguen vigentes los dos desarrollos (Altavela y Altavista) o hay nuevas etapas?

## Dónde está cada cosa

- Textos y datos: `rediseno/src/data/content.ts`
- Diseño y secciones: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css` (bloque `@theme`)
- Imágenes: se leen del clon en `sitio/assets/wp-content/` (`publicDir` en `rediseno/vite.config.ts`)
