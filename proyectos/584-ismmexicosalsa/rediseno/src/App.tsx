import { useState } from 'react';
import { bootcamps, cancelacion, estancias, foto, negocio, resenas, wa } from './data/content';


function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>;
}
function IconoIg({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>;
}

const pesos = (n: number) => `$${n.toLocaleString('en-US')}`;
const secciones = [['#stay', 'Plans'], ['#community', 'Community'], ['#team', 'Team'], ['#visit', 'Visit']] as const;
const waHola = wa('Hi! I found ISM online and I want to join a salsa class.');

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-carbon/10 bg-crema/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#top" className="font-display text-[1.3rem] text-carbon">ISM <span className="text-chile">Mexico</span></a>
        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="font-semibold text-humo hover:text-carbon">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">WhatsApp</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="top" className="oscuro relative isolate overflow-hidden">
      <div className="contenedor grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="font-bold text-mango">International Salsa Meetup · Mexico City</p>
          <h1 className="mt-4 text-[2.6rem] sm:text-[4rem]">Salsa &amp; bachata classes in Mexico City</h1>
          <p className="mt-5 max-w-xl text-[1.1rem]">Here for vacation, remote work or a bachelor party? No experience and no partner needed. Learn to dance, stay to meet people.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#stay" className="btn">How long are you here?</a>
            <a href={negocio.grupo} className="btn-claro" target="_blank" rel="noopener"><IconoWa /> Join the WhatsApp group</a>
          </div>
        </div>
        <div className="grid grid-cols-[1.3fr_1fr] gap-3">
          <img src={foto('parque-pareja')} alt="A couple dancing salsa under the trees of Parque México" width={1400} height={933} fetchPriority="high" className="h-full w-full rounded-3xl object-cover" />
          <img src={foto('social-vertical')} alt="A dancer spinning her partner at an ISM social night" width={683} height={1024} className="aspect-[2/3] w-full rounded-3xl object-cover" />
        </div>
      </div>
    </section>
  );
}

function Estancia() {
  const [id, setId] = useState('week');
  const [boot, setBoot] = useState(2);
  const e = estancias.find((x) => x.id === id)!;
  const mensaje = id === 'week' ? `Hi! I'm in Mexico City for a week and I'm interested in the ${bootcamps[boot].nombre} (5 days).` : e.wa;
  return (
    <section id="stay" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="font-bold text-chile">Pick your ticket</p>
        <h2 className="mt-2 text-[2.3rem] sm:text-[3.4rem]">How long are you in Mexico City?</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4" role="group" aria-label="Length of stay">
          {estancias.map((x) => (
            <button key={x.id} type="button" aria-pressed={x.id === id} onClick={() => setId(x.id)}
              className={`boleto min-h-[84px] rounded-2xl border-2 border-dashed px-4 py-3 text-left transition-colors ${x.id === id ? 'border-mango bg-carbon text-crema' : 'border-carbon/25 bg-arena hover:bg-white'}`}>
              <span className="block font-display text-[1.15rem] leading-tight">{x.boleto}</span>
              <span className={`text-[0.9rem] font-semibold ${x.id === id ? 'text-mango' : 'text-humo'}`}>{x.dias}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 rounded-3xl bg-white p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr]" aria-live="polite">
          <div>
            <h3 className="text-[1.6rem]">{e.titulo}</h3>
            <p className="mt-3 text-humo">{e.texto}</p>
            {e.precio && <p className="mt-4 font-display text-[1.4rem] text-chile">{e.precio}</p>}
            <p className="mt-4 text-[0.95rem]">{e.extra}</p>
            <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn mt-6"><IconoWa /> Ask on WhatsApp</a>
          </div>
          {id === 'week' ? (
            <div className="grid gap-3">
              {bootcamps.map((b, i) => (
                <button key={b.nombre} type="button" aria-pressed={i === boot} onClick={() => setBoot(i)}
                  className={`rounded-2xl border-2 p-4 text-left transition-colors ${i === boot ? 'border-chile bg-crema' : 'border-carbon/10 hover:border-carbon/30'}`}>
                  <span className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-display text-[1.15rem]">{b.nombre}{b.popular && <span className="ml-2 rounded-full bg-mango px-2 py-0.5 font-sans text-[0.75rem] font-bold text-carbon">Popular</span>}</span>
                    <span className="font-display text-[1.25rem] text-chile">{pesos(b.precio)} <span className="font-sans text-[0.85rem] font-semibold text-humo">/ 5 days</span></span>
                  </span>
                  <span className="mt-1 block text-[0.95rem] text-humo">{b.incluye.join(' · ')}</span>
                </button>
              ))}
            </div>
          ) : (
            <img src={foto(id === 'weekend' ? 'social' : id === 'month' ? 'parque-clase' : 'parque-grupo')}
              alt={id === 'weekend' ? 'Two dancers at an ISM social' : id === 'month' ? 'A group class with arms up in the park' : 'The ISM community posing together in Parque México'}
              width={1400} height={933} loading="lazy" className="aspect-[3/2] w-full rounded-2xl object-cover" />
          )}
        </div>
      </div>
    </section>
  );
}

function Comunidad() {
  return (
    <section id="community" className="oscuro py-16 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="font-bold text-mango">Not only a dance school</p>
          <h2 className="mt-2 text-[2.3rem] sm:text-[3.2rem]">An international community in CDMX</h2>
          <p className="mt-4">It is really difficult to meet people once you start to work. ISM connects international and local people through dancing, group trips and language exchange. Don't like dancing? They also organise other activities and travel.</p>
          <ul className="mt-6 grid gap-2">
            {['Salsa classes and socials', 'Group trips they organise for you', 'Language exchange', 'No dance partner needed'].map((t) => <li key={t} className="flex gap-2"><span aria-hidden="true" className="text-mango">✦</span>{t}</li>)}
          </ul>
          <a href={negocio.grupo} target="_blank" rel="noopener" className="btn mt-7"><IconoWa /> Join the WhatsApp group</a>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src={foto('parque-grupo')} alt="Dozens of ISM members posing together on the terracotta floor of Parque México" width={1400} height={933} loading="lazy" className="col-span-2 aspect-[16/9] w-full rounded-3xl object-cover" />
          <img src={foto('parque-giro')} alt="A dancer smiling during a turn at a park class" width={1024} height={683} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <img src={foto('estudio')} alt="The ISM studio on Cerrada de Hamburgo decorated with red and white balloons for its inauguration" width={1024} height={683} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
        </div>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section id="team" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
          <img src={foto('kentaro')} alt="Kentaro Yoneda, founder of ISM, taking a bite of food against a light blue wall" width={700} height={700} loading="lazy" className="aspect-square w-full max-w-sm rounded-3xl object-cover" />
          <div>
            <p className="font-bold text-chile">Kentaro Yoneda · Founder</p>
            <h2 className="mt-2 text-[2.1rem] sm:text-[2.8rem]">Why does a Japanese guy teach salsa in Mexico?</h2>
            <blockquote className="mt-4 text-[1.1rem]">“I am a salsa bachata teacher from Japan. I came here on vacation and fell in love with Mexico like everyone else, so I started an international community where international and local people can meet and dance together.”</blockquote>
            <a href={negocio.instagramKentaro} target="_blank" rel="noopener" className="enlace mt-4 inline-block">Ask him on Instagram</a>
          </div>
        </div>
        <h3 className="mt-14 text-[1.5rem]">The dancer team</h3>
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {[1, 2, 3, 4, 5].map((n) => (
            <li key={n}><img src={foto(`equipo-${n}`)} alt="A member of the ISM dancer team in a black ISM T-shirt" width={700} height={1050} loading="lazy" className="aspect-[2/3] w-full rounded-2xl bg-arena object-cover" /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Resenas() {
  return (
    <section className="bg-arena py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.3rem] sm:text-[3.2rem]">What people say</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resenas.map((r) => (
            <li key={r.autor} className="rounded-3xl bg-crema p-6">
              <blockquote>“{r.texto}”</blockquote>
              <p className="mt-3 font-bold text-chile">{r.autor}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Visita() {
  return (
    <section id="visit" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[2.3rem] sm:text-[3.2rem]">Come say hello</h2>
          <p className="mt-4 flex gap-2 font-bold"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-chile" />{negocio.estudio}</p>
          <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace mt-2 inline-block">Open in Google Maps</a>
          <p className="mt-4">{negocio.horario}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={waHola} target="_blank" rel="noopener" className="btn"><IconoWa /> WhatsApp</a>
            <a href={negocio.instagram} target="_blank" rel="noopener" className="btn-linea"><IconoIg /> @ismmexico</a>
          </div>
          <p className="mt-5"><a href={`mailto:${negocio.correo}`} className="enlace">{negocio.correo}</a> · <a href={negocio.facebook} target="_blank" rel="noopener" className="enlace">Facebook</a></p>
        </div>
        <div className="self-start rounded-3xl bg-arena p-6 sm:p-8">
          <h3 className="text-[1.3rem]">Private class policy</h3>
          <ul className="mt-3 grid gap-2 text-[0.95rem] text-humo">{cancelacion.map((c) => <li key={c}>· {c}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro pb-24 pt-10 md:pb-10">
      <div className="contenedor flex flex-wrap items-baseline justify-between gap-4">
        <p className="font-display text-[1.3rem] text-crema">ISM <span className="text-mango">Mexico</span></p>
        <p className="text-[0.95rem]">Learn salsa and stay to meet people · Juárez, Mexico City</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-crema/15 bg-carbon text-crema md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-chile text-[0.9rem] font-bold text-white"><IconoWa />WhatsApp</a>
      <a href={negocio.instagram} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoIg />Instagram</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoPin />Directions</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
      <Encabezado />
      <main id="main">
        <Portada />
        <Estancia />
        <Comunidad />
        <Equipo />
        <Resenas />
        <Visita />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
