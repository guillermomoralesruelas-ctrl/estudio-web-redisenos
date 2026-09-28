import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Su logo "soleil" usa una palo seco de trazo fino: títulos en Jost y texto en Inter.
import '@fontsource-variable/inter';
import '@fontsource-variable/jost';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
