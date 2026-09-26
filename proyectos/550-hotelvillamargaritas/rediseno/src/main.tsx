import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes: Playfair Display e Inter (las del sitio original), declaradas en index.css con solo el subconjunto latino.
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
