import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Su logo usa letras gruesas y redondas ("DOGGIE'S"): títulos en Nunito (negra) y texto en Inter.
import '@fontsource-variable/inter';
import '@fontsource-variable/nunito';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
