import { useMemo, useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, quienes, servicio, wa } from './data/content';
import { propiedades } from './data/propiedades';
import type { Propiedad } from './data/propiedades';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const src = (n: string) => `${base}${n}.webp`;
const num = (n: number) => Math.round(n).toLocaleString('es-MX');
const ficha = (p: Propiedad) => negocio.sitio + p.u;
const lugar = (p: Propiedad) => (p.col ? `${p.col}, ${p.ciudad}` : p.ciudad);

function precioTxt(p: Propiedad) {
  const s = p.mon === 'USD' ? `US$${num(p.precio)}` : `$${num(p.precio)}`;
  return `${s}${p.porM2 ? ' por m²' : p.op === 'renta' ? ' al mes' : ''}`;
}
function m2(n: number) {
  return n >= 10000 ? `${(n / 10000).toLocaleString('es-MX', { maximumFractionDigits: 1 })} ha` : `${n.toLocaleString('es-MX')} m²`;
}
function detalles(p: Propiedad) {
  const d: string[] = [];
  if (p.rec) d.push(`${p.rec} rec.`);
  if (p.banos) d.push(`${p.banos}${p.medios ? '½' : ''} ${p.banos === 1 && !p.medios ? 'baño' : 'baños'}`);
  if (p.cons) d.push(`${m2(p.cons)} const.`);
  else if (p.ter) d.push(`${m2(p.ter)} terreno`);
  return d.join(' · ');
}

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 900];
  return <img src={src(n)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

function Marca({ claro = false }: { claro?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <img src={`${base}logo-casa.png`} alt="" width={120} height={75} className={`h-8 w-auto ${claro ? 'rounded bg-white p-1' : ''}`} />
      <span className={`font-display text-xl font-bold leading-none tracking-tight ${claro ? 'text-white' : 'text-carbon'}`}>
        CARSA<span className={`block text-[0.58rem] font-semibold tracking-[0.28em] ${claro ? 'text-white/80' : 'text-azul'}`}>INMOBILIARIA</span>
      </span>
    </span>
  );
}

// ---------- Datos derivados ----------
const comparables = propiedades
  .filter((p) => (p.op === 'venta' || p.op === 'preventa') && p.mon === 'MXN' && !p.porM2 && (p.tipo === 'Casa' || p.tipo === 'Departamento') && p.cons && p.ciudad === 'Mexicali')
  .sort((a, b) => a.precio - b.precio);
const casasVenta = propiedades.filter((p) => p.tipo === 'Casa' && p.op !== 'renta').length;
const deptos = propiedades.filter((p) => p.tipo === 'Departamento').length;
const rentas = propiedades.filter((p) => p.op === 'renta').length;
const otros = propiedades.filter((p) => !['Casa', 'Departamento'].includes(p.tipo) && p.op !== 'renta').length;

function Encabezado() {
  const enlaces = [['#lado-a-lado', 'Lado a lado'], ['#propiedades', 'Propiedades'], ['#nosotros', 'Nosotros'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-30 border-b border-carbon/10 bg-arena/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="CARSA Inmobiliaria, inicio"><Marca /></a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-7 text-sm font-semibold">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-azul">{t}</a></li>)}</ul>
        </nav>
        <a href={wa('Hola, CARSA. Vi su sitio y quisiera información sobre sus propiedades en Mexicali.')} className="btn-azul hidden px-4 py-2.5 sm:inline-flex">WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  const datos: [number, string][] = [[casasVenta, 'casas en venta'], [deptos, 'departamentos'], [otros, 'terrenos, locales y bodegas'], [rentas, 'en renta']];
  return (
    <section id="inicio" className="overflow-hidden">
      <div className="contenedor grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:py-20">
        <div>
          <p className="font-display text-sm font-semibold text-teja">Centro Cívico, Mexicali, B.C.</p>
          <h1 className="mt-3 text-[2.6rem] text-carbon sm:text-6xl">Tu casa en Mexicali, de privada en privada</h1>
          <p className="mt-5 max-w-xl text-lg text-gris">Casas nuevas en privadas, departamentos, terrenos y locales en venta y en renta. {servicio.split('. ')[0]}.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#lado-a-lado" className="btn-teja">Comparar dos casas</a>
            <a href="#propiedades" className="btn border-2 border-azul text-azul hover:bg-azul hover:text-white">Ver propiedades</a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-carbon/15 pt-6 sm:grid-cols-4">
            {datos.map(([v, t]) => <div key={t} className="flex flex-col"><dt className="text-sm leading-snug text-gris">{t}</dt><dd className="order-first font-display text-4xl font-bold text-azul">{v}</dd></div>)}
          </dl>
        </div>
        <div className="relative pb-10 sm:pb-14">
          <Foto n="modelo-santiago-paseo-de-santiago" eager alt="Casa blanca de dos plantas con balcón de cristal y jardín al frente, modelo Santiago en Paseo de Santiago, Mexicali" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl" />
          <Foto n="paseo-de-santiago-comedor" alt="Comedor y sala decorados en una casa de Paseo de Santiago" className="absolute -bottom-0 left-4 aspect-square w-[34%] rounded-xl border-4 border-arena object-cover shadow-lg sm:left-8" />
          <Foto n="paseo-de-santiago-escalera" alt="Escalera con barandal de acero y piso claro en una casa de Paseo de Santiago" className="absolute -bottom-0 left-[40%] aspect-square w-[26%] rounded-xl border-4 border-arena object-cover shadow-lg sm:left-[42%]" />
        </div>
      </div>
    </section>
  );
}

// ---------- Elemento memorable: dos casas lado a lado ----------
type Fila = { t: string; v: (p: Propiedad) => number | null; f: (n: number) => string; menor?: boolean; nota?: string };
const filas: Fila[] = [
  { t: 'Precio', v: (p) => p.precio, f: (n) => `$${num(n)}`, menor: true },
  { t: 'Construcción', v: (p) => p.cons, f: (n) => `${n.toLocaleString('es-MX')} m²` },
  { t: 'Terreno', v: (p) => p.ter, f: (n) => `${n.toLocaleString('es-MX')} m²` },
  { t: 'Recámaras', v: (p) => p.rec, f: (n) => String(n) },
  { t: 'Baños', v: (p) => (p.banos == null ? null : p.banos + (p.medios ? 0.5 : 0)), f: (n) => (Number.isInteger(n) ? String(n) : `${Math.floor(n)} y medio`) },
  { t: 'Estacionamientos', v: (p) => p.est, f: (n) => String(n) },
  { t: 'Precio por m² construido', v: (p) => (p.cons ? p.precio / p.cons : null), f: (n) => `$${num(n)}`, menor: true, nota: 'cálculo del estudio' },
];

function Selector({ valor, otro, onChange, etiqueta }: { valor: Propiedad; otro: Propiedad; onChange: (p: Propiedad) => void; etiqueta: string }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-gris">{etiqueta}</span>
      <select value={valor.u} onChange={(e) => onChange(comparables.find((p) => p.u === e.target.value)!)} className="mt-1 w-full rounded-lg border border-carbon/20 bg-white px-3 py-2.5 text-sm font-semibold">
        {comparables.map((p) => <option key={p.u} value={p.u} disabled={p.u === otro.u}>{p.n} · ${(p.precio / 1e6).toLocaleString('es-MX', { maximumFractionDigits: 2 })} M</option>)}
      </select>
    </label>
  );
}

function Lado({ p }: { p: Propiedad }) {
  return (
    <div className="min-w-0">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-azul-2">
        {p.foto ? <Foto n={p.foto} alt={`${p.tipo} en ${lugar(p)}: ${p.n}`} className="absolute inset-0 h-full w-full object-cover" /> : <SinFoto />}
        {p.op === 'preventa' && <span className="absolute left-2 top-2 rounded-md bg-white px-2 py-1 text-xs font-bold text-teja">Preventa</span>}
      </div>
      <p className="mt-3 text-sm text-gris">{p.tipo} en {lugar(p)}</p>
      <p className="font-display text-base font-bold leading-snug sm:text-lg">{p.n}</p>
      <a href={ficha(p)} className="mt-1 inline-block text-sm font-bold text-azul hover:underline">Ver ficha {p.id}</a>
    </div>
  );
}

function LadoALado() {
  const inicialA = comparables.find((p) => p.id === 'EB-OH9622') ?? comparables[0];
  const inicialB = comparables.find((p) => p.id === 'EB-TV5039') ?? comparables[1];
  const [a, setA] = useState(inicialA);
  const [b, setB] = useState(inicialB);
  const parecida = () => {
    const resto = comparables.filter((p) => p.u !== a.u && p.u !== b.u);
    const cerca = [...resto].sort((x, y) => Math.abs(x.precio - a.precio) - Math.abs(y.precio - a.precio)).slice(0, 3);
    setB(cerca[Math.floor(Math.random() * cerca.length)]);
  };
  const ganaA = { n: 0 }, ganaB = { n: 0 };
  const mensaje = `Hola, CARSA. Estoy comparando dos propiedades y quisiera verlas:\n1) ${a.t} (${a.id}, $${num(a.precio)}) ${ficha(a)}\n2) ${b.t} (${b.id}, $${num(b.precio)}) ${ficha(b)}`;

  return (
    <section id="lado-a-lado" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl">Dos casas, lado a lado</h2>
          <p className="mt-4 text-lg text-gris">Entre tantas privadas parecidas, la duda casi siempre es entre dos. Elige las que te gustan de las {comparables.length} casas y departamentos que CARSA vende en Mexicali y mira, renglón por renglón, cuál da más.</p>
        </div>

        <div className="mt-10 rounded-2xl bg-arena p-4 ring-1 ring-carbon/10 sm:p-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-8">
            <Selector valor={a} otro={b} onChange={setA} etiqueta="Casa A" />
            <Selector valor={b} otro={a} onChange={setB} etiqueta="Casa B" />
            <Lado p={a} />
            <Lado p={b} />
          </div>

          <table className="mt-8 w-full table-fixed border-collapse text-sm sm:text-base">
            <caption className="sr-only">Comparación de {a.n} contra {b.n}</caption>
            <thead className="sr-only"><tr><th scope="col">Casa A</th><th scope="col">Dato</th><th scope="col">Casa B</th></tr></thead>
            <tbody aria-live="polite">
              {filas.map((f) => {
                const va = f.v(a), vb = f.v(b);
                const hay = va != null && vb != null && va !== vb;
                const gA = hay && (f.menor ? va! < vb! : va! > vb!);
                const gB = hay && !gA;
                if (gA) ganaA.n++; if (gB) ganaB.n++;
                const max = Math.max(va ?? 0, vb ?? 0) || 1;
                const barra = (v: number | null, gana: boolean, lado: 'a' | 'b') => (
                  <div className={`mt-1.5 flex h-2 overflow-hidden rounded-full bg-carbon/10 ${lado === 'a' ? 'justify-end' : ''}`}>
                    <div className={`h-full rounded-full ${gana ? 'bg-teja' : 'bg-azul/45'}`} style={{ width: `${v == null ? 0 : (v / max) * 100}%` }} />
                  </div>
                );
                return (
                  <tr key={f.t} className="border-t border-carbon/10">
                    <td className="py-3 pr-2 text-right align-top sm:pr-4">
                      <span className={`font-display font-bold ${gA ? 'text-teja' : ''}`}>{va == null ? 'sin dato' : f.f(va)}</span>
                      {barra(va, gA, 'a')}
                    </td>
                    <th scope="row" className="w-[6.5rem] px-1 py-3 text-center align-top text-xs font-semibold text-gris sm:w-48 sm:text-sm">
                      {f.t}{f.nota && <span className="block text-[0.7rem] font-normal">({f.nota})</span>}
                    </th>
                    <td className="py-3 pl-2 align-top sm:pl-4">
                      <span className={`font-display font-bold ${gB ? 'text-teja' : ''}`}>{vb == null ? 'sin dato' : f.f(vb)}</span>
                      {barra(vb, gB, 'b')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="mt-6 flex flex-col gap-4 border-t border-carbon/15 pt-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-display text-lg font-bold">
              {ganaA.n === ganaB.n ? 'Van empatadas.' : `${ganaA.n > ganaB.n ? 'La casa A' : 'La casa B'} gana en ${Math.max(ganaA.n, ganaB.n)} de ${ganaA.n + ganaB.n} renglones.`}
              <span className="block text-sm font-normal text-gris">En color teja, la que da más (o cuesta menos) en cada dato publicado.</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={parecida} className="btn border-2 border-azul text-azul hover:bg-azul hover:text-white">Otra de precio parecido a la A</button>
              <a href={wa(mensaje)} className="btn-teja">Pedir cita para ver las dos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Catálogo ----------
const grupos = [
  { k: 'todas', t: 'Todas', f: () => true },
  { k: 'casas', t: 'Casas', f: (p: Propiedad) => p.tipo === 'Casa' && p.op !== 'renta' },
  { k: 'deptos', t: 'Departamentos', f: (p: Propiedad) => p.tipo === 'Departamento' },
  { k: 'otros', t: 'Terrenos y comercial', f: (p: Propiedad) => !['Casa', 'Departamento'].includes(p.tipo) && p.op !== 'renta' },
  { k: 'renta', t: 'En renta', f: (p: Propiedad) => p.op === 'renta' },
] as const;

function SinFoto() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-azul-2 text-white">
      <img src={`${base}logo-casa.png`} alt="" width={120} height={75} className="w-16 rounded bg-white p-1.5" loading="lazy" />
      <span className="text-sm text-white/80">Fotos en su ficha</span>
    </div>
  );
}

function Tarjeta({ p, oculta = false }: { p: Propiedad; oculta?: boolean }) {
  const etiqueta = p.op === 'renta' ? 'En renta' : p.op === 'preventa' ? 'Preventa' : 'En venta';
  return (
    <li className={`${oculta ? 'max-sm:hidden ' : ''}flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-carbon/10`}>
      <div className="relative aspect-[4/3]">
        {p.foto ? <Foto n={p.foto} alt={`${p.tipo} en ${lugar(p)}: ${p.n}`} className="absolute inset-0 h-full w-full object-cover" /> : <SinFoto />}
        <span className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-xs font-bold ${p.op === 'renta' ? 'bg-teja text-white' : p.op === 'preventa' ? 'bg-white text-teja' : 'bg-azul text-white'}`}>{etiqueta}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-gris">{p.tipo} en {lugar(p)}</p>
        <h3 className="mt-1 text-lg leading-snug">{p.n}</h3>
        <p className="mt-2 font-display text-2xl font-bold text-azul">{precioTxt(p)}</p>
        {detalles(p) && <p className="mt-1 text-sm text-gris">{detalles(p)}</p>}
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-4 text-sm font-bold">
          <a href={wa(`Hola, CARSA. Me interesa: ${p.t} (${p.id}, ${precioTxt(p)}). ${ficha(p)}`)} className="text-teja hover:underline">WhatsApp</a>
          <a href={ficha(p)} className="text-azul hover:underline">Ver ficha</a>
        </div>
      </div>
    </li>
  );
}

function Propiedades() {
  const [g, setG] = useState<(typeof grupos)[number]['k']>('todas');
  const [todas, setTodas] = useState(false);
  const lista = useMemo(() => {
    const f = grupos.find((x) => x.k === g)!.f;
    return propiedades.filter(f).sort((x, y) => Number(!x.foto) - Number(!y.foto));
  }, [g]);
  const visibles = todas ? lista : lista.slice(0, 9);
  return (
    <section id="propiedades" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="max-w-3xl text-4xl sm:text-5xl">Las {propiedades.length} propiedades que lleva CARSA</h2>
        <p className="mt-4 max-w-2xl text-lg text-gris">Solo las que publica CARSA como asesor: casi todas en Mexicali y dos en Playas de Rosarito. Precio y medidas tal como aparecen en cada ficha.</p>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Tipo de propiedad">
          {grupos.map((x) => <button key={x.k} type="button" className="chip" aria-pressed={g === x.k} onClick={() => { setG(x.k); setTodas(false); }}>{x.t} <span className="opacity-70">({propiedades.filter(x.f).length})</span></button>)}
        </div>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visibles.map((p, i) => <Tarjeta key={p.u} p={p} oculta={!todas && i >= 6} />)}</ul>
        {(lista.length > visibles.length || (!todas && lista.length > 6)) && <button type="button" onClick={() => setTodas(true)} className={`btn-azul mt-8 ${lista.length <= 9 ? 'sm:hidden' : ''}`}>Ver las {lista.length}</button>}
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="bg-arena-2/70 py-16 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="grid grid-cols-2 gap-3">
          <Foto n="aurea-interior" alt="Estancia con plafón iluminado y piso de porcelanato en Áurea Residencial" className="col-span-2 aspect-[16/9] w-full rounded-xl object-cover" />
          <Foto n="villafontana-alberca" alt="Alberca con velaria y muro de piedra en una casa de Villafontana" className="aspect-square w-full rounded-xl object-cover" />
          <div className="flex aspect-square items-center justify-center rounded-xl bg-white p-6"><img src={`${base}logo.png`} alt="Logotipo de CARSA Inmobiliaria" width={360} height={375} loading="lazy" className="h-full w-auto object-contain" /></div>
        </div>
        <div>
          <h2 className="text-4xl sm:text-5xl">Compra, venta, renta y tasaciones en Mexicali</h2>
          <p className="mt-5 text-lg">{quienes}</p>
          <p className="mt-4 text-gris">{servicio}</p>
          <p className="mt-6 font-semibold text-azul">Oficina: {negocio.direccion}</p>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-azul py-16 text-white sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl sm:text-5xl">Visítanos en el Centro Cívico o escríbenos</h2>
          <p className="mt-4 max-w-md text-white/85">Dinos qué buscas o qué propiedad quieres vender o rentar.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, CARSA. Quisiera información.')} className="btn-teja">WhatsApp</a>
            <a href={negocio.mapa} className="btn-linea">Cómo llegar</a>
          </div>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2"><dt className="text-sm text-white/75">Oficina</dt><dd className="mt-1 text-lg font-semibold">{negocio.direccion}</dd></div>
          <div><dt className="text-sm text-white/75">Teléfono</dt><dd className="mt-1 text-lg font-semibold"><a href={`tel:${negocio.telLink}`} className="hover:underline">{negocio.telefono}</a></dd></div>
          <div><dt className="text-sm text-white/75">Correo</dt><dd className="mt-1 break-words text-lg font-semibold"><a href={`mailto:${negocio.correo}`} className="hover:underline">{negocio.correo}</a></dd></div>
        </dl>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#lado-a-lado" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <LadoALado />
        <Propiedades />
        <Nosotros />
        <Contacto />
      </main>
      <footer className="bg-azul-2 pb-24 pt-10 text-sm text-white/80 md:pb-10">
        <div className="contenedor flex flex-wrap items-center justify-between gap-4">
          <Marca claro />
          <p>{negocio.direccion} · <a href={`tel:${negocio.telLink}`} className="hover:underline">{negocio.telefono}</a></p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-carbon/10 bg-white p-3 md:hidden">
        <a href={`tel:${negocio.telLink}`} className="btn border-2 border-azul py-3 text-azul">Llamar</a>
        <a href={wa('Hola, CARSA. Quisiera información sobre sus propiedades en Mexicali.')} className="btn-teja py-3">WhatsApp</a>
      </nav>
    </>
  );
}
