import { negocio, wa, foto, ventajas, servicios, testimonios } from './data/content';

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: negocio.nombre,
    description: 'Escuela de kiteboarding y wing foil en Isla Blanca, Cancún. 15+ años de experiencia.',
    url: 'https://www.kitesurfmexico.com/',
    telephone: negocio.telefono,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cancún',
      addressRegion: 'Quintana Roo',
      addressCountry: 'MX',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 21.2735, longitude: -86.7753 },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function Encabezado() {
  return (
    <header className="sticky top-0 z-50 bg-[#0057A8] text-white shadow-md">
      <div className="contenedor flex items-center justify-between h-16">
        <a href="#inicio" className="font-semibold text-lg tracking-wide">Kitesurf Mexico</a>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#servicios" className="hover:text-[#00B4E6] transition-colors">Clases</a>
          <a href="#ventajas" className="hover:text-[#00B4E6] transition-colors">¿Por qué nosotros?</a>
          <a href="#testimonios" className="hover:text-[#00B4E6] transition-colors">Reseñas</a>
          <a href="#contacto" className="hover:text-[#00B4E6] transition-colors">Contacto</a>
        </nav>
        <a
          href={wa('Hola, me interesa reservar una clase de kitesurf en Isla Blanca')}
          target="_blank" rel="noopener noreferrer"
          className="btn-cielo text-xs px-4 py-2"
        >
          Reservar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0C1B33]">
      <img
        src={foto('kitesurf-lesson')}
        alt="Clase de kiteboarding en Isla Blanca, Cancún"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative contenedor py-20 md:py-28 max-w-3xl">
        <p className="text-[#00B4E6] font-semibold tracking-widest text-sm uppercase mb-3">
          Isla Blanca · Cancún · Quintana Roo
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6">
          Aprende Kiteboarding<br className="hidden md:block" /> y Wing Foil en el paraíso
        </h1>
        <p className="text-lg text-white/80 mb-8 max-w-xl">
          Laguna plana y poco profunda, instructores certificados, equipo nuevo y apoyo con jet ski.
          15+ años formando kitesufristas en el mejor spot de México.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={wa('Hola, me interesa reservar una clase de kitesurf en Isla Blanca')}
            target="_blank" rel="noopener noreferrer"
            className="btn-cielo text-base px-8 py-4 font-semibold"
          >
            Reservar clase
          </a>
          <a href="#servicios" className="btn-azul text-base px-8 py-4">
            Ver clases
          </a>
        </div>
      </div>
    </section>
  );
}

function Ventajas() {
  return (
    <section id="ventajas" className="bg-[#F4F1E8] py-16 md:py-20">
      <div className="contenedor">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          ¿Por qué elegir Kitesurf Mexico?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ventajas.map((v) => (
            <div key={v.titulo} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-4xl mb-3">{v.icono}</div>
              <h3 className="font-semibold text-lg mb-2">{v.titulo}</h3>
              <p className="text-muted text-sm">{v.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="contenedor">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          Nuestros cursos
        </h2>
        <p className="text-center text-muted mb-12 max-w-xl mx-auto">
          Principiantes o avanzados, solos o en grupo — encontramos el formato perfecto para ti.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {servicios.map((s) => (
            <article key={s.titulo} className="rounded-2xl overflow-hidden shadow-md bg-white flex flex-col">
              <img
                src={foto(s.foto)}
                alt={s.titulo}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-xl mb-3">{s.titulo}</h3>
                <p className="text-muted text-sm flex-1 mb-5">{s.texto}</p>
                <a
                  href={wa(`Hola, me interesa: ${s.titulo}`)}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-azul self-start"
                >
                  {s.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="text-center text-sm text-muted mt-8">
          Precios y paquetes disponibles en{' '}
          <a
            href="https://www.kitesurfmexico.com/kiteboarding-courses-and-prices/"
            target="_blank" rel="noopener noreferrer"
            className="text-azul underline"
          >
            kitesurfmexico.com
          </a>
        </p>
      </div>
    </section>
  );
}

function Testimonios() {
  return (
    <section id="testimonios" className="bg-[#0C1B33] text-white py-16 md:py-24">
      <div className="contenedor">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Lo que dicen nuestros alumnos
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonios.map((t) => (
            <blockquote key={t.nombre} className="bg-white/10 rounded-2xl p-6">
              <p className="text-white/90 text-sm leading-relaxed mb-4">"{t.texto}"</p>
              <footer className="text-[#00B4E6] text-sm font-medium">
                {t.nombre} · {t.fecha}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-16 md:py-24">
      <div className="contenedor">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Contáctanos
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-lg mb-1">Ubicación</p>
              <p className="text-muted">{negocio.direccion}</p>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Teléfono / WhatsApp</p>
              <a href={`tel:${negocio.telefono}`} className="text-azul hover:underline">
                {negocio.telefono}
              </a>
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Instagram</p>
              <a
                href="https://www.instagram.com/kitesurf_mexico/"
                target="_blank" rel="noopener noreferrer"
                className="text-azul hover:underline"
              >
                {negocio.instagram}
              </a>
            </div>
            <a
              href={wa('Hola, me gustaría saber más sobre las clases de kitesurf')}
              target="_blank" rel="noopener noreferrer"
              className="btn-azul inline-flex mt-2"
            >
              Escribir por WhatsApp
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden h-72 shadow-md">
            <iframe
              title="Isla Blanca, Cancún"
              src={negocio.mapaEmbed}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-[#0C1B33] text-white/70 py-8">
      <div className="contenedor flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} Kitesurf Mexico · Isla Blanca, Cancún</p>
        <a
          href="https://www.kitesurfmexico.com/"
          target="_blank" rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          kitesurfmexico.com
        </a>
      </div>
    </footer>
  );
}

function BarraWa() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#00B4E6] shadow-lg">
      <a
        href={wa('Hola, me interesa reservar una clase de kitesurf')}
        target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 text-[#0C1B33] font-semibold text-base"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Reservar clase por WhatsApp
      </a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <JsonLd />
      <Encabezado />
      <Hero />
      <Ventajas />
      <Servicios />
      <Testimonios />
      <Contacto />
      <Pie />
      <BarraWa />
    </>
  );
}
