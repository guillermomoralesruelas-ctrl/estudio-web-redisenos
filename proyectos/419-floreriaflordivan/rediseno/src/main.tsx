import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Su logo usa una romana de letras altas y finas; títulos en Playfair Display y texto en Inter.
import '@fontsource-variable/inter';
import '@fontsource-variable/playfair-display';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
