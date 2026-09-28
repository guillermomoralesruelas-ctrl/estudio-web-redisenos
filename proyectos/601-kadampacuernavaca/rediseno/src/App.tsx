import { useEffect, useMemo, useState } from 'react';
import {
  negocio, wa, waGeneral, foto, lugares, semanales, mensuales, especiales, pasos, clases, puyas, cerca, linaje, logros,
  type LugarId, type Practica,
} from './data/content';

// ---------- Fechas en la hora de Cuernavaca ----------
const ZONA = 'America/Mexico_City';
const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const DIAS_CORTOS = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

type Dia = { y: number; m: number; d: number; dow: number; iso: string };

function hoyEnCuernavaca(ahora: Date): { dia: Dia; minutos: number } {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-CA', { timeZone: ZONA, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
      .formatToParts(ahora).map((x) => [x.type, x.value]),
  );
  const y = +p.year, m = +p.month, d = +p.day;
  return { dia: crearDia(y, m, d), minutos: +p.hour * 60 + +p.minute };
}
function crearDia(y: number, m: number, d: number): Dia {
  const f = new Date(Date.UTC(y, m - 1, d));
  const iso = f.toISOString().slice(0, 10);
  return { y: f.getUTCFullYear(), m: f.getUTCMonth() + 1, d: f.getUTCDate(), dow: f.getUTCDay(), iso };
}
const sumarDias = (x: Dia, n: number) => crearDia(x.y, x.m, x.d + n);
const aMin = (h?: string) => (h ? +h.slice(0, 2) * 60 + +h.slice(3, 5) : -1);
const nombreDia = (x: Dia) => `${DIAS[x.dow]} ${x.d} de ${MESES[x.m - 1]}`;

type Item = Practica & { especial?: boolean };

function practicasDe(x: Dia): Item[] {
  const lista: Item[] = [
    ...especiales.filter((e) => (e.hasta ? x.iso >= e.fecha && x.iso <= e.hasta : x.iso === e.fecha)).map((e) => ({ ...e, especial: true })),
    ...semanales.filter((s) => s.dia === x.dow),
    ...mensuales.filter((s) => s.dias.includes(x.d)),
  ];
  return lista.sort((a, b) => aMin(a.hora) - aMin(b.hora));
}

function useAhora() {
  const [ahora, setAhora] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setAhora(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);
  return ahora;
}

const mensajeDe = (p: Practica, x: Dia) =>
  `Hola, me gustaría asistir a «${p.nombre}» el ${nombreDia(x)}${p.hora ? ` a las ${p.hora}` : ''} en ${lugares[p.lugar].corto}. ¿Me pueden confirmar?`;

// ---------- Íconos ----------
function IconoWhats({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}
function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}
function IconoMapa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

// ---------- Lámpara de ofrenda ----------
function Lampara({ encendida, especial, elegida }: { encendida: boolean; especial: boolean; elegida: boolean }) {
  const cuenco = especial ? 'var(--color-kadampa)' : 'var(--color-oro)';
  return (
    <svg viewBox="0 0 60 84" className="mx-auto h-16 w-12 sm:h-20 sm:w-14" aria-hidden="true">
      {encendida && (
        <g className={elegida ? 'llama' : undefined} style={{ transformOrigin: '30px 44px' }}>
          <ellipse cx="30" cy="30" rx="13" ry="17" fill="var(--color-oro)" opacity={elegida ? 0.28 : 0.14} />
          <path d="M30 12c7 9 9 17 6 24-1.6 3.6-4 5.5-6 5.5s-4.4-1.9-6-5.5c-3-7-1-15 6-24Z" fill="#F7A21B" />
          <path d="M30 24c3.4 4.6 4.3 8.6 2.8 12-.7 1.7-1.8 2.6-2.8 2.6s-2.1-.9-2.8-2.6c-1.5-3.4-.6-7.4 2.8-12Z" fill="#FFE7A3" />
        </g>
      )}
      <line x1="30" y1="40" x2="30" y2="46" stroke="var(--color-tinta)" strokeWidth="2" strokeLinecap="round" opacity={encendida ? 0.9 : 0.45} />
      <path d="M8 46h44c0 9-9.8 15-22 15S8 55 8 46Z" fill={cuenco} opacity={encendida ? 1 : 0.4} />
      <rect x="26" y="60" width="8" height="10" fill={cuenco} opacity={encendida ? 1 : 0.4} />
      <path d="M16 76c0-4 6.3-6 14-6s14 2 14 6Z" fill={cuenco} opacity={encendida ? 1 : 0.4} />
    </svg>
  );
}

// ---------- Elemento memorable: catorce lámparas ----------
const FILTROS: { id: 'todos' | LugarId; t: string }[] = [
  { id: 'todos', t: 'Todos los lugares' },
  { id: 'cuernavaca', t: 'Cuernavaca (Vista Hermosa)' },
  { id: 'centro', t: 'Centro Histórico' },
  { id: 'tepoztlan', t: 'Tepoztlán' },
  { id: 'jojutla', t: 'Jojutla' },
  { id: 'jiutepec', t: 'Jiutepec' },
  { id: 'yautepec', t: 'Yautepec' },
];

function Lamparas({ ahora }: { ahora: Date }) {
  const { dia: hoy, minutos } = hoyEnCuernavaca(ahora);
  const [filtro, setFiltro] = useState<'todos' | LugarId>('todos');
  const dias = useMemo(() => Array.from({ length: 14 }, (_, i) => sumarDias(hoy, i)), [hoy.iso]);
  const porDia = useMemo(
    () => dias.map((x) => practicasDe(x).filter((p) => filtro === 'todos' || p.lugar === filtro)),
    [dias, filtro],
  );
  const pasada = (p: Item, i: number) => i === 0 && p.hora !== undefined && minutos > (p.fin ? aMin(p.fin) : aMin(p.hora) + 60);

  // La siguiente práctica con hora, desde ahora
  let siguiente: { i: number; k: number } | null = null;
  buscar: for (let i = 0; i < 14; i++) {
    for (let k = 0; k < porDia[i].length; k++) {
      const p = porDia[i][k];
      if (p.hora && !(i === 0 && aMin(p.hora) < minutos)) { siguiente = { i, k }; break buscar; }
    }
  }
  const primeraConPractica = porDia.findIndex((l) => l.length > 0);
  const [elegido, setElegido] = useState<number | null>(null);
  const sel = elegido ?? (siguiente ? siguiente.i : Math.max(primeraConPractica, 0));
  const lista = porDia[sel];
  const x = dias[sel];

  const fila = (desde: number) => (
    <div>
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {dias.slice(desde, desde + 7).map((d, j) => {
          const i = desde + j;
          const n = porDia[i].length;
          const esp = porDia[i].some((p) => p.tipo === 'especial' || mensuales.some((m) => m.nombre === p.nombre));
          const activo = i === sel;
          return (
            <button
              key={d.iso}
              type="button"
              onClick={() => setElegido(i)}
              aria-pressed={activo}
              aria-label={`${nombreDia(d)}: ${n === 0 ? 'sin prácticas' : `${n} ${n === 1 ? 'práctica' : 'prácticas'}`}`}
              className={`group relative flex min-w-0 flex-col items-center rounded-t-full px-0.5 pb-1 pt-2 transition-colors ${activo ? 'bg-white shadow-[0_0_0_2px_var(--color-oro)]' : 'hover:bg-white/60'}`}
            >
              <span className={`text-[0.7rem] leading-none sm:text-xs ${i === 0 ? 'font-bold text-granate' : 'text-tinta/75'}`}>{i === 0 ? 'hoy' : DIAS_CORTOS[d.dow]}</span>
              <span className="font-display text-lg font-extrabold leading-tight text-tinta sm:text-xl">{d.d}</span>
              <Lampara encendida={n > 0} especial={esp} elegida={activo} />
              <span className="sr-only">{activo ? '(elegido)' : ''}</span>
            </button>
          );
        })}
      </div>
      <div className="h-3 rounded-sm bg-granate shadow-[0_6px_0_-2px_#5f1320]" aria-hidden="true" />
    </div>
  );

  return (
    <section id="calendario" className="bg-cielo py-16 sm:py-24" aria-labelledby="t-lamparas">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 id="t-lamparas" className="font-display text-3xl font-extrabold text-tinta sm:text-4xl">Catorce lámparas: tus próximas dos semanas en el centro</h2>
          <p className="mt-4 max-w-prose text-lg leading-relaxed">
            Cada lámpara es un día, contado desde hoy con la hora de Cuernavaca. Las encendidas tienen clase u oraciones; las azules marcan un
            evento especial o una oración de fecha fija del mes. Toca una para ver a qué hora es, dónde y con quién.
          </p>
          <fieldset className="mt-6">
            <legend className="font-display font-bold text-tinta">¿Dónde te queda mejor?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {FILTROS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => { setFiltro(f.id); setElegido(null); }}
                  aria-pressed={filtro === f.id}
                  className={`rounded-full border-2 px-3.5 py-1.5 text-sm font-semibold transition-colors ${filtro === f.id ? 'border-tinta bg-tinta text-white' : 'border-tinta/25 bg-white text-tinta hover:border-tinta'}`}
                >
                  {f.t}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
        <div className="min-w-0">
          <div className="space-y-6">
            {fila(0)}
            {fila(7)}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-tinta/80">
            El centro publica cada mes su calendario y a veces suspende actividades (en septiembre de 2026, el 13 y el 14). Antes de ir, confírmalo por WhatsApp.
          </p>
        </div>

        <div className="min-w-0" aria-live="polite">
          <div className="rounded-3xl bg-white p-6 shadow-[0_1px_0_#d7e3ec] sm:p-8">
            <p className="font-display text-sm font-bold text-granate">{sel === 0 ? 'Hoy' : sel === 1 ? 'Mañana' : `En ${sel} días`}</p>
            <h3 className="font-display text-2xl font-extrabold text-tinta sm:text-3xl">{nombreDia(x).charAt(0).toUpperCase() + nombreDia(x).slice(1)}</h3>
            {lista.length === 0 ? (
              <div className="mt-5">
                <p className="text-lg">Este día no hay prácticas publicadas{filtro !== 'todos' ? ` en ${lugares[filtro as LugarId].corto}` : ''}.</p>
                {primeraConPractica >= 0 && primeraConPractica !== sel && (
                  <button type="button" onClick={() => setElegido(primeraConPractica)} className="mt-4 font-display font-bold text-kadampa underline underline-offset-4">
                    Ver el {nombreDia(dias[primeraConPractica])}
                  </button>
                )}
              </div>
            ) : (
              <ul className="mt-5 divide-y divide-tinta/10">
                {lista.map((p, k) => {
                  const esSig = siguiente !== null && siguiente.i === sel && siguiente.k === k;
                  const ya = pasada(p, sel);
                  return (
                    <li key={p.nombre + p.lugar + k} className={`grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-4 py-4 ${ya ? 'opacity-55' : ''}`}>
                      <div className="font-display text-xl font-extrabold leading-none text-tinta">
                        {p.hora ?? '—'}
                        {p.fin && <span className="mt-1 block text-sm font-bold text-tinta/70">a {p.fin}</span>}
                      </div>
                      <div className="min-w-0">
                        {esSig && <p className="mb-1 inline-block rounded-full bg-oro px-2.5 py-0.5 font-display text-xs font-extrabold text-tinta">La siguiente</p>}
                        {ya && <p className="mb-1 text-sm font-semibold">Ya pasó hoy</p>}
                        <p className="font-display text-lg font-bold leading-snug text-tinta">{p.nombre}</p>
                        <p className="mt-1 text-[0.95rem] leading-relaxed">
                          {lugares[p.lugar].donde}
                          {p.con && <>. Con {p.con}</>}
                          {p.aportacion && <>. Aportación: {p.aportacion}</>}
                          {p.nota && <>. {p.nota}</>}
                        </p>
                        {!ya && (
                          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                            <a href={wa(mensajeDe(p, x))} className="inline-flex items-center gap-1.5 font-display font-bold text-whats underline-offset-4 hover:underline">
                              <IconoWhats className="h-4 w-4" /> Avisar que voy
                            </a>
                            {p.enlace && <a href={p.enlace} className="font-display font-bold text-kadampa underline-offset-4 hover:underline">Inscribirme en línea</a>}
                            {lugares[p.lugar].mapa && p.lugar !== 'cuernavaca' && (
                              <a href={lugares[p.lugar].mapa} className="font-display font-bold text-kadampa underline-offset-4 hover:underline">Cómo llegar</a>
                            )}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function Siguiente({ ahora }: { ahora: Date }) {
  const { dia: hoy, minutos } = hoyEnCuernavaca(ahora);
  for (let i = 0; i < 14; i++) {
    const x = sumarDias(hoy, i);
    const p = practicasDe(x).find((q) => q.hora && !(i === 0 && aMin(q.hora) < minutos));
    if (p) {
      const cuando = i === 0 ? 'hoy' : i === 1 ? 'mañana' : `el ${nombreDia(x)}`;
      return (
        <a href="#calendario" className="group mt-8 block max-w-md rounded-2xl border-2 border-oro bg-white/70 px-5 py-4 transition-colors hover:bg-white">
          <span className="block text-sm font-semibold text-granate">La siguiente práctica</span>
          <span className="mt-0.5 block font-display text-lg font-extrabold leading-snug text-tinta">{p.nombre}</span>
          <span className="block">{cuando}, {p.hora} h, en {lugares[p.lugar].corto}</span>
          <span className="mt-2 block font-display text-sm font-bold text-kadampa group-hover:underline">Ver las próximas dos semanas</span>
        </a>
      );
    }
  }
  return null;
}

// ---------- Página ----------
export default function App() {
  const ahora = useAhora();
  const hoyIso = hoyEnCuernavaca(ahora).dia.iso;
  // Un renglón por evento; las fechas repetidas (La Rueda de la Vida) se juntan en el mismo renglón.
  const futuros = especiales
    .filter((e) => (e.hasta ?? e.fecha) >= hoyIso)
    .reduce<{ e: (typeof especiales)[number]; otras: string[] }[]>((acc, e) => {
      const ya = acc.find((a) => a.e.nombre === e.nombre);
      if (ya) ya.otras.push(e.fecha); else acc.push({ e, otras: [] });
      return acc;
    }, []);
  const fechaCorta = (iso: string) => `${+iso.slice(8, 10)} de ${MESES[+iso.slice(5, 7) - 1]}`;

  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Ir al contenido</a>

      <header className="sticky top-0 z-40 border-b border-tinta/10 bg-white/95 backdrop-blur">
        <div className="contenedor flex h-16 items-center justify-between gap-4">
          <a href="#inicio" className="shrink-0">
            <img src={foto('logo-azul.webp')} width={640} height={273} alt="Centro de meditación Kadampa Cuernavaca" className="h-10 w-auto" />
          </a>
          <nav aria-label="Principal" className="hidden items-center gap-6 font-display font-bold text-tinta lg:flex">
            <a href="#calendario" className="hover:text-kadampa">Calendario</a>
            <a href="#clases" className="hover:text-kadampa">Clases</a>
            <a href="#maestra" className="hover:text-kadampa">Maestra residente</a>
            <a href="#nosotros" className="hover:text-kadampa">Nosotros</a>
            <a href="#eventos" className="hover:text-kadampa">Eventos</a>
            <a href="#visitanos" className="hover:text-kadampa">Visítanos</a>
          </nav>
          <a href={waGeneral} className="inline-flex items-center gap-2 rounded-full bg-whats px-4 py-2 font-display font-bold text-white hover:brightness-110">
            <IconoWhats /> <span className="hidden sm:inline">Escríbenos</span><span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      <main id="contenido">
        {/* Portada */}
        <section id="inicio" className="overflow-hidden bg-cielo">
          <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:py-20">
            <div className="min-w-0">
              <p className="font-display text-lg font-bold text-kadampa">{negocio.lema}</p>
              <h1 className="mt-2 font-display text-[2.6rem] font-extrabold leading-[1.02] text-tinta sm:text-6xl">
                Kadampa Cuernavaca
              </h1>
              <p className="mt-5 font-display text-2xl font-bold text-granate sm:text-3xl">Que todos sean felices</p>
              <p className="mt-4 max-w-prose text-lg leading-relaxed">
                El Centro de Meditación Kadampa Cuernavaca surgió de la visión e intención puras del venerable Gueshe Kelsang Gyatso Rimpoché,
                fundador de la Nueva Tradición Kadampa, para que todos puedan aprender a ser felices y solucionar sus problemas desde el interior.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={waGeneral} className="inline-flex items-center gap-2 rounded-full bg-whats px-6 py-3 font-display text-lg font-bold text-white hover:brightness-110">
                  <IconoWhats /> Inscribirme por WhatsApp
                </a>
                <a href="#clases" className="inline-flex items-center rounded-full border-2 border-tinta px-6 py-3 font-display text-lg font-bold text-tinta hover:bg-tinta hover:text-white">
                  Ver las clases
                </a>
              </div>
              <Siguiente ahora={ahora} />
            </div>
            <figure className="min-w-0">
              <img
                src={foto('centro-jardin.webp')} width={1800} height={1013}
                alt="El jardín del centro en la colonia Vista Hermosa, con la sala de meditación de columnas rojas y los ocho signos auspiciosos sobre la entrada"
                className="aspect-[4/3] w-full rounded-t-[10rem] rounded-b-3xl object-cover object-[60%_50%] sm:rounded-t-[14rem]"
                fetchPriority="high"
              />
              <figcaption className="mt-3 text-sm text-tinta/80">Río Conchos 321, Col. Vista Hermosa, Cuernavaca.</figcaption>
            </figure>
          </div>
        </section>

        {/* Presentación */}
        <section className="bg-white py-14 sm:py-20">
          <div className="contenedor max-w-4xl text-center">
            <p className="font-display text-2xl font-bold leading-snug text-tinta sm:text-3xl">
              Sin paz interior, la paz externa es imposible. El budismo Kadampa busca conseguir la paz mundial ayudando a que más personas desarrollen
              paz mental y sabiduría.
            </p>
            <p className="mt-5 text-lg">Estamos aquí, para ti.</p>
          </div>
        </section>

        <Lamparas ahora={ahora} />

        {/* Cómo ir */}
        <section className="bg-white py-16 sm:py-20" aria-labelledby="t-como">
          <div className="contenedor">
            <h2 id="t-como" className="font-display text-3xl font-extrabold text-tinta sm:text-4xl">¿Cómo ir a una clase?</h2>
            <p className="mt-3 max-w-prose text-lg leading-relaxed">
              Cada clase incluye una relajación, explicación del tema, meditación, y preguntas y respuestas.
            </p>
            <ol className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4">
              {pasos.map((p, i) => (
                <li key={p.t} className="min-w-0 border-t-4 border-oro pt-4">
                  <span className="font-display text-4xl font-extrabold text-kadampa" aria-hidden="true">{i + 1}</span>
                  <h3 className="mt-1 font-display text-xl font-extrabold text-tinta">{p.t}</h3>
                  <p className="mt-2 leading-relaxed">{p.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Clases */}
        <section id="clases" className="bg-cielo py-16 sm:py-24" aria-labelledby="t-clases">
          <div className="contenedor">
            <h2 id="t-clases" className="max-w-3xl font-display text-3xl font-extrabold text-tinta sm:text-4xl">Clases de budismo y meditación para todos</h2>
            <p className="mt-4 max-w-prose text-lg leading-relaxed">
              El objetivo de estas clases es aprender a aplicar los consejos prácticos de Buda a nuestra vida diaria para disfrutar de mayor paz
              interior y felicidad, tanto por nuestro propio beneficio como por el de los demás. Puedes tomarlas cuando lo desees: están diseñadas
              para tomarse una vez por semana y no se requiere inscripción previa.
            </p>

            <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
              {clases.map((c) => (
                <article key={c.t} className="min-w-0">
                  <h3 className="font-display text-2xl font-extrabold text-tinta">{c.t}</h3>
                  <p className="mt-1 font-display font-bold text-granate">{c.cuando}</p>
                  <p className="mt-3 leading-relaxed">{c.d}</p>
                  <a href={wa(`Hola, me gustaría información sobre ${c.t}.`)} className="mt-3 inline-flex items-center gap-1.5 font-display font-bold text-whats underline-offset-4 hover:underline">
                    <IconoWhats className="h-4 w-4" /> Informes por WhatsApp
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-16 grid items-center gap-10 rounded-[2rem] bg-white p-6 sm:p-10 md:grid-cols-[minmax(0,1fr)_minmax(0,16rem)]">
              <div className="min-w-0">
                <h3 className="font-display text-2xl font-extrabold text-tinta">Oraciones budistas (puyas)</h3>
                <p className="mt-2 max-w-prose leading-relaxed">Oraciones cantadas para recibir bendiciones, purificar nuestra mente y acumular buena fortuna. ¡Te esperamos!</p>
                <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {puyas.map((p) => (
                    <div key={p.t} className="min-w-0 border-l-4 border-oro pl-4">
                      <dt className="font-display text-lg font-bold text-tinta">{p.t}</dt>
                      <dd className="mt-0.5">{p.cuando}</dd>
                    </div>
                  ))}
                </dl>
                <a href={wa('Hola, me gustaría información sobre las puyas (oraciones cantadas).')} className="mt-6 inline-flex items-center gap-1.5 font-display font-bold text-whats underline-offset-4 hover:underline">
                  <IconoWhats className="h-4 w-4" /> Informes sobre puyas
                </a>
              </div>
              <img src={foto('je-tsongkhapa.webp')} width={800} height={778} loading="lazy" alt="Ilustración de Je Tsongkhapa sentado sobre un loto" className="mx-auto w-48 md:w-full" />
            </div>

            <div className="mt-16 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
              <div className="min-w-0">
                <h3 className="font-display text-2xl font-extrabold text-tinta">Programa Fundamental y Programa de Formación de Maestros</h3>
                <p className="mt-3 leading-relaxed">
                  Programas de estudio para profundizar de manera sistemática en la práctica y modo de vida budistas. A diferencia de las clases
                  regulares, requieren inscripción previa.
                </p>
                <a href={wa('Hola, me gustaría información sobre el Programa Fundamental.')} className="mt-3 inline-flex items-center gap-1.5 font-display font-bold text-whats underline-offset-4 hover:underline">
                  <IconoWhats className="h-4 w-4" /> Pedir información
                </a>
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-2xl font-extrabold text-tinta">Clases cerca de ti</h3>
                <ul className="mt-4 space-y-5">
                  {cerca.map((c) => (
                    <li key={c.t} className="min-w-0">
                      <p className="font-display text-lg font-bold text-tinta">{c.t}</p>
                      <p className="leading-relaxed">{c.cuando}</p>
                      <p className="text-tinta/80">{c.donde}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-tinta/80">Su calendario también anuncia clases del Programa General en Jiutepec (jueves 10:30) y Yautepec (lunes 15:00).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Maestra residente */}
        <section id="maestra" className="bg-white py-16 sm:py-24" aria-labelledby="t-maestra">
          <div className="contenedor grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
            <img src={foto('nampur-ensenando.webp')} width={690} height={695} loading="lazy" alt="Guen Kelsang Nampur enseñando en la sala de meditación, frente al altar con Buda" className="w-full rounded-[2rem] object-cover" />
            <div className="min-w-0">
              <h2 id="t-maestra" className="font-display text-3xl font-extrabold text-tinta sm:text-4xl">Guen Kelsang Nampur</h2>
              <p className="mt-1 font-display text-lg font-bold text-granate">Maestra residente de Kadampa Cuernavaca</p>
              <p className="mt-4 max-w-prose text-lg leading-relaxed">
                Ha sido maestra residente en Cuernavaca durante 6 años ganando el aprecio de muchos estudiantes gracias a su alegría y buen corazón.
                Enseña las clases del Programa General los martes a las 10:00 y los miércoles a las 19:00.
              </p>
              <p className="mt-6 leading-relaxed">
                También enseñan en el centro Luis Peña (Aprende a meditar), María Fernanda Cano (clases para niños) y Marco Sánchez (oraciones por la paz mundial).
              </p>
            </div>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="bg-tinta py-16 text-white sm:py-24" aria-labelledby="t-nosotros">
          <div className="contenedor">
            <div className="grid items-end gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <div className="min-w-0">
                <h2 id="t-nosotros" className="font-display text-3xl font-extrabold sm:text-4xl">La Nueva Tradición Kadampa</h2>
                <p className="mt-4 max-w-prose text-lg leading-relaxed text-white/90">
                  El Centro de Meditación Kadampa Cuernavaca es parte de la Nueva Tradición Kadampa - Unión Internacional de Budismo Kadampa. El Budismo
                  Kadampa moderno es una presentación de las enseñanzas de Buda que se adaptan perfectamente a los tiempos modernos: conserva el
                  significado y la intención de las enseñanzas originales y se presenta de modo claro y sistemático para que las personas de todas las
                  nacionalidades, edad y género puedan fácilmente entenderlas y practicarlas.
                </p>
                <h3 className="mt-10 font-display text-2xl font-extrabold text-oro">El venerable Gueshe Kelsang Gyatso Rimpoché</h3>
                <p className="mt-3 max-w-prose leading-relaxed text-white/90">
                  El fundador del Budismo Kadampa moderno es el venerable Gueshe Kelsang Gyatso, un maestro de meditación mundialmente reconocido que
                  sostiene la esencia de las enseñanzas de Buda en su corazón. Transmite esta sabiduría profunda y compasión a la gente del mundo moderno en
                  modos muy prácticos a través de los métodos altamente accesibles del Budismo Kadampa moderno, que él mismo presentó.
                </p>
              </div>
              <img src={foto('gueshe-la.webp')} width={603} height={900} loading="lazy" alt="El venerable Gueshe Kelsang Gyatso Rimpoché, sonriendo" className="mx-auto w-56 sm:w-72" />
            </div>

            <div className="mt-14 grid gap-8 border-t border-white/20 pt-10 md:grid-cols-3">
              {linaje.map((l) => (
                <div key={l.n} className="min-w-0">
                  <p className="font-display text-xl font-extrabold">{l.n}</p>
                  <p className="font-display font-bold text-oro">{l.r}</p>
                  <p className="mt-2 leading-relaxed text-white/85">{l.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="min-w-0">
                <h3 className="font-display text-2xl font-extrabold">Lo que Gueshe‑la ha hecho posible</h3>
                <ul className="mt-4 space-y-3 leading-relaxed text-white/90">
                  {logros.map((t) => (
                    <li key={t} className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-oro" aria-hidden="true" />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-2xl font-extrabold">El Proyecto Internacional de Templos</h3>
                <p className="mt-4 leading-relaxed text-white/90">
                  Fue creado por el venerable Gueshe Kelsang Gyatso con la meta de construir un templo budista kadampa en cada una de las principales
                  ciudades del mundo. Estos templos están dedicados a la paz mundial y todos pueden visitarlos. Todas las ganancias generadas a través de
                  sus actividades se dedican al beneficio público.
                </p>
                <a href="https://kadampa.org/donations/es/" className="mt-5 inline-flex rounded-full border-2 border-oro px-5 py-2.5 font-display font-bold text-oro hover:bg-oro hover:text-tinta">
                  Haz una donación al Proyecto Internacional de Templos
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Eventos */}
        <section id="eventos" className="bg-white py-16 sm:py-24" aria-labelledby="t-eventos">
          <div className="contenedor grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div className="min-w-0">
              <h2 id="t-eventos" className="font-display text-3xl font-extrabold text-tinta sm:text-4xl">Eventos especiales</h2>
              <p className="mt-3 max-w-prose text-lg leading-relaxed">
                En estos cursos, conferencias y retiros especiales podemos profundizar nuestro conocimiento sobre temas particulares. También nos permiten
                conocer más acerca de la práctica budista.
              </p>
              <ul className="mt-8 divide-y divide-tinta/10 border-y border-tinta/10">
                {futuros.map(({ e, otras }) => {
                  const [y, m, d] = e.fecha.split('-').map(Number);
                  const x = crearDia(y, m, d);
                  const hastaD = e.hasta ? +e.hasta.slice(8, 10) : null;
                  return (
                    <li key={e.fecha + e.nombre} className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-4 py-5">
                      <div className="text-center">
                        <span className="block font-display text-3xl font-extrabold leading-none text-kadampa">{x.d}{hastaD ? `–${hastaD}` : ''}</span>
                        <span className="block text-sm font-semibold">{MESES[x.m - 1].slice(0, 3)} {x.y}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-display text-lg font-bold text-tinta">{e.nombre}</p>
                        <p className="mt-0.5 leading-relaxed">
                          {e.hora ? `${DIAS[x.dow]}, de ${e.hora} a ${e.fin} h. ` : ''}{lugares[e.lugar].corto}.{e.con ? ` Con ${e.con}.` : ''}{e.aportacion ? ` Aportación: ${e.aportacion}.` : ''}
                        </p>
                        <p className="mt-1 text-tinta/80">{e.resumen}</p>
                        {otras.length > 0 && <p className="mt-1 font-semibold">Siguientes fechas: {otras.map(fechaCorta).join(', ').replace(/, ([^,]*)$/, ' y $1')}.</p>}
                        <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                          {e.enlace && <a href={e.enlace} className="font-display font-bold text-kadampa underline-offset-4 hover:underline">Reservar en línea</a>}
                          <a href={wa(`Hola, me gustaría información sobre «${e.nombre}» (${x.d} de ${MESES[x.m - 1]}).`)} className="inline-flex items-center gap-1.5 font-display font-bold text-whats underline-offset-4 hover:underline">
                            <IconoWhats className="h-4 w-4" /> Preguntar
                          </a>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <aside className="min-w-0 space-y-8">
              <div className="rounded-[2rem] bg-cielo p-6 sm:p-8">
                <h3 className="font-display text-xl font-extrabold text-tinta">Antes de un evento</h3>
                <ul className="mt-3 space-y-2 leading-relaxed">
                  <li>Presenta tu comprobante o recibo de inscripción, impreso o electrónico.</li>
                  <li>Procura llegar 10 minutos antes de comenzar la sesión.</li>
                  <li>Los niños de 7 a 11 años pagan el 50% del evento; los menores de 6 años no pagan boleto, siempre al cuidado de un adulto.</li>
                </ul>
                <a href="https://www.kadampacuernavaca.org/terminosycondiciones" className="mt-4 inline-block font-display font-bold text-kadampa underline underline-offset-4">Términos y condiciones</a>
              </div>
              <div className="rounded-[2rem] border-2 border-oro p-6 sm:p-8">
                <h3 className="font-display text-xl font-extrabold text-tinta">eBook gratuito: Cómo transformar tu vida</h3>
                <p className="mt-2 leading-relaxed">Un libro del venerable Gueshe Kelsang Gyatso, gratis en línea.</p>
                <a href="https://comotransformartuvida.com/" className="mt-4 inline-block font-display font-bold text-kadampa underline underline-offset-4">Descárgalo aquí</a>
              </div>
            </aside>
          </div>
        </section>

        {/* Visítanos */}
        <section id="visitanos" className="bg-cielo py-16 sm:py-24" aria-labelledby="t-visitanos">
          <div className="contenedor grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <div className="min-w-0">
              <h2 id="t-visitanos" className="font-display text-3xl font-extrabold text-tinta sm:text-4xl">Visítanos</h2>
              <address className="mt-4 not-italic text-lg leading-relaxed">
                <strong className="font-display">Centro de Meditación Kadampa Cuernavaca</strong><br />
                Río Conchos 321<br />Col. Vista Hermosa, 62290<br />Cuernavaca, Mor.
              </address>
              <dl className="mt-6 space-y-3">
                <div><dt className="text-sm font-semibold text-tinta/75">Llámanos o escríbenos por WhatsApp</dt><dd><a href={`tel:${negocio.telefonoTel}`} className="font-display text-xl font-bold text-tinta">{negocio.telefono}</a></dd></div>
                <div><dt className="text-sm font-semibold text-tinta/75">Correo</dt><dd><a href={`mailto:${negocio.correo}`} className="break-all font-display font-bold text-kadampa">{negocio.correo}</a></dd></div>
                <div><dt className="text-sm font-semibold text-tinta/75">Síguenos</dt><dd className="flex gap-4 font-display font-bold"><a href={negocio.instagram} className="text-kadampa">Instagram</a><a href={negocio.facebook} className="text-kadampa">Facebook</a></dd></div>
              </dl>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={negocio.mapa} className="inline-flex items-center gap-2 rounded-full bg-tinta px-6 py-3 font-display font-bold text-white hover:bg-kadampa"><IconoMapa /> ¡Ubícanos!</a>
                <a href={waGeneral} className="inline-flex items-center gap-2 rounded-full bg-whats px-6 py-3 font-display font-bold text-white hover:brightness-110"><IconoWhats /> WhatsApp</a>
              </div>
            </div>
            <a href={negocio.mapa} className="group block min-w-0" aria-label="Abrir el Centro de Meditación Kadampa Cuernavaca en Google Maps">
              <img src={foto('sangha-jardin.webp')} width={1600} height={1068} loading="lazy" alt="La sangha reunida en el jardín del centro, frente a la sala de meditación" className="w-full rounded-[2rem] object-cover transition-opacity group-hover:opacity-90" />
              <span className="mt-3 block text-sm text-tinta/80">La sangha en el jardín del centro. Toca la foto para abrir el mapa.</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-tinta pb-28 pt-12 text-white sm:pb-12">
        <div className="contenedor flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <img src={foto('logo-blanco.webp')} width={500} height={200} loading="lazy" alt="Centro de Meditación Kadampa Cuernavaca" className="h-16 w-auto" />
          <div className="text-white/85">
            <p>{negocio.direccion}</p>
            <p className="mt-1">
              <a href={`tel:${negocio.telefonoTel}`} className="underline-offset-4 hover:underline">{negocio.telefono}</a>
              {'  |  '}
              <a href={`mailto:${negocio.correoInfo}`} className="break-all underline-offset-4 hover:underline">{negocio.correoInfo}</a>
            </p>
            <p className="mt-3 text-sm text-white/70">Copyright © Centro de meditación kadampa Cuernavaca. Parte de la Nueva Tradición Kadampa - Unión Internacional de Budismo Kadampa.</p>
          </div>
        </div>
      </footer>

      {/* Barra fija en el celular */}
      <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-tinta/15 bg-white text-tinta sm:hidden">
        <a href={waGeneral} className="flex flex-col items-center gap-0.5 bg-whats py-2.5 font-display text-sm font-bold text-white"><IconoWhats /> WhatsApp</a>
        <a href={`tel:${negocio.telefonoTel}`} className="flex flex-col items-center gap-0.5 py-2.5 font-display text-sm font-bold"><IconoTel /> Llamar</a>
        <a href={negocio.mapa} className="flex flex-col items-center gap-0.5 py-2.5 font-display text-sm font-bold"><IconoMapa /> Cómo llegar</a>
      </nav>
    </>
  );
}
