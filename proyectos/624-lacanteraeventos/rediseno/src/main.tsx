import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes de la marca (las del sitio original), solo el subconjunto latino.
import '@fontsource/libre-baskerville/latin-400.css';
import '@fontsource/libre-baskerville/latin-400-italic.css';
import '@fontsource/libre-baskerville/latin-700.css';
import '@fontsource/quattrocento-sans/latin-400.css';
import '@fontsource/quattrocento-sans/latin-700.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
