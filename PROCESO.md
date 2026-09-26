# Proceso: de una URL a un sitio rediseñado

Propuesta v1, 2026-09-25. Nace de la prueba con 10experiences y está pensada para repetirse con muchas URLs.

---

## 1. El problema que resolvemos

En la prueba, el flujo fue un "ping-pong" manual:

```
Claude (Cowork) escribe → tú copias a Claude Code → Claude Code ejecuta → tú copias el resultado de vuelta
```

Funciona, pero con muchas URLs no escala: cada vuelta depende de ti. La meta es que **tú solo des la URL y apruebes**, y que todo lo demás corra solo, con un registro de cada paso.

---

## 2. Quién hace qué

| Pieza | Dónde corre | Para qué sirve | Límite |
|---|---|---|---|
| **Claude (Cowork)**, el director | Nube + navegador integrado de tu PC | Investigar el sitio (navegador, capturas), analizar imágenes, diseñar, escribir código y documentos | No ejecuta comandos en tu PC; solo lee y escribe archivos en la carpeta conectada |
| **Cola + vigilante**, el puente | Tu PC (PowerShell) | Ejecuta automáticamente lo que Claude deja en `cola/pendientes` y guarda el log | Solo ejecuta scripts de la carpeta de la cola |
| **Claude Code**, el operador local | Terminal de tu PC | Plan B: puede hacer todo el proceso local con `/rediseñar <url>`, o resolver errores de la cola | Mira las imágenes y los sitios peor que Cowork |
| **Node + Vite**, construcción | Tu PC | Instalar, compilar y servir el sitio en localhost | — |
| **Git**, la memoria del código | Tu PC (y GitHub después) | Un commit por fase y una etiqueta por versión aprobada | — |
| **SQLite (`datos/estudio.db`)**, la memoria del estudio | Tu PC | Estado de cada proyecto, tareas, bitácora, imágenes y versiones | Cowork lo lee a través de `datos/estudio.json` |
| **Vercel o Cloudflare**, la publicación | Nube | Liga de prueba para el cliente y producción | Plan comercial para producción |

**El cambio clave para automatizar: el vigilante de la cola.** Es un script (`herramientas/vigilar-cola.ps1`) que se queda abierto y, en cuanto aparece un script nuevo en `cola/pendientes`, lo ejecuta, guarda el log y lo mueve a `procesadas`. Así yo escribo un paso, se ejecuta solo, leo el log y sigo, sin que tengas que copiar nada.

Tiene dos modos:
- **Automático:** ejecuta todo lo que llega. Para fases de rutina, como descargar, instalar o compilar.
- **Con confirmación:** te pregunta antes de ejecutar. Para acciones sensibles, como publicar o hacer push a GitHub.

---

## 3. El proceso por fases (por cada URL)

Cada fase tiene una **entrada**, una **salida guardada** y un **punto de control**. ✋ = necesita tu aprobación.

### Fase 0. Alta *(automática)*
- **Entrada:** la URL.
- **Qué pasa:** se genera el slug (ej. `hotel-azul`), se crea `proyectos/<slug>/` desde la plantilla y se registra en la BD con estado `analisis`.
- **Salida:** carpeta del proyecto + registro en la BD.

### Fase 1. Investigación *(automática, Cowork con el navegador)*
- **Herramientas:** navegador integrado (JavaScript en la página y capturas), WebFetch y búsqueda web.
- **Qué se investiga:**
  1. **Estructura:** página de inicio + todas las páginas del menú.
  2. **Contenido:** textos, precios, horarios, contacto, redes, reseñas y preguntas frecuentes.
  3. **Recursos:** todas las imágenes (`<img>`, fondos CSS, lazy-load y red), con tamaño y peso.
  4. **Marca:** colores más usados, tipografías y logo.
  5. **Técnico:** plataforma (WordPress, Wix…), meta/SEO, `alt`, rendimiento, imágenes rotas, formularios.
  6. **Negocio:** rubro, público, propuesta de valor. Si hace falta, búsqueda web de reseñas y competidores.
  7. **Capturas** del sitio original en escritorio y celular.
- **Salidas:**
  - `investigacion/crudo.json`: todo lo extraído, en bruto.
  - `referencias/*.png`: capturas del sitio original.
  - `PROYECTO.md`: brief y análisis.
  - `contenido/contenido.md`: textos listos para usar.
  - `assets.json`: manifiesto de imágenes.

### Fase 2. Recursos *(automática, cola)*
- `descargar-assets.ps1` baja las imágenes a `assets/`.
- `optimizar-imagenes` (por crear) genera versiones WebP ligeras sin tocar los originales.
- `db sync-assets` registra cuántas bajaron y cuáles fallaron.

### Fase 3. Concepto *(Cowork + skill frontend-design)* ✋
- Plan en dos pasadas: tokens, tipografía, layout, principios y revisión contra los diseños genéricos.
- **Salida:** `entregables/plan-diseno.md`.
- **Control:** apruebas el concepto antes de construir. Es barato cambiar aquí y caro después.

### Fase 4. Construcción *(Cowork escribe, la cola compila)*
- Parte de `plantillas/sitio-base/` (por crear a partir de 10experiences): Vite, Tailwind, fuentes locales, barra móvil, diálogo de reserva o contacto, galería, FAQ y SEO.
- Solo cambia `content.ts`, el `@theme` de colores y las secciones propias del negocio.
- **Salida:** `sitio/` + commit `"<slug>: construcción v1"`.

### Fase 5. Control de calidad *(automática)*
- Compilación y typecheck sin errores.
- Capturas a 375, 768 y 1280 px (Playwright).
- Revisa que no haya desborde horizontal, imágenes rotas ni errores de consola.
- Prueba el flujo principal (reserva o contacto) y los enlaces.
- **Salida:** `qa/reporte.md` + `qa/*.png`. Si algo falla, Cowork corrige y repite.

### Fase 6. Revisión y aprobación ✋ ← **aquí estamos con 10experiences**
- Tú revisas en `localhost` y mandas comentarios; Cowork itera.
- Al aprobar: **commit + etiqueta `<slug>-v1`**, registro en la tabla de versiones y estado `revision → aprobado`.
- **Salidas:** `entregables/propuesta-rediseno-cliente.md` (por qué el nuevo diseño) y la vista previa.

### Fase 7. Integraciones *(siguiente paso)*
- Chat o bot (BuilderBot / WhatsApp), analítica y formularios por correo.
- Commit por integración.

### Fase 8. Publicación ✋
- Push a GitHub, liga de prueba en Vercel, dominio del cliente y etiqueta `<slug>-publicado`.

---

## 4. Almacenamiento: tres capas

### a) Archivos: una carpeta por proyecto, siempre igual
```
proyectos/<slug>/
├─ PROYECTO.md          brief, análisis, decisiones, pendientes
├─ assets.json          manifiesto de imágenes
├─ investigacion/       crudo.json (lo extraído del sitio original)
├─ referencias/         capturas del sitio original
├─ contenido/           contenido.md (textos aprobados)
├─ assets/              imágenes originales + versiones WebP
├─ entregables/         plan-diseno.md, propuesta-cliente.md, vista previa
├─ qa/                  reporte y capturas del sitio nuevo
└─ sitio/               código (Vite + React)
```
Como la estructura es idéntica en todos, cualquier herramienta o persona sabe dónde buscar.

### b) Git: la historia del código
- **Un solo repositorio** para todo el estudio, con un commit por fase.
- **Etiquetas por versión aprobada:** `10experiences-v1`, `hotel-azul-v1`… Permiten volver a cualquier versión.
- Después, un remoto privado en GitHub como respaldo y para conectarlo a Vercel. Cada proyecto se publica desde su carpeta `proyectos/<slug>/sitio`.

### c) Base de datos: el tablero del estudio
Tablas actuales: `proyectos`, `tareas`, `bitacora`, `assets`, `accesos` (solo *dónde* está cada credencial).

Tablas a agregar:
| Tabla | Para qué |
|---|---|
| `lote` | Cola de URLs por procesar: `db lote agregar <url>` y `db lote siguiente` |
| `versiones` | slug, versión, commit, fecha, URL de prueba, aprobado sí/no |
| `hallazgos` | Problemas detectados por sitio (tipo, gravedad). Sirve para la propuesta al cliente y para ver patrones entre sitios |

Con esto, `db proyectos` muestra de un vistazo en qué fase va cada URL.

---

## 5. Cómo se vería el día a día

```
Tú:      "Agrega estas 5 URLs: ..."              → db lote (5 en cola)
Claude:  Fase 0-2 del primero, sin preguntarte   → vigilante ejecuta, Claude lee logs
Claude:  "Plan de diseño de hotel-azul listo"    ✋ apruebas / comentas
Claude:  Fase 4-5                                → sitio + reporte QA con capturas
Tú:      revisas localhost, comentas             ✋ apruebas
Claude:  commit + tag hotel-azul-v1, propuesta   → siguiente URL del lote
```
Tu intervención se reduce a **dos aprobaciones por sitio** (concepto y versión final) y a las acciones que por seguridad siempre son tuyas: cuentas, pagos, publicar, dominios y QR.

---

## 6. Lo que hay que construir para llegar ahí

| # | Pieza | Esfuerzo |
|---|---|---|
| 1 | `vigilar-cola.ps1`, el vigilante con modo automático y modo con confirmación | Bajo |
| 2 | Tablas `lote`, `versiones`, `hallazgos` + comandos en `db.mjs` | Bajo |
| 3 | `plantillas/sitio-base/`, extraída de 10experiences | Medio |
| 4 | Script de investigación reutilizable (JS que extrae contenido, imágenes y colores → `crudo.json`) | Medio |
| 5 | `optimizar-imagenes` (Node + sharp) | Bajo |
| 6 | QA automático con Playwright → `qa/reporte.md` | Medio |
| 7 | Skill `rediseno-web` con estas fases, para que Cowork y Claude Code sigan el mismo proceso | Bajo |
| 8 | Remoto en GitHub + conexión con Vercel | Bajo (requiere tus cuentas) |
