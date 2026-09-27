import { useMemo, useRef, useState, type ChangeEvent } from 'react';
import {
  centro, desarrollos, destacadasConFoto, destacadasLista, img, negocio, porId, propiedades, publicar, reloj, salidas,
  servicios, wa, waGeneral, waPropiedad, type Foto, type Op, type Propiedad, type Tipo,
} from './data/content';

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

/* ---------- Formatos ---------- */
const pesos = (n: number) => `$${n.toLocaleString('en-US')}`;
const m2 = (n: number) => `${n.toLocaleString('es-MX', { maximumFractionDigits: 2 })} m²`;
function precioTxt(p: Propiedad) {
  const base = `${p.desde ? 'Desde ' : ''}${pesos(p.precio)}`;
  if (p.sufijo === 'm2') return `${base} por m²`;
  if (p.sufijo === 'mes') return `${base} al mes${p.mant ? ', incluye mantenimiento' : ''}`;
  if (p.sufijo === 'preventa') return `${base} en preventa`;
  return base;
}
function tipoTxt(p: Propiedad) {
  if (p.tipo === 'casa') return 'Casa';
  if (p.tipo === 'depa') return 'Departamento';
  if (p.tipo === 'terreno') return /lote/i.test(p.titulo) ? 'Lote' : 'Terreno';
  if (/edific/i.test(p.titulo)) return 'Edificio';
  if (/palco/i.test(p.titulo)) return 'Palco';
  if (/sal[oó]n|bodega/i.test(p.titulo)) return 'Salón';
  return 'Inmueble';
}
function detalles(p: Propiedad) {
  const d: string[] = [];
  if (p.tipo === 'terreno') {
    const sup = p.terreno ?? p.cons;
    if (sup) d.push(`${m2(sup)} de terreno`);
  } else {
    if (p.cons) d.push(`${m2(p.cons)} de construcción`);
    if (p.terreno) d.push(`terreno de ${m2(p.terreno)}`);
  }
  if (p.rec) d.push(`${p.rec} ${p.rec === 1 ? 'recámara' : 'recámaras'}`);
  if (p.banos) d.push(`${p.banos} ${p.banos === 1 ? 'baño' : 'baños'}`);
  const t = d.join(', ');
  return t ? t.charAt(0).toUpperCase() + t.slice(1) : '';
}
const km = (n: number) => `${n.toLocaleString('es-MX', { maximumFractionDigits: n < 10 ? 1 : 0 })} km`;

/* ---------- Geometría: distancia y rumbo desde Puerta de Hierro ---------- */
const rad = Math.PI / 180;
function medir(lat: number, lng: number) {
  const dLat = (lat - centro.lat) * rad, dLng = (lng - centro.lng) * rad;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(centro.lat * rad) * Math.cos(lat * rad) * Math.sin(dLng / 2) ** 2;
  const d = 2 * 6371 * Math.asin(Math.sqrt(a));
  const y = Math.sin(dLng) * Math.cos(lat * rad);
  const x = Math.cos(centro.lat * rad) * Math.sin(lat * rad) - Math.sin(centro.lat * rad) * Math.cos(lat * rad) * Math.cos(dLng);
  return { d, b: (Math.atan2(y, x) / rad + 360) % 360 };
}
const rumbos = [
  { corto: 'N', nombre: 'norte', salida: '' },
  { corto: 'NE', nombre: 'noreste', salida: 'rumbo a Real del Monte y Huasca' },
  { corto: 'E', nombre: 'este', salida: 'rumbo a Tulancingo' },
  { corto: 'SE', nombre: 'sureste', salida: 'rumbo a Cd. Sahagún' },
  { corto: 'S', nombre: 'sur', salida: '' },
  { corto: 'SO', nombre: 'suroeste', salida: 'rumbo a CDMX' },
  { corto: 'O', nombre: 'oeste', salida: '' },
  { corto: 'NO', nombre: 'noroeste', salida: 'rumbo a Actopan' },
];
const sectorDe = (b: number) => Math.round(b / 45) % 8;

// Escala: raíz cuadrada de la distancia hasta 40 km (lo más lejano queda en la orilla con su distancia escrita).
const C = 300, RMAX = 238, DMAX = 40;
const radio = (d: number) => RMAX * Math.sqrt(Math.min(d, DMAX) / DMAX);
const punto = (d: number, b: number, extra = 0) => {
  const r = radio(d) + extra;
  return [C + r * Math.sin(b * rad), C - r * Math.cos(b * rad)] as const;
};
const anillos = [2, 5, 10, 20, 40];
// Cuña de 45° centrada en el norte; se gira al rumbo elegido.
const cuna = (() => {
  const [x1, y1] = [C + RMAX * Math.sin(-22.5 * rad), C - RMAX * Math.cos(-22.5 * rad)];
  const [x2, y2] = [C + RMAX * Math.sin(22.5 * rad), C - RMAX * Math.cos(22.5 * rad)];
  return `M${C},${C} L${x1.toFixed(1)},${y1.toFixed(1)} A${RMAX},${RMAX} 0 0 1 ${x2.toFixed(1)},${y2.toFixed(1)} Z`;
})();

type Ubicada = Propiedad & { d: number; b: number; s: number; x: number; y: number };
const ubicadas: Ubicada[] = (() => {
  const vistos = new Map<string, number>();
  return propiedades.map((p) => {
    const { d, b } = medir(p.lat, p.lng);
    // Las fichas de un mismo fraccionamiento comparten coordenadas: se separan un poco en espiral para que se vean todas.
    const clave = `${p.lat},${p.lng}`;
    const n = vistos.get(clave) ?? 0;
    vistos.set(clave, n + 1);
    let [x, y] = punto(d, b);
    if (n) { x += 6 * Math.sqrt(n) * Math.cos(n * 2.4); y += 6 * Math.sqrt(n) * Math.sin(n * 2.4); }
    return { ...p, d, b, s: sectorDe(b), x, y };
  });
})();
const relojPos = (() => { const { d, b } = medir(reloj.lat, reloj.lng); return { d, b, xy: punto(d, b) }; })();

const colorTipo: Record<Tipo, string> = { casa: 'var(--color-azul)', depa: 'var(--color-noche)', terreno: 'var(--color-ocre)', otro: 'var(--color-violeta)' };
const singular: Record<string, string> = { propiedades: 'propiedad', casas: 'casa', departamentos: 'departamento', 'terrenos y lotes': 'terreno o lote', 'edificios y otros': 'edificio u otro inmueble' };
const filtrosTipo: [Tipo | 'todo', string][] = [['todo', 'Todo'], ['casa', 'Casas'], ['depa', 'Departamentos'], ['terreno', 'Terrenos y lotes'], ['otro', 'Edificios y otros']];

function Rosa() {
  const [sector, setSector] = useState<number | null>(5);
  const [giro, setGiro] = useState(5 * 45);
  const [tipo, setTipo] = useState<Tipo | 'todo'>('todo');
  const [op, setOp] = useState<Op>('venta');
  const [elegida, setElegida] = useState<number | null>(null);
  const fichaRef = useRef<HTMLDivElement>(null);

  const conFiltro = useMemo(() => ubicadas.filter((p) => p.op === op && (tipo === 'todo' || p.tipo === tipo)), [op, tipo]);
  const enSector = useMemo(
    () => conFiltro.filter((p) => sector === null || p.s === sector).sort((a, b) => a.d - b.d),
    [conFiltro, sector],
  );
  const actual = enSector.find((p) => p.id === elegida) ?? enSector[0];
  const porSector = rumbos.map((_, i) => conFiltro.filter((p) => p.s === i).length);

  const elegirSector = (i: number | null) => {
    setSector(i);
    setElegida(null);
    if (i !== null) {
      // El sector gira por el camino más corto.
      setGiro((g) => { const actualG = ((g % 360) + 360) % 360; let delta = i * 45 - actualG; if (delta > 180) delta -= 360; if (delta < -180) delta += 360; return g + delta; });
    }
  };
  const elegir = (p: Ubicada) => {
    if (sector !== null && p.s !== sector) elegirSector(p.s);
    setElegida(p.id);
    if (!window.matchMedia('(min-width: 1024px)').matches) {
      const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      requestAnimationFrame(() => fichaRef.current?.scrollIntoView({ behavior: suave ? 'smooth' : 'auto', block: 'start' }));
    }
  };

  const conPrecioTotal = enSector.filter((p) => p.sufijo !== 'm2');
  const minimo = conPrecioTotal.length ? Math.min(...conPrecioTotal.map((p) => p.precio)) : 0;
  const r = sector === null ? null : rumbos[sector];
  const queTxt = tipo === 'todo' ? 'propiedades' : filtrosTipo.find(([t]) => t === tipo)![1].toLowerCase();
  const opTxt = op === 'venta' ? 'en venta' : 'en renta';
  const chip = (activo: boolean) => `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${activo ? 'border-azul bg-azul text-white' : 'border-tinta/20 bg-white text-tinta hover:border-azul'}`;

  return (
    <section id="rosa" className="bg-cantera py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-medium sm:text-5xl">Pachuca a 360°</h2>
          <p className="mt-4 text-lg text-gris">Pachuca crece hacia todos lados. Pon a Puerta de Hierro, donde está nuestra oficina, en el centro y elige hacia dónde quieres vivir o invertir: cada punto es una propiedad de nuestro inventario, en su rumbo y a su distancia.</p>
        </div>

        <div className="mt-8 grid gap-5 rounded-lg bg-white p-5 shadow-sm sm:grid-cols-[auto_1fr] sm:p-6">
          <fieldset className="min-w-0">
            <legend className="mb-2 text-sm font-medium">Quiero</legend>
            <div className="flex gap-2">
              {([['venta', 'Comprar'], ['renta', 'Rentar']] as [Op, string][]).map(([o, t]) => (
                <button key={o} type="button" aria-pressed={op === o} onClick={() => { setOp(o); setElegida(null); if (o === 'renta') setTipo('todo'); }} className={chip(op === o)}>{t}</button>
              ))}
            </div>
          </fieldset>
          <fieldset className="min-w-0">
            <legend className="mb-2 text-sm font-medium">Qué busco</legend>
            <div className="flex flex-wrap gap-2">
              {filtrosTipo.map(([t, n]) => (
                <button key={t} type="button" aria-pressed={tipo === t} onClick={() => { setTipo(t); setElegida(null); }} className={chip(tipo === t)}>{n}</button>
              ))}
            </div>
          </fieldset>
          <fieldset className="min-w-0 sm:col-span-2">
            <legend className="mb-2 text-sm font-medium">Hacia dónde</legend>
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              <button type="button" aria-pressed={sector === null} onClick={() => elegirSector(null)} className={`${chip(sector === null)} col-span-2 sm:col-span-1`}>Los 360° ({conFiltro.length})</button>
              {rumbos.map((ru, i) => (
                <button key={ru.corto} type="button" aria-pressed={sector === i} onClick={() => elegirSector(i)} className={chip(sector === i)}
                  aria-label={`Hacia el ${ru.nombre}${ru.salida ? `, ${ru.salida}` : ''}: ${porSector[i]}`}>
                  <span className="capitalize">{ru.nombre}</span> <span className={sector === i ? 'text-white/80' : 'text-gris'}>{porSector[i]}</span>
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <figure className="min-w-0">
            <svg viewBox="0 0 600 600" className="mx-auto block w-full max-w-[36rem]" role="img"
              aria-label={`Rosa de los vientos con centro en Puerta de Hierro. ${conFiltro.length} ${queTxt} ${opTxt}. ${rumbos.map((ru, i) => `${ru.nombre} ${porSector[i]}`).join(', ')}.`}>
              <rect x="0" y="0" width="600" height="600" fill="#ffffff" rx="12" />
              {/* Rumbos */}
              {rumbos.map((ru, i) => {
                const [x, y] = [C + (RMAX + 26) * Math.sin(i * 45 * rad), C - (RMAX + 26) * Math.cos(i * 45 * rad)];
                const [x2, y2] = [C + RMAX * Math.sin(i * 45 * rad), C - RMAX * Math.cos(i * 45 * rad)];
                return (
                  <g key={ru.corto}>
                    <line x1={C} y1={C} x2={x2} y2={y2} stroke="#1c2a33" strokeOpacity={i % 2 ? 0.08 : 0.16} />
                    <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fontFamily="Outfit, sans-serif" fontWeight={600} fontSize={i % 2 ? 17 : 21} fill={sector === i ? '#0a6a88' : '#56606a'}>{ru.corto}</text>
                  </g>
                );
              })}
              {/* Sector elegido */}
              {sector !== null && (
                <g className="sector" style={{ transform: `rotate(${giro}deg)` }}>
                  <path d={cuna} fill="#e3a93b" fillOpacity="0.22" stroke="#b27a14" strokeWidth="1.5" />
                </g>
              )}
              {/* Anillos */}
              {anillos.map((a) => (
                <g key={a}>
                  <circle cx={C} cy={C} r={radio(a)} fill="none" stroke="#1c2a33" strokeOpacity={a === DMAX ? 0.35 : 0.14} strokeDasharray={a === DMAX ? undefined : '3 5'} />
                  <text x={C + 4} y={C - radio(a) - 4} fontSize="14" fill="#56606a" className="halo">{a} km</text>
                </g>
              ))}
              {/* Salidas en la orilla */}
              {salidas.map((s) => {
                const [x, y] = [C + (RMAX + 4) * Math.sin(s.rumbo * rad), C - (RMAX + 4) * Math.cos(s.rumbo * rad)];
                const [tx, ty] = [C + (RMAX - 16) * Math.sin(s.rumbo * rad), C - (RMAX - 16) * Math.cos(s.rumbo * rad)];
                const derecha = Math.sin(s.rumbo * rad) > 0.2, izquierda = Math.sin(s.rumbo * rad) < -0.2;
                return (
                  <g key={s.texto}>
                    <circle cx={x} cy={y} r="3" fill="#1c2a33" />
                    <text x={tx} y={ty} fontSize="16" fontWeight={500} fill="#1c2a33" className="halo" textAnchor={derecha ? 'end' : izquierda ? 'start' : 'middle'} dominantBaseline="central">a {s.texto}</text>
                  </g>
                );
              })}
              {/* Reloj Monumental */}
              <g>
                <rect x={relojPos.xy[0] - 4} y={relojPos.xy[1] - 4} width="8" height="8" fill="none" stroke="#1c2a33" strokeWidth="1.5" transform={`rotate(45 ${relojPos.xy[0]} ${relojPos.xy[1]})`} />
                <text x={relojPos.xy[0] + 9} y={relojPos.xy[1] - 6} fontSize="15" fill="#1c2a33" className="halo">Reloj Monumental</text>
              </g>
              {/* Propiedades */}
              {ubicadas.map((p) => {
                const visible = p.op === op && (tipo === 'todo' || p.tipo === tipo);
                if (!visible) return null;
                const dentro = sector === null || p.s === sector;
                const sel = actual?.id === p.id;
                return (
                  <g key={p.id} onClick={() => elegir(p)} className="cursor-pointer" aria-hidden="true">
                    <circle cx={p.x} cy={p.y} r="11" fill="transparent" />
                    <circle cx={p.x} cy={p.y} r={sel ? 7 : 5} fill={colorTipo[p.tipo]} fillOpacity={dentro ? 1 : 0.22}
                      stroke={sel ? '#e3a93b' : '#ffffff'} strokeWidth={sel ? 3 : 1.2} />
                    {p.d > DMAX && dentro && <text x={p.x} y={p.y + 18} fontSize="14" textAnchor="middle" fill="#1c2a33" className="halo">{km(p.d)}</text>}
                  </g>
                );
              })}
              {/* Centro */}
              <circle cx={C} cy={C} r="9" fill="#0b2a3c" />
              <circle cx={C} cy={C} r="3.5" fill="#e3a93b" />
              <text x={C} y={C + 24} textAnchor="middle" fontSize="16" fontWeight={600} fill="#0b2a3c" className="halo">Puerta de Hierro</text>
            </svg>
            <figcaption className="mx-auto mt-4 max-w-[36rem]">
              <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gris" aria-hidden="true">
                <li className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-azul" /> Casas</li>
                <li className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-noche" /> Departamentos</li>
                <li className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-ocre" /> Terrenos y lotes</li>
                <li className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-violeta" /> Edificios y otros</li>
              </ul>
              <p className="mt-3 text-sm text-gris">Distancias en línea recta desde la colonia Puerta de Hierro, con las coordenadas que publica cada ficha en integra360.com.mx (27 de septiembre de 2026). Más allá de 40 km, el punto queda en la orilla con su distancia.</p>
            </figcaption>
          </figure>

          <div className="min-w-0">
            <p className="text-lg" aria-live="polite">
              {enSector.length ? (
                <>{r ? <>Hacia el <strong>{r.nombre}</strong>{r.salida ? `, ${r.salida},` : ''} hay</> : <>A los 360° hay</>} <strong>{enSector.length}</strong> {enSector.length === 1 ? singular[queTxt] : queTxt} {opTxt}, {enSector.length === 1 ? `a ${km(enSector[0].d)}` : `de ${km(enSector[0].d)} a ${km(enSector[enSector.length - 1].d)}`}{minimo ? <>, desde <strong>{pesos(minimo)}{op === 'renta' ? ' al mes' : ''}</strong></> : null}.</>
              ) : (
                <>{r ? `Hacia el ${r.nombre}` : 'Por ahora'} no hay {queTxt} {opTxt} en nuestro inventario. Prueba otro rumbo o escríbenos: si no está en nuestro inventario te ayudamos a conseguirla.</>
              )}
            </p>

            <div ref={fichaRef} className="scroll-mt-20">
              {actual && <Ficha key={actual.id} p={actual} />}
            </div>

            {enSector.length > 1 && (
              <div className="mt-6">
                <h3 className="text-base font-medium">De la más cercana a la más lejana</h3>
                <ul className="mt-2 max-h-[22rem] divide-y divide-tinta/10 overflow-y-auto rounded-md border border-tinta/15 bg-white">
                  {enSector.map((p) => (
                    <li key={p.id}>
                      <button type="button" onClick={() => elegir(p)} aria-pressed={actual?.id === p.id}
                        className={`grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-3 px-4 py-3 text-left hover:bg-cantera ${actual?.id === p.id ? 'bg-cantera' : ''}`}>
                        <span className="h-2.5 w-2.5 translate-y-[-1px] rounded-full" style={{ background: colorTipo[p.tipo] }} aria-hidden="true" />
                        <span className="min-w-0">
                          <span className="block font-medium leading-snug">{tipoTxt(p)} en {p.lugar}</span>
                          <span className="block text-sm text-gris">{precioTxt(p)}</span>
                        </span>
                        <span className="text-sm whitespace-nowrap text-gris">{km(p.d)}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Ficha({ p }: { p: Ubicada }) {
  const f = p.fotos?.[0];
  return (
    <article className="aparece mt-5 overflow-hidden rounded-lg bg-white shadow-sm">
      {f && <Img f={img(`p/${p.id}-1.webp`, `Fachada de la ${tipoTxt(p).toLowerCase()} en ${p.lugar}`)} className="aspect-[4/3] w-full object-cover" />}
      <div className="p-5 sm:p-6">
        <p className="text-sm font-medium text-gris">{tipoTxt(p)} {p.op === 'venta' ? 'en venta' : 'en renta'}, a {km(p.d)} de Puerta de Hierro hacia el {rumbos[p.s].nombre}</p>
        <h3 className="mt-1 text-2xl font-medium leading-tight">{p.lugar}</h3>
        <p className="cifra mt-3 text-3xl font-medium text-azul">{precioTxt(p)}</p>
        {detalles(p) && <p className="mt-2">{detalles(p)}.</p>}
        <p className="mt-2 text-sm text-gris">Así se publica: «{p.titulo}»</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={waPropiedad(p)} target="_blank" rel="noopener" className="btn"><IconoWa /> Preguntar por esta</a>
          <a href={p.url} target="_blank" rel="noopener" className="btn-linea">Ver la ficha completa</a>
        </div>
      </div>
    </article>
  );
}

/* ---------- Secciones ---------- */
function Encabezado() {
  return (
    <header className="sticky top-0 z-40 bg-noche/95 text-white backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Integra 360, inicio" className="shrink-0">
          <Img f={img('logotipo-blanco.webp', 'Integra 360, expertos en bienes raíces')} loading="eager" className="h-8 w-auto sm:h-9" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 text-[0.95rem] lg:flex">
          <a href="#rosa" className="hover:text-ambar">Pachuca a 360°</a>
          <a href="#destacadas" className="hover:text-ambar">Destacadas</a>
          <a href="#servicios" className="hover:text-ambar">Servicios</a>
          <a href="#publicar" className="hover:text-ambar">Publica tu inmueble</a>
          <a href="#contacto" className="hover:text-ambar">Contacto</a>
        </nav>
        <a href={waGeneral} target="_blank" rel="noopener" className="btn-ambar !min-h-[40px] !px-4 !py-2 text-sm"><IconoWa className="h-4 w-4" /> WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  const venta = propiedades.filter((p) => p.op === 'venta');
  const cuenta = (t: Tipo) => venta.filter((p) => p.tipo === t).length;
  const cifras: [number, string][] = [
    [cuenta('casa'), 'casas en venta'],
    [cuenta('terreno'), 'terrenos y lotes'],
    [cuenta('depa') + cuenta('otro'), 'departamentos, edificios y más'],
    [propiedades.filter((p) => p.op === 'renta').length, 'en renta'],
  ];
  const alv = porId(26310);
  return (
    <section id="inicio" className="bg-noche text-white">
      <div className="contenedor grid items-center gap-10 pb-14 pt-10 lg:grid-cols-[1.1fr_1fr] lg:pb-20 lg:pt-16">
        <div className="min-w-0">
          <p className="cifra text-lg text-ambar">{negocio.lema}</p>
          <h1 className="mt-3 text-[2.4rem] font-medium leading-[1.05] sm:text-6xl">Encuentra tu próximo patrimonio en Pachuca e Hidalgo</h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">Casas, departamentos, terrenos y lotes en venta y renta. Te acompañamos desde la búsqueda de tu inmueble ideal hasta la firma ante notario público y recibir la posesión.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#rosa" className="btn-ambar">¿Hacia dónde quieres vivir?</a>
            <a href={waGeneral} target="_blank" rel="noopener" className="btn-claro"><IconoWa /> Escribir por WhatsApp</a>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/15 pt-6 sm:grid-cols-4">
            {cifras.map(([n, t]) => (
              <div key={t} className="min-w-0">
                <dt className="sr-only">{t}</dt>
                <dd><span className="cifra block text-4xl font-light text-ambar">{n}</span><span className="mt-1 block text-sm leading-snug text-white/80">{t}</span></dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="min-w-0">
          <Img f={img('p/26310-1.webp', 'Fachada de una casa en Alvento Habitat con concreto aparente, piedra y jardín al frente')} loading="eager" className="aspect-[4/3] w-full rounded-lg object-cover" />
          <figcaption className="mt-3 text-sm text-white/75">Casa en Alvento Habitat, salida a Sahagún: {precioTxt(alv)}, {detalles(alv).toLowerCase()}.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Destacadas() {
  const [gema, alvento] = destacadasConFoto.map(porId);
  const grande = (p: Propiedad, fotos: Foto[]) => (
    <article className="min-w-0">
      <div className={`grid gap-2 ${fotos.length > 1 ? 'grid-cols-[2fr_1fr]' : ''}`}>
        {fotos.map((f, i) => <Img key={f.src} f={f} className={`w-full rounded-lg object-cover ${i === 0 ? 'aspect-[4/3]' : 'aspect-[3/4] h-full sm:aspect-auto'}`} />)}
      </div>
      <p className="mt-4 text-sm font-medium text-gris">{tipoTxt(p)} en venta</p>
      <h3 className="mt-1 text-2xl font-medium">{p.lugar}</h3>
      <p className="cifra mt-2 text-2xl text-azul">{precioTxt(p)}</p>
      <p className="mt-1">{detalles(p)}.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a href={waPropiedad(p)} target="_blank" rel="noopener" className="btn"><IconoWa /> Preguntar por esta</a>
        <a href={p.url} target="_blank" rel="noopener" className="btn-linea">Ver la ficha</a>
      </div>
    </article>
  );
  return (
    <section id="destacadas" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-4xl font-medium sm:text-5xl">Descubre nuestras propiedades destacadas</h2>
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          {grande(gema, [img('p/26309-1.webp', 'Fachada de la casa en Gema Residencial, Pachuca')])}
          {grande(alvento, [img('p/26310-2.webp', 'Casa del mismo modelo en Alvento Habitat, vista desde la calle')])}
        </div>
        <ul className="mt-12 divide-y divide-tinta/15 border-y border-tinta/15">
          {destacadasLista.map(porId).map((p) => (
            <li key={p.id} className="grid gap-3 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="min-w-0">
                <h3 className="text-lg font-medium">{tipoTxt(p)} en {p.lugar}</h3>
                <p className="text-gris">{detalles(p)}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <span className="cifra text-xl text-azul">{precioTxt(p)}</span>
                <a href={waPropiedad(p)} target="_blank" rel="noopener" className="enlace inline-flex items-center gap-1"><IconoWa className="h-4 w-4" /> Preguntar</a>
                <a href={p.url} target="_blank" rel="noopener" className="enlace">Ficha</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="bg-noche py-16 text-white sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="min-w-0">
          <h2 className="text-4xl font-medium sm:text-5xl">¿Por qué Integra 360 es tu mejor opción?</h2>
          <Img f={img('simbolo.webp', '')} className="mt-10 hidden h-40 w-auto rounded-md bg-white p-4 lg:block" />
        </div>
        <dl className="min-w-0 divide-y divide-white/15 border-y border-white/15">
          {servicios.map(([t, d]) => (
            <div key={t} className="py-6">
              <dt className="cifra text-xl font-medium text-ambar">{t}</dt>
              <dd className="mt-2 text-white/85">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Publicar() {
  const [datos, setDatos] = useState({ direccion: '', ciudad: '', cp: '', nombre: '' });
  const campo = (k: keyof typeof datos) => ({
    value: datos[k],
    onChange: (e: ChangeEvent<HTMLInputElement>) => setDatos({ ...datos, [k]: e.target.value }),
  });
  const mensaje = [
    'Hola, quiero publicar mi casa o terreno con Integra 360.',
    datos.direccion && `Dirección del inmueble: ${datos.direccion}`,
    datos.ciudad && `Ciudad: ${datos.ciudad}`,
    datos.cp && `Código postal: ${datos.cp}`,
    datos.nombre && `Mi nombre: ${datos.nombre}`,
  ].filter(Boolean).join('\n');
  const input = 'mt-1 w-full rounded-md border border-tinta/25 bg-white px-3 py-2.5 text-tinta focus:border-azul';
  return (
    <section id="publicar" className="bg-cantera py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="min-w-0">
          <h2 className="text-4xl font-medium sm:text-5xl">{publicar.titulo}</h2>
          <p className="mt-5 text-lg text-gris">{publicar.texto}</p>
          <p className="mt-4 text-gris">Vender o rentar con nosotros incluye perfilar a cada cliente, asesoría en temas fiscales y la gestión notarial.</p>
        </div>
        <form className="min-w-0 rounded-lg bg-white p-5 shadow-sm sm:p-7" onSubmit={(e) => { e.preventDefault(); window.open(wa(mensaje), '_blank', 'noopener'); }}>
          <div className="grid gap-4 sm:grid-cols-[1fr_9rem_7rem]">
            <label className="min-w-0 text-sm font-medium">Dirección del inmueble<input {...campo('direccion')} className={input} autoComplete="street-address" /></label>
            <label className="min-w-0 text-sm font-medium">Ciudad<input {...campo('ciudad')} className={input} autoComplete="address-level2" /></label>
            <label className="min-w-0 text-sm font-medium">Código postal<input {...campo('cp')} className={input} inputMode="numeric" autoComplete="postal-code" /></label>
          </div>
          <label className="mt-4 block text-sm font-medium">Tu nombre<input {...campo('nombre')} className={input} autoComplete="name" /></label>
          <button type="submit" className="btn mt-6 w-full sm:w-auto"><IconoWa /> Enviar por WhatsApp</button>
          <p className="mt-3 text-sm text-gris">Se abre WhatsApp con estos datos escritos; tú decides si lo envías.</p>
        </form>
      </div>
    </section>
  );
}

function Desarrollos() {
  return (
    <section aria-labelledby="desarrollos" className="py-16 sm:py-20">
      <div className="contenedor">
        <h2 id="desarrollos" className="text-3xl font-medium sm:text-4xl">Desarrollos</h2>
        <p className="mt-3 max-w-2xl text-gris">Fraccionamientos y residenciales de la zona que aparecen en nuestro sitio.</p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2 lg:flex-nowrap lg:justify-between">
          {desarrollos.map(([n, nombre]) => (
            <li key={n} className="grid h-[6.5rem] w-[6.5rem] place-items-center rounded-md border border-tinta/10 bg-white p-1.5 lg:h-24 lg:w-24">
              <Img f={img(`d/${n}.webp`, nombre)} className="h-full w-full object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-cantera py-16 sm:py-24">
      <div className="contenedor grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="min-w-0">
          <h2 className="text-4xl font-medium sm:text-5xl">Contáctanos</h2>
          <address className="mt-6 text-lg not-italic">
            {negocio.direccion.map((l) => <span key={l} className="block">{l}</span>)}
          </address>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={negocio.mapa} target="_blank" rel="noopener" className="btn"><IconoPin /> Cómo llegar</a>
            <a href={`tel:${negocio.telLink}`} className="btn-linea"><IconoTel /> {negocio.telefono}</a>
            <a href={waGeneral} target="_blank" rel="noopener" className="btn-linea"><IconoWa /> WhatsApp</a>
          </div>
          <p className="mt-6"><a href={`mailto:${negocio.correo}`} className="enlace">{negocio.correo}</a></p>
        </div>
        <div className="min-w-0">
          <h3 className="text-xl font-medium">Síguenos</h3>
          <ul className="mt-3 space-y-2">
            <li><a href={negocio.facebook} target="_blank" rel="noopener" className="enlace">Facebook: IntegraBienesRaices360</a></li>
            <li><a href={negocio.instagram} target="_blank" rel="noopener" className="enlace">Instagram: @integra360bienesraices</a></li>
            <li><a href={negocio.tiktok} target="_blank" rel="noopener" className="enlace">TikTok: @integra360br</a></li>
            <li><a href={negocio.youtube} target="_blank" rel="noopener" className="enlace">YouTube: @integra360bienesraicescasa9</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-noche pb-28 pt-12 text-white lg:pb-12">
      <div className="contenedor flex flex-wrap items-center justify-between gap-6">
        <Img f={img('logotipo-blanco.webp', 'Integra 360, expertos en bienes raíces')} className="h-10 w-auto" />
        <p className="text-sm text-white/80">Boulevard Nuevo Hidalgo 326 Int. 4, Puerta de Hierro, Pachuca de Soto, Hidalgo</p>
      </div>
      <p className="contenedor mt-8 text-xs text-white/70">© Integra 360. Precios y disponibilidad según cada ficha en integra360.com.mx al 27 de septiembre de 2026; confirma con tu asesor.</p>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-noche text-white lg:hidden">
      <a href={waGeneral} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-2.5 text-xs font-medium"><IconoWa /> WhatsApp</a>
      <a href={`tel:${negocio.telLink}`} className="flex flex-col items-center gap-1 py-2.5 text-xs font-medium"><IconoTel /> Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-2.5 text-xs font-medium"><IconoPin /> Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#rosa" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-white focus:p-3 focus:text-tinta">Saltar al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <Rosa />
        <Destacadas />
        <Servicios />
        <Publicar />
        <Desarrollos />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
