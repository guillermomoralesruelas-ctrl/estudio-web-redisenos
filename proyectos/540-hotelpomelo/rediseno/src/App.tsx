import { useEffect, useState } from 'react';
import {
  bienvenida, chiringuito, espacios, eventos, experiencias, fotos, habitaciones, hero, ilustraciones,
  nav, negocio, nosotros, pomeloEs, troncones, type Foto,
} from './data/content';
import { diaSolar, duracion, fechaLocal, hora } from './sol';

const externo = { target: '_blank', rel: 'noopener' } as const;

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
  ),
  tel: (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" strokeLinejoin="round" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
  cal: (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
  ),
};

function Img({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return (
    <img src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} loading={eager ? 'eager' : 'lazy'} decoding="async"
      className={`size-full object-cover ${className}`} />
  );
}

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-cal/92 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="shrink-0" aria-label="Hotel Pomelo, ir al inicio">
          <img src={fotos.logo.src} alt="Hotel Pomelo" width={600} height={315} className="h-10 w-auto md:h-12" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="text-[0.95rem] font-medium text-tinta/80 hover:text-granate">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={negocio.reservar} {...externo} className="btn-granate hidden sm:inline-flex">Reservar</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir navegación"
            className="grid size-11 place-items-center rounded-full border border-tinta/20 text-tinta lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-tinta/10 bg-cal lg:hidden" aria-label="Móvil">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="border-b border-tinta/10 py-3 font-serif text-2xl text-tinta last:border-0">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

/** Elemento memorable: el día en Troncones medido en atardeceres, calculado en vivo para la fecha de hoy. */
function Atardecer() {
  const [ahora, setAhora] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setAhora(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  const { lat, lon, zona } = troncones;
  const hoy = fechaLocal(ahora, zona);
  const sol = diaSolar(hoy.y, hoy.m, hoy.d, lat, lon);
  const manana = diaSolar(hoy.y, hoy.m, hoy.d + 1, lat, lon);
  const t = ahora.getTime();
  const antesDelAmanecer = t < sol.amanecer.getTime();
  const deDia = !antesDelAmanecer && t < sol.atardecer.getTime();

  let frase: string;
  if (deDia) frase = `Hoy el sol se pone a las ${hora(sol.atardecer, zona)}. Faltan ${duracion(sol.atardecer.getTime() - t)}.`;
  else if (antesDelAmanecer) frase = `Amanece a las ${hora(sol.amanecer, zona)} y el sol se pondrá a las ${hora(sol.atardecer, zona)}.`;
  else frase = `Hoy el sol se puso a las ${hora(sol.atardecer, zona)}. Mañana amanece a las ${hora(manana.amanecer, zona)}.`;

  // Posición del sol sobre el arco del día (0 = amanecer, 1 = atardecer).
  const avance = deDia ? (t - sol.amanecer.getTime()) / (sol.atardecer.getTime() - sol.amanecer.getTime()) : antesDelAmanecer ? 0 : 1;
  const ang = Math.PI * (1 - avance);
  const cx = 110 + 90 * Math.cos(ang);
  const cy = 100 - 80 * Math.sin(ang);

  return (
    <div className="grid grid-cols-[6.5rem_1fr] items-center gap-4 rounded-2xl bg-cal/95 p-4 text-tinta shadow-xl shadow-tinta/20 backdrop-blur sm:p-6 md:block">
      <p className="col-start-2 font-serif text-lg leading-snug md:text-xl">Medimos el tiempo en atardeceres</p>
      <svg viewBox="0 0 220 114" className="col-start-1 row-span-2 row-start-1 w-full md:mt-3 md:max-w-[16rem]" role="img" aria-label={`Recorrido del sol hoy en Troncones: sale a las ${hora(sol.amanecer, zona)} y se pone a las ${hora(sol.atardecer, zona)}`}>
        <path d="M20 100 A90 80 0 0 1 200 100" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="3 5" />
        <line x1="6" y1="100" x2="214" y2="100" stroke="var(--color-marino)" strokeWidth="2" />
        <circle className="sol" cx={cx} cy={cy} r="11" fill={deDia ? 'var(--color-pomelo)' : 'var(--color-marino)'} opacity={deDia ? 1 : 0.45} />
        <text x="20" y="111" fontSize="11" fill="currentColor" textAnchor="middle" className="max-md:hidden">{hora(sol.amanecer, zona)}</text>
        <text x="200" y="111" fontSize="11" fill="currentColor" textAnchor="middle" className="max-md:hidden">{hora(sol.atardecer, zona)}</text>
      </svg>
      <p className="col-start-2 text-[0.95rem] leading-snug md:mt-2 md:leading-relaxed" aria-live="polite">{frase}</p>
    </div>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-tinta">
      <picture>
        <source media="(max-width: 767px)" srcSet={fotos.portadaVertical.src} width={fotos.portadaVertical.w} height={fotos.portadaVertical.h} />
        <img src={fotos.portada.src} alt={fotos.portada.alt} width={fotos.portada.w} height={fotos.portada.h} fetchPriority="high"
          className="absolute inset-0 -z-20 size-full object-cover" />
      </picture>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-tinta/85 via-tinta/45 to-tinta/30 md:via-tinta/25 md:to-tinta/5" aria-hidden="true" />
      <div className="contenedor grid min-h-[82svh] items-end gap-8 pb-10 pt-20 md:min-h-[88svh] md:grid-cols-[1fr_auto] md:pb-14">
        <div className="min-w-0 text-white">
          <p className="text-lg font-medium text-white/90">{hero.lugar}</p>
          <h1 className="mt-3 text-[clamp(2.8rem,8vw,6.2rem)] leading-[0.98] text-white">
            {hero.titulo[0]}<br />{hero.titulo[1]}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90">{hero.bajada}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={negocio.reservar} {...externo} className="btn-granate">{Icono.cal} Reservar tu estancia</a>
            <a href={negocio.whatsapp} {...externo} className="btn-claro">{Icono.wa} Escríbenos</a>
          </div>
        </div>
        <div className="w-full min-w-0 md:w-[19rem]">
          <Atardecer />
        </div>
      </div>
    </section>
  );
}

function Bienvenida() {
  return (
    <section className="contenedor grid gap-10 py-20 md:grid-cols-12 md:py-28">
      <div className="md:col-span-5">
        <div className="encalado aspect-[2/3] overflow-hidden"><Img foto={fotos.camastros} /></div>
      </div>
      <div className="min-w-0 md:col-span-7 md:pl-6 md:pt-10">
        <h2 className="text-[clamp(2rem,4.2vw,3.2rem)]">{bienvenida.titulo}</h2>
        {bienvenida.parrafos.map((p) => <p key={p.slice(0, 20)} className="mt-5 max-w-2xl">{p}</p>)}
        <blockquote className="mt-10 border-l-4 border-granate pl-5 font-serif text-2xl leading-snug text-granate md:text-[1.7rem]">
          {bienvenida.cita}
        </blockquote>
      </div>
    </section>
  );
}

function Habitaciones() {
  const [principal, ...resto] = habitaciones.fotos;
  return (
    <section id="habitaciones" className="bg-arena py-20 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-4xl text-[clamp(2rem,4.4vw,3.4rem)]">{habitaciones.titulo}</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-14">
          <p>{habitaciones.intro}</p>
          <p className="font-serif text-2xl leading-snug text-marino md:text-3xl">{habitaciones.afuera}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          <div className="col-span-2 row-span-2 aspect-[3/2] overflow-hidden rounded-xl md:aspect-auto"><Img foto={principal} /></div>
          {resto.map((f) => <div key={f.src} className="aspect-[3/2] overflow-hidden rounded-xl"><Img foto={f} /></div>)}
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <div className="min-w-0 md:col-span-7">
            <h3 className="text-3xl md:text-4xl">{habitaciones.tipo}</h3>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Características">
              {habitaciones.datos.map((d) => <li key={d} className="rounded-full border border-tinta/20 bg-cal px-4 py-1.5 text-[0.95rem] font-medium text-tinta">{d}</li>)}
            </ul>
            {habitaciones.descripcion.map((p) => <p key={p.slice(0, 20)} className="mt-5">{p}</p>)}
            <p className="mt-6 font-serif text-xl text-granate">{habitaciones.remate}</p>
            <a href={negocio.reservar} {...externo} className="btn-granate mt-7">{Icono.cal} Ver disponibilidad</a>
          </div>
          <div className="min-w-0 rounded-2xl bg-cal p-6 md:col-span-5 md:p-8">
            <h3 className="text-2xl">Habitaciones equipadas con</h3>
            <ul className="mt-4 space-y-2">{habitaciones.equipadas.map((a) => <li key={a} className="border-b border-tinta/10 pb-2">{a}</li>)}</ul>
            <h3 className="mt-8 text-2xl">Incluido en el precio de la habitación</h3>
            <ul className="mt-4 space-y-2">{habitaciones.incluido.map((a) => <li key={a} className="border-b border-tinta/10 pb-2">{a}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Espacios() {
  const [a, b, c] = espacios.fotos;
  return (
    <section className="contenedor grid gap-10 py-20 md:grid-cols-12 md:py-28">
      <div className="min-w-0 md:col-span-5">
        <h2 className="text-[clamp(2rem,4vw,3rem)]">{espacios.titulo}</h2>
        {espacios.parrafos.map((p) => <p key={p.slice(0, 20)} className="mt-5">{p}</p>)}
        <p className="mt-6 font-serif text-xl leading-snug text-tinta">{espacios.remate}</p>
      </div>
      <div className="grid min-w-0 grid-cols-2 gap-3 md:col-span-7 md:gap-4">
        <div className="col-span-2 aspect-[3/2] overflow-hidden rounded-xl"><Img foto={a} /></div>
        <div className="aspect-square overflow-hidden rounded-xl"><Img foto={b} /></div>
        <div className="aspect-square overflow-hidden rounded-xl"><Img foto={c} /></div>
      </div>
    </section>
  );
}

function Chiringuito() {
  return (
    <section id="chiringuito" className="bg-marino-2 text-white">
      <div className="relative isolate">
        <div className="aspect-[4/3] md:aspect-[21/9]"><Img foto={chiringuito.foto} /></div>
        <div className="absolute inset-0 bg-gradient-to-t from-marino-2 via-marino-2/10 to-transparent" aria-hidden="true" />
      </div>
      <div className="contenedor -mt-16 pb-20 md:-mt-28 md:pb-28">
        <div className="relative grid gap-10 md:grid-cols-12">
          <div className="min-w-0 md:col-span-7">
            <img src={fotos.logoChiringuito.src} alt="El Chiringuito de Fran" width={600} height={193} loading="lazy" className="h-14 w-auto rounded-lg bg-cal px-4 py-2 md:h-16" />
            <h2 className="mt-8 text-[clamp(2.2rem,5vw,3.8rem)] text-white">{chiringuito.titulo}</h2>
            <p className="mt-2 font-serif text-xl text-white/85">{chiringuito.subtitulo}</p>
            <p className="mt-8 text-xl font-semibold text-white">{chiringuito.destacado}</p>
            {chiringuito.parrafos.map((p) => <p key={p.slice(0, 20)} className="mt-5 text-white/90">{p}</p>)}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={chiringuito.reservar} {...externo} className="btn-claro">{Icono.wa} Reserva una mesa</a>
            </div>
          </div>
          <div className="min-w-0 md:col-span-5 md:pt-24">
            <p className="rounded-2xl border border-white/25 p-6 font-serif text-2xl leading-snug">{chiringuito.reconocimiento}</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {chiringuito.detalle.map((f) => <div key={f.src} className="aspect-square overflow-hidden rounded-xl"><Img foto={f} /></div>)}
            </div>
          </div>
        </div>

        <h3 className="mt-20 text-3xl text-white md:text-4xl">Tres maneras de disfrutar nuestra cocina</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {chiringuito.maneras.map((m, i) => (
            <div key={m.titulo} className={`min-w-0 ${i === 1 ? 'md:mt-10' : ''}`}>
              <div className="encalado aspect-[4/3] overflow-hidden"><Img foto={m.foto} /></div>
              <h4 className="mt-4 font-serif text-2xl">{m.titulo}</h4>
              <p className="mt-1 text-white/85">{m.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experiencias() {
  const [sel, setSel] = useState(0);
  const e = experiencias[sel];
  return (
    <section id="experiencias" className="contenedor py-20 md:py-28">
      <h2 className="text-[clamp(2.2rem,5vw,3.6rem)]">¿Qué te apetece?</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-12 md:gap-12">
        <div className="min-w-0 md:col-span-5" role="tablist" aria-label="Experiencias">
          {experiencias.map((x, i) => (
            <button key={x.nombre} type="button" role="tab" id={`exp-${i}`} aria-selected={i === sel} aria-controls="exp-panel" onClick={() => setSel(i)}
              className={`flex w-full items-center justify-between border-b border-tinta/15 py-4 text-left font-serif text-2xl transition-colors md:text-[1.7rem] ${i === sel ? 'text-granate' : 'text-tinta hover:text-granate'}`}>
              {x.nombre}
              <span aria-hidden="true" className={`text-xl ${i === sel ? 'opacity-100' : 'opacity-0'}`}>→</span>
            </button>
          ))}
        </div>
        <div id="exp-panel" role="tabpanel" aria-labelledby={`exp-${sel}`} className="grid min-w-0 gap-6 sm:grid-cols-2 md:col-span-7">
          <div className="encalado aspect-[4/5] overflow-hidden bg-arena">
            <img key={e.foto.src} src={e.foto.src} alt={e.foto.alt} width={e.foto.w} height={e.foto.h} className="size-full object-cover" />
          </div>
          <div className="min-w-0 self-end">
            <h3 className="text-3xl">{e.nombre}</h3>
            <p className="mt-4">{e.texto}</p>
            <a href={e.whatsapp ?? negocio.whatsapp} {...externo} className="btn-marino mt-6">{Icono.wa} {e.whatsapp ? 'Agendar por WhatsApp' : 'Preguntar por WhatsApp'}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PomeloEs() {
  return (
    <section className="bg-arena py-20 md:py-24">
      <div className="contenedor">
        <h2 className="text-center text-[clamp(2rem,4.4vw,3.2rem)]">{pomeloEs.titulo}</h2>
        <ul className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {pomeloEs.frases.map((fr, i) => (
            <li key={fr.slice(0, 20)} className="min-w-0 text-center">
              <img src={ilustraciones[i].src} alt="" width={ilustraciones[i].w} height={ilustraciones[i].h} loading="lazy" className="mx-auto h-32 w-auto object-contain" />
              <p className="mt-5 text-tinta">{fr}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Eventos() {
  const [a, b, c] = eventos.fotos;
  return (
    <section id="eventos" className="contenedor py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="min-w-0 md:col-span-6">
          <h2 className="text-[clamp(2.2rem,5vw,3.6rem)]">{eventos.titulo}</h2>
          <p className="mt-6 text-lg font-medium text-tinta">{eventos.lead}</p>
          {eventos.parrafos.map((p) => <p key={p.slice(0, 20)} className="mt-5">{p}</p>)}
          <p className="mt-6 font-serif text-2xl leading-snug text-granate">{eventos.remate}</p>
          <a href={eventos.whatsapp} {...externo} className="btn-granate mt-8">{Icono.wa} Cuéntanos tu evento</a>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-3 md:col-span-6 md:gap-4">
          <div className="col-span-2 aspect-[3/2] overflow-hidden rounded-xl"><Img foto={a} /></div>
          <div className="aspect-[4/3] overflow-hidden rounded-xl"><Img foto={b} /></div>
          <div className="aspect-[4/3] overflow-hidden rounded-xl"><Img foto={c} /></div>
        </div>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="bg-granate text-white">
      <div className="contenedor grid items-center gap-10 py-20 md:grid-cols-12 md:py-24">
        <div className="md:col-span-4">
          <div className="mx-auto aspect-[4/5] max-w-xs overflow-hidden rounded-xl bg-cal md:max-w-none"><Img foto={fotos.franAngela} className="object-contain" /></div>
        </div>
        <div className="min-w-0 md:col-span-8 md:pl-8">
          <h2 className="text-[clamp(2.2rem,5vw,3.6rem)] text-white">{nosotros.titulo}</h2>
          {nosotros.parrafos.map((p) => <p key={p.slice(0, 20)} className="mt-5 max-w-2xl text-white/90">{p}</p>)}
          <p className="mt-6 font-serif text-2xl leading-snug">{nosotros.remate}</p>
          <a href={nosotros.historia} {...externo} className="btn-claro mt-8">Conoce nuestra historia</a>
        </div>
      </div>
    </section>
  );
}

function Visitanos() {
  return (
    <section id="contacto" className="contenedor grid gap-10 py-20 md:grid-cols-12 md:py-28">
      <div className="min-w-0 md:col-span-5">
        <h2 className="text-[clamp(2.2rem,5vw,3.6rem)]">Visítanos</h2>
        <address className="mt-6 not-italic text-lg text-tinta">{negocio.direccion.map((l) => <span key={l} className="block">{l}</span>)}</address>
        <dl className="mt-8 space-y-4">
          <div><dt className="font-semibold text-tinta">WhatsApp</dt><dd><a className="enlace" href={negocio.whatsapp} {...externo}>{negocio.whatsappVisible}</a></dd></div>
          <div><dt className="font-semibold text-tinta">Teléfono</dt><dd><a className="enlace" href={negocio.telefono}>{negocio.telefonoVisible}</a></dd></div>
          <div><dt className="font-semibold text-tinta">Correo</dt><dd><a className="enlace" href={`mailto:${negocio.email}`}>{negocio.email}</a></dd></div>
          <div><dt className="font-semibold text-tinta">Redes</dt><dd className="flex gap-5"><a className="enlace" href={negocio.instagram} {...externo}>Instagram</a><a className="enlace" href={negocio.facebook} {...externo}>Facebook</a></dd></div>
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={negocio.reservar} {...externo} className="btn-granate">{Icono.cal} Reservar</a>
          <a href={negocio.mapa} {...externo} className="btn-linea">{Icono.mapa} Cómo llegar</a>
        </div>
      </div>
      <a href={negocio.mapa} {...externo} className="group relative block min-w-0 self-start overflow-hidden rounded-2xl md:col-span-7" aria-label="Abrir la ubicación de Hotel Pomelo en Google Maps">
        <div className="aspect-[3/2]"><Img foto={fotos.fachada} className="transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none" /></div>
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-cal px-4 py-2 font-semibold text-tinta">{Icono.mapa} Ver en Google Maps</span>
      </a>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-tinta pb-28 pt-12 text-white/80 md:pb-12">
      <div className="contenedor flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="font-serif text-2xl text-white">{bienvenida.cita.split(':')[0]}.</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <span>© Hotel Pomelo {new Date().getFullYear()}</span>
          <a href={negocio.privacidad} {...externo} className="underline underline-offset-4 hover:text-white">Política de privacidad</a>
        </div>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta/10 bg-cal/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-2">
        <a href={negocio.reservar} {...externo} className="btn-granate px-3">Reservar</a>
        <a href={negocio.whatsapp} {...externo} className="btn-linea px-0" aria-label="WhatsApp">{Icono.wa}</a>
        <a href={negocio.telefono} className="btn-linea px-0" aria-label="Llamar">{Icono.tel}</a>
        <a href={negocio.mapa} {...externo} className="btn-linea px-0" aria-label="Cómo llegar">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#habitaciones" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-cal focus:px-3 focus:py-2">Saltar a habitaciones</a>
      <Encabezado />
      <main>
        <Portada />
        <Bienvenida />
        <Habitaciones />
        <Espacios />
        <Chiringuito />
        <Experiencias />
        <PomeloEs />
        <Eventos />
        <Nosotros />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
