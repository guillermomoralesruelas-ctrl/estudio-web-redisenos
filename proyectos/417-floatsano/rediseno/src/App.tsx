import { useState } from 'react';
import { extras, filosofia, flotacion, foto, historia, negocio, otros, resenas, wa, waInfo } from './data/content';

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

const secciones = [['#flotar', 'Flotación'], ['#servicios', 'Sauna y masajes'], ['#historia', 'Nosotros'], ['#contacto', 'Contacto']] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-noche/10 bg-sal/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-[1.6rem] text-noche">Float Sano</a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-piedra hover:text-noche">{t}</a></li>)}</ul>
        </nav>
        <a href={waInfo} className="btn-cantera !min-h-[42px] !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">Reservar</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src={foto('cabinas')} alt="Las dos cabinas de flotación de Float Sano, una iluminada de azul y otra de ámbar" width={1200} height={457} fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-noche via-noche/70 to-noche/30" aria-hidden="true" />
      <div className="contenedor py-20 sm:py-28">
        <p className="font-bold text-ambar">Recupera, relaja, repite</p>
        <h1 className="mt-3 max-w-3xl text-[2.6rem] sm:text-[3.8rem]">Spa holístico en el Centro de San Miguel de Allende</h1>
        <p className="mt-5 max-w-xl text-[1.1rem]">Flotación, sauna infrarrojo y masajes en un negocio familiar, con los mejores precios posibles para que el autocuidado sea parte de tu rutina.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#flotar" className="btn">Descubre cómo flotar</a>
          <a href={waInfo} className="btn-claro" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.whatsappTexto}</a>
        </div>
      </div>
    </section>
  );
}

function Cabina({ tapa, luz, musica }: { tapa: boolean; luz: boolean; musica: boolean }) {
  const agua = luz ? '#2f5fd0' : '#24386e';
  return (
    <svg viewBox="0 -70 520 350" className="h-auto w-full" role="img"
      aria-label={`Cabina de flotación con la tapa ${tapa ? 'cerrada' : 'abierta'}, la luz ${luz ? 'encendida' : 'apagada'} y ${musica ? 'con' : 'sin'} música`}>
      <defs>
        <radialGradient id="brillo" cx="50%" cy="70%" r="60%"><stop offset="0" stopColor="#9fb8ff" stopOpacity={luz ? 0.75 : 0} /><stop offset="1" stopColor="#9fb8ff" stopOpacity="0" /></radialGradient>
        <clipPath id="tina"><path d="M60 170 C60 238 420 238 420 170 Z" /></clipPath>
      </defs>
      <ellipse cx="240" cy="250" rx="200" ry="12" fill="#1d2b5a" opacity="0.12" />
      {/* Interior: brillo de la luz y agua con la persona flotando. */}
      <ellipse cx="240" cy="165" rx="170" ry="70" fill="url(#brillo)" />
      <g clipPath="url(#tina)">
        <rect x="40" y="176" width="400" height="80" fill={agua} />
        <path className="onda" d="M40 178 q20 -5 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke="#9fb8ff" strokeWidth="2" opacity="0.7" />
      </g>
      <g fill="#f6f1e8">
        <circle cx="140" cy="172" r="11" />
        <ellipse cx="228" cy="176" rx="78" ry="9" />
        <ellipse cx="190" cy="170" rx="30" ry="5" opacity="0.9" />
      </g>
      {/* Tina */}
      <path d="M60 170 C60 238 420 238 420 170" fill="none" stroke="#1d2b5a" strokeWidth="6" strokeLinecap="round" />
      {/* Tapa con bisagra a la izquierda */}
      <g className="tapa" style={{ transform: tapa ? 'rotate(0deg)' : 'rotate(-30deg)' }}>
        <path d="M60 170 C60 70 420 70 420 170" fill={tapa ? 'rgba(29,43,90,0.18)' : 'rgba(29,43,90,0.06)'} stroke="#1d2b5a" strokeWidth="6" strokeLinecap="round" />
        {luz ? <circle cx="240" cy="96" r="5" fill="#f2c46a" /> : <circle cx="240" cy="96" r="5" fill="#555a66" />}
      </g>
      {/* Medida del agua */}
      <g stroke="#a4461f" strokeWidth="2">
        <line x1="440" y1="176" x2="440" y2="222" /><line x1="434" y1="176" x2="446" y2="176" /><line x1="434" y1="222" x2="446" y2="222" />
      </g>
      <text x="452" y="204" fontSize="14" fontWeight="700" fill="#a4461f">30 cm</text>
      {musica ? (
        <g fill="#a4461f" fontSize="20">
          <text className="nota" x="330" y="120">♪</text>
          <text className="nota" x="360" y="110" style={{ animationDelay: '1s' }}>♫</text>
          <text className="nota" x="300" y="128" style={{ animationDelay: '2s' }}>♪</text>
        </g>
      ) : null}
    </svg>
  );
}

function Interruptor({ on, set, si, no, titulo }: { on: boolean; set: (v: boolean) => void; si: string; no: string; titulo: string }) {
  return (
    <button type="button" role="switch" aria-checked={on} onClick={() => set(!on)}
      className={`interruptor ${on ? 'border-noche bg-noche text-white' : 'border-noche/20 bg-white text-noche hover:border-noche'}`}>
      <span><span className="block text-[0.85rem] font-normal opacity-80">{titulo}</span>{on ? si : no}</span>
      <span className={`relative h-7 w-12 shrink-0 rounded-full ${on ? 'bg-ambar' : 'bg-noche/20'}`} aria-hidden="true">
        <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${on ? 'left-6' : 'left-1'}`} />
      </span>
    </button>
  );
}

function Flotar() {
  const [tapa, setTapa] = useState(false);
  const [luz, setLuz] = useState(true);
  const [musica, setMusica] = useState(false);
  const [dur, setDur] = useState(45);
  const d = flotacion.duraciones.find((x) => x.min === dur)!;
  const texto = `Hola, quiero agendar una sesión de flotación en Float Sano.\nDuración: ${dur} minutos\n` +
    `Tapa: ${tapa ? 'cerrada' : 'abierta'}\nLuz interior: ${luz ? 'encendida' : 'apagada'}\nMúsica: ${musica ? 'sí' : 'no'}\n¿Qué horarios tienen?`;
  return (
    <section id="flotar" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-[2.3rem] sm:text-[3rem]">Tú decides cómo flotar</h2>
          <p className="mt-3 text-piedra">Tienen dos cámaras de flotación, cada una en su propia suite. Tú eliges si flotas con la tapa abierta o cerrada, con luz y con música. Arma tu primera sesión aquí.</p>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center">
          <div className="min-w-0 rounded-[2rem] bg-white p-4 shadow-sm sm:p-8" aria-live="polite">
            <Cabina tapa={tapa} luz={luz} musica={musica} />
            <p className="mt-2 text-center text-[0.95rem] text-piedra">500 kg de sales de Epsom en 30 cm de agua a la temperatura de tu piel.</p>
          </div>
          <div className="min-w-0 space-y-3">
            <Interruptor on={tapa} set={setTapa} titulo="Tapa" si="Cerrada: menos luz y sonido" no="Abierta" />
            <Interruptor on={luz} set={setLuz} titulo="Luz interior" si="Encendida" no="Apagada" />
            <Interruptor on={musica} set={setMusica} titulo="Música" si="Con música" no="En silencio" />
            <div className="grid grid-cols-2 gap-3 pt-2" role="group" aria-label="Duración">
              {flotacion.duraciones.map((x) => (
                <button key={x.min} type="button" aria-pressed={x.min === dur} onClick={() => setDur(x.min)}
                  className={`rounded-2xl border-2 p-4 text-left transition-colors ${x.min === dur ? 'border-cantera bg-cantera text-white' : 'border-noche/20 bg-white hover:border-noche'}`}>
                  <span className="block font-display text-[1.6rem]">{x.min} min</span>
                  <span className="block text-[0.9rem]">{x.precio}</span>
                </button>
              ))}
            </div>
            <p className="text-[0.95rem] text-piedra">{d.texto}</p>
            <a href={wa(texto)} className="btn-cantera w-full" target="_blank" rel="noopener"><IconoWa /> Agendar mi flotación</a>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-[1.7rem]">¿Cómo funciona?</h3>
            <ul className="mt-4 space-y-5">{flotacion.como.map(([t, d2]) => <li key={t} className="border-l-4 border-flota pl-5"><p className="font-bold">{t}</p><p className="mt-1 text-piedra">{d2}</p></li>)}</ul>
            <img src={foto('flotando')} alt="Persona flotando boca arriba dentro de una cabina de Float Sano, vista desde arriba" width={540} height={960} loading="lazy" className="mt-8 aspect-[4/3] w-full rounded-3xl object-cover" />
          </div>
          <div>
            <h3 className="text-[1.7rem]">Qué saber para tu cita</h3>
            <dl className="mt-4 space-y-5">{flotacion.saber.map(([t, d2]) => <div key={t}><dt className="font-bold">{t}</dt><dd className="mt-1 text-piedra">{d2}</dd></div>)}</dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.3rem] sm:text-[3rem]">Sauna infrarrojo, masajes y más</h2>
        <ul className="mt-9 divide-y divide-noche/10 border-y border-noche/10">
          {otros.map((o) => (
            <li key={o.nombre} className="grid gap-2 py-5 sm:grid-cols-[1fr_2fr_auto] sm:items-baseline sm:gap-8">
              <div><p className="font-display text-[1.4rem]">{o.nombre}</p><p className="text-[0.95rem] text-cantera">{o.dur}</p></div>
              <p className="text-piedra">{o.texto}</p>
              <p className="font-bold sm:text-right">{o.precio}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-piedra">También: {extras.join(', ')}.</p>
        <a href={wa('Hola, quiero información de sauna, masajes o paquetes en Float Sano.')} className="btn-cantera mt-6" target="_blank" rel="noopener"><IconoWa /> Preguntar por WhatsApp</a>
      </div>
    </section>
  );
}

function Historia() {
  return (
    <section id="historia" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
        <div className="grid grid-cols-2 gap-4">
          <img src={foto('fachada')} alt="Fachada blanca de Float Sano en la calle Hernández Macías, entre casas de colores" width={613} height={475} loading="lazy" className="col-span-2 aspect-[16/10] w-full rounded-3xl object-cover" />
          <img src={foto('sala')} alt="Rincón de la sala de Float Sano con una maceta y repisa con plantas" width={540} height={960} loading="lazy" className="aspect-square w-full rounded-3xl object-cover" />
          <img src={foto('visitantes')} alt="Tres visitantes sonriendo junto a una cabina de flotación" width={796} height={531} loading="lazy" className="aspect-square w-full rounded-3xl object-cover" />
        </div>
        <div>
          <h2 className="text-[2.3rem] sm:text-[3rem]">Un negocio familiar</h2>
          <p className="mt-4 font-display text-[1.25rem] italic leading-relaxed">“{historia}”</p>
          <dl className="mt-8 space-y-4">
            {filosofia.map(([t, d]) => <div key={t}><dt className="font-bold text-cantera">{t}</dt><dd className="text-piedra">{d}</dd></div>)}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Resenas() {
  return (
    <section className="oscuro py-16 sm:py-20">
      <div className="contenedor">
        <h2 className="text-[2.2rem]">Lo que dicen en Google</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {resenas.map(([t, a, f]) => (
            <figure key={a} className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/15">
              <blockquote>“{t}”</blockquote>
              <figcaption className="mt-3 text-[0.95rem]"><strong className="text-white">{a}</strong>, {f}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-[2.3rem]">Visítanos</h2>
          <p className="mt-4 flex gap-2"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-cantera" />{negocio.direccion}</p>
          <a href={negocio.mapa} className="enlace mt-2 inline-block" target="_blank" rel="noopener">Abrir en Google Maps</a>
          <dl className="mt-6 grid gap-2">{negocio.horario.map(([d, h]) => <div key={d} className="flex justify-between gap-4 border-b border-noche/10 pb-2"><dt>{d}</dt><dd className="font-bold">{h}</dd></div>)}</dl>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={waInfo} className="btn-cantera" target="_blank" rel="noopener"><IconoWa /> {negocio.whatsappTexto}</a>
            <a href={negocio.citasHref} className="btn-linea"><IconoTel /> Citas {negocio.citas}</a>
          </div>
          <a href={`mailto:${negocio.correo}`} className="enlace mt-5 inline-block">{negocio.correo}</a>
        </div>
        <div className="relative min-h-[340px] overflow-hidden rounded-3xl bg-noche/10">
          <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace absolute inset-0 grid place-items-center p-6 text-center">Ver la ubicación en Google Maps</a>
          <iframe src={negocio.mapaEmbed} title="Mapa de Google con la ubicación de Float Sano" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="relative h-full min-h-[340px] w-full border-0" />
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro pb-28 pt-8 lg:pb-8">
      <div className="contenedor flex flex-col gap-2 sm:flex-row sm:justify-between">
        <p className="font-display text-[1.3rem] text-white">Float Sano</p>
        <p>Tratamientos holísticos en el Centro Histórico de San Miguel de Allende.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/15 bg-noche text-white lg:hidden">
      <a href={waInfo} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-ambar text-[0.9rem] font-bold text-noche"><IconoWa />WhatsApp</a>
      <a href={negocio.citasHref} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Flotar />
        <Servicios />
        <Historia />
        <Resenas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
