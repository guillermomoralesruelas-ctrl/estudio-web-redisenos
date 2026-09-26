import { useEffect, useState, type FormEvent } from 'react';
import {
  eventos, grupo, hoteles, opiniones, premios, todasIncluyen, ventajas, type Foto, type Hotel, type HotelId,
} from './data/content';

const externo = { target: '_blank', rel: 'noopener' } as const;
const ORDEN: HotelId[] = ['junipero', 'select'];

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
  check: (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="m5 12 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
};

function Img({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

/** El hotel elegido se recuerda en este navegador (solo por comodidad; si no hay almacenamiento, se usa Fray Junípero). */
function useHotel(): [HotelId, (h: HotelId) => void] {
  const [id, setId] = useState<HotelId>(() => {
    try { const v = localStorage.getItem('fray-hotel'); if (v === 'junipero' || v === 'select') return v; } catch { /* sin almacenamiento */ }
    return 'junipero';
  });
  useEffect(() => {
    document.documentElement.dataset.hotel = id;
    try { localStorage.setItem('fray-hotel', id); } catch { /* sin almacenamiento */ }
  }, [id]);
  return [id, setId];
}

const fechaISO = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const masDias = (iso: string, n: number) => { const [y, m, d] = iso.split('-').map(Number); return fechaISO(new Date(y, m - 1, d + n)); };

function Encabezado({ hotel }: { hotel: Hotel }) {
  const [abierto, setAbierto] = useState(false);
  const nav = [
    { href: '#hoteles', label: 'Hoteles' },
    { href: '#habitaciones', label: 'Habitaciones' },
    { href: '#restaurante', label: 'Restaurantes' },
    { href: '#eventos', label: 'Eventos' },
    { href: '#contacto', label: 'Contacto' },
  ];
  return (
    <header className="sticky top-0 z-40 bg-tinta text-white">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="shrink-0" aria-label="Hoteles Fray, ir al inicio">
          <img src={grupo.logoBlanco.src} alt="Hoteles Fray" width={600} height={224} className="h-9 w-auto md:h-11" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="text-[0.95rem] font-medium text-white/80 hover:text-white">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#reservar" className="btn hidden sm:inline-flex">{Icono.cal} Reservar en {hotel.corto}</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir navegación"
            className="grid size-11 place-items-center rounded-full border border-white/30 lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-white/10 lg:hidden" aria-label="Móvil">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="border-b border-white/10 py-3 text-xl font-semibold last:border-0">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

/** Elemento memorable: la portada son los dos hoteles lado a lado; el que eliges pinta todo el sitio con su color
 *  y decide a qué teléfono, WhatsApp, mapa y motor de reservas van todos los botones. */
function Portada({ id, elegir }: { id: HotelId; elegir: (h: HotelId) => void }) {
  return (
    <section id="inicio" className="bg-tinta pb-10 text-white md:pb-14">
      <div className="contenedor pt-10 md:pt-14">
        <h1 className="max-w-4xl text-[clamp(2.4rem,6vw,4.6rem)] text-white">Dos hoteles en el centro de Tepic. ¿Cuál es el tuyo?</h1>
        <p className="mt-4 max-w-3xl text-lg text-white/80">{grupo.intro}</p>
      </div>
      <div id="hoteles" className="contenedor mt-10 grid gap-4 md:grid-cols-2">
        {ORDEN.map((h) => {
          const hotel = hoteles[h];
          const activo = h === id;
          return (
            <button key={h} type="button" onClick={() => elegir(h)} aria-pressed={activo}
              data-hotel={h}
              className={`group relative isolate flex min-h-[22rem] min-w-0 flex-col justify-end overflow-hidden rounded-2xl p-6 text-left transition-[outline-color] md:min-h-[30rem] md:p-8 ${activo ? 'outline outline-4 outline-offset-4 outline-[var(--acento)]' : 'outline outline-4 outline-offset-4 outline-transparent'}`}>
              <img src={hotel.portada.src} alt={hotel.portada.alt} width={hotel.portada.w} height={hotel.portada.h} fetchPriority={h === 'junipero' ? 'high' : undefined}
                className={`absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 motion-reduce:transition-none ${activo ? 'scale-100' : 'scale-[1.02]'}`} />
              <span className="absolute inset-0 -z-10 bg-gradient-to-t from-tinta/95 via-tinta/45 to-tinta/10" aria-hidden="true" />
              <span className="block text-3xl font-bold md:text-4xl">{hotel.nombre}</span>
              <span className="mt-2 block text-lg text-white/90">{hotel.lema}</span>
              <span className={`mt-5 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-[0.95rem] font-semibold ${activo ? 'bg-[var(--acento)] text-[var(--sobre-acento)]' : 'bg-white/15 text-white group-hover:bg-white/25'}`}>
                {activo ? <>{Icono.check} Estás viendo este hotel</> : 'Ver este hotel'}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function Reservar({ id, elegir }: { id: HotelId; elegir: (h: HotelId) => void }) {
  const hoy = fechaISO(new Date());
  const [llegada, setLlegada] = useState(hoy);
  const [salida, setSalida] = useState(masDias(hoy, 1));
  const [promo, setPromo] = useState('');
  const hotel = hoteles[id];

  const cambiarLlegada = (v: string) => { setLlegada(v); if (salida <= v) setSalida(masDias(v, 1)); };
  const enviar = (e: FormEvent) => {
    e.preventDefault();
    let url = `https://hotels.cloudbeds.com/es/reservation/${hotel.cloudbeds}/?checkin=${llegada}&checkout=${salida}`;
    if (promo.trim()) url += `&promo=${encodeURIComponent(promo.trim())}`;
    window.open(url, '_blank', 'noopener');
  };

  return (
    <section id="reservar" className="border-b border-tinta/10 bg-white">
      <div className="contenedor grid gap-8 py-10 md:grid-cols-12 md:items-end md:py-12">
        <div className="min-w-0 md:col-span-4">
          <h2 className="text-3xl">Reserva directo y con desayuno buffet incluido</h2>
          <p className="mt-2 text-[0.95rem]">Reservar en nuestro sitio te da recompensas de The Guestbook.</p>
        </div>
        <form onSubmit={enviar} className="grid min-w-0 gap-3 sm:grid-cols-2 md:col-span-8 lg:grid-cols-[1.3fr_1fr_1fr_0.9fr_auto]">
          <label className="text-sm font-semibold text-tinta">Hotel
            <select className="campo mt-1" value={id} onChange={(e) => elegir(e.target.value as HotelId)}>
              {ORDEN.map((h) => <option key={h} value={h}>{hoteles[h].nombre}</option>)}
            </select>
          </label>
          <label className="text-sm font-semibold text-tinta">Llegada
            <input type="date" className="campo mt-1" value={llegada} min={hoy} onChange={(e) => cambiarLlegada(e.target.value)} required />
          </label>
          <label className="text-sm font-semibold text-tinta">Salida
            <input type="date" className="campo mt-1" value={salida} min={masDias(llegada, 1)} onChange={(e) => setSalida(e.target.value)} required />
          </label>
          <label className="text-sm font-semibold text-tinta">Código promocional
            <input type="text" className="campo mt-1" value={promo} onChange={(e) => setPromo(e.target.value)} placeholder="Opcional" />
          </label>
          <button type="submit" className="btn self-end sm:col-span-2 lg:col-span-1">Ver disponibilidad</button>
        </form>
      </div>
    </section>
  );
}

function DetalleHotel({ hotel }: { hotel: Hotel }) {
  const [a, b] = hotel.fotos;
  return (
    <section key={hotel.id} className="fundido contenedor grid gap-10 py-20 md:grid-cols-12 md:py-24">
      <div className="min-w-0 md:col-span-5">
        <img src={hotel.logo.src} alt={hotel.logo.alt} width={600} height={180} loading="lazy" className="h-14 w-auto md:h-16" />
        <h2 className="mt-6 text-[clamp(2rem,4vw,3rem)]">{hotel.lema}</h2>
        <p className="mt-5">{hotel.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#reservar" className="btn">{Icono.cal} Reservar</a>
          <a href={hotel.whatsapp} {...externo} className="btn-linea">{Icono.wa} WhatsApp</a>
          <a href={hotel.telefono} className="btn-linea">{Icono.tel} {hotel.telefonoVisible}</a>
        </div>
      </div>
      <div className="grid min-w-0 grid-cols-5 gap-3 md:col-span-7">
        <div className="col-span-3 aspect-[4/5] overflow-hidden rounded-2xl"><Img foto={a} /></div>
        <div className="col-span-2 mt-12 aspect-[3/5] overflow-hidden rounded-2xl"><Img foto={b} /></div>
      </div>
    </section>
  );
}

function Habitaciones({ hotel, elegir }: { hotel: Hotel; elegir: (h: HotelId) => void }) {
  const otro = hoteles[hotel.id === 'junipero' ? 'select' : 'junipero'];
  const conFoto = hotel.habitaciones.lista.filter((h) => h.foto);
  const sinFoto = hotel.habitaciones.lista.filter((h) => !h.foto);
  return (
    <section id="habitaciones" className="bg-piedra py-20 md:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(2rem,4.4vw,3.2rem)]">Habitaciones en {hotel.corto}</h2>
          <button type="button" onClick={() => elegir(otro.id)} className="enlace text-[0.95rem]">Ver las de {otro.corto}</button>
        </div>
        <p className="mt-4 max-w-3xl">{hotel.habitaciones.intro}</p>
        <div key={hotel.id} className="fundido mt-10 grid gap-6 md:grid-cols-2">
          {conFoto.map((h, i) => (
            <article key={h.nombre} className={`min-w-0 overflow-hidden rounded-2xl bg-cantera ${conFoto.length % 2 === 1 && i === 0 ? 'md:col-span-2 md:grid md:grid-cols-2' : ''}`}>
              <div className="aspect-[3/2] md:aspect-auto md:min-h-64"><Img foto={h.foto!} /></div>
              <div className="p-6">
                <h3 className="text-2xl">{h.nombre}</h3>
                <p className="mt-2">{h.texto}</p>
              </div>
            </article>
          ))}
        </div>
        {sinFoto.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {sinFoto.map((h, i) => (
              <article key={h.nombre} className={`min-w-0 rounded-2xl border border-tinta/15 p-6 ${sinFoto.length % 2 === 1 && i === sinFoto.length - 1 ? 'md:col-span-2' : ''}`}>
                <h3 className="text-2xl">{h.nombre}</h3>
                <p className="mt-2">{h.texto}</p>
              </article>
            ))}
          </div>
        )}
        <div className="mt-12 grid gap-6 md:grid-cols-12">
          <h3 className="text-2xl md:col-span-4">Todas nuestras habitaciones incluyen</h3>
          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 md:col-span-8 md:grid-cols-3">
            {todasIncluyen.map((t) => <li key={t} className="flex gap-2"><span className="mt-0.5 text-[var(--acento-texto)]">{Icono.check}</span>{t}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Restaurante({ hotel }: { hotel: Hotel }) {
  return (
    <section id="restaurante" className="contenedor py-20 md:py-24">
      <div key={hotel.id} className="fundido grid gap-10 md:grid-cols-12 md:items-center">
        <div className="aspect-[4/3] min-w-0 overflow-hidden rounded-2xl md:col-span-7"><Img foto={hotel.restaurante.foto} /></div>
        <div className="min-w-0 md:col-span-5">
          <h2 className="text-[clamp(2rem,4vw,3rem)]">{hotel.restaurante.nombre}</h2>
          <p className="mt-5">{hotel.restaurante.texto}</p>
        </div>
      </div>
      <div key={`${hotel.id}-extra`} className="fundido mt-16 grid gap-10 md:grid-cols-12 md:items-center">
        {hotel.extra.foto && (
          <div className="min-w-0 md:order-2 md:col-span-5 md:col-start-8">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl"><Img foto={hotel.extra.foto} /></div>
          </div>
        )}
        <div className={`min-w-0 rounded-2xl bg-tinta p-8 text-white md:p-10 ${hotel.extra.foto ? 'md:col-span-7' : 'md:col-span-12'}`}>
          <h3 className="text-3xl text-white">{hotel.extra.titulo}</h3>
          <p className="mt-4 text-white/85">{hotel.extra.texto}</p>
          {hotel.extra.nota && <p className="mt-3 text-sm text-white/70">*{hotel.extra.nota}</p>}
          <a href={hotel.whatsapp} {...externo} className="btn mt-6">{Icono.wa} Pregúntanos por WhatsApp</a>
        </div>
      </div>
      <ul className="mt-16 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
        {hotel.servicios.map((s) => (
          <li key={s.nombre} className="border-t-2 border-[var(--acento)] pt-3">
            <p className="font-bold text-tinta">{s.nombre}</p>
            <p className="mt-1 text-[0.95rem]">{s.texto}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Ventajas() {
  return (
    <section className="bg-fray text-white">
      <div className="contenedor grid gap-10 py-16 md:grid-cols-2 md:py-20">
        {ventajas.map((v) => (
          <div key={v.titulo} className="min-w-0">
            <h2 className="text-3xl text-white">{v.titulo}</h2>
            <p className="mt-3 text-white/90">{v.texto}</p>
            {v.enlace && <a href={v.enlace.href} {...externo} className="btn-claro mt-5">{v.enlace.texto}</a>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Eventos({ hotel }: { hotel: Hotel }) {
  const [a, b, c] = eventos.fotos;
  return (
    <section id="eventos" className="contenedor grid gap-10 py-20 md:grid-cols-12 md:py-24">
      <div className="min-w-0 md:col-span-5">
        <h2 className="text-[clamp(2rem,4vw,3rem)]">{eventos.titulo}</h2>
        <p className="mt-5">{eventos.texto}</p>
        <a href={hotel.whatsapp} {...externo} className="btn mt-7">{Icono.wa} Cotizar un evento en {hotel.corto}</a>
      </div>
      <div className="grid min-w-0 grid-cols-2 gap-3 md:col-span-7">
        <div className="col-span-2 aspect-[16/9] overflow-hidden rounded-2xl"><Img foto={a} /></div>
        <div className="aspect-[4/3] overflow-hidden rounded-xl"><Img foto={b} /></div>
        <div className="aspect-[4/3] overflow-hidden rounded-xl"><Img foto={c} /></div>
      </div>
    </section>
  );
}

function Opiniones() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="contenedor">
        <h2 className="max-w-3xl text-[clamp(2rem,4vw,3rem)]">Gracias a ti estamos clasificados como los mejores hoteles en Tepic</h2>
        <ul className="mt-8 flex flex-wrap items-center gap-6">
          {premios.map((p) => <li key={p.src}><img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" className="size-24 object-contain md:size-28" /></li>)}
        </ul>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {opiniones.map((o) => (
            <figure key={o.titulo} className="min-w-0 rounded-2xl bg-cantera p-6">
              <p className="text-xl font-bold text-tinta">{o.titulo}</p>
              <blockquote className="mt-3">“{o.texto}”</blockquote>
              <figcaption className="mt-4 text-[0.95rem] font-semibold text-fray-2">Nos visitó desde {o.origen}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto({ id, elegir }: { id: HotelId; elegir: (h: HotelId) => void }) {
  return (
    <section id="contacto" className="contenedor py-20 md:py-24">
      <h2 className="text-[clamp(2rem,4vw,3rem)]">Visítanos en Tepic</h2>
      <p className="mt-3 max-w-2xl">{grupo.mas}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {ORDEN.map((h) => {
          const hotel = hoteles[h];
          return (
            <div key={h} data-hotel={h} className={`min-w-0 rounded-2xl border-2 p-6 md:p-8 ${h === id ? 'border-[var(--acento)] bg-white' : 'border-tinta/10'}`}>
              <img src={hotel.logo.src} alt={hotel.logo.alt} width={600} height={180} loading="lazy" className="h-12 w-auto" />
              <address className="mt-5 not-italic text-tinta">{hotel.direccion.map((l) => <span key={l} className="block">{l}</span>)}</address>
              <p className="mt-4"><a className="enlace" href={hotel.telefono}>{hotel.telefonoVisible}</a></p>
              <p className="mt-1"><a className="enlace break-all" href={`mailto:${hotel.email}`}>{hotel.email}</a></p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={hotel.whatsapp} {...externo} className="btn">{Icono.wa} WhatsApp</a>
                <a href={hotel.mapa} {...externo} className="btn-linea">{Icono.mapa} Cómo llegar</a>
                {h !== id && <button type="button" onClick={() => elegir(h)} className="btn-linea">Ver este hotel</button>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-tinta pb-28 pt-12 text-white/75 md:pb-12">
      <div className="contenedor flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <img src={grupo.logoBlanco.src} alt="Hoteles Fray" width={600} height={224} loading="lazy" className="h-12 w-auto" />
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <span>© {new Date().getFullYear()} Hoteles Fray, Tepic, Nayarit</span>
          <a href={grupo.facebook} {...externo} className="underline underline-offset-4 hover:text-white">Facebook</a>
          <a href={grupo.instagram} {...externo} className="underline underline-offset-4 hover:text-white">Instagram</a>
          <a href={grupo.privacidad} {...externo} className="underline underline-offset-4 hover:text-white">Aviso de privacidad</a>
        </div>
      </div>
    </footer>
  );
}

function BarraMovil({ hotel }: { hotel: Hotel }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta/10 bg-cantera/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-2">
        <a href="#reservar" className="btn px-3">Reservar</a>
        <a href={hotel.whatsapp} {...externo} className="btn-linea px-0" aria-label={`WhatsApp de ${hotel.nombre}`}>{Icono.wa}</a>
        <a href={hotel.telefono} className="btn-linea px-0" aria-label={`Llamar a ${hotel.nombre}`}>{Icono.tel}</a>
        <a href={hotel.mapa} {...externo} className="btn-linea px-0" aria-label={`Cómo llegar a ${hotel.nombre}`}>{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  const [id, elegir] = useHotel();
  const hotel = hoteles[id];
  return (
    <>
      <a href="#reservar" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-cantera focus:px-3 focus:py-2">Saltar a reservar</a>
      <Encabezado hotel={hotel} />
      <main>
        <Portada id={id} elegir={elegir} />
        <Reservar id={id} elegir={elegir} />
        <DetalleHotel hotel={hotel} />
        <Habitaciones hotel={hotel} elegir={elegir} />
        <Restaurante hotel={hotel} />
        <Ventajas />
        <Eventos hotel={hotel} />
        <Opiniones />
        <Contacto id={id} elegir={elegir} />
      </main>
      <Pie />
      <BarraMovil hotel={hotel} />
    </>
  );
}
