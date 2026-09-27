import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes (Roboto y Outfit, solo latino): se declaran con @font-face en index.css.
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
