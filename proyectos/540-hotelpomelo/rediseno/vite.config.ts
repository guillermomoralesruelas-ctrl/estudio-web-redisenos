import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Método 1.2: las fotos originales están en ../assets/pomelo (sin tocar); fotos-web.mjs crea
// copias .webp ligeras de las que se usan en ../assets/pomelo-web, que es el publicDir.
// base './' permite abrir dist/ directamente desde XAMPP:
// http://localhost/project-1-25092026/proyectos/540-hotelpomelo/rediseno/dist/index.html
export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: '../assets/pomelo-web',
  base: './',
  build: { assetsDir: '_app' },
});
