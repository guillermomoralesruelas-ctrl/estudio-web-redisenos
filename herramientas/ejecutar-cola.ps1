<#
  Ejecuta los scripts que Claude dejo en cola\pendientes (en orden por nombre).
  Al terminar, cada script y su salida (.log) se mueven a cola\procesadas con un numero consecutivo:
      cola\procesadas\001-instalar-config-claude.ps1
      cola\procesadas\001-instalar-config-claude.log
  Uso:
    powershell -ExecutionPolicy Bypass -File herramientas\ejecutar-cola.ps1        (pregunta antes de cada uno)
    powershell -ExecutionPolicy Bypass -File herramientas\ejecutar-cola.ps1 -Si    (ejecuta todos sin preguntar)
#>
param([switch]$Si)
$Raiz = Resolve-Path (Join-Path $PSScriptRoot '..')
$pend = Join-Path $Raiz 'cola\pendientes'
$proc = Join-Path $Raiz 'cola\procesadas'
New-Item -ItemType Directory -Force -Path $pend, $proc | Out-Null

function Siguiente-Numero {
  $nums = Get-ChildItem $proc -File -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -match '^(\d{3})-' } | ForEach-Object { [int]$Matches[1] }
  $max = 0
  if ($nums) { $max = ($nums | Measure-Object -Maximum).Maximum }
  return '{0:D3}' -f [int]($max + 1)
}
function Nombre-Limpio($base) { return ($base -replace '^\d{8}-\d{4}-', '') }

$scripts = @(Get-ChildItem $pend -Filter *.ps1 | Sort-Object Name)
if ($scripts.Count -eq 0) { Write-Host "No hay scripts pendientes en la cola."; return }

foreach ($s in $scripts) {
  $que = (Get-Content $s.FullName -Encoding UTF8 | Where-Object { $_ -match '^#\s*QUE HACE:' } | Select-Object -First 1)
  Write-Host "`n=== $($s.Name) ===" -ForegroundColor Cyan
  if ($que) { Write-Host $que } else { Write-Host "(sin descripcion)" -ForegroundColor Yellow }

  if (-not $Si) {
    $r = Read-Host "Ejecutar? (s = si / n = saltar / v = ver contenido)"
    if ($r -eq 'v') { Get-Content $s.FullName -Encoding UTF8 | Write-Host; $r = Read-Host "Ejecutar? (s/n)" }
    if ($r -ne 's') { Write-Host "Saltado."; continue }
  }

  $inicio = Get-Date
  $salida = & powershell -NoProfile -ExecutionPolicy Bypass -File $s.FullName 2>&1
  $codigo = $LASTEXITCODE
  $salida | Write-Host

  $n = Siguiente-Numero
  $base = "$n-$(Nombre-Limpio $s.BaseName)"
  $log = Join-Path $proc "$base.log"
  $encabezado = "Script: $($s.Name)`nInicio: $inicio`nFin: $(Get-Date)`nCodigo de salida: $codigo`n----------------------------------------"
  ($encabezado, ($salida | Out-String)) | Set-Content $log -Encoding UTF8
  Move-Item $s.FullName (Join-Path $proc "$base.ps1")

  $estado = 'OK'
  if ($codigo -ne 0 -and $codigo -ne $null) { $estado = "ERROR $codigo" }
  Write-Host "--> $estado  (guardado como cola\procesadas\$base)" -ForegroundColor Green
  & node --no-warnings (Join-Path $Raiz 'herramientas\db.mjs') log - "Cola: $base" $estado --autor persona | Out-Null
}
