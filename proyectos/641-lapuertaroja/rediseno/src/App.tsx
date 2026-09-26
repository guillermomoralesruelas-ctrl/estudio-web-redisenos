import { useEffect, useState } from 'react';
import { casa, eventos, fotos, habitaciones, hero, nav, negocio, restaurantes, type Habitacion } from './data/content';

const Icono = {
  tel: (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" strokeLinejoin="round" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
  cal: (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
  ),
};

const externo = { target: '_blank', rel: 'noopener' } as const;

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-cal/90 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="shrink-0" aria-label="La Puerta Roja, ir al inicio">
          <img src={fotos.logo} alt="La Puerta Roja" width={514} height={82} className="h-4 w-auto md:h-5" />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="text-[0.95rem] font-medium text-tinta/80 hover:text-roja">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={negocio.reservar} {...externo} className="btn-roja hidden sm:inline-flex">Reservar</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir navegación" className="grid size-11 place-items-center rounded-full border border-tinta/20 md:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-tinta/10 bg-cal md:hidden" aria-label="Móvil">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="border-b border-tinta/10 py-3 font-serif text-2xl text-tinta last:border-0">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const [actual, setActual] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setActual((i) => (i + 1) % hero.fotos.length), 6500);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="inicio" className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-tinta md:min-h-[86svh]">
      {hero.fotos.map((f, i) => (
        <img key={f.src} src={f.src} alt={f.alt} width={f.w} height={f.h} loading={i === 0 ? 'eager' : 'lazy'} fetchPriority={i === 0 ? 'high' : undefined}
          className="hero-foto absolute inset-0 -z-20 size-full object-cover" style={{ opacity: i === actual ? 1 : 0 }} aria-hidden={i !== actual} />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-tinta/85 via-tinta/35 to-tinta/10" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-tinta/55 to-transparent md:via-transparent" aria-hidden="true" />
      <div className="contenedor pb-28 pt-40 text-white md:pb-20">
        <p className="font-serif text-xl italic text-white/90">{hero.lugar}</p>
        <h1 className="mt-3 max-w-3xl text-5xl leading-[1.02] text-white sm:text-6xl lg:text-[5.4rem]">{hero.titulo}</h1>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={negocio.reservar} {...externo} className="btn-roja">{Icono.cal} Reservar estancia</a>
          <a href="#habitaciones" className="btn-claro">Ver habitaciones</a>
        </div>
        <div className="mt-10 flex gap-2" role="tablist" aria-label="Fotos del inicio">
          {hero.fotos.map((f, i) => (
            <button key={f.src} type="button" role="tab" aria-selected={i === actual} aria-label={`Ver foto ${i + 1}: ${f.alt}`} onClick={() => setActual(i)} className="grid h-6 w-8 place-items-center">
              <span className={`block h-0.5 w-full rounded-full transition-colors ${i === actual ? 'bg-white' : 'bg-white/35'}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Casa() {
  const [a, b, c] = casa.fotos;
  return (
    <section id="casa" className="py-20 md:py-28">
      <div className="contenedor grid items-center gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div>
          <img src={fotos.emblema} alt="" width={514} height={266} className="h-16 w-auto md:h-20" aria-hidden="true" />
          <h2 className="mt-8 text-4xl md:text-5xl">{casa.titulo}</h2>
          <p className="mt-5 max-w-md">{casa.texto}</p>
          <p className="mt-5 text-sm text-grafito/80">{negocio.direccion}</p>
        </div>
        <div className="grid grid-cols-[1.4fr_1fr] gap-3 md:gap-4">
          <img src={a.src} alt={a.alt} width={a.w} height={a.h} loading="lazy" className="col-span-2 aspect-[16/9] w-full rounded-2xl object-cover" />
          <img src={b.src} alt={b.alt} width={b.w} height={b.h} loading="lazy" className="h-56 w-full rounded-2xl object-cover sm:h-72 md:h-80" />
          <img src={c.src} alt={c.alt} width={c.w} height={c.h} loading="lazy" className="h-56 w-full rounded-2xl object-cover object-top sm:h-72 md:h-80" />
        </div>
      </div>
    </section>
  );
}

// ---------- "Elige tu puerta": el elemento memorable ----------
function Puerta({ h, activa, onElegir }: { h: Habitacion; activa: boolean; onElegir: () => void }) {
  return (
    <button type="button" role="radio" aria-checked={activa} onClick={onElegir} className="group flex w-[4.6rem] flex-col items-center gap-2 sm:w-24">
      <span className={`arco block h-24 w-14 border-2 transition-colors sm:h-32 sm:w-[4.5rem] ${activa ? 'border-roja bg-roja' : 'border-tinta/70 bg-transparent group-hover:bg-roja/15'}`}>
        <span className={`mx-auto mt-[55%] block h-2 w-2 rounded-full ${activa ? 'bg-cal' : 'bg-tinta/60'}`} aria-hidden="true" />
      </span>
      <span className={`font-serif text-lg leading-tight ${activa ? 'text-roja' : 'text-tinta'}`}>{h.nombre}</span>
      <span className="-mt-1 text-xs text-grafito/80">{h.capacidad}</span>
    </button>
  );
}

function Habitaciones() {
  const [id, setId] = useState(habitaciones.lista[0].id);
  const h = habitaciones.lista.find((x) => x.id === id)!;
  return (
    <section id="habitaciones" className="bg-piedra py-20 md:py-28">
      <div className="contenedor">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl md:text-5xl">{habitaciones.titulo}</h2>
          <p className="max-w-lg">{habitaciones.texto}</p>
        </div>

        <p className="mt-12 text-center font-serif text-2xl italic text-tinta lg:text-left">Siete habitaciones. Elige tu puerta.</p>
        <div role="radiogroup" aria-label="Habitaciones" className="mt-8 flex flex-wrap justify-center gap-x-3 gap-y-6 border-b border-tinta/15 pb-10 sm:gap-x-6 lg:justify-between">
          {habitaciones.lista.map((x) => <Puerta key={x.id} h={x} activa={x.id === id} onElegir={() => setId(x.id)} />)}
        </div>

        <div className="mt-10 grid items-start gap-8 md:grid-cols-[1.15fr_1fr] md:gap-12" aria-live="polite">
          {h.foto ? (
            <img key={h.id} src={h.foto.src} alt={h.foto.alt} width={1920} height={1280} loading="lazy" className="aspect-[3/2] w-full rounded-2xl object-cover" />
          ) : (
            <div className="grid aspect-[3/2] w-full place-items-center rounded-2xl bg-cal">
              <div className="arco grid h-3/4 w-2/5 place-items-center border-2 border-roja">
                <span className="font-serif text-3xl italic text-roja sm:text-4xl">{h.nombre}</span>
              </div>
            </div>
          )}
          <div>
            <h3 className="text-4xl">{h.nombre}</h3>
            {h.titulo && <p className="mt-1 font-serif text-xl italic text-grafito">{h.titulo}</p>}
            <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-tinta/15 py-5">
              <div><dt className="text-sm text-grafito/80">Capacidad</dt><dd className="text-lg font-medium text-tinta">{h.capacidad}</dd></div>
              <div><dt className="text-sm text-grafito/80">Tarifa publicada</dt><dd className="text-lg font-medium text-tinta">{h.tarifa} <span className="text-sm font-normal text-grafito/80">MXN</span></dd></div>
              {h.cama && <div className="col-span-2"><dt className="text-sm text-grafito/80">Cama</dt><dd className="text-tinta">{h.cama}</dd></div>}
            </dl>
            {h.descripcion && <p className="mt-5">{h.descripcion}</p>}
            {h.amenidades && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {h.amenidades.map((a) => <li key={a} className="rounded-full border border-tinta/15 bg-cal px-3 py-1 text-sm text-tinta">{a}</li>)}
              </ul>
            )}
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={negocio.reservar} {...externo} className="btn-roja">Reservar {h.nombre}</a>
              <a href={negocio.telefonoLink} className="btn-linea">{Icono.tel} Preguntar</a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-sm text-grafito/80">{habitaciones.nota}</p>
      </div>
    </section>
  );
}

function Restaurantes() {
  const r = restaurantes;
  return (
    <section id="restaurantes" className="bg-anil py-20 text-cal md:py-28">
      <div className="contenedor">
        <h2 className="max-w-2xl text-4xl text-cal md:text-5xl">{r.titulo}</h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="font-serif text-3xl italic text-cal">{r.teresitas.nombre}</h3>
            <p className="mt-3 text-cal/85">{r.teresitas.texto}</p>
            <p className="mt-3 text-cal/85">{r.teresitas.extra}</p>
            <a href={negocio.teresitas} {...externo} className="mt-4 inline-block font-semibold text-cal underline decoration-cal/40 underline-offset-4 hover:decoration-cal">teresitas.com.mx</a>
          </div>
          <div>
            <h3 className="font-serif text-3xl italic text-cal">{r.lebleu.nombre}</h3>
            <p className="mt-3 text-cal/85">{r.lebleu.texto}</p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {r.fotos.map((f) => <img key={f.src} src={f.src} alt={f.alt} width={1024} height={575} loading="lazy" className="aspect-[1024/575] w-full rounded-xl object-cover" />)}
        </div>
      </div>
    </section>
  );
}

function Eventos() {
  const [a, b, c] = eventos.fotos;
  return (
    <section id="eventos" className="py-20 md:py-28">
      <div className="contenedor grid items-center gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl">{eventos.titulo}</h2>
          <p className="mt-5 max-w-md">{eventos.texto}</p>
          <a href={negocio.telefonoLink} className="btn-roja mt-8">{Icono.tel} Solicitar información</a>
        </div>
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          <img src={a.src} alt={a.alt} width={a.w} height={a.h} loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover" />
          <img src={b.src} alt={b.alt} width={b.w} height={b.h} loading="lazy" className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover" />
          <img src={c.src} alt={c.alt} width={c.w} height={c.h} loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover" />
        </div>
      </div>
    </section>
  );
}

function Visitanos() {
  return (
    <section id="visitanos" className="bg-piedra py-20 md:py-28">
      <div className="contenedor grid items-stretch gap-10 md:grid-cols-2 md:gap-14">
        <a href={negocio.mapa} {...externo} className="group relative order-2 block min-h-72 overflow-hidden rounded-3xl md:order-1" aria-label="Abrir la ubicación de La Puerta Roja en Google Maps">
          <img src={fotos.fuente} alt="Fuente de cantera en el patio de muros azules" width={1920} height={1080} loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-cal px-4 py-2 text-sm font-semibold text-tinta">{Icono.mapa} Calle Galeana No. 46</span>
        </a>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl">Te esperamos en Álamos</h2>
          <dl className="mt-8 space-y-6">
            <div><dt className="text-sm font-semibold text-roja">Dirección</dt><dd className="mt-1 text-lg text-tinta">{negocio.direccion}</dd></div>
            <div><dt className="text-sm font-semibold text-roja">Teléfono</dt><dd className="mt-1 text-lg"><a href={negocio.telefonoLink} className="text-tinta underline decoration-tinta/30 underline-offset-4 hover:decoration-roja">{negocio.telefono}</a></dd></div>
            <div><dt className="text-sm font-semibold text-roja">Redes</dt><dd className="mt-1 flex gap-5 text-lg">{negocio.redes.map((r) => <a key={r.nombre} href={r.url} {...externo} className="text-tinta underline decoration-tinta/30 underline-offset-4 hover:decoration-roja">{r.nombre}</a>)}</dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.reservar} {...externo} className="btn-roja">{Icono.cal} Reservar estancia</a>
            <a href={negocio.mapa} {...externo} className="btn-linea">{Icono.mapa} Cómo llegar</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-tinta pb-28 pt-14 text-cal/75 md:pb-14">
      <div className="contenedor flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <img src={fotos.logo} alt="La Puerta Roja" width={514} height={82} className="h-5 w-auto invert" />
        <p className="text-sm">Hotel boutique en {negocio.ciudad}. {negocio.telefono}.</p>
      </div>
      <p className="contenedor mt-8 text-xs text-cal/45">© {new Date().getFullYear()} La Puerta Roja Hotel Boutique.</p>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta/10 bg-cal/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1fr_auto_auto] gap-2">
        <a href={negocio.reservar} {...externo} className="btn-roja">{Icono.cal} Reservar</a>
        <a href={negocio.telefonoLink} className="grid size-[46px] place-items-center rounded-full border border-tinta/20 text-tinta" aria-label="Llamar a La Puerta Roja">{Icono.tel}</a>
        <a href={negocio.mapa} {...externo} className="grid size-[46px] place-items-center rounded-full border border-tinta/20 text-tinta" aria-label="Cómo llegar">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#habitaciones" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-cal focus:px-3 focus:py-2">Saltar a habitaciones</a>
      <Encabezado />
      <main>
        <Hero />
        <Casa />
        <Habitaciones />
        <Restaurantes />
        <Eventos />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
