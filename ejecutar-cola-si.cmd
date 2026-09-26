@echo off
REM Igual que ejecutar-cola.cmd pero sin preguntar (usa -Si). Los resultados quedan en cola\procesadas.
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0herramientas\ejecutar-cola.ps1" -Si
pause
