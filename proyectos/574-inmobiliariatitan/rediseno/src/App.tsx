import { useMemo, useRef, useState } from 'react';
import { agentes, foto, grupos, negocio, propiedades, wa, waGeneral, type Propiedad } from './data/content';

const pesos = (n: number) => `$${Math.round(n).toLocaleString('es-MX')}`;
const m2 = (n: number) => `${n.toLocaleString('es-MX', { maximumFractionDigits: 2 })} m²`;
const porM2 = (p: Propiedad) => p.precio / p.m2;
const mediana = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

/* ---------- iconos (dibujados por nosotros) ---------- */
function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 3h3l1.5 4.5-2 1.3a12 12 0 0 0 7.7 7.7l1.3-2L21 16v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
    </svg>
  );
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

function Encabezado() {
  const l = foto('logo');
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Inmobiliaria Titán, inicio"><img src={l.src} width={l.width} height={l.height} alt="" className="h-10 w-auto" /></a>
        <nav aria-label="Principal" className="hidden items-center gap-7 text-[0.95rem] font-medium lg:flex">
          <a href="#termometro" className="hover:text-azul">Propiedades</a>
          <a href="#equipo" className="hover:text-azul">Equipo</a>
          <a href="#contacto" className="hover:text-azul">Contacto</a>
        </nav>
        <a href={`tel:+52${negocio.telefono}`} className="btn hidden sm:inline-flex"><IconoTel /> {negocio.telefonoVisible}</a>
      </div>
    </header>
  );
}

function Portada() {
  const f = foto('p-cumbres');
  const venta = propiedades.filter((p) => p.accion === 'venta').length;
  const renta = propiedades.length - venta;
  return (
    <section id="inicio" className="bg-niebla">
      <div className="contenedor grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div className="min-w-0">
          <p className="text-[0.95rem] font-semibold text-rojohondo">León, Guanajuato</p>
          <h1 className="mt-3 text-[2.35rem] leading-[1.08] sm:text-5xl">Casas, departamentos, terrenos, locales y bodegas en venta y renta en León</h1>
          <p className="mt-5 max-w-xl text-lg text-gris">
            El equipo de Inmobiliaria Titán te acompaña a encontrar tu propiedad y a agendar una visita privada.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#termometro" className="btn">Ver propiedades</a>
            <a href={waGeneral} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> Escribir por WhatsApp</a>
          </div>
          <dl className="mt-8 grid max-w-md grid-cols-2 gap-4 border-t border-tinta/15 pt-6">
            <div><dt className="text-sm text-gris">En venta, con precio y m²</dt><dd className="font-titulo text-3xl font-extrabold">{venta}</dd></div>
            <div><dt className="text-sm text-gris">En renta, con precio y m²</dt><dd className="font-titulo text-3xl font-extrabold">{renta}</dd></div>
          </dl>
        </div>
        <figure className="min-w-0">
          <img src={f.src} width={f.width} height={f.height} fetchPriority="high"
            alt="Casa de dos plantas en Cumbres del Campestre, con fachada blanca, jardín al frente y pinos"
            className="aspect-[16/10] w-full rounded-2xl object-cover" />
        </figure>
      </div>
    </section>
  );
}

/* ---------- elemento memorable: "El termómetro del metro cuadrado" ---------- */
const ANCHO = 800, R = 12, IZQ = 34, DER = 766;

function colocar(lista: Propiedad[], x: (p: Propiedad) => number) {
  // Enjambre sencillo: cada punto baja o sube una fila si choca con otro.
  const filas: number[][] = [];
  const pos = new Map<number, { x: number; fila: number }>();
  for (const p of [...lista].sort((a, b) => porM2(a) - porM2(b))) {
    const px = x(p);
    let f = 0;
    while ((filas[f] ?? []).some((q) => Math.abs(q - px) < R * 2 + 2)) f++;
    (filas[f] ??= []).push(px);
    pos.set(p.id, { x: px, fila: f });
  }
  return { pos, filas: filas.length };
}

function Ficha({ p, med, grupoNombre, accion }: { p: Propiedad; med: number; grupoNombre: string; accion: string }) {
  const f = p.foto ? foto(p.foto) : null;
  const dif = (porM2(p) / med - 1) * 100;
  const mensaje = `Hola, me interesa la propiedad “${p.titulo}” (${p.url}). ¿Sigue disponible? Quisiera agendar una visita.`;
  return (
    <article className="rounded-2xl border border-tinta/10 bg-white p-5 shadow-sm" aria-live="polite">
      {f && <img src={f.src} width={f.width} height={f.height} loading="lazy" alt={`Foto de ${p.titulo}`} className="mb-4 aspect-[16/10] w-full rounded-xl object-cover" />}
      <p className="text-sm font-semibold text-rojohondo">{p.tipo} en {p.accion}{p.exclusiva ? ', en exclusiva' : ''}</p>
      <h3 className="mt-1 text-xl leading-snug">{p.titulo}</h3>
      <p className="mt-1 text-sm text-gris">{[p.zona, p.ciudad].filter(Boolean).join(', ')}</p>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div><dt className="text-gris">Precio publicado</dt><dd className="text-lg font-bold">{pesos(p.precio)}</dd></div>
        <div><dt className="text-gris">Superficie</dt><dd className="text-lg font-bold">{m2(p.m2)}</dd></div>
        <div><dt className="text-gris">Precio por m²</dt><dd className="text-lg font-bold">{pesos(porM2(p))}</dd></div>
        <div>
          <dt className="text-gris">Frente a la mediana</dt>
          <dd className={`text-lg font-bold ${dif <= 0 ? 'text-azul' : 'text-rojohondo'}`}>
            {Math.abs(dif) < 1 ? 'En la mediana' : `${Math.round(Math.abs(dif))}% ${dif < 0 ? 'abajo' : 'arriba'}`}
          </dd>
        </div>
        {(p.rec || p.banos) && <div className="col-span-2 text-gris">{[p.rec && `${p.rec} recámaras`, p.banos && `${p.banos} baños`].filter(Boolean).join(', ')}</div>}
      </dl>
      <p className="mt-2 text-xs text-gris">Mediana de {grupoNombre.toLowerCase()} en {accion} de su inventario: {pesos(med)} por m².</p>
      {p.caracteristicas.length > 0 && (
        <p className="mt-3 text-sm"><span className="font-semibold">Cerca o incluye:</span> {p.caracteristicas.slice(0, 8).join(', ')}.</p>
      )}
      <div className="mt-5 flex flex-wrap gap-3">
        <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn px-4 py-2.5 text-sm"><IconoWa className="h-4 w-4" /> Agendar visita</a>
        <a href={p.url} target="_blank" rel="noopener" className="btn-linea px-4 py-2.5 text-sm">Ver la ficha completa</a>
      </div>
    </article>
  );
}

function Termometro() {
  const [g, setG] = useState(0);
  const grupo = grupos[g];
  const lista = useMemo(() => propiedades.filter((p) => p.accion === grupo.accion && p.tipo === grupo.tipo), [grupo]);
  const med = useMemo(() => mediana(lista.map(porM2)), [lista]);
  const [sel, setSel] = useState<number | null>(null);
  const elegida = lista.find((p) => p.id === sel) ?? [...lista].sort((a, b) => porM2(a) - porM2(b))[0];
  const panel = useRef<HTMLDivElement>(null);

  const min = Math.min(...lista.map(porM2)), max = Math.max(...lista.map(porM2));
  const x = (p: Propiedad) => IZQ + ((porM2(p) - min) / (max - min || 1)) * (DER - IZQ);
  const { pos, filas } = colocar(lista, x);
  const alto = 84 + filas * (R * 2 + 3) + 44;
  const xMed = IZQ + ((med - min) / (max - min || 1)) * (DER - IZQ);
  const ticks = [min, max];

  const elegir = (id: number) => {
    setSel(id);
    if (window.matchMedia('(max-width: 1023px)').matches) requestAnimationFrame(() => panel.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  return (
    <section id="termometro" className="py-16 md:py-24" aria-labelledby="termometro-titulo">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 id="termometro-titulo" className="text-4xl sm:text-5xl">El termómetro del metro cuadrado</h2>
          <p className="mt-4 text-gris">
            Cada punto es una propiedad de su inventario, acomodada según lo que cuesta cada metro cuadrado. La línea roja es la mediana de su mismo tipo: a la izquierda, lo que sale más barato por metro; a la derecha, lo que sale más caro. Toca un punto para ver su ficha.
          </p>
        </div>
        <div role="group" aria-label="Tipo de propiedad" className="mt-8 flex flex-wrap gap-2">
          {grupos.map((gr, i) => (
            <button key={`${gr.accion}-${gr.tipo}`} type="button" onClick={() => { setG(i); setSel(null); }} aria-pressed={g === i}
              className={`rounded-lg border px-3.5 py-2 text-sm font-semibold ${g === i ? 'border-azul bg-azul text-white' : 'border-tinta/20 hover:border-azul'}`}>
              {gr.nombre} en {gr.accion}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div className="min-w-0">
            <p className="text-sm text-gris">{lista.length} propiedades. Mediana: <span className="font-semibold text-tinta">{pesos(med)} por m²</span>{grupo.accion === 'renta' ? ' (precio de renta publicado entre m²)' : ''}.</p>
            <svg viewBox={`0 0 ${ANCHO} ${alto}`} className="mt-3 h-auto w-full rounded-xl bg-niebla" aria-hidden="true">
              <line x1={IZQ} x2={DER} y1={alto - 34} y2={alto - 34} stroke="#56606b" strokeWidth="1" />
              {ticks.map((t) => {
                const tx = IZQ + ((t - min) / (max - min || 1)) * (DER - IZQ);
                return (
                  <g key={t}>
                    <line x1={tx} x2={tx} y1={alto - 38} y2={alto - 30} stroke="#56606b" />
                    <text x={tx} y={alto - 8} textAnchor={t === min ? 'start' : 'end'} fontSize="24" fill="#56606b">{pesos(t)}/m²</text>
                  </g>
                );
              })}
              <line x1={xMed} x2={xMed} y1="34" y2={alto - 34} stroke="#d2141e" strokeWidth="2" strokeDasharray="6 5" />
              <text x={xMed} y="24" textAnchor={xMed > ANCHO - 170 ? 'end' : xMed < 170 ? 'start' : 'middle'} fontSize="24" fontWeight="700" fill="#b0111a">mediana {pesos(med)}</text>
              {lista.map((p) => {
                const q = pos.get(p.id)!;
                const cy = alto - 34 - 20 - q.fila * (R * 2 + 3);
                const esSel = elegida?.id === p.id;
                const abajo = porM2(p) <= med;
                return (
                  <circle key={p.id} cx={q.x} cy={cy} r={esSel ? R + 3 : R}
                    fill={abajo ? '#145082' : '#ffffff'} stroke={esSel ? '#d2141e' : abajo ? '#145082' : '#56606b'} strokeWidth={esSel ? 3.5 : 2}
                    className="cursor-pointer" onClick={() => elegir(p.id)} />
                );
              })}
            </svg>
            <div className="mt-3 flex flex-wrap gap-5 text-sm text-gris">
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-azul" aria-hidden="true" /> En o debajo de la mediana</span>
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full border-2 border-gris bg-white" aria-hidden="true" /> Arriba de la mediana</span>
            </div>
            <details className="mt-6">
              <summary className="cursor-pointer font-semibold text-azul">Ver la lista de más barato a más caro por m²</summary>
              <ol className="mt-3 divide-y divide-tinta/10 rounded-xl border border-tinta/10">
                {[...lista].sort((a, b) => porM2(a) - porM2(b)).map((p) => (
                  <li key={p.id}>
                    <button type="button" onClick={() => elegir(p.id)} aria-pressed={elegida?.id === p.id}
                      className={`flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left text-sm hover:bg-niebla ${elegida?.id === p.id ? 'bg-niebla font-semibold' : ''}`}>
                      <span className="min-w-0 truncate">{p.titulo}</span>
                      <span className="shrink-0 text-gris">{pesos(porM2(p))}/m²</span>
                    </button>
                  </li>
                ))}
              </ol>
            </details>
          </div>
          <div ref={panel} className="min-w-0 scroll-mt-24 lg:sticky lg:top-24">
            {elegida && <Ficha p={elegida} med={med} grupoNombre={grupo.nombre} accion={grupo.accion} />}
          </div>
        </div>
        <p className="mt-8 text-sm text-gris">
          Precios y superficies tal como los publica su sitio; la superficie puede ser de terreno o de construcción según la ficha. ¿Buscas otra cosa?{' '}
          <a href="https://inmobiliariatitan.com/tipos/venta/" target="_blank" rel="noopener" className="font-semibold text-azul underline underline-offset-4">Todo su inventario</a> está en su sitio.
        </p>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section id="equipo" className="bg-niebla py-16 md:py-24" aria-labelledby="equipo-titulo">
      <div className="contenedor">
        <h2 id="equipo-titulo" className="text-4xl sm:text-5xl">Programa tu visita</h2>
        <p className="mt-4 max-w-2xl text-gris">El equipo de agentes de Inmobiliaria Titán. Llámanos o escríbenos para agendar una visita privada.</p>
        <ul className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {agentes.map((a) => {
            const f = foto(a.foto);
            return (
              <li key={a.nombre} className="text-center">
                <img src={f.src} width={f.width} height={f.height} loading="lazy" alt={`Retrato de ${a.nombre}`} className="mx-auto aspect-square w-full max-w-[12rem] rounded-full bg-white object-cover" />
                <p className="mt-3 font-titulo text-lg font-bold">{a.nombre}</p>
                <p className="text-sm text-gris">Agente inmobiliario</p>
              </li>
            );
          })}
        </ul>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={`tel:+52${negocio.telefono}`} className="btn"><IconoTel /> Llamar al {negocio.telefonoVisible}</a>
          <a href={waGeneral} target="_blank" rel="noopener" className="btn-linea"><IconoWa /> WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-16 md:py-24" aria-labelledby="contacto-titulo">
      <div className="contenedor grid gap-10 md:grid-cols-2">
        <div>
          <h2 id="contacto-titulo" className="text-4xl sm:text-5xl">Contacto</h2>
          <ul className="mt-6 space-y-3 text-[1.02rem]">
            <li><a href={`tel:+52${negocio.telefono}`} className="flex items-center gap-3 hover:text-azul"><IconoTel className="h-5 w-5 text-azul" /> {negocio.telefonoVisible}</a></li>
            <li><a href={`mailto:${negocio.correo}`} className="flex items-center gap-3 break-all hover:text-azul">
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-azul" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
              {negocio.correo}</a></li>
            <li><a href={negocio.mapa} target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-azul"><IconoPin className="h-5 w-5 text-azul" /> {negocio.ciudad}</a></li>
          </ul>
          <p className="mt-6 flex flex-wrap gap-5">
            <a href={negocio.facebook} target="_blank" rel="noopener" className="font-semibold text-azul hover:underline">Facebook</a>
            <a href={negocio.youtube} target="_blank" rel="noopener" className="font-semibold text-azul hover:underline">YouTube</a>
            <a href={negocio.linkedin} target="_blank" rel="noopener" className="font-semibold text-azul hover:underline">LinkedIn</a>
          </p>
        </div>
        <div>
          <h3 className="text-2xl">Horario</h3>
          <dl className="mt-4 space-y-2">
            {negocio.horario.map((h) => (
              <div key={h.dias} className="flex justify-between border-b border-tinta/10 pb-2"><dt>{h.dias}</dt><dd className="text-gris">{h.horas}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <>
      <footer className="bg-azulhondo py-10 pb-24 text-sm text-white/80 lg:pb-10">
        <div className="contenedor flex flex-col gap-3 sm:flex-row sm:justify-between">
          <p className="font-titulo text-xl font-extrabold text-white">Inmobiliaria Titán</p>
          <p>{negocio.ciudad}. {negocio.telefonoVisible}</p>
        </div>
      </footer>
      <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t border-tinta/10 bg-white/95 backdrop-blur lg:hidden" aria-label="Contacto rápido">
        <a href={waGeneral} target="_blank" rel="noopener" className="flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium text-azul"><IconoWa /> WhatsApp</a>
        <a href={`tel:+52${negocio.telefono}`} className="flex flex-1 flex-col items-center gap-1 border-x border-tinta/10 py-2.5 text-xs font-medium text-azul"><IconoTel /> Llamar</a>
        <a href={negocio.mapa} target="_blank" rel="noopener" className="flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium text-azul"><IconoPin /> Cómo llegar</a>
      </nav>
    </>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Termometro />
        <Equipo />
        <Contacto />
      </main>
      <Pie />
    </>
  );
}
