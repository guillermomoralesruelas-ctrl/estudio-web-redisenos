import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Método 1.2 en la nube: las fotos se bajaron del sitio a ../assets/originales y fotos-web.mjs crea copias .webp en ../assets/web (publicDir).
// base './' permite abrir dist/ directamente desde XAMPP:
// http://localhost/project-1-25092026/proyectos/620-lablancamerida/rediseno/dist/index.html
export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: '../assets/web',
  base: './',
  build: { assetsDir: '_app' },
});
