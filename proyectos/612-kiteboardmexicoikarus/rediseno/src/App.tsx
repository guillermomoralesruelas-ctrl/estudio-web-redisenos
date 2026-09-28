import { useState } from 'react';
import { extraPerson, hotel, lessons, place, rentals, reviews, stays, wa, why } from './data/content';
import fotos from './data/fotos.json';

const sizes = fotos as unknown as Record<string, [number, number]>;
const photo = (n: string) => ({ src: `./${n}.webp`, width: sizes[n][0], height: sizes[n][1] });
const mxn = (n: number) => `$${n.toLocaleString('en-US')} MXN`;

function Icon({ d, className = 'size-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const iWhats = 'M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21zM9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.8-2.2-1-1 1a4.5 4.5 0 0 1-2.5-2.5l1-1-1-2.2L9 8.5z';
const iMap = 'M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z';
const iMail = 'M4 5h16v14H4zM4 6l8 7 8-7';

function Kite({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M2 10 Q12 0 22 10 Q12 5 2 10 Z" fill="currentColor" />
      <path d="M2.5 10 L11 21 M21.5 10 L13 21 M10 21 L14 21" stroke="currentColor" strokeWidth="0.9" fill="none" />
    </svg>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-noche/95 text-white backdrop-blur">
      <div className="contenedor flex h-18 items-center justify-between gap-4">
        <a href="#top" className="shrink-0">
          <img {...photo('logo')} alt="Ikarus" className="h-10 w-auto" />
        </a>
        <nav aria-label="Main" className="hidden items-center gap-7 font-medium md:flex">
          <a href="#trip" className="hover:text-agua">Plan your trip</a>
          <a href="#lessons" className="hover:text-agua">Lessons and rentals</a>
          <a href="#stay" className="hover:text-agua">Stay</a>
          <a href="#contact" className="hover:text-agua">Contact</a>
        </nav>
        <a href={wa('Hi! I’d like information about kite lessons.')} className="boton min-h-11 bg-kite px-5 text-white hover:bg-[#a33c12]">
          <Icon d={iWhats} />
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-noche text-white">
      <img {...photo('f-laguna')} alt="Aerial view of the Isla Blanca lagoon: turquoise shallow water, a white sandbar and kites" className="absolute inset-0 size-full object-cover opacity-60" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-r from-noche via-noche/70 to-transparent" />
      <div className="contenedor relative py-20 sm:py-28 lg:py-32">
        <p className="font-semibold text-agua">Isla Blanca, Cancún, since {place.since}</p>
        <h1 className="titulo mt-3 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">Learn kitesurfing and wingfoiling on a flat, shallow lagoon, and sleep a few steps away</h1>
        <p className="mt-5 max-w-xl text-lg text-white/90">The first kiteboarding school in the Riviera Maya, with an ecological boutique hotel, camping and restaurant. {place.where}.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#trip" className="boton bg-white text-noche hover:bg-arena">Plan your trip</a>
          <a href={wa('Hi! I’d like information about kite lessons.')} className="boton border-2 border-white/70 hover:bg-white/10">
            <Icon d={iWhats} />
            {place.whatsapp.text}
          </a>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="bg-arena py-14">
      <div className="contenedor">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {why.map(([t, d]) => (
            <li key={t}>
              <Kite className="size-7 text-kite" />
              <h2 className="mt-2 font-titulo text-lg font-bold">{t}</h2>
              <p className="mt-1 text-gris">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Trip() {
  const [kind, setKind] = useState<'group' | 'private'>('group');
  const [lessonId, setLessonId] = useState('g6');
  const [riders, setRiders] = useState(2);
  const [stayId, setStayId] = useState('double');
  const [nights, setNights] = useState(4);

  const options = lessons.filter((l) => l.kind === kind);
  const lesson = options.find((l) => l.id === lessonId) ?? options[0];
  const stay = stays.find((s) => s.id === stayId)!;

  const lessonTotal = lesson.price * riders;
  let stayNight = stay.price;
  let stayNote = '';
  if (stay.id === 'camp1') stayNight = stay.price * riders;
  else if (stay.id === 'king' && riders > 2) { stayNight = stay.price + (riders - 2) * extraPerson; stayNote = `includes ${riders - 2} extra ${riders - 2 === 1 ? 'person' : 'people'} at $${extraPerson}`; }
  else if (stay.people && riders > stay.people) stayNote = `sleeps ${stay.people}: ask for a bigger room`;
  const stayTotal = stay.id === 'none' ? 0 : stayNight * nights;
  const total = lessonTotal + stayTotal;

  const message = [
    `Hi! I’d like to book: ${lesson.hours}-hour ${kind} lesson for ${riders} ${riders === 1 ? 'person' : 'people'}`,
    stay.id !== 'none' && nights > 0 ? `and ${nights} ${nights === 1 ? 'night' : 'nights'} in the ${stay.name.toLowerCase()}` : '',
    `(estimated ${mxn(total)}). Which dates are available?`,
  ].filter(Boolean).join(' ');

  return (
    <section id="trip" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="titulo text-4xl sm:text-5xl">Your kite trip, priced before you pack</h2>
          <p className="mt-4 text-lg text-gris">Pick a lesson, how many of you are riding and where you’ll sleep. The ticket adds it up with the rates on their site; every lesson includes equipment, insurance and boat or jet ski support.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-7">
            <fieldset>
              <legend className="font-semibold">Lesson</legend>
              <div className="mt-3 inline-flex rounded-full bg-arena p-1">
                {(['group', 'private'] as const).map((k) => (
                  <button
                    key={k}
                    type="button"
                    aria-pressed={kind === k}
                    onClick={() => { setKind(k); setLessonId(k === 'group' ? 'g6' : 'p2'); }}
                    className={`min-h-11 rounded-full px-5 font-semibold ${kind === k ? 'bg-noche text-white' : 'text-noche'}`}
                  >
                    {k === 'group' ? 'Group (max 3)' : 'Private'}
                  </button>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {options.map((l) => (
                  <label key={l.id} className={`cursor-pointer rounded-2xl border-2 p-3 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-kite ${l.id === lesson.id ? 'border-laguna bg-agua/20' : 'border-noche/10 hover:border-noche/30'}`}>
                    <input type="radio" name="lesson" className="sr-only" checked={l.id === lesson.id} onChange={() => setLessonId(l.id)} />
                    <span className="block font-titulo text-xl font-bold">{l.hours} h</span>
                    <span className="block text-sm text-gris">{mxn(l.price)}{l.perPerson ? ' per person' : ''}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="riders" className="font-semibold">Riders: {riders}</label>
              <input id="riders" type="range" min={1} max={3} value={riders} onChange={(e) => setRiders(Number(e.target.value))} className="mt-3 w-full accent-[#0b6b74]" />
              <p className="mt-1 text-sm text-gris">{kind === 'private' && riders > 1 ? 'Private lessons are one student each: the ticket counts one per rider.' : 'Group lessons are for up to 3 people.'}</p>
            </div>

            <fieldset>
              <legend className="font-semibold">Where you’ll sleep</legend>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {stays.map((s) => (
                  <label key={s.id} className={`cursor-pointer rounded-2xl border-2 p-3 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-kite ${s.id === stayId ? 'border-laguna bg-agua/20' : 'border-noche/10 hover:border-noche/30'}`}>
                    <input type="radio" name="stay" className="sr-only" checked={s.id === stayId} onChange={() => setStayId(s.id)} />
                    <span className="block font-semibold leading-tight">{s.name}</span>
                    <span className="block text-sm text-gris">{s.price ? `${mxn(s.price)} a night` : 'Day pass or your hotel'}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {stay.id !== 'none' && (
              <div>
                <label htmlFor="nights" className="font-semibold">Nights: {nights}</label>
                <input id="nights" type="range" min={1} max={14} value={nights} onChange={(e) => setNights(Number(e.target.value))} className="mt-3 w-full accent-[#0b6b74]" />
              </div>
            )}
          </div>

          <aside className="rounded-3xl bg-noche p-6 text-white shadow-xl sm:p-8 lg:sticky lg:top-24" aria-live="polite">
            <p className="text-sm font-semibold text-agua">Your ticket</p>
            <div className="mt-3 flex flex-wrap gap-1 text-durazno" aria-label={`${lesson.hours * riders} hours on the water in total`}>
              {Array.from({ length: lesson.hours * riders }, (_, i) => <Kite key={i} className="size-6" />)}
            </div>
            <p className="mt-2 text-sm text-agua">{lesson.hours} h × {riders} {riders === 1 ? 'rider' : 'riders'} on the water</p>
            <dl className="mt-6 space-y-3">
              <div className="flex justify-between gap-4 border-b border-white/15 pb-3">
                <dt>{lesson.hours}-hour {kind} lesson × {riders}</dt>
                <dd className="font-semibold">{mxn(lessonTotal)}</dd>
              </div>
              {stay.id !== 'none' && (
                <div className="flex justify-between gap-4 border-b border-white/15 pb-3">
                  <dt>
                    {stay.name}, {nights} {nights === 1 ? 'night' : 'nights'}
                    {stayNote && <span className="block text-sm text-agua">{stayNote}</span>}
                  </dt>
                  <dd className="font-semibold">{mxn(stayTotal)}</dd>
                </div>
              )}
              <div className="flex items-baseline justify-between gap-4 pt-1">
                <dt className="font-titulo text-lg font-bold">Estimated total</dt>
                <dd className="titulo text-3xl text-durazno">{mxn(total)}</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm text-agua">Rates from their Lessons and Accommodations pages; the school confirms dates, wind and final price.</p>
            <a href={wa(message)} className="boton mt-6 w-full bg-kite text-white hover:bg-[#a33c12]">
              <Icon d={iWhats} />
              Send this to Ikarus
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Lessons() {
  return (
    <section id="lessons" className="bg-arena py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="titulo text-4xl sm:text-5xl">Lessons and rentals</h2>
          <p className="mt-4 text-lg text-gris">Certified instructors teaching in {place.languages}. Kiteboard, kitesurf, kitefoil, wingfoil and wing SUP, with gear for any wind and rider weight.</p>
          <ul className="mt-6 divide-y divide-noche/10 rounded-3xl bg-white px-6">
            {rentals.map(([n, p]) => (
              <li key={n} className="flex flex-wrap justify-between gap-2 py-3">
                <span className="font-medium">{n}</span>
                <span className="text-gris">{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-gris">Rentals require a credit card voucher and a valid ID. Prices in MXN.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img {...photo('f-clase')} alt="An instructor holds the harness of a student in the shallow lagoon" className="aspect-[4/5] w-full rounded-3xl object-cover" loading="lazy" />
          <img {...photo('f-atardecer')} alt="A kite against the sunset over the lagoon" className="aspect-[4/5] w-full rounded-3xl object-cover" loading="lazy" />
          <img {...photo('f-alumnos')} alt="An instructor and a student with their kites in the flat turquoise water" className="col-span-2 aspect-[16/9] w-full rounded-3xl object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Stay() {
  return (
    <section id="stay" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="grid grid-cols-2 gap-4">
          <img {...photo('f-king')} alt="King size studio with a large bed, ceiling fan and a small kitchen" className="aspect-[4/3] w-full rounded-3xl object-cover" loading="lazy" />
          <img {...photo('f-doble')} alt="Double room with two beds and a glass door to the garden" className="aspect-[4/3] w-full rounded-3xl object-cover" loading="lazy" />
          <img {...photo('f-centro')} alt="Aerial view of Ikarus on the lagoon shore, with palm trees, buildings and kites on the water" className="col-span-2 aspect-[16/9] w-full rounded-3xl object-cover" loading="lazy" />
        </div>
        <div>
          <h2 className="titulo text-4xl sm:text-5xl">Stay on the lagoon</h2>
          <p className="mt-4 text-lg text-gris">An ecological boutique hotel and camping site: {hotel.rooms}. {hotel.solar}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {hotel.extras.map((x) => <li key={x} className="rounded-full bg-arena px-3 py-1.5 font-medium">{x}</li>)}
          </ul>
          <h3 className="titulo mt-8 text-2xl">Restaurant</h3>
          <p className="mt-2 text-gris">{hotel.restaurant} Day pass: 100 pesos, or 200 pesos minimum consumption in the restaurant.</p>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-noche py-16 text-white sm:py-24">
      <div className="contenedor">
        <h2 className="titulo text-4xl sm:text-5xl">From riders on Tripadvisor</h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {reviews.map((r) => (
            <li key={r.name} className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 sm:p-8">
              <blockquote>“{r.text}”</blockquote>
              <p className="mt-4 font-semibold text-agua">{r.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 pb-28 sm:py-24 md:pb-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="titulo text-4xl sm:text-5xl">Find us in Isla Blanca</h2>
          <address className="mt-5 text-lg not-italic">{place.address}</address>
          <a href={place.map} className="boton mt-5 bg-laguna text-white hover:bg-noche">
            <Icon d={iMap} />
            Get directions
          </a>
        </div>
        <div className="rounded-3xl bg-arena p-6 sm:p-8">
          <h3 className="titulo text-2xl">Talk to the school</h3>
          <ul className="mt-5 space-y-4">
            <li><a href={wa('Hi! I’d like information about kite lessons.')} className="flex items-center gap-3 font-semibold text-laguna"><Icon d={iWhats} /> WhatsApp {place.whatsapp.text}</a></li>
            <li><a href={`mailto:${place.email}`} className="flex items-center gap-3 font-semibold text-laguna"><Icon d={iMail} /> {place.email}</a></li>
          </ul>
          <ul className="mt-6 flex gap-4">
            {place.social.map(([n, u]) => <li key={n}><a href={u} className="font-semibold underline underline-offset-2">{n}</a></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-noche py-8 pb-28 text-agua md:pb-8">
      <div className="contenedor flex flex-col gap-2 text-sm sm:flex-row sm:justify-between">
        <p className="font-titulo text-base font-bold text-white">{place.brand}</p>
        <p>Isla Blanca, Cancún, Quintana Roo, Mexico.</p>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-noche text-white md:hidden">
      <a href={wa('Hi! I’d like information about kite lessons.')} className="flex min-h-15 flex-col items-center justify-center gap-0.5 bg-kite text-sm font-semibold"><Icon d={iWhats} /> WhatsApp</a>
      <a href="#trip" className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-semibold"><Kite /> Plan</a>
      <a href={place.map} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-semibold"><Icon d={iMap} /> Directions</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Why />
        <Trip />
        <Lessons />
        <Stay />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
