import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes: Cardo (la serif de su marca) e Inter, solo el subconjunto latino.
import '@fontsource/cardo/latin-400.css';
import '@fontsource/cardo/latin-400-italic.css';
// Inter: solo el subconjunto latino, declarado en index.css (@font-face).
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
