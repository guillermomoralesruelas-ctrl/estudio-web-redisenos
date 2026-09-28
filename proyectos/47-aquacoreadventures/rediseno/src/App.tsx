import { useMemo, useState } from 'react';
import {
  negocio, wa, msgGeneral, foto, confianza, costas, progreso, avisos, meses, mesesCortos,
  flota, medidasFlota, incluyeCharter, tiposCharter, kite, sup, cancun, razones, premios,
  type Nivel,
} from './data/content';

const enlace = (ruta: string) => `${negocio.web}${ruta}`;
const pesos = (n: number) => `$${n.toLocaleString('en-US')} MXN`;

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

function Encabezado() {
  const links = [
    ['#coasts', 'Destinations'],
    ['#month', 'Progreso by month'],
    ['#fleet', 'Fleet'],
    ['#kitesurf', 'Kitesurf'],
    ['#contact', 'Contact'],
  ];
  return (
    <header className="sticky top-0 z-40 bg-marino/95 text-white backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={foto('logo.webp')} alt="AquaCore Adventures logo" width={40} height={38} className="h-10 w-auto" />
          <span className="font-serif text-lg">AquaCore Adventures</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-6 text-sm text-bruma lg:flex">
          {links.map(([href, t]) => <a key={href} href={href} className="hover:text-white">{t}</a>)}
        </nav>
        <a href={wa(msgGeneral)} className="btn-wa hidden !py-2 text-sm sm:inline-flex"><IconoWa /> WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-marino text-white">
      <img src={foto('hero-yate-cancun.webp')} alt="Motor yacht anchored on turquoise water off the Cancun Hotel Zone, seen from above"
        width={1600} height={1200} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-marino via-marino/60 to-marino/10" />
      <div className="contenedor flex min-h-[34rem] flex-col justify-end pb-12 pt-32 sm:min-h-[40rem]">
        <p className="font-serif text-xl italic text-bruma">{negocio.lema}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-[2.5rem] leading-[1.05] sm:text-6xl">
          Yacht charters, kitesurf &amp; water sports on four Mexican coasts
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/90">
          Book luxury yachts, kitesurfing lessons with certified instructors, scuba diving, snorkeling, and more — directly with local experts. No middlemen, best prices guaranteed.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={wa(msgGeneral)} className="btn-wa"><IconoWa /> Book on WhatsApp</a>
          <a href="#month" className="btn-claro text-white hover:bg-white/10">Plan your month in Progreso</a>
        </div>
        <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-4 border-t border-white/25 pt-6 sm:grid-cols-4">
          {confianza.map((c) => (
            <div key={c.valor}>
              <dt className="font-semibold">{c.valor}</dt>
              <dd className="text-sm text-bruma">{c.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Costas() {
  return (
    <section id="coasts" className="py-20">
      <div className="contenedor">
        <h2 className="titulo max-w-2xl">One operator, four coastlines</h2>
        <p className="mt-4 max-w-2xl text-gris">Pick your shore — each destination runs with local captains, certified instructors and its own range of adventures.</p>
        <ul className="mt-10 divide-y divide-linea border-y border-linea">
          {costas.map((c) => (
            <li key={c.nombre} className="grid gap-3 py-7 md:grid-cols-[16rem_1fr_auto] md:items-baseline md:gap-8">
              <div>
                <h3 className="font-serif text-3xl">{c.nombre}</h3>
                <p className="font-serif italic text-laguna">{c.mar}</p>
              </div>
              <div className="min-w-0">
                <p>{c.frase}</p>
                <p className="mt-2 text-sm text-gris">{c.actividades.join(', ')}</p>
              </div>
              <a href={enlace(c.url)} className="text-sm font-medium text-laguna underline underline-offset-4 hover:text-marino">
                {c.actividades.length} experiences in {c.nombre}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Elemento memorable: Progreso, mes por mes ---------- */

const etiqueta: Record<Nivel, string> = { peak: 'Peak season', good: 'Good', low: 'Low season' };
const orden: Record<Nivel, number> = { peak: 0, good: 1, low: 2 };
const estiloNivel: Record<Nivel, string> = {
  peak: 'bg-sol text-marino',
  good: 'bg-bruma text-marino',
  low: 'bg-transparent text-bruma border border-bruma/60',
};

function mesMerida() {
  try {
    const m = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Merida', month: 'numeric' }).format(new Date());
    return Math.min(11, Math.max(0, Number(m) - 1));
  } catch { return new Date().getMonth(); }
}

function Escena({ mes }: { mes: number }) {
  const viento = progreso.find((a) => a.id === 'kitesurf')!.meses[mes];
  const tormenta = mes === 7 || mes === 8;
  const fuerza = viento === 'peak' ? 2 : viento === 'good' ? 1 : 0;
  const cielo = tormenta ? ['#5b6b7c', '#9fb0bf'] : fuerza === 2 ? ['#3f7fae', '#b8e2f2'] : ['#2f8fcf', '#cdeef9'];
  const mar = tormenta ? '#2c5a6e' : '#1a8aa8';
  return (
    <svg viewBox="0 0 800 300" className="h-auto w-full" role="img"
      aria-label={`Drawing of the Progreso coast in ${meses[mes]}: ${fuerza === 2 ? 'nortes wind with kites in the sky' : fuerza === 1 ? 'a light breeze' : 'flat, calm water'}${tormenta ? ' and storm clouds' : ''}.`}>
      <defs>
        <linearGradient id="cielo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={cielo[0]} /><stop offset="1" stopColor={cielo[1]} />
        </linearGradient>
        <linearGradient id="mar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={mar} /><stop offset="1" stopColor="#0a3553" />
        </linearGradient>
      </defs>
      <rect width="800" height="170" fill="url(#cielo)" />
      {!tormenta && <circle cx="640" cy="70" r="26" fill="#f2b233" opacity={fuerza === 2 ? 0.75 : 1} />}
      {tormenta && (
        <g fill="#3d4a57" opacity="0.9">
          <ellipse cx="520" cy="60" rx="120" ry="30" /><ellipse cx="620" cy="48" rx="90" ry="28" /><ellipse cx="260" cy="70" rx="110" ry="24" />
          <g stroke="#cfd8e0" strokeWidth="2" opacity="0.7">
            {[480, 510, 540, 570, 600, 630, 230, 260, 290].map((x) => <line key={x} x1={x} y1="95" x2={x - 12} y2="150" />)}
          </g>
        </g>
      )}
      <rect y="170" width="800" height="130" fill="url(#mar)" />
      {/* Muelle de Progreso: largo, entra al Golfo hasta perderse */}
      <g stroke="#e8e3d9" strokeWidth="3">
        <line x1="0" y1="232" x2="560" y2="174" />
        {Array.from({ length: 14 }, (_, i) => {
          const x = 20 + i * 40; const y = 232 - (58 * x) / 560;
          return <line key={i} x1={x} y1={y} x2={x} y2={y + 10 - i * 0.5} strokeWidth="2" />;
        })}
      </g>
      {/* Faro */}
      <g>
        <rect x="70" y="118" width="16" height="62" fill="#f7f4ef" />
        <rect x="66" y="112" width="24" height="8" fill="#0a2540" />
        <rect x="72" y="100" width="12" height="12" fill="#f2b233" />
        <polygon points="68,100 88,100 78,90" fill="#0a2540" />
        <rect y="176" width="160" height="14" fill="#e8e3d9" />
      </g>
      {/* Mar: liso o picado según el viento */}
      <g className="vaiven" stroke="#b8e2f2" strokeLinecap="round" fill="none" opacity="0.7">
        {fuerza === 0
          ? [200, 225, 255].map((y, i) => <line key={y} x1={180 + i * 40} y1={y} x2={420 + i * 70} y2={y} strokeWidth="2" />)
          : Array.from({ length: fuerza === 2 ? 22 : 10 }, (_, i) => {
            const x = 190 + ((i * 97) % 580); const y = 190 + ((i * 41) % 95);
            return <path key={i} d={`M${x} ${y} l8 -6 l8 6`} strokeWidth="2" />;
          })}
      </g>
      {/* Viento: rachas y cometas en temporada de nortes */}
      {fuerza > 0 && (
        <g className="racha" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.8">
          {Array.from({ length: fuerza === 2 ? 6 : 3 }, (_, i) => (
            <line key={i} x1={180 + i * 90} y1={40 + (i % 3) * 30} x2={250 + i * 90} y2={52 + (i % 3) * 30} />
          ))}
        </g>
      )}
      {fuerza === 2 && (
        <g>
          {[[430, 70, 470, 230], [600, 110, 660, 250]].map(([kx, ky, rx, ry], i) => (
            <g key={i}>
              <line x1={kx} y1={ky + 10} x2={rx} y2={ry - 14} stroke="#0a2540" strokeWidth="1" />
              <path className="cometa" d={`M${kx - 34} ${ky + 12} Q${kx} ${ky - 22} ${kx + 34} ${ky + 12} Q${kx} ${ky - 6} ${kx - 34} ${ky + 12}Z`} fill={i ? '#e2463b' : '#f2b233'} />
              <circle cx={rx} cy={ry - 20} r="4" fill="#0a2540" />
              <line x1={rx} y1={ry - 16} x2={rx} y2={ry - 4} stroke="#0a2540" strokeWidth="3" />
              <line x1={rx - 12} y1={ry} x2={rx + 12} y2={ry - 2} stroke="#0a2540" strokeWidth="4" strokeLinecap="round" />
            </g>
          ))}
        </g>
      )}
      {fuerza < 2 && !tormenta && (
        <g className="vaiven">
          <path d="M470 212 h120 l-14 16 h-96 Z" fill="#f7f4ef" />
          <path d="M500 212 v-14 h52 l18 14 Z" fill="#e8e3d9" />
          <rect x="512" y="202" width="28" height="5" fill="#0a3553" />
          <line x1="480" y1="232" x2="580" y2="232" stroke="#b8e2f2" strokeWidth="2" opacity="0.6" />
        </g>
      )}
    </svg>
  );
}

function PorMes() {
  const [mes, setMes] = useState(mesMerida);
  const [elegida, setElegida] = useState<string | null>(null);
  const lista = useMemo(
    () => [...progreso].sort((a, b) => orden[a.meses[mes]] - orden[b.meses[mes]]),
    [mes],
  );
  const notas = avisos.filter((a) => a.meses.includes(mes));
  const act = progreso.find((a) => a.id === elegida) ?? null;
  const mensaje = `Hi! We're planning a trip to Progreso in ${meses[mes]}.${act ? ` We're interested in: ${act.nombre} (${etiqueta[act.meses[mes]].toLowerCase()} that month on your calendar).` : ' What do you recommend that month?'}`;

  return (
    <section id="month" className="bg-marino py-20 text-white">
      <div className="contenedor">
        <h2 className="titulo max-w-3xl">Wind or glass? <span className="italic text-bruma">Progreso, month by month</span></h2>
        <p className="mt-4 max-w-3xl text-bruma">
          Yachts, jet skis and paddleboards want flat water. Kites want the nortes. On the Gulf coast they happen in opposite months, so we put the season calendars of our seven Progreso adventures in one place. Pick the month you are coming.
        </p>

        <div role="group" aria-label="Month" className="mt-8 grid grid-cols-6 gap-2 sm:grid-cols-12">
          {mesesCortos.map((m, i) => (
            <button key={m} type="button" onClick={() => setMes(i)} aria-pressed={mes === i}
              className={`rounded-md py-2 text-sm font-medium transition-colors ${mes === i ? 'bg-sol text-marino' : 'bg-profundo text-bruma hover:bg-white/15'}`}>
              {m}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="min-w-0">
            <div className="overflow-hidden rounded-xl border border-white/15">
              <Escena mes={mes} />
            </div>
            <h3 className="mt-6 font-serif text-2xl">{meses[mes]} on the Yucatán coast</h3>
            <ul className="mt-3 space-y-2 text-bruma">
              {notas.map((n) => <li key={n.texto} className="border-l-2 border-sol pl-3">{n.texto}</li>)}
            </ul>
          </div>

          <div className="min-w-0">
            <ol className="divide-y divide-white/10 overflow-hidden rounded-xl bg-profundo">
              {lista.map((a) => {
                const nivel = a.meses[mes];
                const activa = elegida === a.id;
                return (
                  <li key={a.id}>
                    <button type="button" onClick={() => setElegida(activa ? null : a.id)} aria-expanded={activa}
                      className={`w-full px-5 py-4 text-left transition-colors ${activa ? 'bg-white/10' : 'hover:bg-white/5'}`}>
                      <span className="flex items-center justify-between gap-3">
                        <span className="font-medium">{a.nombre}</span>
                        <span className={`shrink-0 rounded-full px-3 py-0.5 text-xs font-semibold ${estiloNivel[nivel]}`}>{etiqueta[nivel]}</span>
                      </span>
                      <span className="mt-1 block text-sm text-bruma">{a.precio} · {a.dato}</span>
                      {activa && <span className="mt-3 block text-sm leading-relaxed text-white/90">{a.nota}</span>}
                    </button>
                  </li>
                );
              })}
            </ol>
            <a href={wa(mensaje)} className="btn-wa mt-5 w-full"><IconoWa />
              {act ? `Ask about ${act.nombre} in ${meses[mes]}` : `Ask what's best in ${meses[mes]}`}
            </a>
            <p className="mt-3 text-xs text-bruma">Seasons as published on each activity page of aquacoreadventures.com. Weather cancellations are always refunded or rescheduled.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Flota de Progreso ---------- */

const grupos = [
  { n: 1, t: 'Any size' }, { n: 7, t: '7+' }, { n: 11, t: '11+' }, { n: 16, t: '16+' }, { n: 21, t: '21+' },
];

function Flota() {
  const [minimo, setMinimo] = useState(1);
  const visibles = flota.filter((b) => b.huespedes >= minimo);
  return (
    <section id="fleet" className="py-20">
      <div className="contenedor">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <h2 className="titulo">Pick your Progreso yacht</h2>
            <p className="mt-4 text-gris">{incluyeCharter}</p>
          </div>
          <div>
            <p className="font-medium">How many of you?</p>
            <div role="group" aria-label="Group size" className="mt-3 flex flex-wrap gap-2">
              {grupos.map((g) => (
                <button key={g.n} type="button" onClick={() => setMinimo(g.n)} aria-pressed={minimo === g.n}
                  className={`rounded-full border px-4 py-1.5 text-sm ${minimo === g.n ? 'border-marino bg-marino text-white' : 'border-linea bg-white hover:border-marino'}`}>
                  {g.t}
                </button>
              ))}
            </div>
            <p className="mt-3 text-sm text-gris">{visibles.length} of 15 private crewed boats out of Marina Yucalpetén · from MXN $7,999 to $49,999</p>
          </div>
        </div>

        <ul className="mt-10 grid gap-x-8 md:grid-cols-2">
          {visibles.map((b) => (
            <li key={b.nombre} className="flex gap-4 border-t border-linea py-5">
              {b.foto ? (
                <img src={foto(`${b.foto}.webp`)} alt={`${b.nombre} ${b.tipo.toLowerCase()} for charter in Progreso`}
                  width={medidasFlota[b.foto][0]} height={medidasFlota[b.foto][1]} loading="lazy"
                  className="h-24 w-28 shrink-0 rounded-lg object-cover sm:w-36" />
              ) : (
                <div className="flex h-24 w-28 shrink-0 items-center justify-center rounded-lg bg-bruma/50 text-center text-xs text-gris sm:w-36">Photo coming soon</div>
              )}
              <div className="min-w-0 flex-1">
                <p className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-serif text-xl">{b.nombre}</span>
                  {b.nota && <span className="text-xs font-semibold text-laguna">{b.nota}</span>}
                </p>
                <p className="text-sm text-gris">{b.tipo} · up to {b.huespedes} guests · {b.horas} h</p>
                <div className="mt-1 h-1 rounded bg-linea" aria-hidden="true">
                  <div className="h-1 rounded bg-laguna" style={{ width: `${(b.pies / 77) * 100}%` }} />
                </div>
                <p className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-medium">From {pesos(b.precio)}</span>
                  <a href={wa(`Hi! I'd like to charter the ${b.nombre} (${b.tipo}) from Marina Yucalpetén in Progreso. We are ___ guests, date: ___`)}
                    className="text-sm font-medium text-laguna underline underline-offset-4 hover:text-marino">Ask on WhatsApp</a>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="mt-14 font-serif text-3xl">Charter types from Marina Yucalpetén</h3>
        <dl className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {tiposCharter.map((t) => (
            <div key={t.nombre} className="border-l-2 border-laguna pl-4">
              <dt className="font-medium">{t.nombre} <span className="font-normal text-gris">· {t.duracion}</span></dt>
              <dd className="mt-1 text-gris">{t.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Kitesurf() {
  return (
    <section id="kitesurf" className="bg-white py-20">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-3 self-start">
          <img src={foto('kite-foil.webp')} alt="Kite foiler lifting off turquoise water in Mexico" width={1600} height={1067} loading="lazy"
            className="col-span-2 aspect-[3/2] w-full rounded-xl object-cover" />
          <img src={foto('kite-isla-blanca.webp')} alt="Student celebrating next to her red kite on the white sand of Isla Blanca" width={946} height={1000} loading="lazy"
            className="aspect-square w-full rounded-xl object-cover" />
          <img src={foto('kite-escuela.webp')} alt="Student in harness and impact vest at the Isla Blanca kitesurf school" width={720} height={900} loading="lazy"
            className="aspect-square w-full rounded-xl object-cover object-top" />
        </div>
        <div className="min-w-0">
          <h2 className="titulo">Kitesurf at Isla Blanca, <span className="italic text-laguna">IKO certified</span></h2>
          <p className="mt-4 text-gris">{kite.texto}</p>
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
            {kite.datos.map((d) => (
              <div key={d.texto}><dt className="font-serif text-2xl">{d.valor}</dt><dd className="text-sm text-gris">{d.texto}</dd></div>
            ))}
          </dl>
          <ul className="mt-8 space-y-5">
            {kite.programas.map((p) => (
              <li key={p.nombre}>
                <p className="font-medium">{p.nombre} <span className="font-normal text-gris">· {p.para}</span></p>
                <p className="mt-1 text-gris">{p.texto}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gris">{kite.temporada}</p>
          <a href={wa("Hi! I'd like to book a kitesurf lesson at Isla Blanca, Cancun. My level: ___ Dates: ___")} className="btn-wa mt-6"><IconoWa /> Book a kite lesson</a>
        </div>
      </div>
    </section>
  );
}

function Paddle() {
  return (
    <section className="py-20">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="min-w-0 lg:order-2">
          <div className="grid grid-cols-3 gap-3">
            <img src={foto('sup-muelle.webp')} alt="Paddleboarder kneeling on her board with the Progreso pier behind her" width={751} height={1000} loading="lazy"
              className="aspect-[3/4] w-full rounded-xl object-cover" />
            <img src={foto('sup-manglar.webp')} alt="Paddleboarder standing in the Chelem mangrove channel" width={751} height={1000} loading="lazy"
              className="aspect-[3/4] w-full rounded-xl object-cover" />
            <img src={foto('sup-amanecer.webp')} alt="Paddleboard tour at sunrise over the Progreso estuary" width={751} height={1000} loading="lazy"
              className="aspect-[3/4] w-full rounded-xl object-cover" />
            <img src={foto('sup-amigos.webp')} alt="Group of friends sitting on paddleboards in the mangroves near Progreso" width={1000} height={666} loading="lazy"
              className="col-span-3 aspect-[5/2] w-full rounded-xl object-cover" />
          </div>
        </div>
        <div className="min-w-0">
          <h2 className="titulo">Paddleboard in Progreso: <span className="italic text-laguna">sea or mangrove</span></h2>
          <p className="mt-4 text-gris">{sup.texto}</p>
          <p className="mt-5 font-serif text-2xl">$650 MXN per person · 2:00–2:30 h</p>
          <dl className="mt-6 space-y-4">
            {sup.rutas.map((r) => (
              <div key={r.nombre}><dt className="font-medium">{r.nombre}</dt><dd className="mt-1 text-gris">{r.texto}</dd></div>
            ))}
          </dl>
          <table className="mt-7 w-full text-left text-sm">
            <caption className="mb-2 text-left font-medium">Three daily departures</caption>
            <tbody className="divide-y divide-linea border-y border-linea">
              {sup.salidas.map((s) => (
                <tr key={s.hora}>
                  <th scope="row" className="whitespace-nowrap py-3 pr-4 font-serif text-lg font-medium">{s.hora}</th>
                  <td className="py-3 text-gris"><span className="font-medium text-marino">{s.nombre}.</span> {s.texto}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href={wa("Hi! I'd like to book the paddleboard tour in Progreso. Route (sea or mangrove): ___ Departure (5:10 am, 6:00 am or 4:30 pm): ___ People: ___")}
            className="btn-wa mt-7"><IconoWa /> Book your paddle</a>
        </div>
      </div>
    </section>
  );
}

function Cancun() {
  return (
    <section className="bg-white py-20">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <img src={foto('yate-cancun-aereo.webp')} alt="Yacht cruising on deep blue water off Cancun" width={1280} height={720} loading="lazy"
            className="aspect-[16/10] w-full rounded-xl object-cover" />
          <div className="min-w-0">
            <h2 className="titulo">Our adventures in <span className="italic text-laguna">Cancun</span></h2>
            <p className="mt-4 text-gris">{cancun.texto}</p>
            <p className="mt-4 text-sm text-gris">{cancun.temporada}</p>
          </div>
        </div>
        <dl className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {cancun.actividades.map((a) => (
            <div key={a.nombre}>
              <dt className="font-serif text-xl">{a.nombre}</dt>
              <dd className="mt-1 text-sm text-gris">{a.texto}</dd>
            </div>
          ))}
        </dl>
        <a href={wa("Hi! I'm interested in an adventure in Cancun: ___ Date: ___ People: ___")} className="btn-wa mt-10"><IconoWa /> Plan your Cancun adventure</a>
      </div>
    </section>
  );
}

function Razones() {
  return (
    <section className="py-20">
      <div className="contenedor">
        <h2 className="titulo max-w-2xl">Why book with AquaCore Adventures?</h2>
        <p className="mt-4 text-gris">Direct booking = best prices, no hidden fees, and real local experts.</p>
        <dl className="mt-10 grid gap-8 sm:grid-cols-2">
          {razones.map((r) => (
            <div key={r.titulo} className="border-t-2 border-marino pt-4">
              <dt className="font-serif text-2xl">{r.titulo}</dt>
              <dd className="mt-2 text-gris">{r.texto}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 font-serif text-xl italic text-laguna">{premios}</p>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contact" className="bg-marino py-20 text-white">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="titulo">Ready to book your adventure?</h2>
          <p className="mt-4 text-bruma">Spots fill up fast — secure your date today. We respond within 1 hour | No payment required to book | English &amp; Spanish.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={wa(msgGeneral)} className="btn-wa"><IconoWa /> WhatsApp {negocio.telefono}</a>
            <a href={`mailto:${negocio.email}`} className="btn-claro text-white hover:bg-white/10">Send email</a>
          </div>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="font-serif text-xl">Office</dt>
            <dd className="mt-1 text-bruma">{negocio.direccion}, Cancún, Q. Roo</dd>
            <dd className="mt-2"><a href={negocio.mapa} className="underline underline-offset-4 hover:text-sol">Open in Google Maps</a></dd>
          </div>
          <div>
            <dt className="font-serif text-xl">Progreso charters</dt>
            <dd className="mt-1 text-bruma">Marina Yucalpetén, 10 minutes from downtown Progreso and 40 minutes from Mérida.</dd>
            <dd className="mt-2"><a href={negocio.marina} className="underline underline-offset-4 hover:text-sol">Open in Google Maps</a></dd>
          </div>
          <div>
            <dt className="font-serif text-xl">Hours</dt>
            <dd className="mt-1 text-bruma">{negocio.horario}</dd>
          </div>
          <div>
            <dt className="font-serif text-xl">Phone &amp; email</dt>
            <dd className="mt-1"><a href={`tel:${negocio.tel}`} className="underline underline-offset-4 hover:text-sol">{negocio.telefono}</a></dd>
            <dd className="mt-1 break-all"><a href={`mailto:${negocio.email}`} className="underline underline-offset-4 hover:text-sol">{negocio.email}</a></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-marino pb-28 pt-2 text-sm text-bruma md:pb-10">
      <div className="contenedor flex flex-col gap-3 border-t border-white/15 pt-6 sm:flex-row sm:justify-between">
        <p>© 2026 AquaCore Adventures. Premium water adventures across Yucatán &amp; Quintana Roo — booked directly with the operator.</p>
        <p className="flex gap-4">
          <a href={enlace('/es/')} className="underline underline-offset-4 hover:text-white">Español</a>
          <a href={enlace('/privacy-policy/')} className="underline underline-offset-4 hover:text-white">Privacy</a>
          <a href={enlace('/terms/')} className="underline underline-offset-4 hover:text-white">Terms</a>
        </p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/15 bg-marino text-sm text-white md:hidden">
      <a href={wa(msgGeneral)} className="flex flex-col items-center gap-0.5 bg-wa py-2.5 font-medium text-marino"><IconoWa /> WhatsApp</a>
      <a href={`tel:${negocio.tel}`} className="flex flex-col items-center gap-0.5 py-2.5">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 3h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>
        Call
      </a>
      <a href={negocio.mapa} className="flex flex-col items-center gap-0.5 py-2.5">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-7-6.3-7-12a7 7 0 0 1 14 0c0 5.7-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
        Maps
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Costas />
        <PorMes />
        <Flota />
        <Kitesurf />
        <Paddle />
        <Cancun />
        <Razones />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
