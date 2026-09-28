import { useEffect, useMemo, useState } from 'react';
import {
  bienvenida, eventos, foto, galeria, mensajes, negocio, proximo, salon, testimonios, wa,
} from './data/content';

const tel0 = negocio.telefonos[0];

function Icono({ d, className = 'size-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor"><path d={d} /></svg>
  );
}
const ic = {
  wa: 'M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z',
  tel: 'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.5.6 3.6a1 1 0 0 1-.3 1l-2.2 2.2Z',
  pin: 'M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z',
};

/* ---------- Encabezado ---------- */
function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const links = [
    ['El salón', '#salon'], ['Tu invitación', '#invitacion'], ['Galería', '#galeria'],
    ['Opiniones', '#opiniones'], ['Visítanos', '#visitanos'],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-piedra bg-fondo/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0">
          <img src={foto('logo-negro')} width={600} height={160} alt="La Cantera Eventos" className="h-9 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-[0.95rem]">
            {links.map(([t, h]) => <li key={h}><a href={h} className="hover:text-vino">{t}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={wa(mensajes.cotizar)} className="btn-vino hidden !py-2 sm:inline-flex">Cotizar evento</a>
          <button
            type="button" className="rounded-full border border-tinta/30 px-4 py-2 text-sm lg:hidden"
            aria-expanded={abierto} aria-controls="menu-movil" onClick={() => setAbierto(!abierto)}
          >{abierto ? 'Cerrar' : 'Menú'}</button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-piedra bg-fondo lg:hidden">
          <ul className="contenedor grid py-3">
            {links.map(([t, h]) => (
              <li key={h}><a href={h} onClick={() => setAbierto(false)} className="block py-3 text-lg">{t}</a></li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

/* ---------- Portada ---------- */
function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-tinta text-white">
      <img
        src={foto('hero-salon-flores')} width={2000} height={947} fetchPriority="high"
        alt="Salón de La Cantera Eventos con techo de flores blancas, centros de mesa altos y sillas negras"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-tinta via-tinta/70 to-transparent" />
      <div className="contenedor grid min-h-[34rem] content-center py-20 md:min-h-[40rem]">
        <p className="font-serif text-lg italic text-piedra">{bienvenida.titulo}</p>
        <h1 className="mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl md:text-6xl">
          Salón de eventos excepcionales en Monterrey
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/90">{bienvenida.sub}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={wa(mensajes.cotizar)} className="btn-claro"><Icono d={ic.wa} /> Cotizar evento</a>
          <a href={wa(mensajes.visita)} className="btn-borde text-white hover:bg-white/10">Agendar visita</a>
        </div>
        <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-4">
          {bienvenida.cifras.map((c) => (
            <div key={c.valor}>
              <dt className="sr-only">{c.texto}</dt>
              <dd><span className="block font-serif text-4xl">{c.valor}</span><span className="text-white/85">{c.texto}</span></dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------- Próximo evento con cuenta regresiva (a la hora del cartel) ---------- */
function useAhora(cada = 1000) {
  const [ahora, setAhora] = useState(() => Date.now());
  useEffect(() => { const t = setInterval(() => setAhora(Date.now()), cada); return () => clearInterval(t); }, [cada]);
  return ahora;
}

function ProximoEvento() {
  const ahora = useAhora();
  const meta = new Date(proximo.fechaISO).getTime();
  const falta = meta - ahora;
  if (falta <= 0) {
    return (
      <section aria-labelledby="proximo" className="bg-vino text-white">
        <div className="contenedor flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="proximo" className="text-2xl">{proximo.despues.nombre}</h2>
            <p className="mt-2 max-w-2xl text-white/90">{proximo.despues.texto}</p>
          </div>
          <a href={wa('Me interesa la fecha del próximo Open House de XV Años en La Cantera Eventos.')} className="btn-claro shrink-0">Pregunta la fecha</a>
        </div>
      </section>
    );
  }
  const d = Math.floor(falta / 864e5), h = Math.floor(falta / 36e5) % 24, m = Math.floor(falta / 6e4) % 60, s = Math.floor(falta / 1e3) % 60;
  const partes: [number, string][] = [[d, d === 1 ? 'día' : 'días'], [h, 'horas'], [m, 'min'], [s, 'seg']];
  return (
    <section aria-labelledby="proximo" className="bg-vino text-white">
      <div className="contenedor grid gap-6 py-10 md:grid-cols-[1.2fr_auto] md:items-center">
        <div className="min-w-0">
          <p className="text-vino-claro">Prepárate para nuestro próximo evento</p>
          <h2 id="proximo" className="mt-1 text-3xl">{proximo.nombre}</h2>
          <p className="mt-1 font-bold">{proximo.fechaTexto} {proximo.detalle}</p>
          <p className="mt-3 max-w-xl text-white/90">{proximo.texto}</p>
        </div>
        <div className="min-w-0">
          <p className="flex gap-2 sm:gap-3" aria-label={`Faltan ${d} días, ${h} horas y ${m} minutos`}>
            {partes.map(([n, t]) => (
              <span key={t} className="grid w-[4.3rem] place-items-center rounded-lg bg-white/10 py-3 sm:w-20" aria-hidden="true">
                <span className="font-serif text-3xl tabular-nums">{String(n).padStart(2, '0')}</span>
                <span className="text-sm text-white/85">{t}</span>
              </span>
            ))}
          </p>
          <a href={wa(mensajes.asistencia)} className="btn-claro mt-4 w-full">Confirma tu asistencia</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- El salón ---------- */
function Salon() {
  const [grande, ...resto] = salon;
  return (
    <section id="salon" className="py-20 md:py-28">
      <div className="contenedor">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <h2 className="text-3xl md:text-4xl">Más de 2,500 celebraciones en el mismo salón</h2>
          <p className="text-gris">{bienvenida.texto}</p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <figure className="min-w-0">
            <img src={foto(grande.foto)} width={grande.w} height={grande.h} alt={grande.alt} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
            <figcaption className="mt-5">
              <h3 className="text-2xl">{grande.titulo}</h3>
              <p className="mt-2 text-gris">{grande.texto}</p>
            </figcaption>
          </figure>
          <div className="grid min-w-0 gap-8">
            {resto.map((s) => (
              <article key={s.titulo} className="grid gap-5 sm:grid-cols-[14rem_1fr] sm:items-start">
                <img src={foto(s.foto)} width={s.w} height={s.h} alt={s.alt} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
                <div className="min-w-0">
                  <h3 className="text-2xl">{s.titulo}</h3>
                  <p className="mt-2 text-gris">{s.texto}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Elemento memorable: la invitación ---------- */
function hoyISO() {
  const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}
function fechaLarga(iso: string) {
  if (!iso) return '';
  return new Date(`${iso}T12:00:00`).toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

function Invitacion() {
  const [id, setId] = useState(eventos[0].id);
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [invitados, setInvitados] = useState('');
  const ev = eventos.find((e) => e.id === id)!;
  const hoy = useMemo(hoyISO, []);
  const fechaOk = fecha && fecha >= hoy;
  const larga = fechaOk ? fechaLarga(fecha) : '';
  const n = parseInt(invitados, 10);

  const mensaje = [
    mensajes.cotizar,
    `Tipo de evento: ${ev.nombre}`,
    nombre.trim() && `Nombre: ${nombre.trim()}`,
    larga && `Fecha tentativa: ${larga}`,
    n > 0 && `Invitados aproximados: ${n}`,
    larga ? '¿Tienen disponible esa fecha?' : '¿Qué fechas tienen disponibles?',
  ].filter(Boolean).join('\n');

  return (
    <section id="invitacion" aria-labelledby="t-inv" className="bg-piedra py-20 md:py-28">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 id="t-inv" className="text-3xl md:text-4xl">Escribe tu invitación antes que nadie</h2>
          <p className="mt-4 text-gris">
            Elige qué vas a celebrar, pon los nombres y la fecha que tienes en mente. La invitación se arma aquí mismo
            y, con un toque, le llega a La Cantera por WhatsApp para que te digan si esa fecha está libre.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-start">
          {/* Controles */}
          <div className="min-w-0">
            <fieldset>
              <legend className="font-serif text-xl">¿Qué vas a celebrar?</legend>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {eventos.map((e) => {
                  const activo = e.id === id;
                  return (
                    <label key={e.id} className={`group relative cursor-pointer overflow-hidden rounded-xl border-2 ${activo ? 'border-vino' : 'border-transparent'}`}>
                      <input type="radio" name="evento" value={e.id} checked={activo} onChange={() => setId(e.id)} className="peer sr-only" />
                      <img src={foto(e.foto)} width={1200} height={923} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105" />
                      <span className={`absolute inset-x-0 bottom-0 px-3 py-2 font-bold ${activo ? 'bg-vino text-white' : 'bg-fondo/95 text-tinta'}`}>{e.nombre}</span>
                      <span className="pointer-events-none absolute inset-0 rounded-xl peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-vino" />
                    </label>
                  );
                })}
              </div>
            </fieldset>
            <p className="mt-5 text-gris">{ev.texto}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1 sm:col-span-2">
                <span className="font-bold">Nombres en la invitación</span>
                <input value={nombre} onChange={(e) => setNombre(e.target.value)} maxLength={48} placeholder={`Por ejemplo: ${ev.quien}`}
                  className="rounded-lg border border-arena bg-white px-4 py-3" />
              </label>
              <label className="grid gap-1">
                <span className="font-bold">Fecha que te gustaría</span>
                <input type="date" value={fecha} min={hoy} onChange={(e) => setFecha(e.target.value)}
                  className="rounded-lg border border-arena bg-white px-4 py-3" />
              </label>
              <label className="grid gap-1">
                <span className="font-bold">Invitados aproximados</span>
                <input type="number" inputMode="numeric" min={1} max={2000} value={invitados} onChange={(e) => setInvitados(e.target.value)}
                  placeholder="Opcional" className="rounded-lg border border-arena bg-white px-4 py-3" />
              </label>
            </div>
            {fecha && !fechaOk && <p className="mt-3 font-bold text-vino" role="alert">Esa fecha ya pasó: elige una a partir de hoy.</p>}
          </div>

          {/* La invitación */}
          <div className="min-w-0">
            <article key={id} aria-live="polite" aria-label="Vista previa de tu invitación"
              className="papel aparece relative rounded-sm px-7 py-10 text-center shadow-[0_18px_40px_-18px_rgba(18,18,18,.45)] sm:px-10">
              <div className="pointer-events-none absolute inset-3 border border-arena" />
              <div className="pointer-events-none absolute inset-[1.05rem] border border-arena/60" />
              <img src={foto('logo-negro')} width={600} height={160} alt="" className="mx-auto h-10 w-auto opacity-90" />
              <p className={`mt-8 break-words font-serif text-3xl ${nombre.trim() ? '' : 'text-gris/70 italic'}`}>
                {nombre.trim() || ev.quien}
              </p>
              <p className="mt-5 text-gris">Acompáñanos a celebrar</p>
              <p className="mt-1 font-serif text-2xl italic text-vino">{ev.invita}</p>
              <div className="mx-auto my-6 h-px w-16 bg-arena" />
              <p className={`font-bold first-letter:uppercase ${larga ? '' : 'text-gris/80'}`}>{larga || 'Fecha por elegir'}</p>
              <p className="mt-4 text-sm leading-relaxed text-gris">
                La Cantera Eventos<br />{negocio.direccion}<br />Monterrey, N.L.
              </p>
              {n > 0 && <p className="mt-4 text-sm text-gris">{n.toLocaleString('es-MX')} invitados</p>}
            </article>
            <a href={wa(mensaje)} className="btn-vino mt-6 w-full"><Icono d={ic.wa} /> Mandar a La Cantera y cotizar</a>
            <a href={wa(mensajes.visita)} className="btn-borde mt-3 w-full text-tinta hover:bg-fondo">Mejor agendo una visita</a>
            <p className="mt-4 text-sm text-gris">La disponibilidad de fechas, servicios o paquetes está sujeta a confirmación directa con el equipo del salón.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Galería ---------- */
function Galeria() {
  return (
    <section id="galeria" aria-labelledby="t-gal" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 id="t-gal" className="text-3xl md:text-4xl">Así se ve el salón con sus invitados</h2>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {galeria.map((g, i) => (
            <img key={g.f} src={foto(g.f)} width={g.w} height={g.h} alt={g.alt} loading="lazy"
              className={`h-full w-full rounded-lg object-cover ${i === 0 || i === 7 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'}`} />
          ))}
        </div>
        <p className="mt-6"><a href={negocio.redes[1].url} className="underline underline-offset-4 hover:text-vino">Más fotos en Instagram: @lacanteraeventos</a></p>
      </div>
    </section>
  );
}

/* ---------- Opiniones ---------- */
function Opiniones() {
  const [primera, ...otras] = testimonios;
  return (
    <section id="opiniones" aria-labelledby="t-op" className="bg-tinta py-20 text-white md:py-28">
      <div className="contenedor grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="min-w-0">
          <h2 id="t-op" className="text-3xl md:text-4xl">Lo que cuentan quienes ya celebraron aquí</h2>
          <blockquote className="mt-10">
            <p className="font-serif text-xl leading-relaxed md:text-2xl">“{primera.texto}”</p>
            <footer className="mt-5 text-piedra">{primera.nombre}</footer>
          </blockquote>
        </div>
        <div className="grid min-w-0 content-end gap-8">
          {otras.map((t) => (
            <blockquote key={t.nombre} className="border-l-2 border-arena pl-5">
              <p className="text-white/90">“{t.texto}”</p>
              <footer className="mt-3 text-piedra">{t.nombre}</footer>
            </blockquote>
          ))}
          <a href={negocio.mapa} className="underline underline-offset-4 hover:text-piedra">Ver más opiniones en Google</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Visítanos ---------- */
function Visitanos() {
  return (
    <section id="visitanos" aria-labelledby="t-vis" className="py-20 md:py-28">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-4">
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
          <a href={negocio.mapa} className="group relative block overflow-hidden rounded-xl">
            <img src={foto('galeria-salon-alto')} width={1600} height={1067} loading="lazy"
              alt="Vista del salón de La Cantera Eventos; abre su ubicación en Google Maps" className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-[1.03]" />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-bold text-tinta">
              <Icono d={ic.pin} /> Abrir en Google Maps
            </span>
          </a>
        </div>
        <div className="min-w-0">
          <h2 id="t-vis" className="text-3xl md:text-4xl">¡Visítanos!</h2>
          <p className="mt-3 text-gris">Descríbenos tu evento ideal y nos encargaremos de hacerlo realidad.</p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div><dt className="font-bold">Dirección</dt><dd className="mt-1 text-gris">{negocio.direccion},<br />Monterrey, N.L., {negocio.cp}</dd></div>
            <div><dt className="font-bold">Horario de atención</dt><dd className="mt-1 text-gris">{negocio.horario}</dd></div>
            <div><dt className="font-bold">Teléfonos</dt>
              <dd className="mt-1 grid">{negocio.telefonos.map((t) => <a key={t.tel} href={`tel:${t.tel}`} className="text-gris underline-offset-4 hover:underline">{t.texto}</a>)}</dd></div>
            <div><dt className="font-bold">Correo</dt><dd className="mt-1"><a href={`mailto:${negocio.email}`} className="break-all text-gris underline-offset-4 hover:underline">{negocio.email}</a></dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa(mensajes.visita)} className="btn-vino"><Icono d={ic.wa} /> Agendar visita</a>
            <a href={negocio.mapa} className="btn-borde text-tinta hover:bg-piedra"><Icono d={ic.pin} /> Cómo llegar</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-tinta pb-28 pt-14 text-white lg:pb-14">
      <div className="contenedor grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <img src={foto('logo-blanco')} width={600} height={160} alt="La Cantera Eventos" loading="lazy" className="h-10 w-auto" />
          <p className="mt-4 text-white/80">{negocio.lema}. {negocio.direccion}, Monterrey.</p>
        </div>
        <ul className="flex flex-wrap gap-5">
          {negocio.redes.map((r) => <li key={r.url}><a href={r.url} className="underline-offset-4 hover:underline">{r.nombre}</a></li>)}
          <li><a href={wa(mensajes.info)} className="underline-offset-4 hover:underline">WhatsApp</a></li>
        </ul>
      </div>
      <p className="contenedor mt-10 text-sm text-white/70">© 2026 La Cantera Eventos. Propuesta de rediseño.</p>
    </footer>
  );
}

/* ---------- Barra fija en el celular ---------- */
function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-piedra bg-fondo/95 backdrop-blur lg:hidden">
      <a href={wa(mensajes.cotizar)} className="flex flex-col items-center gap-0.5 bg-vino py-2.5 text-sm font-bold text-white"><Icono d={ic.wa} />WhatsApp</a>
      <a href={`tel:${tel0.tel}`} className="flex flex-col items-center gap-0.5 py-2.5 text-sm font-bold"><Icono d={ic.tel} />Llamar</a>
      <a href={negocio.mapa} className="flex flex-col items-center gap-0.5 py-2.5 text-sm font-bold"><Icono d={ic.pin} />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="contenido">
        <Portada />
        <ProximoEvento />
        <Salon />
        <Invitacion />
        <Galeria />
        <Opiniones />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
