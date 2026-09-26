import { useEffect, useState } from 'react';
import {
  antojos, diferentes, equipo, favoritos, fotos, galeria, hero, historia, momentos, nav, negocio, totalPlatillos, wa,
} from './data/content';

// Hora actual en Xalapa (0-23, con decimales para los minutos).
function horaXalapa() {
  const partes = new Intl.DateTimeFormat('es-MX', { timeZone: negocio.zonaHoraria, hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
  const h = Number(partes.find((p) => p.type === 'hour')?.value ?? 0);
  const m = Number(partes.find((p) => p.type === 'minute')?.value ?? 0);
  return h + m / 60;
}
function useHora() {
  const [hora, setHora] = useState(horaXalapa);
  useEffect(() => { const t = setInterval(() => setHora(horaXalapa()), 60_000); return () => clearInterval(t); }, []);
  return hora;
}
const abierto = (h: number) => h >= negocio.abre && h < negocio.cierra;

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z" /></svg>
  ),
  tel: (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" strokeLinejoin="round" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
};

function Encabezado() {
  const [abiertoMenu, setAbiertoMenu] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-crema/90 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="shrink-0" aria-label="Casa Orígenes, ir al inicio">
          <img src={fotos.logo} alt="Orígenes" width={1199} height={309} className="h-8 w-auto md:h-10" />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="text-[0.95rem] font-medium text-tinta/80 hover:text-ambar">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={wa()} target="_blank" rel="noopener" className="btn-ambar hidden sm:inline-flex">Reservar mesa</a>
          <button type="button" onClick={() => setAbiertoMenu((v) => !v)} aria-expanded={abiertoMenu} aria-controls="menu-movil" aria-label="Abrir navegación" className="grid size-11 place-items-center rounded-full border border-tinta/20 md:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abiertoMenu ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abiertoMenu && (
        <nav id="menu-movil" className="border-t border-tinta/10 bg-crema md:hidden" aria-label="Móvil">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbiertoMenu(false)} className="border-b border-tinta/10 py-3 font-serif text-2xl text-tinta last:border-0">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const hora = useHora();
  const [actual, setActual] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setActual((i) => (i + 1) % hero.fotos.length), 6000);
    return () => clearInterval(t);
  }, []);
  const estaAbierto = abierto(hora);
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="contenedor grid items-center gap-8 pb-28 pt-6 md:grid-cols-[1fr_1.05fr] md:gap-14 md:pb-20 md:pt-14">
        <div className="order-2 md:order-1">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-salvia-claro px-3.5 py-1.5 text-sm font-medium text-tinta">
            <span className={`size-2 rounded-full ${estaAbierto ? 'bg-salvia' : 'bg-ambar'}`} aria-hidden="true" />
            {estaAbierto ? 'Abierto ahora, hasta las 6 pm' : 'Cerrado ahora, abrimos a las 9 am'}
          </p>
          <h1 className="text-[3.4rem] leading-[0.95] sm:text-7xl lg:text-[6.2rem]">{hero.titulo}</h1>
          <p className="mt-5 font-serif text-2xl italic text-tinta md:text-[1.9rem]">{hero.frase}</p>
          <p className="mt-4 max-w-md text-tinta-2">{hero.texto}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa()} target="_blank" rel="noopener" className="btn-ambar">{Icono.wa} Reservar por WhatsApp</a>
            <a href="#menu" className="btn-linea">Ver el menú</a>
          </div>
          <p className="mt-8 text-sm text-tinta-2/80">{negocio.horario}. Monte Magno, Xalapa.</p>
        </div>
        <div className="relative order-1 md:order-2">
          {/* Foto con remate de arco, como los vanos de una casona */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[34rem] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-papel md:aspect-[5/6]">
            {hero.fotos.map((f, i) => (
              <img
                key={f.src}
                src={f.src}
                alt={f.alt}
                width={1066}
                height={1600}
                fetchPriority={i === 0 ? 'high' : undefined}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="hero-foto absolute inset-0 size-full object-cover"
                style={{ opacity: i === actual ? 1 : 0, transform: i === actual ? 'scale(1.06)' : 'scale(1)' }}
                aria-hidden={i !== actual}
              />
            ))}
          </div>
          <img src={fotos.benedictos} alt="Benedictos servidos en plato verde" width={607} height={607} className="absolute -bottom-6 -left-2 hidden size-36 rounded-full border-[6px] border-crema object-cover shadow-xl sm:block md:-left-10 md:size-44" />
          <div className="mt-4 flex justify-center gap-2 md:mt-5" role="tablist" aria-label="Fotos del inicio">
            {hero.fotos.map((f, i) => (
              <button key={f.src} type="button" role="tab" aria-selected={i === actual} aria-label={`Ver foto ${i + 1}: ${f.alt}`} onClick={() => setActual(i)} className="grid size-6 place-items-center">
                <span className={`block h-1.5 rounded-full transition-all ${i === actual ? 'w-6 bg-ambar' : 'w-1.5 bg-tinta/30'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Historia() {
  return (
    <section id="casa" className="bg-papel py-20 md:py-28">
      <div className="contenedor grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="grid grid-cols-[1.2fr_1fr] items-end gap-4">
          <img src={historia.fotos[0].src} alt={historia.fotos[0].alt} width={1707} height={2560} loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover" />
          <img src={historia.fotos[1].src} alt={historia.fotos[1].alt} width={854} height={1280} loading="lazy" className="mb-10 aspect-[3/4] w-full rounded-2xl object-cover" />
        </div>
        <div>
          <h2 className="text-5xl md:text-6xl">{historia.titulo}</h2>
          {historia.parrafos.map((p) => <p key={p} className="mt-5 max-w-lg">{p}</p>)}
        </div>
      </div>
    </section>
  );
}

function Favoritos() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="favoritos-titulo">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="favoritos-titulo" className="text-5xl md:text-6xl">Los que siempre se piden</h2>
          <a href="#menu" className="font-medium text-ambar-2 underline decoration-ambar/40 underline-offset-4 hover:decoration-ambar">Ver los {totalPlatillos} del menú</a>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6">
          {favoritos.map((f) => (
            <li key={f.nombre}>
              <img src={f.src} alt={f.nombre} width={607} height={607} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
              <div className="mt-3 flex items-baseline gap-2">
                <h3 className="font-serif text-xl leading-tight md:text-2xl">{f.nombre}</h3>
                <span className="puntos hidden sm:block" aria-hidden="true" />
                <span className="shrink-0 font-semibold text-ambar-2">{f.precio}</span>
              </div>
              <p className="mt-1 text-[0.93rem] text-tinta-2/85">{f.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Antojo({ onElegir }: { onElegir: (id: string) => void }) {
  const hora = useHora();
  const a = !abierto(hora) ? antojos.cerrado : hora < 12 ? antojos.desayuno : antojos.tarde;
  return (
    <aside className="overflow-hidden rounded-3xl bg-cobalto text-crema" aria-label="¿Qué se antoja ahora?">
      <img src={a.src} alt={a.alt} width={1200} height={1200} loading="lazy" className="aspect-[16/10] w-full object-cover lg:aspect-[4/3]" />
      <div className="p-6">
        <p className="text-sm text-crema/70">¿Qué se antoja ahora? Son las {new Intl.DateTimeFormat('es-MX', { timeZone: negocio.zonaHoraria, hour: 'numeric', minute: '2-digit' }).format(new Date())} en Xalapa.</p>
        <p className="mt-2 font-serif text-3xl text-crema">{a.saludo}</p>
        <p className="mt-2 text-crema/85">{a.texto}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <button type="button" onClick={() => onElegir(a.momento)} className="btn-claro">Ver esa parte del menú</button>
          <a href={wa()} target="_blank" rel="noopener" className="inline-flex min-h-[46px] items-center px-2 font-semibold text-crema underline underline-offset-4">Reservar</a>
        </div>
      </div>
    </aside>
  );
}

function Menu() {
  const hora = useHora();
  const inicial = abierto(hora) && hora >= 12 ? 'tarde' : 'desayuno';
  const [activo, setActivo] = useState(inicial);
  const momento = momentos.find((m) => m.id === activo)!;
  const elegir = (id: string) => {
    setActivo(id);
    document.getElementById('menu-carta')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  };
  return (
    <section id="menu" className="bg-papel py-20 md:py-28">
      <div className="contenedor">
        <h2 className="text-5xl md:text-6xl">Nuestro menú</h2>
        <p className="mt-4 max-w-xl">Desayuno sin prisas, media tarde, café de especialidad y pan de la casa. Precios en pesos mexicanos.</p>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-12">
          <div id="menu-carta" className="min-w-0 scroll-mt-24">
            <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0" role="tablist" aria-label="Partes del menú">
              <div className="flex w-max gap-2">
                {momentos.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    role="tab"
                    id={`tab-${m.id}`}
                    aria-selected={m.id === activo}
                    aria-controls="panel-menu"
                    onClick={() => setActivo(m.id)}
                    className={`min-h-[44px] rounded-full px-5 text-[0.95rem] font-semibold transition-colors ${m.id === activo ? 'bg-tinta text-crema' : 'bg-crema text-tinta hover:bg-white'}`}
                  >
                    {m.titulo}
                  </button>
                ))}
              </div>
            </div>
            <div id="panel-menu" role="tabpanel" aria-labelledby={`tab-${activo}`} className="mt-8 columns-1 gap-12 md:columns-2">
              {momento.categorias.map((c) => (
                <div key={c.categoria} className="mb-10 break-inside-avoid">
                  <h3 className="border-b border-tinta/15 pb-2 text-3xl">{c.categoria}</h3>
                  {c.nota && <p className="mt-2 text-sm italic text-salvia">{c.nota}</p>}
                  <ul className="mt-3 space-y-4">
                    {c.items.map((i) => (
                      <li key={i.nombre}>
                        <div className="flex items-baseline gap-2">
                          <span className="font-medium text-tinta">{i.nombre}</span>
                          <span className="puntos" aria-hidden="true" />
                          <span className="shrink-0 font-semibold text-ambar-2">{i.precio}</span>
                        </div>
                        {i.desc && <p className="mt-0.5 text-[0.92rem] leading-snug text-tinta-2/80">{i.desc}</p>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Antojo onElegir={elegir} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Diferentes() {
  return (
    <section className="bg-cobalto py-20 text-crema md:py-28" aria-labelledby="dif-titulo">
      <div className="contenedor grid items-center gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <img src={diferentes.foto.src} alt={diferentes.foto.alt} width={2048} height={1638} loading="lazy" className="w-full rounded-3xl object-cover md:aspect-[4/5]" />
        <div>
          <h2 id="dif-titulo" className="text-5xl text-crema md:text-6xl">{diferentes.titulo}</h2>
          <dl className="mt-8 divide-y divide-crema/15 border-y border-crema/15">
            {diferentes.puntos.map((p) => (
              <div key={p.titulo} className="grid gap-1 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6">
                <dt className="font-serif text-2xl text-crema">{p.titulo}</dt>
                <dd className="text-crema/80">{p.texto}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 font-serif text-2xl italic text-crema md:text-3xl">{diferentes.cierre}</p>
          <a href={wa()} target="_blank" rel="noopener" className="btn-ambar mt-6">{Icono.wa} Quiero reservar</a>
        </div>
      </div>
    </section>
  );
}

function Equipo() {
  const c = equipo.chef;
  return (
    <section id="equipo" className="py-20 md:py-28">
      <div className="contenedor grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
        <div>
          <p className="font-medium text-salvia">Nuestra mente maestra</p>
          <h2 className="mt-2 text-5xl md:text-6xl">Chef {c.nombre}</h2>
          <blockquote className="mt-8 border-l-2 border-ambar pl-6 font-serif text-3xl italic leading-snug text-tinta md:text-[2.2rem]">
            “{c.cita}”
          </blockquote>
          {c.bio.map((p) => <p key={p} className="mt-5 max-w-xl">{p}</p>)}
        </div>
        <div className="self-end rounded-3xl bg-salvia-claro p-7 md:p-8">
          <h3 className="text-3xl">{equipo.titulo}</h3>
          <p className="mt-2 text-[0.95rem]">{equipo.texto}</p>
          <ul className="mt-6 divide-y divide-tinta/10">
            <li className="flex justify-between gap-4 py-3"><span className="font-medium text-tinta">{c.nombre}</span><span className="text-sm text-tinta-2/80">{c.puesto}</span></li>
            {equipo.cocina.map((p) => (
              <li key={p.nombre} className="flex justify-between gap-4 py-3"><span className="font-medium text-tinta">{p.nombre}</span><span className="text-right text-sm text-tinta-2/80">{p.puesto}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section className="pb-20 md:pb-28" aria-label="Galería">
      <div className="contenedor grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {galeria.map((g, i) => (
          <img key={g.src} src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" className={`w-full rounded-2xl object-cover ${i === 0 ? 'col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[3/4]' : 'aspect-[3/4]'} ${i === 2 ? 'md:row-span-2 md:h-full' : ''}`} />
        ))}
      </div>
    </section>
  );
}

function Visitanos() {
  return (
    <section id="visitanos" className="bg-papel py-20 md:py-28">
      <div className="contenedor grid items-stretch gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <h2 className="text-5xl md:text-6xl">Te esperamos con ansias</h2>
          <dl className="mt-8 space-y-6">
            <div><dt className="text-sm font-semibold text-salvia">Dirección</dt><dd className="mt-1 text-lg text-tinta">{negocio.direccion}</dd></div>
            <div><dt className="text-sm font-semibold text-salvia">Horario</dt><dd className="mt-1 text-lg text-tinta">{negocio.horario}<br /><span className="text-base text-tinta-2/80">{negocio.horarioNota}</span></dd></div>
            <div><dt className="text-sm font-semibold text-salvia">Reservaciones</dt><dd className="mt-1 text-lg"><a href={negocio.telefonoLink} className="text-tinta underline decoration-tinta/30 underline-offset-4 hover:decoration-ambar">{negocio.telefono}</a></dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa()} target="_blank" rel="noopener" className="btn-ambar">{Icono.wa} Reservar por WhatsApp</a>
            <a href={negocio.mapa} target="_blank" rel="noopener" className="btn-linea">{Icono.mapa} Cómo llegar</a>
          </div>
        </div>
        <a href={negocio.mapa} target="_blank" rel="noopener" className="group relative block min-h-72 overflow-hidden rounded-3xl" aria-label="Abrir la ubicación de Casa Orígenes en Google Maps">
          <img src={fotos.terraza1} alt="Entrada y terraza de Casa Orígenes" width={1280} height={852} loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-crema px-4 py-2 text-sm font-semibold text-tinta">{Icono.mapa} Blvd. Europa esq. Tokio</span>
        </a>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-cobalto-2 pb-28 pt-14 text-crema/80 md:pb-14">
      <div className="contenedor flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <img src={fotos.logo} alt="Orígenes" width={1199} height={309} className="h-9 w-auto invert" />
          <p className="mt-4 max-w-sm text-sm">Cocina con raíces que celebra los sabores auténticos. Un espacio donde la tradición y la elegancia se encuentran en cada platillo.</p>
        </div>
        <ul className="flex gap-5">
          {negocio.redes.map((r) => <li key={r.nombre}><a href={r.url} target="_blank" rel="noopener" className="text-crema hover:text-ambar">{r.nombre}</a></li>)}
        </ul>
      </div>
      <p className="contenedor mt-10 text-xs text-crema/50">© {new Date().getFullYear()} Casa Orígenes. {negocio.ciudad}.</p>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta/10 bg-crema/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1fr_auto_auto] gap-2">
        <a href={wa()} target="_blank" rel="noopener" className="btn-ambar">{Icono.wa} Reservar</a>
        <a href={negocio.telefonoLink} className="grid size-[46px] place-items-center rounded-full border border-tinta/20 text-tinta" aria-label="Llamar a Casa Orígenes">{Icono.tel}</a>
        <a href={negocio.mapa} target="_blank" rel="noopener" className="grid size-[46px] place-items-center rounded-full border border-tinta/20 text-tinta" aria-label="Cómo llegar">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#menu" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-crema focus:px-3 focus:py-2">Saltar al menú</a>
      <Encabezado />
      <main>
        <Hero />
        <Historia />
        <Favoritos />
        <Menu />
        <Diferentes />
        <Equipo />
        <Galeria />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
