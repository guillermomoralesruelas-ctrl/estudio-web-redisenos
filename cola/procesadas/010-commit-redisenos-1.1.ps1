# QUE HACE: guarda en git los rediseños método 1.1 (02-1mrfitness, 175-casaorigenes), sus CAMBIOS.md, las herramientas nuevas y las instrucciones para continuar.
Set-Location $PSScriptRoot\..\..
$ErrorActionPreference = 'Continue'

$rutas = @(
  'CLAUDE.md', 'INSTRUCCIONES-METODO-1.1.md', 'METODOS.md', 'OPORTUNIDADES.md', '.gitignore',
  'herramientas/qa-rediseno.mjs', 'herramientas/nuevo-rediseno.mjs', 'herramientas/candidatos-1.1.mjs', 'herramientas/descargar-assets.mjs', 'proyectos/540-hotelpomelo/assets-1.2.json',
  'plantillas/rediseno-1.1',
  'proyectos/02-1mrfitness/CAMBIOS.md', 'proyectos/02-1mrfitness/OPORTUNIDADES.md', 'proyectos/02-1mrfitness/entregables', 'proyectos/02-1mrfitness/rediseno', 'proyectos/02-1mrfitness/qa/reporte-rediseno.json',
  'proyectos/175-casaorigenes/CAMBIOS.md', 'proyectos/175-casaorigenes/OPORTUNIDADES.md', 'proyectos/175-casaorigenes/entregables', 'proyectos/175-casaorigenes/rediseno', 'proyectos/175-casaorigenes/qa/reporte-rediseno.json',
  'proyectos/641-lapuertaroja/CAMBIOS.md', 'proyectos/641-lapuertaroja/OPORTUNIDADES.md', 'proyectos/641-lapuertaroja/entregables', 'proyectos/641-lapuertaroja/rediseno', 'proyectos/641-lapuertaroja/qa/reporte-rediseno.json'
)
$existentes = $rutas | Where-Object { Test-Path $_ }
Write-Host "Agregando $($existentes.Count) rutas a git..."
git add -- $existentes
git status --short -- $existentes | Select-Object -First 60
git commit -m "Método 1.1: rediseños de 1MR Fitness, Casa Orígenes y La Puerta Roja, CAMBIOS.md y OPORTUNIDADES.md por sitio, herramientas (candidatos, nuevo-rediseno, qa-rediseno) e INSTRUCCIONES-METODO-1.1.md"
git log --oneline -3
