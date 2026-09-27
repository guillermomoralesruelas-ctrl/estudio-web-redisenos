import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes de su sitio (Playfair Display y DM Sans), de @fontsource: se declaran en index.css, solo el subconjunto latino.
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
