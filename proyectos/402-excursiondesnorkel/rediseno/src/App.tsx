import { useState, useEffect } from 'react';
import { negocio, tours, resenas, wa, foto } from './data/content';

// ── Moon phase calculator (no external API needed) ────────────────────────
// Reference: known new moon on 2024-01-11T11:57 UTC, lunar cycle = 29.53059 days
const LUNAR_CYCLE = 29.53059;
const REF_NEW_MOON = new Date('2024-01-11T11:57:00Z').getTime();

function moonPhase(date: Date): { age: number; illumination: number; emoji: string; daysToNewMoon: number } {
  const elapsed = (date.getTime() - REF_NEW_MOON) / (1000 * 60 * 60 * 24);
  const age = ((elapsed % LUNAR_CYCLE) + LUNAR_CYCLE) % LUNAR_CYCLE;
  // Illumination: 0 at new moon, 1 at full moon, back to 0
  const illumination = 0.5 * (1 - Math.cos((2 * Math.PI * age) / LUNAR_CYCLE));
  const daysToNewMoon = age <= 1 ? 0 : Math.round(LUNAR_CYCLE - age);
  let emoji = '🌑';
  if (age < 1.5) emoji = '🌑';
  else if (age < 7.5) emoji = '🌒';
  else if (age < 14) emoji = '🌓';
  else if (age < 15.5) emoji = '🌕';
  else if (age < 22) emoji = '🌖';
  else if (age < 28.5) emoji = '🌗';
  else emoji = '🌘';
  return { age, illumination, emoji, daysToNewMoon };
}

// Turtle nesting season for olive ridley on Oaxacan coast: June–November (peak Jul–Oct)
function isTurtleSeason(date: Date): boolean {
  const m = date.getMonth() + 1; // 1-based
  return m >= 6 && m <= 11;
}

// ── Moon glow block ───────────────────────────────────────────────────────
function MoonGlowBlock() {
  const now = new Date();
  const moon = moonPhase(now);
  const turtles = isTurtleSeason(now);
  const nearNewMoon = moon.daysToNewMoon <= 3;
  const illPct = Math.round(moon.illumination * 100);

  const headline = nearNewMoon
    ? moon.daysToNewMoon === 0
      ? 'Tonight is perfect for bioluminescence.'
      : `Tonight the sea still glows. New moon in ${moon.daysToNewMoon} day${moon.daysToNewMoon === 1 ? '' : 's'}.`
    : `The sea glows every night. Darkest skies in ${moon.daysToNewMoon} day${moon.daysToNewMoon === 1 ? '' : 's'} (new moon).`;

  const sub = nearNewMoon
    ? 'With a dark sky, the bioluminescent lagoon turns every movement into cold blue-green fire.'
    : `Current moon: ${illPct}% illuminated. The lagoon glows year-round — new moon nights are simply extraordinary.`;

  return (
    <section className="bg-noche text-white py-16 sm:py-20" aria-label="Moon conditions for bioluminescence">
      <div className="contenedor">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-5xl mb-4" aria-hidden="true">{moon.emoji}</p>
          <h2 className="text-3xl sm:text-4xl font-display mb-4">Does the sea glow tonight?</h2>
          <p className="text-xl sm:text-2xl font-semibold text-[#7dd3fc] mb-3">{headline}</p>
          <p className="text-[#94a3b8] mb-8">{sub}</p>
          {turtles && (
            <p className="inline-flex items-center gap-2 rounded-full border border-[#c4935a]/50 bg-[#c4935a]/10 px-4 py-2 text-sm font-semibold text-[#c4935a] mb-8">
              <span aria-hidden="true">🐢</span> Sea turtle nesting season is active
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${negocio.bookingBase}/ZdPpW`}
              className="btn-primary bg-[#0b7b8a] hover:bg-[#095f6a]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Bioluminescence Tour — $850
            </a>
            {turtles && (
              <a
                href={`${negocio.bookingBase}/1zj8P`}
                className="inline-flex items-center gap-2 rounded-full border border-[#c4935a] px-6 py-3 text-sm font-semibold text-[#c4935a] hover:bg-[#c4935a]/10 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Turtle Release — $1,000
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Tour card ─────────────────────────────────────────────────────────────
function TourCard({ tour }: { tour: (typeof tours)[0] }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col">
      <div className="relative overflow-hidden h-48 sm:h-52">
        <img
          src={tour.foto}
          alt={tour.nombre}
          width={800}
          height={533}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-display font-bold mb-2 text-tinta">{tour.nombre}</h3>
        <p className="text-sm text-tinta/70 mb-4 flex-1">{tour.descripcion}</p>
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-xl font-bold text-acento">${tour.precio.toLocaleString()}</span>
            {tour.precioAntes && (
              <span className="ml-2 text-sm text-tinta/40 line-through">${tour.precioAntes.toLocaleString()}</span>
            )}
            <span className="block text-xs text-tinta/50">{tour.duracion} · per person</span>
          </div>
          <a
            href={`${negocio.bookingBase}/${tour.bookId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-4 py-2"
            aria-label={`Book ${tour.nombre}`}
          >
            Book
          </a>
        </div>
      </div>
    </article>
  );
}

// ── Star rating ───────────────────────────────────────────────────────────
function Stars({ n = 5 }: { n?: number }) {
  return (
    <span aria-label={`${n} out of 5 stars`} className="text-[#f5a623] text-base">
      {'★'.repeat(n)}{'☆'.repeat(5 - n)}
    </span>
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-noche/95 backdrop-blur-sm text-white">
      <div className="contenedor flex items-center justify-between py-3">
        <a href="#hero" className="flex items-center gap-3" aria-label="Eco Adventures Puerto Escondido">
          <img
            src={foto('logo-eco.webp')}
            alt="Eco Adventures logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="font-display font-bold text-base hidden sm:inline">Eco Adventures</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold" aria-label="Main navigation">
          <a href="#tours" className="hover:text-[#7dd3fc] transition-colors">Tours</a>
          <a href="#glow" className="hover:text-[#7dd3fc] transition-colors">Does the sea glow?</a>
          <a href="#why" className="hover:text-[#7dd3fc] transition-colors">Why us</a>
          <a href="#contact" className="hover:text-[#7dd3fc] transition-colors">Contact</a>
          <a
            href={`${negocio.bookingBase}/ZdPpW`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs px-4 py-2"
          >
            Book Now
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded focus-visible:ring-2 focus-visible:ring-acento"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Open menu"
        >
          <span aria-hidden="true" className="block w-6 h-0.5 bg-white mb-1.5"></span>
          <span aria-hidden="true" className="block w-6 h-0.5 bg-white mb-1.5"></span>
          <span aria-hidden="true" className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav id="mobile-menu" className="md:hidden bg-noche border-t border-white/10 px-5 py-4 flex flex-col gap-4 text-sm font-semibold" aria-label="Mobile navigation">
          <a href="#tours" onClick={() => setOpen(false)}>Tours</a>
          <a href="#glow" onClick={() => setOpen(false)}>Does the sea glow?</a>
          <a href="#why" onClick={() => setOpen(false)}>Why us</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a
            href={`${negocio.bookingBase}/ZdPpW`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center"
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}

// ── Floating mobile bar ───────────────────────────────────────────────────
function MobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-noche border-t border-white/10 flex"
      role="navigation"
      aria-label="Quick actions"
    >
      <a
        href={wa('Hi! I want to book a tour with Eco Adventures Puerto Escondido.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center gap-1 py-3 text-[#25D366] text-xs font-semibold hover:bg-white/5 transition-colors"
        aria-label="WhatsApp Eco Adventures"
      >
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.1 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.06L2 22l5.06-1.36A10 10 0 1 0 12 2zm0 18c-1.64 0-3.18-.46-4.5-1.25l-.32-.19-3.3.89.9-3.22-.2-.33A8 8 0 1 1 12 20z"/>
        </svg>
        WhatsApp
      </a>
      <a
        href={`tel:${negocio.telefonoTel}`}
        className="flex-1 flex flex-col items-center gap-1 py-3 text-[#7dd3fc] text-xs font-semibold hover:bg-white/5 transition-colors"
        aria-label={`Call ${negocio.telefono}`}
      >
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.01L6.6 10.8z"/>
        </svg>
        Call
      </a>
      <a
        href={negocio.mapa}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center gap-1 py-3 text-[#fbbf24] text-xs font-semibold hover:bg-white/5 transition-colors"
        aria-label="Google Maps"
      >
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        Map
      </a>
    </div>
  );
}

// ── JSON-LD ───────────────────────────────────────────────────────────────
function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LocalBusiness'],
    name: negocio.nombre,
    description:
      'Top-rated tour agency in Puerto Escondido, Oaxaca. Snorkeling, bioluminescence, dolphin watching, baby sea turtle release, mangrove kayaking, mezcal experience and more. 1,745 five-star reviews on Google and Tripadvisor.',
    url: 'https://ecoadventurespuertoescondido.com/',
    telephone: negocio.telefono,
    email: negocio.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Puerto Escondido',
      addressRegion: 'Oaxaca',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 15.8598,
      longitude: -97.0706,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:30',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1745',
      bestRating: '5',
    },
    sameAs: [
      negocio.facebook,
      negocio.instagram,
      negocio.tripadvisor,
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ── Main App ──────────────────────────────────────────────────────────────
export default function App() {
  // Scroll-reveal for tour cards
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById('tours');
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <JsonLd />
      <Nav />

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative min-h-[90svh] flex items-end bg-noche overflow-hidden"
        aria-label="Hero"
      >
        <img
          src={foto('hero-pacifico.webp')}
          alt="Aerial view of the Pacific coast at Puerto Escondido, Oaxaca"
          width={2000}
          height={1500}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative contenedor pb-16 sm:pb-24 pt-32 text-white">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#f5a623] font-bold text-lg leading-none">★ 4.9</span>
              <span className="text-white/60 text-sm">1,284 Google reviews · #1 Tripadvisor Puerto Escondido</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Eco Adventures<br />Puerto Escondido
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-lg">
              Bioluminescence, baby sea turtles, dolphins, mangrove kayaking and more — with the most trusted guides on the Oaxacan Pacific coast.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#tours"
                className="btn-primary text-base px-8 py-4"
              >
                See all tours
              </a>
              <a
                href={wa('Hi! I want to book a private tour with Eco Adventures Puerto Escondido.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa text-base px-8 py-4"
              >
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.1 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.06L2 22l5.06-1.36A10 10 0 1 0 12 2zm0 18c-1.64 0-3.18-.46-4.5-1.25l-.32-.19-3.3.89.9-3.22-.2-.33A8 8 0 1 1 12 20z"/>
                </svg>
                Book private tour
              </a>
            </div>
            <p className="mt-4 text-sm text-white/50">Free cancellation up to 24h before · Hotel pickup included</p>
          </div>
        </div>
      </section>

      {/* ── MOON GLOW BLOCK ── */}
      <div id="glow">
        <MoonGlowBlock />
      </div>

      {/* ── TOURS ── */}
      <section id="tours" className="py-16 sm:py-24">
        <div className="contenedor">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">Our tours</h2>
          <p className="text-tinta/60 mb-10 max-w-xl">
            Twelve ways to experience the Oaxacan coast and mountains — from a 2-hour horseback sunset to a full-day Chacahua expedition.
          </p>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
          >
            {tours.map((t) => (
              <TourCard key={t.id} tour={t} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-tinta/50">
            All tours include free round-trip hotel transportation within Puerto Escondido ·{' '}
            <a href={negocio.waPrivate} target="_blank" rel="noopener noreferrer" className="text-acento hover:underline">
              Ask about private tours (up to 24 people)
            </a>
          </p>
        </div>
      </section>

      {/* ── WHY ECO ADVENTURES ── */}
      <section id="why" className="bg-tinta text-white py-16 sm:py-24">
        <div className="contenedor">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                Puerto Escondido's most trusted guides
              </h2>
              <p className="text-white/70 mb-8">
                Since our first tour, we've built every experience around one principle: do it right, or don't do it. Small groups, certified guides who grew up on this coast, and wildlife protocols that put the animals first.
              </p>
              <ul className="space-y-4 text-sm text-white/80">
                {[
                  ['1,745', 'five-star reviews on Google, Tripadvisor and Trustindex combined'],
                  ['#1', 'rated tour operator on Tripadvisor for Puerto Escondido'],
                  ['✓', 'Free cancellation up to 24 hours before the tour'],
                  ['✓', 'Hotel pickup included — no logistics to figure out'],
                  ['✓', 'SEMARNAT-affiliated conservation guide for turtle tours'],
                  ['✓', 'Responsible wildlife viewing: safe distances, no chasing animals'],
                ].map(([bold, rest], i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-bold text-[#7dd3fc] min-w-[2.5rem]">{bold}</span>
                    <span>{rest}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img
                src={foto('grupo-tour.webp')}
                alt="Eco Adventures guide with tour group"
                width={900}
                height={600}
                loading="lazy"
                className="rounded-xl w-full h-48 object-cover col-span-2"
              />
              <img
                src={foto('sostenibilidad.webp')}
                alt="Eco Adventures sustainability team"
                width={800}
                height={534}
                loading="lazy"
                className="rounded-xl w-full h-36 object-cover"
              />
              <img
                src={foto('tortugas-playa.webp')}
                alt="Baby sea turtles at Playa Escobilla"
                width={1600}
                height={1067}
                loading="lazy"
                className="rounded-xl w-full h-36 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SEASONALITY ── */}
      <section className="py-16 sm:py-24 bg-fondo">
        <div className="contenedor">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">What you might see</h2>
          <p className="text-tinta/60 mb-10 max-w-xl">
            The Oaxacan Pacific coast has something different every season. Here's what's most likely to appear on each tour.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: '🐬',
                title: 'Spinner & bottlenose dolphins',
                when: 'Year-round',
                note: 'Present in pods of up to 100 on most Dolphin Watching departures.',
                color: 'bg-[#0b7b8a]/10 border-[#0b7b8a]/20',
                textColor: 'text-[#0b7b8a]',
              },
              {
                icon: '🐋',
                title: 'Humpback whales',
                when: 'November – March',
                note: '15-meter mammals that surface, roll and occasionally breach within sight of the boat.',
                color: 'bg-acento/10 border-acento/20',
                textColor: 'text-acento',
              },
              {
                icon: '🐢',
                title: 'Olive ridley sea turtles',
                when: 'June – November (peak)',
                note: "Playa Escobilla hosts one of the world's largest mass nesting events — up to 500,000 turtles in a single season.",
                color: 'bg-arena/10 border-arena/20',
                textColor: 'text-arena',
              },
              {
                icon: '✨',
                title: 'Bioluminescence',
                when: 'Year-round',
                note: 'Best on new moon nights when there\'s no competing light. The glowing lagoon is active every night.',
                color: 'bg-[#312e81]/10 border-[#312e81]/20',
                textColor: 'text-[#312e81]',
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl border p-5 ${item.color}`}>
                <p className="text-3xl mb-3" aria-hidden="true">{item.icon}</p>
                <h3 className={`font-display font-bold text-base mb-1 ${item.textColor}`}>{item.title}</h3>
                <p className="text-xs font-semibold text-tinta/50 mb-2 uppercase tracking-wide">{item.when}</p>
                <p className="text-sm text-tinta/70">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="contenedor">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">What guests say</h2>
              <p className="text-tinta/60">1,745 reviews · 4.8 average across Google, Tripadvisor and Trustindex</p>
            </div>
            <a
              href={negocio.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-acento hover:underline sm:ml-auto"
            >
              Read all reviews →
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resenas.map((r, i) => (
              <blockquote key={i} className="bg-fondo rounded-2xl p-5">
                <Stars n={r.estrellas} />
                <p className="mt-3 text-sm text-tinta/80 leading-relaxed">"{r.texto}"</p>
                <footer className="mt-4 text-xs text-tinta/50">
                  <span className="font-semibold text-tinta/70">{r.autor}</span> · {r.fecha} · {r.plataforma}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-16 sm:py-24 bg-fondo">
        <div className="contenedor">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Book your adventure</h2>
              <p className="text-tinta/70 mb-8">
                All tours depart from Puerto Escondido with hotel pickup included. Book directly through our platform or write to us on WhatsApp for private groups.
              </p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="text-xl" aria-hidden="true">📞</span>
                  <a href={`tel:${negocio.telefonoTel}`} className="text-acento font-semibold hover:underline">
                    {negocio.telefono}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl" aria-hidden="true">✉️</span>
                  <a href={`mailto:${negocio.email}`} className="text-acento font-semibold hover:underline break-all">
                    {negocio.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl" aria-hidden="true">🕐</span>
                  <span className="text-tinta/70">{negocio.horario}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl" aria-hidden="true">📍</span>
                  <a
                    href={negocio.mapa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-acento font-semibold hover:underline"
                  >
                    Puerto Escondido, Oaxaca — View on Google Maps
                  </a>
                </li>
              </ul>
              <div className="flex gap-4 mt-8">
                <a
                  href={wa('Hi! I want to book a tour with Eco Adventures Puerto Escondido.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa"
                >
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.1 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.06L2 22l5.06-1.36A10 10 0 1 0 12 2zm0 18c-1.64 0-3.18-.46-4.5-1.25l-.32-.19-3.3.89.9-3.22-.2-.33A8 8 0 1 1 12 20z"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={`tel:${negocio.telefonoTel}`}
                  className="btn-primary"
                >
                  Call us
                </a>
              </div>
            </div>
            {/* Map placeholder */}
            <a
              href={negocio.mapa}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-2xl overflow-hidden h-72 md:h-96 group"
              aria-label="View Eco Adventures on Google Maps"
            >
              <img
                src={foto('hero-pacifico.webp')}
                alt="Puerto Escondido, Oaxaca — Eco Adventures tours depart from here"
                width={2000}
                height={1500}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-noche/40 flex items-center justify-center">
                <span className="bg-white text-tinta font-semibold text-sm px-5 py-2 rounded-full shadow-lg">
                  View on Google Maps →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-noche text-white py-10">
        <div className="contenedor">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src={foto('logo-eco.webp')}
                alt="Eco Adventures Puerto Escondido"
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 object-contain"
              />
              <div>
                <p className="font-display font-bold text-sm">Eco Adventures</p>
                <p className="text-xs text-white/50">Puerto Escondido, Oaxaca</p>
              </div>
            </div>
            <div className="flex gap-5 text-white/50 text-sm">
              <a href={negocio.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
              <a href={negocio.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href={negocio.tripadvisor} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Tripadvisor</a>
            </div>
          </div>
          <p className="mt-6 text-xs text-white/30 text-center sm:text-left">
            © {new Date().getFullYear()} Eco Adventures Puerto Escondido. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating mobile bar */}
      <MobileBar />

      {/* Mobile bar spacer */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
