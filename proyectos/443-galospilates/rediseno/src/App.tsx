import { useState } from 'react';
import {
  negocio,
  mision,
  vision,
  fotos,
  coaches,
  espacios,
  clases,
  type Coach,
} from './data/content';

/* ── NavBar ─────────────────────────────────────────────────────────────── */
function NavBar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#clases', label: 'Clases' },
    { href: '#espacios', label: 'Espacios' },
    { href: '#equipo', label: 'Equipo' },
    { href: '#mision', label: 'Nosotros' },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-panel/95 backdrop-blur-sm border-b border-calido">
      <div className="contenedor flex h-16 items-center justify-between">
        <a href="#inicio" className="font-head font-bold text-oscuro tracking-wider text-lg" aria-label="Galo's Pilates Studio — inicio">
          GALO'S
        </a>
        <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold tracking-wide text-suave hover:text-oscuro transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={negocio.reservaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-acento py-2 px-5 text-xs"
          >
            Reservar
          </a>
        </nav>
        <button
          className="md:hidden text-oscuro p-2"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-panel border-t border-calido">
          <nav className="contenedor flex flex-col py-4 gap-1" aria-label="Móvil">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-suave hover:text-oscuro py-2 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={negocio.reservaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-acento mt-3 text-center"
              onClick={() => setOpen(false)}
            >
              Crear cuenta y reservar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ── Hero ────────────────────────────────────────────────────────────────── */
function SeccionHero() {
  return (
    <section id="inicio" className="pt-16 bg-oscuro" aria-label="Inicio">
      <div className="contenedor grid lg:grid-cols-2 items-center gap-0 min-h-[90vh]">
        {/* Texto */}
        <div className="py-16 lg:py-20 order-2 lg:order-1">
          <p className="etiqueta text-acento mb-4">Oaxaca · Pilates Studio</p>
          <h1 className="text-4xl sm:text-5xl font-head font-bold text-white leading-tight mb-6">
            Pilates clásico<br />y contemporáneo<br />en Oaxaca
          </h1>
          <p className="text-white/75 leading-relaxed max-w-md mb-8">
            Reservas inteligentes y acompañamiento cercano con cuatro coaches especializados.
            Mat · Reformer · Barré · Sculpt · HIIT · Stretching.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={negocio.reservaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-acento"
            >
              Aparta tu lugar
            </a>
            <a href="#clases" className="btn-contorno-blanco">
              Ver clases
            </a>
          </div>
          <p className="mt-8 text-white/40 text-sm">04 coaches · cupo limitado por clase</p>
        </div>
        {/* Foto del equipo */}
        <div className="order-1 lg:order-2 h-72 sm:h-96 lg:h-full lg:min-h-[90vh] overflow-hidden">
          <img
            src={fotos.heroEquipo}
            alt="Coaches de Galo's Pilates Studio"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

/* ── Clases ──────────────────────────────────────────────────────────────── */
function SeccionClases() {
  return (
    <section id="clases" className="py-16 bg-fondo" aria-label="Clases">
      <div className="contenedor">
        <p className="etiqueta text-center mb-2">Programa</p>
        <h2 className="text-3xl font-head font-bold text-oscuro text-center mb-4">
          10 tipos de clase
        </h2>
        <p className="text-suave text-center max-w-lg mx-auto mb-12">
          De mañana o de noche, de lunes a sábado. Cupos reducidos para que cada coach te vea.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clases.map((c) => (
            <div
              key={c.nombre}
              className="bg-panel border border-calido p-6 hover:border-acento transition-colors"
            >
              <h3 className="font-head font-bold text-oscuro mb-2">{c.nombre}</h3>
              <p className="text-sm text-suave leading-relaxed">{c.descripcion}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={negocio.agendaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-acento"
          >
            Ver agenda en línea
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Espacios ────────────────────────────────────────────────────────────── */
function SeccionEspacios() {
  return (
    <section id="espacios" className="py-16 bg-calido" aria-label="Espacios">
      <div className="contenedor">
        <p className="etiqueta text-center mb-2">El estudio</p>
        <h2 className="text-3xl font-head font-bold text-oscuro text-center mb-12">
          Tres espacios, un método
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {espacios.map((e) => (
            <div key={e.nombre} className="bg-panel p-8 text-center border border-white">
              <span className="text-5xl block mb-4">{e.icono}</span>
              <h3 className="font-head font-bold text-oscuro text-lg mb-3">{e.nombre}</h3>
              <p className="text-sm text-suave leading-relaxed">{e.clases}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Misión / Visión ─────────────────────────────────────────────────────── */
function SeccionMisionVision() {
  return (
    <section id="mision" className="py-16 bg-oscuro" aria-label="Misión y visión">
      <div className="contenedor grid lg:grid-cols-2 gap-12">
        <div>
          <p className="etiqueta text-acento mb-3">Misión</p>
          <h2 className="text-2xl font-head font-bold text-white leading-snug mb-5">
            {mision.titulo}
          </h2>
          <p className="text-white/65 leading-relaxed">{mision.texto}</p>
        </div>
        <div>
          <p className="etiqueta text-acento mb-3">Visión</p>
          <h2 className="text-2xl font-head font-bold text-white leading-snug mb-5">
            {vision.titulo}
          </h2>
          <p className="text-white/65 leading-relaxed">{vision.texto}</p>
        </div>
      </div>
    </section>
  );
}

/* ── Tarjeta coach ───────────────────────────────────────────────────────── */
function TarjetaCoach({ c }: { c: Coach }) {
  const [verInfo, setVerInfo] = useState(false);
  return (
    <article className="bg-panel" aria-label={c.nombre}>
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={verInfo ? c.info : c.foto}
          alt={c.nombre}
          className="w-full h-full object-cover object-top transition-opacity duration-300"
        />
        <button
          onClick={() => setVerInfo(!verInfo)}
          className="absolute bottom-4 right-4 bg-panel/90 backdrop-blur-sm text-oscuro text-xs font-semibold px-4 py-2 hover:bg-acento hover:text-white transition-colors"
          aria-label={verInfo ? 'Ver foto' : 'Ver info'}
        >
          {verInfo ? 'Ver foto' : 'Ver info'}
        </button>
      </div>
      <div className="p-5">
        <h3 className="font-head font-bold text-oscuro text-lg">{c.nombre}</h3>
        <p className="text-xs text-acento font-semibold tracking-wide mt-0.5 mb-2">
          {c.especialidad}
        </p>
        <p className="text-xs text-suave leading-relaxed">{c.clases}</p>
      </div>
    </article>
  );
}

function SeccionEquipo() {
  return (
    <section id="equipo" className="py-16 bg-fondo" aria-label="Equipo">
      <div className="contenedor">
        <p className="etiqueta text-center mb-2">Equipo Galo's</p>
        <h2 className="text-3xl font-head font-bold text-oscuro text-center mb-4">
          04 coaches
        </h2>
        <p className="text-suave text-center max-w-md mx-auto mb-12">
          Cada clase es dirigida por un coach especializado. Toca "Ver info" para conocer su formación.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((c) => (
            <TarjetaCoach key={c.nombre} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Reservar ────────────────────────────────────────────────────────────── */
function SeccionReservar() {
  return (
    <section className="py-16 bg-acento" aria-label="Reservar">
      <div className="contenedor text-center">
        <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-3">
          Cupo limitado
        </p>
        <h2 className="text-3xl font-head font-bold text-white mb-4">
          Aparta tu lugar ahora
        </h2>
        <p className="text-white/80 max-w-md mx-auto mb-8 leading-relaxed">
          Crea tu cuenta para ver la agenda semanal, elegir clase y coach, y reservar tu lugar con un solo clic.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={negocio.reservaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-acento px-8 py-3 text-sm font-semibold tracking-wide uppercase hover:bg-calido transition-colors"
          >
            Crear cuenta
          </a>
          <a
            href={negocio.loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-3 text-sm font-semibold tracking-wide uppercase hover:bg-white hover:text-acento transition-colors"
          >
            Ya tengo cuenta
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-oscuro text-white/50 text-sm">
      <div className="contenedor py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-head font-bold text-white text-lg tracking-wider">GALO'S</p>
          <p className="text-xs mt-1">Pilates Studio · {negocio.ciudad}</p>
        </div>
        <div className="flex gap-6 text-xs">
          <a href="#clases" className="hover:text-white transition-colors">Clases</a>
          <a href="#espacios" className="hover:text-white transition-colors">Espacios</a>
          <a href="#equipo" className="hover:text-white transition-colors">Equipo</a>
          <a href="#mision" className="hover:text-white transition-colors">Nosotros</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="contenedor py-3 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Galo's Pilates Studio · {negocio.ciudad}
        </div>
      </div>
    </footer>
  );
}

/* ── Barra móvil ─────────────────────────────────────────────────────────── */
function BarraMovil() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 border-t border-calido bg-panel">
      <a
        href={negocio.loginUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 py-3 text-suave hover:text-oscuro hover:bg-calido transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span className="text-xs font-semibold">Mi cuenta</span>
      </a>
      <a
        href={negocio.reservaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 py-3 bg-acento text-white hover:bg-acento-claro transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs font-semibold">Reservar</span>
      </a>
    </div>
  );
}

/* ── App ─────────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <SeccionHero />
        <SeccionClases />
        <SeccionEspacios />
        <SeccionEquipo />
        <SeccionMisionVision />
        <SeccionReservar />
      </main>
      <Footer />
      <BarraMovil />
    </>
  );
}
