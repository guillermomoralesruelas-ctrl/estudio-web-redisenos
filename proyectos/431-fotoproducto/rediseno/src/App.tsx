import { useState } from 'react';
import { especialidades, fotos, negocio, renta, valores, videos, wa, waGeneral, type Foto, type Modalidad } from './data/content';

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function Img({ f, className = '', loading = 'lazy' }: { f: Foto; className?: string; loading?: 'lazy' | 'eager' }) {
  return <img src={f.src} width={f.w} height={f.h} alt={f.alt} loading={loading} decoding="async" className={className} />;
}

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const tel = `tel:${negocio.telLink}`;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-papel/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Fotoproducto, inicio" className="shrink-0">
          <img src={fotos.logo.src} alt="Fotoproducto" width={81} height={56} className="h-12 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 font-semibold text-tinta md:flex">
          <a href="#servicios" className="hover:text-naranja">Servicios</a>
          <a href="#trabajo" className="hover:text-naranja">Trabajo</a>
          <a href="#estudio" className="hover:text-naranja">Renta de estudio</a>
          <a href="#contacto" className="hover:text-naranja">Contacto</a>
        </nav>
        <a href={waGeneral} className="btn !min-h-[42px] !px-5 !py-2 text-sm" target="_blank" rel="noopener"><IconoWa className="h-4 w-4" /> Cotizar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="overflow-hidden">
      <div className="contenedor grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div className="min-w-0">
          <p className="font-semibold text-petroleo">Fotoproducto, estudio de fotografía y video en Zapopan, Jalisco</p>
          <h1 className="mt-4 text-5xl sm:text-7xl">Maestros de la fotografía de producto</h1>
          <p className="mt-6 max-w-xl text-lg">A través de años de experiencia hemos convertido productos en narrativas visuales que cautivan. Cada imagen no solo refleja la calidad: despierta el deseo y genera ventas desde el primer vistazo.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn" target="_blank" rel="noopener"><IconoWa /> Cotizar por WhatsApp</a>
            <a href="#estudio" className="btn-linea">Rentar el estudio</a>
          </div>
        </div>
        <div className="relative min-w-0 px-3 sm:px-6">
          <div className="visor">
            <Img f={fotos.portada} loading="eager" className="aspect-[4/5] w-full object-cover" />
          </div>
          <p className="mt-6 text-sm">Sesión de moda deportiva sobre fondo naranja, de su portafolio.</p>
        </div>
      </div>
    </section>
  );
}

const servicios = [
  { titulo: 'Fotografía y video', texto: 'Imágenes y videos que transforman productos en historias visuales cautivadoras, perfectas para catálogos, presentaciones institucionales, comercio electrónico y experiencias web.', accion: 'Cotizar fotografía', msg: 'Hola, me gustaría cotizar una sesión de fotografía o video de producto con Fotoproducto.' },
  { titulo: 'Estudio profesional en renta', texto: 'Equipado con tecnología de vanguardia y un equipo altamente capacitado. Ya sea en sus instalaciones o en la locación que necesites.', accion: 'Ver la renta', href: '#estudio' },
  { titulo: 'Retoque y edición', texto: 'La edición perfecciona cada detalle, desde el color hasta la composición. Envíanos tus fotos y nosotros las editamos por ti.', accion: 'Cotizar edición', msg: 'Hola, me gustaría cotizar la edición y retoque de mis fotos de producto con Fotoproducto.' },
];

function Servicios() {
  return (
    <section id="servicios" className="bg-white py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">No tomamos fotografías; las creamos</h2>
          <p className="mt-5 text-lg">Con años de experiencia en fotografía de productos, en Fotoproducto sabemos cómo resaltar la singularidad de cada artículo: desde detalles cautivadores hasta presentaciones impresionantes.</p>
          <div className="mt-8 hidden max-w-[16rem] lg:block">
            <Img f={fotos.flores} className="aspect-[4/5] w-full object-cover" />
          </div>
        </div>
        <ul className="min-w-0 divide-y divide-tinta/15 border-y-2 border-tinta self-start">
          {servicios.map((s) => (
            <li key={s.titulo} className="grid gap-3 py-8 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8">
              <div>
                <h3 className="text-3xl">{s.titulo}</h3>
                <p className="mt-3">{s.texto}</p>
              </div>
              {s.href
                ? <a href={s.href} className="enlace whitespace-nowrap">{s.accion}</a>
                : <a href={wa(s.msg!)} className="enlace whitespace-nowrap" target="_blank" rel="noopener">{s.accion}</a>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Trabajo() {
  const [activa, setActiva] = useState(especialidades[0].id);
  const e = especialidades.find((x) => x.id === activa)!;
  return (
    <section id="trabajo" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl text-4xl sm:text-5xl">Fotografía especializada para cada mercado</h2>
          <div role="tablist" aria-label="Especialidades" className="flex flex-wrap gap-2">
            {especialidades.map((x) => (
              <button key={x.id} role="tab" id={`tab-${x.id}`} aria-selected={x.id === activa} aria-controls="panel-trabajo" type="button"
                onClick={() => setActiva(x.id)}
                className={`min-h-[44px] rounded-full px-4 font-semibold transition-colors ${x.id === activa ? 'bg-tinta text-white' : 'text-tinta ring-1 ring-inset ring-tinta/25 hover:ring-tinta'}`}>
                {x.nombre}
              </button>
            ))}
          </div>
        </div>
        <div id="panel-trabajo" role="tabpanel" aria-labelledby={`tab-${e.id}`} className="mt-10">
          <div key={e.id} className="aparece grid gap-8 lg:grid-cols-[18rem_1fr]">
            <div className="min-w-0">
              <h3 className="text-3xl">{e.titulo}</h3>
              <p className="mt-4">{e.texto}</p>
              <a href={wa(`Hola, me gustaría cotizar fotografía de ${e.nombre.toLowerCase()} con Fotoproducto.`)} className="btn mt-6" target="_blank" rel="noopener"><IconoWa /> Cotizar {e.nombre.toLowerCase()}</a>
            </div>
            <div className="grid min-w-0 grid-cols-2 gap-3 md:grid-cols-4">
              {e.fotos.map((x, i) => (
                <Img key={x.src} f={x} className={`aspect-[4/5] w-full object-cover ${i % 2 ? 'md:mt-10' : ''}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Video() {
  return (
    <section className="noche bg-tinta py-20 text-white/85 sm:py-24">
      <div className="contenedor grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <Img f={fotos.video} className="mx-auto aspect-[4/5] w-full max-w-sm object-cover" />
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">Video corporativo</h2>
          <p className="mt-5 text-lg">Capturamos la esencia de tu empresa y transformamos conceptos en imágenes. Desde mensajes ejecutivos hasta historias de marca, creamos contenido audiovisual que resuena.</p>
          <ul className="mt-8 divide-y divide-white/15 border-y border-white/15">
            {videos.map((v) => (
              <li key={v.id}>
                <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener" className="group flex items-center justify-between gap-4 py-3.5 hover:text-white">
                  <span className="font-semibold">{v.titulo}</span>
                  <span className="shrink-0 text-sm text-durazno group-hover:text-white">Ver en YouTube</span>
                </a>
              </li>
            ))}
          </ul>
          <a href={wa('Hola, me gustaría cotizar un video corporativo con Fotoproducto.')} className="btn mt-8" target="_blank" rel="noopener"><IconoWa /> Cotizar un video</a>
        </div>
      </div>
    </section>
  );
}

// Colores solo para el dibujo; el color real de cada ciclorama se elige con el estudio.
const papeles = [
  { color: '#d9642e', nombre: 'naranja' },
  { color: '#8fd0e6', nombre: 'celeste' },
  { color: '#f1a9c0', nombre: 'rosa' },
];

function Persona({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} className="aparece">
      <circle cx="0" cy="-44" r="8" fill="#011f50" />
      <path d="M-11 -32 Q0 -38 11 -32 L9 -8 L6 0 L-6 0 L-9 -8 Z" fill="#011f50" />
    </g>
  );
}

function Set({ modalidad, horas, personas, luz, cicloramas }: { modalidad: Modalidad; horas: number; personas: number; luz: boolean; cicloramas: number }) {
  const papel = cicloramas > 0 ? papeles[cicloramas - 1].color : '#ffffff';
  // Posiciones de las personas: fila de atrás y fila de adelante, a los lados del producto.
  const lugares = [
    [150, 356], [490, 356], [120, 372], [520, 372], [185, 364], [455, 364],
    [95, 388], [545, 388], [215, 384], [425, 384], [250, 394], [390, 394],
  ];
  return (
    <svg viewBox="0 0 640 420" className="h-auto w-full" role="img"
      aria-label={`Dibujo del estudio: ${modalidad === 'dia' ? 'un día' : 'medio día'}, ${horas} horas, ${personas} ${personas === 1 ? 'persona' : 'personas'}, ${luz ? 'con equipo de iluminación' : 'sin equipo de iluminación'} y ${cicloramas ? `${cicloramas} ciclorama${cicloramas > 1 ? 's' : ''} de color` : 'fondo blanco'}.`}>
      {/* Muro y piso */}
      <rect x="0" y="0" width="640" height="330" fill="#e9e4da" />
      <rect x="0" y="330" width="640" height="90" fill="#d8d0c2" />
      {/* Barra del fondo con sus postes */}
      <line x1="150" y1="36" x2="150" y2="336" stroke="#5b6270" strokeWidth="4" />
      <line x1="490" y1="36" x2="490" y2="336" stroke="#5b6270" strokeWidth="4" />
      {/* Rollos de papel: el blanco y los de color que agregues */}
      {papeles.slice(0, cicloramas).map((p, i) => (
        <rect key={p.nombre} x="160" y={22 - i * 12} width="320" height="11" rx="5.5" fill={p.color} stroke="#011f50" strokeOpacity=".25" className="aparece" />
      ))}
      <rect x="156" y="36" width="328" height="14" rx="7" fill="#ffffff" stroke="#011f50" strokeOpacity=".25" />
      {/* El papel desenrollado: baja por el muro y hace la curva sobre el piso (ciclorama) */}
      <defs>
        <linearGradient id="curva" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset=".78" stopColor="#000" stopOpacity="0" />
          <stop offset=".9" stopColor="#000" stopOpacity=".08" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M166 50 H474 V318 Q474 344 500 352 L520 404 H120 L140 352 Q166 344 166 318 Z" fill={papel} className="set-papel" />
      <path d="M166 50 H474 V318 Q474 344 500 352 L520 404 H120 L140 352 Q166 344 166 318 Z" fill="url(#curva)" />
      {/* Luces: dos softbox sobre tripié */}
      {[{ x: 58, dir: 1 }, { x: 582, dir: -1 }].map(({ x, dir }) => (
        <g key={x}>
          <polygon points={`${x + dir * 26},150 ${x + dir * 26},230 ${320},380 ${320},250`} fill="#fff6d8" opacity={luz ? 0.55 : 0} className="set-luz" />
          <line x1={x} y1="190" x2={x} y2="404" stroke="#5b6270" strokeWidth="4" />
          <line x1={x} y1="404" x2={x - 22} y2="416" stroke="#5b6270" strokeWidth="4" />
          <line x1={x} y1="404" x2={x + 22} y2="416" stroke="#5b6270" strokeWidth="4" />
          <polygon points={`${x - dir * 14},166 ${x + dir * 26},140 ${x + dir * 26},240 ${x - dir * 14},214`}
            fill={luz ? '#fffdf5' : '#c9c2b5'} stroke={luz ? '#011f50' : '#8a8478'} strokeWidth="2" strokeDasharray={luz ? '0' : '5 4'} />
        </g>
      ))}
      {/* El producto sobre su base, al centro */}
      <rect x="296" y="332" width="48" height="40" fill="#011f50" opacity=".85" />
      <path d="M312 332 V300 Q312 292 316 288 V272 H324 V288 Q328 292 328 300 V332 Z" fill="#b8441a" />
      {/* Personas (cupo hasta 12) */}
      {lugares.slice(0, personas).map(([x, y], i) => <Persona key={i} x={x} y={y} s={y > 380 ? 1.08 : 0.95} />)}
    </svg>
  );
}

function Estudio() {
  const [modalidad, setModalidad] = useState<Modalidad>('dia');
  const m = renta[modalidad];
  const [horas, setHoras] = useState<number>(8);
  const [personas, setPersonas] = useState(4);
  const [luz, setLuz] = useState(true);
  const [cicloramas, setCicloramas] = useState(1);

  const horasOk = Math.min(Math.max(horas, m.min), m.max);
  const cambiarModalidad = (x: Modalidad) => {
    setModalidad(x);
    setHoras(x === 'dia' ? 8 : 4);
  };
  const total = m.precio + (luz ? m.luz : 0) + cicloramas * renta.ciclorama;

  const extras = [
    luz ? `equipo de iluminación (2 luces con softbox, ${pesos(m.luz)} ${m.luzNota})` : '',
    cicloramas ? `${cicloramas} ciclorama${cicloramas > 1 ? 's' : ''} de color (${pesos(renta.ciclorama)} c/u)` : '',
  ].filter(Boolean);
  const mensaje = `Hola, me gustaría rentar el estudio de Fotoproducto: ${m.nombre} (${m.horas}, ${pesos(m.precio)}), unas ${horasOk} horas, para ${personas} ${personas === 1 ? 'persona' : 'personas'}${extras.length ? `, con ${extras.join(' y ')}` : ', solo con fondo blanco'}. Total aproximado: ${pesos(total)}. ¿Qué fechas tienen disponibles?`;

  const celdas = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <section id="estudio" className="bg-white py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl">Arma tu día en el estudio</h2>
          <p className="mt-5 text-lg">Renta su estudio en Zapopan para tu proyecto fotográfico. Elige medio día o día completo, cuántos vienen, si necesitas luces y cicloramas de color, y ve cómo queda el set y cuánto cuesta antes de escribir.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <div className="overflow-hidden rounded-2xl border-2 border-tinta bg-muro">
              <Set modalidad={modalidad} horas={horasOk} personas={personas} luz={luz} cicloramas={cicloramas} />
            </div>
            {/* Regla de horas: de 1 a 10, con lo que cubre la modalidad elegida */}
            <div className="mt-4" aria-hidden="true">
              <div className="grid grid-cols-10 gap-1">
                {celdas.map((h) => (
                  <div key={h} className={`h-3 rounded-sm ${h <= horasOk ? 'bg-naranja' : h <= m.max ? 'bg-durazno/50' : 'bg-tinta/10'}`} />
                ))}
              </div>
              <div className="mt-1 grid grid-cols-10 gap-1 text-center text-xs text-texto/80">
                {celdas.map((h) => <span key={h}>{h}</span>)}
              </div>
            </div>
            <p className="mt-2 text-sm">Horas continuas. Los colores del dibujo son de ejemplo: el color de cada ciclorama se elige con el estudio.</p>
          </div>

          <div className="min-w-0">
            <fieldset>
              <legend className="font-titulo text-xl font-semibold text-tinta">¿Cuánto tiempo?</legend>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {(['medio', 'dia'] as Modalidad[]).map((x) => {
                  const r = renta[x];
                  const on = x === modalidad;
                  return (
                    <button key={x} type="button" aria-pressed={on} onClick={() => cambiarModalidad(x)}
                      className={`rounded-xl border-2 p-4 text-left transition-colors ${on ? 'border-tinta bg-tinta text-white' : 'border-tinta/20 text-tinta hover:border-tinta'}`}>
                      <span className="block font-titulo text-lg font-semibold">{r.nombre}</span>
                      <span className={`block text-sm ${on ? 'text-white/85' : 'text-texto'}`}>{r.horas}</span>
                      <span className="mt-2 block font-titulo text-2xl font-semibold">{pesos(r.precio)}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-6">
              <label htmlFor="horas" className="flex justify-between font-semibold text-tinta"><span>Horas</span><span>{horasOk} h</span></label>
              <input id="horas" type="range" min={m.min} max={m.max} step={1} value={horasOk} onChange={(ev) => setHoras(+ev.target.value)} className="mt-2 w-full accent-naranja" />
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <span id="personas-l" className="font-semibold text-tinta">Personas <span className="font-normal text-texto">(cupo hasta {renta.cupo})</span></span>
              <div className="flex items-center gap-2" role="group" aria-labelledby="personas-l">
                <button type="button" onClick={() => setPersonas((p) => Math.max(1, p - 1))} aria-label="Una persona menos" className="h-11 w-11 rounded-full border-2 border-tinta/25 text-xl font-semibold text-tinta hover:border-tinta">−</button>
                <span className="w-8 text-center font-titulo text-2xl font-semibold text-tinta" aria-live="polite">{personas}</span>
                <button type="button" onClick={() => setPersonas((p) => Math.min(renta.cupo, p + 1))} aria-label="Una persona más" className="h-11 w-11 rounded-full border-2 border-tinta/25 text-xl font-semibold text-tinta hover:border-tinta">+</button>
              </div>
            </div>

            <label className="mt-5 flex cursor-pointer items-start gap-3">
              <input type="checkbox" checked={luz} onChange={(ev) => setLuz(ev.target.checked)} className="mt-1 h-5 w-5 accent-naranja" />
              <span><span className="font-semibold text-tinta">Equipo de iluminación</span><br /><span className="text-sm">2 luces con un softbox incluido, {pesos(m.luz)} {m.luzNota}</span></span>
            </label>

            <div className="mt-5 flex items-center justify-between gap-4">
              <span id="cic-l" className="font-semibold text-tinta">Cicloramas de color <span className="font-normal text-texto">({pesos(renta.ciclorama)} c/u)</span></span>
              <div className="flex items-center gap-2" role="group" aria-labelledby="cic-l">
                <button type="button" onClick={() => setCicloramas((c) => Math.max(0, c - 1))} aria-label="Un ciclorama menos" className="h-11 w-11 rounded-full border-2 border-tinta/25 text-xl font-semibold text-tinta hover:border-tinta">−</button>
                <span className="w-8 text-center font-titulo text-2xl font-semibold text-tinta" aria-live="polite">{cicloramas}</span>
                <button type="button" onClick={() => setCicloramas((c) => Math.min(papeles.length, c + 1))} aria-label="Un ciclorama más" className="h-11 w-11 rounded-full border-2 border-tinta/25 text-xl font-semibold text-tinta hover:border-tinta">+</button>
              </div>
            </div>

            <dl className="mt-7 grid gap-1.5 border-t-2 border-tinta pt-5 text-[0.98rem]">
              <div className="flex justify-between gap-3"><dt>{m.nombre}</dt><dd className="font-semibold text-tinta">{pesos(m.precio)}</dd></div>
              {luz && <div className="flex justify-between gap-3"><dt>Iluminación</dt><dd className="font-semibold text-tinta">{pesos(m.luz)}</dd></div>}
              {cicloramas > 0 && <div className="flex justify-between gap-3"><dt>{cicloramas} × ciclorama de color</dt><dd className="font-semibold text-tinta">{pesos(cicloramas * renta.ciclorama)}</dd></div>}
              <div className="mt-2 flex items-baseline justify-between gap-3 border-t border-tinta/15 pt-3"><dt className="font-semibold text-tinta">Total aproximado</dt><dd className="font-titulo text-4xl font-semibold text-naranja-hondo" aria-live="polite">{pesos(total)}</dd></div>
            </dl>
            <a href={wa(mensaje)} className="btn mt-6 w-full" target="_blank" rel="noopener"><IconoWa /> Reservar por WhatsApp</a>
          </div>
        </div>

        <div className="mt-14 border-t border-tinta/15 pt-8">
          <h3 className="text-2xl">Incluido en las dos modalidades</h3>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {['Cupo hasta 12 personas', ...renta.incluye].map((x) => <li key={x}>{x}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Valores() {
  return (
    <section className="py-20 sm:py-24">
      <div className="contenedor">
        <h2 className="max-w-3xl text-4xl sm:text-5xl">En un mundo impulsado por la imagen, nosotros creamos el impacto</h2>
        <dl className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {valores.map((v) => (
            <div key={v.titulo} className="border-t-2 border-tinta pt-5">
              <dt className="font-titulo text-2xl font-semibold text-tinta">{v.titulo}</dt>
              <dd className="mt-2">{v.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="noche bg-petroleo py-20 text-white/90 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">¿Listo para elevar tu marca?</h2>
          <p className="mt-5 max-w-xl text-lg">Cuéntanos qué producto quieres fotografiar y para dónde son las fotos: catálogo, tienda en línea o redes sociales.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn" target="_blank" rel="noopener"><IconoWa /> Escribir por WhatsApp</a>
            <a href={tel} className="btn-claro"><IconoTel /> {negocio.telefono}</a>
          </div>
        </div>
        <address className="min-w-0 not-italic">
          <p className="font-titulo text-2xl font-semibold text-white">El estudio</p>
          <p className="mt-2">{negocio.direccion}, México.</p>
          <a href={negocio.mapa} className="enlace mt-3 inline-flex items-center gap-2" target="_blank" rel="noopener"><IconoPin /> Ver en Google Maps</a>
          <ul className="mt-8 grid gap-2">
            <li><a href={`mailto:${negocio.correo}`} className="enlace break-all">{negocio.correo}</a></li>
            <li><a href={negocio.instagram} className="enlace" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href={negocio.facebook} className="enlace" target="_blank" rel="noopener">Facebook</a></li>
          </ul>
        </address>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="noche bg-tinta pb-28 pt-10 text-sm text-white/75 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4">
        <p className="font-titulo text-xl font-semibold text-white">foto [producto]</p>
        <p>Fotografía de producto, video corporativo y renta de estudio en Zapopan, Jalisco.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-tinta text-[0.8rem] font-semibold text-white md:hidden">
      <a href={waGeneral} className="flex flex-col items-center gap-1 bg-naranja py-3" target="_blank" rel="noopener"><IconoWa />WhatsApp</a>
      <a href={tel} className="flex flex-col items-center gap-1 py-3"><IconoTel />Llamar</a>
      <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-3" target="_blank" rel="noopener"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#estudio" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-tinta">Ir a la renta del estudio</a>
      <Encabezado />
      <main>
        <Portada />
        <Servicios />
        <Trabajo />
        <Video />
        <Estudio />
        <Valores />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
