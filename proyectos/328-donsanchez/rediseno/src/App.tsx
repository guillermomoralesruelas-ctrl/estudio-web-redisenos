import { useState } from 'react';
import {
  cava, cocina, eventos, foto, galeria, negocio, opiniones, origen, politicas, reconocimientos, saludo, tipoTexto, wa,
  type Foto, type Lugar,
} from './data/content';
import menu from './data/menu.json';

const externo = { target: '_blank', rel: 'noopener' } as const;

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
  ),
  mesa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M9 3v4M15 3v4" strokeLinecap="round" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
};

function Img({ foto: fo, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={fo.src} alt={fo.alt} width={fo.w} height={fo.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

const mxn = (n: number) => `$${n.toLocaleString('en-US')} MXN`;
type Platillo = { nombre: string; precio: number; desc: string; foto?: string; sello?: string };
const todos = menu.pestanas.flatMap((p) => p.platillos as Platillo[]);
const buscar = (n: string) => todos.find((p) => p.nombre === n);

// ---------- Encabezado y portada ----------

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const nav = [
    { href: '#origen', label: 'Origins' },
    { href: '#menu', label: 'Menu' },
    { href: '#cava', label: 'Cava' },
    { href: '#eventos', label: 'Events' },
    { href: '#visitanos', label: 'Visit us' },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-arena/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="shrink-0" aria-label="Don Sanchez, back to top">
          <img src={negocio.logo.src} alt={negocio.logo.alt} width={negocio.logo.w} height={negocio.logo.h} className="h-10 w-auto md:h-12" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-semibold text-tinta/85 hover:text-cobre-oscuro">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={negocio.opentable} {...externo} className="btn hidden sm:inline-flex">{Icono.mesa} Book a table</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Open navigation"
            className="grid size-11 place-items-center rounded-full border border-tinta/20 text-tinta lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-tinta/10 bg-arena lg:hidden" aria-label="Mobile">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="border-b border-tinta/10 py-3 font-serif text-2xl text-tinta">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  const d = negocio.direccion;
  const datos = [
    ['Hours', negocio.horario],
    ['Where', `${d.calle}, ${d.zona}`],
    ['Every night', negocio.musica],
    ['On Google', `${negocio.resenaGoogle.calificacion} stars, ${negocio.resenaGoogle.total} reviews`],
  ];
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-tinta text-white">
      <div className="absolute inset-0 -z-10">
        <Img foto={negocio.hero} eager className="opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-tinta via-tinta/80 to-tinta/10" />
      </div>
      <div className="contenedor py-20 md:py-32">
        <div className="max-w-2xl">
          <p className="font-semibold text-cobre-claro">{negocio.lema}</p>
          <h1 className="mt-4 text-[clamp(3.4rem,9vw,7rem)] text-white">Don Sanchez</h1>
          <p className="mt-5 max-w-xl text-xl text-white/90 md:text-2xl">{negocio.frase}.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={negocio.opentable} {...externo} className="btn">{Icono.mesa} Book on OpenTable</a>
            <a href={negocio.whatsapp} {...externo} className="btn-claro">{Icono.wa} WhatsApp</a>
          </div>
        </div>
        <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/20 pt-6 md:grid-cols-4">
          {datos.map(([t, v]) => (
            <div key={t} className="min-w-0">
              <dt className="text-sm text-white/75">{t}</dt>
              <dd className="font-semibold text-white">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// ---------- La cocina y el chef ----------

function Cocina() {
  return (
    <section id="cocina" className="contenedor py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-12 md:gap-14">
        <div className="min-w-0 md:col-span-6">
          <h2 className="text-[clamp(2.4rem,4.8vw,3.9rem)]">{cocina.titulo}</h2>
          <p className="mt-3 text-lg font-semibold text-cobre-oscuro">{cocina.sub}</p>
          <div className="mt-6 space-y-5 text-lg">
            <p>{negocio.intro}</p>
            {cocina.parrafos.map((t) => <p key={t.slice(0, 20)}>{t}</p>)}
          </div>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-4 md:col-span-6">
          <div className="row-span-2 aspect-[2/3] overflow-hidden rounded-[1.25rem]"><Img foto={cocina.salon} /></div>
          <div className="aspect-[2/3] overflow-hidden rounded-[1.25rem]"><Img foto={cocina.coctel} /></div>
        </div>
      </div>

      <div className="mt-20 grid items-center gap-10 rounded-[2rem] bg-arena-2 p-6 md:grid-cols-12 md:p-10">
        <div className="mx-auto aspect-[2/3] w-full max-w-xs overflow-hidden rounded-[1.25rem] md:col-span-4"><Img foto={cocina.chefFoto} /></div>
        <div className="min-w-0 md:col-span-8">
          <h3 className="text-[clamp(2rem,3.6vw,3rem)]">{cocina.chefTitulo}</h3>
          <p className="mt-5 text-lg">{cocina.chef}</p>
        </div>
      </div>
    </section>
  );
}

// ---------- Elemento memorable: el mapa de origen ----------

// Contorno simplificado de la península de Baja California (lat, lon), proyección equirectangular.
const COSTA: [number, number][] = [
  [32.53, -117.12], [32.35, -117.06], [32.05, -116.88], [31.85, -116.66], [31.72, -116.74], [31.3, -116.45], [30.9, -116.3],
  [30.48, -115.98], [30.05, -115.8], [29.6, -115.25], [29.1, -114.75], [28.6, -114.25], [28.05, -114.08], [27.8, -114.35],
  [27.85, -115.08], [27.65, -114.88], [27.25, -114.3], [26.72, -113.57], [26.25, -112.5], [25.6, -112.12], [25.0, -112.15],
  [24.5, -111.8], [24.2, -111.4], [23.9, -110.9], [23.45, -110.25], [23.1, -110.05], [22.88, -109.91], [23.05, -109.68],
  [23.42, -109.42], [23.7, -109.55], [23.95, -109.83], [24.15, -110.31], [24.6, -110.6], [24.95, -110.7], [25.5, -111.1],
  [26.0, -111.33], [26.6, -111.75], [26.9, -111.97], [27.34, -112.27], [27.9, -112.7], [28.4, -112.87], [28.95, -113.55],
  [29.5, -114.0], [30.0, -114.5], [30.35, -114.64], [31.02, -114.84], [31.5, -114.9], [31.85, -114.75], [32.2, -114.9],
  [32.72, -114.72], [32.6, -115.5],
];
const px = (lat: number, lon: number) => [(lon + 117.5) * 40 + 20, (32.95 - lat) * 45 + 16] as const;
const contorno = `M${COSTA.map(([la, lo]) => px(la, lo).map((v) => v.toFixed(1)).join(' ')).join(' L')} Z`;
const colorTipo: Record<Lugar['tipo'], string> = { farm: '#b9c7a2', sea: '#8fc3d1', ranch: '#e39a52', wine: '#d48aa0', kitchen: '#e3c26a' };
// Los Cabos (San José del Cabo, Miraflores y Pescadero) quedan a pocos kilómetros: se ven en un recuadro ampliado 3 veces.
const CABOS = { lat: 24.3, lon: -110.5, x: 270, y: 30, w: 144, h: 202, k: 3 };
const pxCabos = (lat: number, lon: number) => [CABOS.x + (lon - CABOS.lon) * 40 * CABOS.k, CABOS.y + (CABOS.lat - lat) * 45 * CABOS.k] as const;
const contornoCabos = `M${COSTA.map(([la, lo]) => pxCabos(la, lo).map((v) => v.toFixed(1)).join(' ')).join(' L')} Z`;
const enCabos = new Set(['sjc', 'miraflores', 'pescadero']);
// Posición de las etiquetas para que no se encimen.
const etiqueta: Record<string, { dx: number; dy: number; anchor: 'start' | 'middle' | 'end' }> = {
  sjc: { dx: 28, dy: 22, anchor: 'end' },
  miraflores: { dx: 0, dy: -13, anchor: 'middle' },
  pescadero: { dx: 0, dy: 20, anchor: 'middle' },
  sierra: { dx: 12, dy: 5, anchor: 'start' },
  guadalupe: { dx: 12, dy: 5, anchor: 'start' },
};

function Punto({ l, x, y, activo, elegir }: { l: Lugar; x: number; y: number; activo: boolean; elegir: (id: string) => void }) {
  const e = etiqueta[l.id];
  return (
    <g onClick={() => elegir(l.id)} className="cursor-pointer" aria-hidden="true">
      {activo && <circle cx={x} cy={y} r="13" fill="none" stroke={colorTipo[l.tipo]} strokeWidth="2" className="pulso" />}
      <circle cx={x} cy={y} r={activo ? 7 : 5.5} fill={colorTipo[l.tipo]} stroke="#2b2b30" strokeWidth="2" />
      <text x={x + e.dx} y={y + e.dy} textAnchor={e.anchor} fontFamily="Montserrat, sans-serif" fontWeight={activo ? 700 : 500} fontSize="12.5" fill="#ffffff" fillOpacity={activo ? 1 : 0.8}>
        {l.id === 'guadalupe' ? 'Valle de Guadalupe' : l.nombre}
      </text>
    </g>
  );
}

function Mapa({ actual, elegir }: { actual: string; elegir: (id: string) => void }) {
  const enMapa = origen.lugares.filter((l) => l.lat !== undefined);
  const [bx, by] = px(CABOS.lat, CABOS.lon);
  const [bx2, by2] = px(CABOS.lat - CABOS.h / (45 * CABOS.k), CABOS.lon + CABOS.w / (40 * CABOS.k));
  return (
    <svg viewBox="0 0 430 500" className="w-full" role="group" aria-label="Map of the Baja California peninsula with the places our ingredients come from">
      <defs><clipPath id="recorte-cabos"><rect x={CABOS.x} y={CABOS.y} width={CABOS.w} height={CABOS.h} rx="10" /></clipPath></defs>
      <path d={contorno} fill="#3a3a41" stroke="#e39a52" strokeOpacity="0.55" strokeWidth="1.5" strokeLinejoin="round" />
      <text x="70" y="330" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="15" fill="#ffffff" fillOpacity="0.55">Pacific Ocean</text>
      <text x="262" y="292" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="15" fill="#ffffff" fillOpacity="0.55" transform="rotate(52 262 292)">Sea of Cortez</text>
      {/* recuadro de Los Cabos */}
      <rect x={bx} y={by} width={bx2 - bx} height={by2 - by} fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeDasharray="3 3" />
      <line x1={bx2} y1={by} x2={CABOS.x + CABOS.w / 2} y2={CABOS.y + CABOS.h} stroke="#ffffff" strokeOpacity="0.3" strokeDasharray="3 3" />
      <rect x={CABOS.x} y={CABOS.y} width={CABOS.w} height={CABOS.h} rx="10" fill="#26262b" stroke="#ffffff" strokeOpacity="0.35" />
      <g clipPath="url(#recorte-cabos)">
        <path d={contornoCabos} fill="#3a3a41" stroke="#e39a52" strokeOpacity="0.55" strokeWidth="1.5" strokeLinejoin="round" />
      </g>
      <text x={CABOS.x + 10} y={CABOS.y + 20} fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="14" fill="#ffffff" fillOpacity="0.75">Los Cabos</text>
      {enMapa.map((l) => {
        const activo = l.id === actual;
        if (enCabos.has(l.id)) {
          const [x, y] = px(l.lat!, l.lon!);
          const [ix, iy] = pxCabos(l.lat!, l.lon!);
          return (
            <g key={l.id}>
              <circle cx={x} cy={y} r="3" fill={colorTipo[l.tipo]} aria-hidden="true" />
              <Punto l={l} x={ix} y={iy} activo={activo} elegir={elegir} />
            </g>
          );
        }
        const [x, y] = px(l.lat!, l.lon!);
        return <Punto key={l.id} l={l} x={x} y={y} activo={activo} elegir={elegir} />;
      })}
    </svg>
  );
}

function Origen() {
  const [id, setId] = useState('miraflores');
  const l = origen.lugares.find((x) => x.id === id)!;
  const platillos = (l.platillos ?? []).map(buscar).filter(Boolean) as Platillo[];
  const peninsula = origen.lugares.filter((x) => x.lat !== undefined);
  const fuera = origen.lugares.filter((x) => x.lat === undefined);
  const mensaje = l.vino
    ? `${saludo} I'd like to know more about a wine tasting in the cava, with wines from ${l.nombre}.`
    : `${saludo} I'd like to book a table at Don Sanchez. I want to try the ${platillos.map((p) => p.nombre).join(' and the ')} (from ${l.nombre}).`;

  const Boton = ({ x }: { x: Lugar }) => (
    <button type="button" aria-pressed={x.id === id} onClick={() => setId(x.id)}
      className={`flex min-w-0 items-center gap-2 rounded-full border px-4 py-2 text-left text-sm font-semibold transition-colors ${x.id === id ? 'border-white bg-white text-tinta' : 'border-white/30 text-white hover:border-white/70'}`}>
      <span className="size-2.5 shrink-0 rounded-full" style={{ background: colorTipo[x.tipo] }} aria-hidden="true" />
      <span className="truncate">{x.nombre}</span>
    </button>
  );

  return (
    <section id="origen" className="oscuro bg-tinta text-white">
      <div className="contenedor py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] text-white">{origen.titulo}</h2>
          <p className="mt-4 text-lg text-white/90">{origen.intro}</p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="mx-auto w-full max-w-sm min-w-0 md:col-span-5 md:max-w-none">
            <Mapa actual={id} elegir={setId} />
          </div>

          <div className="min-w-0 md:col-span-7">
            <fieldset>
              <legend className="font-semibold text-cobre-claro">On the peninsula</legend>
              <div className="mt-3 flex flex-wrap gap-2">{peninsula.map((x) => <Boton key={x.id} x={x} />)}</div>
            </fieldset>
            <fieldset className="mt-6">
              <legend className="font-semibold text-cobre-claro">Beyond the peninsula</legend>
              <div className="mt-3 flex flex-wrap gap-2">{fuera.map((x) => <Boton key={x.id} x={x} />)}</div>
            </fieldset>

            <div className="mt-8 rounded-[1.5rem] border border-white/15 bg-white/5 p-6 md:p-8" aria-live="polite">
              <p className="text-sm font-semibold" style={{ color: colorTipo[l.tipo] }}>{tipoTexto[l.tipo]}</p>
              <h3 className="mt-1 text-[clamp(1.9rem,3.4vw,2.7rem)] text-white">{l.nombre}</h3>
              <p className="text-white/75">{l.region}</p>
              <p className="mt-4 font-serif text-xl italic text-white/95">“{l.cita}”</p>
              {platillos.length > 0 && (
                <ul className="mt-6 divide-y divide-white/10 border-t border-white/10">
                  {platillos.map((p) => (
                    <li key={p.nombre} className="py-3">
                      <div className="flex items-baseline gap-3">
                        <span className="font-semibold text-white">{p.nombre}</span>
                        <span className="puntos border-white/30" aria-hidden="true" />
                        <span className="precio shrink-0 font-semibold text-cobre-claro">{mxn(p.precio)}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={wa(mensaje)} {...externo} className="btn">{Icono.wa} {l.vino ? 'Ask about the cava' : 'Book and try it'}</a>
                <a href={l.vino ? '#cava' : '#menu'} className="btn-claro">{l.vino ? 'About the cava' : 'See the full menu'}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Menú ----------

function Menu() {
  const [tab, setTab] = useState(menu.pestanas[0].id);
  const actual = menu.pestanas.find((p) => p.id === tab)!;
  const platos = actual.platillos as Platillo[];
  const aviso = (actual as { aviso?: string }).aviso;
  return (
    <section id="menu" className="bg-arena-2">
      <div className="contenedor py-20 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2.4rem,5vw,4.2rem)]">Menu at Don Sanchez</h2>
          <p className="mt-3 text-lg">When you visit Don Sánchez restaurant, one of the best restaurants in San José del Cabo art district, you will have an outstanding culinary experience: Mexican contemporary cuisine.</p>
        </div>

        <div role="tablist" aria-label="Menu sections" className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {menu.pestanas.map((p) => (
            <button key={p.id} id={`tab-${p.id}`} role="tab" type="button" aria-selected={p.id === tab} aria-controls="panel-menu" onClick={() => setTab(p.id)}
              className={`shrink-0 rounded-full border px-4 py-2 font-semibold transition-colors ${p.id === tab ? 'border-tinta bg-tinta text-white' : 'border-tinta/25 text-tinta hover:border-tinta'}`}>{p.nombre}</button>
          ))}
        </div>

        <div id="panel-menu" role="tabpanel" aria-labelledby={`tab-${tab}`} className="mt-8">
          {aviso && <p className="mb-4 font-semibold text-cobre-oscuro">{aviso}</p>}
          <ul className="grid gap-x-14 md:grid-cols-2">
            {platos.map((pl) => (
              <li key={pl.nombre} className="flex min-w-0 gap-4 border-b border-tinta/10 py-5">
                {pl.foto && (
                  <img src={foto(pl.foto, 1025, 683, '').src} alt={pl.nombre} width="1025" height="683" loading="lazy" decoding="async" className="size-20 shrink-0 rounded-xl object-cover md:size-24" />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-sans text-lg font-semibold leading-snug text-tinta">{pl.nombre}</h3>
                    <span className="puntos" aria-hidden="true" />
                    <span className="precio shrink-0 font-semibold text-tinta">{mxn(pl.precio)}</span>
                  </div>
                  {pl.sello && <p className="mt-1 text-sm font-semibold text-cobre-oscuro">{pl.sello}</p>}
                  {pl.desc && <p className="mt-1 text-[0.95rem] leading-relaxed">{pl.desc.split(' | ').join(', ')}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 text-sm">Prices in Mexican pesos, as published on our menu. Grams show the portion of the main ingredient.</p>
      </div>
    </section>
  );
}

// ---------- Cava ----------

function Cava() {
  return (
    <section id="cava" className="contenedor py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-12 md:gap-14">
        <div className="min-w-0 md:col-span-6">
          <h2 className="text-[clamp(2.4rem,4.8vw,3.9rem)]">{cava.titulo}</h2>
          <p className="mt-6 text-lg">{cava.texto}</p>
          <h3 className="mt-10 text-3xl">{cava.sommelierTitulo}</h3>
          <p className="mt-3 text-lg">{cava.sommelier}</p>
          <h3 className="mt-10 text-3xl">{cava.cataTitulo}</h3>
          <p className="mt-3 text-lg">{cava.cata}</p>
          <a href={cava.whatsapp} {...externo} className="btn mt-8">{Icono.wa} Book the cava</a>
        </div>
        <div className="min-w-0 md:col-span-6">
          <div className="divide-y divide-tinta/15 border-y border-tinta/15">
            {cava.preguntas.map((q) => (
              <details key={q.p} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-tinta">
                  {q.p}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-tinta/25 text-lg transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3">{q.r}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Reconocimientos y opiniones ----------

function Reconocimientos() {
  return (
    <section aria-labelledby="premios-titulo" className="bg-arena-2">
      <div className="contenedor py-20 md:py-24">
        <h2 id="premios-titulo" className="text-[clamp(2.2rem,4.4vw,3.6rem)]">Recognitions</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {reconocimientos.map((r) => (
            <article key={r.titulo} className="min-w-0">
              <div className={`flex h-44 items-center justify-center overflow-hidden rounded-[1.25rem] bg-white ${r.cubrir ? '' : 'p-4'}`}>
                <img src={r.foto.src} alt={r.foto.alt} width={r.foto.w} height={r.foto.h} loading="lazy" decoding="async" className={r.cubrir ? 'size-full object-cover object-[50%_35%]' : 'max-h-full w-auto object-contain'} />
              </div>
              <h3 className="mt-5 text-2xl">{r.titulo}</h3>
              <p className="mt-2">{r.texto}</p>
              {r.enlace && <a href={r.enlace} {...externo} className="mt-2 inline-block font-semibold text-cobre-oscuro underline underline-offset-4">Culinaria Mexicana</a>}
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-12">
          <div className="min-w-0 md:col-span-4">
            <h2 className="text-[clamp(2.2rem,4.4vw,3.6rem)]">What our guests say</h2>
            <p className="mt-4 font-serif text-6xl text-tinta">{negocio.resenaGoogle.calificacion}</p>
            <p>on Google, based on {negocio.resenaGoogle.total} reviews</p>
            <a href={negocio.resenaGoogle.url} {...externo} className="mt-3 inline-block font-semibold text-cobre-oscuro underline underline-offset-4">Read the reviews on Google</a>
          </div>
          <div className="grid min-w-0 gap-8 md:col-span-8">
            {opiniones.map((o, i) => (
              <figure key={o.autor} className={i === 0 ? '' : 'border-l-4 border-cobre pl-5'}>
                <blockquote className={i === 0 ? 'font-serif text-[clamp(1.5rem,2.6vw,2.1rem)] italic leading-snug text-tinta' : 'text-lg'}>“{o.texto}”</blockquote>
                <figcaption className="mt-2 font-semibold text-cobre-oscuro">{o.autor}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Eventos ----------

function Eventos() {
  const mensaje = `${saludo} I'd like to plan an event at Don Sanchez. Type of event: ___, date: ___, number of guests: ___.`;
  return (
    <section id="eventos" className="contenedor py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-12 md:items-center md:gap-14">
        <div className="grid min-w-0 grid-cols-5 gap-4 md:col-span-6">
          <div className="col-span-3 aspect-[4/5] overflow-hidden rounded-[1.25rem]"><Img foto={eventos.fotos[0]} /></div>
          <div className="col-span-2 mt-12 aspect-[2/3] overflow-hidden rounded-[1.25rem]"><Img foto={eventos.fotos[1]} /></div>
        </div>
        <div className="min-w-0 md:col-span-6">
          <h2 className="text-[clamp(2.4rem,4.8vw,3.9rem)]">{eventos.titulo}</h2>
          <p className="mt-6 text-lg">{eventos.texto}</p>
          <p className="mt-4 text-lg">{eventos.texto2}</p>
          <p className="mt-6 font-serif text-2xl italic text-tinta">{eventos.tipos.join(', ').replace(/, ([^,]*)$/, ' and $1')}.</p>
          <a href={wa(mensaje)} {...externo} className="btn mt-8">{Icono.wa} Contact an event specialist</a>
        </div>
      </div>
    </section>
  );
}

// ---------- Bueno saber, galería, contacto ----------

function Galeria() {
  return (
    <section aria-label="Dishes by chef Edgar Román" className="contenedor pb-20 md:pb-24">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {galeria.map((g) => <div key={g.src} className="aspect-[3/2] min-w-0 overflow-hidden rounded-2xl"><Img foto={g} /></div>)}
      </div>
    </section>
  );
}

function Politicas() {
  return (
    <section aria-labelledby="saber-titulo" className="bg-arena-2">
      <div className="contenedor py-16 md:py-20">
        <h2 id="saber-titulo" className="text-[clamp(2.2rem,4.4vw,3.4rem)]">Good to know before you come</h2>
        <dl className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {politicas.map((p) => (
            <div key={p.t} className="min-w-0 border-t-2 border-cobre pt-3">
              <dt className="font-semibold text-tinta">{p.t}</dt>
              <dd className="mt-1">{p.d}</dd>
            </div>
          ))}
        </dl>
        <a href="https://donsanchezrestaurant.com/7338-2/" {...externo} className="mt-8 inline-block font-semibold text-cobre-oscuro underline underline-offset-4">Full reservation policies</a>
      </div>
    </section>
  );
}

function Visitanos() {
  const d = negocio.direccion;
  return (
    <section id="visitanos" className="oscuro bg-tinta text-white">
      <div className="contenedor grid gap-12 py-20 md:grid-cols-12 md:py-24">
        <div className="min-w-0 md:col-span-6">
          <h2 className="text-[clamp(2.4rem,4.8vw,3.9rem)] text-white">Visit us in the Art District</h2>
          <p className="mt-4 text-lg text-white/90">{negocio.horario}. {negocio.musica}.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.opentable} {...externo} className="btn">{Icono.mesa} Book on OpenTable</a>
            <a href={negocio.whatsapp} {...externo} className="btn-claro">{Icono.wa} WhatsApp</a>
          </div>
        </div>
        <div className="min-w-0 md:col-span-6">
          <iframe
            src={negocio.mapaEmbed}
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: '0.75rem' }}
            allowFullScreen
            loading="lazy"
            title={`Location of ${negocio.nombre}`}
            className="w-full"
          />
        </div>
        <dl className="grid min-w-0 content-start gap-6 sm:grid-cols-2 md:col-span-12">
          <div className="sm:col-span-2">
            <dt className="font-semibold text-cobre-claro">Address</dt>
            <dd className="mt-1 text-lg">{d.calle}, {d.zona}, {d.cp} {d.ciudad}</dd>
            <dd className="mt-3"><a href={negocio.mapa} {...externo} className="inline-flex items-center gap-2 font-semibold text-white underline decoration-cobre-claro decoration-2 underline-offset-4">{Icono.mapa} Get directions on Google Maps</a></dd>
          </div>
          <div>
            <dt className="font-semibold text-cobre-claro">WhatsApp</dt>
            <dd className="mt-1"><a className="text-lg text-white underline underline-offset-4" href={negocio.whatsapp} {...externo}>{negocio.whatsappVisible}</a></dd>
          </div>
          <div>
            <dt className="font-semibold text-cobre-claro">Follow us</dt>
            <dd className="mt-1 flex flex-wrap gap-x-4">
              <a className="text-lg text-white underline underline-offset-4" href={negocio.instagram} {...externo}>Instagram</a>
              <a className="text-lg text-white underline underline-offset-4" href={negocio.facebook} {...externo}>Facebook</a>
              <a className="text-lg text-white underline underline-offset-4" href={negocio.youtube} {...externo}>YouTube</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro border-t border-white/10 bg-tinta pb-28 pt-10 text-white/80 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-6">
        <img src={negocio.logoClaro.src} alt={negocio.logoClaro.alt} width={negocio.logoClaro.w} height={negocio.logoClaro.h} loading="lazy" className="h-8 w-auto" />
        <p className="text-sm">Don Sánchez, part of <a href={negocio.grupo.url} {...externo} className="underline underline-offset-4">{negocio.grupo.nombre}</a>. © {new Date().getFullYear()} Don Sanchez Restaurant.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta/10 bg-arena/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.8fr_1fr_1fr] gap-2">
        <a href={negocio.opentable} {...externo} className="btn px-3">{Icono.mesa} Book</a>
        <a href={negocio.whatsapp} {...externo} className="btn-linea px-0" aria-label="Message Don Sanchez on WhatsApp">{Icono.wa}</a>
        <a href={negocio.mapa} {...externo} className="btn-linea px-0" aria-label="Directions to Don Sanchez on Google Maps">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#menu" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Skip to the menu</a>
      <Encabezado />
      <main>
        <Portada />
        <Cocina />
        <Origen />
        <Menu />
        <Cava />
        <Galeria />
        <Reconocimientos />
        <Eventos />
        <Politicas />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
