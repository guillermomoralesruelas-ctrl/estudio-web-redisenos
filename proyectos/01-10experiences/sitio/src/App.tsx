import { useCallback, useState } from 'react';
import type { ExperienciaId } from './data/content';
import { ReservaContext } from './lib/reserva';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Pasaporte from './components/Pasaporte';
import Experiencias from './components/Experiencias';
import Opiniones from './components/Opiniones';
import Personas from './components/Personas';
import Equipo from './components/Equipo';
import Galeria from './components/Galeria';
import Preguntas from './components/Preguntas';
import Visitanos from './components/Visitanos';
import BarraMovil from './components/BarraMovil';
import ReservaDialog from './components/ReservaDialog';

export default function App() {
  const [abierta, setAbierta] = useState(false);
  const [inicial, setInicial] = useState<{ exp?: ExperienciaId; horario?: string }>({});

  const abrir = useCallback((exp?: ExperienciaId, horario?: string) => {
    setInicial({ exp, horario });
    setAbierta(true);
  }, []);

  return (
    <ReservaContext.Provider value={abrir}>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-vela focus:px-4 focus:py-2 focus:text-noche">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Intro />
        <Pasaporte />
        <Experiencias />
        <Opiniones />
        <Personas />
        <Equipo />
        <Galeria />
        <Preguntas />
        <Visitanos />
      </main>
      <BarraMovil />
      <ReservaDialog abierta={abierta} onCerrar={() => setAbierta(false)} inicial={inicial} />
    </ReservaContext.Provider>
  );
}
