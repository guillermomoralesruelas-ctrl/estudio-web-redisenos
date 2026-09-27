import { useState } from 'react';
import { comoFunciona, foto, fotos, negocio, niveles, preguntas, resenas, wa, waGeneral, type Foto, type Nivel } from './data/content';

function Img({ f, className = '', eager = false, sizes }: { f: Foto; className?: string; eager?: boolean; sizes?: string }) {
  return <img src={f.src} width={f.w} height={f.h} alt={f.alt} className={className} loading={eager ? 'eager' : 'lazy'} decoding="async" sizes={sizes} />;
}

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

function Encabezado() {
  return (
    <header className="oscuro sticky top-0 z-40 bg-abismo/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={foto('logo-black-box.webp')} width={139} height={60} alt="Emilia Black Box" className="h-9 w-auto" />
        </a>
        <nav aria-label="Main" className="hidden items-center gap-6 text-[0.95rem] text-white/85 md:flex">
          <a href="#depth" className="hover:text-sol">Sessions</a>
          <a href="#first-time" className="hover:text-sol">First time</a>
          <a href="#faq" className="hover:text-sol">FAQ</a>
          <a href="#contact" className="hover:text-sol">Contact</a>
        </nav>
        <a href={waGeneral} className="btn !min-h-[40px] !px-4 !py-2 text-sm" target="_blank" rel="noopener">
          <IconoWa className="h-4 w-4" /> Check availability
        </a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden bg-abismo">
      <img
        src={fotos.parejaRayos.src}
        width={fotos.parejaRayos.w}
        height={fotos.parejaRayos.h}
        alt={fotos.parejaRayos.alt}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[60%_40%] opacity-80"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-abismo via-abismo/75 to-abismo/10" aria-hidden="true" />
      <div className="contenedor flex min-h-[86vh] flex-col justify-end pb-14 pt-28 sm:justify-center sm:pb-20">
        <p className="mb-4 max-w-md text-[0.98rem] text-turquesa">Tulum &amp; Playa del Carmen, Riviera Maya</p>
        <h1 className="max-w-3xl text-[2.7rem] sm:text-6xl lg:text-7xl">Underwater Cenote Photoshoot in the Riviera Maya</h1>
        <p className="mt-5 max-w-xl text-lg text-white/90">
          <strong className="font-bold text-sol">No experience needed.</strong> Private underwater portraits in the cenotes between Tulum and Playa del Carmen — fully guided from start to finish, even if you’ve never done anything like this before.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waGeneral} className="btn" target="_blank" rel="noopener"><IconoWa /> Check availability on WhatsApp</a>
          <a href="#depth" className="btn-claro">Find your session</a>
        </div>
        <ul className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-3 text-[0.95rem] text-white/85 sm:grid-cols-4">
          <li><span className="block font-titulo text-2xl text-white">Private</span>one-on-one session</li>
          <li><span className="block font-titulo text-2xl text-white">6,000 MXN</span>sessions start from</li>
          <li><span className="block font-titulo text-2xl text-white">8 years</span>guiding first-timers</li>
          <li><span className="block font-titulo text-2xl text-white">Included</span>cenote entrance</li>
        </ul>
      </div>
    </section>
  );
}

function Privada() {
  return (
    <section className="py-20 sm:py-28">
      <div className="contenedor grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">A private experience, not just a photoshoot</h2>
          <p className="mt-6 text-lg">This isn’t a group tour with a camera pointed at you for two minutes. It’s a private session, built around you — your comfort, your pace, your story.</p>
          <p className="mt-4">You don’t come out with a set of vacation pictures. You come out with images that actually look like you, taken in one of the most striking natural settings in Mexico.</p>
          <p className="mt-4">Every session is planned around the natural conditions of the cenote — including light, water clarity and timing. There’s no group to follow and no need to rush from one setup to another.</p>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-4">
          <Img f={fotos.vestidoRojoPeces} className="aspect-[2/3] w-full rounded-md object-cover" />
          <Img f={fotos.reflejo} className="mt-12 aspect-[2/3] w-full rounded-md object-cover" />
        </div>
      </div>
    </section>
  );
}

// Posición del buzo en el dibujo (viewBox 0 0 160 440) para cada nivel.
const alturaNivel: Record<Nivel['id'], number> = { jungle: 78, surface: 150, underwater: 250, diving: 370 };

function Corte({ nivel }: { nivel: Nivel['id'] }) {
  const y = alturaNivel[nivel];
  return (
    <svg viewBox="0 0 160 440" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="agua" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a6f86" />
          <stop offset="0.45" stopColor="#0c3446" />
          <stop offset="1" stopColor="#030d13" />
        </linearGradient>
      </defs>
      {/* Selva sobre el borde del cenote */}
      <path d="M0 112 C10 60 30 62 34 96 C40 40 70 44 66 100 L0 112Z" fill="#536942" />
      <path d="M160 112 C150 58 128 60 124 98 C118 46 92 50 96 102 L160 112Z" fill="#445734" />
      {/* Roca y agua */}
      <path d="M0 110 L60 118 L100 118 L160 110 L160 440 L0 440Z" fill="#1c2621" />
      <path d="M22 140 C18 220 30 320 18 440 L142 440 C130 320 144 220 138 140Z" fill="url(#agua)" />
      <path d="M60 118 L22 140 L138 140 L100 118Z" fill="#2e3b33" />
      {/* Rayos de luz */}
      <path className="rayo" d="M66 140 L48 440 L74 440 L78 140Z" fill="#bfe9ef" opacity="0.35" />
      <path className="rayo" d="M88 140 L96 440 L118 440 L96 140Z" fill="#bfe9ef" opacity="0.25" style={{ animationDelay: '2s' }} />
      {/* Línea de agua */}
      <line x1="22" y1="140" x2="138" y2="140" stroke="#7fd3dc" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Marcas de nivel */}
      {Object.entries(alturaNivel).map(([id, altura]) => (
        <line key={id} x1="140" x2="156" y1={altura} y2={altura} stroke={id === nivel ? '#ffd936' : '#ffffff55'} strokeWidth={id === nivel ? 3 : 1.5} />
      ))}
      {/* La persona: sube o baja hasta el nivel elegido */}
      <g className="buzo" style={{ transform: `translate(80px, ${y}px)` }}>
        <circle r="17" fill="#ffd936" opacity="0.18" />
        <circle cy="-8" r="5" fill="#ffd936" />
        <path d="M0 -2 C-7 4 -6 12 -10 18 M0 -2 C7 4 6 12 10 18 M0 -2 L0 10" stroke="#ffd936" strokeWidth="3" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

function Profundidad() {
  const [id, setId] = useState<Nivel['id']>('underwater');
  const [quien, setQuien] = useState<'solo' | 'pareja'>('solo');
  const nivel = niveles.find((n) => n.id === id)!;
  const paquetes = quien === 'solo' ? nivel.solo : nivel.pareja;
  const mensaje = (paquete?: string) =>
    wa(`Hi Emilia! I'd like a ${nivel.sesion}${paquete ? ` — ${paquete}` : ''} (${quien === 'solo' ? 'just me' : 'for two'}). What dates do you have available?`);

  return (
    <section id="depth" className="oscuro bg-abismo py-20 text-white/85 sm:py-28">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl">How far into the water?</h2>
          <p className="mt-5 text-lg">Every session happens in a cenote between Tulum and Playa del Carmen. What changes is how far into the water you go — from the jungle around it to fully underwater. Pick a level to see the session, the photos and the price.</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-14">
          <div className="grid h-[24rem] min-w-0 grid-cols-[8.5rem_minmax(0,1fr)] gap-4 self-start sm:h-[28rem] sm:grid-cols-[10rem_minmax(0,1fr)] lg:sticky lg:top-24">
            <div className="h-full"><Corte nivel={id} /></div>
            <div role="radiogroup" aria-label="How far into the water" className="flex min-w-0 flex-col justify-between py-1">
              {niveles.map((n) => (
                <button
                  key={n.id}
                  role="radio"
                  aria-checked={n.id === id}
                  onClick={() => setId(n.id)}
                  className={`rounded-lg border px-4 py-3 text-left transition-colors ${n.id === id ? 'border-sol bg-sol text-abismo' : 'border-white/20 hover:border-white/60'}`}
                >
                  <span className="block font-titulo text-xl leading-tight">{n.nombre}</span>
                  <span className={`block text-sm ${n.id === id ? 'text-abismo/80' : 'text-white/70'}`}>{n.profundidad}</span>
                </button>
              ))}
            </div>
          </div>

          <div key={id} className="ficha min-w-0">
            <div className="grid grid-cols-2 gap-3">
              <Img f={nivel.fotos[0]} className="aspect-[4/5] w-full rounded-md object-cover" />
              <Img f={nivel.fotos[1]} className="aspect-[4/5] w-full rounded-md object-cover" />
            </div>
            <h3 className="mt-7 text-3xl sm:text-4xl">{nivel.sesion}</h3>
            <p className="mt-3">{nivel.resumen}</p>
            <p className="mt-3 text-turquesa">{nivel.aliento}</p>

            {nivel.solo.length > 0 ? (
              <>
                <div role="radiogroup" aria-label="Who is coming" className="mt-7 inline-flex rounded-full border border-white/25 p-1">
                  {(['solo', 'pareja'] as const).map((q) => (
                    <button key={q} role="radio" aria-checked={quien === q} onClick={() => setQuien(q)} className={`rounded-full px-5 py-2 text-sm font-bold ${quien === q ? 'bg-white text-abismo' : 'text-white/85 hover:text-white'}`}>
                      {q === 'solo' ? 'Just me' : 'Couple'}
                    </button>
                  ))}
                </div>
                <div className={`mt-5 grid gap-4 ${paquetes.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                  {paquetes.map((p) => (
                    <div key={p.nombre} className="flex min-w-0 flex-col rounded-lg border border-white/15 bg-cenote/60 p-5">
                      <p className="font-titulo text-2xl text-white">{p.nombre}</p>
                      <p className="mt-1 font-bold text-sol">{p.precio}</p>
                      <ul className="mt-3 flex-1 space-y-1 text-[0.95rem]">
                        {p.puntos.map((x) => <li key={x}>{x}</li>)}
                      </ul>
                      <a href={mensaje(p.nombre)} target="_blank" rel="noopener" className="btn mt-5 self-start"><IconoWa /> Ask about this one</a>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="mt-7 rounded-lg border border-white/15 bg-cenote/60 p-5">
                <p>Prices for diving photography aren’t published: tell Emilia where and when you’re diving and she’ll send you a quote.</p>
                <a href={mensaje()} target="_blank" rel="noopener" className="btn mt-5"><IconoWa /> Ask for a quote</a>
              </div>
            )}
            <p className="mt-6 text-sm text-white/70">
              Prices in Mexican pesos, as published on her site (“sessions start from”). <a href={nivel.pagina} className="enlace" target="_blank" rel="noopener">Full details of this session</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrimeraVez() {
  return (
    <section id="first-time" className="py-20 sm:py-28">
      <div className="contenedor grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0">
          <Img f={fotos.nenufares} className="aspect-[3/4] w-full rounded-md object-cover lg:sticky lg:top-24" />
        </div>
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">First time underwater?</h2>
          <p className="mt-5 text-xl text-abismo">You don’t need any previous experience.</p>
          <p className="mt-4">If you’ve never done an underwater photoshoot before, you don’t have to know how to pose, hold your breath or move underwater.</p>
          <p className="mt-4">I guide you step by step through breathing, body position, movement and posing, so you can gradually feel comfortable in the water while I focus on creating the images. Because the session is private, there’s no group to keep up with and no pressure to get everything right on the first try.</p>

          <h3 className="mt-12 text-3xl">How it works</h3>
          <ol className="mt-6 space-y-6 border-l-2 border-musgo/40 pl-6">
            {comoFunciona.map((paso) => (
              <li key={paso.titulo}>
                <p className="font-bold text-abismo">{paso.titulo}</p>
                <p className="mt-1">{paso.texto}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 rounded-md bg-white p-5 text-[0.98rem]">
            We meet at the cenote early in the morning, around 8–8:30 am, when the light is at its best and there’s practically no one else around. The underwater session lasts approximately 2 hours, with short breaks between sets to rest and warm up.
          </p>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const lista = [fotos.tulCaverna, fotos.vestidoRojo, fotos.retratoRoca, fotos.tulBlanco, fotos.orilla, fotos.azulRoca];
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="galeria">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="galeria" className="text-4xl sm:text-5xl">Where water, light and movement come together</h2>
          <a href={negocio.portafolio} className="enlace" target="_blank" rel="noopener">View full portfolio</a>
        </div>
        <p className="mt-5 max-w-2xl">Instead of forcing poses, I guide you to move naturally within the space, creating images that feel fluid, intentional and connected to the environment.</p>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {lista.map((f, i) => (
            <Img key={f.src} f={f} className={`w-full rounded-md object-cover ${i % 3 === 1 ? 'aspect-[3/4] md:translate-y-8' : 'aspect-[3/4]'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Resenas() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="resenas">
      <div className="contenedor">
        <h2 id="resenas" className="text-4xl sm:text-5xl">Real clients’ reviews</h2>
        <p className="mt-4">Rated “Excellent” on Google, based on 102 reviews (as shown on her site).</p>
        <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {resenas.map((r) => (
            <figure key={r.autor} className="min-w-0 border-t border-abismo/15 pt-6">
              <blockquote className="font-titulo text-[1.45rem] leading-snug text-abismo">“{r.texto}”</blockquote>
              <figcaption className="mt-4 text-sm font-bold">{r.autor}, on Google</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SobreEmilia() {
  return (
    <section className="oscuro bg-cenote py-20 text-white/85 sm:py-28">
      <div className="contenedor grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">Behind the camera</h2>
          <p className="mt-6">I studied Audiovisual Communication at the National University of La Plata, which gave me a strong foundation in visual language, composition and storytelling — long before underwater photography became a trend.</p>
          <p className="mt-4">I moved to Mexico in 2017, where water became not just my environment, but my medium. For the past eight years, I’ve worked exclusively as an underwater photographer, documenting both marine life and human movement beneath the surface — from open ocean photography in Baja California to underwater cenote photography in the Riviera Maya.</p>
          <p className="mt-4">Over the years, I’ve learned how to turn hesitation into flow and tension into stillness.</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {negocio.redes.map((r) => <a key={r.nombre} href={r.url} className="enlace" target="_blank" rel="noopener">{r.nombre}</a>)}
          </div>
        </div>
        <div className="min-w-0">
          <div className="rounded-md border border-white/15 p-6">
            <h3 className="text-3xl">Beach photoshoot in Playa del Carmen</h3>
            <p className="mt-4">Relaxed portraits by the Caribbean Sea — couple sessions, solo portraits, families and groups — no water required. Most beach photoshoots take place during the early morning or sunset, when the light is soft, warm and flattering.</p>
            <a href={wa("Hi Emilia! I'd like a quote for a beach photoshoot in Playa del Carmen.")} className="btn mt-6" target="_blank" rel="noopener"><IconoWa /> Request a quote</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="contenedor grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">Before you book</h2>
          <p className="mt-5">The questions people ask most, answered in Emilia’s own words.</p>
          <Img f={fotos.superficieDorado} className="mt-8 hidden aspect-[3/4] w-full rounded-md object-cover lg:block" />
        </div>
        <div className="min-w-0 divide-y divide-abismo/15 border-y border-abismo/15">
          {preguntas.map((q) => (
            <details key={q.p} className="group py-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-abismo">
                {q.p}
                <span aria-hidden="true" className="mt-1 text-xl leading-none text-musgo transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contact" className="oscuro relative isolate overflow-hidden bg-abismo py-20 text-white/85 sm:py-28">
      <Img f={fotos.parejaBeso} className="absolute inset-y-0 right-0 -z-10 hidden h-full w-1/2 object-cover opacity-45 md:block" />
      <div className="contenedor">
        <div className="max-w-xl">
          <h2 className="text-4xl sm:text-5xl">Ready to experience the underwater photoshoot?</h2>
          <p className="mt-5">Tell Emilia your dates and the session you like. We will find a date that suits you both — preferably a week ahead; with availability, she takes bookings 48 hours in advance.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.telefonoVisible}</a>
            <a href={negocio.contacto} className="btn-claro" target="_blank" rel="noopener">Contact form</a>
          </div>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="font-bold text-white">Where</dt>
              <dd className="mt-1">A cenote between Playa del Carmen and Tulum, 20 minutes from each. The exact location is sent when you book. <a href={negocio.mapa} className="enlace" target="_blank" rel="noopener">See the route on Google Maps</a></dd>
            </div>
            <div>
              <dt className="font-bold text-white">Booking</dt>
              <dd className="mt-1">30% deposit to secure your date; the rest after the photoshoot. Free cancellation up to 48 hours before.</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro bg-abismo pb-28 pt-10 text-sm text-white/70 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
        <img src={foto('logo-black-box.webp')} width={139} height={60} alt="Emilia Black Box" loading="lazy" className="h-8 w-auto" />
        <p>Emilia Black Box, underwater photography in Tulum &amp; Playa del Carmen</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-abismo text-[0.8rem] font-bold text-white md:hidden">
      <a href={waGeneral} className="flex flex-col items-center gap-1 bg-sol py-3 text-abismo" target="_blank" rel="noopener"><IconoWa />WhatsApp</a>
      <a href={`tel:+${negocio.whatsapp}`} className="flex flex-col items-center gap-1 py-3">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>
        Call
      </a>
      <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-3" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
        Directions
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#depth" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-sol focus:px-4 focus:py-2 focus:text-abismo">Skip to sessions</a>
      <Encabezado />
      <main>
        <Portada />
        <Privada />
        <Profundidad />
        <PrimeraVez />
        <Galeria />
        <Resenas />
        <SobreEmilia />
        <Preguntas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
