import { useState } from 'react';
import { negocio, wa, foto, habitaciones, servicios, ubicacion } from './data/content';

const WA_GENERAL = wa('Hola, me interesa información del Fulton Hotel. ¿Pueden ayudarme?');

// ── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#habitaciones', label: 'Habitaciones' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#ubicacion', label: 'Ubicación' },
    { href: '#contacto', label: 'Contacto' },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[--color-oscuro]/95 backdrop-blur-sm shadow-lg">
      <div className="contenedor flex h-16 items-center justify-between">
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="font-serif text-lg font-semibold text-white tracking-wide">Fulton Hotel</span>
          <span className="text-[0.65rem] text-[--color-acento] uppercase tracking-widest">Business Luxury</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-white/80">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-[--color-acento] transition">{l.label}</a>
          ))}
          <a href={negocio.reservas} target="_blank" rel="noopener noreferrer"
            className="btn-acento !py-2 !px-4 text-sm">
            Reservar
          </a>
        </nav>
        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Menú">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[--color-oscuro] border-t border-white/10 px-5 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-white/80 font-semibold hover:text-[--color-acento] transition"
              onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href={negocio.reservas} target="_blank" rel="noopener noreferrer" className="btn-acento justify-center">
            Reservar ahora
          </a>
        </div>
      )}
    </header>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={foto('lobby.webp')}
        alt="Lobby Fulton Hotel Guadalajara"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[--color-oscuro]/70" />
      <div className="relative z-10 contenedor text-center text-white py-32">
        <p className="text-[--color-acento] uppercase tracking-widest text-sm font-semibold mb-4">
          Guadalajara · Zona Financiera Sao Paulo
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Business Luxury Hotel
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          El hotel de negocios más completo de Guadalajara. Sala de Juntas, Starbucks, Rooftop y habitaciones diseñadas para el ejecutivo moderno.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={negocio.reservas} target="_blank" rel="noopener noreferrer" className="btn-acento text-base px-8 py-4">
            Ver disponibilidad
          </a>
          <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className="btn-wa text-base px-8 py-4">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.532 5.845L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.376l-.36-.213-3.727.888.923-3.618-.235-.372A9.818 9.818 0 012.182 12c0-5.424 4.394-9.818 9.818-9.818 5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z"/></svg>
            Consultar por WhatsApp
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

// ── Habitaciones ──────────────────────────────────────────────────────────────
function Habitaciones() {
  const [abierta, setAbierta] = useState<string | null>(null);
  return (
    <section id="habitaciones" className="py-20 bg-[--color-arena]">
      <div className="contenedor">
        <p className="text-[--color-acento] uppercase tracking-widest text-sm font-semibold text-center mb-2">Alojamiento</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[--color-oscuro] mb-4">Nuestras habitaciones</h2>
        <p className="text-center text-[--color-suave] max-w-xl mx-auto mb-12">
          Cuatro tipos de habitación diseñadas para el descanso y la productividad, en el corazón de la Zona Financiera de Guadalajara.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {habitaciones.map(h => (
            <article key={h.id} className="bg-panel rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img src={h.img} alt={h.imgAlt} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-lg font-semibold text-[--color-oscuro] mb-1">{h.titulo}</h3>
                <p className="text-sm text-[--color-acento] font-semibold mb-3">{h.subtitulo}</p>
                <button
                  onClick={() => setAbierta(abierta === h.id ? null : h.id)}
                  className="text-sm text-[--color-suave] flex items-center gap-1 hover:text-[--color-acento] transition mb-3"
                  aria-expanded={abierta === h.id}>
                  {abierta === h.id ? 'Ver menos' : 'Ver más'}
                  <svg className={`w-4 h-4 transition-transform ${abierta === h.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {abierta === h.id && (
                  <div className="mb-4">
                    <p className="text-sm text-[--color-suave] mb-3">{h.descripcion}</p>
                    <ul className="space-y-1">
                      {h.detalles.map(d => (
                        <li key={d} className="flex items-center gap-2 text-sm text-tinta">
                          <span className="w-1.5 h-1.5 rounded-full bg-[--color-acento] shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-auto flex flex-col gap-2">
                  <a href={negocio.reservas} target="_blank" rel="noopener noreferrer" className="btn-oscuro justify-center text-sm !py-2.5">
                    Reservar
                  </a>
                  <a href={wa(h.msgWA)} target="_blank" rel="noopener noreferrer" className="btn-wa justify-center text-sm !py-2.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.532 5.845L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.376l-.36-.213-3.727.888.923-3.618-.235-.372A9.818 9.818 0 012.182 12c0-5.424 4.394-9.818 9.818-9.818 5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z"/></svg>
                    Consultar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Servicios ─────────────────────────────────────────────────────────────────
function Servicios() {
  const [abierto, setAbierto] = useState<string | null>(null);
  return (
    <section id="servicios" className="py-20 bg-[--color-panel]">
      <div className="contenedor">
        <p className="text-[--color-acento] uppercase tracking-widest text-sm font-semibold text-center mb-2">Instalaciones</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[--color-oscuro] mb-4">Servicios del hotel</h2>
        <p className="text-center text-[--color-suave] max-w-xl mx-auto mb-12">
          Todo lo que necesitas en un solo lugar: desde reuniones de negocios hasta gastronomía de altura.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {servicios.map(s => (
            <article key={s.id} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[--color-arena] flex flex-col">
              <div className="relative h-52 overflow-hidden">
                <img src={s.img} alt={s.imgAlt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-[--color-oscuro]/40" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-xl font-semibold text-white">{s.titulo}</h3>
                  <p className="text-[--color-acento] text-sm font-semibold">{s.subtitulo}</p>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <button
                  onClick={() => setAbierto(abierto === s.id ? null : s.id)}
                  className="text-sm text-[--color-suave] flex items-center gap-1 hover:text-[--color-acento] transition mb-3"
                  aria-expanded={abierto === s.id}>
                  {abierto === s.id ? 'Ver menos' : 'Ver detalles'}
                  <svg className={`w-4 h-4 transition-transform ${abierto === s.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {abierto === s.id && (
                  <div className="mb-4">
                    <p className="text-sm text-[--color-suave] mb-3">{s.descripcion}</p>
                    <ul className="space-y-1">
                      {s.detalles.map(d => (
                        <li key={d} className="flex items-center gap-2 text-sm text-tinta">
                          <span className="w-1.5 h-1.5 rounded-full bg-[--color-acento] shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-auto">
                  <a href={wa(s.msgWA)} target="_blank" rel="noopener noreferrer" className="btn-wa justify-center w-full text-sm !py-2.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.532 5.845L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.376l-.36-.213-3.727.888.923-3.618-.235-.372A9.818 9.818 0 012.182 12c0-5.424 4.394-9.818 9.818-9.818 5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z"/></svg>
                    Consultar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Ubicación ─────────────────────────────────────────────────────────────────
function Ubicacion() {
  return (
    <section id="ubicacion" className="py-20 bg-[--color-oscuro] text-white">
      <div className="contenedor">
        <p className="text-[--color-acento] uppercase tracking-widest text-sm font-semibold text-center mb-2">Localización</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Ubicación estratégica</h2>
        <p className="text-center text-white/70 max-w-xl mx-auto mb-12">
          En la Zona Financiera Sao Paulo de Guadalajara, rodeado de los principales centros de negocios, hospitales y servicios de la ciudad.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ubicacion.map(u => (
            <div key={u.titulo} className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition">
              <div className="text-3xl mb-3">{u.icono}</div>
              <h3 className="font-serif text-lg font-semibold mb-2">{u.titulo}</h3>
              <p className="text-sm text-white/70">{u.texto}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden h-40">
            <img src={foto('zona-financiera.webp')} alt="Zona Financiera Sao Paulo Guadalajara" className="w-full h-full object-cover opacity-80" loading="lazy" />
          </div>
          <div className="rounded-xl overflow-hidden h-40">
            <img src={foto('vias-de-acceso.webp')} alt="Vías de acceso al Fulton Hotel" className="w-full h-full object-cover opacity-80" loading="lazy" />
          </div>
          <div className="rounded-xl overflow-hidden h-40">
            <img src={foto('aeropuerto.webp')} alt="Aeropuerto de Guadalajara a 27 km" className="w-full h-full object-cover opacity-80" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Contacto ──────────────────────────────────────────────────────────────────
function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-[--color-arena]">
      <div className="contenedor">
        <p className="text-[--color-acento] uppercase tracking-widest text-sm font-semibold text-center mb-2">Reservaciones</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[--color-oscuro] mb-4">Reserva tu estancia</h2>
        <p className="text-center text-[--color-suave] max-w-xl mx-auto mb-12">
          Escríbenos por WhatsApp para consultas rápidas o reserva directamente en nuestro sistema de reservaciones.
        </p>
        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-8">
          <div className="bg-panel rounded-2xl p-7 shadow-sm space-y-4">
            <h3 className="font-serif text-xl font-semibold text-[--color-oscuro]">Datos de contacto</h3>
            <div className="space-y-3 text-sm text-[--color-suave]">
              <div className="flex items-start gap-3">
                <span className="text-[--color-acento] mt-0.5">📍</span>
                <span>{negocio.direccion}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[--color-acento]">📞</span>
                <a href={`tel:${negocio.telefono.replace(/\s/g, '')}`} className="hover:text-[--color-acento] transition">{negocio.telefono}</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[--color-acento]">✉️</span>
                <a href={`mailto:${negocio.email}`} className="hover:text-[--color-acento] transition">{negocio.email}</a>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a href={negocio.facebook} target="_blank" rel="noopener noreferrer"
                className="text-[--color-suave] hover:text-[--color-acento] transition text-sm font-semibold">
                Facebook
              </a>
              <span className="text-[--color-suave]">·</span>
              <a href={negocio.instagram} target="_blank" rel="noopener noreferrer"
                className="text-[--color-suave] hover:text-[--color-acento] transition text-sm font-semibold">
                Instagram
              </a>
            </div>
          </div>
          <div className="bg-panel rounded-2xl p-7 shadow-sm space-y-4">
            <h3 className="font-serif text-xl font-semibold text-[--color-oscuro]">Reservar ahora</h3>
            <p className="text-sm text-[--color-suave]">
              Consulta disponibilidad y tarifas en tiempo real a través de nuestro sistema de reservaciones.
            </p>
            <a href={negocio.reservas} target="_blank" rel="noopener noreferrer"
              className="btn-oscuro w-full justify-center">
              Ver disponibilidad
            </a>
            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer"
              className="btn-wa w-full justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.532 5.845L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.376l-.36-.213-3.727.888.923-3.618-.235-.372A9.818 9.818 0 012.182 12c0-5.424 4.394-9.818 9.818-9.818 5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z"/></svg>
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[--color-oscuro] text-white/60 py-8">
      <div className="contenedor flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <div>
          <span className="font-serif text-white font-semibold">Fulton Hotel</span>
          <span className="text-[--color-acento] ml-2">Business Luxury Hotel</span>
        </div>
        <p>{negocio.direccion}</p>
        <p>© {new Date().getFullYear()} Fulton Hotel</p>
      </div>
    </footer>
  );
}

// ── Barra móvil fija ──────────────────────────────────────────────────────────
function BarraMovil() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[--color-oscuro] border-t border-white/10 flex">
      <a href={negocio.reservas} target="_blank" rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[--color-acento] font-semibold text-sm">
        Reservar
      </a>
      <div className="w-px bg-white/10" />
      <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[#25D366] font-semibold text-sm">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.532 5.845L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.376l-.36-.213-3.727.888.923-3.618-.235-.372A9.818 9.818 0 012.182 12c0-5.424 4.394-9.818 9.818-9.818 5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z"/></svg>
        WhatsApp
      </a>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Habitaciones />
        <Servicios />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
      <BarraMovil />
    </>
  );
}
