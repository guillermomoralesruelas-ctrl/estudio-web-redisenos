import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes: Besley y Lato (las de su sitio), declaradas con @font-face en index.css desde @fontsource, solo latino.
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
