import { useMemo, useState } from 'react';
import carta from './data/carta.json';
import medidasJson from './data/fotos.json';
import { horario, horarioTemakis, negocio, tiposVino, web } from './data/content';

type Plato = { nombre: string; precio: number };
type Seccion = { seccion: string; titulo: string | null; items: Plato[] };
type Vino = { nombre: string; tipo: string; copa: number | null; botella: number };
const comida = carta.comida as Seccion[];
const vinos = carta.vinos as Vino[];
const sake = carta.sake as Plato[];
const medidas = medidasJson as unknown as Record<string, [number, number]>;
const mxn = (n: number) => `$${n.toLocaleString('es-MX')}`;

function Img({ n, alt, className = '', ext = 'webp', eager = false }: { n: string; alt: string; className?: string; ext?: string; eager?: boolean }) {
  const [w, h] = medidas[n] ?? [1600, 900];
  return <img src={web(`${n}.${ext}`)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

// Título manuscrito de su carta (imagen) con el nombre en texto para lectores de pantalla
function Titulo({ img, texto, className = 'h-10' }: { img: string | null; texto: string; className?: string }) {
  if (!img) return <h3 className="font-[family-name:var(--font-display)] text-3xl italic">{texto}</h3>;
  return <h3><Img n={img} ext="png" alt={texto} className={`w-auto ${className}`} /></h3>;
}

const IcoPin = <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
const IcoMesa = <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9h18M6 9v11M18 9v11M8 4h8l2 5H6Z" /></svg>;
const IcoIg = <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /></svg>;

// ── Elemento memorable: "Tu comanda" ────────────────────────────────────────────
// Su sitio tenía el esqueleto de una comanda ("No. de comanda", "Nombre") sin funcionar. Aquí funciona:
// se tocan platos de su carta y vinos por copa o botella; la comanda de papel suma y divide entre los de la mesa.
type Linea = { id: string; nombre: string; precio: number; cant: number };

function Comanda() {
  const [lineas, setLineas] = useState<Linea[]>([]);
  const [mesa, setMesa] = useState(2);
  const [tab, setTab] = useState<'comer' | 'beber'>('comer');
  const [tipo, setTipo] = useState('todos');
  const [nombre, setNombre] = useState('');
  const numero = useMemo(() => String(Math.floor(Math.random() * 900) + 100), []);

  const sumar = (id: string, nombre: string, precio: number) =>
    setLineas((ls) => (ls.some((l) => l.id === id) ? ls.map((l) => (l.id === id ? { ...l, cant: l.cant + 1 } : l)) : [...ls, { id, nombre, precio, cant: 1 }]));
  const restar = (id: string) => setLineas((ls) => ls.flatMap((l) => (l.id !== id ? [l] : l.cant > 1 ? [{ ...l, cant: l.cant - 1 }] : [])));
  const total = lineas.reduce((s, l) => s + l.precio * l.cant, 0);
  const tipos = ['todos', ...Object.keys(tiposVino)];
  const vinosFiltrados = vinos.filter((v) => tipo === 'todos' || v.tipo === tipo);

  const Boton = ({ id, nombre, precio, etiqueta }: { id: string; nombre: string; precio: number; etiqueta?: string }) => (
    <button type="button" onClick={() => sumar(id, nombre, precio)} className="shrink-0 border border-washi/30 px-2.5 py-1.5 text-sm font-semibold tabular-nums transition-colors hover:border-linterna hover:bg-linterna hover:text-carbon" aria-label={`Agregar ${nombre}${etiqueta ? ` (${etiqueta})` : ''}, ${mxn(precio)}`}>
      {etiqueta && <span className="mr-1 text-xs font-normal uppercase opacity-80">{etiqueta}</span>}{mxn(precio)} +
    </button>
  );

  return (
    <section id="carta" aria-labelledby="carta-titulo" className="py-20 sm:py-28">
      <div className="contenedor">
        <p className="eyebrow">Carta y comanda</p>
        <h2 id="carta-titulo" className="mt-3 text-4xl sm:text-5xl">Arma tu comanda antes de llegar</h2>
        <p className="mt-4 max-w-2xl text-lg text-humo">Toda su carta, con precios. Toca lo que se te antoje y la comanda suma y divide entre los de la mesa. Luego reservas en OpenTable.</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div>
            <div className="flex gap-2" role="group" aria-label="Comer o beber">
              {(['comer', 'beber'] as const).map((t) => (
                <button key={t} type="button" aria-pressed={tab === t} onClick={() => setTab(t)} className={`px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] ${tab === t ? 'bg-washi text-carbon' : 'border border-washi/30 hover:border-washi'}`}>{t === 'comer' ? 'Comida' : 'Bebida'}</button>
              ))}
            </div>

            {tab === 'comer' ? (
              <div className="mt-8 space-y-10">
                {comida.map((s) => (
                  <div key={s.seccion}>
                    <Titulo img={s.titulo} texto={s.seccion} />
                    {s.seccion === 'Temakis' && <p className="mt-1 text-sm text-humo">{horarioTemakis}</p>}
                    <ul className="mt-3 divide-y divide-washi/10">
                      {s.items.map((p) => (
                        <li key={p.nombre} className="flex items-center justify-between gap-4 py-2.5">
                          <span>{p.nombre}</span>
                          <Boton id={`${s.seccion}-${p.nombre}`} nombre={p.nombre} precio={p.precio} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-8 space-y-10">
                <div>
                  <Titulo img="titulo-9" texto="Vinos" className="h-12" />
                  <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Tipo de vino">
                    {tipos.map((t) => (
                      <button key={t} type="button" aria-pressed={tipo === t} onClick={() => setTipo(t)} className={`flex items-center gap-2 px-3 py-1.5 text-sm font-semibold capitalize ${tipo === t ? 'bg-washi text-carbon' : 'border border-washi/30 hover:border-washi'}`}>
                        {t !== 'todos' && <span aria-hidden="true" className="h-3 w-3 rounded-full" style={{ background: tiposVino[t] }} />}{t}
                      </button>
                    ))}
                  </div>
                  <ul className="mt-3 divide-y divide-washi/10">
                    {vinosFiltrados.map((v) => (
                      <li key={v.nombre} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-2.5">
                        <span className="flex min-w-0 flex-1 basis-56 items-center gap-2.5"><span aria-hidden="true" className="h-3 w-3 shrink-0 rounded-full" style={{ background: tiposVino[v.tipo] }} />{v.nombre}</span>
                        <span className="flex gap-1.5">
                          {v.copa && <Boton id={`copa-${v.nombre}`} nombre={`${v.nombre} (copa)`} precio={v.copa} etiqueta="copa" />}
                          <Boton id={`bot-${v.nombre}`} nombre={`${v.nombre} (botella)`} precio={v.botella} etiqueta="bot." />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Titulo img="titulo-10" texto="Sake" />
                  <ul className="mt-3 divide-y divide-washi/10">
                    {sake.map((p) => (
                      <li key={p.nombre} className="flex items-center justify-between gap-4 py-2.5"><span>{p.nombre}</span><Boton id={`sake-${p.nombre}`} nombre={p.nombre} precio={p.precio} /></li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <aside id="comanda" aria-label="Tu comanda" className="lg:sticky lg:top-24">
            <div className="comanda mx-1 my-3 -rotate-1 px-6 py-7 font-mono text-sm shadow-2xl">
              <div className="flex items-start justify-between border-b border-dashed border-carbon/30 pb-3">
                <Img n="logo-verde" ext="png" alt="Hiya" className="h-9 w-auto" />
                <span className="text-right text-xs">No. de comanda<br /><strong className="text-base">{numero}</strong></span>
              </div>
              <label className="mt-3 flex items-center gap-2 text-xs">
                Nombre:
                <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="tu nombre" className="min-w-0 flex-1 border-0 border-b border-carbon/40 bg-transparent px-1 py-0.5 font-mono text-sm focus:border-carbon focus:outline-none" />
              </label>
              <ul className="mt-4 min-h-24 space-y-2" aria-live="polite">
                {lineas.length === 0 && <li className="text-carbon/60">Toca un plato o un vino para empezar.</li>}
                {lineas.map((l) => (
                  <li key={l.id} className="flex items-start gap-2">
                    <span className="w-6 tabular-nums">{l.cant}×</span>
                    <span className="flex-1">{l.nombre}</span>
                    <span className="tabular-nums">{mxn(l.precio * l.cant)}</span>
                    <button type="button" onClick={() => restar(l.id)} aria-label={`Quitar uno de ${l.nombre}`} className="px-1 text-carbon/60 hover:text-carbon">−</button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-dashed border-carbon/30 pt-3">
                <div className="flex justify-between text-base font-bold"><span>Total</span><span className="tabular-nums">{mxn(total)}</span></div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span>En la mesa</span>
                  <span className="flex items-center gap-2">
                    <button type="button" onClick={() => setMesa((m) => Math.max(1, m - 1))} aria-label="Una persona menos" className="h-7 w-7 border border-carbon/40">−</button>
                    <output className="w-6 text-center tabular-nums">{mesa}</output>
                    <button type="button" onClick={() => setMesa((m) => Math.min(12, m + 1))} aria-label="Una persona más" className="h-7 w-7 border border-carbon/40">+</button>
                  </span>
                </div>
                <div className="mt-2 flex justify-between"><span>Por persona</span><span className="tabular-nums font-bold">{mxn(Math.ceil(total / mesa))}</span></div>
                <p className="mt-3 text-[0.7rem] text-carbon/60">Precios de su carta en línea; no incluye propina.</p>
              </div>
            </div>
            <a href={negocio.reservar} target="_blank" rel="noopener" className="btn-linterna mt-6 w-full">{IcoMesa} Reservar mesa{nombre ? ` para ${nombre}` : ''}</a>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-washi focus:px-4 focus:py-2 focus:text-carbon">Saltar al contenido</a>

      <header className="sticky top-0 z-40 border-b border-washi/10 bg-carbon/95 backdrop-blur">
        <div className="contenedor flex h-16 items-center justify-between gap-4">
          <a href="#inicio" aria-label="Hiya, inicio"><Img n="logo-washi" ext="png" alt="Hiya" eager className="h-8 w-auto" /></a>
          <nav aria-label="Principal" className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.2em] md:flex">
            <a href="#carta" className="hover:text-linterna">Carta</a>
            <a href="#lugar" className="hover:text-linterna">El lugar</a>
            <a href="#visitanos" className="hover:text-linterna">Visítanos</a>
            <a href={negocio.instagram} target="_blank" rel="noopener" className="hover:text-linterna">@hiya.winebar</a>
          </nav>
          <a href={negocio.reservar} target="_blank" rel="noopener" className="btn-linterna hidden sm:inline-flex">Reservar</a>
        </div>
      </header>

      <main id="contenido">
        <section id="inicio" className="overflow-hidden">
          <div className="contenedor grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
            <div>
              <p className="eyebrow">{negocio.tipo} · Roma Norte</p>
              <h1 className="mt-5 text-5xl leading-[1.08] sm:text-7xl">Hiya, robata y wine bar en la Roma Norte</h1>
              <p className="mt-6 max-w-xl font-[family-name:var(--font-display)] text-xl italic text-humo">“{negocio.frase}”</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={negocio.reservar} target="_blank" rel="noopener" className="btn-linterna">{IcoMesa} Reservar en OpenTable</a>
                <a href="#carta" className="btn-linea">Ver la carta</a>
              </div>
              <dl className="mt-10 grid max-w-md grid-cols-2 gap-4 border-t border-washi/15 pt-6 text-sm">
                {horario.map((h) => <div key={h.dias}><dt className="text-humo">{h.dias}</dt><dd className="mt-1 font-[family-name:var(--font-display)] text-xl">{h.horas}</dd></div>)}
              </dl>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Img n="barra-linterna" alt="Barra de Hiya con una linterna de papel encendida y botellas de vino" eager className="aspect-[9/14] h-full w-full object-cover" />
              <div className="grid gap-3">
                <Img n="robata" alt="Brochetas en la parrilla robata sobre carbón" eager className="aspect-[4/3] w-full object-cover" />
                <Img n="pickles" alt="Spicy persian pickles en un tazón de metal" eager className="aspect-[4/3] w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <Comanda />

        <section id="lugar" aria-labelledby="lugar-titulo" className="relative isolate overflow-hidden">
          <Img n="salon" alt="Salón de Hiya con linternas de papel y luz cálida" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-carbon via-carbon/70 to-transparent" />
          <div className="contenedor py-28 sm:py-40">
            <p className="eyebrow">El lugar</p>
            <h2 id="lugar-titulo" className="mt-3 max-w-xl text-4xl sm:text-6xl">Carbón, linternas y vino</h2>
            <p className="mt-5 max-w-md text-lg text-washi/90">Robata, temakis, crudos y una lista de más de 50 vinos de España, Francia, Italia, Austria, Portugal, México y más, por copa o por botella.</p>
          </div>
        </section>

        <section id="visitanos" aria-labelledby="visitanos-titulo" className="py-20 sm:py-28">
          <div className="contenedor grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Visítanos</p>
              <h2 id="visitanos-titulo" className="mt-3 text-4xl sm:text-5xl">Sinaloa 156A</h2>
              <p className="mt-4 text-lg text-humo">{negocio.direccion}, {negocio.cp}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={negocio.maps} target="_blank" rel="noopener" className="btn-linterna">{IcoPin} Cómo llegar</a>
                <a href={negocio.instagram} target="_blank" rel="noopener" className="btn-linea">{IcoIg} @hiya.winebar</a>
              </div>
            </div>
            <div className="border border-washi/15 p-7">
              <h3 className="text-2xl">Horario</h3>
              <dl className="mt-4 space-y-2">
                {horario.map((h) => <div key={h.dias} className="flex justify-between gap-4 border-b border-washi/10 pb-2"><dt>{h.dias}</dt><dd className="font-semibold text-linterna">{h.horas}</dd></div>)}
              </dl>
              <p className="mt-4 text-sm text-humo">Temakis: {horarioTemakis}.</p>
              <p className="mt-3 text-sm text-humo">Reservaciones en OpenTable; para todo lo demás, Instagram.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-washi/10 pb-28 pt-10 text-humo md:pb-10">
        <div className="contenedor flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <Img n="logo-verde" ext="png" alt="Hiya" className="h-10 w-auto self-start rounded bg-washi p-1.5" />
          <p className="text-sm">{negocio.tipo} · {negocio.direccion}, CDMX</p>
          <ul className="flex gap-5 text-sm font-semibold">
            <li><a href={negocio.reservar} target="_blank" rel="noopener" className="hover:text-washi">OpenTable</a></li>
            <li><a href={negocio.instagram} target="_blank" rel="noopener" className="hover:text-washi">Instagram</a></li>
          </ul>
        </div>
      </footer>

      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-washi/10 bg-carbon text-xs font-semibold md:hidden">
        <a href={negocio.reservar} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 bg-linterna py-3 text-carbon">{IcoMesa} Reservar</a>
        <a href="#comanda" className="flex flex-col items-center gap-1 py-3 text-washi"><span aria-hidden="true" className="font-mono text-base leading-5">#</span> Comanda</a>
        <a href={negocio.maps} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-3 text-washi">{IcoPin} Cómo llegar</a>
      </nav>
    </>
  );
}
