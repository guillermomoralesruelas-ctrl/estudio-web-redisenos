import { useState, type KeyboardEvent } from 'react';
import {
  antesDeReservar, capacidad, casa, detallesComunes, habitaciones, historia, hotel, introHabitaciones, izkina,
  mensajeBase, ubicacion, wa, type Foto, type Habitacion, type HabitacionId,
} from './data/content';

const externo = { target: '_blank', rel: 'noopener' } as const;

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
  ),
  tel: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" strokeLinejoin="round" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
  cama: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M3 18V7M21 18v-5a3 3 0 0 0-3-3h-7v5M3 15h18" strokeLinecap="round" /><circle cx="7" cy="11.5" r="1.8" /></svg>
  ),
};

function Img({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const desde = Math.min(...habitaciones.map((h) => h.precio));

// ---------- Encabezado y portada ----------

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const nav = [
    { href: '#despertar', label: 'Habitaciones' },
    { href: '#casa', label: 'La casa' },
    { href: '#historia', label: 'Historia' },
    { href: '#contacto', label: 'Cómo llegar' },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-chukum/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="Hotel Izkina, ir al inicio">
          <img src={hotel.logo.src} alt="" width={hotel.logo.w} height={hotel.logo.h} className="h-11 w-auto md:h-14" />
          <span className="font-titulo text-xl font-medium text-tinta">Hotel Izkina</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-bold text-tinta/85 hover:text-cafe">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={hotel.reservar} {...externo} className="btn hidden sm:inline-flex">Reservar ahora</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir navegación"
            className="grid size-11 place-items-center rounded-full border border-tinta/20 text-tinta lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-tinta/10 bg-chukum lg:hidden" aria-label="Móvil">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="border-b border-tinta/10 py-3 font-titulo text-2xl text-tinta">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  const tukan = habitaciones.find((h) => h.id === 'tukan')!;
  const datos = [
    ['4', 'habitaciones, cada una con nombre de pájaro'],
    [pesos(desde), 'por noche, desde'],
    [`${hotel.checkIn} / ${hotel.checkOut}`, 'check-in y check-out'],
    ['A pasos', 'del malecón'],
  ];
  return (
    <section id="inicio" className="pb-16 pt-10 md:pb-20 md:pt-14">
      <div className="contenedor grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="min-w-0 lg:col-span-5">
          <p className="text-lg font-bold text-cafe">Casa hotel en el centro de Cozumel</p>
          <h1 className="mt-3 text-[clamp(3.2rem,9vw,6.4rem)]">Hotel Izkina</h1>
          <p className="mt-5 font-titulo text-2xl text-tinta md:text-[1.7rem]">{hotel.frase}</p>
          <p className="mt-4 text-lg">{hotel.bienvenida}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={hotel.reservar} {...externo} className="btn">{Icono.cama} Reservar ahora</a>
            <a href={hotel.whatsapp} {...externo} className="btn-linea">{Icono.wa} Escríbenos por WhatsApp</a>
          </div>
        </div>
        <figure className="min-w-0 lg:col-span-7">
          <div className="aspect-[4/3] overflow-hidden rounded-[1.25rem] sm:aspect-[3/2]"><Img foto={tukan.foto} eager /></div>
          <figcaption className="mt-3 text-sm">Tukan, una de sus cuatro habitaciones: cabecera de puerta antigua y paredes de chukum.</figcaption>
        </figure>
      </div>
      <div className="contenedor">
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-tinta/15 pt-6 md:grid-cols-4">
          {datos.map(([d, t]) => (
            <div key={t} className="flex min-w-0 flex-col-reverse">
              <dt className="text-[0.95rem]">{t}</dt>
              <dd className="cifra font-titulo text-3xl text-tinta sm:text-4xl">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Izkina() {
  return (
    <section className="bg-salvia text-tinta" aria-labelledby="izkina">
      <div className="contenedor grid gap-10 py-16 md:grid-cols-12 md:items-center md:py-20">
        <div className="min-w-0 md:col-span-8">
          <h2 id="izkina" className="text-[clamp(2.2rem,4.6vw,3.4rem)]">{izkina.titulo}</h2>
          {izkina.textos.map((p) => <p key={p.slice(0, 20)} className="mt-5 text-lg text-tinta">{p}</p>)}
        </div>
        <div className="flex min-w-0 justify-center md:col-span-4 md:justify-end">
          <img src={hotel.logo.src} alt={hotel.logo.alt} width={hotel.logo.w} height={hotel.logo.h} loading="lazy" className="h-auto w-44 md:w-56" />
        </div>
      </div>
    </section>
  );
}

// ---------- Elemento memorable: ¿Con qué quieres despertar? ----------

type Esquina = { id: HabitacionId; x: number; y: number; flip: boolean };
// Dibujo simbólico, inspirado en el Giglio de su logo (las cuatro esquinas del mundo); no es el plano de la casa.
const esquinas: Esquina[] = [
  { id: 'pajaro-azul', x: 128, y: 150, flip: false },
  { id: 'paloma', x: 472, y: 150, flip: true },
  { id: 'tukan', x: 128, y: 470, flip: false },
  { id: 'jilguero', x: 472, y: 470, flip: true },
];

const plumaje: Record<HabitacionId, { cuerpo: string; ala: string; pecho: string; pico: string; cabeza?: string }> = {
  'pajaro-azul': { cuerpo: '#2f5f9e', ala: '#1f4474', pecho: '#8fb3dc', pico: '#2b2118' },
  paloma: { cuerpo: '#8d8f99', ala: '#6d6f78', pecho: '#c9c7cc', pico: '#b98a6a' },
  tukan: { cuerpo: '#1d1a17', ala: '#34302b', pecho: '#f6e7a8', pico: '#e8892a' },
  jilguero: { cuerpo: '#e7c33a', ala: '#2b2118', pecho: '#f2da6b', pico: '#d9a36a', cabeza: '#2b2118' },
};

/** Un pájaro sencillo sobre una rama; el tucán lleva su pico grande. */
function Pajaro({ id, activo, apagado }: { id: HabitacionId; activo: boolean; apagado: boolean }) {
  const c = plumaje[id];
  const tucan = id === 'tukan';
  return (
    <g className="pajaro" style={{ opacity: apagado ? 0.6 : 1, transform: activo ? 'scale(1.08)' : 'none' }}>
      <path d="M-58 34H58" stroke="#7a5f3c" strokeWidth="5" strokeLinecap="round" />
      <path d="M-6 26v9M8 26v9" stroke="#5a4a3b" strokeWidth="3" strokeLinecap="round" />
      <path d="M-30 6-58 -2-48 14Z" fill={c.ala} />
      <ellipse cx="0" cy="6" rx="32" ry="22" fill={c.cuerpo} />
      <ellipse cx="10" cy="12" rx="17" ry="13" fill={c.pecho} />
      <path d="M-24 -2q16-14 34 2-14 18-34-2Z" fill={c.ala} />
      <circle cx="24" cy="-16" r="16" fill={c.cabeza ?? c.cuerpo} />
      {id === 'jilguero' && <path d="M14 -10q10 8 22 0v6q-10 8-22 0Z" fill="#e7c33a" />}
      {tucan
        ? <path d="M36 -24q30-2 38 10-8 10-38 2Z" fill={c.pico} stroke="#b35f16" strokeWidth="1.5" />
        : <path d="M38 -19 52 -14 38 -10Z" fill={c.pico} />}
      <circle cx="28" cy="-19" r="3.4" fill="#fff" />
      <circle cx="29" cy="-19" r="1.9" fill="#1d1a17" />
    </g>
  );
}

/** Lo que ve cada una al despertar: agua, dos ventanas, la cafetera de la cocina compartida o una hoja del patio. */
function Signo({ id }: { id: HabitacionId }) {
  const trazo = { fill: 'none', stroke: '#1f6468', strokeWidth: 3, strokeLinecap: 'round' as const };
  if (id === 'pajaro-azul') return <g {...trazo}><path d="M-34 0q8.5-8 17 0t17 0 17 0 17 0" /><path d="M-34 12q8.5-8 17 0t17 0 17 0 17 0" /></g>;
  if (id === 'paloma') return <g {...trazo}><rect x="-32" y="-12" width="26" height="30" rx="2" /><path d="M-19 -12v30M-32 3h26" /><rect x="6" y="-12" width="26" height="30" rx="2" /><path d="M19 -12v30M6 3h26" /></g>;
  if (id === 'tukan') return <g {...trazo}><path d="M-12 18h24l-3-24h-18Z" /><path d="M12 -2q10 0 8 10" /><path d="M-6 -6v-6h12v6M-2 -16q-3-5 1-9M4 -16q-3-5 1-9" /></g>;
  return <g {...trazo}><path d="M-22 18Q-24-12 18-18q2 30-40 36Z" /><path d="M-22 18 8-8" /></g>;
}

function Esquinas({ elegida, elegir }: { elegida: HabitacionId; elegir: (id: HabitacionId) => void }) {
  const e = esquinas.find((x) => x.id === elegida)!;
  const tecla = (id: HabitacionId) => (ev: KeyboardEvent) => {
    if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); elegir(id); }
  };
  return (
    <svg viewBox="0 0 600 620" className="h-auto w-full" role="group" aria-label="Las cuatro esquinas de Izkina, con un pájaro en cada una">
      <rect x="14" y="14" width="572" height="592" rx="26" fill="#fbf7f1" stroke="#d7a46f" strokeWidth="2" />
      {/* cruces de caminos, de la cruz del centro a cada esquina */}
      {esquinas.map((x) => <path key={x.id} d={`M300 310L${x.x} ${x.y + 30}`} stroke="#e4d4bd" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" />)}
      <path key={elegida} className="camino" pathLength={1} d={`M300 310L${e.x} ${e.y + 30}`} stroke="#d7a46f" strokeWidth="7" strokeLinecap="round" fill="none" />
      {/* al centro, cuatro pirámides escalonadas (como la del Giglio de su logo), una hacia cada esquina */}
      <g transform="translate(300 310)">
        {esquinas.map((x) => {
          const giro = (Math.atan2(x.y + 30 - 310, x.x - 300) * 180) / Math.PI + 90;
          return (
            <g key={x.id} transform={`rotate(${giro}) translate(0 -44) scale(1.25)`}>
              <path d="M-27 0h54v-9h-9v-9h-9v-9h-18v9h-9v9h-9Z" fill={x.id === elegida ? '#7a5f3c' : '#b99a74'} style={{ transition: 'fill .25s' }} />
            </g>
          );
        })}
        <rect x="-9" y="-9" width="18" height="18" fill="#d7a46f" transform="rotate(45) scale(1.4)" />
      </g>
      {esquinas.map((x) => {
        const h = habitaciones.find((k) => k.id === x.id)!;
        const activo = x.id === elegida;
        return (
          <g key={x.id} role="button" tabIndex={0} aria-pressed={activo} aria-label={`${h.nombre}: ${h.despertar.toLowerCase()}`}
            onClick={() => elegir(x.id)} onKeyDown={tecla(x.id)} className="cursor-pointer focus:outline-none">
            <circle cx={x.x} cy={x.y + 6} r="92" fill={activo ? '#f3e2c7' : 'transparent'} style={{ transition: 'fill .25s' }} />
            <g transform={`translate(${x.x} ${x.y}) scale(${x.flip ? -1 : 1} 1)`}>
              <Pajaro id={x.id} activo={activo} apagado={!activo} />
            </g>
            <g transform={`translate(${x.x} ${x.y + (x.y < 300 ? -78 : 82)})`} opacity={activo ? 1 : 0.55}><Signo id={x.id} /></g>
            <text x={x.x} y={x.y + (x.y < 300 ? 76 : -62)} textAnchor="middle" fontFamily="Oswald, sans-serif" fontSize="26" fill="#2b2118" opacity={activo ? 1 : 0.7}>{h.nombre}</text>
          </g>
        );
      })}
    </svg>
  );
}

function Ficha({ h }: { h: Habitacion }) {
  const mensaje = `Hola, me interesa la habitación ${h.nombre} (${pesos(h.precio)} por noche). ¿Tienen disponibilidad? Mis fechas son: `;
  return (
    <article key={h.id} className="ficha min-w-0" aria-live="polite">
      <div className="aspect-[3/2] overflow-hidden rounded-[1.25rem]"><Img foto={h.foto} /></div>
      <h3 className="mt-6 text-[clamp(2rem,4vw,2.8rem)]">{h.nombre}</h3>
      <p className="mt-1 font-titulo text-xl text-cafe">{h.frase}</p>
      <p className="mt-3">{h.texto}</p>
      {h.extra && <p className="mt-2">{h.extra}</p>}
      <dl className="mt-5 grid grid-cols-3 gap-4 border-y border-tinta/15 py-4">
        <div className="min-w-0"><dt className="text-sm">Por noche</dt><dd className="cifra font-titulo text-2xl text-tinta">{pesos(h.precio)}</dd></div>
        <div className="min-w-0"><dt className="text-sm">Cama</dt><dd className="font-titulo text-2xl text-tinta">{h.cama}</dd></div>
        <div className="min-w-0"><dt className="text-sm">Capacidad</dt><dd className="font-titulo text-2xl text-tinta">{capacidad}</dd></div>
      </dl>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={h.pagina} {...externo} className="btn">{Icono.cama} Reservar {h.nombre} en línea</a>
        <a href={wa(mensaje)} {...externo} className="btn-linea">{Icono.wa} Preguntar por WhatsApp</a>
      </div>
    </article>
  );
}

function Despertar() {
  const [id, setId] = useState<HabitacionId>('pajaro-azul');
  const h = habitaciones.find((x) => x.id === id)!;
  return (
    <section id="despertar" className="border-t border-tinta/10 py-20 md:py-24">
      <div className="contenedor">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="text-[clamp(2.4rem,5.2vw,4rem)] md:col-span-6">¿Con qué quieres despertar?</h2>
          <p className="text-lg md:col-span-6">
            {introHabitaciones} Las cuatro valen casi lo mismo; lo que las hace distintas es lo que ves al abrir los ojos. Elige y te decimos cuál es la tuya.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4" role="group" aria-label="Elige con qué quieres despertar">
          {habitaciones.map((x) => (
            <button key={x.id} type="button" onClick={() => setId(x.id)} aria-pressed={x.id === id}
              className={`min-h-11 rounded-2xl border px-4 py-3 text-left transition-colors ${x.id === id ? 'border-tinta bg-tinta text-white' : 'border-tinta/20 bg-papel text-tinta hover:border-tinta'}`}>
              <span className="block font-titulo text-lg sm:text-xl">{x.despertar}</span>
              <span className={`cifra mt-1 block text-sm sm:text-[0.95rem] ${x.id === id ? 'text-arena' : 'text-texto'}`}>{x.nombre}, {pesos(x.precio)} por noche</span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="mx-auto w-full min-w-0 max-w-sm lg:col-span-5 lg:max-w-none">
            <Esquinas elegida={id} elegir={setId} />
            <p className="mt-3 text-sm">Dibujo simbólico, inspirado en el Giglio de su logo y sus cuatro esquinas del mundo: no es el plano de la casa. También puedes tocar un pájaro.</p>
          </div>
          <div className="min-w-0 lg:col-span-7"><Ficha h={h} /></div>
        </div>

        <div className="mt-14 rounded-[1.25rem] bg-papel p-6 md:p-8">
          <h3 className="text-2xl">En las cuatro</h3>
          <p className="mt-2">{detallesComunes}</p>
          <p className="mt-3 text-[0.95rem]">Precios por noche publicados en su sitio; la tarifa final y la disponibilidad las da su reserva en línea.</p>
        </div>
      </div>
    </section>
  );
}

// ---------- La casa, historia, antes de reservar ----------

function Casa() {
  return (
    <section id="casa" className="border-y border-tinta/10 bg-papel py-20 md:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-7">
          <h2 className="text-[clamp(2.2rem,4.6vw,3.4rem)]">{casa.titulo}</h2>
          {casa.textos.slice(1).map((p) => <p key={p.slice(0, 20)} className="mt-5 text-lg">{p}</p>)}
          <p className="mt-5 text-lg">{casa.porqueTexto}</p>
          <ul className="mt-7 grid gap-x-8 sm:grid-cols-2">
            {casa.porque.map((s) => <li key={s} className="border-b border-tinta/10 py-2 font-bold text-tinta">{s}</li>)}
          </ul>
          <p className="mt-7">{casa.auto}</p>
          <a href={wa('Hola, voy a hospedarme en Hotel Izkina y me gustaría rentar un auto o una moto. ¿Me pueden ayudar?')} {...externo} className="btn-agua mt-4">{Icono.wa} Pedir ayuda con auto o moto</a>
        </div>
        <div className="min-w-0 lg:col-span-5">
          <ul className="grid grid-cols-2 justify-items-center gap-4">
            {casa.fotos.map((f) => (
              <li key={f.src} className="w-full max-w-[210px]">
                <div className="aspect-square overflow-hidden rounded-2xl"><Img foto={f} /></div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center font-titulo text-xl text-tinta">{casa.cierre}</p>
        </div>
      </div>
    </section>
  );
}

function Historia() {
  return (
    <section id="historia" className="py-20 md:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-4">
          <h2 className="text-[clamp(2.2rem,4.6vw,3.4rem)]">{historia.titulo}</h2>
          <p className="mt-5 font-titulo text-2xl text-cafe">{historia.textos[0]}</p>
        </div>
        <div className="min-w-0 lg:col-span-8 lg:columns-2 lg:gap-10">
          {historia.textos.slice(1).map((p) => <p key={p.slice(0, 20)} className="mb-5 break-inside-avoid">{p}</p>)}
          <p className="break-inside-avoid font-bold text-tinta">{historia.cierre}</p>
        </div>
      </div>
    </section>
  );
}

function AntesDeReservar() {
  return (
    <section className="border-t border-tinta/10 bg-papel py-20 md:py-24" aria-labelledby="antes">
      <div className="contenedor">
        <div className="grid gap-4 md:grid-cols-12 md:items-end">
          <h2 id="antes" className="text-[clamp(2.2rem,4.6vw,3.4rem)] md:col-span-7">Antes de reservar</h2>
          <p className="md:col-span-5">Reserva directo con nosotros. Te esperamos con gusto.</p>
        </div>
        <dl className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {antesDeReservar.map((a) => (
            <div key={a.titulo} className="min-w-0 border-t-2 border-arena pt-3">
              <dt className="font-titulo text-xl text-tinta">{a.titulo}</dt>
              <dd className="mt-1">{a.texto}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8"><a href={hotel.terminos} {...externo} className="enlace">Leer sus términos y condiciones completos</a></p>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro bg-tinta text-white">
      <div className="contenedor grid gap-12 py-20 md:grid-cols-12 md:py-24">
        <div className="min-w-0 md:col-span-6">
          <h2 className="text-[clamp(2.2rem,4.6vw,3.4rem)] text-white">{ubicacion.titulo}</h2>
          {ubicacion.textos.map((p) => <p key={p.slice(0, 20)} className="mt-4 text-lg text-white/85">{p}</p>)}
          <p className="mt-4 text-white/85">{ubicacion.cierre}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={hotel.reservar} {...externo} className="btn-arena">{Icono.cama} Reservar ahora</a>
            <a href={hotel.whatsapp} {...externo} className="btn-linea border-white/40 text-white hover:border-white hover:bg-white/10">{Icono.wa} WhatsApp</a>
          </div>
        </div>
        <dl className="grid min-w-0 content-start gap-6 sm:grid-cols-2 md:col-span-6">
          <div className="sm:col-span-2">
            <dt className="font-bold text-arena">Dirección</dt>
            <dd className="mt-1 text-lg">{hotel.direccion}</dd>
            <dd className="mt-3"><a href={hotel.mapa} {...externo} className="inline-flex items-center gap-2 font-bold text-white underline decoration-arena decoration-2 underline-offset-4">{Icono.mapa} Cómo llegar en Google Maps</a></dd>
          </div>
          <div>
            <dt className="font-bold text-arena">Teléfono</dt>
            <dd className="mt-1"><a className="cifra text-lg text-white underline underline-offset-4" href={hotel.telefono.href}>{hotel.telefono.visible}</a></dd>
          </div>
          <div>
            <dt className="font-bold text-arena">WhatsApp</dt>
            <dd className="mt-1"><a className="cifra text-lg text-white underline underline-offset-4" href={hotel.whatsapp} {...externo}>{hotel.whatsappVisible}</a></dd>
          </div>
          <div>
            <dt className="font-bold text-arena">Correo</dt>
            <dd className="mt-1"><a className="break-all text-white underline underline-offset-4" href={`mailto:${hotel.email}?subject=${encodeURIComponent('Reservación en Hotel Izkina')}`}>{hotel.email}</a></dd>
          </div>
          <div>
            <dt className="font-bold text-arena">Instagram</dt>
            <dd className="mt-1"><a className="text-white underline underline-offset-4" href={hotel.instagram.url} {...externo}>{hotel.instagram.nombre}</a></dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-bold text-arena">Horario de atención</dt>
            {hotel.horario.map(([d, h]) => <dd key={d} className="mt-1 text-white/90"><span className="font-bold text-white">{d}:</span> {h}</dd>)}
          </div>
          <div className="sm:col-span-2">
            <dt className="font-bold text-arena">¿Ya tienes una reserva?</dt>
            <dd className="mt-1 text-white/90">Si ya tiene una reserva, puede consultarla ingresando su código de reserva. <a className="font-bold text-white underline underline-offset-4" href={hotel.reservar} {...externo}>Consultar mi reserva</a></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-chukum pb-28 pt-12 md:pb-12">
      <div className="contenedor grid gap-6 md:grid-cols-12 md:items-center">
        <div className="flex min-w-0 items-center gap-4 md:col-span-6">
          <img src={hotel.logo.src} alt={hotel.logo.alt} width={hotel.logo.w} height={hotel.logo.h} loading="lazy" className="h-16 w-auto" />
          <p className="font-titulo text-lg text-tinta">{hotel.lema}</p>
        </div>
        <div className="min-w-0 text-sm md:col-span-6 md:text-right">
          <p><a className="underline underline-offset-4 hover:text-tinta" href={hotel.terminos} {...externo}>Términos y condiciones</a></p>
          <p className="mt-2">© {new Date().getFullYear()} {hotel.nombre}</p>
        </div>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta/10 bg-chukum/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr] gap-2">
        <a href={hotel.reservar} {...externo} className="btn px-2">Reservar</a>
        <a href={hotel.whatsapp} {...externo} className="btn-linea px-0" aria-label={`Escribir por WhatsApp: ${mensajeBase}`}>{Icono.wa}</a>
        <a href={hotel.telefono.href} className="btn-linea px-0" aria-label="Llamar a Hotel Izkina">{Icono.tel}</a>
        <a href={hotel.mapa} {...externo} className="btn-linea px-0" aria-label="Cómo llegar a Hotel Izkina">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#despertar" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Saltar a las habitaciones</a>
      <Encabezado />
      <main>
        <Portada />
        <Izkina />
        <Despertar />
        <Casa />
        <Historia />
        <AntesDeReservar />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
