import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Método 1.1: las fotos vienen del clon (../sitio/assets/images, sin tocar); fotos-web.mjs crea copias .webp
// ligeras de las que se usan en ../assets/web, que es el publicDir.
// base './' permite abrir dist/ directamente desde XAMPP:
// http://localhost/project-1-25092026/proyectos/486-harmonyspahuatulco/rediseno/dist/index.html
export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: '../assets/web',
  base: './',
  build: { assetsDir: '_app' },
});
