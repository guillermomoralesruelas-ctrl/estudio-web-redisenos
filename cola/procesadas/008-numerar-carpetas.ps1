# QUE HACE: Renombra proyectos\10experiences a proyectos\01-10experiences (nueva numeracion), actualiza la BD y guarda un commit. CIERRA ANTES la ventana del servidor del sitio (npm run dev).
Set-Location $PSScriptRoot\..\..
$db = 'herramientas\db.mjs'
$viejo = 'proyectos\10experiences'
$nuevo = 'proyectos\01-10experiences'

if ((Test-Path $viejo) -and -not (Test-Path $nuevo)) {
  $movido = $false
  if ((Test-Path .git) -and (Get-Command git -ErrorAction SilentlyContinue)) {
    git mv $viejo $nuevo 2>$null
    if ($LASTEXITCODE -eq 0) { $movido = $true }
  }
  if (-not $movido) {
    try { Move-Item $viejo $nuevo -ErrorAction Stop; $movido = $true }
    catch { Write-Host "No se pudo mover la carpeta. Cierra la ventana donde corre el sitio (npm run dev) y vuelve a ejecutar la cola." -ForegroundColor Red; exit 1 }
  }
  Write-Host "Carpeta renombrada: $nuevo"
} else { Write-Host "Nada que mover (ya existe $nuevo o no existe $viejo)." }

node --no-warnings $db set 10experiences numero 1
node --no-warnings $db set 10experiences carpeta 01-10experiences
foreach ($n in 0..6) { node --no-warnings $db fase 10experiences $n hecha | Out-Null }
node --no-warnings $db fase 10experiences 7 proximamente | Out-Null
node --no-warnings $db fase 10experiences 8 proximamente | Out-Null
if (Get-Command git -ErrorAction SilentlyContinue) {
  $hash = (git rev-list -n 1 10experiences-v1 2>$null)
  if ($hash) { node --no-warnings $db version 10experiences 10experiences-v1 $hash.Substring(0,7) }
}
node --no-warnings $db proyectos

if ((Test-Path .git) -and (Get-Command git -ErrorAction SilentlyContinue)) {
  git add -A
  git commit -q -m "Estudio: numeracion de carpetas (01-10experiences)`n`nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`nClaude-Session: https://claude.ai/code/session_018iH7oAMf4z6V3UCN4aDPey"
  git log --oneline -1
}
