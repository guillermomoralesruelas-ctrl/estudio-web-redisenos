import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Las imágenes viven en ../assets (descargadas con herramientas/descargar-assets.ps1)
// y se sirven desde la raíz del sitio: /secciones/..., /galeria/..., /viaje/...
export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: '../assets',
  build: { assetsDir: '_app' },
});
