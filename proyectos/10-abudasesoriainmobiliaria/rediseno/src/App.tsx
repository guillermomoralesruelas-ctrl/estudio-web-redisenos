import { useMemo, useState } from 'react';
import { negocio, zonas, inmuebles, precioPorConfirmar, type Inmueble, type Zona } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
const tel = `tel:+${negocio.telefonoE164}`;
const pesos = (n: number) => '$' + n.toLocaleString('es-MX');
const millones = (n: number) => (n >= 1_000_000 ? `$${(n / 1_000_000).toLocaleString('es-MX', { maximumFractionDigits: 2 })} millones` : pesos(n));

// Cada zona lleva el color de una fachada campechana.
const colorZona: Record<Zona, { fondo: string; texto: string }> = {
  centro: { fondo: 'bg-ocre', texto: 'text-tinta' },
  fracc: { fondo: 'bg-azul', texto: 'text-white' },
  playa: { fondo: 'bg-mar', texto: 'text-white' },
  campo: { fondo: 'bg-verde', texto: 'text-white' },
  lejos: { fondo: 'bg-rosa', texto: 'text-white' },
};

const presupuestos = [
  { id: 'todo', nombre: 'Cualquier precio', max: Infinity },
  { id: '1', nombre: 'Hasta $1 millón', max: 1_000_000 },
  { id: '2', nombre: 'Hasta $2 millones', max: 2_000_000 },
  { id: '3.5', nombre: 'Hasta $3.5 millones', max: 3_500_000 },
  { id: '6', nombre: 'Hasta $6 millones', max: 6_000_000 },
];

function Icono({ d, className = 'h-5 w-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const iTel = 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z';
const iChat = 'M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.8-.9L3 21l1.9-5.1A8.4 8.4 0 0 1 3.5 11.5 8.5 8.5 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z';
const iPin = 'M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z';

function Ficha({ x }: { x: Inmueble }) {
  const z = zonas.find((z) => z.id === x.zona)!;
  const m = x.foto ? medidas[x.foto] : null;
  const precio = x.precio ? pesos(x.precio) + (x.operacion === 'renta' ? ' al mes' : '') : 'Precio a consultar';
  const datos = [
    x.rec && `${x.rec} rec.`,
    x.banos && `${x.banos} baños`,
    x.terreno && `${x.terreno.toLocaleString('es-MX')} m² de terreno`,
    x.construccion && `${x.construccion.toLocaleString('es-MX')} m² construidos`,
  ].filter(Boolean) as string[];
  const mensaje = `Hola, me interesa ${x.tipo.toLowerCase()} en ${x.operacion} en ${x.lugar} (${precio}). ${negocio.sitioOriginal}/inmuebles/${x.id}`;
  return (
    <article className="flex flex-col overflow-hidden rounded-lg bg-white shadow-[0_1px_0_rgba(31,37,34,.08),0_8px_24px_-12px_rgba(31,37,34,.25)]">
      <div className="relative aspect-[4/3] bg-arena">
        {x.foto && m ? (
          <img src={`./p/${x.foto}.webp`} width={m[0]} height={m[1]} loading="lazy" decoding="async" alt={`${x.tipo} en ${x.operacion} en ${x.lugar}`} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className="grid h-full place-items-center p-6 text-center text-sm text-gris">Foto propia pendiente</div>
        )}
        <span className={`absolute left-3 top-3 rounded px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${colorZona[x.zona].fondo} ${colorZona[x.zona].texto}`}>{z.nombre}</span>
        {x.operacion === 'renta' && <span className="absolute right-3 top-3 rounded bg-tinta px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-cal">Renta</span>}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-sm font-semibold text-gris">{x.tipo}</p>
        <h3 className="text-xl">{x.lugar}</h3>
        <p className="text-2xl font-bold tracking-tight">
          {precio}
          {precioPorConfirmar[x.id] && <span className="ml-2 align-middle text-xs font-semibold text-rosa">por confirmar</span>}
        </p>
        {datos.length > 0 && <p className="text-sm text-gris">{datos.join(' · ')}</p>}
        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          <a href={wa(mensaje)} className="btn-verde px-4 py-2.5 text-sm" target="_blank" rel="noopener">
            <Icono d={iChat} className="h-4 w-4" /> Preguntar
          </a>
          {x.geo && (
            <a href={`https://www.google.com/maps/search/?api=1&query=${x.geo[0]},${x.geo[1]}`} className="btn-linea px-4 py-2.5 text-sm" target="_blank" rel="noopener">
              <Icono d={iPin} className="h-4 w-4" /> Mapa
            </a>
          )}
          <a href={`${negocio.sitioOriginal}/inmuebles/${x.id}`} className="btn px-2 py-2.5 text-sm text-azul underline underline-offset-4" target="_blank" rel="noopener">
            Todas las fotos
          </a>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [zona, setZona] = useState<Zona | 'todas'>('todas');
  const [operacion, setOperacion] = useState<'venta' | 'renta'>('venta');
  const [tipo, setTipo] = useState<'todos' | 'casa' | 'terreno'>('todos');
  const [tope, setTope] = useState('todo');
  const [ver, setVer] = useState(9);
  // Al cambiar un filtro se vuelve a mostrar solo la primera tanda.
  const filtro = <T,>(f: (v: T) => void) => (v: T) => { f(v); setVer(9); };

  const cuenta = (z: Zona) => inmuebles.filter((x) => x.zona === z).length;
  const lista = useMemo(() => {
    const max = presupuestos.find((p) => p.id === tope)!.max;
    return inmuebles
      .filter((x) => (zona === 'todas' || x.zona === zona) && x.operacion === operacion)
      .filter((x) => tipo === 'todos' || (tipo === 'terreno' ? x.tipo.startsWith('Terreno') : !x.tipo.startsWith('Terreno')))
      .filter((x) => operacion === 'renta' || max === Infinity || (x.precio !== null && x.precio <= max))
      // Los precios por confirmar van al final para no encabezar la lista.
      .sort((a, b) => Number(a.id in precioPorConfirmar) - Number(b.id in precioPorConfirmar) || (a.precio ?? Infinity) - (b.precio ?? Infinity));
  }, [zona, operacion, tipo, tope]);

  const portada = inmuebles.find((x) => x.id === 'AUtMOsheoqtJr2DVVrPm')!;
  const zonaActual = zonas.find((z) => z.id === zona);

  return (
    <>
      <a href="#inmuebles" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Saltar a los inmuebles</a>

      <header className="sticky top-0 z-40 border-b border-tinta/10 bg-cal/95 backdrop-blur">
        <div className="contenedor flex h-16 items-center justify-between gap-4">
          <a href="#inicio" className="leading-none">
            <span className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-verde">ABUD</span>
            <span className="ml-2 hidden text-xs font-semibold uppercase tracking-[0.18em] text-gris sm:inline">Asesoría Inmobiliaria</span>
          </a>
          <nav aria-label="Principal" className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#inmuebles" className="hover:text-verde">Inmuebles</a>
            <a href="#creditos" className="hover:text-verde">Créditos</a>
            <a href="#nosotros" className="hover:text-verde">Nosotros</a>
            <a href="#contacto" className="hover:text-verde">Contacto</a>
          </nav>
          <a href={tel} className="btn-verde px-4 py-2.5 text-sm">
            <Icono d={iTel} className="h-4 w-4" /> <span className="hidden sm:inline">{negocio.telefono}</span><span className="sm:hidden">Llamar</span>
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="contenedor grid items-center gap-10 py-12 md:grid-cols-[1.05fr_1fr] md:py-20">
          <div>
            <p className="eyebrow">Campeche · asesores desde {negocio.desde}</p>
            <h1 className="mt-4 text-[2.6rem] sm:text-6xl">Casas y terrenos en Campeche, de la muralla al mar.</h1>
            <p className="mt-5 max-w-xl text-lg text-gris">
              {inmuebles.length} inmuebles publicados: casonas del centro, casas en fraccionamiento, lotes en la playa y terrenos de campo.
              Te ayudamos con el trámite de tu crédito Infonavit, Fovissste, ISSFAM o bancario.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#inmuebles" className="btn-verde">Ver inmuebles</a>
              <a href={wa('Hola, busco un inmueble en Campeche.')} className="btn-linea" target="_blank" rel="noopener">
                <Icono d={iChat} /> Escribir por WhatsApp
              </a>
            </div>
          </div>
          <figure className="relative">
            <img src="./portada.webp" width={1600} height={1057} alt="Fachada verde de una casa colonial en el centro histórico de Campeche" className="aspect-[4/3] w-full rounded-lg object-cover md:aspect-[5/6]" fetchPriority="high" />
            <figcaption className="absolute bottom-3 left-3 right-3 rounded-md bg-cal/95 px-4 py-3 text-sm sm:right-auto">
              <span className="font-semibold">Casa colonial en el centro histórico</span>
              <span className="block text-gris">{portada.rec} rec. · {portada.construccion} m² construidos · {millones(portada.precio!)}</span>
            </figcaption>
          </figure>
        </section>

        {/* Elemento memorable: el buscador por zona con los colores de las fachadas campechanas */}
        <section id="inmuebles" className="bg-arena/60 py-14 md:py-20">
          <div className="contenedor">
            <p className="eyebrow">Inmuebles</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">¿Ciudad, playa o campo?</h2>
            <p className="mt-3 max-w-2xl text-gris">Elige dónde te ves viviendo o invirtiendo. Cada color es una zona; los precios van de menor a mayor.</p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" role="group" aria-label="Zona">
              <button type="button" aria-pressed={zona === 'todas'} onClick={() => filtro(setZona)('todas')}
                className={`rounded-lg border-2 p-4 text-left transition-transform hover:-translate-y-0.5 ${zona === 'todas' ? 'border-tinta bg-tinta text-cal' : 'border-tinta/20 bg-white'}`}>
                <span className="block font-[family-name:var(--font-display)] text-lg leading-tight">Todo Campeche</span>
                <span className="mt-1 block text-sm opacity-80">{inmuebles.length} inmuebles</span>
              </button>
              {zonas.map((z) => (
                <button key={z.id} type="button" aria-pressed={zona === z.id} onClick={() => filtro(setZona)(z.id)}
                  className={`relative rounded-lg border-2 p-4 pr-9 pt-6 text-left transition-transform hover:-translate-y-0.5 ${colorZona[z.id].fondo} ${colorZona[z.id].texto} ${zona === z.id ? 'border-tinta ring-4 ring-tinta/25' : 'border-transparent'}`}>
                  {/* arco de puerta colonial */}
                  <span aria-hidden="true" className="absolute right-3 top-3 h-7 w-5 rounded-t-full border-2 border-current opacity-50" />
                  <span className="block font-[family-name:var(--font-display)] text-base leading-tight [overflow-wrap:anywhere] sm:text-lg" lang="es">{z.nombre}</span>
                  <span className="mt-1 block text-sm opacity-90">{cuenta(z.id)} inmuebles</span>
                </button>
              ))}
            </div>
            {zonaActual && <p className="mt-4 text-sm text-gris">{zonaActual.frase}</p>}

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <div role="group" aria-label="Operación" className="flex gap-2">
                {(['venta', 'renta'] as const).map((o) => (
                  <button key={o} type="button" className="chip" aria-pressed={operacion === o} onClick={() => filtro(setOperacion)(o)}>{o === 'venta' ? 'En venta' : 'En renta'}</button>
                ))}
              </div>
              <span className="mx-1 hidden h-6 w-px bg-tinta/20 sm:block" aria-hidden="true" />
              <div role="group" aria-label="Tipo" className="flex gap-2">
                {([['todos', 'Todo'], ['casa', 'Casas'], ['terreno', 'Terrenos']] as const).map(([id, n]) => (
                  <button key={id} type="button" className="chip" aria-pressed={tipo === id} onClick={() => filtro(setTipo)(id)}>{n}</button>
                ))}
              </div>
            </div>
            {operacion === 'venta' && (
              <div role="group" aria-label="Presupuesto" className="mt-3 flex flex-wrap gap-2">
                {presupuestos.map((p) => (
                  <button key={p.id} type="button" className="chip" aria-pressed={tope === p.id} onClick={() => filtro(setTope)(p.id)}>{p.nombre}</button>
                ))}
              </div>
            )}

            <p className="mt-6 text-sm font-semibold" aria-live="polite">
              {lista.length === 1 ? '1 inmueble' : `${lista.length} inmuebles`}{zonaActual ? ` en ${zonaActual.nombre.toLowerCase()}` : ''}
            </p>
            {lista.length > 0 ? (
              <>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {lista.slice(0, ver).map((x) => <Ficha key={x.id} x={x} />)}
              </div>
              {lista.length > ver && (
                <div className="mt-8 text-center">
                  <button type="button" className="btn-linea" onClick={() => setVer(lista.length)}>Ver los {lista.length - ver} restantes</button>
                </div>
              )}
              </>
            ) : (
              <div className="mt-4 rounded-lg bg-white p-8 text-center">
                <p className="text-lg">No hay inmuebles publicados con esa combinación.</p>
                <a href={wa('Hola, busco un inmueble en Campeche y no lo encontré en su lista.')} className="btn-verde mt-4" target="_blank" rel="noopener">Cuéntanos qué buscas</a>
              </div>
            )}
          </div>
        </section>

        <section id="creditos" className="contenedor grid gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow">Créditos</p>
            <h2 className="mt-3 text-4xl">Tramitamos tu crédito hipotecario</h2>
            <p className="mt-4 text-gris">Si vas a comprar con crédito, te orientamos con el trámite ante tu institución o tu banco.</p>
            <a href={wa('Hola, quiero comprar con crédito. ¿Me orientan con el trámite?')} className="btn-verde mt-6" target="_blank" rel="noopener">Preguntar por mi crédito</a>
          </div>
          <div className="grid gap-6">
            <div>
              <h3 className="text-lg">Créditos de vivienda</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {['Infonavit', 'Fovissste', 'ISSFAM'].map((a) => <li key={a} className="rounded-md border border-tinta/20 bg-white px-4 py-2 font-semibold">{a}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-lg">Créditos bancarios</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {negocio.bancos.map((a) => <li key={a} className="rounded-md border border-tinta/20 bg-white px-4 py-2 font-semibold">{a}</li>)}
              </ul>
            </div>
            <p className="text-sm text-gris">Afiliados a {negocio.afiliados.join(', ').replace(/, ([^,]*)$/, ' y $1')}, según su sitio actual.</p>
          </div>
        </section>

        <section id="nosotros" className="bg-verde py-16 text-white md:py-24">
          <div className="contenedor grid gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ocre">Nosotros</p>
              <h2 className="mt-3 text-4xl">Asesoría inmobiliaria en Campeche desde {negocio.desde}</h2>
              {negocio.quienes.map((p) => <p key={p} className="mt-4 text-white/90">{p}</p>)}
            </div>
            <dl className="grid content-start gap-5">
              {[['Misión', negocio.mision], ['Visión', negocio.vision], ['Valores', negocio.valores]].map(([t, d]) => (
                <div key={t} className="rounded-lg bg-verde-osc/60 p-5">
                  <dt className="font-[family-name:var(--font-display)] text-xl text-ocre">{t}</dt>
                  <dd className="mt-1 text-white/90">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contacto" className="contenedor grid gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2 className="mt-3 text-4xl">Visítanos o escríbenos</h2>
            <p className="mt-4 text-gris">Cuéntanos qué buscas, en qué zona y con qué presupuesto, y te mandamos opciones.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={wa('Hola, busco un inmueble en Campeche.')} className="btn-verde" target="_blank" rel="noopener"><Icono d={iChat} /> WhatsApp</a>
              <a href={tel} className="btn-linea"><Icono d={iTel} /> Llamar</a>
            </div>
          </div>
          <address className="grid gap-4 not-italic">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gris">Oficina</p>
              <p className="mt-1">{negocio.direccion}<br />{negocio.ciudad}</p>
              <a href={negocio.mapa} className="mt-1 inline-block font-semibold text-azul underline underline-offset-4" target="_blank" rel="noopener">Cómo llegar en Google Maps</a>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gris">Horario de oficina</p>
              <p className="mt-1">{negocio.horario}</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gris">Teléfono y correo</p>
              <p className="mt-1"><a href={tel} className="underline underline-offset-4">{negocio.telefono}</a><br /><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4">{negocio.correo}</a></p>
            </div>
          </address>
        </section>
      </main>

      <footer className="border-t border-tinta/10 pb-24 pt-8 text-sm text-gris md:pb-8">
        <div className="contenedor flex flex-col justify-between gap-2 sm:flex-row">
          <p>© {new Date().getFullYear()} {negocio.nombre}. Campeche, México.</p>
          <p>Precios y disponibilidad sujetos a confirmación.</p>
        </div>
      </footer>

      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-tinta/15 bg-cal text-sm font-semibold md:hidden">
        <a href={tel} className="flex flex-col items-center gap-1 py-2.5"><Icono d={iTel} /> Llamar</a>
        <a href={wa('Hola, busco un inmueble en Campeche.')} className="flex flex-col items-center gap-1 bg-verde py-2.5 text-white" target="_blank" rel="noopener"><Icono d={iChat} /> WhatsApp</a>
        <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-2.5" target="_blank" rel="noopener"><Icono d={iPin} /> Cómo llegar</a>
      </nav>
    </>
  );
}
