import { useState } from 'react';
import { cupones, flota, foto, negocio, ocasiones, promos, reglasTransporte, resenas, tours, tramos, wa, zonas } from './data/content';


function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>;
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>;
}

const usd = (n: number) => `$${n.toLocaleString('en-US')}`;
const secciones = [['#aboard', 'Group size'], ['#tours', 'Tours'], ['#occasions', 'Occasions'], ['#deals', 'Deals'], ['#contact', 'Contact']] as const;
const waGeneral = wa("Hi! I'd like to book a catamaran tour in Cancún.");

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-abismo/10 bg-espuma/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#top" className="font-display text-[1.35rem] text-abismo">Cancun Catamarans</a>
        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="font-semibold text-bruma hover:text-abismo">{t}</a></li>)}</ul>
        </nav>
        <a href={waGeneral} className="btn !min-h-[42px] !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">WhatsApp</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="top" className="oscuro relative isolate overflow-hidden">
      <img src={foto('catamaran')} alt="A white catamaran full of guests anchored in the turquoise water of Isla Mujeres" width={1400} height={787} fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-abismo via-abismo/80 to-abismo/50 sm:bg-gradient-to-r sm:from-abismo sm:via-abismo/75 sm:to-transparent" aria-hidden="true" />
      <div className="contenedor pb-14 pt-48 sm:py-28">
        <p className="font-bold text-laguna">Cancún &amp; Isla Mujeres · Caribbean Sea</p>
        <h1 className="mt-3 max-w-3xl text-[2.9rem] sm:text-[4.6rem]">Catamaran tours to Isla Mujeres from Cancún</h1>
        <p className="mt-5 max-w-xl text-[1.12rem]">Shared or private, from a 36ft catamaran for small groups to a 78ft one for 100 guests. Open bar, snorkeling gear and a bilingual crew on every tour.</p>
        <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-3">
          <div><dt className="text-[0.9rem]">Shared tour from</dt><dd className="font-display text-[2rem] text-sol">$75 <span className="font-sans text-[1rem] font-semibold">USD / person</span></dd></div>
          <div><dt className="text-[0.9rem]">Catamarans</dt><dd className="font-display text-[2rem] text-sol">{flota.length}</dd></div>
          <div><dt className="text-[0.9rem]">Departs from</dt><dd className="font-display text-[1.35rem] leading-[2.4rem] text-sol">Marina Playa Tortugas</dd></div>
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#aboard" className="btn">How many are you?</a>
          <a href={waGeneral} className="btn-claro" target="_blank" rel="noopener"><IconoWa /> Book via WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Abordo() {
  const [n, setN] = useState(12);
  const [zona, setZona] = useState(-1);
  const cabe = flota.filter((b) => b.max >= n);
  const minimo = cabe.length ? cabe.reduce((a, b) => (b.max < a.max || (b.max === a.max && b.pies < a.pies) ? b : a)) : null;
  const tramo = tramos.findIndex((t) => n <= t);
  const transporte = zona >= 0 && tramo >= 0 ? zonas[zona].redondo[tramo] : null;
  const privados = tours.filter((t) => t.tipo === 'Private' && t.max >= n);
  const compartido = tours.find((t) => t.tipo === 'Shared')!;
  const cambiar = (v: number) => setN(Math.min(100, Math.max(2, v)));
  const mensaje = `Hi! We're ${n} people${zona >= 0 ? `, staying in ${zonas[zona].nombre}` : ''}. Which catamaran tour do you recommend for us${zona >= 0 ? ', with round-trip transportation' : ''}?`;

  return (
    <section id="aboard" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="font-bold text-arrecife">From 2 to 100 guests</p>
        <h2 className="mt-2 text-[2.6rem] sm:text-[3.8rem]">How many are coming aboard?</h2>
        <p className="mt-3 max-w-2xl text-bruma">Move the slider and see which of their catamarans fit your group, which tours you can book and what the hotel pickup costs.</p>

        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-3xl bg-white p-5 sm:p-6">
          <button type="button" onClick={() => cambiar(n - 1)} aria-label="One guest less" className="grid h-12 w-12 place-items-center rounded-full border-2 border-abismo/20 text-[1.5rem] font-bold">−</button>
          <p className="min-w-[7.5rem] text-center font-display text-[3rem] leading-none" aria-live="polite">{n}<span className="block font-sans text-[0.95rem] font-semibold text-bruma">guests</span></p>
          <button type="button" onClick={() => cambiar(n + 1)} aria-label="One guest more" className="grid h-12 w-12 place-items-center rounded-full border-2 border-abismo/20 text-[1.5rem] font-bold">+</button>
          <label className="min-w-[12rem] flex-1">
            <span className="sr-only">Number of guests</span>
            <input type="range" min={2} max={100} value={n} onChange={(e) => setN(Number(e.target.value))} className="rango h-10 w-full" />
          </label>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <h3 className="text-[1.5rem]">Their fleet, drawn to length</h3>
            <p className="mt-1 text-[0.95rem] text-bruma">{cabe.length === 0 ? 'No single boat takes more than 100 guests.' : `${cabe.length} of ${flota.length} catamarans fit ${n} guests. Smallest that fits: ${minimo!.pies}ft ${minimo!.nombre}.`}</p>
            <ul className="mt-4 grid gap-1">
              {flota.map((b) => {
                const ok = b.max >= n;
                const es = minimo?.nombre === b.nombre;
                return (
                  <li key={b.nombre} className={`flex items-center gap-2 text-[0.85rem] ${ok ? '' : 'text-bruma'}`}>
                    <span className="w-[8.6rem] shrink-0 whitespace-nowrap font-semibold">{b.pies}ft {b.nombre}</span>
                    <span className="relative h-4 flex-1" aria-hidden="true">
                      <span className={`absolute inset-y-0 left-0 rounded-r-full rounded-l-md ${es ? 'bg-coral' : ok ? 'bg-arrecife' : 'bg-abismo/12'}`} style={{ width: `${(b.pies / 82) * 100}%` }} />
                    </span>
                    <span className="w-[4.4rem] shrink-0 whitespace-nowrap text-right">{b.max} guests</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-3xl bg-abismo p-6 text-espuma/85 sm:p-7">
            <h3 className="text-[1.5rem] !text-espuma">What {n} guests can book</h3>
            <ul className="mt-4 grid gap-3">
              {n <= compartido.max ? (
                <li className="rounded-2xl bg-white/8 p-4">
                  <p className="font-bold text-espuma">Shared · {compartido.nombre}</p>
                  <p className="text-[0.95rem]">{usd(compartido.precio)} × {n} = <span className="font-display text-[1.4rem] text-sol">{usd(compartido.precio * n)} USD</span></p>
                  <p className="text-[0.85rem]">Plus a {usd(negocio.docking)} USD docking fee per person ({usd(negocio.docking * n)}) and gratuities, per their deals page.</p>
                </li>
              ) : (
                <li className="rounded-2xl bg-white/8 p-4 text-[0.95rem]">The shared tour takes up to {compartido.max} guests: book it in two groups or go private.</li>
              )}
              {privados.map((t) => (
                <li key={t.nombre} className="flex items-baseline justify-between gap-3 border-b border-espuma/10 pb-2">
                  <span><span className="font-bold text-espuma">{t.nombre}</span> <span className="text-[0.85rem]">· {t.horas}h · up to {t.max}</span></span>
                  <span className="shrink-0 text-right"><span className="font-display text-[1.2rem] text-sol">{usd(t.precio)}</span><span className="block text-[0.8rem]">≈ {usd(Math.round(t.precio / n))} each</span></span>
                </li>
              ))}
              {privados.length === 0 && n <= 100 && (
                <li className="text-[0.95rem]">Their listed private tours go up to 30 guests. For {n}, ask for a private charter on the {minimo ? `${minimo.pies}ft ${minimo.nombre}` : 'largest boats'} or a corporate event (30 to 90 guests).</li>
              )}
            </ul>

            <label className="mt-6 block">
              <span className="font-bold text-espuma">Hotel pickup (round trip, per vehicle)</span>
              <select value={zona} onChange={(e) => setZona(Number(e.target.value))} className="mt-2 block min-h-[48px] w-full rounded-xl border-0 bg-espuma px-3 font-semibold text-abismo">
                <option value={-1}>I'll get to the marina on my own</option>
                {zonas.map((z, i) => <option key={z.nombre} value={i}>{z.nombre}{z.nota ? ` (${z.nota})` : ''}</option>)}
              </select>
            </label>
            {zona >= 0 && (
              <p className="mt-2 text-[0.95rem]" aria-live="polite">{transporte !== null ? <>From {zonas[zona].nombre} for {n} passengers: <span className="font-display text-[1.3rem] text-sol">{usd(transporte)} USD</span> round trip ({usd(zonas[zona].ida[tramo])} one way).</> : 'More than 50 passengers: they quote it on request.'}</p>
            )}
            <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn mt-6 w-full"><IconoWa /> Ask for {n} guests</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tours() {
  return (
    <section id="tours" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <p className="font-bold text-arrecife">Private charters and shared adventures</p>
        <h2 className="mt-2 text-[2.6rem] sm:text-[3.6rem]">The tours</h2>
        <p className="mt-3 max-w-2xl text-bruma">Every tour includes open bar, snorkeling equipment and a bilingual crew, and departs from Marina Playa Tortugas in the Hotel Zone.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((t) => (
            <article key={t.nombre} className="flex flex-col overflow-hidden rounded-3xl bg-espuma">
              <img src={foto(t.foto)} alt={t.alt} width={1400} height={933} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[0.9rem] font-bold text-arrecife">{t.tipo} · {t.horas} hours · up to {t.max}</p>
                <h3 className="mt-1 text-[1.55rem]">{t.nombre}</h3>
                <p className="mt-2 text-bruma">{t.texto}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5 text-[0.85rem]">{t.incluye.map((i) => <li key={i} className="rounded-full bg-white px-2.5 py-0.5">{i}</li>)}</ul>
                <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                  <p><span className="text-[0.85rem] text-bruma">From</span><span className="block font-display text-[1.7rem] leading-none">{usd(t.precio)} <span className="font-sans text-[0.85rem] font-semibold">USD{t.porPersona ? ' / person' : ''}</span></span></p>
                  <a href={wa(`Hi! I'm interested in the tour: ${t.nombre}`)} target="_blank" rel="noopener" className="btn !px-4" aria-label={`Ask about ${t.nombre} on WhatsApp`}><IconoWa /> Ask</a>
                </div>
              </div>
            </article>
          ))}
          <figure className="relative hidden overflow-hidden rounded-3xl lg:block">
            <img src={foto('globos-proa')} alt="Pink balloons and a gold number 40 decorating the bow of a catamaran" width={1400} height={1050} loading="lazy" className="h-full w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-abismo to-transparent p-6 pt-16 font-bold text-espuma">They take care of the decoration for special events.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Ocasiones() {
  return (
    <section id="occasions" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.6rem] sm:text-[3.6rem]">An experience for every occasion</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ocasiones.map((o) => (
            <a key={o.nombre} href={wa(o.wa)} target="_blank" rel="noopener" className="group overflow-hidden rounded-3xl bg-white">
              <img src={foto(o.foto)} alt={o.alt} width={1400} height={1050} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-[1.03]" />
              <div className="p-5">
                <h3 className="text-[1.3rem]">{o.nombre}</h3>
                <p className="text-bruma">{o.texto}</p>
                <p className="mt-2 font-bold text-coral">Get a quote →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Promos() {
  return (
    <section id="deals" className="oscuro py-16 sm:py-24">
      <div className="contenedor">
        <p className="font-bold text-laguna">Book during the window, sail any future date</p>
        <h2 className="mt-2 text-[2.6rem] sm:text-[3.6rem]">Deals</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {promos.map((p) => (
            <article key={p.nombre} className="rounded-3xl bg-white/6 p-6 ring-1 ring-espuma/10">
              <p className="inline-block rounded-full bg-laguna px-3 py-0.5 text-[0.85rem] font-bold text-abismo">{p.etiqueta}</p>
              <h3 className="mt-3 text-[1.45rem] !text-espuma">{p.nombre}</h3>
              <p className="mt-2 font-display text-[1.8rem] text-sol">{p.precio} {p.antes && <s className="font-sans text-[1rem] font-semibold text-espuma/70">{p.antes}</s>}</p>
              <p className="mt-2">{p.texto}</p>
              <p className="mt-2 text-[0.9rem] text-laguna">{p.ventana}</p>
              <a href={wa(`Hi! I'm interested in this deal: ${p.nombre}`)} target="_blank" rel="noopener" className="btn mt-5"><IconoWa /> Ask about it</a>
            </article>
          ))}
        </div>
        <h3 className="mt-12 text-[1.5rem] !text-espuma">Discount codes</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cupones.map((c) => (
            <li key={c.codigo} className="rounded-2xl border border-dashed border-laguna/50 p-4">
              <p className="font-display text-[1.3rem] tracking-wider text-laguna">{c.codigo}</p>
              <p className="text-[0.95rem]">{c.texto}</p>
              <p className="text-[0.85rem]">Valid until {c.vence}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[0.95rem]">A {usd(negocio.docking)} USD docking fee per person and gratuities are not included in any deal.</p>
      </div>
    </section>
  );
}

function Resenas() {
  return (
    <section className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="text-[2.6rem] sm:text-[3.4rem]">What guests say</h2>
          <img src={foto('decoracion')} alt="Pastel balloons and a gold number decorating the deck of a catamaran" width={1400} height={620} loading="lazy" className="mt-6 aspect-[16/7] w-full rounded-3xl object-cover" />
        </div>
        <ul className="grid gap-5">
          {resenas.map((r) => (
            <li key={r.autor} className="rounded-3xl bg-white p-6">
              <blockquote className="text-[1.08rem]">“{r.texto}”</blockquote>
              <p className="mt-2 font-bold text-arrecife">{r.autor}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[2.6rem] sm:text-[3.6rem]">Ready to set sail?</h2>
          <p className="mt-3 text-bruma">Tell them your group and date and they'll tailor the tour.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={waGeneral} target="_blank" rel="noopener" className="btn"><IconoWa /> Chat on WhatsApp</a>
            <a href={`tel:${negocio.tel}`} className="btn-linea"><IconoTel /> {negocio.telVisible}</a>
          </div>
          <p className="mt-5">Toll free USA / Canada: <a href={`tel:${negocio.gratuito}`} className="enlace">{negocio.gratuitoVisible}</a></p>
          <p className="mt-1"><a href={`mailto:${negocio.correo}`} className="enlace">{negocio.correo}</a> · <a href={negocio.instagram} target="_blank" rel="noopener" className="enlace">Instagram</a> · <a href={negocio.facebook} target="_blank" rel="noopener" className="enlace">Facebook</a></p>
        </div>
        <div className="rounded-3xl bg-espuma p-6 sm:p-8">
          <p className="flex gap-2 font-bold"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-coral" />{negocio.direccion}</p>
          <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace mt-2 inline-block">Open in Google Maps</a>
          <h3 className="mt-6 text-[1.2rem]">Hotel transportation</h3>
          <ul className="mt-2 grid gap-1 text-[0.95rem] text-bruma">{reglasTransporte.map((r) => <li key={r}>· {r}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro pb-24 pt-10 lg:pb-10">
      <div className="contenedor flex flex-wrap items-baseline justify-between gap-4">
        <p className="font-display text-[1.4rem] text-espuma">Cancun Catamarans</p>
        <p className="text-[0.95rem]">Catamaran tours in Cancún &amp; Isla Mujeres · Prices in USD, subject to change</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-espuma/15 bg-abismo text-espuma lg:hidden">
      <a href={waGeneral} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-coral text-[0.9rem] font-bold text-white"><IconoWa />WhatsApp</a>
      <a href={`tel:${negocio.tel}`} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoTel />Call</a>
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
        <Abordo />
        <Tours />
        <Ocasiones />
        <Promos />
        <Resenas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
