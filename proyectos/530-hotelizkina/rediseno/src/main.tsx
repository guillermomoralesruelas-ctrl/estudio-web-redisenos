import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes de su sitio (style.css): Oswald en los títulos y Lato en el texto, de @fontsource y solo el subconjunto
// latino (las declara src/index.css con @font-face).
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
