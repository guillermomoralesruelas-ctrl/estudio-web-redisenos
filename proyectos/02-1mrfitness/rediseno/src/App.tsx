import { useEffect, useState } from 'react';
import { clases, equipo, hero, incluye, instalaciones, membresias, nav, negocio, pagos, promo, wa, type Membresia } from './data/content';

const IconoWa = ({ className = 'size-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm4.52 11.99c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.23-.73-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" /></svg>
);
const IconoTel = ({ className = 'size-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" strokeLinejoin="round" /></svg>
);

// ---------- Reloj en vivo: el elemento memorable ----------
function useHoraHermosillo() {
  const leer = () => {
    const ahora = new Date();
    const fmt = new Intl.DateTimeFormat('es-MX', { timeZone: negocio.zonaHoraria, hour: 'numeric', minute: '2-digit', hour12: true });
    const h24 = Number(new Intl.DateTimeFormat('en-US', { timeZone: negocio.zonaHoraria, hour: 'numeric', hour12: false }).format(ahora)) % 24;
    return { texto: fmt.format(ahora), hora: h24 };
  };
  const [t, setT] = useState(leer);
  useEffect(() => { const id = setInterval(() => setT(leer()), 15000); return () => clearInterval(id); }, []);
  return t;
}

function Reloj() {
  const { texto, hora } = useHoraHermosillo();
  const [hhmm, ...resto] = texto.split(' ');
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-tinta/80 p-5 backdrop-blur-sm sm:gap-6 sm:p-6" role="status" aria-live="polite">
      <svg viewBox="0 0 100 100" className="size-20 shrink-0 sm:size-24" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => {
          const a = (i / 24) * Math.PI * 2 - Math.PI / 2;
          const actual = i === hora;
          return (
            <line key={i} x1={50 + Math.cos(a) * 34} y1={50 + Math.sin(a) * 34} x2={50 + Math.cos(a) * (actual ? 48 : 44)} y2={50 + Math.sin(a) * (actual ? 48 : 44)}
              stroke={actual ? '#ffffff' : '#c4d73d'} strokeWidth={actual ? 5 : 3.2} strokeLinecap="round" opacity={actual ? 1 : 0.85} />
          );
        })}
        <text x="50" y="55" textAnchor="middle" fill="#c4d73d" fontFamily="Orbitron" fontWeight="800" fontSize="15">24/7</text>
      </svg>
      <div>
        <p className="text-sm text-white/70">Ahora mismo en {negocio.ciudad.split(',')[0]}</p>
        <p className="font-display text-3xl font-extrabold text-lima sm:text-4xl">
          {hhmm} <span className="text-lg font-semibold text-white/80">{resto.join(' ')}</span>
        </p>
        <p className="mt-1 font-semibold text-white">Estamos abiertos. Siempre.</p>
      </div>
    </div>
  );
}

// ---------- Secciones ----------
function Header() {
  const [solido, setSolido] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => { const f = () => setSolido(window.scrollY > 30); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors ${solido || menu ? 'bg-tinta/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" aria-label="1MR Fitness, inicio"><img src={negocio.logo} alt="1MR Fitness" width={250} height={105} className="h-9 w-auto md:h-11" /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-8 text-white/85">{nav.map((n) => <li key={n.href}><a className="hover:text-lima" href={n.href}>{n.label}</a></li>)}</ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={negocio.telefonoLink} className="hidden items-center gap-2 text-white/85 hover:text-lima md:inline-flex"><IconoTel className="size-4" />{negocio.telefono}</a>
          <a href={wa('Hola, quiero inscribirme en 1MR Fitness.')} target="_blank" rel="noopener noreferrer" className="btn-lima hidden !py-2 sm:inline-flex">Inscribirme</a>
          <button type="button" className="inline-flex size-11 items-center justify-center text-white lg:hidden" aria-expanded={menu} aria-label={menu ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenu(!menu)}>
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{menu ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
          </button>
        </div>
      </div>
      {menu && (
        <nav aria-label="Menú" className="border-t border-white/10 bg-tinta lg:hidden">
          <ul className="contenedor flex flex-col py-4">{nav.map((n) => <li key={n.href}><a onClick={() => setMenu(false)} className="block py-3 text-xl text-white" href={n.href}>{n.label}</a></li>)}</ul>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-tinta pb-16 pt-28 text-white md:pb-24 md:pt-36">
      <img src={hero.imagen} alt={hero.alt} width={1920} height={1440} fetchPriority="high" className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-[70%_center] grayscale contrast-125 md:w-[64%] md:[mask-image:linear-gradient(to_right,transparent,black_35%)]" />
      <div className="absolute inset-0 -z-10 bg-morado/70 mix-blend-multiply" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-tinta via-tinta/75 to-tinta/25 md:bg-gradient-to-r md:from-tinta md:via-tinta/60 md:to-transparent" />
      <div className="contenedor">
        <div className="max-w-xl">
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
            Gym <span className="text-lima">24 horas</span> en Hermosillo
          </h1>
          <p className="mt-5 max-w-lg text-lg text-white/85">{hero.subtitulo}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={wa('Hola, quiero inscribirme en 1MR Fitness.')} target="_blank" rel="noopener noreferrer" className="btn-lima"><IconoWa />Quiero inscribirme</a>
            <a href="#membresias" className="btn-borde">Ver membresías desde $599</a>
          </div>
        </div>
        <div className="mt-12 max-w-md"><Reloj /></div>
      </div>
    </section>
  );
}

function Incluye() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="inc-t">
      <div className="contenedor grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="inc-t" className="font-display text-3xl font-extrabold text-tinta md:text-4xl">{incluye.titulo}</h2>
          <p className="mt-4 max-w-[60ch]">{incluye.texto}</p>
          <dl className="mt-10 space-y-7">
            {incluye.items.map((it) => (
              <div key={it.titulo} className="border-l-4 border-lima pl-5">
                <dt className="text-xl font-semibold text-tinta">{it.titulo}</dt>
                <dd className="mt-1 max-w-[58ch]">{it.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {incluye.fotos.map((f, i) => (
            <li key={f.src} className={i % 2 ? 'translate-y-8' : ''}>
              <img src={f.src} alt={f.alt} width={400} height={400} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Plan({ p }: { p: Membresia }) {
  return (
    <li className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-white/10 py-4 last:border-0">
      <div className="min-w-0">
        <p className="text-lg font-semibold text-white">{p.nombre}</p>
        <p className="text-sm text-white/65">{p.detalle}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-right"><span className="font-display text-2xl font-extrabold text-lima">{p.precio}</span> <span className="text-sm text-white/65">{p.periodo}</span></p>
        <a href={wa(`Hola, me interesa la membresía ${p.nombre} (${p.precio} ${p.periodo}).`)} target="_blank" rel="noopener noreferrer" className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 text-white hover:border-lima hover:text-lima" aria-label={`Pedir información de la membresía ${p.nombre} por WhatsApp`}><IconoWa /></a>
      </div>
    </li>
  );
}

function Membresias() {
  const d = membresias.destacada;
  return (
    <section id="membresias" className="bg-morado py-20 text-white md:py-28" aria-labelledby="mem-t">
      <div className="contenedor">
        <h2 id="mem-t" className="font-display text-3xl font-extrabold md:text-4xl">{membresias.titulo}</h2>
        <p className="mt-3 max-w-2xl text-white/80">{membresias.nota}</p>
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <article className="rounded-3xl bg-lima p-8 text-tinta lg:col-span-5 lg:self-start" aria-labelledby="mem-dest">
            <p className="font-semibold">La más elegida</p>
            <h3 id="mem-dest" className="mt-2 font-display text-4xl font-extrabold">{d.nombre}</h3>
            <p className="mt-3 max-w-[40ch]">{d.detalle}</p>
            <p className="mt-6"><span className="font-display text-6xl font-extrabold">{d.precio}</span> <span className="font-semibold">{d.periodo}</span></p>
            <a href={wa(`Hola, quiero la membresía ${d.nombre} (${d.precio} ${d.periodo}).`)} target="_blank" rel="noopener noreferrer" className="btn-morado mt-8 w-full"><IconoWa />Quiero Citizen</a>
          </article>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            {membresias.grupos.map((g) => (
              <div key={g.titulo}>
                <h3 className="text-sm font-semibold text-lima">{g.titulo}</h3>
                <ul className="mt-2">{g.planes.map((p) => <Plan key={p.nombre} p={p} />)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Promo() {
  return (
    <section className="bg-tinta py-14 text-white" aria-labelledby="promo-t">
      <div className="contenedor flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 id="promo-t" className="font-display text-2xl font-extrabold text-lima md:text-3xl">{promo.titulo}</h2>
          <p className="mt-3 text-white/85">{promo.texto}</p>
          <p className="mt-2 text-sm text-white/60">{promo.pie}</p>
        </div>
        <a href={wa('Hola, quiero participar en el sorteo con la membresía Citizen.')} target="_blank" rel="noopener noreferrer" className="btn-lima shrink-0"><IconoWa />Quiero participar</a>
      </div>
    </section>
  );
}

function Clases() {
  return (
    <section id="clases" className="py-20 md:py-28" aria-labelledby="cls-t">
      <div className="contenedor grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="cls-t" className="font-display text-3xl font-extrabold text-tinta md:text-4xl">{clases.titulo}</h2>
          <p className="mt-4">{clases.texto}</p>
          <a href={wa('Hola, ¿me pasan los horarios de las clases?')} target="_blank" rel="noopener noreferrer" className="btn-morado mt-8"><IconoWa />Consultar horarios</a>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
          {clases.lista.map((c) => (
            <li key={c.nombre} className="flex items-baseline justify-between gap-4 rounded-2xl bg-white px-5 py-4">
              <span className="text-lg font-semibold text-tinta">{c.nombre}</span>
              <span className="text-sm text-grafito/80">{c.dias}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Instalaciones() {
  return (
    <section id="instalaciones" className="bg-lavanda-2 py-20 md:py-28" aria-labelledby="ins-t">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 id="ins-t" className="font-display text-3xl font-extrabold text-tinta md:text-4xl">{instalaciones.titulo}</h2>
          <p className="mt-4">{instalaciones.texto}</p>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-4 md:grid-rows-2">
          <img src={instalaciones.grande.src} alt={instalaciones.grande.alt} width={1920} height={1342} loading="lazy" className="h-72 w-full rounded-2xl object-cover md:col-span-2 md:row-span-2 md:h-full" />
          {instalaciones.fotos.slice(0, 4).map((f) => (
            <img key={f.src} src={f.src} alt={f.alt} width={400} height={400} loading="lazy" className="hidden aspect-square w-full rounded-2xl object-cover md:block" />
          ))}
        </div>
        <ul className="mt-3 grid grid-cols-3 gap-3 md:hidden">
          {instalaciones.fotos.slice(0, 3).map((f) => <li key={f.src}><img src={f.src} alt={f.alt} width={400} height={400} loading="lazy" className="aspect-square w-full rounded-xl object-cover" /></li>)}
        </ul>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="eq-t">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="eq-t" className="font-display text-3xl font-extrabold text-tinta md:text-4xl">{equipo.titulo}</h2>
          <p className="mt-4">{equipo.texto}</p>
        </div>
        <img src={equipo.imagen} alt={equipo.alt} width={1080} height={634} loading="lazy" className="w-full rounded-2xl lg:col-span-8" />
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <footer id="contacto" className="bg-tinta pb-28 pt-20 text-white/85 lg:pb-12">
      <div className="contenedor grid gap-12 lg:grid-cols-3">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-white">Visítanos hoy, a la hora que sea</h2>
          <a href={wa('Hola, quiero inscribirme en 1MR Fitness.')} target="_blank" rel="noopener noreferrer" className="btn-lima mt-8"><IconoWa />Escribir por WhatsApp</a>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold text-lima">Dirección</h3>
          <p>{negocio.direccion}</p>
          <a className="inline-block text-white underline decoration-white/40 underline-offset-4 hover:decoration-lima" href={negocio.mapa} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
          <h3 className="pt-4 font-semibold text-lima">Contacto</h3>
          <ul className="space-y-1">
            <li><a className="hover:text-lima" href={negocio.telefonoLink}>{negocio.telefono}</a> (recepción)</li>
            <li><a className="hover:text-lima" href={`https://wa.me/${negocio.whatsapp}`} target="_blank" rel="noopener noreferrer">{negocio.whatsappVisible}</a> (WhatsApp)</li>
            <li><a className="hover:text-lima" href={`mailto:${negocio.email}`}>{negocio.email}</a></li>
          </ul>
          <ul className="flex gap-5 pt-2">{negocio.redes.map((r) => <li key={r.nombre}><a className="hover:text-lima" href={r.url} target="_blank" rel="noopener noreferrer">{r.nombre}</a></li>)}</ul>
        </div>
        <div>
          <h3 className="font-semibold text-lima">Formas de pago</h3>
          <ul className="mt-3 flex flex-wrap gap-2">{pagos.map((p) => <li key={p} className="rounded-full border border-white/15 px-3 py-1 text-sm">{p}</li>)}</ul>
        </div>
      </div>
      <p className="contenedor mt-14 border-t border-white/10 pt-6 text-sm text-white/50">© {new Date().getFullYear()} 1MR Fitness. Gym 24 horas en Hermosillo, Sonora.</p>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-3 border-t border-white/10 bg-tinta/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm lg:hidden">
      <a href={wa('Hola, quiero inscribirme en 1MR Fitness.')} target="_blank" rel="noopener noreferrer" className="btn-lima flex-1"><IconoWa />Inscribirme</a>
      <a href={negocio.telefonoLink} className="btn-borde !px-4" aria-label="Llamar a recepción"><IconoTel /></a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#membresias" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-lima focus:px-4 focus:py-2 focus:text-tinta">Ir a membresías</a>
      <Header />
      <main>
        <Hero />
        <Incluye />
        <Membresias />
        <Promo />
        <Clases />
        <Instalaciones />
        <Equipo />
      </main>
      <Contacto />
      <BarraMovil />
    </>
  );
}
