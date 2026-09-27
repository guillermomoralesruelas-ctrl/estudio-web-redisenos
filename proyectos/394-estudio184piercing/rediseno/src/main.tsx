import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// El sitio original usa las fuentes de su tema (Avada). Títulos en Space Grotesk, cercana a la palo seca de su logo;
// texto en Inter; Caveat solo para lo "escrito a mano" en la hoja de stencil. Solo el subconjunto latino.
import '@fontsource-variable/inter';
import '@fontsource/space-grotesk/latin-500.css';
import '@fontsource/space-grotesk/latin-700.css';
import '@fontsource/caveat/latin-500.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
