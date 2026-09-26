<#
  Crea un proyecto nuevo dentro de proyectos\<slug> y lo registra en la base de datos.
  Uso:
    powershell -ExecutionPolicy Bypass -File herramientas\nuevo-proyecto.ps1 -Slug mi-cliente -Url https://sitio.com -Nombre "Mi Cliente"
#>
param(
  [Parameter(Mandatory = $true)][string]$Slug,
  [string]$Url = "",
  [string]$Nombre = ""
)
$ErrorActionPreference = 'Stop'
$Raiz = Resolve-Path (Join-Path $PSScriptRoot '..')
Set-Location $Raiz

if ($Slug -notmatch '^[a-z0-9-]+$') { throw "El slug solo puede tener minusculas, numeros y guiones (ej: hotel-azul)." }
if ([string]::IsNullOrWhiteSpace($Nombre)) { $Nombre = $Slug }

$dir = Join-Path $Raiz "proyectos\$Slug"
foreach ($sub in 'contenido', 'referencias', 'assets', 'entregables') {
  New-Item -ItemType Directory -Force -Path (Join-Path $dir $sub) | Out-Null
}

$brief = Join-Path $dir 'PROYECTO.md'
if (-not (Test-Path $brief)) {
  $t = Get-Content (Join-Path $Raiz 'plantillas\PROYECTO.md') -Raw -Encoding UTF8
  $t = $t.Replace('{{NOMBRE}}', $Nombre).Replace('{{SLUG}}', $Slug).Replace('{{URL}}', $Url).Replace('{{FECHA}}', (Get-Date -Format 'yyyy-MM-dd'))
  [IO.File]::WriteAllText($brief, $t, (New-Object System.Text.UTF8Encoding($false)))
}
$manifiesto = Join-Path $dir 'assets.json'
if (-not (Test-Path $manifiesto)) { Copy-Item (Join-Path $Raiz 'plantillas\assets.json') $manifiesto }

& node --no-warnings (Join-Path $Raiz 'herramientas\db.mjs') nuevo $Slug $Nombre $Url --autor persona
Write-Host "`nProyecto listo en: $dir" -ForegroundColor Green
Write-Host "Siguiente paso: pide a Claude  '/analizar-sitio $Slug'  o llena el Brief en PROYECTO.md."
