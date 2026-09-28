import { useState, useEffect, useCallback } from 'react';
import {
  negocio, wa, web, tours, resenas, valores, horarioFWT, descripcionSeo,
} from './data/content';

// ── Íconos SVG inline ────────────────────────────────────────────────────────
function IconoWA() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.104 1.508 5.83L0 24l6.335-1.662A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.811 9.811 0 01-5.004-1.37l-.36-.214-3.72.976.992-3.634-.235-.374A9.818 9.818 0 012.182 12C2.182 6.575 6.575 2.182 12 2.182S21.818 6.575 21.818 12 17.425 21.818 12 21.818z" />
    </svg>
  );
}
function IconoTel() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" className="w-4 h-4 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
function IconoMaps() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" className="w-4 h-4 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

// ── Helpers de hora Oaxaca ───────────────────────────────────────────────────
function horaOaxaca(): { h: number; m: number; diasemana: number; fecha: Date } {
  const ahora = new Date();
  const oaxStr = ahora.toLocaleString('en-US', { timeZone: 'America/Mexico_City' });
  const oax = new Date(oaxStr);
  return { h: oax.getHours(), m: oax.getMinutes(), diasemana: oax.getDay(), fecha: oax };
}

// Dia 0=dom, 1=lun … 6=sáb
function horariosDia(dia: number, lang: 'en' | 'es'): string[] {
  if (lang === 'es') {
    // Español solo lun–vie (1–5)
    if (dia >= 1 && dia <= 5) return ['10:00', '16:00'];
    return [];
  }
  // Inglés
  if (dia === 0) return ['10:00', '13:00', '16:00'];
  return ['10:00', '11:00', '13:00', '16:00'];
}

function horaToMin(h: string) {
  const [hh, mm] = h.split(':').map(Number);
  return hh * 60 + mm;
}

const DIAS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MESES_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ── Componente Nav ───────────────────────────────────────────────────────────
function Nav() {
  const [abierto, setAbierto] = useState(false);
  const links = [
    { href: '#free-walk', label: 'Free Walk' },
    { href: '#next-walk', label: 'Find a Walk' },
    { href: '#tours',     label: 'Tours' },
    { href: '#reviews',   label: 'Reviews' },
    { href: '#about',     label: 'About' },
    { href: '#meeting',   label: 'Meeting Point' },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-carbon/95 backdrop-blur-sm border-b border-blanco/10">
      <nav className="contenedor flex items-center justify-between h-[4.25rem]" aria-label="Main navigation">
        {/* Logo */}
        <a href="#top" className="shrink-0 flex items-center gap-2" aria-label="Free Walk Oaxaca — inicio">
          <img
            src={web('logo.svg')}
            alt="Free Walk Oaxaca logo"
            width={120} height={40}
            className="h-9 w-auto brightness-[200] invert-0"
            loading="eager"
          />
        </a>

        {/* Links escritorio */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-humo">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-amarillo transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex">
          <a href={wa("Hi, I'd like to book a Free Walking Tour in Oaxaca.")}
            className="btn-amarillo" target="_blank" rel="noopener noreferrer">
            <IconoWA /> Book Free Walk
          </a>
        </div>

        {/* Hamburguesa */}
        <button
          className="md:hidden p-2 text-blanco hover:text-amarillo transition-colors"
          aria-label={abierto ? 'Close menu' : 'Open menu'}
          aria-expanded={abierto}
          onClick={() => setAbierto(v => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
            {abierto
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Menú móvil */}
      {abierto && (
        <div className="md:hidden bg-carbon border-t border-blanco/10 py-4 px-5 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-humo hover:text-amarillo transition-colors py-1"
              onClick={() => setAbierto(false)}>
              {l.label}
            </a>
          ))}
          <a href={wa("Hi, I'd like to book a Free Walking Tour in Oaxaca.")}
            className="btn-amarillo self-start" target="_blank" rel="noopener noreferrer">
            <IconoWA /> Book Free Walk
          </a>
        </div>
      )}
    </header>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" className="relative min-h-[92dvh] flex items-end overflow-hidden pt-[4.25rem]">
      <img
        src={web('hero.webp')}
        alt="Local guides leading a group through Oaxaca's historic center"
        width={1440} height={706}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />
      {/* Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-transparent" aria-hidden="true" />

      <div className="relative contenedor pb-16 sm:pb-20">
        <p className="text-amarillo text-sm font-bold uppercase tracking-widest mb-4">
          Since {negocio.anio} · Oaxaca, México
        </p>
        <h1 className="font-sans font-bold text-4xl sm:text-6xl lg:text-7xl text-blanco leading-tight mb-4">
          Discover Oaxaca<br className="hidden sm:block" /> Like a Local
        </h1>
        <p className="text-humo text-lg sm:text-xl max-w-xl mb-3">
          {negocio.subtitulo}
        </p>
        <p className="text-amarillo font-bold mb-8 text-sm sm:text-base">
          Free to join · Tip-based · 450+ reviews
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={wa("Hi, I'd like to book a Free Walking Tour in Oaxaca.")}
            className="btn-amarillo text-base px-7 py-3.5" target="_blank" rel="noopener noreferrer">
            <IconoWA /> Book a Free Walk
          </a>
          <a href="#tours" className="btn-borde text-base px-7 py-3.5">
            See all tours
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Free Walking Tour ────────────────────────────────────────────────────────
function FreeWalk() {
  return (
    <section id="free-walk" className="bg-noche py-20 sm:py-28">
      <div className="contenedor">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Texto */}
          <div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-blanco mb-4">
              Free Walking Tour Oaxaca
            </h2>
            <p className="text-humo text-base sm:text-lg mb-8 leading-relaxed">
              The best way to start your adventure in Oaxaca.
              Join a local guide through the Historic Center and discover the city beyond monuments and dates — its history, culture, traditions, food, neighborhoods and everyday life.
              No fixed ticket price. Just find the yellow umbrella.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['100% Local Guides', 'Real Experiences', 'Responsible Tourism', '12 Years of Stories'].map(t => (
                <span key={t} className="border border-amarillo/50 text-amarillo text-xs font-semibold px-3 py-1.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            {/* Horario */}
            <div className="rounded-2xl border border-blanco/10 overflow-hidden text-sm">
              <div className="bg-blanco/5 px-5 py-3 font-bold text-blanco uppercase tracking-wide text-xs">
                Daily Schedule
              </div>
              <div className="divide-y divide-blanco/10">
                <div className="px-5 py-3 grid grid-cols-[1fr_auto] gap-4">
                  <div>
                    <div className="font-semibold text-blanco">English — Mon to Sat</div>
                    <div className="text-humo mt-0.5">10:00 · 11:00 · 1:00 pm · 4:00 pm</div>
                  </div>
                  <span className="text-amarillo text-xs font-bold self-center whitespace-nowrap">Free</span>
                </div>
                <div className="px-5 py-3 grid grid-cols-[1fr_auto] gap-4">
                  <div>
                    <div className="font-semibold text-blanco">English — Sunday</div>
                    <div className="text-humo mt-0.5">10:00 am · 1:00 pm · 4:00 pm</div>
                  </div>
                  <span className="text-amarillo text-xs font-bold self-center whitespace-nowrap">Free</span>
                </div>
                <div className="px-5 py-3 grid grid-cols-[1fr_auto] gap-4">
                  <div>
                    <div className="font-semibold text-blanco">Español — Lunes a Viernes</div>
                    <div className="text-humo mt-0.5">10:00 am · 4:00 pm</div>
                  </div>
                  <span className="text-amarillo text-xs font-bold self-center whitespace-nowrap">Free</span>
                </div>
              </div>
              <div className="bg-blanco/5 px-5 py-3 text-humo text-xs flex flex-wrap gap-4">
                <span>⏱ {horarioFWT.duracion}</span>
                <span>👥 {horarioFWT.aforo}</span>
                <span>☂️ {horarioFWT.consejo}</span>
              </div>
            </div>
          </div>

          {/* Qué vas a vivir */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { t: 'Walk With a Local', d: "Explore Oaxaca with a guide who knows the city beyond its landmarks." },
              { t: 'Historic Center',   d: "Discover important places while understanding the stories behind them." },
              { t: 'Culture & Traditions', d: "Learn about customs and celebrations still part of everyday Oaxacan life." },
              { t: 'Hidden Corners',    d: "Notice streets, details and places many visitors simply walk past." },
              { t: 'Local Recommendations', d: "Get real tips for food, markets, cafés, mezcal and nightlife." },
              { t: 'Ask Anything',      d: "Questions make tours better. Every group is different; every walk feels that way." },
            ].map(({ t, d }) => (
              <div key={t} className="rounded-xl bg-blanco/5 border border-blanco/8 p-4 hover:bg-blanco/10 transition-colors">
                <div className="font-bold text-blanco text-sm mb-1">{t}</div>
                <div className="text-humo text-xs leading-relaxed">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Elemento memorable: "Find Your Walk" ────────────────────────────────────
function NextWalk() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [personas, setPersonas] = useState(2);
  const [elegido, setElegido] = useState<string | null>(null);
  const [, setTick] = useState(0);

  // Refresco cada minuto para actualizar horarios pasados
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 60_000);
    return () => clearInterval(id);
  }, []);

  // Resetear horario elegido si cambió de idioma o ya pasó
  useEffect(() => { setElegido(null); }, [lang]);

  const { h, m, diasemana, fecha } = horaOaxaca();
  const minAhora = h * 60 + m;

  const horarios = horariosDia(diasemana, lang);
  const disponibles = horarios.filter(hr => horaToMin(hr) > minAhora);
  const pasados = horarios.filter(hr => horaToMin(hr) <= minAhora);

  // Si no hay tours hoy, mostrar mañana
  const mañana = (diasemana + 1) % 7;
  const horariosMañana = horariosDia(mañana, lang);
  const sinHoyTodos = disponibles.length === 0;

  const fechaStr = (d: Date, extra = 0) => {
    const dd = new Date(d);
    dd.setDate(dd.getDate() + extra);
    return `${DIAS_EN[dd.getDay()]} ${dd.getDate()} ${MESES_EN[dd.getMonth()]}`;
  };

  const buildWA = useCallback((hora: string) => {
    const langLabel = lang === 'es' ? 'en Español' : 'in English';
    const dia = sinHoyTodos ? fechaStr(fecha, 1) : fechaStr(fecha);
    const p = personas === 1 ? '1 person' : `${personas} people`;
    return wa(
      `Hi, we'd like to join the Free Walking Tour ${langLabel} on ${dia} at ${hora}. We are ${p}. Meeting at Teatro Macedonio Alcalá — yellow umbrella. 🌂`
    );
  }, [lang, personas, fecha, sinHoyTodos]);

  const Slot = ({ hora, pasado }: { hora: string; pasado?: boolean }) => {
    const sel = elegido === hora && !sinHoyTodos;
    return (
      <button
        disabled={pasado}
        onClick={() => !pasado && setElegido(hora)}
        aria-pressed={sel}
        className={[
          'rounded-xl border px-5 py-3 text-base font-bold transition-all',
          pasado
            ? 'border-blanco/10 text-blanco/25 line-through cursor-not-allowed'
            : sel
              ? 'border-amarillo bg-amarillo text-carbon scale-105'
              : 'border-blanco/20 text-blanco hover:border-amarillo hover:text-amarillo',
        ].join(' ')}
      >
        {hora}
        {!pasado && horarios.indexOf(hora) === pasados.length && (
          <span className="sombrilla-viva ml-2" aria-hidden="true">☂️</span>
        )}
      </button>
    );
  };

  return (
    <section id="next-walk" className="bg-carbon py-20 sm:py-28 border-t border-blanco/10">
      <div className="contenedor">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-blanco mb-2 text-center">
            Find Your Walk
          </h2>
          <p className="text-humo text-center mb-10">
            Current Oaxaca time: <span className="text-amarillo font-bold tabular-nums">
              {String(h).padStart(2, '0')}:{String(m).padStart(2, '0')}
            </span>
            {' '}— {sinHoyTodos ? 'No more walks today' : `Today is ${fechaStr(fecha)}`}
          </p>

          {/* Selector de idioma */}
          <div className="flex rounded-full border border-blanco/20 p-1 mb-8 w-fit mx-auto">
            {(['en', 'es'] as const).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={[
                  'rounded-full px-6 py-2 text-sm font-bold transition-colors',
                  lang === l ? 'bg-amarillo text-carbon' : 'text-humo hover:text-blanco',
                ].join(' ')}
              >
                {l === 'en' ? '🇺🇸 English' : '🇲🇽 Español'}
              </button>
            ))}
          </div>

          {lang === 'es' && diasemana === 0 && (
            <p className="text-humo text-sm text-center mb-6 bg-blanco/5 rounded-xl px-5 py-3">
              Los tours en español son de lunes a viernes. El domingo solo hay tours en inglés.
            </p>
          )}
          {lang === 'es' && diasemana === 6 && (
            <p className="text-humo text-sm text-center mb-6 bg-blanco/5 rounded-xl px-5 py-3">
              Los tours en español son de lunes a viernes. El sábado solo hay tours en inglés.
            </p>
          )}

          {/* Slots del día */}
          {!sinHoyTodos ? (
            <div>
              <p className="text-humo text-xs uppercase tracking-widest text-center mb-4">Today · {fechaStr(fecha)}</p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {pasados.map(hr => <Slot key={hr} hora={hr} pasado />)}
                {disponibles.map(hr => <Slot key={hr} hora={hr} />)}
              </div>
            </div>
          ) : (
            <div>
              <p className="text-humo text-xs uppercase tracking-widest text-center mb-4">
                Next walks — tomorrow · {fechaStr(fecha, 1)}
              </p>
              {horariosMañana.length === 0 ? (
                <p className="text-humo text-center text-sm">No {lang === 'es' ? 'Spanish tours' : 'tours'} tomorrow. {lang === 'es' ? 'Los tours en español son lunes a viernes.' : 'English tours run every day.'}</p>
              ) : (
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {horariosMañana.map(hr => <Slot key={hr} hora={hr} />)}
                </div>
              )}
            </div>
          )}

          {/* Personas */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-humo text-sm">People:</span>
            <button
              onClick={() => setPersonas(p => Math.max(1, p - 1))}
              aria-label="Fewer people"
              className="w-9 h-9 rounded-full border border-blanco/20 text-blanco hover:border-amarillo hover:text-amarillo transition-colors text-lg font-bold"
            >−</button>
            <span className="text-blanco font-bold text-xl tabular-nums w-8 text-center">{personas}</span>
            <button
              onClick={() => setPersonas(p => Math.min(20, p + 1))}
              aria-label="More people"
              className="w-9 h-9 rounded-full border border-blanco/20 text-blanco hover:border-amarillo hover:text-amarillo transition-colors text-lg font-bold"
            >+</button>
          </div>

          {/* Botón WhatsApp */}
          {elegido ? (
            <div className="text-center">
              <a
                href={buildWA(elegido)}
                className="btn-amarillo text-base px-8 py-4 text-lg"
                target="_blank" rel="noopener noreferrer"
              >
                <IconoWA />
                Book {elegido} · {personas} {personas === 1 ? 'person' : 'people'}
              </a>
              <p className="text-humo text-xs mt-3">
                Teatro Macedonio Alcalá — look for the yellow umbrella ☂️
              </p>
            </div>
          ) : (
            <p className="text-humo text-sm text-center">
              {sinHoyTodos ? 'Select a time for tomorrow' : 'Select a time above to book'}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Tours ────────────────────────────────────────────────────────────────────
function Tours() {
  return (
    <section id="tours" className="bg-noche py-20 sm:py-28">
      <div className="contenedor">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-blanco mb-3">Tours &amp; Experiences</h2>
        <p className="text-humo mb-12 max-w-xl">More ways to experience the real Oaxaca. Walk the city, taste it, discover its traditions.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tours.map(t => (
            <article key={t.id} className="rounded-2xl overflow-hidden bg-blanco/5 border border-blanco/10 flex flex-col hover:border-amarillo/40 transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.nombre}
                  width={t.w} height={t.h}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-blanco text-base mb-2">{t.nombre}</h3>
                <p className="text-humo text-xs mb-3 leading-relaxed flex-1">{t.desc}</p>
                <div className="text-xs text-humo/70 mb-1">⏱ {t.duracion}</div>
                <div className="text-amarillo font-bold text-sm mb-4">{t.precio}</div>
                <a
                  href={wa(t.waMensaje)}
                  className="btn-noche text-xs justify-center"
                  target="_blank" rel="noopener noreferrer"
                >
                  <IconoWA /> Book on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Cómo reservar */}
        <div className="mt-16 rounded-2xl bg-blanco/5 border border-blanco/10 p-8">
          <h3 className="font-bold text-blanco text-xl mb-6 text-center">Booking is Easy</h3>
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            {[
              { n: '1', t: 'Choose your experience', d: 'Find the tour that fits your trip.' },
              { n: '2', t: 'Reserve your place',    d: 'Book via WhatsApp with your date, time and group size.' },
              { n: '3', t: 'Meet your guide',        d: 'Arrive 5–10 minutes early at Teatro Macedonio Alcalá.' },
              { n: '4', t: 'Experience Oaxaca',     d: "We'll take it from there." },
            ].map(s => (
              <div key={s.n} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amarillo text-carbon font-bold text-base flex items-center justify-center">{s.n}</div>
                <div className="font-semibold text-blanco text-sm">{s.t}</div>
                <div className="text-humo text-xs">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Reviews ──────────────────────────────────────────────────────────────────
function Reviews() {
  return (
    <section id="reviews" className="bg-carbon py-20 sm:py-28 border-t border-blanco/10">
      <div className="contenedor">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-blanco mb-3">Loved by Travelers</h2>
          <p className="text-amarillo font-bold text-xl mb-1">★★★★★ Excellent</p>
          <p className="text-humo">
            450+ reviews on{' '}
            <a href={negocio.tripadvisor} className="underline hover:text-amarillo transition-colors" target="_blank" rel="noopener noreferrer">TripAdvisor</a>
            {' '}· 52 on Google
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {resenas.map(r => (
            <blockquote key={r.nombre} className="rounded-2xl bg-blanco/5 border border-blanco/10 p-6 flex flex-col gap-4">
              <p className="text-amarillo text-sm">★★★★★</p>
              <p className="text-humo text-sm leading-relaxed flex-1">"{r.texto}"</p>
              <footer className="text-blanco text-xs font-bold">— {r.nombre} <span className="text-humo font-normal">· {r.fuente}</span></footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="bg-noche py-20 sm:py-28">
      <div className="contenedor">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-blanco mb-4">
              Walking Oaxaca Since 2014
            </h2>
            <p className="text-humo text-base sm:text-lg leading-relaxed mb-6">
              Free Walk Oaxaca was created to help travelers experience the city beyond monuments, dates and tourist checklists.
              We walk these streets, eat in these markets, know the neighborhoods and share the stories that make Oaxaca feel alive.
            </p>
            <p className="text-humo text-base leading-relaxed mb-8">
              What began as a Free Walking Tour has grown into a way of experiencing Oaxaca through different perspectives — walking, eating, tasting mezcal, meeting artisans and discovering places you might never find on your own.
            </p>
            <p className="text-amarillo font-bold italic text-lg">Come as a visitor. Leave as a friend.</p>
          </div>

          {/* Valores */}
          <div className="grid sm:grid-cols-2 gap-4">
            {valores.map(v => (
              <div key={v.titulo} className="rounded-xl bg-blanco/5 border border-blanco/8 p-5">
                <h3 className="font-bold text-blanco text-sm mb-2">{v.titulo}</h3>
                <p className="text-humo text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Meeting Point ────────────────────────────────────────────────────────────
function MeetingPoint() {
  return (
    <section id="meeting" className="bg-crema py-20 sm:py-28">
      <div className="contenedor">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-tinta mb-4">
              Meeting Point
            </h2>
            <div className="rounded-2xl bg-blanco/60 border border-tinta/10 p-6 mb-6">
              <p className="font-bold text-tinta text-lg mb-1">Teatro Macedonio Alcalá</p>
              <p className="text-tinta/70 text-sm mb-4">Av. de la Independencia 900, Centro, Oaxaca de Juárez</p>
              <p className="text-tinta font-semibold text-sm">
                ☂️ Look for the guide holding the <strong>yellow umbrella</strong> in front of the theater entrance.
              </p>
              <p className="text-tinta/60 text-xs mt-2">Please arrive 5–10 minutes early.</p>
            </div>

            {/* Horario resumido */}
            <div className="text-tinta/80 text-sm space-y-1 mb-8">
              <div><strong>Mon–Sat:</strong> 10:00 · 11:00 · 1:00 pm · 4:00 pm</div>
              <div><strong>Sunday:</strong> 10:00 am · 1:00 pm · 4:00 pm</div>
              <div><strong>En español (Lun–Vie):</strong> 10:00 am · 4:00 pm</div>
              <div className="text-tinta/50 text-xs mt-2">Tours run rain or shine.</div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={negocio.maps}
                className="inline-flex items-center gap-2 rounded-full bg-tinta text-crema font-bold text-sm px-6 py-3 hover:bg-amarillo hover:text-carbon transition-colors"
                target="_blank" rel="noopener noreferrer">
                <IconoMaps /> Open in Google Maps
              </a>
              <a href={`tel:${negocio.telefono}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-tinta/30 text-tinta font-bold text-sm px-6 py-3 hover:border-tinta transition-colors">
                <IconoTel /> {negocio.telefono}
              </a>
            </div>
          </div>

          {/* Imagen → Maps */}
          <a href={negocio.maps} target="_blank" rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden group" aria-label="Open meeting point on Google Maps">
            <img
              src={web('banner.webp')}
              alt="Free Walk Oaxaca group at the Teatro Macedonio Alcalá meeting point"
              width={1440} height={367}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

// ── CTA final ────────────────────────────────────────────────────────────────
function CTAFinal() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <img
        src={web('tour.webp')}
        alt="Free Walk Oaxaca tour in the city"
        width={1440} height={723}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-carbon/75" aria-hidden="true" />
      <div className="relative contenedor text-center">
        <h2 className="font-sans font-bold text-3xl sm:text-5xl text-blanco mb-4">
          Ready to Discover Oaxaca?
        </h2>
        <p className="text-humo text-lg mb-8 max-w-xl mx-auto">
          Join us and experience the real Oaxaca. Find the yellow umbrella at Teatro Macedonio Alcalá.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={wa("Hi, I'd like to book a Free Walking Tour in Oaxaca.")}
            className="btn-amarillo text-base px-8 py-4" target="_blank" rel="noopener noreferrer">
            <IconoWA /> Book a Free Walk
          </a>
          <a href="#next-walk" className="btn-borde text-base px-8 py-4">
            Find Today's Times
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-carbon border-t border-blanco/10 py-12">
      <div className="contenedor">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Logo + desc */}
          <div>
            <img src={web('logo.svg')} alt="Free Walk Oaxaca" width={120} height={40}
              className="h-9 w-auto brightness-[200] mb-3" loading="lazy" />
            <p className="text-humo text-sm leading-relaxed max-w-xs">{descripcionSeo}</p>
          </div>

          {/* Tours */}
          <div>
            <h3 className="font-bold text-blanco text-sm uppercase tracking-wider mb-3">Tours</h3>
            <ul className="space-y-2 text-sm text-humo">
              <li><a href="#free-walk" className="hover:text-amarillo transition-colors">Free Walking Tour</a></li>
              {tours.map(t => (
                <li key={t.id}>
                  <a href={wa(t.waMensaje)} className="hover:text-amarillo transition-colors" target="_blank" rel="noopener noreferrer">
                    {t.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-blanco text-sm uppercase tracking-wider mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-humo">
              <li><a href={`tel:${negocio.telefono}`} className="hover:text-amarillo transition-colors">{negocio.telefono}</a></li>
              <li><a href={`mailto:${negocio.email}`} className="hover:text-amarillo transition-colors">{negocio.email}</a></li>
              <li className="text-humo/70 text-xs">Oaxaca de Juárez, Oaxaca, México</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href={negocio.facebook} className="text-humo hover:text-amarillo transition-colors text-xs" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
              <a href={negocio.instagram} className="text-humo hover:text-amarillo transition-colors text-xs" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
              <a href={negocio.tripadvisor} className="text-humo hover:text-amarillo transition-colors text-xs" target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor">TripAdvisor</a>
            </div>
          </div>
        </div>
        <div className="border-t border-blanco/10 pt-6 text-humo text-xs text-center">
          © 2026 Oaxaca Free Walking Tour — Original since 2014. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ── Barra fija móvil ─────────────────────────────────────────────────────────
function BarraMobil() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-carbon border-t border-blanco/10 grid grid-cols-3 divide-x divide-blanco/10">
      <a href={wa("Hi, I'd like to book a Free Walking Tour in Oaxaca.")}
        className="flex flex-col items-center justify-center gap-1 py-3 text-amarillo hover:bg-blanco/5 transition-colors"
        target="_blank" rel="noopener noreferrer" aria-label="Book Free Walk on WhatsApp">
        <IconoWA />
        <span className="text-[10px] font-bold leading-none">Book Walk</span>
      </a>
      <a href={`tel:${negocio.telefono}`}
        className="flex flex-col items-center justify-center gap-1 py-3 text-humo hover:bg-blanco/5 transition-colors"
        aria-label="Call Free Walk Oaxaca">
        <IconoTel />
        <span className="text-[10px] leading-none">Call</span>
      </a>
      <a href={negocio.maps}
        className="flex flex-col items-center justify-center gap-1 py-3 text-humo hover:bg-blanco/5 transition-colors"
        target="_blank" rel="noopener noreferrer" aria-label="Open meeting point in Google Maps">
        <IconoMaps />
        <span className="text-[10px] leading-none">Maps</span>
      </a>
    </div>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FreeWalk />
        <NextWalk />
        <Tours />
        <Reviews />
        <About />
        <MeetingPoint />
        <CTAFinal />
      </main>
      <Footer />
      {/* Espacio para la barra fija móvil */}
      <div className="h-16 md:hidden" aria-hidden="true" />
      <BarraMobil />
    </>
  );
}
