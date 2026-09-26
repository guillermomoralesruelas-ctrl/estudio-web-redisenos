# QUE HACE: Instala las herramientas del panel (Playwright + Chromium para capturas, sharp para imagenes), revisa que Claude Code este disponible y guarda un commit.
Set-Location $PSScriptRoot\..\..
Push-Location herramientas
npm install --no-audit --no-fund
if ($LASTEXITCODE -ne 0) { Write-Host "npm install fallo en herramientas" -ForegroundColor Red; Pop-Location; exit 1 }
npx playwright install chromium
Pop-Location

Write-Host "`nComprobando Claude Code..."
$c = Get-Command claude -ErrorAction SilentlyContinue
if ($c) { Write-Host "  OK  $($c.Source)"; claude --version } else { Write-Host "  FALTA: instala Claude Code con  npm install -g @anthropic-ai/claude-code" -ForegroundColor Yellow }

$v = (node -v)
Write-Host "Node: $v (el panel necesita 22.13 o mayor)"

if ((Test-Path .git) -and (Get-Command git -ErrorAction SilentlyContinue)) {
  git add -A
  git commit -q -m "Estudio: panel de automatizacion y herramientas de fase`n`nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`nClaude-Session: https://claude.ai/code/session_018iH7oAMf4z6V3UCN4aDPey"
  git log --oneline -1
}
Write-Host "`nListo. Abre el panel con doble clic en panel.cmd" -ForegroundColor Green
