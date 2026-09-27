import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// El sitio original usa las fuentes de su plantilla de Bootstrap; su logotipo es una palo seca delgada.
// Títulos en Newsreader (serifa editorial, tranquila) y texto en Inter.
import '@fontsource-variable/inter';
import '@fontsource-variable/newsreader';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
