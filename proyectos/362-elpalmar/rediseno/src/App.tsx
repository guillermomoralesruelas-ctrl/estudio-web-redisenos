import { useState } from 'react';
import { buscar, costa, datos, fotos, logo, menu, negocio, pesos, resenas, wa, waDomicilio, waReservar, type Foto } from './data/content';

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

const tel = `tel:${negocio.llamadasLink}`;
const externo = { target: '_blank', rel: 'noopener' } as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-oceano/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="El Palmar, inicio" className="flex items-center gap-2">
          <img src={logo} alt="" width={160} height={165} className="h-11 w-auto" />
          <span className="font-display text-2xl text-oceano">El Palmar</span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 font-semibold text-oceano md:flex">
          <a href="#costa" className="hover:text-mar">La costa</a>
          <a href="#menu" className="hover:text-mar">Menú</a>
          <a href="#resenas" className="hover:text-mar">Reseñas</a>
          <a href="#visitanos" className="hover:text-mar">Visítanos</a>
        </nav>
        <a href={waReservar} className="btn hidden !min-h-[40px] !px-4 !py-2 text-sm sm:inline-flex" {...externo}><IconoWa className="h-4 w-4" /> Reservar mesa</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro bg-oceano text-niebla">
      <div className="contenedor grid items-center gap-10 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_1fr]">
        <div className="min-w-0">
          <p className="font-semibold text-cian">{negocio.lema}</p>
          <h1 className="mt-3 text-5xl sm:text-7xl">Mariscos y sushi en Mazatlán</h1>
          <p className="mt-5 max-w-xl text-lg">
            Ceviches, aguachiles, taquiza sinaloense y rolls en la Av. Sábalo Cerritos. Abierto todos los días de 12:00 pm a 10:00 pm.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waReservar} className="btn" {...externo}><IconoWa /> Reservar mesa</a>
            <a href={waDomicilio} className="btn-claro" {...externo}>Pedir a domicilio</a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {datos.map((d) => (
              <div key={d.texto} className="min-w-0">
                <dt className="sr-only">{d.texto}</dt>
                <dd className="font-display text-4xl text-white">{d.cifra}</dd>
                <dd className="text-sm">{d.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-3">
          <Img f={fotos.torre} loading="eager" className="col-span-2 aspect-[5/4] w-full rounded-3xl object-cover" />
          <Img f={fotos.pulpo} loading="eager" className="aspect-square w-full rounded-3xl object-cover" />
          <Img f={fotos.gobernador} loading="eager" className="aspect-square w-full rounded-3xl object-cover" />
        </div>
      </div>
    </section>
  );
}

// Proyección simple (lon/lat a x/y) del Golfo de California y la costa del Pacífico, de 29° a 20.4° norte.
const K = 58;
const px = (lon: number, lat: number) => [(lon + 116) * K, (29 - lat) * K] as const;
const trazo = (puntos: [number, number][]) => puntos.map(([lon, lat], i) => `${i ? 'L' : 'M'}${px(lon, lat).map((v) => v.toFixed(1)).join(' ')}`).join(' ') + ' Z';
const BAJA: [number, number][] = [
  [-114.95, 29], [-114.3, 28.3], [-115.1, 27.85], [-114.3, 27.2], [-113.4, 26.7], [-112.6, 26.2], [-112.1, 25.3], [-112.2, 24.6],
  [-111.3, 24.2], [-110.2, 23.4], [-109.9, 22.88], [-109.45, 23.2], [-109.7, 23.7], [-110.3, 24.2], [-110.6, 24.8], [-111.1, 25.6],
  [-111.35, 26], [-111.9, 26.6], [-112.3, 27.3], [-112.9, 28], [-113.3, 29],
];
const CONTINENTE: [number, number][] = [
  [-112.3, 29], [-111.9, 28.6], [-111.1, 28], [-110.9, 27.9], [-110.2, 27.3], [-109.5, 26.7], [-109.3, 26], [-109, 25.55],
  [-108.3, 25.1], [-107.9, 24.63], [-107.2, 24], [-106.45, 23.2], [-105.75, 22.5], [-105.3, 21.5], [-105.25, 20.6], [-105.4, 20.4],
  [-104.5, 20.4], [-104.5, 29],
];
const ANCHO = 11.5 * K;
const ALTO = 8.6 * K;
const PALMAR = px(-106.4706, 23.2856);

function Costa() {
  const [sel, setSel] = useState('Mazatlán');
  const l = costa.find((x) => x.lugar === sel)!;
  const platillos = l.platillos.map(buscar);
  const nombre = (n: string) => (n.startsWith('Aguachile') ? n : `Ceviche ${n}`).replace(' (Salsa Negra)', ', salsa negra').replace(' (Salsa Roja)', ', salsa roja');
  const principal = l.lugar === 'Altata' ? 'Aguachile Altata' : nombre(platillos[0].n);
  return (
    <section id="costa" className="oscuro bg-oceano-medio py-20 text-niebla sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-6xl">La costa en un ceviche</h2>
          <p className="mt-4 text-lg">
            Siete de sus ceviches y aguachiles llevan el nombre de un lugar del Pacífico, de Loreto a San Blas. Toca un punto del mapa para ver qué
            lleva cada uno y cuánto cuesta.
          </p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div className="relative min-w-0 overflow-hidden rounded-3xl">
            <svg viewBox={`0 0 ${ANCHO} ${ALTO}`} className="h-auto w-full rounded-3xl bg-oceano" aria-hidden="true">
              <path d={trazo(BAJA)} fill="#16405f" stroke="#a9c4d6" strokeOpacity="0.35" />
              <path d={trazo(CONTINENTE)} fill="#16405f" stroke="#a9c4d6" strokeOpacity="0.35" />
              <text x={px(-114.6, 25.6)[0]} y={px(-114.6, 25.6)[1]} fill="#a9c4d6" fontSize="15" fontStyle="italic" transform={`rotate(-50 ${px(-114.6, 25.6).join(' ')})`}>Océano Pacífico</text>
              <text x={px(-111.2, 27.1)[0]} y={px(-111.2, 27.1)[1]} fill="#a9c4d6" fontSize="14" fontStyle="italic" transform={`rotate(-45 ${px(-111.2, 27.1).join(' ')})`}>Golfo de California</text>
              <circle cx={PALMAR[0]} cy={PALMAR[1]} r="9" fill="none" stroke="#f7941d" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
            {costa.map((c) => {
              const [x, y] = px(c.lon, c.lat);
              const activo = c.lugar === sel;
              // Etiquetas hacia el mar (a la izquierda en el continente); Loreto y Maviri a la derecha para que no se encimen.
              const izquierda = c.lon > -111.2 && c.lugar !== 'Maviri';
              return (
                <button
                  key={c.lugar}
                  type="button"
                  aria-pressed={activo}
                  onClick={() => setSel(c.lugar)}
                  style={{ left: `${(x / ANCHO) * 100}%`, top: `${(y / ALTO) * 100}%` }}
                  className={`absolute flex min-h-[40px] -translate-y-1/2 items-center gap-2 text-sm font-bold sm:text-base ${izquierda ? '-translate-x-full flex-row-reverse pl-2' : 'pr-2'} ${activo ? 'text-white' : 'text-niebla hover:text-white'}`}
                >
                  <span className={`block h-4 w-4 shrink-0 rounded-full border-2 ${izquierda ? 'translate-x-2' : '-translate-x-2'} ${activo ? 'border-white bg-naranja' : 'border-naranja bg-oceano'}`} />
                  <span className={`rounded-full px-2 py-0.5 ${activo ? 'bg-naranja text-oceano' : 'bg-oceano/80'}`}>{c.lugar}</span>
                </button>
              );
            })}
          </div>

          <article className="min-w-0 overflow-hidden rounded-3xl bg-arena text-texto" aria-live="polite">
            {l.foto && <Img f={l.foto} className="aspect-[5/3] w-full object-cover" />}
            <div className="p-6 sm:p-8">
              <p className="font-semibold text-mar">{l.lugar}, {l.estado}</p>
              {platillos.map((p) => (
                <div key={p.n} className="mt-3 border-b border-oceano/10 pb-4 last:border-0">
                  <h3 className="text-3xl !text-oceano sm:text-4xl">{nombre(p.n)}</h3>
                  {p.d && <p className="mt-2">{p.d}</p>}
                  <p className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                    {p.p.map(([e, v]) => (
                      <span key={e}><span className="text-sm">{e}</span> <strong className="font-display text-2xl text-oceano">{pesos(v)}</strong></span>
                    ))}
                  </p>
                </div>
              ))}
              <a href={wa(`Hola El Palmar, me interesa el ${principal}. ¿Me ayudan con mi pedido?`)} className="btn mt-4" {...externo}><IconoWa /> Pedir el {principal}</a>
              {!l.foto && <p className="mt-4 text-sm">Este platillo no tiene foto en su sitio.</p>}
            </div>
          </article>
        </div>
        <p className="mt-6 text-sm">El círculo naranja punteado marca El Palmar, en Mazatlán. Ubicaciones aproximadas.</p>
      </div>
    </section>
  );
}

const fotoCategoria: Record<string, Foto | undefined> = {
  entradas: fotos.campechana, seafood: fotos.aguachile, caliente: fotos.gobernador, appetizers: fotos.yu,
  rice: fotos.yakimeshi, sushi: fotos.rainbow, drinks: fotos.margarita,
};

function Menu() {
  const [id, setId] = useState(menu[0].id);
  const c = menu.find((x) => x.id === id)!;
  const foto = fotoCategoria[c.id];
  return (
    <section id="menu" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="grid gap-4 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl sm:text-6xl">El menú</h2>
          <p className="text-lg">Todo su menú, con precios en pesos. Elige una categoría.</p>
        </div>
        <div role="tablist" aria-label="Categorías del menú" className="mt-8 flex flex-wrap gap-2">
          {menu.map((m) => (
            <button
              key={m.id}
              type="button"
              role="tab"
              id={`tab-${m.id}`}
              aria-selected={m.id === id}
              aria-controls="panel-menu"
              onClick={() => setId(m.id)}
              className={`min-h-[44px] rounded-full border-2 px-4 font-semibold transition-colors ${m.id === id ? 'border-oceano bg-oceano text-white' : 'border-oceano/20 text-oceano hover:border-oceano'}`}
            >
              {m.titulo}
            </button>
          ))}
        </div>
        <div id="panel-menu" role="tabpanel" aria-labelledby={`tab-${c.id}`} className="mt-10 grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div className="min-w-0">
            {foto ? <Img f={foto} className="aspect-[5/4] w-full rounded-3xl object-cover lg:sticky lg:top-24" /> : <p className="font-display text-3xl text-oceano">{c.titulo}</p>}
          </div>
          <div className="min-w-0 space-y-10">
            {c.secciones.map((s, i) => (
              <div key={`${s.titulo}-${i}`}>
                {s.titulo && <h3 className="text-3xl">{s.titulo}</h3>}
                {s.nota && <p className="mt-1 text-sm">{s.nota}</p>}
                <ul className="mt-3 divide-y divide-oceano/10 border-y border-oceano/10">
                  {s.platillos.map((p) => (
                    <li key={p.n} className="py-3">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <span className="font-semibold text-oceano">{p.n}</span>
                        <span className="flex flex-wrap gap-x-4 text-right">
                          {p.p.map(([e, v]) => (
                            <span key={e || 'u'}>{e && <span className="text-sm">{e} </span>}<strong className="text-naranja-hondo">{pesos(v)}</strong></span>
                          ))}
                        </span>
                      </div>
                      {p.d && <p className="mt-1 text-[0.95rem]">{p.d}</p>}
                      {p.incluye && <p className="mt-1 text-[0.95rem]">Incluye: {p.incluye.join(', ')}.</p>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Resenas() {
  return (
    <section id="resenas" className="bg-white py-20 sm:py-24">
      <div className="contenedor">
        <h2 className="max-w-2xl text-4xl sm:text-6xl">Lo que dicen en Google Maps</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {resenas.map((r) => (
            <figure key={r.nombre} className="min-w-0 border-t-4 border-cian pt-5">
              <blockquote className="text-lg">"{r.texto}"</blockquote>
              <figcaption className="mt-3 font-semibold text-oceano">{r.nombre}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-sm">Reseñas publicadas en su sitio, tomadas de Google Maps. Calificación de 4.8.</p>
      </div>
    </section>
  );
}

function Visitanos() {
  return (
    <section id="visitanos" className="py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative min-w-0 overflow-hidden rounded-3xl bg-oceano-medio">
          <a href={negocio.mapa} className="enlace absolute inset-0 flex items-center justify-center p-6 text-center" {...externo}>Ver El Palmar en Google Maps</a>
        <iframe
          src={negocio.mapaEmbed}
          width="100%"
          height="360"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de El Palmar en Google Maps"
          className="relative block w-full"
        />
        </div>
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-6xl">Ven a donde termina la tierra</h2>
          <p className="mt-4 text-lg">{negocio.direccion}.</p>
          <p className="mt-2 text-lg">{negocio.horario}.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={negocio.mapa} className="btn" {...externo}><IconoPin /> Cómo llegar</a>
            <a href={tel} className="btn-linea"><IconoTel /> {negocio.llamadas}</a>
          </div>
          <p className="mt-6">
            WhatsApp y teléfono <a href={waReservar} className="enlace" {...externo}>{negocio.whatsappTexto}</a>; el {negocio.llamadas} es solo para llamadas.
          </p>
          <p className="mt-6 font-semibold text-oceano">Pide a domicilio</p>
          <p className="mt-2 flex flex-wrap gap-5">
            <a href={waDomicilio} className="enlace" {...externo}>Por WhatsApp</a>
            <a href={negocio.rappi} className="enlace" {...externo}>Rappi</a>
            <a href={negocio.didi} className="enlace" {...externo}>DiDi Food</a>
          </p>
          <p className="mt-6 flex flex-wrap gap-5">
            <a href={negocio.instagram} className="enlace" {...externo}>Instagram</a>
            <a href={negocio.facebook} className="enlace" {...externo}>Facebook</a>
          </p>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro bg-oceano pb-28 pt-10 text-sm text-niebla md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4">
        <p className="font-display text-2xl text-white">El Palmar Mariscos + Sushi</p>
        <p>{negocio.lema}. Mazatlán, Sinaloa.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-oceano text-[0.8rem] font-semibold text-white md:hidden">
      <a href={waReservar} className="flex flex-col items-center gap-1 bg-naranja py-3 text-oceano" {...externo}><IconoWa />WhatsApp</a>
      <a href={tel} className="flex flex-col items-center gap-1 py-3"><IconoTel />Llamar</a>
      <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-3" {...externo}><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Costa />
        <Menu />
        <Resenas />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
