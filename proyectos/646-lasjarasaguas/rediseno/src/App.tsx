import { useState } from 'react';
import { negocio, wa, waSpa, foto, accesos, serviciosSpa, actividades, testimonios } from './data/content';

const IC_WA = 'M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z';
const IC_TEL = 'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.5.6 3.6a1 1 0 0 1-.3 1l-2.2 2.2Z';
const IC_PIN = 'M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z';
const IC_CHECK = 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z';

function Svg({ d, cls = 'size-5' }: { d: string; cls?: string }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={cls} fill="currentColor"><path d={d} /></svg>;
}

/* ---------- Encabezado ---------- */
function Encabezado() {
  const [open, setOpen] = useState(false);
  const links = [
    ['Accesos', '#accesos'], ['SPA', '#spa'], ['Actividades', '#actividades'],
    ['Opiniones', '#opiniones'], ['Contacto', '#contacto'],
  ];
  return (
    <header className="sticky top-0 z-40 bg-verde/95 backdrop-blur text-white">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-semibold text-lg tracking-wide">Las Jaras</a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-6 text-sm">
            {links.map(([t, h]) => (
              <li key={h}><a href={h} className="opacity-80 hover:opacity-100 transition-opacity">{t}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={wa('Hola, quisiera información sobre Las Jaras Aguas Termales')}
            className="hidden sm:inline-flex items-center gap-1.5 bg-white text-verde text-sm font-medium px-4 py-2 rounded-full hover:bg-crema transition-colors">
            <Svg d={IC_WA} cls="size-4" /> Reservar
          </a>
          <button type="button" aria-expanded={open} aria-controls="menu-movil"
            onClick={() => setOpen(!open)}
            className="lg:hidden border border-white/40 rounded-full px-4 py-1.5 text-sm">
            {open ? 'Cerrar' : 'Menú'}
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-white/20 bg-verde">
          <ul className="contenedor py-2 grid">
            {links.map(([t, h]) => (
              <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-3 text-lg opacity-90">{t}</a></li>
            ))}
            <li className="pt-2 pb-3">
              <a href={wa('Hola, quisiera información sobre Las Jaras Aguas Termales')}
                className="btn-verde bg-white !text-verde w-full justify-center">
                <Svg d={IC_WA} cls="size-4" /> Reservar
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
    <section id="inicio" className="relative overflow-hidden">
      <img src={foto('piletas')} alt="Piletas termales de Las Jaras rodeadas de naturaleza"
        width={1800} height={570}
        className="w-full h-[55vw] max-h-[520px] object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-tinta/70 via-tinta/30 to-transparent flex items-end">
        <div className="contenedor pb-12 text-white">
          <p className="text-calido uppercase tracking-widest text-xs font-medium mb-3">Aguas Termales · Naturaleza · Bienestar</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-xl mb-2">
            Volver a los elementos.<br />Volver a lo esencial.
          </h1>
          <p className="mt-3 mb-6 text-white/80 max-w-md text-sm sm:text-base">
            Aguas termales, spa y naturaleza en un entorno único en Jalisco. Ven por un día o quédate a dormir.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={wa('Hola, quisiera reservar un acceso termal en Las Jaras')}
              className="btn-verde">
              <Svg d={IC_WA} /> Reservar por WhatsApp
            </a>
            <a href="#accesos" className="btn-contorno !border-white !text-white hover:!bg-white hover:!text-verde">
              Ver accesos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Accesos ---------- */
function Accesos() {
  return (
    <section id="accesos" className="py-16 bg-crema">
      <div className="contenedor">
        <p className="text-calido text-xs uppercase tracking-widest font-medium mb-2">Por un día</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-verde mb-2">Elige tu acceso termal</h2>
        <p className="text-piedra mb-10 max-w-xl">Menciona en recepción qué acceso vas a vivir. Horario de 7:00 a 22:00 h.</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {accesos.map((a, i) => (
            <div key={a.nombre}
              className={`rounded-2xl p-6 flex flex-col border ${i === 1 ? 'bg-verde text-white border-verde' : 'bg-white border-crema'}`}>
              <p className={`text-xs uppercase tracking-wider mb-1 font-medium ${i === 1 ? 'text-white/60' : 'text-calido'}`}>{a.descripcion}</p>
              <h3 className="font-semibold text-lg mb-1">{a.nombre}</h3>
              <p className="text-2xl font-bold mb-4">{a.precio} <span className={`text-sm font-normal ${i === 1 ? 'text-white/60' : 'text-piedra'}`}>por persona</span></p>
              <ul className="space-y-2 mb-6 flex-1">
                {a.incluye.map(inc => (
                  <li key={inc} className="flex items-start gap-2 text-sm">
                    <Svg d={IC_CHECK} cls={`size-4 mt-0.5 shrink-0 ${i === 1 ? 'text-calido' : 'text-verde'}`} />
                    {inc}
                  </li>
                ))}
              </ul>
              <a href={wa(`Hola, quisiera reservar el ${a.nombre} (${a.precio}) en Las Jaras`)}
                className={`text-center text-sm font-medium py-2.5 rounded-full transition-colors ${
                  i === 1 ? 'bg-white text-verde hover:bg-crema' : 'bg-verde text-white hover:bg-[#254425]'
                }`}>
                Reservar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SPA ---------- */
function Spa() {
  return (
    <section id="spa" className="py-16">
      <div className="contenedor">
        <p className="text-calido text-xs uppercase tracking-widest font-medium mb-2">SPA El Sendero</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-verde mb-2">Bienestar que nace de la naturaleza</h2>
        <p className="text-piedra mb-10 max-w-xl">Horario de 9:00 a 18:00 h. Reserva tu terapia por WhatsApp.</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {serviciosSpa.map(s => (
            <div key={s.titulo} className="rounded-2xl overflow-hidden bg-white border border-crema">
              <img src={foto(s.foto)} alt={s.titulo} width={503} height={365}
                className="w-full aspect-[4/3] object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-verde mb-2">{s.titulo}</h3>
                <p className="text-piedra text-sm leading-relaxed">{s.texto}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href={waSpa('Hola, quisiera reservar una terapia en el SPA El Sendero de Las Jaras')}
            className="btn-verde">
            <Svg d={IC_WA} /> Reservar terapia de SPA
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Actividades ---------- */
function Actividades() {
  return (
    <section id="actividades" className="py-16 bg-crema">
      <div className="contenedor">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-calido text-xs uppercase tracking-widest font-medium mb-2">Hoy en Las Jaras</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-verde mb-3">Tu día ya tiene un ritmo</h2>
            <p className="text-piedra mb-8 max-w-sm">Actividades que invitan a pausar, respirar y reconectar contigo. Sujetas a programación diaria.</p>
            <ul className="space-y-3">
              {actividades.map(a => (
                <li key={a.nombre} className="flex items-center gap-4">
                  <span className="text-calido font-mono text-sm font-medium w-12 shrink-0">{a.hora}</span>
                  <span className="text-tinta font-medium">{a.nombre}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img src={foto('historias')} alt="Jardín termal y actividades en Las Jaras Aguas Termales"
              width={720} height={900}
              className="w-full max-h-[420px] object-cover object-center rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonios ---------- */
function Testimonios() {
  return (
    <section id="opiniones" className="py-16 bg-verde text-white">
      <div className="contenedor">
        <p className="text-calido text-xs uppercase tracking-widest font-medium mb-2">Lo que dicen</p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Miles de personas ya vivieron Las Jaras</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonios.map(t => (
            <div key={t.autor} className="bg-white/10 rounded-2xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">"{t.texto}"</p>
              <div>
                <p className="font-medium text-sm">{t.autor}</p>
                <p className="text-white/50 text-xs">{t.fuente}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contacto ---------- */
function Contacto() {
  return (
    <section id="contacto" className="py-16 bg-crema">
      <div className="contenedor">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-calido text-xs uppercase tracking-widest font-medium mb-2">Visítanos</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-verde mb-6">¿Cómo llegar?</h2>
            <ul className="space-y-4 text-piedra">
              <li className="flex gap-3">
                <Svg d={IC_PIN} cls="size-5 text-verde shrink-0 mt-0.5" />
                <span>{negocio.direccion}</span>
              </li>
              <li className="flex gap-3">
                <Svg d={IC_TEL} cls="size-5 text-verde shrink-0 mt-0.5" />
                <a href={`tel:${negocio.telefono}`} className="hover:text-verde transition-colors">{negocio.telefono}</a>
              </li>
              <li className="flex gap-3">
                <Svg d={IC_WA} cls="size-5 text-verde shrink-0 mt-0.5" />
                <a href={wa('Hola, tengo una pregunta sobre Las Jaras')} className="hover:text-verde transition-colors">+52 33 2929 7046</a>
              </li>
            </ul>
            <a href={wa('Hola, quisiera reservar mi visita a Las Jaras Aguas Termales')}
              className="btn-verde mt-8 inline-flex">
              <Svg d={IC_WA} /> Enviar mensaje
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <iframe
              src={negocio.mapaEmbed}
              title="Mapa Las Jaras Aguas Termales"
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
    <footer className="bg-tinta text-white/70 py-8 text-sm">
      <div className="contenedor flex flex-col sm:flex-row justify-between gap-4">
        <p className="text-white font-medium">Las Jaras Aguas Termales</p>
        <p>© 2026 Las Jaras Aguas Termales · Jalisco, México</p>
      </div>
    </footer>
  );
}

/* ---------- Barra WhatsApp ---------- */
function BarraWa() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-verde shadow-lg">
      <a href={wa('Hola, quisiera reservar en Las Jaras Aguas Termales')}
        className="flex items-center justify-center gap-2 py-4 text-white font-medium">
        <Svg d={IC_WA} cls="size-5" /> Reservar por WhatsApp
      </a>
    </div>
  );
}

/* ---------- JSON-LD ---------- */
function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SpaOrBeautyBusiness',
    name: negocio.nombre,
    url: 'https://lasjaras.mx/',
    image: foto('piletas'),
    telephone: negocio.telefono,
    email: negocio.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: negocio.direccion,
      addressLocality: 'La Garita',
      addressRegion: 'Jalisco',
      addressCountry: 'MX',
    },
    sameAs: [
      'https://www.facebook.com/lasjarasaguastermales/',
      'https://www.instagram.com/lasjarasaguastermales/',
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
        <Accesos />
        <Spa />
        <Actividades />
        <Testimonios />
        <Contacto />
      </main>
      <Pie />
      <BarraWa />
    </>
  );
}
