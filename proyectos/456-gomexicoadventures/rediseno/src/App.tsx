import { useMemo, useState } from 'react';
import {
  experiencias, foto, momentos, negocio, opiniones, porQue, wa, waGeneral, type Experiencia, type Momento,
} from './data/content';

const pesos = (n: number) => `$${Math.round(n).toLocaleString('es-MX')}`;
const ASIENTOS = 15; // la trajinera privada es para hasta 15 personas

/* ---------- iconos (dibujados por nosotros) ---------- */
function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" />
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
function IconoCorreo({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function Encabezado() {
  const l = foto('logo');
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Go México Adventures, inicio"><img src={l.src} width={l.width} height={l.height} alt="" className="h-10 w-auto" /></a>
        <nav aria-label="Principal" className="hidden items-center gap-7 text-[0.95rem] font-medium lg:flex">
          <a href="#abordo" className="hover:text-canal">Experiencias</a>
          <a href="#llegar" className="hover:text-canal">Cómo llegar</a>
          <a href="#opiniones" className="hover:text-canal">Opiniones</a>
        </nav>
        <a href={waGeneral} className="btn hidden sm:inline-flex" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  const f = foto('trajinera-canal');
  return (
    <section id="inicio" className="bg-agua">
      <div className="contenedor grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        <div className="min-w-0">
          <p className="text-[0.95rem] font-medium text-canal">Reserva Ecológica Laguna del Toro, Xochimilco</p>
          <h1 className="mt-3 text-[2.4rem] leading-[1.05] sm:text-[3.3rem]">Kayak, trajinera y chinampas en los canales de Xochimilco</h1>
          <p className="mt-5 max-w-xl text-lg text-gris">
            Go México Adventures diseña y opera experiencias ecoturísticas que promueven el contacto con la naturaleza, el respeto por las comunidades locales y la conservación del patrimonio natural.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#abordo" className="btn">¿Cuántos van?</a>
            <a href={waGeneral} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> Escribir por WhatsApp</a>
          </div>
          <p className="mt-6 text-[0.95rem] text-gris">{negocio.horario}. Desde {pesos(299)} por persona.</p>
        </div>
        <figure className="min-w-0">
          <img src={f.src} width={f.width} height={f.height} fetchPriority="high"
            alt="Trajinera techada avanzando por un canal de Xochimilco entre ahuehuetes, con pasajeros a bordo"
            className="aspect-[4/3] w-full rounded-[1.75rem] object-cover" />
        </figure>
      </div>
    </section>
  );
}

/* ---------- elemento memorable: "Súbanse: ¿cuántos van?" ---------- */
const COLORES_LETRAS = ['#b8262d', '#1d5a53', '#c77c00', '#7a2f8f', '#2f6f3e'];
const ROPA = ['#d9383e', '#1d5a53', '#f2b33d', '#7a2f8f', '#409880', '#e67e22'];

function Trajinera({ n }: { n: number }) {
  const letrero = `Somos ${n}`;
  const sentados = Math.min(n, ASIENTOS);
  const x0 = 120, paso = (520 - 120) / (ASIENTOS - 1);
  return (
    <svg viewBox="0 0 640 270" className="h-auto w-full" role="img" aria-label={`Trajinera con ${sentados} de ${ASIENTOS} lugares ocupados; el arco dice “${letrero}”`}>
      {/* agua */}
      <rect x="0" y="200" width="640" height="70" fill="#cfe3dc" />
      {[214, 232, 250].map((y, i) => (
        <path key={y} d={`M${10 + i * 20} ${y} q 20 -6 40 0 t 40 0 t 40 0 M${330 + i * 30} ${y + 4} q 20 -6 40 0 t 40 0`} fill="none" stroke="#9cc6ba" strokeWidth="2" strokeLinecap="round" />
      ))}
      {/* techo y postes */}
      <path d="M78 96 Q 320 70 572 96 L 572 104 Q 320 80 78 104 Z" fill="#1d5a53" />
      {[92, 250, 400, 558].map((x) => <rect key={x} x={x - 3} y="100" width="6" height="84" fill="#7a5a36" />)}
      {/* arco pintado con el nombre, como el de las trajineras */}
      <path d="M150 64 Q 320 18 490 64 L 490 92 Q 320 52 150 92 Z" fill="#f2b33d" stroke="#b8262d" strokeWidth="3" />
      {[168, 472].map((x) => (
        <g key={x}>
          <circle cx={x} cy="76" r="7" fill="#d9383e" />
          <circle cx={x} cy="76" r="3" fill="#fff5d6" />
        </g>
      ))}
      <text x="320" y="76" textAnchor="middle" fontFamily="'Bricolage Grotesque', Arial, sans-serif" fontWeight="800" fontSize="31">
        {letrero.split('').map((c, i) => <tspan key={i} fill={COLORES_LETRAS[i % COLORES_LETRAS.length]}>{c}</tspan>)}
      </text>
      {/* banca */}
      <rect x="100" y="160" width="440" height="8" rx="3" fill="#a07445" />
      {/* personas */}
      {Array.from({ length: ASIENTOS }, (_, i) => {
        const x = x0 + i * paso;
        const lleno = i < sentados;
        return (
          <g key={i} opacity={lleno ? 1 : 0.18} style={{ transition: 'opacity .25s' }}>
            <rect x={x - 9} y="134" width="18" height="28" rx="8" fill={lleno ? ROPA[i % ROPA.length] : '#1b2623'} />
            <circle cx={x} cy="124" r="9" fill={lleno ? '#8a5a3c' : '#1b2623'} />
          </g>
        );
      })}
      {/* casco */}
      <path d="M60 168 L 580 168 L 560 202 Q 320 214 80 202 Z" fill="#d9383e" />
      <rect x="66" y="176" width="508" height="7" fill="#f2b33d" />
      <path d="M80 202 Q 320 214 560 202" fill="none" stroke="#8f1f24" strokeWidth="3" />
      {/* remador con garrocha */}
      <g>
        <line x1="600" y1="92" x2="560" y2="230" stroke="#7a5a36" strokeWidth="4" strokeLinecap="round" />
        <rect x="570" y="128" width="16" height="40" rx="7" fill="#1d5a53" />
        <circle cx="578" cy="118" r="9" fill="#8a5a3c" />
      </g>
      {n > ASIENTOS && (
        <text x="320" y="258" textAnchor="middle" fontFamily="Inter, Arial" fontSize="15" fontWeight="600" fill="#1d5a53">
          +{n - ASIENTOS} que ya no caben en una trajinera
        </text>
      )}
    </svg>
  );
}

function Tarjeta({ e, n, momento }: { e: Experiencia; n: number; momento: Momento | null }) {
  const f = foto(e.foto);
  const total = e.cobro === 'persona' ? e.precio * n : e.precio;
  const m = momentos.find((x) => x.id === momento);
  const mensaje = `Hola, somos ${n} ${n === 1 ? 'persona' : 'personas'} y nos interesa “${e.nombre}”${m ? ` ${m.nombre.toLowerCase()}` : ''}. ¿Qué fechas tienen disponibles?`;
  return (
    <li className="grid gap-4 rounded-2xl border border-tinta/10 bg-white p-4 sm:grid-cols-[10rem_1fr] sm:p-5">
      <img src={f.src} width={f.width} height={f.height} loading="lazy" alt={e.alt} className="aspect-[4/3] w-full rounded-xl object-cover sm:aspect-square" />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-canal">{e.tipo}, {e.horas}, hasta {e.maxPersonas} personas</p>
        <h3 className="mt-1 text-xl leading-snug">{e.nombre}</h3>
        <p className="mt-2 text-[0.95rem] text-gris">{e.resumen}</p>
        <p className="mt-3 text-[0.95rem]">
          {e.cobro === 'persona' ? (
            <><span className="text-2xl font-bold text-tinta">{pesos(total)}</span> en total para {n} <span className="text-gris">({pesos(e.precio)} por persona)</span></>
          ) : (
            <><span className="text-2xl font-bold text-tinta">{pesos(total)}</span> por el grupo {n > 1 && <span className="text-gris">(≈ {pesos(total / n)} por persona)</span>}
              {e.precioAntes && <span className="ml-1 text-gris line-through">{pesos(e.precioAntes)}</span>}</>
          )}
        </p>
        {e.nota && <p className="mt-1 text-sm text-gris">{e.nota}</p>}
        <details className="mt-2 text-sm">
          <summary className="cursor-pointer font-semibold text-canal">Qué incluye, horarios y edades</summary>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-gris">
            {e.incluye.map((x) => <li key={x}>{x}</li>)}
            <li>Horarios: {e.horarios}.</li>
            {e.edad && <li>Edades: {e.edad}.</li>}
          </ul>
        </details>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn px-5 py-2.5 text-sm"><IconoWa className="h-4 w-4" /> Preguntar fechas</a>
          <a href={e.url} target="_blank" rel="noopener" className="btn-linea px-5 py-2.5 text-sm">Reservar en línea</a>
        </div>
      </div>
    </li>
  );
}

function ACuantosVan() {
  const [n, setN] = useState(4);
  const [momento, setMomento] = useState<Momento | null>(null);
  const { caben, noCaben } = useMemo(() => {
    const porHora = experiencias.filter((e) => !momento || !e.momentos || e.momentos.includes(momento));
    const total = (e: Experiencia) => (e.cobro === 'persona' ? e.precio * n : e.precio);
    return {
      caben: porHora.filter((e) => e.maxPersonas >= n).sort((a, b) => total(a) - total(b)),
      noCaben: porHora.filter((e) => e.maxPersonas < n),
    };
  }, [n, momento]);
  const cambiar = (d: number) => setN((v) => Math.min(30, Math.max(1, v + d)));

  return (
    <section id="abordo" className="py-16 md:py-24" aria-labelledby="abordo-titulo">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 id="abordo-titulo" className="text-4xl sm:text-5xl">Súbanse: ¿cuántos van?</h2>
          <p className="mt-4 text-gris">
            Las trajineras de Xochimilco llevan su nombre pintado en el arco. Pinta el tuyo con el tamaño de tu grupo y mira en qué experiencias caben, cuánto sale con sus precios publicados y a qué hora se puede.
          </p>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-12">
          <div className="min-w-0 lg:sticky lg:top-24">
            <Trajinera n={n} />
            <div className="mt-6 flex items-center justify-center gap-4">
              <button type="button" onClick={() => cambiar(-1)} disabled={n <= 1} aria-label="Una persona menos"
                className="grid h-12 w-12 place-items-center rounded-full border-2 border-canal text-2xl font-bold text-canal disabled:opacity-30">−</button>
              <p className="min-w-[9rem] text-center" aria-live="polite"><span className="text-4xl font-bold">{n}</span> <span className="text-gris">{n === 1 ? 'persona' : 'personas'}</span></p>
              <button type="button" onClick={() => cambiar(1)} disabled={n >= 30} aria-label="Una persona más"
                className="grid h-12 w-12 place-items-center rounded-full border-2 border-canal text-2xl font-bold text-canal disabled:opacity-30">+</button>
            </div>
            <div className="mt-6" role="group" aria-label="¿A qué hora?">
              <p className="text-center text-sm font-semibold">¿A qué hora?</p>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                <button type="button" onClick={() => setMomento(null)} aria-pressed={momento === null}
                  className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${momento === null ? 'border-canal bg-canal text-white' : 'border-tinta/20'}`}>Cuando sea</button>
                {momentos.map((m) => (
                  <button key={m.id} type="button" onClick={() => setMomento(m.id)} aria-pressed={momento === m.id}
                    className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${momento === m.id ? 'border-canal bg-canal text-white' : 'border-tinta/20'}`}>{m.nombre}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="min-w-0" aria-live="polite">
            <p className="text-[0.95rem] text-gris">
              {caben.length === 0 ? 'Ninguna experiencia es para un grupo de ese tamaño a esa hora: escríbeles para armar algo a su medida.'
                : `${caben.length} ${caben.length === 1 ? 'experiencia' : 'experiencias'} para ${n} ${n === 1 ? 'persona' : 'personas'}, de la más económica a la más completa.`}
            </p>
            <ul className="mt-4 space-y-4">
              {caben.map((e) => <Tarjeta key={e.id} e={e} n={n} momento={momento} />)}
            </ul>
            {noCaben.length > 0 && (
              <p className="mt-5 text-sm text-gris">
                No caben en: {noCaben.map((e) => `${e.nombre} (hasta ${e.maxPersonas})`).join('; ')}.
              </p>
            )}
            <p className="mt-3 text-sm text-gris">Totales calculados con los precios que publica su sitio (por persona o por grupo, según cada experiencia). Confirma el precio y la disponibilidad al reservar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PorQue() {
  const f = foto('kayaks-atardecer');
  return (
    <section className="bg-canal py-16 text-white md:py-20" aria-labelledby="porque-titulo">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-2">
        <img src={f.src} width={f.width} height={f.height} loading="lazy"
          alt="Kayaks con remeros de chaleco naranja en la laguna al atardecer, con el cielo violeta y los árboles a contraluz"
          className="aspect-[4/3] w-full rounded-2xl object-cover" />
        <div>
          <h2 id="porque-titulo" className="text-3xl sm:text-4xl">Mucho más que una actividad, una forma de descubrir México</h2>
          <dl className="mt-6 space-y-5">
            {porQue.map((p) => (
              <div key={p.titulo}><dt className="text-lg font-semibold">{p.titulo}</dt><dd className="mt-1 text-white/85">{p.texto}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function ComoLlegar() {
  return (
    <section id="llegar" className="bg-agua py-16 md:py-24" aria-labelledby="llegar-titulo">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 id="llegar-titulo" className="text-4xl sm:text-5xl">Cómo llegar</h2>
          <dl className="mt-8 space-y-4 text-[1.02rem]">
            <div><dt className="font-semibold">Punto de encuentro</dt><dd className="text-gris">{negocio.encuentro}</dd></div>
            <div><dt className="font-semibold">Muelle</dt><dd className="text-gris">{negocio.muelle}</dd></div>
            <div><dt className="font-semibold">Estacionamiento</dt><dd className="text-gris">{negocio.estacionamiento}</dd></div>
            <div><dt className="font-semibold">Horario</dt><dd className="text-gris">{negocio.horario}</dd></div>
            <div><dt className="font-semibold">Temporada</dt><dd className="text-gris">{negocio.temporada}</dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.mapa} target="_blank" rel="noopener" className="btn-linea"><IconoPin /> Abrir en Google Maps</a>
            <a href={waGeneral} target="_blank" rel="noopener" className="btn"><IconoWa /> {negocio.telefonoVisible}</a>
          </div>
        </div>
        <figure className="min-w-0">
          <img src={foto('chinampa-carpa').src} width={foto('chinampa-carpa').width} height={foto('chinampa-carpa').height} loading="lazy"
            alt="Grupo comiendo bajo una carpa roja en el jardín de una chinampa"
            className="aspect-[4/5] w-full rounded-2xl object-cover lg:max-h-[34rem]" />
        </figure>
      </div>
    </section>
  );
}

function Opiniones() {
  return (
    <section id="opiniones" className="py-16 md:py-24" aria-labelledby="opiniones-titulo">
      <div className="contenedor">
        <h2 id="opiniones-titulo" className="text-4xl sm:text-5xl">Lo que dicen sus visitantes</h2>
        <ul className="mt-10 grid gap-8 md:grid-cols-2">
          {opiniones.map((o) => {
            const f = foto(o.foto);
            return (
              <li key={o.autor} className="flex gap-4">
                <img src={f.src} width={f.width} height={f.height} loading="lazy" alt={`Foto de ${o.autor} en kayak`} className="h-24 w-20 shrink-0 rounded-xl object-cover" />
                <div>
                  <blockquote className="text-[1.02rem] leading-relaxed">“{o.texto}”</blockquote>
                  <p className="mt-2 text-sm text-gris">{o.autor}, {o.ruta}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-sm text-gris">Opiniones publicadas en su sitio.</p>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <>
      <footer className="bg-tinta py-12 pb-24 text-white/80 lg:pb-12">
        <div className="contenedor grid gap-8 text-sm md:grid-cols-3">
          <div>
            <p className="font-titulo text-2xl font-bold text-white">Go México Adventures</p>
            <p className="mt-1">{negocio.lema}. Xochimilco, Ciudad de México.</p>
          </div>
          <div className="space-y-1.5">
            <a href={waGeneral} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-white"><IconoWa className="h-4 w-4" /> {negocio.telefonoVisible}</a>
            <a href={`mailto:${negocio.correo}`} className="flex items-center gap-2 hover:text-white"><IconoCorreo className="h-4 w-4" /> {negocio.correo}</a>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            <a href={negocio.instagram} target="_blank" rel="noopener" className="hover:text-white">Instagram</a>
            <a href={negocio.facebook} target="_blank" rel="noopener" className="hover:text-white">Facebook</a>
            <a href={negocio.tiktok} target="_blank" rel="noopener" className="hover:text-white">TikTok</a>
            <a href={negocio.youtube} target="_blank" rel="noopener" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </footer>
      <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t border-tinta/10 bg-white/95 backdrop-blur lg:hidden" aria-label="Contacto rápido">
        <a href={waGeneral} target="_blank" rel="noopener" className="flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium text-canal"><IconoWa /> WhatsApp</a>
        <a href="#abordo" className="flex flex-1 flex-col items-center gap-1 border-x border-tinta/10 py-2.5 text-xs font-medium text-canal">
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 15h18l-2 4H5Z" strokeLinejoin="round" /><path d="M6 15V9h12v6M8 9V6h8v3" /></svg>
          Experiencias
        </a>
        <a href={negocio.mapa} target="_blank" rel="noopener" className="flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium text-canal"><IconoPin /> Cómo llegar</a>
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
        <ACuantosVan />
        <PorQue />
        <ComoLlegar />
        <Opiniones />
      </main>
      <Pie />
    </>
  );
}
