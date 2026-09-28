import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  antojos, bolsillo, correo, dinero, fotos, fotosMenu, menu, negocio, productos, textos, wa,
  type Foto, type Idioma, type Producto, type T, type Tipo,
} from './data/content';

const externo = { target: '_blank', rel: 'noopener' } as const;

// ---------- Idioma (inglés por defecto, como el sitio; botón ES/EN como el original) ----------

const Ctx = createContext<Idioma>('en');
const useL = () => useContext(Ctx);
function useT() {
  const l = useL();
  return (x: T) => x[l];
}

const titulos: T = {
  en: 'La Punta Coffee | Coffee, juices & smoothies by the pool in Puerto Escondido',
  es: 'La Punta Coffee | Café, jugos y smoothies en la alberca, Puerto Escondido',
};

function leerIdioma(): Idioma {
  try {
    const q = new URLSearchParams(window.location.search).get('lang');
    if (q === 'es' || q === 'en') return q;
    const g = window.localStorage.getItem('lapunta-idioma');
    if (g === 'es' || g === 'en') return g;
  } catch { /* sin almacenamiento: inglés */ }
  return 'en';
}

// ---------- Iconos ----------

const Icono = {
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
  correo: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
  ),
  ig: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" /></svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M6 3h12v18H6z" /><path d="M9 8h6M9 12h6M9 16h4" /></svg>
  ),
  wa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" /></svg>
  ),
};

function Img({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  const tr = useT();
  return <img src={foto.src} alt={tr(foto.alt)} width={foto.w} height={foto.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

const pesos = (n: number) => `$${n}`;

// ---------- Encabezado y portada ----------

function Encabezado({ cambiar }: { cambiar: () => void }) {
  const tr = useT();
  const nav = [
    { href: '#menu', label: tr(textos.menuTitulo) },
    { href: '#bolsillo', label: tr(textos.navBolsillo) },
    { href: '#galeria', label: tr(textos.navGaleria) },
    { href: '#visita', label: tr(textos.navVisita) },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-cal/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-3 md:h-[4.5rem]">
        <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label={tr(textos.inicioAria)}>
          <img src={fotos.logo.src} alt="" width={fotos.logo.w} height={fotos.logo.h} className="h-10 w-auto md:h-12" />
          <span className="hidden font-titulo text-xl text-tinta sm:inline">La Punta Coffee</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-medium text-tinta hover:text-quemado">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" onClick={cambiar} className="btn-linea min-h-11 px-4" aria-label={tr(textos.idiomaAria)}>{tr(textos.idiomaBoton)}</button>
          <a href="#visita" className="btn hidden px-5 sm:inline-flex">{tr(textos.visitTitulo)}</a>
        </div>
      </div>
    </header>
  );
}

/** El sol de su logo: rayos amarillos con el centro naranja. Único adorno de la página. */
function Sol({ className = '' }: { className?: string }) {
  const rayos = Array.from({ length: 13 }, (_, i) => -90 + (i - 6) * 13.5);
  return (
    <svg viewBox="0 0 400 220" className={className} aria-hidden="true">
      {rayos.map((a, i) => (
        <path key={i} d="M-9 -58 Q0 -170 9 -58 Z" transform={`translate(200 210) rotate(${a + 90})`} fill="#f1cc69" />
      ))}
      <circle cx="200" cy="210" r="48" fill="#f0a42f" />
    </svg>
  );
}

function Portada() {
  const tr = useT();
  return (
    <section id="inicio" className="overflow-hidden bg-rosa">
      <div className="contenedor grid items-end gap-10 pt-12 md:grid-cols-12 md:pt-16">
        <div className="min-w-0 pb-6 md:col-span-7 md:pb-24">
          <p className="text-lg font-medium text-tinta">{tr(negocio.lema)}</p>
          <h1 className="mt-3 font-titulo text-[clamp(3.1rem,8.4vw,6.8rem)] leading-[0.98] text-tinta">{tr(textos.h1)}</h1>
          <p className="mt-6 max-w-xl text-xl text-tinta">{tr(textos.sub)}</p>
          <p className="mt-3 max-w-xl text-lg">{tr(textos.dentro)} {tr(textos.abiertoDiario)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="btn-tinta">{Icono.menu} {tr(textos.verMenu)}</a>
            <a href={negocio.mapa} {...externo} className="btn-linea">{Icono.mapa} {tr(textos.abrirMaps)}</a>
          </div>
        </div>
        <div className="relative min-w-0 md:col-span-5">
          <div className="relative mx-auto max-w-md">
            <Sol className="absolute bottom-[calc(100%-9rem)] left-1/2 w-[150%] max-w-none -translate-x-1/2" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-[14rem] border-[6px] border-b-0 border-cal">
              <Img foto={fotos.portada} eager />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const tr = useT();
  return (
    <section id="about" className="contenedor grid gap-6 py-16 md:grid-cols-12 md:py-20">
      <h2 className="font-titulo text-4xl md:col-span-4 md:text-5xl">{tr(textos.aboutTitulo)}</h2>
      <div className="min-w-0 md:col-span-8">
        <p className="max-w-2xl text-xl text-tinta md:text-2xl">{tr(textos.about)}</p>
        <p className="mt-4 max-w-2xl text-lg">{tr(textos.rasgos)}</p>
      </div>
    </section>
  );
}

// ---------- Menú ----------

function Menu() {
  const tr = useT();
  return (
    <section id="menu" className="bg-rosa py-20 md:py-28">
      <div className="contenedor">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-titulo text-[clamp(2.8rem,6vw,4.6rem)]">{tr(textos.menuTitulo)}</h2>
          <p className="text-lg font-medium text-tinta">{tr(textos.menuSub)}</p>
        </div>
        <div className="mt-12 gap-14 md:columns-2">
          {menu.map((s) => (
            <div key={s.id} className="mb-14 min-w-0 break-inside-avoid">
              <div className="flex items-end justify-between gap-3 border-b-2 border-tinta pb-2">
                <h3 className="font-titulo text-3xl">{tr(s.titulo)}</h3>
                {s.tamanos && (
                  <p className="flex shrink-0 text-sm font-medium text-tinta" aria-hidden="true">
                    {s.tamanos.map((x) => <span key={x.en} className="w-16 text-right">{tr(x)}</span>)}
                  </p>
                )}
              </div>
              {s.nota && <p className="mt-3 text-[0.95rem]">{tr(s.nota)}</p>}
              <ul className="mt-4 space-y-3.5">
                {s.renglones.map((r) => (
                  <li key={r.nombre.en}>
                    <p className="flex items-baseline gap-2">
                      <span className="min-w-0 font-semibold text-tinta">{tr(r.nombre)}</span>
                      <span className="puntos" aria-hidden="true" />
                      {r.precios.length > 1 && s.tamanos ? (
                        <span className="flex shrink-0">
                          {r.precios.map((p, i) => (
                            <span key={i} className="precio w-16 text-right font-bold text-quemado">
                              <span className="sr-only">{tr(s.tamanos![i])}: </span>{pesos(p)}
                            </span>
                          ))}
                        </span>
                      ) : (
                        <span className="precio shrink-0 font-bold text-quemado">{r.mas ? '+' : ''}{pesos(r.precios[0])}</span>
                      )}
                    </p>
                    {r.texto && <p className="mt-0.5 max-w-[34rem] text-[0.95rem]">{tr(r.texto)}</p>}
                  </li>
                ))}
              </ul>
              {fotosMenu[s.id] && (
                <div className={`mt-6 grid gap-3 ${fotosMenu[s.id].length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {fotosMenu[s.id].map((f) => (
                    <div key={f.src} className={`overflow-hidden rounded-3xl ${fotosMenu[s.id].length > 1 || f.h > f.w ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}><Img foto={f} /></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Elemento memorable: "What's in your pocket?" / "¿Cuánto traes?" ----------

type Combo = { bebida?: Producto; comida?: Producto; total: number };

const esBebida = (p: Producto) => p.tipo === 'coffee' || p.tipo === 'juice' || p.tipo === 'smoothie';
const bebidas = productos.filter(esBebida);
const comidas = productos.filter((p) => !esBebida(p));
const todosLosCombos: Combo[] = [
  ...bebidas.map((b) => ({ bebida: b, total: b.precio })),
  ...comidas.map((c) => ({ comida: c, total: c.precio })),
  ...bebidas.flatMap((b) => comidas.map((c) => ({ bebida: b, comida: c, total: b.precio + c.precio }))),
];
const masBarato = Math.min(...productos.map((p) => p.precio));

/** Las tres combinaciones que más aprovechan lo que traes, sin repetir bebida ni comida. */
function mejores(traes: number, antojo: 'todo' | Tipo): Combo[] {
  const cabe = todosLosCombos
    .filter((c) => c.total <= traes)
    .filter((c) => antojo === 'todo' || c.bebida?.tipo === antojo || c.comida?.tipo === antojo)
    .sort((a, b) => b.total - a.total || Number(!!b.bebida && !!b.comida) - Number(!!a.bebida && !!a.comida));
  const elegidos: Combo[] = [];
  const bebidasUsadas = new Set<string>();
  const comidasUsadas = new Set<string>();
  for (const c of cabe) {
    const b = c.bebida?.nombre.en;
    const f = c.comida?.nombre.en;
    if ((b && bebidasUsadas.has(b)) || (f && comidasUsadas.has(f))) continue;
    elegidos.push(c);
    if (b) bebidasUsadas.add(b);
    if (f) comidasUsadas.add(f);
    if (elegidos.length === 3) break;
  }
  return elegidos;
}

const nombreProducto = (p: Producto, l: Idioma) => `${p.nombre[l]}${p.tamano ? ` (${p.tamano[l]})` : ''}`;

/** Lo que va sobre la orilla: taza, vaso con hielo, frasco con popote, bowl o pan. Dibujo ilustrativo. */
function Objeto({ p, x }: { p: Producto; x: number }) {
  const grande = p.tamano && (p.tamano.en === '16 oz' || p.tamano.en === 'Large');
  const helado = /Iced/.test(p.nombre.en);
  if (p.tipo === 'coffee' && !helado) {
    return (
      <g transform={`translate(${x} 0)`}>
        <ellipse cx="0" cy="206" rx="46" ry="9" fill="#fffaf6" stroke="#2b1a24" strokeWidth="2.5" />
        <path d="M-32 150 h64 l-6 50 a8 8 0 0 1 -8 6 h-36 a8 8 0 0 1 -8 -6 Z" fill="#fffaf6" stroke="#2b1a24" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M31 160 q22 2 16 20 q-4 12 -20 10" fill="none" stroke="#2b1a24" strokeWidth="2.5" />
        <ellipse cx="0" cy="151" rx="31" ry="7" fill={p.color} stroke="#2b1a24" strokeWidth="2.5" />
        {p.nombre.en !== 'Espresso' && p.nombre.en !== 'Double Espresso' && p.nombre.en !== 'Tea' && p.nombre.en !== 'Americano' && (
          <path d="M-8 151 q8 -6 16 0 q-8 5 -16 0 Z" fill="#fffaf6" />
        )}
      </g>
    );
  }
  if (p.tipo === 'coffee' || p.tipo === 'juice' || p.tipo === 'smoothie') {
    const alto = grande ? 96 : 76;
    const arriba = 206 - alto;
    return (
      <g transform={`translate(${x} 0)`}>
        {p.tipo !== 'coffee' && <line x1="10" y1={arriba - 34} x2="-2" y2={arriba + 30} stroke="#6b6f74" strokeWidth="5" strokeLinecap="round" />}
        <rect x="-28" y={arriba + 10} width="56" height={alto - 10} rx="10" fill={p.color} />
        {helado && [0, 1, 2].map((i) => <rect key={i} x={-18 + i * 12} y={arriba + 16 + (i % 2) * 14} width="15" height="15" rx="3" fill="#ffffff" fillOpacity="0.55" transform={`rotate(${i * 17 - 10} ${-10 + i * 12} ${arriba + 24})`} />)}
        <rect x="-30" y={arriba} width="60" height={alto + 2} rx="12" fill="#ffffff" fillOpacity="0.18" stroke="#2b1a24" strokeWidth="2.5" />
        <rect x="-26" y={arriba - 8} width="52" height="12" rx="4" fill="#fffaf6" stroke="#2b1a24" strokeWidth="2.5" />
        <path d={`M30 ${arriba + 20} q22 4 18 30 q-3 16 -18 16`} fill="none" stroke="#2b1a24" strokeWidth="2.5" />
      </g>
    );
  }
  if (p.tipo === 'acai') {
    return (
      <g transform={`translate(${x} 0)`}>
        <ellipse cx="0" cy="166" rx="54" ry="12" fill={p.color} />
        {[[-26, 160], [-6, 156], [16, 159], [34, 164]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="7" fill="#f6e7b0" stroke="#d9c07a" strokeWidth="1.5" />)}
        <circle cx="-14" cy="167" r="5" fill="#d8434f" /><circle cx="8" cy="168" r="4.5" fill="#3a2a5e" />
        <path d="M-56 166 q4 42 56 42 q52 0 56 -42 Z" fill="#f4a9c9" stroke="#2b1a24" strokeWidth="2.5" strokeLinejoin="round" />
      </g>
    );
  }
  return (
    <g transform={`translate(${x} 0)`}>
      <ellipse cx="0" cy="204" rx="54" ry="9" fill="#fffaf6" stroke="#2b1a24" strokeWidth="2.5" />
      {p.nombre.en === 'Vegan banana bread' ? (
        <rect x="-34" y="162" width="68" height="38" rx="8" fill={p.color} stroke="#2b1a24" strokeWidth="2.5" />
      ) : (
        <>
          <path d="M-40 198 v-26 q0 -16 16 -16 q6 -12 24 -12 q18 0 24 12 q16 0 16 16 v26 Z" fill={p.color} stroke="#2b1a24" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M-32 170 q10 -8 20 0 q10 8 20 0 q10 -8 22 0" fill="none" stroke="#6fa04a" strokeWidth="6" strokeLinecap="round" />
        </>
      )}
    </g>
  );
}

function Billete({ valor, moneda, color, x, y, giro }: { valor: number; moneda: boolean; color: string; x: number; y: number; giro: number }) {
  if (moneda) {
    return (
      <g transform={`translate(${x} ${y})`}>
        <circle r="17" fill={color} stroke="#2b1a24" strokeWidth="2" />
        <circle r="11" fill="none" stroke="#2b1a24" strokeOpacity="0.4" strokeWidth="1.5" />
        <text textAnchor="middle" y="4.5" fontSize="12" fontWeight="700" fontFamily="Outfit, sans-serif" fill="#2b1a24">10</text>
      </g>
    );
  }
  return (
    <g transform={`translate(${x} ${y}) rotate(${giro})`}>
      <rect x="-52" y="-24" width="104" height="48" rx="4" fill={color} stroke="#2b1a24" strokeWidth="2" />
      <rect x="-44" y="-16" width="88" height="32" rx="3" fill="none" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1.5" />
      <circle cx="-22" cy="0" r="10" fill="#ffffff" fillOpacity="0.35" />
      <text x="26" y="6" textAnchor="middle" fontSize="17" fontWeight="700" fontFamily="Outfit, sans-serif" fill="#ffffff">${valor}</text>
    </g>
  );
}

function useCompacto() {
  const q = '(max-width: 640px)';
  const [c, setC] = useState(() => typeof window !== 'undefined' && window.matchMedia(q).matches);
  useEffect(() => {
    const m = window.matchMedia(q);
    const f = () => setC(m.matches);
    m.addEventListener('change', f);
    return () => m.removeEventListener('change', f);
  }, []);
  return c;
}

function Orilla({ pila, combo }: { pila: number[]; combo?: Combo }) {
  const l = useL();
  const compacto = useCompacto();
  const W = compacto ? 480 : 800;
  const tr = useT();
  const piezas = combo ? [combo.bebida, combo.comida].filter(Boolean) as Producto[] : [];
  const billetes = pila.map((v) => dinero.find((d) => d.valor === v)!);
  const descripcion = `${tr(bolsillo.orilla)} ${piezas.length ? piezas.map((p) => nombreProducto(p, l)).join(' + ') : '—'}`;
  let nb = 0;
  let nm = 0;
  return (
    <svg viewBox={`0 0 ${W} 250`} className="block w-full" role="img" aria-label={descripcion}>
      <rect width={W} height="132" fill="#7fd6d8" />
      {[30, 62, 94].map((y, i) => (
        <path key={y} d={`M${i * 40} ${y} q40 -10 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0`} fill="none" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="3" />
      ))}
      <rect y="126" width={W} height="18" fill="#fffaf6" />
      <rect y="144" width={W} height="106" fill="#f0c6dd" />
      <line x1="0" y1="144" x2={W} y2="144" stroke="#2b1a24" strokeOpacity="0.15" strokeWidth="2" />
      <g>
        {billetes.map((b, i) => {
          if (b.moneda) { const k = nm++; return <Billete key={i} {...b} x={(compacto ? 215 : 310) - (k % 4) * 8} y={214 - Math.floor(k / 4) * 6 - (k % 4) * 3} giro={0} />; }
          const k = nb++;
          return <Billete key={i} {...b} x={(compacto ? 66 : 110) + (k % 5) * (compacto ? 18 : 30)} y={198 - (k % 5) * 7 - Math.floor(k / 5) * 5} giro={-12 + (k % 5) * 6} />;
        })}
      </g>
      {piezas.map((p, i) => <Objeto key={p.id} p={p} x={piezas.length === 1 ? (compacto ? 370 : 560) : compacto ? 315 + i * 115 : 500 + i * 150} />)}
      {/* Una flor de plumeria, como en sus fotos */}
      {!compacto && <g transform="translate(730 178)">
        {[0, 72, 144, 216, 288].map((a) => <ellipse key={a} cx="0" cy="-10" rx="7" ry="11" fill="#fffaf6" stroke="#f0a42f" strokeWidth="1.2" transform={`rotate(${a})`} />)}
        <circle r="4" fill="#f1cc69" />
      </g>}
    </svg>
  );
}

function Chip({ activo, onClick, children }: { activo: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={activo}
      className={`min-h-11 rounded-full border-2 px-4 py-2 text-[0.95rem] font-medium transition-colors ${activo ? 'border-tinta bg-tinta text-cal' : 'border-tinta/40 text-tinta hover:border-tinta'}`}>
      {children}
    </button>
  );
}

function Bolsillo() {
  const l = useL();
  const tr = useT();
  const [pila, setPila] = useState<number[]>([100, 50]);
  const [antojo, setAntojo] = useState<'todo' | Tipo>('todo');
  const [sel, setSel] = useState(0);
  const traes = pila.reduce((s, v) => s + v, 0);
  const opciones = useMemo(() => mejores(traes, antojo), [traes, antojo]);
  const elegido = opciones[Math.min(sel, opciones.length - 1)];
  useEffect(() => setSel(0), [traes, antojo]);

  const agregar = (v: number) => setPila((p) => (p.length >= 14 ? p : [...p, v]));

  return (
    <section id="bolsillo" className="bg-alberca py-20 md:py-28">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="font-titulo text-[clamp(2.6rem,5.6vw,4.4rem)]">{tr(bolsillo.titulo)}</h2>
          <p className="mt-4 text-lg text-tinta">{tr(bolsillo.intro)}</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border-4 border-cal bg-cal">
          <Orilla pila={pila} combo={elegido} />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 space-y-8 lg:col-span-5">
            <div>
              <p className="flex items-baseline justify-between gap-3 text-tinta">
                <span className="font-titulo text-2xl">{tr(bolsillo.traes)}</span>
                <span className="precio font-titulo text-4xl" aria-live="polite">{pesos(traes)}</span>
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {dinero.map((d) => (
                  <button key={d.valor} type="button" onClick={() => agregar(d.valor)}
                    aria-label={`${tr(bolsillo.agregar)} ${pesos(d.valor)}`}
                    className={`min-h-11 border-2 border-tinta px-3 py-2 font-bold transition-transform active:scale-95 ${d.moneda ? 'min-w-11 rounded-full text-tinta' : 'rounded-md text-white'}`}
                    style={{ backgroundColor: d.moneda ? d.color : darken(d.color) }}>
                    +{pesos(d.valor)}
                  </button>
                ))}
                <button type="button" onClick={() => setPila([])} className="btn-linea min-h-11 px-4">{tr(bolsillo.vaciar)}</button>
              </div>
            </div>
            <fieldset>
              <legend className="font-titulo text-2xl">{tr(bolsillo.antojo)}</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {antojos.map((a) => <Chip key={a.id} activo={antojo === a.id} onClick={() => setAntojo(a.id)}>{tr(a.nombre)}</Chip>)}
              </div>
            </fieldset>
          </div>

          <div className="min-w-0 lg:col-span-7" aria-live="polite">
            <h3 className="font-titulo text-2xl">{tr(bolsillo.opciones)}</h3>
            {opciones.length === 0 ? (
              <p className="mt-4 rounded-3xl bg-cal p-6 text-lg text-tinta">{traes < masBarato ? tr(bolsillo.nada) : tr(bolsillo.nadaTipo)}</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {opciones.map((c, i) => {
                  const piezas = [c.bebida, c.comida].filter(Boolean) as Producto[];
                  const sobra = traes - c.total;
                  return (
                    <li key={piezas.map((p) => p.id).join('+')}>
                      <button type="button" onClick={() => setSel(i)} aria-pressed={elegido === c}
                        className={`w-full rounded-3xl border-2 p-5 text-left transition-colors ${elegido === c ? 'border-tinta bg-cal' : 'border-transparent bg-cal/70 hover:bg-cal'}`}>
                        <ul className="space-y-1">
                          {piezas.map((p) => (
                            <li key={p.id} className="flex items-baseline gap-2">
                              <span className="min-w-0 font-semibold text-tinta">{nombreProducto(p, l)}</span>
                              <span className="puntos" aria-hidden="true" />
                              <span className="precio shrink-0 text-quemado">{pesos(p.precio)}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-3 flex flex-wrap items-baseline justify-between gap-2 border-t border-dashed border-tinta/30 pt-3">
                          <span className="font-bold text-tinta">{tr(bolsillo.total)} <span className="precio">{pesos(c.total)}</span></span>
                          <span className="font-medium text-alberca-honda">{sobra > 0 ? `${tr(bolsillo.sobran)} ${pesos(sobra)}` : tr(bolsillo.justo)}</span>
                        </p>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
            <p className="mt-4 text-tinta">{tr(bolsillo.pide)} <span className="text-[0.95rem]">{tr(bolsillo.nota)}</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Oscurece el color del billete para que el texto blanco del botón cumpla contraste AA. */
function darken(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const f = (c: number) => Math.round(c * 0.62);
  const r = f(n >> 16), g = f((n >> 8) & 255), b = f(n & 255);
  return `rgb(${r} ${g} ${b})`;
}

// ---------- Galería, Visítanos, pie y barra del celular ----------

function Galeria() {
  const tr = useT();
  return (
    <section id="galeria" className="contenedor grid gap-4 py-20 md:grid-cols-12 md:py-28">
      <div className="min-w-0 md:col-span-4 md:pr-6">
        <h2 className="font-titulo text-[clamp(2.6rem,5vw,4rem)]">{tr(textos.galTitulo)}</h2>
        <p className="mt-3 text-lg">{tr(textos.galSub)}</p>
        <p className="mt-6">
          <a href={negocio.instagram} {...externo} className="inline-flex items-center gap-2 font-bold text-quemado underline underline-offset-4">{Icono.ig} {negocio.instagramVisible}</a>
        </p>
      </div>
      <div className="aspect-[4/5] min-w-0 overflow-hidden rounded-3xl md:col-span-4"><Img foto={fotos.latteSentada} /></div>
      <div className="aspect-[4/5] min-w-0 overflow-hidden rounded-3xl md:col-span-4 md:mt-16"><Img foto={fotos.lattePiernas} /></div>
    </section>
  );
}

function Visita() {
  const l = useL();
  const tr = useT();
  const mail = correo(textos.asunto, textos.cuerpo, l);
  return (
    <section id="visita" className="bg-sol py-20 md:py-28">
      <div className="contenedor grid gap-12 md:grid-cols-12">
        <div className="min-w-0 md:col-span-7">
          <h2 className="font-titulo text-[clamp(2.6rem,5vw,4rem)]">{tr(textos.visitTitulo)}</h2>
          <p className="mt-3 text-lg text-tinta">{tr(textos.visitSub)}</p>
          <dl className="mt-8 grid gap-6 text-lg text-tinta sm:grid-cols-2">
            <div className="min-w-0"><dt className="text-sm font-medium">{tr(textos.direccionT)}</dt><dd className="font-semibold">{negocio.direccion}</dd><dd className="mt-1 text-[0.95rem]">{tr(textos.dentro)}</dd></div>
            <div className="min-w-0"><dt className="text-sm font-medium">{tr(textos.horarioT)}</dt><dd className="font-semibold">{tr(textos.horario)}</dd></div>
            <div className="min-w-0"><dt className="text-sm font-medium">{tr(textos.correoT)}</dt><dd className="break-words"><a href={mail} className="font-semibold underline underline-offset-4">{negocio.correo}</a></dd></div>
            <div className="min-w-0"><dt className="text-sm font-medium">Instagram</dt><dd><a href={negocio.instagram} {...externo} className="font-semibold underline underline-offset-4">{negocio.instagramVisible}</a></dd></div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={negocio.mapa} {...externo} className="btn">{Icono.mapa} {tr(textos.abrirMaps)}</a>
            {negocio.whatsapp && <a href={wa(tr(textos.cuerpo))} {...externo} className="btn-linea">{Icono.wa} WhatsApp</a>}
            <a href={mail} className="btn-linea">{Icono.correo} {tr(textos.escribenos)}</a>
          </div>
        </div>
        <div className="min-w-0 md:col-span-5 flex flex-col gap-4">
          <iframe
            src={negocio.mapaEmbed}
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: '0.75rem' }}
            allowFullScreen
            loading="lazy"
            title={`Ubicación de ${negocio.nombre}`}
            className="w-full block"
          />
          <a href={negocio.mapa} {...externo} className="group block min-w-0" aria-label={tr(textos.mapaAria)}>
            <div className="aspect-[4/5] overflow-hidden rounded-t-[12rem] border-[6px] border-cal"><Img foto={fotos.alberca} className="transition-transform duration-500 group-hover:scale-[1.03]" /></div>
            <p className="mt-3 text-[0.95rem] text-tinta">{tr(textos.fotoMapa)}</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  const tr = useT();
  return (
    <footer className="bg-tinta pb-28 pt-10 text-cal/85 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-6">
        <p><span className="font-titulo text-2xl text-cal">La Punta Coffee</span> <span className="ml-2">{tr(negocio.lema)}</span></p>
        <nav className="flex flex-wrap gap-5" aria-label="Pie">
          <a href="#about" className="hover:text-cal">{tr(textos.aboutTitulo)}</a>
          <a href="#menu" className="hover:text-cal">{tr(textos.menuTitulo)}</a>
          <a href="#visita" className="hover:text-cal">{tr(textos.navVisita)}</a>
        </nav>
        <p className="text-sm">© {new Date().getFullYear()} La Punta Coffee</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  const l = useL();
  const tr = useT();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta/10 bg-cal/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.8fr_1fr_1fr_1fr] gap-2">
        <a href={negocio.mapa} {...externo} className="btn whitespace-nowrap px-2 text-sm">{Icono.mapa} {tr(textos.comoLlegar)}</a>
        <a href="#menu" className="btn-linea px-0" aria-label={tr(textos.menuTitulo)}>{Icono.menu}</a>
        <a href={negocio.instagram} {...externo} className="btn-linea px-0" aria-label={tr(textos.igAria)}>{Icono.ig}</a>
        <a href={correo(textos.asunto, textos.cuerpo, l)} className="btn-linea px-0" aria-label={tr(textos.correoAria)}>{Icono.correo}</a>
      </div>
    </div>
  );
}

export default function App() {
  const [l, setL] = useState<Idioma>(leerIdioma);
  useEffect(() => {
    document.documentElement.lang = l === 'es' ? 'es-MX' : 'en';
    document.title = titulos[l];
    try { window.localStorage.setItem('lapunta-idioma', l); } catch { /* sin almacenamiento */ }
  }, [l]);
  return (
    <Ctx.Provider value={l}>
      <a href="#bolsillo" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-cal focus:px-3 focus:py-2">{textos.saltar[l]}</a>
      <Encabezado cambiar={() => setL(l === 'en' ? 'es' : 'en')} />
      <main>
        <Portada />
        <About />
        <Menu />
        <Bolsillo />
        <Galeria />
        <Visita />
      </main>
      <Pie />
      <BarraMovil />
    </Ctx.Provider>
  );
}
