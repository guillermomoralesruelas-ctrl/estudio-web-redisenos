<#
  Descarga las imagenes listadas en proyectos\<slug>\assets.json
  Uso:
    powershell -ExecutionPolicy Bypass -File herramientas\descargar-assets.ps1 -Proyecto 10experiences
  Opcional: -Forzar  (vuelve a descargar aunque ya exista el archivo)
#>
param(
  [Parameter(Mandatory = $true)][string]$Proyecto,
  [switch]$Forzar
)
$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$ProgressPreference = 'SilentlyContinue'

$Raiz = Resolve-Path (Join-Path $PSScriptRoot '..')
$dirProy = Join-Path $Raiz "proyectos\$Proyecto"
$manifiesto = Join-Path $dirProy 'assets.json'
if (-not (Test-Path $manifiesto)) { throw "No existe $manifiesto" }

$m = Get-Content $manifiesto -Raw -Encoding UTF8 | ConvertFrom-Json
$destinoRel = 'assets'
if ($m.destino) { $destinoRel = $m.destino }
$destino = Join-Path $dirProy $destinoRel

$total = @($m.assets).Count
Write-Host "Proyecto: $Proyecto | Imagenes: $total | Destino: $destino`n"
$ok = 0; $saltadas = 0; $fallas = @()

foreach ($a in $m.assets) {
  if ($a.url) { $url = $a.url } else { $url = $m.base + $a.ruta }
  if ($a.archivo) { $archivo = $a.archivo } else { $archivo = [IO.Path]::GetFileName(([Uri]$url).AbsolutePath) }
  $carpeta = ''
  if ($a.carpeta) { $carpeta = $a.carpeta }
  $dir = Join-Path $destino $carpeta
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  $ruta = Join-Path $dir $archivo

  if ((Test-Path $ruta) -and -not $Forzar) { $saltadas++; continue }
  try {
    Invoke-WebRequest -Uri $url -OutFile $ruta -UseBasicParsing -TimeoutSec 60 -Headers @{ 'User-Agent' = 'Mozilla/5.0 EstudioWeb' }
    $ok++
    Write-Host "  OK  $carpeta\$archivo"
  } catch {
    $fallas += $url
    Write-Host "  X   $url" -ForegroundColor Red
  }
}

Write-Host "`nDescargadas: $ok | Ya existian: $saltadas | Fallaron: $($fallas.Count)"
if ($fallas.Count -gt 0) {
  $log = Join-Path $dirProy 'assets-fallas.txt'
  $fallas | Set-Content $log -Encoding UTF8
  Write-Host "Lista de fallas: $log" -ForegroundColor Yellow
}
& node --no-warnings (Join-Path $Raiz 'herramientas\db.mjs') sync-assets $Proyecto --autor persona
