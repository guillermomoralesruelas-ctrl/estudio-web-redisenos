# Cola de ejecución: instrucciones

Aquí Claude (Cowork) deja los comandos que no puede ejecutar por sí mismo en tu computadora.

## Cómo se ejecuta

**Opción A (la más fácil):** doble clic en **`ejecutar-cola.cmd`**, en la raíz del estudio.
Por cada script te muestra qué hace y te pregunta: `s` = ejecutar, `n` = saltar, `v` = ver el contenido.

**Opción B, desde CMD:**
```
cd /d C:\xampp\htdocs\project-1-25092026
powershell -NoProfile -ExecutionPolicy Bypass -File herramientas\ejecutar-cola.ps1
```
Agrega `-Si` al final para ejecutar todos sin preguntar.

**Opción C, con Claude Code:** abre la terminal en la carpeta del estudio, escribe `claude` y luego `/ejecutar-cola`.

## Qué pasa después
- Cada script ejecutado se mueve a `cola\procesadas\` con un número consecutivo: `001-...ps1`, `002-...ps1`, etc.
- Junto a cada uno queda su `.log` con la salida completa. Claude lee esos logs para seguir trabajando.
- También se anota en la bitácora de la base de datos (`db bitacora`).

## Carpetas
| Carpeta | Contenido |
|---|---|
| `pendientes\` | Scripts por ejecutar, en orden por nombre (fecha y hora) |
| `procesadas\` | Scripts ya ejecutados, numerados, con su log |
| `hechas\` | Carpeta anterior; queda vacía después del script `organizar-cola` |

## Pendientes al 25/09/2026
| Orden | Script | Qué hace |
|---|---|---|
| 1 | `20260925-0700-organizar-cola.ps1` | Pasa los dos scripts ya ejecutados a `procesadas\` como 001 y 002 |
| 2 | `20260925-1000-avance-10experiences.ps1` | Marca como hechas las tareas de imágenes y FAQ, y pasa el proyecto a la fase "diseño" |
| 3 | `20260925-1100-instalar-skill-frontend-design.ps1` | Instala la skill de diseño en `.claude\skills` |
| 4 | `20260925-1200-levantar-sitio-10experiences.ps1` | `npm install` + `npm run build` y abre el sitio en http://localhost:5173 en otra ventana |

## Reglas de los scripts
- La primera línea siempre dice `# QUE HACE: ...`.
- No borran archivos, no salen de la carpeta del estudio y no piden contraseñas.
- Si alguno falla, el log dice `Codigo de salida` distinto de 0. Avísale a Claude y lo corrige.
