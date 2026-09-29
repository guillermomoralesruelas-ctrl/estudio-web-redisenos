import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Método 1.1: las imágenes son copias .webp de las del clon, hechas con fotos-web.mjs en ../assets/web (el clon no se toca).
// base './' permite abrir dist/ directamente desde XAMPP:
// http://localhost/project-1-25092026/proyectos/51-arenahybridclub/rediseno/dist/index.html
export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: '../assets/web',
  base: './',
  build: { assetsDir: '_app' },
});
