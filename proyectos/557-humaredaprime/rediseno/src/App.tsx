import { useMemo, useState } from 'react';
import {
  cierre, cortes, estandar, fotos, galeria, horario, horarioTexto, mensajeReserva, negocio, portada, wa,
} from './data/content';
import { ahoraVeracruz, hhmm, luna, luzDelDia, nombreLuna, sumarDias } from './cielo';

const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const DIAS_CORTOS = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const cierraTexto = (min: number) => (min >= 24 * 60 ? '24:00' : hhmm(min));

type Foto = { src: string; w: number; h: number; alt: string };
function Img({ f, className = '', eager = false, sizes }: { f: Foto; className?: string; eager?: boolean; sizes?: string }) {
  return (
    <img
      src={f.src}
      width={f.w}
      height={f.h}
      alt={f.alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      sizes={sizes}
      {...(eager ? { fetchPriority: 'high' as const } : {})}
    />
  );
}

function IconoWhats({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

function Flama({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" className={className} aria-hidden="true">
      <path fill="currentColor" d="M12 1c1.2 5-4.5 7.6-4.5 13.4 0 2 .8 3.4 1.8 4.4-.4-2.6 1-4.6 2.7-6 .1 3 2.6 4 2.6 7 0 1.3-.5 2.4-1.3 3.2 3.9-1 6.2-4.1 6.2-8.1C19.5 9 12.8 6.6 12 1ZM6 15.5C3.6 17.6 2.5 20 2.5 22.8 2.5 27.6 6.6 31 12 31c-3.6-1.3-5.9-4-5.9-7.6 0-2.8.9-4.9-.1-7.9Z" />
    </svg>
  );
}

/* ---------- Encabezado ---------- */
function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-blanco/10 bg-carbon/95 backdrop-blur">
      <div className="contenedor flex h-18 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Humareda Prime, volver al inicio" className="shrink-0">
          <img src={fotos.logo.src} width={150} height={60} alt="Restaurante Humareda Prime" className="h-12 w-auto sm:h-14" />
        </a>
        <nav aria-label="Secciones" className="hidden items-center gap-7 text-[0.95rem] md:flex">
          <a href="#cortes" className="text-humo hover:text-blanco">Cortes</a>
          <a href="#mar" className="text-humo hover:text-blanco">El mar desde tu mesa</a>
          <a href="#galeria" className="text-humo hover:text-blanco">Galería</a>
          <a href="#visitanos" className="text-humo hover:text-blanco">Visítanos</a>
        </nav>
        <a href={wa(mensajeReserva)} className="btn hidden !min-h-[42px] !px-5 sm:inline-flex">
          <IconoWhats /> Reservar
        </a>
      </div>
    </header>
  );
}

/* ---------- Portada ---------- */
function Portada() {
  const hoy = ahoraVeracruz();
  const h = horario[hoy.semana];
  const abierto = hoy.minuto >= h.abre && hoy.minuto < h.cierra;
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="contenedor grid items-center gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div className="min-w-0">
          <h1 className="text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-7xl">
            Steak House Premium <span className="cursiva">en Boca del Río</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl text-blanco/90">{portada.frase}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa(mensajeReserva)} className="btn"><IconoWhats /> Reserva por WhatsApp</a>
            <a href={negocio.telefonoHref} className="btn-linea">Llámanos</a>
          </div>
          <p className="mt-8 flex items-center gap-2 text-[0.95rem]">
            <Flama className="h-5 w-4 shrink-0 text-rojo" />
            <span>
              Hoy {DIAS[hoy.semana]}, de {hhmm(h.abre)} a {cierraTexto(h.cierra)}
              {abierto ? <strong className="text-ambar">: abierto ahora</strong> : null}.
            </span>
          </p>
        </div>
        <div className="relative min-w-0">
          <Img f={fotos.flameado} eager className="aspect-[4/5] w-full rounded-sm object-cover md:aspect-[3/4]" sizes="(min-width: 768px) 40vw, 100vw" />
        </div>
      </div>
    </section>
  );
}

/* ---------- El estándar ---------- */
function Estandar() {
  return (
    <section className="border-t border-blanco/10 bg-tizon">
      <div className="contenedor grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <Img f={fotos.mesa} className="aspect-[4/5] w-full rounded-sm object-cover md:order-2" sizes="(min-width: 768px) 45vw, 100vw" />
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">{estandar.titulo}</h2>
          <p className="mt-6 max-w-lg text-lg">{estandar.texto}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Cortes ---------- */
function Cortes() {
  return (
    <section id="cortes" className="contenedor grid gap-12 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-24">
      <Img f={fotos.ribeye} className="aspect-[2/3] w-full rounded-sm object-cover" sizes="(min-width: 768px) 32vw, 100vw" />
      <div className="min-w-0 md:pt-6">
        <h2 className="text-4xl sm:text-5xl">Nuestros cortes</h2>
        <p className="mt-4 max-w-lg">A las brasas, del Rib Eye al Costillar de Rib Eye.</p>
        <ul className="mt-8 border-t border-blanco/15">
          {cortes.map((c) => (
            <li key={c.nombre} className="flex flex-wrap items-baseline gap-x-3 border-b border-blanco/15 py-3.5">
              <span className="font-titulo text-2xl text-blanco sm:text-[1.7rem]">{c.nombre}</span>
              {c.nota ? <span className="text-[0.95rem] text-ambar">{c.nota}</span> : null}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-lg text-[0.95rem]">
          ¿Quieres saber qué cortes hay hoy, sus pesos y sus precios? Pregúntanos por WhatsApp.
        </p>
        <a
          href={wa('Hola, ¿me pueden compartir los cortes que tienen disponibles, con sus pesos y precios?')}
          className="btn-linea mt-5"
        >
          <IconoWhats /> Preguntar por los cortes
        </a>
      </div>
    </section>
  );
}

/* ---------- El mar desde tu mesa ---------- */
type Fase = 'dia' | 'atardecer' | 'anochecer' | 'noche';
const COLORES: Record<Fase, { cieloA: string; cieloB: string; mar: string; brillo: string }> = {
  dia: { cieloA: '#6fa9d6', cieloB: '#d4e8f2', mar: '#2d7aa3', brillo: '#9fd0e6' },
  atardecer: { cieloA: '#5c78a8', cieloB: '#f0b489', mar: '#3a6689', brillo: '#e9b99a' },
  anochecer: { cieloA: '#1e2c55', cieloB: '#9c6f84', mar: '#1f3857', brillo: '#7c6a86' },
  noche: { cieloA: '#03060f', cieloB: '#142042', mar: '#081427', brillo: '#3a4d78' },
};

function Luna({ edad, iluminada, creciente }: { edad: number; iluminada: number; creciente: boolean }) {
  const cx = 640, cy = 70, r = 20;
  if (edad < 1.5 || edad > 28) {
    return <circle cx={cx} cy={cy} r={r} fill="#1a2440" stroke="#3a4d78" strokeWidth="1" />;
  }
  const rx = Math.abs(1 - 2 * iluminada) * r;
  const gibosa = iluminada > 0.5;
  const exterior = creciente ? 1 : 0;
  const term = creciente ? (gibosa ? 1 : 0) : gibosa ? 0 : 1;
  const d = `M ${cx} ${cy - r} A ${r} ${r} 0 0 ${exterior} ${cx} ${cy + r} A ${rx} ${r} 0 0 ${term} ${cx} ${cy - r} Z`;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#1a2440" />
      <path d={d} fill="#f3ecd6" />
      <circle cx={cx} cy={cy} r={r + 10} fill="#f3ecd6" opacity={0.08 * iluminada} />
    </g>
  );
}

function Vista({ fase, fechaLuna }: { fase: Fase; fechaLuna: ReturnType<typeof luna> }) {
  const c = COLORES[fase];
  const noche = fase === 'noche' || fase === 'anochecer';
  const estrellas = [[90, 40], [180, 80], [260, 30], [340, 95], [420, 50], [510, 25], [560, 110], [720, 45], [760, 120], [140, 130], [470, 120]];
  return (
    <svg viewBox="0 0 800 400" className="h-auto w-full" role="img" aria-label={`Dibujo de la vista al mar desde una mesa: ${ETIQUETA[fase].toLowerCase()}`}>
      <defs>
        <linearGradient id="cielo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c.cieloA} className="cielo" />
          <stop offset="1" stopColor={c.cieloB} className="cielo" />
        </linearGradient>
      </defs>
      <rect width="800" height="232" fill="url(#cielo)" />
      {fase === 'noche' ? estrellas.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.4" fill="#fff" opacity="0.8" />) : null}
      {noche ? <Luna {...fechaLuna} /> : null}
      {/* el mar */}
      <rect y="228" width="800" height="120" fill={c.mar} className="cielo" />
      <path d="M0 232 H800" stroke={c.brillo} strokeWidth="2" opacity="0.7" />
      {noche && fechaLuna.iluminada > 0.15 ? (
        <path d="M612 240 h56 M620 256 h40 M628 272 h26 M634 288 h14" stroke="#f3ecd6" strokeWidth="3" opacity={0.25 + fechaLuna.iluminada * 0.35} />
      ) : (
        <path d="M80 262 h60 M260 280 h90 M470 258 h70 M620 296 h80" stroke={c.brillo} strokeWidth="2.5" opacity="0.45" />
      )}
      {/* la arena */}
      <path d="M0 330 Q200 310 420 322 T800 318 V400 H0 Z" fill={noche ? '#2b2a26' : '#d9c7a5'} className="cielo" />
      {/* palmeras */}
      <g fill={noche ? '#0b120c' : '#21341f'} className="cielo">
        <path d="M118 330 C120 280 128 236 146 196 L151 198 C135 238 128 282 127 330 Z" />
        <path d="M148 196 C120 180 92 186 70 204 C98 192 122 194 146 202 Z" />
        <path d="M148 196 C170 172 204 168 230 180 C204 176 176 184 150 202 Z" />
        <path d="M148 196 C142 168 122 150 96 146 C122 158 136 174 144 200 Z" />
        <path d="M148 196 C168 188 196 198 212 222 C192 204 170 198 150 200 Z" />
        <path d="M680 334 C684 296 690 262 704 232 L708 234 C696 264 690 298 688 334 Z" />
        <path d="M706 232 C688 218 664 220 648 234 C668 226 688 228 704 238 Z" />
        <path d="M706 232 C722 214 748 212 768 222 C748 220 726 226 708 238 Z" />
        <path d="M706 232 C704 212 690 200 672 196 C690 206 700 218 704 236 Z" />
      </g>
      {/* barandal de la terraza */}
      <g stroke={noche ? '#141a15' : '#2a2f2b'} strokeWidth="5">
        <path d="M0 322 H800" />
        {Array.from({ length: 17 }, (_, i) => <path key={i} d={`M${i * 50 + 10} 322 V360`} strokeWidth="3" />)}
      </g>
      {/* tu mesa */}
      <path d="M0 356 H800 V400 H0 Z" fill="#6b4125" />
      <path d="M0 356 H800" stroke="#8a5a34" strokeWidth="3" />
      {/* plato con un corte que humea */}
      <ellipse cx="400" cy="376" rx="92" ry="17" fill="#141414" />
      <ellipse cx="392" cy="370" rx="46" ry="9" fill="#5b2a17" />
      <path d="M356 369 h72 M362 373 h60" stroke="#2c140a" strokeWidth="2" />
      <g fill="#e9e4dc">
        <circle className="humo" cx="380" cy="352" r="7" style={{ animationDelay: '0s' }} />
        <circle className="humo" cx="398" cy="348" r="8" style={{ animationDelay: '1.4s' }} />
        <circle className="humo" cx="414" cy="352" r="6" style={{ animationDelay: '2.8s' }} />
      </g>
      {/* copa de vino */}
      <g>
        <path d="M560 318 h34 c0 22 -6 34 -17 36 c-11 -2 -17 -14 -17 -36 Z" fill="none" stroke="#e9e4dc" strokeWidth="2" opacity="0.85" />
        <path d="M562 334 h30 c-2 12 -7 18 -15 19 c-8 -1 -13 -7 -15 -19 Z" fill="#6d0f1a" />
        <path d="M577 354 V376 M565 378 h24" stroke="#e9e4dc" strokeWidth="2" opacity="0.85" />
      </g>
    </svg>
  );
}

const ETIQUETA: Record<Fase, string> = {
  dia: 'De día',
  atardecer: 'Última luz',
  anochecer: 'Anochecer',
  noche: 'De noche',
};

function MarDesdeTuMesa() {
  const hoy = useMemo(() => ahoraVeracruz(), []);
  const dias = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => {
        const { dia, semana } = sumarDias(hoy.dia, i);
        const h = horario[semana];
        const ultima = h.cierra - 30;
        const primera = i === 0 ? Math.max(h.abre, Math.ceil((hoy.minuto + 1) / 15) * 15) : h.abre;
        return { i, dia, semana, h, primera, ultima, disponible: primera <= ultima };
      }),
    [hoy],
  );
  const inicial = dias.find((d) => d.disponible) ?? dias[1];
  const [idx, setIdx] = useState(inicial.i);
  const sel = dias[idx];
  const luz = useMemo(() => luzDelDia(sel.dia, negocio.lat, negocio.lon), [sel]);
  const sugerida = Math.min(sel.ultima, Math.max(sel.primera, Math.floor((luz.puesta - 30) / 15) * 15));
  const [minutoElegido, setMinuto] = useState<number | null>(null);
  const minuto = minutoElegido === null ? sugerida : Math.min(sel.ultima, Math.max(sel.primera, minutoElegido));
  const [personas, setPersonas] = useState(2);
  const [conVista, setConVista] = useState(true);
  const l = useMemo(() => luna(sel.dia), [sel]);

  const fase: Fase =
    minuto < luz.puesta - 60 ? 'dia' : minuto < luz.puesta ? 'atardecer' : minuto < luz.anochecer + 15 ? 'anochecer' : 'noche';
  const nombreL = nombreLuna(l.edad);
  const frase =
    fase === 'dia'
      ? 'Llegas de día, con el mar a plena luz.'
      : fase === 'atardecer'
        ? `Llegas con la última luz del día: el sol se oculta a las ${hhmm(luz.puesta)}.`
        : fase === 'anochecer'
          ? 'El sol ya se ocultó: llegas cuando el cielo sobre el mar se va apagando.'
          : nombreL === 'luna nueva'
            ? 'Llegas de noche, en luna nueva: el mar se oye más de lo que se ve.'
            : `Llegas de noche. Esa noche hay ${nombreL} (${Math.round(l.iluminada * 100)} % iluminada).`;

  const fechaTexto = `${DIAS[sel.semana]} ${sel.dia.d} de ${MESES[sel.dia.m - 1]}`;
  const mensaje =
    `Hola, me gustaría hacer una reservación en Humareda Prime para el ${fechaTexto} a las ${hhmm(minuto)}, ` +
    `para ${personas} ${personas === 1 ? 'persona' : 'personas'}.` +
    (conVista ? ' De ser posible, en una mesa con vista al mar.' : '') +
    ' ¿Podrían apoyarme con disponibilidad?';

  const elegirDia = (i: number) => {
    setIdx(i);
    setMinuto(null);
  };

  return (
    <section id="mar" className="border-y border-blanco/10 bg-tizon py-16 md:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl">
            El mar <span className="cursiva">desde tu mesa</span>
          </h2>
          <p className="mt-5 text-lg">
            Estamos frente al mar, en la costera de Boca del Río. Elige el día y la hora de tu reservación y te decimos cómo vas a
            encontrar el mar: de día, con la última luz o ya de noche.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
          <div className="min-w-0">
            <div className="overflow-hidden rounded-sm border border-blanco/10">
              <Vista fase={fase} fechaLuna={l} />
            </div>
            <div aria-live="polite" className="mt-5">
              <p className="font-titulo text-2xl text-blanco sm:text-[1.75rem]">
                <span className="text-ambar">{ETIQUETA[fase]}.</span> {frase}
              </p>
              <p className="mt-3 text-[0.95rem]">
                El {fechaTexto} abrimos de {hhmm(sel.h.abre)} a {cierraTexto(sel.h.cierra)}. El sol se oculta a las {hhmm(luz.puesta)} y
                oscurece a las {hhmm(luz.anochecer)}.
              </p>
            </div>
            <p className="mt-3 text-[0.85rem] text-humo/85">
              Sol y luna calculados para Boca del Río. Dibujo ilustrativo: la vista depende de tu mesa.
            </p>
          </div>

          <div className="min-w-0 space-y-7">
            <fieldset>
              <legend className="font-sans text-[0.95rem] font-bold text-blanco">¿Qué día vienes?</legend>
              <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7 lg:grid-cols-4">
                {dias.map((d) => (
                  <button
                    key={d.i}
                    type="button"
                    disabled={!d.disponible}
                    aria-pressed={d.i === idx}
                    onClick={() => elegirDia(d.i)}
                    className={`${d.i === 0 ? 'col-span-2 sm:col-span-1 lg:col-span-2 ' : ''}flex min-h-[64px] flex-col items-center justify-center rounded-sm border px-1 py-2 text-center leading-tight transition-colors ${
                      d.i === idx
                        ? 'border-rojo bg-brasa text-white'
                        : 'border-blanco/20 text-blanco hover:border-blanco/60 disabled:cursor-not-allowed disabled:opacity-45'
                    }`}
                  >
                    <span className="text-[0.95rem] font-bold">{d.i === 0 ? 'Hoy' : d.i === 1 ? 'Mañana' : `${DIAS_CORTOS[d.semana]} ${d.dia.d}`}</span>
                    <span className="mt-0.5 text-[0.78rem]">
                      {d.disponible ? `hasta ${cierraTexto(d.h.cierra)}` : 'ya cerramos'}
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="hora" className="flex items-baseline justify-between text-[0.95rem] font-bold text-blanco">
                <span>¿A qué hora llegas?</span>
                <span className="font-titulo text-3xl font-medium text-ambar">{hhmm(minuto)}</span>
              </label>
              <input
                id="hora"
                type="range"
                min={sel.primera}
                max={sel.ultima}
                step={15}
                value={minuto}
                onChange={(e) => setMinuto(Number(e.target.value))}
                aria-valuetext={`${hhmm(minuto)}, ${ETIQUETA[fase].toLowerCase()}`}
                className="mt-3 w-full accent-[#ed3237]"
              />
              <div className="mt-1 flex justify-between text-[0.8rem]">
                <span>{hhmm(sel.primera)}</span>
                <span>{hhmm(sel.ultima)}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span id="personas-l" className="text-[0.95rem] font-bold text-blanco">¿Cuántos son?</span>
                <div className="mt-2 flex items-center gap-3" role="group" aria-labelledby="personas-l">
                  <button type="button" onClick={() => setPersonas((p) => Math.max(1, p - 1))} className="btn-linea !min-h-[44px] !w-11 !px-0" aria-label="Una persona menos">−</button>
                  <span className="min-w-[5.5rem] text-center text-blanco" aria-live="polite">{personas} {personas === 1 ? 'persona' : 'personas'}</span>
                  <button type="button" onClick={() => setPersonas((p) => Math.min(20, p + 1))} className="btn-linea !min-h-[44px] !w-11 !px-0" aria-label="Una persona más">+</button>
                </div>
              </div>
              <label className="flex cursor-pointer items-center gap-3 text-[0.95rem] text-blanco">
                <input type="checkbox" checked={conVista} onChange={(e) => setConVista(e.target.checked)} className="h-5 w-5 accent-[#ed3237]" />
                Pedir mesa con vista al mar
              </label>
            </div>

            <div>
              <a href={wa(mensaje)} className="btn w-full"><IconoWhats /> Reservar el {DIAS[sel.semana]} a las {hhmm(minuto)}</a>
              <p className="mt-3 text-[0.85rem]">Se abre WhatsApp con tu mensaje ya escrito; nos confirmas la mesa por ahí.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Galería ---------- */
function Galeria() {
  return (
    <section id="galeria" className="contenedor py-16 md:py-24">
      <h2 className="text-4xl sm:text-5xl">{galeria.titulo}</h2>
      <p className="mt-4 max-w-xl">El salón, la terraza frente a la playa y la coctelería de autor.</p>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-6 md:grid-rows-[auto_auto]">
        <Img f={fotos.salon} className="col-span-2 aspect-[16/9] h-full w-full rounded-sm object-cover md:col-span-4" sizes="(min-width: 768px) 66vw, 100vw" />
        <Img f={fotos.vistaMar} className="col-span-2 aspect-[4/5] h-full w-full rounded-sm object-cover md:col-span-2 md:row-span-2 md:aspect-auto" sizes="(min-width: 768px) 33vw, 100vw" />
        <Img f={fotos.cocteles} className="aspect-[3/4] h-full w-full rounded-sm object-cover md:col-span-2 md:aspect-[4/3]" sizes="(min-width: 768px) 33vw, 50vw" />
        <Img f={fotos.brindis} className="aspect-[3/4] h-full w-full rounded-sm object-cover md:col-span-2 md:aspect-[4/3]" sizes="(min-width: 768px) 33vw, 50vw" />
      </div>
    </section>
  );
}

/* ---------- Visítanos ---------- */
function Visitanos() {
  return (
    <section id="visitanos" className="bg-hueso text-tierra">
      <div className="contenedor grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div className="min-w-0">
          <h2 className="!text-carbon text-4xl sm:text-5xl">Visítanos</h2>
          <dl className="mt-8 space-y-5">
            <div>
              <dt className="font-bold text-carbon">Horario</dt>
              {horarioTexto.map((h) => (
                <dd key={h.dias}>{h.dias}: {h.horas}</dd>
              ))}
            </div>
            <div>
              <dt className="font-bold text-carbon">Teléfono y WhatsApp</dt>
              <dd><a href={negocio.telefonoHref} className="underline decoration-brasa underline-offset-4 hover:text-carbon">{negocio.telefono}</a></dd>
            </div>
            <div>
              <dt className="font-bold text-carbon">Dirección</dt>
              <dd>{negocio.direccion}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.mapa} className="btn">Cómo llegar en Google Maps</a>
            <a href={wa(mensajeReserva)} className="inline-flex min-h-[48px] items-center gap-2 rounded-sm border border-carbon/50 px-6 py-3 text-[0.95rem] font-bold text-carbon hover:bg-carbon/5">
              <IconoWhats /> Reserva por WhatsApp
            </a>
          </div>
        </div>
        <a href={negocio.mapa} className="group block min-w-0" aria-label="Abrir Humareda Prime en Google Maps">
          <Img f={fotos.fachada} className="aspect-[16/10] w-full rounded-sm object-cover transition-opacity group-hover:opacity-90" sizes="(min-width: 768px) 45vw, 100vw" />
          <span className="mt-3 block text-[0.9rem]">Nuestra fachada sobre el Blvd. Vicente Fox. Toca la foto para ver cómo llegar.</span>
        </a>
      </div>
    </section>
  );
}

/* ---------- Cierre y pie ---------- */
function Cierre() {
  return (
    <section className="relative isolate overflow-hidden">
      <Img f={fotos.cortesVino} className="absolute inset-0 -z-10 h-full w-full object-cover" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-carbon/80" />
      <div className="contenedor py-20 text-center md:py-28">
        <h2 className="text-4xl sm:text-5xl">{cierre.titulo}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-blanco/90">{cierre.frase}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={wa(mensajeReserva)} className="btn"><IconoWhats /> Reserva por WhatsApp</a>
          <a href={negocio.telefonoHref} className="btn-linea">Llámanos</a>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-blanco/10 pb-24 md:pb-0">
      <div className="contenedor flex flex-col items-start justify-between gap-5 py-10 text-[0.9rem] sm:flex-row sm:items-center">
        <img src={fotos.logo.src} width={125} height={50} alt="Humareda Prime" loading="lazy" className="h-11 w-auto" />
        <p>{negocio.direccion}</p>
        <p>© {new Date().getFullYear()} Humareda Prime</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-blanco/15 bg-carbon/95 backdrop-blur md:hidden">
      <a href={wa(mensajeReserva)} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-brasa text-[0.8rem] font-bold text-white">
        <IconoWhats /> Reservar
      </a>
      <a href={negocio.telefonoHref} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.8rem] font-bold text-blanco">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1Z" /></svg>
        Llamar
      </a>
      <a href={negocio.mapa} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.8rem] font-bold text-blanco">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" /></svg>
        Cómo llegar
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#mar" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-blanco focus:px-4 focus:py-2 focus:text-carbon">
        Ir a El mar desde tu mesa
      </a>
      <Encabezado />
      <main>
        <Portada />
        <Estandar />
        <Cortes />
        <MarDesdeTuMesa />
        <Galeria />
        <Visitanos />
        <Cierre />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
