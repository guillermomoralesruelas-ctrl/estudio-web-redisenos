import { useState } from 'react';
import {
  negocio,
  wa,
  fotos,
  desarrollos,
  pilares,
  testimonios,
  type Desarrollo,
} from './data/content';

/* ── NavBar ─────────────────────────────────────────────────────────────── */
function NavBar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#desarrollos', label: 'Desarrollos' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#creditos', label: 'Créditos' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#contacto', label: 'Contacto' },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-oscuro/95 backdrop-blur-sm">
      <div className="contenedor flex h-16 items-center justify-between">
        <a href="#inicio" aria-label="DIPAZ Inmobiliaria - inicio">
          <img src={fotos.logo} alt="DIPAZ Inmobiliaria" className="h-9 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold tracking-wide text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={wa('Hola, me gustaría recibir información sobre sus desarrollos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-acento py-2 px-5 text-xs"
          >
            Contáctanos
          </a>
        </nav>
        <button
          className="md:hidden text-white p-2"
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
        <div className="md:hidden bg-oscuro border-t border-white/10">
          <nav className="contenedor flex flex-col py-4 gap-1" aria-label="Móvil">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-white/80 hover:text-white py-2 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={wa('Hola, me gustaría recibir información sobre sus desarrollos.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-acento mt-3 text-center"
              onClick={() => setOpen(false)}
            >
              Contáctanos por WhatsApp
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
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center"
      aria-label="Inicio"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${fotos.hero}')` }}
        role="img"
        aria-label="Desarrollo residencial DIPAZ en La Paz, BCS"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-oscuro/85 via-oscuro/60 to-oscuro/20" />
      <div className="relative contenedor pt-24 pb-16">
        <p className="etiqueta mb-4">La Paz · Baja California Sur</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-head font-bold text-white leading-tight max-w-2xl">
          Tu hogar en La Paz,<br />con más de 13 años<br />de respaldo
        </h1>
        <p className="mt-6 text-lg text-white/85 max-w-lg leading-relaxed">
          Desarrolladora inmobiliaria con {negocio.desarrollos} proyectos entregados
          y {negocio.familias} familias en Baja California Sur.
          Primer hogar o inversión — tenemos el desarrollo para ti.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#desarrollos" className="btn-acento">
            Ver desarrollos
          </a>
          <a
            href={wa('Hola, me gustaría recibir información sobre sus desarrollos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contorno"
          >
            Escribir por WhatsApp
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
          {[
            { valor: negocio.anos, label: 'años de experiencia' },
            { valor: negocio.desarrollos, label: 'desarrollos' },
            { valor: negocio.familias, label: 'familias' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-head font-bold text-acento">{s.valor}</p>
              <p className="text-xs text-white/70 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Tipo de comprador ───────────────────────────────────────────────────── */
function SeccionTipoHogar() {
  const tipos = [
    {
      icono: '🏡',
      titulo: 'Primer hogar',
      texto:
        'Altavista Residencial acepta Infonavit, Fovissste y todos los créditos bancarios para que des el paso a tu primera vivienda propia.',
      href: '#altavista',
    },
    {
      icono: '📈',
      titulo: 'Inversión con plusvalía',
      texto:
        'Altavela Residencial está en una zona de alta plusvalía en La Paz, ideal para quienes buscan hacer crecer su patrimonio.',
      href: '#altavela',
    },
    {
      icono: '👨‍👩‍👧‍👦',
      titulo: 'Calidad de vida',
      texto:
        'Ambos desarrollos ofrecen amenidades, seguridad perimetral y comunidades bien planeadas para vivir con tranquilidad.',
      href: '#desarrollos',
    },
  ];
  return (
    <section className="py-16 bg-panel" aria-label="¿Qué buscas?">
      <div className="contenedor">
        <p className="etiqueta text-center mb-2">¿Qué buscas?</p>
        <h2 className="text-3xl font-head text-oscuro text-center mb-10">
          Tenemos el desarrollo para ti
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {tipos.map((t) => (
            <a
              key={t.titulo}
              href={t.href}
              className="group block bg-fondo p-7 border border-calido hover:border-acento transition-colors"
            >
              <span className="text-4xl">{t.icono}</span>
              <h3 className="mt-4 text-lg font-head font-bold text-oscuro group-hover:text-acento transition-colors">
                {t.titulo}
              </h3>
              <p className="mt-2 text-sm text-suave leading-relaxed">{t.texto}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Tarjeta de desarrollo ───────────────────────────────────────────────── */
function TarjetaDesarrollo({ d, invertido }: { d: Desarrollo; invertido?: boolean }) {
  return (
    <article
      id={d.id}
      className={`py-16 ${invertido ? 'bg-panel' : 'bg-fondo'}`}
      aria-label={d.nombre}
    >
      <div className="contenedor">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${invertido ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Fotos */}
          <div className={`grid grid-cols-2 gap-3 ${invertido ? 'lg:order-2' : ''}`}>
            <img
              src={d.foto1}
              alt={`${d.nombre} — vista exterior`}
              className="w-full aspect-[4/3] object-cover col-span-2"
            />
            <img
              src={d.foto2}
              alt={`${d.nombre} — amenidades`}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="bg-oscuro flex flex-col items-center justify-center p-4 text-center">
              <p className="text-acento text-xs font-semibold tracking-widest uppercase mb-2">
                {d.tipo}
              </p>
              <p className="text-white text-sm leading-snug">{d.subtipo}</p>
            </div>
          </div>

          {/* Texto */}
          <div className={invertido ? 'lg:order-1' : ''}>
            <p className="etiqueta mb-2">{d.tipo}</p>
            <h2 className="text-3xl font-head font-bold text-oscuro mb-4">{d.nombre}</h2>
            <p className="text-suave leading-relaxed mb-6">{d.descripcion}</p>
            <ul className="space-y-2 mb-8">
              {d.destacado.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-tinta">
                  <span className="w-1.5 h-1.5 rounded-full bg-acento shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={d.cta}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-oscuro"
              >
                Solicitar información
              </a>
              <a href="#contacto" className="btn-acento">
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function SeccionDesarrollos() {
  return (
    <section id="desarrollos" aria-label="Nuestros desarrollos">
      <div className="bg-oscuro py-10 text-center">
        <p className="etiqueta text-acento mb-2">Nuestros proyectos</p>
        <h2 className="text-3xl font-head font-bold text-white">Desarrollos en La Paz, BCS</h2>
      </div>
      {desarrollos.map((d, i) => (
        <TarjetaDesarrollo key={d.id} d={d} invertido={i % 2 !== 0} />
      ))}
    </section>
  );
}

/* ── Por qué DIPAZ ───────────────────────────────────────────────────────── */
function SeccionPorQue() {
  return (
    <section
      id="nosotros"
      className="py-16 bg-oscuro"
      aria-label="Por qué DIPAZ"
    >
      <div className="contenedor">
        <p className="etiqueta text-center text-acento mb-2">¿Por qué DIPAZ?</p>
        <h2 className="text-3xl font-head font-bold text-white text-center mb-12">
          Más de 13 años construyendo en BCS
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilares.map((p) => (
            <div
              key={p.titulo}
              className="bg-white/5 border border-white/10 p-7 hover:border-acento transition-colors"
            >
              <span className="text-4xl block mb-4">{p.icono}</span>
              <h3 className="text-base font-head font-bold text-white mb-2">{p.titulo}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Créditos ────────────────────────────────────────────────────────────── */
function SeccionCreditos() {
  const todos = [
    'Infonavit', 'Fovissste', 'HSBC', 'Banorte',
    'Santander', 'Scotiabank', 'BBVA', 'Banjercito',
  ];
  return (
    <section
      id="creditos"
      className="py-16 bg-calido"
      aria-label="Créditos aceptados"
    >
      <div className="contenedor text-center">
        <p className="etiqueta mb-2">Financiamiento</p>
        <h2 className="text-3xl font-head font-bold text-oscuro mb-4">
          Aceptamos todos los créditos
        </h2>
        <p className="text-suave max-w-xl mx-auto mb-10">
          Trabajamos con las principales instituciones para que encuentres
          el esquema de financiamiento que mejor se adapte a tu situación.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {todos.map((c) => (
            <span
              key={c}
              className="bg-panel border border-calido px-5 py-3 text-sm font-semibold text-tinta"
            >
              {c}
            </span>
          ))}
        </div>
        <a
          href={wa('Hola, me gustaría información sobre los tipos de crédito disponibles.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-oscuro inline-block mt-10"
        >
          Asesoría de financiamiento
        </a>
      </div>
    </section>
  );
}

/* ── Testimonios ─────────────────────────────────────────────────────────── */
function SeccionTestimonios() {
  return (
    <section
      id="testimonios"
      className="py-16 bg-panel"
      aria-label="Testimonios"
    >
      <div className="contenedor">
        <p className="etiqueta text-center mb-2">Lo que dicen nuestros clientes</p>
        <h2 className="text-3xl font-head font-bold text-oscuro text-center mb-12">
          Familias que ya tienen su hogar
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonios.map((t) => (
            <blockquote
              key={t.nombre}
              className="bg-fondo border border-calido p-8"
            >
              <p className="text-tinta leading-relaxed italic before:content-['“'] after:content-['”']">
                {t.texto}
              </p>
              <footer className="mt-5 border-t border-calido pt-4">
                <cite className="not-italic">
                  <p className="font-head font-bold text-oscuro text-sm">{t.nombre}</p>
                  <p className="text-xs text-acento mt-0.5">{t.desarrollo}</p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contacto ────────────────────────────────────────────────────────────── */
function SeccionContacto() {
  return (
    <section id="contacto" className="py-16 bg-fondo" aria-label="Contacto">
      <div className="contenedor">
        <p className="etiqueta text-center mb-2">¿Listo para dar el paso?</p>
        <h2 className="text-3xl font-head font-bold text-oscuro text-center mb-12">
          Visítanos o escríbenos
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Mapa */}
          <div className="h-80 lg:h-auto min-h-[20rem] bg-calido overflow-hidden">
            <iframe
              title="Ubicación DIPAZ Inmobiliaria"
              src="https://maps.google.com/maps?q=Av+Altamira+632+La+Paz+BCS&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Datos */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-acento mb-1">
                Dirección
              </p>
              <p className="text-tinta">{negocio.direccion}</p>
              <a
                href={negocio.mapaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-acento hover:underline mt-1 inline-block"
              >
                Ver en Google Maps →
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-acento mb-1">
                Teléfonos
              </p>
              <a href={negocio.telefono1Href} className="block text-tinta hover:text-acento transition-colors">
                {negocio.telefono1}
              </a>
              <a href={negocio.telefono2Href} className="block text-tinta hover:text-acento transition-colors">
                {negocio.telefono2}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-acento mb-1">
                Correo electrónico
              </p>
              <a href={`mailto:${negocio.email1}`} className="block text-tinta hover:text-acento transition-colors text-sm">
                {negocio.email1}
              </a>
              <a href={`mailto:${negocio.email2}`} className="block text-tinta hover:text-acento transition-colors text-sm">
                {negocio.email2}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-acento mb-1">
                Horario de atención
              </p>
              <p className="text-tinta text-sm">{negocio.horario}</p>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href={wa('Hola, me gustaría recibir información sobre sus desarrollos en La Paz.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-acento text-center"
              >
                Escribir por WhatsApp
              </a>
              <a href={negocio.telefono1Href} className="btn-oscuro text-center">
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-oscuro text-white/60 text-sm">
      <div className="contenedor py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <img src={fotos.logo} alt="DIPAZ Inmobiliaria" className="h-8 w-auto mb-3 brightness-0 invert" />
          <p>{negocio.ciudad}</p>
          <p className="mt-1">{negocio.horario}</p>
        </div>
        <div className="flex flex-col gap-1 text-right">
          <a href={negocio.telefono1Href} className="hover:text-white transition-colors">
            {negocio.telefono1}
          </a>
          <a href={negocio.telefono2Href} className="hover:text-white transition-colors">
            {negocio.telefono2}
          </a>
          <a href={`mailto:${negocio.email1}`} className="hover:text-white transition-colors">
            {negocio.email1}
          </a>
          <div className="flex gap-3 justify-end mt-2">
            <a
              href={negocio.facebook1}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-xs"
              aria-label="Facebook Altavela"
            >
              Facebook Altavela
            </a>
            <a
              href={negocio.facebook2}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-xs"
              aria-label="Facebook Altavista"
            >
              Facebook Altavista
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="contenedor py-4 text-center text-xs text-white/40">
          © {new Date().getFullYear()} DIPAZ Inmobiliaria · La Paz, Baja California Sur
        </div>
      </div>
    </footer>
  );
}

/* ── Barra móvil ─────────────────────────────────────────────────────────── */
function BarraMovil() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 border-t border-white/10 bg-oscuro">
      <a
        href={negocio.telefono1Href}
        className="flex flex-col items-center justify-center gap-1 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="text-xs font-semibold">Llamar</span>
      </a>
      <a
        href={wa('Hola, me gustaría recibir información sobre sus desarrollos.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 py-3 bg-acento text-white hover:bg-acento-claro transition-colors"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="text-xs font-semibold">WhatsApp</span>
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
        <SeccionTipoHogar />
        <SeccionDesarrollos />
        <SeccionPorQue />
        <SeccionCreditos />
        <SeccionTestimonios />
        <SeccionContacto />
      </main>
      <Footer />
      <BarraMovil />
    </>
  );
}
