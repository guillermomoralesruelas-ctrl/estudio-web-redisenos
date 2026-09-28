import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Sora for headings (wide, airy geometric sans) and Inter for text.
import '@fontsource-variable/inter';
import '@fontsource-variable/sora';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
