import { useState } from 'react';
import { clinic, dentists, insurance, reviews, rooms, steps, tech, treatments, wa, type Dentist } from './data/content';
import fotos from './data/fotos.json';

const sizes = fotos as unknown as Record<string, [number, number]>;
const photo = (n: string) => ({ src: `./${n}.webp`, width: sizes[n][0], height: sizes[n][1] });
const byId = Object.fromEntries(dentists.map((d) => [d.id, d])) as Record<string, Dentist>;

function Icon({ d, className = 'size-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const iWhats = 'M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21zM9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.8-2.2-1-1 1a4.5 4.5 0 0 1-2.5-2.5l1-1-1-2.2L9 8.5z';
const iTel = 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2';
const iMap = 'M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z';
const iTurn = 'M4 12a8 8 0 0 1 14-5.3M20 4v4h-4M20 12a8 8 0 0 1-14 5.3M4 20v-4h4';

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-carbon/95 text-white backdrop-blur">
      <div className="contenedor flex h-18 items-center justify-between gap-4">
        <a href="#top" className="shrink-0">
          <img {...photo('logo')} alt="Let’s Smile Dentistry" className="h-10 w-auto" />
        </a>
        <nav aria-label="Main" className="hidden items-center gap-7 font-medium lg:flex">
          <a href="#dentist" className="hover:text-sonrisa">Your dentist</a>
          <a href="#how" className="hover:text-sonrisa">How it works</a>
          <a href="#clinic" className="hover:text-sonrisa">The clinic</a>
          <a href="#visit" className="hover:text-sonrisa">Visit</a>
          <a href={clinic.spanish} hrefLang="es" lang="es" className="text-niebla hover:text-sonrisa">Español</a>
        </nav>
        <a href={wa('Hi! I’d like a free consultation.')} className="boton min-h-11 bg-sonrisa px-5 text-carbon hover:bg-[#6cc592]">
          <Icon d={iWhats} />
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-carbon text-white">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <div>
          <p className="font-semibold text-sonrisa">Mexicali, Baja California</p>
          <h1 className="titulo mt-3 text-4xl sm:text-5xl lg:text-6xl">Your dentists in Mexicali, 3 minutes from the U.S. border</h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            Implants, crowns, veneers, root canals and everyday care with a bilingual team of specialists, led by Dr. Tomás García. Free consultation and quote before you travel.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={wa('Hi! I’d like a free consultation.')} className="boton bg-sonrisa text-carbon hover:bg-[#6cc592]">
              <Icon d={iWhats} />
              WhatsApp for a free quote
            </a>
            <a href={`tel:${clinic.phone.tel}`} className="boton border-2 border-white/60 text-white hover:bg-white/10">
              <Icon d={iTel} />
              Call or text {clinic.phone.text}
            </a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {[
              [`${clinic.rating.stars} ★`, `Google, ${clinic.rating.reviews} reviews`],
              ['3 min', 'from the East Port of Entry'],
              ['13+', 'years of Dr. García’s practice'],
            ].map(([n, t]) => (
              <div key={t}>
                <dt className="sr-only">{t}</dt>
                <dd className="titulo text-3xl text-madera">{n}</dd>
                <dd className="mt-1 text-sm text-niebla">{t}</dd>
              </div>
            ))}
          </dl>
        </div>
        <img {...photo('f-fachada')} alt="The Let’s Smile team, in black scrubs, in front of the clinic in Mexicali" className="aspect-[3/2] w-full rounded-3xl object-cover" fetchPriority="high" />
      </div>
    </section>
  );
}

function Card({ d }: { d: Dentist }) {
  const [fun, setFun] = useState(false);
  const initials = d.name.replace(/^Dra?\.\s*/, '').split(' ').slice(0, 2).map((w) => w[0]).join('');
  return (
    <li className={`flex flex-col overflow-hidden rounded-3xl ring-1 transition-colors ${fun ? 'bg-madera/40 ring-madera' : 'bg-white ring-carbon/10'}`}>
      <div className="flex gap-4 p-5">
        {d.photo ? (
          <img {...photo(d.photo)} alt={`Portrait of ${d.name}`} className="h-28 w-22 shrink-0 rounded-2xl bg-arena object-cover object-top" loading="lazy" />
        ) : (
          <span className="grid h-28 w-22 shrink-0 place-items-center rounded-2xl bg-carbon font-titulo text-2xl font-bold text-sonrisa" aria-hidden="true">{initials}</span>
        )}
        <div className="min-w-0">
          <h4 className="font-titulo text-lg leading-tight font-bold">{d.name}</h4>
          <p className="mt-1 text-sm font-semibold text-pino">{d.focus}</p>
          <button type="button" onClick={() => setFun(!fun)} aria-pressed={fun} className="mt-3 inline-flex items-center gap-1.5 rounded-full border-2 border-carbon/15 px-3 py-1.5 text-sm font-semibold hover:border-carbon/40">
            <Icon d={iTurn} className="size-4" />
            {fun ? 'Good to know' : 'Fun to know'}
          </button>
        </div>
      </div>
      <div className="flex-1 px-5 pb-5">
        <p className="text-sm font-bold text-gris">{fun ? 'Fun to know' : 'Good to know'}</p>
        <ul className="mt-2 space-y-1.5 text-[0.95rem]">
          {(fun ? d.fun : d.good).map((x) => (
            <li key={x} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-sonrisa" />{x}</li>
          ))}
        </ul>
        <a href={d.url} className="mt-3 inline-block text-sm font-semibold text-pino underline underline-offset-2">Full profile</a>
      </div>
    </li>
  );
}

function MeetYourDentist() {
  const [choice, setChoice] = useState('implants');
  const t = treatments.find((x) => x.id === choice)!;
  return (
    <section id="dentist" className="bg-arena py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="titulo text-4xl sm:text-5xl">Meet your dentist before you cross</h2>
          <p className="mt-4 text-lg text-gris">
            Pick what you need: you’ll see who on the team focuses on it, what it costs in Mexicali, and a little about each dentist, both the credentials and the fun part.
          </p>
        </div>

        <div role="radiogroup" aria-label="What do you need?" className="mt-8 flex flex-wrap gap-2">
          {treatments.map((x) => (
            <button
              key={x.id}
              type="button"
              role="radio"
              aria-checked={x.id === choice}
              onClick={() => setChoice(x.id)}
              className={`min-h-11 rounded-full px-4 font-semibold transition-colors ${x.id === choice ? 'bg-carbon text-white' : 'bg-white text-carbon ring-1 ring-carbon/15 hover:ring-carbon/40'}`}
            >
              {x.name}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)]" aria-live="polite">
          <div className="rounded-3xl bg-carbon p-6 text-white sm:p-7 lg:self-start">
            <h3 className="titulo text-3xl">{t.name}</h3>
            <p className="mt-3 text-white/85">{t.detail}</p>
            {t.price && (
              <table className="mt-6 w-full text-left text-sm">
                <caption className="sr-only">Prices in Mexicali compared with the U.S. and Canada</caption>
                <thead className="text-niebla">
                  <tr>
                    <th scope="col" className="pb-2 font-medium">Treatment</th>
                    <th scope="col" className="pb-2 font-medium">U.S. / Canada</th>
                    <th scope="col" className="pb-2 text-right font-medium">Mexicali</th>
                  </tr>
                </thead>
                <tbody>
                  {t.price.map((p) => (
                    <tr key={p.item} className="border-t border-white/15 align-top">
                      <th scope="row" className="py-3 pr-3 font-medium">{p.item}</th>
                      <td className="py-3 pr-3 text-niebla">{p.us}</td>
                      <td className="py-3 text-right">
                        <span className="titulo block text-2xl text-sonrisa">{p.mexicali}</span>
                        <span className="text-xs text-niebla">save {p.save}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {t.price && <p className="mt-3 text-xs text-niebla">Illustrative figures from their pricing table; your exact price is confirmed in the free consultation.</p>}
            {t.note && <p className="mt-5 rounded-2xl bg-white/10 p-4 text-sm">{t.note}</p>}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={wa(t.ask)} className="boton bg-sonrisa text-carbon hover:bg-[#6cc592]">
                <Icon d={iWhats} />
                Ask on WhatsApp
              </a>
              {t.id === 'emergency' && (
                <a href={`tel:${clinic.phone.tel}`} className="boton border-2 border-white/60 text-white hover:bg-white/10">
                  <Icon d={iTel} />
                  Call now
                </a>
              )}
            </div>
          </div>

          <div>
            {t.dentists.length > 0 ? (
              <>
                <p className="font-semibold text-gris">{t.dentists.length === 1 ? 'The dentist who focuses on this' : `${t.dentists.length} dentists who focus on this`}</p>
                <ul className="mt-3 grid gap-4 md:grid-cols-2">
                  {t.dentists.map((id) => <Card key={`${choice}-${id}`} d={byId[id]} />)}
                </ul>
              </>
            ) : (
              <figure>
                <img {...photo(t.id === 'kids' ? 'f-infantil' : 'f-doctores')} alt={t.id === 'kids' ? 'Kids’ treatment room with a forest mural, a tree and a panda on the dental chair' : 'Six members of the team in black scrubs, in the clinic'} className="aspect-[3/2] w-full rounded-3xl object-cover" loading="lazy" />
                <figcaption className="mt-2 text-sm text-gris">{t.id === 'kids' ? 'Their kids’ operatory.' : 'Part of the dental team.'}</figcaption>
              </figure>
            )}
            <p className="mt-5 text-sm text-gris">Who does what comes from each dentist’s profile on their site; the team decides who treats you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function How() {
  return (
    <section id="how" className="py-16 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="titulo text-4xl sm:text-5xl">From your couch to their chair</h2>
          <ol className="mt-8 border-l-4 border-sonrisa">
            {steps.map(([name, text]) => (
              <li key={name} className="relative pb-7 pl-7 last:pb-0">
                <span className="absolute top-1.5 -left-[11px] size-[18px] rounded-full border-4 border-white bg-pino" aria-hidden="true" />
                <h3 className="font-titulo text-xl font-bold">{name}</h3>
                <p className="mt-1 text-gris">{text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-6">
          <figure>
            <img {...photo('f-traslado')} alt="The clinic’s white car with the Let’s Smile logo, used for border shuttles" className="aspect-[4/3] w-full rounded-3xl object-cover" loading="lazy" />
            <figcaption className="mt-2 text-sm text-gris">Private border shuttles and lodging deals are part of their dental tourism services.</figcaption>
          </figure>
          <div className="rounded-3xl bg-arena p-6">
            <h3 className="font-titulo text-xl font-bold">Using your U.S. dental insurance</h3>
            <ul className="mt-3 space-y-3">
              {insurance.map(([name, text]) => (
                <li key={name}><strong>{name}.</strong> <span className="text-gris">{text}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Clinic() {
  return (
    <section id="clinic" className="bg-carbon py-16 text-white sm:py-24">
      <div className="contenedor">
        <h2 className="titulo max-w-3xl text-4xl sm:text-5xl">See where your care will happen</h2>
        <p className="mt-4 max-w-2xl text-lg text-white/85">Real photos of the clinic in Mexicali. <a href={clinic.tour} className="font-semibold text-sonrisa underline underline-offset-2">Watch the clinic tour</a>.</p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((r) => (
            <li key={r.name}>
              <img {...photo(r.photo)} alt={r.alt} className="aspect-[4/3] w-full rounded-2xl object-cover" loading="lazy" />
              <p className="mt-3 font-titulo text-lg font-bold">{r.name}</p>
              <p className="text-niebla">{r.text}</p>
            </li>
          ))}
        </ul>
        <ul className="mt-12 grid gap-x-8 gap-y-5 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {tech.map(([name, text]) => (
            <li key={name}>
              <p className="font-semibold text-madera">{name}</p>
              <p className="mt-1 text-sm text-white/80">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="titulo text-4xl sm:text-5xl">Worth the trip, worth the smile</h2>
        <p className="mt-4 text-lg text-gris">{clinic.rating.stars} on Google, based on {clinic.rating.reviews} reviews. A few of them:</p>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {reviews.map((r) => (
            <li key={r.name} className="rounded-3xl bg-arena p-6 sm:p-8">
              <blockquote className="text-[1.05rem]">“{r.text}”</blockquote>
              <p className="mt-4 font-semibold">{r.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="bg-arena py-16 pb-28 sm:py-24 md:pb-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="titulo text-4xl sm:text-5xl">Plan your visit</h2>
          <address className="mt-5 text-lg not-italic">{clinic.address}</address>
          <p className="mt-2 text-gris">{clinic.border}.</p>
          <a href={clinic.map} className="boton mt-5 bg-pino text-white hover:bg-carbon">
            <Icon d={iMap} />
            Get directions
          </a>
          <h3 className="mt-8 font-bold">Hours</h3>
          <dl className="mt-2">
            {clinic.hours.map(([d, h]) => (
              <div key={d} className="flex max-w-sm justify-between gap-4 border-b border-carbon/15 py-1.5">
                <dt>{d}</dt>
                <dd className="font-semibold">{h}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-2 text-sm text-gris">{clinic.emergencies}.</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-carbon/5 sm:p-8">
          <h3 className="titulo text-2xl">Talk to a patient coordinator</h3>
          <p className="mt-2 text-gris">Every coordinator, assistant and doctor speaks English.</p>
          <ul className="mt-5 space-y-4">
            <li><a href={wa('Hi! I’d like a free consultation.')} className="flex items-center gap-3 font-semibold text-pino"><Icon d={iWhats} /> WhatsApp {clinic.phone.text}</a></li>
            <li><a href={`tel:${clinic.phone.tel}`} className="flex items-center gap-3 font-semibold text-pino"><Icon d={iTel} /> Call or text {clinic.phone.text} (U.S. line)</a></li>
            <li><a href={`mailto:${clinic.email}`} className="break-all font-semibold text-pino underline underline-offset-2">{clinic.email}</a></li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {clinic.social.map(([n, u]) => <li key={n}><a href={u} className="font-semibold text-pino underline underline-offset-2">{n}</a></li>)}
            <li><a href={clinic.spanish} hrefLang="es" lang="es" className="font-semibold text-pino underline underline-offset-2">Sitio en español</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-carbon py-10 pb-28 text-niebla md:pb-10">
      <div className="contenedor flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <img {...photo('logo')} alt="Let’s Smile Dentistry" className="h-9 w-auto self-start sm:self-auto" loading="lazy" />
        <p className="text-sm">{clinic.street}, Mexicali, B.C., Mexico.</p>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-carbon text-white md:hidden">
      <a href={wa('Hi! I’d like a free consultation.')} className="flex min-h-15 flex-col items-center justify-center gap-0.5 bg-sonrisa text-sm font-semibold text-carbon">
        <Icon d={iWhats} /> WhatsApp
      </a>
      <a href={`tel:${clinic.phone.tel}`} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-semibold">
        <Icon d={iTel} /> Call or text
      </a>
      <a href={clinic.map} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-semibold">
        <Icon d={iMap} /> Directions
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MeetYourDentist />
        <How />
        <Clinic />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
