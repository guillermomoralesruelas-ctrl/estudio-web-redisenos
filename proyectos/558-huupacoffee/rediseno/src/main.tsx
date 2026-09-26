import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes de la marca (Fjalla One y Merriweather, las de su tema de Shopify): @font-face en index.css, solo latino.
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
