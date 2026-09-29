import { useState } from 'react';
import { negocio, wa, foto, instrumentos, planes, profesores, horarios } from './data/content';

const IC_WA  = 'M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z';
const IC_TEL = 'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.5.6 3.6a1 1 0 0 1-.3 1l-2.2 2.2Z';
const IC_PIN = 'M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z';
const IC_NOTE = 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z';

function Svg({ d, cls = 'size-5' }: { d: string; cls?: string }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={cls} fill="currentColor"><path d={d} /></svg>;
}

/* ---------- Encabezado ---------- */
function Encabezado() {
  const [open, setOpen] = useState(false);
  const links = [['Planes', '#planes'], ['Instrumentos', '#instrumentos'], ['Maestros', '#maestros'], ['Contacto', '#contacto']];
  return (
    <header className="sticky top-0 z-40 bg-azul text-white">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-semibold text-lg">Lukin Music</a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-6 text-sm">
            {links.map(([t, h]) => (
              <li key={h}><a href={h} className="opacity-80 hover:opacity-100 transition-opacity">{t}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={wa('Hola, quisiera agendar una clase muestra en Lukin Music')}
            className="hidden sm:inline-flex items-center gap-1.5 bg-dorado text-tinta text-sm font-medium px-4 py-2 rounded-full hover:bg-[#D49A10] transition-colors">
            <Svg d={IC_WA} cls="size-4" /> Clase muestra
          </a>
          <button type="button" aria-expanded={open} aria-controls="menu-movil"
            onClick={() => setOpen(!open)}
            className="lg:hidden border border-white/40 rounded-full px-4 py-1.5 text-sm">
            {open ? 'Cerrar' : 'Menú'}
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-white/20 bg-azul">
          <ul className="contenedor py-2 grid">
            {links.map(([t, h]) => (
              <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-3 text-lg opacity-90">{t}</a></li>
            ))}
            <li className="pt-2 pb-3">
              <a href={wa('Hola, quisiera agendar una clase muestra en Lukin Music')}
                className="btn-dorado w-full justify-center">
                <Svg d={IC_WA} cls="size-4" /> Agendar clase muestra
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-azul text-white">
      <div className="contenedor grid md:grid-cols-2 gap-8 items-center py-14 md:py-20">
        <div>
          <p className="text-dorado text-xs uppercase tracking-widest font-medium mb-3">
            {instrumentos.slice(0, 5).join(' · ')}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            En Lukin, tocas<br />desde el primer día.
          </h1>
          <p className="text-white/80 mb-6 max-w-md">
            Escuela de música en Aguascalientes con planes para todas las edades. Clases personalizadas, horarios flexibles y evaluaciones en estudio de grabación.
          </p>
          <p className="text-white/60 text-sm mb-6">{horarios}</p>
          <div className="flex flex-wrap gap-3">
            <a href={wa('Hola, quisiera agendar una clase muestra en Lukin Music')} className="btn-dorado">
              <Svg d={IC_WA} /> Agendar clase muestra
            </a>
            <a href="#planes" className="btn-azul !bg-white/10 hover:!bg-white/20">Ver planes</a>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <img src={foto('hero')} alt="Alumnos de Lukin Music Aguascalientes tocando instrumentos"
            width={900} height={936}
            className="w-full max-h-[420px] object-cover object-top rounded-2xl" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Planes ---------- */
function Planes() {
  return (
    <section id="planes" className="py-16">
      <div className="contenedor">
        <p className="text-dorado text-xs uppercase tracking-widest font-medium mb-2">Planes de estudio</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-azul mb-2">Encuentra tu plan</h2>
        <p className="text-muted mb-10 max-w-xl">Metodología práctica y adaptada a cada etapa. Plan semestral con 8 niveles y evaluación final grabada en estudio.</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {planes.map(p => (
            <div key={p.nombre} className="rounded-2xl overflow-hidden border border-gris bg-white hover:shadow-md transition-shadow">
              <img src={foto(p.foto)} alt={p.nombre} width={800} height={800}
                className="w-full aspect-square object-cover" />
              <div className="p-5">
                <span className="inline-block bg-dorado/10 text-[#A37200] text-xs font-medium px-3 py-1 rounded-full mb-3">{p.edad}</span>
                <h3 className="font-semibold text-azul mb-2">{p.nombre}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.texto}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href={wa('Hola, quisiera información sobre los planes de Lukin Music')}
            className="btn-azul">
            <Svg d={IC_WA} /> Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Instrumentos ---------- */
function Instrumentos() {
  return (
    <section id="instrumentos" className="py-14 bg-gris">
      <div className="contenedor">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-dorado text-xs uppercase tracking-widest font-medium mb-2">Instrumentos disponibles</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-azul mb-4">Enseñamos los instrumentos que te gustan</h2>
            <p className="text-muted mb-6 max-w-md">Aprende con base en tus gustos musicales. Aceptamos alumnos desde los 4 años.</p>
            <ul className="flex flex-wrap gap-2 mb-6">
              {instrumentos.map(i => (
                <li key={i} className="bg-white border border-gris text-tinta text-sm px-4 py-2 rounded-full font-medium">
                  <Svg d={IC_NOTE} cls="size-4 inline mr-1.5 text-dorado align-text-bottom" />{i}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={foto('alumnos-1')} alt="Alumnos de Lukin Music en clase" width={903} height={1200}
              className="rounded-xl w-full aspect-[3/4] object-cover" />
            <div className="flex flex-col gap-3">
              <img src={foto('alumnos-2')} alt="Alumno de Lukin Music en evaluación final" width={903} height={1200}
                className="rounded-xl w-full aspect-square object-cover" />
              <img src={foto('fachada')} alt="Fachada de Lukin Music Aguascalientes" width={900} height={1200}
                className="rounded-xl w-full aspect-square object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Maestros ---------- */
function Maestros() {
  return (
    <section id="maestros" className="py-16">
      <div className="contenedor">
        <p className="text-dorado text-xs uppercase tracking-widest font-medium mb-2">Quiénes enseñan</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-azul mb-2">Maestros</h2>
        <p className="text-muted mb-10 max-w-xl">Una comunidad de artistas que nos une el gusto por la música y la pasión de crearla.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {profesores.map(p => (
            <div key={p.nombre} className="text-center">
              <img src={foto(p.foto)} alt={p.nombre} width={578} height={600}
                className="w-28 h-28 rounded-full object-cover object-top mx-auto mb-3 border-2 border-dorado" />
              <p className="font-semibold text-tinta">{p.nombre}</p>
              <p className="text-muted text-sm">{p.rol}</p>
            </div>
          ))}
          <div className="text-center flex items-center justify-center">
            <div className="bg-gris rounded-2xl p-6">
              <img src={foto('alumnos-3')} alt="Alumno con reconocimiento Lukin Music" width={903} height={1200}
                className="w-28 h-28 rounded-full object-cover object-top mx-auto mb-3" />
              <p className="text-sm text-muted">Y más maestros</p>
            </div>
          </div>
          <div className="text-center flex items-center justify-center">
            <div className="bg-gris rounded-2xl p-6">
              <img src={foto('alumna-yara')} alt="Alumna de Lukin Music" width={900} height={506}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-3" />
              <p className="text-sm text-muted">Evaluaciones en estudio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contacto ---------- */
function Contacto() {
  return (
    <section id="contacto" className="py-16 bg-gris">
      <div className="contenedor">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-dorado text-xs uppercase tracking-widest font-medium mb-2">Visítanos</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-azul mb-6">¿Dónde encontrarnos?</h2>
            <ul className="space-y-4 text-muted">
              <li className="flex gap-3">
                <Svg d={IC_PIN} cls="size-5 text-azul shrink-0 mt-0.5" />
                <span>{negocio.direccion}<br /><span className="text-xs">Atrás de Plaza Universidad</span></span>
              </li>
              <li className="flex gap-3">
                <Svg d={IC_TEL} cls="size-5 text-azul shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${negocio.telefono}`} className="block hover:text-azul transition-colors">{negocio.telefono}</a>
                  <a href={`tel:${negocio.movil}`} className="block hover:text-azul transition-colors">{negocio.movil}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Svg d={IC_WA} cls="size-5 text-azul shrink-0 mt-0.5" />
                <a href={wa('Hola, quisiera información sobre las clases de Lukin Music')} className="hover:text-azul transition-colors">WhatsApp {negocio.movil}</a>
              </li>
            </ul>
            <p className="text-muted text-sm mt-4">{horarios}</p>
            <a href={wa('Hola, quisiera agendar mi clase muestra en Lukin Music')}
              className="btn-azul mt-8 inline-flex">
              <Svg d={IC_WA} /> Agendar clase muestra
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <iframe
              src={negocio.mapaEmbed}
              title="Mapa Lukin Music Aguascalientes"
              width="100%" height="320" style={{ border: 0 }}
              allowFullScreen referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-72 sm:h-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pie ---------- */
function Pie() {
  return (
    <footer className="bg-azul text-white/70 py-8 text-sm">
      <div className="contenedor flex flex-col sm:flex-row justify-between gap-4">
        <p className="text-white font-medium">Lukin Music · Escuela de Música Aguascalientes</p>
        <p>© 2009–2026 Lukin Music</p>
      </div>
    </footer>
  );
}

/* ---------- Barra WhatsApp ---------- */
function BarraWa() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-azul shadow-lg">
      <a href={wa('Hola, quisiera agendar una clase muestra en Lukin Music')}
        className="flex items-center justify-center gap-2 py-4 text-white font-medium">
        <Svg d={IC_WA} cls="size-5" /> Agendar clase muestra
      </a>
    </div>
  );
}

/* ---------- JSON-LD ---------- */
function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MusicSchool',
    name: `${negocio.nombre} — ${negocio.subtitulo}`,
    url: 'https://www.lukinmusic.com/',
    image: foto('hero'),
    telephone: negocio.movil,
    email: negocio.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: negocio.direccion,
      addressLocality: 'Aguascalientes',
      addressRegion: 'Aguascalientes',
      postalCode: '20130',
      addressCountry: 'MX',
    },
    sameAs: [
      'https://www.facebook.com/LukinEscuela',
      'https://www.instagram.com/lukinmusic/',
      'https://www.youtube.com/@LukinMusic',
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default function App() {
  return (
    <>
      <JsonLd />
      <Encabezado />
      <main>
        <Hero />
        <Planes />
        <Instrumentos />
        <Maestros />
        <Contacto />
      </main>
      <Pie />
      <BarraWa />
    </>
  );
}
