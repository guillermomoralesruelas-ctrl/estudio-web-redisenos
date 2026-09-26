# QUE HACE: Instala las dependencias del sitio de 10experiences, actualiza la BD y abre el sitio en http://localhost:5173 (en otra ventana).
Set-Location $PSScriptRoot\..\..
$sitio = 'proyectos\10experiences\sitio'
Push-Location $sitio
npm install
if ($LASTEXITCODE -ne 0) { Write-Host "npm install fallo" -ForegroundColor Red; exit 1 }
npm run build
Pop-Location
$db = 'herramientas\db.mjs'
node --no-warnings $db log 10experiences "Sitio v1 construido" "Vite+React+Tailwind; plan en entregables/plan-diseno.md"
node --no-warnings $db estado 10experiences revision
node --no-warnings $db hecha 5
node --no-warnings $db tarea 10experiences "Revisar sitio v1 y mandar comentarios" persona
$ruta = (Resolve-Path $sitio).Path
Start-Process powershell -ArgumentList '-NoExit', '-ExecutionPolicy', 'Bypass', '-Command', "Set-Location '$ruta'; npm run dev -- --open"
Write-Host "Servidor abierto en otra ventana: http://localhost:5173"
