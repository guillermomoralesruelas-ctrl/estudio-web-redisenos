// Lanza el navegador (Chromium vía Playwright) para las herramientas de QA/capturas.
// En la nube, Chromium ya viene instalado y PLAYWRIGHT_BROWSERS_PATH apunta a él.
import fs from 'node:fs';
import { chromium } from 'playwright';

// La versión de Playwright del proyecto puede no coincidir con el Chromium
// preinstalado en /opt/pw-browsers; si existe, se usa ese ejecutable directo.
const PREINSTALADO = '/opt/pw-browsers/chromium';

export async function lanzarNavegador() {
  return chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
    ...(fs.existsSync(PREINSTALADO) ? { executablePath: PREINSTALADO } : {}),
  });
}
