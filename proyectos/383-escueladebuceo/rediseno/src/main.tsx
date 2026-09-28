import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Su logo usa una palo seco condensada ("Proyecto Azul"): títulos en Barlow Condensed y texto en Inter.
import '@fontsource-variable/inter';
import '@fontsource/barlow-condensed/600.css';
import '@fontsource/barlow-condensed/700.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
