import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/playfair-display/latin-500.css';
import '@fontsource/playfair-display/latin-500-italic.css';
import '@fontsource/playfair-display/latin-600.css';
import '@fontsource-variable/inter';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
