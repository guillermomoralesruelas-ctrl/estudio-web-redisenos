# QUE HACE: Marca como hechas las tareas de imagenes y FAQ, crea tareas nuevas y pasa 10experiences a la fase "diseno".
Set-Location $PSScriptRoot\..\..
$db = 'herramientas\db.mjs'
node --no-warnings $db hecha 1
node --no-warnings $db hecha 2
node --no-warnings $db log 10experiences "Contenido completado" "FAQ, politica de cancelacion, acordeones, textos de Chef y Fundadores tomados del sitio"
node --no-warnings $db estado 10experiences diseno
node --no-warnings $db tarea 10experiences "Confirmar ubicacion Melgar (experiencia diurna)" persona
node --no-warnings $db tarea 10experiences "Conectar MCP de BuilderBot a la cuenta" persona
node --no-warnings $db tareas 10experiences
