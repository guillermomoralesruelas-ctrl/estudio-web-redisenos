import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Letras condensadas de rótulo de barbería (Bebas Neue) para títulos e Inter para texto.
import '@fontsource-variable/inter';
import '@fontsource/bebas-neue/400.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
