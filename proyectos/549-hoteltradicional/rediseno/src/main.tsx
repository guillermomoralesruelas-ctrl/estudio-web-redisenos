import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes de su sitio (style.css): Josefin Sans en los títulos y Poppins en el texto, de @fontsource y solo el
// subconjunto latino (las declara src/index.css con @font-face).
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
