import { useState } from 'react';
import { negocio, productos, talleres, fotos } from './data/content';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.kasumiflowers.com',
  name: 'Kasumi Flowers Atelier',
  description:
    'Florería de autor en Oaxaca de Juárez especializada en diseños florales premium para bodas boutique, regalos especiales y proyectos corporativos.',
  url: 'https://www.kasumiflowers.com',
  email: 'info@kasumiflowers.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jazmines 618-A, Col. Reforma',
    addressLocality: 'Oaxaca de Juárez',
    addressRegion: 'OA',
    postalCode: '68050',
    addressCountry: 'MX',
  },
  telephone: '+52-951-207-7809',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/kasumiflowersatelier/',
    'https://www.facebook.com/KasumiFlorerias',
    'https://www.tiktok.com/@kasumifloreria',
  ],
});

const NAV_LINKS = [
  { href: '#coleccion', label: 'Tienda' },
  { href: '#bodas', label: 'Bodas' },
  { href: '#talleres', label: 'Talleres' },
  { href: '#contacto', label: 'Contacto' },
];

const PILARES = [
  {
    dec: '✦',
    titulo: '30 Años de Experiencia',
    texto: 'Trayectoria consolidada en Oaxaca, creando arte floral con técnica y pasión.',
  },
  {
    dec: '❋',
    titulo: 'Diseños de Autor',
    texto: 'Piezas únicas y escultóricas, lejos de los catálogos genéricos tradicionales.',
  },
  {
    dec: '◈',
    titulo: 'Corazón de Oaxaca',
    texto: 'Entregas personales en Oaxaca y área metropolitana con el cuidado del atelier.',
  },
];

const BODAS_FEATURES = [
  'Diseño conceptual personalizado',
  'Selección de flores premium y locales',
  'Montaje y supervisión por el equipo Kasumi',
];

export default function App() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <NavBar />
      <main>
        <SeccionHero />
        <SeccionPilares />
        <SeccionColeccion />
        <SeccionBodas />
        <SeccionTalleres />
        <SeccionContacto />
      </main>
      <Footer />
      <BarraMovil />
    </>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-fondo/92 backdrop-blur-sm border-b border-calido">
      <nav className="contenedor flex items-center justify-between h-16" aria-label="Navegación principal">
        <a href="#" className="flex items-center gap-2.5" aria-label="Kasumi Flowers Atelier — inicio">
          <img src={fotos.isotipo} alt="" className="h-8 w-8 object-contain" aria-hidden="true" />
          <span className="font-serif text-lg text-oscuro leading-none hidden sm:block">Kasumi Flowers</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-suave hover:text-oscuro transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={`mailto:${negocio.email}`} className="hidden md:inline-flex btn-acento text-xs py-2 px-5">
          Cotizar diseño
        </a>
        <button
          className="md:hidden p-2 text-oscuro"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="menu-movil"
        >
          <span className="text-xl leading-none">{open ? '✕' : '☰'}</span>
        </button>
      </nav>
      {open && (
        <div id="menu-movil" className="md:hidden bg-fondo border-t border-calido py-5">
          <ul className="contenedor flex flex-col gap-4">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-tinta" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href={`mailto:${negocio.email}`} className="btn-acento inline-block text-xs py-2 px-5">
                Cotizar diseño
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function SeccionHero() {
  return (
    <section className="relative min-h-screen flex items-end pt-16">
      <img
        src={fotos.hero}
        alt="Arreglo floral editorial de Kasumi Flowers Atelier, Oaxaca de Juárez"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-oscuro/85 via-oscuro/35 to-oscuro/15" />
      <div className="relative contenedor text-white pb-16 lg:pb-24">
        <p className="text-xs tracking-[0.35em] uppercase text-calido mb-4">
          Oaxaca de Juárez · 30 años de experiencia
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-tight mb-5 max-w-2xl">
          Flores de autor<br />
          para tus momentos<br />
          irrepetibles.
        </h1>
        <p className="text-base text-calido max-w-md mb-8 leading-relaxed font-sans">
          Diseños florales de autor en Oaxaca. Kasumi crea con técnica y pasión desde hace 30 años.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={negocio.tienda} className="btn-acento">
            Ver diseños de autor
          </a>
          <a
            href="#talleres"
            className="border border-white text-white px-6 py-3 text-sm tracking-wide uppercase hover:bg-white hover:text-oscuro transition-colors"
          >
            Ver próximos talleres
          </a>
        </div>
      </div>
    </section>
  );
}

function SeccionPilares() {
  return (
    <section className="bg-calido py-16 lg:py-20" aria-label="Valores del atelier">
      <div className="contenedor">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {PILARES.map(p => (
            <div key={p.titulo} className="text-center">
              <span className="text-3xl text-acento mb-4 block" aria-hidden="true">
                {p.dec}
              </span>
              <h2 className="font-serif text-xl text-oscuro mb-3">{p.titulo}</h2>
              <p className="text-suave text-sm leading-relaxed">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeccionColeccion() {
  return (
    <section id="coleccion" className="py-20 lg:py-28">
      <div className="contenedor">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.35em] uppercase text-acento mb-3">Shop</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-oscuro mb-4">Colección de Temporada</h2>
          <p className="text-suave max-w-md mx-auto text-sm leading-relaxed">
            Selección especial de nuestras composiciones florales de autor, pensadas para quienes buscan
            elegancia en cada detalle.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {productos.map(p => (
            <article key={p.id} className="group">
              <div className="overflow-hidden bg-calido aspect-[4/5] mb-4">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[9px] tracking-[0.25em] uppercase text-acento">{p.categoria}</span>
                  <h3 className="font-serif text-lg text-oscuro mt-0.5 leading-snug">{p.nombre}</h3>
                </div>
                <p className="font-serif text-lg text-oscuro whitespace-nowrap pt-5">
                  ${p.precio.toLocaleString('es-MX')}
                </p>
              </div>
              <a
                href={negocio.tienda}
                className="mt-3 inline-block text-[10px] tracking-[0.2em] uppercase text-suave border-b border-suave hover:text-oscuro hover:border-oscuro transition-colors"
              >
                Ver detalles →
              </a>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href={negocio.tienda} className="btn-contorno">
            Ver catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
}

function SeccionBodas() {
  return (
    <section id="bodas" className="bg-oscuro text-white">
      <div className="contenedor grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
        <div className="aspect-[4/3] lg:aspect-auto">
          <img
            src={fotos.bodas}
            alt="Decoración floral para boda diseñada por Kasumi Flowers Atelier"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-8 py-14 lg:px-12 lg:py-20">
          <p className="text-[10px] tracking-[0.35em] uppercase text-dorado mb-4">Atelier & Eventos</p>
          <h2 className="font-serif text-3xl lg:text-4xl leading-snug mb-6">
            Diseño floral para bodas<br />que trascienden.
          </h2>
          <p className="text-calido text-sm leading-relaxed mb-6">
            No solo decoramos espacios, creamos atmósferas. Cada boda es un proyecto de diseño único donde
            las flores cuentan tu historia.
          </p>
          <ul className="space-y-3 mb-8">
            {BODAS_FEATURES.map(f => (
              <li key={f} className="flex items-center gap-3 text-sm text-calido">
                <span className="text-dorado" aria-hidden="true">✦</span> {f}
              </li>
            ))}
          </ul>
          <blockquote className="border-l-2 border-dorado pl-4 mb-8 italic text-calido text-sm leading-relaxed">
            "Kasumi entendió perfecto mi visión. Fue mágico."
            <footer className="mt-1 text-[10px] tracking-widest uppercase text-dorado not-italic">
              — Sofia & Marco
            </footer>
          </blockquote>
          <a
            href={`mailto:${negocio.email}?subject=Cotización boda`}
            className="btn-acento self-start"
          >
            Cotizar mi evento
          </a>
        </div>
      </div>
    </section>
  );
}

function SeccionTalleres() {
  return (
    <section id="talleres" className="py-20 lg:py-28">
      <div className="contenedor">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.35em] uppercase text-acento mb-3">Kasumi School</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-oscuro mb-4">Aprende el arte de las flores.</h2>
          <p className="text-suave max-w-md mx-auto text-sm leading-relaxed">
            Talleres presenciales en el atelier, diseñados para todos los niveles.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {talleres.map(t => {
            const partes = t.fecha.split(' ');
            const mes = partes[0];
            const dia = partes[1];
            return (
              <article
                key={t.titulo}
                className="border border-calido bg-panel p-8 hover:border-acento transition-colors"
              >
                <div className="flex items-end gap-2 mb-4">
                  <span className="font-serif text-4xl text-acento leading-none">{dia}</span>
                  <span className="text-[10px] tracking-widest uppercase text-suave mb-1">{mes}</span>
                </div>
                <h3 className="font-serif text-xl text-oscuro mb-1">{t.titulo}</h3>
                <p className="text-xs text-suave mb-3">
                  {t.nivel} · {t.lugar}
                </p>
                <p className="font-serif text-xl text-acento">
                  ${t.precio.toLocaleString('es-MX')}
                </p>
                <a
                  href={`mailto:${negocio.email}?subject=Inscripción: ${t.titulo}`}
                  className="mt-4 inline-block text-[10px] tracking-widest uppercase text-oscuro border-b border-oscuro hover:text-acento hover:border-acento transition-colors"
                >
                  Reservar lugar →
                </a>
              </article>
            );
          })}
        </div>
        <div className="relative overflow-hidden">
          <img
            src={fotos.talleresBg}
            alt="Taller floral en el Atelier Kasumi Oaxaca"
            className="w-full h-52 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-oscuro/65 flex flex-col items-center justify-center text-center px-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-white mb-5">
              ¿Listo para transformar tu espacio con flores?
            </h3>
            <div className="flex gap-4 flex-wrap justify-center">
              <a href={`mailto:${negocio.email}`} className="btn-acento text-xs py-2.5 px-6">
                Contactar al Atelier
              </a>
              <a
                href={negocio.tienda}
                className="border border-white text-white text-xs tracking-wide uppercase px-6 py-2.5 hover:bg-white hover:text-oscuro transition-colors"
              >
                Ver Catálogo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SeccionContacto() {
  const sucursales = [negocio.sucursalOaxaca, negocio.sucursalChiapas];
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-calido">
      <div className="contenedor">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.35em] uppercase text-acento mb-3">Visítanos</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-oscuro">Nuestros Ateliers</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sucursales.map(s => (
            <div key={s.ciudad} className="bg-panel overflow-hidden">
              <iframe
                src={s.mapaEmbed}
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa ${s.ciudad}`}
              />
              <div className="p-8">
                <h3 className="font-serif text-xl text-oscuro mb-4">{s.ciudad}</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <dt className="text-suave w-20 shrink-0">Dirección</dt>
                    <dd className="text-tinta">
                      {s.direccion}
                      <br />
                      {s.cp}
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="text-suave w-20 shrink-0">Teléfono</dt>
                    <dd className="text-tinta">
                      {s.telefonos.map(t => (
                        <a
                          key={t}
                          href={`tel:+${t.replace(/\D/g, '')}`}
                          className="block hover:text-acento transition-colors"
                        >
                          {t}
                        </a>
                      ))}
                    </dd>
                  </div>
                  {s.ciudad === 'Oaxaca de Juárez' && (
                    <div className="flex gap-3">
                      <dt className="text-suave w-20 shrink-0">Horario</dt>
                      <dd className="text-tinta">
                        <span className="block">{negocio.horario.semana}</span>
                        <span className="block">{negocio.horario.sabado}</span>
                      </dd>
                    </div>
                  )}
                </dl>
                <a
                  href={`mailto:${negocio.email}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm text-acento hover:underline"
                >
                  {negocio.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-oscuro text-calido">
      <div className="contenedor py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={fotos.isotipo}
                alt="Kasumi Flowers Atelier"
                className="h-8 w-8 object-contain opacity-80"
              />
              <span className="font-serif text-white text-lg">Kasumi Flowers</span>
            </div>
            <p className="text-sm text-suave leading-relaxed max-w-xs">
              Florería de autor en Oaxaca de Juárez especializada en diseños florales premium para bodas
              boutique, regalos especiales y proyectos corporativos.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-white text-sm mb-4">Explora</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={negocio.tienda} className="text-suave hover:text-white transition-colors">
                  Tienda Online
                </a>
              </li>
              <li>
                <a href="#bodas" className="text-suave hover:text-white transition-colors">
                  Bodas y Eventos
                </a>
              </li>
              <li>
                <a href="#talleres" className="text-suave hover:text-white transition-colors">
                  Talleres
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${negocio.email}`}
                  className="text-suave hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-white text-sm mb-4">Contacto</h4>
            <address className="not-italic text-sm text-suave space-y-1">
              <p>{negocio.sucursalOaxaca.direccion}</p>
              <p>{negocio.sucursalOaxaca.cp}</p>
              <p className="pt-1">
                <a href={negocio.sucursalOaxaca.tel} className="hover:text-white transition-colors">
                  {negocio.sucursalOaxaca.telefonos[0]}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${negocio.email}`}
                  className="hover:text-white transition-colors"
                >
                  {negocio.email}
                </a>
              </p>
            </address>
            <div className="flex gap-5 mt-4 text-sm">
              <a
                href={negocio.instagram}
                aria-label="Instagram de Kasumi Flowers Atelier"
                className="text-suave hover:text-white transition-colors"
              >
                IG
              </a>
              <a
                href={negocio.facebook}
                aria-label="Facebook de Kasumi Flowers Atelier"
                className="text-suave hover:text-white transition-colors"
              >
                FB
              </a>
              <a
                href={negocio.tiktok}
                aria-label="TikTok de Kasumi Flowers Atelier"
                className="text-suave hover:text-white transition-colors"
              >
                TT
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-suave/30 pt-6 text-xs text-suave">
          <p>© 2026 Kasumi Flowers Atelier. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 md:hidden flex"
      role="complementary"
      aria-label="Contacto rápido"
    >
      <a
        href={negocio.sucursalOaxaca.tel}
        className="flex-1 bg-verde text-white flex flex-col items-center justify-center py-3 text-xs gap-0.5 active:opacity-90"
      >
        <span className="text-base" aria-hidden="true">📞</span>
        Llamar
      </a>
      <a
        href={`mailto:${negocio.email}`}
        className="flex-1 bg-acento text-white flex flex-col items-center justify-center py-3 text-xs gap-0.5 active:opacity-90"
      >
        <span className="text-base" aria-hidden="true">✉</span>
        Escribir
      </a>
    </div>
  );
}
