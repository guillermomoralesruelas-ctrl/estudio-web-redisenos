import { useState } from 'react';
import { meses, mesesLargos, negocio, salidas, wa } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const foto = (n: string) => ({ src: `./${n}.webp`, width: medidas[n][0], height: medidas[n][1] });
const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;

function Icono({ d, className = 'size-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const iWhats = 'M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21zM9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.8-2.2-1-1 1a4.5 4.5 0 0 1-2.5-2.5l1-1-1-2.2L9 8.5z';
const iTel = 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2';

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 bg-oceano/95 text-white backdrop-blur">
      <div className="contenedor flex h-18 items-center justify-between gap-4">
        <a href="#inicio" className="flex shrink-0 items-center gap-2">
          <img {...foto('logo')} alt="Evelio Sport Fishing" className="h-14 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 font-medium md:flex">
          <a href="#dia" className="hover:text-dorado">Arma tu salida</a>
          <a href="#capturas" className="hover:text-dorado">Capturas</a>
          <a href="#contacto" className="hover:text-dorado">Contacto</a>
        </nav>
        <a href={wa('Hola, quiero información de sus salidas.')} className="boton min-h-11 bg-palma px-5 text-white hover:bg-[#155234]">
          <Icono d={iWhats} />
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-oceano text-white">
      <img {...foto('f-ballena')} alt="Lomo de una ballena jorobada en el mar, con la costa de Puerto Escondido al fondo" className="absolute inset-0 size-full object-cover opacity-55" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-t from-oceano via-oceano/50 to-oceano/20" />
      <div className="contenedor relative flex min-h-[34rem] flex-col justify-end py-14 sm:py-20">
        <p className="font-semibold text-dorado">{negocio.lugar}</p>
        <h1 className="titulo mt-3 max-w-3xl text-4xl sm:text-6xl">Pesca deportiva, ballenas y playas en lancha, con Evelio</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/90">{negocio.premio}.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#dia" className="boton bg-dorado text-oceano hover:bg-white">Arma tu salida</a>
          <a href={`tel:${negocio.telefono.tel}`} className="boton border-2 border-white/60 hover:bg-white/10">
            <Icono d={iTel} />
            {negocio.telefono.texto}
          </a>
        </div>
      </div>
    </section>
  );
}

function Dia() {
  const [mes, setMes] = useState(() => new Date().getMonth());
  const [personas, setPersonas] = useState(4);
  const [elegida, setElegida] = useState(() => (salidas[2].temporada!.includes(new Date().getMonth()) ? 'ballenas' : 'pesca'));

  const salida = salidas.find((s) => s.id === elegida)!;
  const enTemporada = (s: (typeof salidas)[number]) => !s.temporada || s.temporada.includes(mes);
  const calc = salida.precio(personas);
  const abierta = enTemporada(salida);
  const porPersona = calc.total !== null ? Math.round(calc.total / personas) : null;

  const mensaje = `Hola, quiero ${salida.nombre.toLowerCase()} en ${mesesLargos[mes]} para ${personas} ${personas === 1 ? 'persona' : 'personas'}. ¿Qué fechas tienen?`;

  return (
    <section id="dia" className="bg-espuma py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="titulo text-4xl sm:text-5xl">¿Qué hay en el mar ese mes?</h2>
          <p className="mt-4 text-lg text-gris">Elige el mes de tu viaje y cuántos van. Te decimos qué salidas hay, cuánto cuesta y cuánto le toca a cada quien, con los precios de su sitio.</p>
        </div>

        <div className="mt-8 space-y-6">
          <fieldset>
            <legend className="font-semibold">Mes de tu viaje</legend>
            <div className="mt-3 grid grid-cols-6 gap-1.5 sm:grid-cols-12">
              {meses.map((m, i) => {
                const ballenas = salidas[2].temporada!.includes(i);
                return (
                  <button key={m} type="button" aria-pressed={mes === i} onClick={() => setMes(i)} className={`relative min-h-12 rounded-xl text-sm font-semibold ${mes === i ? 'bg-oceano text-white' : 'bg-white text-oceano ring-1 ring-oceano/10 hover:ring-oceano/40'}`}>
                    {m}
                    {ballenas && <span className={`absolute inset-x-2 bottom-1 h-1 rounded-full ${mes === i ? 'bg-dorado' : 'bg-marea'}`} aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-sm text-gris"><span className="mr-1 inline-block h-1 w-5 rounded-full bg-marea align-middle" aria-hidden="true" /> Temporada de ballenas: noviembre a marzo.</p>
          </fieldset>

          <div>
            <label htmlFor="personas" className="font-semibold">Van {personas} {personas === 1 ? 'persona' : 'personas'}</label>
            <input id="personas" type="range" min={1} max={10} value={personas} onChange={(e) => setPersonas(Number(e.target.value))} className="mt-3 w-full accent-[#1f6f86]" />
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
          <ul className="grid grid-cols-2 gap-3">
            {salidas.map((s) => {
              const ok = enTemporada(s);
              const c = s.precio(personas);
              return (
                <li key={s.id}>
                  <button type="button" aria-pressed={elegida === s.id} onClick={() => setElegida(s.id)} className={`flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white text-left ring-2 transition ${elegida === s.id ? 'ring-marea' : 'ring-transparent hover:ring-oceano/20'} ${ok ? '' : 'opacity-60'}`}>
                    <img {...foto(s.foto)} alt={s.alt} className="aspect-[4/3] w-full object-cover sm:aspect-[16/9]" loading="lazy" />
                    <span className="block p-3 sm:p-4">
                      <span className="block font-titulo text-base font-bold leading-tight sm:text-lg">{s.nombre}</span>
                      <span className={`mt-1 block text-sm font-semibold ${ok ? 'text-palma' : 'text-gris'}`}>{ok ? (c.total !== null ? pesos(c.total) : 'Pregunta el precio') : `Fuera de temporada en ${mesesLargos[mes]}`}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <aside className="rounded-3xl bg-oceano p-6 text-white sm:p-8 lg:sticky lg:top-24" aria-live="polite">
            <p className="text-sm font-semibold text-dorado">{mesesLargos[mes].charAt(0).toUpperCase() + mesesLargos[mes].slice(1)}, {personas} {personas === 1 ? 'persona' : 'personas'}</p>
            <h3 className="titulo mt-2 text-3xl">{salida.nombre}</h3>
            <p className="mt-2 text-white/85">{salida.texto}</p>
            {abierta ? (
              <dl className="mt-6 space-y-3">
                <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-3">
                  <dt>{calc.nota}</dt>
                  <dd className="titulo text-3xl text-dorado">{calc.total !== null ? pesos(calc.total) : 'Por WhatsApp'}</dd>
                </div>
                {porPersona !== null && personas > 1 && (
                  <div className="flex items-baseline justify-between gap-4">
                    <dt>Le toca a cada quien</dt>
                    <dd className="text-xl font-semibold">{pesos(porPersona)}</dd>
                  </div>
                )}
              </dl>
            ) : (
              <p className="mt-6 rounded-2xl bg-white/10 p-4">Los tours de ballenas son de noviembre a marzo. Para {mesesLargos[mes]}, elige otra salida: su sitio no marca temporada para la pesca, las playas ni los delfines.</p>
            )}
            <p className="mt-4 text-sm text-bruma">Su sitio solo marca temporada para las ballenas; confirma fecha, clima y precio con Evelio.</p>
            <a href={wa(mensaje)} className="boton mt-6 w-full bg-palma text-white hover:bg-[#155234]">
              <Icono d={iWhats} />
              Preguntar fechas por WhatsApp
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Capturas() {
  return (
    <section id="capturas" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <h2 className="titulo text-4xl sm:text-5xl">Lo que sale del agua</h2>
            <p className="mt-4 text-lg text-gris">{negocio.quienes}</p>
          </div>
          <figure className="rounded-3xl bg-espuma p-4 sm:flex sm:items-center sm:gap-4">
            <img {...foto('f-premio')} alt="Premiación del Torneo de Pesca Puerto Escondido: un pescador en el escenario con el cheque del premio" className="mx-auto h-48 w-auto rounded-2xl object-cover" loading="lazy" />
            <figcaption className="mt-3 font-semibold sm:mt-0">{negocio.premio}.</figcaption>
          </figure>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ['f-dorado', 'Un pescador sostiene un dorado amarillo y verde a bordo de la lancha'],
            ['f-clientes', 'Clientes a bordo con sus pescados y el mar de fondo'],
            ['f-playa', 'Un niño en la playa sostiene un pez casi de su tamaño'],
            ['f-tortuga', 'Una gaviota posada sobre una tortuga marina en el mar'],
          ].map(([n, a]) => (
            <li key={n}><img {...foto(n)} alt={a} className="aspect-[3/4] w-full rounded-2xl object-cover" loading="lazy" /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-oceano py-16 pb-28 text-white sm:py-24 md:pb-24">
      <div className="contenedor grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="titulo text-4xl sm:text-5xl">Reserva con Evelio</h2>
          <p className="mt-4 text-lg text-white/85">Escribe o llama para apartar tu salida en {negocio.lugar}.</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <a href={wa('Hola, quiero información de sus salidas.')} className="boton bg-palma text-white hover:bg-[#155234]"><Icono d={iWhats} /> WhatsApp {negocio.telefono.texto}</a>
          <a href={`tel:${negocio.telefono.tel}`} className="boton border-2 border-white/60 hover:bg-white/10"><Icono d={iTel} /> Llamar</a>
          <a href={negocio.facebook} className="boton border-2 border-white/30 hover:bg-white/10">Facebook</a>
          <a href={negocio.youtube} className="boton border-2 border-white/30 hover:bg-white/10">YouTube</a>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-white/10 bg-oceano py-8 pb-28 text-bruma md:pb-8">
      <div className="contenedor flex flex-col gap-2 text-sm sm:flex-row sm:justify-between">
        <p className="font-titulo text-base font-bold text-white">{negocio.nombre}</p>
        <p>{negocio.lugar}</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-oceano text-white md:hidden">
      <a href={wa('Hola, quiero información de sus salidas.')} className="flex min-h-15 items-center justify-center gap-2 bg-palma font-semibold"><Icono d={iWhats} /> WhatsApp</a>
      <a href={`tel:${negocio.telefono.tel}`} className="flex min-h-15 items-center justify-center gap-2 font-semibold"><Icono d={iTel} /> Llamar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Dia />
        <Capturas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
