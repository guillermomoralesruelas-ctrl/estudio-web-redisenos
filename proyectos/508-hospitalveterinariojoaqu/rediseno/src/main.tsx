import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Su logo usa una palo seco redondeada y firme: títulos en Figtree y texto en Inter.
import '@fontsource-variable/inter';
import '@fontsource-variable/figtree';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
