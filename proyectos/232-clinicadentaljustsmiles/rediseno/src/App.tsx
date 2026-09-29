import { useMemo, useState } from 'react';
import {
  equipo, faq, foto, horario, horarioPorDia, mision, negocio, porQue, puntos, resenas, servicios, wa, waCita,
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
function Estrella({ className = 'h-4 w-4' }: { className?: string }) {
  return <svg viewBox="0 0 20 20" className={className} fill="currentColor" aria-hidden="true"><path d="m10 1.5 2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.8Z" /></svg>;
}

function Marca({ className = '', verde = 'text-hoja' }: { className?: string; verde?: string }) {
  return <span className={`marca ${className}`}>just<span className={verde}>smiles</span><sup className="text-[0.55em]">®</sup></span>;
}

const secciones = [['#trip', 'Plan your visit'], ['#services', 'Services'], ['#team', 'Team'], ['#reviews', 'Reviews'], ['#contact', 'Contact']] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-marino/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#top" className="text-[1.7rem] text-marino" aria-label="Justsmiles, back to top"><Marca /></a>
        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex gap-7 text-[0.95rem]">
            {secciones.map(([h, t]) => <li key={h}><a href={h} className="text-pizarra hover:text-marino">{t}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={negocio.espanol} lang="es" className="text-[0.95rem] font-semibold text-hoja underline underline-offset-4">Español</a>
          <a href={waCita} className="btn-marino hidden !min-h-[42px] !py-2 sm:inline-flex" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
        </div>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="top" className="bg-niebla">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <p className="font-semibold text-hoja">{negocio.subtitulo}, since {negocio.desde}</p>
          <h1 className="mt-3 text-[2.5rem] sm:text-[3.6rem]">Dental specialists in Puerto Vallarta</h1>
          <p className="mt-5 max-w-xl text-[1.08rem] text-pizarra">{porQue}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#trip" className="btn-marino">Plan your visit</a>
            <a href={waCita} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> {negocio.whatsappTexto}</a>
          </div>
          <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-4 border-t border-marino/10 pt-6">
            <div>
              <dt className="text-[0.85rem] text-pizarra">Google rating</dt>
              <dd className="flex items-center gap-2 text-[1.5rem] font-semibold">{negocio.google.nota}<span className="flex text-hoja"><Estrella /><Estrella /><Estrella /><Estrella /><Estrella /></span><span className="text-[0.9rem] font-normal text-pizarra">{negocio.google.resenas} reviews</span></dd>
            </div>
            <div>
              <dt className="text-[0.85rem] text-pizarra">Monday to Friday</dt>
              <dd className="text-[1.5rem] font-semibold">9 am to 8 pm</dd>
            </div>
          </dl>
        </div>
        <figure className="relative mx-auto w-full max-w-[24rem]">
          <div className="absolute inset-x-6 bottom-0 top-16 rounded-[2rem] bg-marino" aria-hidden="true" />
          <img src={foto('dr-martin-guillen')} alt="Dr. Martín Guillén smiling with arms crossed, in navy Justsmiles scrubs"
            width={600} height={810} fetchPriority="high" className="relative aspect-[3/4] w-full object-cover object-top" />
          <figcaption className="relative -mt-3 rounded-xl bg-white px-5 py-3 text-center shadow-lg shadow-marino/10">
            <span className="block font-display text-[1.2rem] font-bold">Dr. Martín Guillén</span>
            <span className="text-[0.9rem] text-pizarra">Clínica Dental Dr. Guillén</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

const DIA = 86400000;
const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const desdeIso = (s: string) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const largo = (d: Date) => d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
const corto = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

function Viaje() {
  const hoy = new Date(); hoy.setHours(0, 0, 0, 0);
  const [llegada, setLlegada] = useState(iso(new Date(hoy.getTime() + 7 * DIA)));
  const [noches, setNoches] = useState(7);
  const [elegido, setElegido] = useState<string | null>(null);
  const [servicio, setServicio] = useState(servicios[0].id);

  const dias = useMemo(() => {
    const inicio = desdeIso(llegada);
    return Array.from({ length: noches + 1 }, (_, i) => new Date(inicio.getTime() + i * DIA));
  }, [llegada, noches]);
  const abiertos = dias.filter((d) => horarioPorDia[d.getDay()]);
  const elegidoDia = dias.find((d) => iso(d) === elegido) ?? null;
  const s = servicios.find((x) => x.id === servicio)!;
  const salida = dias[dias.length - 1];
  const proxima = new Date((elegidoDia ?? dias[0]).getTime()); proxima.setMonth(proxima.getMonth() + 6);

  const mensaje = `Hi! I'll be in Puerto Vallarta from ${largo(dias[0])} to ${largo(salida)}. ` +
    `I'd like to book: ${s.nombre}` + (elegidoDia ? `, ideally on ${largo(elegidoDia)}.` : '. Which days do you have available?');

  return (
    <section id="trip" className="oscuro py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-[2.2rem] sm:text-[2.9rem]">Book around your Vallarta trip</h2>
          <p className="mt-3">
            Tell us when you land and how long you stay. Your days show up with the clinic’s real hours, so you can pick one
            that fits between the beach and dinner, and send it on WhatsApp.
          </p>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-3">
          <label className="block font-semibold text-white">Arriving on
            <input type="date" value={llegada} min={iso(hoy)} onChange={(e) => { if (e.target.value) { setLlegada(e.target.value); setElegido(null); } }}
              className="mt-2 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 font-normal text-white [color-scheme:dark]" />
          </label>
          <label className="block font-semibold text-white">Nights in Vallarta: {noches}
            <input type="range" min={1} max={21} value={noches} onChange={(e) => { setNoches(Number(e.target.value)); setElegido(null); }}
              className="mt-4 w-full accent-[#7ac142]" />
          </label>
          <label className="block font-semibold text-white">What for?
            <select value={servicio} onChange={(e) => setServicio(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 font-normal text-white">
              {servicios.map((x) => <option key={x.id} value={x.id} className="bg-marino">{x.nombre}</option>)}
            </select>
          </label>
        </div>

        <ol className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-8" aria-label="Your days in Puerto Vallarta">
          {dias.map((d) => {
            const h = horarioPorDia[d.getDay()];
            const sel = elegido === iso(d);
            return (
              <li key={iso(d)} className="min-w-0">
                <button type="button" disabled={!h} aria-pressed={sel} onClick={() => setElegido(iso(d))}
                  className={`flex h-full min-h-[92px] w-full flex-col rounded-xl border-2 p-3 text-left transition-colors ${
                    !h ? 'cursor-not-allowed border-white/10 text-nube/70' : sel ? 'border-lima bg-lima text-marino' : 'border-white/20 hover:border-lima'}`}>
                  <span className="text-[0.8rem] font-semibold uppercase tracking-wide">{d.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                  <span className="font-display text-[1.25rem] font-bold">{corto(d)}</span>
                  <span className="mt-auto text-[0.78rem] leading-tight">{h ? `${h[0]}–${h[1]}` : 'Closed'}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center" aria-live="polite">
          <div className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/15">
            <p className="text-white">
              {abiertos.length} of your {dias.length} days the clinic is open.{' '}
              {elegidoDia ? <>You picked <strong className="text-lima">{largo(elegidoDia)}</strong> for {s.nombre.toLowerCase()}.</> : 'Tap a day to pick it.'}
            </p>
            <p className="mt-2 text-[0.95rem]">
              Next check-up: about <strong className="text-white">{proxima.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</strong>, since
              they recommend one every 6 months.
            </p>
          </div>
          <a href={wa(mensaje)} className="btn w-full lg:w-auto" target="_blank" rel="noopener"><IconoWa /> Send my dates on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  const [abierto, setAbierto] = useState('implants');
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <h2 className="text-[2.2rem] sm:text-[2.8rem]">Complete care for every smile</h2>
          <p className="mt-4 text-pizarra">{mision}</p>
          <ul className="mt-8 space-y-5">
            {puntos.map(([t, d]) => (
              <li key={t} className="border-l-4 border-lima pl-5"><h3 className="text-[1.2rem]">{t}</h3><p className="mt-1 text-pizarra">{d}</p></li>
            ))}
          </ul>
        </div>
        <div className="divide-y divide-marino/10 border-y border-marino/10">
          {servicios.filter((x) => x.id !== 'cleaning').map((x) => (
            <details key={x.id} open={abierto === x.id} onToggle={(e) => { if ((e.target as HTMLDetailsElement).open) setAbierto(x.id); }} className="group py-2">
              <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between gap-4 py-2">
                <h3 className="text-[1.35rem]">{x.nombre}</h3>
                <span aria-hidden="true" className="text-[1.5rem] text-hoja transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="pb-5">
                <p className="text-pizarra">{x.texto}</p>
                {x.incluye ? (
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {x.incluye.map(([t, d]) => <li key={t} className="rounded-xl bg-niebla p-4"><p className="font-semibold">{t}</p><p className="mt-1 text-[0.93rem] text-pizarra">{d}</p></li>)}
                  </ul>
                ) : null}
                <a href={wa(`Hi, I would like information about ${x.nombre.toLowerCase()} at Justsmiles.`)} className="enlace mt-4 inline-block" target="_blank" rel="noopener">Ask about {x.nombre.toLowerCase()}</a>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section id="team" className="bg-niebla py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.2rem] sm:text-[2.8rem]">Committed to your smile</h2>
        <p className="mt-3 max-w-2xl text-pizarra">Our experienced dental team is here to make every visit positive and personalized.</p>
        <ul className="mt-9 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {equipo.map((p) => (
            <li key={p.foto}>
              <img src={foto(p.foto)} alt={`Portrait of ${p.nombre}`} width={600} height={810} loading="lazy" className="aspect-[3/4] w-full rounded-2xl bg-white object-cover object-top" />
              <p className="mt-3 font-display text-[1.2rem] font-bold">{p.nombre}</p>
              <p className="text-[0.95rem] text-pizarra">Dental Specialist</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Resenas() {
  return (
    <section id="reviews" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[2.2rem] sm:text-[2.8rem]">What patients say</h2>
          <p className="flex items-center gap-2 text-pizarra"><span className="flex text-hoja"><Estrella /><Estrella /><Estrella /><Estrella /><Estrella /></span>{negocio.google.nota} on Google, {negocio.google.resenas} reviews</p>
        </div>
        <div className="mt-9 columns-1 gap-6 md:columns-2 lg:columns-3">
          {resenas.map((r) => (
            <figure key={r.autor} className="mb-6 break-inside-avoid rounded-2xl border border-marino/10 p-6">
              <blockquote className="text-pizarra">“{r.texto}”</blockquote>
              <figcaption className="mt-3 font-semibold">{r.autor}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-niebla py-16 sm:py-20">
      <div className="contenedor grid gap-8 lg:grid-cols-[1fr_1.6fr]">
        <h2 className="text-[2.2rem] sm:text-[2.6rem]">Frequently asked questions</h2>
        <dl className="space-y-6">
          {faq.map(([q, a]) => <div key={q}><dt className="font-display text-[1.2rem] font-bold">{q}</dt><dd className="mt-1 text-pizarra">{a}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contact" className="oscuro py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[2.2rem] sm:text-[2.8rem]">Ready to book your appointment?</h2>
          <p className="mt-4 flex gap-2 text-white"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-lima" />{negocio.direccion}</p>
          <a href={negocio.mapa} className="enlace mt-2 inline-block" target="_blank" rel="noopener">Open in Google Maps</a>
          <dl className="mt-7 grid gap-2">
            {horario.map(([d, h]) => <div key={d} className="flex justify-between gap-4 border-b border-white/10 pb-2"><dt>{d}</dt><dd className="font-semibold text-white">{h}</dd></div>)}
          </dl>
        </div>
        <div>
          <a href={waCita} className="btn w-full sm:w-auto" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.whatsappTexto}</a>
          <ul className="mt-6 space-y-2">
            {negocio.telefonos.map(([t, href]) => <li key={t}><a href={href} className="flex items-center gap-2 text-white hover:text-lima"><IconoTel className="h-5 w-5 text-lima" />{t}</a></li>)}
          </ul>
          <a href={`mailto:${negocio.correo}`} className="enlace mt-5 inline-block break-all">{negocio.correo}</a>
          <p className="mt-5 flex gap-6">
            <a href={negocio.facebook} className="enlace" target="_blank" rel="noopener">Facebook</a>
            <a href={negocio.instagram} className="enlace" target="_blank" rel="noopener">Instagram</a>
          </p>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-[#0a1733] pb-28 pt-10 text-nube lg:pb-10">
      <div className="contenedor flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[1.4rem] text-white"><Marca verde="text-lima" /></p>
        <p className="text-[0.92rem]">A group of expert odontologists in Puerto Vallarta, founded in {negocio.desde}.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/15 bg-marino text-white lg:hidden">
      <a href={waCita} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-lima text-[0.9rem] font-semibold text-marino"><IconoWa />WhatsApp</a>
      <a href={negocio.telefonos[0][1]} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoTel />Call</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoPin />Directions</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
      <Encabezado />
      <main id="main">
        <Portada />
        <Viaje />
        <Servicios />
        <Equipo />
        <Resenas />
        <Faq />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
