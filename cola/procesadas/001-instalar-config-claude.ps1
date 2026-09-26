# QUE HACE: Copia plantillas\config-claude a la carpeta .claude (permisos y comandos /nuevo-proyecto, /analizar-sitio, etc. de Claude Code).
Set-Location $PSScriptRoot\..\..
New-Item -ItemType Directory -Force -Path .claude\commands | Out-Null
Copy-Item plantillas\config-claude\settings.json .claude\settings.json -Force
Copy-Item plantillas\config-claude\commands\*.md .claude\commands\ -Force
Get-ChildItem .claude -Recurse -File | ForEach-Object { Write-Host "  OK  $($_.FullName)" }
