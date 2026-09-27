import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Método 1.1: las imágenes usadas en el rediseño se sirven desde assets/web/ (generadas por fotos-web.mjs).
// base './' permite abrir dist/ directamente desde XAMPP:
// http://localhost/project-1-25092026/proyectos/368-emilianajoyeriafina/rediseno/dist/index.html
export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: '../assets/web',
  base: './',
  build: { assetsDir: '_app' },
});
