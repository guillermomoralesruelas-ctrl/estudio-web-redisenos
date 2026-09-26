import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes de la marca (Playfair Display y Montserrat, las que original.html pide a Google Fonts):
// se cargan desde @fontsource, solo el subconjunto latino, con @font-face en index.css.
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
