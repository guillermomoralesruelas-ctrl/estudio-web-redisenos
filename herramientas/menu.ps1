# Menu del Estudio Web. Se abre con terminal.cmd (doble clic).
$Raiz = Resolve-Path (Join-Path $PSScriptRoot '..')
Set-Location $Raiz
$Host.UI.RawUI.WindowTitle = 'Estudio Web'
$db = Join-Path $Raiz 'herramientas\db.mjs'

function Pedir-Proyecto {
  & node --no-warnings $db proyectos
  return (Read-Host "Slug del proyecto")
}

while ($true) {
  $n = @(Get-ChildItem (Join-Path $Raiz 'cola\pendientes') -Filter *.ps1 -ErrorAction SilentlyContinue).Count
  Write-Host ""
  Write-Host "=========== ESTUDIO WEB ===========" -ForegroundColor DarkYellow
  Write-Host " 1  Ver proyectos"
  Write-Host " 2  Ejecutar cola de Claude  (pendientes: $n)"
  Write-Host " 3  Nuevo proyecto"
  Write-Host " 4  Descargar imagenes de un proyecto"
  Write-Host " 5  Levantar sitio de un proyecto (npm run dev)"
  Write-Host " 6  Abrir Claude Code aqui"
  Write-Host " 7  Revisar requisitos (node, npm, git, claude)"
  Write-Host " 0  Salir"
  $op = Read-Host "Opcion"
  switch ($op) {
    '1' { & node --no-warnings $db proyectos; & node --no-warnings $db tareas }
    '2' { & (Join-Path $PSScriptRoot 'ejecutar-cola.ps1') }
    '3' {
      $slug = Read-Host "Slug (minusculas y guiones, ej: hotel-azul)"
      $nombre = Read-Host "Nombre del proyecto"
      $url = Read-Host "URL del sitio original (opcional)"
      & (Join-Path $PSScriptRoot 'nuevo-proyecto.ps1') -Slug $slug -Nombre $nombre -Url $url
    }
    '4' { $p = Pedir-Proyecto; & (Join-Path $PSScriptRoot 'descargar-assets.ps1') -Proyecto $p }
    '5' {
      $p = Pedir-Proyecto
      $sitio = Join-Path $Raiz "proyectos\$p\sitio"
      if (-not (Test-Path (Join-Path $sitio 'package.json'))) { Write-Host "Ese proyecto aun no tiene sitio\package.json" -ForegroundColor Yellow }
      else {
        $cmd = "Set-Location '$sitio'; if (-not (Test-Path node_modules)) { npm install }; npm run dev"
        Start-Process powershell -ArgumentList '-NoExit', '-ExecutionPolicy', 'Bypass', '-Command', $cmd
        Write-Host "Se abrio otra ventana con el servidor. Normalmente: http://localhost:5173"
      }
    }
    '6' {
      if (Get-Command claude -ErrorAction SilentlyContinue) { & claude }
      else { Write-Host "Claude Code no esta instalado. Instalalo con:  npm install -g @anthropic-ai/claude-code" -ForegroundColor Yellow }
    }
    '7' {
      foreach ($c in 'node', 'npm', 'git', 'claude') {
        $cmdInfo = Get-Command $c -ErrorAction SilentlyContinue
        if ($cmdInfo) { $v = (& $c --version 2>$null | Select-Object -First 1); Write-Host ("  OK   {0,-7} {1}" -f $c, $v) -ForegroundColor Green }
        else { Write-Host ("  FALTA {0}" -f $c) -ForegroundColor Red }
      }
      Write-Host "  (node debe ser 22.13 o mayor para la base de datos)"
    }
    '0' { return }
    default { Write-Host "Opcion no valida" }
  }
}
