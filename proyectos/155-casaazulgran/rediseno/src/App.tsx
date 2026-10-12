import { useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, bienvenida, especialistas, propietarios } from './data/content';
import { cifras, grupos, fuera, terrenos, rentas } from './data/propiedades';
import type { Propiedad } from './data/propiedades';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
const pesos = (n: number) => '$' + Math.round(n).toLocaleString('es-MX');
const m2 = (n: number) => `${n.toLocaleString('es-MX', { maximumFractionDigits: 1 })} m²`;

function precio(p: Propiedad) {
  if (p.porM2) return `${pesos(p.precio)} por m²`;
  return `${pesos(p.precio)}${p.op === 'renta' ? ' al mes' : ''}`;
}

function nombre(p: Propiedad) {
  return p.nombre ? `${p.nombre}, ${p.tipo.toLowerCase()} en ${p.colonia}` : `${p.tipo} en ${p.colonia}`;
}

// Título corto para las casas sin nombre: "Casa remodelada" o "Casa de una planta" si la ficha lo dice.
function corto(p: Propiedad) {
  const t = p.titulo.toLowerCase();
  if (t.includes('remodelada') && t.includes('una planta')) return 'Casa remodelada de una planta';
  if (t.includes('remodelada')) return 'Casa remodelada';
  if (t.includes('colonial')) return 'Casa colonial';
  if (p.colonia === 'Mérida Centro') return 'Casa en el Centro';
  return `${p.tipo} en ${p.colonia}`;
}

function detalles(p: Propiedad) {
  const d: string[] = [];
  if (p.rec) d.push(`${p.rec} rec.`);
  if (p.banos) d.push(`${p.banos} ${p.banos === 1 ? 'baño' : 'baños'}`);
  if (p.constr) d.push(`${m2(p.constr)} de construcción`);
  if (p.terreno) d.push(`${m2(p.terreno)} de terreno`);
  return d.join(' · ');
}

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 900];
  return <img src={`${base}${n}.webp`} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

// Mosaico de pasta: el piso hidráulico de las casas antiguas de Mérida, dibujado en SVG. Cada parque tiene su dibujo.
const paletas: [string, string, string][] = [
  ['#F7F2E8', '#B0502B', '#2E6A57'],
  ['#F7F2E8', '#1F567F', '#E2B13C'],
  ['#F7F2E8', '#2E6A57', '#B0502B'],
  ['#F7F2E8', '#B0502B', '#1F567F'],
  ['#F7F2E8', '#6E5B25', '#B9A25F'],
  ['#F7F2E8', '#5E574D', '#B0502B'],
  ['#F7F2E8', '#E2B13C', '#2E6A57'],
];
function Pasta({ v, className = '' }: { v: number; className?: string }) {
  const [f, a, b] = paletas[v % paletas.length];
  const dibujos = [
    <g key="0"><circle cx="0" cy="0" r="20" fill={a} /><circle cx="64" cy="0" r="20" fill={a} /><circle cx="0" cy="64" r="20" fill={a} /><circle cx="64" cy="64" r="20" fill={a} /><circle cx="32" cy="32" r="12" fill={b} /></g>,
    <g key="1"><path d="M32 4 L60 32 L32 60 L4 32 Z" fill={a} /><path d="M32 18 L46 32 L32 46 L18 32 Z" fill={b} /></g>,
    <g key="2"><path d="M0 0h24L0 24Z M64 0v24L40 0Z M0 64V40l24 24Z M64 64H40l24-24Z" fill={a} /><circle cx="32" cy="32" r="16" fill="none" stroke={b} strokeWidth="6" /></g>,
    <g key="3"><ellipse cx="32" cy="16" rx="8" ry="14" fill={a} /><ellipse cx="32" cy="48" rx="8" ry="14" fill={a} /><ellipse cx="16" cy="32" rx="14" ry="8" fill={b} /><ellipse cx="48" cy="32" rx="14" ry="8" fill={b} /></g>,
    <g key="4"><path d="M0 0L32 32L0 64Z M64 0L32 32L64 64Z" fill={a} /><rect x="26" y="26" width="12" height="12" fill={b} transform="rotate(45 32 32)" /></g>,
    <g key="5"><path d="M24 0h16v24h24v16H40v24H24V40H0V24h24Z" fill={a} /><rect x="28" y="28" width="8" height="8" fill={b} /></g>,
    <g key="6"><rect x="8" y="8" width="48" height="48" fill="none" stroke={a} strokeWidth="6" /><circle cx="32" cy="32" r="10" fill={b} /><path d="M8 8L20 20 M56 8L44 20 M8 56L20 44 M56 56L44 44" stroke={b} strokeWidth="4" /></g>,
  ];
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" fill={f} />
      {dibujos[v % dibujos.length]}
    </svg>
  );
}

// Esquinas caminadas: un cuadro por esquina (medio cuadro para la media esquina).
function Esquinas({ n }: { n: number }) {
  const enteras = Math.floor(n);
  return (
    <span className="inline-flex items-center gap-[3px]" aria-hidden="true">
      {Array.from({ length: enteras }, (_, i) => <span key={i} className="h-3 w-3 rounded-[2px] bg-terracota" />)}
      {n % 1 ? <span className="h-3 w-1.5 rounded-[2px] bg-terracota" /> : null}
    </span>
  );
}

function Encabezado() {
  const enlaces = [['#centro', 'El Centro'], ['#fuera', 'Fuera del Centro'], ['#terrenos', 'Terrenos y rentas'], ['#nosotros', 'Nosotros'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-30 border-b border-tinta/10 bg-cal/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex shrink-0 items-center gap-3">
          <img src={`${base}logo.png`} alt="" width={229} height={240} className="h-10 w-auto" />
          <span className="font-display text-xl leading-none">Thó <span className="font-sans text-sm font-medium text-gris">Real Estate</span></span>
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-[0.95rem] font-medium">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-terracota">{t}</a></li>)}</ul>
        </nav>
        <a href={wa('Hola, Thó Real Estate. Quisiera información sobre sus propiedades en Mérida.')} className="btn-verde hidden px-5 py-2.5 sm:inline-flex">WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  const enCentro = grupos.filter((g) => g.id !== 'izamal').reduce((s, g) => s + g.casas.length, 0);
  const datos: [number, string][] = [[enCentro, 'casas en el Centro y Paseo de Montejo'], [fuera.length, 'en el norte, Conkal y la playa'], [grupos.find((g) => g.id === 'izamal')!.casas.length, 'en Izamal, cerca del Convento']];
  return (
    <section id="inicio" className="overflow-hidden">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
        <div className="min-w-0">
          <p className="font-medium text-oro-2">Inmobiliaria yucateca en Mérida</p>
          <h1 className="mt-4 text-[2.6rem] sm:text-6xl lg:text-[4.1rem]">Casas en el Centro de Mérida, a unas esquinas del parque</h1>
          <p className="mt-6 max-w-xl text-lg text-gris">Thó Real Estate vende y renta casas, departamentos y terrenos en el Centro de Mérida, en el norte de la ciudad, en Conkal y en Izamal. Te acompaña desde la primera visita hasta la firma.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#centro" className="btn-verde">Buscar por parque</a>
            <a href={wa('Hola, Thó Real Estate. Busco casa en Mérida y quisiera asesoría.')} className="btn-tinta">Escribir por WhatsApp</a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-tinta/15 pt-6">
            {datos.map(([v, t]) => <div key={t} className="flex flex-col"><dt className="text-sm leading-snug text-gris">{t}</dt><dd className="order-first font-display text-4xl text-terracota">{v}</dd></div>)}
          </dl>
        </div>
        <figure className="relative min-w-0">
          <Foto n="eb-wd4857" alt="Alberca larga bajo un árbol entre muros de piedra, en el patio de Casa Almita, en el Centro de Mérida" eager className="aspect-[4/5] w-full rounded-[2rem] object-cover sm:aspect-[5/4] lg:aspect-[4/5]" />
          <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-cal/95 px-4 py-3 text-sm sm:left-auto sm:max-w-xs">
            <span className="font-display text-base">Casa Almita</span> · entre San Juan, La Ermita y San Sebastián · {pesos(6800000)}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function TarjetaCentro({ p }: { p: Propiedad }) {
  return (
    <li className="grid min-w-0 grid-cols-[6.5rem_1fr] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-tinta/5 sm:grid-cols-[13rem_1fr]">
      <div className="relative min-h-full">
        <Foto n={p.foto} alt={`Foto de ${nombre(p)}`} className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="flex min-w-0 flex-col p-4 sm:p-5">
        <h4 className="font-display text-xl">{p.nombre ?? corto(p)}</h4>
        {p.cerca && (
          <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-terracota">
            {p.esq ? <Esquinas n={p.esq} /> : null}
            <span>{p.cerca}</span>
          </p>
        )}
        <p className="mt-3 font-display text-2xl">{precio(p)} <span className="font-sans text-sm text-gris">MXN{p.op === 'preventa' ? ' · preventa' : ''}</span></p>
        {detalles(p) && <p className="mt-1 text-sm text-gris">{detalles(p)}</p>}
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-4 text-sm font-semibold">
          <a href={wa(`Hola, Thó Real Estate. Me interesa: ${p.titulo} (${precio(p)} MXN). ${p.url}`)} className="text-verde underline-offset-4 hover:underline">Preguntar por WhatsApp</a>
          <a href={p.url} className="text-tinta underline-offset-4 hover:underline">Ver ficha</a>
        </div>
      </div>
    </li>
  );
}

function Centro() {
  const [sel, setSel] = useState(grupos[0].id);
  const g = grupos.find((x) => x.id === sel)!;
  const conEsquinas = g.casas.filter((c) => c.esq).sort((a, b) => (a.esq ?? 0) - (b.esq ?? 0));
  const resto = g.casas.filter((c) => !c.esq);
  return (
    <section id="centro" className="bg-cal-2/60 py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="max-w-3xl text-4xl sm:text-5xl">El Centro, parque por parque</h2>
        <p className="mt-4 max-w-2xl text-lg text-gris">En Mérida la distancia se cuenta en esquinas y cada barrio vive alrededor de su parque. Elige el parque que quieres tener cerca: te mostramos las casas que Thó tiene ahí, con las esquinas tal como las escribe en cada ficha.</p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7" role="group" aria-label="Parque o barrio">
          {grupos.map((x, i) => {
            const activo = x.id === sel;
            return (
              <button key={x.id} type="button" aria-pressed={activo} onClick={() => setSel(x.id)}
                className={`${i === grupos.length - 1 ? 'max-sm:col-span-2 ' : ''}group flex min-w-0 flex-col overflow-hidden rounded-2xl bg-white text-left ring-2 transition ${activo ? 'ring-terracota' : 'ring-transparent hover:ring-tinta/20'}`}>
                <span className="grid h-16 grid-cols-3 overflow-hidden">
                  {[0, 1, 2].map((k) => <Pasta key={k} v={i} className="h-full w-full" />)}
                </span>
                <span className="px-3 pb-3 pt-2.5">
                  <span className="block font-display text-[1.05rem] leading-tight">{x.corto}</span>
                  <span className="text-sm text-gris">{x.casas.length} {x.id === 'izamal' ? 'propiedades' : 'casas'}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-10" aria-live="polite">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-tinta/15 pb-4">
            <h3 className="text-3xl">{g.nombre}</h3>
            {conEsquinas.length > 0 && (
              <p className="flex items-center gap-2 text-sm text-gris"><span className="h-3 w-3 rounded-[2px] bg-terracota" /> = una esquina caminando</p>
            )}
          </div>
          <ul className="mt-6 grid gap-5 lg:grid-cols-2">
            {[...conEsquinas, ...resto].map((p) => <TarjetaCentro key={p.id} p={p} />)}
          </ul>
          {g.id === 'izamal' && <p className="mt-4 text-sm text-gris">Los tres terrenos de Izamal se cuentan desde el Convento de San Antonio de Padua, como lo escribe Thó en cada ficha.</p>}
        </div>
      </div>
    </section>
  );
}

function Tarjeta({ p, oculta }: { p: Propiedad; oculta: boolean }) {
  return (
    <li className={`${oculta ? 'max-sm:hidden ' : ''}flex min-w-0 flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-tinta/5`}>
      <div className="relative aspect-[4/3]">
        <Foto n={p.foto} alt={`Foto de ${nombre(p)}`} className="absolute inset-0 h-full w-full object-cover" />
        {p.op === 'preventa' && <span className="absolute left-3 top-3 rounded-full bg-anil px-3 py-1 text-xs font-semibold text-white">Preventa</span>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-gris">{p.municipio}</p>
        <h3 className="mt-1 text-xl">{p.nombre ?? `${p.tipo} en ${p.colonia}`}</h3>
        {p.nombre && <p className="text-sm text-gris">{p.tipo} en {p.colonia}</p>}
        <p className="mt-3 font-display text-2xl">{precio(p)}</p>
        {detalles(p) && <p className="mt-1 text-sm text-gris">{detalles(p)}</p>}
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-4 text-sm font-semibold">
          <a href={wa(`Hola, Thó Real Estate. Me interesa: ${p.titulo} (${precio(p)} MXN). ${p.url}`)} className="text-verde underline-offset-4 hover:underline">WhatsApp</a>
          <a href={p.url} className="underline-offset-4 hover:underline">Ver ficha</a>
        </div>
      </div>
    </li>
  );
}

function Fuera() {
  return (
    <section id="fuera" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="max-w-3xl text-4xl sm:text-5xl">Fuera del Centro: el norte, Conkal y la playa</h2>
        <p className="mt-4 max-w-2xl text-lg text-gris">Casas amplias en Temozón, Montecristo y Yucatán Country Club, un penthouse en Cholul y una casa a 100 metros de la playa de San Benito.</p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{fuera.map((p, i) => <Tarjeta key={p.id} p={p} oculta={i >= 4} />)}</ul>
        <a href={negocio.ventas} className="btn-tinta mt-8">Ver todo el catálogo en venta</a>
      </div>
    </section>
  );
}

function Tabla({ titulo, filas, id }: { titulo: string; filas: Propiedad[]; id?: string }) {
  return (
    <div id={id} className="min-w-0">
      <h3 className="text-2xl">{titulo}</h3>
      <ul className="mt-4 divide-y divide-tinta/10 rounded-2xl bg-white px-5 shadow-sm ring-1 ring-tinta/5">
        {filas.map((p) => (
          <li key={p.id} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4">
            <span className="min-w-0">
              <a href={p.url} className="font-semibold underline-offset-4 hover:underline">{p.tipo} en {p.colonia}</a>
              <span className="block text-sm text-gris">{p.municipio} · {detalles(p)}</span>
            </span>
            <span className="flex items-baseline gap-4">
              <span className="font-display text-lg">{precio(p)}</span>
              <a href={wa(`Hola, Thó Real Estate. Me interesa: ${p.titulo} (${precio(p)} MXN). ${p.url}`)} className="text-sm font-semibold text-verde hover:underline" aria-label={`WhatsApp sobre ${p.tipo.toLowerCase()} en ${p.colonia}`}>WhatsApp</a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TerrenosRentas() {
  return (
    <section id="terrenos" className="bg-cal-2/60 py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="max-w-3xl text-4xl sm:text-5xl">Terrenos para construir y casas en renta</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Tabla titulo="Terrenos en venta" filas={terrenos} />
          <Tabla titulo="En renta" filas={rentas} id="rentas" />
        </div>
        <a href={negocio.rentas} className="btn-tinta mt-8">Ver todas las rentas</a>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="py-16 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Foto n="eb-wm9130" alt="Sala con vigas de madera que da a un patio con alberca, en Casa Caracol, Barrio de Santa Ana" className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
        <div className="min-w-0">
          <img src={`${base}logo.png`} alt="Thó Real Estate" width={229} height={240} className="h-24 w-auto" loading="lazy" />
          <h2 className="mt-6 text-4xl sm:text-5xl">Una empresa yucateca</h2>
          <p className="mt-5 text-lg text-gris">{bienvenida}</p>
          <p className="mt-4 text-gris">{especialistas}</p>
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-tinta/5">
            <h3 className="text-2xl">¿Quieres vender o rentar tu casa?</h3>
            <p className="mt-2 text-gris">{propietarios}</p>
            <a href={wa('Hola, Thó Real Estate. Tengo una propiedad y quisiera venderla o rentarla con ustedes.')} className="btn-verde mt-5">Platicar de mi propiedad</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-verde-2 py-16 text-white sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl sm:text-5xl">Visítanos en la México Norte o escríbenos</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, Thó Real Estate. Quisiera información.')} className="btn bg-white text-verde-2 hover:bg-cal">WhatsApp</a>
            <a href={negocio.mapa} className="btn-linea">Cómo llegar</a>
          </div>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2"><dt className="text-sm text-white/75">Oficina</dt><dd className="mt-1 text-lg font-semibold">{negocio.direccion}</dd></div>
          <div><dt className="text-sm text-white/75">Teléfono y WhatsApp</dt><dd className="mt-1 text-lg font-semibold"><a href={`tel:${negocio.telefono.link}`} className="hover:underline">{negocio.telefono.t}</a></dd></div>
          <div className="min-w-0 sm:col-span-2"><dt className="text-sm text-white/75">Correo</dt><dd className="mt-1 break-words text-lg font-semibold"><a href={`mailto:${negocio.correo}`} className="hover:underline">{negocio.correo}</a></dd></div>
        </dl>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#centro" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <Centro />
        <Fuera />
        <TerrenosRentas />
        <Nosotros />
        <Contacto />
      </main>
      <footer className="bg-tinta pb-24 pt-10 text-sm text-white/75 md:pb-10">
        <div className="contenedor flex flex-wrap items-center justify-between gap-4">
          <p><span className="font-display text-base text-white">Thó Real Estate</span> · {negocio.direccion}</p>
          <p>Propiedades publicadas por Thó al 12 de octubre de 2026 · {cifras.propias} a su nombre</p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-tinta/10 bg-cal p-3 md:hidden">
        <a href={`tel:${negocio.telefono.link}`} className="btn border-2 border-tinta/70 px-2 py-3">Llamar</a>
        <a href={wa('Hola, Thó Real Estate. Quisiera información sobre sus propiedades en Mérida.')} className="btn-verde px-2 py-3">WhatsApp</a>
        <a href={negocio.mapa} className="btn border-2 border-tinta/70 px-2 py-3">Llegar</a>
      </nav>
    </>
  );
}
