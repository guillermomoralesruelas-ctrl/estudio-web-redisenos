import { useEffect, useMemo, useRef, useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, lema, intro, equipo, ofrecemos, mision, record, especialidad } from './data/content';
import { propiedades } from './data/propiedades';
import type { Propiedad } from './data/propiedades';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
const dinero = (n: number) => `$${n.toLocaleString('es-MX')} MXN`;
const mdp = (n: number) => `$${(n / 1e6).toLocaleString('es-MX', { maximumFractionDigits: 1 })} M`;
const portada = 'eb-5463356';

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 800];
  return <img src={`${base}${n}.webp`} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

const nombre = (p: Propiedad) => `${p.tipo} en ${p.colonia}`;
function detalles(p: Propiedad) {
  const d: string[] = [];
  if (p.rec) d.push(`${p.rec} ${p.rec === 1 ? 'recámara' : 'recámaras'}`);
  if (p.banos) d.push(`${p.banos} ${p.banos === 1 ? 'baño' : 'baños'}`);
  if (p.m2) d.push(`${p.m2.toLocaleString('es-MX')} m²`);
  return d;
}

/* ---------- Mosaico: treemap "squarified" (cada propiedad ocupa el área de su precio) ---------- */
type Caja = { x: number; y: number; w: number; h: number };
function squarify<T>(items: T[], valor: (t: T) => number, c: Caja): (Caja & { item: T })[] {
  const out: (Caja & { item: T })[] = [];
  const total = items.reduce((s, t) => s + valor(t), 0);
  if (!total || c.w <= 0 || c.h <= 0) return out;
  const escala = (c.w * c.h) / total;
  const cola = [...items].sort((a, b) => valor(b) - valor(a)).map((item) => ({ item, a: valor(item) * escala }));
  let { x, y, w, h } = c;
  const peor = (fila: { a: number }[], lado: number) => {
    const s = fila.reduce((t, f) => t + f.a, 0);
    const max = Math.max(...fila.map((f) => f.a));
    const min = Math.min(...fila.map((f) => f.a));
    return Math.max((lado * lado * max) / (s * s), (s * s) / (lado * lado * min));
  };
  const colocar = (fila: { item: T; a: number }[]) => {
    const s = fila.reduce((t, f) => t + f.a, 0);
    if (w >= h) {
      const ancho = s / h; let yy = y;
      for (const f of fila) { const alto = f.a / ancho; out.push({ x, y: yy, w: ancho, h: alto, item: f.item }); yy += alto; }
      x += ancho; w -= ancho;
    } else {
      const alto = s / w; let xx = x;
      for (const f of fila) { const ancho = f.a / alto; out.push({ x: xx, y, w: ancho, h: alto, item: f.item }); xx += ancho; }
      y += alto; h -= alto;
    }
  };
  let fila: { item: T; a: number }[] = [];
  for (const f of cola) {
    const lado = Math.min(w, h);
    if (!fila.length || peor([...fila, f], lado) <= peor(fila, lado)) fila.push(f);
    else { colocar(fila); fila = [f]; }
  }
  if (fila.length) colocar(fila);
  return out;
}

const filtros = [
  { id: 'todas', t: 'Todas', f: (_: Propiedad) => true },
  { id: 'lujo', t: '20 millones o más', f: (p: Propiedad) => p.precio >= 20e6 },
  { id: 'casas', t: 'Casas', f: (p: Propiedad) => p.tipo.startsWith('Casa') },
  { id: 'tierra', t: 'Terrenos y quintas', f: (p: Propiedad) => p.tipo === 'Terreno' || p.tipo === 'Quinta' },
] as const;
type FiltroId = (typeof filtros)[number]['id'];

function useAncho<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [ancho, setAncho] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const ro = new ResizeObserver(([e]) => setAncho(Math.round(e.contentRect.width)));
    ro.observe(el); return () => ro.disconnect();
  }, []);
  return [ref, ancho] as const;
}

function Mosaico() {
  const [filtro, setFiltro] = useState<FiltroId>('todas');
  const lista = useMemo(() => propiedades.filter(filtros.find((f) => f.id === filtro)!.f), [filtro]);
  const [sel, setSel] = useState<string>(propiedades.reduce((a, b) => (b.precio > a.precio ? b : a)).id);
  const [ref, ancho] = useAncho<HTMLDivElement>();
  const alto = ancho < 640 ? Math.round(ancho * 1.3) : Math.min(Math.round(ancho * 0.62), 640);

  const grupos = useMemo(() => {
    const m = new Map<string, Propiedad[]>();
    for (const p of lista) m.set(p.municipio, [...(m.get(p.municipio) ?? []), p]);
    return [...m.entries()].map(([municipio, ps]) => ({ municipio, ps, total: ps.reduce((s, p) => s + p.precio, 0) }));
  }, [lista]);
  const cajas = useMemo(() => {
    if (!ancho) return [];
    const g = 4;
    return squarify(grupos, (x) => x.total, { x: 0, y: 0, w: ancho, h: alto }).map((gc) => ({
      ...gc,
      hijos: squarify(gc.item.ps, (p) => p.precio, { x: gc.x + g / 2, y: gc.y + g / 2, w: gc.w - g, h: gc.h - g }),
    }));
  }, [grupos, ancho, alto]);

  const actual = lista.find((p) => p.id === sel) ?? lista[0];
  const orden = [...lista].sort((a, b) => b.precio - a.precio);
  const mover = (d: number) => { const i = orden.findIndex((p) => p.id === actual.id); setSel(orden[(i + d + orden.length) % orden.length].id); };
  const total = lista.reduce((s, p) => s + p.precio, 0);
  const panel = useRef<HTMLElement>(null);
  const elegir = (id: string) => {
    setSel(id);
    if (window.innerWidth < 1024) {
      const quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      panel.current?.scrollIntoView({ behavior: quieto ? 'auto' : 'smooth', block: 'start' });
    }
  };

  return (
    <section id="propiedades" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow">El mosaico Fractal</p>
            <h2 className="mt-3 max-w-3xl text-4xl sm:text-6xl">Cada propiedad ocupa el espacio de su precio</h2>
            <p className="mt-4 max-w-2xl text-gris">Las {propiedades.length} propiedades que hoy tienen publicadas, agrupadas por municipio. Las piezas grandes son las residencias de lujo; toca cualquiera para ver su ficha.</p>
          </div>
          <dl className="flex gap-8">
            <div className="flex flex-col"><dt className="text-xs uppercase tracking-[0.2em] text-gris">Propiedades</dt><dd className="order-first font-display text-5xl">{lista.length}</dd></div>
            <div className="flex flex-col"><dt className="text-xs uppercase tracking-[0.2em] text-gris">Valor en conjunto</dt><dd className="order-first font-display text-5xl">{mdp(total)}</dd></div>
          </dl>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar el mosaico">
          {filtros.map((f) => (
            <button key={f.id} type="button" aria-pressed={filtro === f.id} onClick={() => setFiltro(f.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${filtro === f.id ? 'border-negro bg-negro text-white' : 'border-tinta/25 hover:border-negro'}`}>
              {f.t} <span className={filtro === f.id ? 'text-oro-claro' : 'text-oro'}>{propiedades.filter(f.f).length}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_22rem]">
          <div ref={ref} className="relative overflow-hidden rounded-2xl bg-negro" style={{ height: alto || 400 }}>
            {cajas.map((gc) => (
              <div key={gc.item.municipio}>
                {gc.hijos.map((c) => {
                  const p = c.item; const activo = p.id === actual.id;
                  const grande = c.w > 120 && c.h > 84; const mediano = c.w > 72 && c.h > 40;
                  return (
                    <button key={p.id} type="button" onClick={() => elegir(p.id)} aria-pressed={activo}
                      aria-label={`${nombre(p)}, ${p.municipio}: ${dinero(p.precio)}`}
                      className="group absolute overflow-hidden text-left transition-all duration-500"
                      style={{ left: c.x + 1.5, top: c.y + 1.5, width: Math.max(c.w - 3, 0), height: Math.max(c.h - 3, 0) }}>
                      <Foto n={p.foto} alt="" eager className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <span className={`absolute inset-0 transition-colors ${activo ? 'bg-negro/10 ring-4 ring-inset ring-oro-claro' : 'bg-gradient-to-t from-negro/85 via-negro/25 to-transparent group-hover:from-negro/70'}`} />
                      {mediano && (
                        <span className="absolute inset-x-0 bottom-0 p-2 text-white sm:p-3">
                          <span className={`block whitespace-nowrap font-display leading-none ${grande ? 'text-2xl sm:text-3xl' : 'text-sm sm:text-base'}`}>{mdp(p.precio)}</span>
                          {grande && <span className="mt-1 block truncate text-xs text-white/85">{p.colonia}</span>}
                        </span>
                      )}
                    </button>
                  );
                })}
                {gc.w > 90 && (
                  <span className="pointer-events-none absolute rounded-full bg-piedra px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-negro"
                    style={{ left: gc.x + 8, top: gc.y + 8, maxWidth: gc.w - 16 }}>
                    <span className="block truncate">{gc.item.municipio === 'San Pedro Garza García' && gc.w < 220 ? 'San Pedro' : gc.item.municipio}</span>
                  </span>
                )}
              </div>
            ))}
          </div>

          {actual && (
            <article ref={panel} className="flex scroll-mt-20 flex-col overflow-hidden rounded-2xl bg-white" aria-live="polite">
              <Foto n={actual.foto} alt={`${nombre(actual)}, ${actual.municipio}`} className="aspect-[4/3] w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-oro">{actual.op === 'preventa' ? 'Preventa' : 'Venta'} · {actual.municipio}</p>
                <h3 className="mt-2 text-2xl leading-tight">{nombre(actual)}</h3>
                <p className="mt-3 font-display text-3xl">{dinero(actual.precio)}</p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gris">{detalles(actual).map((d) => <li key={d}>{d}</li>)}</ul>
                {actual.m2 && actual.tipo !== 'Quinta' && <p className="mt-2 text-sm text-gris">{dinero(Math.round(actual.precio / actual.m2))} por m²</p>}
                <div className="mt-auto flex flex-col gap-2 pt-6">
                  <a href={wa(`Hola, Grupo Fractal. Me interesa: ${actual.titulo} (${dinero(actual.precio)}). ${actual.url}`)} className="btn-negro">Preguntar por WhatsApp</a>
                  <div className="flex items-center justify-between gap-1 whitespace-nowrap text-sm font-semibold">
                    <button type="button" onClick={() => mover(-1)} className="rounded-full px-3 py-2 hover:bg-piedra" aria-label="Propiedad anterior">← Anterior</button>
                    <a href={actual.url} className="underline underline-offset-4">Ver ficha</a>
                    <button type="button" onClick={() => mover(1)} className="rounded-full px-3 py-2 hover:bg-piedra" aria-label="Propiedad siguiente">Siguiente →</button>
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>
        <p className="mt-4 text-sm text-gris">Precios tal como están publicados en su catálogo; pueden cambiar. <a href={negocio.catalogo} className="underline underline-offset-4">Ver el catálogo en grupofractal.mx</a></p>
      </div>
    </section>
  );
}

function Encabezado() {
  const enlaces = [['#propiedades', 'Propiedades'], ['#vender', 'Vender'], ['#nosotros', 'Nosotros'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-30 border-b border-tinta/10 bg-piedra/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img src={`${base}logo.png`} alt="Grupo Fractal" width={fotos.logo?.[0] ?? 300} height={fotos.logo?.[1] ?? 60} className="h-8 w-auto" /></a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8 text-sm font-semibold">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-oro">{t}</a></li>)}</ul>
        </nav>
        <a href={`tel:${negocio.telefonoLink}`} className="hidden text-sm font-semibold sm:inline md:hidden lg:inline">{negocio.telefono}</a>
      </div>
    </header>
  );
}

function Portada() {
  const lujo = propiedades.filter((p) => p.precio >= 20e6).length;
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-negro text-white">
      <Foto n={portada} alt="Alberca bajo pérgola de una residencia en el Residencial y Club de Golf La Herradura, Monterrey" eager className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-negro/70 sm:bg-transparent sm:bg-gradient-to-r sm:from-negro/95 sm:via-negro/70 sm:to-negro/10" />
      <div className="contenedor flex min-h-[36rem] flex-col justify-end pb-14 pt-24 sm:min-h-[42rem] sm:pb-20">
        <p className="eyebrow text-oro-claro">San Pedro Garza García · Monterrey</p>
        <h1 className="mt-5 max-w-4xl text-5xl sm:text-7xl">Propiedades de lujo en San Pedro y Monterrey</h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">{lema} {intro}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#propiedades" className="btn-oro">Ver el mosaico</a>
          <a href={wa('Hola, Grupo Fractal. Quiero vender mi propiedad y me gustaría una valoración.')} className="btn-linea">Quiero vender</a>
        </div>
        <p className="mt-10 text-sm text-white/70">{propiedades.length} propiedades publicadas · {lujo} de 20 millones o más</p>
      </div>
    </section>
  );
}

function Vender() {
  return (
    <section id="vender" className="bg-negro py-16 text-white sm:py-24">
      <div className="contenedor">
        <p className="eyebrow text-oro-claro">Para propietarios</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-6xl">Tu propiedad, presentada como merece</h2>
        <p className="mt-5 max-w-2xl text-lg text-white/80">{equipo}</p>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {ofrecemos.map((o, i) => (
            <li key={o.t} className="bg-negro p-6 sm:p-8">
              <span className="font-display text-5xl text-oro-claro">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-2xl">{o.t}</h3>
              <p className="mt-3 text-white/75">{o.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 grid gap-8 rounded-2xl bg-negro-2 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="text-3xl sm:text-4xl">Ventas en tiempo récord</h3>
            <p className="mt-4 max-w-2xl text-white/80">{record}</p>
            <p className="mt-4 max-w-2xl font-semibold text-oro-claro">{especialidad}</p>
          </div>
          <a href={wa('Hola, Grupo Fractal. Quiero un plan a la medida para vender mi propiedad.')} className="btn-oro self-start lg:self-center">Pedir un plan de venta</a>
        </div>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="py-16 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-[22rem_1fr] lg:gap-16">
        <div className="overflow-hidden rounded-2xl bg-[#d9d9d9]">
          <Foto n="arturo" alt="Asesor de Grupo Fractal by Arturo Bienes Raíces con saco claro" className="aspect-[520/772] w-full object-cover" />
        </div>
        <div>
          <p className="eyebrow">Quiénes somos</p>
          <h2 className="mt-3 text-4xl sm:text-6xl">{negocio.marca}</h2>
          <p className="mt-5 text-lg text-gris">{intro}</p>
          <blockquote className="mt-8 border-l-4 border-oro pl-6">
            <p className="font-display text-2xl leading-snug sm:text-3xl">“{mision}”</p>
            <footer className="mt-3 text-sm text-gris">Nuestra misión. Tu satisfacción es nuestra prioridad.</footer>
          </blockquote>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {['extra-03-2', 'extra-14-2', 'extra-11-2'].map((n, i) => (
              <Foto key={n} n={n} alt={['Sala con chimenea y ventanales en una casa de El Yerbaniz, Santiago', 'Vestíbulo de doble altura con candil en una casa de La Herradura', 'Terraza iluminada de noche con alberca en una casa de Del Valle, San Pedro'][i]}
                className={`aspect-square w-full rounded-xl object-cover ${i === 2 ? 'max-sm:hidden' : ''}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-piedra-2 py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-3 text-4xl sm:text-6xl">Hablemos de tu propiedad</h2>
          <p className="mt-4 max-w-lg text-gris">Para comprar, vender o pedir una valoración en San Pedro Garza García y Monterrey.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, Grupo Fractal. Me gustaría recibir asesoría.')} className="btn-negro">WhatsApp</a>
            <a href={`tel:${negocio.telefonoLink}`} className="btn-linea">Llamar</a>
          </div>
        </div>
        <dl className="divide-y divide-tinta/15 border-y border-tinta/15">
          <div className="py-5"><dt className="text-sm text-gris">Teléfono y WhatsApp</dt><dd className="mt-1 text-xl"><a href={`tel:${negocio.telefonoLink}`} className="hover:text-oro">{negocio.telefono}</a></dd></div>
          <div className="py-5"><dt className="text-sm text-gris">Correo</dt><dd className="mt-1 break-words text-xl"><a href={`mailto:${negocio.correo}`} className="hover:text-oro">{negocio.correo}</a></dd></div>
          <div className="py-5"><dt className="text-sm text-gris">Oficina</dt><dd className="mt-1 text-xl">{negocio.direccion} <a href={negocio.mapa} className="ml-1 text-base underline underline-offset-4">Abrir en Google Maps</a></dd></div>
          <div className="py-5"><dt className="text-sm text-gris">Redes</dt><dd className="mt-2 flex flex-wrap gap-6">{negocio.redes.map(([t, h]) => <a key={t} href={h} className="underline underline-offset-4">{t}</a>)}</dd></div>
        </dl>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#propiedades" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <Mosaico />
        <Vender />
        <Nosotros />
        <Contacto />
      </main>
      <footer className="bg-negro pb-24 pt-10 text-sm text-white/70 md:pb-10">
        <div className="contenedor flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-xl text-white">{negocio.marca}</p>
          <p>{negocio.telefono} · {negocio.correo} · {negocio.direccion}</p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-negro p-3 md:hidden">
        <a href={`tel:${negocio.telefonoLink}`} className="btn-linea py-3 text-white">Llamar</a>
        <a href={wa('Hola, Grupo Fractal. Me gustaría recibir asesoría.')} className="btn-oro py-3">WhatsApp</a>
      </nav>
    </>
  );
}
