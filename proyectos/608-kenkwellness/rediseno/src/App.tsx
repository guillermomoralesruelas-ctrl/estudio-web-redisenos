import { useState } from 'react';
import { clases, equipo, foto, fotos, membresias, negocio, pilares, servicios, wa, waGeneral, type Foto, type Pilar } from './data/content';

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

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-noche/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img src={foto('logo.webp')} width={700} height={251} alt="Kenkō, Casa Holística" className="h-11 w-auto" /></a>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-[0.95rem] font-bold text-noche md:flex">
          <a href="#plan" className="hover:text-teal-hondo hover:underline">Tu Plan 360</a>
          <a href="#clases" className="hover:text-teal-hondo hover:underline">Clases</a>
          <a href="#equipo" className="hover:text-teal-hondo hover:underline">Equipo</a>
          <a href="#contacto" className="hover:text-teal-hondo hover:underline">Ubicación</a>
        </nav>
        <a href={waGeneral} target="_blank" rel="noopener" className="btn hidden !min-h-0 !py-2 sm:inline-flex"><IconoWa /> Agendar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="bg-rosa">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:py-20">
        <div className="min-w-0">
          <p className="font-bold text-morado">Casa holística en Naucalpan, Estado de México</p>
          <h1 className="mt-4 text-4xl sm:text-[3.4rem]">Salud integral para el equilibrio vital</h1>
          <p className="mt-6 max-w-xl text-lg">Somos una casa holística enfocada en proveer salud entre <strong className="text-noche">mente, espíritu y cuerpo</strong> utilizando técnicas ancestrales, modernas y alternativas para lograr un total equilibrio.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn" target="_blank" rel="noopener"><IconoWa /> Agendar por WhatsApp</a>
            <a href="#plan" className="btn-linea">Arma tu Plan 360</a>
          </div>
        </div>
        <div className="min-w-0">
          <Img f={fotos.loto} eager className="aspect-[3/2] w-full rounded-t-[12rem] rounded-b-2xl object-cover" />
        </div>
      </div>
    </section>
  );
}

function Filosofia() {
  return (
    <section className="py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-4xl">“Kenko” significa salud en japonés</h2>
          <p className="mt-6">Queremos darles la bienvenida a esta su casa KenKo, una aventura que Claudia García y Lucía García hemos emprendido juntas; ambas somos unas apasionadas de la salud integral y el equilibrio vital.</p>
          <p className="mt-4">Somos un hogar donde nuestra filosofía de vida es brindar a la comunidad toda la confianza de un espacio alternativo diferente, que permita a todos los que llegan un lugar de paz, armonía y alegría.</p>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            <div><dt className="font-titulo text-xl text-noche">Misión</dt><dd className="mt-1">Brindar a todos los que llegan la mejor opción de salud integral para lograr el equilibrio vital.</dd></div>
            <div><dt className="font-titulo text-xl text-noche">Visión</dt><dd className="mt-1">Ser el hogar en donde habita la vida en equilibrio.</dd></div>
          </dl>
          <p className="mt-6 text-[0.98rem]"><strong className="text-noche">Valores:</strong> experiencia, confianza, bienestar, armonía, honestidad, equilibrio, apapacho.</p>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-3 self-start">
          <Img f={fotos.repisas} className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover" />
          <Img f={fotos.giftcard} className="col-span-2 aspect-[16/9] w-full rounded-2xl object-cover sm:col-span-1 sm:aspect-[4/3]" />
          <p className="col-span-2 self-end text-[0.95rem] sm:col-span-1">Con nuestras tarjetas de regalo puedes regalar bienestar a esa persona especial. <a href={wa('Hola, quiero regalar una Gift Card de Kenkō.')} className="enlace" target="_blank" rel="noopener">Pedir una Gift Card</a></p>
        </div>
      </div>
    </section>
  );
}

// "Tu Plan 360": un mandala de tres pilares; cada servicio elegido abre un pétalo en su pilar.
const COLOR: Record<Pilar, { lleno: string; borde: string }> = {
  cuerpo: { lleno: '#3a878f', borde: '#2f6f76' },
  mente: { lleno: '#67568c', borde: '#4f416f' },
  espiritu: { lleno: '#c98bb3', borde: '#9c5d86' },
};
const CENTRO_ANGULO: Record<Pilar, number> = { cuerpo: -90, mente: 30, espiritu: 150 };

function Mandala({ elegidos }: { elegidos: Set<string> }) {
  const completo = pilares.every((p) => servicios.some((s) => s.pilar === p.id && elegidos.has(s.id)));
  const tocados = pilares.filter((p) => servicios.some((s) => s.pilar === p.id && elegidos.has(s.id))).length;
  return (
    <svg viewBox="0 0 400 400" className="mx-auto h-auto w-full max-w-[26rem]" role="img" aria-label={`Mandala de tres pilares: ${elegidos.size} servicios elegidos, ${tocados} de 3 pilares.`}>
      <circle cx="200" cy="200" r="196" fill="#fff2fa" />
      <circle cx="200" cy="200" r="178" fill="none" stroke="#e9c8dc" strokeWidth="1.5" strokeDasharray="2 6" />
      {pilares.map((p) => {
        const lista = servicios.filter((s) => s.pilar === p.id);
        const paso = 100 / lista.length;
        return lista.map((s, i) => {
          const ang = CENTRO_ANGULO[p.id] - 50 + paso * (i + 0.5);
          const on = elegidos.has(s.id);
          return (
            <g key={s.id} transform={`translate(200 200) rotate(${ang + 90}) translate(0 -62)`}>
              <path className="petalo" data-on={on} d="M0 0 C -22 -30, -18 -78, 0 -104 C 18 -78, 22 -30, 0 0 Z"
                fill={on ? COLOR[p.id].lleno : '#ffffff'} stroke={COLOR[p.id].borde} strokeWidth="2" opacity={on ? 1 : 0.85} />
            </g>
          );
        });
      })}
      {pilares.map((p) => {
        const a = (CENTRO_ANGULO[p.id] * Math.PI) / 180;
        return <text key={p.id} x={200 + Math.cos(a) * 184} y={200 + Math.sin(a) * 184 + 6} textAnchor="middle" fontSize="15" fontWeight="700" fill="#322f52" stroke="#fff2fa" strokeWidth="5" paintOrder="stroke">{p.nombre}</text>;
      })}
      <circle cx="200" cy="200" r="56" fill={completo ? '#322f52' : '#ffffff'} stroke="#322f52" strokeWidth="2" />
      <text x="200" y={completo ? 208 : 196} textAnchor="middle" fontSize={completo ? 26 : 22} fontFamily="Prata, Georgia, serif" fill={completo ? '#ffffff' : '#322f52'}>{completo ? '360°' : `${tocados} de 3`}</text>
      {!completo && <text x="200" y="220" textAnchor="middle" fontSize="13" fill="#3d3a4f">pilares</text>}
    </svg>
  );
}

function Plan360() {
  const [elegidos, setElegidos] = useState<Set<string>>(() => new Set(['masaje', 'mindfulness']));
  const alternar = (id: string) => setElegidos((prev) => { const n = new Set(prev); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  const lista = servicios.filter((s) => elegidos.has(s.id));
  const total = lista.reduce((t, s) => t + (s.precio ?? 0), 0);
  const sinPrecio = lista.filter((s) => s.precio === null);
  const tocados = pilares.filter((p) => lista.some((s) => s.pilar === p.id));
  const mensaje = wa(lista.length
    ? `Hola, quiero armar mi Plan Wellness KenKo 360 con: ${lista.map((s) => s.nombre).join(', ')}. ¿Me ayudan a agendar mi primera sesión?`
    : 'Hola, quiero agendar mi entrevista para el Plan Wellness KenKo 360.');

  return (
    <section id="plan" className="bg-white py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">Tu Plan 360</h2>
          <p className="mt-5 text-lg">Su Fórmula KenKo 360 trabaja los tres pilares de la salud: <strong className="text-noche">mente, espíritu y cuerpo, o bien… sólo alguno</strong>. Toca los servicios que te llaman la atención: cada uno abre un pétalo en su pilar y abajo ves cuánto suman sus precios.</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <Mandala elegidos={elegidos} />
            <div className="mt-6 rounded-2xl bg-noche p-6 text-white/90" aria-live="polite">
              {lista.length === 0 ? (
                <p>Elige al menos un servicio, o pide tu entrevista para que su equipo arme tu plan.</p>
              ) : (
                <>
                  <p className="text-sm text-agua">{lista.length} {lista.length === 1 ? 'servicio' : 'servicios'} en {tocados.length} {tocados.length === 1 ? 'pilar' : 'pilares'}</p>
                  <p className="cifra mt-1 font-titulo text-4xl text-white">{pesos(total)}</p>
                  <p className="mt-2 text-sm">Suma de los precios publicados por sesión{sinPrecio.length ? `; ${sinPrecio.map((s) => s.nombre.toLowerCase()).join(', ')} sin precio publicado` : ''}.</p>
                </>
              )}
              <a href={mensaje} className="btn-claro mt-5 w-full" target="_blank" rel="noopener"><IconoWa /> {lista.length ? 'Agendar este plan' : 'Pedir mi entrevista'}</a>
            </div>
          </div>

          <div className="min-w-0 space-y-8">
            {pilares.map((p) => (
              <fieldset key={p.id}>
                <legend className="flex items-center gap-3 font-titulo text-2xl text-noche">
                  <span className="inline-block h-3 w-3 rounded-full" style={{ background: COLOR[p.id].lleno }} aria-hidden="true" />
                  {p.nombre}
                </legend>
                <p className="mt-1 text-[0.98rem]">{p.texto}</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {servicios.filter((s) => s.pilar === p.id).map((s) => {
                    const on = elegidos.has(s.id);
                    return (
                      <button key={s.id} type="button" aria-pressed={on} onClick={() => alternar(s.id)}
                        className={`min-w-0 rounded-xl border-2 p-3 text-left transition-colors ${on ? 'border-noche bg-rosa' : 'border-noche/10 bg-white hover:border-noche/40'}`}>
                        <span className="flex items-baseline justify-between gap-3">
                          <span className="font-bold text-noche">{on ? '✓ ' : ''}{s.nombre}</span>
                          <span className="cifra shrink-0 text-sm font-bold text-morado">{s.precio ? pesos(s.precio) : 'Preguntar'}</span>
                        </span>
                        <span className="mt-1 block text-sm leading-snug">{s.detalle}</span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            ))}
            <p className="text-sm">Precios de su catálogo, talleres y membresías. Su plan real empieza con una plática con sus expertas sobre tu salud física, psicológica y emocional, y tus inquietudes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Clases() {
  return (
    <section id="clases" className="py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-4xl">Clases de yoga, meditación y respiración</h2>
          <p className="mt-6">{clases.texto}</p>
          <div className="mt-8 rounded-2xl border-2 border-teal/40 bg-white p-6">
            <h3 className="text-xl">Yoga</h3>
            <p className="mt-2">{clases.yoga}</p>
            <p className="mt-3 font-bold text-noche">{clases.horario}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {clases.paquetes.map((p) => (
                <li key={p.nombre} className="min-w-0 rounded-lg bg-rosa p-3">
                  <span className="flex items-baseline justify-between gap-2"><span className="font-bold text-noche">{p.nombre}</span><span className="cifra font-bold text-morado">{p.precio}</span></span>
                  {p.nota && <span className="mt-1 block text-sm">{p.nota}</span>}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">{clases.notaPaquetes}</p>
            <a href={wa('Hola, quiero información de las clases de yoga y sus horarios. ¿Tienen clase muestra?')} className="btn mt-6" target="_blank" rel="noopener"><IconoWa /> Preguntar por una clase</a>
          </div>
          <h3 className="mt-12 text-2xl">Membresías</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {membresias.map((m) => (
              <div key={m.nombre} className="min-w-0 rounded-2xl bg-white p-5">
                <p className="font-titulo text-xl text-noche">{m.nombre}</p>
                <p className="cifra mt-1 font-bold text-morado">{m.precio}</p>
                <ul className="mt-3 space-y-1 text-[0.95rem]">{m.incluye.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
        <div className="grid min-w-0 gap-3 self-start">
          <Img f={fotos.luna} className="aspect-[3/2] w-full rounded-2xl object-cover" />
          <Img f={fotos.invertida} className="aspect-[3/2] w-full rounded-2xl object-cover" />
        </div>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section id="equipo" className="noche bg-noche py-20 text-white/90 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="min-w-0">
          <Img f={fotos.equipo} className="aspect-[3/2] w-full rounded-2xl object-cover" />
          <p className="mt-6">En KenKo, nuestra principal preocupación es la salud integral para el equilibrio vital; por eso nos hemos dado a la tarea de conjuntar a un grupo de expertas, que sin duda son la médula y parte muy importante de esta casa.</p>
        </div>
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-4xl">Nuestro equipo está para tu servicio</h2>
          <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {equipo.map((p) => (
              <li key={p.nombre} className="min-w-0 border-t border-white/15 pt-4">
                <p className="font-titulo text-lg text-white">{p.nombre}</p>
                <p className="mt-1 text-[0.95rem] text-lila">{p.rol}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-white py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-4xl">Te esperamos en tu casa holística</h2>
          <p className="mt-5">Bienvenido a tu Casa Holística, el hogar donde podrás cultivar tu equilibrio.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.whatsappVisible}</a>
            <a href={`tel:${negocio.telefono.tel}`} className="btn-linea">Llamar al {negocio.telefono.visible}</a>
          </div>
          <p className="mt-8 font-bold text-noche">Dirección</p>
          <p className="mt-1">{negocio.direccion}</p>
          <p className="mt-4"><a href={`mailto:${negocio.correo}`} className="enlace break-all">{negocio.correo}</a></p>
          <p className="mt-6 flex flex-wrap gap-5">
            <a href={negocio.instagram} className="enlace" target="_blank" rel="noopener">Instagram</a>
            <a href={negocio.facebook} className="enlace" target="_blank" rel="noopener">Facebook</a>
            <a href={negocio.tiktok} className="enlace" target="_blank" rel="noopener">TikTok</a>
          </p>
        </div>
        <div className="min-w-0 flex flex-col gap-4">
          <iframe
            src={negocio.mapaEmbed}
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: '0.75rem' }}
            allowFullScreen
            loading="lazy"
            title={`Ubicación de ${negocio.nombre}`}
            className="w-full block"
          />
          <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace inline-block">Cómo llegar en Google Maps</a>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="noche bg-noche pb-28 pt-10 text-sm text-white/80 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4">
        <p className="font-titulo text-lg text-white">Kenkō Wellness, Casa Holística</p>
        <p>Naucalpan de Juárez, Estado de México</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-noche text-[0.8rem] font-bold text-white md:hidden">
      <a href={waGeneral} className="flex flex-col items-center gap-1 bg-morado py-3" target="_blank" rel="noopener"><IconoWa />WhatsApp</a>
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
      <a href="#plan" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-noche">Ir a Tu Plan 360</a>
      <Encabezado />
      <main>
        <Portada />
        <Filosofia />
        <Plan360 />
        <Clases />
        <Equipo />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
