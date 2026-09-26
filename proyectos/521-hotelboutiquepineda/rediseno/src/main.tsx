import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes de la marca (Cardo e Inter, las mismas del sitio original), solo el subconjunto latino (Inter se declara en index.css).
import '@fontsource/cardo/latin-400.css';
import '@fontsource/cardo/latin-400-italic.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
