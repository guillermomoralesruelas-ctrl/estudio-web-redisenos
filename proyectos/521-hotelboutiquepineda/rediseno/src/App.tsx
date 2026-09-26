import { useState } from 'react';
import {
  amenidades, bienvenida, destacados, fotos, hero, nav, negocio, opinion, servicios, suites, ubicacion, wa, type Foto,
} from './data/content';

const externo = { target: '_blank', rel: 'noopener' } as const;
const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
  ),
  tel: (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" strokeLinejoin="round" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
  persona: (
    <svg viewBox="0 0 24 24" className="size-full" fill="currentColor" aria-hidden="true"><circle cx="12" cy="7" r="4" /><path d="M4 21a8 8 0 0 1 16 0Z" /></svg>
  ),
};

function Img({ foto, className = '' }: { foto: Foto; className?: string }) {
  return <img src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} loading="lazy" decoding="async" className={`size-full object-cover ${className}`} />;
}

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-chocolate text-white">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="shrink-0" aria-label="Hotel Boutique Pineda, ir al inicio">
          <img src={fotos.logo.src} alt="Pineda Hotel Boutique" width={255} height={116} className="h-10 w-auto md:h-12" />
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="text-[0.95rem] font-medium text-white/85 hover:text-white">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={negocio.whatsapp} {...externo} className="btn-terracota hidden sm:inline-flex">{Icono.wa} Reservar</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir navegación"
            className="grid size-11 place-items-center rounded-full border border-white/30 md:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-white/10 md:hidden" aria-label="Móvil">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="border-b border-white/10 py-3 font-serif text-2xl last:border-0">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-chocolate">
      <picture>
        <source media="(max-width: 767px)" srcSet={fotos.portadaVertical.src} width={fotos.portadaVertical.w} height={fotos.portadaVertical.h} />
        <img src={fotos.portada.src} alt={fotos.portada.alt} width={fotos.portada.w} height={fotos.portada.h} fetchPriority="high" className="absolute inset-0 -z-20 size-full object-cover" />
      </picture>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-chocolate/90 via-chocolate/40 to-chocolate/20" aria-hidden="true" />
      <div className="contenedor flex min-h-[78svh] flex-col justify-end pb-12 pt-24 text-white md:min-h-[84svh] md:pb-16">
        <p className="text-lg text-white/90">Rincón de Guayabitos, Nayarit</p>
        <h1 className="mt-2 max-w-4xl text-[clamp(3rem,8.5vw,6.5rem)] leading-[0.95] text-white">{hero.titulo}</h1>
        <p className="mt-5 max-w-xl text-xl text-white/90">{hero.bajada} {hero.detalle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={negocio.whatsapp} {...externo} className="btn-terracota">{Icono.wa} Reservar por WhatsApp</a>
          <a href="#cuantos" className="btn-linea-clara">Encuentra tu suite</a>
        </div>
        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/25 pt-5 text-white/90">
          <div><dt className="text-sm text-white/70">Check-in</dt><dd className="font-serif text-2xl">{negocio.checkIn}</dd></div>
          <div><dt className="text-sm text-white/70">Check-out</dt><dd className="font-serif text-2xl">{negocio.checkOut}</dd></div>
          <div><dt className="text-sm text-white/70">Grupos de hasta</dt><dd className="font-serif text-2xl">{negocio.grupoMaximo} personas</dd></div>
          <div><dt className="text-sm text-white/70">A la playa</dt><dd className="font-serif text-2xl">4 min caminando</dd></div>
        </dl>
      </div>
    </section>
  );
}

/** Elemento memorable: el hotel vende por tamaño de grupo, así que se empieza preguntando cuántos viajan. */
function CuantosViajan() {
  const [n, setN] = useState(2);
  const suite = suites.find((s) => n <= s.personas);
  const grupo = !suite;
  const mensaje = grupo
    ? `Hola, somos ${n} personas y queremos cotizar hospedaje para un grupo`
    : `Hola, somos ${n} ${n === 1 ? 'persona' : 'personas'} y quiero reservar la ${suite.nombre}`;
  return (
    <section id="cuantos" className="bg-rosa">
      <div className="contenedor grid gap-10 py-16 md:grid-cols-12 md:py-20">
        <div className="min-w-0 md:col-span-5">
          <h2 className="text-[clamp(2.2rem,5vw,3.4rem)]">¿Cuántos viajan?</h2>
          <p className="mt-3">Tenemos suites para 2, 4 y 6 personas y recibimos grupos de hasta {negocio.grupoMaximo}. Dinos cuántos son y te decimos cuál les queda.</p>
          <div className="mt-8 flex items-center gap-5">
            <button type="button" className="paso" onClick={() => setN((v) => Math.max(1, v - 1))} disabled={n <= 1} aria-label="Una persona menos">−</button>
            <p className="min-w-[7ch] text-center font-serif text-6xl leading-none text-chocolate" aria-live="polite">
              {n}<span className="block text-base text-texto">{n === 1 ? 'persona' : 'personas'}</span>
            </p>
            <button type="button" className="paso" onClick={() => setN((v) => Math.min(negocio.grupoMaximo, v + 1))} disabled={n >= negocio.grupoMaximo} aria-label="Una persona más">+</button>
          </div>
          <div className="mt-6 flex max-w-sm flex-wrap gap-1 text-terracota" aria-hidden="true">
            {Array.from({ length: n }, (_, i) => <span key={i} className="size-5">{Icono.persona}</span>)}
          </div>
        </div>
        <div className="min-w-0 md:col-span-7">
          {grupo ? (
            <div className="flex h-full flex-col justify-center rounded-2xl bg-arena p-8">
              <h3 className="text-3xl">Viaje en grupo</h3>
              <p className="mt-3">Recibimos grupos de hasta {negocio.grupoMaximo} personas. Escríbenos con tus fechas y te preparamos la cotización para los {n}.</p>
              <a href={wa(mensaje)} {...externo} className="btn-terracota mt-6 self-start">{Icono.wa} Cotizar grupo</a>
            </div>
          ) : (
            <div key={suite.id} className="cambio grid overflow-hidden rounded-2xl bg-arena sm:grid-cols-2">
              <div className="aspect-[4/3] sm:aspect-auto"><Img foto={suite.foto} /></div>
              <div className="min-w-0 p-6 md:p-8">
                <h3 className="text-3xl">{suite.nombre}</h3>
                <p className="mt-1 text-[0.95rem]">{suite.camas}, {suite.banos}</p>
                <p className="mt-5 font-serif text-4xl text-chocolate">{pesos(suite.precio)} <span className="font-sans text-base text-texto">MXN por noche</span></p>
                <p className="mt-1 text-[0.95rem]">Entre {n} {n === 1 ? 'persona' : 'personas'}: {pesos(Math.round(suite.precio / n))} por persona</p>
                <a href={wa(mensaje)} {...externo} className="btn-terracota mt-6">{Icono.wa} Reservar esta suite</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Bienvenida() {
  return (
    <section className="contenedor grid gap-10 py-20 md:grid-cols-12 md:py-28">
      <div className="min-w-0 md:col-span-6 md:pt-6">
        <img src={fotos.icono.src} alt="" width={255} height={255} loading="lazy" className="size-14" />
        <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.2rem)]">{bienvenida.titulo}</h2>
        <p className="mt-5">{bienvenida.texto}</p>
        <p className="mt-6 font-serif text-2xl italic leading-snug text-terracota">{bienvenida.remate}</p>
      </div>
      <div className="grid min-w-0 grid-cols-3 gap-3 md:col-span-6">
        {fotos.estancia.map((f, i) => (
          <div key={f.src} className={`aspect-[4/5] overflow-hidden rounded-xl ${i === 1 ? 'mt-10' : ''}`}><Img foto={f} /></div>
        ))}
      </div>
    </section>
  );
}

function Suites() {
  return (
    <section id="suites" className="bg-chocolate py-20 text-white md:py-28">
      <div className="contenedor">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-[clamp(2.2rem,5vw,3.6rem)] text-white">Nuestras suites</h2>
          <p className="text-white/85">El hotel ofrece un total de {negocio.totalSuites} suites, todas con cocina totalmente equipada, área de sala y comedor, recámaras con TV y aire acondicionado, en un ambiente familiar.</p>
        </div>
        <div className="mt-12 space-y-12">
          {suites.map((s, i) => (
            <article key={s.id} className="grid gap-6 md:grid-cols-12 md:items-center md:gap-10">
              <div className={`aspect-[3/2] overflow-hidden rounded-2xl md:col-span-7 ${i % 2 ? 'md:order-2' : ''}`}><Img foto={s.foto} /></div>
              <div className="min-w-0 md:col-span-5">
                <h3 className="text-3xl text-white md:text-4xl">{s.nombre}</h3>
                <ul className="mt-4 flex flex-wrap gap-2 text-[0.95rem]">
                  {[`${s.personas} huéspedes`, s.camas, s.banos].map((d) => <li key={d} className="rounded-full border border-white/25 px-3 py-1">{d}</li>)}
                </ul>
                <p className="mt-4 text-white/85">{s.texto}</p>
                <p className="mt-5 font-serif text-3xl">{pesos(s.precio)} <span className="font-sans text-base text-white/75">MXN por noche</span></p>
                <a href={wa(`Hola, quiero reservar la ${s.nombre}`)} {...externo} className="btn-claro mt-5">{Icono.wa} Reservar</a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 rounded-2xl border border-white/20 p-6 md:p-8">
          <h3 className="text-2xl text-white">En todas las suites</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-white/85 sm:grid-cols-3">
            {amenidades.map((a) => <li key={a}>{a}</li>)}
          </ul>
          <p className="mt-6 text-[0.95rem] text-white/75">¿Prefieres reservar tú mismo? <a href={negocio.reservarEnLinea} {...externo} className="font-semibold text-white underline underline-offset-4">Consulta la disponibilidad en línea</a>.</p>
        </div>
      </div>
    </section>
  );
}

function Destacados() {
  const [alberca, restaurante, vistas] = destacados;
  return (
    <section id="alberca" className="contenedor py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="min-w-0 md:col-span-7">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl"><Img foto={alberca.fotos[0]} /></div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {alberca.fotos.slice(1).map((f) => <div key={f.src} className="aspect-[4/3] overflow-hidden rounded-xl"><Img foto={f} /></div>)}
          </div>
        </div>
        <div className="min-w-0 md:col-span-5 md:pt-8">
          <h2 className="text-[clamp(2.2rem,5vw,3.4rem)]">{alberca.titulo}</h2>
          <p className="mt-5">{alberca.texto}</p>
        </div>
      </div>
      <div className="mt-20 grid gap-10 md:grid-cols-2 md:gap-14">
        {[restaurante, vistas].map((d) => (
          <div key={d.id} id={d.id} className="grid min-w-0 grid-cols-[2fr_3fr] items-center gap-5">
            <div className="aspect-[4/5] overflow-hidden rounded-xl"><Img foto={d.fotos[0]} /></div>
            <div className="min-w-0">
              <h3 className="text-3xl">{d.titulo}</h3>
              <p className="mt-3 text-[0.98rem]">{d.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Ubicacion() {
  return (
    <section id="ubicacion" className="relative isolate overflow-hidden bg-bahia-2 text-white">
      <div className="absolute inset-0 -z-10"><Img foto={fotos.playa} /></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bahia-2/95 via-bahia-2/75 to-bahia-2/20" aria-hidden="true" />
      <div className="contenedor py-24 md:py-32">
        <div className="max-w-xl">
          <p className="font-serif text-7xl leading-none md:text-8xl">4 min</p>
          <p className="mt-1 text-white/85">caminando a la playa</p>
          <h2 className="mt-8 text-[clamp(2rem,4.4vw,3.2rem)] text-white">{ubicacion.titulo}</h2>
          <p className="mt-5 text-white/90">{ubicacion.texto}</p>
          <a href={negocio.mapa} {...externo} className="btn-claro mt-8">{Icono.mapa} Ver en Google Maps</a>
        </div>
      </div>
    </section>
  );
}

function Opinion() {
  return (
    <section className="contenedor py-20 md:py-28">
      <figure className="mx-auto max-w-3xl text-center">
        <p className="text-2xl text-terracota" aria-label="5 de 5 estrellas">★★★★★</p>
        <blockquote className="mt-5 font-serif text-[clamp(1.5rem,3vw,2.2rem)] leading-snug text-chocolate">“{opinion.texto}”</blockquote>
        <figcaption className="mt-5 font-semibold">{opinion.autor}, en {opinion.fuente}</figcaption>
      </figure>
      <p className="mx-auto mt-14 max-w-2xl text-center font-serif text-xl italic text-texto">“{opinion.lema}”</p>
    </section>
  );
}

function Servicios() {
  return (
    <section className="bg-rosa py-20 md:py-24">
      <div className="contenedor grid gap-10 md:grid-cols-12">
        <div className="min-w-0 md:col-span-4">
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Todo lo que necesitas para una estancia completa</h2>
        </div>
        <dl className="grid min-w-0 gap-x-10 gap-y-7 sm:grid-cols-2 md:col-span-8">
          {servicios.map((s) => (
            <div key={s.nombre} className="border-t border-chocolate/20 pt-4">
              <dt className="font-serif text-2xl text-chocolate">{s.nombre}</dt>
              <dd className="mt-1">{s.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="contenedor grid gap-10 py-20 md:grid-cols-12 md:py-28">
      <div className="min-w-0 md:col-span-5">
        <h2 className="text-[clamp(2.2rem,5vw,3.4rem)]">Esperamos recibirte en Rincón de Guayabitos</h2>
        <p className="mt-4">Para reservaciones y solicitudes especiales, llámanos o escríbenos.</p>
        <address className="mt-6 not-italic text-lg text-chocolate">{negocio.direccion.map((l) => <span key={l} className="block">{l}</span>)}</address>
        <dl className="mt-6 space-y-3">
          <div><dt className="font-semibold text-chocolate">Teléfono y WhatsApp</dt><dd><a className="enlace" href={negocio.telefono}>{negocio.telefonoVisible}</a></dd></div>
          <div><dt className="font-semibold text-chocolate">Correo</dt><dd><a className="enlace break-all" href={`mailto:${negocio.email}`}>{negocio.email}</a></dd></div>
          <div><dt className="font-semibold text-chocolate">Redes</dt><dd className="flex gap-5"><a className="enlace" href={negocio.facebook} {...externo}>Facebook</a><a className="enlace" href={negocio.instagram} {...externo}>Instagram</a></dd></div>
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={negocio.whatsapp} {...externo} className="btn-terracota">{Icono.wa} Reservar por WhatsApp</a>
          <a href={negocio.mapa} {...externo} className="btn-linea">{Icono.mapa} Cómo llegar</a>
        </div>
      </div>
      <a href={negocio.mapa} {...externo} className="group relative block min-w-0 self-start overflow-hidden rounded-2xl md:col-span-7" aria-label="Abrir la ubicación del hotel en Google Maps">
        <div className="aspect-[3/2]"><Img foto={fotos.recepcion} className="transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none" /></div>
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-arena px-4 py-2 font-semibold text-chocolate">{Icono.mapa} Ver en Google Maps</span>
      </a>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-chocolate pb-28 pt-12 text-white/80 md:pb-12">
      <div className="contenedor flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <img src={fotos.logo.src} alt="Pineda Hotel Boutique" width={255} height={116} loading="lazy" className="h-12 w-auto" />
        <p className="text-sm">© {new Date().getFullYear()} Hotel Boutique Pineda. Check-in {negocio.checkIn}, check-out {negocio.checkOut}.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-chocolate/10 bg-arena/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-2">
        <a href={negocio.whatsapp} {...externo} className="btn-terracota px-3">{Icono.wa} Reservar</a>
        <a href={negocio.telefono} className="btn-linea px-0" aria-label="Llamar">{Icono.tel}</a>
        <a href={negocio.mapa} {...externo} className="btn-linea px-0" aria-label="Cómo llegar">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#suites" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-arena focus:px-3 focus:py-2">Saltar a las suites</a>
      <Encabezado />
      <main>
        <Portada />
        <CuantosViajan />
        <Bienvenida />
        <Suites />
        <Destacados />
        <Ubicacion />
        <Opinion />
        <Servicios />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
