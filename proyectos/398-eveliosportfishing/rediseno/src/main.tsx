import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Anybody, ancha y pesada como las letras de su logo, para títulos; Inter para texto.
import '@fontsource-variable/anybody';
import '@fontsource-variable/inter';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
