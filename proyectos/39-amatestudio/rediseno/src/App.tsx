import { useState } from 'react';
import { foto, inicios, negocio, portafolio, resenas, rosamorada, wa } from './data/content';


function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>;
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>;
}
function IconoCorreo({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
}

const secciones = [['#empiezas', 'Servicios'], ['#proyectos', 'Proyectos'], ['#equipo', 'Estudio'], ['#contacto', 'Contacto']] as const;
const waHola = wa('Hola, me interesa agendar la consulta gratuita con AMATE Studio.');
const correo = `mailto:${negocio.correo}?subject=${encodeURIComponent('Consulta de servicios')}`;
const colorArea = { Arquitectura: 'bg-amate', Interiores: 'bg-[#4f5b43]', Construcción: 'bg-carbon', Desarrollo: 'bg-piedra' } as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-carbon/10 bg-cal/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-[1.3rem] tracking-[0.18em] text-carbon">AMATE<span className="text-amate"> STUDIO</span></a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-piedra hover:text-carbon">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !px-4 !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">Agendar consulta</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src={foto('hero')} alt="Terraza con alberca infinita frente a los cerros de Puerto Vallarta al atardecer" width={1400} height={933} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-carbon via-carbon/60 to-carbon/20 md:bg-gradient-to-r md:from-carbon/90 md:via-carbon/50 md:to-transparent" aria-hidden="true" />
      <div className="contenedor pb-16 pt-48 md:py-32">
        <p className="tracking-[0.2em] text-lino">{negocio.zona.toUpperCase()}</p>
        <h1 className="mt-4 max-w-3xl text-[2.7rem] sm:text-[4.2rem]">Arquitectura, interiorismo y construcción en Puerto Vallarta</h1>
        <p className="mt-5 max-w-xl text-[1.12rem]">Un solo equipo del dibujo a la obra, con taller de carpintería propio: lo que se dibuja es lo que se construye.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#empiezas" className="btn">¿Desde dónde empiezas?</a>
          <a href="#proyectos" className="btn-claro">Ver proyectos</a>
        </div>
      </div>
    </section>
  );
}

function Empiezas() {
  const [id, setId] = useState('remodelar');
  const inicio = inicios.find((i) => i.id === id)!;
  return (
    <section id="empiezas" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="tracking-[0.2em] text-amate">UN SOLO EQUIPO, DE PRINCIPIO A FIN</p>
        <h2 className="mt-3 text-[2.5rem] sm:text-[3.6rem]">¿Desde dónde empiezas?</h2>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Punto de partida">
          {inicios.map((i) => (
            <button key={i.id} type="button" aria-pressed={i.id === id} onClick={() => setId(i.id)}
              className={`min-h-[48px] border px-4 transition-colors ${i.id === id ? 'border-carbon bg-carbon text-cal' : 'border-carbon/25 bg-white hover:border-carbon'}`}>{i.etiqueta}</button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_1fr]" aria-live="polite">
          <ol className="relative grid gap-0">
            {inicio.pasos.map((p, n) => (
              <li key={p.nombre} className="relative grid grid-cols-[3rem_1fr] gap-4 pb-6">
                {n < inicio.pasos.length - 1 && <span className="absolute left-[1.45rem] top-12 h-[calc(100%-3rem)] w-px bg-carbon/20" aria-hidden="true" />}
                <span className={`grid h-12 w-12 place-items-center font-display text-[1.3rem] text-white ${colorArea[p.area]}`}>{n + 1}</span>
                <span>
                  <span className="text-[0.8rem] tracking-[0.15em] text-piedra">{p.area.toUpperCase()}</span>
                  <strong className="block font-display text-[1.35rem] font-normal">{p.nombre}</strong>
                  <span className="text-piedra">{p.texto}</span>
                </span>
              </li>
            ))}
          </ol>
          <figure className="self-start">
            <img src={foto(inicio.ejemplo.foto)} alt={inicio.ejemplo.alt} width={1400} height={1050} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            <figcaption className="mt-3 flex items-baseline justify-between gap-3"><span className="font-display text-[1.3rem]">{inicio.ejemplo.nombre}</span><span className="text-[0.95rem] text-piedra">{inicio.ejemplo.tipo}</span></figcaption>
            <a href={wa(`Hola, AMATE Studio. ${inicio.etiqueta.replace('Tengo', 'tengo').replace('Soy', 'soy')} y me interesa la consulta gratuita para ver cómo empezar.`)} target="_blank" rel="noopener" className="btn mt-5 w-full"><IconoWa /> Contarles mi caso</a>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Proyectos() {
  return (
    <section id="proyectos" className="bg-arena py-16 sm:py-24">
      <div className="contenedor">
        <p className="tracking-[0.2em] text-amate">OBRA REAL · CLIENTES REALES</p>
        <h2 className="mt-3 text-[2.5rem] sm:text-[3.6rem]">Rosamorada H5</h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <img src={foto('rosamorada-h5')} alt="Recámara de Rosamorada H5 con muro tipo mármol de vetas doradas, buró negro y lámpara encendida" width={1400} height={1867} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          <div>
            <p className="font-display text-[1.5rem]">Burgundy Style · Versalles, Puerto Vallarta</p>
            <p className="mt-4 text-piedra">{rosamorada.texto}</p>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              {rosamorada.datos.map(([k, v]) => <div key={k} className="border-t border-carbon/20 pt-2"><dt className="text-[0.85rem] tracking-[0.15em] text-piedra">{k.toUpperCase()}</dt><dd>{v}</dd></div>)}
            </dl>
          </div>
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {[['harbor-401', 'Harbor 401', 'Interiorismo', 'Sala y cocina abiertas de Harbor 401 frente al mar al atardecer'], ['harbor-107', 'Harbor 107', 'Interiorismo', 'Recámara de Harbor 107 en tonos claros'], ['zul', 'ZUL', 'Arquitectura · Construcción', 'Fachada de ZUL con celosía de ladrillo y bugambilias']].map(([f, n, t, alt]) => (
            <li key={f}>
              <img src={foto(f)} alt={alt} width={1400} height={1050} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <p className="mt-2 flex justify-between gap-3"><span className="font-display text-[1.2rem]">{n}</span><span className="text-[0.95rem] text-piedra">{t}</span></p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-piedra">{portafolio.total} proyectos en su portafolio: {portafolio.nombres.join(', ')}.</p>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section id="equipo" className="oscuro py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[2.3rem] sm:text-[3.2rem]">Arquitecto, interiorista y constructor, en uno</h2>
          <p className="mt-5">El problema de contratarlos por separado es que nadie responde por el resultado final. En AMATE Studio los tres son uno, con carpintería propia: cocinas, closets, puertas y muebles de baño salen de su taller.</p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[['servicio-arquitectura', 'Fachada de una casa con celosía de concreto diseñada por AMATE Studio'], ['servicio-interiorismo', 'Recámara con vista al mar diseñada por AMATE Studio'], ['servicio-construccion', 'Edificio en construcción de AMATE Studio']].map(([f, alt]) => (
              <img key={f} src={foto(f)} alt={alt} width={900} height={1200} loading="lazy" className="aspect-[3/4] w-full object-cover" />
            ))}
          </div>
        </div>
        <ul className="grid content-start gap-4">
          {resenas.map((r) => (
            <li key={r.autor} className="border border-cal/15 p-6">
              <p className="text-lino" aria-label="5 estrellas">★★★★★</p>
              <blockquote className="mt-2 text-[1.08rem]">“{r.texto}”</blockquote>
              <p className="mt-3 text-lino">{r.autor} · {r.fuente}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-16 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="text-[2.5rem] sm:text-[3.6rem]">La primera consulta es gratuita</h2>
          <p className="mt-4 max-w-xl text-piedra">En 30 minutos sabes si tu proyecto es posible, cómo se logra y si son el equipo que necesitas.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={waHola} target="_blank" rel="noopener" className="btn"><IconoWa /> Agendar por WhatsApp</a>
            <a href={correo} className="btn-linea"><IconoCorreo /> {negocio.correo}</a>
          </div>
        </div>
        <div className="border border-carbon/15 bg-white p-6 sm:p-8">
          <p className="flex gap-2"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-amate" />{negocio.ciudad}, México</p>
          <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace ml-7 mt-1 inline-block">Buscar en Google Maps</a>
          <p className="mt-3 flex gap-2"><IconoTel className="mt-1 h-5 w-5 shrink-0 text-amate" /><a href={`tel:${negocio.tel}`} className="enlace">{negocio.telVisible}</a></p>
          <p className="mt-3"><a href={negocio.instagram} target="_blank" rel="noopener" className="enlace">Instagram @amatestudiomx</a></p>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro pb-24 pt-10 md:pb-10">
      <div className="contenedor flex flex-wrap items-baseline justify-between gap-4">
        <p className="font-display text-[1.2rem] tracking-[0.18em] text-cal">AMATE STUDIO</p>
        <p className="text-[0.95rem]">Architecture | Interior Design · Puerto Vallarta, Jalisco</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-cal/15 bg-carbon text-cal md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-amate text-[0.9rem] font-medium text-white"><IconoWa />WhatsApp</a>
      <a href={`tel:${negocio.tel}`} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-medium"><IconoTel />Llamar</a>
      <a href={correo} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-medium"><IconoCorreo />Correo</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Empiezas />
        <Proyectos />
        <Equipo />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
