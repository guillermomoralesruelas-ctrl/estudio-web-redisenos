import { useMemo, useState } from 'react';
import {
  antes, experiencias, google, grupos, mensajeBase, negocio, opiniones, otras, portada, valle, wa,
  type Experiencia, type Foto, type Ilustracion,
} from './data/content';

const externo = { target: '_blank', rel: 'noopener' } as const;
const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const desde = Math.min(...experiencias.map((e) => e.precio));

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
};

function Img({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

// ---------- Fechas (hora de Valle de Bravo, America/Mexico_City) ----------

const hoyEnValle = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Mexico_City' }).format(new Date());
const aFecha = (iso: string) => { const [a, m, d] = iso.split('-').map(Number); return new Date(a, m - 1, d); };
const aIso = (f: Date) => `${f.getFullYear()}-${String(f.getMonth() + 1).padStart(2, '0')}-${String(f.getDate()).padStart(2, '0')}`;
function proximoSabado() {
  const f = aFecha(hoyEnValle());
  const faltan = (6 - f.getDay() + 7) % 7;
  f.setDate(f.getDate() + faltan);
  return aIso(f);
}
const fechaLarga = (iso: string) => aFecha(iso).toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' }).replace(',', '');
const DIAS = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
const MESES = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];

// ---------- Ilustraciones de las postales sin foto (SVG, 360 × 240) ----------

function Dibujo({ tipo, className = '' }: { tipo: Ilustracion; className?: string }) {
  const pinos = (xs: number[], base: number, alto: number, color: string) =>
    xs.map((x, i) => <path key={i} d={`M${x} ${base - alto} L${x - alto * 0.32} ${base} L${x + alto * 0.32} ${base} Z`} fill={color} />);
  const cielo = <rect width="360" height="240" fill="#f3d9a8" />;
  const sol = <circle cx="292" cy="58" r="26" fill="#f6b25e" />;
  const titulos: Record<Ilustracion, string> = {
    cascada: 'Dibujo de la cascada Velo de Novia cayendo entre rocas y pinos',
    pena: 'Dibujo de La Peña, la gran roca sobre el pueblo y el lago',
    stupa: 'Dibujo de la Gran Stupa blanca entre los pinos de Avándaro',
    lago: 'Dibujo del lago de Valle de Bravo con un velero y un parapente',
    pueblo: 'Dibujo de las torres de la iglesia de San Francisco y los tejados del pueblo',
  };
  return (
    <svg viewBox="0 0 360 240" className={className} role="img" aria-label={titulos[tipo]} preserveAspectRatio="xMidYMid slice">
      {cielo}
      {tipo === 'cascada' && (
        <g>
          <path d="M0 240 V70 C40 60 80 40 120 46 L150 60 V240 Z" fill="#6b5a48" />
          <path d="M360 240 V60 C320 52 280 40 236 50 L206 64 V240 Z" fill="#5a4b3d" />
          <path d="M150 60 C165 56 190 56 206 64 L214 214 H144 Z" fill="#e9f3f1" />
          {[160, 172, 184, 196].map((x) => <path key={x} d={`M${x} 64 V206`} stroke="#b9d8d6" strokeWidth="3" />)}
          <ellipse cx="180" cy="220" rx="96" ry="18" fill="#1d5c63" />
          <ellipse cx="180" cy="214" rx="54" ry="8" fill="#e9f3f1" opacity=".8" />
          {pinos([22, 58, 96, 268, 306, 340], 150, 92, '#0f3b2a')}
          {pinos([40, 80, 288, 326], 190, 70, '#1a5a40')}
        </g>
      )}
      {tipo === 'pena' && (
        <g>
          {sol}
          <path d="M0 150 C60 120 120 132 170 124 C230 114 300 128 360 118 V240 H0 Z" fill="#7d9a86" />
          <path d="M170 176 C176 104 210 62 256 58 C300 56 326 100 330 176 Z" fill="#8a7a66" />
          <path d="M214 90 C226 84 240 86 248 96 M272 80 C284 84 292 96 294 112 M232 128 C244 122 262 126 270 138" stroke="#6b5c4b" strokeWidth="4" fill="none" strokeLinecap="round" />
          <rect y="176" width="360" height="64" fill="#1d5c63" />
          <path d="M0 176 H360" stroke="#e9f3f1" strokeWidth="2" opacity=".6" />
          {[150, 176, 202, 228, 254, 282].map((x, i) => <rect key={x} x={x} y={162 - (i % 2) * 4} width="16" height="14" fill={i % 2 ? '#f6efe2' : '#d9663a'} />)}
          {pinos([30, 64, 100, 128], 176, 60, '#0f3b2a')}
        </g>
      )}
      {tipo === 'stupa' && (
        <g>
          {pinos([20, 56, 92, 268, 304, 340], 216, 150, '#0f3b2a')}
          {pinos([40, 76, 286, 322], 230, 110, '#1a5a40')}
          <rect x="118" y="186" width="124" height="30" fill="#f6efe2" />
          <rect x="132" y="164" width="96" height="24" fill="#fbf7ee" />
          <path d="M140 164 C140 118 220 118 220 164 Z" fill="#ffffff" />
          <rect x="168" y="110" width="24" height="14" fill="#f6efe2" />
          <path d="M172 110 L180 50 L188 110 Z" fill="#d9a441" />
          <circle cx="180" cy="46" r="6" fill="#d9a441" />
          <rect x="172" y="148" width="16" height="16" fill="#a64700" />
          <rect x="0" y="216" width="360" height="24" fill="#6b5a48" />
        </g>
      )}
      {tipo === 'lago' && (
        <g>
          {sol}
          <path d="M0 132 C50 96 100 104 140 118 C190 90 250 84 300 108 C330 100 350 104 360 110 V160 H0 Z" fill="#7d9a86" />
          <path d="M0 150 C70 132 130 146 190 140 C260 132 310 144 360 136 V170 H0 Z" fill="#1a5a40" />
          <rect y="166" width="360" height="74" fill="#1d5c63" />
          {[184, 204, 224].map((y) => <path key={y} d={`M20 ${y} H90 M150 ${y + 6} H240 M280 ${y} H340`} stroke="#e9f3f1" strokeWidth="2" opacity=".45" />)}
          <path d="M150 204 H214 L204 216 H160 Z" fill="#f6efe2" />
          <path d="M184 202 V130 L220 200 Z" fill="#ffffff" />
          <path d="M180 202 V144 L152 200 Z" fill="#e96b00" />
          <path d="M60 60 C80 44 116 44 136 60" stroke="#e96b00" strokeWidth="9" fill="none" strokeLinecap="round" />
          <path d="M64 62 L98 92 L132 62" stroke="#1c2620" strokeWidth="1.5" fill="none" />
          <circle cx="98" cy="96" r="4" fill="#1c2620" />
        </g>
      )}
      {tipo === 'pueblo' && (
        <g>
          {sol}
          <path d="M0 150 C80 120 160 136 220 126 C280 116 330 128 360 122 V240 H0 Z" fill="#7d9a86" />
          <rect x="120" y="96" width="120" height="120" fill="#f6efe2" />
          <rect x="120" y="54" width="34" height="62" fill="#fbf7ee" />
          <rect x="206" y="54" width="34" height="62" fill="#fbf7ee" />
          <path d="M116 58 L137 30 L158 58 Z M202 58 L223 30 L244 58 Z" fill="#a64700" />
          <path d="M156 216 V170 C156 150 204 150 204 170 V216 Z" fill="#5a4b3d" />
          <rect x="130" y="72" width="14" height="18" fill="#5a4b3d" />
          <rect x="216" y="72" width="14" height="18" fill="#5a4b3d" />
          <circle cx="180" cy="120" r="12" fill="#e9f3f1" stroke="#a64700" strokeWidth="3" />
          {[[10, 186], [60, 176], [262, 180], [312, 188]].map(([x, y]) => (
            <g key={x}><rect x={x} y={y} width="46" height={240 - y} fill="#fbf7ee" /><path d={`M${x - 4} ${y} L${x + 23} ${y - 16} L${x + 50} ${y} Z`} fill="#d9663a" /></g>
          ))}
          <rect y="222" width="360" height="18" fill="#8a7a66" />
        </g>
      )}
    </svg>
  );
}

function Frente({ e, className = '' }: { e: Experiencia; className?: string }) {
  return e.foto ? <Img foto={e.foto} className={className} /> : <Dibujo tipo={e.ilustracion!} className={`size-full ${className}`} />;
}

// ---------- Encabezado y portada ----------

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const nav = [
    { href: '#postal', label: 'Experiencias' },
    { href: '#valle', label: 'Valle de Bravo' },
    { href: '#antes', label: 'Antes de venir' },
    { href: '#contacto', label: 'Contacto' },
  ];
  return (
    <header className="oscuro sticky top-0 z-40 border-b border-white/10 bg-bosque/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="flex min-w-0 shrink items-center" aria-label="Explora Valle, ir al inicio">
          <img src={negocio.logo.src} alt="" width={negocio.logo.w} height={negocio.logo.h} className="h-10 w-auto md:h-12" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-bold text-white/85 hover:text-naranja-claro">{n.label}</a>)}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href={wa(mensajeBase)} {...externo} className="btn hidden sm:inline-flex">{Icono.wa} Reservar por WhatsApp</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir navegación"
            className="grid size-11 place-items-center rounded-full border border-white/30 text-white lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-white/10 bg-bosque lg:hidden" aria-label="Móvil">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="border-b border-white/10 py-3 font-titulo text-2xl text-white">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  const datos: [string, string][] = [
    [`Desde ${pesos(desde)}`, 'por persona, el Tour a las Cascadas'],
    [`${google.calificacion} en Google`, 'en las reseñas de Explora Valle Mx'],
    [negocio.horario, 'horario de la oficina'],
    [negocio.direccionCorta, 'Valle de Bravo, Edo. Méx.'],
  ];
  return (
    <section id="inicio" className="oscuro bg-bosque text-white">
      <div className="contenedor grid gap-8 pb-10 pt-12 md:grid-cols-12 md:pb-14 md:pt-16">
        <div className="min-w-0 md:col-span-7">
          <p className="font-bold text-naranja-claro">Explora Valle, con guías Vallesanos</p>
          <h1 className="mt-3 text-[2.6rem] text-white sm:text-6xl">Tours y experiencias en Valle de Bravo</h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">{portada.frase}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#postal" className="btn">Elige tu postal</a>
            <a href={wa(mensajeBase)} {...externo} className="btn-claro">{Icono.wa} Escribir por WhatsApp</a>
          </div>
        </div>
        <dl className="grid min-w-0 grid-cols-2 gap-x-6 gap-y-5 self-end md:col-span-5 md:border-l md:border-white/15 md:pl-8">
          {datos.map(([a, b]) => (
            <div key={a} className="min-w-0">
              <dt className="font-titulo text-2xl text-white">{a}</dt>
              <dd className="text-sm text-white/75">{b}</dd>
            </div>
          ))}
        </dl>
      </div>
      <figure className="relative">
        <div className="aspect-[16/7] w-full overflow-hidden sm:aspect-[16/5]">
          <Img foto={portada.foto} eager className="object-[60%_center]" />
        </div>
        <figcaption className="contenedor py-3 text-sm text-white/70">El lago, el pueblo y un parapente sobre el bosque: la vista desde la montaña.</figcaption>
      </figure>
    </section>
  );
}

// ---------- El elemento: "Manda tu postal de Valle" ----------

function Timbre({ e }: { e: Experiencia }) {
  return (
    <div key={e.id} className="sello relative w-[6.5rem] shrink-0 bg-white p-1.5 shadow-sm" style={{ clipPath: 'polygon(0 4%,4% 0,8% 4%,12% 0,16% 4%,20% 0,24% 4%,28% 0,32% 4%,36% 0,40% 4%,44% 0,48% 4%,52% 0,56% 4%,60% 0,64% 4%,68% 0,72% 4%,76% 0,80% 4%,84% 0,88% 4%,92% 0,96% 4%,100% 0,100% 100%,0 100%)' }}>
      <div className="bg-naranja px-1.5 pb-1.5 pt-2 text-center text-tinta">
        <p className="text-[0.62rem] font-extrabold leading-tight">MÉXICO</p>
        <p className="cifra font-titulo text-[1.55rem] leading-none">{pesos(e.precio)}</p>
        <p className="cifra text-[0.7rem] font-bold leading-tight"><span className="sr-only">Precio anterior: </span><s>{pesos(e.antes)}</s></p>
      </div>
    </div>
  );
}

function Matasellos({ fecha, hora }: { fecha: string; hora: string }) {
  const f = aFecha(fecha);
  return (
    <svg viewBox="0 0 150 96" className="sello h-20 w-auto text-pluma" role="img" aria-label={`Matasellos: ${fechaLarga(fecha)}, ${hora} h, Valle de Bravo`}>
      <defs><path id="arco" d="M14 48 A34 34 0 0 1 82 48" /><path id="arco2" d="M7 48 A41 41 0 0 0 89 48" /></defs>
      <circle cx="48" cy="48" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="48" cy="48" r="30" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text fontSize="9.5" fontWeight="800" fill="currentColor" letterSpacing="1"><textPath href="#arco" startOffset="50%" textAnchor="middle">VALLE DE BRAVO</textPath></text>
      <text fontSize="8.5" fontWeight="800" fill="currentColor" letterSpacing="1"><textPath href="#arco2" startOffset="50%" textAnchor="middle">EDO. MÉX.</textPath></text>
      <text x="48" y="45" fontSize="10" fontWeight="800" fill="currentColor" textAnchor="middle">{DIAS[f.getDay()]} {String(f.getDate()).padStart(2, '0')}</text>
      <text x="48" y="57" fontSize="10" fontWeight="800" fill="currentColor" textAnchor="middle">{MESES[f.getMonth()]} {hora}</text>
      {[40, 50, 60].map((y) => <path key={y} d={`M96 ${y} q6 -5 12 0 t12 0 t12 0 t12 0`} fill="none" stroke="currentColor" strokeWidth="2" />)}
    </svg>
  );
}

const lista = (xs: string[]) => (xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} y ${xs[xs.length - 1]}`);

function Postal() {
  const [id, setId] = useState('cascadas');
  const e = experiencias.find((x) => x.id === id)!;
  const [fecha, setFecha] = useState(proximoSabado);
  const [horaElegida, setHora] = useState('');
  const [personas, setPersonas] = useState(2);
  const hora = e.horarios.includes(horaElegida) ? horaElegida : e.horarios[0];
  const hoy = hoyEnValle();
  // En el celular el exhibidor queda arriba de la postal: al tomar una, la pantalla baja hasta ella.
  const elegir = (nuevo: string) => {
    setId(nuevo);
    if (window.matchMedia('(max-width: 1023px)').matches) {
      const quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      requestAnimationFrame(() => document.getElementById('la-postal')?.scrollIntoView({ behavior: quieto ? 'auto' : 'smooth', block: 'start' }));
    }
  };

  const unidades = Math.ceil(personas / e.capacidad);
  const total = unidades * e.precio;
  const ahorro = unidades * (e.antes - e.precio);
  const nombreUnidad = e.capacidad === 1 ? (personas === 1 ? 'persona' : 'personas')
    : e.id === 'kayak' ? (unidades === 1 ? 'kayak doble' : 'kayaks dobles')
    : e.id === 'lancha' ? (unidades === 1 ? 'lancha' : 'lanchas')
    : e.id === 'cuatrimoto' ? (unidades === 1 ? 'cuatrimoto' : 'cuatrimotos')
    : (unidades === 1 ? 'guía' : 'guías');

  const avisos = useMemo(() => {
    const a: string[] = [];
    const dia = aFecha(fecha).getDay();
    if (e.soloFinDeSemana && dia >= 1 && dia <= 4) a.push('Es de viernes a domingo; entre semana solo en puentes y vacaciones. Pregunta por WhatsApp si hay ese día.');
    if (e.minimo && personas < e.minimo) a.push(`Sale con mínimo ${e.minimo} personas: si son menos, pregunta si hay grupo ese día.`);
    if (e.id === 'cuatrimoto') a.push('En cada cuatrimoto maneja un mayor de 18 años; el acompañante puede ser menor. Confirma por WhatsApp el costo del acompañante.');
    return [...a, ...e.avisos];
  }, [e, fecha, personas]);

  const somos = personas === 1 ? 'Voy yo' : `Somos ${personas}`;
  const cuenta = `${unidades} ${e.capacidad === 1 ? (unidades === 1 ? 'persona' : 'personas') : nombreUnidad} × ${pesos(e.precio)}`;
  const mensaje = [
    `¡Hola! Vengo de su página web y quiero reservar: ${e.nombre}.`,
    `Fecha: ${fechaLarga(fecha)}`,
    `Hora: ${hora} h`,
    `Personas: ${personas}`,
    `Total aproximado: ${pesos(total)} (${cuenta})`,
    '¿Tienen lugar?',
  ].join('\n');

  return (
    <section id="postal" className="py-16 md:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl">Manda tu postal de Valle</h2>
          <p className="mt-4 text-lg">
            Toma una postal del exhibidor. Atrás está lo que vas a hacer, el timbre es el precio y el matasellos, el día y la hora que eliges.
            Va dirigida a nuestra oficina: al enviarla, nos llega por WhatsApp con todo escrito.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          {/* Exhibidor */}
          <div className="min-w-0 lg:col-span-4">
            <div className="rounded-2xl bg-carton p-4 sm:p-5">
              {grupos.map((g) => (
                <fieldset key={g.id} className="mb-5 last:mb-0">
                  <legend className="mb-2 font-titulo text-xl">{g.nombre}</legend>
                  <div className="grid grid-cols-2 gap-3">
                    {experiencias.filter((x) => x.grupo === g.id).map((x, i, todas) => {
                      const activa = x.id === id;
                      const ancha = todas.length % 2 === 1 && i === todas.length - 1;
                      return (
                        <button key={x.id} type="button" onClick={() => elegir(x.id)} aria-pressed={activa}
                          className={`group min-w-0 bg-white p-1.5 text-left shadow-sm transition ${ancha ? 'col-span-2' : ''} ${activa ? 'ring-3 ring-pluma' : 'hover:-translate-y-0.5 hover:shadow-md'}`}>
                          <span className={`block overflow-hidden ${ancha ? 'aspect-[3/1]' : 'aspect-[3/2]'}`}><Frente e={x} /></span>
                          <span className="mt-1.5 block truncate px-0.5 text-sm font-extrabold">{x.corto}</span>
                          <span className="cifra block px-0.5 text-xs font-bold text-naranja-hondo">{pesos(x.precio)} <span className="font-normal text-tinta/70">{x.capacidad === 1 ? 'c/u' : ''}</span></span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              ))}
            </div>
          </div>

          {/* La postal */}
          <div id="la-postal" className="min-w-0 scroll-mt-20 lg:col-span-8">
            <div key={e.id} className="cae grid items-start gap-5 md:grid-cols-2">
              {/* Frente */}
              <figure className="min-w-0 bg-white p-2.5 shadow-lg md:-rotate-1">
                <div className="aspect-[3/2] overflow-hidden"><Frente e={e} /></div>
                <figcaption className="flex items-baseline justify-between gap-3 px-1 pt-2.5">
                  <span className="font-titulo text-xl leading-tight">Saludos desde Valle de Bravo</span>
                  <span className="shrink-0 text-xs font-bold text-tinta/70">{e.corto}</span>
                </figcaption>
              </figure>

              {/* Reverso */}
              <article className="cartulina relative min-w-0 p-4 shadow-lg sm:p-5 md:rotate-1" aria-label={`Reverso de la postal: ${e.nombre}`}>
                <div className="flex items-start justify-between gap-3">
                  <Matasellos fecha={fecha} hora={hora} />
                  <Timbre e={e} />
                </div>
                <div className="mt-3 font-mano text-[1.4rem] leading-snug text-pluma">
                  <p>¡Hola, Explora Valle!</p>
                  <p>{somos} para {e.accion} el {fechaLarga(fecha)} a las {hora}.</p>
                  <p>Vamos a {lista(e.puntos)}. Son {e.duracion.replace(/ \(.*\)/, '')}.</p>
                </div>
                <div className="mt-4 space-y-2 font-mano text-[1.25rem] leading-tight text-pluma">
                  <p className="renglon pb-0.5">Para: Explora Valle</p>
                  <p className="renglon pb-0.5">Rincón San Vicente #13, Col. Centro</p>
                  <p className="renglon pb-0.5">Valle de Bravo, Edo. Méx.</p>
                </div>
              </article>
            </div>

            {/* Controles y cuenta */}
            <div className="mt-8 grid gap-6 rounded-2xl border-2 border-tinta/10 bg-white p-5 sm:p-6 md:grid-cols-2">
              <div className="min-w-0 space-y-5">
                <h3 className="text-2xl">{e.nombre}</h3>
                <p>{e.descripcion}</p>
                <label className="block">
                  <span className="font-extrabold">¿Qué día vienes?</span>
                  <input type="date" value={fecha} min={hoy} onChange={(ev) => ev.target.value && setFecha(ev.target.value)}
                    className="mt-1.5 block w-full rounded-xl border-2 border-tinta/20 bg-papel px-3 py-2.5 font-bold" />
                </label>
                <div>
                  <p className="font-extrabold" id="horas">¿A qué hora?</p>
                  <div className="mt-1.5 flex flex-wrap gap-2" role="group" aria-labelledby="horas">
                    {e.horarios.map((h) => <button key={h} type="button" className="chip cifra" aria-pressed={h === hora} onClick={() => setHora(h)}>{h}</button>)}
                  </div>
                </div>
                <div>
                  <p className="font-extrabold" id="personas">¿Cuántas personas?</p>
                  <div className="mt-1.5 flex items-center gap-3" role="group" aria-labelledby="personas">
                    <button type="button" className="chip w-11 text-lg" onClick={() => setPersonas((n) => Math.max(1, n - 1))} aria-label="Una persona menos">−</button>
                    <output className="cifra w-10 text-center font-titulo text-3xl" aria-live="polite">{personas}</output>
                    <button type="button" className="chip w-11 text-lg" onClick={() => setPersonas((n) => Math.min(30, n + 1))} aria-label="Una persona más">+</button>
                  </div>
                </div>
              </div>

              <div className="min-w-0 space-y-4">
                <div className="rounded-xl bg-papel p-4">
                  <p className="text-sm font-bold text-tinta/75">{pesos(e.precio)} {e.unidad}</p>
                  <p className="cifra mt-1 font-titulo text-4xl">{pesos(total)}</p>
                  <p className="text-sm">
                    {e.capacidad > 1 ? `${unidades} ${nombreUnidad} para ${personas} ${personas === 1 ? 'persona' : 'personas'}` : `${personas} ${nombreUnidad}`}
                    {ahorro > 0 && <> · ahorras <strong className="cifra">{pesos(ahorro)}</strong> contra el precio anterior</>}
                  </p>
                </div>
                <dl className="grid gap-2 text-[0.95rem]">
                  <div><dt className="inline font-extrabold">Duración: </dt><dd className="inline">{e.duracion}</dd></div>
                  <div><dt className="inline font-extrabold">Días: </dt><dd className="inline">{e.dias}</dd></div>
                  <div><dt className="inline font-extrabold">Edad mínima: </dt><dd className="inline">{e.edad}</dd></div>
                  <div><dt className="inline font-extrabold">Incluye: </dt><dd className="inline">{e.incluye.join(', ')}</dd></div>
                  <div><dt className="inline font-extrabold">Qué llevar: </dt><dd className="inline">{e.llevar.join(', ')}</dd></div>
                  <div><dt className="inline font-extrabold">Punto de encuentro: </dt><dd className="inline">{e.encuentro}</dd></div>
                </dl>
                {avisos.length > 0 && (
                  <ul className="space-y-1.5 border-l-4 border-naranja pl-3 text-[0.95rem]">
                    {avisos.map((a) => <li key={a}>{a}</li>)}
                  </ul>
                )}
                <div className="flex flex-wrap gap-3 pt-1">
                  <a href={wa(mensaje)} {...externo} className="btn">{Icono.wa} Enviar postal por WhatsApp</a>
                  <a href={e.url} {...externo} className="enlace self-center">Ver su ficha</a>
                </div>
                <p className="text-sm text-tinta/70">Se abre WhatsApp con la experiencia, el día, la hora, las personas y el total escritos; tú decides si lo envías. El lugar se confirma por WhatsApp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Otras() {
  return (
    <section className="oscuro bg-lago py-14 text-white md:py-16">
      <div className="contenedor grid gap-8 md:grid-cols-12">
        <div className="min-w-0 md:col-span-4">
          <h2 className="text-3xl text-white sm:text-4xl">También organizamos</h2>
          <p className="mt-3 text-white/85">Más experiencias por tierra, agua y aire, y actividades para empresas. Pregúntanos precio y disponibilidad.</p>
          <a href={wa('¡Hola! Vengo de su página web. Quiero información de otras experiencias en Valle de Bravo.')} {...externo} className="btn mt-6">{Icono.wa} Preguntar por WhatsApp</a>
        </div>
        <ul className="grid min-w-0 gap-x-8 sm:grid-cols-2 md:col-span-8">
          {otras.map((o) => (
            <li key={o.nombre} className="border-b border-white/20">
              <a href={o.href} {...externo} className="flex items-center justify-between gap-3 py-3 font-bold hover:text-naranja-claro">
                <span>{o.nombre}</span><span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Valle() {
  return (
    <section id="valle" className="py-16 md:py-24">
      <div className="contenedor grid gap-10 md:grid-cols-12">
        <div className="min-w-0 md:col-span-5">
          <h2 className="text-4xl sm:text-5xl">Valle de Bravo</h2>
          <p className="mt-4 text-lg">{valle.texto}</p>
        </div>
        <dl className="grid min-w-0 gap-6 sm:grid-cols-2 md:col-span-7">
          {valle.datos.map(([cifra, texto]) => (
            <div key={cifra} className="min-w-0 border-t-4 border-naranja pt-3">
              <dt className="cifra font-titulo text-4xl text-naranja-hondo">{cifra}</dt>
              <dd className="mt-1">{texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function AntesDeVenir() {
  return (
    <section id="antes" className="bg-carton py-16 md:py-20">
      <div className="contenedor">
        <h2 className="text-4xl sm:text-5xl">Antes de venir</h2>
        <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {antes.map(([t, d]) => (
            <div key={t} className="min-w-0">
              <h3 className="text-xl">{t}</h3>
              <p className="mt-1.5">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Opiniones() {
  return (
    <section className="py-16 md:py-20">
      <div className="contenedor grid gap-8 md:grid-cols-12 md:items-center">
        <div className="min-w-0 md:col-span-4">
          <p className="cifra font-titulo text-7xl text-naranja-hondo">{google.calificacion}</p>
          <p className="mt-1 font-bold">de calificación en {google.fuente}</p>
        </div>
        <div className="grid min-w-0 gap-6 sm:grid-cols-2 md:col-span-8">
          {opiniones.map((o) => (
            <figure key={o.autor} className="min-w-0 border-l-4 border-pluma pl-4">
              <blockquote className="font-mano text-[1.7rem] leading-tight text-pluma">“{o.texto}”</blockquote>
              <figcaption className="mt-2 text-sm font-bold">{o.autor}, en Google</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro bg-bosque py-16 text-white md:py-20">
      <div className="contenedor grid gap-10 md:grid-cols-12">
        <div className="min-w-0 md:col-span-6">
          <h2 className="text-4xl text-white sm:text-5xl">Visítanos o escríbenos</h2>
          <p className="mt-4 text-lg text-white/85">Nuestra oficina está en el centro de Valle de Bravo. Ahí se firman las responsivas y salen la mayoría de los recorridos.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={wa(mensajeBase)} {...externo} className="btn">{Icono.wa} WhatsApp</a>
            <a href={negocio.telefono.href} className="btn-claro">{Icono.tel} {negocio.telefono.texto}</a>
            <a href={negocio.mapa} {...externo} className="btn-claro">{Icono.mapa} Cómo llegar</a>
          </div>
        </div>
        <dl className="grid min-w-0 gap-5 md:col-span-6 sm:grid-cols-2">
          <div className="min-w-0"><dt className="font-titulo text-xl text-naranja-claro">Dirección</dt><dd className="mt-1 text-white/90">{negocio.direccion}</dd><dd><a href={negocio.mapa} {...externo} className="mt-1 inline-block font-bold text-white underline underline-offset-4">Abrir en Google Maps</a></dd></div>
          <div className="min-w-0"><dt className="font-titulo text-xl text-naranja-claro">Horario</dt><dd className="mt-1 text-white/90">Oficina: {negocio.horario}</dd></div>
          <div className="min-w-0"><dt className="font-titulo text-xl text-naranja-claro">Teléfono y WhatsApp</dt><dd className="mt-1"><a href={negocio.telefono.href} className="font-bold text-white underline underline-offset-4">{negocio.telefono.texto}</a></dd></div>
          <div className="min-w-0"><dt className="font-titulo text-xl text-naranja-claro">Correo</dt><dd className="mt-1 break-words"><a href={`mailto:${negocio.correo}`} className="font-bold text-white underline underline-offset-4">{negocio.correo}</a></dd><dd className="break-words text-sm text-white/80">Atención a clientes: <a href={`mailto:${negocio.correoClientes}`} className="underline underline-offset-4">{negocio.correoClientes}</a></dd></div>
          <div className="min-w-0 sm:col-span-2"><dt className="font-titulo text-xl text-naranja-claro">Redes</dt><dd className="mt-1 flex flex-wrap gap-x-5 gap-y-1">{negocio.redes.map((r) => <a key={r.nombre} href={r.href} {...externo} className="font-bold text-white underline underline-offset-4">{r.nombre}</a>)}</dd></div>
        </dl>
        <div className="md:col-span-12 min-w-0 overflow-hidden rounded-xl">
          <iframe
            src={negocio.mapaEmbed}
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title={`Ubicación de ${negocio.nombre}`}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro border-t border-white/10 bg-bosque pb-28 pt-8 text-white/80 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4">
        <img src={negocio.logo.src} alt={negocio.logo.alt} width={negocio.logo.w} height={negocio.logo.h} loading="lazy" className="h-12 w-auto" />
        <p className="text-sm">© {new Date().getFullYear()} {negocio.nombre}. Precios de su sitio al 27 de septiembre de 2026; se confirman al reservar.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta/10 bg-papel/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-2">
        <a href={wa(mensajeBase)} {...externo} className="btn px-2">{Icono.wa} WhatsApp</a>
        <a href={negocio.telefono.href} className="btn-linea px-0" aria-label="Llamar a Explora Valle">{Icono.tel}</a>
        <a href={negocio.mapa} {...externo} className="btn-linea px-0" aria-label="Cómo llegar a la oficina en Google Maps">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#postal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Saltar a las experiencias</a>
      <Encabezado />
      <main>
        <Portada />
        <Postal />
        <Otras />
        <Valle />
        <AntesDeVenir />
        <Opiniones />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
