import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes de su sitio (Cormorant en títulos y Poppins en texto): se cargan en index.css con @font-face, solo latino.
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
