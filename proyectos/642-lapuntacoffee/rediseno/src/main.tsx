import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes (Shrikhand para títulos y Outfit para el texto), de @fontsource: se declaran en index.css, solo el subconjunto latino.
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
