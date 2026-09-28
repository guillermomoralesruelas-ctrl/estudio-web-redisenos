import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// El sitio original usa las fuentes de su tema (WpResidence). Títulos en Manrope y texto en Inter.
import '@fontsource-variable/inter';
import '@fontsource-variable/manrope';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
