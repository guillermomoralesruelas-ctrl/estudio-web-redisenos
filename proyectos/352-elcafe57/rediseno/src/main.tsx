import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuente de la marca (Open Sans, la de su sitio): @font-face en index.css, variable, solo latino.
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
