import { useMemo, useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, zonasNosotros, nosotros, proceso, sellos, referencias, preguntas } from './data/content';
import { corredores, totales, propiedades } from './data/propiedades';
import type { Propiedad } from './data/propiedades';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const src = (n: string) => `${base}${n}.webp`;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
const pesos = (n: number) => '$' + Math.round(n).toLocaleString('es-MX');
const millones = (n: number) => `$${(n / 1e6).toLocaleString('es-MX', { maximumFractionDigits: 1 })} millones`;
const portada = 'casa-en-venta-en-san-angel-nueva-en-priv';

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 800];
  return <img src={src(n)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

const titulo = (p: Propiedad) => `${p.tipo} en ${p.colonia}`;
function detalles(p: Propiedad) {
  const d: string[] = [];
  if (p.m2) d.push(`${p.m2.toLocaleString('es-MX')} m²`);
  if (p.rec) d.push(`${p.rec} rec.`);
  if (p.banos) d.push(`${p.banos} ${p.banos === 1 ? 'baño' : 'baños'}`);
  return d.join(' · ');
}

function Tarjeta({ p, oculta }: { p: Propiedad; oculta: boolean }) {
  const precio = `${pesos(p.precio)} ${p.moneda}${p.op === 'renta' ? ' al mes' : ''}`;
  return (
    <li className={`${oculta ? 'max-sm:hidden ' : ''}group flex flex-col bg-white`}>
      <a href={p.url} className="relative block aspect-[16/11] overflow-hidden">
        <Foto n={p.foto} alt={`${titulo(p)}: foto principal de la propiedad`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      </a>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-piedra">{p.corredor}</p>
        <h3 className="mt-2 text-2xl">{titulo(p)}</h3>
        <p className="mt-1 text-sm text-piedra">{detalles(p)}</p>
        <p className="mt-4 font-display text-2xl">{precio}</p>
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-4 text-sm font-semibold">
          <a href={wa(`Hola, Great Homes. Me interesa: ${p.nombre} (${precio}). ${p.url}`)} className="text-rojo underline-offset-4 hover:underline">Preguntar por WhatsApp</a>
          <a href={p.url} className="underline-offset-4 hover:underline">Ficha completa</a>
        </div>
      </div>
    </li>
  );
}

function Encabezado() {
  const enlaces = [['#propiedades', 'Propiedades'], ['#valuacion', 'Cuánto vale tu casa'], ['#proceso', 'Vender o rentar'], ['#preguntas', 'Preguntas'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-30 border-b border-tinta/10 bg-crema/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img src={`${base}logo.png`} alt="Great Homes RS" width={300} height={252} className="h-11 w-auto" /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-sm font-semibold">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-rojo">{t}</a></li>)}</ul>
        </nav>
        <a href={`tel:${negocio.telefonos[0].link}`} className="hidden text-sm font-semibold sm:block">{negocio.telefonos[0].t}</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="contenedor grid items-center gap-10 py-12 lg:grid-cols-[1fr_1.15fr] lg:py-20">
      <div>
        <p className="eyebrow">Más de 30 años · Ciudad de México</p>
        <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl">Propiedades <em className="text-rojo">extraordinarias</em> en las mejores zonas</h1>
        <p className="mt-6 max-w-lg text-lg text-piedra">San Ángel, Lomas, Polanco y Santa Fe con una firma que conoce cada calle: valuación certificada, presentación editorial y acompañamiento legal, fiscal y financiero de principio a fin.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#propiedades" className="btn-tinta">Ver propiedades</a>
          <a href="#valuacion" className="btn-linea">¿Cuánto vale mi casa?</a>
        </div>
        <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-tinta/15 pt-6">
          {[[totales.venta, 'en venta'], [totales.renta, 'en renta'], ['30+', 'años']].map(([v, t]) => (
            <div key={t} className="flex flex-col"><dt className="text-sm text-piedra">{t}</dt><dd className="order-first font-display text-4xl">{v}</dd></div>
          ))}
        </dl>
      </div>
      <figure className="relative">
        <Foto n={portada} alt="Casa contemporánea de dos niveles con amplio jardín y árboles maduros, en una privada de San Ángel" eager className="aspect-[4/3] w-full object-cover lg:aspect-[5/6]" />
        <figcaption className="absolute bottom-0 left-0 bg-crema px-4 py-2 text-sm text-piedra">Casa nueva en privada, San Ángel</figcaption>
      </figure>
    </section>
  );
}

type Op = 'venta' | 'renta';
const rango = (p: Propiedad) => (/^(Casa|Departamento)/.test(p.tipo) ? 0 : 1);

function Propiedades() {
  const [op, setOp] = useState<Op>('venta');
  const [zona, setZona] = useState('todas');
  const [todas, setTodas] = useState(false);
  const zonas = corredores.filter((c) => c[op] > 0);
  const lista = useMemo(() => propiedades.filter((p) => p.op === op && (zona === 'todas' || p.corredor === zona))
    // Primero casas y departamentos, de mayor a menor precio (pesos antes que dólares).
    .sort((a, b) => rango(a) - rango(b) || (a.moneda === b.moneda ? b.precio - a.precio : a.moneda === 'MXN' ? -1 : 1)), [op, zona]);
  const visibles = todas ? lista : lista.slice(0, 6);
  const elegir = (o: Op) => { setOp(o); setZona('todas'); setTodas(false); };

  return (
    <section id="propiedades" className="border-t border-tinta/10 py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-14">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow">Índice por zona</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Lo que tenemos hoy, colonia por colonia</h2>
          <div className="mt-6 flex gap-2" role="group" aria-label="Operación">
            <button type="button" className="chip" aria-pressed={op === 'venta'} onClick={() => elegir('venta')}>En venta</button>
            <button type="button" className="chip" aria-pressed={op === 'renta'} onClick={() => elegir('renta')}>En renta</button>
          </div>
          <ul className="mt-6 border-t border-tinta/15" aria-label="Zonas">
            {[{ nombre: 'todas', n: totales[op] }, ...zonas.map((c) => ({ nombre: c.nombre, n: c[op] }))].map((z) => (
              <li key={z.nombre} className="border-b border-tinta/15">
                <button type="button" aria-pressed={zona === z.nombre} onClick={() => { setZona(z.nombre); setTodas(false); }}
                  className={`flex w-full items-baseline gap-2 py-3 text-left transition-colors ${zona === z.nombre ? 'text-rojo' : 'hover:text-rojo'}`}>
                  <span className="font-display text-xl">{z.nombre === 'todas' ? 'Todas las zonas' : z.nombre}</span>
                  <span aria-hidden className="mb-1.5 flex-1 border-b border-dotted border-current opacity-40" />
                  <span className="font-display text-xl tabular-nums">{z.n}</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-piedra">Cifras de su catálogo del 2026-10-11. Abajo, una selección con fotos.</p>
        </div>

        <div className="min-w-0">
          <ul className="grid gap-6 sm:grid-cols-2">
            {visibles.map((p, i) => <Tarjeta key={p.url} p={p} oculta={!todas && i >= 3} />)}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            {lista.length > 3 && (
              <button type="button" onClick={() => setTodas(!todas)} className={`btn-tinta ${lista.length <= 6 ? 'sm:hidden' : ''}`}>{todas ? 'Ver menos' : `Ver las ${lista.length} de la selección`}</button>
            )}
            <a href={op === 'venta' ? negocio.venta : negocio.renta} className="btn-linea">Catálogo completo en {op}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Valuacion() {
  const [id, setId] = useState(referencias[3].id);
  const [m2, setM2] = useState(400);
  const r = referencias.find((x) => x.id === id)!;
  const [min, max] = r.m2;
  const rango = max ? `${millones(min * m2)} a ${millones(max * m2)}` : `desde ${millones(min * m2)}`;
  const barra = (v: number) => `${Math.min(100, (v / (150000 * 1500)) * 100)}%`;
  const texto = `Hola, Great Homes. Quisiera una valuación sin costo de mi propiedad: ${r.tipo.toLowerCase()} en ${r.zona}, de unos ${m2} m².`;

  return (
    <section id="valuacion" className="bg-noche py-16 text-white sm:py-24">
      <div className="contenedor">
        <p className="eyebrow text-[#F07A8E]">Para propietarios</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">¿Cuánto vale tu casa? Empieza con la referencia que publica Great Homes</h2>
        <p className="mt-4 max-w-2xl text-white/75">Elige zona y tipo, mueve los metros cuadrados y verás el rango con sus precios por m² de referencia 2025-2026. El valor real lo da su valuación técnica, sin costo.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,24rem)_1fr]">
          <div>
            <fieldset>
              <legend className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Zona y tipo</legend>
              <div className="mt-3 grid gap-2">
                {referencias.map((x) => (
                  <button key={x.id} type="button" aria-pressed={x.id === id} onClick={() => setId(x.id)}
                    className={`border px-4 py-3 text-left transition-colors ${x.id === id ? 'border-white bg-white text-tinta' : 'border-white/25 hover:border-white/60'}`}>
                    <span className="block font-display text-lg leading-tight">{x.zona}</span>
                    <span className={`text-sm ${x.id === id ? 'text-piedra' : 'text-white/70'}`}>{x.tipo}</span>
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="mt-6 block">
              <span className="flex justify-between text-sm font-semibold uppercase tracking-[0.16em] text-white/70"><span>Metros cuadrados</span><span className="text-white">{m2.toLocaleString('es-MX')} m²</span></span>
              <input type="range" min={80} max={1500} step={10} value={m2} onChange={(e) => setM2(Number(e.target.value))} className="mt-3 w-full" />
            </label>
          </div>

          <div className="flex flex-col justify-between border border-white/20 p-6 sm:p-10" aria-live="polite">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-white/70">{r.tipo} · {r.zona} · {m2.toLocaleString('es-MX')} m²</p>
              <p className="mt-4 font-display text-4xl leading-tight sm:text-6xl">{rango}</p>
              <p className="mt-3 text-white/75">{pesos(min)}{max ? ` a ${pesos(max)}` : ' o más'} por m²</p>
              <div className="relative mt-8 h-2 bg-white/15" aria-hidden>
                <span className="absolute inset-y-0 bg-[#F07A8E]" style={{ left: barra(min * m2), width: max ? `calc(${barra(max * m2)} - ${barra(min * m2)})` : '4px' }} />
              </div>
              <p className="mt-8 border-t border-white/15 pt-5 text-white/85"><span className="font-semibold text-white">Si prefieres rentar:</span> {r.renta}</p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={wa(texto)} className="btn-rojo">Pedir valuación sin costo</a>
              <p className="max-w-xs text-xs text-white/60">Rangos orientativos de sus preguntas frecuentes; el precio final depende de la calle, el estado y las amenidades.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Proceso() {
  return (
    <section id="proceso" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Vende o renta tu propiedad</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Del avalúo a la escritura, sin dejar ningún frente descubierto</h2>
        <ol className="mt-10 grid gap-px bg-tinta/15 sm:grid-cols-2 lg:grid-cols-5">
          {proceso.map((p, i) => (
            <li key={p.t} className="bg-crema p-6 sm:pr-8">
              <span className="font-display text-4xl text-rojo">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-2xl">{p.t}</h3>
              <p className="mt-2 text-sm text-piedra">{p.d}</p>
            </li>
          ))}
        </ol>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold uppercase tracking-[0.14em]">{sellos.map((s) => <li key={s}>— {s}</li>)}</ul>
      </div>
    </section>
  );
}

function Nosotros() {
  const otra = propiedades.find((p) => p.foto.startsWith('casa-en-venta-en-san-angel-c6862d6'));
  return (
    <section id="nosotros" className="bg-crema-2/60 py-16 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {otra && <Foto n={otra.foto} alt="Jardín con bugambilias y fachada de una casa en San Ángel" className="aspect-[4/3] w-full object-cover" />}
        <div>
          <p className="eyebrow">Nosotros</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Especialistas en el patrimonio inmobiliario de lujo de la ciudad</h2>
          <div className="mt-6 space-y-4 text-lg text-piedra">{nosotros.map((t) => <p key={t}>{t}</p>)}</div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em]">Donde operamos</p>
          <p className="mt-2 font-display text-xl italic leading-relaxed">{zonasNosotros.join(' · ')}</p>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr]">
        <div>
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Lo que suelen preguntar los propietarios</h2>
        </div>
        <div className="border-t border-tinta/15">
          {preguntas.map((q) => (
            <details key={q.p} className="group border-b border-tinta/15 py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-xl sm:text-2xl">
                {q.p}<span aria-hidden className="mt-1 text-rojo transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-2xl text-piedra">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-rojo py-16 text-white sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Contacto</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Atención personal y directa, con discreción absoluta</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, Great Homes. Quisiera información sobre sus propiedades.')} className="btn bg-white text-rojo hover:bg-crema">WhatsApp</a>
            <a href={`tel:${negocio.telefonos[0].link}`} className="btn border border-white hover:bg-white/10">Llamar</a>
          </div>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          <div><dt className="text-sm text-white/75">Teléfonos</dt><dd className="mt-1 space-y-1 text-lg font-semibold">{negocio.telefonos.map((t) => <a key={t.t} href={`tel:${t.link}`} className="block hover:underline">{t.t}</a>)}</dd></div>
          <div><dt className="text-sm text-white/75">Correo</dt><dd className="mt-1 text-lg font-semibold"><a href={`mailto:${negocio.correo}`} className="hover:underline">{negocio.correo}</a></dd></div>
          <div className="sm:col-span-2"><dt className="text-sm text-white/75">Oficina</dt><dd className="mt-1 text-lg font-semibold"><a href={negocio.mapa} className="hover:underline">{negocio.direccion}</a></dd></div>
          <div className="sm:col-span-2"><dt className="text-sm text-white/75">Redes</dt>
            <dd className="mt-2 flex flex-wrap gap-x-6 gap-y-2 font-semibold">{[['Instagram', negocio.instagram], ['Facebook', negocio.facebook], ['LinkedIn', negocio.linkedin]].map(([t, h]) => <a key={t} href={h} className="underline underline-offset-4">{t}</a>)}</dd>
          </div>
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
        <Propiedades />
        <Valuacion />
        <Proceso />
        <Nosotros />
        <Preguntas />
        <Contacto />
      </main>
      <footer className="bg-noche pb-24 pt-10 text-sm text-white/70 md:pb-10">
        <div className="contenedor flex flex-wrap items-center justify-between gap-4">
          <img src={`${base}logo.png`} alt="Great Homes RS" width={300} height={252} className="h-10 w-auto" loading="lazy" />
          <p>Great Homes RS · {negocio.direccion}</p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-tinta/10 bg-crema p-3 md:hidden">
        <a href={`tel:${negocio.telefonos[0].link}`} className="btn-linea py-3">Llamar</a>
        <a href={wa('Hola, Great Homes. Quisiera información sobre sus propiedades.')} className="btn-rojo py-3">WhatsApp</a>
      </nav>
    </>
  );
}
