import { useEffect, useMemo, useState } from 'react';
import { fueraDeLaMesa, menus, platosDeLaMesa, type Menu, type PlatoMesa, type Renglon } from './data/carta';
import {
  cierre, citas, cocina, cumple, evento, fotos, horarios, lugar, momentos, momentosIntro, negocio, paraLlevar, pedirCumple,
  pedirEvento, pedirParaLlevar, reconocimientos, reservarGeneral, saber, semana, wa, type Foto,
} from './data/content';

const externo = { target: '_blank', rel: 'noopener' } as const;
const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
  ),
  tel: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
  mesa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="4" y="5" width="16" height="15" /><path d="M4 9h16M9 3v4M15 3v4" /></svg>
  ),
};

function Img({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

// ---------- Hora de Cuernavaca ----------

function ahoraCuernavaca() {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', { timeZone: 'America/Mexico_City', weekday: 'short', hour: 'numeric', hourCycle: 'h23' })
      .formatToParts(new Date()).map((x) => [x.type, x.value]),
  );
  return { dia: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].indexOf(p.weekday), hora: Number(p.hour) };
}

/** La pestaña de la carta que abre primero: la del momento del día en Cuernavaca (solo el orden, no dice qué se sirve). */
function menuDeAhora(): Menu['id'] {
  const { dia, hora } = ahoraCuernavaca();
  if (dia === 6) return hora < 13 ? 'brunch' : 'comida';
  const finDesayuno = dia === 5 ? 13 : 12;
  return hora < finDesayuno ? 'desayuno' : 'comida';
}

function elegirMenu(id: Menu['id']) {
  window.dispatchEvent(new CustomEvent('elegir-menu', { detail: id }));
}

// ---------- Encabezado y portada ----------

const nav = [
  { href: '#cocina', label: 'La cocina' },
  { href: '#mesa', label: '¿México o Mediterráneo?' },
  { href: '#menu', label: 'Menú' },
  { href: '#horarios', label: 'Horarios' },
  { href: '#visitanos', label: 'Visítanos' },
];

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-carbon/10 bg-cal/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0" aria-label="HOUSE Restaurante, volver al inicio">
          <img src={negocio.logo.src} alt="" width={negocio.logo.w} height={negocio.logo.h} className="size-12" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-medium text-carbon hover:text-ambar">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={reservarGeneral} {...externo} className="btn hidden sm:inline-flex">{Icono.wa} Reservar mesa</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir el menú"
            className="grid size-11 place-items-center border border-carbon/30 text-carbon lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-carbon/10 lg:hidden" aria-label="Menú del celular">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="titulo border-b border-carbon/10 py-3 text-2xl text-carbon">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro bg-noche text-cal/85">
      <div className="contenedor grid items-center gap-10 py-14 md:grid-cols-12 md:py-20">
        <div className="min-w-0 md:col-span-6">
          <p className="text-lg text-vela">{negocio.titular}</p>
          <h1 className="titulo mt-3 text-[clamp(3.4rem,9vw,6.4rem)] font-semibold leading-[0.95] text-cal">HOUSE Restaurante</h1>
          <p className="titulo mt-5 text-[clamp(1.5rem,2.8vw,2.1rem)] leading-tight text-cal">{negocio.lema}</p>
          <p className="mt-4 max-w-lg text-lg">{negocio.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={reservarGeneral} {...externo} className="btn-vela">{Icono.wa} Reservar por WhatsApp</a>
            <a href={negocio.opentable} {...externo} className="btn-linea-clara">{Icono.mesa} Reservar en OpenTable</a>
          </div>
          <p className="mt-5"><a href="#menu" className="font-medium text-cal underline decoration-vela decoration-2 underline-offset-4">Ver el menú y los precios</a></p>
        </div>
        <div className="min-w-0 md:col-span-6">
          <div className="aspect-[1086/724] overflow-hidden"><Img foto={fotos.comedor} eager /></div>
          <p className="mt-3 text-[0.95rem] text-cal/70">{negocio.calle}, frente al Palacio de Cortés, dentro de Las Casas B+B.</p>
        </div>
      </div>
      <div className="border-t border-cal/15">
        <ul className="contenedor flex flex-wrap gap-x-8 gap-y-2 py-5 text-[0.95rem]" aria-label="Reconocimientos">
          {reconocimientos.map((r) => <li key={r}>{r}</li>)}
        </ul>
      </div>
    </section>
  );
}

// ---------- La cocina y los momentos del día ----------

function Cocina() {
  return (
    <section id="cocina" className="py-20 md:py-28">
      <div className="contenedor grid gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-7">
          <h2 className="titulo text-[clamp(2.2rem,4.6vw,3.6rem)]">{cocina.titulo}</h2>
          <div className="mt-8 space-y-5 text-lg">
            {cocina.parrafos.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </div>
          <p className="titulo mt-8 text-2xl text-carbon">{cocina.cierre}</p>
        </div>
        <figure className="min-w-0 lg:col-span-5 lg:pt-4">
          <div className="aspect-[3/2] overflow-hidden sm:aspect-[4/5]"><Img foto={fotos.mesero} className="object-[50%_70%]" /></div>
          <figcaption className="mt-3 text-[0.95rem]">Chef ejecutiva: {negocio.chef}.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Momentos() {
  return (
    <section id="momentos" className="bg-lino py-20 md:py-24">
      <div className="contenedor">
        <h2 className="titulo max-w-3xl text-[clamp(2.2rem,4.6vw,3.6rem)]">Desayuno, brunch, comida y cena.</h2>
        <p className="mt-4 max-w-2xl text-lg">{momentosIntro} Encuentra tu momento en HOUSE.</p>
        <ol className="mt-12 border-t border-carbon/20">
          {momentos.map((m) => (
            <li key={m.nombre} className="grid gap-4 border-b border-carbon/20 py-6 md:grid-cols-12 md:gap-8 md:py-8">
              <p className="titulo hidden text-[clamp(3rem,7vw,4.6rem)] leading-none text-carbon md:col-span-3 md:block" aria-hidden="true">{m.hora}</p>
              <div className="min-w-0 md:col-span-9">
                <h3 className="titulo text-3xl">{m.nombre}</h3>
                <p className="mt-1 font-medium text-ambar">{m.cuando}</p>
                <p className="mt-3 max-w-3xl">{m.texto}</p>
                <a href="#menu" onClick={() => elegirMenu(m.menu)} className="enlace mt-3 inline-block">Ver este menú</a>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {semana.map((s) => (
            <div key={s.dia} className="min-w-0">
              <p className="titulo text-xl text-carbon">{s.dia}</p>
              <p className="mt-1 text-[0.98rem]">{s.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Elemento memorable: "¿Más México o más Mediterráneo?" ----------

const paradas = [
  { nombre: 'Puro México', texto: 'Solo nombra ingredientes de este lado de la mesa.' },
  { nombre: 'Más México', texto: 'Mucho México y un acento mediterráneo.' },
  { nombre: 'Mitad y mitad', texto: 'Donde de verdad se encuentran las dos cocinas.' },
  { nombre: 'Más Mediterráneo', texto: 'Mucho Mediterráneo y un acento mexicano.' },
  { nombre: 'Puro Mediterráneo', texto: 'Solo nombra ingredientes de este lado de la mesa.' },
];
const paradaDe = (lado: number) => (lado <= -0.6 ? 0 : lado < -0.2 ? 1 : lado <= 0.2 ? 2 : lado < 0.6 ? 3 : 4);

// Color del centro del plato: del rojo de chile al verde de olivo según el lado.
function mezcla(lado: number) {
  const a = [163, 48, 30], b = [77, 90, 38], t = (lado + 1) / 2;
  return `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * t)).join(' ')})`;
}

type Colocado = PlatoMesa & { x: number; y: number };
function colocar(platos: PlatoMesa[]): Colocado[] {
  const ancho = 820 / 5, inicio = 90;
  const out: Colocado[] = [];
  for (let p = 0; p < 5; p++) {
    const grupo = platos.filter((x) => paradaDe(x.lado) === p);
    const filas = Math.max(1, Math.ceil(grupo.length / 4));
    const cols = Math.ceil(grupo.length / filas);
    grupo.forEach((x, i) => {
      const c = i % cols, f = Math.floor(i / cols);
      const paso = ancho / cols;
      out.push({ ...x, x: inicio + p * ancho + paso * (c + 0.5), y: 135 + (f - (filas - 1) / 2) * 40 + (c % 2 ? 8 : -8) });
    });
  }
  return out;
}

function MesaDibujo({ colocados, parada, elegido, onElegir }: { colocados: Colocado[]; parada: number; elegido: string; onElegir: (p: Colocado) => void }) {
  return (
    <svg viewBox="0 0 1000 270" className="block w-full min-w-[560px]" aria-hidden="true">
      {/* Mantel de lino sobre la mesa, con el cuadro del logo como borde. */}
      <rect x="40" y="40" width="920" height="190" fill="#fbf9f4" stroke="#1d1b18" strokeWidth="3" />
      <rect x={90 + parada * 164} y="48" width="164" height="174" fill="#1d1b18" opacity="0.06" />
      {/* Extremo México: un chile. Extremo Mediterráneo: una rama de olivo. */}
      <g transform="translate(60 135)">
        <path d="M0-26c10 4 14 16 12 30-2 12-8 20-14 24 2-10 0-20-4-28-3-7-3-16 6-26Z" fill="#a3301e" />
        <path d="M0-26c-2-6 2-10 6-10" fill="none" stroke="#4d5a26" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="translate(940 135)" fill="#4d5a26">
        <path d="M0-30v60" stroke="#4d5a26" strokeWidth="2.5" />
        <ellipse cx="-8" cy="-18" rx="4" ry="10" transform="rotate(-35 -8 -18)" />
        <ellipse cx="8" cy="-6" rx="4" ry="10" transform="rotate(35 8 -6)" />
        <ellipse cx="-8" cy="8" rx="4" ry="10" transform="rotate(-35 -8 8)" />
        <circle cx="7" cy="20" r="5" fill="#2f3517" />
      </g>
      {colocados.map((p) => {
        const encendido = paradaDe(p.lado) === parada;
        return (
          <g key={p.nombre} transform={`translate(${p.x} ${p.y})`} onClick={() => onElegir(p)} style={{ cursor: 'pointer' }}>
            <g className="plato-mesa" data-encendido={encendido} data-elegido={p.nombre === elegido}>
              <circle r="17" cy="2" fill="#1d1b18" opacity="0.12" />
              <circle r="17" fill="#ffffff" stroke={p.nombre === elegido ? '#1d1b18' : '#d9d0bf'} strokeWidth={p.nombre === elegido ? 3 : 1.5} />
              <circle r="9" fill={mezcla(p.lado)} />
            </g>
          </g>
        );
      })}
      <text x="60" y="258" fontFamily="Oswald, sans-serif" fontSize="20" fill="#a3301e">México</text>
      <text x="940" y="258" textAnchor="end" fontFamily="Oswald, sans-serif" fontSize="20" fill="#4d5a26">Mediterráneo</text>
    </svg>
  );
}

function Mesa() {
  const platos = useMemo(() => platosDeLaMesa(), []);
  const colocados = useMemo(() => colocar(platos), [platos]);
  const fuera = useMemo(() => fueraDeLaMesa(), []);
  const [parada, setParada] = useState(2);
  const enParada = colocados.filter((p) => paradaDe(p.lado) === parada);
  const [elegido, setElegido] = useState('Mezze mediterráneo');
  const actual = enParada.find((p) => p.nombre === elegido) ?? enParada[0];

  const cambiar = (n: number) => {
    setParada(n);
    const primero = colocados.find((p) => paradaDe(p.lado) === n);
    if (primero) setElegido(primero.nombre);
  };
  const elegirPlato = (p: Colocado) => { setParada(paradaDe(p.lado)); setElegido(p.nombre); };

  const mensaje = actual
    ? wa(`Hola, HOUSE. Quiero reservar una mesa para probar: ${actual.nombre}. Somos __ personas, para el día __ a las __.`)
    : reservarGeneral;

  return (
    <section id="mesa" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="titulo max-w-3xl text-[clamp(2.2rem,4.6vw,3.6rem)]">¿Más México o más Mediterráneo?</h2>
        <p className="mt-4 max-w-2xl text-lg">
          Estos son los {platos.length} platillos de la carta de comida y cena, puestos en una mesa según los ingredientes que nombra la carta:
          los de México de un lado, los del Mediterráneo del otro. Mueve el control y elige tu lado de la mesa.
        </p>

        <p className="mt-8 text-[0.95rem] md:hidden">La mesa es larga: deslízala de lado para verla completa.</p>
        <div className="mt-3 overflow-x-auto pb-2 md:mt-10">
          <MesaDibujo colocados={colocados} parada={parada} elegido={actual?.nombre ?? ''} onElegir={elegirPlato} />
        </div>

        <div className="mx-auto mt-4 max-w-3xl">
          <label htmlFor="lado" className="sr-only">¿Más México o más Mediterráneo?</label>
          <input id="lado" type="range" min={0} max={4} step={1} value={parada} onChange={(e) => cambiar(Number(e.target.value))}
            aria-valuetext={paradas[parada].nombre} className="deslizador" />
          <div className="mt-1 grid grid-cols-5 text-center text-[0.8rem] leading-tight sm:text-[0.9rem]" aria-hidden="true">
            {paradas.map((p, i) => (
              <button key={p.nombre} type="button" tabIndex={-1} onClick={() => cambiar(i)}
                className={`px-1 ${i === parada ? 'font-medium text-carbon' : 'text-texto'} ${i === 0 ? 'text-chile' : ''} ${i === 4 ? 'text-olivo' : ''}`}>{p.nombre}</button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12" aria-live="polite">
          <div className="min-w-0 lg:col-span-5">
            <h3 className="titulo text-2xl">{paradas[parada].nombre}</h3>
            <p className="mt-1">{paradas[parada].texto} {enParada.length} {enParada.length === 1 ? 'platillo' : 'platillos'}.</p>
            <ul className="mt-5 border-t border-carbon/15">
              {enParada.map((p) => (
                <li key={p.nombre}>
                  <button type="button" aria-pressed={p.nombre === actual?.nombre} onClick={() => setElegido(p.nombre)}
                    className={`flex w-full items-baseline gap-3 border-b border-carbon/15 px-2 py-3 text-left hover:bg-lino ${p.nombre === actual?.nombre ? 'bg-lino' : ''}`}>
                    <span className="size-3 shrink-0 translate-y-[-1px]" style={{ background: mezcla(p.lado) }} aria-hidden="true" />
                    <span className="min-w-0 flex-1 font-medium text-carbon">{p.nombre}</span>
                    <span className="precio shrink-0 text-ambar">{p.precio ? pesos(p.precio) : ''}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {actual && (
            <article className="cuadro min-w-0 bg-white p-6 text-carbon sm:p-8 lg:col-span-7">
              <p className="text-[0.95rem] text-texto">{actual.seccion}{actual.etiqueta ? `, ${actual.etiqueta.toLowerCase()}` : ''}</p>
              <div className="mt-1 flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="titulo text-3xl">{actual.nombre}</h3>
                {actual.precio && <p className="precio titulo text-2xl text-ambar">{pesos(actual.precio)}</p>}
              </div>
              <p className="mt-3 text-texto">{actual.desc}</p>
              <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <dt className="titulo text-lg text-chile">De México</dt>
                  <dd className="mt-1">{actual.mx.length ? actual.mx.join(', ') : 'Nada de este lado.'}</dd>
                </div>
                <div>
                  <dt className="titulo text-lg text-olivo">Del Mediterráneo</dt>
                  <dd className="mt-1">{actual.med.length ? actual.med.join(', ') : 'Nada de este lado.'}</dd>
                </div>
              </dl>
              <p className="mt-6 text-[0.95rem] text-texto">En la carta de comida y cena: todos los días desde las 12:00 p.m.</p>
              <a href={mensaje} {...externo} className="btn mt-4">{Icono.wa} Reservar mesa para probarlo</a>
            </article>
          )}
        </div>
        <p className="mt-8 max-w-3xl text-[0.95rem]">
          Qué ingrediente va de cada lado es nuestra lectura de la carta, no una regla de la cocina. Quedan fuera de la mesa, porque su
          descripción no nombra ingredientes de ninguno de los dos lados: {fuera.join(', ')}.
        </p>
      </div>
    </section>
  );
}

// ---------- La carta completa ----------

function Linea({ r }: { r: Renglon }) {
  return (
    <li className="break-inside-avoid py-2.5">
      <div className="flex items-baseline gap-2">
        <span className="font-medium text-carbon">{r.nombre}</span>
        <span className="puntos" aria-hidden="true" />
        <span className="precio shrink-0 font-medium text-ambar">{r.precio !== undefined ? pesos(r.precio) : r.precioTexto}</span>
      </div>
      {r.etiqueta && <p className="text-[0.9rem] italic text-olivo">{r.etiqueta}</p>}
      {r.desc && <p className="text-[0.97rem]">{r.desc}</p>}
    </li>
  );
}

function MenuCompleto() {
  const [activo, setActivo] = useState<Menu['id']>('desayuno');
  useEffect(() => {
    setActivo(menuDeAhora());
    const oir = (e: Event) => setActivo((e as CustomEvent<Menu['id']>).detail);
    window.addEventListener('elegir-menu', oir);
    return () => window.removeEventListener('elegir-menu', oir);
  }, []);
  const menu = menus.find((m) => m.id === activo)!;
  const [completo, setCompleto] = useState(false);
  useEffect(() => setCompleto(false), [activo]);
  const [cuantas, setCuantas] = useState(3);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const ver = () => setCuantas(mq.matches ? 3 : 2);
    ver();
    mq.addEventListener('change', ver);
    return () => mq.removeEventListener('change', ver);
  }, []);
  const visibles = completo ? menu.secciones : menu.secciones.slice(0, cuantas);
  const faltan = menu.secciones.length - visibles.length;
  return (
    <section id="menu" className="bg-lino py-20 md:py-24">
      <div className="contenedor">
        <h2 className="titulo text-[clamp(2.2rem,4.6vw,3.6rem)]">La carta</h2>
        <p className="mt-3 max-w-2xl text-lg">Completa y con precios, sin abrir un PDF. Son cuatro: desayuno, brunch del domingo, comida y cena, y postres.</p>
        <div role="tablist" aria-label="Cartas" className="mt-8 flex flex-wrap gap-2">
          {menus.map((m) => (
            <button key={m.id} id={`tab-${m.id}`} role="tab" type="button" aria-selected={m.id === activo} aria-controls={`panel-${m.id}`}
              onClick={() => setActivo(m.id)}
              className={`min-h-[48px] border-2 px-5 font-medium ${m.id === activo ? 'border-carbon bg-carbon text-cal' : 'border-carbon/40 text-carbon hover:border-carbon'}`}>
              {m.nombre}
            </button>
          ))}
        </div>
        <div id={`panel-${menu.id}`} role="tabpanel" aria-labelledby={`tab-${menu.id}`} className="mt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b-2 border-carbon pb-4">
            <p className="titulo text-2xl text-carbon">{menu.intro}</p>
            <p className="font-medium text-ambar">{menu.horario}</p>
          </div>
          <div className="mt-8 gap-12 md:columns-2">
            {visibles.map((s) => (
              <div key={s.titulo} className="mb-10 break-inside-avoid-column">
                <h3 className="titulo text-2xl">{s.titulo}</h3>
                {s.nota && <p className="mt-1 text-[0.95rem] italic">{s.nota}</p>}
                <ul className="mt-2">{s.renglones.map((r) => <Linea key={r.nombre} r={r} />)}</ul>
              </div>
            ))}
          </div>
          {faltan > 0 && (
            <div className="mb-10">
              <button type="button" onClick={() => setCompleto(true)} aria-expanded="false" className="btn-linea">
                Ver toda la carta de {menu.nombre.toLowerCase()} ({faltan} secciones más)
              </button>
              <p className="mt-3 text-[0.95rem]">Falta: {menu.secciones.slice(cuantas).map((s) => s.titulo).join(', ')}.</p>
            </div>
          )}
          <div className="mt-2 space-y-1 border-t border-carbon/20 pt-5 text-[0.95rem]">
            {menu.notas.map((n) => <p key={n}>{n}</p>)}
            <p>Precios en pesos mexicanos. {menu.version}. <a href={menu.pdf} {...externo} className="enlace">Ver la carta en PDF</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Horarios y lo que hay que saber ----------

function Horarios() {
  return (
    <section id="horarios" className="py-20 md:py-24">
      <div className="contenedor grid gap-14 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <h2 className="titulo text-[clamp(2.2rem,4.6vw,3.6rem)]">Abrimos todos los días.</h2>
          <p className="mt-3 text-lg">Elige tu hora y ven con hambre.</p>
          <table className="mt-8 w-full text-left">
            <caption className="sr-only">Horario de HOUSE y última reservación</caption>
            <thead>
              <tr className="border-b-2 border-carbon text-[0.95rem]">
                <th scope="col" className="py-2 pr-3 font-medium">Día</th>
                <th scope="col" className="py-2 pr-3 font-medium">Horario</th>
                <th scope="col" className="py-2 font-medium">Última reservación</th>
              </tr>
            </thead>
            <tbody>
              {horarios.map((h) => (
                <tr key={h.dias} className="border-b border-carbon/15 align-top">
                  <th scope="row" className="py-3 pr-3 font-medium text-carbon">{h.dias}</th>
                  <td className="py-3 pr-3">{h.abre} a {h.cierra}</td>
                  <td className="py-3">{h.ultima}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-[0.97rem]">Brunch dominical: domingos de 9:00 a.m. a 1:00 p.m. Jardín y terraza pet-friendly, valet parking, frente al Palacio de Cortés.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={reservarGeneral} {...externo} className="btn">{Icono.wa} Reservar mesa</a>
            <a href={`tel:${negocio.tel}`} className="btn-linea">{Icono.tel} {negocio.telefono}</a>
          </div>
        </div>
        <div className="min-w-0 lg:col-span-7">
          <h3 className="titulo text-2xl">Lo que hay que saber</h3>
          <div className="mt-4 border-t border-carbon/20">
            {saber.map((s, i) => (
              <details key={s.t} open={i < 2} className="group border-b border-carbon/20">
                <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between gap-4 py-3 [&::-webkit-details-marker]:hidden">
                  <span className="titulo text-xl text-carbon">{s.t}</span>
                  <span aria-hidden="true" className="titulo text-2xl text-ambar group-open:hidden">+</span>
                  <span aria-hidden="true" className="titulo hidden text-2xl text-ambar group-open:inline">−</span>
                </summary>
                <p className="pb-4 text-[0.98rem]">{s.d}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Para llevar y celebraciones ----------

function LlevarYCelebrar() {
  return (
    <section id="llevar" className="oscuro bg-noche py-20 text-cal/85 md:py-24">
      <div className="contenedor grid gap-14 lg:grid-cols-2">
        <div className="min-w-0">
          <h2 className="titulo text-[clamp(2rem,4vw,3rem)] text-cal">{paraLlevar.titulo}</h2>
          <p className="mt-3 text-lg">{paraLlevar.texto}</p>
          <dl className="mt-6 space-y-3">
            {paraLlevar.formas.map((f) => (
              <div key={f.t} className="flex flex-wrap gap-x-2"><dt className="font-medium text-vela">{f.t}.</dt><dd>{f.d}</dd></div>
            ))}
          </dl>
          <p className="mt-6 font-medium text-cal">Horario de pedidos</p>
          <ul className="mt-1">{paraLlevar.horario.map((h) => <li key={h.dias}>{h.dias}: {h.h}</li>)}</ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={pedirParaLlevar} {...externo} className="btn-vela">{Icono.wa} Ordenar por WhatsApp</a>
            <a href={negocio.rappi} {...externo} className="btn-linea-clara">Pedir en Rappi</a>
          </div>
          <ul className="mt-5 space-y-1 text-[0.95rem]">
            {paraLlevar.pdfs.map((p) => <li key={p.url}><a href={p.url} {...externo} className="text-cal underline decoration-vela underline-offset-4">{p.t}</a></li>)}
          </ul>
        </div>
        <div className="min-w-0 space-y-12">
          <div>
            <h2 className="titulo text-[clamp(2rem,4vw,3rem)] text-cal">{cumple.titulo}</h2>
            <p className="mt-1 text-lg text-vela">{cumple.subtitulo}, {pesos(cumple.precio)}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 marker:text-vela">{cumple.incluye.map((i) => <li key={i}>{i}</li>)}</ul>
            <p className="mt-4 text-[0.97rem]">{cumple.notas}</p>
            <a href={pedirCumple} {...externo} className="btn-linea-clara mt-5">{Icono.wa} Ordenar el Birthday Breakfast</a>
          </div>
          <div>
            <h3 className="titulo text-2xl text-cal">Celebraciones y cenas románticas</h3>
            <p className="mt-2">{evento}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              <a href={pedirEvento} {...externo} className="font-medium text-cal underline decoration-vela decoration-2 underline-offset-4">Organiza tu celebración</a>
              <a href={negocio.romanticas} {...externo} className="font-medium text-cal underline decoration-vela decoration-2 underline-offset-4">Ver cenas románticas</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Visítanos y pie ----------

function Visitanos() {
  return (
    <section id="visitanos" className="py-20 md:py-24">
      <div className="contenedor grid items-center gap-12 lg:grid-cols-12">
        <a href={negocio.mapa} {...externo} className="block min-w-0 lg:col-span-7" aria-label="Abrir la ubicación de HOUSE en Google Maps">
          <div className="aspect-[1400/935] overflow-hidden"><Img foto={fotos.jardinAlberca} /></div>
        </a>
        <div className="min-w-0 lg:col-span-5">
          <h2 className="titulo text-[clamp(2.2rem,4.6vw,3.4rem)]">{lugar.titulo}</h2>
          <p className="mt-4 text-lg">{lugar.texto}</p>
          <address className="mt-5 not-italic">
            <p className="font-medium text-carbon">{negocio.calle}</p>
            <p>{negocio.colonia}, {negocio.ciudad}</p>
          </address>
          <p className="mt-4 text-[0.97rem]">{lugar.hotel} <a href={negocio.hotel} {...externo} className="enlace">Conoce Las Casas B+B</a></p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={negocio.mapa} {...externo} className="btn">{Icono.mapa} Cómo llegar</a>
            <a href={reservarGeneral} {...externo} className="btn-linea">{Icono.wa} WhatsApp</a>
            <a href={`tel:${negocio.tel}`} className="btn-linea">{Icono.tel} Llamar</a>
          </div>
        </div>
      </div>
      <div className="contenedor mt-20 grid gap-10 md:grid-cols-2">
        {citas.map((c) => (
          <figure key={c.quien} className="min-w-0 border-l-4 border-vela pl-6">
            <blockquote className="titulo text-2xl text-carbon">“{c.texto}”</blockquote>
            <figcaption className="mt-2 text-[0.95rem]">{c.quien}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section className="bg-lino">
      <div className="contenedor grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
        <div className="min-w-0">
          <h2 className="titulo text-[clamp(2rem,4vw,3rem)]">{cierre.titulo}</h2>
          <p className="mt-3 text-lg">{cierre.texto}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={reservarGeneral} {...externo} className="btn">{Icono.wa} Reservar por WhatsApp</a>
            <a href={negocio.opentable} {...externo} className="btn-linea">{Icono.mesa} OpenTable</a>
          </div>
        </div>
        <div className="aspect-[1200/801] min-w-0 overflow-hidden"><Img foto={fotos.jardin} /></div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro bg-noche pb-28 pt-14 text-cal/80 md:pb-14">
      <div className="contenedor grid gap-10 md:grid-cols-4">
        <div>
          <img src={negocio.logoBlanco.src} alt={negocio.logoBlanco.alt} width={negocio.logoBlanco.w} height={negocio.logoBlanco.h} className="size-24" loading="lazy" />
          <p className="mt-4 text-[0.95rem]">{negocio.lema}</p>
        </div>
        <div>
          <p className="font-medium text-cal">Dirección</p>
          <p className="mt-1 text-[0.95rem]">{negocio.calle}, {negocio.colonia}, {negocio.ciudad} Dentro de Las Casas B+B.</p>
          <a href={negocio.mapa} {...externo} className="mt-2 inline-block text-[0.95rem] text-cal underline decoration-vela underline-offset-4">Cómo llegar en Google Maps</a>
        </div>
        <div>
          <p className="font-medium text-cal">Reservaciones</p>
          <ul className="mt-1 space-y-1 text-[0.95rem]">
            <li><a href={reservarGeneral} {...externo} className="hover:text-vela">WhatsApp +52 {negocio.telefono}</a></li>
            <li><a href={`tel:${negocio.tel}`} className="hover:text-vela">Teléfono +52 {negocio.telefono}</a></li>
            <li><a href={negocio.opentable} {...externo} className="hover:text-vela">OpenTable</a></li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-cal">Síguenos</p>
          <ul className="mt-1 space-y-1 text-[0.95rem]">
            {negocio.redes.map((r) => <li key={r.nombre}><a href={r.url} {...externo} className="hover:text-vela">{r.nombre}</a></li>)}
          </ul>
        </div>
      </div>
      <p className="contenedor mt-12 text-[0.85rem] text-cal/60">© {new Date().getFullYear()} Las Casas B+B Hotel Boutique, Spa &amp; Restaurante. Todos los derechos reservados.</p>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-cal/15 bg-noche text-cal md:hidden" aria-label="Acciones rápidas">
      <a href={reservarGeneral} {...externo} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-vela text-[0.85rem] font-medium text-carbon">{Icono.wa} Reservar</a>
      <a href={`tel:${negocio.tel}`} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.85rem]" aria-label="Llamar a HOUSE Restaurante">{Icono.tel} Llamar</a>
      <a href={negocio.mapa} {...externo} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.85rem]" aria-label="Cómo llegar a HOUSE en Google Maps">{Icono.mapa} Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#menu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-carbon focus:px-4 focus:py-2 focus:text-cal">Ir al menú</a>
      <Encabezado />
      <main>
        <Portada />
        <Cocina />
        <Momentos />
        <Mesa />
        <MenuCompleto />
        <Horarios />
        <LlevarYCelebrar />
        <Visitanos />
        <Cierre />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
