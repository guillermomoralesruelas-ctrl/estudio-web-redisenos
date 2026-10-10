import { useMemo, useState } from 'react';
import { negocio, costa, adentro, propiedades, type Propiedad, type Zona } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
const precio = (p: Propiedad) => `$${p.precio.toLocaleString('es-MX')} ${p.moneda}`;
const nombreZona = (z: Zona) => [...costa, ...adentro].find((x) => x.id === z)!.nombre;

const tipos = [
  { id: 'todo', nombre: 'Todo', ok: () => true },
  { id: 'casa', nombre: 'Casas', ok: (p: Propiedad) => p.tipo.startsWith('Casa') },
  { id: 'depa', nombre: 'Departamentos', ok: (p: Propiedad) => p.tipo === 'Departamento' },
  { id: 'terreno', nombre: 'Terrenos', ok: (p: Propiedad) => p.tipo === 'Terreno' },
  { id: 'hotel', nombre: 'Hoteles y comercial', ok: (p: Propiedad) => /Hotel|Hostal|Local|Edificio/.test(p.tipo) },
] as const;

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
const iCal = 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z';

function Ficha({ p }: { p: Propiedad }) {
  const m = p.foto ? medidas[p.foto] : null;
  const datos = [p.rec && `${p.rec} rec.`, p.banos && `${p.banos} baños`, p.m2 && `${p.m2.toLocaleString('es-MX')} m²`].filter(Boolean) as string[];
  const mensaje = `Hola Elsa, me interesa ${p.tipo.toLowerCase()} en ${p.lugar} (${precio(p)}). ${negocio.sitioOriginal}${p.url}`;
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-concha shadow-[0_10px_30px_-18px_rgba(14,59,67,.45)]">
      <div className="relative aspect-[4/3] bg-pacifico/10">
        {p.foto && m ? (
          <img src={`./p/${p.foto}.webp`} width={m[0]} height={m[1]} loading="lazy" decoding="async" alt={`${p.tipo} en ${p.lugar}`} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className="grid h-full place-items-center p-6 text-center text-sm text-gris">Foto en la ficha original</div>
        )}
        {p.operacion === 'preventa' && <span className="absolute left-3 top-3 rounded-full bg-sol px-3 py-1 text-xs font-bold uppercase tracking-wider text-tinta">Preventa</span>}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <p className="text-sm font-semibold text-gris">{p.tipo} · {nombreZona(p.zona)}</p>
        <h3 className="text-xl">{p.lugar}</h3>
        <p className="text-2xl font-bold tracking-tight text-pacifico">{precio(p)}</p>
        {datos.length > 0 && <p className="text-sm text-gris">{datos.join(' · ')}</p>}
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
          <a href={wa(mensaje)} className="btn-terracota px-4 py-2.5 text-sm" target="_blank" rel="noopener"><Icono d={iChat} className="h-4 w-4" /> Preguntar</a>
          {p.lat !== null && p.lng !== null && (
            <a href={`https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`} className="btn-linea px-4 py-2 text-sm" target="_blank" rel="noopener" title={p.aprox ? 'Ubicación aproximada' : undefined}>
              <Icono d={iPin} className="h-4 w-4" /> Mapa{p.aprox ? ' aprox.' : ''}
            </a>
          )}
          <a href={negocio.sitioOriginal + p.url} className="px-1 text-sm font-semibold text-pacifico underline underline-offset-4" target="_blank" rel="noopener">Ficha completa</a>
        </div>
      </div>
    </article>
  );
}

// Elemento memorable: la costa de Oaxaca como una línea, de Puerto Escondido a Huatulco, con un punto por propiedad.
function LineaDeCosta({ zona, elegir }: { zona: Zona | 'todas'; elegir: (z: Zona | 'todas') => void }) {
  const xs = [80, 330, 470, 610, 900];
  return (
    <div className="relative mt-8 overflow-hidden rounded-2xl bg-pacifico px-2 pb-4 pt-6 text-white sm:px-6">
      <p className="px-3 text-xs font-bold uppercase tracking-[0.24em] text-sol">Poniente</p>
      <p className="absolute right-5 top-6 text-xs font-bold uppercase tracking-[0.24em] text-sol sm:right-9">Oriente</p>
      <svg viewBox="0 0 980 190" className="mt-1 w-full" role="img" aria-label="Línea de la costa de Oaxaca con las propiedades por pueblo">
        {/* tierra arriba, Pacífico abajo */}
        <path d="M0 95 C 90 70, 170 120, 260 100 S 420 70, 480 104 S 600 128, 680 96 S 860 70, 980 92 L980 0 L0 0Z" fill="#165561" />
        <path d="M0 95 C 90 70, 170 120, 260 100 S 420 70, 480 104 S 600 128, 680 96 S 860 70, 980 92" fill="none" stroke="#E8B04B" strokeWidth="2.5" />
        {costa.map((c, i) => {
          const n = propiedades.filter((p) => p.zona === c.id).length;
          const activo = zona === c.id;
          return (
            <g key={c.id}>
              {Array.from({ length: n }, (_, k) => (
                <circle key={k} cx={xs[i] - ((Math.min(n, 7) - 1) * 9) / 2 + (k % 7) * 9} cy={122 + Math.floor(k / 7) * 9} r="3.4" fill={activo ? '#E8B04B' : '#F5EEE4'} opacity={zona === 'todas' || activo ? 1 : 0.4} />
              ))}
              <circle cx={xs[i]} cy={[96, 98, 96, 112, 84][i]} r={activo ? 9 : 6} fill={activo ? '#E8B04B' : '#0E3B43'} stroke="#E8B04B" strokeWidth="2.5" />
              <text className="max-sm:hidden" x={xs[i]} y="50" textAnchor="middle" fill="#fff" fontSize="17" fontFamily="DM Serif Display, Georgia, serif">{c.nombre}</text>
              <text className="max-sm:hidden" x={xs[i]} y="70" textAnchor="middle" fill="#E8B04B" fontSize="13" fontWeight="700">{n} {n === 1 ? 'propiedad' : 'propiedades'}</text>
            </g>
          );
        })}
      </svg>
      <div className="grid grid-cols-2 gap-2 px-2 sm:grid-cols-6" role="group" aria-label="Pueblo de la costa">
        <button type="button" aria-pressed={zona === 'todas'} onClick={() => elegir('todas')} className={`rounded-full border px-3 py-2 text-sm font-semibold ${zona === 'todas' ? 'border-sol bg-sol text-tinta' : 'border-white/40 hover:bg-white/10'}`}>Toda la costa y más</button>
        {costa.map((c) => (
          <button key={c.id} type="button" aria-pressed={zona === c.id} onClick={() => elegir(c.id)} className={`rounded-full border px-3 py-2 text-sm font-semibold ${zona === c.id ? 'border-sol bg-sol text-tinta' : 'border-white/40 hover:bg-white/10'}`}>{c.nombre}</button>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [zona, setZona] = useState<Zona | 'todas'>('todas');
  const [tipo, setTipo] = useState<(typeof tipos)[number]['id']>('todo');
  const [preventa, setPreventa] = useState(false);
  const [ver, setVer] = useState(9);
  const filtro = <T,>(f: (v: T) => void) => (v: T) => { f(v); setVer(9); };

  const lista = useMemo(() => {
    const ok = tipos.find((t) => t.id === tipo)!.ok;
    // Los precios se muestran en la moneda que publica cada ficha: primero pesos, luego dólares, de menor a mayor.
    return propiedades
      .filter((p) => (zona === 'todas' || p.zona === zona) && ok(p) && (!preventa || p.operacion === 'preventa'))
      .sort((a, b) => (a.moneda === b.moneda ? a.precio - b.precio : a.moneda === 'MXN' ? -1 : 1));
  }, [zona, tipo, preventa]);
  const zonaActual = [...costa, ...adentro].find((z) => z.id === zona);

  return (
    <>
      <a href="#propiedades" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Saltar a las propiedades</a>

      <header className="sticky top-0 z-40 border-b border-tinta/10 bg-arena/95 backdrop-blur">
        <div className="contenedor flex h-16 items-center justify-between gap-4">
          <a href="#inicio" className="font-[family-name:var(--font-display)] text-xl leading-none text-pacifico sm:text-2xl">Costa Dream <span className="text-terracota">Realty</span></a>
          <nav aria-label="Principal" className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            <a href="#propiedades" className="hover:text-terracota">Propiedades</a>
            <a href="#asesoria" className="hover:text-terracota">Asesoría</a>
            <a href="#elsa" className="hover:text-terracota">Quién soy</a>
            <a href="#contacto" className="hover:text-terracota">Contacto</a>
          </nav>
          <a href={wa('Hola Elsa, busco una propiedad en la costa de Oaxaca.')} className="btn-terracota px-4 py-2.5 text-sm" target="_blank" rel="noopener"><Icono d={iChat} className="h-4 w-4" /> WhatsApp</a>
        </div>
      </header>

      <main id="inicio">
        <section className="relative isolate overflow-hidden bg-pacifico text-white">
          <img src="./portada.webp" width={1200} height={725} alt="Piscina infinita con vista al Pacífico en un hotel boutique en venta en Mazunte" className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom" fetchPriority="high" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-pacifico via-pacifico/70 to-pacifico/25" aria-hidden="true" />
          <div className="contenedor flex min-h-[78svh] flex-col justify-end pb-14 pt-28 md:pb-20">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-sol">Costa de Oaxaca · San Miguel de Allende</p>
            <h1 className="mt-4 max-w-4xl text-[2.7rem] sm:text-6xl lg:text-7xl">Propiedades en la costa de Oaxaca, <em className="text-sol">sin lo obvio</em>.</h1>
            <p className="mt-5 max-w-2xl text-lg text-white/90">
              Asesoría boutique para comprar casas, terrenos y hoteles en Huatulco, Mazunte, Zipolite, Puerto Ángel y Puerto Escondido, y casas en viñedo en San Miguel de Allende.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#propiedades" className="btn bg-sol text-tinta hover:bg-[#F2C46B]">Ver las {propiedades.length} propiedades</a>
              <a href={negocio.agenda} className="btn border-2 border-white/70 hover:bg-white/10" target="_blank" rel="noopener"><Icono d={iCal} /> Agendar una videollamada</a>
            </div>
          </div>
        </section>

        <section id="propiedades" className="py-14 md:py-20">
          <div className="contenedor">
            <p className="eyebrow">Propiedades</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">La costa, pueblo por pueblo</h2>
            <p className="mt-3 max-w-2xl text-gris">Cada punto es una propiedad en venta. Toca un pueblo para ver las suyas, o mira lo que hay tierra adentro.</p>

            <LineaDeCosta zona={zona} elegir={filtro(setZona)} />

            <div className="mt-4 grid gap-3 sm:grid-cols-2" role="group" aria-label="Tierra adentro">
              {adentro.map((z) => {
                const n = propiedades.filter((p) => p.zona === z.id).length;
                return (
                  <button key={z.id} type="button" aria-pressed={zona === z.id} onClick={() => filtro(setZona)(z.id)}
                    className={`rounded-xl border-2 p-4 text-left ${zona === z.id ? 'border-selva bg-selva text-white' : 'border-tinta/15 bg-concha hover:border-selva'}`}>
                    <span className="block font-[family-name:var(--font-display)] text-xl">{z.nombre}</span>
                    <span className={`mt-1 block text-sm ${zona === z.id ? 'text-white/85' : 'text-gris'}`}>{n} propiedades · {z.frase}</span>
                  </button>
                );
              })}
            </div>

            {zonaActual && <p className="mt-6 font-[family-name:var(--font-display)] text-2xl text-pacifico">{zonaActual.nombre}: <span className="text-gris">{zonaActual.frase}</span></p>}

            <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Tipo de propiedad">
              {tipos.map((t) => <button key={t.id} type="button" className="chip" aria-pressed={tipo === t.id} onClick={() => filtro(setTipo)(t.id)}>{t.nombre}</button>)}
              <button type="button" className="chip" aria-pressed={preventa} onClick={() => filtro(setPreventa)(!preventa)}>Solo preventa</button>
            </div>

            <p className="mt-6 text-sm font-semibold" aria-live="polite">{lista.length === 1 ? '1 propiedad' : `${lista.length} propiedades`} · precios en la moneda que publica cada ficha</p>
            {lista.length > 0 ? (
              <>
                <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {lista.slice(0, ver).map((p) => <Ficha key={p.id} p={p} />)}
                </div>
                {lista.length > ver && (
                  <div className="mt-8 text-center">
                    <button type="button" className="btn-linea text-pacifico" onClick={() => setVer(lista.length)}>Ver las {lista.length - ver} restantes</button>
                  </div>
                )}
              </>
            ) : (
              <div className="mt-4 rounded-xl bg-concha p-8 text-center">
                <p className="text-lg">No hay propiedades publicadas con esa combinación.</p>
                <a href={wa('Hola Elsa, busco una propiedad en la costa de Oaxaca y no la encontré en la lista.')} className="btn-terracota mt-4" target="_blank" rel="noopener">Cuéntame qué buscas</a>
              </div>
            )}
          </div>
        </section>

        <section id="asesoria" className="bg-concha py-16 md:py-24">
          <div className="contenedor grid gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow">Asesoría</p>
              <h2 className="mt-3 text-4xl">Decisiones informadas, sin prisas ni presiones</h2>
              <p className="mt-4 text-gris">Combinamos análisis de mercado, claridad legal y una mirada consciente sobre el impacto social y ambiental de cada proyecto.</p>
              <ul className="mt-6 grid gap-3">
                {negocio.servicios.map((s) => <li key={s} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-terracota" aria-hidden="true" />{s}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl bg-pacifico p-7 text-white">
              <h3 className="text-2xl text-sol">Lo que revisamos antes de recomendar</h3>
              <ol className="mt-5 grid gap-4">
                {negocio.revisamos.map((r, i) => (
                  <li key={r} className="flex items-baseline gap-4 border-b border-white/15 pb-4 last:border-0 last:pb-0">
                    <span className="font-[family-name:var(--font-display)] text-3xl text-sol">0{i + 1}</span><span className="text-lg">{r}</span>
                  </li>
                ))}
              </ol>
              <a href={negocio.revista} className="mt-6 inline-block font-semibold text-sol underline underline-offset-4" target="_blank" rel="noopener">Leer su revista Costa Dream Colección</a>
            </div>
          </div>
        </section>

        <section id="elsa" className="contenedor py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">Quién está detrás</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">{negocio.fundadora}</h2>
            {negocio.bio.map((b) => <p key={b} className="mt-4 text-lg text-gris">{b}</p>)}
          </div>
        </section>

        <section id="contacto" className="bg-selva py-16 text-white md:py-24">
          <div className="contenedor grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-sol">Contacto</p>
              <h2 className="mt-3 text-4xl">Cuéntame tus objetivos y tus tiempos</h2>
              <p className="mt-4 text-white/90">Te respondo con las propiedades que encajan y un camino claro para seguir.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={wa('Hola Elsa, busco una propiedad en la costa de Oaxaca.')} className="btn bg-sol text-tinta hover:bg-[#F2C46B]" target="_blank" rel="noopener"><Icono d={iChat} /> WhatsApp</a>
                <a href={negocio.agenda} className="btn border-2 border-white/70 hover:bg-white/10" target="_blank" rel="noopener"><Icono d={iCal} /> Agendar videollamada</a>
              </div>
            </div>
            <dl className="grid gap-4 text-white/95">
              <div><dt className="text-sm font-bold uppercase tracking-wider text-sol">WhatsApp en la costa</dt><dd><a href={wa('Hola Elsa.')} className="underline underline-offset-4" target="_blank" rel="noopener">{negocio.whatsappTexto}</a></dd></div>
              <div><dt className="text-sm font-bold uppercase tracking-wider text-sol">Desde México</dt><dd><a href={`tel:+${negocio.nacionalE164}`} className="underline underline-offset-4">{negocio.nacional}</a></dd></div>
              <div><dt className="text-sm font-bold uppercase tracking-wider text-sol">Desde el extranjero</dt><dd><a href={`tel:+${negocio.internacionalE164}`} className="underline underline-offset-4">{negocio.internacional}</a></dd></div>
              <div><dt className="text-sm font-bold uppercase tracking-wider text-sol">Correo</dt><dd><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4">{negocio.correo}</a></dd></div>
              <div><dt className="text-sm font-bold uppercase tracking-wider text-sol">Redes</dt><dd className="flex flex-wrap gap-x-4">{negocio.redes.map((r) => <a key={r.nombre} href={r.url} className="underline underline-offset-4" target="_blank" rel="noopener">{r.nombre}</a>)}</dd></div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="pb-24 pt-8 text-sm text-gris md:pb-8">
        <div className="contenedor flex flex-col justify-between gap-2 sm:flex-row">
          <p>© {new Date().getFullYear()} {negocio.nombre}.</p>
          <p>Precios y disponibilidad sujetos a confirmación.</p>
        </div>
      </footer>

      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-tinta/15 bg-arena text-sm font-semibold md:hidden">
        <a href={`tel:+${negocio.nacionalE164}`} className="flex flex-col items-center gap-1 py-2.5"><Icono d={iTel} /> Llamar</a>
        <a href={wa('Hola Elsa, busco una propiedad en la costa de Oaxaca.')} className="flex flex-col items-center gap-1 bg-terracota py-2.5 text-white" target="_blank" rel="noopener"><Icono d={iChat} /> WhatsApp</a>
        <a href={negocio.agenda} className="flex flex-col items-center gap-1 py-2.5" target="_blank" rel="noopener"><Icono d={iCal} /> Agendar</a>
      </nav>
    </>
  );
}
