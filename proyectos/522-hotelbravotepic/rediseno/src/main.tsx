import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuente: Montserrat (la del sitio original), declarada en index.css con solo el subconjunto latino.
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
