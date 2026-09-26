# QUE HACE: descarga en la PC las 143 imágenes de Hotel Pomelo (el clon de Squarespace no las trajo y la nube no puede bajarlas) a proyectos\540-hotelpomelo\assets\pomelo\ usando assets-1.2.json. Método 1.2.
Set-Location $PSScriptRoot\..\..
node --no-warnings herramientas\descargar-assets.mjs 540-hotelpomelo --manifiesto assets-1.2.json
$n = (Get-ChildItem proyectos\540-hotelpomelo\assets\pomelo -File -ErrorAction SilentlyContinue | Measure-Object).Count
Write-Host "Imágenes en assets\pomelo: $n"
