import { useEffect, useMemo, useState } from 'react';
import {
  afiliados, cifras, foto, fotoDe, inventarioUrl, mapaPrincipal, negocio, oficinas, porId, preventas, preventasUrl,
  propiedades, seleccion, vender, wa, waGeneral, waVender, type Foto, type Moneda, type Propiedad, type Tipo,
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

const dinero = (n: number, m: Moneda) => `$${n.toLocaleString('en-US')} ${m}`;
const corto = (n: number, m: Moneda) => {
  const t = n >= 1e6 ? `${(n / 1e6).toLocaleString('es-MX', { maximumFractionDigits: 2 })} millones` : `${(n / 1e3).toLocaleString('es-MX')} mil`;
  return `$${t} ${m === 'MXN' ? 'de pesos' : 'de dólares'}`;
};
const m2txt = (n: number) => `${n.toLocaleString('es-MX', { maximumFractionDigits: 2 })} m²`;
const nombreTipo: Record<Tipo, string> = { casa: 'Casa o villa', depa: 'Departamento', lote: 'Lote' };
function detalles(p: Propiedad) {
  if (p.tipo === 'lote') return `Lote de ${m2txt(p.m2)}`;
  const rec = p.rec === 0 ? 'estudio' : `${p.rec} ${p.rec === 1 ? 'recámara' : 'recámaras'}`;
  return `${m2txt(p.m2)}, ${rec}, ${p.banos} ${p.banos === 1 ? 'baño' : 'baños'}`;
}
const waPropiedad = (p: Propiedad) => wa(`Hola, me interesa ${p.nombre} (${p.ubicacion}), publicada en ${dinero(p.precio, p.moneda)}. ¿Sigue disponible?`);
const tel = `tel:${negocio.telLink}`;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 bg-noche/95 text-white backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="DOMUS Vallarta Fine Real Estate, inicio">
          <img src={foto('logo.svg')} alt="DOMUS Fine Real Estate" width={254} height={80} className="h-10 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 text-[0.95rem] font-medium lg:flex">
          <a href="#presupuesto" className="hover:text-oro">Tu presupuesto</a>
          <a href="#seleccion" className="hover:text-oro">Selección Domus</a>
          <a href="#preventas" className="hover:text-oro">Preventas</a>
          <a href="#vender" className="hover:text-oro">Vender</a>
          <a href="#oficinas" className="hover:text-oro">Oficinas</a>
        </nav>
        <a href={waGeneral} target="_blank" rel="noopener" className="btn-oro !min-h-[40px] !px-4 !py-2 text-sm"><IconoWa className="h-4 w-4" /> WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  const maralma = porId(109);
  return (
    <section id="inicio" className="bg-noche text-white">
      <div className="contenedor grid items-center gap-10 pb-14 pt-10 lg:grid-cols-[1.05fr_1fr] lg:pb-20 lg:pt-16">
        <div className="min-w-0">
          <h1 className="text-[2.35rem] font-light leading-[1.08] sm:text-6xl">Invierte en Puerto Vallarta &amp; Riviera Nayarit</h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">{negocio.descripcion}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#presupuesto" className="btn-oro">¿Qué hay para mi presupuesto?</a>
            <a href={waGeneral} target="_blank" rel="noopener" className="btn-claro"><IconoWa /> Escribir por WhatsApp</a>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-6">
            {cifras.map(([n, t]) => (
              <div key={t} className="min-w-0">
                <dt className="sr-only">{t}</dt>
                <dd><span className="block text-3xl font-light text-oro sm:text-4xl">{n}</span><span className="mt-1 block text-sm leading-snug text-white/80">{t}</span></dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="min-w-0">
          <Img f={{ ...fotoDe(maralma), alt: 'Alberca infinita en la azotea de Maralma, con la bahía de Banderas al fondo' }} loading="eager" className="aspect-[4/3] w-full rounded-sm object-cover" />
          <figcaption className="mt-3 text-sm text-white/70">Maralma, Bucerías. Departamentos desde {dinero(maralma.precio, maralma.moneda)} en su inventario.</figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------- ¿Cuánto espacio te da tu presupuesto? ---------- */
const topes: Record<Moneda, number[]> = {
  MXN: [1e6, 2e6, 3e6, 4e6, 5e6, 6e6, 8e6, 10e6, 12e6, 15e6, 20e6, 30e6, 45e6],
  USD: [2e5, 3e5, 4e5, 5e5, 6e5, 7.5e5, 1e6, 1.5e6, 2e6, 3e6, 4e6],
};
const zonas = ['La Cruz de Huanacaxtle', 'Bucerías', 'Nuevo Vallarta', 'Bahía de Banderas', 'Puerto Vallarta', 'San Sebastián del Oeste'];
const colorTipo: Record<Tipo, string> = { casa: 'bg-mar', depa: 'bg-marino', lote: 'bg-cobre' };
// Píxeles por metro de lado: 3.4 en el celular y 4.4 en pantallas anchas (el lote más grande, 2,448 m², mide 168 o 218 px).
function usePxMetro() {
  const consulta = '(min-width: 1024px)';
  const [ancho, setAncho] = useState(() => typeof window !== 'undefined' && window.matchMedia(consulta).matches);
  useEffect(() => {
    const m = window.matchMedia(consulta);
    const f = () => setAncho(m.matches);
    m.addEventListener('change', f);
    return () => m.removeEventListener('change', f);
  }, []);
  return ancho ? 4.4 : 3.4;
}

function Presupuesto() {
  const [moneda, setMoneda] = useState<Moneda>('MXN');
  const [paso, setPaso] = useState(5);
  const [tipo, setTipo] = useState<Tipo | 'todas'>('todas');
  const [elegida, setElegida] = useState<number | null>(null);
  const PX_M = usePxMetro();

  const tope = topes[moneda][Math.min(paso, topes[moneda].length - 1)];
  const enMoneda = propiedades.filter((p) => p.moneda === moneda);
  const caben = useMemo(
    () => enMoneda.filter((p) => p.precio <= tope && (tipo === 'todas' || p.tipo === tipo)).sort((a, b) => b.m2 - a.m2),
    [moneda, tope, tipo],
  );
  const grupos = zonas.map((z) => ({ z, lista: caben.filter((p) => p.zona === z) })).filter((g) => g.lista.length);
  // Sin elección, se abre la casa o el departamento más amplio (la foto de un lote suele ser aérea).
  const actual = caben.find((p) => p.id === elegida) ?? caben.find((p) => p.tipo !== 'lote') ?? caben[0];

  // En el celular la ficha queda debajo de los cuadros: al tocar uno, se baja a verla.
  const elegir = (id: number) => {
    setElegida(id);
    if (!window.matchMedia('(min-width: 1024px)').matches) {
      const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      requestAnimationFrame(() => document.getElementById('ficha')?.scrollIntoView({ behavior: suave ? 'smooth' : 'auto', block: 'start' }));
    }
  };
  const cambiarMoneda = (m: Moneda) => { setMoneda(m); setPaso(m === 'MXN' ? 5 : 4); setElegida(null); };
  const chip = (activo: boolean) => `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${activo ? 'border-marino bg-marino text-white' : 'border-tinta/20 bg-white text-tinta hover:border-marino'}`;

  return (
    <section id="presupuesto" className="bg-arena py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-light sm:text-5xl">¿Cuánto espacio te da tu presupuesto?</h2>
          <p className="mt-4 text-lg text-gris">Cada cuadro es una propiedad de nuestro inventario dibujada a escala de sus metros cuadrados. Mueve el tope y mira qué cabe, y dónde, entre La Cruz de Huanacaxtle y Puerto Vallarta.</p>
        </div>

        <div className="mt-10 grid gap-6 rounded-sm bg-white p-5 shadow-sm sm:p-7 lg:grid-cols-[auto_1fr] lg:items-end">
          <fieldset className="min-w-0">
            <legend className="mb-2 text-sm font-semibold">Moneda de la ficha</legend>
            <div className="flex gap-2">
              {(['MXN', 'USD'] as Moneda[]).map((m) => (
                <button key={m} type="button" aria-pressed={moneda === m} onClick={() => cambiarMoneda(m)} className={chip(moneda === m)}>
                  {m === 'MXN' ? 'Pesos' : 'Dólares'}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="min-w-0">
            <label htmlFor="tope" className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 text-sm font-semibold">
              <span>Hasta</span>
              <output htmlFor="tope" className="text-2xl font-light text-marino sm:text-3xl">{corto(tope, moneda)}</output>
            </label>
            <input id="tope" type="range" min={0} max={topes[moneda].length - 1} step={1} value={paso}
              onChange={(e) => { setPaso(Number(e.target.value)); setElegida(null); }}
              aria-valuetext={corto(tope, moneda)} className="w-full accent-marino" />
          </div>
          <fieldset className="min-w-0 lg:col-span-2">
            <legend className="mb-2 text-sm font-semibold">Qué buscas</legend>
            <div className="flex flex-wrap gap-2">
              {([['todas', 'Todo'], ['casa', 'Casas y villas'], ['depa', 'Departamentos'], ['lote', 'Lotes']] as [Tipo | 'todas', string][]).map(([t, n]) => (
                <button key={t} type="button" aria-pressed={tipo === t} onClick={() => { setTipo(t); setElegida(null); }} className={chip(tipo === t)}>{n}</button>
              ))}
            </div>
          </fieldset>
        </div>

        <p className="mt-6 text-lg" aria-live="polite">
          {caben.length
            ? <>Con hasta <strong>{corto(tope, moneda)}</strong> hay <strong>{caben.length}</strong> de las {enMoneda.length} propiedades publicadas en {moneda === 'MXN' ? 'pesos' : 'dólares'}. La más amplia: {caben[0].nombre}, {m2txt(caben[0].m2)}.</>
            : <>Con hasta {corto(tope, moneda)} no hay propiedades publicadas{tipo !== 'todas' ? ' de ese tipo' : ''}. Sube el tope o escríbenos: también trabajamos el inventario MLS.</>}
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <div className="flex flex-wrap items-end gap-x-6 gap-y-3 text-sm text-gris" aria-hidden="true">
              <span className="flex items-end gap-2"><span className="block border border-dashed border-tinta/60" style={{ width: 10 * PX_M, height: 10 * PX_M }} /> 10 × 10 m = 100 m²</span>
              <span className="flex items-center gap-2"><span className="h-3 w-3 bg-mar" /> Casas y villas</span>
              <span className="flex items-center gap-2"><span className="h-3 w-3 bg-marino" /> Departamentos</span>
              <span className="flex items-center gap-2"><span className="h-3 w-3 bg-cobre" /> Lotes (terreno)</span>
            </div>
            <div className="mt-6 space-y-7">
              {grupos.map(({ z, lista }) => (
                <div key={z} className="border-t border-tinta/15 pt-4">
                  <h3 className="text-base font-semibold">{z} <span className="font-normal text-gris">({lista.length})</span></h3>
                  <ul className="mt-3 flex flex-wrap items-end gap-2">
                    {lista.map((p) => {
                      const lado = Math.round(Math.sqrt(p.m2) * PX_M);
                      const sel = actual?.id === p.id;
                      return (
                        <li key={p.id}>
                          <button type="button" onClick={() => elegir(p.id)} aria-pressed={sel}
                            aria-label={`${p.nombre}, ${detalles(p)}, ${dinero(p.precio, p.moneda)}`}
                            title={`${p.nombre}: ${m2txt(p.m2)}`}
                            className={`block ${colorTipo[p.tipo]} transition-opacity ${sel ? 'opacity-100 outline-3 outline-offset-2 outline-oro-hondo' : 'opacity-80 hover:opacity-100'}`}
                            style={{ width: lado, height: lado }} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gris">m² como los publica cada ficha (en lotes, el terreno). Precios de su sitio al 27 de septiembre de 2026; pueden cambiar. No convertimos monedas: cada propiedad está en la moneda en que se publica.</p>
          </div>

          <div id="ficha" className="min-w-0 scroll-mt-20">
            {actual && (
              <article key={actual.id} className="aparece sticky top-20 overflow-hidden rounded-sm bg-white shadow-sm">
                <Img f={fotoDe(actual)} className="aspect-[3/2] w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm font-medium text-gris">{nombreTipo[actual.tipo]} en {actual.zona}</p>
                  <h3 className="mt-1 text-2xl font-semibold leading-tight">{actual.nombre}</h3>
                  <p className="mt-1 text-gris">{actual.ubicacion}</p>
                  <p className="mt-4 text-3xl font-light text-marino">{dinero(actual.precio, actual.moneda)}</p>
                  <p className="mt-2">{detalles(actual)}.</p>
                  <p className="text-sm text-gris">Unos {dinero(Math.round(actual.precio / actual.m2 / 100) * 100, actual.moneda)} por m².</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={waPropiedad(actual)} target="_blank" rel="noopener" className="btn"><IconoWa /> Preguntar por esta</a>
                    <a href={actual.url} target="_blank" rel="noopener" className="btn-linea">Ver la ficha completa</a>
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Seleccion() {
  const [grande, ...resto] = seleccion.map((s) => ({ ...s, p: porId(s.id) }));
  return (
    <section id="seleccion" className="py-20 sm:py-24">
      <div className="contenedor">
        <h2 className="text-4xl font-light sm:text-5xl">Selección Domus</h2>
        <p className="mt-4 max-w-2xl text-lg text-gris">Encuentra el mejor lugar para ti en Puerto Vallarta y Riviera Nayarit.</p>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <a href={grande.p.url} target="_blank" rel="noopener" className="group min-w-0">
            <Img f={fotoDe(grande.p)} className="aspect-[3/2] w-full rounded-sm object-cover" />
            <h3 className="mt-5 text-2xl font-semibold group-hover:text-mar">{grande.p.nombre}</h3>
            <p className="mt-1 text-gris">{grande.p.ubicacion}</p>
            <p className="mt-3 text-2xl font-light text-marino">{dinero(grande.p.precio, grande.p.moneda)}</p>
            <p className="mt-1">{detalles(grande.p)}.</p>
          </a>
          <ul className="min-w-0 divide-y divide-tinta/15 border-y border-tinta/15">
            {resto.map(({ p, nota }) => (
              <li key={p.id}>
                <a href={p.url} target="_blank" rel="noopener" className="group grid grid-cols-[7.5rem_1fr] gap-4 py-4 sm:grid-cols-[10rem_1fr]">
                  <Img f={fotoDe(p)} className="aspect-[4/3] w-full rounded-sm object-cover" />
                  <div className="min-w-0">
                    <h3 className="font-semibold leading-snug group-hover:text-mar">{p.nombre}</h3>
                    <p className="text-sm text-gris">{p.ubicacion}</p>
                    <p className="mt-1 text-sm">{detalles(p)}</p>
                    <p className="mt-1 font-semibold text-marino">{dinero(p.precio, p.moneda)}{nota && <span className="ml-2 text-sm font-medium text-cobre">{nota}</span>}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a href={inventarioUrl} target="_blank" rel="noopener" className="enlace mt-8 inline-block">Ver también el inventario MLS en su sitio</a>
      </div>
    </section>
  );
}

function Preventas() {
  return (
    <section id="preventas" className="bg-arena py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <figure className="min-w-0">
          <img src={foto('mcs-fluvial.webp')} width={900} height={1125} loading="lazy" decoding="async"
            alt="Render de la fachada de MCS Fluvial, departamentos en preventa en Residencial Fluvial Vallarta" className="aspect-[4/5] w-full max-w-md rounded-sm object-cover" />
          <figcaption className="mt-3 text-sm text-gris">MCS Fluvial, nueva preventa en Residencial Fluvial Vallarta (render del desarrollo).</figcaption>
        </figure>
        <div className="min-w-0">
          <h2 className="text-4xl font-light sm:text-5xl">Desarrollos en preventa</h2>
          <p className="mt-4 text-lg text-gris">Departamentos desde el precio que publica cada desarrollo.</p>
          <table className="mt-8 w-full text-left">
            <caption className="sr-only">Desarrollos destacados y su precio de entrada</caption>
            <thead className="text-sm text-gris"><tr><th className="pb-2 font-medium">Desarrollo</th><th className="pb-2 text-right font-medium">Desde</th></tr></thead>
            <tbody className="divide-y divide-tinta/15 border-y border-tinta/15">
              {preventas.map((d) => (
                <tr key={d.nombre}>
                  <td className="py-4 pr-4">
                    <a href={d.url} target="_blank" rel="noopener" className="font-semibold hover:text-mar">{d.nombre}</a>
                    <span className="block text-sm text-gris">{d.lugar}</span>
                  </td>
                  <td className="py-4 text-right font-semibold whitespace-nowrap text-marino">{d.desde}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, me interesan sus desarrollos en preventa. ¿Me pueden mandar información?')} target="_blank" rel="noopener" className="btn"><IconoWa /> Pedir información</a>
            <a href={preventasUrl} target="_blank" rel="noopener" className="btn-linea">Todas las preventas</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Vender() {
  return (
    <section id="vender" className="bg-marino py-20 text-white sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="min-w-0">
          <h2 className="text-4xl font-light sm:text-5xl">¿Quieres vender?</h2>
          <p className="mt-5 text-xl font-light text-oro">{vender.titulo}.</p>
          <p className="mt-5 text-lg text-white/85">{vender.texto}</p>
          <a href={waVender} target="_blank" rel="noopener" className="btn-oro mt-8"><IconoWa /> Quiero vender</a>
          <p className="mt-10 text-sm text-white/80">Publicamos en {vender.portales.join(', ')} y en las revistas {vender.revistas.join(' y ')}.</p>
        </div>
        <ul className="min-w-0 divide-y divide-white/15 border-y border-white/15">
          {vender.fortalezas.map(([a, b]) => (
            <li key={a} className="py-4"><strong className="font-semibold">{a}</strong> <span className="text-white/85">{b}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Oficinas() {
  return (
    <section id="oficinas" className="py-20 sm:py-24">
      <div className="contenedor">
        <h2 className="text-4xl font-light sm:text-5xl">Encuéntranos</h2>
        <p className="mt-4 max-w-2xl text-lg text-gris">Contáctanos para que te podamos atender personalmente.</p>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {oficinas.map((o) => (
            <div key={o.ciudad} className="min-w-0 border-t-2 border-marino pt-5">
              <h3 className="text-2xl font-semibold">{o.ciudad}</h3>
              <address className="mt-3 not-italic">{o.lineas.map((l) => <span key={l} className="block">{l}</span>)}</address>
              <ul className="mt-4 space-y-1">
                {o.telefonos.map(([t, l]) => <li key={l}><a href={`tel:${l}`} className="enlace inline-flex items-center gap-2"><IconoTel className="h-4 w-4" />{t}</a></li>)}
              </ul>
              <a href={o.mapa} target="_blank" rel="noopener" className="btn-linea mt-5"><IconoPin /> Cómo llegar</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-noche pb-28 pt-14 text-white lg:pb-14">
      <div className="contenedor grid gap-10 md:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <img src={foto('logo.svg')} alt="DOMUS Fine Real Estate" width={254} height={80} loading="lazy" className="h-12 w-auto" />
          <p className="mt-4 max-w-md text-sm text-white/80">DOMUS Vallarta Inmobiliaria. Oficinas en Puerto Vallarta, Bucerías y Guadalajara.</p>
          <p className="mt-4 flex flex-wrap gap-5 text-sm">
            <a href={negocio.instagram} target="_blank" rel="noopener" className="hover:text-oro">Instagram</a>
            <a href={negocio.facebook} target="_blank" rel="noopener" className="hover:text-oro">Facebook</a>
            <a href={negocio.tiktok} target="_blank" rel="noopener" className="hover:text-oro">TikTok</a>
            <a href={negocio.sitio} target="_blank" rel="noopener" className="hover:text-oro">domusvallarta.com</a>
          </p>
        </div>
        <div className="min-w-0">
          <p className="text-sm text-white/80">Afiliados</p>
          <div className="mt-3 flex flex-wrap items-center gap-6">
            {afiliados.map((a) => <img key={a.alt} src={a.src} alt={a.alt} width={a.w} height={a.h} loading="lazy" className={`${a.clase} w-auto`} />)}
          </div>
        </div>
      </div>
      <p className="contenedor mt-10 text-xs text-white/70">Copyright© 2026 DOMUS Vallarta Inmobiliaria. Precios y disponibilidad sujetos a cambio; confirma con tu asesor.</p>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-noche text-white lg:hidden">
      <a href={waGeneral} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-2.5 text-xs font-semibold"><IconoWa /> WhatsApp</a>
      <a href={tel} className="flex flex-col items-center gap-1 py-2.5 text-xs font-semibold"><IconoTel /> Llamar</a>
      <a href={mapaPrincipal} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-2.5 text-xs font-semibold"><IconoPin /> Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#presupuesto" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-white focus:p-3 focus:text-tinta">Saltar al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <Presupuesto />
        <Seleccion />
        <Preventas />
        <Vender />
        <Oficinas />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
