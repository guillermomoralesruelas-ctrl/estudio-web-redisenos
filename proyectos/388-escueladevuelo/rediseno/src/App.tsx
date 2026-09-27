import { useState } from 'react';
import {
  equipo, escuela, galeria, grupo, mensajeBase, penon, pilotosAppi, portada, preguntas, reservas, testimonios, vuelos, wa,
  type Foto, type Vuelo, type VueloId,
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
  vela: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M3 9c4-5 14-5 18 0" strokeLinecap="round" /><path d="M3 9l9 10 9-10M8 7.5 12 19l4-11.5" strokeLinejoin="round" /></svg>
  ),
};

function Img({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const desde = Math.min(...vuelos.map((v) => v.precio));

// ---------- Encabezado y portada ----------

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const nav = [
    { href: '#vuelos', label: 'Vuelos' },
    { href: '#grupo', label: 'En grupo' },
    { href: '#penon', label: 'El Peñón' },
    { href: '#antes', label: 'Antes de volar' },
    { href: '#contacto', label: 'Contacto' },
  ];
  return (
    <header className="oscuro sticky top-0 z-40 border-b border-white/10 bg-noche/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="flex min-w-0 shrink items-center" aria-label="FLUMEN Escuela de Vuelo, ir al inicio">
          <img src={escuela.logo.src} alt="" width={escuela.logo.w} height={escuela.logo.h} className="h-9 w-auto md:h-11" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-medium text-white/85 hover:text-rosa">{n.label}</a>)}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href={escuela.reservar} {...externo} className="btn hidden sm:inline-flex">Reserva tu vuelo</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir navegación"
            className="grid size-11 place-items-center rounded-full border border-white/30 text-white lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-white/10 bg-noche lg:hidden" aria-label="Móvil">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="border-b border-white/10 py-3 font-titulo text-2xl text-white">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  const datos = [
    [pesos(desde), 'el vuelo Aventurero, de 20 a 25 minutos'],
    ['Fotos y video', 'GoPro o Insta360 en los tres vuelos'],
    ['APPI', 'pilotos certificados, con licencia que puedes verificar'],
    ['Transporte', 'local desde el punto de encuentro'],
  ];
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden bg-noche text-white">
      <div className="absolute inset-0 -z-10">
        <Img foto={portada.foto} eager className="object-[60%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-noche/90 via-noche/55 to-noche/10" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-noche to-transparent" />
      </div>
      <div className="contenedor pb-10 pt-20 md:pb-14 md:pt-32">
        <div className="max-w-2xl">
          <p className="text-lg font-medium text-white/90">{portada.lugar}</p>
          <h1 className="mt-3 text-[clamp(3rem,8.5vw,6.2rem)] text-white">{portada.titulo}</h1>
          <p className="mt-4 font-titulo text-2xl text-rosa md:text-3xl">{portada.frase}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={escuela.reservar} {...externo} className="btn">{Icono.vela} Reserva tu vuelo</a>
            <a href={escuela.whatsapp} {...externo} className="btn-claro">{Icono.wa} Escríbenos por WhatsApp</a>
          </div>
        </div>
        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/20 pt-6 md:mt-24 md:grid-cols-4">
          {datos.map(([d, t]) => (
            <div key={t} className="flex min-w-0 flex-col-reverse">
              <dt className="text-[0.95rem] text-white/80">{t}</dt>
              <dd className="cifra font-titulo text-3xl text-white sm:text-4xl">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// ---------- Elemento memorable: El recorrido de tu vuelo ----------

// Dibujo simbólico, sin escala: la ruta real la decide el piloto según el viento.
const trazos: Record<VueloId, string> = {
  aventurero: 'M300 252 C340 240 362 214 346 200 C330 188 310 205 325 215 C345 228 376 205 361 188 C348 176 330 188 345 198 C430 236 610 306 860 398',
  explorador: 'M300 252 C340 234 362 200 341 185 C320 172 305 195 325 200 C350 205 371 170 346 155 C325 145 318 168 340 170 C430 148 560 118 680 146 C760 166 805 130 745 114 C692 102 650 160 722 200 C782 234 822 330 860 398',
  vip: 'M300 252 C345 230 366 185 341 168 C318 155 305 180 328 186 C356 190 373 145 346 128 C322 116 315 140 340 142 C440 108 560 68 700 88 C820 104 932 78 942 128 C950 176 882 190 852 228 C832 256 882 268 886 290 C890 312 850 318 845 298 C840 280 876 276 881 300 C886 330 846 340 843 322 C858 356 858 380 860 398',
};

function Recorrido({ elegido }: { elegido: VueloId }) {
  return (
    <svg viewBox="0 0 1000 460" className="h-auto w-full" role="img" aria-label={`Dibujo del recorrido del vuelo ${vuelos.find((v) => v.id === elegido)!.nombre}, del despegue en El Peñón al aterrizaje`}>
      <defs>
        <linearGradient id="cielo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#bcd6ef" /><stop offset="1" stopColor="#eef4fa" /></linearGradient>
      </defs>
      <rect width="1000" height="460" fill="url(#cielo)" />
      {/* sierra al fondo */}
      <path d="M0 292 L90 252 L170 276 L262 228 L362 262 L470 216 L590 258 L700 206 L820 250 L920 222 L1000 246 V460 H0Z" fill="#9db7a6" />
      {/* El Peñón */}
      <path d="M160 306 C156 252 168 192 188 162 C199 146 222 142 233 160 C252 196 254 252 266 284 L270 300Z" fill="#8a7c68" />
      <path d="M196 170 C204 208 204 256 210 300" stroke="#6f6353" strokeWidth="4" fill="none" />
      {/* ladera de pinos y valle */}
      <path d="M0 460 V322 Q80 302 150 306 L172 300 L300 258 Q342 262 382 300 Q472 362 562 350 Q652 340 722 380 Q792 410 1000 402 V460Z" fill="#2f5d3a" />
      {[[40, 322], [80, 314], [120, 312], [410, 322], [455, 344], [505, 352], [600, 348], [650, 350], [700, 372]].map(([x, y]) => (
        <path key={`${x}-${y}`} d={`M${x} ${y - 26} L${x + 11} ${y} H${x - 11}Z`} fill="#24492d" />
      ))}
      {/* aterrizaje "Piano" o "África" */}
      <ellipse cx="860" cy="404" rx="92" ry="12" fill="#86b27a" />
      {/* despegue */}
      <path d="M284 262 L318 250" stroke="#c9b98f" strokeWidth="7" strokeLinecap="round" />
      <path d="M318 250 V226" stroke="#141a3d" strokeWidth="2.5" />
      <path d="M318 227 L336 231 L318 237Z" fill="#ff2e64" />

      {/* los otros recorridos, tenues */}
      {vuelos.filter((v) => v.id !== elegido).map((v) => (
        <path key={v.id} d={trazos[v.id]} fill="none" stroke="#141a3d" strokeOpacity="0.18" strokeWidth="2.5" strokeDasharray="3 8" strokeLinecap="round" />
      ))}
      <path d={trazos[elegido]} fill="none" stroke="#c8174a" strokeOpacity="0.45" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path key={elegido} className="recorrido" pathLength={1} d={trazos[elegido]} fill="none" stroke="#c8174a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="300" cy="252" r="7" fill="#c8174a" stroke="#fff" strokeWidth="2.5" />
      <circle cx="860" cy="398" r="7" fill="#c8174a" stroke="#fff" strokeWidth="2.5" />

      <g fontFamily="Barlow, sans-serif" fontWeight="700" fontSize="30" fill="#141a3d">
        <text x="140" y="132">El Peñón</text>
        <text x="262" y="300" fill="#fff">Despegue</text>
        <text x="990" y="448" textAnchor="end" fill="#fff">Aterrizaje «Piano»</text>
      </g>
    </svg>
  );
}

function Regla({ elegido }: { elegido: VueloId }) {
  const pct = (m: number) => `${(m / 60) * 100}%`;
  return (
    <div className="mt-6" aria-hidden="true">
      <p className="text-sm font-bold text-noche">Minutos en el aire</p>
      <div className="relative mt-2 h-24">
        {vuelos.map((v, i) => {
          const fin = v.max ?? 60;
          const activo = v.id === elegido;
          return (
            <div key={v.id} className="absolute h-6" style={{ left: pct(v.min), width: pct(fin - v.min), top: `${i * 1.75}rem` }}>
              <span className={`cifra absolute right-full top-0 mr-2 whitespace-nowrap text-xs font-bold leading-6 ${activo ? 'text-rosa-hondo' : 'text-texto'}`}>{v.max === null ? `${v.min} o más` : `${v.min} a ${v.max}`}</span>
              <span className={`block h-full transition-colors ${v.max === null ? 'rounded-l-full bg-gradient-to-r' : 'rounded-full'} ${activo ? (v.max === null ? 'from-rosa-hondo to-rosa-hondo/20' : 'bg-rosa-hondo') : (v.max === null ? 'from-noche/15 to-noche/0' : 'bg-noche/15')}`} />
            </div>
          );
        })}
      </div>
      <div className="relative h-6 border-t border-noche/30">
        {[0, 10, 20, 30, 40, 50, 60].map((m) => (
          <span key={m} className="cifra absolute top-1 -translate-x-1/2 text-xs text-texto" style={{ left: pct(m) }}>{m}</span>
        ))}
      </div>
    </div>
  );
}

function Ficha({ v }: { v: Vuelo }) {
  const mensaje = `Hola, me interesa el vuelo ${v.nombre} (${v.duracion}, ${pesos(v.precio)}). ¿Tienen lugar para el día `;
  return (
    <article key={v.id} className="ficha min-w-0" aria-live="polite">
      <div className="grid gap-6 sm:grid-cols-5">
        <div className="aspect-[16/9] overflow-hidden rounded-2xl sm:col-span-2 sm:aspect-[4/3]"><Img foto={v.foto} /></div>
        <div className="min-w-0 sm:col-span-3">
          <h3 className="text-[clamp(2rem,4vw,2.7rem)]">{v.nombre}</h3>
          <p className="mt-1 font-titulo text-xl text-rosa-hondo">{v.frase}</p>
          <p className="mt-3">{v.texto}</p>
        </div>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-5">
        <dl className="grid grid-cols-2 content-start gap-4 sm:col-span-2 sm:grid-cols-1">
          <div className="min-w-0"><dt className="text-sm">Tiempo en el aire</dt><dd className="cifra font-titulo text-3xl text-noche">{v.duracion}</dd></div>
          <div className="min-w-0"><dt className="text-sm">Por persona</dt><dd className="cifra font-titulo text-3xl text-noche">{pesos(v.precio)}</dd></div>
        </dl>
        <div className="min-w-0 sm:col-span-3">
          <p className="font-bold text-noche">Incluye</p>
          <ul className="mt-2 space-y-1.5">
            {v.incluye.map((i) => <li key={i} className="flex gap-2"><span className="mt-2.5 size-2 shrink-0 rounded-full bg-rosa" aria-hidden="true" />{i}</li>)}
          </ul>
        </div>
      </div>
      <p className="mt-5 font-titulo text-xl text-noche">{v.lema}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a href={escuela.reservar} {...externo} className="btn-pino">{Icono.vela} Reservar este vuelo</a>
        <a href={wa(mensaje)} {...externo} className="btn-linea">{Icono.wa} Preguntar por WhatsApp</a>
        <a href={v.pagina} {...externo} className="enlace self-center">Ver su página</a>
      </div>
    </article>
  );
}

function Vuelos() {
  const [id, setId] = useState<VueloId>('explorador');
  const v = vuelos.find((x) => x.id === id)!;
  return (
    <section id="vuelos" className="py-20 md:py-24">
      <div className="contenedor">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="text-[clamp(2.4rem,5.2vw,4rem)] md:col-span-6">Elige tu experiencia</h2>
          <p className="text-lg md:col-span-6">
            Los tres vuelos despegan de El Peñón. Lo que cambia es cuánto tiempo pasas en el aire, hasta dónde te lleva el piloto y qué fotos te llevas. Elige uno y mira su recorrido.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3" role="group" aria-label="Elige tu vuelo">
          {vuelos.map((x) => (
            <button key={x.id} type="button" onClick={() => setId(x.id)} aria-pressed={x.id === id}
              className={`min-h-11 rounded-2xl border px-4 py-3 text-left transition-colors ${x.id === id ? 'border-noche bg-noche text-white' : 'border-noche/20 bg-papel text-noche hover:border-noche'}`}>
              <span className="block font-titulo text-xl sm:text-2xl">{x.nombre}</span>
              <span className={`cifra mt-1 block text-[0.95rem] ${x.id === id ? 'text-white/85' : 'text-texto'}`}>{x.duracion}, {pesos(x.precio)}</span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="min-w-0 lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-noche/10"><Recorrido elegido={id} /></div>
            <Regla elegido={id} />
            <p className="mt-2 text-sm">Dibujo simbólico y sin escala: la ruta real la decide el piloto según el viento y las térmicas del día.</p>
          </div>
          <div className="min-w-0 lg:col-span-6"><Ficha v={v} /></div>
        </div>

        <div className="mt-14 grid gap-4 rounded-2xl bg-papel p-6 md:grid-cols-12 md:items-center md:p-8">
          <p className="md:col-span-8">
            {pilotosAppi} <a href={escuela.appi} {...externo} className="enlace">lista de profesionales APPI</a>.
          </p>
          <p className="text-[0.95rem] md:col-span-4">Precios por persona publicados en la página de cada vuelo; el precio final lo da su reserva en línea.</p>
        </div>
      </div>
    </section>
  );
}

// ---------- En grupo ----------

function Grupo() {
  const a = grupo.amigos;
  return (
    <section id="grupo" className="border-y border-noche/10 bg-papel py-20 md:py-24">
      <div className="contenedor">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="text-[clamp(2.2rem,4.6vw,3.4rem)] md:col-span-7">{grupo.titulo}</h2>
          <p className="text-lg md:col-span-5">{grupo.texto}</p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <h3 className="text-3xl">Volar en grupo</h3>
            <ul className="mt-6 space-y-6">
              {grupo.paquetes.map((p) => (
                <li key={p.nombre} className="grid gap-4 border-t border-noche/15 pt-6 grid-cols-[7.5rem_1fr] sm:grid-cols-[10rem_1fr]">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl"><Img foto={p.foto} /></div>
                  <div className="min-w-0">
                    <p className="font-titulo text-2xl text-noche">{p.nombre}</p>
                    <p className="mt-1">{p.detalle}</p>
                    <p className="cifra mt-2"><span className="text-texto line-through">{pesos(p.antes)}</span> <span className="font-titulo text-3xl text-noche">{pesos(p.precio)}</span> <span className="text-sm">por el grupo</span></p>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-1 text-[0.95rem]">
              {grupo.condiciones.map((c) => <li key={c}>{c}</li>)}
            </ul>
            <a href={wa('Hola, somos un grupo de 4 y nos gustaría volar juntos con FLUMEN. ¿Tienen disponibilidad para el día ')} {...externo} className="btn-pino mt-6">{Icono.wa} Pedir disponibilidad para el grupo</a>
          </div>

          <aside className="oscuro min-w-0 rounded-2xl bg-noche p-6 text-white md:p-8 lg:col-span-5" aria-labelledby="amigos">
            <div className="aspect-[16/10] overflow-hidden rounded-xl"><Img foto={a.foto} /></div>
            <h3 id="amigos" className="mt-6 text-3xl text-white">{a.titulo}</h3>
            <p className="mt-1 text-white/85">{a.texto} Vuelo de {a.duracion}, con transporte local.</p>
            <dl className="mt-5 grid grid-cols-2 gap-4 border-y border-white/15 py-4">
              {a.precios.map(([g, p]) => (
                <div key={g}><dt className="text-sm text-white/80">{g}</dt><dd className="cifra font-titulo text-3xl text-white">{pesos(p)} <span className="font-sans text-sm font-normal text-white/80">por persona</span></dd></div>
              ))}
            </dl>
            <ul className="mt-4 space-y-1.5 text-[0.95rem] text-white/85">
              {a.terminos.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={escuela.reservar} {...externo} className="btn">Reservar</a>
              <a href={a.pagina} {...externo} className="btn-claro">Ver sus términos</a>
            </div>
          </aside>
        </div>
        <p className="mt-10 max-w-3xl">{grupo.entreSemana} <a href={escuela.promo} {...externo} className="enlace">Ver promociones</a></p>
      </div>
    </section>
  );
}

// ---------- El Peñón, equipo, galería ----------

function Penon() {
  return (
    <section id="penon" className="py-20 md:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="min-w-0 lg:col-span-5">
          <h2 className="text-[clamp(2.2rem,4.6vw,3.4rem)]">{penon.titulo}</h2>
          {penon.textos.map((p) => <p key={p.slice(0, 20)} className="mt-5 text-lg">{p}</p>)}
          <p className="mt-6"><a href={penon.pagina} {...externo} className="enlace">Leer más sobre El Peñón</a></p>
        </div>
        <figure className="min-w-0 lg:col-span-7">
          <div className="aspect-[16/10] overflow-hidden rounded-2xl"><Img foto={penon.foto} /></div>
          <figcaption className="mt-3 text-sm">El Peñón, el monolito que acompaña cada vuelo, sobre las nubes.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section className="oscuro bg-noche text-white" aria-labelledby="equipo">
      <div className="contenedor grid gap-10 py-20 md:py-24 lg:grid-cols-12 lg:items-center">
        <div className="order-2 min-w-0 lg:order-1 lg:col-span-6">
          <div className="aspect-[16/10] overflow-hidden rounded-2xl"><Img foto={equipo.foto} /></div>
        </div>
        <div className="order-1 min-w-0 lg:order-2 lg:col-span-6">
          <h2 id="equipo" className="text-[clamp(2.2rem,4.6vw,3.4rem)] text-white">{equipo.titulo}</h2>
          <p className="mt-5 text-lg text-white/85">{equipo.texto}</p>
          <dl className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {equipo.pilotos.map(([n, c]) => (
              <div key={n} className="min-w-0 border-t border-rosa pt-3">
                <dt className="font-titulo text-2xl text-white">{n}</dt>
                <dd className="text-white/80">{c}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 font-bold text-white">{equipo.aprender}</p>
          <a href={escuela.cursos} {...externo} className="btn mt-4">Conocer los cursos</a>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="galeria">
      <div className="contenedor">
        <h2 id="galeria" className="text-[clamp(2.2rem,4.6vw,3.4rem)]">Así se ve desde arriba</h2>
        <p className="mt-3 max-w-2xl text-lg">Capturas de los videos 360 de sus pasajeros, sobre Temascaltepec y Valle de Bravo.</p>
        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
          {galeria.map((g, i) => (
            <li key={g.src} className={`min-w-0 overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-square'}`}>
              <Img foto={g} />
            </li>
          ))}
        </ul>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonios.map(([t, n]) => (
            <figure key={n} className="min-w-0 border-t-2 border-rosa pt-4">
              <blockquote className="text-lg text-noche">«{t}»</blockquote>
              <figcaption className="mt-3 font-bold">{n}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-sm">Testimonios publicados en su sitio.</p>
      </div>
    </section>
  );
}

// ---------- Antes de volar y contacto ----------

function AntesDeVolar() {
  return (
    <section id="antes" className="border-t border-noche/10 bg-papel py-20 md:py-24">
      <div className="contenedor grid gap-14 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-7">
          <h2 className="text-[clamp(2.2rem,4.6vw,3.4rem)]">Antes de volar</h2>
          <dl className="mt-8 space-y-6">
            {preguntas.map(([p, r]) => (
              <div key={p} className="min-w-0 border-t border-noche/15 pt-4">
                <dt className="font-titulo text-2xl text-noche">{p}</dt>
                <dd className="mt-1">{r}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8"><a href={escuela.faq} {...externo} className="enlace">Todas sus preguntas frecuentes</a></p>
        </div>
        <div className="min-w-0 lg:col-span-5">
          <div className="rounded-2xl bg-niebla p-6 md:p-8">
            <h3 className="text-3xl">Cómo se reserva</h3>
            <p className="mt-3">{reservas.pasos}</p>
            <p className="mt-3 font-bold text-noche">{reservas.pago}</p>
            <p className="mt-3">{reservas.formas}</p>
            <h3 className="mt-8 text-2xl">Cancelaciones</h3>
            <p className="mt-1 text-[0.95rem]">Cargo sobre el precio total, solicitándolo por escrito.</p>
            <table className="mt-3 w-full text-left">
              <tbody>
                {reservas.cancelaciones.map(([c, p]) => (
                  <tr key={c} className="border-b border-noche/10"><th scope="row" className="py-2 font-normal">{c}</th><td className="cifra py-2 text-right font-bold text-noche">{p}</td></tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-[0.95rem]">{reservas.reprogramar}</p>
            <h3 className="mt-8 text-2xl">El clima</h3>
            <p className="mt-2">{reservas.clima}</p>
            <ul className="mt-6 space-y-2">
              <li><a href={escuela.cancelaciones} {...externo} className="enlace">Política de cancelaciones</a></li>
              <li><a href={escuela.carta} {...externo} className="enlace">Carta responsiva</a></li>
            </ul>
            <a href={escuela.reservar} {...externo} className="btn-pino mt-6">{Icono.vela} Reserva tu vuelo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro bg-noche text-white">
      <div className="contenedor grid gap-12 py-20 md:grid-cols-12 md:py-24">
        <div className="min-w-0 md:col-span-6">
          <h2 className="text-[clamp(2.2rem,4.6vw,3.4rem)] text-white">¿Listo para volar?</h2>
          <p className="mt-4 text-lg text-white/85">{escuela.encuentroTexto}</p>
          <p className="mt-4 text-white/85">{escuela.llegar}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={escuela.reservar} {...externo} className="btn">{Icono.vela} Reserva tu vuelo</a>
            <a href={escuela.whatsapp} {...externo} className="btn-claro">{Icono.wa} WhatsApp</a>
          </div>
        </div>
        <dl className="grid min-w-0 content-start gap-6 sm:grid-cols-2 md:col-span-6">
          <div className="sm:col-span-2">
            <dt className="font-bold text-rosa">Punto de encuentro</dt>
            <dd className="mt-1 text-lg">{escuela.encuentro}</dd>
            <dd className="mt-3"><a href={escuela.mapa} {...externo} className="inline-flex items-center gap-2 font-bold text-white underline decoration-rosa decoration-2 underline-offset-4">{Icono.mapa} Cómo llegar en Google Maps</a></dd>
          </div>
          <div>
            <dt className="font-bold text-rosa">WhatsApp</dt>
            <dd className="mt-1"><a className="cifra text-lg text-white underline underline-offset-4" href={escuela.whatsapp} {...externo}>{escuela.whatsappVisible}</a></dd>
            <dd className="mt-1 text-sm text-white/80">De {escuela.horarioWhatsapp}. {escuela.avisoWhatsapp}</dd>
          </div>
          <div>
            <dt className="font-bold text-rosa">Correo</dt>
            <dd className="mt-1"><a className="break-all text-white underline underline-offset-4" href={`mailto:${escuela.email}?subject=${encodeURIComponent('Vuelo en parapente')}`}>{escuela.email}</a></dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-bold text-rosa">Síguenos</dt>
            <dd className="mt-1 flex flex-wrap gap-x-6 gap-y-2">
              {escuela.redes.map((r) => <a key={r.nombre} className="text-white underline underline-offset-4" href={r.url} {...externo}>{r.nombre}: {r.usuario}</a>)}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro border-t border-white/10 bg-noche pb-28 pt-10 text-white/80 md:pb-10">
      <div className="contenedor grid gap-6 md:grid-cols-12 md:items-center">
        <div className="min-w-0 md:col-span-6">
          <img src={escuela.logo.src} alt={escuela.logo.alt} width={escuela.logo.w} height={escuela.logo.h} loading="lazy" className="h-12 w-auto" />
          <p className="mt-3">{escuela.nombre}</p>
        </div>
        <div className="min-w-0 text-sm md:col-span-6 md:text-right">
          <p className="flex flex-wrap gap-x-5 gap-y-1 md:justify-end">
            <a className="underline underline-offset-4 hover:text-white" href={escuela.cancelaciones} {...externo}>Política de cancelaciones</a>
            <a className="underline underline-offset-4 hover:text-white" href={escuela.privacidad} {...externo}>Aviso de privacidad</a>
          </p>
          <p className="mt-2">© {new Date().getFullYear()} {escuela.nombre}</p>
        </div>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-noche/10 bg-niebla/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr] gap-2">
        <a href={escuela.reservar} {...externo} className="btn px-2">Reservar</a>
        <a href={escuela.whatsapp} {...externo} className="btn-linea px-0" aria-label={`Escribir por WhatsApp: ${mensajeBase}`}>{Icono.wa}</a>
        <a href={escuela.telefono.href} className="btn-linea px-0" aria-label="Llamar a FLUMEN">{Icono.tel}</a>
        <a href={escuela.mapa} {...externo} className="btn-linea px-0" aria-label="Cómo llegar al punto de encuentro">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#vuelos" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Saltar a los vuelos</a>
      <Encabezado />
      <main>
        <Portada />
        <Vuelos />
        <Grupo />
        <Penon />
        <Equipo />
        <Galeria />
        <AntesDeVolar />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
