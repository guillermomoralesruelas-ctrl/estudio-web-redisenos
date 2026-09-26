import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes de la marca (Cormorant Garamond y Lato, las que el sitio original pide a Google Fonts):
// se cargan desde @fontsource, solo el subconjunto latino, con @font-face en index.css.
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
