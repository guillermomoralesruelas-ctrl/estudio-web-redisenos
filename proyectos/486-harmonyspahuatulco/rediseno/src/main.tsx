import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// El sitio original no tiene tipografía de marca (usa Roboto/Lato/Patua One genéricas de tema),
// así que se elige una pareja con carácter: Fraunces para títulos, Inter para texto y cifras.
import '@fontsource-variable/inter';
import '@fontsource-variable/fraunces';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
