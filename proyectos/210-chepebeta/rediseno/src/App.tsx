import { useState, type FormEvent } from 'react';
import carta from './data/carta.json';
import {
  alma, cortes, fotosCarta, galeria, lugar, negocio, noches, portada, saludo, wa,
  type Corte, type Foto,
} from './data/content';

type Precio = { etiqueta?: string; valor: string };
type Platillo = { nombre: string; detalle?: string; precios: Precio[] };
type Seccion = { titulo: string; nota?: string; platillos: Platillo[] };
type Categoria = { id: string; pestana: string; titulo: string; frase: string; secciones: Seccion[] };
const CARTA = carta as Categoria[];

const externo = { target: '_blank', rel: 'noopener' } as const;

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
  ),
  mesa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M9 3v4M15 3v4" /></svg>
  ),
  tel: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
};

function Img({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

/** Día de la semana en Monterrey (0 = domingo). */
function diaMonterrey() {
  const d = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Monterrey', weekday: 'short' }).format(new Date());
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(d);
}

// ---------- Encabezado y portada ----------

const nav = [
  { href: '#alma', label: 'Nuestra alma' },
  { href: '#despiece', label: 'El despiece' },
  { href: '#carta', label: 'La carta' },
  { href: '#noches', label: 'Noches' },
  { href: '#reservar', label: 'Visítanos' },
];

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="oscuro sticky top-0 z-40 border-b border-crema/10 bg-noche text-crema">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" className="flex shrink-0 items-center" aria-label="Che Pebeta, volver al inicio">
          <img src={negocio.logo.src} alt="" width={negocio.logo.w} height={negocio.logo.h} className="h-12 w-auto" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-medium text-crema/90 hover:text-celeste">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#reservar" className="btn-celeste hidden sm:inline-flex">{Icono.mesa} Reservar mesa</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir el menú"
            className="grid size-11 place-items-center rounded-full border border-crema/30 text-crema lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-crema/15 lg:hidden" aria-label="Menú del celular">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="border-b border-crema/15 py-3 font-display text-2xl text-crema">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Horario({ claro = false }: { claro?: boolean }) {
  const hoy = diaMonterrey();
  return (
    <dl className={`grid gap-x-8 gap-y-2 sm:grid-cols-2 ${claro ? '' : 'text-crema'}`}>
      {negocio.horario.map((h) => {
        const esHoy = hoy >= 0 && h.aplica.includes(hoy);
        return (
          <div key={h.dias}>
            <dt className={`text-sm ${claro ? 'text-tinta/80' : 'text-crema/75'}`}>
              {h.dias}
              {esHoy && <span className={`ml-2 rounded-full px-2 py-0.5 text-[0.75rem] font-bold ${claro ? 'bg-cuero text-crema' : 'bg-celeste text-noche'}`}>hoy</span>}
            </dt>
            <dd className="font-semibold">{h.horas}</dd>
          </div>
        );
      })}
    </dl>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative overflow-hidden bg-noche text-crema/85">
      <div className="contenedor grid items-center gap-10 pb-16 pt-10 md:grid-cols-12 md:pb-24 md:pt-14">
        <div className="min-w-0 md:col-span-6">
          <p className="text-lg font-semibold text-celeste">{portada.antetitulo}</p>
          <h1 className="mt-4 text-[clamp(2.6rem,6vw,4.9rem)] text-crema">
            {portada.titulo[0]} <em className="block font-normal italic text-oro">{portada.titulo[1]}</em>
          </h1>
          <p className="mt-6 max-w-lg text-lg">{portada.texto} En Pueblo Serena, sobre la Carretera Nacional.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#reservar" className="btn-celeste">{Icono.mesa} Reservar mesa</a>
            <a href="#carta" className="btn-claro">Ver la carta</a>
          </div>
          <div className="mt-10 border-t border-crema/20 pt-5"><Horario /></div>
        </div>
        <div className="min-w-0 md:col-span-6">
          <div className="aspect-[5/4] overflow-hidden rounded-[2rem]"><Img foto={portada.foto} eager /></div>
        </div>
      </div>
    </section>
  );
}

function Alma() {
  return (
    <section id="alma" className="contenedor grid items-center gap-12 py-20 md:grid-cols-12 md:py-28">
      <div className="min-w-0 md:col-span-7">
        <div className="-rotate-1 overflow-hidden rounded-2xl bg-white p-2 shadow-[0_25px_50px_-25px_rgba(42,31,25,0.45)]">
          <div className="aspect-[16/9]"><Img foto={alma.foto} className="object-contain" /></div>
        </div>
      </div>
      <div className="min-w-0 md:col-span-5">
        <p className="font-semibold text-cuero">{alma.antetitulo}</p>
        <h2 className="mt-2 text-[clamp(2.4rem,4.6vw,3.6rem)]">{alma.titulo}</h2>
        {alma.parrafos.map((p) => <p key={p.slice(0, 20)} className="mt-5 text-lg">{p}</p>)}
        <ul className="mt-8 flex flex-wrap gap-4" aria-label="Premios">
          {alma.premios.map((a) => (
            <li key={a} className="flex items-center gap-3 rounded-full border border-cuero/30 py-2 pl-2 pr-5">
              <span className="grid size-11 place-items-center rounded-full bg-oro font-display text-sm font-bold text-noche" aria-hidden="true">★</span>
              <span className="leading-tight"><span className="block text-sm">Premio CANIRAC</span><span className="font-display text-xl font-bold">{a}</span></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------- Elemento memorable: El despiece ----------

/** Zonas de la res vista de perfil (cabeza a la izquierda). Coordenadas del viewBox 0 0 640 360. */
const zonas: Record<string, { puntos: string; etiqueta: [number, number]; texto: string }[]> = {
  ribeye: [{ puntos: '200,40 305,40 305,150 200,150', etiqueta: [252, 104], texto: 'Rib eye' }],
  bifeangosto: [{ puntos: '305,40 425,40 425,140 305,140', etiqueta: [365, 98], texto: 'Bife angosto' }],
  picana: [{ puntos: '425,40 620,40 620,140 425,140', etiqueta: [512, 100], texto: 'Picaña' }],
  lomo: [{ puntos: '320,140 480,140 480,168 320,168', etiqueta: [400, 159], texto: 'Lomo' }],
  tira: [{ puntos: '200,150 320,150 320,212 200,212', etiqueta: [260, 186], texto: 'Tira de asado' }],
  arrachera: [{ puntos: '320,168 346,168 358,300 330,300', etiqueta: [338, 234], texto: '' }],
  vacio: [{ puntos: '346,168 480,168 492,300 358,300', etiqueta: [420, 228], texto: 'Vacío' }],
  matambre: [{ puntos: '200,212 330,212 330,300 200,300', etiqueta: [264, 240], texto: 'Matambre' }],
  chamorro: [
    { puntos: '168,270 214,270 212,318 172,318', etiqueta: [191, 298], texto: '' },
    { puntos: '500,262 548,262 544,318 506,318', etiqueta: [525, 298], texto: '' },
  ],
};

const CUERPO = 'M160,98 C190,72 250,66 320,70 C400,74 470,62 540,70 C576,74 594,100 594,140 C594,190 584,240 552,258 L520,262 C470,266 420,274 360,276 C300,278 250,272 214,268 C180,264 156,248 146,220 C136,188 136,126 160,98 Z';

/** Partes que no están en la carta: se dibujan apagadas y no se pueden elegir. */
const apagadas = [
  { puntos: '120,30 200,30 200,165 120,165', etiqueta: [172, 128], texto: 'Cogote' },
  { puntos: '120,165 200,165 200,310 120,310', etiqueta: [172, 222], texto: 'Pecho' },
  { puntos: '480,140 620,140 620,310 492,310', etiqueta: [540, 210], texto: 'Nalga' },
];

function Res({ activo, elegir }: { activo: string; elegir: (id: string) => void }) {
  const actual = cortes.find((c) => c.id === activo)!;
  return (
    <svg viewBox="0 0 640 360" className="block h-auto w-full" role="img" aria-label={`Res dibujada de perfil con sus cortes. Elegido: ${actual.nombre}`}>
      <defs><clipPath id="cuerpo"><path d={CUERPO} /></clipPath></defs>
      {/* Patas (con la zona del chamorro), cola, cabeza, cuernos y oreja */}
      <g fill="#22150e" stroke="#f8f7f3" strokeOpacity="0.7" strokeWidth="2" strokeLinejoin="round">
        <path d="M170,250 L216,250 L212,332 L200,340 L178,340 L172,332 Z" />
        <path d="M498,244 L550,244 L544,332 L534,340 L512,340 L506,332 Z" />
        <path d="M586,118 C612,140 614,190 606,238 L600,262" fill="none" />
        <path d="M152,112 L112,92 C96,86 76,92 66,106 L42,152 C36,166 44,180 58,182 L90,184 C104,184 114,176 122,164 L150,196 Z" />
        <path d="M104,92 C100,76 88,66 74,62" fill="none" />
        <path d="M118,100 C132,92 144,94 150,100" fill="none" />
      </g>
      <circle cx="84" cy="122" r="3.5" fill="#f8f7f3" fillOpacity="0.8" />
      {/* Zonas de la pata: chamorro */}
      {zonas.chamorro.map((z, i) => (
        <polygon key={`ch${i}`} points={z.puntos} className="zona" fill={activo === 'chamorro' ? '#e0af3b' : '#3a2519'} stroke="#f8f7f3" strokeOpacity="0.55" strokeDasharray="4 4" onClick={() => elegir('chamorro')} />
      ))}
      {/* Cuerpo con las zonas recortadas a su silueta */}
      <path d={CUERPO} fill="#22150e" />
      <g clipPath="url(#cuerpo)">
        {apagadas.map((z) => <polygon key={z.texto} points={z.puntos} fill="#1a0f09" stroke="#f8f7f3" strokeOpacity="0.3" strokeDasharray="4 4" />)}
        {Object.entries(zonas).filter(([id]) => id !== 'chamorro').map(([id, zs]) => zs.map((z, i) => (
          <polygon key={`${id}${i}`} points={z.puntos} className="zona" fill={activo === id ? '#e0af3b' : id === 'arrachera' ? '#4d3122' : '#3a2519'} stroke="#f8f7f3" strokeOpacity="0.55" strokeDasharray="4 4" onClick={() => elegir(id)} />
        )))}
      </g>
      <path d={CUERPO} fill="none" stroke="#f8f7f3" strokeWidth="2.5" />
      {/* Nombres */}
      <g fontFamily="Montserrat, sans-serif" fontSize="15" fontWeight="600" textAnchor="middle" pointerEvents="none">
        {Object.entries(zonas).map(([id, zs]) => zs.filter((z) => z.texto).map((z) => (
          <text key={`t${id}`} x={z.etiqueta[0]} y={z.etiqueta[1]} fill={activo === id ? '#120905' : '#f8f7f3'}>{z.texto}</text>
        )))}
      </g>
      <g fontFamily="Montserrat, sans-serif" fontSize="12" fontStyle="italic" textAnchor="middle" fill="#f8f7f3" fillOpacity="0.6" pointerEvents="none">
        {apagadas.map((z) => <text key={z.texto} x={z.etiqueta[0]} y={z.etiqueta[1]}>{z.texto}</text>)}
      </g>
      {/* Etiquetas afuera para las zonas angostas */}
      <g fontFamily="Montserrat, sans-serif" fontSize="14" fontWeight="600" fill="#f8f7f3" pointerEvents="none">
        <path d="M344,300 L344,322 L372,322" fill="none" stroke="#f8f7f3" strokeOpacity="0.6" />
        <text x="378" y="327" fill={activo === 'arrachera' ? '#e0af3b' : '#f8f7f3'}>Arrachera</text>
        <path d="M226,300 L240,330 L256,330" fill="none" stroke="#f8f7f3" strokeOpacity="0.6" />
        <text x="262" y="335" fill={activo === 'chamorro' ? '#e0af3b' : '#f8f7f3'}>Chamorro</text>
      </g>
    </svg>
  );
}

function Ficha({ c }: { c: Corte }) {
  const mensaje = `${saludo} Quiero reservar mesa. Me interesa ${c.pedido}. ¿Tienen lugar para (día, hora y personas)?`;
  return (
    <div aria-live="polite">
      <h3 className="text-[clamp(2rem,3.4vw,2.8rem)] text-oro">{c.nombre}</h3>
      <p className="mt-3 text-lg text-crema/90">{c.sale}</p>
      <h4 className="mt-6 font-sans text-sm font-semibold text-crema/75">En nuestra carta</h4>
      <ul className="mt-2 divide-y divide-crema/15 border-y border-crema/15">
        {c.platillos.map((p) => (
          <li key={p.nombre} className="min-w-0 py-3">
            <p className="flex items-baseline gap-2">
              <span className="min-w-0 font-semibold text-crema">{p.nombre}</span>
              <span className="min-w-4 flex-1 border-b border-dotted border-crema/35" aria-hidden="true" style={{ transform: 'translateY(-0.3em)' }} />
              <span className="precio shrink-0 font-bold text-oro">{p.precio}</span>
            </p>
            <p className="text-sm text-crema/75">{p.donde}</p>
          </li>
        ))}
      </ul>
      {c.parrilladas && (
        <p className="mt-4 text-crema/90"><span className="font-semibold text-crema">Viene en las parrilladas Angus:</span> {c.parrilladas.join('; ')}.</p>
      )}
      <a href={wa(mensaje)} {...externo} className="btn-celeste mt-7">{Icono.wa} Reservar y pedir este corte</a>
    </div>
  );
}

function Despiece() {
  const [id, setId] = useState('vacio');
  const c = cortes.find((x) => x.id === id)!;
  return (
    <section id="despiece" className="oscuro bg-noche py-20 text-crema/85 md:py-28">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="text-[clamp(2.6rem,5.4vw,4.4rem)] text-crema">El despiece</h2>
          <p className="mt-4 text-lg">¿Qué es un vacío? ¿De dónde sale la picaña? Toca un corte de la res y te decimos de qué parte sale, cómo lo servimos y cuánto cuesta.</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <div className="rounded-[1.5rem] border border-crema/15 bg-noche-2 p-3 sm:p-6"><Res activo={id} elegir={setId} /></div>
            <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Cortes">
              {cortes.map((x) => (
                <button key={x.id} type="button" onClick={() => setId(x.id)} aria-pressed={x.id === id}
                  className={`rounded-full border px-4 py-2 text-[0.95rem] font-semibold transition-colors ${x.id === id ? 'border-oro bg-oro text-noche' : 'border-crema/30 text-crema hover:border-crema'}`}>
                  {x.nombre}
                </button>
              ))}
            </div>
            <p className="mt-5 text-[0.9rem] text-crema/75">La ubicación de cada corte es una guía general de carnicería; las partes apagadas no están en nuestra carta. Nuestros cortes son Angus de calidad High Choice; pesos y precios de nuestra carta.</p>
          </div>
          <div className="min-w-0 lg:col-span-5"><Ficha c={c} /></div>
        </div>
      </div>
    </section>
  );
}

// ---------- La carta ----------

function Renglon({ p }: { p: Platillo }) {
  return (
    <li className="min-w-0 py-2.5">
      <p className="flex items-baseline gap-2">
        <span className="min-w-0 font-semibold text-tinta">{p.nombre}</span>
        <span className="puntos" aria-hidden="true" />
        <span className="precio shrink-0 text-right font-bold text-cuero">
          {p.precios.map((x, i) => <span key={i} className={i ? 'ml-3' : ''}>{x.etiqueta && <span className="mr-1 text-[0.85rem] font-medium text-tinta/80">{x.etiqueta}</span>}{x.valor}</span>)}
        </span>
      </p>
      {p.detalle && <p className="mt-0.5 text-[0.95rem] leading-snug">{p.detalle}</p>}
    </li>
  );
}

function Carta() {
  const [id, setId] = useState(CARTA[0].id);
  const cat = CARTA.find((c) => c.id === id)!;
  const foto = fotosCarta[cat.id];
  return (
    <section id="carta" className="bg-crema-oscura py-20 md:py-28">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-semibold text-cuero">Recetas familiares de Buenos Aires</p>
            <h2 className="mt-2 text-[clamp(2.6rem,5.4vw,4.4rem)]">Nuestra carta</h2>
          </div>
          <a href="#reservar" className="btn">{Icono.mesa} Reservar mesa</a>
        </div>
        <div role="tablist" aria-label="Partes de la carta" className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {CARTA.map((c) => (
            <button key={c.id} id={`tab-${c.id}`} role="tab" type="button" aria-selected={c.id === id} aria-controls="panel-carta" onClick={() => setId(c.id)}
              className={`shrink-0 rounded-full border px-5 py-2.5 font-semibold transition-colors ${c.id === id ? 'border-tinta bg-tinta text-crema' : 'border-tinta/25 bg-crema text-tinta hover:border-tinta'}`}>
              {c.pestana}
            </button>
          ))}
        </div>

        <div id="panel-carta" role="tabpanel" aria-labelledby={`tab-${cat.id}`} className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h3 className="text-[clamp(2rem,3.6vw,3rem)]">{cat.titulo}</h3>
              <p className="mt-3 text-lg">{cat.frase}</p>
              {foto && <div className="mt-6 aspect-[5/4] overflow-hidden rounded-[1.5rem]"><Img foto={foto} /></div>}
              {cat.id === 'parrilla' && <a href="#despiece" className="btn-linea mt-6">Ver El despiece</a>}
            </div>
          </div>
          <div className={`grid min-w-0 gap-x-10 gap-y-10 lg:col-span-8 ${cat.secciones.length > 1 ? 'md:grid-cols-2' : ''}`}>
            {cat.secciones.map((s) => (
              <div key={s.titulo} className="min-w-0">
                <h4 className="border-b-2 border-tinta pb-2 text-2xl">{s.titulo}</h4>
                {s.nota && <p className="mt-3 rounded-xl bg-crema px-4 py-3 text-[0.93rem] leading-snug">{s.nota}</p>}
                <ul className="mt-1 divide-y divide-tinta/10">{s.platillos.map((p) => <Renglon key={p.nombre + p.precios[0].valor} p={p} />)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Noches y galería ----------

function Noches() {
  return (
    <section id="noches" className="oscuro bg-noche py-20 text-crema/85 md:py-28">
      <div className="contenedor">
        <p className="font-semibold text-celeste">{noches.antetitulo}</p>
        <h2 className="mt-2 text-[clamp(2.6rem,5.4vw,4.4rem)] text-crema">{noches.titulo}</h2>
        <div className="mt-12 grid gap-12 md:grid-cols-12">
          {noches.eventos.map((e, i) => (
            <article key={e.id} className={`min-w-0 ${i === 0 ? 'md:col-span-7' : 'md:col-span-5 md:mt-24'}`}>
              <div className={`${i === 0 ? 'aspect-[4/3]' : 'aspect-[5/4]'} overflow-hidden rounded-[1.5rem]`}><Img foto={e.foto} /></div>
              <p className="mt-6 text-lg font-semibold text-oro">{e.cuando}, {e.hora}</p>
              <h3 className="mt-1 text-[clamp(2rem,3.4vw,2.8rem)] text-crema">{e.titulo}</h3>
              <p className="mt-3 max-w-lg text-lg">{e.texto}</p>
              <a href={wa(`${saludo} Quiero reservar lugar para el ${e.titulo} (${e.cuando.toLowerCase()}, ${e.hora}). Somos (personas).`)} {...externo} className="btn-celeste mt-6">{Icono.wa} Reservar lugar</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Esencia() {
  const [grande, ...resto] = galeria.fotos;
  return (
    <section className="contenedor py-20 md:py-28" aria-labelledby="titulo-esencia">
      <p className="font-semibold text-cuero">{galeria.antetitulo}</p>
      <h2 id="titulo-esencia" className="mt-2 text-[clamp(2.4rem,4.6vw,3.6rem)]">{galeria.titulo}</h2>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        <div className="col-span-2 aspect-square overflow-hidden rounded-[1.5rem] md:row-span-2"><Img foto={grande} /></div>
        {resto.map((fo) => <div key={fo.src} className="aspect-[5/4] overflow-hidden rounded-[1.25rem] md:aspect-auto"><Img foto={fo} /></div>)}
      </div>
    </section>
  );
}

// ---------- Reservar, visítanos, pie y barra del celular ----------

const HORAS = ['12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];

function Reservar() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [personas, setPersonas] = useState('2');
  const [solicitud, setSolicitud] = useState('');
  const d = negocio.direccion;

  const [a, m, dd] = fecha.split('-');
  const esDomingo = fecha ? new Date(Number(a), Number(m) - 1, Number(dd)).getDay() === 0 : false;
  const tarde = esDomingo && hora > '21:00';
  const mensaje = [
    'Hola, me gustaría realizar una reserva:',
    `Nombre: ${nombre.trim() || '(nombre)'}`,
    `Fecha: ${fecha ? `${dd}/${m}/${a}` : '(fecha)'}`,
    `Hora: ${hora || '(hora)'}`,
    `Personas: ${personas}`,
    `Solicitud especial: ${solicitud.trim() || '—'}`,
  ].join('\n');

  const enviar = (ev: FormEvent) => {
    ev.preventDefault();
    window.open(wa(mensaje), '_blank', 'noopener');
  };

  return (
    <section id="reservar" className="contenedor grid gap-12 py-20 md:grid-cols-12 md:py-28">
      <div className="min-w-0 md:col-span-6">
        <p className="font-semibold text-cuero">Tu mesa te espera</p>
        <h2 className="mt-2 text-[clamp(2.4rem,5vw,4rem)]">Reservar mesa</h2>
        <p className="mt-4 text-lg">Llena los datos y se abre WhatsApp con tu solicitud lista para enviar. Te confirmamos a la brevedad.</p>
        <form onSubmit={enviar} className="mt-8 grid gap-5 sm:grid-cols-2">
          <label className="min-w-0 sm:col-span-2">
            <span className="text-sm font-semibold">Nombre completo</span>
            <input className="campo" value={nombre} onChange={(e) => setNombre(e.target.value)} required autoComplete="name" />
          </label>
          <label className="min-w-0">
            <span className="text-sm font-semibold">Fecha</span>
            <input type="date" className="campo" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
          </label>
          <label className="min-w-0">
            <span className="text-sm font-semibold">Hora</span>
            <select className="campo" value={hora} onChange={(e) => setHora(e.target.value)} required>
              <option value="">Elige la hora</option>
              {HORAS.map((h) => <option key={h} value={h}>{h}</option>)}
            </select>
          </label>
          <label className="min-w-0">
            <span className="text-sm font-semibold">Personas</span>
            <select className="campo" value={personas} onChange={(e) => setPersonas(e.target.value)}>
              {Array.from({ length: 12 }, (_, i) => String(i + 1)).map((n) => <option key={n} value={n}>{n} {n === '1' ? 'persona' : 'personas'}</option>)}
              <option value="Más de 12">Más de 12</option>
            </select>
          </label>
          <label className="min-w-0 sm:col-span-2">
            <span className="text-sm font-semibold">Mensaje o solicitud especial (opcional)</span>
            <textarea className="campo min-h-24" value={solicitud} onChange={(e) => setSolicitud(e.target.value)} rows={3} />
          </label>
          {tarde && <p className="rounded-xl bg-crema-oscura px-4 py-3 text-[0.95rem] sm:col-span-2" role="status">Los domingos cerramos a las 10:00 pm: te sugerimos llegar antes de las 9:00 pm.</p>}
          <div className="sm:col-span-2"><button type="submit" className="btn w-full sm:w-auto">{Icono.wa} Solicitar reservación por WhatsApp</button></div>
        </form>
      </div>

      <div className="min-w-0 md:col-span-6">
        <iframe
          src={negocio.mapaEmbed}
          width="100%"
          height="320"
          style={{ border: 0, borderRadius: '1rem' }}
          allowFullScreen
          loading="lazy"
          title={`Ubicación de ${negocio.nombre}`}
          className="w-full"
        />
        <dl className="mt-8 space-y-5 text-lg">
          <div><dt className="text-sm">Dónde</dt><dd className="font-semibold">{d.lugar}, {d.calle}, {d.colonia}, {d.cp} {d.ciudad}</dd></div>
          <div><dt className="text-sm">Horario</dt><dd className="mt-1"><Horario claro /></dd></div>
          <div><dt className="text-sm">WhatsApp</dt><dd><a href={negocio.whatsapp} {...externo} className="font-semibold text-cuero underline underline-offset-4">{negocio.whatsappVisible}</a></dd></div>
          <div><dt className="text-sm">Teléfono</dt><dd><a href={negocio.tel} className="font-semibold text-cuero underline underline-offset-4">{negocio.telefono}</a></dd></div>
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={negocio.mapa} {...externo} className="btn">{Icono.mapa} Cómo llegar</a>
          <a href={negocio.whatsapp} {...externo} className="btn-linea">{Icono.wa} Escríbenos</a>
        </div>
        <p className="mt-6">
          Síguenos en <a href={negocio.instagram} {...externo} className="font-semibold text-cuero underline underline-offset-4">Instagram</a> y <a href={negocio.facebook} {...externo} className="font-semibold text-cuero underline underline-offset-4">Facebook</a>.
        </p>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro bg-noche pb-28 pt-12 text-crema/80 md:pb-12">
      <div className="contenedor flex flex-wrap items-center justify-between gap-6">
        <img src={negocio.logo.src} alt={negocio.logo.alt} width={negocio.logo.w} height={negocio.logo.h} loading="lazy" className="h-20 w-auto" />
        <div className="text-sm">
          <p>© {new Date().getFullYear()} Che Pebeta. Restaurante argentino en Pueblo Serena, Monterrey, Nuevo León.</p>
          <p className="mt-1">Venta de bebidas alcohólicas solo a mayores de 18 años. Evita el exceso.</p>
        </div>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta/15 bg-crema/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr] gap-2">
        <a href="#reservar" className="btn px-3">{Icono.mesa} Reservar</a>
        <a href={negocio.whatsapp} {...externo} className="btn-linea px-0" aria-label="Escribir a Che Pebeta por WhatsApp">{Icono.wa}</a>
        <a href={negocio.tel} className="btn-linea px-0" aria-label="Llamar a Che Pebeta">{Icono.tel}</a>
        <a href={negocio.mapa} {...externo} className="btn-linea px-0" aria-label="Cómo llegar a Che Pebeta en Google Maps">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#carta" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Ir a la carta</a>
      <Encabezado />
      <main>
        <Portada />
        <Alma />
        <Despiece />
        <Carta />
        <Noches />
        <Esencia />
        <Reservar />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
