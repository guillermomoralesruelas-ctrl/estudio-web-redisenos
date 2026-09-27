import { useState } from 'react';
import {
  negocio,
  wa,
  foto,
  heroImagenes,
  stats,
  empresa,
  razones,
  desarrollos,
  filtros,
  testimonios,
  equipo,
  type Categoria,
} from './data/content';

// JSON-LD RealEstateAgent
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: negocio.nombre,
  url: 'https://grupopacificoescondido.com/',
  telephone: negocio.telefono,
  email: negocio.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: negocio.direccion,
    addressLocality: 'Puerto Escondido',
    addressRegion: 'Oaxaca',
    addressCountry: 'MX',
  },
  sameAs: [negocio.facebook, negocio.instagram, negocio.tiktok],
  openingHours: 'Mo-Fr 09:00-14:00,16:00-19:00',
};

// Iconos SVG inline
const IconoWhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const IconoTelefono = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 10.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.16 17z" />
  </svg>
);

const IconoMapa = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconoEmail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconoReloj = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconoFacebook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const IconoInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const IconoCheckmark = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const WA_GENERAL = wa('Hola, vi su sitio web y me interesa conocer sus desarrollos en Puerto Escondido.');

function waDesarrollo(nombre: string, ubicacion: string) {
  return wa(
    `Hola, me interesa el desarrollo ${nombre} en ${ubicacion}. ¿Pueden darme más información?`
  );
}

export default function App() {
  const [filtroActivo, setFiltroActivo] = useState<Categoria>('todos');
  const [heroActual, setHeroActual] = useState(0);

  const desarrollosFiltrados =
    filtroActivo === 'todos'
      ? desarrollos
      : desarrollos.filter((d) => d.categoria === filtroActivo);

  // Cambiar hero cada 4 segundos
  const avanzarHero = () => setHeroActual((prev) => (prev + 1) % heroImagenes.length);
  const retrocederHero = () =>
    setHeroActual((prev) => (prev - 1 + heroImagenes.length) % heroImagenes.length);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── NAV ─────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="contenedor flex h-16 items-center justify-between" aria-label="Navegación principal">
          <a href="#inicio" className="flex items-center gap-2">
            <img
              src={foto('uploads/2024/10/logo.png')}
              alt="Grupo Pacífico Escondido"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
          </a>
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium" role="list">
            <li><a href="#desarrollos" className="hover:text-[--color-acento] transition-colors">Desarrollos</a></li>
            <li><a href="#nosotros" className="hover:text-[--color-acento] transition-colors">Nosotros</a></li>
            <li><a href="#testimonios" className="hover:text-[--color-acento] transition-colors">Testimonios</a></li>
            <li><a href="#equipo" className="hover:text-[--color-acento] transition-colors">Equipo</a></li>
            <li><a href="#contacto" className="hover:text-[--color-acento] transition-colors">Contacto</a></li>
          </ul>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primario hidden sm:inline-flex"
          >
            <IconoWhatsApp />
            Contáctanos
          </a>
        </nav>
      </header>

      <main id="inicio" className="pt-16">

        {/* ── HERO ────────────────────────────────────────────────── */}
        <section
          className="relative min-h-[90vh] flex items-center overflow-hidden"
          aria-label="Portada"
        >
          {/* Imágenes de fondo */}
          {heroImagenes.map((imagen, i) => (
            <img
              key={imagen.src}
              src={imagen.src}
              alt={imagen.alt}
              width={1920}
              height={1080}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              style={{ opacity: i === heroActual ? 1 : 0 }}
              aria-hidden={i !== heroActual}
            />
          ))}

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-[--color-marino]/60" aria-hidden="true" />

          {/* Contenido */}
          <div className="contenedor relative z-10 py-20 text-white">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[--color-acento]">
                Puerto Escondido, Oaxaca
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Haz tuyo Puerto Escondido con{' '}
                <span className="text-[--color-acento]">Grupo Pacífico</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl">
                Tenemos el terreno residencial o comercial ideal para ti. Alta plusvalía,
                financiamiento directo y escritura pública garantizada.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#desarrollos" className="btn-primario">
                  Ver desarrollos
                </a>
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[--color-marino] transition-colors"
                >
                  <IconoWhatsApp />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="mt-16 flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.etiqueta} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-[--color-acento]">{s.valor}</p>
                  <p className="text-sm text-white/80 mt-1">{s.etiqueta}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Controles de carrusel */}
          <button
            onClick={retrocederHero}
            aria-label="Imagen anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 hover:bg-white/40 p-2 text-white transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={avanzarHero}
            aria-label="Imagen siguiente"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 hover:bg-white/40 p-2 text-white transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2" role="tablist" aria-label="Selector de imagen">
            {heroImagenes.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === heroActual}
                aria-label={`Imagen ${i + 1}`}
                onClick={() => setHeroActual(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === heroActual ? '2rem' : '0.5rem',
                  backgroundColor: i === heroActual ? 'var(--color-acento)' : 'rgba(255,255,255,0.5)',
                }}
              />
            ))}
          </div>
        </section>

        {/* ── DESARROLLOS ─────────────────────────────────────────── */}
        <section id="desarrollos" className="py-20 bg-[--color-fondo]" aria-labelledby="titulo-desarrollos">
          <div className="contenedor">
            <div className="text-center mb-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-[--color-acento]">
                Nuestros proyectos
              </p>
            </div>
            <h2 id="titulo-desarrollos" className="text-3xl sm:text-4xl font-bold text-center text-[--color-marino] mb-4">
              ¿Qué tipo de lote buscas?
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
              Conoce nuestra variedad de lotes residenciales y comerciales para empezar tu
              patrimonio de ensueño en la costa oaxaqueña.
            </p>

            {/* Filtros */}
            <div
              className="flex flex-wrap justify-center gap-3 mb-10"
              role="group"
              aria-label="Filtrar desarrollos por tipo"
            >
              {filtros.map((f) => (
                <button
                  key={f.valor}
                  onClick={() => setFiltroActivo(f.valor)}
                  aria-pressed={filtroActivo === f.valor}
                  className="rounded-full px-5 py-2 text-sm font-semibold border-2 transition-colors duration-200"
                  style={
                    filtroActivo === f.valor
                      ? {
                          backgroundColor: 'var(--color-marino)',
                          borderColor: 'var(--color-marino)',
                          color: '#fff',
                        }
                      : {
                          backgroundColor: 'transparent',
                          borderColor: 'var(--color-marino)',
                          color: 'var(--color-marino)',
                        }
                  }
                >
                  {f.etiqueta}
                </button>
              ))}
            </div>

            {/* Contador */}
            <p className="text-center text-sm text-gray-500 mb-8" aria-live="polite">
              {desarrollosFiltrados.length} desarrollo{desarrollosFiltrados.length !== 1 ? 's' : ''} disponible{desarrollosFiltrados.length !== 1 ? 's' : ''}
            </p>

            {/* Grid de tarjetas */}
            <div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              role="list"
              aria-label="Desarrollos disponibles"
            >
              {desarrollosFiltrados.map((d) => (
                <article
                  key={d.nombre}
                  className="tarjeta-desarrollo"
                  role="listitem"
                >
                  <div className="relative">
                    <img
                      src={d.img}
                      alt={d.imgAlt}
                      width={488}
                      height={326}
                      loading="lazy"
                      className="w-full h-52 object-cover"
                    />
                    {d.estado === 'Preventa' && (
                      <span className="badge-preventa">{d.estado}</span>
                    )}
                    {d.estado === 'Promoción' && (
                      <span className="badge-promocion">{d.estado}</span>
                    )}
                    <span className="absolute top-3 right-3 rounded-full bg-white/90 px-2 py-0.5 text-xs font-semibold text-[--color-marino]">
                      {d.categoria}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[--color-marino] mb-1">{d.nombre}</h3>
                    <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                      <IconoMapa />
                      {d.ubicacion}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-gray-500 bg-gray-100 rounded px-2 py-1">
                        {d.m2} m²
                      </span>
                      <span className="font-bold text-[--color-marino]">
                        Desde {d.precioDesde}{' '}
                        <span className="text-xs font-normal text-gray-500">MXN</span>
                      </span>
                    </div>
                    <a
                      href={waDesarrollo(d.nombre, d.ubicacion)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primario w-full justify-center"
                    >
                      <IconoWhatsApp />
                      Preguntar por {d.nombre}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── POR QUÉ ELEGIRNOS ────────────────────────────────────── */}
        <section id="nosotros" className="py-20 bg-[--color-marino]" aria-labelledby="titulo-razones">
          <div className="contenedor">
            <div className="text-center mb-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-[--color-acento]">
                ¿Por qué elegirnos?
              </p>
            </div>
            <h2 id="titulo-razones" className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
              4 Razones para invertir con{' '}
              <span className="text-[--color-acento]">Grupo Pacífico Escondido</span>
            </h2>
            <p className="text-center text-white/70 mb-14 max-w-2xl mx-auto">
              {empresa.mision}
            </p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {razones.map((r) => (
                <div key={r.titulo} className="text-center">
                  <div className="mb-4 overflow-hidden rounded-xl aspect-video">
                    <img
                      src={r.img}
                      alt={r.alt}
                      width={1024}
                      height={576}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{r.titulo}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{r.descripcion}</p>
                </div>
              ))}
            </div>

            {/* Servicios */}
            <div className="mt-16 bg-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Nuestros Servicios</h3>
              <ul className="grid sm:grid-cols-2 gap-4" role="list">
                {empresa.servicios.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 flex-shrink-0 text-[--color-acento]">
                      <IconoCheckmark />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIOS ─────────────────────────────────────────── */}
        <section id="testimonios" className="py-20 bg-[--color-fondo]" aria-labelledby="titulo-testimonios">
          <div className="contenedor">
            <div className="text-center mb-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-[--color-acento]">
                Lo que dicen nuestros clientes
              </p>
            </div>
            <h2 id="titulo-testimonios" className="text-3xl sm:text-4xl font-bold text-center text-[--color-marino] mb-12">
              Testimonios
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {testimonios.map((t) => (
                <blockquote
                  key={t.nombre}
                  className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4"
                >
                  <p className="text-gray-600 leading-relaxed text-sm italic flex-1">
                    &ldquo;{t.texto}&rdquo;
                  </p>
                  <footer className="flex items-center gap-3">
                    <img
                      src={t.img}
                      alt={`Foto de ${t.nombre}`}
                      width={56}
                      height={56}
                      loading="lazy"
                      className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <cite className="not-italic font-bold text-[--color-marino] text-sm">
                        {t.nombre}
                      </cite>
                      <p className="text-xs text-gray-500">{t.rol}</p>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── EQUIPO ──────────────────────────────────────────────── */}
        <section id="equipo" className="py-20 bg-white" aria-labelledby="titulo-equipo">
          <div className="contenedor">
            <div className="text-center mb-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-[--color-acento]">
                Nuestros asesores
              </p>
            </div>
            <h2 id="titulo-equipo" className="text-3xl sm:text-4xl font-bold text-center text-[--color-marino] mb-12">
              Conoce a nuestros vendedores
            </h2>
            <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
              {equipo.map((a) => (
                <div key={a.nombre} className="text-center">
                  <div className="mb-4 overflow-hidden rounded-2xl aspect-square mx-auto max-w-[200px]">
                    <img
                      src={a.img}
                      alt={`Foto de ${a.nombre}, asesor inmobiliario`}
                      width={300}
                      height={300}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-[--color-marino]">{a.nombre}</h3>
                  <p className="text-sm text-gray-500">Asesor inmobiliario</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACTO ────────────────────────────────────────────── */}
        <section id="contacto" className="py-20 bg-[--color-fondo]" aria-labelledby="titulo-contacto">
          <div className="contenedor">
            <div className="text-center mb-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-[--color-acento]">
                Ponte en contacto
              </p>
            </div>
            <h2 id="titulo-contacto" className="text-3xl sm:text-4xl font-bold text-center text-[--color-marino] mb-12">
              Contáctanos
            </h2>

            <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
              {/* Info de contacto */}
              <div className="bg-[--color-marino] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6 text-[--color-acento]">Información de contacto</h3>
                <ul className="space-y-5" role="list">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-[--color-acento]"><IconoMapa /></span>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">Dirección</p>
                      <p className="text-sm text-white/80">{negocio.direccion}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[--color-acento]"><IconoTelefono /></span>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">Teléfono</p>
                      <a href={`tel:${negocio.telefono}`} className="text-sm text-white/80 hover:text-white transition-colors">
                        (954) 127 9774
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[--color-acento]"><IconoEmail /></span>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">Email</p>
                      <a href={`mailto:${negocio.email}`} className="text-sm text-white/80 hover:text-white transition-colors break-all">
                        {negocio.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[--color-acento]"><IconoReloj /></span>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">Horario</p>
                      <p className="text-sm text-white/80">{negocio.horario}</p>
                    </div>
                  </li>
                </ul>

                {/* Redes sociales */}
                <div className="mt-8">
                  <p className="text-sm font-semibold mb-3 text-[--color-acento]">Síguenos</p>
                  <div className="flex gap-3">
                    <a
                      href={negocio.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook de Grupo Pacífico Escondido"
                      className="rounded-full bg-white/10 hover:bg-white/20 p-2 transition-colors"
                    >
                      <IconoFacebook />
                    </a>
                    <a
                      href={negocio.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram de Grupo Pacífico Escondido"
                      className="rounded-full bg-white/10 hover:bg-white/20 p-2 transition-colors"
                    >
                      <IconoInstagram />
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA directo */}
              <div className="flex flex-col justify-center gap-6">
                <p className="text-gray-600 leading-relaxed">
                  {empresa.subtexto}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Pregunta por nuevos desarrollos o conoce nuestras opciones de financiamiento
                  a hasta <strong className="text-[--color-marino]">96 meses</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={WA_GENERAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primario justify-center"
                  >
                    <IconoWhatsApp />
                    Enviar mensaje por WhatsApp
                  </a>
                  <a
                    href={`tel:${negocio.telefono}`}
                    className="btn-secundario justify-center"
                  >
                    <IconoTelefono />
                    Llamar ahora
                  </a>
                </div>
                <a
                  href={negocio.mapa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[--color-acento2] hover:underline font-medium"
                >
                  <IconoMapa />
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-[--color-marino] text-white py-10">
        <div className="contenedor">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center sm:items-start gap-3">
              <img
                src={foto('uploads/2024/10/logo-1024x232.png')}
                alt="Grupo Pacífico Escondido"
                width={160}
                height={36}
                loading="lazy"
                className="h-9 w-auto brightness-0 invert"
              />
              <p className="text-xs text-white/60 text-center sm:text-left">
                Terrenos residenciales y comerciales en Puerto Escondido, Oaxaca.
              </p>
            </div>
            <nav aria-label="Pie de página">
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" role="list">
                <li><a href="#desarrollos" className="text-white/70 hover:text-white transition-colors">Desarrollos</a></li>
                <li><a href="#nosotros" className="text-white/70 hover:text-white transition-colors">Nosotros</a></li>
                <li><a href="#testimonios" className="text-white/70 hover:text-white transition-colors">Testimonios</a></li>
                <li><a href="#contacto" className="text-white/70 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </nav>
          </div>
          <hr className="border-white/10 my-6" />
          <p className="text-center text-xs text-white/50">
            Todos los derechos reservados. Copyright 2025 Grupo Pacífico Escondido
          </p>
        </div>
      </footer>

      {/* ── BARRA MÓVIL FIJA (bottom bar) ───────────────────────── */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden bg-white border-t border-gray-200 shadow-lg"
        aria-label="Acciones rápidas"
      >
        <a
          href={WA_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-[#25D366]"
          aria-label="WhatsApp"
        >
          <IconoWhatsApp />
          <span>WhatsApp</span>
        </a>
        <a
          href={`tel:${negocio.telefono}`}
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-[--color-marino]"
          aria-label="Llamar"
        >
          <IconoTelefono />
          <span>Llamar</span>
        </a>
        <a
          href={negocio.mapa}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-[--color-acento2]"
          aria-label="Cómo llegar"
        >
          <IconoMapa />
          <span>Maps</span>
        </a>
      </nav>

      {/* Espacio para bottom bar en móvil */}
      <div className="h-16 sm:hidden" aria-hidden="true" />
    </>
  );
}
