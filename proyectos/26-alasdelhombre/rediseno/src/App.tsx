import { negocio } from './data/content';

// Punto de partida. Sigue INSTRUCCIONES-METODO-1.1.md: plan primero, luego secciones.
export default function App() {
  return (
    <main className="contenedor py-20">
      <h1 className="text-5xl">{negocio.nombre}</h1>
    </main>
  );
}
