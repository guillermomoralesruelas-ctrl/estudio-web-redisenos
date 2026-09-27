import { useState, useEffect, useCallback } from 'react';
import {
  negocio,
  waLinks,
  tipologias,
  plusvalia,
  amenidades,
  acabados,
  razones,
  puntosUbicacion,
  foto,
} from './data/content';

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatMXN(n: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(n);
}

function proyectarPlusvalia(precioBase: number, anos: number): number {
  return Math.round(precioBase * Math.pow(1 + plusvalia, anos));
}

// ─── Íconos SVG inline (sin dependencias externas) ───────────────────────────

const IconWhatsapp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const IconMapPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const IconChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const IconTrendUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
);

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#proyecto',      label: 'Proyecto' },
    { href: '#departamentos', label: 'Departamentos' },
    { href: '#amenidades',    label: 'Amenidades' },
    { href: '#acabados',      label: 'Acabados' },
    { href: '#ubicacion',     label: 'Ubicación' },
    { href: '#contacto',      label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-sm shadow-lg shadow-black/50' : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <nav className="contenedor flex items-center justify-between h-16 lg:h-20" aria-label="Navegación principal">
        <a href="#inicio" className="flex-shrink-0">
          <img
            src={foto('logoHP.png')}
            alt="High Point León"
            width="120"
            height="40"
            className="h-8 lg:h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-widest uppercase text-white/80 hover:text-[#C9A227] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={waLinks.general}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-dorado hidden lg:inline-flex"
          aria-label="Contactar por WhatsApp"
        >
          <IconWhatsapp />
          WhatsApp
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0D0D0D]/98 border-t border-[#2A2A2A]">
          <ul className="contenedor py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-3 text-sm tracking-widest uppercase text-white/80 hover:text-[#C9A227] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={waLinks.general}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dorado w-full justify-center"
              >
                <IconWhatsapp />
                Contactar por WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero principal"
    >
      {/* Imagen de fondo — desktop / móvil */}
      <picture>
        <source media="(max-width: 767px)" srcSet={foto('FondoBannerMovil.jpg')} />
        <img
          src={foto('FondoBanner.jpg')}
          alt="High Point León — residencial de lujo en León, Guanajuato"
          width="1920"
          height="1080"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
      </picture>

      {/* Overlay oscuro gradiente */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.3) 100%)' }}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="contenedor relative z-10 pt-24 pb-20">
        <div className="max-w-2xl">
          <span className="subtitulo-dorado">León, Guanajuato · Residencial de Lujo</span>
          <h1
            className="titulo-seccion text-white mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            High Point León
          </h1>
          <p className="text-white/80 text-lg mb-3 max-w-xl leading-relaxed">
            CONDOS · HOSPITAL · SHOPPING.
          </p>
          <p className="text-white/70 text-base mb-8 max-w-lg leading-relaxed">
            Un exclusivo desarrollo residencial sobre Blvd. Aeropuerto, en el epicentro
            del crecimiento y la plusvalía del sur de León.
          </p>

          {/* Precios */}
          <div className="flex flex-wrap gap-6 mb-10">
            {tipologias.map((t) => (
              <div key={t.id} className="text-white">
                <div className="text-xs tracking-widest uppercase text-[#C9A227] mb-1">{t.label}</div>
                <div className="text-xl font-semibold">Desde {formatMXN(t.precioBase)}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={waLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dorado"
            >
              <IconWhatsapp />
              Quiero información
            </a>
            <a href="#departamentos" className="btn-outline">
              Ver departamentos
              <IconChevronDown />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Proyecto (Bienvenida + OR-B) ─────────────────────────────────────────────

function SeccionProyecto() {
  return (
    <section
      id="proyecto"
      className="py-20 lg:py-32"
      style={{ backgroundColor: 'var(--color-fondo-2)' }}
      aria-labelledby="h2-proyecto"
    >
      <div className="contenedor">
        <div className="max-w-2xl mb-14">
          <span className="subtitulo-dorado">Bienvenido</span>
          <h2 id="h2-proyecto" className="titulo-seccion mb-6">
            High Point León
          </h2>
          <div className="linea-dorada" />
          <p className="text-[#C8C8C8] leading-relaxed mb-4">
            Pertenecemos a los destacados proyectos de grupo OR-B, una desarrolladora con un
            historial de éxitos que incluye Mítikah, The St.&nbsp;Regis Mexico City y
            The St.&nbsp;Regis Punta Mita, entre otros.
          </p>
          <p className="text-[#C8C8C8] leading-relaxed">
            Nuestra dedicación a los detalles, calidad y experiencia profesional nos ha permitido
            colaborar con inversores de renombre como Prudential Real Estate Investors y La Salle
            Investors México, forjando alianzas con múltiples grupos institucionales desde 2010.
          </p>
        </div>

        {/* Grid de 4 imágenes del proyecto */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { src: foto('info1.png'), alt: 'Planta principal del edificio High Point León' },
            { src: foto('info2.png'), alt: 'Amenidad del proyecto High Point León' },
            { src: foto('info3.png'), alt: 'Departamento modelo High Point León' },
            { src: foto('info4.png'), alt: 'Acabado de lujo High Point León' },
          ].map((im) => (
            <div key={im.src} className="overflow-hidden rounded-sm" style={{ aspectRatio: '4/3' }}>
              <img
                src={im.src}
                alt={im.alt}
                width="380"
                height="285"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        {/* Live Work Play */}
        <div className="mt-16 text-center">
          <span className="titulo-seccion text-[#C9A227]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            LIVE, WORK &amp; PLAY
          </span>
          <p className="text-[#C8C8C8] mt-4 max-w-lg mx-auto">
            Locales comerciales versátiles donde encontrarás todo sin salir del desarrollo.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Elemento memorable: Proyector de plusvalía ───────────────────────────────

function ProyectorPlusvalia() {
  const [seleccion, setSeleccion] = useState(tipologias[0]);
  const [visible, setVisible] = useState(false);

  const handleSeleccion = useCallback((t: typeof tipologias[0]) => {
    setVisible(false);
    setTimeout(() => {
      setSeleccion(t);
      setVisible(true);
    }, 150);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const proyecciones = [
    { anos: 1,  label: '+1 año' },
    { anos: 3,  label: '+3 años' },
    { anos: 5,  label: '+5 años' },
  ];

  return (
    <section
      id="departamentos"
      className="py-20 lg:py-32"
      style={{ backgroundColor: 'var(--color-fondo)' }}
      aria-labelledby="h2-depas"
    >
      <div className="contenedor">
        <div className="max-w-2xl mb-12">
          <span className="subtitulo-dorado">Inversión inteligente</span>
          <h2 id="h2-depas" className="titulo-seccion mb-4">
            ¿Cuánto vale tu inversión en el futuro?
          </h2>
          <div className="linea-dorada" />
          <p className="text-[#C8C8C8] leading-relaxed">
            En 2024, León registró una plusvalía anualizada del{' '}
            <strong className="text-[#C9A227]">11.10%</strong>, una de las más altas a nivel
            nacional. Selecciona el tipo de departamento y descubre la proyección real de tu
            patrimonio.
          </p>
        </div>

        {/* Selector de tipo */}
        <div className="flex flex-wrap gap-3 mb-10" role="group" aria-label="Selecciona tipo de departamento">
          {tipologias.map((t) => (
            <button
              key={t.id}
              onClick={() => handleSeleccion(t)}
              className={`px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-200 border rounded-sm ${
                seleccion.id === t.id
                  ? 'bg-[#C9A227] border-[#C9A227] text-[#0D0D0D]'
                  : 'border-[#2A2A2A] text-[#C8C8C8] hover:border-[#C9A227] hover:text-[#C9A227]'
              }`}
              aria-pressed={seleccion.id === t.id}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tarjetas de proyección */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Precio hoy */}
          <div
            className="card-oscura p-6 border-[#C9A227]"
            style={{ borderColor: 'var(--color-acento)' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(201,162,39,0.15)' }}
                aria-hidden="true"
              >
                <IconTrendUp />
              </div>
              <span className="text-xs tracking-widest uppercase text-[#C9A227]">Hoy · Preventa</span>
            </div>
            <div
              className="titulo-seccion text-white mb-1"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
            >
              {formatMXN(seleccion.precioBase)}
            </div>
            <div className="text-sm text-[#C8C8C8]">Precio de lista desde</div>
            <div className="mt-3 text-xs text-[#C8C8C8]">
              {seleccion.metros.join(' · ')}
            </div>
          </div>

          {/* Proyecciones */}
          {proyecciones.map((p) => {
            const valorProyectado = proyectarPlusvalia(seleccion.precioBase, p.anos);
            const ganancia = valorProyectado - seleccion.precioBase;
            return (
              <div key={p.anos} className="card-oscura p-6">
                <div className="text-xs tracking-widest uppercase text-[#C9A227] mb-3">{p.label}</div>
                <div
                  className="titulo-seccion text-white mb-1"
                  style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)' }}
                >
                  {formatMXN(valorProyectado)}
                </div>
                <div className="text-sm text-[#C8C8C8] mb-3">Valor proyectado</div>
                <div className="text-sm font-semibold" style={{ color: '#4ADE80' }}>
                  +{formatMXN(ganancia)}
                </div>
                <div className="text-xs text-[#C8C8C8]">plusvalía estimada</div>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-[#C8C8C8]/60 mt-4 max-w-xl">
          *Basado en la plusvalía anualizada promedio de León: 11.10% (2024). Los valores son
          estimados y no garantizan rendimientos futuros.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href={seleccion.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dorado"
          >
            <IconWhatsapp />
            Asegura tu precio de preventa — {seleccion.label}
          </a>
        </div>

        {/* Planos de planta */}
        <div className="mt-20">
          <span className="subtitulo-dorado">Planos</span>
          <h3 className="titulo-seccion mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Plantas y prototipos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: foto('leon/planta1.png'),              alt: 'Plano de planta — nivel 1, High Point León' },
              { src: foto('leon/planta2.png'),              alt: 'Plano de planta — nivel 2, High Point León' },
              { src: foto('leon/planta3.png'),              alt: 'Plano de planta — nivel 3, High Point León' },
              { src: foto('leon/depas/05-planta-leon.png'), alt: 'Vista de nivel — departamento 38.35 m², High Point León' },
              { src: foto('leon/depas/05-prototipo-leon.png'), alt: 'Prototipo — departamento 38.35 m², High Point León' },
            ].map((im) => (
              <div key={im.src} className="card-oscura overflow-hidden rounded-sm">
                <img
                  src={im.src}
                  alt={im.alt}
                  width="580"
                  height="435"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
          <div className="card-oscura p-5 mt-6 max-w-sm">
            <div className="text-xs tracking-widest uppercase text-[#C9A227] mb-2">Prototipo ejemplo</div>
            <div className="text-white font-semibold mb-1">38.35 m² · Niveles 3 al 15</div>
            <div className="text-sm text-[#C8C8C8]">34.48 m² + 3.87 m² Terraza</div>
            <ul className="text-sm text-[#C8C8C8] mt-2 space-y-1">
              <li>1 recámara · 1 baño</li>
              <li>Sala · Barra-comedor · Cocina</li>
              <li>Terraza · 1 estacionamiento</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Amenidades ───────────────────────────────────────────────────────────────

function SeccionAmenidades() {
  return (
    <section
      id="amenidades"
      className="py-20 lg:py-32"
      style={{ backgroundColor: 'var(--color-fondo-2)' }}
      aria-labelledby="h2-amenidades"
    >
      <div className="contenedor">
        <div className="max-w-2xl mb-12">
          <span className="subtitulo-dorado">Más de 2,200 m² de amenidades</span>
          <h2 id="h2-amenidades" className="titulo-seccion mb-3">
            Amenidades premium
          </h2>
          <div className="linea-dorada" />
          <p className="text-[#C8C8C8] leading-relaxed">
            Interiores: 555.66 m² · Exteriores: 1,652.90 m² — 11 amenidades diseñadas para
            complementar cada momento de tu vida.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {amenidades.map((am) => (
            <div key={am.nombre} className="group relative overflow-hidden rounded-sm">
              <img
                src={am.foto}
                alt={`${am.nombre} — High Point León`}
                width="400"
                height="300"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className="absolute inset-0 flex items-end p-3"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)' }}
                aria-hidden="true"
              />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-white text-sm font-semibold">{am.nombre}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Acabados ─────────────────────────────────────────────────────────────────

function SeccionAcabados() {
  return (
    <section
      id="acabados"
      className="py-20 lg:py-32"
      style={{ backgroundColor: 'var(--color-fondo)' }}
      aria-labelledby="h2-acabados"
    >
      <div className="contenedor">
        <div className="max-w-2xl mb-12">
          <span className="subtitulo-dorado">Calidad de lujo</span>
          <h2 id="h2-acabados" className="titulo-seccion mb-3">
            Acabados
          </h2>
          <div className="linea-dorada" />
          <p className="text-[#C8C8C8] leading-relaxed">
            Cada detalle seleccionado para ofrecer la más alta calidad en materiales, pisos,
            baños y cocina.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {acabados.map((ac) => (
            <div key={ac.nombre} className="card-oscura overflow-hidden group">
              <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={ac.foto}
                  alt={`${ac.nombre} — High Point León`}
                  width="560"
                  height="420"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-4 py-3">
                <span className="text-sm font-semibold text-white">{ac.nombre}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Razones para invertir ───────────────────────────────────────────────────

function SeccionRazones() {
  return (
    <section
      className="py-20 lg:py-32"
      style={{ backgroundColor: 'var(--color-fondo-2)' }}
      aria-labelledby="h2-razones"
    >
      <div className="contenedor">
        <div className="max-w-2xl mb-12">
          <span className="subtitulo-dorado">¿Por qué elegir High Point León?</span>
          <h2 id="h2-razones" className="titulo-seccion mb-3">
            Razones para invertir
          </h2>
          <div className="linea-dorada" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {razones.map((r) => (
            <div key={r.titulo} className="card-oscura p-6">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center mb-4 flex-shrink-0"
                style={{ backgroundColor: 'rgba(201,162,39,0.15)' }}
                aria-hidden="true"
              >
                <IconCheck />
              </div>
              <h3
                className="font-semibold text-white mb-2"
                style={{ color: 'var(--color-acento)', fontFamily: 'var(--font-titulo)' }}
              >
                {r.titulo}
              </h3>
              <p className="text-sm text-[#C8C8C8] leading-relaxed">{r.texto}</p>
            </div>
          ))}
        </div>

        {/* Imagen banner */}
        <div className="mt-12 overflow-hidden rounded-sm">
          <img
            src={foto('banner.jpg')}
            alt="Rendering exterior — High Point León"
            width="1200"
            height="500"
            loading="lazy"
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── Ubicación ────────────────────────────────────────────────────────────────

function SeccionUbicacion() {
  return (
    <section
      id="ubicacion"
      className="py-20 lg:py-32"
      style={{ backgroundColor: 'var(--color-fondo)' }}
      aria-labelledby="h2-ubicacion"
    >
      <div className="contenedor">
        <div className="max-w-2xl mb-12">
          <span className="subtitulo-dorado">El sur de León</span>
          <h2 id="h2-ubicacion" className="titulo-seccion mb-3">
            El epicentro del crecimiento
          </h2>
          <div className="linea-dorada" />
          <p className="text-[#C8C8C8] leading-relaxed">
            Ubicado sobre Blvd. Aeropuerto, arteria central que conecta el centro de León con la
            zona industrial. Rodeado de hospitales, centros comerciales, escuelas y corporativos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Mapa imagen */}
          <a
            href={negocio.mapa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver High Point León en Google Maps"
          >
            <img
              src={foto('mapaLeon.png')}
              alt="Mapa de ubicación High Point León — Blvd. Aeropuerto, León, Guanajuato"
              width="760"
              height="500"
              loading="lazy"
              className="w-full rounded-sm hover:opacity-90 transition-opacity"
            />
            <span className="flex items-center gap-2 text-sm text-[#C9A227] mt-2">
              <IconMapPin />
              Ver en Google Maps
            </span>
          </a>

          {/* Lista de puntos */}
          <div>
            <div className="card-oscura p-6 mb-6">
              <div className="text-xs tracking-widest uppercase text-[#C9A227] mb-3">Dirección</div>
              <address className="not-italic text-white font-medium leading-relaxed">
                {negocio.direccion}
              </address>
            </div>

            <ul className="space-y-2" aria-label="Puntos de interés cercanos">
              {puntosUbicacion.map((p) => (
                <li
                  key={p.nombre}
                  className="flex items-center justify-between py-3 border-b"
                  style={{ borderColor: 'var(--color-borde)' }}
                >
                  <span className="text-[#C8C8C8] text-sm">{p.nombre}</span>
                  <span className="text-[#C9A227] text-sm font-semibold ml-4 flex-shrink-0">{p.km}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a
                href={negocio.mapa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <IconMapPin />
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contacto ─────────────────────────────────────────────────────────────────

function SeccionContacto() {
  return (
    <section
      id="contacto"
      className="py-20 lg:py-32"
      style={{ backgroundColor: 'var(--color-fondo-2)' }}
      aria-labelledby="h2-contacto"
    >
      <div className="contenedor">
        <div className="max-w-xl mb-12">
          <span className="subtitulo-dorado">¿Listo para invertir?</span>
          <h2 id="h2-contacto" className="titulo-seccion mb-3">
            Contáctanos
          </h2>
          <div className="linea-dorada" />
          <p className="text-[#C8C8C8] leading-relaxed">
            Nuestros asesores te atenderán con gusto para resolver todas tus dudas y ayudarte a
            encontrar el departamento ideal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {/* WhatsApp */}
          <a
            href={waLinks.general}
            target="_blank"
            rel="noopener noreferrer"
            className="card-oscura p-6 flex flex-col gap-3 hover:border-[#C9A227] transition-colors"
            style={{ borderColor: 'var(--color-borde)' }}
            aria-label="Contactar por WhatsApp"
          >
            <div className="text-[#C9A227]"><IconWhatsapp /></div>
            <div>
              <div className="text-xs tracking-widest uppercase text-[#C9A227] mb-1">WhatsApp</div>
              <div className="text-white font-semibold">+52 55 2538 6374</div>
            </div>
          </a>

          {/* Teléfono */}
          <a
            href={`tel:${negocio.telefono}`}
            className="card-oscura p-6 flex flex-col gap-3 hover:border-[#C9A227] transition-colors"
            style={{ borderColor: 'var(--color-borde)' }}
            aria-label="Llamar por teléfono"
          >
            <div className="text-[#C9A227]"><IconPhone /></div>
            <div>
              <div className="text-xs tracking-widest uppercase text-[#C9A227] mb-1">Teléfono</div>
              <div className="text-white font-semibold">+52 55 2538 6374</div>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${negocio.email}`}
            className="card-oscura p-6 flex flex-col gap-3 hover:border-[#C9A227] transition-colors"
            style={{ borderColor: 'var(--color-borde)' }}
            aria-label="Enviar correo electrónico"
          >
            <div className="text-[#C9A227]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <div className="text-xs tracking-widest uppercase text-[#C9A227] mb-1">Email</div>
              <div className="text-white font-semibold">{negocio.email}</div>
            </div>
          </a>
        </div>

        {/* Imagen promocional */}
        <div className="overflow-hidden rounded-sm">
          <img
            src={foto('promocional.jpg')}
            alt="Imagen promocional High Point León"
            width="1200"
            height="500"
            loading="lazy"
            className="w-full object-cover"
            style={{ maxHeight: '350px' }}
          />
        </div>

        {/* CTA final */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={waLinks.general}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dorado"
          >
            <IconWhatsapp />
            Hablar con un asesor
          </a>
          <a href={negocio.mapa} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <IconMapPin />
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Barra flotante móvil ────────────────────────────────────────────────────

function BarraMovil() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 lg:hidden"
      style={{ backgroundColor: '#141414', borderTop: '1px solid #2A2A2A' }}
      role="navigation"
      aria-label="Acciones rápidas"
    >
      <div className="flex">
        <a
          href={waLinks.general}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-white hover:text-[#C9A227] transition-colors"
          aria-label="Contactar por WhatsApp"
        >
          <IconWhatsapp />
          <span className="text-[10px] tracking-wider uppercase">WhatsApp</span>
        </a>
        <a
          href={`tel:${negocio.telefono}`}
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-white hover:text-[#C9A227] transition-colors border-x"
          style={{ borderColor: '#2A2A2A' }}
          aria-label="Llamar por teléfono"
        >
          <IconPhone />
          <span className="text-[10px] tracking-wider uppercase">Llamar</span>
        </a>
        <a
          href={negocio.mapa}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-white hover:text-[#C9A227] transition-colors"
          aria-label="Ver ubicación en Maps"
        >
          <IconMapPin />
          <span className="text-[10px] tracking-wider uppercase">Maps</span>
        </a>
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      className="py-10"
      style={{ backgroundColor: '#080808', borderTop: '1px solid #2A2A2A' }}
      role="contentinfo"
    >
      <div className="contenedor">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <img
            src={foto('logoHP.png')}
            alt="High Point León"
            width="100"
            height="34"
            loading="lazy"
            className="h-8 w-auto"
          />
          <div className="text-center sm:text-right">
            <p className="text-xs text-[#C8C8C8]/60">
              High Point León © 2025 · Proyecto de Grupo OR-B
            </p>
            <p className="text-xs text-[#C8C8C8]/40 mt-1">
              Blvd. Aeropuerto esq. Blvd Delta, Villas Santa Julia, León, Gto.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App principal ────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SeccionProyecto />
        <ProyectorPlusvalia />
        <SeccionAmenidades />
        <SeccionAcabados />
        <SeccionRazones />
        <SeccionUbicacion />
        <SeccionContacto />
      </main>
      <Footer />
      <BarraMovil />
    </>
  );
}
