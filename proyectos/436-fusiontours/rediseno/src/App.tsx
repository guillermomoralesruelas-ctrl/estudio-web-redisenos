import { useState } from 'react';
import {
  negocio,
  wa,
  foto,
  stats,
  categorias,
  actividades,
  faqs,
  clientes,
  type Categoria,
} from './data/content';

// ── Iconos SVG inline ────────────────────────────────────────────────────────

function IconCompass() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.988-1.31A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.952 7.952 0 01-4.341-1.285l-.31-.184-3.213.843.857-3.125-.202-.322A7.951 7.951 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
    </svg>
  );
}

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function IconTwitter() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function IconCategory({ id }: { id: string }) {
  if (id === 'cultura') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-8 w-8">
      <path d="M3 21h18M9 21V9m6 12V9M3 9l9-6 9 6"/>
    </svg>
  );
  if (id === 'naturaleza') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-8 w-8">
      <path d="M17 8C8 10 5.9 16.17 3.82 22M9.09 9.91C5.78 14.63 4.32 19.4 2 22M14.77 15.26C12.44 17.89 10.68 20.49 8.69 22M12 22V12c0-5.52 4.9-10 12-10-1.62 8.41-4.93 15-12 20z"/>
    </svg>
  );
  if (id === 'mar') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-8 w-8">
      <path d="M2 12c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0M2 18c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0M2 6c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0"/>
    </svg>
  );
  if (id === 'yates') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-8 w-8">
      <path d="M12 3v13M5 21h14M12 3L6 14h12L12 3z"/>
    </svg>
  );
  // aventura
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-8 w-8">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}

function IconChevron({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      className={`h-5 w-5 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

// ── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-marino/95 backdrop-blur-sm shadow-sm">
      <div className="contenedor flex h-16 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 text-white font-heading text-xl font-bold tracking-wide">
          <IconCompass />
          <span>Fusion Tours</span>
        </a>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#tours" className="font-sans text-sm font-medium text-white/80 hover:text-white transition-colors">Tours</a>
          <a href="#actividades" className="font-sans text-sm font-medium text-white/80 hover:text-white transition-colors">Actividades</a>
          <a href="#nosotros" className="font-sans text-sm font-medium text-white/80 hover:text-white transition-colors">Nosotros</a>
          <a href={wa('Hola, quiero información sobre sus tours en la Riviera Maya')} target="_blank" rel="noopener noreferrer" className="btn-primario text-sm py-2 px-4">
            <IconWhatsApp /> WhatsApp
          </a>
        </div>
        {/* Mobile hamburger */}
        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-marino border-t border-white/10">
          <div className="contenedor flex flex-col py-4 gap-4">
            <a href="#tours" className="font-sans text-sm font-medium text-white/80" onClick={() => setOpen(false)}>Tours</a>
            <a href="#actividades" className="font-sans text-sm font-medium text-white/80" onClick={() => setOpen(false)}>Actividades</a>
            <a href="#nosotros" className="font-sans text-sm font-medium text-white/80" onClick={() => setOpen(false)}>Nosotros</a>
            <a href={wa('Hola, quiero información sobre sus tours en la Riviera Maya')} target="_blank" rel="noopener noreferrer" className="btn-wa self-start text-sm py-2 px-4">
              <IconWhatsApp /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={foto('uploads/2025/10/Sian-Kaan-1024x682.jpg')}
        alt="Sian Ka'an — laguna y manglares del Caribe mexicano"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-marino/65" />
      <div className="relative z-10 contenedor text-center text-white py-32">
        <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-acento">
          Playa del Carmen · Quintana Roo
        </p>
        <h1 className="font-heading text-5xl font-bold uppercase leading-none tracking-tight sm:text-7xl lg:text-8xl mb-6">
          Vive la experiencia<br />del Caribe Mexicano
        </h1>
        <p className="mx-auto max-w-2xl font-sans text-lg text-white/85 mb-10">
          Más de 40 tours y actividades en la Riviera Maya. Guías certificados, reserva fácil, aventura garantizada.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#tours" className="btn-primario">Ver Tours</a>
          <a href="#actividades" className="btn-secundario">Ver Actividades</a>
        </div>
      </div>
    </section>
  );
}

// ── Stats ────────────────────────────────────────────────────────────────────

function Stats() {
  return (
    <section className="bg-marino py-16">
      <div className="contenedor">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 text-center text-white">
          {stats.map((s) => (
            <div key={s.numero}>
              <p className="font-heading text-6xl font-bold text-acento">{s.numero}</p>
              <p className="mt-2 font-sans text-sm text-white/70">{s.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Tours + Elemento Memorable ───────────────────────────────────────────────

function TourCard({ tour, waMsg }: { tour: { nombre: string; descripcion: string; imagen: string; alt: string; categoria: string }; waMsg: string }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md">
      <div className="h-52 overflow-hidden">
        <img
          src={tour.imagen}
          alt={tour.alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="badge mb-3">{tour.categoria}</span>
        <h3 className="font-heading text-xl font-bold text-marino uppercase mb-2">{tour.nombre}</h3>
        <p className="font-sans text-sm text-tinta/70 mb-4 flex-1">{tour.descripcion}</p>
        <a
          href={wa(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa self-start text-xs py-2 px-4"
        >
          <IconWhatsApp /> Cotizar
        </a>
      </div>
    </div>
  );
}

function ToursSection() {
  const [activa, setActiva] = useState<string | null>(null);

  const categoriaActiva: Categoria | undefined = categorias.find((c) => c.id === activa);

  return (
    <section id="tours" className="py-20 bg-arena">
      <div className="contenedor">
        <p className="font-sans text-sm font-semibold uppercase tracking-widest text-acento mb-2">Catálogo</p>
        <h2 className="font-heading text-5xl font-bold uppercase text-marino mb-4">Descubre la Riviera Maya</h2>
        <p className="font-sans text-base text-tinta/70 mb-12 max-w-xl">
          28 tours y actividades verificadas. Elige el tipo de experiencia que buscas y te cotizamos al instante.
        </p>

        {/* Selector de aventura */}
        <div className="mb-4">
          <p className="font-heading text-2xl font-bold uppercase text-marino mb-6">¿Qué tipo de aventura buscas?</p>
          <div className="flex flex-wrap gap-3 mb-10">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiva(activa === cat.id ? null : cat.id)}
                className={[
                  'flex items-center gap-3 rounded-2xl border-2 px-5 py-3 font-heading text-base font-bold uppercase tracking-wide transition-all',
                  activa === cat.id
                    ? 'border-acento bg-acento text-white shadow-md'
                    : 'border-marino/20 bg-white text-marino hover:border-acento hover:text-acento',
                ].join(' ')}
              >
                <span className={activa === cat.id ? 'text-white' : 'text-acento'}>
                  <IconCategory id={cat.id} />
                </span>
                {cat.etiqueta}
              </button>
            ))}
          </div>
        </div>

        {/* Tours de la categoría seleccionada */}
        {categoriaActiva ? (
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <p className="font-heading text-xl font-bold uppercase text-marino">
                {categoriaActiva.etiqueta} — {categoriaActiva.tours.length} tours disponibles
              </p>
              <a
                href={wa(categoriaActiva.waTexto)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa text-sm py-2 px-5"
              >
                <IconWhatsApp /> Preguntar por {categoriaActiva.etiqueta}
              </a>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoriaActiva.tours.map((tour) => (
                <TourCard
                  key={tour.nombre}
                  tour={tour}
                  waMsg={`Hola, me interesa cotizar el tour "${tour.nombre}". ¿Pueden darme información y disponibilidad?`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Sin selección: muestra 6 destacados */
          <div>
            <p className="font-sans text-sm text-tinta/60 mb-6">Selecciona una categoría para filtrar — o mira algunos destacados:</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                categorias[1].tours[0], // Sian Ka'an
                categorias[0].tours[1], // Chichen Itzá
                categorias[3].tours[0], // Yate Taboó
                categorias[4].tours[0], // ATVs Boca del Puma
                categorias[2].tours[0], // Buceo Discovery
                categorias[1].tours[1], // Holbox
              ].map((tour) => (
                <TourCard
                  key={tour.nombre}
                  tour={tour}
                  waMsg={`Hola, me interesa cotizar el tour "${tour.nombre}". ¿Pueden darme información y disponibilidad?`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ── Actividades ───────────────────────────────────────────────────────────────

function ActividadesSection() {
  return (
    <section id="actividades" className="py-20 bg-white">
      <div className="contenedor">
        <p className="font-sans text-sm font-semibold uppercase tracking-widest text-selva mb-2">Actividades</p>
        <h2 className="font-heading text-5xl font-bold uppercase text-marino mb-4">Actividades imperdibles</h2>
        <p className="font-sans text-base text-tinta/70 mb-12 max-w-xl">
          Disfruta de experiencias inolvidables en lugares como Xcaret, Xel-Ha y Holbox.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {actividades.map((act) => (
            <div key={act.nombre} className="group flex flex-col overflow-hidden rounded-2xl bg-arena shadow-sm border border-tinta/5">
              <div className="h-44 overflow-hidden">
                <img
                  src={act.imagen}
                  alt={act.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <span className="badge mb-2 bg-selva/10 text-selva">{act.badge}</span>
                <h3 className="font-heading text-lg font-bold uppercase text-marino mb-1">{act.nombre}</h3>
                <p className="font-sans text-xs text-tinta/65 mb-4 flex-1">{act.descripcion}</p>
                <a
                  href={wa(`Hola, me interesa cotizar la actividad "${act.nombre}". ¿Pueden darme información?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa self-start text-xs py-2 px-4"
                >
                  <IconWhatsApp /> Cotizar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Nosotros ──────────────────────────────────────────────────────────────────

function NosotrosSection() {
  return (
    <section id="nosotros" className="py-20 bg-marino text-white">
      <div className="contenedor">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-acento mb-2">Sobre nosotros</p>
            <h2 className="font-heading text-5xl font-bold uppercase mb-6">Fusion Tours<br />Riviera Maya</h2>
            <p className="font-sans text-base text-white/80 mb-6 leading-relaxed">
              Fusion Tours Riviera Maya nació con la misión de ofrecer experiencias auténticas, seguras y llenas de emoción. {negocio.descripcion}
            </p>
            <p className="font-sans text-base text-white/80 mb-10 leading-relaxed">
              {negocio.subDescripcion} Cada tour está verificado y operado por guías certificados que conocen cada rincón de la Riviera Maya.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.numero} className="text-center">
                  <p className="font-heading text-4xl font-bold text-acento">{s.numero}</p>
                  <p className="font-sans text-xs text-white/60 mt-1">{s.texto}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-heading text-xl font-bold uppercase text-white/80 mb-6">Nuestros clientes</p>
            <div className="grid grid-cols-5 gap-3">
              {clientes.map((c) => (
                <div key={c.alt} className="overflow-hidden rounded-xl aspect-square">
                  <img
                    src={c.imagen}
                    alt={c.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-tinta/10 last:border-0">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-heading text-lg font-bold uppercase text-marino">{q}</span>
        <IconChevron open={open} />
      </button>
      {open && (
        <p className="pb-5 font-sans text-sm text-tinta/70 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

function FaqSection() {
  return (
    <section className="py-20 bg-arena">
      <div className="contenedor max-w-3xl">
        <p className="font-sans text-sm font-semibold uppercase tracking-widest text-acento mb-2">Preguntas frecuentes</p>
        <h2 className="font-heading text-5xl font-bold uppercase text-marino mb-12">Lo que más nos preguntan</h2>
        <div>
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Final ─────────────────────────────────────────────────────────────────

function CtaFinal() {
  return (
    <section className="relative py-24 overflow-hidden bg-marino">
      <img
        src={foto('uploads/2025/10/Holbox-1024x682.jpg')}
        alt="Holbox — playa del Caribe mexicano"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        aria-hidden="true"
      />
      <div className="relative z-10 contenedor text-center text-white">
        <h2 className="font-heading text-5xl font-bold uppercase mb-4">¿No sabes por dónde empezar?</h2>
        <p className="font-sans text-lg text-white/80 mb-8 max-w-xl mx-auto">
          Cuéntanos lo que buscas y te armamos la aventura perfecta. Respondemos en minutos.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={wa('Hola, no sé por dónde empezar. ¿Pueden ayudarme a elegir el tour ideal para mi visita a la Riviera Maya?')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
          >
            <IconWhatsApp /> Escribir por WhatsApp
          </a>
          <a href={`mailto:${negocio.email}`} className="btn-secundario">
            Enviar correo
          </a>
        </div>
        <p className="mt-6 font-sans text-sm text-white/50">{negocio.email}</p>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#070E16] text-white/70 py-12">
      <div className="contenedor">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-white font-heading text-xl font-bold mb-4">
              <IconCompass />
              <span>Fusion Tours</span>
            </div>
            <p className="font-sans text-sm leading-relaxed">{negocio.subDescripcion}</p>
            <div className="flex gap-3 mt-5">
              <a href={negocio.facebook} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" aria-label="Facebook"><IconFacebook /></a>
              <a href={negocio.instagram} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" aria-label="Instagram"><IconInstagram /></a>
              <a href={negocio.twitter} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" aria-label="X/Twitter"><IconTwitter /></a>
            </div>
          </div>
          <div>
            <p className="font-heading text-sm font-bold uppercase text-white mb-4">Tours</p>
            <ul className="font-sans text-sm space-y-2">
              <li><a href="#tours" className="hover:text-white transition-colors">Cultura &amp; Historia</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors">Naturaleza &amp; Cenotes</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors">Mar &amp; Buceo</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors">Yates &amp; Veleros</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors">Adrenalina &amp; Aventura</a></li>
            </ul>
          </div>
          <div>
            <p className="font-heading text-sm font-bold uppercase text-white mb-4">Actividades</p>
            <ul className="font-sans text-sm space-y-2">
              <li><a href="#actividades" className="hover:text-white transition-colors">XPLOR DÍA</a></li>
              <li><a href="#actividades" className="hover:text-white transition-colors">Chankanaab Todo Incluido</a></li>
              <li><a href="#actividades" className="hover:text-white transition-colors">Buceo Certificado Cozumel</a></li>
              <li><a href="#actividades" className="hover:text-white transition-colors">Bacalar Plus + Pontón</a></li>
            </ul>
          </div>
          <div>
            <p className="font-heading text-sm font-bold uppercase text-white mb-4">Contacto</p>
            <ul className="font-sans text-sm space-y-2">
              <li>
                <a href={`https://wa.me/${negocio.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: +52 984-218-1414
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${negocio.whatsapp2}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: +52 984-278-5840
                </a>
              </li>
              <li>
                <a href={`mailto:${negocio.email}`} className="hover:text-white transition-colors break-all">{negocio.email}</a>
              </li>
              <li>Playa del Carmen, Quintana Roo</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center font-sans text-xs text-white/40">
          © 2026 Fusion Tours Riviera Maya. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <ToursSection />
        <ActividadesSection />
        <NosotrosSection />
        <FaqSection />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
