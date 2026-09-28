import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Método 1.1: fotos-web.mjs genera copias .webp en ../assets/web (no toca el clon).
// base './' permite abrir dist/ directamente desde XAMPP:
// http://localhost/project-1-25092026/proyectos/235-clinicadermatologicay/rediseno/dist/index.html
export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: '../assets/web',
  base: './',
  build: { assetsDir: '_app' },
});
