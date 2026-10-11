import { useMemo, useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, lema, promesa, cierre, nosotros, fundadora } from './data/content';
import { destinos, propiedades } from './data/propiedades';
import type { Propiedad } from './data/propiedades';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const src = (n: string) => `${base}${n}.webp`;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
const dinero = (n: number, moneda: string) => `$${Math.round(n).toLocaleString('es-MX')} ${moneda}`;
const corto = (n: number, moneda: string) =>
  n >= 1e6 ? `$${(n / 1e6).toLocaleString('es-MX', { maximumFractionDigits: 1 })} M ${moneda}` : `$${Math.round(n / 1e3).toLocaleString('es-MX')} mil ${moneda}`;
const totalCatalogo = 707;
const totalVenta = destinos.reduce((s, d) => s + d.total, 0);
const totalPreventa = destinos.reduce((s, d) => s + d.preventa, 0);
const maxDestino = Math.max(...destinos.map((d) => d.total));
const plural: Record<string, string> = { Departamento: 'departamentos', Terreno: 'terrenos', Casa: 'casas', Villa: 'villas', 'Local comercial': 'local comercial', Otro: 'otros' };

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 800];
  return <img src={src(n)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

function detalles(p: Propiedad) {
  const d: string[] = [];
  if (p.rec !== null) d.push(p.rec === 0 ? 'Estudio' : `${p.rec} rec`);
  if (p.banos !== null) d.push(`${p.banos} ${p.banos === 1 ? 'baño' : 'baños'}`);
  if (p.m2) d.push(`${p.m2.toLocaleString('es-MX')} m²`);
  return d.join(' · ');
}

function Tarjeta({ p, elegida, alternar, lleno, oculta = false }: { p: Propiedad; elegida: boolean; alternar: () => void; lleno: boolean; oculta?: boolean }) {
  return (
    <li className={`${oculta ? 'max-sm:hidden ' : ''}flex flex-col overflow-hidden rounded-2xl bg-white ring-1 transition-shadow ${elegida ? 'ring-2 ring-laguna shadow-lg' : 'ring-tinta/10'}`}>
      <div className="relative aspect-[16/10] sm:aspect-[4/3]">
        <Foto n={p.foto} alt={`${p.tipo} en ${p.zona}, ${p.destino}`} className="absolute inset-0 h-full w-full object-cover" />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${p.op === 'preventa' ? 'bg-turquesa text-selva' : 'bg-selva text-white'}`}>{p.op === 'preventa' ? 'Preventa' : 'En venta'}</span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-sm text-gris">{p.zona} · {p.tipo}</p>
        <h3 className="mt-1 text-lg leading-snug">{p.nombre}</h3>
        <p className="mt-2 font-display text-2xl font-semibold">{dinero(p.precio, p.moneda)}</p>
        <p className="mt-1 text-sm text-gris">{detalles(p)}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          <button type="button" onClick={alternar} disabled={!elegida && lleno} aria-pressed={elegida}
            className={`btn px-4 py-2.5 ${elegida ? 'bg-laguna text-white' : 'border-2 border-laguna text-laguna hover:bg-laguna/10'} disabled:cursor-not-allowed disabled:opacity-40`}>
            {elegida ? '✓ En comparación' : 'Comparar'}
          </button>
          <a href={p.url} className="btn border-2 border-tinta/20 px-4 py-2 hover:border-tinta">Ficha</a>
        </div>
      </div>
    </li>
  );
}

function Encabezado({ n }: { n: number }) {
  const enlaces = [['#destinos', 'Destinos'], ['#comparar', `Comparar${n ? ` (${n})` : ''}`], ['#nosotros', 'Nosotros'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-30 bg-selva text-white">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img src={`${base}logo.png`} alt="Haus Real Estate" width={420} height={242} className="h-11 w-auto" /></a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-6 text-sm font-semibold">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-turquesa">{t}</a></li>)}</ul>
        </nav>
        <a href={wa('Hola, Haus Real Estate. Quisiera asesoría para invertir en la Riviera Maya.')} className="btn-turquesa hidden px-4 py-2.5 sm:inline-flex">WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-selva text-white">
      <Foto n="sala-portada" alt="Sala amplia con piso de madera, sillones claros y ventanales hacia la vegetación" eager className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-selva via-selva/75 to-selva/35" />
      <div className="contenedor flex min-h-[34rem] flex-col justify-end pb-12 pt-24 sm:min-h-[40rem]">
        <p className="eyebrow text-turquesa">Riviera Maya · Cancún · Bacalar · Holbox</p>
        <h1 className="mt-3 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">Tu siguiente inversión en el Caribe, estudiada antes de ofrecértela</h1>
        <p className="mt-5 max-w-xl text-lg text-white/85">{promesa}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#destinos" className="btn-turquesa">Elegir destino</a>
          <a href={wa('Hola, Haus Real Estate. Busco una propiedad para invertir, ¿me pueden asesorar?')} className="btn-linea">Hablar con un asesor</a>
        </div>
        <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/20 pt-6">
          {[[totalCatalogo, 'propiedades publicadas'], [destinos.length, 'destinos'], [totalPreventa, 'en preventa']].map(([v, t]) => (
            <div key={t}><dt className="text-sm text-white/75">{t}</dt><dd className="order-first font-display text-3xl font-semibold text-turquesa sm:text-4xl">{v}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}

type Op = 'todas' | 'preventa' | 'venta';

function Destinos({ elegidas, alternar }: { elegidas: string[]; alternar: (u: string) => void }) {
  const [destino, setDestino] = useState(destinos[0].nombre);
  const [op, setOp] = useState<Op>('todas');
  const [verTodas, setVerTodas] = useState(false);
  const d = destinos.find((x) => x.nombre === destino)!;
  const lista = useMemo(() => propiedades.filter((p) => p.destino === destino && (op === 'todas' || p.op === op)), [destino, op]);
  const visibles = verTodas ? lista : lista.slice(0, 6);
  const pctPreventa = Math.round((d.preventa / d.total) * 100);

  return (
    <section id="destinos" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Brújula de destinos</p>
        <h2 className="mt-2 max-w-3xl text-4xl sm:text-5xl">¿Dónde quieres invertir? Cada destino, con lo que hay hoy</h2>
        <p className="mt-4 max-w-2xl text-gris">{totalVenta} propiedades en venta y preventa en {destinos.length} destinos. Elige uno para ver cuántas hay, desde cuánto y una muestra con fotos.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <ul className="grid grid-cols-2 gap-2 self-start sm:grid-cols-3 lg:grid-cols-1" aria-label="Destinos">
            {destinos.map((x) => (
              <li key={x.nombre}>
                <button type="button" aria-pressed={x.nombre === destino} onClick={() => { setDestino(x.nombre); setVerTodas(false); }}
                  className={`group relative w-full overflow-hidden rounded-xl px-4 py-3 text-left transition-colors ${x.nombre === destino ? 'bg-selva text-white' : 'bg-white ring-1 ring-tinta/10 hover:ring-laguna'}`}>
                  <span aria-hidden className={`absolute inset-y-0 left-0 ${x.nombre === destino ? 'bg-turquesa/20' : 'bg-laguna/10'}`} style={{ width: `${Math.max(4, (x.total / maxDestino) * 100)}%` }} />
                  <span className="relative flex items-baseline justify-between gap-2">
                    <span className="font-semibold leading-tight">{x.nombre}</span>
                    <span className={`font-display text-lg font-semibold ${x.nombre === destino ? 'text-turquesa' : 'text-laguna'}`}>{x.total}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="min-w-0">
            <div className="rounded-2xl bg-selva p-6 text-white sm:p-8">
              <h3 className="text-3xl sm:text-4xl">{d.nombre}</h3>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                <div><dt className="text-sm text-white/70">Publicadas</dt><dd className="font-display text-2xl font-semibold text-turquesa">{d.total}</dd></div>
                <div><dt className="text-sm text-white/70">En preventa</dt><dd className="font-display text-2xl font-semibold text-turquesa">{pctPreventa}%</dd></div>
                <div><dt className="text-sm text-white/70">Desde (pesos)</dt><dd className="font-display text-2xl font-semibold">{d.desdeMXN ? corto(d.desdeMXN, 'MXN') : '—'}</dd></div>
                <div><dt className="text-sm text-white/70">Desde (dólares)</dt><dd className="font-display text-2xl font-semibold">{d.desdeUSD ? corto(d.desdeUSD, 'USD') : '—'}</dd></div>
              </dl>
              <p className="mt-5 text-sm text-white/80">
                {Object.entries(d.tipos).sort((a, b) => b[1] - a[1]).map(([t, n]) => `${n} ${n === 1 ? t.toLowerCase() : plural[t] ?? t.toLowerCase()}`).join(' · ')}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2" role="group" aria-label="Operación">
              {(['todas', 'preventa', 'venta'] as Op[]).map((o) => (
                <button key={o} type="button" className="chip" aria-pressed={op === o} onClick={() => { setOp(o); setVerTodas(false); }}>
                  {o === 'todas' ? 'Todas' : o === 'preventa' ? 'Preventa' : 'En venta'}
                </button>
              ))}
              <span className="ml-auto text-sm text-gris">Muestra de {lista.length} de {d.total}</span>
            </div>

            {lista.length ? (
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {visibles.map((p, i) => <Tarjeta key={p.url} oculta={!verTodas && i >= 3} p={p} elegida={elegidas.includes(p.url)} alternar={() => alternar(p.url)} lleno={elegidas.length >= 3} />)}
              </ul>
            ) : (
              <p className="mt-5 rounded-2xl bg-white p-6 text-gris ring-1 ring-tinta/10">En la muestra no hay propiedades {op === 'venta' ? 'en venta' : 'en preventa'} en {d.nombre}. Pregunta por ellas por WhatsApp.</p>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              {lista.length > 6 && (
                <button type="button" onClick={() => setVerTodas(!verTodas)} className="btn-selva">{verTodas ? 'Ver menos' : `Ver las ${lista.length}`}</button>
              )}
              <a href={negocio.catalogo} className="btn border-2 border-tinta/20 hover:border-tinta">Catálogo completo ({totalCatalogo})</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Comparador({ elegidas, alternar }: { elegidas: string[]; alternar: (u: string) => void }) {
  const lista = elegidas.map((u) => propiedades.find((p) => p.url === u)!);
  const filas: [string, (p: Propiedad) => string][] = [
    ['Precio', (p) => dinero(p.precio, p.moneda)],
    ['Precio por m²', (p) => (p.m2 ? dinero(p.precio / p.m2, p.moneda) : '—')],
    ['Superficie', (p) => (p.m2 ? `${p.m2.toLocaleString('es-MX')} m²` : '—')],
    ['Recámaras', (p) => (p.rec === null ? '—' : p.rec === 0 ? 'Estudio' : String(p.rec))],
    ['Baños', (p) => (p.banos === null ? '—' : String(p.banos))],
    ['Operación', (p) => (p.op === 'preventa' ? 'Preventa' : 'En venta')],
    ['Ubicación', (p) => `${p.zona}, ${p.destino}`],
  ];
  const monedas = new Set(lista.map((p) => p.moneda));
  const texto = `Hola, Haus Real Estate. Estoy comparando estas propiedades:\n${lista.map((p) => `• ${p.nombre} (${dinero(p.precio, p.moneda)}): ${p.url}`).join('\n')}\n¿Me ayudan a decidir?`;

  return (
    <section id="comparar" className="bg-arena-2/70 py-16 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Comparador</p>
        <h2 className="mt-2 max-w-3xl text-4xl sm:text-5xl">Pon hasta tres lado a lado antes de decidir</h2>
        {lista.length === 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {['Toca “Comparar” en cualquier propiedad de la brújula.', 'Verás precio, precio por m², superficie y recámaras juntos.', 'Manda la comparación a un asesor por WhatsApp con un toque.'].map((t, i) => (
              <p key={t} className="rounded-2xl border-2 border-dashed border-tinta/20 p-6 text-gris"><span className="block font-display text-3xl font-semibold text-laguna">{i + 1}</span>{t}</p>
            ))}
          </div>
        ) : (
          <>
            <div className="mt-8 overflow-x-auto rounded-2xl bg-white ring-1 ring-tinta/10">
              <table className="w-full min-w-[36rem] text-left text-sm">
                <thead>
                  <tr className="align-top">
                    <th scope="col" className="w-24 p-3 sm:w-36 sm:p-4"><span className="sr-only">Dato</span></th>
                    {lista.map((p) => (
                      <th key={p.url} scope="col" className="p-4 font-normal">
                        <Foto n={p.foto} alt="" className="aspect-[4/3] w-full rounded-lg object-cover" />
                        <span className="mt-3 block font-display text-base font-semibold leading-snug">{p.nombre}</span>
                        <button type="button" onClick={() => alternar(p.url)} className="mt-2 text-sm font-semibold text-laguna underline underline-offset-4">Quitar</button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filas.map(([t, f]) => (
                    <tr key={t} className="border-t border-tinta/10">
                      <th scope="row" className="p-3 font-semibold text-gris sm:p-4">{t}</th>
                      {lista.map((p) => <td key={p.url} className="p-4 font-semibold">{f(p)}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {monedas.size > 1 && <p className="mt-3 text-sm text-gris">Ojo: hay precios en pesos y en dólares; se muestran tal como los publica Haus, sin convertir.</p>}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={wa(texto)} className="btn-selva">Enviar comparación por WhatsApp</a>
              <a href="#destinos" className="btn border-2 border-tinta/20 hover:border-tinta">{lista.length < 3 ? 'Agregar otra' : 'Volver a la brújula'}</a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="py-16 sm:py-24">
      <div className="contenedor grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-16">
        <div>
          <p className="eyebrow">Quiénes somos</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">{lema}</h2>
          <div className="mt-6 space-y-4 text-lg text-gris">{nosotros.map((t) => <p key={t}>{t}</p>)}</div>
          <div className="mt-10 rounded-2xl bg-white p-6 ring-1 ring-tinta/10 sm:p-8">
            <h3 className="text-2xl">{fundadora.nombre} <span className="text-base font-medium text-gris">· {fundadora.cargo}</span></h3>
            <div className="mt-4 space-y-3 text-gris">{fundadora.bio.map((t) => <p key={t}>{t}</p>)}</div>
            <ul className="mt-6 flex flex-wrap items-center gap-3">
              <li><img src={`${base}logo-ampi.png`} alt="AMPI Playa del Carmen" width={420} height={428} className="h-14 w-auto" /></li>
              {fundadora.sellos.map((s) => <li key={s} className="rounded-full bg-arena px-4 py-2 text-sm font-semibold">{s}</li>)}
            </ul>
          </div>
        </div>
        <figure className="relative mx-auto w-full max-w-sm lg:sticky lg:top-24">
          <Foto n="bernadette-gonnet" alt="Bernadette Gonnet, fundadora de Haus Real Estate, con traje azul claro" className="aspect-[4/5] w-full rounded-2xl object-cover object-top" />
          <figcaption className="mt-3 text-sm text-gris">{fundadora.nombre}, fundadora de Haus Real Estate.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section className="relative isolate overflow-hidden bg-selva py-24 text-white sm:py-32">
      <Foto n="kayak-laguna" alt="Persona remando en un kayak naranja sobre agua turquesa y transparente" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-selva/60" />
      <div className="contenedor">
        <h2 className="max-w-2xl text-4xl sm:text-6xl">{cierre.t}</h2>
        <p className="mt-4 max-w-xl text-lg text-white/90">{cierre.d}</p>
        <a href={wa('Hola, Haus Real Estate. Quiero invertir en la Riviera Maya, ¿por dónde empiezo?')} className="btn-turquesa mt-8">Platicar mi inversión</a>
      </div>
    </section>
  );
}

function Contacto() {
  const datos: [string, string, string | null][] = [
    ['Teléfono y WhatsApp', negocio.telefono, `tel:${negocio.telefonoLink}`],
    ['Correo', negocio.correo, `mailto:${negocio.correo}`],
    ['Oficina', negocio.direccion, null],
  ];
  return (
    <section id="contacto" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Cuéntanos qué buscas y en qué destino</h2>
          <p className="mt-4 max-w-lg text-gris">Un asesor te responde con opciones ya estudiadas. Si buscas rentar, revisa su <a href={negocio.rentas} className="font-semibold text-laguna underline underline-offset-4">sección de rentas</a>.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, Haus Real Estate. Quisiera información sobre propiedades en la Riviera Maya.')} className="btn-selva">Escribir por WhatsApp</a>
            <a href={`tel:${negocio.telefonoLink}`} className="btn border-2 border-tinta/20 hover:border-tinta">Llamar</a>
          </div>
        </div>
        <dl className="divide-y divide-tinta/10 rounded-2xl bg-white px-6 ring-1 ring-tinta/10">
          {datos.map(([t, v, h]) => (
            <div key={t} className="py-5">
              <dt className="text-sm text-gris">{t}</dt>
              <dd className="mt-1 break-words text-lg font-semibold">{h ? <a href={h} className="hover:text-laguna">{v}</a> : v}</dd>
            </div>
          ))}
          <div className="py-5">
            <dt className="text-sm text-gris">Redes</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {[['Instagram', negocio.instagram], ['Facebook', negocio.facebook], ['YouTube', negocio.youtube]].map(([t, h]) => (
                <a key={t} href={h} className="chip hover:border-laguna">{t}</a>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default function App() {
  const [elegidas, setElegidas] = useState<string[]>([]);
  const alternar = (u: string) => setElegidas((e) => (e.includes(u) ? e.filter((x) => x !== u) : e.length >= 3 ? e : [...e, u]));
  return (
    <>
      <a href="#destinos" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado n={elegidas.length} />
      <main>
        <Portada />
        <Destinos elegidas={elegidas} alternar={alternar} />
        <Comparador elegidas={elegidas} alternar={alternar} />
        <Nosotros />
        <Cierre />
        <Contacto />
      </main>
      <footer className="bg-selva pb-24 pt-10 text-sm text-white/75 md:pb-10">
        <div className="contenedor flex flex-wrap items-center justify-between gap-4">
          <img src={`${base}logo.png`} alt="Haus Real Estate" width={420} height={242} className="h-10 w-auto" loading="lazy" />
          <p>{negocio.razonSocial} · {negocio.telefono}</p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-selva p-3 md:hidden">
        <a href={elegidas.length ? '#comparar' : '#destinos'} className="btn-linea py-3 text-white">{elegidas.length ? `Comparar (${elegidas.length})` : 'Destinos'}</a>
        <a href={wa('Hola, Haus Real Estate. Quisiera asesoría para invertir en la Riviera Maya.')} className="btn-turquesa py-3">WhatsApp</a>
      </nav>
    </>
  );
}
