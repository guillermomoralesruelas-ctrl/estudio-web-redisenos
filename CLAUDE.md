# Estudio Web — instrucciones para Claude

Este archivo lo leen Claude (Cowork) y Claude Code en la terminal. Aquí están las reglas del estudio: cómo está organizado, cómo se trabaja un proyecto y qué hacer cuando algo no se puede ejecutar directamente.

Idioma de trabajo: **español**.

> **¿Vas a continuar los rediseños?** Lee primero **`INSTRUCCIONES-METODO-1.1.md`** (qué se hace, para quién, el proceso paso a paso, las herramientas y las reglas) y **`METODOS.md`** (qué método lleva cada sitio y en qué estado está). En cada proyecto rediseñado, **`CAMBIOS.md`** explica en qué se diferencia del sitio original y por qué, y **`OPORTUNIDADES.md`** reúne los argumentos para acercarse al cliente (problemas reales de su sitio actual). El índice de oportunidades por prioridad está en **`OPORTUNIDADES.md`** de la raíz.

## Qué es este estudio

Es un espacio para **analizar sitios web existentes, descargar sus recursos y rediseñarlos** como sitios modernos. Cada sitio es un proyecto dentro de `proyectos/`. El estado de todos los proyectos vive en una base de datos local, SQLite, en `datos/`.

## Estructura

```
estudio-web/
├─ CLAUDE.md              ← este archivo (reglas globales)
├─ LEEME.md               ← guía para la persona (instalación y uso)
├─ INSTRUCCIONES-METODO-1.1.md ← cómo continuar los rediseños (léelo primero)
├─ METODOS.md             ← registro: qué método se usó en cada sitio
├─ OPORTUNIDADES.md       ← índice de oportunidades de venta por cliente, ordenado por prioridad
├─ terminal.cmd           ← doble clic: abre el menú del estudio en PowerShell
├─ ejecutar-cola.cmd      ← doble clic: ejecuta los pendientes de la cola
├─ db.cmd                 ← atajo: db <comando>  (base de datos)
├─ panel.cmd              ← doble clic: Panel del estudio en http://localhost:4000
├─ panel/                 ← servidor y pantalla del panel (llama a Claude Code por fase)
├─ .claude/
│  ├─ settings.json       ← permisos de Claude Code
│  └─ commands/           ← comandos /nuevo-proyecto, /analizar-sitio, etc.
├─ herramientas/          ← scripts reutilizables (NO específicos de un proyecto)
│  ├─ menu.ps1            ← menú interactivo
│  ├─ nuevo-proyecto.ps1  ← crea la carpeta de un proyecto y lo registra en la BD
│  ├─ descargar-assets.ps1← descarga las imágenes listadas en assets.json
│  ├─ ejecutar-cola.ps1   ← ejecuta los scripts que Claude deja en cola/pendientes
│  └─ db.mjs              ← CLI de la base de datos (Node, node:sqlite)
├─ datos/
│  ├─ esquema.sql         ← tablas
│  ├─ estudio.db          ← base de datos (se crea sola; no se sube a git)
│  └─ estudio.json        ← exportación legible de la BD (se regenera en cada cambio)
├─ plantillas/            ← plantillas para proyectos nuevos
├─ cola/
│  ├─ pendientes/         ← scripts .ps1 que Claude escribe para que se ejecuten
│  ├─ procesadas/         ← scripts ya ejecutados, numerados 001, 002... + su .log
│  └─ INSTRUCCIONES.md    ← cómo ejecutar la cola
└─ proyectos/
   └─ <NN-slug>/            ← numeradas: 01-10experiences, 02-1mrfitness…
      ├─ PROYECTO.md      ← brief, análisis, decisiones y estado
      ├─ assets.json      ← manifiesto de imágenes a descargar
      ├─ contenido/       ← textos del sitio (contenido.md / contenido.ts)
      ├─ referencias/     ← capturas del sitio original
      ├─ assets/          ← imágenes descargadas (originales)
      ├─ entregables/     ← prompts, reportes, documentos para el cliente
      ├─ sitio/           ← método 1: código del sitio nuevo | método 3: el CLON (no se modifica)
      ├─ investigacion/   ← método 3: original.html, crudo.json (textos), resumen.json (contacto)
      ├─ rediseno/        ← método 1.1: sitio nuevo (Vite + React); dist/ se abre en XAMPP
      ├─ qa/              ← capturas y reporte-rediseno.json (qa-rediseno.mjs)
      ├─ CAMBIOS.md       ← qué cambió respecto al original y por qué (obligatorio en 1.1)
      └─ OPORTUNIDADES.md ← argumentos para hablar con el cliente (obligatorio en 1.1)
```

## Panel (automatización)

El panel (`panel.cmd` → http://localhost:4000) crea el proyecto con su número, ejecuta cada fase llamando a Claude Code sin pantalla (`claude -p`) con las instrucciones de `plantillas/fases/*.md`, y se detiene en las fases con aprobación (3 concepto, 6 versión final). Al aprobar la fase 6 hace el commit con la etiqueta `<slug>-vN`.
- Herramientas que usan las fases: `herramientas/investigar.mjs`, `descargar-assets.mjs`, `optimizar-imagenes.mjs`, `qa.mjs`, `vista-previa.mjs`.
- Registro en vivo: `proyectos/<NN-slug>/.panel/actividad.jsonl`.

## Flujo de un proyecto (fases)

Los valores de `estado` en la BD son: `analisis` → `assets` → `contenido` → `diseno` → `desarrollo` → `revision` → `publicado`.

1. **Análisis.** Abrir el sitio original en el navegador. Documentar en `PROYECTO.md` el rubro, el público, la paleta, la tipografía, las secciones, los problemas encontrados y la lista de imágenes. Guardar capturas en `referencias/`.
2. **Assets.** Llenar `assets.json` con todas las imágenes y ejecutar `herramientas/descargar-assets.ps1 -Proyecto <slug>`. Después, `db sync-assets <slug>`.
3. **Contenido.** Extraer todos los textos, precios y datos de contacto a `contenido/`. Nunca inventar datos del negocio; si falta algo, se deja como `[PENDIENTE]`.
4. **Diseño.** Definir en `PROYECTO.md` el concepto, los tokens de color y las fuentes, y la estructura de secciones.
5. **Desarrollo.** Crear `sitio/` con el stack estándar (abajo).
6. **Revisión.** `npm run dev` y revisar a 375px, 768px, 1280px y 1920px.
7. **Publicado.** Deploy y registro de las URLs en la BD (`db set <slug> url_preview <url>`).

Al terminar cada paso: `db log <slug> "<qué se hizo>"` y, si cambia la fase, `db estado <slug> <fase>`.

## Stack estándar del sitio

- Vite + React + TypeScript + Tailwind CSS + Framer Motion (compatible con Lovable).
- Todo el contenido editable va en `sitio/src/data/content.ts`.
- Las imágenes se sirven desde `../assets` (en `vite.config.ts`: `publicDir: '../assets'`).
- Accesibilidad: `alt` en todas las imágenes, un solo H1, contraste AA y `prefers-reduced-motion`.
- SEO: title, meta description, Open Graph y JSON-LD.

## Base de datos

- Leer: `db proyectos`, `db proyecto <slug>`, `db tareas <slug>`, `db bitacora <slug>`, `db sql "SELECT ..."` (solo lectura).
- Escribir: `db nuevo <slug> "<nombre>" <url>`, `db estado`, `db set`, `db tarea`, `db hecha <id>`, `db log`.
- **Claude en Cowork** (sin terminal) puede leer `datos/estudio.json`, que es la exportación completa y está siempre actualizada. Para escribir en la BD, deja un script en la cola.

## Cola: cuando Claude no puede ejecutar algo

Si Claude (Cowork) solo puede escribir archivos y no ejecutar comandos:

1. Escribe un script en `cola/pendientes/AAAAMMDD-HHMM-<descripcion>.ps1`.
   - La primera línea es un comentario que dice qué hace: `# QUE HACE: ...`.
   - Usa rutas relativas a la raíz del estudio, con `Set-Location $PSScriptRoot\..\..` al inicio.
   - Nada destructivo: sin `Remove-Item -Recurse`, sin tocar fuera del estudio y sin pedir contraseñas.
2. Le avisa a la persona que hay pendientes.
3. La persona abre `terminal.cmd` → opción "Ejecutar cola", o Claude Code ejecuta `herramientas/ejecutar-cola.ps1`.
4. La salida queda en `cola/procesadas/NNN-<script>.log`, y Claude la lee para continuar.

## Fabricador masivo (1,173 sitios)

El fabricador convierte la base de datos de chatbots en sitios clonados localmente.
Fuente de URLs: `http://localhost/16092026-chats/admin/bots_data.php`
Base de datos propia: `datos/fabricador.db` (SQLite, persiste entre sesiones y cuentas)
Atajo: `fabricador <comando>` (usa `fabricador.cmd` en la raíz)

### Comandos
```
fabricador init                   Carga los ~1,173 bots de la API (solo la primera vez)
fabricador estado                 Progreso actual por estado y por plantilla
fabricador scrape                 Scrapea bots pendientes (reanudable)
  --plantillas                    Solo uno por grupo de plantilla (primero)
  --rubro FITNESS                 Solo ese rubro
  --max 20                        Máximo N sitios en esta ejecución
node herramientas/clonar.mjs <slug>   Descarga HTML+CSS+imágenes → sitio/index.html
```

### Estados de cada sitio en fabricador.db
`pendiente` → `scrapeado` → `construido` → `aprobado`
`omitido` = sin URL | `error` = falló (ver campo `error`)

### Qué guarda cada scrape en proyectos/<NN-slug>/investigacion/
- `original.html` — HTML fuente completo con timestamp (para clonar/reconstruir)
- `crudo.json`    — texto limpio página por página via Jina (para LLM / contenido)
- `resumen.json`  — contacto, imágenes y plataforma consolidados (acceso rápido)

### Qué guarda clonar.mjs en proyectos/<NN-slug>/sitio/
- `index.html`    — copia fiel del original con rutas relativas
- `assets/`       — CSS + imágenes descargadas del sitio original

### Plantillas por rubro
| Plantilla | Rubros |
|---|---|
| salud-bienestar | SALUD, SPA, ESTETICA, VETERINARIA, MASCOTAS |
| turismo-aventura | TURISMO, EVENTOS |
| hospedaje | HOSPEDAJE |
| restaurante-bar | GASTRONOMIA |
| fitness-gym | FITNESS |
| inmobiliaria | INMUEBLES |
| educacion | EDUCACION |
| negocio-local | RETAIL, SERVICIOS, AUTOMOTRIZ, LEGAL, FINANZAS |

### Motor de scraping
Jina AI Reader (`https://r.jina.ai/`) — gratis, sin API key, sin navegador.
Si Jina falla: registra el error en fabricador.db y continúa con el siguiente.
Espera 1.5s entre sitios para no saturar el servicio.

### Herramientas adicionales (creadas en sesión 2026-09-26)
- `herramientas/detectar-plataforma.mjs` — detecta WordPress/Wix/Shopify/etc. desde HTML
- `herramientas/clasificar-plataformas.mjs` — corre retroactivamente sobre todos los construidos
- `herramientas/analizar-calidad.mjs` — clasifica construidos como funcional/reparable/complejo/omitir
- `herramientas/_clonar-loop.mjs` — clonador en loop, excluye WordPress, orden aleatorio
- `herramientas/_recloner-reparables.mjs` — re-clona sitios marcados como reparable
- `herramientas/mysql-setup.mjs` — crea BD `estudio_fabricador` en MySQL con tabla `sitios_plataforma`
- Panel Fabricador en http://localhost:4000 → pestaña "Fabricador" con stats, filtros y tabla

### Columna `calidad` en fabricador.db
- `funcional` — clon local funciona bien, assets en su lugar
- `reparable` — tenía URLs malformadas (bug de clonar.mjs corregido el 2026-09-26), re-clonar
- `complejo`  — WordPress/Joomla/Drupal o sin assets (requiere trabajo manual)
- `omitir`    — Wix/Shopify/Squarespace/Webflow/ueniweb/EasyBroker — no clonables

### Bug corregido en clonar.mjs (2026-09-26)
- `rutaLocal()` usaba `path.join` → backslashes en Windows dentro del HTML
- `reemplazos` incluía URLs externas (CDNs) → se reescribían con rutas rotas
- Fix: solo reescribir URLs del mismo dominio + CSS externos por URL completa (no pathname)
- Plataformas dinámicas bloqueadas: wix, squarespace, shopify, webflow, godaddy-builder, **ueniweb**

### Estado al 2026-09-26
- Scrapeados: ~430 sitios (lotes de 50/100/150/200 con Jina AI Reader)
- Construidos: ~300 sitios clonados localmente
- Calidad: ~158 funcional, ~48 reparable (en proceso), ~55 complejo, ~39 omitir
- WordPress/Joomla/Drupal: excluidos del clonador, pendientes para fase posterior
- Siguiente: continuar `fabricador scrape --max N`, re-clonar reparables, luego fase de rediseño

## Rediseño con método 1.1 (resumen)

Proceso completo en `INSTRUCCIONES-METODO-1.1.md`. En corto:
`node --no-warnings herramientas/candidatos-1.1.mjs <plantilla>` → `node herramientas/nuevo-rediseno.mjs <carpeta>` → plan en `entregables/plan-diseno.md` → código en `rediseno/` → `npm run build` → `node herramientas/qa-rediseno.mjs <carpeta>` (debe dar 0 problemas) → `CAMBIOS.md` → `OPORTUNIDADES.md` (del sitio y de la raíz) → `METODOS.md` → commit.
Nunca inventar datos del negocio; no modificar `sitio/` ni `investigacion/`; no escribir en `datos/fabricador.db`.

## Reglas de seguridad

- **Nunca** guardar contraseñas, API keys ni tokens en archivos del estudio ni en la BD. Los secretos van en `sitio/.env.local` (ignorado por git) o en el panel del servicio. En la BD solo se anota *dónde* está la credencial, no el valor.
- No borrar archivos del usuario. Si algo sobra, se mueve a `_papelera/`.
- Crear cuentas, iniciar sesión, pagar, aceptar términos y escanear QR: siempre lo hace la persona.
- Descargar solo recursos de sitios de clientes con permiso para rediseñarlos.
