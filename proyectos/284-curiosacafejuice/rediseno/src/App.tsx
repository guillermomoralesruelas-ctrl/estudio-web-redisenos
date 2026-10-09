import { useState } from 'react';
import carta from './data/carta.json';
import fotos from './data/fotos.json';
import { etiquetas, horario, jugos, negocio, precioFlight, precioJugo, preguntas, shots, wa, waGeneral, web } from './data/content';

type Item = { nombre: string; precio: string; desc: string };
const secciones = carta as Record<string, Item[]>;
const medidas = fotos as unknown as Record<string, [number, number]>;

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = medidas[n] ?? [1400, 934];
  return <img src={web(`${n}.webp`)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`object-cover ${className}`} />;
}

const Ico = {
  wa: <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" /></svg>,
  tel: <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" /></svg>,
  pin: <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>,
};

// ── Elemento memorable: "Arma tu Juice Flight" ─────────────────────────────
// Su carta: jugos prensados en frío de 350 ml a $120 c/u, o un Juice Flight de 3 jugos por $140.
// Se eligen 3 de sus 4 jugos; cada botella se llena con el color de ese jugo y el pedido sale armado por WhatsApp.
function JuiceFlight() {
  const [elegidos, setElegidos] = useState<string[]>([]);
  const [shot, setShot] = useState<string | null>(null);
  const listo = elegidos.length === 3;

  const alternar = (id: string) =>
    setElegidos((a) => (a.includes(id) ? a.filter((x) => x !== id) : a.length < 3 ? [...a, id] : a));

  const nombres = elegidos.map((id) => jugos.find((j) => j.id === id)!.nombre);
  const mensaje = `¡Hola, Curiosa! Quiero pedir un Juice Flight ($${precioFlight}) con: ${nombres.join(', ')}.${shot ? ` Y un ${shot}.` : ''} ¿Me lo tienen listo para pasar por él?`;
  const shotPrecio = shots.find((s) => s.nombre === shot)?.precio ?? 0;

  return (
    <section id="flight" aria-labelledby="flight-titulo" className="bg-tinta py-20 text-white sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-sidra">Jugos prensados en frío</p>
          <h2 id="flight-titulo" className="mt-3 text-4xl sm:text-5xl">Arma tu Juice Flight</h2>
          <p className="mt-5 max-w-lg text-lg text-white/85">
            Cada jugo de 350 ml cuesta ${precioJugo}. El Juice Flight trae 3 jugos por ${precioFlight}. Elige tres de los cuatro, mira cómo se llenan las botellas y mándanos el pedido para recogerlo.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {jugos.map((j) => {
              const activo = elegidos.includes(j.id);
              const bloqueado = !activo && listo;
              return (
                <li key={j.id}>
                  <button
                    type="button"
                    aria-pressed={activo}
                    disabled={bloqueado}
                    onClick={() => alternar(j.id)}
                    className={`flex h-full w-full flex-col rounded-2xl border-2 p-4 text-left transition-colors ${activo ? 'border-white bg-white/10' : 'border-white/20 hover:border-white/60'} disabled:cursor-not-allowed disabled:opacity-45`}
                  >
                    <span className="flex items-center gap-3">
                      <span aria-hidden="true" className="h-4 w-4 shrink-0 rounded-full ring-2 ring-white/70" style={{ backgroundColor: j.color }} />
                      <span className="font-bold">{j.nombre}</span>
                      <span className="ml-auto rounded-full bg-white/15 px-2 py-0.5 text-xs font-semibold">{j.funcion}</span>
                    </span>
                    <span className="mt-2 text-sm text-white/75">{j.ingredientes}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-3xl bg-crema p-6 text-tinta sm:p-8">
          <div className="flex items-end justify-center gap-3 sm:gap-8" aria-hidden="true">
            {[0, 1, 2].map((i) => {
              const j = jugos.find((x) => x.id === elegidos[i]);
              return (
                <div key={i} className="flex flex-col items-center">
                  <div className="h-5 w-9 rounded-t-md bg-tinta/80" />
                  <div className="h-3 w-7 bg-tinta/15" />
                  <div className="relative h-40 w-20 overflow-hidden rounded-b-[1.6rem] rounded-t-xl border-[3px] border-tinta/25 bg-white sm:h-48 sm:w-24">
                    <div className="liquido absolute inset-x-0 bottom-0" style={{ height: j ? '86%' : '0%', backgroundColor: j?.color ?? 'transparent' }} />
                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-[family-name:var(--font-display)] text-2xl text-tinta/30">{j ? '' : i + 1}</span>
                  </div>
                  <p className="mt-2 h-10 w-20 text-center sm:w-24 text-xs font-semibold leading-tight">{j?.nombre ?? ''}</p>
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-center text-sm font-semibold text-gris" aria-live="polite">
            {listo ? `Tu flight: ${nombres.join(', ')}.` : `Elige ${3 - elegidos.length} ${3 - elegidos.length === 1 ? 'jugo más' : 'jugos'}.`}
          </p>

          <fieldset className="mt-6 border-t border-tinta/10 pt-5">
            <legend className="text-sm font-bold">¿Le sumas un shot? (opcional)</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {shots.map((s) => (
                <button
                  key={s.nombre}
                  type="button"
                  aria-pressed={shot === s.nombre}
                  onClick={() => setShot(shot === s.nombre ? null : s.nombre)}
                  title={s.ingredientes}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${shot === s.nombre ? 'border-azul-hondo bg-azul-hondo text-white' : 'border-tinta/20 hover:border-azul-hondo'}`}
                >
                  {s.nombre} · ${s.precio}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-tinta/10 pt-5">
            <p className="text-sm text-gris">
              Total: <strong className="font-[family-name:var(--font-display)] text-2xl font-normal text-tinta">${precioFlight + shotPrecio}</strong>
            </p>
            {listo ? (
              <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn-azul">{Ico.wa} Pedir mi flight</a>
            ) : (
              <span className="inline-flex items-center rounded-full bg-tinta/10 px-6 py-3 text-sm font-bold text-gris">Faltan {3 - elegidos.length}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Carta() {
  const nombres = Object.keys(secciones);
  const [activa, setActiva] = useState(nombres[0]);
  const items = secciones[activa];
  const esJugo = activa.startsWith('Jugos');
  return (
    <section id="carta" aria-labelledby="carta-titulo" className="py-20 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Carta y precios</p>
        <h2 id="carta-titulo" className="mt-3 text-4xl sm:text-5xl">Lo que hay en la barra</h2>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Etiquetas de dieta de su carta">
          {etiquetas.map((e) => <li key={e} className="rounded-full bg-arena px-3 py-1 text-xs font-semibold text-tinta">{e}</li>)}
        </ul>
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Secciones de la carta">
          {nombres.map((n) => (
            <button
              key={n}
              type="button"
              aria-pressed={activa === n}
              onClick={() => setActiva(n)}
              className={`shrink-0 rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${activa === n ? 'border-azul-hondo bg-azul-hondo text-white' : 'border-tinta/15 bg-white hover:border-azul-hondo'}`}
            >
              {n.replace(' (desayuno todo el día)', '')}
            </button>
          ))}
        </div>
        {esJugo && <p className="mt-6 font-semibold text-azul-hondo">350 ml · ${precioJugo} c/u · Juice Flight (3 jugos) ${precioFlight}</p>}
        <ul className="mt-6 grid gap-x-10 gap-y-1 md:grid-cols-2">
          {items.map((it) => (
            <li key={it.nombre} className="border-b border-tinta/10 py-4">
              <div className="flex items-baseline gap-3">
                <h3 className="font-[family-name:var(--font-sans)] text-lg font-bold">{it.nombre}</h3>
                <span aria-hidden="true" className="flex-1 border-b border-dotted border-tinta/25" />
                <span className="font-bold text-azul-hondo">{it.precio || `$${precioJugo}`}</span>
              </div>
              {it.desc && <p className="mt-1 text-[0.95rem] text-gris">{it.desc}</p>}
            </li>
          ))}
        </ul>
        {activa.startsWith('All Day') && <p className="mt-4 text-sm font-semibold text-gris">Agrega huevo de libre pastoreo o aguacate: +$35.</p>}
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={waGeneral} target="_blank" rel="noopener" className="btn-azul">{Ico.wa} Pedir antes por WhatsApp</a>
          <a href={negocio.ubereats} target="_blank" rel="noopener" className="btn-linea">Pedir en Uber Eats</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [abierta, setAbierta] = useState<number | null>(0);
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>

      <header className="sticky top-0 z-40 border-b border-tinta/10 bg-crema/95 backdrop-blur">
        <div className="contenedor flex h-16 items-center justify-between gap-4">
          <a href="#inicio" aria-label="Curiosa, inicio"><img src={web('logo.svg')} alt="Curiosa" width={441} height={142} className="h-8 w-auto" /></a>
          <nav aria-label="Principal" className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#flight" className="hover:text-azul-hondo">Juice Flight</a>
            <a href="#carta" className="hover:text-azul-hondo">Carta</a>
            <a href="#local" className="hover:text-azul-hondo">El local</a>
            <a href="#visitanos" className="hover:text-azul-hondo">Visítanos</a>
          </nav>
          <a href={waGeneral} target="_blank" rel="noopener" className="btn-azul hidden sm:inline-flex">{Ico.wa} Pide antes</a>
        </div>
      </header>

      <main id="contenido">
        <section id="inicio" className="overflow-hidden pb-16 pt-10 sm:pt-16">
          <div className="contenedor grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Los ingredientes más sanos para la mejor gente</p>
              <h1 className="mt-4 text-5xl leading-[1.05] sm:text-6xl">Curiosa, juice bar y café en La Condesa</h1>
              <p className="mt-6 max-w-xl text-lg text-gris">
                Jugos prensados en frío, smoothies con superfoods, desayuno todo el día y café, en el corazón de La Condesa: un básico del barrio con un menú inventivo. Casi todo sin lácteos, y tu perro es bienvenido.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#carta" className="btn-azul">Ver la carta</a>
                <a href="#flight" className="btn-linea">Arma tu Juice Flight</a>
              </div>
              <dl className="mt-10 grid max-w-md grid-cols-2 gap-4 text-sm">
                {horario.map((h) => (
                  <div key={h.dias} className="rounded-2xl bg-white p-4">
                    <dt className="font-semibold text-gris">{h.dias}</dt>
                    <dd className="mt-1 font-[family-name:var(--font-display)] text-xl">{h.horas}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-5 grid-rows-[auto_auto] gap-3">
              <Foto n="mesa" alt="Mesa de Curiosa con smoothies, toasts y bowls" eager className="col-span-5 aspect-[3/2] w-full rounded-3xl" />
              <Foto n="jugos" alt="Botellas de jugos prensados en frío de Curiosa" eager className="col-span-3 aspect-[4/3] w-full rounded-3xl" />
              <Foto n="smoothie" alt="Smoothie de Curiosa servido en vaso" eager className="col-span-2 aspect-[4/5] h-full w-full rounded-3xl" />
            </div>
          </div>
        </section>

        <JuiceFlight />
        <Carta />

        <section id="local" aria-labelledby="local-titulo" className="bg-arena py-20 sm:py-24">
          <div className="contenedor">
            <p className="eyebrow">Mesas afuera y adentro</p>
            <h2 id="local-titulo" className="mt-3 text-4xl sm:text-5xl">Ven con tu perro</h2>
            <p className="mt-4 max-w-2xl text-lg text-gris">Tenemos mesas afuera y adentro, y los perros son bienvenidos. Estamos a unas cuadras del Parque México.</p>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              <Foto n="equipo" alt="En la barra de Curiosa, con sus menús al fondo" className="row-span-2 h-full w-full rounded-3xl" />
              <Foto n="avo-egg-toast" alt="Lemony Avo-Egg Toast de Curiosa" className="aspect-square w-full rounded-3xl" />
              <Foto n="perro-ventana" alt="Un perro asomado a la barra de Curiosa" className="row-span-2 h-full w-full rounded-3xl" />
              <Foto n="parfait" alt="Blueberry Parfait Yogurt Bowl" className="aspect-square w-full rounded-3xl" />
              <Foto n="daily-greens" alt="Jugo Daily Greens en botella" className="aspect-square w-full rounded-3xl" />
              <Foto n="toast-flores" alt="Toast decorado con flores comestibles" className="aspect-square w-full rounded-3xl" />
              <Foto n="clientas" alt="Clientas platicando en una mesa de Curiosa" className="col-span-2 aspect-[2/1] w-full rounded-3xl" />
              <Foto n="barra-perro" alt="Clientes con su perro en una mesa de Curiosa" className="col-span-2 aspect-[2/1] w-full rounded-3xl md:col-span-1 md:aspect-square" />
              <Foto n="smoothie-fruta" alt="Smoothie con fruta fresca" className="col-span-2 aspect-[2/1] w-full rounded-3xl md:col-span-1 md:aspect-square" />
            </div>
          </div>
        </section>

        <section id="preguntas" aria-labelledby="preguntas-titulo" className="py-20 sm:py-24">
          <div className="contenedor max-w-3xl">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 id="preguntas-titulo" className="mt-3 text-4xl">Antes de venir</h2>
            <div className="mt-8 divide-y divide-tinta/10 border-y border-tinta/10">
              {preguntas.map((q, i) => (
                <div key={q.p}>
                  <h3 className="font-[family-name:var(--font-sans)]">
                    <button type="button" aria-expanded={abierta === i} aria-controls={`r${i}`} onClick={() => setAbierta(abierta === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-bold">
                      {q.p}
                      <span aria-hidden="true" className={`text-2xl text-azul-hondo transition-transform ${abierta === i ? 'rotate-45' : ''}`}>+</span>
                    </button>
                  </h3>
                  <p id={`r${i}`} hidden={abierta !== i} className="pb-5 text-gris">{q.r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="visitanos" aria-labelledby="visitanos-titulo" className="bg-azul-hondo py-20 text-white sm:py-24">
          <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-arena">Visítanos</p>
              <h2 id="visitanos-titulo" className="mt-3 text-4xl sm:text-5xl">Aguascalientes 214 B</h2>
              <p className="mt-4 text-lg text-white/90">{negocio.direccion}, {negocio.cp}.<br />{negocio.zona}.</p>
              <dl className="mt-8 space-y-2">
                {horario.map((h) => (
                  <div key={h.dias} className="flex justify-between gap-4 border-b border-white/20 pb-2 sm:max-w-sm">
                    <dt>{h.dias}</dt><dd className="font-bold">{h.horas}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={negocio.maps} target="_blank" rel="noopener" className="btn-claro">{Ico.pin} Cómo llegar</a>
                <a href={waGeneral} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-bold leading-none text-white transition-colors hover:bg-white hover:text-azul-hondo">{Ico.wa} WhatsApp</a>
                <a href={negocio.telefonoHref} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-bold leading-none text-white transition-colors hover:bg-white hover:text-azul-hondo">{Ico.tel} {negocio.telefono}</a>
              </div>
            </div>
            <iframe title="Mapa de Curiosa Café & Juice Bar" src={negocio.mapaEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="aspect-[4/3] w-full rounded-3xl border-0 bg-white" />
          </div>
        </section>
      </main>

      <footer className="bg-tinta pb-28 pt-12 text-white/80 md:pb-12">
        <div className="contenedor flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <img src={web('logo.svg')} alt="Curiosa" width={441} height={142} className="h-8 w-auto brightness-0 invert" />
            <p className="mt-3 text-sm">Juice bar y café en La Condesa, Ciudad de México.</p>
          </div>
          <ul className="flex flex-wrap gap-5 text-sm font-semibold">
            <li><a href={negocio.instagram} target="_blank" rel="noopener" className="hover:text-white">Instagram</a></li>
            <li><a href={negocio.tiktok} target="_blank" rel="noopener" className="hover:text-white">TikTok</a></li>
            <li><a href={negocio.facebook} target="_blank" rel="noopener" className="hover:text-white">Facebook</a></li>
            <li><a href={negocio.ubereats} target="_blank" rel="noopener" className="hover:text-white">Uber Eats</a></li>
          </ul>
        </div>
      </footer>

      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-tinta/10 bg-white text-xs font-bold md:hidden">
        <a href={waGeneral} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 bg-azul-hondo py-3 text-white">{Ico.wa} Pide antes</a>
        <a href={negocio.telefonoHref} className="flex flex-col items-center gap-1 py-3 text-azul-hondo">{Ico.tel} Llamar</a>
        <a href={negocio.maps} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-3 text-azul-hondo">{Ico.pin} Cómo llegar</a>
      </nav>
    </>
  );
}
