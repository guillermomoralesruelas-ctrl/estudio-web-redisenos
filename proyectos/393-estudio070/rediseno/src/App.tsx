import { useState } from 'react';
import { negocio, portada, preguntas, servicios, testimonios, wa, waGeneral } from './data/content';

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

function Encabezado() {
  return (
    <header className="noche sticky top-0 z-40 bg-oscuro/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-titulo text-xl text-white">Estudio <span className="text-ambar">070</span></a>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-[0.95rem] text-white/85 md:flex">
          <a href="#hoja" className="hover:text-ambar">Servicios</a>
          <a href="#equipo" className="hover:text-ambar">Quiénes somos</a>
          <a href="#preguntas" className="hover:text-ambar">Preguntas</a>
          <a href="#contacto" className="hover:text-ambar">Contacto</a>
        </nav>
        <a href={waGeneral} className="btn !min-h-[40px] !px-4 !py-2 text-sm" target="_blank" rel="noopener"><IconoWa className="h-4 w-4" /> WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="noche relative isolate overflow-hidden bg-oscuro">
      <img src={portada.src} width={portada.w} height={portada.h} alt={portada.alt} className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_60%] opacity-75" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-oscuro via-oscuro/60 to-oscuro/20" aria-hidden="true" />
      <div className="contenedor flex min-h-[84vh] flex-col justify-end pb-14 pt-28 sm:pb-20">
        <p className="mb-3 font-semibold text-ambar">Fotógrafos de bodas, eventos y marcas en CDMX</p>
        <h1 className="max-w-4xl text-4xl sm:text-6xl">Fotografía de bodas, 15 años y eventos</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/90">Un estudio fotográfico de profesionales dedicados a la fotografía y video para bodas, 15 años y eventos, con sede en Ciudad de México. Sabina Silva y Cristhian Cañizales asisten presencialmente a todos los eventos.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waGeneral} className="btn" target="_blank" rel="noopener"><IconoWa /> Pedir asesoría por WhatsApp</a>
          <a href="#hoja" className="btn-claro">Ver su trabajo</a>
        </div>
      </div>
    </section>
  );
}

function Circulo() {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute -inset-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)]" aria-hidden="true">
      <path className="lapiz" pathLength={1} d="M52 4 C80 3 97 22 96 50 C95 80 76 97 49 96 C21 95 4 78 4 50 C4 24 22 6 56 7" fill="none" stroke="#e7a203" strokeWidth="2.6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function HojaDeContactos() {
  const [idServicio, setIdServicio] = useState(servicios[0].id);
  const [cuadro, setCuadro] = useState(0);
  const servicio = servicios.find((s) => s.id === idServicio)!;
  const numero = servicios.indexOf(servicio) + 1;
  const elegida = servicio.fotos[cuadro];

  return (
    <section id="hoja" className="noche bg-carbon py-20 text-white/85 sm:py-28">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl">La hoja de contactos</h2>
          <p className="mt-5 text-lg">Así revisa un fotógrafo su rollo: todos los cuadros en una hoja, y un círculo en el que se queda. Elige qué vas a celebrar o qué necesita tu marca, y marca el cuadro que quieras ver en grande.</p>
        </div>

        <div role="tablist" aria-label="Servicios" className="mt-10 flex flex-wrap gap-2">
          {servicios.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={s.id === idServicio}
              onClick={() => { setIdServicio(s.id); setCuadro(0); }}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${s.id === idServicio ? 'border-ambar bg-ambar text-oscuro' : 'border-white/25 hover:border-white/70'}`}
            >
              {s.nombre}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <div key={`${idServicio}-${cuadro}`} className="revelado overflow-hidden rounded-md bg-oscuro">
              <img src={elegida.src} width={elegida.w} height={elegida.h} alt={elegida.alt} className="mx-auto max-h-[34rem] w-auto max-w-full object-contain" />
            </div>
            <div className="tira mt-5 rounded-md px-3 py-6">
              <ul className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                {servicio.fotos.map((fo, i) => (
                  <li key={fo.src} className="min-w-0">
                    <button type="button" onClick={() => setCuadro(i)} aria-pressed={i === cuadro} aria-label={`Ver en grande: ${fo.alt}`} className="relative block w-full">
                      <img src={fo.src} width={fo.w} height={fo.h} alt="" loading="lazy" className={`aspect-square w-full object-cover transition-opacity ${i === cuadro ? '' : 'opacity-70 hover:opacity-100'}`} />
                      {i === cuadro && <Circulo key={`${idServicio}-${i}`} />}
                    </button>
                    <span className="cifra mt-1 block text-center text-[0.7rem] font-semibold tracking-wide text-ambar">070-{numero}{String.fromCharCode(65 + i)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="text-2xl sm:text-3xl">{servicio.titulo}</h3>
            <p className="mt-4">{servicio.texto}</p>
            <p className="mt-4 border-l-2 border-ambar pl-4 text-white">{servicio.quien}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={wa(servicio.mensaje)} className="btn" target="_blank" rel="noopener"><IconoWa /> Preguntar por {servicio.nombre.toLowerCase()}</a>
              <a href={servicio.pagina} className="btn-claro" target="_blank" rel="noopener">Ver la galería completa</a>
            </div>
            <p className="mt-6 text-sm text-white/70">Los precios no están publicados en su sitio; cada paquete maneja un mínimo de fotos según las horas del evento, y la asesoría es gratuita.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section id="equipo" className="py-20 sm:py-28">
      <div className="contenedor grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-4xl">Dos fotógrafos en cada evento</h2>
          <p className="mt-6">Bajo la dirección fotográfica de <strong>Sabina Silva</strong> y <strong>Cristhian Cañizales</strong>, ambos se encargan de asistir presencialmente a todos los eventos, para así brindarte atención personalizada y de máxima calidad en cada uno de nuestros servicios.</p>
          <p className="mt-4">Más de 8 años dedicados a la fotografía y artes visuales, ayudando a nuestros clientes a capturar los momentos más importantes de sus vidas con servicios profesionales y personalizados.</p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="border-t border-oscuro/15 pt-4">
              <dt className="font-titulo text-xl text-oscuro">Sabina Silva</dt>
              <dd className="mt-1">Fotógrafa. Dirige las sesiones de embarazo y recién nacidos.</dd>
            </div>
            <div className="border-t border-oscuro/15 pt-4">
              <dt className="font-titulo text-xl text-oscuro">Cristhian Cañizales</dt>
              <dd className="mt-1">Fotógrafo. Más de 6 años en fotografía de productos y alimentos.</dd>
            </div>
          </dl>
        </div>
        <div className="grid min-w-0 gap-8">
          {testimonios.map((t) => (
            <figure key={t.quien} className="rounded-md bg-white p-6">
              <blockquote className="text-[1.05rem]">“{t.texto}”</blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-ambar-hondo">{t.quien}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="bg-white py-20 sm:py-28">
      <div className="contenedor grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="text-3xl sm:text-4xl">Preguntas frecuentes</h2>
        <div className="min-w-0 divide-y divide-oscuro/15 border-y border-oscuro/15">
          {preguntas.map((q) => (
            <div key={q.p} className="py-5">
              <h3 className="text-lg">{q.p}</h3>
              <p className="mt-2">{q.r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="noche bg-oscuro py-20 text-white/85 sm:py-28">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-5xl">¡Hagamos realidad tu sueño!</h2>
          <p className="mt-5">Escríbenos para recibir asesoría gratuita y personalizada, o agenda una cita en el estudio sin ningún compromiso.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.telefonoVisible}</a>
            <a href={`mailto:${negocio.correo}`} className="btn-claro">{negocio.correo}</a>
          </div>
        </div>
        <dl className="grid min-w-0 gap-6 sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-white">Estudio</dt>
            <dd className="mt-1">{negocio.zona}. <a href={negocio.mapa} className="enlace" target="_blank" rel="noopener">Ver en Google Maps</a></dd>
          </div>
          <div>
            <dt className="font-semibold text-white">Redes</dt>
            <dd className="mt-1"><a href={negocio.instagram} className="enlace" target="_blank" rel="noopener">Instagram @estudio070</a></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="noche bg-oscuro pb-28 text-sm text-white/70 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
        <p className="font-titulo text-lg text-white">Estudio <span className="text-ambar">070</span></p>
        <p>Fotógrafos de bodas, eventos y marcas en Ciudad de México</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-oscuro text-[0.8rem] font-semibold text-white md:hidden">
      <a href={waGeneral} className="flex flex-col items-center gap-1 bg-ambar py-3 text-oscuro" target="_blank" rel="noopener"><IconoWa />WhatsApp</a>
      <a href={`tel:+${negocio.whatsapp}`} className="flex flex-col items-center gap-1 py-3">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>
        Llamar
      </a>
      <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-3" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
        Cómo llegar
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#hoja" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ambar focus:px-4 focus:py-2 focus:text-oscuro">Ir a servicios</a>
      <Encabezado />
      <main>
        <Portada />
        <HojaDeContactos />
        <Equipo />
        <Preguntas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
