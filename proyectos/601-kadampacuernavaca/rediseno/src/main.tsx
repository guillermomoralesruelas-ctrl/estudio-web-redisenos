import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Nunito (redondeada, cercana al logotipo) para títulos y Literata para el texto; solo el subconjunto latino.
import '@fontsource/nunito/latin-600.css';
import '@fontsource/nunito/latin-700.css';
import '@fontsource/nunito/latin-800.css';
import '@fontsource/literata/latin-400.css';
import '@fontsource/literata/latin-600.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
