import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes (Spectral y Lato, las de su sitio): declaradas en index.css, solo el subconjunto latino.
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
