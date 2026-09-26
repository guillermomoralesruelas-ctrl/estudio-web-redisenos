import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes con @fontsource, solo el subconjunto latino (Hanken Grotesk se declara en index.css).
import '@fontsource/young-serif/latin-400.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
