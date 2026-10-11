import { useMemo, useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, nosotros, asesores } from './data/content';
import { cifras, casas, propiedades } from './data/propiedades';
import type { Propiedad, Punto } from './data/propiedades';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const src = (n: string) => `${base}${n}.webp`;
const wa = (texto: string, numero = negocio.whatsapp) => `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
const pesos = (n: number) => '$' + Math.round(n).toLocaleString('es-MX');
const millones = (n: number) => `$${(n / 1e6).toLocaleString('es-MX', { maximumFractionDigits: 2 })} M`;
const portada = 'residencia-en-venta-con-alberca-4-recama';

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 800];
  return <img src={src(n)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

function detalles(p: Propiedad) {
  const d: string[] = [];
  if (p.rec) d.push(`${p.rec} rec.`);
  if (p.banos) d.push(`${p.banos} ${p.banos === 1 ? 'baño' : 'baños'}`);
  if (p.m2 && p.m2 >= 10) d.push(p.m2 >= 10000 ? `${(p.m2 / 10000).toLocaleString('es-MX')} ha` : `${p.m2.toLocaleString('es-MX')} m²`);
  return d.join(' · ');
}

function Tarjeta({ p, oculta = false }: { p: Propiedad; oculta?: boolean }) {
  const precio = `${pesos(p.precio)}${p.op === 'renta' ? ' al mes' : ''}`;
  return (
    <li className={`${oculta ? 'max-sm:hidden ' : ''}flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-tinta/5`}>
      <div className="relative aspect-[4/3]">
        <Foto n={p.foto} alt={`${p.tipo} en ${p.colonia}, ${p.municipio}`} className="absolute inset-0 h-full w-full object-cover" />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${p.op === 'renta' ? 'bg-azul text-white' : p.op === 'preventa' ? 'bg-white text-magenta' : 'bg-magenta text-white'}`}>{p.op === 'renta' ? 'En renta' : p.op === 'preventa' ? 'Preventa' : 'En venta'}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-gris">{p.municipio}</p>
        <h3 className="mt-1 text-lg">{p.tipo} en {p.colonia}</h3>
        <p className="mt-2 font-display text-2xl font-extrabold text-azul">{precio}</p>
        {detalles(p) && <p className="mt-1 text-sm text-gris">{detalles(p)}</p>}
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-4 text-sm font-bold">
          <a href={wa(`Hola, Feyte. Me interesa: ${p.titulo} (${precio}). ${p.url}`)} className="text-magenta hover:underline">WhatsApp</a>
          <a href={p.url} className="text-azul hover:underline">Ver ficha</a>
        </div>
      </div>
    </li>
  );
}

function Encabezado() {
  const enlaces = [['#casas', 'Casas en venta'], ['#rentas', 'Rentas'], ['#asesores', 'Asesores'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-30 bg-white/95 shadow-sm backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex shrink-0 items-center gap-2.5">
          <img src={`${base}logo-marca.png`} alt="" width={160} height={146} className="h-9 w-auto" />
          <span className="font-display text-lg font-extrabold leading-none text-azul"><span className="block text-[0.6rem] font-semibold tracking-[0.3em] text-gris">INMOBILIARIA</span>FEYTE</span>
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-6 text-sm font-semibold">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-magenta">{t}</a></li>)}</ul>
        </nav>
        <a href={wa('Hola, Feyte. Quisiera información sobre sus propiedades en Colima.')} className="btn-magenta hidden px-4 py-2.5 sm:inline-flex">WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  const datos: [number, string][] = [[cifras.colima, 'en Colima'], [cifras.villa, 'en Villa de Álvarez'], [cifras.comala, 'en Comala']];
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-azul-2 text-white">
      <Foto n={portada} alt="Fachada moderna de dos niveles con portón negro y muros de piedra, en Residencial Esmeralda Norte, Colima" eager className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-azul-2 via-azul-2/80 to-azul-2/35" />
      <div className="contenedor flex min-h-[32rem] flex-col justify-end pb-12 pt-24 sm:min-h-[38rem]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/85">Colima, Colima · {negocio.licencia}</p>
        <h1 className="mt-4 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">Tu casa en Colima, con quien la conoce</h1>
        <p className="mt-5 max-w-xl text-lg text-white/85">Compra, renta o vende en Colima, Villa de Álvarez y Comala con un equipo de diez asesores que te acompaña en cada paso.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#casas" className="btn-magenta">Ver qué casa me alcanza</a>
          <a href="#asesores" className="btn-linea">Hablar con un asesor</a>
        </div>
        <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/20 pt-6">
          {datos.map(([v, t]) => <div key={t} className="flex flex-col"><dt className="text-sm text-white/75">propiedades {t}</dt><dd className="order-first font-display text-4xl font-extrabold">{v}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}

const munis = ['Todos', 'Colima', 'Villa de Álvarez', 'Comala'] as const;
type Muni = (typeof munis)[number];
const W = 640, H = 360, maxM = 500, maxP = 10e6, pad = 36;
const x = (m: number) => pad + (Math.min(m, maxM) / maxM) * (W - pad - 10);
const y = (p: number) => H - pad - (Math.min(p, maxP) / maxP) * (H - pad - 10);

function Casas() {
  const [muni, setMuni] = useState<Muni>('Todos');
  const [rec, setRec] = useState(0);
  const [tope, setTope] = useState(3000000);
  const [sel, setSel] = useState<Punto | null>(null);
  const lista = useMemo(() => casas.filter((c) => (muni === 'Todos' || c.mun === muni) && (rec === 0 || (rec === 4 ? (c.r ?? 0) >= 4 : c.r === rec))), [muni, rec]);
  const caben = lista.filter((c) => c.p <= tope);
  const fuera = lista.filter((c) => c.m > maxM || c.p > maxP).length;
  const masMetros = [...caben].sort((a, b) => b.m - a.m).slice(0, 6);
  const elegida = sel && lista.includes(sel) ? sel : null;

  return (
    <section id="casas" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Casas en venta en Colima, Villa de Álvarez y Comala</p>
        <h2 className="mt-2 max-w-3xl text-4xl sm:text-5xl">Precio contra metros: {casas.length} casas en un solo vistazo</h2>
        <p className="mt-4 max-w-2xl text-gris">Cada punto es una casa en venta. Más a la derecha, más grande; más arriba, más cara. Pon tu tope y se encienden las que te alcanzan.</p>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Municipio">{munis.map((m) => <button key={m} type="button" className="chip" aria-pressed={muni === m} onClick={() => setMuni(m)}>{m}</button>)}</div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Recámaras">{[0, 2, 3, 4].map((r) => <button key={r} type="button" className="chip" aria-pressed={rec === r} onClick={() => setRec(r)}>{r === 0 ? 'Recámaras: todas' : r === 4 ? '4 o más' : `${r} rec.`}</button>)}</div>
        </div>
        <label className="mt-6 block max-w-xl">
          <span className="flex items-baseline justify-between text-sm font-bold"><span>Mi tope</span><span className="font-display text-2xl font-extrabold text-magenta">{millones(tope)}</span></span>
          <input type="range" min={800000} max={10000000} step={50000} value={tope} onChange={(e) => setTope(Number(e.target.value))} className="mt-2 w-full" />
        </label>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_minmax(0,22rem)]">
          <figure className="min-w-0 overflow-x-auto rounded-2xl bg-white p-3 shadow-sm ring-1 ring-tinta/5 sm:p-5">
            <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full min-w-[32rem]" role="img" aria-label={`Gráfica de ${lista.length} casas por precio y metros; ${caben.length} cuestan ${millones(tope)} o menos.`}>
              {[0, 2e6, 4e6, 6e6, 8e6, 10e6].map((v) => (
                <g key={v}><line x1={pad} x2={W - 10} y1={y(v)} y2={y(v)} stroke="#E4E9F0" /><text x={pad - 6} y={y(v) + 4} textAnchor="end" fontSize="11" fill="#556272">{v / 1e6}M</text></g>
              ))}
              {[0, 100, 200, 300, 400, 500].map((m) => <text key={m} x={x(m)} y={H - pad + 16} textAnchor="middle" fontSize="11" fill="#556272">{m} m²</text>)}
              <rect x={pad} y={y(tope)} width={W - pad - 10} height={H - pad - y(tope)} fill="#D80F53" opacity="0.06" />
              <line x1={pad} x2={W - 10} y1={y(tope)} y2={y(tope)} stroke="#D80F53" strokeWidth="1.5" strokeDasharray="5 4" />
              {lista.map((c) => {
                const dentro = c.p <= tope;
                return (
                  <circle key={c.u} cx={x(c.m)} cy={y(c.p)} r={elegida === c ? 8 : 4.5} onClick={() => setSel(c)}
                    fill={dentro ? '#D80F53' : '#9AA6B4'} fillOpacity={dentro ? 0.8 : 0.35} stroke={elegida === c ? '#05447C' : 'none'} strokeWidth="3" className="cursor-pointer" />
                );
              })}
            </svg>
            <figcaption className="mt-2 text-xs text-gris">Precio y m² tal como se publican.{fuera ? ` ${fuera} casas de más de 500 m² o de más de $10 M quedan en el borde.` : ''} Toca un punto para ver la casa.</figcaption>
          </figure>

          <div className="space-y-4" aria-live="polite">
            <div className="rounded-2xl bg-azul p-6 text-white">
              <p className="font-display text-5xl font-extrabold">{caben.length}<span className="text-xl font-semibold text-white/75"> de {lista.length}</span></p>
              <p className="mt-1 text-white/85">casas te alcanzan con {millones(tope)}.</p>
            </div>
            {elegida ? (
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-2 ring-azul">
                <p className="text-sm text-gris">{elegida.col}, {elegida.mun}</p>
                <p className="mt-1 font-display text-lg font-bold leading-snug">{elegida.t}</p>
                <p className="mt-2 font-display text-2xl font-extrabold text-azul">{pesos(elegida.p)}</p>
                <p className="text-sm text-gris">{elegida.m.toLocaleString('es-MX')} m²{elegida.r ? ` · ${elegida.r} rec.` : ''} · {pesos(elegida.p / elegida.m)} por m²</p>
                <div className="mt-4 flex flex-wrap gap-x-5 text-sm font-bold">
                  <a href={negocio.sitio + elegida.u} className="text-azul hover:underline">Ver ficha</a>
                  <a href={wa(`Hola, Feyte. Me interesa: ${elegida.t} (${pesos(elegida.p)}). ${negocio.sitio + elegida.u}`)} className="text-magenta hover:underline">WhatsApp</a>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-tinta/5">
                <p className="font-display font-bold">Más metros por tu dinero</p>
                <ul className="mt-3 divide-y divide-tinta/10">
                  {masMetros.map((c) => (
                    <li key={c.u}><button type="button" onClick={() => setSel(c)} className="flex w-full items-baseline justify-between gap-3 py-2 text-left text-sm hover:text-magenta">
                      <span className="min-w-0 truncate">{c.col}, {c.mun}</span><span className="shrink-0 font-bold">{c.m.toLocaleString('es-MX')} m² · {millones(c.p)}</span>
                    </button></li>
                  ))}
                  {!masMetros.length && <li className="py-2 text-sm text-gris">Sube tu tope para ver casas.</li>}
                </ul>
              </div>
            )}
          </div>
        </div>

        <h3 className="mt-14 text-2xl">Algunas casas en venta</h3>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{propiedades.filter((p) => p.grupo !== 'renta').map((p, i) => <Tarjeta key={p.url} p={p} oculta={i >= 4} />)}</ul>
        <a href={negocio.ventas} className="btn-azul mt-8">Todo el catálogo en venta</a>
      </div>
    </section>
  );
}

function Rentas() {
  return (
    <section id="rentas" className="bg-nube-2/70 py-16 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Rentas</p>
        <h2 className="mt-2 max-w-3xl text-4xl sm:text-5xl">{cifras.rentaMetro} propiedades en renta en Colima, Villa de Álvarez y Comala</h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{propiedades.filter((p) => p.grupo === 'renta').map((p, i) => <Tarjeta key={p.url} p={p} oculta={i >= 3} />)}</ul>
        <a href={negocio.rentas} className="btn-azul mt-8">Ver todas las rentas</a>
      </div>
    </section>
  );
}

function Asesores() {
  return (
    <section id="asesores" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
        <div>
          <p className="eyebrow">Nosotros</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Diez asesores, un trato cercano</h2>
          <p className="mt-5 text-lg text-gris">{nosotros}</p>
          <p className="mt-6 text-sm font-semibold text-azul">{negocio.licencia}</p>
          <img src={`${base}logo.png`} alt="Inmobiliaria Feyte" width={300} height={424} className="mt-8 h-28 w-auto" loading="lazy" />
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {asesores.map((a) => (
            <li key={a.n} className="flex items-center justify-between gap-3 rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-tinta/5">
              <span className="font-display font-bold">{a.n}</span>
              <a href={wa('Hola, vi su sitio de Inmobiliaria Feyte y quisiera información.', `52${a.t}`)} className="shrink-0 text-sm font-bold text-magenta hover:underline" aria-label={`WhatsApp a ${a.n}`}>WhatsApp</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-azul py-16 text-white sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Contacto</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Visítanos en Los Olivos o escríbenos</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, Feyte. Quisiera información.')} className="btn-magenta">WhatsApp</a>
            <a href={negocio.mapa} className="btn-linea">Cómo llegar</a>
          </div>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2"><dt className="text-sm text-white/70">Oficina</dt><dd className="mt-1 text-lg font-semibold">{negocio.direccion}</dd></div>
          <div><dt className="text-sm text-white/70">Teléfonos</dt><dd className="mt-1 space-y-1 text-lg font-semibold">{negocio.telefonos.map((t) => <a key={t.t} href={`tel:${t.link}`} className="block hover:underline">{t.t}</a>)}</dd></div>
          <div><dt className="text-sm text-white/70">Correo</dt><dd className="mt-1 break-words text-lg font-semibold"><a href={`mailto:${negocio.correo}`} className="hover:underline">{negocio.correo}</a></dd></div>
          <div className="sm:col-span-2"><dt className="text-sm text-white/70">Redes</dt><dd className="mt-2 flex gap-6 font-semibold">{[['Instagram', negocio.instagram], ['Facebook', negocio.facebook]].map(([t, h]) => <a key={t} href={h} className="underline underline-offset-4">{t}</a>)}</dd></div>
        </dl>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#casas" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <Casas />
        <Rentas />
        <Asesores />
        <Contacto />
      </main>
      <footer className="bg-azul-2 pb-24 pt-10 text-sm text-white/75 md:pb-10">
        <div className="contenedor flex flex-wrap items-center justify-between gap-4">
          <p className="font-display font-bold text-white">Inmobiliaria Feyte · {negocio.direccion}</p>
          <p>{negocio.licencia}</p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-tinta/10 bg-white p-3 md:hidden">
        <a href={`tel:${negocio.telefonos[0].link}`} className="btn border-2 border-azul py-3 text-azul">Llamar</a>
        <a href={wa('Hola, Feyte. Quisiera información sobre sus propiedades en Colima.')} className="btn-magenta py-3">WhatsApp</a>
      </nav>
    </>
  );
}
