import { useState } from 'react';
import { negocio, servicios, preamps, historia, nosotros } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
const tel = `tel:+${negocio.telefonoE164}`;

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = medidas[n];
  return <img src={`./${n}.webp`} width={w} height={h} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

function Icono({ d, className = 'h-5 w-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const iTel = 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z';
const iChat = 'M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.8-.9L3 21l1.9-5.1A8.4 8.4 0 0 1 3.5 11.5 8.5 8.5 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z';
const iPin = 'M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z';

// Elemento memorable: una consola con un fader por servicio; los que subes arman el mensaje para reservar.
function Consola() {
  const [arriba, setArriba] = useState<string[]>(['grabacion', 'mezcla']);
  const alternar = (id: string) => setArriba((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));
  const elegidos = servicios.filter((s) => arriba.includes(s.id)).map((s) => s.nombre.toLowerCase());
  const mensaje = elegidos.length
    ? `Hola, quiero reservar una sesión en DM Studios para: ${elegidos.join(', ')}. ¿Qué fechas tienen?`
    : 'Hola, quiero informes del estudio DM Studios.';
  return (
    <div className="rounded-2xl border border-white/10 bg-consola p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.06)] sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-display)] text-xl tracking-wider text-humo">DM · Master section</p>
        <p className="text-sm text-humo" aria-live="polite">{elegidos.length} {elegidos.length === 1 ? 'canal arriba' : 'canales arriba'}</p>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-4 lg:grid-cols-7" role="group" aria-label="Servicios del estudio">
        {servicios.map((s, i) => {
          const on = arriba.includes(s.id);
          return (
            <button key={s.id} type="button" aria-pressed={on} onClick={() => alternar(s.id)} className="group flex flex-col items-center gap-3 text-center">
              <span className="font-mono text-xs text-humo">CH {String(i + 1).padStart(2, '0')}</span>
              {/* medidor VU */}
              <span className="flex h-3 w-full max-w-16 gap-0.5" aria-hidden="true">
                {Array.from({ length: 6 }, (_, k) => (
                  <span key={k} className={`flex-1 rounded-sm transition-colors ${on ? (k > 4 ? 'bg-[#E5533D]' : k > 3 ? 'bg-ambar' : 'bg-[#6BCB77]') : 'bg-white/10'}`} />
                ))}
              </span>
              {/* riel y perilla del fader */}
              <span className="relative h-36 w-10" aria-hidden="true">
                <span className="absolute left-1/2 top-0 h-full w-1.5 -translate-x-1/2 rounded bg-black" />
                {[0, 1, 2, 3, 4].map((k) => <span key={k} className="absolute left-0 h-px w-2.5 bg-white/25" style={{ top: `${k * 25}%` }} />)}
                <span className={`absolute left-1/2 h-9 w-9 -translate-x-1/2 rounded-md border border-black/40 shadow-lg transition-all duration-300 ${on ? 'top-0 bg-ambar' : 'top-[calc(100%-2.25rem)] bg-[#CFC6BC]'}`}>
                  <span className="absolute inset-x-1 top-1/2 h-0.5 -translate-y-1/2 bg-black/60" />
                </span>
              </span>
              <span className={`min-h-[2.5rem] text-sm font-semibold leading-tight hyphens-auto ${on ? 'text-ambar' : 'text-hueso/85 group-hover:text-hueso'}`}>{s.nombre}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-humo">{elegidos.length ? <>Tu sesión: <span className="text-hueso">{elegidos.join(' + ')}</span></> : 'Sube los canales de lo que necesitas.'}</p>
        <a href={wa(mensaje)} className="btn-ambar shrink-0" target="_blank" rel="noopener"><Icono d={iChat} /> Reservar mi sesión</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#consola" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-negro">Saltar a reservar</a>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-negro/90 backdrop-blur">
        <div className="contenedor flex h-16 items-center justify-between gap-4">
          <a href="#inicio" className="font-[family-name:var(--font-display)] text-2xl font-extrabold uppercase tracking-wider">DM <span className="text-ambar">Studios</span></a>
          <nav aria-label="Principal" className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#consola" className="hover:text-ambar">Servicios</a>
            <a href="#equipo" className="hover:text-ambar">Equipo</a>
            <a href="#historia" className="hover:text-ambar">Historia</a>
            <a href="#contacto" className="hover:text-ambar">Contacto</a>
          </nav>
          <a href={tel} className="btn-ambar px-4 py-2.5 text-sm"><Icono d={iTel} className="h-4 w-4" /> <span className="hidden sm:inline">{negocio.telefono}</span><span className="sm:hidden">Llamar</span></a>
        </div>
      </header>

      <main id="inicio">
        <section className="relative isolate overflow-hidden">
          <Foto n="consola-monitores" alt="Control room de DM Studios: consola digital, monitores y dos pantallas con el logotipo del estudio" eager className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-negro via-negro/80 to-negro/20" aria-hidden="true" />
          <div className="contenedor flex min-h-[80svh] flex-col justify-center py-20">
            <p className="eyebrow">Estudio de grabación · Coyoacán, CDMX</p>
            <h1 className="mt-4 max-w-3xl text-6xl sm:text-7xl lg:text-8xl">Graba, mezcla y masteriza en <span className="text-ambar">DM Studios</span></h1>
            <p className="mt-6 max-w-xl text-lg text-hueso/85">
              El estudio de Destino Musical, la empresa mexicana del karaoke con más de 30 años en la música: grabación, producción, doblaje y podcast.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#consola" className="btn-ambar">Arma tu sesión</a>
              <a href={wa('Hola, quiero informes del estudio DM Studios.')} className="btn-linea" target="_blank" rel="noopener"><Icono d={iChat} /> Escribir</a>
            </div>
          </div>
        </section>

        <section id="consola" className="contenedor py-16 md:py-24">
          <p className="eyebrow">Servicios</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">Sube los canales de tu sesión</h2>
          <p className="mt-4 mb-10 max-w-2xl text-humo">Cada fader es un servicio del estudio. Sube los que necesitas y te llega el mensaje listo para reservar.</p>
          <Consola />
        </section>

        <section className="contenedor grid gap-4 pb-16 md:grid-cols-3 md:pb-24">
          <Foto n="cabina-microfono" alt="Cabina de grabación con micrófono de condensador y paredes de madera" className="h-full w-full rounded-xl object-cover md:col-span-2" />
          <Foto n="guitarra-sillon" alt="Guitarra eléctrica sobre el sillón del estudio" className="h-full w-full rounded-xl object-cover" />
          <Foto n="faders" alt="Mano moviendo los faders de la consola" className="h-full w-full rounded-xl object-cover" />
          <Foto n="control-room" alt="Control room con consola, sillón y guitarras" className="h-full w-full rounded-xl object-cover md:col-span-2" />
        </section>

        <section id="equipo" className="border-y border-white/10 bg-consola py-16 md:py-24">
          <div className="contenedor grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="eyebrow">Equipo</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">Preamplificadores</h2>
              <p className="mt-4 text-humo">Equipo digital de última tecnología y estos preamplificadores en la cadena de grabación.</p>
              <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {preamps.map((p, i) => (
                  <li key={p} className="flex items-baseline gap-4 py-4">
                    <span className="font-mono text-sm text-ambar">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Foto n="avalon-737" alt="Preamplificador de bulbos Avalon 737 con su medidor VU encendido" className="w-full rounded-xl object-cover" />
          </div>
        </section>

        <section id="historia" className="contenedor py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="eyebrow">Destino Musical</p>
              <h2 className="mt-3 text-5xl">Más de 30 años en la música</h2>
              {nosotros.map((p) => <p key={p} className="mt-4 text-humo">{p}</p>)}
              <a href={negocio.tienda} className="mt-6 inline-block font-semibold text-ambar underline underline-offset-4" target="_blank" rel="noopener">Ver su tienda de karaoke</a>
            </div>
            <ol className="relative border-l-2 border-ambar/40 pl-6">
              {historia.map((h) => (
                <li key={h.anio} className="relative pb-6 last:pb-0">
                  <span className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full bg-ambar" aria-hidden="true" />
                  <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-ambar">{h.anio}</p>
                  <p className="text-hueso/90">{h.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contacto" className="bg-madera py-16 md:py-24">
          <div className="contenedor grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-vu">Contacto</p>
              <h2 className="mt-3 text-5xl sm:text-6xl">Reserva tu sesión</h2>
              <p className="mt-4 text-hueso/90">Graba en nuestro estudio profesional de grabación.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={wa('Hola, quiero reservar una sesión en DM Studios.')} className="btn-ambar" target="_blank" rel="noopener"><Icono d={iChat} /> WhatsApp</a>
                <a href={tel} className="btn-linea"><Icono d={iTel} /> Llamar</a>
              </div>
            </div>
            <address className="grid gap-5 not-italic">
              <div><p className="text-sm font-bold uppercase tracking-wider text-vu">Dirección</p><p className="mt-1">{negocio.direccion}<br />{negocio.ciudad}</p><a href={negocio.mapa} className="mt-1 inline-block font-semibold underline underline-offset-4" target="_blank" rel="noopener">Cómo llegar en Google Maps</a></div>
              <div><p className="text-sm font-bold uppercase tracking-wider text-vu">Horario de atención</p><p className="mt-1">{negocio.horario}</p></div>
              <div><p className="text-sm font-bold uppercase tracking-wider text-vu">Teléfono y correo</p><p className="mt-1"><a href={tel} className="underline underline-offset-4">{negocio.telefono}</a><br /><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4">{negocio.correo}</a></p></div>
            </address>
          </div>
        </section>
      </main>

      <footer className="pb-24 pt-8 text-sm text-humo md:pb-8">
        <div className="contenedor flex flex-col justify-between gap-2 sm:flex-row">
          <p>© {new Date().getFullYear()} {negocio.nombre} · {negocio.empresa}</p>
          <p>Coyoacán, Ciudad de México</p>
        </div>
      </footer>

      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-negro text-sm font-semibold md:hidden">
        <a href={tel} className="flex flex-col items-center gap-1 py-2.5"><Icono d={iTel} /> Llamar</a>
        <a href={wa('Hola, quiero reservar una sesión en DM Studios.')} className="flex flex-col items-center gap-1 bg-ambar py-2.5 text-negro" target="_blank" rel="noopener"><Icono d={iChat} /> WhatsApp</a>
        <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-2.5" target="_blank" rel="noopener"><Icono d={iPin} /> Cómo llegar</a>
      </nav>
    </>
  );
}
