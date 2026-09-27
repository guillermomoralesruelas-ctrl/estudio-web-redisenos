import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes: Fraunces (en la línea de Butler, la serif de su sitio) y Open Sans (la de su sitio). Solo latino.
import '@fontsource/fraunces/latin-400.css';
import '@fontsource/fraunces/latin-500.css';
import '@fontsource/fraunces/latin-400-italic.css';
import '@fontsource/open-sans/latin-400.css';
import '@fontsource/open-sans/latin-600.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
