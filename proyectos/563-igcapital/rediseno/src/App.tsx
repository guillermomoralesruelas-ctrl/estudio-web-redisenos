import { useMemo, useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, nosotros, servicios, zonas, premio } from './data/content';
import { propiedades } from './data/propiedades';
import type { Propiedad } from './data/propiedades';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const src = (n: string) => `${base}${n}.webp`;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
const mxn = (n: number) => '$' + Math.round(n).toLocaleString('es-MX');
const millones = (n: number) => `$${(n / 1e6).toLocaleString('es-MX', { maximumFractionDigits: 1 })} M`;

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 800];
  return <img src={src(n)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

const etiquetaOp = { venta: 'En venta', preventa: 'Preventa', renta: 'En renta' } as const;

function Tarjeta({ p }: { p: Propiedad }) {
  const precio = p.op === 'renta' ? `${mxn(p.precio)} al mes` : mxn(p.precio);
  return (
    <li className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-tinta/10">
      <div className="relative aspect-[4/3]">
        <Foto n={p.foto} alt={`Fachada de ${p.nombre} en ${p.zona}`} className="absolute inset-0 h-full w-full object-cover" />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${p.op === 'preventa' ? 'bg-lima text-carbon' : 'bg-carbon text-white'}`}>{etiquetaOp[p.op]}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-gris">{p.zona} · {p.tipo}</p>
        <h3 className="mt-1 text-xl">{p.nombre}</h3>
        <p className="mt-2 font-display text-2xl font-semibold">{precio}</p>
        <p className="mt-1 text-sm text-gris">{p.rec} rec · {p.banos} baños{p.m2 ? ` · ${p.m2.toLocaleString('es-MX')} m²` : ''}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          <a href={wa(`Hola, IG Capital. Me interesa ${p.nombre} en ${p.zona} (${precio}). ¿Puedo agendar una visita?`)} className="btn-carbon px-4 py-2.5">WhatsApp</a>
          <a href={p.url} className="btn border-2 border-tinta/20 px-4 py-2 hover:border-tinta">Ficha completa</a>
        </div>
      </div>
    </li>
  );
}

function Encabezado() {
  const enlaces = [['#zibata', 'Zibatá'], ['#rentas', 'Rentas'], ['#vender', 'Vende tu casa'], ['#nosotros', 'Nosotros'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-30 bg-carbon text-white">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex shrink-0 items-center gap-2.5">
          <img src={`${base}logo-marca.png`} alt="" width={160} height={160} className="h-9 w-9" />
          <span className="font-display text-lg font-semibold tracking-[0.18em]">IG CAPITAL</span>
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-6 text-sm font-semibold">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-lima">{t}</a></li>)}</ul>
        </nav>
        <a href={wa('Hola, IG Capital. Quisiera más información sobre sus propiedades.')} className="btn-lima hidden px-4 py-2.5 sm:inline-flex">WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  const venta = propiedades.filter((p) => p.zona === 'Zibatá' && p.op !== 'renta').length;
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-carbon text-white">
      <Foto n="casa-jardin-zibata-queretaro" alt="Terraza techada con alberca de carril de Casa Jardín, en Zibatá" eager className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-carbon via-carbon/70 to-carbon/30" />
      <div className="contenedor flex min-h-[34rem] flex-col justify-end pb-12 pt-24 sm:min-h-[40rem]">
        <p className="eyebrow text-lima">{negocio.lema} · más de 13 años</p>
        <h1 className="mt-3 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">Casas en Zibatá, Querétaro, con quien mejor conoce sus privadas</h1>
        <p className="mt-5 max-w-xl text-lg text-white/85">{venta} casas en venta y preventa en Zibatá, y rentas en Altozano, Juriquilla y Tequisquiapan.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#zibata" className="btn-lima">Ver qué cabe en mi presupuesto</a>
          <a href={wa('Hola, IG Capital. Busco casa en Querétaro, ¿me pueden asesorar?')} className="btn-linea">Hablar con un asesor</a>
        </div>
      </div>
    </section>
  );
}

function Escalera() {
  const casas = useMemo(() => propiedades.filter((p) => p.zona === 'Zibatá' && p.op !== 'renta').sort((a, b) => a.precio - b.precio), []);
  const min = casas[0].precio, max = casas[casas.length - 1].precio;
  const [tope, setTope] = useState(5_500_000);
  const [rec, setRec] = useState<number | null>(null);
  const [sel, setSel] = useState<Propiedad | null>(null);
  const [todas, setTodas] = useState(false);
  const pasa = (p: Propiedad) => p.precio <= tope && (rec == null || (rec === 4 ? p.rec >= 4 : p.rec === rec));
  const caben = casas.filter(pasa);
  const elegida = sel && pasa(sel) ? sel : caben[caben.length - 1] ?? null;
  return (
    <section id="zibata" className="py-20 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">La escalera de Zibatá</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Sus {casas.length} casas en Zibatá, de la más accesible a la más grande</h2>
        <p className="mt-4 max-w-2xl text-gris">Cada barra es una casa publicada, del precio más bajo ({millones(min)}) al más alto ({millones(max)}). Mueve tu tope y se encienden las que caben.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_22rem]">
          <div className="min-w-0 rounded-3xl bg-carbon p-5 text-white sm:p-7">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <label className="block w-full min-w-0 sm:w-auto sm:flex-1">
                <span className="text-sm text-white/70">Tu tope</span>
                <span className="block font-display text-4xl font-semibold text-lima">{mxn(tope)}</span>
                <input type="range" min={3_000_000} max={13_500_000} step={100_000} value={tope} onChange={(e) => setTope(+e.target.value)} className="mt-3 w-full" aria-label="Presupuesto máximo en pesos" />
              </label>
              <div role="group" aria-label="Recámaras" className="flex gap-2">
                {[null, 2, 3, 4].map((r) => (
                  <button key={String(r)} type="button" aria-pressed={rec === r} onClick={() => setRec(r)} className={`rounded-full border px-3.5 py-2 text-sm font-semibold ${rec === r ? 'border-lima bg-lima text-carbon' : 'border-white/30'}`}>{r == null ? 'Todas' : r === 4 ? '4+ rec' : `${r} rec`}</button>
                ))}
              </div>
            </div>
            <div className="mt-8 flex h-56 items-end gap-[3px] sm:gap-1.5" role="list" aria-label="Casas ordenadas por precio">
              {casas.map((p) => {
                const ok = pasa(p);
                const h = 10 + ((p.precio - min) / (max - min)) * 90;
                return (
                  <button key={p.foto} type="button" role="listitem" onClick={() => setSel(p)} disabled={!ok}
                    aria-label={`${p.nombre}, ${mxn(p.precio)}, ${p.rec} recámaras${p.op === 'preventa' ? ', preventa' : ''}`}
                    aria-pressed={elegida?.foto === p.foto}
                    style={{ height: `${h}%` }}
                    className={`min-w-0 flex-1 rounded-t-sm transition-colors ${ok ? (elegida?.foto === p.foto ? 'bg-white' : 'bg-lima hover:bg-white') : 'bg-white/15'} ${p.op === 'preventa' && ok ? 'bg-[repeating-linear-gradient(135deg,var(--color-lima)_0_4px,#b9cf55_4px_8px)]' : ''}`} />
                );
              })}
            </div>
            <div className="mt-2 flex justify-between text-xs text-white/60"><span>{millones(min)}</span><span>Rayadas: preventa</span><span>{millones(max)}</span></div>
            <p aria-live="polite" className="mt-5 font-display text-2xl">{caben.length === 0 ? 'Ninguna casa cabe todavía: sube tu tope.' : `${caben.length} de ${casas.length} casas caben en tu presupuesto`}</p>
          </div>

          <div className="min-w-0">
            {elegida ? (
              <ul><Tarjeta p={elegida} /></ul>
            ) : (
              <div className="rounded-2xl bg-white p-6 ring-1 ring-tinta/10">
                <p className="font-display text-xl">¿Tu presupuesto es menor?</p>
                <p className="mt-2 text-gris">IG Capital también tiene casas en Zákia, Zarú y El Campanario, y terrenos. Pregunta por lo que no está publicado.</p>
                <a href={wa(`Hola, IG Capital. Busco casa en Querétaro con un presupuesto de hasta ${mxn(tope)}.`)} className="btn-carbon mt-5">Preguntar por WhatsApp</a>
              </div>
            )}
            {elegida && elegida.m2 && <p className="mt-3 text-sm text-gris">{mxn(elegida.precio / elegida.m2)} por m² de construcción (cálculo del estudio con su precio y m² publicados).</p>}
          </div>
        </div>

        {caben.length > 0 && (
          <>
            <h3 className="mt-16 text-2xl">Las que caben, de la más cara a la más accesible</h3>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[...caben].reverse().slice(0, todas ? undefined : 8).map((p) => <Tarjeta key={p.foto} p={p} />)}</ul>
            {caben.length > 8 && <button type="button" onClick={() => setTodas((t) => !t)} className="btn-carbon mt-6">{todas ? 'Ver menos' : `Ver las ${caben.length}`}</button>}
          </>
        )}
      </div>
    </section>
  );
}

function Rentas() {
  const rentas = propiedades.filter((p) => p.op === 'renta').sort((a, b) => b.precio - a.precio);
  const lugares = Array.from(new Set(rentas.map((p) => p.zona)));
  const [zona, setZona] = useState<string | null>(null);
  const [mas, setMas] = useState(false);
  const filtradas = zona ? rentas.filter((p) => p.zona === zona) : rentas;
  const lista = mas ? filtradas : filtradas.slice(0, 8);
  return (
    <section id="rentas" className="bg-cantera-2 py-20 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Casas en renta</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Para rentar en Altozano, Juriquilla, Zibatá y Tequisquiapan</h2>
        <div role="group" aria-label="Filtrar rentas por zona" className="mt-8 flex flex-wrap gap-2">
          <button type="button" aria-pressed={zona === null} onClick={() => setZona(null)} className="chip">Todas ({rentas.length})</button>
          {lugares.map((z) => <button key={z} type="button" aria-pressed={zona === z} onClick={() => setZona(z)} className="chip">{z} ({rentas.filter((p) => p.zona === z).length})</button>)}
        </div>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{lista.map((p) => <Tarjeta key={p.foto} p={p} />)}</ul>
        {filtradas.length > 8 && <button type="button" onClick={() => setMas((m) => !m)} className="btn-carbon mt-6">{mas ? 'Ver menos' : `Ver las ${filtradas.length}`}</button>}
      </div>
    </section>
  );
}

function Vender() {
  return (
    <section id="vender" className="bg-carbon py-20 text-white sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow text-lima">Para propietarios</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">¿Vendes o rentas tu casa en Querétaro?</h2>
          <p className="mt-4 text-white/80">IG Capital comercializa propiedades de terceros con este trabajo:</p>
          <ul className="mt-6 space-y-2">{servicios.map((s) => <li key={s} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lima" />{s}</li>)}</ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, IG Capital. Quiero vender o rentar mi propiedad en Querétaro.')} className="btn-lima">Quiero vender mi casa</a>
            <a href={negocio.vender} className="btn-linea">Formulario para propietarios</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl"><Foto n="casa-en-venta-en-zibata-casa-yavia" alt="Casa Yavia, residencia de dos niveles en Zibatá" className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-2xl"><Foto n="venta-casa-modelo-olivo" alt="Fachada iluminada de Casa Olivo al anochecer" className="absolute inset-0 h-full w-full object-cover" /></div>
        </div>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="eyebrow">Quiénes somos</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Especialistas en Zibatá desde hace más de 13 años</h2>
          {nosotros.map((t) => <p key={t.slice(0, 20)} className="mt-4 text-gris">{t}</p>)}
          <p className="mt-6 rounded-2xl bg-white p-5 font-semibold ring-1 ring-tinta/10">{premio}</p>
        </div>
        <div>
          <p className="eyebrow">Zonas donde trabaja</p>
          <ul className="mt-4 grid grid-cols-2 gap-3">{zonas.map((z) => <li key={z} className="rounded-2xl bg-cantera-2 px-4 py-5 font-display text-xl font-semibold">{z}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-cantera-2 py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Agenda una visita</h2>
          <dl className="mt-8 space-y-4">
            <div><dt className="text-sm font-bold text-gris">Teléfono y WhatsApp</dt><dd className="text-2xl font-display font-semibold"><a href={`tel:${negocio.telefonoLink}`} className="hover:text-musgo">{negocio.telefono}</a></dd></div>
            <div><dt className="text-sm font-bold text-gris">Oficina</dt><dd>{negocio.direccion}</dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, IG Capital. Quisiera agendar una visita.')} className="btn-carbon">WhatsApp</a>
            <a href={negocio.mapa} className="btn border-2 border-tinta/25">Buscar en Google Maps</a>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-gris">Síguelos: publican recorridos de cada casa</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {[['YouTube', negocio.youtube], ['Instagram', negocio.instagram], ['TikTok', negocio.tiktok], ['Facebook', negocio.facebook]].map(([t, h]) => <li key={t}><a href={h} className="chip inline-block">{t}</a></li>)}
          </ul>
          <img src={`${base}logo.png`} alt="Logotipo de IG Capital" width={471} height={987} loading="lazy" className="mt-8 h-40 w-auto" />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#zibata" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Ir a las casas</a>
      <Encabezado />
      <main>
        <Portada />
        <Escalera />
        <Rentas />
        <Vender />
        <Nosotros />
        <Contacto />
      </main>
      <footer className="bg-carbon pb-24 pt-10 text-sm text-white/70 md:pb-10">
        <div className="contenedor flex flex-col gap-2 sm:flex-row sm:justify-between">
          <p>© IG Capital · Bienes raíces en Querétaro</p>
          <p>Precios y disponibilidad sujetos a cambio; confirma con tu asesor.</p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-carbon text-sm font-semibold text-white md:hidden">
        <a href={`tel:${negocio.telefonoLink}`} className="py-3.5 text-center">Llamar</a>
        <a href={wa('Hola, IG Capital. Quisiera más información sobre sus propiedades.')} className="border-x border-white/10 bg-lima py-3.5 text-center text-carbon">WhatsApp</a>
        <a href={negocio.mapa} className="py-3.5 text-center">Mapa</a>
      </nav>
    </>
  );
}
