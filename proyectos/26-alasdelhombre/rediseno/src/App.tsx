import { useMemo, useState } from 'react';
import { cursos, extras, fotos, logo, negocio, opiniones, paquetes, pesos, vuelo, wa, waGeneral, type Extra, type Foto, type Paquete } from './data/content';

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function Img({ f, className = '', loading = 'lazy' }: { f: Foto; className?: string; loading?: 'lazy' | 'eager' }) {
  return <img src={f.src} width={f.w} height={f.h} alt={f.alt} loading={loading} decoding="async" className={className} />;
}

const tel = `tel:${negocio.telLink}`;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-marino/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Alas del Hombre, inicio">
          <img src={logo} alt="Alas del Hombre" width={177} height={63} className="h-11 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 font-semibold text-marino md:flex">
          <a href="#vuelo" className="hover:text-sol-hondo">El vuelo</a>
          <a href="#paquetes" className="hover:text-sol-hondo">Paquetes</a>
          <a href="#escuela" className="hover:text-sol-hondo">Escuela</a>
          <a href="#contacto" className="hover:text-sol-hondo">Contacto</a>
        </nav>
        <a href={waGeneral} className="btn !min-h-[40px] !px-4 !py-2 text-sm" target="_blank" rel="noopener"><IconoWa className="h-4 w-4" /> Reservar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative overflow-hidden bg-marino text-white/90">
      <Img f={fotos.lago} loading="eager" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-marino via-marino/70 to-marino/15" aria-hidden="true" />
      <div className="contenedor relative flex min-h-[34rem] flex-col justify-end pb-14 pt-40 sm:min-h-[40rem]">
        <p className="font-semibold text-white">Los primeros, con más de 40 años de trayectoria</p>
        <h1 className="mt-3 max-w-3xl text-5xl sm:text-7xl">Vuelo en parapente en Valle de Bravo</h1>
        <p className="mt-5 max-w-xl text-lg">
          Veinte minutos en tándem sobre la presa y el Pueblo Mágico, con pilotos certificados por la Asociación de Vuelo Libre de México.
          Vuelo desde <strong className="text-white">{pesos(vuelo.precio)}</strong>.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waGeneral} className="btn" target="_blank" rel="noopener"><IconoWa /> Reservar por WhatsApp</a>
          <a href="#paquetes" className="btn-claro">Ver paquetes</a>
        </div>
      </div>
    </section>
  );
}

function Vuelo() {
  const filas: [string, string][] = [
    ['Duración', vuelo.duracion],
    ['Incluye', vuelo.incluye],
    ['Fotos o video', `${pesos(vuelo.fotoVideo)} aparte`],
    ['Qué traer', vuelo.traer],
  ];
  return (
    <section id="vuelo" className="py-20 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">Tu primer vuelo, con un piloto al lado</h2>
          <p className="mt-4 text-lg">
            Vuelas en tándem: el piloto lleva el ala y tú disfrutas la vista. Nuestros instructores y pilotos tándem están certificados por la
            Asociación de Vuelo Libre de México A.C. (AVLM), reconocida por la Federación Aeronáutica Internacional.
          </p>
          <dl className="mt-8 divide-y divide-marino/10 border-y border-marino/10">
            {filas.map(([t, d]) => (
              <div key={t} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="font-bold text-marino">{t}</dt>
                <dd>{d}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap items-end gap-x-6 gap-y-4">
            <p className="font-display text-5xl font-extrabold text-marino">{pesos(vuelo.precio)}<span className="ml-2 font-sans text-base font-semibold text-texto">MXN</span></p>
            <a href={wa(`Hola, quiero reservar un vuelo en parapente de ${vuelo.duracion} (${pesos(vuelo.precio)}). ¿Qué fechas tienen?`)} className="btn" target="_blank" rel="noopener"><IconoWa /> Apartar mi vuelo</a>
          </div>
        </div>
        <div className="grid min-w-0 grid-cols-5 gap-3">
          <Img f={fotos.pueblo} className="col-span-3 aspect-[4/5] h-full w-full object-cover" />
          <div className="col-span-2 grid gap-3">
            <Img f={fotos.selfie} className="aspect-square h-full w-full object-cover" />
            <Img f={fotos.penon} className="aspect-square h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

// El trazo del día: montaña con el despegue, la curva del vuelo hasta el aterrizaje junto al lago.
function Ala({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-15 0 Q0 -9 15 0" fill="none" stroke="#c2521b" strokeWidth="4" strokeLinecap="round" />
      <path d="M-13 1 L0 15 L13 1" fill="none" stroke="#0b3f5c" strokeWidth="0.8" />
      <circle cx="0" cy="16" r="2.6" fill="#0b3f5c" />
    </g>
  );
}

function Trazo({ p }: { p: Paquete }) {
  const penon = p.despegue.startsWith('El Peñón');
  const [x0, y0] = penon ? [34, 30] : [40, 44];
  const ruta = `M${x0} ${y0} C 120 ${y0 - 22}, 190 70, 262 118`;
  return (
    <svg viewBox="0 0 320 150" className="h-auto w-full" aria-hidden="true">
      <rect width="320" height="150" fill="#eef4f7" />
      <path d="M90 150 L150 92 L190 108 L240 84 L320 112 L320 150 Z" fill="#cfe0e6" />
      {penon
        ? <path d="M0 150 L0 80 L20 34 L46 30 L60 70 L112 150 Z" fill="#3d6653" />
        : <path d="M0 150 L0 72 L40 44 L66 56 L92 50 L148 150 Z" fill="#5f8f78" />}
      <path d="M140 128 Q230 120 320 124 L320 150 L140 150 Z" fill="#0b3f5c" />
      <path d={ruta} fill="none" stroke="#0b3f5c" strokeWidth="2" strokeDasharray="5 5" strokeLinecap="round" />
      <circle cx={x0} cy={y0} r="4" fill="#fff" stroke="#0b3f5c" strokeWidth="2" />
      <path d="M256 112 l12 12 M268 112 l-12 12" stroke="#c2521b" strokeWidth="3" strokeLinecap="round" />
      {p.vuelos > 1 ? <><Ala x={118} y={24} /><Ala x={176} y={48} /></> : <Ala x={150} y={34} />}
      <text x={x0 + 8} y={y0 - 10} fontSize="10" fontWeight="700" fill="#0b3f5c">Despegue</text>
      <text x="232" y="104" fontSize="10" fontWeight="700" fill="#0b3f5c">Aterrizaje</text>
    </svg>
  );
}

function Despues() {
  const [elegidos, setElegidos] = useState<Extra[]>([]);
  const [actual, setActual] = useState('enamorados');

  const coinciden = useMemo(() => paquetes.filter((p) => elegidos.every((e) => p.extras.includes(e))), [elegidos]);
  const p = coinciden.find((x) => x.id === actual) ?? coinciden[0];
  // Extras que todavía pueden sumarse sin quedarse sin paquetes.
  const posibles = new Set(coinciden.flatMap((x) => x.extras));

  const alternar = (e: Extra) => setElegidos((a) => (a.includes(e) ? a.filter((x) => x !== e) : [...a, e]));

  return (
    <section id="paquetes" className="bg-arena py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl">¿Y después de aterrizar?</h2>
          <p className="mt-4 text-lg">
            El vuelo dura lo mismo en todos los paquetes. Lo que cambia es el resto del día. Elige lo que te gustaría hacer al tocar tierra y te
            mostramos qué paquete lo incluye.
          </p>
        </div>

        <fieldset className="mt-8">
          <legend className="font-bold text-marino">Después del vuelo quiero…</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {extras.map((e) => {
              const on = elegidos.includes(e.id);
              const apagado = !on && !posibles.has(e.id);
              return (
                <button key={e.id} type="button" aria-pressed={on} disabled={apagado} onClick={() => alternar(e.id)}
                  className={`min-h-[44px] rounded-full px-4 text-[0.95rem] font-semibold transition-colors ${on ? 'bg-marino text-white' : 'bg-white text-marino ring-1 ring-inset ring-marino/25 hover:ring-marino'} disabled:cursor-not-allowed disabled:bg-transparent disabled:text-texto/75 disabled:line-through disabled:ring-marino/10`}>
                  {on ? '✓ ' : ''}{e.nombre}
                </button>
              );
            })}
          </div>
          {elegidos.length > 0 && (
            <button type="button" onClick={() => setElegidos([])} className="enlace mt-4 text-sm">Quitar filtros</button>
          )}
        </fieldset>

        <div className="mt-10 grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div className="min-w-0">
            <p className="text-sm font-semibold" aria-live="polite">
              {coinciden.length === paquetes.length ? `Sus ${paquetes.length} paquetes` : `${coinciden.length} de ${paquetes.length} paquetes lo incluyen`}
            </p>
            <ul className="mt-3 divide-y divide-marino/10 border-y border-marino/10">
              {coinciden.map((x) => (
                <li key={x.id}>
                  <button type="button" onClick={() => setActual(x.id)} aria-current={x.id === p?.id ? 'true' : undefined}
                    className={`flex w-full items-baseline justify-between gap-3 py-3 text-left ${x.id === p?.id ? 'font-bold text-sol-hondo' : 'text-marino hover:text-sol-hondo'}`}>
                    <span>{x.nombre}</span>
                    <span className="shrink-0 text-sm tabular-nums">{pesos(x.precio)}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {p && (
            <article className="min-w-0 bg-white p-6 shadow-sm ring-1 ring-marino/10 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-3xl sm:text-4xl">{p.nombre}</h3>
                <p className="font-display text-3xl font-extrabold text-marino">{pesos(p.precio)}<span className="ml-1 font-sans text-sm font-semibold text-texto"> por {p.por}</span></p>
              </div>
              <p className="mt-2 italic">{p.lema}</p>

              <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                <div className="min-w-0">
                  <Trazo p={p} />
                  <p className="mt-2 text-sm">
                    Despegas en <strong className="text-marino">{p.despegue}</strong>. {p.vuelos === 2 ? 'Dos vuelos' : 'Un vuelo'} en tándem de 20 minutos, con diploma.
                  </p>
                </div>
                <ol className="relative min-w-0 border-l-2 border-dashed border-sol/60 pl-6">
                  <li className="relative pb-5">
                    <span className="absolute -left-[1.95rem] top-1 h-3.5 w-3.5 rounded-full bg-sol" aria-hidden="true" />
                    <span className="font-bold text-marino">Aterrizaje</span>
                  </li>
                  {p.dia.map((d) => (
                    <li key={d} className="relative pb-5 last:pb-0">
                      <span className="absolute -left-[1.95rem] top-1 h-3.5 w-3.5 rounded-full border-2 border-marino bg-white" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ol>
              </div>

              {p.nota && <p className="mt-6 text-sm">{p.nota}</p>}
              <a href={wa(`Hola, me interesa el paquete ${p.nombre} (${pesos(p.precio)} por ${p.por}). ¿Qué fechas tienen disponibles?`)}
                className="btn mt-6" target="_blank" rel="noopener"><IconoWa /> Pedir el paquete {p.nombre}</a>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section aria-label="Fotos de vuelos" className="py-4">
      <div className="grid grid-cols-2 gap-1 md:grid-cols-[1.6fr_1fr]">
        <Img f={fotos.ala} className="col-span-2 aspect-[16/9] h-full w-full object-cover md:col-span-1 md:row-span-2" />
        <Img f={fotos.sol} className="aspect-[4/3] h-full w-full object-cover" />
        <Img f={fotos.orilla} className="aspect-[4/3] h-full w-full object-cover" />
      </div>
    </section>
  );
}

function Escuela() {
  return (
    <section id="escuela" className="py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">Aprende a volar tú solo</h2>
          <p className="mt-4 text-lg">
            Alas del Hombre también es escuela de vuelo. Si después del tándem te quedas con ganas, puedes empezar desde la iniciación y
            seguir hasta el vuelo a campo traviesa. También venden equipo y organizan tours de vuelo en parapente por México y el mundo.
          </p>
          <a href={wa('Hola, quiero informes de los cursos de vuelo en parapente.')} className="btn-linea mt-8" target="_blank" rel="noopener"><IconoWa /> Pedir informes de cursos</a>
        </div>
        <ol className="min-w-0 self-center">
          {cursos.map((c, i) => (
            <li key={c} className="flex items-baseline gap-4 border-b border-marino/10 py-4 font-display text-xl font-semibold text-marino sm:text-2xl">
              <span className={i === 0 ? '' : ''}>{c}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Confianza() {
  return (
    <section className="oscuro bg-marino py-20 text-white/85 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">Seguridad y calidad, primero</h2>
          <p className="mt-4 text-lg">En Alas del Hombre nos distinguimos por seguir una estricta política de seguridad y calidad en el servicio.</p>
          <ul className="mt-6 space-y-3">
            <li>Pilotos certificados por la AVLM, reconocida por la F.A.I.</li>
            <li>Mención de Honor al Producto Turístico Mexicano de SECTUR.</li>
            <li>Sello Safe Travels de protocolos internacionales para viajeros.</li>
            <li>Registro Nacional de Turismo {negocio.rnt}.</li>
          </ul>
        </div>
        <div className="min-w-0 space-y-8">
          {opiniones.map((o) => (
            <figure key={o.nombre} className="border-l-4 border-claro pl-5">
              <blockquote className="text-xl text-white">"{o.texto}"</blockquote>
              <figcaption className="mt-2 text-sm font-semibold text-claro">{o.nombre}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-20 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <Img f={fotos.presa} className="hidden aspect-[4/3] w-full min-w-0 object-cover lg:block" />
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">Te esperamos en Valle de Bravo</h2>
          <p className="mt-4 text-lg">{negocio.direccion}.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.mapa} className="btn" target="_blank" rel="noopener"><IconoPin /> Ver en Google Maps</a>
            <a href={tel} className="btn-linea"><IconoTel /> {negocio.telefono}</a>
          </div>
          <p className="mt-6">
            WhatsApp <a href={waGeneral} className="enlace" target="_blank" rel="noopener">{negocio.whatsappTexto}</a> y correo{' '}
            <a href={`mailto:${negocio.correo}`} className="enlace">{negocio.correo}</a>.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-semibold">
            <li><a href={negocio.instagram} className="enlace" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href={negocio.facebook} className="enlace" target="_blank" rel="noopener">Facebook</a></li>
            <li><a href={negocio.youtube} className="enlace" target="_blank" rel="noopener">YouTube</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro bg-marino pb-28 pt-10 text-sm text-white/80 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4">
        <p className="font-display text-xl font-extrabold text-white">Alas del Hombre</p>
        <p>Vuelo en parapente y escuela de vuelo en Valle de Bravo y Temascaltepec. RNT {negocio.rnt}.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-marino text-[0.8rem] font-semibold text-white md:hidden">
      <a href={waGeneral} className="flex flex-col items-center gap-1 bg-sol-hondo py-3" target="_blank" rel="noopener"><IconoWa />WhatsApp</a>
      <a href={tel} className="flex flex-col items-center gap-1 py-3"><IconoTel />Llamar</a>
      <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-3" target="_blank" rel="noopener"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#paquetes" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-marino">Ir a paquetes</a>
      <Encabezado />
      <main>
        <Portada />
        <Vuelo />
        <Despues />
        <Galeria />
        <Escuela />
        <Confianza />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
