# QUE HACE: Instala la skill oficial "frontend-design" (Anthropic) en .claude\skills para que Claude Code la use en este estudio.
Set-Location $PSScriptRoot\..\..
New-Item -ItemType Directory -Force -Path .claude\skills\frontend-design | Out-Null
Copy-Item plantillas\skills\frontend-design\* .claude\skills\frontend-design\ -Force
Get-ChildItem .claude\skills -Recurse -File | ForEach-Object { Write-Host "  OK  $($_.FullName)" }
node --no-warnings herramientas\db.mjs log - "Skill frontend-design instalada" "fuente: github.com/anthropics/skills" --autor persona
