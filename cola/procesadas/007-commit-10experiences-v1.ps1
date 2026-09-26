# QUE HACE: Crea el repositorio git del estudio (si no existe) y guarda el commit y la etiqueta "10experiences-v1" con el diseno aprobado del sitio.
Set-Location $PSScriptRoot\..\..
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Host "Git no esta instalado. Instalalo desde https://git-scm.com y vuelve a ejecutar este script." -ForegroundColor Red
  exit 1
}
if (-not (Test-Path .git)) { git init -b main | Out-Host }
if (-not (git config user.name))  { git config user.name "Estudio Web" }
if (-not (git config user.email)) { git config user.email "guillermomoralesruelas@gmail.com" }
git config core.autocrlf true

$msg = @"
10experiences: sitio v1 (diseno aprobado)

- Sitio Vite + React + Tailwind + Framer Motion en proyectos/10experiences/sitio
- Concepto "Un pasaporte por Mexico"; plan en entregables/plan-diseno.md
- Reserva por WhatsApp con experiencia y horario preseleccionados
- 103 imagenes oficiales + 13 ilustraciones optimizadas a WebP
- Propuesta para el cliente en entregables/propuesta-rediseno-cliente.md
- Estructura del estudio: herramientas, cola, base de datos, plantillas
- PROCESO.md: diseno del proceso URL -> sitio para siguientes proyectos

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_018iH7oAMf4z6V3UCN4aDPey
"@
$tmp = Join-Path $env:TEMP 'estudio-commit-msg.txt'
[IO.File]::WriteAllText($tmp, $msg, (New-Object System.Text.UTF8Encoding($false)))

git add -A
git commit -F $tmp | Out-Host
if ($LASTEXITCODE -ne 0) { Write-Host "No se pudo crear el commit (quiza no habia cambios)." -ForegroundColor Yellow }
if (-not (git tag -l "10experiences-v1")) { git tag -a "10experiences-v1" -m "10experiences: diseno v1 aprobado" }
git log --oneline --decorate -3 | Out-Host
Write-Host "`nArchivos en el commit:" ; (git ls-files | Measure-Object).Count

node --no-warnings herramientas\db.mjs log 10experiences "Commit v1" "git tag 10experiences-v1" --autor persona
