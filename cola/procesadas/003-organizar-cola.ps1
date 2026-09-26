# QUE HACE: Pasa los scripts ya ejecutados de cola\hechas a cola\procesadas con numero (001, 002...), y actualiza el comando /ejecutar-cola de Claude Code.
Set-Location $PSScriptRoot\..\..
$hechas = 'cola\hechas'
$proc = 'cola\procesadas'
New-Item -ItemType Directory -Force -Path $proc | Out-Null
if (Test-Path $hechas) {
  $i = 0
  Get-ChildItem $hechas -Filter *.ps1 | Sort-Object Name | ForEach-Object {
    $i++
    $n = '{0:D3}' -f $i
    $limpio = $_.BaseName -replace '^\d{8}-\d{4}-', ''
    Move-Item $_.FullName (Join-Path $proc "$n-$limpio.ps1")
    $log = Join-Path $hechas ($_.BaseName + '.log')
    if (Test-Path $log) { Move-Item $log (Join-Path $proc "$n-$limpio.log") }
    Write-Host "  $($_.Name)  ->  procesadas\$n-$limpio.ps1"
  }
  # Si ya no queda nada util en hechas (solo .gitkeep), la dejamos vacia; no se borra nada.
}
Copy-Item plantillas\config-claude\commands\ejecutar-cola.md .claude\commands\ejecutar-cola.md -Force
Write-Host "Comando /ejecutar-cola actualizado."
