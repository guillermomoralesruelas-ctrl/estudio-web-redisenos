import { useRef, useState } from 'react';
import {
  actividades, bienvenida, foto, negocio, reservarUrl, servicios, testimonios, ventanas, wa, waGeneral, type Ventana,
} from './data/content';

/* ---------- iconos simples (dibujados por nosotros) ---------- */
function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 3h3l1.5 4.5-2 1.3a12 12 0 0 0 7.7 7.7l1.3-2L21 16v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
    </svg>
  );
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}
function IconoCalendario({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  );
}

function Logotipo({ claro = false }: { claro?: boolean }) {
  return (
    <span className={`inline-flex flex-col leading-none ${claro ? 'text-cal' : 'text-noche'}`}>
      <span className="font-titulo text-[1.45rem] font-semibold">Hotel Plaza Colonial</span>
      <span className={`mt-1 text-[0.72rem] font-medium tracking-[0.18em] ${claro ? 'text-amarillo' : 'text-gris'}`}>Campeche</span>
    </span>
  );
}

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-noche/10 bg-cal/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Hotel Plaza Colonial, inicio"><Logotipo /></a>
        <nav aria-label="Principal" className="hidden items-center gap-7 text-[0.95rem] font-medium lg:flex">
          <a href="#ventanas" className="hover:text-azulhondo">Habitaciones</a>
          <a href="#campeche" className="hover:text-azulhondo">A pasos del hotel</a>
          <a href="#contacto" className="hover:text-azulhondo">Contacto</a>
        </nav>
        <a href="#reservar" className="btn hidden sm:inline-flex"><IconoCalendario /> Reservar</a>
      </div>
    </header>
  );
}

function Portada() {
  const f = foto('fachada');
  return (
    <section id="inicio">
      <div className="contenedor grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-[0.95rem] text-gris"><IconoPin className="h-4 w-4 shrink-0" /> Calle 10, Centro Histórico de Campeche</p>
          <h1 className="mt-4 text-[2.6rem] leading-[1.05] sm:text-6xl">Hotel Plaza Colonial, el alma de la Ciudad Amurallada</h1>
          <p className="mt-5 max-w-xl text-lg text-gris">{bienvenida.texto}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#reservar" className="btn"><IconoCalendario /> Ver disponibilidad</a>
            <a href={waGeneral} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> Escribir por WhatsApp</a>
          </div>
        </div>
        <figure className="min-w-0">
          <img
            src={f.src} width={f.width} height={f.height} fetchPriority="high"
            alt="Fachada amarilla del Hotel Plaza Colonial, con cornisas blancas, balcones de herrería y ventanas azules, en una calle del Centro Histórico"
            className="aspect-[3/2] w-full rounded-[1.75rem] object-cover"
          />
        </figure>
      </div>
    </section>
  );
}

/* ---------- elemento memorable: "Abre una ventana" ---------- */
type Hueco = { id: string; x: number; y: number; w: number; h: number; tipo: 'balcon' | 'ventana' | 'puerta' | 'porton' };
const HUECOS: Hueco[] = [
  { id: 'jr-suite', x: 110, y: 72, w: 82, h: 118, tipo: 'balcon' },
  { id: 'estandar', x: 408, y: 72, w: 82, h: 118, tipo: 'ventana' },
  { id: 'sala', x: 70, y: 252, w: 78, h: 104, tipo: 'ventana' },
  { id: 'recepcion', x: 258, y: 236, w: 84, h: 142, tipo: 'puerta' },
  { id: 'patio', x: 432, y: 246, w: 112, h: 132, tipo: 'porton' },
];

function Postigos({ h }: { h: Hueco }) {
  const mitad = h.w / 2;
  const tablillas = (x0: number) =>
    Array.from({ length: Math.floor(h.h / 12) - 1 }, (_, i) => (
      <line key={i} x1={x0 + 6} x2={x0 + mitad - 6} y1={h.y + 12 + i * 12} y2={h.y + 12 + i * 12} stroke="#0e6480" strokeWidth="1.4" />
    ));
  return (
    <>
      <g className="postigo postigo-izq">
        <rect x={h.x} y={h.y} width={mitad} height={h.h} fill="#1587a8" stroke="#0e6480" strokeWidth="2" />
        {tablillas(h.x)}
      </g>
      <g className="postigo postigo-der">
        <rect x={h.x + mitad} y={h.y} width={mitad} height={h.h} fill="#1587a8" stroke="#0e6480" strokeWidth="2" />
        {tablillas(h.x + mitad)}
      </g>
    </>
  );
}

function Fachada({ elegida, onElegir }: { elegida: string; onElegir: (id: string) => void }) {
  return (
    <svg viewBox="0 0 600 400" className="h-auto w-full" aria-hidden="true">
      {/* muro, cornisa, pilastras y zócalo */}
      <rect x="20" y="40" width="560" height="345" fill="#e0a851" />
      <rect x="10" y="24" width="580" height="18" fill="#fbf6ec" />
      <rect x="18" y="42" width="564" height="6" fill="#f2e6cf" />
      <rect x="20" y="206" width="560" height="10" fill="#fbf6ec" />
      <rect x="20" y="40" width="16" height="345" fill="#fbf6ec" />
      <rect x="564" y="40" width="16" height="345" fill="#fbf6ec" />
      <rect x="20" y="378" width="560" height="10" fill="#d8c7a6" />
      {/* placa redonda con el nombre, como la de su puerta */}
      <circle cx="378" cy="286" r="20" fill="#fbf6ec" stroke="#b58a3c" strokeWidth="1.5" />
      <text x="378" y="284" textAnchor="middle" fontSize="7.5" fontFamily="Georgia, serif" fill="#24272c">Plaza</text>
      <text x="378" y="293" textAnchor="middle" fontSize="7.5" fontFamily="Georgia, serif" fill="#24272c">Colonial</text>
      {HUECOS.map((h) => {
        const abierta = elegida === h.id;
        return (
          <g
            key={h.id}
            className={`cursor-pointer ${abierta ? 'abierta' : ''}`}
            onClick={() => onElegir(h.id)}
          >
            {/* marco de cal */}
            <rect x={h.x - 9} y={h.y - (h.tipo === 'puerta' ? 30 : 12)} width={h.w + 18} height={h.h + (h.tipo === 'puerta' ? 30 : 12) + (h.tipo === 'porton' || h.tipo === 'puerta' ? 0 : 8)} fill="#fbf6ec" rx="3" />
            {h.tipo === 'puerta' && (
              <>
                <path d={`M${h.x} ${h.y} A ${h.w / 2} ${h.w / 2.4} 0 0 1 ${h.x + h.w} ${h.y} Z`} fill="#1c2830" />
                <path d={`M${h.x + h.w / 2} ${h.y - 1} V ${h.y - h.w / 2.6} M${h.x + 10} ${h.y - 4} L ${h.x + h.w / 2} ${h.y - 1} L ${h.x + h.w - 10} ${h.y - 4}`} stroke="#fbf6ec" strokeWidth="2" fill="none" />
              </>
            )}
            {/* interior: de noche, o con luz cuando se abre */}
            <rect x={h.x} y={h.y} width={h.w} height={h.h} fill={abierta ? '#f6d58e' : '#1c2830'} style={{ transition: 'fill .45s' }} />
            <Postigos h={h} />
            {h.tipo === 'balcon' && (
              <g>
                <rect x={h.x - 18} y={h.y + h.h - 2} width={h.w + 36} height="7" fill="#fbf6ec" />
                <rect x={h.x - 14} y={h.y + h.h - 38} width={h.w + 28} height="36" fill="none" stroke="#24272c" strokeWidth="2.2" />
                {Array.from({ length: 12 }, (_, i) => (
                  <line key={i} x1={h.x - 14 + ((h.w + 28) / 12) * (i + 0.5)} x2={h.x - 14 + ((h.w + 28) / 12) * (i + 0.5)} y1={h.y + h.h - 38} y2={h.y + h.h - 2} stroke="#24272c" strokeWidth="1.4" />
                ))}
              </g>
            )}
            {h.tipo === 'ventana' && (
              <g>
                {Array.from({ length: 6 }, (_, i) => (
                  <line key={i} x1={h.x + (h.w / 6) * (i + 0.5)} x2={h.x + (h.w / 6) * (i + 0.5)} y1={h.y + h.h * 0.45} y2={h.y + h.h} stroke="#24272c" strokeWidth="1.8" />
                ))}
                <line x1={h.x} x2={h.x + h.w} y1={h.y + h.h * 0.45} y2={h.y + h.h * 0.45} stroke="#24272c" strokeWidth="1.8" />
              </g>
            )}
          </g>
        );
      })}
      <rect x="0" y="388" width="600" height="12" fill="#c9b894" />
    </svg>
  );
}

function PanelVentana({ v }: { v: Ventana }) {
  const f = v.foto ? foto(v.foto) : null;
  return (
    <div key={v.id} className="rounded-2xl bg-cal p-5 text-tinta sm:p-6" aria-live="polite">
      {f && (
        <figure>
          <img src={f.src} width={f.width} height={f.height} loading="lazy" alt={v.alt ?? ''} className="aspect-[3/2] w-full rounded-xl object-cover" />
          {v.pie && <figcaption className="mt-2 text-sm text-gris">{v.pie}</figcaption>}
        </figure>
      )}
      <h3 className={`${f ? 'mt-4' : ''} text-3xl`}>{v.titulo}</h3>
      <p className="mt-2 text-gris">{v.texto}</p>
      {v.datos && (
        <ul className="mt-4 space-y-1.5 text-[0.95rem]">
          {v.datos.map((d) => (
            <li key={d} className="flex gap-2"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-azul" />{d}</li>
          ))}
        </ul>
      )}
      <div className="mt-5 flex flex-wrap gap-3">
        <a href="#reservar" className="btn"><IconoCalendario /> Ver disponibilidad</a>
        <a href={wa(v.mensaje)} target="_blank" rel="noopener" className="btn-linea"><IconoWa /> Preguntar por WhatsApp</a>
      </div>
    </div>
  );
}

function AbreUnaVentana({ elegida, setElegida }: { elegida: string; setElegida: (id: string) => void }) {
  const v = ventanas.find((x) => x.id === elegida) ?? ventanas[0];
  const panel = useRef<HTMLDivElement>(null);
  const elegir = (id: string) => {
    setElegida(id);
    if (window.matchMedia('(max-width: 1023px)').matches) {
      requestAnimationFrame(() => panel.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  };
  return (
    <section id="ventanas" className="bg-noche py-16 text-cal md:py-24" aria-labelledby="ventanas-titulo">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 id="ventanas-titulo" className="text-4xl sm:text-5xl">Abre una ventana</h2>
          <p className="mt-4 text-cal/80">
            Su fachada amarilla con balcones y ventanas azules es la seña del hotel. Toca un balcón, una ventana, la puerta o el portón y mira lo que hay del otro lado.
          </p>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-12">
          <div className="min-w-0">
            <Fachada elegida={v.id} onElegir={elegir} />
            <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Partes del hotel">
              {ventanas.map((x) => (
                <button
                  key={x.id} type="button" onClick={() => elegir(x.id)} aria-pressed={x.id === v.id}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    x.id === v.id ? 'border-amarillo bg-amarillo text-noche' : 'border-cal/30 text-cal hover:border-cal/70'
                  }`}
                >
                  {x.etiqueta}: {x.titulo}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-cal/70">Dibujo ilustrativo de su fachada: el sitio del hotel no dice qué ventana corresponde a cada habitación.</p>
          </div>
          <div ref={panel} className="min-w-0 scroll-mt-24">
            <PanelVentana v={v} />
          </div>
        </div>
      </div>
    </section>
  );
}

function hoyISO(dias = 0) {
  const d = new Date();
  d.setDate(d.getDate() + dias);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
const legible = (iso: string) => iso.split('-').reverse().join('/');

function Reservar({ elegida }: { elegida: string }) {
  const [entrada, setEntrada] = useState('');
  const [salida, setSalida] = useState('');
  const fechasOk = !!entrada && !!salida && salida > entrada;
  const habitacion = ventanas.find((x) => x.id === elegida && (x.id === 'jr-suite' || x.id === 'estandar'));
  const mensaje = [
    habitacion ? `Me interesa una ${habitacion.titulo}.` : 'Quisiera reservar una habitación.',
    fechasOk ? `Llegada: ${legible(entrada)}, salida: ${legible(salida)}.` : '',
    '¿Me pueden dar disponibilidad y tarifa?',
  ].filter(Boolean).join(' ');

  return (
    <section id="reservar" className="bg-amarillo py-16 text-noche md:py-20" aria-labelledby="reservar-titulo">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <h2 id="reservar-titulo" className="text-4xl sm:text-5xl">¡Reserve ahora!</h2>
          <p className="mt-4 max-w-md">
            Elige tus fechas y consulta disponibilidad y precios en el sistema de reservas del hotel, o pregúntales directo por WhatsApp o por teléfono.
          </p>
          <p className="mt-4 text-[0.95rem]">
            Reservaciones: <a href={`tel:+52${negocio.telefono},${negocio.extension}`} className="font-semibold underline underline-offset-4">{negocio.telefonoVisible} ext. {negocio.extension}</a>
          </p>
        </div>
        <form
          className="rounded-2xl bg-cal p-5 shadow-sm sm:p-6"
          onSubmit={(e) => { e.preventDefault(); window.open(reservarUrl(entrada, fechasOk ? salida : undefined), '_blank', 'noopener'); }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold">Llegada</span>
              <input type="date" min={hoyISO()} value={entrada} onChange={(e) => { setEntrada(e.target.value); if (salida && salida <= e.target.value) setSalida(''); }}
                className="mt-1 w-full rounded-lg border border-noche/25 bg-white px-3 py-2.5 text-tinta" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold">Salida</span>
              <input type="date" min={entrada || hoyISO(1)} value={salida} onChange={(e) => setSalida(e.target.value)}
                className="mt-1 w-full rounded-lg border border-noche/25 bg-white px-3 py-2.5 text-tinta" />
            </label>
          </div>
          {entrada && salida && !fechasOk && <p className="mt-3 text-sm text-[#9b2c1f]">La salida tiene que ser después de la llegada.</p>}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button type="submit" className="btn flex-1"><IconoCalendario /> Ver disponibilidad y precios</button>
            <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn-linea flex-1"><IconoWa /> WhatsApp</a>
          </div>
          <p className="mt-3 text-sm text-gris">
            {habitacion ? `El mensaje de WhatsApp pregunta por la ${habitacion.titulo}` : 'El mensaje de WhatsApp pregunta por una habitación'}{fechasOk ? ' con tus fechas.' : '. Si eliges fechas, también las incluye.'}
          </p>
        </form>
      </div>
    </section>
  );
}

function APasos() {
  const f = foto('fachada-tarde');
  return (
    <section id="campeche" className="py-16 md:py-24" aria-labelledby="campeche-titulo">
      <div className="contenedor">
        <h2 id="campeche-titulo" className="max-w-2xl text-4xl sm:text-5xl">A pasos del hotel</h2>
        <p className="mt-4 max-w-2xl text-gris">Estar en el Hotel Plaza Colonial significa tener el corazón de Campeche a tus pies.</p>
        <img
          src={f.src} width={f.width} height={f.height} loading="lazy"
          alt="La esquina del Hotel Plaza Colonial al atardecer: muros amarillos, ventanas azules y balcones de herrería bajo un cielo con nubes"
          className="mt-10 aspect-[16/7] w-full rounded-[1.5rem] object-cover"
        />
        <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
          {actividades.map((a) => (
            <li key={a.titulo} className="border-t border-noche/15 py-6">
              <h3 className="text-2xl">{a.titulo}</h3>
              <p className="mt-2 text-gris">{a.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Huespedes() {
  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="huespedes-titulo">
      <div className="contenedor">
        <h2 id="huespedes-titulo" className="text-4xl sm:text-5xl">Lo que escriben sus huéspedes</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {testimonios.map((t) => (
            <blockquote key={t} className="border-l-4 border-amarillo pl-5 text-[1.02rem] leading-relaxed">“{t}”</blockquote>
          ))}
        </div>
        <p className="mt-8 text-sm text-gris">Comentarios publicados en el sitio del hotel.</p>
      </div>
    </section>
  );
}

function Contacto() {
  const f = foto('detalle');
  return (
    <section id="contacto" className="py-16 md:py-24" aria-labelledby="contacto-titulo">
      <div className="contenedor grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 id="contacto-titulo" className="text-4xl sm:text-5xl">Contacto</h2>
          <dl className="mt-8 space-y-5 text-[1.02rem]">
            <div className="flex gap-3">
              <IconoPin className="mt-1 h-5 w-5 shrink-0 text-azulhondo" />
              <div><dt className="font-semibold">Dirección</dt><dd className="text-gris">{negocio.direccion}</dd></div>
            </div>
            <div className="flex gap-3">
              <IconoTel className="mt-1 h-5 w-5 shrink-0 text-azulhondo" />
              <div>
                <dt className="font-semibold">Teléfonos</dt>
                <dd className="text-gris">
                  <a href={`tel:+52${negocio.telefono},${negocio.extension}`} className="hover:text-azulhondo">{negocio.telefonoVisible} ext. {negocio.extension} (reservaciones)</a>
                  <br />
                  <a href={`tel:+52${negocio.telefono2}`} className="hover:text-azulhondo">{negocio.telefono2Visible}</a>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 shrink-0 text-azulhondo" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
              <div><dt className="font-semibold">Correo</dt><dd><a href={`mailto:${negocio.correo}`} className="break-all text-gris hover:text-azulhondo">{negocio.correo}</a></dd></div>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.mapa} target="_blank" rel="noopener" className="btn-linea"><IconoPin /> Cómo llegar</a>
            <a href={negocio.facebook} target="_blank" rel="noopener" className="btn-linea">Facebook</a>
          </div>
          <h3 className="mt-12 text-2xl">Servicios</h3>
          <ul className="mt-3 grid gap-x-8 gap-y-1.5 text-gris sm:grid-cols-2">
            {servicios.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <figure className="min-w-0">
          <img src={f.src} width={f.width} height={f.height} loading="lazy"
            alt="Detalle de una cama del hotel con cojín y camino bordados con flores de colores y una laptop"
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover lg:aspect-[4/5]" />
        </figure>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <>
      <footer className="bg-noche py-10 pb-24 text-cal/75 lg:pb-10">
        <div className="contenedor flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <Logotipo claro />
          <p>{negocio.direccion}</p>
        </div>
      </footer>
      <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t border-noche/10 bg-cal/95 backdrop-blur lg:hidden" aria-label="Contacto rápido">
        <a href={waGeneral} target="_blank" rel="noopener" className="flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium text-azulhondo"><IconoWa /> WhatsApp</a>
        <a href={`tel:+52${negocio.telefono},${negocio.extension}`} className="flex flex-1 flex-col items-center gap-1 border-x border-noche/10 py-2.5 text-xs font-medium text-azulhondo"><IconoTel /> Llamar</a>
        <a href={negocio.mapa} target="_blank" rel="noopener" className="flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium text-azulhondo"><IconoPin /> Cómo llegar</a>
      </nav>
    </>
  );
}

export default function App() {
  const [elegida, setElegida] = useState(ventanas[0].id);
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <AbreUnaVentana elegida={elegida} setElegida={setElegida} />
        <Reservar elegida={elegida} />
        <APasos />
        <Huespedes />
        <Contacto />
      </main>
      <Pie />
    </>
  );
}
