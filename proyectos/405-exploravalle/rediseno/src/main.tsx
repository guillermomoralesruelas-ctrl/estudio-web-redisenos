import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes: se cargan en index.css (@font-face con los archivos latinos de @fontsource).
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
