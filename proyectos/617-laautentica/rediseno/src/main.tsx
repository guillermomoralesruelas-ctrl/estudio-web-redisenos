import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes de la marca (las del sitio original: Bebas Neue y Prata), solo el subconjunto latino.
import '@fontsource/bebas-neue/latin-400.css';
import '@fontsource/prata/latin-400.css';
// Inter (texto corrido): solo el subconjunto latino, declarado en index.css.
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
