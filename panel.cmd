@echo off
REM Doble clic: abre el Panel del Estudio Web en http://localhost:4000
cd /d "%~dp0"
title Estudio Web - Panel
node --no-warnings panel\servidor.mjs
pause
