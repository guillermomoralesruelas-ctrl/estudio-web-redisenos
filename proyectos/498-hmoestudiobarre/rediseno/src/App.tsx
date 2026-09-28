import { useMemo, useState } from 'react';
import { clase, cocoy, foto, fotos, negocio, paquetes, testimonios, VIGENCIA, wa, waPrueba, type Foto } from './data/content';

function Img({ f, className = '', eager = false }: { f: Foto; className?: string; eager?: boolean }) {
  return <img src={f.src} width={f.w} height={f.h} alt={f.alt} className={className} loading={eager ? 'eager' : 'lazy'} decoding="async" {...(eager ? { fetchPriority: 'high' as const } : {})} />;
}

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

const pesos = (n: number) => `$${n.toLocaleString('es-MX', { maximumFractionDigits: 2, minimumFractionDigits: Number.isInteger(n) ? 0 : 2 })}`;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-crema/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img src={foto('logo.webp')} width={600} height={339} alt="BARRE 7, todo suma" className="h-11 w-auto" /></a>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-[0.95rem] font-semibold text-tinta md:flex">
          <a href="#clase" className="hover:text-agua-honda hover:underline">La clase</a>
          <a href="#mes" className="hover:text-agua-honda hover:underline">Paquetes</a>
          <a href="#cocoy" className="hover:text-agua-honda hover:underline">Cocoy</a>
          <a href="#ubicacion" className="hover:text-agua-honda hover:underline">Ubicación</a>
        </nav>
        <a href={waPrueba} target="_blank" rel="noopener" className="btn hidden !min-h-0 !py-2 sm:inline-flex"><IconoWa /> Agendar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-20">
        <div className="min-w-0">
          <p className="font-semibold text-rosa-honda">Estudio en Hermosillo, Sonora</p>
          <h1 className="mt-3 text-4xl sm:text-6xl">Barre: fusión de Pilates, Ballet y Entrenamiento Funcional</h1>
          <p className="mt-6 max-w-xl text-lg">El mejor momento para iniciar siempre es hoy. Agenda tu <strong className="text-tinta">clase de prueba en el estudio de Hermosillo</strong> por WhatsApp.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waPrueba} className="btn" target="_blank" rel="noopener"><IconoWa /> Agendar clase de prueba</a>
            <a href="#mes" className="btn-linea">Ver paquetes</a>
          </div>
          <p className="mt-6 text-[0.95rem]">Bv. Paseo de las Quintas, entre Navarrete y Soriana Encinas. <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace">Cómo llegar</a></p>
        </div>
        <div className="relative min-w-0">
          <div className="absolute -right-10 -top-6 hidden h-[110%] w-3/4 rounded-l-[3rem] bg-rosa-clara lg:block" aria-hidden="true" />
          <Img f={fotos.sentadilla} eager className="relative mx-auto aspect-[4/5] w-full max-w-md rounded-[2rem] object-cover shadow-xl shadow-tinta/10" />
        </div>
      </div>
    </section>
  );
}

function LaClase() {
  return (
    <section id="clase" className="bg-white py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="grid min-w-0 grid-cols-2 gap-3 self-start">
          <Img f={fotos.barra} className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover" />
          <Img f={fotos.espalda} className="aspect-square w-full rounded-2xl object-cover" />
          <Img f={fotos.grupo} className="aspect-square w-full rounded-2xl object-cover" />
        </div>
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-4xl">Qué pasa en una clase</h2>
          <p className="mt-4 max-w-xl">En palabras de Cocoy Landavazo, en su blog:</p>
          <dl className="mt-8 divide-y divide-tinta/10 border-y border-tinta/10">
            {clase.map((c) => (
              <div key={c.t} className="grid gap-1 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6">
                <dt className="font-titulo font-semibold text-tinta">{c.t}</dt>
                <dd>{c.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

// "Tu mes en la barra": las veces por semana se vuelven clases dentro de los 30 días de vigencia.
const VECES = [1, 2, 3, 4, 5];
const clasesEnMes = (v: number) => Math.floor((v * VIGENCIA) / 7);

function fechaFin() {
  const d = new Date(Date.now() + VIGENCIA * 86400000);
  return new Intl.DateTimeFormat('es-MX', { day: 'numeric', month: 'long', timeZone: 'America/Hermosillo' }).format(d);
}

function Barra({ clases, paquete }: { clases: number; paquete: number }) {
  const X0 = 24, X1 = 616, ANCHO = X1 - X0;
  const xDia = (d: number) => X0 + ((d + 0.5) * ANCHO) / VIGENCIA;
  const dias = Array.from({ length: clases }, (_, k) => Math.min(VIGENCIA - 1, Math.floor(((k + 0.5) * VIGENCIA) / clases)));
  return (
    <svg viewBox="0 0 640 200" className="h-auto w-full" role="img" aria-label={`Treinta días de vigencia con ${clases} clases repartidas sobre la barra; el paquete trae ${paquete}.`}>
      {/* espejo */}
      <rect x="0" y="0" width="640" height="150" rx="14" fill="#eaf3f2" />
      <line x1="0" x2="640" y1="118" y2="118" stroke="#d3e5e3" strokeWidth="1" />
      {/* soportes y barra */}
      {[X0 + 14, 320, X1 - 14].map((x) => <rect key={x} x={x - 3} y="62" width="6" height="88" rx="2" fill="#9fb5b3" />)}
      <rect x={X0 - 6} y="56" width={ANCHO + 12} height="12" rx="6" fill="#c9d6d5" stroke="#8aa19f" strokeWidth="1.5" />
      <rect x={X0 - 2} y="58" width={ANCHO + 4} height="3" rx="1.5" fill="#ffffff" opacity="0.8" />
      {/* piso: 30 días */}
      <rect x="0" y="150" width="640" height="50" rx="0" fill="#8a5a3c" />
      {Array.from({ length: VIGENCIA }, (_, d) => (
        <line key={d} x1={xDia(d)} x2={xDia(d)} y1="152" y2={d % 7 === 0 ? 170 : 162} stroke="#f3e2d6" strokeWidth={d % 7 === 0 ? 2 : 1} opacity="0.8" />
      ))}
      {[0, 14, 29].map((d, i) => <text key={d} x={i === 2 ? xDia(d) + 8 : xDia(d) - 6} y="192" fontSize="19" textAnchor={i === 2 ? 'end' : 'start'} fill="#fff8f2" fontWeight="600">{i === 0 ? 'Hoy' : `Día ${d + 1}`}</text>)}
      {/* clases posadas sobre la barra */}
      {dias.map((d, k) => (
        <g key={`${clases}-${k}`} className="clase-punto" style={{ animationDelay: `${k * 35}ms` }}>
          <line x1={xDia(d)} x2={xDia(d)} y1="68" y2="152" stroke="#f4acc2" strokeWidth="2" strokeDasharray="3 4" />
          <circle cx={xDia(d)} cy="44" r="9" fill="#f4acc2" stroke="#9c2f55" strokeWidth="2" />
        </g>
      ))}
    </svg>
  );
}

function MesEnLaBarra() {
  const [veces, setVeces] = useState(3);
  const necesito = clasesEnMes(veces);
  const paquete = useMemo(() => paquetes.find((p) => p.clases >= necesito) ?? paquetes[paquetes.length - 1], [necesito]);
  const alcanza = paquete.clases >= necesito;
  const sobran = paquete.clases - necesito;
  const porClase = paquete.precio / paquete.clases;
  const sueltas = Math.min(necesito, paquete.clases) * paquetes[0].precio;
  const fin = fechaFin();

  const mensaje = wa(`Hola, quiero ir ${veces === 1 ? '1 vez' : `${veces} veces`} por semana al estudio de Hermosillo. Me interesa el paquete de ${paquete.clases} clases (${pesos(paquete.precio)}, vigencia de 30 días). ¿Qué horarios tienen?`);

  return (
    <section id="mes" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">Tu mes en la barra</h2>
          <p className="mt-5 text-lg">Todos sus paquetes duran 30 días. Dinos cuántas veces por semana quieres venir y ponemos tus clases sobre la barra para ver cuál te conviene.</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-14">
          <div className="min-w-0">
            <fieldset>
              <legend className="font-titulo font-semibold text-tinta">¿Cuántas veces por semana?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {VECES.map((v) => (
                  <button key={v} type="button" aria-pressed={v === veces} onClick={() => setVeces(v)}
                    className={`min-h-[46px] min-w-[4.5rem] rounded-full border-2 px-4 py-2 font-semibold transition-colors ${v === veces ? 'border-tinta bg-tinta text-white' : 'border-tinta/20 bg-white text-tinta hover:border-tinta'}`}>
                    {v === 1 ? '1 vez' : `${v} veces`}
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <Barra clases={necesito} paquete={paquete.clases} />
            </div>
            <p className="mt-3 text-sm">Cada punto rosa es una clase: unas <strong className="cifra">{necesito}</strong> en 30 días. Si empiezas hoy, tu paquete corre hasta el {fin}. El reparto es ilustrativo: los horarios los confirma el estudio.</p>
          </div>

          <div className="min-w-0" aria-live="polite">
            <div key={paquete.clases} className="rounded-2xl bg-tinta p-6 text-white/90 sm:p-8">
              <p className="text-sm font-semibold text-agua">Te conviene</p>
              <p className="mt-1 font-titulo text-4xl font-extrabold text-white"><span className="cifra">{paquete.clases}</span> clases</p>
              <p className="cifra mt-1 text-2xl font-semibold text-rosa">{pesos(paquete.precio)}</p>
              <ul className="mt-5 space-y-2 text-[0.98rem]">
                <li><span className="cifra">{pesos(porClase)}</span> por clase</li>
                <li>Vigencia de 30 días</li>
                {alcanza && sobran > 0 && <li>Te {sobran === 1 ? 'queda 1 clase' : `quedan ${sobran} clases`} de repuesto por si faltas un día</li>}
                {!alcanza && <li>Con 5 veces por semana serían unas {necesito} clases y su paquete más grande es de 20: pregunta por las que faltan</li>}
                <li>Clase por clase ({pesos(paquetes[0].precio)} cada una) serían {pesos(sueltas)}</li>
              </ul>
              <a href={mensaje} className="btn mt-7 w-full" target="_blank" rel="noopener"><IconoWa /> Pedir este paquete</a>
            </div>
            <p className="mt-4 text-sm">¿Primera vez? Empieza con tu <a href={waPrueba} target="_blank" rel="noopener" className="enlace">clase de prueba</a>.</p>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-xl">Todos los paquetes</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {paquetes.map((p) => {
              const activo = p.clases === paquete.clases;
              return (
                <div key={p.clases} className={`min-w-0 rounded-xl border-2 p-4 ${activo ? 'border-rosa-honda bg-rosa-clara' : 'border-tinta/10 bg-white'}`}>
                  <p className="font-titulo font-semibold text-tinta">{p.clases === 1 ? '1 clase' : `${p.clases} clases`}</p>
                  <p className="cifra mt-1 text-2xl font-semibold text-tinta">{pesos(p.precio)}</p>
                  <p className="cifra text-sm">{pesos(p.precio / p.clases)} por clase</p>
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-sm">Precios de su página del estudio; todos con vigencia de 30 días.</p>
        </div>
      </div>
    </section>
  );
}

function Cocoy() {
  return (
    <section id="cocoy" className="noche bg-tinta py-20 text-white/90 sm:py-24">
      <div className="contenedor grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Img f={fotos.cocoy} className="aspect-[16/10] w-full min-w-0 rounded-2xl object-cover" />
        <figure className="min-w-0">
          <blockquote className="font-titulo text-xl font-semibold leading-snug text-white sm:text-2xl">“{cocoy.cita}”</blockquote>
          <figcaption className="mt-6 text-rosa">{cocoy.nombre}, instructora</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Testimonios() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="alumnas">
      <div className="contenedor">
        <h2 id="alumnas" className="max-w-2xl text-3xl sm:text-4xl">Lo que dicen sus alumnas</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr_0.8fr]">
          {testimonios.map((t) => (
            <figure key={t.nombre} className="min-w-0 rounded-2xl bg-white p-6 sm:p-8">
              <blockquote>{t.texto}</blockquote>
              <figcaption className="mt-5 font-titulo font-semibold text-rosa-honda">{t.nombre}</figcaption>
            </figure>
          ))}
          <Img f={fotos.fila} className="aspect-square w-full min-w-0 rounded-2xl object-cover lg:aspect-auto lg:h-full" />
        </div>
        <div className="mt-12 rounded-2xl border-2 border-agua/50 p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div className="min-w-0">
            <h3 className="text-xl">¿Prefieres entrenar en casa?</h3>
            <p className="mt-2">Si por alguna razón prefieres hacer ejercicio en tu casa, BARRE 7 tiene clases en línea con suscripción.</p>
          </div>
          <a href={negocio.enLinea} target="_blank" rel="noopener" className="btn-linea mt-5 shrink-0 sm:mt-0">Ver la opción en línea</a>
        </div>
      </div>
    </section>
  );
}

function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-white py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-4xl">Agenda tu clase de prueba en el estudio</h2>
          <p className="mt-5">Manda mensaje y te decimos cuándo puedes venir.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waPrueba} className="btn" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.telefono.visible}</a>
            <a href={`tel:${negocio.telefono.tel}`} className="btn-linea">Llamar</a>
          </div>
          <p className="mt-8 font-titulo font-semibold text-tinta">Dirección</p>
          <p className="mt-1">{negocio.direccion}.</p>
          <p className="mt-6 flex gap-5">
            <a href={negocio.instagram} className="enlace" target="_blank" rel="noopener">Instagram @barre.7</a>
            <a href={negocio.facebook} className="enlace" target="_blank" rel="noopener">Facebook</a>
          </p>
        </div>
        <div className="min-w-0 flex flex-col gap-4">
          <iframe src={negocio.mapaEmbed} width="100%" height="320" style={{ border: 0, borderRadius: '0.5rem' }} allowFullScreen loading="lazy" title={`Ubicación de ${negocio.nombre}`} className="w-full" />
          <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace inline-block">Cómo llegar en Google Maps</a>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="noche bg-tinta pb-28 pt-10 text-sm text-white/80 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4">
        <p className="font-titulo font-semibold text-white">HMO Estudio BARRE 7</p>
        <p>Barre en Hermosillo, Sonora. Todo suma.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-tinta text-[0.8rem] font-semibold text-white md:hidden">
      <a href={waPrueba} className="flex flex-col items-center gap-1 bg-rosa py-3 text-tinta" target="_blank" rel="noopener"><IconoWa />WhatsApp</a>
      <a href={`tel:${negocio.telefono.tel}`} className="flex flex-col items-center gap-1 py-3">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>
        Llamar
      </a>
      <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-3" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
        Cómo llegar
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#mes" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-tinta">Ir a paquetes</a>
      <Encabezado />
      <main>
        <Portada />
        <LaClase />
        <MesEnLaBarra />
        <Cocoy />
        <Testimonios />
        <Ubicacion />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
