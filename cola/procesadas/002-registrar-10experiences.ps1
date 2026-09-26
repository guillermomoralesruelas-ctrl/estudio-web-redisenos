# QUE HACE: Registra el proyecto 10experiences en la base de datos, crea sus tareas y descarga sus 103 imagenes.
Set-Location $PSScriptRoot\..\..
$db = 'herramientas\db.mjs'
node --no-warnings $db nuevo 10experiences "10 Experiences Tour" https://10experiencestour.com/es/
node --no-warnings $db set 10experiences cliente 10 Experiences
node --no-warnings $db set 10experiences rubro Experiencia gastronomica y cultural de lujo - Cozumel
node --no-warnings $db set 10experiences hosting vercel
node --no-warnings $db log 10experiences "Analisis del sitio original" "PROYECTO.md, contenido.md y assets.json creados por Claude"
node --no-warnings $db estado 10experiences assets
node --no-warnings $db tarea 10experiences "Descargar imagenes (103)" persona
node --no-warnings $db tarea 10experiences "Preguntas frecuentes reales y politica de cancelacion" persona
node --no-warnings $db tarea 10experiences "Confirmar idioma principal del publico (ES o EN)" persona
node --no-warnings $db tarea 10experiences "Quien administra dominio y DNS" persona
node --no-warnings $db tarea 10experiences "Crear sitio Vite + React + Tailwind" claude
node --no-warnings $db tarea 10experiences "Revisar sitio en 375/768/1280/1920" claude
& powershell -NoProfile -ExecutionPolicy Bypass -File herramientas\descargar-assets.ps1 -Proyecto 10experiences
node --no-warnings $db proyecto 10experiences
