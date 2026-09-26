@echo off
REM Doble clic: ejecuta todos los scripts pendientes de la cola (pregunta antes de cada uno).
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0herramientas\ejecutar-cola.ps1"
pause
