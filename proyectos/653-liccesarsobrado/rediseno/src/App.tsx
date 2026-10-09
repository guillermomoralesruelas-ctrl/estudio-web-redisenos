import { useState } from 'react';
import fotos from './data/fotos.json';
import {
  negocio, web, wa, waGeneral, frase, hola, metas, pasos, servicios, medidas,
  type IdMeta,
} from './data/content';

type NombreFoto = keyof typeof fotos;
function Foto({ n, alt, className = '', eager = false }: { n: NombreFoto; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n];
  return (
    <img
      src={web(`${n}.webp`)} width={w} height={h} alt={alt}
      loading={eager ? 'eager' : 'lazy'} decoding="async"
      className={`block h-full w-full object-cover ${className}`}
    />
  );
}

function IconoWA({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-papel/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0">
          <img src={web('logo.svg')} width={260} height={111} alt="César Sobrado, nutrición clínica y deportiva" className="h-11 w-auto" />
        </a>
        <nav aria-label="Secciones" className="hidden items-center gap-7 text-sm font-semibold text-gris md:flex">
          <a href="#supermedicion" className="hover:text-hondo">La supermedición</a>
          <a href="#consulta" className="hover:text-hondo">Tu consulta</a>
          <a href="#servicios" className="hover:text-hondo">Servicios</a>
          <a href="#contacto" className="hover:text-hondo">Contacto</a>
        </nav>
        <a href={waGeneral} className="btn-agua hidden sm:inline-flex"><IconoWA /> Agenda tu consulta</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-menta">
      <div className="contenedor grid items-center gap-10 py-12 md:grid-cols-[1.05fr_1fr] md:py-20">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-hondo">{negocio.especialidad} · {negocio.ciudad}</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            Nutriólogo en Cancún: {frase.charAt(0).toLowerCase() + frase.slice(1)}.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gris">
            Consultas personalizadas, nutrición deportiva y planes de alimentación con el Lic. César Sobrado, en Viocenter.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn-agua"><IconoWA /> Agenda por WhatsApp</a>
            <a href="#supermedicion" className="btn-linea">Qué se mide en tu consulta</a>
          </div>
          <dl className="mt-10 flex gap-10">
            <div className="flex flex-col">
              <dt className="text-sm text-gris">Pacientes atendidos</dt>
              <dd className="order-first text-4xl font-bold text-hondo" style={{ fontFamily: 'var(--font-display)' }}>{negocio.pacientes}</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-sm text-gris">Años de experiencia</dt>
              <dd className="order-first text-4xl font-bold text-hondo" style={{ fontFamily: 'var(--font-display)' }}>{negocio.anios}</dd>
            </div>
          </dl>
        </div>
        <div className="relative min-w-0">
          <div className="cinta absolute -left-3 top-8 bottom-8 w-3 rounded-full" aria-hidden="true" />
          <div className="aspect-[3/2] overflow-hidden rounded-3xl shadow-xl shadow-hondo/20">
            <Foto n="escritorio" eager alt="El Lic. César Sobrado en su escritorio del consultorio en Cancún" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Hola() {
  return (
    <section className="contenedor grid items-center gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
      <div className="grid min-w-0 grid-cols-2 gap-3">
        <div className="col-span-2 aspect-[3/2] overflow-hidden rounded-2xl">
          <Foto n="presion" alt="César Sobrado tomando la presión arterial a un paciente" />
        </div>
        <div className="aspect-[3/2] overflow-hidden rounded-2xl">
          <Foto n="de-pie" alt="César Sobrado con bata y estetoscopio" />
        </div>
        <div className="aspect-[3/2] overflow-hidden rounded-2xl">
          <Foto n="computadora" alt="César Sobrado revisando un expediente en la computadora" />
        </div>
      </div>
      <div className="min-w-0">
        <h2 className="text-3xl font-bold sm:text-4xl">¡Hola!</h2>
        {hola.map((p) => <p key={p.slice(0, 20)} className="mt-4 text-lg leading-relaxed text-gris">{p}</p>)}
        <p className="mt-4 text-lg leading-relaxed text-gris">Si tienes alguna pregunta o estás interesado en programar una consulta, no dudes en contactarme.</p>
      </div>
    </section>
  );
}

/* Silueta de la persona medida: figuras simples, sin rasgos */
function Silueta() {
  return (
    <g fill="#CFE7E4" stroke="#2B8F9A" strokeWidth="1.5">
      <circle cx="100" cy="42" r="24" />
      <path d="M70 76 Q100 66 130 76 L142 150 Q140 168 132 180 L136 230 L64 230 L68 180 Q60 168 58 150 Z" />
      <path d="M70 80 L48 96 L34 170 L44 174 L60 112 Z" />
      <path d="M130 80 L152 96 L166 170 L156 174 L140 112 Z" />
      <path d="M66 228 L98 228 L94 392 L74 392 Z" />
      <path d="M102 228 L134 228 L126 392 L106 392 Z" />
      <rect x="54" y="396" width="92" height="14" rx="5" fill="#E9EFEE" />
    </g>
  );
}

function Supermedicion() {
  const [activa, setActiva] = useState(medidas[3].id);
  const [elegidas, setElegidas] = useState<string[]>(['cintura', 'composicion']);
  const [meta, setMeta] = useState<IdMeta>('dietas');
  const m = medidas.find((x) => x.id === activa)!;
  const metaSel = metas.find((x) => x.id === meta)!;

  const alternar = (id: string) =>
    setElegidas((xs) => (xs.includes(id) ? xs.filter((x) => x !== id) : [...xs, id]));
  const nombres = medidas.filter((x) => elegidas.includes(x.id)).map((x) => x.nombre.toLowerCase());
  const mensaje =
    `¡Hola! Quiero agendar mi consulta de nutrición. Mi meta: ${metaSel.corto.toLowerCase()}.` +
    (nombres.length ? ` Me interesa que midamos: ${nombres.join(', ')}.` : '');

  return (
    <section id="supermedicion" className="bg-tinta py-16 text-white md:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">La supermedición</h2>
          <p className="mt-4 text-lg text-white/80">
            Así le llama César al segundo paso de su consulta: cinta métrica, calibradores y báscula para conocer tu cuerpo. Toca cada punto para ver qué se mide y para qué sirve.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <div className="mx-auto w-full max-w-[15rem] sm:max-w-[22rem]">
            <svg viewBox="0 0 200 420" role="group" aria-label="Silueta con los puntos que se miden en la consulta" className="h-auto w-full">
              <Silueta />
              {/* cinta en la cintura y la cadera */}
              <path d="M62 176 Q100 186 138 176" fill="none" stroke="#FAB72B" strokeWidth="3" strokeDasharray="2 3" opacity={activa === 'cintura' ? 1 : 0.35} />
              <path d="M64 214 Q100 224 136 214" fill="none" stroke="#FAB72B" strokeWidth="3" strokeDasharray="2 3" opacity={activa === 'cadera' ? 1 : 0.35} />
              {medidas.map((p) => {
                const on = p.id === activa;
                return (
                  <g key={p.id}>
                    <circle
                      cx={p.x} cy={p.y} r={on ? 9 : 7}
                      className={on ? 'punto-activo' : ''}
                      fill={on ? '#FAB72B' : '#142326'} stroke="#FAB72B" strokeWidth="2.5"
                    />
                    <circle
                      cx={p.x} cy={p.y} r="16" fill="transparent" tabIndex={0} role="button"
                      aria-label={p.nombre} aria-pressed={on}
                      className="cursor-pointer outline-none"
                      onClick={() => setActiva(p.id)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiva(p.id); } }}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap gap-2" aria-label="Medidas">
              {medidas.map((p) => (
                <button
                  key={p.id} type="button" aria-pressed={p.id === activa} onClick={() => setActiva(p.id)}
                  className={`rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors ${p.id === activa ? 'border-ambar bg-ambar text-tinta' : 'border-white/25 text-white/85 hover:border-ambar'}`}
                >
                  {p.nombre}
                </button>
              ))}
            </div>

            <div className="mt-6 flex gap-5 rounded-2xl bg-white/[0.06] p-6" aria-live="polite">
              <div className="cinta w-2.5 shrink-0 rounded-full" aria-hidden="true" />
              <div className="min-w-0">
                <h3 className="text-2xl font-bold text-ambar">{m.nombre}</h3>
                <p className="mt-2 text-lg text-white/85">{m.que}</p>
                <p className="mt-3 text-sm text-white/65">Se hace en: <span className="font-semibold text-white">{m.servicio}</span></p>
                <label className="mt-4 inline-flex cursor-pointer items-center gap-3 text-sm font-semibold">
                  <input type="checkbox" checked={elegidas.includes(m.id)} onChange={() => alternar(m.id)} className="h-5 w-5 accent-[#FAB72B]" />
                  Quiero que me midan esto
                </label>
              </div>
            </div>

            <fieldset className="mt-8">
              <legend className="text-sm font-semibold text-white/70">¿Cuál es tu meta?</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {metas.map((x) => (
                  <label key={x.id} className={`cursor-pointer rounded-xl border p-3 text-sm font-semibold transition-colors ${meta === x.id ? 'border-ambar bg-ambar/10 text-white' : 'border-white/20 text-white/80 hover:border-white/50'}`}>
                    <input type="radio" name="meta" value={x.id} checked={meta === x.id} onChange={() => setMeta(x.id)} className="sr-only" />
                    {x.corto}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-6 rounded-2xl bg-white p-5 text-tinta">
              <p className="text-xs font-semibold text-gris">Tu mensaje</p>
              <p className="mt-1">{mensaje}</p>
              <a href={wa(mensaje)} className="btn-agua mt-4"><IconoWA /> Enviar por WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metas() {
  return (
    <section className="contenedor py-16 md:py-24">
      <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">Olvídate de las dietas de siempre</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {metas.map((x) => (
          <article key={x.id} className="min-w-0 border-t-4 border-agua pt-5">
            <h3 className="text-xl font-bold leading-snug">{x.pregunta}</h3>
            {x.texto.map((t) => <p key={t.slice(0, 20)} className="mt-3 leading-relaxed text-gris">{t}</p>)}
            <a href={wa(`¡Hola! Vi tu sitio. ${x.pregunta} Quisiera agendar una consulta.`)} className="mt-4 inline-flex items-center gap-2 font-semibold text-hondo underline-offset-4 hover:underline">
              <IconoWA /> Platiquemos
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Consulta() {
  return (
    <section id="consulta" className="bg-menta py-16 md:py-24">
      <div className="contenedor grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div className="min-w-0">
          <h2 className="text-3xl font-bold sm:text-4xl">¿Qué veremos en mi consulta?</h2>
          <div className="mt-8 aspect-[845/1100] max-w-sm overflow-hidden rounded-3xl">
            <Foto n="platos" alt="César Sobrado con platos de alimentos de colores en su consultorio" />
          </div>
        </div>
        <div className="relative min-w-0 pl-10">
          <div className="cinta absolute left-0 top-1 bottom-1 w-3 rounded-full" aria-hidden="true" />
          <ol className="space-y-8">
          {pasos.map((p, i) => (
            <li key={p.titulo} className="relative">
              <span className="absolute -left-[2.85rem] top-0 grid h-8 w-8 place-items-center rounded-full bg-hondo text-sm font-bold text-white" aria-hidden="true">{i + 1}</span>
              <h3 className="text-xl font-bold">{p.titulo}</h3>
              <p className="mt-2 leading-relaxed text-gris">{p.texto}</p>
            </li>
          ))}
          </ol>
          <a href={waGeneral} className="btn-agua mt-8"><IconoWA /> Agendar consulta</a>
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="contenedor py-16 md:py-24">
      <h2 className="text-3xl font-bold sm:text-4xl">Servicios</h2>
      <p className="mt-4 max-w-2xl text-lg text-gris">Desde la consulta de nutrición hasta un análisis de composición corporal: tratamiento dietético-nutricional clínico, control de peso y nutrición deportiva.</p>
      <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
        {servicios.map((s) => (
          <article key={s.nombre} className="min-w-0 rounded-2xl border border-tinta/10 bg-white p-6">
            <h3 className="text-xl font-bold text-hondo">{s.nombre}</h3>
            <p className="mt-3 leading-relaxed text-gris">{s.texto}</p>
            <a href={wa(`¡Hola! Quisiera más información sobre: ${s.nombre}.`)} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-hondo hover:underline">
              <IconoWA /> Quiero más información
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-hondo py-16 text-white md:py-20">
      <div className="contenedor grid items-center gap-10 md:grid-cols-2">
        <div className="min-w-0">
          <h2 className="text-3xl font-bold sm:text-4xl">Contáctame</h2>
          <address className="mt-6 not-italic text-lg leading-relaxed">
            {negocio.direccion}<br />{negocio.cp}
          </address>
          <p className="mt-4 text-lg">Teléfono y WhatsApp: <a href={negocio.telefonoHref} className="font-semibold underline underline-offset-4">{negocio.telefono}</a></p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn-ambar"><IconoWA /> Escríbeme por WhatsApp</a>
            <a href={negocio.maps} className="btn border-2 border-white text-white hover:bg-white hover:text-hondo">Ver en Google Maps</a>
          </div>
        </div>
        <a href={negocio.maps} className="group block min-w-0 overflow-hidden rounded-3xl" aria-label="Abrir la ubicación del consultorio en Google Maps">
          <div className="aspect-[3/2]">
            <Foto n="de-pie" alt="César Sobrado en su consultorio de Viocenter, Cancún" className="transition-transform duration-500 group-hover:scale-105" />
          </div>
        </a>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-tinta pb-28 pt-12 text-white/75 md:pb-12">
      <div className="contenedor flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <img src={web('logo-blanco.png')} width={640} height={274} alt="César Sobrado, nutrición clínica y deportiva" loading="lazy" className="h-16 w-auto" />
        <p className="text-sm">© {new Date().getFullYear()} Nutriólogo en Cancún · Lic. César Sobrado</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-tinta/10 bg-white text-xs font-semibold md:hidden">
      <a href={waGeneral} className="flex flex-col items-center gap-1 bg-hondo py-3 text-white"><IconoWA className="h-5 w-5" /> Agendar</a>
      <a href={negocio.telefonoHref} className="flex flex-col items-center gap-1 py-3 text-hondo">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
        Llamar
      </a>
      <a href={negocio.maps} className="flex flex-col items-center gap-1 py-3 text-hondo">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
        Cómo llegar
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Hola />
        <Supermedicion />
        <Metas />
        <Consulta />
        <Servicios />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
