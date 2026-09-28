import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Una didona de revista de moda (Bodoni Moda) para títulos e Inter para texto.
import '@fontsource-variable/inter';
import '@fontsource-variable/bodoni-moda';
import '@fontsource-variable/bodoni-moda/wght-italic.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
