import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// El sitio original usa Roboto, Patua One y PT Sans Narrow del tema; su logo es un monograma "HP" en caligrafía.
// Títulos en Cormorant Garamond (clásica, como la caligrafía del logo), texto en Inter. Solo el subconjunto latino.
import '@fontsource-variable/inter';
import '@fontsource/cormorant-garamond/latin-500.css';
import '@fontsource/cormorant-garamond/latin-600.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
