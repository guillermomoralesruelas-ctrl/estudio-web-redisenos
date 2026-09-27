import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes de la marca (su CSS de Elementor: Playfair Display y Lato), con @fontsource y solo el subconjunto latino: ver index.css.
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
