import { useState } from 'react';
import { carta, type Platillo, type Prep } from './data/carta';
import {
  boca, glosario, historia, negocio, notasCarta, portada, preparaciones, sucursales, sugerencias, wa, zempoala,
  type Foto, type Preparacion, type Sucursal,
} from './data/content';

const externo = { target: '_blank', rel: 'noopener' } as const;
const pesos = (n: number) => `$${n.toLocaleString('es-MX', { maximumFractionDigits: 0 })}`;
const precio = (p: Platillo) => (p.p === 'temporada' ? 'Por temporada' : p.por100 ? `${pesos(p.p)} cada 100 g` : pesos(p.p));

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
  ),
  tel: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
  pdf: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" /></svg>
  ),
};

function Img({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

const reservar = (s: Sucursal, extra = '') => wa(s.wa, `${s.saludo}${extra ? ` ${extra}` : ''} Somos __ personas, para el día __ a las __.`);

// ---------- Encabezado y portada ----------

const nav = [
  { href: '#carta', label: 'Carta' },
  { href: '#como-lo-quieres', label: '¿Cómo lo quieres?' },
  { href: '#historia', label: 'Historia' },
  { href: '#sucursales', label: 'Sucursales' },
];

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-oro/40 bg-papel/95 backdrop-blur">
      <div className="contenedor flex h-[4.75rem] items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0" aria-label="Higuera Blanca, volver al inicio">
          <img src={negocio.logo.src} alt="" width={negocio.logo.w} height={negocio.logo.h} className="h-14 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-semibold text-tinta hover:text-vino">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#sucursales" className="btn hidden sm:inline-flex">Reservar mesa</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir el menú"
            className="grid size-11 place-items-center rounded-full border border-tinta/25 text-tinta lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-oro/40 lg:hidden" aria-label="Menú del celular">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="titulo border-b border-tinta/10 py-3 text-2xl text-tinta">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative overflow-hidden bg-vino text-arena">
      <div className="contenedor grid items-center gap-12 pb-16 pt-10 md:grid-cols-12 md:pb-24 md:pt-16">
        <div className="min-w-0 md:col-span-6">
          <p className="titulo text-2xl italic text-oro-claro">Desde 1981</p>
          <h1 className="titulo mt-2 text-[clamp(3.4rem,9vw,7.2rem)] leading-[0.92] text-papel">Higuera Blanca</h1>
          <p className="mt-6 max-w-md text-xl text-arena">Mariscos veracruzanos en Boca del Río y en Zempoala. {negocio.frase}.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={reservar(boca)} {...externo} className="btn-arena">{Icono.wa} Reservar en Boca del Río</a>
            <a href={reservar(zempoala)} {...externo} className="btn-claro">{Icono.wa} En Zempoala</a>
          </div>
          <a href="#carta" className="mt-5 inline-block font-semibold text-arena underline decoration-oro-claro decoration-2 underline-offset-4 hover:text-papel">Ver la carta con precios</a>
          <dl className="mt-10 grid gap-x-10 gap-y-3 border-t border-arena/25 pt-6 sm:grid-cols-2">
            {sucursales.map((s) => (
              <div key={s.id}>
                <dt className="titulo text-xl text-papel">{s.nombre}</dt>
                <dd className="text-[0.95rem]">{s.dias}, {s.horas}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-4 md:col-span-6">
          <div className="aspect-[2/3] overflow-hidden rounded-t-full"><Img foto={portada.fotos[0]} eager /></div>
          <div className="mt-12 aspect-[2/3] overflow-hidden rounded-t-full"><Img foto={portada.fotos[1]} eager /></div>
        </div>
      </div>
    </section>
  );
}

// ---------- Sugerencias del chef ----------

function Sugerencias() {
  return (
    <section className="py-20 md:py-24">
      <div className="contenedor flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="titulo text-[clamp(2.4rem,5vw,4rem)]">Sugerencias del chef</h2>
          <p className="mt-2 text-lg">Los sabores más auténticos del mar de Veracruz.</p>
        </div>
        <a href="#carta" className="btn-linea">Toda la carta</a>
      </div>
      <ul className="tira contenedor mt-10 flex gap-4 overflow-x-auto pb-4" aria-label="Sugerencias del chef">
        {sugerencias.map((s) => (
          <li key={s.nombre} className="w-[15rem] shrink-0 sm:w-[16.5rem]">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-arena"><Img foto={s.foto} /></div>
            <p className="titulo mt-3 text-xl leading-tight text-tinta">{s.nombre}</p>
            <p className="precio text-[0.95rem] font-semibold text-ladrillo">{s.precio ?? 'Pregunta por él al reservar'}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ---------- Elemento memorable: "¿Cómo lo quieres?" ----------

/** Todos los renglones de la carta que se pueden pedir con esa preparación. */
function conPreparacion(id: Prep) {
  return carta.flatMap((c) => c.secciones.flatMap((s) => s.platillos.filter((p) => p.prep?.includes(id)).map((p) => ({ ...p, seccion: s.titulo }))));
}

function Plato({ prep }: { prep: Preparacion }) {
  const claro = prep.id === 'empapelado' || prep.id === 'sal';
  return (
    <svg viewBox="0 0 320 320" className="block w-full" role="img" aria-label={`Dibujo de un plato ${prep.nombre.toLowerCase()}`}>
      <circle cx="160" cy="166" r="150" fill="#0f2140" opacity="0.45" />
      <circle cx="160" cy="160" r="150" fill="#fbf7ec" />
      <circle cx="160" cy="160" r="116" fill="none" stroke="#e7dcc0" strokeWidth="2" />
      <g transform="translate(160 160) scale(1.32) translate(-164 -160)">
      <path className="salsa" fill={prep.salsa} d="M86 148c6-40 52-62 92-54 44 8 74 36 64 78-9 38-55 60-99 52-43-8-63-40-57-76Z" />
      <ellipse className="salsa" cx="132" cy="132" rx="30" ry="12" fill={prep.brillo} opacity="0.55" transform="rotate(-18 132 132)" />
      {/* El pescado, visto desde arriba */}
      <g fill={claro ? '#cdbf9c' : '#f3e7c9'} opacity={claro ? 0.9 : 0.92}>
        <path d="M104 166c20-26 64-34 100-16l22-18c4 10 4 34-2 46l-22-14c-34 20-76 14-98 2Z" />
      </g>
      <circle cx="122" cy="161" r="4" fill={claro ? '#8a7a5a' : '#2b1a17'} />
      {prep.id === 'sal' && <path d="M98 150c24-34 86-40 118-12 10 10 10 34-2 42-30 22-94 22-116-6-6-8-5-16 0-24Z" fill="#fff" opacity="0.85" />}
      {prep.id === 'empapelado' && <path d="M88 170c10-30 48-52 100-46 34 4 52 22 50 40-2 26-44 40-90 36-38-4-66-12-60-30Z" fill="#efe4c8" stroke="#cdbf9c" strokeWidth="2" />}
      {prep.id === 'acuyo' && <path d="M120 176c20-30 70-40 104-20-24 30-72 38-104 20Z" fill="#4f7d42" opacity="0.9" />}
      {prep.id === 'veracruzana' && [[150, 128], [196, 140], [182, 196], [128, 196], [214, 176]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="6" fill="#4a5a2a" />)}
      </g>
    </svg>
  );
}

function ComoLoQuieres() {
  const [id, setId] = useState<Prep>('chilpaya');
  const prep = preparaciones.find((p) => p.id === id)!;
  const platillos = conPreparacion(id);
  const antojo = `Se me antoja algo ${prep.nombre.toLowerCase()}.`;
  return (
    <section id="como-lo-quieres" className="oscuro bg-marino py-20 text-arena md:py-28">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="titulo text-[clamp(2.6rem,5.6vw,4.6rem)] text-papel">¿Cómo lo quieres?</h2>
          <p className="mt-4 text-lg">En Higuera Blanca el mismo pescado o marisco se pide de muchas maneras. Elige una preparación y te decimos qué es y qué platillos de la carta puedes pedir así.</p>
        </div>

        <div role="group" aria-label="Preparaciones" className="mt-10 flex flex-wrap gap-2">
          {preparaciones.map((p) => (
            <button key={p.id} type="button" onClick={() => setId(p.id)} aria-pressed={p.id === id}
              className={`flex items-center gap-2 rounded-full border px-4 py-2.5 font-semibold transition-colors ${p.id === id ? 'border-papel bg-papel text-tinta' : 'border-arena/30 text-arena hover:border-arena'}`}>
              <span className="size-3.5 shrink-0 rounded-full border border-black/15" style={{ background: p.salsa }} aria-hidden="true" />
              {p.nombre}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-5">
            <div className="mx-auto max-w-[22rem] lg:sticky lg:top-28">
              <Plato prep={prep} />
              <p className="titulo mt-6 text-center text-4xl text-papel">{prep.nombre}</p>
              <p className="mt-2 text-center text-lg" aria-live="polite">{prep.que}</p>
            </div>
          </div>
          <div className="min-w-0 lg:col-span-7">
            <h3 className="titulo text-2xl text-oro-claro">
              {platillos.length === 1 ? 'Un platillo de la carta viene así' : `${platillos.length} platillos de la carta vienen así`}
            </h3>
            <ul className="mt-4 divide-y divide-arena/15 border-y border-arena/15" aria-live="polite">
              {platillos.map((p, i) => (
                <li key={`${p.n}-${i}`} className="py-4">
                  <p className="flex items-baseline gap-2">
                    <span className="renglon min-w-0 text-xl text-papel">{p.n}</span>
                    <span className="puntos border-arena/35" aria-hidden="true" />
                    <span className="precio shrink-0 font-semibold text-oro-claro">{precio(p)}</span>
                  </p>
                  <p className="mt-0.5 text-[0.95rem] text-arena/90">{[p.d, p.m, p.seccion].filter(Boolean).join('. ')}.</p>
                </li>
              ))}
            </ul>
            {prep.foto && (
              <figure className="mt-8 grid grid-cols-[7rem_1fr] items-center gap-4 sm:grid-cols-[9rem_1fr]">
                <div className="aspect-[3/4] overflow-hidden rounded-xl"><Img foto={prep.foto} /></div>
                <figcaption className="text-[0.95rem]">En la foto: {prep.fotoDe}.</figcaption>
              </figure>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={reservar(boca, antojo)} {...externo} className="btn-arena">{Icono.wa} Reservar en Boca del Río</a>
              <a href={reservar(zempoala, antojo)} {...externo} className="btn-claro">{Icono.wa} Reservar en Zempoala</a>
            </div>
            <p className="mt-4 text-[0.9rem] text-arena/80">Precios de su carta en PDF (2025). {notasCarta.cambios} Las frases que explican cada preparación son generales de la cocina veracruzana.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- La carta ----------

function Renglon({ p }: { p: Platillo }) {
  const detalle = [p.d, p.m].filter(Boolean).join('. ');
  return (
    <li className="min-w-0 py-2.5">
      <p className="flex items-baseline gap-2">
        <span className="renglon min-w-0 text-[1.2rem] text-tinta">{p.n}</span>
        <span className="puntos" aria-hidden="true" />
        <span className="precio shrink-0 font-bold text-ladrillo">{precio(p)}</span>
      </p>
      {detalle && <p className="text-[0.95rem] leading-snug">{detalle}.</p>}
      {p.nota && <p className="text-[0.9rem] italic leading-snug text-texto">{p.nota}</p>}
    </li>
  );
}

function Carta() {
  const [id, setId] = useState(carta[0].id);
  const cat = carta.find((c) => c.id === id)!;
  return (
    <section id="carta" className="bg-arena py-20 md:py-28">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="titulo text-[clamp(2.6rem,5.6vw,4.6rem)]">Nuestra carta</h2>
            <p className="mt-2 text-lg">Descubre la esencia culinaria de Veracruz.</p>
          </div>
          <a href={negocio.menuPdf} {...externo} className="btn-linea">{Icono.pdf} Descargar menú PDF</a>
        </div>

        <div role="tablist" aria-label="Partes de la carta" className="tira mt-10 flex gap-2 overflow-x-auto pb-2">
          {carta.map((c) => (
            <button key={c.id} id={`tab-${c.id}`} role="tab" type="button" aria-selected={c.id === id} aria-controls="panel-carta" onClick={() => setId(c.id)}
              className={`shrink-0 rounded-full border px-5 py-2.5 font-semibold transition-colors ${c.id === id ? 'border-vino bg-vino text-papel' : 'border-tinta/20 bg-papel text-tinta hover:border-vino'}`}>
              {c.pestana}
            </button>
          ))}
        </div>

        <div id="panel-carta" role="tabpanel" aria-labelledby={`tab-${cat.id}`} className="marco mt-8 bg-papel px-5 py-10 sm:px-10 md:px-14">
          <div className="grid gap-x-14 gap-y-10 md:grid-cols-2">
            {cat.secciones.map((s) => {
              const partir = cat.secciones.length === 1 && s.platillos.length > 8;
              const mitad = Math.ceil(s.platillos.length / 2);
              const grupos = partir ? [s.platillos.slice(0, mitad), s.platillos.slice(mitad)] : [s.platillos];
              return grupos.map((g, j) => (
                <div key={`${s.titulo}-${j}`} className="min-w-0">
                  {j === 0 ? <h3 className="titulo text-center text-3xl text-vino">{s.titulo}</h3> : <p className="hidden text-3xl md:block" aria-hidden="true">&nbsp;</p>}
                  {j === 0 && s.nota && <p className="mt-1 text-center text-[0.95rem]">{s.nota}</p>}
                  <ul className="mt-4 divide-y divide-tinta/10">{g.map((p, k) => <Renglon key={`${p.n}-${k}`} p={p} />)}</ul>
                </div>
              ));
            })}
          </div>
          <p className="titulo mt-10 text-center text-2xl italic text-vino">{notasCarta.alMomento}</p>
          <p className="mt-1 text-center text-[0.9rem]">{notasCarta.cambios} Precios de su carta en PDF (2025).</p>
        </div>

        <div className="mt-14">
          <h3 className="titulo text-3xl">Palabras de la carta</h3>
          <dl className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {glosario.map((g) => (
              <div key={g.palabra} className="min-w-0 border-t border-tinta/15 pt-3">
                <dt className="renglon text-lg text-tinta">{g.palabra}</dt>
                <dd className="text-[0.95rem] leading-snug">{g.que.charAt(0).toUpperCase() + g.que.slice(1)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

// ---------- Historia ----------

function Historia() {
  return (
    <section id="historia" className="contenedor grid items-center gap-12 py-20 md:grid-cols-12 md:py-28">
      <div className="min-w-0 md:col-span-6">
        <div className="overflow-hidden rounded-2xl"><Img foto={historia.foto} /></div>
      </div>
      <div className="min-w-0 md:col-span-6">
        <p className="titulo text-[5rem] leading-none text-vino md:text-[6.5rem]" aria-hidden="true">1981</p>
        <h2 className="titulo mt-2 text-[clamp(2.2rem,4.4vw,3.4rem)]">{historia.titulo}</h2>
        {historia.parrafos.map((t) => <p key={t} className="mt-4 text-lg">{t}</p>)}
        <h3 className="titulo mt-10 text-3xl text-vino">{historia.esenciaTitulo}</h3>
        <p className="mt-3 text-lg">{historia.esencia}</p>
        <p className="titulo mt-6 text-2xl italic text-tinta">{historia.distingue}.</p>
      </div>
    </section>
  );
}

// ---------- Sucursales, pie y barra del celular ----------

function Sucursales() {
  return (
    <section id="sucursales" className="bg-arena py-20 md:py-28">
      <div className="contenedor">
        <h2 className="titulo text-[clamp(2.6rem,5.6vw,4.6rem)]">Haz tu reservación</h2>
        <p className="mt-2 max-w-2xl text-lg">Garantiza tu mesa y vive la experiencia Higuera Blanca. Elige tu sucursal y resérvala por WhatsApp o por teléfono.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sucursales.map((s) => (
            <article key={s.id} className="min-w-0 rounded-3xl bg-papel p-6 sm:p-8">
              <p className="text-[0.95rem] font-semibold text-ladrillo">{s.tipo}</p>
              <h3 className="titulo text-4xl">{s.nombre}</h3>
              <dl className="mt-5 space-y-3">
                <div><dt className="text-sm">Dirección</dt><dd className="font-semibold text-tinta">{s.calle}, {s.colonia}, C.P. {s.cp}, {s.ciudad}.</dd></div>
                <div><dt className="text-sm">Horario</dt><dd className="font-semibold text-tinta">{s.dias}, {s.horas}</dd></div>
                <div><dt className="text-sm">Teléfono y WhatsApp</dt><dd><a href={s.tel} className="font-semibold text-tinta underline decoration-oro decoration-2 underline-offset-4">{s.telefono}</a></dd></div>
                <div><dt className="text-sm">Correo</dt><dd><a href={`mailto:${s.correo}`} className="break-all font-semibold text-tinta underline decoration-oro decoration-2 underline-offset-4">{s.correo}</a></dd></div>
              </dl>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={reservar(s)} {...externo} className="btn">{Icono.wa} Reservar por WhatsApp</a>
                <a href={s.tel} className="btn-linea">{Icono.tel} Llamar</a>
                <a href={s.mapa} {...externo} className="btn-linea">{Icono.mapa} Ver ubicación</a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-lg">
          Próximamente: <span className="font-semibold text-tinta">{negocio.proximamente.nombre}</span>, {negocio.proximamente.lugar}.
        </p>
        <p className="mt-2">Ambas opciones están disponibles en horario de atención.</p>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro bg-vino pb-32 pt-14 text-arena md:pb-14">
      <div className="contenedor flex flex-wrap items-center justify-between gap-8">
        <div>
          <p className="titulo text-3xl text-papel">{negocio.nombre}</p>
          <p>{negocio.lema}.</p>
        </div>
        <p>
          Síguenos en <a href={negocio.facebook} {...externo} className="font-semibold text-papel underline decoration-oro-claro underline-offset-4">Facebook</a> e{' '}
          <a href={negocio.instagram} {...externo} className="font-semibold text-papel underline decoration-oro-claro underline-offset-4">Instagram</a>.
        </p>
        <p className="w-full border-t border-arena/20 pt-6 text-sm">© {new Date().getFullYear()} Higuera Blanca. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta/15 bg-papel/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.35fr_1.1fr_auto_auto] gap-2">
        <a href={reservar(boca)} {...externo} className="btn px-2 text-[0.85rem]" aria-label="Reservar en Boca del Río por WhatsApp">{Icono.wa} Boca del Río</a>
        <a href={reservar(zempoala)} {...externo} className="btn-linea px-2 text-[0.85rem]" aria-label="Reservar en Zempoala por WhatsApp">{Icono.wa} Zempoala</a>
        <a href={boca.tel} className="btn-linea w-12 px-0" aria-label="Llamar a Higuera Blanca Boca del Río">{Icono.tel}</a>
        <a href={boca.mapa} {...externo} className="btn-linea w-12 px-0" aria-label="Cómo llegar a Higuera Blanca Boca del Río en Google Maps">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#carta" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Ir a la carta</a>
      <Encabezado />
      <main>
        <Portada />
        <Sugerencias />
        <ComoLoQuieres />
        <Carta />
        <Historia />
        <Sucursales />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
