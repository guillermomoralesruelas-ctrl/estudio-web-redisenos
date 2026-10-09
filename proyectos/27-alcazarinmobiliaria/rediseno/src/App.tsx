import { useMemo, useState } from 'react';
import {
  destacadas, fechaListado, grupos, lema, negocio, propiedades, quienes, rotulos, servicio, topes, wa, web, type Propiedad,
} from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const corto = (n: number) => (n >= 1_000_000 ? `$${(n / 1_000_000).toLocaleString('es-MX', { maximumFractionDigits: 1 })} M` : `$${(n / 1000).toLocaleString('es-MX')} mil`);
const OP = { venta: 'En venta', renta: 'En renta', preventa: 'Preventa' } as const;
const porId = Object.fromEntries(propiedades.map((p) => [p.id, p]));

function Foto({ n, alt, className = '', prioridad = false }: { n: string; alt: string; className?: string; prioridad?: boolean }) {
  const [w, h] = medidas[n] ?? [1200, 800];
  return (
    <img src={web(`${n}.webp`)} alt={alt} width={w} height={h} className={`object-cover ${className}`}
      loading={prioridad ? 'eager' : 'lazy'} decoding="async" fetchPriority={prioridad ? 'high' : 'auto'} />
  );
}

const Icono = {
  wa: <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z" /></svg>,
  tel: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>,
  casa: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 11 12 3l9 8M5 9.5V21h14V9.5" /></svg>,
  pin: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
};

function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const enlaces = [['#buscar', 'Buscar en el mapa'], ['#destacadas', 'Destacadas'], ['#nosotros', '¿Quiénes somos?'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-cal/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Alcázar Inmobiliaria, inicio"><img src={web('logo.png')} alt="Alcázar Inmobiliaria" width={medidas.logo[0]} height={medidas.logo[1]} className="h-9 w-auto" /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-sm font-semibold">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-oro-hondo">{t}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={wa('Hola, vi su sitio y busco una propiedad en Oaxaca.')} target="_blank" rel="noopener" className="btn-grafito hidden !py-3 sm:inline-flex">{Icono.wa}WhatsApp</a>
          <button type="button" className="p-2 lg:hidden" aria-expanded={abierto} aria-controls="menu-movil" onClick={() => setAbierto(!abierto)}>
            <span className="sr-only">Menú</span>
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-black/10 lg:hidden">
          <ul className="contenedor flex flex-col py-3">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} onClick={() => setAbierto(false)} className="block py-3 text-lg">{t}</a></li>)}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  const venta = propiedades.filter((p) => p.op !== 'renta').length;
  const renta = propiedades.length - venta;
  const municipios = new Set(propiedades.map((p) => p.municipio)).size;
  return (
    <section id="inicio" className="relative overflow-hidden bg-grafito text-white">
      <Foto n="casa-con-alberca-en-huayapam" alt="Terraza con alberca y vista al valle de Oaxaca, una de sus propiedades en Huayápam" prioridad className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10" aria-hidden="true" />
      <div className="contenedor relative py-20 lg:py-32">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-oro">Agencia inmobiliaria · Oaxaca de Juárez</p>
        <h1 className="mt-5 max-w-2xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">Encuentra tu próxima casa</h1>
        <p className="mt-5 max-w-xl text-lg text-white/90">{lema}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#buscar" className="btn-oro">{Icono.pin}Buscar en el mapa</a>
          <a href={wa('Hola, vi su sitio y busco una propiedad en Oaxaca.')} target="_blank" rel="noopener" className="btn-linea">{Icono.wa}Escríbenos</a>
        </div>
        <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/25 pt-6">
          {[[venta, 'en venta y preventa'], [renta, 'en renta'], [municipios, 'municipios']].map(([v, t]) => (
            <div key={t}><dt className="sr-only">{t}</dt><dd><span className="block font-[family-name:var(--font-display)] text-4xl text-oro">{v}</span><span className="text-sm text-white/85">{t}</span></dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// ——— Buscador con mapa del valle: cada punto es una propiedad publicada, en sus coordenadas ———
const V = { n: 17.22, s: 16.94, o: -96.82, e: -96.62 }; // Valles Centrales
const C = { n: 15.94, s: 15.8, o: -97.2, e: -96.99 }; // Costa: Puerto Escondido
const VW = 400, VH = Math.round(VW * ((V.n - V.s) / ((V.e - V.o) * 0.956)));
const CW = 220, CH = Math.round(CW * ((C.n - C.s) / ((C.e - C.o) * 0.96)));
const enCaja = (p: Propiedad, b: typeof V) => p.lat <= b.n && p.lat >= b.s && p.lng >= b.o && p.lng <= b.e;
const COLOR = { venta: '#3F4044', preventa: '#7A6230', renta: '#4D6B53' } as const;

function Puntos({ caja, w, h, lista, activos, sel, onSel }: { caja: typeof V; w: number; h: number; lista: Propiedad[]; activos: Set<string>; sel: string | null; onSel: (id: string) => void }) {
  const x = (lng: number) => ((lng - caja.o) / (caja.e - caja.o)) * w;
  const y = (lat: number) => ((caja.n - lat) / (caja.n - caja.s)) * h;
  const orden = [...lista].sort((a, b) => Number(activos.has(a.id)) - Number(activos.has(b.id)));
  return (
    <>
      {orden.map((p) => {
        const on = activos.has(p.id);
        return (
          <circle key={p.id} cx={x(p.lng)} cy={y(p.lat)} r={sel === p.id ? 8 : on ? 5.5 : 3}
            fill={on ? COLOR[p.op] : '#B9B3A8'} stroke={sel === p.id ? '#C9AE72' : on ? '#fff' : 'none'} strokeWidth={sel === p.id ? 3 : 1.5}
            className={on ? 'cursor-pointer' : ''} onClick={on ? () => onSel(p.id) : undefined}>
            <title>{`${p.titulo} · ${pesos(p.precio)}`}</title>
          </circle>
        );
      })}
    </>
  );
}

function Tarjeta({ p, activa, onHover }: { p: Propiedad; activa: boolean; onHover: (id: string | null) => void }) {
  const datos = [p.rec ? `${p.rec} rec.` : '', p.banos ? `${p.banos} baños` : '', p.m2 ?? ''].filter(Boolean);
  return (
    <li id={`p-${p.id}`} onMouseEnter={() => onHover(p.id)} onMouseLeave={() => onHover(null)}
      className={`grid grid-cols-[7.5rem_1fr] overflow-hidden bg-white shadow-sm ring-1 transition-shadow sm:flex sm:flex-col ${activa ? 'ring-2 ring-oro' : 'ring-black/10'}`}>
      <div className="relative">
        <img src={web(`p/${p.id}.webp`)} alt={`${p.tipo} en ${p.zona}`} width={450} height={300} loading="lazy" decoding="async" className="h-full w-full object-cover sm:aspect-[3/2] sm:h-auto" />
        <span className="absolute left-2 top-2 px-2 py-1 text-xs font-bold uppercase tracking-wider text-white" style={{ background: COLOR[p.op] }}>{OP[p.op]}</span>
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="text-lg font-bold sm:text-xl">{pesos(p.precio)} <span className="text-sm font-normal text-gris">MXN{p.op === 'renta' ? ' al mes' : ''}</span></p>
        <h3 className="mt-1 text-base leading-snug sm:text-lg">{p.titulo}</h3>
        <p className="mt-1 text-sm text-gris">{p.tipo} · {p.zona}{p.zona !== p.municipio ? `, ${p.municipio}` : ''}</p>
        {datos.length > 0 && <p className="mt-2 text-sm font-semibold">{datos.join(' · ')}</p>}
        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-3 text-sm font-bold sm:pt-4">
          <a href={wa(`Hola, me interesa "${p.titulo}" (${pesos(p.precio)}). ${p.url}`)} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-cantera hover:underline">{Icono.wa}Me interesa</a>
          <a href={p.url} target="_blank" rel="noopener" className="text-oro-hondo hover:underline">Ver fotos y ficha <span className="sr-only">de {p.titulo}</span></a>
        </div>
      </div>
    </li>
  );
}

function Buscador() {
  const [op, setOp] = useState<'compra' | 'renta'>('compra');
  const [grupo, setGrupo] = useState<string>('todos');
  const [tope, setTope] = useState<number>(topes.compra.length - 1);
  const [rec, setRec] = useState(0);
  const [sel, setSel] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const [cuantas, setCuantas] = useState(12);

  const lista = topes[op];
  const max = lista[Math.min(tope, lista.length - 1)];
  const res = useMemo(() => {
    const g = grupos.find((x) => x.id === grupo);
    return propiedades
      .filter((p) => (op === 'renta' ? p.op === 'renta' : p.op !== 'renta'))
      .filter((p) => !g || (g.tipos as readonly string[]).includes(p.tipo))
      .filter((p) => max === null || p.precio <= max)
      .filter((p) => !rec || (p.rec ?? 0) >= rec)
      .sort((a, b) => a.precio - b.precio);
  }, [op, grupo, max, rec]);
  const activos = new Set(res.map((p) => p.id));
  const fuera = res.filter((p) => !enCaja(p, V) && !enCaja(p, C));
  const enCosta = res.filter((p) => enCaja(p, C));
  const marcado = sel && activos.has(sel) ? porId[sel] : null;
  const resaltar = hover ?? sel;

  const cambiarOp = (o: 'compra' | 'renta') => { setOp(o); setTope(topes[o].length - 1); setSel(null); setCuantas(12); };
  const elegir = (id: string) => {
    setSel(id);
    const i = res.findIndex((p) => p.id === id);
    if (i >= cuantas) setCuantas(Math.ceil((i + 1) / 12) * 12);
  };

  return (
    <section id="buscar" className="py-16 lg:py-24">
      <div className="contenedor">
        <p className="eyebrow">Buscar en el mapa</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">Todas sus propiedades, en el valle de Oaxaca</h2>
        <p className="mt-4 max-w-2xl text-gris">Cada punto es una de las {propiedades.length} propiedades que Alcázar tiene publicadas, en su ubicación. Di qué buscas y cuánto quieres gastar: el mapa y la lista se ajustan.</p>

        <div className="mt-8 grid gap-5 border-y border-black/10 py-6 lg:grid-cols-[auto_1fr_auto] lg:items-end">
          <fieldset>
            <legend className="text-xs font-bold uppercase tracking-[0.2em] text-gris">Quiero</legend>
            <div className="mt-2 inline-flex border border-grafito">
              {(['compra', 'renta'] as const).map((o) => (
                <button key={o} type="button" aria-pressed={op === o} onClick={() => cambiarOp(o)}
                  className={`px-5 py-2.5 text-sm font-bold ${op === o ? 'bg-grafito text-white' : 'hover:bg-arena'}`}>{o === 'compra' ? 'Comprar' : 'Rentar'}</button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-xs font-bold uppercase tracking-[0.2em] text-gris">Tipo</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {[{ id: 'todos', nombre: 'Todo' }, ...grupos].map((g) => (
                <button key={g.id} type="button" aria-pressed={grupo === g.id} onClick={() => { setGrupo(g.id); setCuantas(12); }}
                  className={`border px-3 py-2 text-sm font-semibold ${grupo === g.id ? 'border-cantera bg-cantera text-white' : 'border-black/20 hover:border-cantera'}`}>{g.nombre}</button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-xs font-bold uppercase tracking-[0.2em] text-gris">Recámaras</legend>
            <div className="mt-2 flex gap-1">
              {[0, 2, 3, 4].map((n) => (
                <button key={n} type="button" aria-pressed={rec === n} onClick={() => setRec(n)}
                  className={`min-w-11 border px-3 py-2 text-sm font-semibold ${rec === n ? 'border-grafito bg-grafito text-white' : 'border-black/20 hover:border-grafito'}`}>{n ? `${n}+` : 'Todas'}</button>
              ))}
            </div>
          </fieldset>
          <div className="lg:col-span-3">
            <label htmlFor="tope" className="flex flex-wrap items-baseline justify-between gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gris">
              Presupuesto {op === 'renta' ? 'mensual' : ''}
              <span className="font-[family-name:var(--font-display)] text-2xl normal-case tracking-normal text-tinta">{max === null ? 'Sin tope' : `Hasta ${pesos(max)}`}</span>
            </label>
            <input id="tope" type="range" min={0} max={lista.length - 1} step={1} value={tope} onChange={(e) => { setTope(Number(e.target.value)); setCuantas(12); }}
              aria-valuetext={max === null ? 'Sin tope' : `Hasta ${pesos(max)}`} className="mt-3 w-full accent-[#4D6B53]" />
            <div className="mt-1 flex justify-between text-xs text-gris" aria-hidden="true">{lista.map((t, i) => <span key={i}>{t === null ? 'Sin tope' : corto(t)}</span>)}</div>
          </div>
        </div>

        <p className="mt-6 text-lg" aria-live="polite"><strong>{res.length}</strong> {res.length === 1 ? 'propiedad' : 'propiedades'} {op === 'renta' ? 'en renta' : 'en venta y preventa'}{max !== null ? ` hasta ${pesos(max)}` : ''}.</p>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,26rem)_1fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <figure className="bg-arena p-3">
              <svg viewBox={`0 0 ${VW} ${VH}`} className="h-auto w-full" role="img" aria-label={`Mapa de los Valles Centrales de Oaxaca con ${res.length - fuera.length - enCosta.length} propiedades que coinciden`}>
                {Array.from({ length: 6 }, (_, i) => <line key={`v${i}`} x1={(i * VW) / 5} x2={(i * VW) / 5} y1={0} y2={VH} stroke="#00000012" />)}
                {Array.from({ length: 8 }, (_, i) => <line key={`h${i}`} y1={(i * VH) / 7} y2={(i * VH) / 7} x1={0} x2={VW} stroke="#00000012" />)}
                {rotulos.map((r) => (
                  <text key={r.t} x={((r.lng - V.o) / (V.e - V.o)) * VW} y={((V.n - r.lat) / (V.n - V.s)) * VH - 10} textAnchor="middle"
                    className="fill-[#5A5C62] text-[11px] font-semibold uppercase tracking-wider" style={{ paintOrder: 'stroke', stroke: '#EFE9DE', strokeWidth: 4 }}>{r.t}</text>
                ))}
                <Puntos caja={V} w={VW} h={VH} lista={propiedades.filter((p) => enCaja(p, V))} activos={activos} sel={resaltar} onSel={elegir} />
              </svg>
              <figcaption className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gris">
                {(['venta', 'preventa', 'renta'] as const).map((o) => <span key={o} className="inline-flex items-center gap-1.5"><span className="size-2.5 rounded-full" style={{ background: COLOR[o] }} />{OP[o]}</span>)}
                <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#B9B3A8]" />No coincide</span>
              </figcaption>
            </figure>
            {propiedades.some((p) => enCaja(p, C)) && (
              <figure className="mt-3 flex items-center gap-3 bg-arena p-3">
                <svg viewBox={`0 0 ${CW} ${CH}`} className="h-auto w-36 shrink-0" role="img" aria-label={`Costa de Oaxaca, Puerto Escondido: ${enCosta.length} propiedades que coinciden`}>
                  <rect width={CW} height={CH} fill="#DDE6E0" />
                  <Puntos caja={C} w={CW} h={CH} lista={propiedades.filter((p) => enCaja(p, C))} activos={activos} sel={resaltar} onSel={elegir} />
                </svg>
                <figcaption className="text-sm"><strong>En la costa</strong><br />Puerto Escondido, Zicatela y Bajos de Chila: {enCosta.length} que coinciden.</figcaption>
              </figure>
            )}
            {fuera.length > 0 && <p className="mt-2 text-sm text-gris">Fuera del mapa: {fuera.map((p) => `${p.titulo} (${p.municipio})`).join(', ')}.</p>}
            {marcado && (
              <div className="mt-3 flex items-center gap-3 bg-white p-3 ring-2 ring-oro">
                <img src={web(`p/${marcado.id}.webp`)} alt="" width={450} height={300} className="aspect-[3/2] w-24 object-cover" />
                <div className="min-w-0 text-sm">
                  <p className="font-bold">{pesos(marcado.precio)}{marcado.op === 'renta' ? ' al mes' : ''}</p>
                  <p className="truncate">{marcado.titulo}</p>
                  <a href={`#p-${marcado.id}`} className="font-bold text-oro-hondo hover:underline">Ver en la lista</a>
                </div>
              </div>
            )}
          </div>

          <div>
            {res.length === 0 ? (
              <div className="bg-arena p-8">
                <p className="text-lg font-semibold">No hay propiedades publicadas con esos filtros.</p>
                <p className="mt-2 text-gris">Sube el presupuesto o cambia el tipo. También puedes contarles qué buscas por WhatsApp.</p>
                <a href={wa(`Hola, busco ${op === 'renta' ? 'rentar' : 'comprar'} en Oaxaca${max !== null ? ` con un presupuesto de hasta ${pesos(max)}` : ''}. ¿Tienen algo?`)} target="_blank" rel="noopener" className="btn-grafito mt-5">{Icono.wa}Contarles qué busco</a>
              </div>
            ) : (
              <>
                <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {res.slice(0, cuantas).map((p) => <Tarjeta key={p.id} p={p} activa={resaltar === p.id} onHover={setHover} />)}
                </ul>
                {res.length > cuantas && (
                  <button type="button" onClick={() => setCuantas(cuantas + 12)} className="btn-linea mt-8 w-full text-grafito">Ver más ({res.length - cuantas} restantes)</button>
                )}
              </>
            )}
            <p className="mt-6 text-xs text-gris">Listado tomado de su sitio el {fechaListado}. Precios en pesos mexicanos; confirma disponibilidad antes de visitar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Destacadas() {
  return (
    <section id="destacadas" className="bg-grafito py-16 text-white lg:py-24">
      <div className="contenedor">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-oro">Destacadas</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">Para vivir, invertir o emprender</h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destacadas.map((d) => {
            const p = porId[d.id];
            return (
              <li key={d.id} className="group relative overflow-hidden">
                <Foto n={d.foto} alt={d.alt} className="aspect-[4/3] w-full transition-transform sm:aspect-[4/5] duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 pt-16">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-oro">{OP[p.op]} · {p.zona}</p>
                  <h3 className="mt-1 text-2xl">{p.titulo}</h3>
                  <p className="mt-1 font-bold">{pesos(p.precio)} MXN{p.op === 'renta' ? ' al mes' : ''}</p>
                  <a href={p.url} target="_blank" rel="noopener" className="mt-2 inline-block text-sm font-bold text-oro underline-offset-4 after:absolute after:inset-0 hover:underline">Ver ficha <span className="sr-only">de {p.titulo}</span></a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="py-16 lg:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">¿Quiénes somos?</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Tu próxima propiedad te espera</h2>
          {quienes.map((t) => <p key={t} className="mt-4 text-lg text-gris">{t}</p>)}
          <ul className="mt-8 grid grid-cols-3 gap-3">
            {servicio.map((s) => <li key={s} className="border-t-2 border-oro pt-3 font-[family-name:var(--font-display)] text-base sm:text-xl">{s}</li>)}
          </ul>
          <p className="mt-6 text-gris">Compra, venta y renta de inmuebles en Oaxaca de Juárez.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Foto n="oportunidad-en-el-centro-historico-oaxaca-centro" alt="Corredor de una casona en el centro histórico de Oaxaca" className="aspect-[3/4] w-full" />
          <Foto n="casa-vacacional-en-huayapam" alt="Jardín con escalinata de piedra en una casa de Huayápam" className="mt-10 aspect-[3/4] w-full" />
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-arena py-16 lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">¿Buscas, vendes o rentas?</h2>
          <p className="mt-4 max-w-xl text-lg text-gris">Escríbeles qué necesitas y te contactan a la brevedad. Si tienes un inmueble en Oaxaca, también te ayudan a venderlo o rentarlo.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, vi su sitio y quiero información.')} target="_blank" rel="noopener" className="btn-grafito">{Icono.wa}WhatsApp {negocio.celular}</a>
            <a href={negocio.telefonoHref} className="btn-linea text-grafito">{Icono.tel}{negocio.telefono}</a>
          </div>
        </div>
        <dl className="divide-y divide-black/10 border-y border-black/10">
          {[
            ['Teléfono', <a href={negocio.telefonoHref} className="hover:underline">{negocio.telefono}</a>],
            ['Celular y WhatsApp', <a href={negocio.celularHref} className="hover:underline">{negocio.celular}</a>],
            ['Correo', <a href={`mailto:${negocio.email}`} className="break-all hover:underline">{negocio.email}</a>],
            ['Ciudad', <a href={negocio.maps} target="_blank" rel="noopener" className="hover:underline">{negocio.ciudad} (ver en Google Maps)</a>],
            ['Redes', <a href={negocio.facebook} target="_blank" rel="noopener" className="hover:underline">Facebook</a>],
          ].map(([t, v]) => (
            <div key={t as string} className="grid grid-cols-[9rem_1fr] gap-4 py-4"><dt className="text-sm font-bold uppercase tracking-wider text-gris">{t}</dt><dd className="font-semibold">{v}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-grafito pb-28 pt-10 text-white/80 lg:pb-10">
      <div className="contenedor flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-[family-name:var(--font-display)] text-2xl tracking-[0.2em] text-oro">ALCÁZAR <span className="text-sm text-white/80">INMOBILIARIA</span></p>
        <p className="text-xs">© {new Date().getFullYear()} Alcázar Inmobiliaria · {negocio.ciudad}</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-grafito text-white lg:hidden">
      <a href={wa('Hola, vi su sitio y busco una propiedad en Oaxaca.')} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 bg-cantera py-3 text-xs font-bold">{Icono.wa}WhatsApp</a>
      <a href={negocio.telefonoHref} className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.tel}Llamar</a>
      <a href="#buscar" className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.casa}Propiedades</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Cabecera />
      <main id="contenido">
        <Portada />
        <Buscador />
        <Destacadas />
        <Nosotros />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
