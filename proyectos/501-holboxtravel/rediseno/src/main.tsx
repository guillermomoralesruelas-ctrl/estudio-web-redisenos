import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes: usa las de la marca si existen en @fontsource (npm i @fontsource/<fuente>).
// Importa solo el subconjunto latino, p. ej. '@fontsource/cormorant-garamond/latin-500.css'.
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/source-sans-3/400.css';
import '@fontsource/source-sans-3/600.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
