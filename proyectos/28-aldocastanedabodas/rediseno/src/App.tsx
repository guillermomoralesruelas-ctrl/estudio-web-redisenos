import { useMemo, useState } from 'react';
import {
  acerca, capitulos, cifras, entrega, incluye, momentos, negocio, paquetes, preguntas, testimonios, wa, web, type Momento,
} from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;

function Foto({ n, alt, className = '', prioridad = false }: { n: string; alt: string; className?: string; prioridad?: boolean }) {
  const [w, h] = medidas[n] ?? [1400, 788];
  return (
    <img src={web(`${n}.webp`)} alt={alt} width={w} height={h} className={`object-cover ${className}`}
      loading={prioridad ? 'eager' : 'lazy'} decoding="async" fetchPriority={prioridad ? 'high' : 'auto'} />
  );
}

const Icono = {
  wa: <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z" /></svg>,
  tel: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>,
  pin: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
};

function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const enlaces = [['#capitulos', 'Tu boda'], ['#paquetes', 'Paquetes'], ['#aldo', 'Acerca de Aldo'], ['#preguntas', 'Preguntas'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-noche text-white">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Aldo Castañeda Bodas, inicio"><img src={web('logo-blanco.png')} alt="Aldo Castañeda Bodas" width={medidas.logo[0]} height={medidas.logo[1]} className="h-9 w-auto" /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-sm">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-champan">{t}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={wa('Hola Aldo, quiero corroborar disponibilidad para mi boda.')} target="_blank" rel="noopener" className="btn-champan hidden !py-3 sm:inline-flex">Agenda tu boda</a>
          <button type="button" className="p-2 lg:hidden" aria-expanded={abierto} aria-controls="menu-movil" onClick={() => setAbierto(!abierto)}>
            <span className="sr-only">Menú</span>
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-white/10 lg:hidden">
          <ul className="contenedor flex flex-col py-3">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} onClick={() => setAbierto(false)} className="block py-3 text-lg">{t}</a></li>)}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-noche text-white">
      <Foto n="hero" alt="Novio cargando a la novia durante el vals, entre mariposas de papel y luces" prioridad className="absolute inset-0 -z-10 h-full w-full" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-noche via-noche/55 to-noche/20" aria-hidden="true" />
      <div className="contenedor flex min-h-[78vh] flex-col justify-end pb-14 pt-32">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-champan">{negocio.oficio} · Guadalajara</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] sm:text-7xl">Tu historia de amor, <em className="text-champan">para toda la vida.</em></h1>
        <p className="mt-5 max-w-xl text-lg text-white/85">{entrega}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#capitulos" className="btn-champan">Arma el día de tu boda</a>
          <a href={negocio.video} target="_blank" rel="noopener" className="btn-linea">Ver película de boda</a>
        </div>
        <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/20 pt-6">
          {cifras.map((c) => (
            <div key={c.texto}><dt className="sr-only">{c.texto}</dt><dd><span className="block font-[family-name:var(--font-display)] text-4xl text-champan">{c.valor}</span><span className="text-sm text-white/80">{c.texto}</span></dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// ——— "Capítulo a capítulo": los 16 momentos de la boda y qué cubre cada paquete, con fecha y anticipo ———
function hoyGdl() {
  const s = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Mexico_City', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  return s;
}
function mesesEntre(a: string, b: string) {
  const [y1, m1, d1] = a.split('-').map(Number); const [y2, m2, d2] = b.split('-').map(Number);
  return (y2 - y1) * 12 + (m2 - m1) - (d2 < d1 ? 1 : 0);
}
const fechaLarga = (f: string) => new Intl.DateTimeFormat('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${f}T12:00:00Z`));

function Capitulos() {
  const [paquete, setPaquete] = useState<(typeof paquetes)[number]['id']>('oro');
  const [fecha, setFecha] = useState('');
  const [abierto, setAbierto] = useState(capitulos[6].id);
  const p = paquetes.find((x) => x.id === paquete)!;
  const hoy = hoyGdl();
  const meses = fecha ? mesesEntre(hoy, fecha) : null;
  const cubiertos = capitulos.filter((_, i) => i >= p.inicio);
  const grupos = useMemo(() => (Object.keys(momentos) as Momento[]).map((m) => ({ m, caps: capitulos.map((c, i) => ({ ...c, i })).filter((c) => c.momento === m) })), []);
  const actual = capitulos.find((c) => c.id === abierto)!;
  const iActual = capitulos.indexOf(actual);

  let aviso = 'Elige la fecha de tu boda para saber si estás a tiempo.';
  if (meses !== null) {
    if (fecha < hoy) aviso = 'Esa fecha ya pasó: elige la fecha de tu boda.';
    else if (meses >= 10) aviso = `Faltan ${meses} meses: estás en el tiempo ideal (de 10 a 12 meses antes, o más) para apartar.`;
    else aviso = `Faltan ${meses < 1 ? 'menos de un mes' : `${meses} ${meses === 1 ? 'mes' : 'meses'}`}: lo idóneo son 10 a 12 meses, así que escríbele cuanto antes para corroborar disponibilidad.`;
  }
  const mensaje = `Hola Aldo, ${fecha && fecha >= hoy ? `nuestra boda es el ${fechaLarga(fecha)}` : 'estamos planeando nuestra boda'}. Nos interesa el paquete ${p.nombre} (desde ${pesos(p.desde)}), de "${capitulos[p.inicio].nombre}" a "Ramo & Liga". ¿Tienes disponibilidad?`;

  return (
    <section id="capitulos" className="py-16 lg:py-24">
      <div className="contenedor">
        <p className="eyebrow">Capítulo a capítulo</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Cada capítulo de tu historia merece ser contado</h2>
        <p className="mt-4 max-w-2xl text-gris">Antes de tu fecha, Aldo te ayuda a armar el itinerario de foto y video. Elige un paquete y mira qué momentos de tu día cubre, del arreglo hasta que la novia lanza el ramo.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_22rem]">
          <div>
            <fieldset>
              <legend className="text-xs font-bold uppercase tracking-[0.22em] text-gris">Paquete</legend>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {paquetes.map((x) => (
                  <button key={x.id} type="button" aria-pressed={paquete === x.id} onClick={() => setPaquete(x.id)}
                    className={`border px-3 py-3 text-left transition-colors ${paquete === x.id ? 'border-noche bg-noche text-white' : 'border-black/15 bg-white hover:border-noche'}`}>
                    <span className="block font-[family-name:var(--font-display)] text-2xl">{x.nombre}</span>
                    <span className={`text-sm ${paquete === x.id ? 'text-champan' : 'text-gris'}`}>desde {pesos(x.desde)}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <ol className="mt-8 space-y-6">
              {grupos.map(({ m, caps }) => (
                <li key={m}>
                  <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-gris" style={{ fontFamily: 'var(--font-sans)' }}>{momentos[m]}</h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {caps.map((c) => {
                      const dentro = c.i >= p.inicio;
                      return (
                        <li key={c.id}>
                          <button type="button" onClick={() => setAbierto(c.id)} aria-pressed={abierto === c.id}
                            className={`flex items-center gap-2 border px-3 py-2 text-sm transition-colors ${abierto === c.id ? 'ring-2 ring-champan ring-offset-2 ring-offset-marfil' : ''} ${dentro ? 'border-noche bg-noche text-white' : c.momento === 'antes' ? 'border-dashed border-black/30 bg-transparent text-gris' : 'border-black/15 bg-white text-gris line-through decoration-black/30'}`}>
                            <span aria-hidden="true" className={`size-2 rounded-full ${dentro ? 'bg-champan' : 'bg-black/20'}`} />
                            {c.nombre}
                            <span className="sr-only">{dentro ? '(incluido)' : c.momento === 'antes' ? '(pregúntale a Aldo)' : '(fuera de este paquete)'}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-gris"><strong className="text-tinta">{p.nombre}:</strong> {p.cobertura} {cubiertos.length} de los 15 capítulos del día. El Save the date es una sesión antes de la boda: pregúntale a Aldo cómo agregarlo. Si buscas algo distinto, también arma galerías personalizadas.</p>

            <figure className="mt-8 grid overflow-hidden bg-noche text-white sm:grid-cols-[1.3fr_1fr]">
              <Foto n={`s-${actual.id}`} alt={actual.alt} className="aspect-[16/10] h-full w-full" />
              <figcaption className="p-6" aria-live="polite">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-champan">Capítulo {iActual + 1} · {momentos[actual.momento]}</p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-3xl">{actual.nombre}</p>
                <p className="mt-3 text-white/85">{actual.texto}</p>
                <p className="mt-4 text-sm text-champan">{iActual >= p.inicio ? `Incluido en ${p.nombre}` : actual.momento === 'antes' ? 'Sesión aparte, antes de la boda' : `Desde el paquete ${paquetes.find((x) => iActual >= x.inicio)?.nombre}`}</p>
              </figcaption>
            </figure>
          </div>

          <aside className="self-start bg-white p-6 shadow-sm ring-1 ring-black/5 lg:sticky lg:top-24">
            <p className="font-[family-name:var(--font-display)] text-2xl">Tu fecha</p>
            <label htmlFor="fecha" className="mt-4 block text-xs font-bold uppercase tracking-[0.22em] text-gris">Fecha de la boda</label>
            <input id="fecha" type="date" min={hoy} value={fecha} onChange={(e) => setFecha(e.target.value)} className="mt-2 w-full border border-black/20 bg-marfil px-3 py-2.5 text-base" />
            <p className="mt-3 text-sm" aria-live="polite">{aviso}</p>
            <dl className="mt-6 space-y-3 border-t border-black/10 pt-5 text-sm">
              <div className="flex justify-between gap-4"><dt className="text-gris">Paquete {p.nombre}</dt><dd className="font-bold">desde {pesos(p.desde)}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-gris">Anticipo para apartar (50%)</dt><dd className="font-bold">desde {pesos(p.desde / 2)}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-gris">Viáticos en México</dt><dd className="font-bold">sin costo</dd></div>
            </dl>
            <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn-noche mt-6 w-full">{Icono.wa}Corroborar disponibilidad</a>
            <p className="mt-3 text-xs text-gris">Precios "desde" de su página de precios. Aldo confirma el total según tu boda.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Paquetes() {
  return (
    <section id="paquetes" className="bg-noche py-16 text-white lg:py-24">
      <div className="contenedor">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-champan">Es hora de elegir paquete</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Lo que podemos prometer</h2>
        <p className="mt-4 max-w-2xl text-white/80">{entrega}</p>
        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {paquetes.map((x) => (
            <li key={x.id} className={`flex flex-col border p-7 ${x.id === 'oro' ? 'border-champan' : 'border-white/15'}`}>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-champan">Galería</p>
              <h3 className="mt-1 text-4xl">{x.nombre}</h3>
              <p className="mt-4 text-white/85">{x.texto}</p>
              <p className="mt-3 text-sm text-white/70">{x.cobertura}</p>
              <p className="mt-auto pt-6 font-[family-name:var(--font-display)] text-4xl">{pesos(x.desde)} <span className="font-[family-name:var(--font-sans)] text-sm text-white/70">MN, desde</span></p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-white/80"><strong className="text-white">Galería personalizada:</strong> ¿buscas un poco más? Aldo te ayuda a planificar tu experiencia especial.</p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="text-3xl">Lo hacemos de corazón</h3>
            <ul className="mt-5 space-y-3">
              {incluye.map((t) => <li key={t} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-champan" aria-hidden="true" />{t}</li>)}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Foto n="precios-5" alt="Novia en una escalinata con el velo al viento" className="aspect-[3/4] w-full" />
            <Foto n="acerca-6" alt="Novios abrazados bajo arcos de cantera" className="mt-8 aspect-[3/4] w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Aldo() {
  return (
    <section id="aldo" className="py-16 lg:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Foto n="aldo" alt="Fotógrafo con su cámara durante una boda" className="mx-auto aspect-[3/4] w-full max-w-sm" />
        <div>
          <p className="eyebrow">Acerca de Aldo</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Enamorado de las bodas</h2>
          {acerca.map((t) => <p key={t} className="mt-4 text-lg text-gris">{t}</p>)}
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonios.map((t) => (
              <li key={t.autor}><figure className="h-full border-t-2 border-champan pt-4"><blockquote className="text-sm">“{t.texto}”</blockquote><figcaption className="mt-3 font-[family-name:var(--font-display)] text-lg">{t.autor}</figcaption></figure></li>
            ))}
          </ul>
          <a href={negocio.resenas} target="_blank" rel="noopener" className="mt-6 inline-block text-sm font-bold text-champan-hondo underline underline-offset-4">Más de 146 reseñas en Google Maps</a>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="bg-lino py-16 lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Antes de apartar tu fecha</h2>
          <Foto n="acerca-4" alt="Novios saliendo de la iglesia entre aplausos de sus invitados" className="mt-8 aspect-[4/3] w-full" />
        </div>
        <div className="divide-y divide-black/10 border-y border-black/10">
          {preguntas.map((q) => (
            <details key={q.p} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">{q.p}<span className="text-2xl text-champan-hondo transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary>
              <p className="mt-2 text-gris">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-noche py-16 text-white lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-champan">Ven a visitarnos</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">De la boda solo quedan tres cosas: las fotos, los videos y los anillos</h2>
          <p className="mt-5 text-white/80">Agenda una cita con Aldo para platicar todos los detalles de tu boda.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola Aldo, quiero corroborar disponibilidad para mi boda.')} target="_blank" rel="noopener" className="btn-champan">{Icono.wa}WhatsApp</a>
            <a href={negocio.maps} target="_blank" rel="noopener" className="btn-linea">{Icono.pin}Cómo llegar</a>
          </div>
        </div>
        <dl className="divide-y divide-white/10 border-y border-white/10 self-start">
          {[
            ['Estudio', <a href={negocio.maps} target="_blank" rel="noopener" className="hover:text-champan">{negocio.direccion}</a>],
            ['Teléfono y WhatsApp', <a href={negocio.telefonoHref} className="hover:text-champan">{negocio.telefono}</a>],
            ['Correo', <a href={`mailto:${negocio.email}`} className="hover:text-champan">{negocio.email}</a>],
            ['Síguenos', <span className="flex flex-wrap gap-x-4">{[['Instagram', negocio.instagram], ['TikTok', negocio.tiktok], ['Facebook', negocio.facebook], ['YouTube', negocio.youtube]].map(([t, h]) => <a key={t} href={h} target="_blank" rel="noopener" className="underline underline-offset-4 hover:text-champan">{t}</a>)}</span>],
          ].map(([t, v]) => (
            <div key={t as string} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-4"><dt className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">{t}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-white/10 bg-noche pb-28 pt-10 text-white/70 lg:pb-10">
      <div className="contenedor flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <img src={web('logo-blanco.png')} alt="Aldo Castañeda Bodas" width={medidas.logo[0]} height={medidas.logo[1]} loading="lazy" className="h-10 w-auto self-start" />
        <p className="text-xs">© {new Date().getFullYear()} Aldo Castañeda Bodas · Guadalajara, Jalisco</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-noche text-white lg:hidden">
      <a href={wa('Hola Aldo, quiero corroborar disponibilidad para mi boda.')} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 bg-champan py-3 text-xs font-bold text-noche">{Icono.wa}WhatsApp</a>
      <a href={negocio.telefonoHref} className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.tel}Llamar</a>
      <a href={negocio.maps} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.pin}Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-noche">Saltar al contenido</a>
      <Cabecera />
      <main id="contenido">
        <Portada />
        <Capitulos />
        <Paquetes />
        <Aldo />
        <Preguntas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
