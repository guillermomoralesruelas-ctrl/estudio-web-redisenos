# Estudio Web — guía rápida

Espacio de trabajo para analizar, descargar y rediseñar sitios web con Claude. Cada sitio es un proyecto dentro de `proyectos/`, y el estado de todos se guarda en una base de datos local.

## 1. Instalación (una sola vez)

1. **Copia** la carpeta `estudio-web` a `Documentos\estudio-web`, o a donde prefieras.
2. **Revisa los requisitos:** doble clic en `terminal.cmd` → opción **7**. Necesitas:
   - **Node.js 22.13 o mayor** (versión LTS en https://nodejs.org).
   - **Git** (https://git-scm.com), para publicar después.
   - **Claude Code** (opcional, para trabajar desde la terminal): `npm install -g @anthropic-ai/claude-code`
3. **Conecta la carpeta a Claude (Cowork):** en la app, "Agregar carpeta" → `estudio-web`.

## 2. Cómo trabajamos

| Quién | Qué hace |
|---|---|
| **Claude (Cowork)** | Analiza sitios, escribe el código, el contenido y la documentación, y deja en `cola/pendientes` los comandos que hay que ejecutar. |
| **Tú, o Claude Code en la terminal** | Ejecuta la cola: doble clic en `ejecutar-cola.cmd`, o `terminal.cmd` → opción **2**. |
| **Tú** | Inicias sesión en cuentas, haces pagos, aceptas permisos y escaneas códigos QR. |

La salida de cada comando queda en `cola/procesadas/*.log`, y Claude la lee para continuar.

## 3. Menú (`terminal.cmd`)

| Opción | Qué hace |
|---|---|
| 1 | Ver proyectos y tareas |
| 2 | Ejecutar la cola de Claude |
| 3 | Crear proyecto nuevo |
| 4 | Descargar las imágenes de un proyecto |
| 5 | Levantar el sitio (`npm run dev`) |
| 6 | Abrir Claude Code en el estudio |
| 7 | Revisar requisitos |

## 4. Nuevo sitio para rediseñar

1. Menú → **3**. Pide un slug (ej. `hotel-azul`), el nombre y la URL.
2. Pídele a Claude: *"analiza el proyecto hotel-azul"*. Llena `PROYECTO.md`, `assets.json` y `contenido/`.
3. Menú → **4** para descargar las imágenes.
4. Pídele a Claude que construya el sitio y después: menú → **5** para verlo.

## 5. Base de datos

- Archivo: `datos/estudio.db` (SQLite). Cada cambio se exporta también a `datos/estudio.json`, que Claude puede leer sin terminal.
- Desde la terminal, en la carpeta del estudio:
  ```
  db proyectos
  db proyecto 10experiences
  db tareas
  db bitacora 10experiences
  db sql "SELECT slug, estado FROM proyectos"
  ```
- Para ver la base de datos con una interfaz gráfica: **DB Browser for SQLite** (gratis, https://sqlitebrowser.org).
- **Nunca** guardes contraseñas en la base de datos. Usa `db acceso` solo para anotar *dónde* está cada credencial.

## 6. Estructura

Ver `CLAUDE.md`.
