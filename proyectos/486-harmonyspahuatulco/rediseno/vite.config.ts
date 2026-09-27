import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Método 1.1: las imágenes vienen del clon (../sitio/assets); no se copian ni se modifican.
// base './' permite abrir dist/ directamente desde XAMPP:
// http://localhost/project-1-25092026/proyectos/486-harmonyspahuatulco/rediseno/dist/index.html
export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: '../sitio/assets',
  base: './',
  build: { assetsDir: '_app' },
});
