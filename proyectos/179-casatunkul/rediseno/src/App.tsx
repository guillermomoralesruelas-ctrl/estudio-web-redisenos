import { useState } from 'react';
import { negocio, suites, reseñas, fotos } from './data/content';

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Casa Tunkul',
  description: 'Hotel boutique en el Barrio de Santiago, Mérida. Tres suites con cocineta, piscina y patio central. 9.6/10 en Booking.',
  url: 'https://www.tunkul.mx/',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle 55 No. 559 B entre calles 72 y 74',
    addressLocality: 'Mérida',
    addressRegion: 'Yucatán',
    postalCode: '97000',
    addressCountry: 'MX',
  },
  email: 'jrivera@tunkul.mx',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '9.6',
    reviewCount: '108',
    bestRating: '10',
  },
};

/* ── NavBar ──────────────────────────────────────────────────────────────── */
function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[--color-oscuro]/95 backdrop-blur-sm text-white" aria-label="Navegación principal">
      <div className="contenedor flex items-center justify-between h-16">
        <a href="#inicio" className="font-serif text-xl font-semibold tracking-wide">Casa Tunkul</a>
        <ul className="hidden md:flex items-center gap-7 text-sm font-semibold">
          <li><a href="#suites" className="hover:text-[--color-acento-2] transition">Suites</a></li>
          <li><a href="#espacios" className="hover:text-[--color-acento-2] transition">Espacios</a></li>
          <li><a href="#historia" className="hover:text-[--color-acento-2] transition">Historia</a></li>
          <li><a href="#ubicacion" className="hover:text-[--color-acento-2] transition">Ubicación</a></li>
          <li>
            <a href={negocio.reservar} target="_blank" rel="noopener noreferrer" className="btn-reservar text-sm py-2 px-4">
              Reservar
            </a>
          </li>
        </ul>
        <button
          className="md:hidden p-2"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen(v => !v)}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            {open
              ? <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              : <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[--color-oscuro] border-t border-white/10 px-5 pb-4">
          <ul className="flex flex-col gap-4 pt-4 text-sm font-semibold">
            {[['#suites','Suites'],['#espacios','Espacios'],['#historia','Historia'],['#ubicacion','Ubicación']].map(([h,l]) => (
              <li key={h}><a href={h} onClick={() => setOpen(false)} className="block hover:text-[--color-acento-2]">{l}</a></li>
            ))}
            <li>
              <a href={negocio.reservar} target="_blank" rel="noopener noreferrer" className="btn-reservar text-sm py-2 px-4 w-full justify-center">
                Reservar
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

/* ── Hero ────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <img
        src={fotos.hero}
        alt="Patio central de Casa Tunkul con arquitectura yucateca contemporánea"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[--color-oscuro]/60 via-[--color-oscuro]/30 to-[--color-oscuro]/70" aria-hidden="true"/>
      <div className="relative contenedor pt-20 pb-16 text-white">
        <p className="text-sm font-semibold uppercase tracking-widest text-[--color-acento-2] mb-3">
          {negocio.barrio} · {negocio.ciudad}
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold leading-tight mb-6 max-w-3xl">
          Elegancia íntima en el corazón de Mérida
        </h1>
        <p className="text-lg sm:text-xl text-white/85 max-w-xl mb-8 leading-relaxed">
          Un refugio de arquitectura yucateca, diseño contemporáneo y descanso total en el histórico Barrio de Santiago.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href={negocio.reservar} target="_blank" rel="noopener noreferrer" className="btn-reservar text-base">
            Reservar ahora
          </a>
          <a href="#suites" className="btn-ghost border-white text-white hover:bg-white hover:text-[--color-oscuro] text-base">
            Ver suites
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Reseñas ─────────────────────────────────────────────────────────────── */
function SeccionReseñas() {
  return (
    <section id="resenas" className="bg-[--color-calido] py-16 sm:py-20">
      <div className="contenedor">
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-14 mb-12">
          <div className="text-center shrink-0">
            <p className="text-6xl font-serif font-semibold text-[--color-acento]">9.6</p>
            <p className="text-sm font-semibold text-[--color-suave] uppercase tracking-wide">/10 en Booking</p>
            <p className="text-sm text-[--color-suave] mt-1">108 reseñas verificadas · 77 × 10/10</p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif mb-2">Lo que dicen nuestros huéspedes</h2>
            <p className="text-[--color-suave]">Reseñas verificadas de Booking.com, sin editar.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reseñas.map((r, i) => (
            <blockquote key={i} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3" aria-label={`Nota ${r.nota} de 10`}>
                {Array.from({ length: r.nota }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[--color-acento]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-[--color-tinta] text-sm leading-relaxed mb-4">"{r.texto}"</p>
              <footer className="text-xs text-[--color-suave] font-semibold">{r.autor} · Booking · {r.fecha}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Suites ──────────────────────────────────────────────────────────────── */
function SeccionSuites() {
  const [abierta, setAbierta] = useState<string | null>(null);
  return (
    <section id="suites" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="text-sm font-semibold uppercase tracking-widest text-[--color-acento] mb-2">Tres espacios únicos</p>
        <h2 className="text-4xl sm:text-5xl font-serif mb-4">Elige tu suite</h2>
        <p className="text-[--color-suave] max-w-xl mb-12">
          Cada habitación tiene su propio carácter, con cocineta equipada, baño privado y acceso a las áreas comunes.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {suites.map(s => (
            <div key={s.id} className="rounded-2xl overflow-hidden shadow-md bg-white flex flex-col">
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-serif font-semibold mb-2">{s.nombre}</h3>
                <p className="text-[--color-suave] text-sm leading-relaxed mb-4">{s.descripcion}</p>
                <button
                  className="text-[--color-acento] text-sm font-semibold text-left hover:underline"
                  onClick={() => setAbierta(abierta === s.id ? null : s.id)}
                  aria-expanded={abierta === s.id}
                >
                  {abierta === s.id ? '▲ Ocultar detalles' : '▼ Ver detalles'}
                </button>
                {abierta === s.id && (
                  <ul className="mt-4 space-y-1 text-sm text-[--color-tinta]">
                    {s.detalles.map(d => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="text-[--color-acento] mt-0.5" aria-hidden="true">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto pt-5">
                  <a href={negocio.reservar} target="_blank" rel="noopener noreferrer" className="btn-reservar w-full justify-center text-sm py-2.5">
                    Reservar esta suite
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Espacios ────────────────────────────────────────────────────────────── */
function SeccionEspacios() {
  return (
    <section id="espacios" className="bg-[--color-oscuro] text-white py-16 sm:py-24">
      <div className="contenedor">
        <p className="text-sm font-semibold uppercase tracking-widest text-[--color-acento-2] mb-2">Áreas comunes</p>
        <h2 className="text-4xl sm:text-5xl font-serif mb-12">Un hogar para ti solo</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative rounded-2xl overflow-hidden lg:col-span-2 row-span-1">
            <img src={fotos.patio} alt="Patio central de Casa Tunkul con vegetación y arquitectura yucateca" className="w-full h-72 sm:h-80 object-cover" loading="lazy"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
            <p className="absolute bottom-4 left-4 font-serif text-xl font-semibold">Patio central</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <img src={fotos.room4} alt="Área tranquila de Casa Tunkul con decoración yucateca" className="w-full h-72 sm:h-80 object-cover" loading="lazy"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
            <p className="absolute bottom-4 left-4 font-serif text-xl font-semibold">Piscina & Rooftop</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <img src={fotos.courtyard} alt="Jardín y patio interior de Casa Tunkul" className="w-full h-64 object-cover" loading="lazy"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
            <p className="absolute bottom-4 left-4 font-serif text-xl font-semibold">Jardín</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden sm:col-span-2 lg:col-span-2">
            <img src={fotos.lounge} alt="Sala de lectura y lounge de Casa Tunkul" className="w-full h-64 object-cover" loading="lazy"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
            <p className="absolute bottom-4 left-4 font-serif text-xl font-semibold">Sala de lectura</p>
          </div>
        </div>
        <p className="text-white/70 text-sm mt-6 max-w-xl">
          Piscina, rooftop, jardín central y sala de lectura — todos tuyos durante tu estancia, en un ambiente íntimo de máximo tres habitaciones.
        </p>
      </div>
    </section>
  );
}

/* ── Historia ────────────────────────────────────────────────────────────── */
function SeccionHistoria() {
  return (
    <section id="historia" className="py-16 sm:py-24">
      <div className="contenedor max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[--color-acento] mb-2">Nuestra esencia</p>
        <h2 className="text-4xl sm:text-5xl font-serif mb-8">El nombre lo dice todo</h2>
        <div className="space-y-5 text-[--color-tinta] leading-relaxed text-lg">
          <p>
            <em>Tunkul</em> es un instrumento de percusión maya, y también el título de la canción más conocida de <strong>Víctor Manuel Martínez Herrera</strong>, el poeta y compositor yucateco que vivió en esta casa. Nacido en Cansahcab en 1896, Martínez Herrera escribió aquí parte de su obra, dejando en estas paredes el eco de la trova yucateca.
          </p>
          <p>
            Hoy la propiedad conserva esa herencia cultural y la combina con un diseño contemporáneo: tres suites con cocineta de diseño, baños de lujo y acceso a un patio central, piscina y rooftop. Un refugio íntimo — solo tres habitaciones — en el corazón del Barrio de Santiago.
          </p>
          <p className="text-[--color-suave]">
            A pasos del Parque de Santiago, cafeterías de especialidad, restaurantes de autor y a quince minutos a pie del Paseo de Montejo.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Ubicación ───────────────────────────────────────────────────────────── */
function SeccionUbicacion() {
  return (
    <section id="ubicacion" className="bg-[--color-calido] py-16 sm:py-20">
      <div className="contenedor">
        <p className="text-sm font-semibold uppercase tracking-widest text-[--color-acento] mb-2">Cómo llegar</p>
        <h2 className="text-4xl sm:text-5xl font-serif mb-4">Barrio de Santiago, Mérida</h2>
        <p className="text-[--color-suave] mb-8 max-w-xl">
          Calle 55 No. 559 B entre calles 72 y 74, a 15 minutos a pie del Paseo de Montejo y a 9 minutos del Parque de Santa Lucía.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-md h-72 sm:h-96">
          <iframe
            src={negocio.mapaEmbed}
            title="Mapa de Casa Tunkul en el Barrio de Santiago, Mérida"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ── Contacto ────────────────────────────────────────────────────────────── */
function SeccionContacto() {
  return (
    <section id="contacto" className="py-16 sm:py-24">
      <div className="contenedor max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[--color-acento] mb-2">¿Listo para llegar?</p>
        <h2 className="text-4xl sm:text-5xl font-serif mb-6">Reserva tu estancia</h2>
        <p className="text-[--color-suave] mb-8 leading-relaxed">
          Todas las reservas se confirman directamente en nuestro motor seguro. Para consultas, escríbenos al correo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={negocio.reservar} target="_blank" rel="noopener noreferrer" className="btn-reservar text-base justify-center">
            Reservar en Cloudbeds
          </a>
          <a href={`mailto:${negocio.email}`} className="btn-oscuro text-base justify-center">
            {negocio.email}
          </a>
        </div>
        <p className="text-xs text-[--color-suave] mt-6">{negocio.direccion}</p>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[--color-oscuro] text-white py-10">
      <div className="contenedor flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p className="font-serif text-base text-white font-semibold">Casa Tunkul</p>
        <p>{negocio.direccion}</p>
        <p>© {new Date().getFullYear()} Casa Tunkul</p>
      </div>
    </footer>
  );
}

/* ── Barra móvil ─────────────────────────────────────────────────────────── */
function BarraMovil() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-lg flex" role="navigation" aria-label="Acciones rápidas">
      <a
        href={`mailto:${negocio.email}`}
        className="flex-1 flex flex-col items-center justify-center py-3 text-[--color-suave] hover:text-[--color-tinta] transition"
        aria-label="Enviar correo a Casa Tunkul"
      >
        <svg className="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
        <span className="text-xs font-semibold">Correo</span>
      </a>
      <a
        href={negocio.reservar}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center bg-[--color-acento] text-white font-semibold text-sm py-3 hover:bg-[--color-acento-2] transition"
        aria-label="Reservar en Casa Tunkul"
      >
        Reservar
      </a>
    </div>
  );
}

/* ── Head helpers ────────────────────────────────────────────────────────── */
function HeadMeta() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

/* ── App ─────────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <HeadMeta />
      <NavBar />
      <Hero />
      <SeccionReseñas />
      <SeccionSuites />
      <SeccionEspacios />
      <SeccionHistoria />
      <SeccionUbicacion />
      <SeccionContacto />
      <Footer />
      <BarraMovil />
    </>
  );
}
