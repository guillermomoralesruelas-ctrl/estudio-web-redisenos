// Lanza el navegador (Chromium vía Playwright) para las herramientas de QA/capturas.
// En la nube, Chromium ya viene instalado y PLAYWRIGHT_BROWSERS_PATH apunta a él.
// En la PC (Windows), si falta el Chromium de la versión instalada de Playwright,
// se usa Edge o Chrome instalados (INSTRUCCIONES-METODO-1.1.md, sección 4).
import fs from 'node:fs';
import { chromium } from 'playwright';

// La versión de Playwright del proyecto puede no coincidir con el Chromium
// preinstalado en /opt/pw-browsers; si existe, se usa ese ejecutable directo.
const PREINSTALADO = '/opt/pw-browsers/chromium';

export async function lanzarNavegador() {
  const base = { headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] };
  if (fs.existsSync(PREINSTALADO)) return chromium.launch({ ...base, executablePath: PREINSTALADO });
  try {
    return await chromium.launch(base);
  } catch (err) {
    for (const channel of ['msedge', 'chrome']) {
      try { return await chromium.launch({ ...base, channel }); } catch { /* sigue con el siguiente */ }
    }
    throw err;
  }
}
