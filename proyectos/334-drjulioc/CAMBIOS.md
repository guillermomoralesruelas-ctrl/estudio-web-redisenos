# Dr. Julio C. Jiménez López: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://drjuliopsiquiatria.com/ |
| Método | **1.1**: rediseño a mano usando el clon del método 3 como materia prima |
| Fecha | 2026-09-29 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/334-drjulioc/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` (lo genera `node herramientas/qa-rediseno.mjs 334-drjulioc`) |

## En una línea

El mismo psiquiatra de San Pedro, con sus credenciales, su proceso, sus terapias y su consultorio, en una página serena donde el paciente arma su primer mensaje de WhatsApp en español, inglés o francés sin tener que contar el motivo.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Google Tag Manager, mapa con API de Google y un carrusel que repite las 21 reseñas (ver `qa/reporte-rediseno.json` → `antes`) | Página sin scripts de terceros: 0 desbordes, 0 imágenes rotas, 0 recursos fallidos; el mapa es el mismo `iframe` de su sitio |

## Qué se cambió (mismo contenido, otra forma)

- Inicio, "Dr. Julio Jiménez", procesos terapéuticos y contacto en una sola página (los tres primeros repetían casi el mismo texto).
- Credenciales como tarjetas con sus cédulas; lo que atiende como etiquetas.
- De 21 reseñas quedaron cuatro que hablan del trato.

## Qué se agregó (no existía en el original)

- **"El primer mensaje, sin tener que explicarlo todo"** (elemento memorable): se eligen idioma (español, inglés o francés), consulta presencial o en línea, horario, para quién es la cita y si prefieres contar el motivo en consulta. Una burbuja de WhatsApp muestra el mensaje en ese idioma y el botón lo envía. La página no guarda nada.
- Una línea de seguridad: "Si estás en crisis o en riesgo inmediato, llama al 911 o acude a urgencias" (texto nuestro).
- Textos nuestros: la entrada del H1 y del mensaje, los pasos resumidos y los botones.
- Barra fija en el celular (WhatsApp, Llamar, Cómo llegar), JSON-LD `Physician` con idiomas y Open Graph.

## Qué se quitó o no se usó

- "100% Opiniones Positivas" y "Juntos podemos… alcanzar tu bienestar y plenitud en todas las áreas de tu vida" (promesas).
- Reseñas que hablan de resultados clínicos ("dio con el diagnóstico en la segunda cita", "mejora significativa").
- "Aviso de Publicidad COFEPRIS:" sin número (ver pendientes) y el correo de la agencia en el aviso de privacidad.
- Los dos banners con fondo gris y el fondo azul decorativo.

## Qué se conserva al pie de la letra

- Credenciales: Médico Cirujano UANL (Céd. Prof. 11779182), Psiquiatría Tec de Monterrey (Céd. Esp. 14039782), Consejo Mexicano de Psiquiatría, Asociación Psiquiátrica Mexicana, 1er lugar en Investigación APM 2023.
- Consulta presencial y en línea, solo adultos, en español, inglés y francés.
- "¿Cuándo acudir?", lo que atiende, los cuatro pasos del proceso y las cuatro terapias.
- Edificio Valle Real, piso 1, puerta 14, Cjon. de los Ayala 101, Zona Los Callejones, C.P. 66220, San Pedro Garza García; tel. 81 4170 3651; WhatsApp 81 4072 6994; su mapa de Google.

## Pendiente de confirmar con el cliente

- **Número del aviso de publicidad COFEPRIS** (su sitio muestra la etiqueta vacía).
- Correo propio para pacientes y para derechos ARCO (su aviso de privacidad usa hola@admi.mx, el de la agencia).
- Horario de consulta (no se publica).
- Si permite mostrar reseñas con nombre o prefiere anónimas.

## Dónde está cada cosa

- Credenciales, proceso, terapias, mensajes y contacto: `rediseno/src/data/content.ts`
- Diseño, secciones y el constructor de mensaje: `rediseno/src/App.tsx`
- Colores y fuentes: `rediseno/src/index.css`
- Imágenes: copias .webp en `assets/web/` hechas con `rediseno/fotos-web.mjs` desde `sitio/assets/` (`publicDir` en `rediseno/vite.config.ts`); el clon no se toca
