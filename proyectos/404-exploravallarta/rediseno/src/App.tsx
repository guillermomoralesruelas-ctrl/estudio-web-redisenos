import { useState } from 'react';
import {
  archivo, catalogo, comportamientos, conservacion, distancias, faq, foto, guias, negocio, opiniones, tours, wa, waInfo,
} from './data/content';

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>;
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>;
}

const secciones = [['#distancia', 'Ballenas'], ['#tours', 'Tours'], ['#reservar', 'Reservar'], ['#conservacion', 'Conservación'], ['#contacto', 'Contacto']] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-bahia/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Explora Vallarta, ir al inicio"><img src={archivo('logo.webp')} alt="Explora Vallarta, pasión y respeto por la naturaleza" width={429} height={400} className="h-12 w-auto" /></a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-roca hover:text-bahia">{t}</a></li>)}</ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={negocio.ingles} lang="en" className="font-bold text-bahia underline underline-offset-4">EN</a>
          <a href={waInfo} className="btn-bahia hidden !min-h-[42px] !py-2 sm:inline-flex" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
        </div>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src={foto('ballena-cola')} alt="Cola de ballena jorobada saliendo del mar en la Bahía de Banderas" width={1600} height={900} fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-abismo via-abismo/80 to-abismo/20" aria-hidden="true" />
      <div className="contenedor py-20 sm:py-28">
        <p className="font-bold text-celeste">Puerto Vallarta y Riviera Nayarit</p>
        <h1 className="mt-3 max-w-2xl text-[2.5rem] sm:text-[3.8rem]">Tours de ecoturismo con biólogos marinos</h1>
        <p className="mt-5 max-w-xl text-[1.1rem]">
          Experiencias de aventura, ciencia y conservación en la Bahía de Banderas. Una empresa 100% mexicana fundada por
          biólogos; parte de tu boleto apoya proyectos de conservación como la red RABEN.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#reservar" className="btn">Consultar disponibilidad</a>
          <a href="#tours" className="btn-claro">Ver tours y precios</a>
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-[0.98rem]">
          <li><strong className="text-sol">Grupos pequeños</strong></li>
          <li><strong className="text-sol">Hidrófono a bordo</strong></li>
          <li><strong className="text-sol">Tours autorizados</strong></li>
        </ul>
      </div>
    </section>
  );
}

// Ballena vista desde arriba, anillos de 60, 80 y 240 m a escala y una lancha en cada anillo.
const ESCALA = 0.8; // px por metro
const angulos: Record<string, number> = { explora: -35, grande: 150, sin: 25 };

function Distancia() {
  const [activa, setActiva] = useState<string>('explora');
  const d = distancias.find((x) => x.id === activa)!;
  const tour = tours[0];
  return (
    <section id="distancia" className="bg-espuma py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
        <div className="min-w-0">
          <h2 className="text-[2.2rem] sm:text-[2.9rem]">¿Qué tan cerca de la ballena?</h2>
          <p className="mt-4 text-roca">
            La norma NOM-131-SEMARNAT-2010 fija cuánto se puede acercar cada embarcación. Toca una lancha: la distancia está a
            escala.
          </p>
          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Tipo de embarcación">
            {distancias.map((x) => (
              <button key={x.id} type="button" aria-pressed={x.id === activa} onClick={() => setActiva(x.id)}
                className={`min-h-[44px] rounded-full border-2 px-4 py-2 font-bold transition-colors ${x.id === activa ? 'border-bahia bg-bahia text-white' : 'border-bahia/25 text-bahia hover:border-bahia'}`}>
                {x.metros} m
              </button>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-white p-6" aria-live="polite">
            <p className="font-display text-[3rem] leading-none text-bahia">{d.metros} m</p>
            <h3 className="mt-2 text-[1.3rem]">{d.nombre}</h3>
            <p className="mt-2 text-roca">{d.texto}</p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-bold">Temporada oficial</p>
              <p className="text-roca">Del 8 de diciembre al 23 de marzo.</p>
            </div>
            <div>
              <p className="font-bold">Lo que vas a ver</p>
              <p className="text-roca">{comportamientos.map(([es, en]) => `${es} (${en})`).join(', ')}.</p>
            </div>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a href={wa(`Hola Explora Vallarta, quiero reservar el tour de avistamiento de ballenas. Fecha: (…). Adultos: (…). Niños: (…).`)} className="btn-bahia" target="_blank" rel="noopener"><IconoWa /> Reservar ballenas</a>
            <p className="text-roca">Adultos <strong className="text-abismo">{tour.precios![0][1]}</strong>, niños <strong className="text-abismo">{tour.precios![1][1]}</strong> MXN</p>
          </div>
        </div>

        <div className="min-w-0">
          <svg viewBox="-210 -210 420 420" className="mx-auto h-auto w-full max-w-[30rem]" role="img" aria-label={`Diagrama a escala: ${d.nombre}, a ${d.metros} metros de la ballena`}>
            <defs>
              <radialGradient id="mar" cx="50%" cy="50%" r="60%"><stop offset="0" stopColor="#1a6f8c" /><stop offset="1" stopColor="#082b3a" /></radialGradient>
            </defs>
            <circle r="205" fill="url(#mar)" />
            {[-150, -90, -30, 30, 90, 150].map((y) => <path key={y} className="ola" d={`M-200 ${y} q25 -8 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0`} fill="none" stroke="#7fd3e6" strokeOpacity="0.12" strokeWidth="2" />)}
            {distancias.map((x) => (
              <g key={x.id}>
                <circle className="anillo" r={x.metros * ESCALA} fill="none" stroke={x.id === 'explora' ? '#ffcc00' : '#7fd3e6'}
                  strokeOpacity={x.id === activa ? 1 : 0.35} strokeWidth={x.id === activa ? 3 : 1.5} strokeDasharray={x.id === 'sin' ? '6 6' : undefined} />
                <text x="0" y={x.id === 'explora' ? x.metros * ESCALA + 14 : -x.metros * ESCALA + 16} textAnchor="middle" fontSize="12" fontWeight="700" fill={x.id === activa ? '#ffffff' : '#7fd3e6'}>{x.metros} m</text>
              </g>
            ))}
            {/* Ballena jorobada vista desde arriba: cuerpo, aletas pectorales largas y cola. */}
            <g transform="rotate(-20)">
              <path d="M0,-34 C9,-34 12,-18 11,0 C10,16 6,26 0,34 C-6,26 -10,16 -11,0 C-12,-18 -9,-34 0,-34 Z" fill="#dfe9ee" />
              <path d="M10,-8 C24,-2 34,10 38,22 C28,16 18,8 9,4 Z M-10,-8 C-24,-2 -34,10 -38,22 C-28,16 -18,8 -9,4 Z" fill="#c4d4dc" />
              <path d="M0,32 C6,38 16,40 20,46 C10,46 4,43 0,40 C-4,43 -10,46 -20,46 C-16,40 -6,38 0,32 Z" fill="#c4d4dc" />
            </g>
            {distancias.map((x) => {
              const r = x.metros * ESCALA; const a = (angulos[x.id] * Math.PI) / 180;
              const bx = Math.cos(a) * r; const by = Math.sin(a) * r;
              const sel = x.id === activa;
              return (
                <g key={x.id} className="lancha" onClick={() => setActiva(x.id)}>
                  {sel ? <line x1="0" y1="0" x2={bx} y2={by} stroke="#ffcc00" strokeWidth="2" strokeDasharray="4 4" /> : null}
                  <g transform={`translate(${bx} ${by}) rotate(${angulos[x.id] + 90}) scale(${x.id === 'grande' ? 1.5 : 1})`}>
                    <path d="M0,-12 C5,-8 6,0 5,10 L-5,10 C-6,0 -5,-8 0,-12 Z" fill={x.id === 'explora' ? '#ffcc00' : x.id === 'sin' ? '#9aa9b1' : '#ffffff'} stroke="#082b3a" strokeWidth="1.2" />
                  </g>
                </g>
              );
            })}
          </svg>
          <p className="mt-3 text-center text-[0.92rem] text-roca">Anillos a escala: 60, 80 y 240 metros alrededor de la ballena (la ballena y las lanchas no están a escala).</p>
        </div>
      </div>
    </section>
  );
}

function Tours() {
  return (
    <section id="tours" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.2rem] sm:text-[2.9rem]">Expediciones con precio</h2>
        <p className="mt-3 max-w-2xl text-roca">Precios en pesos mexicanos, como aparecen en cada página de su sitio.</p>
        <div className="mt-10 space-y-8">
          {tours.map((t, i) => (
            <article key={t.id} className={`grid gap-6 overflow-hidden rounded-3xl bg-espuma lg:grid-cols-2 ${i % 2 ? 'lg:[&>img]:order-2' : ''}`}>
              <img src={foto(t.foto)} alt={t.alt} width={1200} height={800} loading="lazy" className="h-64 w-full object-cover lg:h-full" />
              <div className="p-6 sm:p-9">
                <h3 className="text-[1.7rem]">{t.nombre}</h3>
                <p className="mt-1 text-[0.95rem] font-bold text-selva">{t.duracion}</p>
                <p className="mt-3 text-roca">{t.texto}</p>
                {t.precios ? (
                  <dl className="mt-5 divide-y divide-bahia/10 rounded-2xl bg-white px-5">
                    {t.precios.map(([k, v]) => <div key={k} className="flex justify-between gap-4 py-2.5"><dt>{k}</dt><dd className="font-bold text-bahia">{v}</dd></div>)}
                  </dl>
                ) : null}
                {t.notas ? <ul className="mt-4 space-y-1 text-[0.95rem] text-roca">{t.notas.map((n) => <li key={n}>{n}</li>)}</ul> : null}
                {t.incluye ? <p className="mt-4 text-[0.95rem]"><strong>Incluye:</strong> {t.incluye.join(', ')}.</p> : null}
                <a href={wa(`Hola Explora Vallarta, quiero reservar: ${t.nombre}. Fecha: (…). Adultos: (…). Niños: (…).`)} className="btn-bahia mt-6" target="_blank" rel="noopener"><IconoWa /> Reservar este tour</a>
              </div>
            </article>
          ))}
        </div>
        <h3 className="mt-16 text-[1.6rem]">Más aventuras en el mar y la montaña</h3>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <ul className="divide-y divide-bahia/10 border-y border-bahia/10">
            {catalogo.map(([n, dur, t]) => (
              <li key={n} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                <p className="font-bold sm:w-56 sm:shrink-0">{n}</p>
                <p className="flex-1 text-roca">{t} <span className="text-selva">{dur}.</span></p>
                <a href={wa(`Hola Explora Vallarta, quiero información y precio de: ${n}.`)} className="enlace shrink-0" target="_blank" rel="noopener">Pedir precio</a>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 content-start gap-3">
            <img src={foto('tortugas')} alt="Crías de tortuga marina sobre la arena antes de su liberación" width={1200} height={675} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
            <img src={foto('kayak')} alt="Persona remando en kayak en el mar de la bahía, con un velero al fondo" width={800} height={533} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
            <img src={foto('los-arcos')} alt="Los Arcos de Mismaloya, islotes de roca con vegetación frente a la costa" width={1200} height={675} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
            <img src={foto('rio-nogalito')} alt="Cascada del Río Nogalito entre rocas y selva" width={800} height={533} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

const opcionesTour = [...tours.map((t) => t.nombre), ...catalogo.map(([n]) => n)];

function Reservar() {
  const [tour, setTour] = useState(opcionesTour[0]);
  const [fecha, setFecha] = useState('');
  const [adultos, setAdultos] = useState(2);
  const [ninos, setNinos] = useState(0);
  const [nombre, setNombre] = useState('');
  const esMarietas = tour.startsWith('Islas Marietas');
  const lunes = esMarietas && fecha && new Date(`${fecha}T12:00:00`).getDay() === 1;
  const grupo = esMarietas && adultos + ninos >= 4;
  const texto = `Hola Explora Vallarta, quiero consultar disponibilidad.\nTour: ${tour}\nFecha: ${fecha || '(por definir)'}\nAdultos: ${adultos}\nNiños (4 a 11): ${ninos}` +
    (nombre.trim() ? `\nNombre: ${nombre.trim()}` : '');
  return (
    <section id="reservar" className="oscuro py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
        <div>
          <h2 className="text-[2.2rem] sm:text-[2.9rem]">Reserva vía WhatsApp</h2>
          <p className="mt-3">Llena los datos y el mensaje sale listo. Respuesta por WhatsApp; se reserva con 50%.</p>
          <p className="mt-6 text-[0.95rem]">Lee sus <a href={negocio.politicas} className="enlace" target="_blank" rel="noopener">políticas y cancelaciones</a>.</p>
        </div>
        <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <label className="font-bold text-white sm:col-span-2">Expedición
            <select className="campo" value={tour} onChange={(e) => setTour(e.target.value)}>
              {opcionesTour.map((t) => <option key={t} value={t} className="bg-abismo">{t}</option>)}
            </select>
          </label>
          <label className="font-bold text-white">Fecha deseada
            <input type="date" className="campo [color-scheme:dark]" value={fecha} onChange={(e) => setFecha(e.target.value)} />
          </label>
          <label className="font-bold text-white">Nombre completo
            <input className="campo" value={nombre} maxLength={60} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" />
          </label>
          <label className="font-bold text-white">Adultos
            <input type="number" min={1} max={30} className="campo" value={adultos} onChange={(e) => setAdultos(Math.max(1, Number(e.target.value) || 1))} />
          </label>
          <label className="font-bold text-white">Niños (4 a 11 años)
            <input type="number" min={0} max={30} className="campo" value={ninos} onChange={(e) => setNinos(Math.max(0, Number(e.target.value) || 0))} />
          </label>
          <div className="sm:col-span-2" aria-live="polite">
            {lunes ? <p className="rounded-xl bg-sol px-4 py-3 font-bold text-abismo">Ojo: los lunes está cerrado todo el Parque Nacional Islas Marietas (abre solo en puentes).</p> : null}
            {grupo ? <p className="mt-2 text-celeste">Son {adultos + ninos}: en Marietas aplica el 20% de descuento de grupo.</p> : null}
          </div>
          <a href={wa(texto)} className="btn sm:col-span-2" target="_blank" rel="noopener"><IconoWa /> Consultar disponibilidad</a>
        </form>
      </div>
    </section>
  );
}

function Conservacion() {
  return (
    <section id="conservacion" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="max-w-3xl text-[2.2rem] sm:text-[2.9rem]">Impacto real en la conservación</h2>
        <p className="mt-3 max-w-3xl text-roca">
          Apoyan a SEMARNAT y CONANP capacitando a tour operadores: este año instruyeron a más de 700 personas en turismo
          responsable. También investigan guacamayas, manglares y arrecifes.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {conservacion.map(([logo, n, t]) => (
            <li key={n} className="rounded-2xl border border-bahia/15 p-6">
              <img src={foto(logo)} alt={`Logo de ${n}`} width={240} height={160} loading="lazy" className="h-16 w-auto object-contain" />
              <h3 className="mt-4 text-[1.2rem]">{n}</h3>
              <p className="mt-2 text-[0.95rem] text-roca">{t}</p>
            </li>
          ))}
        </ul>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-[1.6rem]">Tus guías</h3>
            <ul className="mt-5 space-y-5">
              {guias.map(([n, r, t]) => <li key={n} className="border-l-4 border-sol pl-5"><p className="font-bold">{n}</p><p className="text-[0.95rem] text-selva">{r}</p><p className="mt-1 text-roca">{t}</p></li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-[1.6rem]">Lo que dicen sus exploradores</h3>
            <div className="mt-5 space-y-5">
              {opiniones.map(([t, a]) => <figure key={a}><blockquote className="font-display text-[1.15rem] leading-snug">“{t}”</blockquote><figcaption className="mt-1 text-[0.95rem] text-roca">{a}, en su sitio</figcaption></figure>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section className="bg-espuma py-16 sm:py-20">
      <div className="contenedor grid gap-8 lg:grid-cols-[1fr_1.6fr]">
        <h2 className="text-[2.2rem]">Preguntas frecuentes</h2>
        <dl className="space-y-6">{faq.map(([q, a]) => <div key={q}><dt className="font-display text-[1.2rem]">{q}</dt><dd className="mt-1 text-roca">{a}</dd></div>)}</dl>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro py-16 sm:py-20">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[2.2rem]">Únete a la causa explorando</h2>
          <p className="mt-4 flex gap-2 text-white"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-sol" />{negocio.direccion}</p>
          <a href={negocio.mapa} className="enlace mt-2 inline-block" target="_blank" rel="noopener">Abrir en Google Maps</a>
          <p className="mt-4">Horario: <strong className="text-white">{negocio.horario}</strong></p>
        </div>
        <div>
          <a href={waInfo} className="btn" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.telefono}</a>
          <p className="mt-5"><a href={negocio.telefonoHref} className="enlace">Llamar al {negocio.telefono}</a></p>
          <p className="mt-2"><a href={`mailto:${negocio.correo}`} className="enlace">{negocio.correo}</a></p>
          <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">{negocio.redes.map(([n, u]) => <a key={n} href={u} className="enlace" target="_blank" rel="noopener">{n}</a>)}</p>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-[#051c26] pb-28 pt-8 text-white/75 lg:pb-8">
      <div className="contenedor flex flex-col gap-2 text-[0.95rem] sm:flex-row sm:justify-between">
        <p className="font-bold text-white">Explora Vallarta</p>
        <p>Experiencias guiadas por biólogos marinos en la Bahía de Banderas.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/15 bg-abismo text-white lg:hidden">
      <a href={waInfo} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-sol text-[0.9rem] font-bold text-abismo"><IconoWa />WhatsApp</a>
      <a href={negocio.telefonoHref} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Distancia />
        <Tours />
        <Reservar />
        <Conservacion />
        <Preguntas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
