import { useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, lema, manifiesto, loReal, colecciones, preguntas, testimonios, galeria } from './data/content';
import type { Coleccion } from './data/content';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const src = (n: string) => `${base}${n}.webp`;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
type Anio = '2026' | '2027';

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1600, 1067];
  return <img src={src(n)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

function Firma({ color = 'blanca', className = '' }: { color?: 'blanca' | 'tinta'; className?: string }) {
  const [w, h] = fotos.firma;
  return <img src={`${base}firma-${color}.png`} alt="Eduardo Dávalos" width={w} height={h} className={className} />;
}

function Encabezado() {
  const enlaces = [['#trabajo', 'Trabajo'], ['#colecciones', 'Colecciones'], ['#preguntas', 'Preguntas'], ['#fecha', 'Contacto']];
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-hueso">
      <div className="contenedor flex h-20 items-center justify-between gap-4">
        <a href="#inicio"><Firma className="h-10 w-auto sm:h-12" /></a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium tracking-wide">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-vela">{t}</a></li>)}</ul>
        </nav>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-noche text-hueso">
      <Foto n="boda-01" alt="Los novios bailan en la pista bajo una lluvia de confeti" eager className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_40%]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-noche via-noche/40 to-noche/30" />
      <div className="contenedor pb-16 pt-32 sm:pb-24">
        <p className="text-sm font-medium tracking-[0.2em] text-vela uppercase">{negocio.oficio}</p>
        <h1 className="mt-5 max-w-4xl text-5xl sm:text-7xl lg:text-8xl"><em className="not-italic">{lema.replace(/\.$/, '')}</em></h1>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#fecha" className="btn-vela">¿Tienen fecha? Consultar disponibilidad</a>
          <a href="#colecciones" className="btn-linea hover:bg-white/10">Ver colecciones 2026 y 2027</a>
        </div>
      </div>
    </section>
  );
}

function Manifiesto() {
  return (
    <section className="py-20 sm:py-28">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-2 font-display text-3xl leading-snug sm:text-5xl">
          {manifiesto.map((l, i) => <p key={l} className={i % 2 ? 'italic text-cobre' : ''}>{l}</p>)}
        </div>
        <div className="space-y-5 text-lg text-gris">
          <p>Fotografiamos lo que realmente pasa, no lo que "debería verse". Porque lo que permanece no se puede posar: {loReal.join(', ')}.</p>
          <p>Las modas cambian. Lo real, no.</p>
          <p className="text-base">La fotografía es el eje principal del trabajo; el video se ofrece como complemento, con la misma línea estética del reportaje del día.</p>
        </div>
      </div>
    </section>
  );
}

function Trabajo() {
  const [todas, setTodas] = useState(false);
  return (
    <section id="trabajo" className="bg-noche py-20 text-hueso sm:py-28">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-4xl sm:text-6xl">Nuestro trabajo</h2>
          <a href={negocio.instagram} className="text-sm font-medium text-vela underline-offset-4 hover:underline">Más en Instagram {negocio.instagramVer}</a>
        </div>
        <ul className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
          {galeria.map((g, i) => (
            <li key={g.n} className={`${!todas && i >= 5 ? 'max-sm:hidden ' : ''}break-inside-avoid overflow-hidden`}>
              <Foto n={g.n} alt={g.alt} className="w-full transition-transform duration-700 hover:scale-[1.02]" />
            </li>
          ))}
        </ul>
        {!todas && <button type="button" onClick={() => setTodas(true)} className="btn-linea mt-2 w-full text-hueso sm:hidden">Ver las {galeria.length} fotos</button>}
      </div>
    </section>
  );
}

// Elemento memorable: el día de la boda en una regla de 12 horas; cada colección ocupa las horas que cubre.
function Colecciones() {
  const [anio, setAnio] = useState<Anio>('2026');
  const [sel, setSel] = useState('completa');
  const [video, setVideo] = useState(true);
  const c = colecciones.find((x) => x.id === sel)!;
  const precio = (x: Coleccion) => {
    if (x.soloFoto && !video) return x.soloFoto[anio];
    if (x.masVideo && video) return x.precio[anio] + x.masVideo[anio];
    return x.precio[anio];
  };
  const conVideo = (x: Coleccion) => x.id === 'total' || (video && (x.id === 'completa' || !!x.masVideo));
  const etiquetaVideo = c.soloFoto ? 'Con video (si no, solo fotografía)' : c.masVideo ? `Añadir video: reel y highlight (+${pesos(c.masVideo[anio])})` : 'El video ya está incluido';
  return (
    <section id="colecciones" className="py-20 sm:py-28">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cobre">Colecciones de boda</p>
            <h2 className="mt-3 max-w-2xl text-4xl sm:text-6xl">¿Cuántas horas de su día quieren guardar?</h2>
          </div>
          <div className="flex rounded-full border border-tinta/20 p-1" role="group" aria-label="Año de la boda">
            {(['2026', '2027'] as Anio[]).map((a) => (
              <button key={a} type="button" aria-pressed={anio === a} onClick={() => setAnio(a)} className={`rounded-full px-5 py-2 text-sm font-semibold ${anio === a ? 'bg-noche text-hueso' : 'hover:bg-black/5'}`}>Boda en {a}</button>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div>
            <div className="grid grid-cols-[6.5rem_1fr] items-end gap-3 text-xs sm:grid-cols-[8rem_1fr] sm:gap-4 text-gris">
              <span />
              <div className="relative h-6">
                {[0, 2, 4, 6, 8, 10, 12].map((h) => <span key={h} className={`absolute whitespace-nowrap ${h === 0 ? '' : h === 12 ? '-translate-x-full' : '-translate-x-1/2'} ${h % 4 ? 'max-sm:hidden' : ''}`} style={{ left: `${(h / 12) * 100}%` }}>{h === 0 ? '0 h' : `${h} h`}</span>)}
              </div>
            </div>
            <ul className="mt-2 space-y-3" role="radiogroup" aria-label="Colección">
              {colecciones.map((x) => {
                const activa = x.id === sel;
                return (
                  <li key={x.id} className="grid grid-cols-[6.5rem_1fr] items-center gap-3 sm:grid-cols-[8rem_1fr] sm:gap-4">
                    <span className="leading-tight"><span className="block font-display text-xl">{x.nombre}</span><span className="text-sm font-semibold text-cobre">{pesos(precio(x))}</span></span>
                    <button type="button" role="radio" aria-checked={activa} onClick={() => setSel(x.id)} className="relative h-14 rounded-sm bg-tinta/[0.06] text-left">
                      <span className={`absolute inset-y-0 left-0 flex items-center rounded-sm px-3 text-sm font-semibold sm:px-4 transition-colors ${activa ? 'bg-noche text-hueso' : 'bg-tinta/15 hover:bg-tinta/25'}`} style={{ width: `${(x.horas / 12) * 100}%` }}>
                        <span className="whitespace-nowrap">{x.horas} h</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-8 bg-papel p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr]" aria-live="polite">
          <div>
            <h3 className="text-4xl">Colección {c.nombre}</h3>
            <p className="mt-2 text-gris">{c.horas} horas continuas · {c.equipo}</p>
            <p className="mt-5">{c.cubre}</p>
            <ul className="mt-6 space-y-2">
              <li className="flex gap-3"><span aria-hidden className="text-cobre">—</span>{c.fotos} fotografías editadas en alta resolución y para web, listas para descargar y compartir</li>
              {c.extras.filter((e) => conVideo(c) || !/[Vv]ideo/.test(e)).map((e) => <li key={e} className="flex gap-3"><span aria-hidden className="text-cobre">—</span>{e}</li>)}
              {c.masVideo && video && <li className="flex gap-3"><span aria-hidden className="text-cobre">—</span>Video: reel y highlight</li>}
            </ul>
            {c.nota && <p className="mt-5 text-sm text-gris">{c.nota}</p>}
          </div>
          <div className="flex flex-col justify-between gap-6 border-t border-tinta/15 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div>
              <p className="text-sm text-gris">Inversión para una boda en {anio}</p>
              <p className="mt-1 font-display text-6xl">{pesos(precio(c))} <span className="font-sans text-base font-semibold">MXN</span></p>
              <label className={`mt-6 flex items-start gap-3 ${c.id === 'total' ? 'opacity-60' : 'cursor-pointer'}`}>
                <input type="checkbox" checked={c.id === 'total' ? true : video} disabled={c.id === 'total'} onChange={(e) => setVideo(e.target.checked)} className="mt-1 size-5 accent-[#12100E]" />
                <span>{etiquetaVideo}</span>
              </label>
            </div>
            <a href={wa(`Hola, Eduardo. Nos interesa la Colección ${c.nombre} (${c.horas} h${conVideo(c) ? ', con video' : ', solo fotografía'}) para una boda en ${anio}. ¿Tienen disponible nuestra fecha?`)} className="btn-noche">Preguntar por esta colección</a>
          </div>
        </div>
        <p className="mt-4 text-sm text-gris">Precios publicados en su sitio para 2026 y 2027. Todo se formaliza con contrato; fuera de Guadalajara se consideran viáticos.</p>
      </div>
    </section>
  );
}

function Historias() {
  return (
    <section className="relative isolate overflow-hidden bg-noche py-20 text-hueso sm:py-28">
      <Foto n="boda-10" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
      <div className="contenedor">
        <h2 className="max-w-2xl text-4xl sm:text-6xl">Historias de quienes ya lo vivieron</h2>
        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonios.map((t) => (
            <li key={t.a}>
              <blockquote className="font-display text-2xl italic leading-snug">“{t.t}”</blockquote>
              <p className="mt-3 text-sm font-semibold text-vela">{t.a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="py-20 sm:py-28">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <h2 className="text-4xl sm:text-6xl">Preguntas frecuentes</h2>
          <Foto n="boda-07" alt="Los novios de la mano frente a un muro de madera y dos vasijas grandes" className="mt-8 hidden w-full lg:block" />
        </div>
        <div className="divide-y divide-tinta/15 border-y border-tinta/15">
          {preguntas.map((q) => (
            <details key={q.p} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-2xl">
                {q.p}<span aria-hidden className="mt-1 font-sans text-xl text-cobre transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-gris">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fecha() {
  return (
    <section id="fecha" className="relative isolate overflow-hidden bg-noche text-hueso">
      <Foto n="boda-03" alt="La novia con su vestido extendido bajo una lluvia de confeti en un jardín iluminado" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45" />
      <div className="contenedor py-24 sm:py-32">
        <h2 className="max-w-3xl text-5xl sm:text-7xl">¿Tienen fecha en mente?</h2>
        <p className="mt-6 max-w-xl text-lg text-hueso/85">Si ya tienen fecha o están empezando a planear, será un gusto conocer más sobre su boda. Compártanme su nombre y la fecha del evento para ver disponibilidad.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={wa('Hola, Eduardo. Nos casamos el [fecha] en [lugar]. ¿Tienen disponible?')} className="btn-vela">WhatsApp {negocio.whatsappVer}</a>
          <a href={negocio.instagram} className="btn-linea hover:bg-white/10">Instagram</a>
          <a href={negocio.facebook} className="btn-linea hover:bg-white/10">Facebook</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#trabajo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <Manifiesto />
        <Trabajo />
        <Colecciones />
        <Historias />
        <Preguntas />
        <Fecha />
      </main>
      <footer className="bg-noche pb-24 pt-10 text-sm text-hueso/70 md:pb-10">
        <div className="contenedor flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <Firma className="h-9 w-auto" />
          <p>{negocio.oficio} · WhatsApp {negocio.whatsappVer}</p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-noche p-3 md:hidden">
        <a href="#colecciones" className="btn-linea py-3 text-hueso">Colecciones</a>
        <a href={wa('Hola, Eduardo. Quisiera consultar disponibilidad para nuestra boda.')} className="btn-vela py-3">WhatsApp</a>
      </nav>
    </>
  );
}
