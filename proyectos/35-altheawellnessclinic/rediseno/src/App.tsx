import { useMemo, useState, type ReactElement } from 'react';
import {
  categorias, endolifting, foto, negocio, origenes, pilares, porque, portada, sofwave, sueros, wa, waGeneral,
  type Tratamiento,
} from './data/content';

type Origen = (typeof origenes)[number];
const todos: Tratamiento[] = categorias.flatMap((c) => c.tratamientos);
const porId = new Map(todos.map((t) => [t.id, t]));
const miles = (n: number) => n.toLocaleString('en-US');
const usd = (n: number) => `$${miles(n)} USD`;
const mxn = (n: number) => `$${miles(n)} MXN`;

/* ---------- iconos simples (dibujados por nosotros) ---------- */
function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 3h3l1.5 4.5-2 1.3a12 12 0 0 0 7.7 7.7l1.3-2L21 16v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
    </svg>
  );
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

/* ---------- logotipo de texto, como el letrero de su recepción ---------- */
function Logotipo({ claro = false }: { claro?: boolean }) {
  return (
    <span className={`inline-flex shrink-0 flex-col items-center leading-none ${claro ? 'text-marfil' : 'text-carbon'}`}>
      <span className="font-titulo text-[1.55rem] tracking-[0.32em] pl-[0.32em]">ALTHEA</span>
      <span className="mt-1 flex items-center gap-1.5 whitespace-nowrap text-[0.6rem] font-semibold tracking-[0.28em]">
        <span className={`h-px w-4 ${claro ? 'bg-marfil/60' : 'bg-taupe'}`} aria-hidden="true" />
        WELLNESS CLINIC
        <span className={`h-px w-4 ${claro ? 'bg-marfil/60' : 'bg-taupe'}`} aria-hidden="true" />
      </span>
    </span>
  );
}

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-carbon/10 bg-marfil/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Althea Wellness Clinic, home"><Logotipo /></a>
        <nav aria-label="Main" className="hidden items-center gap-7 text-[0.95rem] font-medium lg:flex">
          <a href="#treatments" className="hover:text-taupe-hondo">Treatments</a>
          <a href="#pass" className="hover:text-taupe-hondo">Your pass</a>
          <a href="#technology" className="hover:text-taupe-hondo">Sofwave™ &amp; Endolifting</a>
          <a href="#visit" className="hover:text-taupe-hondo">Visit</a>
        </nav>
        <a href={waGeneral} className="btn hidden sm:inline-flex" target="_blank" rel="noopener">
          <IconoWa /> Book on WhatsApp
        </a>
      </div>
    </header>
  );
}

function Portada() {
  const f = foto('lobby');
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="contenedor grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        <div className="min-w-0">
          <h1 className="text-[2.35rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem]">{portada.h1}</h1>
          <p className="mt-5 max-w-xl text-lg text-gris">{portada.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn" target="_blank" rel="noopener"><IconoWa /> Book on WhatsApp</a>
            <a href="#pass" className="btn-linea">Plan your visit</a>
          </div>
          <dl className="mt-10 grid gap-4 border-t border-carbon/15 pt-6 text-[0.95rem] sm:grid-cols-2">
            <div>
              <dt className="font-semibold">Zazil-Ha, Playa del Carmen</dt>
              <dd className="text-gris">Casa Habanero building, corner of 42nd St &amp; 15th Ave.</dd>
            </div>
            <div>
              <dt className="font-semibold">Opening hours</dt>
              <dd className="text-gris">Mon to Fri 9:00 to 19:00, Sat 9:00 to 14:00</dd>
            </div>
          </dl>
        </div>
        <figure className="relative min-w-0">
          <img
            src={f.src} width={f.width} height={f.height}
            alt="Reception of Althea Wellness Clinic with its ALTHEA sign on the wall and the illuminated flower-shaped mirror in the lounge"
            className="aspect-[4/3] w-full rounded-[2rem] object-cover"
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  );
}

function Pilares() {
  const a = foto('consulta');
  const b = foto('iv');
  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="pilares-titulo">
      <div className="contenedor grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="grid min-w-0 grid-cols-2 gap-4 self-start">
          <img src={a.src} width={a.width} height={a.height} loading="lazy"
            alt="A doctor in a white coat examines a patient's face in a consultation room"
            className="aspect-[3/4] w-full rounded-[1.5rem] object-cover" />
          <img src={b.src} width={b.width} height={b.height} loading="lazy"
            alt="A patient rests in a reclining chair with an eye mask while a nurse prepares her IV therapy"
            className="mt-12 aspect-[3/4] w-full rounded-[1.5rem] object-cover" />
        </div>
        <div className="min-w-0">
          <h2 id="pilares-titulo" className="text-3xl sm:text-[2.6rem]">The foundations of Althea</h2>
          <p className="mt-4 max-w-xl text-gris">Where science, innovation and human connection redefine the future of beauty, performance and wellbeing.</p>
          <ul className="mt-8 divide-y divide-carbon/12 border-y border-carbon/12">
            {pilares.map((p) => (
              <li key={p.titulo} className="grid gap-1 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6">
                <h3 className="text-xl">{p.titulo}</h3>
                <div>
                  <p className="font-semibold text-taupe-hondo">{p.lema}</p>
                  <p className="mt-1 text-[0.98rem] text-gris">{p.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- el elemento memorable: Your Althea pass ---------- */
function codigoBarras(semilla: string) {
  // Barras decorativas que cambian con lo que eliges (no codifican nada).
  const barras: number[] = [];
  let h = 7;
  for (const c of semilla) h = (h * 31 + c.charCodeAt(0)) % 9973;
  for (let i = 0; i < 34; i++) { h = (h * 17 + 11) % 9973; barras.push(1 + (h % 3)); }
  return barras;
}

function Pase({ seleccion, alternar }: { seleccion: string[]; alternar: (id: string) => void }) {
  const [origenId, setOrigenId] = useState<Origen['id']>('us');
  const [llegada, setLlegada] = useState('');
  const origen = origenes.find((o) => o.id === origenId)!;
  const local = origen.local;
  const elegidos = seleccion.map((id) => porId.get(id)!).filter(Boolean);
  const conPrecio = elegidos.filter((t) => t.usd !== null && t.mxn !== null);
  const sinPrecio = elegidos.filter((t) => t.usd === null);
  const totalUsd = conPrecio.reduce((s, t) => s + (t.usd ?? 0), 0);
  const totalMxn = conPrecio.reduce((s, t) => s + (t.mxn ?? 0), 0);
  const principal = (t: Tratamiento) => (local ? mxn(t.mxn!) : usd(t.usd!));
  const secundario = (t: Tratamiento) => (local ? usd(t.usd!) : mxn(t.mxn!));
  const tecnologia = elegidos.some((t) => t.id === 'sofwave' || t.id === 'endolifting') && elegidos.length > 1;
  const barras = useMemo(() => codigoBarras(origenId + seleccion.join()), [origenId, seleccion]);
  const fechaTexto = llegada
    ? new Date(`${llegada}T12:00:00`).toLocaleDateString(local ? 'es-MX' : 'en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
    : '';

  const mensaje = useMemo(() => {
    if (local) {
      const lineas = elegidos.map((t) => `- ${t.nombre}${t.mxn !== null ? ` (desde ${mxn(t.mxn)})` : ' (precio tras valoración médica)'}`);
      return [
        '¡Hola Althea! Vivo en México y quiero agendar una visita.',
        fechaTexto ? `Fecha que me interesa: ${fechaTexto}` : '',
        elegidos.length ? 'Tratamientos:' : 'Todavía no elijo tratamiento, ¿me orientan?',
        ...lineas,
        conPrecio.length ? `Total desde ${mxn(totalMxn)}; entiendo que el precio final se define en la valoración médica.` : '',
        '¿Me ayudan a agendar?',
      ].filter(Boolean).join('\n');
    }
    const lineas = elegidos.map((t) => `- ${t.nombre}${t.usd !== null ? ` (from ${usd(t.usd)})` : ' (priced after medical evaluation)'}`);
    return [
      `Hello Althea! Here is my pass, flying in from ${origen.nombre}.`,
      fechaTexto ? `Arriving: ${fechaTexto}` : '',
      elegidos.length ? 'Treatments I am interested in:' : 'I have not chosen a treatment yet, could you advise me?',
      ...lineas,
      conPrecio.length ? `From ${usd(totalUsd)} in total; I understand final pricing is set after the medical assessment.` : '',
      'Could you help me plan my visit?',
    ].filter(Boolean).join('\n');
  }, [local, elegidos, fechaTexto, conPrecio.length, totalMxn, totalUsd, origen.nombre]);

  return (
    <section id="pass" className="bg-arena/60 py-16 md:py-24" aria-labelledby="pase-titulo">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 id="pase-titulo" className="text-3xl sm:text-[2.6rem]">Your Althea pass</h2>
          <p className="mt-4 text-gris">
            Althea plans treatments to fit into your Riviera Maya itinerary. Tell us where you are coming from, pick what
            interests you from the clinic's menu, and your pass prints itself with the published "starting at" prices.
            Send it on WhatsApp to plan your visit with the team.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          {/* controles */}
          <div className="min-w-0 space-y-8">
            <fieldset>
              <legend className="font-semibold">Flying in from</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {origenes.map((o) => (
                  <label key={o.id}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-[0.95rem] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-taupe-hondo ${origenId === o.id ? 'border-carbon bg-carbon text-white' : 'border-carbon/30 bg-white hover:border-carbon'}`}>
                    <input type="radio" name="origen" value={o.id} checked={origenId === o.id} onChange={() => setOrigenId(o.id)} className="sr-only" />
                    {o.nombre}
                  </label>
                ))}
              </div>
              <p className="mt-2 text-sm text-gris">
                {local ? 'Prices shown first in Mexican pesos, and your WhatsApp message is written in Spanish.' : 'Prices shown first in US dollars, as the clinic publishes them.'}
              </p>
            </fieldset>

            <div>
              <label htmlFor="llegada" className="font-semibold">{local ? 'Preferred date' : 'Arriving'} <span className="font-normal text-gris">(optional)</span></label>
              <input id="llegada" type="date" value={llegada} onChange={(e) => setLlegada(e.target.value)}
                className="mt-2 block w-full max-w-xs rounded-xl border border-carbon/30 bg-white px-4 py-2.5" />
            </div>

            <fieldset>
              <legend className="font-semibold">Treatments</legend>
              <div className="mt-3 space-y-5">
                {categorias.map((c) => (
                  <div key={c.id}>
                    <p className="text-sm font-semibold text-taupe-hondo">{c.nombre}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {c.tratamientos.map((t) => {
                        const on = seleccion.includes(t.id);
                        return (
                          <button key={t.id} type="button" aria-pressed={on} onClick={() => alternar(t.id)}
                            className={`rounded-full border px-3.5 py-1.5 text-left text-[0.9rem] transition-colors ${on ? 'border-carbon bg-carbon text-white' : 'border-carbon/25 bg-white hover:border-carbon'}`}>
                            {on ? '✓ ' : '+ '}{t.nombre}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
            <a href="#pase-tarjeta" className="enlace lg:hidden">See your pass ({elegidos.length} {elegidos.length === 1 ? 'treatment' : 'treatments'})</a>
          </div>

          {/* el pase */}
          <div id="pase-tarjeta" className="min-w-0 scroll-mt-24 lg:sticky lg:top-24">
            <article key={origenId + seleccion.join() + llegada} className="imprime overflow-hidden rounded-[1.75rem] bg-carbon text-marfil shadow-[0_24px_60px_-30px_rgba(42,46,51,0.7)] sm:grid sm:grid-cols-[1fr_9.5rem]" aria-live="polite" aria-label="Your Althea pass">
              <div className="min-w-0 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4 border-b border-marfil/15 pb-5">
                  <Logotipo claro />
                  <p className="text-right text-xs font-semibold tracking-[0.18em] text-luz">BOARDING<br />PASS</p>
                </div>
                <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3 pt-5">
                  <div className="min-w-0">
                    <p className="text-xs text-marfil/70">From</p>
                    <p className="font-titulo text-2xl leading-tight">{origen.corto}</p>
                  </div>
                  <svg viewBox="0 0 48 16" className="mb-2 h-4 w-12 text-luz" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 8h40M35 3l6 5-6 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="min-w-0 text-right">
                    <p className="text-xs text-marfil/70">To</p>
                    <p className="font-titulo text-2xl leading-tight">Playa del Carmen</p>
                  </div>
                </div>
                <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-[0.9rem]">
                  <div>
                    <dt className="text-xs text-marfil/70">{local ? 'Date' : 'Arriving'}</dt>
                    <dd>{fechaTexto || 'Your dates'}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-marfil/70">Gate</dt>
                    <dd>Casa Habanero, ground floor, Int. 101</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-xs text-marfil/70">Boarding</dt>
                    <dd>Mon to Fri 9:00 to 19:00, Sat 9:00 to 14:00</dd>
                  </div>
                </dl>

                <div className="mt-6 border-t border-dashed border-marfil/25 pt-5">
                  {elegidos.length === 0 ? (
                    <p className="text-marfil/80">Pick a treatment to add it to your pass.</p>
                  ) : (
                    <ul className="space-y-3">
                      {elegidos.map((t) => (
                        <li key={t.id} className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <p className="font-semibold leading-snug">{t.nombre}</p>
                            {t.agenda && <p className="text-sm text-luz">{t.agenda}</p>}
                          </div>
                          <div className="shrink-0 text-right text-[0.9rem]">
                            {t.usd !== null ? (
                              <>
                                <p className="font-semibold">from {principal(t)}</p>
                                <p className="text-xs text-marfil/70">{secundario(t)}</p>
                              </>
                            ) : (
                              <p className="max-w-[9rem] text-xs text-marfil/80">{t.nota}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {conPrecio.length > 0 && (
                    <div className="mt-5 flex items-end justify-between gap-4 border-t border-marfil/15 pt-4">
                      <p className="text-sm text-marfil/80">
                        From, in total{sinPrecio.length > 0 ? `, plus ${sinPrecio.length} priced after evaluation` : ''}
                      </p>
                      <p className="text-right">
                        <span className="block font-titulo text-2xl text-luz">{local ? mxn(totalMxn) : usd(totalUsd)}</span>
                        <span className="text-xs text-marfil/70">{local ? usd(totalUsd) : mxn(totalMxn)}</span>
                      </p>
                    </div>
                  )}
                  {tecnologia && (
                    <p className="mt-4 text-sm text-marfil/80">
                      From the clinic: Sofwave™ and Endolifting can be combined with injectables, collagen biostimulators and regenerative treatments. The medical team decides the plan with you.
                    </p>
                  )}
                  <p className="mt-4 text-xs text-marfil/70">Final pricing is determined after medical assessment. Prices as published on altheawellnessclinic.com.</p>
                </div>

                <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn-luz mt-6 w-full">
                  <IconoWa /> {local ? 'Send my pass on WhatsApp (in Spanish)' : 'Send my pass on WhatsApp'}
                </a>
              </div>

              {/* talón */}
              <div className="relative border-t-2 border-dashed border-carbon/40 bg-arena p-5 text-carbon sm:border-l-2 sm:border-t-0">
                <span className="absolute -top-3 left-[-0.75rem] h-6 w-6 rounded-full bg-[#efe7dc] sm:hidden" aria-hidden="true" />
                <span className="absolute -top-3 right-[-0.75rem] h-6 w-6 rounded-full bg-[#efe7dc] sm:hidden" aria-hidden="true" />
                <div className="flex items-center justify-between gap-4 sm:block">
                  <div className="text-sm sm:space-y-3">
                    <p><span className="block text-xs text-gris">From</span>{origen.corto}</p>
                    <p><span className="block text-xs text-gris">Treatments</span>{elegidos.length}</p>
                    {conPrecio.length > 0 && (
                      <p><span className="block text-xs text-gris">Total from</span>{local ? mxn(totalMxn) : usd(totalUsd)}</p>
                    )}
                  </div>
                  <svg viewBox="0 0 70 40" className="h-12 w-24 sm:mt-6 sm:h-16 sm:w-full" aria-hidden="true" preserveAspectRatio="none">
                    {barras.reduce<{ x: number; el: ReactElement[] }>((acc, w, i) => {
                      if (i % 2 === 0) acc.el.push(<rect key={i} x={acc.x} y="0" width={w * 0.6} height="40" fill="#343a40" />);
                      acc.x += w * 0.6 + 0.8;
                      return acc;
                    }, { x: 0, el: [] }).el}
                  </svg>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- menú de tratamientos ---------- */
function Tratamientos({ seleccion, alternar }: { seleccion: string[]; alternar: (id: string) => void }) {
  const [activa, setActiva] = useState(categorias[0].id);
  const cat = categorias.find((c) => c.id === activa)!;
  return (
    <section id="treatments" className="bg-white py-16 md:py-24" aria-labelledby="menu-titulo">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 id="menu-titulo" className="text-3xl sm:text-[2.6rem]">Treatments &amp; prices</h2>
          <p className="mt-4 text-gris">Each procedure is performed by certified professionals in aesthetic and regenerative medicine. Prices are the clinic's "starting at" prices; final pricing is set after the medical assessment.</p>
        </div>
        <div className="mt-8 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div role="tablist" aria-label="Treatment categories" className="flex w-max gap-2 pb-2 lg:w-auto lg:flex-wrap">
            {categorias.map((c) => (
              <button key={c.id} role="tab" type="button" id={`tab-${c.id}`} aria-selected={activa === c.id} aria-controls="panel-menu"
                onClick={() => setActiva(c.id)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-[0.92rem] transition-colors ${activa === c.id ? 'border-carbon bg-carbon text-white' : 'border-carbon/25 hover:border-carbon'}`}>
                {c.nombre}
              </button>
            ))}
          </div>
        </div>
        <div id="panel-menu" role="tabpanel" aria-labelledby={`tab-${cat.id}`} className="mt-6 divide-y divide-carbon/12 border-y border-carbon/12">
          {cat.tratamientos.map((t) => {
            const on = seleccion.includes(t.id);
            return (
              <div key={t.id} className="grid gap-3 py-6 md:grid-cols-[1fr_12rem] md:gap-8">
                <div className="min-w-0">
                  <h3 className="text-xl">{t.nombre}</h3>
                  <p className="mt-1.5 text-[0.98rem] text-gris">{t.incluye}</p>
                  {t.agenda && <p className="mt-1.5 text-sm font-semibold text-taupe-hondo">{t.agenda}</p>}
                  {t.id === 'iv' && (
                    <ul className="mt-4 grid gap-x-6 gap-y-1 text-[0.95rem] sm:grid-cols-2">
                      {sueros.map((s) => <li key={s} className="border-l-2 border-taupe pl-3">{s} IV Blend</li>)}
                    </ul>
                  )}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 md:flex-col md:items-end md:justify-start md:text-right">
                  {t.usd !== null ? (
                    <p>
                      <span className="block text-xs text-gris">Starting at</span>
                      <span className="font-semibold">{usd(t.usd)}</span>
                      <span className="block text-sm text-gris">{mxn(t.mxn!)}</span>
                      {t.nota && <span className="block text-xs text-gris">{t.nota}</span>}
                    </p>
                  ) : (
                    <p className="text-sm text-gris">{t.nota}</p>
                  )}
                  <button type="button" aria-pressed={on} onClick={() => alternar(t.id)}
                    className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${on ? 'border-carbon bg-carbon text-white' : 'border-carbon/35 hover:border-carbon'}`}>
                    {on ? '✓ On your pass' : '+ Add to your pass'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Sofwave y Endolifting ---------- */
function Pasos({ pasos }: { pasos: { t: string; d: string }[] }) {
  return (
    <ol className="mt-6 space-y-0">
      {pasos.map((p, i) => (
        <li key={p.t} className="relative grid grid-cols-[2.25rem_1fr] gap-3 pb-5 last:pb-0">
          <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-taupe bg-marfil font-titulo text-taupe-hondo">{i + 1}</span>
          {i < pasos.length - 1 && <span className="absolute left-[1.1rem] top-9 bottom-0 w-px bg-taupe/60" aria-hidden="true" />}
          <div className="min-w-0 pt-1">
            <h4 className="font-semibold">{p.t}</h4>
            <p className="text-[0.95rem] text-gris">{p.d}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Tecnologia() {
  const f = foto('exosomas');
  return (
    <section id="technology" className="py-16 md:py-24" aria-labelledby="tec-titulo">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div className="min-w-0">
            <h2 id="tec-titulo" className="text-3xl sm:text-[2.6rem]">Sofwave™ and Endolifting in the Riviera Maya</h2>
            <p className="mt-4 text-gris">Two different technologies for different needs. At Althea every treatment begins with a medical assessment, and the team decides with you which one fits.</p>
          </div>
          <img src={f.src} width={f.width} height={f.height} loading="lazy"
            alt="A specialist wearing an Althea apron performs a microneedling facial with exosomes on a patient lying on a treatment bed"
            className="aspect-[3/2] w-full min-w-0 rounded-[1.5rem] object-cover" />
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="min-w-0 rounded-[1.5rem] bg-white p-6 sm:p-8">
            <h3 className="text-2xl">Sofwave™ ultrasound</h3>
            <p className="mt-3 text-[0.98rem] text-gris">{sofwave.intro}</p>
            <p className="mt-3 text-[0.98rem] font-semibold">Starting at $280 USD / $5,000 MXN, customized upon medical consultation.</p>
            <Pasos pasos={sofwave.pasos} />
            <div className="mt-6 border-t border-carbon/12 pt-5">
              <h4 className="font-semibold">Certified in Sofwave™ clinical protocols</h4>
              <ul className="mt-2 space-y-1.5 text-[0.95rem] text-gris">
                {sofwave.doctoras.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
          </div>
          <div className="min-w-0 rounded-[1.5rem] bg-white p-6 sm:p-8">
            <h3 className="text-2xl">ENDOLYSE® Endolifting</h3>
            <p className="mt-3 text-[0.98rem] text-gris">{endolifting.intro}</p>
            <table className="mt-4 w-full text-[0.95rem]">
              <caption className="sr-only">Endolifting prices</caption>
              <tbody className="divide-y divide-carbon/12">
                {endolifting.precios.map((p) => (
                  <tr key={p.zona}>
                    <th scope="row" className="py-2 pr-3 text-left font-normal">{p.zona}</th>
                    <td className="whitespace-nowrap py-2 text-right font-semibold">{p.precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2 text-xs text-gris">{endolifting.nota}</p>
            <Pasos pasos={endolifting.pasos} />
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={wa('Hello Althea! I would like a medical assessment for Sofwave™ or Endolifting.')} target="_blank" rel="noopener" className="btn"><IconoWa /> Book my assessment</a>
          <a href="#pass" className="btn-linea">Add them to your pass</a>
        </div>
      </div>
    </section>
  );
}

function Porque() {
  const f = foto('sala');
  return (
    <section className="bg-carbon py-16 text-marfil md:py-24" aria-labelledby="porque-titulo">
      <div className="contenedor grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="min-w-0">
          <h2 id="porque-titulo" className="text-3xl sm:text-[2.6rem]">Why Althea? {porque.titulo}</h2>
          {porque.texto.map((t) => <p key={t} className="mt-5 text-marfil/85">{t}</p>)}
          <p className="mt-5 font-titulo text-xl text-luz">{porque.experiencia}.</p>
          <div className="mt-8 border-t border-marfil/15 pt-6">
            <p className="text-marfil/85">{porque.tienda}</p>
            <p className="mt-2 font-semibold">{porque.marcas.join(', ')}.</p>
          </div>
        </div>
        <figure className="min-w-0">
          <img src={f.src} width={f.width} height={f.height} loading="lazy"
            alt="A client with a cup sits on the cream sofa of the Althea lounge, under the illuminated flower-shaped mirror"
            className="aspect-square w-full rounded-[1.5rem] object-cover" />
          <blockquote className="mt-6">
            <p className="font-titulo text-xl leading-snug">"{porque.cita.texto}"</p>
            <footer className="mt-2 text-sm text-marfil/75">{porque.cita.autor}</footer>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}

function Visita() {
  return (
    <section id="visit" className="py-16 md:py-24" aria-labelledby="visita-titulo">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <h2 id="visita-titulo" className="text-3xl sm:text-[2.6rem]">Visit the clinic</h2>
          <p className="mt-4 text-gris">Experience personalized medicine, beauty and wellness in our boutique clinic.</p>
          <address className="mt-8 not-italic">
            <p className="font-semibold">{negocio.nombre}</p>
            <p>{negocio.calle}</p>
            <p>{negocio.ciudad}</p>
            <p className="mt-2 text-gris">{negocio.referencia}</p>
          </address>
          <div className="mt-6">
            <h3 className="font-sans text-base font-semibold">Hours</h3>
            <ul className="mt-1 text-gris">
              {negocio.horario.map((h) => <li key={h.dias}>{h.dias}: {h.horas}</li>)}
            </ul>
          </div>
          <ul className="mt-6 space-y-2">
            <li><a className="enlace" href={waGeneral} target="_blank" rel="noopener">WhatsApp {negocio.whatsappVisible}</a></li>
            <li><a className="enlace" href={`tel:${negocio.telefono}`}>Call {negocio.whatsappVisible}</a></li>
            <li><a className="enlace" href={`mailto:${negocio.correo}`}>{negocio.correo}</a></li>
          </ul>
          <p className="mt-6 text-sm text-gris">
            Follow Althea:{' '}
            {negocio.redes.map((r, i) => (
              <span key={r.nombre}>
                <a className="enlace font-medium" href={r.url} target="_blank" rel="noopener">{r.nombre}</a>{i < negocio.redes.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        </div>
        <a href={negocio.mapa} target="_blank" rel="noopener" className="group relative block min-w-0 overflow-hidden rounded-[1.5rem] bg-carbon text-marfil">
          <svg viewBox="0 0 400 300" className="h-full min-h-[18rem] w-full" role="img" aria-label="Sketch of the corner of 42nd Street and 15th Avenue in Zazil-Ha, where the clinic is">
            <rect width="400" height="300" fill="#343a40" />
            <g stroke="#a48d78" strokeOpacity="0.35" strokeWidth="1">
              {[40, 100, 160, 220, 280].map((y) => <line key={y} x1="0" y1={y} x2="400" y2={y} />)}
              {[50, 130, 210, 290, 370].map((x) => <line key={x} x1={x} y1="0" x2={x} y2="300" />)}
            </g>
            <line x1="0" y1="160" x2="400" y2="160" stroke="#e8c98f" strokeWidth="6" />
            <line x1="210" y1="0" x2="210" y2="300" stroke="#e8c98f" strokeWidth="6" />
            <text x="16" y="150" fill="#f6f1ea" fontSize="13" fontFamily="Raleway, sans-serif">Calle 42</text>
            <text x="220" y="24" fill="#f6f1ea" fontSize="13" fontFamily="Raleway, sans-serif">15 Avenida</text>
            <circle cx="210" cy="160" r="15" fill="#e8c98f" />
            <circle cx="210" cy="160" r="5" fill="#343a40" />
            <text x="232" y="190" fill="#f6f1ea" fontSize="15" fontFamily="Marcellus, serif">Althea, Casa Habanero</text>
          </svg>
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-marfil px-4 py-2 text-sm font-semibold text-carbon group-hover:bg-luz">
            <IconoPin className="h-4 w-4" /> Open in Google Maps
          </span>
        </a>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-carbon-hondo pb-28 pt-12 text-marfil/80 lg:pb-12">
      <div className="contenedor flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Logotipo claro />
        <p className="text-sm">Aesthetic medicine, the art of wellbeing. {negocio.calle}, {negocio.ciudad}.</p>
        <a className="text-sm underline underline-offset-4 hover:text-white" href="https://altheawellnessclinic.com/aviso-de-privacidad" target="_blank" rel="noopener">Privacy Notice</a>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-carbon/15 bg-marfil/97 text-[0.85rem] font-semibold backdrop-blur lg:hidden">
      <a href={waGeneral} target="_blank" rel="noopener" className="flex flex-col items-center gap-0.5 bg-carbon py-2.5 text-white"><IconoWa /> WhatsApp</a>
      <a href={`tel:${negocio.telefono}`} className="flex flex-col items-center gap-0.5 py-2.5"><IconoTel /> Call</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex flex-col items-center gap-0.5 py-2.5"><IconoPin /> Directions</a>
    </nav>
  );
}

export default function App() {
  const [seleccion, setSeleccion] = useState<string[]>(['sofwave', 'botox']);
  const alternar = (id: string) => setSeleccion((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  return (
    <>
      <a href="#pass" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Skip to your pass</a>
      <Encabezado />
      <main>
        <Portada />
        <Pilares />
        <Pase seleccion={seleccion} alternar={alternar} />
        <Tratamientos seleccion={seleccion} alternar={alternar} />
        <Tecnologia />
        <Porque />
        <Visita />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
