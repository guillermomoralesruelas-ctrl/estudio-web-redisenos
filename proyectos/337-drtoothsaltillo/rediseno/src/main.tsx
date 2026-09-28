import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Su logo usa una palo seco geométrica: títulos en Outfit y texto en Inter.
import '@fontsource-variable/inter';
import '@fontsource-variable/outfit';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
