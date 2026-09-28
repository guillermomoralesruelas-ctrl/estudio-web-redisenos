import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Método 1.1: copias .webp de las fotos del clon en ../assets/web (ver fotos-web.mjs); el clon no se modifica.
// base './' permite abrir dist/ directamente desde XAMPP:
// http://localhost/project-1-25092026/proyectos/575-inmotionbybrahm/rediseno/dist/index.html
export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: '../assets/web',
  base: './',
  build: { assetsDir: '_app' },
});
