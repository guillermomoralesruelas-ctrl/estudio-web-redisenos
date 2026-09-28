import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// El sitio original usa las fuentes de su tema de WP Travel Engine. Títulos en Bricolage Grotesque (con carácter, como
// las letras pintadas de las trajineras) y texto en Inter. Solo el subconjunto latino.
import '@fontsource-variable/inter';
import '@fontsource/bricolage-grotesque/latin-600.css';
import '@fontsource/bricolage-grotesque/latin-800.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
