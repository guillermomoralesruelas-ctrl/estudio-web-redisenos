import { useState } from 'react';
import { aceites, calavera, club, listas, negocio, otros, pesos, pomadas, porQue, portada, servicios, wa, waGeneral, type Producto } from './data/content';

const ext = { target: '_blank', rel: 'noopener' } as const;

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

function IconoCalendario({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
  );
}

function Encabezado() {
  return (
    <header className="noche sticky top-0 z-40 border-b border-oro/20 bg-noche/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-2 text-hueso">
          <img src={calavera.src} width={36} height={36} alt="" className="h-9 w-9" />
          <span className="font-letrero text-lg leading-none sm:text-xl">Juan Camaney</span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-[0.95rem] text-polvo lg:flex">
          <a href="#servicios" className="hover:text-oro">Servicios</a>
          <a href="#club" className="hover:text-oro">El club</a>
          <a href="#rockola" className="hover:text-oro">La rockola</a>
          <a href="#tienda" className="hover:text-oro">Tienda</a>
          <a href="#visitanos" className="hover:text-oro">Visítanos</a>
        </nav>
        <a href={negocio.reservar} className="btn !min-h-[40px] !px-4 !py-2 text-sm" {...ext}><IconoCalendario className="h-4 w-4" /> Reservar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="noche tapiz relative overflow-hidden">
      <div className="contenedor grid items-center gap-10 pb-16 pt-14 sm:pb-24 sm:pt-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="min-w-0">
          <p className="font-titulo text-xl italic text-oro">Barbería tradicional en Mérida</p>
          <h1 className="mt-3 text-[2.6rem] text-hueso sm:text-6xl lg:text-7xl">Bar &amp; barbería</h1>
          <p className="mt-6 max-w-2xl text-lg text-polvo">Un concepto inspirado en las primeras barberías londinenses: aparte del corte de cabello y barba, un lugar para convivir entre amigos. Un club en donde puedes pasarla bien sin necesidad de ir a cortarte el cabello, pues igual es un bar, un billar, una boutique, un anticuario, una galería y hasta un workpoint.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.reservar} className="btn" {...ext}><IconoCalendario /> Reservar cita en línea</a>
            <a href={waGeneral} className="btn-claro" {...ext}><IconoWa /> WhatsApp {negocio.whatsappVisible}</a>
          </div>
          <dl className="mt-10 grid max-w-2xl gap-5 border-t border-oro/25 pt-6 text-[0.95rem] sm:grid-cols-2">
            <div>
              <dt className="text-oro">Horario</dt>
              <dd className="text-hueso">{negocio.horario}. Por ahora, con cita.</dd>
            </div>
            <div>
              <dt className="text-oro">Dónde</dt>
              <dd className="text-hueso">Plaza Urban Center, Mérida. <a href={negocio.mapa} className="enlace" {...ext}>Cómo llegar</a></dd>
            </div>
          </dl>
        </div>
        <div className="relative mx-auto w-full max-w-[26rem] min-w-0">
          <div className="absolute inset-[12%] rounded-full bg-oro/15 blur-3xl" aria-hidden="true" />
          <img src={portada.src} width={portada.w} height={portada.h} alt={portada.alt} fetchPriority="high" className="relative w-full" />
          <p className="relative -mt-4 text-center font-titulo text-sm italic text-polvo">Pomada «Imperial», hecha a mano por la casa</p>
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="py-20 sm:py-28">
      <div className="contenedor grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-5xl">Más que un trabajo, para nosotros es arte</h2>
          <p className="mt-5">Corte de cabello, afeitado clásico o arreglo de barba, entre otros servicios del cuidado de tu imagen, mientras disfrutas de tu bebida espirituosa predilecta.</p>
          <p className="mt-4 text-[0.95rem] text-tinta/80">Los precios están sujetos a cambios. Su menú completo de servicios está en su sitio: <a href={negocio.menuCompleto} className="enlace" {...ext}>ver el menú de servicios</a>.</p>
        </div>
        <ul className="min-w-0 divide-y divide-tinta/15 border-y border-tinta/15">
          {servicios.map((s) => (
            <li key={s.id} className="py-7">
              <h3 className="renglon text-2xl sm:text-[1.7rem]">
                <span>{s.nombre}</span>
                <span className="precio cifra font-titulo text-vino">{pesos(s.precio)}</span>
              </h3>
              <p className="mt-3 max-w-2xl">{s.texto}</p>
              <a href={wa(`Hola, quiero agendar un ${s.nombre.toLowerCase()} (${pesos(s.precio)}) en Juan Camaney.`)} className="enlace mt-3 inline-flex items-center gap-2" {...ext}><IconoWa className="h-4 w-4" /> Agendar {s.nombre.toLowerCase()}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Club() {
  return (
    <section id="club" className="noche bg-cuero py-20 text-polvo sm:py-28">
      <div className="contenedor grid gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-5xl">No necesitas un corte para visitarme</h2>
          <p className="mt-6 text-lg">Juan Camaney es una barbería social, inspirada en la barbería tradicional como un punto de reunión para caballeros: <span className="text-hueso">una sociedad de hombres unidos por intereses y gustos en común.</span></p>
          <p className="mt-4">Puedes venir a tomar un trago en la barra, ver el partido de tu equipo favorito, jugar una partida de billar o simplemente conversar. Y en la barbería–speakeasy, un concepto único de barbería, con un secreto muy bien guardado.</p>
          <p className="mt-6 font-titulo text-xl italic text-oro">Aquí no solo se trata de verte bien, sino de sentirte bien.</p>
        </div>
        <dl className="min-w-0 space-y-6">
          {club.map((c) => (
            <div key={c.nombre} className="grid gap-1 border-l-2 border-oro/60 pl-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
              <dt className="font-titulo text-xl text-hueso">{c.nombre}</dt>
              <dd>{c.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function lineas(nombre: string) {
  const p = nombre.split(' ');
  if (p.length < 2) return [nombre];
  const mitad = Math.ceil(p.length / 2);
  return [p.slice(0, mitad).join(' '), p.slice(mitad).join(' ')];
}

function Maquina({ nombre, sonando }: { nombre: string; sonando: boolean }) {
  const ls = lineas(nombre);
  return (
    <svg viewBox="0 0 320 440" className="h-auto w-full max-w-[25rem]" role="img" aria-label={`Rockola con el disco ${nombre} ${sonando ? 'girando' : 'detenido'}`}>
      <defs>
        <linearGradient id="madera" x1="0" x2="1">
          <stop offset="0" stopColor="#3a2415" /><stop offset="0.5" stopColor="#6b4326" /><stop offset="1" stopColor="#3a2415" />
        </linearGradient>
        <linearGradient id="tubo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d6ae4c" /><stop offset="1" stopColor="#8a3b32" />
        </linearGradient>
        <clipPath id="ventana"><path d="M72 252V172a88 88 0 0 1 176 0v80Z" /></clipPath>
      </defs>
      <path d="M18 440V172a142 142 0 0 1 284 0v268Z" fill="url(#madera)" />
      <path d="M36 440V176a124 124 0 0 1 248 0v264" fill="none" stroke="#d6ae4c" strokeWidth="3" />
      {/* Tubos de luz con burbujas */}
      {[50, 270].map((x) => (
        <g key={x}>
          <rect x={x - 7} y="200" width="14" height="230" rx="7" fill="url(#tubo)" opacity="0.85" />
          {[0, 1, 2].map((i) => (
            <circle key={i} className={sonando ? 'burbuja' : ''} style={{ animationDelay: `${i * 1.05}s` }} cx={x} cy={420 - i * 8} r="3" fill="#f4ecdc" opacity={sonando ? 0.9 : 0.35} />
          ))}
        </g>
      ))}
      {/* Ventana con el disco */}
      <path d="M72 252V172a88 88 0 0 1 176 0v80Z" fill="#0d0907" stroke="#d6ae4c" strokeWidth="2.5" />
      <g clipPath="url(#ventana)">
        <g className={`disco ${sonando ? 'sonando' : ''}`}>
          <circle cx="160" cy="176" r="64" fill="#111" />
          {[58, 52, 46, 40, 34].map((r) => <circle key={r} cx="160" cy="176" r={r} fill="none" stroke="#2c2c2c" strokeWidth="1" />)}
          <circle cx="160" cy="176" r="27" fill="#8a3b32" />
          <text x="160" y={ls.length > 1 ? 171 : 179} textAnchor="middle" fontFamily="Rye, Georgia, serif" fontSize={ls.length > 1 ? 8.5 : 10} fill="#f4ecdc">
            {ls.map((l, i) => <tspan key={l} x="160" dy={i ? 11 : 0}>{l}</tspan>)}
          </text>
          <circle cx="160" cy="194" r="1.6" fill="#d6ae4c" />
        </g>
        <circle cx="160" cy="176" r="2.4" fill="#d6ae4c" />
        <path d="M112 140a64 64 0 0 1 40-26" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* Brazo del tocadiscos */}
      <g className={`brazo ${sonando ? 'puesto' : ''}`}>
        <circle cx="236" cy="112" r="7" fill="#d6ae4c" />
        <path d="M236 112 L222 190 L206 200" fill="none" stroke="#d6ae4c" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="199" y="196" width="12" height="7" rx="2" fill="#efe4cf" transform="rotate(-30 205 199)" />
      </g>
      {/* Rejilla y placa */}
      <rect x="72" y="270" width="176" height="92" rx="8" fill="#1d130c" stroke="#d6ae4c" strokeWidth="1.5" />
      {Array.from({ length: 13 }, (_, i) => <rect key={i} x={84 + i * 12.5} y="280" width="4" height="72" rx="2" fill="#d6ae4c" opacity={0.28 + (i % 2) * 0.2} />)}
      <rect x="36" y="384" width="248" height="56" fill="#15100c" />
      <text x="160" y="419" textAnchor="middle" fontFamily="Rye, Georgia, serif" fontSize="17" fill="#d6ae4c">Juan Camaney</text>
    </svg>
  );
}

const quehaceres = [
  { id: 'rato', nombre: 'Solo a pasar el rato', precio: 0 },
  ...servicios.map((s) => ({ id: s.id, nombre: s.nombre, precio: s.precio as number })),
];

function Rockola() {
  const [idLista, setIdLista] = useState(listas[1].id);
  const [sonando, setSonando] = useState(true);
  const [cancion, setCancion] = useState('');
  const [idQue, setIdQue] = useState('corte');
  const lista = listas.find((l) => l.id === idLista)!;
  const que = quehaceres.find((q) => q.id === idQue)!;

  const mensajeCancion = cancion.trim()
    ? `Hola, a su lista ${lista.nombre} de Spotify le hace falta esta pieza: ${cancion.trim()}.`
    : `Hola, tengo una pieza musical que le hace falta a su lista ${lista.nombre} de Spotify.`;
  const mensajeCita = que.precio
    ? `Hola, quiero agendar un ${que.nombre.toLowerCase()} (${pesos(que.precio)}) en Juan Camaney. Si se puede, que suene su lista ${lista.nombre}.`
    : `Hola, quiero ir a Juan Camaney a pasar el rato en la barra. ¿Me ponen su lista ${lista.nombre}?`;

  return (
    <section id="rockola" className="noche tapiz py-20 text-polvo sm:py-28">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl">La rockola de la casa</h2>
          <p className="mt-5 text-lg">«La música siempre es la mejor acompañante para encontrar un momento ideal y olvidar todos los problemas.» En la barbería suenan sus cinco listas de Spotify. Elige un disco, escúchalo y, si crees que le falta una pieza icónica, házselo saber.</p>
        </div>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="flex min-w-0 flex-col items-center">
            <Maquina nombre={lista.nombre} sonando={sonando} />
            <button type="button" onClick={() => setSonando((s) => !s)} aria-pressed={sonando} className="mt-4 text-sm text-oro underline underline-offset-4 hover:text-hueso">
              {sonando ? 'Detener el disco' : 'Poner el disco'}
            </button>
          </div>

          <div className="min-w-0">
            <fieldset>
              <legend className="font-titulo text-2xl text-hueso">¿Qué disco pones?</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {listas.map((l) => (
                  <label key={l.id} className={`cursor-pointer rounded-md border px-4 py-2 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-oro ${l.id === idLista ? 'border-oro bg-oro text-noche' : 'border-oro/40 text-hueso hover:border-oro'}`}>
                    <input type="radio" name="lista" value={l.id} checked={l.id === idLista} onChange={() => { setIdLista(l.id); setSonando(true); }} className="sr-only" />
                    {l.nombre}
                  </label>
                ))}
              </div>
            </fieldset>
            <p className="mt-5" aria-live="polite">Suena <span className="font-letrero text-oro">{lista.nombre}</span>. <a href={lista.url} className="enlace" {...ext}>Escuchar la lista en Spotify</a></p>

            <div className="mt-10 border-t border-oro/25 pt-8">
              <label htmlFor="cancion" className="font-titulo text-2xl text-hueso">¿Le falta una canción?</label>
              <p className="mt-2 text-[0.95rem]">Escribe la canción y el artista; te abrimos WhatsApp con tu propuesta para la lista {lista.nombre}.</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input id="cancion" type="text" value={cancion} onChange={(e) => setCancion(e.target.value)} placeholder="Canción y artista" maxLength={80} className="min-h-[46px] w-full min-w-0 rounded-md border border-oro/50 bg-noche px-4 text-hueso placeholder:text-polvo/80" />
                <a href={wa(mensajeCancion)} className="btn shrink-0" {...ext}><IconoWa /> Proponerla</a>
              </div>
            </div>

            <div className="mt-10 border-t border-oro/25 pt-8">
              <h3 className="text-2xl">Y ya que suena, ¿a qué vienes?</h3>
              <div className="mt-4 flex flex-wrap gap-2" role="radiogroup" aria-label="A qué vienes">
                {quehaceres.map((q) => (
                  <button key={q.id} type="button" role="radio" aria-checked={q.id === idQue} onClick={() => setIdQue(q.id)} className={`rounded-md border px-3 py-2 text-[0.95rem] transition-colors ${q.id === idQue ? 'border-hueso bg-hueso text-noche' : 'border-oro/40 text-hueso hover:border-oro'}`}>
                    {q.nombre}{q.precio ? <span className="cifra"> {pesos(q.precio)}</span> : null}
                  </button>
                ))}
              </div>
              <p className="mt-4 rounded-md bg-noche/80 p-4 text-[0.95rem] text-hueso">«{mensajeCita}»</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={wa(mensajeCita)} className="btn" {...ext}><IconoWa /> Mandar por WhatsApp</a>
                <a href={negocio.reservar} className="btn-claro" {...ext}><IconoCalendario /> Reservar en Booksy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Precio({ p }: { p: Producto }) {
  return <span className="cifra font-titulo text-lg text-vino">{pesos(p.precio)}</span>;
}

function Tienda() {
  const pedir = (p: Producto) => wa(`Hola, quiero ${p.nombre}${p.detalle ? ` (${p.detalle})` : ''}, de ${pesos(p.precio)}. ¿Lo tienen disponible?`);
  return (
    <section id="tienda" className="py-20 sm:py-28">
      <div className="contenedor">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <h2 className="text-3xl sm:text-5xl">Creados artesanalmente</h2>
          <p>Sus pomadas para cabello y demás productos para caballero, recreados de los más finos ingredientes y cuidando cada mezcla, elaborando cada paso a mano. Se compran en la barbería, en su tienda en línea, en Mercado Libre o por WhatsApp.</p>
        </div>

        <h3 className="mt-14 text-2xl">Pomadas para cabello</h3>
        <ul className="mt-6 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {pomadas.map((p, i) => (
            <li key={p.nombre} className={`min-w-0 ${i === 0 ? 'sm:col-span-2 sm:grid sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:items-center sm:gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)]' : ''}`}>
              {p.foto && <img src={p.foto.src} width={p.foto.w} height={p.foto.h} alt={p.foto.alt} loading="lazy" className={`w-full mix-blend-multiply ${i === 0 ? 'max-w-[22rem]' : 'max-w-[16rem]'}`} />}
              <div>
                <p className="renglon font-titulo text-xl text-tinta"><span>{p.nombre}</span><span className="precio"><Precio p={p} /></span></p>
                <p className="text-tinta/80">{p.detalle}</p>
                {i === 0 && <p className="mt-3 max-w-xl">«Muy probablemente ya has escuchado acerca de mis pomadas para cabello… es cierto que son míticas y sin miedo a equivocarme puedo decir que son las mejores.»</p>}
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                  <a href={pedir(p)} className="enlace" {...ext}>Pedir por WhatsApp</a>
                  <a href={p.url} className="enlace" {...ext}>Comprar en línea</a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="min-w-0">
            <h3 className="text-2xl">Para la barba</h3>
            <ul className="mt-6 grid grid-cols-2 gap-6">
              {aceites.map((p) => (
                <li key={p.nombre} className="min-w-0">
                  {p.foto && <img src={p.foto.src} width={p.foto.w} height={p.foto.h} alt={p.foto.alt} loading="lazy" className="w-full max-w-[13rem] mix-blend-multiply" />}
                  <p className="font-titulo text-lg leading-snug">{p.nombre}</p>
                  <p className="text-tinta/80">{p.detalle}. <Precio p={p} /></p>
                  <a href={pedir(p)} className="enlace" {...ext}>Pedir por WhatsApp</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <h3 className="text-2xl">Y también</h3>
            <ul className="mt-6 divide-y divide-tinta/15 border-y border-tinta/15">
              {otros.map((p) => (
                <li key={p.nombre} className="py-4">
                  <p className="renglon font-titulo text-lg"><span>{p.nombre}{p.detalle ? `, ${p.detalle.toLowerCase()}` : ''}</span><span className="precio"><Precio p={p} /></span></p>
                  <a href={pedir(p)} className="enlace text-[0.95rem]" {...ext}>Pedir por WhatsApp</a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={wa('Hola, quiero saber el precio y la disponibilidad de sus productos.')} className="btn-oscuro" {...ext}><IconoWa /> Preguntar por WhatsApp</a>
              <a href={negocio.mercadoLibre} className="btn-oscuro" {...ext}>Ir a Mercado Libre</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PorQue() {
  return (
    <section className="noche bg-cuero py-20 text-polvo sm:py-24">
      <div className="contenedor grid items-center gap-10 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]">
        <img src={porQue.src} width={porQue.w} height={porQue.h} alt="" loading="lazy" className="mx-auto w-40 md:w-full" />
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-4xl">¿Por qué Juan Camaney?</h2>
          <blockquote className="mt-5 max-w-3xl font-titulo text-xl italic leading-relaxed text-hueso sm:text-2xl">«Este nombre es representativo en la mente de la mayoría de los mexicanos: al decir eres todo un “Juan Camaney”, es alusivo a un hombre influyente, que luce bien, que tiene dinero, pero que sobre todo representa el folclor mexicano.»</blockquote>
          <p className="mt-6 text-[0.95rem]">¿Te interesa su modelo de franquicia de bar-barbería o la fabulosa barbería rodante? <a href={wa('Hola, quiero saber más sobre las franquicias de Juan Camaney.', negocio.whatsappFranquicias)} className="enlace" {...ext}>Escríbeles por WhatsApp</a> o <a href={negocio.franquicias} className="enlace" {...ext}>conoce las franquicias</a>.</p>
        </div>
      </div>
    </section>
  );
}

function Visitanos() {
  return (
    <section id="visitanos" className="py-20 sm:py-28">
      <div className="contenedor grid gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-5xl">Te espero</h2>
          <p className="mt-5 text-lg">Reserva desde la aplicación de Booksy, seleccionando tu servicio, profesional y el horario de tu preferencia. Si tienes cualquier duda, escríbenos. ¡Será un gusto recibirte!</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.reservar} className="btn-oscuro" {...ext}><IconoCalendario /> Reservar cita</a>
            <a href={waGeneral} className="btn-oscuro" {...ext}><IconoWa /> WhatsApp</a>
          </div>
        </div>
        <dl className="grid min-w-0 gap-7 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <dt className="font-titulo text-xl">Plaza Urban Center</dt>
            <dd className="mt-1">{negocio.direccion}. {negocio.referencia}. <a href={negocio.mapa} className="enlace" {...ext}>Abrir en Google Maps</a></dd>
          </div>
          <div>
            <dt className="font-titulo text-xl">Horario</dt>
            <dd className="mt-1">{negocio.horario}. Por ahora, solo con cita.</dd>
          </div>
          <div>
            <dt className="font-titulo text-xl">Teléfono y WhatsApp</dt>
            <dd className="mt-1">Teléfono <a href={`tel:${negocio.telefono}`} className="enlace cifra">{negocio.telefonoVisible}</a><br />WhatsApp <a href={waGeneral} className="enlace cifra" {...ext}>{negocio.whatsappVisible}</a></dd>
          </div>
          <div>
            <dt className="font-titulo text-xl">Correo</dt>
            <dd className="mt-1"><a href={`mailto:${negocio.correo}`} className="enlace break-all">{negocio.correo}</a></dd>
          </div>
          <div>
            <dt className="font-titulo text-xl">Redes</dt>
            <dd className="mt-1 flex flex-wrap gap-x-4"><a href={negocio.instagram} className="enlace" {...ext}>Instagram</a><a href={negocio.facebook} className="enlace" {...ext}>Facebook</a><a href={negocio.youtube} className="enlace" {...ext}>YouTube</a></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="noche bg-noche pb-28 pt-10 text-sm text-polvo md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4">
        <p className="flex items-center gap-3"><img src={calavera.src} width={40} height={40} alt="" className="h-10 w-10" /><span className="font-letrero text-lg text-hueso">Juan Camaney</span></p>
        <p>Barbería tradicional en Mérida, Yucatán</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-oro/30 bg-noche text-[0.8rem] text-hueso md:hidden">
      <a href={waGeneral} className="flex flex-col items-center gap-1 bg-oro py-3 text-noche" {...ext}><IconoWa />WhatsApp</a>
      <a href={`tel:${negocio.telefono}`} className="flex flex-col items-center gap-1 py-3">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>
        Llamar
      </a>
      <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-3" {...ext}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
        Cómo llegar
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#servicios" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-oro focus:px-4 focus:py-2 focus:text-noche">Ir a servicios</a>
      <Encabezado />
      <main>
        <Portada />
        <Servicios />
        <Club />
        <Rockola />
        <Tienda />
        <PorQue />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
