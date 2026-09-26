import { useMemo, useState } from 'react';
import {
  accesorios, accesoriosIntro, antojos, cafes, diferencia, envios, giftCard, granos, kits, kitsNota, moliendas, negocio,
  producto, regalosIntro, saludo, sampler, TIENDA, wa,
  type Cafe, type Foto, type Molienda, type Tueste,
} from './data/content';
import datos from './data/cafes.json';

const externo = { target: '_blank', rel: 'noopener' } as const;

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
  ),
  bolsa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 8h14l-1 12H6L5 8Z" strokeLinejoin="round" /><path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
};

function Img({ foto: fo, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={fo.src} alt={fo.alt} width={fo.w} height={fo.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

const pesos = (n: number) => `$${n.toLocaleString('es-MX', { maximumFractionDigits: 0 })}`;
const tamano = (t: string | null) => (t ?? '250 g').replace(' gr', ' g');

type Variante = { id: number; tamano: string | null; molido: string; precio: number; disponible: boolean };
type Datos = { handle: string; titulo: string; disponible: boolean; variantes: Variante[] };
const porHandle = new Map((datos.cafes as Datos[]).map((d) => [d.handle, d]));

// ---------- Encabezado y portada ----------

const nav = [
  { href: '#cafes', label: 'Cafés' },
  { href: '#diferencia', label: 'La diferencia' },
  { href: '#accesorios', label: 'Accesorios' },
  { href: '#regalos', label: 'Regalos' },
  { href: '#visitanos', label: 'Visítanos' },
];

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-carbon/10 bg-crema/95 backdrop-blur">
      <p className="bg-amarillo py-1.5 text-center text-[0.8rem] font-bold tracking-wide text-carbon">{negocio.cinta}</p>
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <a href="#inicio" className="shrink-0" aria-label="Huupa Coffee, volver al inicio">
          <img src={negocio.logo.src} alt={negocio.logo.alt} width={negocio.logo.w} height={negocio.logo.h} className="h-9 w-auto md:h-10" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-bold text-carbon/85 hover:text-naranja-oscuro">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={TIENDA} {...externo} className="btn hidden sm:inline-flex">{Icono.bolsa} Ir a la tienda</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir el menú"
            className="grid size-11 place-items-center rounded-full border border-carbon/20 text-carbon lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-carbon/10 bg-crema lg:hidden" aria-label="Menú del celular">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="border-b border-carbon/10 py-3 font-titulo text-2xl text-carbon">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="contenedor grid items-center gap-10 py-12 md:grid-cols-12 md:py-20">
      <div className="min-w-0 md:col-span-7">
        <h1 className="text-[clamp(2.9rem,7.2vw,5.6rem)]">
          {negocio.titulo.map((t, i) => <span key={t} className={`block ${i === 0 ? '' : 'text-naranja-oscuro'}`}>{t}</span>)}
        </h1>
        <p className="mt-6 max-w-xl text-lg md:text-xl">{negocio.frase}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#cafes" className="btn-naranja">Elegir mi café</a>
          <a href={TIENDA} {...externo} className="btn-linea">{Icono.bolsa} Ir a la tienda</a>
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-carbon/15 pt-5 font-bold text-carbon">
          {negocio.datos.map((d) => (
            <li key={d} className="flex items-center gap-2"><span className="size-2 rounded-full bg-naranja" aria-hidden="true" />{d}</li>
          ))}
        </ul>
      </div>
      <div className="relative min-w-0 md:col-span-5">
        <div className="aspect-square overflow-hidden rounded-[2rem] bg-carbon"><Img foto={negocio.hero} eager /></div>
        <p className="absolute -bottom-4 left-4 right-4 rounded-2xl bg-carbon px-5 py-3 text-sm text-white md:left-auto md:right-6 md:max-w-[17rem]">
          Tostado en leña de mezquite del desierto de Sonora.
        </p>
      </div>
    </section>
  );
}

// ---------- Elemento memorable: "Molido para tu cafetera" ----------

/** Dibujo de cada cafetera, en línea. */
function Cafetera({ id }: { id: string }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  return (
    <svg viewBox="0 0 40 40" className="size-9" aria-hidden="true">
      {id === 'grano' && (<g {...p}><ellipse cx="20" cy="20" rx="9" ry="13" transform="rotate(25 20 20)" /><path d="M16 9c5 5 3 16 8 22" /></g>)}
      {id === 'espresso' && (<g {...p}><path d="M7 8h26v7H7z" /><path d="M14 15v3h12v-3M20 18v3" /><path d="M13 25h12v6a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-6Z" /><path d="M25 27h2a2 2 0 0 1 0 4h-2" /></g>)}
      {id === 'italiana' && (<g {...p}><path d="M14 5h12l-2 14h-8L14 5Z" /><path d="M16 19h8l3 15H13l3-15Z" /><path d="M26 8h4l-3 8" /><path d="M20 3v2" /></g>)}
      {id === 'colar' && (<g {...p}><path d="M9 7h22l-8 12h-6L9 7Z" /><path d="M20 19v3" /><path d="M11 24h18v8a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3v-8Z" /></g>)}
      {id === 'percoladora' && (<g {...p}><path d="M13 9h14l2 25H11l2-25Z" /><path d="M17 9V6h6v3" /><circle cx="20" cy="4" r="1.6" /><path d="M13 14 7 11v5l6 3" /><path d="M29 14h2a3 3 0 0 1 0 6h-1.5" /></g>)}
      {id === 'prensa' && (<g {...p}><rect x="11" y="10" width="16" height="25" rx="2" /><path d="M9 10h20M19 3v24M15 27h8" /><path d="M27 15h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" /><circle cx="19" cy="3" r="1.4" /></g>)}
    </svg>
  );
}

// Tamaño aproximado de la partícula (en px del dibujo) de cada grado de molienda, del fino al grueso.
const radio = [0, 1.1, 1.9, 2.8, 3.9, 5.2];
function aleatorio(semilla: number) {
  let s = semilla;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}
const cafeColor = ['#3a2012', '#5a3219', '#6b3a1c', '#7d4622', '#4a2a16'];

/** Dibuja la molienda: granos enteros o partículas del tamaño que corresponde. */
function DibujoMolienda({ m }: { m: Molienda }) {
  const puntos = useMemo(() => {
    const r = aleatorio(7 + m.nivel * 31);
    if (m.nivel === 0) {
      return Array.from({ length: 16 }, (_, i) => ({ x: 26 + (i % 6) * 52 + r() * 14, y: 30 + Math.floor(i / 6) * 58 + r() * 12, a: r() * 180, c: cafeColor[i % 5] }));
    }
    const rr = radio[m.nivel];
    const n = Math.round(9000 / (rr * rr * 7));
    return Array.from({ length: Math.min(n, 900) }, (_, i) => ({ x: 8 + r() * 304, y: 8 + r() * 164, a: r() * 360, s: rr * (0.7 + r() * 0.6), c: cafeColor[i % 5] }));
  }, [m]);
  return (
    <svg key={m.id} viewBox="0 0 320 180" className="molienda block w-full rounded-2xl bg-[#e9dcc6]" role="img" aria-label={`Así se ve la molienda ${m.grado.toLowerCase()} (${m.cafetera.toLowerCase()})`}>
      {m.nivel === 0
        ? puntos.map((p, i) => (
          <g key={i} transform={`translate(${p.x} ${p.y}) rotate(${p.a})`}>
            <ellipse rx="15" ry="21" fill={p.c} />
            <path d="M-3 -18c6 9 -2 25 5 36" fill="none" stroke="#e9dcc6" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
          </g>
        ))
        : puntos.map((p, i) => {
          const s = 's' in p ? (p.s as number) : 2;
          return <rect key={i} x={p.x} y={p.y} width={s * 1.6} height={s * 1.25} rx={s * 0.35} transform={`rotate(${p.a} ${p.x} ${p.y})`} fill={p.c} />;
        })}
    </svg>
  );
}

const tuestes: Tueste[] = ['Medio', 'Medio oscuro', 'Oscuro'];
const colorTueste: Record<Tueste, string> = { Medio: '#9a5b2e', 'Medio oscuro': '#6b3a1c', Oscuro: '#2e1a0f' };

function EscalaTueste({ t }: { t: Tueste }) {
  return (
    <div>
      <p className="text-sm text-texto">Tueste: <strong className="text-carbon">{t.toLowerCase()}</strong></p>
      <div className="mt-2 grid grid-cols-3 gap-1" aria-hidden="true">
        {tuestes.map((x) => (
          <span key={x} className={`h-2.5 rounded-full ${x === t ? '' : 'opacity-20'}`} style={{ background: colorTueste[x] }} />
        ))}
      </div>
      <div className="mt-1 grid grid-cols-3 text-[0.75rem] text-texto" aria-hidden="true">
        <span>Medio</span><span className="text-center">Medio oscuro</span><span className="text-right">Oscuro</span>
      </div>
    </div>
  );
}

function Selector() {
  const [mid, setMid] = useState('italiana');
  const [handle, setHandle] = useState('huupa-clasico');
  const [tam, setTam] = useState('250 g');
  const m = moliendas.find((x) => x.id === mid)!;
  const cafe = cafes.find((c) => c.handle === handle)!;
  const d = porHandle.get(handle)!;
  const tamanos = [...new Set(d.variantes.map((v) => tamano(v.tamano)))];
  const tamActual = tamanos.includes(tam) ? tam : tamanos[0];
  const conMolienda = d.variantes.filter((v) => v.molido === m.tienda);
  const variante = conMolienda.find((v) => tamano(v.tamano) === tamActual);
  const pedido = `${cafe.nombre}, ${tamActual}, ${m.id === 'grano' ? 'en grano (sin moler)' : `molido para ${m.cafetera === 'De colar' ? 'cafetera de colar' : m.cafetera === 'Espresso' ? 'cafetera de espresso' : m.cafetera === 'Italiana' ? 'cafetera italiana' : m.cafetera.toLowerCase()} (${m.grado.toLowerCase()})`}`;

  const grupo = (linea: Cafe['linea'], titulo: string) => (
    <div>
      <h4 className="font-titulo text-xl text-carbon">{titulo}</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {cafes.filter((c) => c.linea === linea).map((c) => {
          const agotado = !porHandle.get(c.handle)!.disponible;
          const activo = c.handle === handle;
          return (
            <button key={c.handle} type="button" onClick={() => setHandle(c.handle)} aria-pressed={activo}
              className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-left text-[0.9rem] font-bold transition-colors ${activo ? 'border-carbon bg-carbon text-white' : 'border-carbon/20 bg-white text-carbon hover:border-carbon'}`}>
              <span className="size-2.5 shrink-0 rounded-full" style={{ background: colorTueste[c.tueste] }} aria-hidden="true" />
              {c.nombre.replace('Specialty: ', '').replace('Specialty Extraordinario: ', '').replace('Café ', '')}
              {agotado && <span className={`text-[0.75rem] font-normal ${activo ? 'text-white/80' : 'text-texto'}`}>(agotado)</span>}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="cafes" className="bg-papel py-20 md:py-28">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="text-[clamp(2.4rem,5vw,4rem)]">Molido para tu cafetera</h2>
          <p className="mt-4 text-lg">Todos nuestros cafés se venden en grano o molidos, personalizados para tu cafetera. Dinos con qué preparas tu café, elige el café y el tamaño, y te llevamos a la tienda con tu bolsa lista.</p>
        </div>

        {/* Paso 1: la cafetera */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <h3 className="font-titulo text-2xl">1. ¿Con qué preparas tu café?</h3>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {moliendas.map((x) => (
                <button key={x.id} type="button" onClick={() => setMid(x.id)} aria-pressed={x.id === mid}
                  className={`flex min-w-0 flex-col items-center gap-1.5 rounded-2xl border px-1 py-3 text-center text-[0.8rem] font-bold leading-tight transition-colors ${x.id === mid ? 'border-naranja bg-naranja text-carbon' : 'border-carbon/15 bg-white text-carbon hover:border-carbon'}`}>
                  <Cafetera id={x.id} />
                  {x.cafetera}
                </button>
              ))}
            </div>
          </div>
          <div className="min-w-0 lg:col-span-5">
            <DibujoMolienda m={m} />
            <p className="mt-3 text-[0.95rem]" aria-live="polite"><strong className="text-carbon">Molienda {m.grado.toLowerCase()}.</strong> {m.nota}</p>
          </div>
        </div>

        {/* Paso 2 y 3: el café, el tamaño y la bolsa */}
        <div className="mt-14">
          <h3 className="font-titulo text-2xl">2. Elige tu café</h3>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            {grupo('casa', 'Los cafés de la casa')}
            {grupo('specialty', 'Specialty, edición limitada')}
          </div>
        </div>

        <article className="mt-10 grid gap-8 rounded-[2rem] bg-white p-5 shadow-[0_1px_0_rgba(33,35,38,0.08)] md:grid-cols-12 md:p-8" aria-live="polite">
          <div className="mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[1.5rem] bg-[#f4f4f4] md:col-span-4">
            <Img foto={cafe.foto} className="object-contain" />
          </div>
          <div className="min-w-0 md:col-span-8">
            <h4 className="font-titulo text-[clamp(1.8rem,3.2vw,2.6rem)] leading-tight text-carbon">{cafe.nombre}</h4>
            <p className="mt-2 font-bold text-naranja-oscuro">{cafe.origen}</p>
            {cafe.detalle && <p className="mt-1 text-[0.95rem]">{cafe.detalle}.</p>}
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <div className="min-w-0">
                <p className="text-sm text-texto">Notas</p>
                <p className="mt-1 text-carbon">{cafe.notas}</p>
                <p className="mt-2 text-[0.95rem] italic">{cafe.texto}</p>
              </div>
              <div className="min-w-0"><EscalaTueste t={cafe.tueste} /></div>
            </div>

            <div className="mt-6 border-t border-carbon/10 pt-5">
              <p className="font-titulo text-xl text-carbon">3. Tamaño</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tamanos.map((t) => (
                  <button key={t} type="button" onClick={() => setTam(t)} aria-pressed={t === tamActual}
                    className={`min-h-11 rounded-full border px-5 font-bold ${t === tamActual ? 'border-carbon bg-carbon text-white' : 'border-carbon/20 text-carbon hover:border-carbon'}`}>{t}</button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-end justify-between gap-5 rounded-2xl bg-crema p-5">
              {variante ? (
                <div className="min-w-0">
                  <p className="text-sm">Tu bolsa: {pedido}</p>
                  <p className="precio mt-1 font-titulo text-4xl text-carbon">{pesos(variante.precio)} <span className="font-sans text-base text-texto">MXN</span></p>
                  {!variante.disponible && <p className="mt-1 font-bold text-naranja-oscuro">Agotado por ahora</p>}
                </div>
              ) : (
                <div className="min-w-0">
                  <p className="font-bold text-carbon">Este café solo se vende en grano.</p>
                  <button type="button" onClick={() => setMid('grano')} className="mt-2 font-bold text-naranja-oscuro underline underline-offset-4">Cambiar a en grano</button>
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {variante && variante.disponible && (
                  <a href={producto(cafe.handle, variante.id)} {...externo} className="btn">{Icono.bolsa} Comprar esta bolsa</a>
                )}
                {variante && !variante.disponible && (
                  <a href={producto(cafe.handle)} {...externo} className="btn-linea">Ver en la tienda</a>
                )}
                <a href={wa(`${saludo} Quiero pedir: ${pedido}.`)} {...externo} className="btn-linea">{Icono.wa} Pedir por WhatsApp</a>
              </div>
            </div>
          </div>
        </article>

        <SamplerFila molienda={m} />
      </div>
    </section>
  );
}

function SamplerFila({ molienda }: { molienda: Molienda }) {
  const d = porHandle.get(sampler.handle)!;
  const v = d.variantes.find((x) => x.molido === molienda.tienda) ?? d.variantes[0];
  return (
    <div className="mt-8 grid items-center gap-6 rounded-[2rem] border border-carbon/15 p-5 sm:grid-cols-[8rem_1fr_auto] md:p-6">
      <div className="size-32 overflow-hidden rounded-2xl"><Img foto={sampler.foto} /></div>
      <div className="min-w-0">
        <h3 className="font-titulo text-2xl">{sampler.nombre}</h3>
        <p className="mt-1 text-[0.95rem]">{sampler.texto}</p>
        <p className="mt-1 text-[0.95rem]"><strong className="precio text-carbon">{pesos(v.precio)} MXN</strong> <span className="line-through">$973</span>, {molienda.id === 'grano' ? 'en grano' : `molido ${molienda.grado.toLowerCase()}`}.</p>
      </div>
      <a href={producto(sampler.handle, v.id)} {...externo} className="btn-linea justify-self-start">Ver el Sampler</a>
    </div>
  );
}

// ---------- La diferencia y los granos ----------

function Diferencia() {
  return (
    <section id="diferencia" className="oscuro bg-carbon py-20 text-white/85 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-4xl text-[clamp(2.2rem,4.6vw,3.8rem)] text-white">{diferencia.titulo}</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <div className="min-w-0 md:col-span-6">
            <div className="aspect-[16/11] overflow-hidden rounded-[1.5rem]"><Img foto={diferencia.fuego} /></div>
            <p className="mt-6 rounded-2xl border border-naranja/50 p-5 text-lg text-white">{diferencia.nombre}</p>
          </div>
          <div className="min-w-0 md:col-span-6">
            <div className="flex items-start gap-4">
              <img src={diferencia.lenaFoto.src} alt={diferencia.lenaFoto.alt} width={diferencia.lenaFoto.w} height={diferencia.lenaFoto.h} loading="lazy" className="size-20 shrink-0 rounded-xl bg-white/5 object-contain" />
              <div>
                <h3 className="font-titulo text-3xl text-naranja">{diferencia.lena.titulo}</h3>
                <p className="mt-3">{diferencia.lena.texto}</p>
              </div>
            </div>
            <dl className="mt-8 space-y-6 border-t border-white/15 pt-6">
              {diferencia.puntos.map((p) => (
                <div key={p.titulo}>
                  <dt className="font-titulo text-2xl text-white">{p.titulo}</dt>
                  <dd className="mt-1.5">{p.texto}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Granos() {
  return (
    <section className="contenedor grid gap-10 py-20 md:grid-cols-12 md:py-28">
      <div className="min-w-0 md:col-span-5">
        <div className="aspect-square overflow-hidden rounded-[2rem]"><Img foto={granos.foto} /></div>
      </div>
      <div className="min-w-0 md:col-span-7">
        <h2 className="text-[clamp(2.2rem,4.4vw,3.6rem)]">{granos.titulo}</h2>
        <div className="mt-6 space-y-4 text-lg">{granos.parrafos.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}</div>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          {granos.regiones.map(([r, c]) => (
            <div key={r} className="min-w-0 border-l-4 border-naranja pl-4">
              <dt className="font-titulo text-xl text-carbon">{r}</dt>
              <dd className="text-[0.95rem]">{c}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// ---------- Accesorios, antojos y regalos ----------

function Accesorios() {
  return (
    <section id="accesorios" className="bg-papel py-20 md:py-28">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="text-[clamp(2.2rem,4.4vw,3.6rem)]">Cafeteras, tazas y coyotas</h2>
          <p className="mt-4 text-lg">{accesoriosIntro}</p>
        </div>
        <ul className="mt-12 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {accesorios.map((a) => (
            <li key={a.handle} className="min-w-0">
              <a href={producto(a.handle)} {...externo} className="group grid grid-cols-[5.5rem_1fr] items-center gap-4">
                <div className="size-[5.5rem] overflow-hidden rounded-2xl bg-white">{a.foto && <Img foto={a.foto} />}</div>
                <div className="min-w-0">
                  <p className="flex items-baseline gap-2">
                    <span className="font-titulo text-xl text-carbon group-hover:text-naranja-oscuro">{a.nombre}</span>
                    <span className="puntos" aria-hidden="true" />
                    <span className="precio shrink-0 font-bold text-naranja-oscuro">{a.precio}</span>
                  </p>
                  <p className="mt-0.5 text-[0.93rem]">{a.detalle}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <h3 className="mt-16 font-titulo text-3xl">Para acompañar</h3>
        <p className="mt-2">Disfruta el sabor de la tradición con nuestras coyotas horneadas en leña, o ¿por qué no? Un buen caramelo de rancho.</p>
        <ul className="mt-6 grid gap-x-10 gap-y-5 md:grid-cols-2">
          {antojos.map((a) => (
            <li key={a.handle} className="min-w-0">
              <a href={producto(a.handle)} {...externo} className="group block">
                <p className="flex items-baseline gap-2">
                  <span className="font-titulo text-xl text-carbon group-hover:text-naranja-oscuro">{a.nombre}</span>
                  <span className="puntos" aria-hidden="true" />
                  <span className="precio shrink-0 font-bold text-naranja-oscuro">{a.precio}</span>
                </p>
                <p className="mt-0.5 text-[0.93rem]">{a.detalle}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Regalos() {
  return (
    <section id="regalos" className="contenedor py-20 md:py-28">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="min-w-0 md:col-span-5">
          <h2 className="text-[clamp(2.4rem,5vw,4rem)]">Regala Huupa®</h2>
          <p className="mt-4 text-lg">{regalosIntro}</p>
          <p className="mt-4 text-[0.95rem]">{kitsNota}</p>
          <a href={producto(giftCard.handle)} {...externo} className="mt-8 grid grid-cols-[6rem_1fr] items-center gap-4 rounded-2xl bg-amarillo p-4 text-carbon">
            <div className="size-24 overflow-hidden rounded-xl"><Img foto={giftCard.foto} /></div>
            <div className="min-w-0">
              <p className="font-titulo text-2xl">{giftCard.nombre}</p>
              <p className="font-bold">{giftCard.precio}</p>
              <p className="text-[0.9rem]">{giftCard.texto}</p>
            </div>
          </a>
        </div>
        <ul className="grid min-w-0 gap-5 sm:grid-cols-2 md:col-span-7">
          {kits.map((k) => (
            <li key={k.handle} className="min-w-0">
              <a href={producto(k.handle)} {...externo} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-[1.25rem]"><Img foto={k.foto} className="transition-transform duration-500 group-hover:scale-[1.03]" /></div>
                <p className="mt-3 flex items-baseline justify-between gap-3">
                  <span className="font-titulo text-2xl text-carbon">{k.nombre}</span>
                  <span className="precio font-bold text-naranja-oscuro">{k.precio}</span>
                </p>
                <p className="mt-1 text-[0.93rem]">{k.incluye}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------- Visítanos, pie y barra del celular ----------

function Visitanos() {
  const d = negocio.direccion;
  return (
    <section id="visitanos" className="oscuro bg-carbon py-20 text-white/85 md:py-28">
      <div className="contenedor grid gap-12 md:grid-cols-12">
        <div className="min-w-0 md:col-span-6">
          <h2 className="text-[clamp(2.2rem,4.6vw,3.8rem)] text-white">Visítanos en Hermosillo</h2>
          <dl className="mt-8 space-y-5 text-lg">
            <div><dt className="text-sm text-white/70">Dirección</dt><dd className="text-white">{d.calle}, {d.zona}, {d.cp} {d.ciudad}</dd></div>
            <div><dt className="text-sm text-white/70">Horario</dt><dd className="text-white">{negocio.horario}. {negocio.cerrado}.</dd></div>
            <div><dt className="text-sm text-white/70">WhatsApp</dt><dd className="text-white">{negocio.whatsappVisible}</dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.mapa} {...externo} className="btn-naranja">{Icono.mapa} Cómo llegar en Google Maps</a>
            <a href={negocio.whatsapp} {...externo} className="btn-claro">{Icono.wa} Escríbenos</a>
          </div>
          <p className="mt-8">
            Síguenos en <a href={negocio.instagram} {...externo} className="font-bold text-naranja underline underline-offset-4">Instagram</a> y <a href={negocio.facebook} {...externo} className="font-bold text-naranja underline underline-offset-4">Facebook</a>, o déjanos un mensaje en nuestro <a href={negocio.contacto} {...externo} className="font-bold text-naranja underline underline-offset-4">formulario de contacto</a>.
          </p>
        </div>
        <div className="min-w-0 md:col-span-6">
          <h3 className="font-titulo text-3xl text-white">Envíos a todo México</h3>
          <dl className="mt-5 divide-y divide-white/15 border-y border-white/15">
            {envios.map(([t, v]) => (
              <div key={t} className="grid gap-1 py-3.5 sm:grid-cols-[9rem_1fr]">
                <dt className="font-bold text-naranja">{t}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-[0.95rem]">Enviamos con SkyDropX, normalmente por DHL México, y en algunos destinos por FedEx o Estafeta. <a href={negocio.envios} {...externo} className="font-bold text-naranja underline underline-offset-4">Política de envíos completa</a>.</p>
          <p className="mt-3 text-[0.95rem]">¿Necesitas factura? Genérala tú mismo en <a href={negocio.facturacion} {...externo} className="font-bold text-naranja underline underline-offset-4">Facturación rápida</a>.</p>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro border-t border-white/10 bg-carbon pb-28 pt-10 text-white/80 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-6">
        <img src={negocio.logoClaro.src} alt={negocio.logoClaro.alt} width={negocio.logoClaro.w} height={negocio.logoClaro.h} loading="lazy" className="h-9 w-auto" />
        <p className="text-sm">© {new Date().getFullYear()} Huupa Coffee. Café tostado en leña de mezquite, Hermosillo, Sonora.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-carbon/10 bg-crema/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.8fr_1fr_1fr] gap-2">
        <a href="#cafes" className="btn px-3">{Icono.bolsa} Elegir mi café</a>
        <a href={negocio.whatsapp} {...externo} className="btn-linea px-0" aria-label="Escribir a Huupa por WhatsApp">{Icono.wa}</a>
        <a href={negocio.mapa} {...externo} className="btn-linea px-0" aria-label="Cómo llegar a Huupa en Google Maps">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#cafes" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Ir a los cafés</a>
      <Encabezado />
      <main>
        <Portada />
        <Selector />
        <Diferencia />
        <Granos />
        <Accesorios />
        <Regalos />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
