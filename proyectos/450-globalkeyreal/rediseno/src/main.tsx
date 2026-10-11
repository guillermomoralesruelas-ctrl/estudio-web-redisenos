import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes en src/index.css (@fontsource, solo latín).
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
