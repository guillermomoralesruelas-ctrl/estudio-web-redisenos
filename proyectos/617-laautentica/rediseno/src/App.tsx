import { useState } from 'react';
import {
  negocio, wa, foto, intro, barberiaIntro, barberia, experiencia, barberos, spaIntro, spa, spaCita,
  club, productos, resenas, type Grupo,
} from './data/content';

const msgCita = 'Hola, me gustaría agendar una cita en La Auténtica.';

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

function Encabezado() {
  const enlaces = [
    ['#barberia', 'Barbería'],
    ['#spa', 'Spa'],
    ['#club', 'Club Social'],
    ['#tienda', 'Tienda'],
    ['#contacto', 'Contacto'],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-carbon/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0" aria-label="La Auténtica, inicio">
          <img src={foto('logo-claro.svg')} alt="La Auténtica" width={134} height={42} className="h-10 w-auto" />
        </a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7 text-sm">
            {enlaces.map(([href, t]) => (
              <li key={href}><a href={href} className="text-crema/85 hover:text-oro">{t}</a></li>
            ))}
          </ul>
        </nav>
        <a href={wa(msgCita)} className="boton-oro !py-2 text-sm" target="_blank" rel="noopener">
          <IconoWa className="h-4 w-4" /> Agenda tu cita
        </a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <img
        src={foto('club-mapa.webp')}
        alt="El salón de La Auténtica: sillones de piel, mesa de billar y el mapa de México con el logo en la pared"
        width={1600} height={900}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_50%]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-carbon via-carbon/85 to-carbon/30" />
      <div className="contenedor flex min-h-[78svh] flex-col justify-end py-16 sm:py-24">
        <p className="font-serif text-lg text-oro">{negocio.zona}</p>
        <h1 className="titulo mt-3 max-w-3xl text-[4.2rem] sm:text-[6.5rem] lg:text-[8rem]">
          Barbería, SPA <span className="text-oro">&amp;</span> Club Social
        </h1>
        <p className="mt-5 max-w-xl text-lg text-crema/90">{intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={wa(msgCita)} className="boton-oro" target="_blank" rel="noopener"><IconoWa /> Agendar por WhatsApp</a>
          <a href="#barberia" className="boton-linea">Ver servicios y precios</a>
        </div>
      </div>
    </section>
  );
}

function Carta({ grupos, tono, prefijo }: { grupos: Grupo[]; tono: 'claro' | 'oscuro'; prefijo: string }) {
  const [activo, setActivo] = useState(grupos[0].id);
  const g = grupos.find((x) => x.id === activo)!;
  const claro = tono === 'claro';
  return (
    <div>
      <div role="tablist" aria-label={`Servicios de ${prefijo}`} className="flex flex-wrap gap-2">
        {grupos.map((x) => {
          const sel = x.id === activo;
          return (
            <button
              key={x.id} role="tab" type="button" id={`tab-${x.id}`} aria-selected={sel} aria-controls={`panel-${x.id}`}
              onClick={() => setActivo(x.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                sel
                  ? claro ? 'border-carbon bg-carbon text-crema' : 'border-oro bg-oro text-carbon'
                  : claro ? 'border-carbon/30 hover:border-carbon' : 'border-crema/30 hover:border-crema'
              }`}
            >
              {x.titulo}
            </button>
          );
        })}
      </div>
      <ul role="tabpanel" id={`panel-${g.id}`} aria-labelledby={`tab-${g.id}`} className="mt-8">
        {g.servicios.map((s) => (
          <li key={s.nombre} className={`border-t py-5 ${claro ? 'border-carbon/15' : 'border-crema/15'}`}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-xl">{s.nombre}</h3>
              <span className={`shrink-0 font-titulo text-3xl ${claro ? 'text-oro-osc' : 'text-oro'}`}>{s.precio}</span>
            </div>
            <p className={`mt-2 max-w-2xl text-[0.95rem] ${claro ? 'text-carbon/75' : 'text-crema/75'}`}>{s.detalle}</p>
            {s.cortesia && (
              <p className={`mt-2 text-sm font-medium ${claro ? 'text-oro-osc' : 'text-oro'}`}>Incluye drink de cortesía</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Barberia() {
  return (
    <section id="barberia" className="bg-crema py-20 text-carbon sm:py-28">
      <div className="contenedor grid gap-14 lg:grid-cols-[1fr_22rem]">
        <div className="min-w-0">
          <h2 className="titulo text-6xl sm:text-7xl">Barbería</h2>
          <p className="mt-4 max-w-xl text-lg text-carbon/80">{barberiaIntro}</p>
          <div className="mt-10"><Carta grupos={barberia} tono="claro" prefijo="barbería" /></div>
        </div>
        <aside className="min-w-0 space-y-8">
          <div className="rounded-sm bg-carbon p-7 text-crema shadow-xl ring-1 ring-oro/40">
            <img src={foto('logo-claro.svg')} alt="" width={120} height={38} className="h-9 w-auto opacity-90" />
            <h3 className="mt-5 font-serif text-2xl">{experiencia.nombre}</h3>
            <p className="titulo mt-2 text-5xl text-oro">{experiencia.precio}</p>
            <p className="mt-4 text-sm text-crema/80">{experiencia.texto}</p>
            <ul className="mt-4 space-y-1.5 text-sm">
              {experiencia.combinaciones.map((c) => <li key={c} className="border-l-2 border-oro pl-3">{c}</li>)}
            </ul>
            <a href={wa('Hola, quiero regalar una Experiencia Auténtica (all inclusive). ¿Cómo la personalizo?')} className="boton-oro mt-6 w-full" target="_blank" rel="noopener">
              Regalar una experiencia
            </a>
          </div>
          <div>
            <h3 className="font-serif text-xl">¿Con quién te atiendes?</h3>
            <ul className="mt-4 space-y-3">
              {barberos.map((b) => (
                <li key={b.nombre}>
                  <a href={wa(`Hola, quiero agendar una cita con ${b.nombre}.`)} target="_blank" rel="noopener" className="flex items-center gap-4 rounded-sm border border-carbon/15 p-3 hover:border-carbon">
                    <img src={foto(b.foto)} alt={`${b.nombre}, barbero de La Auténtica`} width={150} height={150} loading="lazy" className="h-14 w-14 rounded-full object-cover" />
                    <span>
                      <span className="block font-medium">{b.nombre}</span>
                      <span className="text-sm text-carbon/70">Agendar con él por WhatsApp</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <img src={foto('billar-logo.webp')} alt="Tacos cruzados y bolas de billar sobre el paño negro con el logo de La Auténtica Barbería" width={1400} height={788} loading="lazy" className="w-full rounded-sm object-cover" />
        </aside>
      </div>
    </section>
  );
}

function Spa() {
  return (
    <section id="spa" className="bg-verde py-20 sm:py-28">
      <div className="contenedor grid gap-14 lg:grid-cols-[22rem_1fr]">
        <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <h2 className="titulo text-6xl sm:text-7xl">Spa</h2>
          <p className="mt-2 font-serif text-2xl text-oro">Masajes y faciales</p>
          <p className="mt-4 text-crema/85">{spaIntro}</p>
          <img src={foto('spa-toallas.webp')} alt="Cabina de masaje con toallas bordadas con el logo de La Auténtica" width={1400} height={788} loading="lazy" className="mt-8 w-full rounded-sm object-cover" />
          <p className="mt-6 text-sm text-crema/80">{spaCita}</p>
          <a href={wa('Hola, quiero agendar una cita en el Spa de La Auténtica.')} className="boton-oro mt-6" target="_blank" rel="noopener">
            <IconoWa /> Agendar en el Spa
          </a>
        </div>
        <div className="min-w-0"><Carta grupos={spa} tono="oscuro" prefijo="spa" /></div>
      </div>
    </section>
  );
}

function Librero() {
  const [abierto, setAbierto] = useState(false);
  // Siete lomos con nombre (lo que hay del otro lado) y lomos lisos de relleno.
  const alturas = [88, 72, 94, 80, 66, 90, 76, 84, 70, 92, 78, 86];
  const tonos = ['#6b2a22', '#23392f', '#b7a582', '#2b2522', '#7a5a33', '#1d2c3a', '#8c3b2a', '#3f4a2e'];
  const repisas = [club.lomos.slice(0, 3), club.lomos.slice(3, 5), club.lomos.slice(5)];
  return (
    <div className="escena relative">
      <div id="detras-librero" className="grid min-h-[40rem] gap-8 rounded-sm bg-humo p-6 sm:p-10 lg:grid-cols-2">
        <div className="min-w-0">
          <p className="font-serif text-2xl text-oro">Terraza Auténtica</p>
          <p className="mt-4 text-lg text-crema/90">{club.texto}</p>
          <h3 className="mt-8 font-serif text-2xl">Socio Auténtico</h3>
          <p className="mt-3 text-crema/80">{club.socio}</p>
          <p className="mt-6 text-crema/80">{club.futbol}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, quiero ser Socio Auténtico. ¿Cómo funciona la membresía del Club Social?')} className="boton-oro" target="_blank" rel="noopener">
              <IconoWa /> Quiero ser Socio Auténtico
            </a>
            <button type="button" onClick={() => setAbierto(false)} className="boton-linea" aria-controls="librero" aria-expanded={abierto}>
              Cerrar el librero
            </button>
          </div>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-3 self-start">
          <img src={foto('cocteles.webp')} alt="Cocteles con fruta y romero sobre la barra de mármol negro" width={1400} height={788} loading="lazy" className="col-span-2 w-full rounded-sm object-cover" />
          <img src={foto('barra-futbol.webp')} alt="Un cliente ve el partido en la pantalla de la barra" width={1400} height={788} loading="lazy" className="col-span-2 w-full rounded-sm object-cover" />
        </div>
      </div>

      <div
        id="librero" data-abierto={abierto}
        className="librero absolute inset-0 flex flex-col rounded-sm px-5 pt-5 sm:px-8"
        inert={abierto}
      >
        {repisas.map((lomos, r) => (
          <div key={r} className="repisa flex flex-1 items-end gap-[3px] overflow-hidden px-1" aria-hidden="true">
            {Array.from({ length: 34 }).map((_, i) => {
              const nombre = i % 4 === 1 ? lomos[Math.floor(i / 4)] : undefined;
              const h = nombre ? 96 : alturas[(i + r * 5) % alturas.length];
              const fondo = tonos[(i * 3 + r) % tonos.length];
              const dorado = fondo === '#b7a582';
              return (
                <span
                  key={i}
                  className={`flex shrink-0 items-center justify-center overflow-hidden rounded-t-[2px] ${nombre ? 'w-12 sm:w-14' : i % 3 === 0 ? 'w-5' : 'w-7 sm:w-8'}`}
                  style={{ height: `${h}%`, background: fondo, boxShadow: 'inset -3px 0 0 rgba(0,0,0,.25), inset 2px 0 0 rgba(255,255,255,.08)' }}
                >
                  {nombre && (
                    <span className={`lomo whitespace-nowrap font-titulo text-base tracking-wider sm:text-lg ${dorado ? 'text-carbon' : 'text-crema'}`}>{nombre}</span>
                  )}
                </span>
              );
            })}
          </div>
        ))}
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center px-5">
          <div className="max-w-md rounded-sm bg-carbon/92 p-6 text-center shadow-2xl ring-1 ring-oro/50">
            <p className="font-serif text-lg text-crema">{club.librero}</p>
            <button
              type="button" onClick={() => setAbierto(true)} aria-controls="librero" aria-expanded={abierto}
              className="boton-oro mt-5"
            >
              Empuja el librero
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Club() {
  return (
    <section id="club" className="py-20 sm:py-28">
      <div className="contenedor">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="titulo text-6xl sm:text-7xl">Club Social</h2>
            <p className="mt-3 max-w-xl text-lg text-crema/80">Ambiente, juego y buen trago. Lo que hay detrás del librero se descubre, no se presume.</p>
          </div>
        </div>
        <div className="mt-10"><Librero /></div>
      </div>
    </section>
  );
}

function Tienda() {
  return (
    <section id="tienda" className="bg-crema py-20 text-carbon sm:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="titulo text-6xl sm:text-7xl">Pide antes de que se te termine</h2>
            <p className="mt-3 text-carbon/75">Las pomadas y el aceite que usamos en el sillón, en la tienda en línea.</p>
          </div>
          <a href={negocio.tienda} className="boton-linea" target="_blank" rel="noopener">Ver toda la tienda</a>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4">
          {productos.map((p) => (
            <li key={p.nombre} className="min-w-0">
              <a href={p.url} target="_blank" rel="noopener" className="group block">
                <img src={foto(p.foto)} alt={p.nombre} width={300} height={300} loading="lazy" className="aspect-square w-full rounded-sm object-cover transition-transform group-hover:scale-[1.02]" />
                <h3 className="mt-3 text-[0.95rem] font-medium leading-snug">{p.nombre}</h3>
                <p className="font-titulo text-2xl text-oro-osc">{p.precio}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Resenas() {
  const [primera, ...resto] = resenas;
  return (
    <section aria-labelledby="resenas-titulo" className="py-20 sm:py-24">
      <div className="contenedor">
        <h2 id="resenas-titulo" className="titulo text-5xl sm:text-6xl">Lo que dicen de la casa</h2>
        <figure className="mt-10 max-w-4xl">
          <blockquote className="font-serif text-2xl leading-snug sm:text-3xl">“{primera.texto}”</blockquote>
          <figcaption className="mt-4 text-oro">{primera.autor}</figcaption>
        </figure>
        <div className="mt-12 grid gap-10 border-t border-crema/15 pt-10 md:grid-cols-2">
          {resto.map((r) => (
            <figure key={r.autor} className="min-w-0">
              <blockquote className="text-crema/85">“{r.texto}”</blockquote>
              <figcaption className="mt-3 text-sm text-oro">{r.autor}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="border-t border-white/10 bg-humo py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <h2 className="titulo text-6xl sm:text-7xl">Te esperamos</h2>
          <p className="mt-4 font-serif text-2xl text-oro">{negocio.zona}</p>
          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-sm text-crema/65">WhatsApp y teléfono</dt>
              <dd className="mt-1 text-xl"><a href={`tel:${negocio.telefonoTel}`} className="hover:text-oro">{negocio.telefono}</a></dd>
            </div>
            <div>
              <dt className="text-sm text-crema/65">Correo</dt>
              <dd className="mt-1 break-words text-lg"><a href={`mailto:${negocio.email}`} className="hover:text-oro">{negocio.email}</a></dd>
            </div>
            <div>
              <dt className="text-sm text-crema/65">Horario</dt>
              <dd className="mt-1 text-lg">Pregúntanos por WhatsApp</dd>
            </div>
            <div>
              <dt className="text-sm text-crema/65">Síguenos</dt>
              <dd className="mt-1 flex flex-wrap gap-4 text-lg">
                {negocio.redes.map((r) => <a key={r.nombre} href={r.url} target="_blank" rel="noopener" className="underline decoration-oro underline-offset-4 hover:text-oro">{r.nombre}</a>)}
              </dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={wa(msgCita)} className="boton-oro" target="_blank" rel="noopener"><IconoWa /> Escríbenos</a>
            <a href={negocio.mapa} className="boton-linea" target="_blank" rel="noopener">Cómo llegar</a>
          </div>
        </div>
        <a href={negocio.mapa} target="_blank" rel="noopener" className="group relative block min-w-0 overflow-hidden rounded-sm" aria-label="Abrir la ubicación de La Auténtica en Google Maps">
          <img src={foto('lampara.webp')} alt="Lámpara de jaula encendida en la penumbra de La Auténtica" width={1000} height={563} loading="lazy" className="h-full min-h-72 w-full object-cover transition-transform group-hover:scale-[1.02]" />
          <span className="absolute bottom-4 left-4 rounded-sm bg-carbon/90 px-4 py-2 text-sm">Ver en Google Maps</span>
        </a>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="py-10 pb-28 text-sm text-crema/70 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4">
        <img src={foto('logo-claro.svg')} alt="La Auténtica" width={120} height={38} loading="lazy" className="h-9 w-auto" />
        <p>La Auténtica, Barbería, SPA &amp; Club Social. {negocio.zona}.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/15 bg-carbon/95 text-sm backdrop-blur md:hidden">
      <a href={wa(msgCita)} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 bg-oro py-2.5 font-semibold text-carbon"><IconoWa /> WhatsApp</a>
      <a href={`tel:${negocio.telefonoTel}`} className="flex flex-col items-center gap-1 py-2.5">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
        Llamar
      </a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-2.5">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
        Cómo llegar
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-oro focus:px-4 focus:py-2 focus:text-carbon">Saltar al contenido</a>
      <Encabezado />
      <main id="contenido">
        <Portada />
        <Barberia />
        <Spa />
        <Club />
        <Tienda />
        <Resenas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
